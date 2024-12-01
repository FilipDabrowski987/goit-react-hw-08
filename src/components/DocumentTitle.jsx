import { Helmet } from 'react-helmet-async';

export function DocumentTitle ({children}) {
    return (
        <Helmet>
            <title>{children}</title>
        </Helmet>
    ) 
}