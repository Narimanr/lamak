import type { NextPage } from 'next';
import Head from 'next/head';

// import fetch from api helper
import { useFetchDesigns } from '@/helper/ApiMiddleware';

// import layout
import DesignsTemplate from '@/template/Designs/Designs';

const DesignsPage: NextPage = () => {
    const fetchedDesigns = useFetchDesigns();

    return (
        <>
            <Head>
            <title>لمک - طراحی‌ها</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            </Head>

            {fetchedDesigns && (
                <DesignsTemplate items={fetchedDesigns} />
            )}
        </>
    )
}

export default DesignsPage
