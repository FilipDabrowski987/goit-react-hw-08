import { Navigation } from "./Navigation";
import { Suspense } from "react";

export function SharedLayout ({children}) {
    return (
        <div>
            <Navigation />
            <Suspense fallback={<p>Loading...</p>}>{children}</Suspense> 
        </div>
    ) 
}