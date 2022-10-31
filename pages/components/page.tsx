import Head from 'next/head';
import React from 'react';
import NavBar from './nav-bar';
import Social from './social';

type PageProps = {
  title: string;
  children: React.ReactNode;
}

function Page({title, children}: PageProps) {
  return <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=DM+Serif+Display:ital@0;1&family=DM+Serif+Text:ital@0;1&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
      <link rel="stylesheet" href="https://unpkg.com/@coreui/icons/css/brand.min.css" />
    </Head>
    <div className="App">
      <NavBar />
      <Social />
      {children}
    </div>
  </>;
}

export default Page;