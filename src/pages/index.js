import Head from 'next/head'
import Banner from '@/comps/Banner'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import SectionImage from '@/comps/SectionImage'
import Form from '@/comps/Form'

export default function Home() {
  return (
     
      <div>
       <Navbar/>
       <Head>
         <title> Home page</title>
        
       </Head>
       <Banner/>
       <Form/>
       <SectionImage/>
       <Footer/>
      
      </div>
    
  )
}