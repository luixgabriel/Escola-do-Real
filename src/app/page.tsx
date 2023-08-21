import Banner from '@/components/homepage/Banner'
import Course from '@/components/homepage/Course'
import Location from '@/components/homepage/Location'
import Message from '@/components/homepage/Message'
import Navbar from '@/components/homepage/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Location />
      <Course />
      <Message />
    </>
  )
}
