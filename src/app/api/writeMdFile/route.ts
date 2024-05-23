import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const pdfText = data.pdfText;

  const filePath = path.join(process.cwd(), "tmp/new.md");

  try {
    fs.writeFileSync(filePath, pdfText);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "file write error" }, { status: 500 });
  }

  return NextResponse.json(
    { message: "complete write md file" },
    { status: 200 }
  );
}
