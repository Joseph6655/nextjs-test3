import Head from 'next/head'
import Banner from '@/comps/Banner'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import SectionImage from '@/comps/SectionImage'

export default function Home() {
  return (
     
      <div>
       <Navbar/>
       <Head>
         <title> Home page</title>
        
       </Head>
       <Banner/>
       <SectionImage/>
       <Footer/>
      
      </div>
    
  )
}