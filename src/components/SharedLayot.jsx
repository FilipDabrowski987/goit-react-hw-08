import { Navigation } from "./Navigation";

export function SharedLayout ({children}) {
    return (
        <div>
            <Navigation />
            {children}
        </div>
    ) 
}