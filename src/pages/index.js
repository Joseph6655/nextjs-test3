import React from 'react';
import Head from 'next/head';
import Banner from '@/comps/Banner';
import Navbar from '@/comps/Navbar';
import Footer from '@/comps/Footer';
import Form from '@/comps/Form';
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
      <Form/> 
      <div className= "grid grid-cols-1 ml-20 mr-20 md:grid-cols-2 gap-0 md:w-1/2 sm:w-full justify-center" style={{ width: '35em', margin: '0 auto'}} >
  {imagesData.map((data, index) => (
    <SectionImage key={index} imageSource={data.imageSource} cardContent={data.cardContent} className="md:w-1/2 sm:w-full" />
  ))}
</div>
      <Footer/>
    </div>
  );
};

export default HomePage;