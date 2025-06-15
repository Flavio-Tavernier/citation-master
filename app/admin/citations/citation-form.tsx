"use client";

import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { createCitationAction } from "./citation.action";

export default function Page() {
    const [isLoading, setIsloading] = useState(false);

    const createCitation = async (FormData: FormData) => {
        const json = await createCitationAction({
            citation: String(FormData.get("citation")),
            author: String(FormData.get("author")),
        });

        if (json.error) {
            alert(json.error);
        }
    }

    return (
        <Card className="p-4">
            <CardHeader>
                <CardTitle>
                    Create citation
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form action={async (formData) => { await createCitation(formData);}} className="flex flex-col">
                    <Label className="mb-2">Citation</Label>
                    <Input className="mb-4" name="citation" />

                    <Label className="mb-2">Author</Label>
                    <Input name="author" />

                     <SubmitButton />
                </form>
            </CardContent>
        </Card> 
    )
}

const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <Button disabled={pending} type="submit" className="mt-6">
            {pending ? "Loading ..." : "submit"}
        </Button>
    )
}