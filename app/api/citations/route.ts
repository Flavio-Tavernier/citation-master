import { prisma } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        ok: true
        
    })
}

export async function POST(request: NextRequest) {
    const formData = await request.formData();

    const data = {
        citation: formData.get('citation'),
        author: formData.get('author'),
    }

    const newCitation = await prisma.citation.create({
        data: {
            citation: String(formData.get('citation')),
            author: String(formData.get('author')),
        }
    })
    
    return NextResponse.json({
        citation: newCitation,
    })
}