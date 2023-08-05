import fs from "fs/promises"
import path from "path"
import { NextResponse } from "next/server";

export async function GET() {
    const rootDir = path.join(process.cwd(), 'src/app')
    const file = await fs.readFile(rootDir + "/home/api/resume.json", "utf-8")
    const data = JSON.parse(file)
    return NextResponse.json(data); 
}
