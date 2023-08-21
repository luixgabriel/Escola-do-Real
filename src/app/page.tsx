import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import SectionCourse from '@/components/SectionCourse'
import SectionLocation from '@/components/SectionLocation'
import SectionTalk from '@/components/SectionTalk'

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <SectionLocation />
      <SectionCourse />
      <SectionTalk />
    </>
  )
}
