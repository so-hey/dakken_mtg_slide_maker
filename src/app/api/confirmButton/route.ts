import { Marp } from "@marp-team/marp-core";
import { NextRequest, NextResponse } from "next/server";

async function fetchIlovepdf() {
  const response1 = await fetch("https://api.ilovepdf.com/v1/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      public_key:
        "project_public_ead9b6812ca4b9d7f6e7ba1e3c45ea52_DSBVXe0be000dddc3eb6ee0177f68ff4fa558",
      secret_key:
        "secret_key_23cfb324bdd8e4732b1832eaaf58848d_1KD7M2ef0055aa4e0b34fde6a6221d7d5c48d",
    }),
  });
  const data = await response1.json();

  const token = data.token;
  const response2 = await fetch("https://api.ilovepdf.com/v1/start/htmlpdf", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const data2 = await response2.json();

  const server = data2.server;
  const task = data2.task;

  return { token, server, task };
}

async function convertMarp(mdText: string) {
  const marp = new Marp();

  const { html } = marp.render(mdText);

  const blob = new Blob([html], { type: "text/plain" });

  const file = new File([blob], "new.txt", { type: "text/plain" });

  return file;
}

export async function POST(req: NextRequest) {
  const requestData = await req.json();
  const mdText = requestData.mdText;

  const [htmlFile, ilovepdfResponse] = await Promise.all([
    convertMarp(mdText),
    await fetchIlovepdf(),
  ]);

  const { token, server, task } = ilovepdfResponse;

  let formData = new FormData();
  formData.append("task", task);
  formData.append("file", htmlFile, "new.txt");

  let response = await fetch(`https://${server}/v1/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const errMessage = await response.text();
    console.log(errMessage);
  }

  const data = await response.json();
  const serverFileName = data.server_filename;
  console.log(serverFileName);

  response = await fetch(`https://${server}/v1/process`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      task: task,
      tool: "htmlpdf",
      files: [{ server_filename: serverFileName, filename: "new.pdf" }],
    }),
  });
  console.log(await response.text());
}
