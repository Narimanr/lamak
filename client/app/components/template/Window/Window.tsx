import Image from 'next/image';
import Link from 'next/link';

import styles from './Window.module.scss';

import { DesignImageMapper } from '@/helper/DesignImageMapper';

// import interface
import { iWindow } from '@/interfaces/Interfaces';


export default function WindowTemplate(props: iWindow) {
    const src = DesignImageMapper(props.partition);

    return (
        <div className={styles.WindowGrid}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.detail}>
                        <span className={styles.header}>
                           جزئیات طرح
                        </span>

                        <div className={styles.rows}>
                            <div className={styles.item}>
                                <span className={styles.itemName}>
                                    عرض پنجره:
                                </span>
                                <span className={styles.itemValue}>
                                    {props.windowW}
                                </span>
                                <span className={styles.itemUnit}>
                                    میلی متر
                                </span>
                            </div>

                            <div className={styles.item}>
                                <span className={styles.itemName}>
                                    ارتفاع پنجره:
                                </span>
                                <span className={styles.itemValue}>
                                    {props.windowH}
                                </span>
                                <span className={styles.itemUnit}>
                                    میلی متر
                                </span>
                            </div>

                            <div className={styles.item}>
                                <span className={styles.itemName}>
                                    تقسیم بندی عرضی:
                                </span>
                                <span className={styles.itemValue}>
                                    {props.partition}
                                </span>
                            </div>

                            <div className={styles.item}>
                                <span className={styles.itemName}>
                                    عرض فریم:
                                </span>
                                <span className={styles.itemValue}>
                                    {props.frameW}
                                </span>
                                <span className={styles.itemUnit}>
                                    میلی متر
                                </span>
                            </div>

                            <div className={styles.item}>
                                <span className={styles.itemName}>
                                    ارتفاع فریم:
                                </span>
                                <span className={styles.itemValue}>
                                    {props.frameH}
                                </span>
                                <span className={styles.itemUnit}>
                                    میلی متر
                                </span>
                            </div>

                            <div className={styles.item}>
                                <span className={styles.itemName}>
                                    اندازه مولین:
                                </span>
                                <span className={styles.itemValue}>
                                    {props.mullion}
                                </span>
                                <span className={styles.itemUnit}>
                                    میلی متر
                                </span>
                            </div>

                            <div className={styles.item}>
                                <span className={styles.itemName}>
                                    عرض سش:
                                </span>
                                <span className={styles.itemValue}>
                                    {props.sashW}
                                </span>
                                <span className={styles.itemUnit}>
                                    میلی متر
                                </span>
                            </div>

                            <div className={styles.item}>
                                <span className={styles.itemName}>
                                    ارتفاع سش:
                                </span>
                                <span className={styles.itemValue}>
                                    {props.sashH}
                                </span>
                                <span className={styles.itemUnit}>
                                    میلی متر
                                </span>
                            </div>

                            <div className={styles.item}>
                                <span className={styles.itemName}>
                                    عرض وادار:
                                </span>
                                <span className={styles.itemValue}>
                                    {props.sillW}
                                </span>
                                <span className={styles.itemUnit}>
                                    میلی متر
                                </span>
                            </div>

                            <div className={styles.item}>
                                <span className={styles.itemName}>
                                    ارتفاع وادار:
                                </span>
                                <span className={styles.itemValue}>
                                    {props.sillH}
                                </span>
                                <span className={styles.itemUnit}>
                                    میلی متر
                                </span>
                            </div>

                            <div className={styles.item}>
                                <span className={styles.itemName}>
                                    عرض شیشه:
                                </span>
                                <span className={styles.itemValue}>
                                    {props.glassW}
                                </span>
                                <span className={styles.itemUnit}>
                                    میلی متر
                                </span>
                            </div>

                            <div className={styles.item}>
                                <span className={styles.itemName}>
                                    ارتفاع شیشه:
                                </span>
                                <span className={styles.itemValue}>
                                    {props.glassH}
                                </span>
                                <span className={styles.itemUnit}>
                                    میلی متر
                                </span>
                            </div>
                        </div>

                        

                    </div>
                  
                    <div className={styles.image}>
                        <div className={styles.imageContainer}>
                            <Image src={src} alt="Window image" layout="fill" objectFit="contain" priority={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}