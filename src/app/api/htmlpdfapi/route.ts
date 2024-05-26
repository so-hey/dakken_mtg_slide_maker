import Marp from "@marp-team/marp-core";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const mdText = data.mdText;

  const marp = new Marp();

  const { html, css } = marp.render(mdText);

  console.log(`${html}<style>${css}</style>`);

  const response = await fetch("https://htmlpdfapi.com/api/v1/pdf", {
    method: "POST",
    headers: {
      Authentication: "Token HgP2roPtBI_-s2onBnTTGy-JbMVSZWua",
    },
    body: JSON.stringify({ html: html }),
  });
  const message = await response.text();
  console.log(message);

  return new NextResponse(JSON.stringify({ message: message }), {
    status: 201,
  });
}
