import { Card, CardHeader, CardTitle } from "@/src/components/ui/card";
import { log } from "console";

export default async function Page(props: {
    params: Promise <{
        citationId: string;
    }>
    searchParams: Promise <Record<string, string | string []>>;
}) {
    const params = await props.params;
    const searchParams = await props.searchParams;

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {JSON.stringify(params)}
                    {JSON.stringify(searchParams)}
                </CardTitle>
            </CardHeader>
        </Card>
    )
}