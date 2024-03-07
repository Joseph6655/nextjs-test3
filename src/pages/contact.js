import React from 'react';
import Head from 'next/head'
import Banner from '@/comps/Banner'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import SectionImage from '@/comps/SectionImage'
import Form from '@/comps/Form'

const ContactPage = () => {
  return (
    <div>
    <Navbar/>
    <Head>
      <title> Contact page</title>
    </Head>
    <Banner imageSource="/contact.png"  cardContent="Welcome to Contact page" textColor="text-black-500" />
    <Form/>
    <SectionImage/>
    <Footer/>
   </div>
  );
};

export default ContactPage;