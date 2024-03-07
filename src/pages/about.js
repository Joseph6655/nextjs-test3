import React from 'react';
import Head from 'next/head'
import Banner from '@/comps/Banner'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import SectionImage from '@/comps/SectionImage'
import Form from '@/comps/Form'

const AboutPage = () => {
  return (
    <div>
    <Navbar/>
    <Head>
      <title>About page</title>
     
    </Head>
    <Banner imageSource="/about.png"  cardContent="Welcome to About page"/>
    <Form/>
    <SectionImage/>
    <Footer/>
   
   </div>
  );
};

export default AboutPage;