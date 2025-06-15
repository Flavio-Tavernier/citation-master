import { prisma } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        ok: true
        
    })
}

export async function POST(request: NextRequest) {
    const json = await request.json();

    const newCitation = await prisma.citation.create({
        data: {
            citation: json.citation,
            author: json.author,
        }
    })
    
    return NextResponse.json({
        citation: newCitation,
    })
}