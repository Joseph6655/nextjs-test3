import React from 'react';
import Head from 'next/head';
import Banner from '@/comps/Banner';
import Navbar from '@/comps/Navbar';
import Footer from '@/comps/Footer';
import SectionImage from '@/comps/SectionImage';

const AboutPage = () => {
  const imagesData = [
    { imageSource: '/sectionimage1.jpg', cardContent: 'The future is no place to place your better days.' },
    { imageSource: '/sectionimage2.jpg', cardContent: 'Fight for the things that you care about, but do it in a way that will lead others to join you.' },
    { imageSource: '/sectionimage3.jpg', cardContent: 'The only approval you need is your own.' },
    { imageSource: '/sectionimage4.jpg', cardContent: 'Believe you can and you’re halfway there.' }
  ];

  return (
    <div>
      <Navbar/>
      <Head>
        <title>About page</title>
      </Head>
      <Banner imageSource="/about.png" cardContent="Welcome to About page" textColor="text-blue-500"/>
      {imagesData.map((data, index) => (
        <SectionImage key={index} imageSource={data.imageSource} cardContent={data.cardContent} />
      ))}
      <Footer/>
    </div>
  );
};

export default AboutPage;