import  { NextPage } from 'next';
import Head from 'next/head';

import Login from '@/template/Login/Login';

const LoginPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>لمک - ورود به حساب کاربری</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Login />
        </>
    )
};

export default LoginPage



 