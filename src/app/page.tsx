import Navbar from '../components/Navbar.component';
import HomePageLink from '../components/HomePageLink.component';


export default function Home() {
  return (
    <main className='mx-auto w-full'>
        <section className='flex flex-col items-center justify-evenly min-h-[70vh]'>
          <HomePageLink href={'/build-options'} title={'Builds'}/>
          <HomePageLink href={'/gods-or-items'} title={'Gods & Items'} />
          <HomePageLink href={'/pro-links'} title={'Learn from Pros'} />
        </section>
    </main>
  )
}
