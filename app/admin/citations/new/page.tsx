import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";

export default function Page() {
    return (
        <Card className="p-4">
            <CardHeader>
                <CardTitle>
                    Create citation
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form action="/api/citations"  method="post" className="flex flex-col">
                    <Label className="mb-2">Citation</Label>
                    <Input className="mb-4" name="citation" />

                    <Label className="mb-2">Author</Label>
                    <Input name="author" />

                    <Button type="submit" className="mt-6">Submit</Button>
                </form>
            </CardContent>
        </Card>
        
    )
}