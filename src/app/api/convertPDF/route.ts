import { NextResponse } from "next/server";
import { execa } from "execa";

export async function GET() {
  try {
    await execa(
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
        timeout: 500,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "failed to convert to pdf file" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "complete to convert to pdf file" },
    { status: 200 }
  );
}
