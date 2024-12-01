import { DocumentTitle } from "../components/DocumentTitle"
import WelcomeMessage from "../components/WelcomeMessage"

export default function HomePage() {
    return (
        <div>
            <DocumentTitle>Home</DocumentTitle>
            <WelcomeMessage/>
        </div>
    ) 
}