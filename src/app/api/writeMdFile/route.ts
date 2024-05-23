import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const pdfText = data.pdfText;

  const filePath = path.join("/tmp", "new.md");
  const dirPath = path.dirname(filePath);

  if (!fs.existsSync(dirPath)) {
    return NextResponse.json(
      { message: `${dirPath} not found` },
      { status: 500 }
    );
  }

  try {
    fs.writeFileSync(filePath, pdfText);
  } catch (error) {
    return NextResponse.json(
      { error: `file not found in ${filePath}` },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "complete write md file" },
    { status: 200 }
  );
}
