import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import dotenv from "dotenv";
import ILovePDFApi from "@ilovepdf/ilovepdf-nodejs";
import ILovePDFFile from "@ilovepdf/ilovepdf-js-core/utils/ILovePDFFile";
import Marp from "@marp-team/marp-core";
import path from "path";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const mdText = data.mdText;

  const marp = new Marp();

  const { html } = marp.render(mdText);

  try {
    fs.writeFileSync(path.join(process.cwd(), "tmp", "new.txt"), html);
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: `1: ${error}` }), {
      status: 501,
      headers: {
        "Content-Type": "application/pdf",
      },
    });
  }

  // dotenv.config();

  // const instance = new ILovePDFApi(
  //   process.env.PUBLIC_KEY!,
  //   process.env.SECRET_KEY!
  // );
  const instance = new ILovePDFApi(
    "project_public_ead9b6812ca4b9d7f6e7ba1e3c45ea52_DSBVXe0be000dddc3eb6ee0177f68ff4fa558",
    "secret_key_23cfb324bdd8e4732b1832eaaf58848d_1KD7M2ef0055aa4e0b34fde6a6221d7d5c48d"
  );

  let task = instance.newTask("htmlpdf");

  let message = "";

  console.log("1");
  task = await task.start();
  console.log("2");
  const file = new ILovePDFFile(path.join(process.cwd(), "tmp", "new.txt"));
  console.log("3");
  task = await task.addFile(file);
  console.log("4");
  task = await task.process();
  console.log("5");
  const downloadData = await task.download();
  console.log("6");
  fs.writeFileSync(path.join(process.cwd(), "tmp", "new.pdf"), downloadData);
  console.log("7");

  try {
    const pdfBuffer = fs.readFileSync(
      path.join(process.cwd(), "tmp", "new.pdf")
    );
    return new NextResponse(pdfBuffer, {
      status: 201,
      headers: {
        "Content-Type": "application/pdf",
      },
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: message, error: `3: ${error}` }),
      {
        status: 501,
        headers: {
          "Content-Type": "application/pdf",
        },
      }
    );
  }
}
