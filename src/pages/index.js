import React from 'react';
import Head from 'next/head';
import Banner from '@/comps/Banner';
import Navbar from '@/comps/Navbar';
import Footer from '@/comps/Footer';
import Form from '@/comps/Form';
import SectionImage from '@/comps/SectionImage';
import Sectionradiobutton from '@/comps/Sectionradiobutton';
import Filtercompenent from '@/comps/filtercomponent';
import Accordion from '@/comps/Accordion';
import 'swiper/css';
import 'swiper/css/bundle';

const items = [
  {
    title: 'How do programmers learn a new language?',
    content: 'Here are some effective strategies to learn a new programming language quickly: Understand the Basics: Start by understanding the fundamental concepts of the language, such as syntax, data types, variables, control structures (like loops and conditionals), functions, and basic I/O operations',
  },
  {
    title: 'How long does it take for a programmer to learn a new language?',
    content: 'Most coders would say that learning a single language can take 3 to 6 months to truly learn. There are many different programming languages and each one has its own unique differences and elements. The good news is that most people pick up new languages faster and faster over time.',
  },
  {
    title: 'How difficult is it to learn a new programming language?',
    content: 'It is difficult to say whether learning a new programming language is generally more or less difficult than it used to be, as it can depend on a variety of factors such as the specific language being learned, the learners prior programming experience, and the resources and tools available for learning.',
  },
];

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
     
      <Banner 
        images={['/banner.png', '/banner1.png ']}
        cardContent="Welcome to Home page" 
      />
      <Form/> 
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Frequently asked questions</h1>
        <div className="mx-auto max-w-xl"> 
          <Accordion items={items} />
        </div>
      </div>
     
      <div className="grid grid-cols-1 ml-20 mr-20 md:grid-cols-2 gap-0 md:w-1/2 justify-center" style={{ margin: '0 auto' }}>
        {imagesData.map((data, index) => (
          <SectionImage key={index} imageSource={data.imageSource} cardContent={data.cardContent} className="w-full max-w-sm mx-auto" />
        ))}
      </div>
      <Sectionradiobutton/>
      <Filtercompenent/>
      <Footer/>
    </div>
  );
};

export default HomePage;