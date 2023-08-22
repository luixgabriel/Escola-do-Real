import About from '@/components/homepage/About'
import Banner from '@/components/homepage/Banner'
import Course from '@/components/homepage/Course'
import Location from '@/components/homepage/Location'
import Message from '@/components/homepage/Message'
import Navbar from '@/components/homepage/Navbar'
import Partners from '@/components/homepage/Partners'

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Location />
      <Course />
      <Message />
      <Partners />
    </>
  )
}
