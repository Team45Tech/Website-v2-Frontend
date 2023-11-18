// Register Page

import React from 'react'
import Head from 'next/head';

import Header from '../app/components/Header'
import Register from '../app/components/RegisterPage/Register'


const Page: React.FC = () => {
    return (
        
        <div>
            <Head>
                <title>UACISD - Sign up</title>
            </Head>
            
            <Header/>
            <Register />
        </div>
    );
}

export default Page;