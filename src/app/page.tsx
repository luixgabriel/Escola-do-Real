import Banner from '@/components/Banner'
import FaleConosco from '@/components/FaleConosco'
import Navbar from '@/components/Navbar'
import SectionLocation from '@/components/SectionLocation'
import SectionCourse from '@/components/SectionSourse'

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <SectionLocation />
      <SectionCourse />
      <FaleConosco />
    </>
  )
}
