import { buttonVariants } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import Link from "next/link";

export default async function Page() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    URL : /admin
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <Link href={"/admin/citations/1"} className={buttonVariants({size: "lg", variant: "outline"})}>Citation 1</Link>

                <Link href={"/admin/citations/flavio"} className={buttonVariants({size: "lg", variant: "outline"})}>Citation Flavio</Link>

                <Link href={"/admin/citations/fraise"} className={buttonVariants({size: "lg", variant: "outline"})}>Citation fraise</Link>
            </CardContent>
        </Card>
    )
}