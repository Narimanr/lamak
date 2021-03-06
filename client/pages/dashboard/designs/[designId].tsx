import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

// import fetch from api helper
import { useFetchSingleDesign } from '@/helper/ApiMiddleware';

// import layout
import WindowTemplate from '@/components/template/Window/Window';

const DesignPage: NextPage = () => {
    const router = useRouter();
    const { designId } = router.query;
    const id = designId;
    
    const data  = useFetchSingleDesign(id as string);

    
    return (
        <>
            <Head>
            <title>لمک - یک طراحی</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            </Head>

            {data && (
                <WindowTemplate {...data} /> 
            )}
        </>
    )
}

export default DesignPage

