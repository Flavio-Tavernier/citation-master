import { DeleteCitationButton } from "@/app/admin/delete-citation-button";
import { buttonVariants } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { prisma } from "@/src/lib/prisma";
import { Link } from "lucide-react";

export default async function Page(props: {
    params: Promise <{citationId: string;}>
    searchParams: Promise <Record<string, string | string []>>;
}) {
    const params = await props.params;
    const citationId = params.citationId;

    const citation = await prisma.citation.findFirst({
        where: {
            id: Number(citationId),
        }
    })

    if (!citation) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>
                        The citation {citationId} does not exist :/
                    </CardTitle>
                </CardHeader>
            </Card>
        )
    }

    return (
        <div className="min-h-full flex items-center justify-center">
            <Card className="p-4 flex flex-row justify-between" key={citation.id}>
                <div>
                    <p className="italic text-lg text-gray-700 mb-2">&ldquo;{citation.citation}&rdquo;</p>
                    <p className="text-sm text-gray-500 mt-2">— {citation.author}</p>
                </div>
            </Card>
        </div>
    );
}