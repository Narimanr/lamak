import Image from 'next/image';
import Link from 'next/link';

// import interface
import { iWindow } from '@/interfaces/Interfaces';


import Cell from '@/element/Table/Cell';

interface PageProps {
    items: iWindow[];
}

import styles from './Designs.module.scss';

export default function DesignsTemplate(props: PageProps) {
    return (
        <div className={styles.DesignsGrid}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.table}>
                        <div className={styles.message}>
                            <span className={styles.header}>طرح‌های ساخته شده</span>
                        </div>

                        <table className={styles.tableWrapper}>
                            <tbody>
                                {props.items.map( (item, index) => {
                                    return (
                                       <Cell key={item.id} index={index} {...item} />
                                   )
                               })}
                            </tbody>
                        </table>

                    </div>
                  
                    <div className={styles.image}>
                        <div className={styles.imageContainer}>
                            <Image src="/images/actions/create.png" alt="Authenticate image" layout="fill" objectFit="contain" priority={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}