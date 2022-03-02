/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';



import styles from './Navbar.module.scss';

export interface NavProps {

}


export default function Navbar(props: NavProps) {
    const [open, setOpen] = useState(false);
    var menuClass = '';
 


    if (open) {
         menuClass = styles.active;
    } 


    const Links = (
        <ul>
            <li className={styles.active}>
                <Link href="/">
                    خانه
                </Link>
            </li>
        </ul>
    );


    const LogoElement = (
        <div className={styles.logo}>
            <Link href="/">
                <a href="/">
                    <Image
                    src="/images/logo.png"
                    alt="لوگو لمک"
                    width={50}
                    height={50}
                    objectFit="contain" />
                </a>
            </Link>
        </div>
    );



    return (
        <nav className={styles.nav}>
            <div className={styles.mobileDisplay}>
                <div className={styles.row}>
                    <div className={styles.dropDown}>
                            <div className={styles.dropDownIcon}>
                                <input className={styles.dropDownButton} type="checkbox" onClick={() => setOpen(!open)} />
                                <div>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                    </div>
                    
                    <div className={styles.logo}>
                        {LogoElement}
                     </div>
                    

                </div>
                <div className={`${styles.links} ${menuClass}`}>
                    {Links}
                </div>
            </div>
            
            <div className={styles.desktopDisplay}>
                <div className={styles.logo}>
                        {LogoElement}
                     </div>

                <div className={`${styles.links} ${menuClass}`}>
                    {Links}
                </div>
                
            </div>
        </nav>
    );
}