"use server";

import { prisma } from "@/src/lib/prisma";
import { redirect } from "next/navigation";

export async function createCitationAction(citation: {citation: string, author: string}) 
{
   try {
        await prisma.citation.create({
            data: {
                citation: citation.citation,
                author: citation.author,
            }
        }) 
    } catch {
        return {
            error: "Error while creating the citation",
        };
    }
    
    redirect("/admin");
}

export async function deleteCitationAction(id: number) {
    await prisma.citation.delete({
        where: {
            id,
        }
    });

    return ({
        message: "Deleted !"
    })
}

