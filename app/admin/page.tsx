import { buttonVariants } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { prisma } from "@/src/lib/prisma";
import { Car } from "lucide-react";
import Link from "next/link";
import { DeleteCitationButton } from "./delete-citation-button";

export default async function Page() {
    const citations = await prisma.citation.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-bold uppercase text-2xl">
                    Citations
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <Link href={"/admin/citations/new"} className={buttonVariants({size: "lg", variant: "outline"})}>Create citation</Link>
                
                { citations.map(citation => (
                    <Card className="p-4 flex flex-row justify-between" key={citation.id}>
                        <div className="">
                            <p className="italic text-lg text-gray-700 mb-2">&ldquo;{citation.citation}&rdquo;</p>
                            <p className="text-sm text-gray-500 mt-2">— {citation.author}</p>
                        </div>

                        <DeleteCitationButton id={citation.id}/>
                    </Card>
                ))}
            </CardContent>
        </Card>
    )
}