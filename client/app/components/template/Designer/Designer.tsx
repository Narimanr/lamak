import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { usePostDesignMutation } from '@/redux/features/Api/LamakApiSlice';

import styles from './Designer.module.scss';

// import interface
import { iDesign } from '@/interfaces/Interfaces';

// import desinger form
import DesignerForm from '@/components/element/Form/DesignerForm/DesignerForm';


export default function Login() {
    const router = useRouter()
    const [error, setError] = useState('');
    const [submit] = usePostDesignMutation();

    const formData = async (data: iDesign) => {
        try {
            setError('');
            const payload = {
                windowW: data.windowW,
                windowH: data.windowH,
                partition: parseInt(data.partition.toString())
            }
            console.log('sending: ', payload);
            const response = await submit(payload).unwrap();
            if (response) {
                router.push('/dashboard/designs');
            }
         }
        catch (err: any) {
            setError('خطایی رخ داد');
            console.log(err);
        }
        
    };
    
    return (
        <div className={styles.DesignerGrid}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.form}>
                        <div className={styles.message}>
                            <span className={styles.header}>طراحی پنجره جدید</span>
                            <span className={styles.help}>با تکمیل فرم زیر طراحی جدید ثبت کنید</span>
                        </div>

                        <div className={styles.formWrapper}>
                            <DesignerForm pullData={formData} requestError={error} />
                        </div>

                    </div>
                  
                    <div className={styles.image}>
                        <div className={styles.imageContainer}>
                            <Image src="/images/actions/design.png" alt="Authenticate image" layout="fill" objectFit="contain" priority={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}