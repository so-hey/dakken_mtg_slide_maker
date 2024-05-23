import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
  const filePath = path.join(process.cwd(), "tmp/new.pdf");

  try {
    const fileBuffer = await fs.readFileSync(filePath);
    const response = new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
      },
    });
    return response;
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "PDF file not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
