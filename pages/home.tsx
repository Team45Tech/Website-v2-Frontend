// Home Page


import React from 'react'
import Head from 'next/head';


// COMPONENET PAGE IMPORTING 
import Header from '../app/components/Header'

import Hero from '../app/components/HomePage/Hero'
// import Hero from '../app/components/Home/Hero/Hero'
// import Event from '../app/components/Home/Event/Event'
// import About from '../app/components/Home/About/about'


const Page = () => {
    return (
        <div>
            <Head>
                <title>UACISD - 中国留学生发展协会</title>
            </Head>
            
            <Header/>

            {/* Components in page*/}
            <Hero/>

        </div>
    )
}

export default Page