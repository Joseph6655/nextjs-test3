import React from 'react';
import Head from 'next/head';
import Banner from '@/comps/Banner';
import Navbar from '@/comps/Navbar';
import Footer from '@/comps/Footer';
import SectionImage from '@/comps/SectionImage';
import Form from '@/comps/Form';

const ContactPage = () => {
  const imagesData = [
    { imageSource: '/contactus1.jpg' , cardContent: 'You have within you, right now, everything you need to deal with whatever.' },
    { imageSource: '/contact3.png' , cardContent: 'we have lost contact with reality the simplicity of life.' }
   

  ];

  return (
    <div>
      <Navbar/>
      <Head>
        <title>Contact page</title>
      </Head>
      <Banner imageSource="/contact.png" cardContent="Welcome to Contact page" />
      <Form/>
      <div className="grid grid-cols-1 ml-20 mr-20 md:grid-cols-2 gap-0 md:w-1/2 justify-center md: " style={{margin: '0 auto'}}>
  {imagesData.map((data, index) => (
    <SectionImage key={index} imageSource={data.imageSource} cardContent={data.cardContent} className="w-full max-w-sm mx-auto" />
  ))}
</div>
      
      <Footer/>
    </div>
  );
};

export default ContactPage;