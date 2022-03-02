import React, { ReactNode } from 'react';
import Navbar, { NavProps } from '@/components/layout/Navbar/Navbar';

import styles from './Layout.module.scss';

type Props = {
    children: ReactNode;
}


export default function Layout({ children }: Props) {
        
    return (
        <div className={styles.Layout}>
        <Navbar />
            <main className={styles.Main}>{children}</main>
        </div>
    );
}