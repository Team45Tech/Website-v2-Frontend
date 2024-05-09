// Login Page

import React from 'react'
import Head from 'next/head';

import Header from '../app/components/Header'
import Login from '../app/components/LoginPage/Login'


const Page: React.FC = () => {
    return (
        
        <div>
            <Head>
                <title>UACISD - Login</title>
            </Head>
            
            <Header/>
            <Login/>
            
        </div>
    );
}

export default Page;