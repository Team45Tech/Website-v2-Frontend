// Volunteer Page

import React from 'react'
import Head from 'next/head';


// COMPONENET PAGE IMPORTING 
import Header from '../app/components/Header'
import Volunteer from '../app/components/VolunteerPage/Volunteer'



const Page = () => {
    return (
        <div>
            <Head>
                <title>UACISD - 志愿者报名</title>
            </Head>
            
            <Header/>

            {/* Components in page*/}
            <Volunteer/>

        </div>
    )
}

export default Page