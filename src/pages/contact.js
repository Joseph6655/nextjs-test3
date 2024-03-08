import React from 'react';
import Head from 'next/head';
import Banner from '@/comps/Banner';
import Navbar from '@/comps/Navbar';
import Footer from '@/comps/Footer';
import SectionImage from '@/comps/SectionImage';
import Form from '@/comps/Form';

const ContactPage = () => {
  const imagesData = [
    { imageSource: '/contactus1.jpg' , cardContent: 'You have within you, right now, everything you need to deal with whatever the world can throw at you.' },
   

  ];

  return (
    <div>
      <Navbar/>
      <Head>
        <title>Contact page</title>
      </Head>
      <Banner imageSource="/contact.png" cardContent="Welcome to Contact page" />
      <Form/>
      <div className="flex flex-wrap justify-center">
        {imagesData.map((data, index) => (
          <SectionImage key={index} imageSource={data.imageSource} cardContent={data.cardContent} />
        ))}
      </div>
      
      <Footer/>
    </div>
  );
};

export default ContactPage;