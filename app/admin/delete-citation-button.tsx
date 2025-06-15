"use client";

import { Button } from "@/src/components/ui/button";
import { useState } from "react";
import { deleteCitationAction } from "./citations/citation.action";
import { useRouter } from "next/navigation";

export function DeleteCitationButton(props: {id: number}) {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const router = useRouter();

    const onDelete = async () => {
        const result = await deleteCitationAction(props.id);

        if (result) {
            router.refresh();
        }
    }

    return <Button 
            onClick={() => { isConfirmed ? onDelete() : setIsConfirmed(true)}} 
            variant={isConfirmed ? "destructive" : "outline"}
            >
                X
            </Button>
}