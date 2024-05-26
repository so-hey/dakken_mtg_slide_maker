import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { execa } from "execa";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const mdText = data.mdText;

  fs.writeFileSync("/tmp/new.md", mdText);

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
      { status: 501 }
    );
  }

  return NextResponse.json(
    { message: "complete to convert to pdf file" },
    { status: 200 }
  );
}
