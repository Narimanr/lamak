import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useLoginMutation } from '@/redux/services/auth';
import { setCredentials } from '@/redux/features/Auth/AuthSlice';

import styles from './Login.module.scss';

// import TwoFactor from '@/element/Form/Login/TwoFactor/TwoFactor';
import WithPassword, {FormData} from '@/components/element/Form/Login/WithPassword/WithPassword';


export default function Login() {
    const router = useRouter()
    const dispatch = useDispatch();
    const [login] = useLoginMutation();
    const [error, setError] = useState('');
    

    const formData = async (data: FormData) => {
        try {
            setError('');
            // do the login here
            const response = await login(data).unwrap();
            const payload = response;
            console.log('payload: ', payload);
            dispatch(setCredentials(payload));

            router.push('/dashboard');
         }
        catch (err: any) {
            if (err.status === 400) {
                setError('نام کاربری و یا رمز عبور اشتباه است');
            } else {
                setError('خطایی رخ داد');
            }
            console.log(err);
        }
        
    };
    
    return (
        <div className={styles.AuthGrid}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.auth}>
                        <div className={styles.message}>
                            <span className={styles.header}>سلام مجدد!</span>
                            <span className={styles.welcome}>خوش بازگشتید، دلتنگ شما بودیم!</span>
                        </div>

                        <div className={styles.formWrapper}>
                            <WithPassword pullData={formData} requestError={error} />
                        </div>

                          <div className={styles.other}>
                                <span className={styles.overlay}>و یا از طریق</span>
                                <div className={styles.OAuth}>
                                    <div className={styles.logoButton}>
                                        <div className={styles.icon}>
                                          <Image src="/svg/apple-icon.svg" alt="Continue with apple Logo" width={25} height={25} objectFit="contain" />
                                        </div>
                                    </div>
                                    <div className={styles.logoButton}>
                                        <div className={styles.icon}>
                                          <Image src="/svg/google-icon.svg" alt="Continue with google Logo" width={25} height={25} objectFit="contain" />
                                        </div>
                                    </div>
                                    <div className={styles.logoButton}>
                                        <div className={styles.icon}>
                                          <Image src="/svg/facebook-icon.svg" alt="Continue with facebook Logo" width={25} height={25} objectFit="contain" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                  
                    <div className={styles.image}>
                        <div className={styles.imageContainer}>
                            <Image src="/images/auth.png" alt="Authenticate image" layout="fill" objectFit="contain" priority={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}