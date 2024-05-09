// Contact Page

import React from 'react'
import Head from 'next/head';

// COMPONENET PAGE IMPORTING 
import Header from '../app/components/Header'
import Contact from '../app/components/ContactPage/Contact'

const Page = () => {
    return (
        <div>
            <Head>
                <title>UACISD - 中国留学生发展协会</title>
            </Head>
            
            <Header/>

            {/* Components in page*/}
            <Contact/>

        </div>
    )
}

export default Page