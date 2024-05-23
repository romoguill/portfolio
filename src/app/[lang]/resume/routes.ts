import fs from 'fs';
import { NextRequest } from 'next/server';
import path from 'path';

export async function GET(req: NextRequest) {
  const filePath = path.resolve('.', 'public/en', 'cv-en.pdf');
  const stat = fs.statSync(filePath);

  return new Response(fs.createReadStream(filePath), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="cv-en.pdf"',
      'Content-Length': stat.size.toString(),
    },
  });
}
