"use client";

import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { createCitationAction, updateCitationAction } from "./citation.action";
import { Citation } from "@prisma/client";

export function CitationForm(props: {citation?: Citation}) {
    const [isLoading, setIsloading] = useState(false);

    const onSubmit = async (FormData: FormData) => {
        let error: null | string = null; 
        if (props.citation) {
            const json = await updateCitationAction( 
                props.citation.id, 
                {
                    citation: String(FormData.get("citation")),
                    author: String(FormData.get("author")),
                }
                );
        } else {
            const json = await createCitationAction({
                citation: String(FormData.get("citation")),
                author: String(FormData.get("author")),
            });
            error = json.error;
        }

        if (error) {
            alert(error);
        }
    }

    return (
        <Card className="p-4">
            <CardHeader>
                <CardTitle>
                    {props.citation ? "Update" : "Create"} citation
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form 
                    action={async (formData) => { await onSubmit(formData);}} 
                    className="flex flex-col">

                    <Label className="mb-2">Citation</Label>
                    <Input className="mb-4" name="citation" defaultValue={props.citation?.citation} />

                    <Label className="mb-2">Author</Label>
                    <Input name="author" defaultValue={props.citation?.author}/>

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