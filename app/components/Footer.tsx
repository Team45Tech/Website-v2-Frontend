'use client'

import React from 'react';
import Link from 'next/link';
import '../styles/footer.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWeixin, faWeibo} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className='footer-col'>
                            <Link href="/">
                                <img className='cs-img' src="CISD_logo_sq.png" alt="CISD-logo" />
                            </Link>
                    </div>

                    <div className="footer-col">
                        <ul>
                            <h4>联系我们</h4>
                            <li><a href="#">Email: uacisdforever@gmail.com</a></li>
                            <li><a href="#">WeChat: UACISDforever</a></li>              
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4> 关注我们</h4>
                        <div className="social-links">
                            <a href="https://www.instagram.com/uacisd/"><FontAwesomeIcon icon={faInstagram} /></a>
                            {/* <a href="/"><FontAwesomeIcon icon={faWeixin} /></a> */}
                            <a href="https://weibo.com/u/7832413825"><FontAwesomeIcon icon={faWeibo} /></a>

                        </div>
                    </div>

                    <div className='footer-col'>
                        <p className='copyright'>&copy; 2023 By Team56Tech.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}