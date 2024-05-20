import fs from "fs-extra";
import { NextRequest, NextResponse } from "next/server";
import { execa } from "execa";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const pdfText = data.pdfText;

  try {
    fs.writeFile("./public/files/new.md", pdfText);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "file write error" }, { status: 500 });
  }

  console.log("start pdf convert");

  try {
    const { stdout } = await execa(
      "marp",
      [
        "--theme",
        "./public/files/css/dakken_style.css",
        "--html",
        "--pdf",
        "./public/files/new.md",
        "-o",
        "./public/files/new.pdf",
      ],
      {
        timeout: 2000,
      }
    );
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json({ message: "end of pdf convert" }, { status: 200 });
}
