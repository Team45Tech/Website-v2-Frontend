// _app.tsx
// Do not touch this file!!!!!!!!!!!

import '../app/styles/globals.css';
import Layout from '../app/components/layout';
import type { AppProps } from 'next/app';  // Import AppProps here


 

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
        
    );
}

export default MyApp;