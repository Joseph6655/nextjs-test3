import React from 'react';
import Head from 'next/head';
import Banner from '@/comps/Banner';
import Navbar from '@/comps/Navbar';
import Footer from '@/comps/Footer';
import SectionImage from '@/comps/SectionImage';

const HomePage = () => {
  const imagesData = [
    { imageSource: '/desk.png', cardContent: 'Great web design without functionality like a sports car with no engine.' },
    { imageSource: '/comp.png', cardContent: 'Computers are like Old Testament gods; lots of rules and no mercy.' }
  ];

  return (
    <div>
      <Navbar/>
      <Head>
        <title>Home page</title>
      </Head>
      <Banner imageSource="/banner.png" cardContent="Welcome to Home page" />
      {imagesData.map((data, index) => (
        <SectionImage key={index} imageSource={data.imageSource} cardContent={data.cardContent} />
      ))}
      <Footer/>
    </div>
  );
};

export default HomePage;