// Register Page

import React from 'react'
import Head from 'next/head';

import Header from '../app/components/Header'
import TicketPage from '@/app/components/TicketPage/ticket';

const Page: React.FC = () => {
    return (
        
        <div>
            <Head>
                <title>UACISD - TicketOrdering</title>
            </Head>
            

            <TicketPage />
        </div>
    );
}

export default Page;