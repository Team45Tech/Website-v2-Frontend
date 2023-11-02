// Home components

import React, { useRef } from 'react';
import './hero.css'

export default function Hero() {
    return (
        <div className='Hero'>
            <div className='hero_container'>
                <div className='text_container'>
                    <div className='text_name_en'>UA CISD</div> 
                    <div className='text_name_ch'>中国留学生发展协会 </div>
                    <div className='text_about_paragraph'>致力于引领华人学生群体提供参与活动、
                    提高学术水平、提升职场竞争力、寻找就业机会，将学生群体引往学业上的辉煌、
                    事业上的成功，促进自我完善与融入社会。</div>
                </div>

                <div className='image_carousel_container'>

                </div>
            </div>
        </div>
    )
}