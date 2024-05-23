import { NextResponse } from "next/server";
import { execa } from "execa";
import path from "path";

export async function GET() {
  const cwdPath = process.cwd();
  try {
    await execa(
      "marp",
      [
        "--html",
        "--pdf",
        path.join(cwdPath, "tmp", "new.md"),
        "-o",
        path.join(cwdPath, "tmp", "new.pdf"),
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
