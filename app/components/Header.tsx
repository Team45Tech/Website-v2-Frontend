// Header.tsx

import React, { useRef } from 'react';
import '../styles/header.css'

export default function Header() {

    return (

        <header className="Header">
        
            <div className='CISD_LOGO'>
                <a href='/home'>
                    <img src="/CISD_logo_trans.jpg" alt="CISD" className='CISD_LOGO_img' />
                </a>
            </div>  
            
            
                
            <nav className="Navigation">
                <ul>

                    <li><a href="/home">主页</a></li>
                    <li className="dropdown">
                        <a href="#">活动资讯</a>
                        <ul className="dropdown-menu">
                            <li><a href="https://mp.weixin.qq.com/s/g6ux9EAWgh6Qyc6_ZC-aQw">活动前瞻</a></li>
                            <li><a href="/event_review">活动回顾</a></li>
                            <li><a href="#">志愿者报名</a></li>
                        </ul>
                    </li>
                    
                    <li className="dropdown">
                        <a href="#">部门简介</a>
                        <ul className="dropdown-menu">
                            <li><a href="#">活动部</a></li>
                            <li><a href="#">宣传部</a></li>
                            <li><a href="#">秘书部</a></li>
                            <li><a href="#">自媒体部</a></li>
                            <li><a href="#">志愿者部</a></li>
                        </ul>
                    </li>
                    <li><a href="#">联系我们</a></li>
                    <li><a href="/login">会员登入</a></li>
                </ul>
                
            </nav>
        
        </header>



    )
}