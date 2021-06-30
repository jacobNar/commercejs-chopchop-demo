import React from 'react'
import Head from "next/head";
import Header from '../components/Header';
import Link from 'next/link';

function ErrorPage() {
    return (
        <>
        <Head>
          <title>CaravanOutletVest</title>
        </Head>
        <Header />
        <div className="md:min-h-screen md:flex md:items-center">
          <div>
            <div className="md:max-h-screen flex items-end justify-between md:sticky md:top-0">
                <h1 className="text-lg md:text-l lg:text-2xl">Vi kunne ikke finne hva du leter etter</h1>

            </div>
            <Link href="index" className="text-lg md:text-l lg:text-2xl">Tilbake til hjemmesiden</Link>
          </div>
        </div>
      </>
    )
}

export default ErrorPage
