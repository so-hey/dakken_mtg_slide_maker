import { execa } from "execa";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import os from "os";
import path from "path";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const mdText = data.mdText;

  const tmpdir = os.tmpdir();
  fs.writeFileSync(path.join(tmpdir, "new.md"), mdText);
  const mdFile = fs.readFileSync(path.join(tmpdir, "new.md"));
  console.log(mdFile);

  try {
    await execa("npm", ["run", "pdf"], { timeout: 5000 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error }), {
      status: 501,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const pdfBuffer = fs.readFileSync(path.join(tmpdir, "new.pdf"));
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error }), {
      status: 501,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return new NextResponse(JSON.stringify({ message: "convert to pdf" }), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
