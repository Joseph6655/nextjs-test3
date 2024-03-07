import React from 'react';
import Head from 'next/head'
import Banner from '@/comps/Banner'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import SectionImage from '@/comps/SectionImage'

const AboutPage = () => {
  return (
    <div>
      <Navbar/>
      <Head>
      <title>About page</title>
      </Head>
      <Banner imageSource="/about.png"   cardContent="Welcome to About page " textColor="text-blue-500"/>
      <SectionImage/>
      <Footer/>
    </div>
  );
};

export default AboutPage;