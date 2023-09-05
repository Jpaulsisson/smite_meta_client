import Navbar from '../components/Navbar.component';
import HomePageLink from '../components/HomePageLink.component';


export default function Home() {
  return (
    <main className='max-w-[900px] mx-auto w-full'>
        <section className='flex flex-col items-center justify-evenly min-h-[70vh]'>
          <HomePageLink href={'/build-options'} label={'Builds'}/>
          <HomePageLink href={'/gods-or-items'} label={'Gods & Items Info'} />
          <HomePageLink href={'/pro-links'} label={'Learn from the Pros'} />
        </section>
    </main>
  )
}
