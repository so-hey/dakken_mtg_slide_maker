import fs from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const pdfText = data.pdfText;

  try {
    fs.writeFileSync("./public/files/new.md", pdfText);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "file write error" }, { status: 500 });
  }

  return NextResponse.json(
    { message: "complete write md file" },
    { status: 200 }
  );
}
