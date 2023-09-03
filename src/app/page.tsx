import { Bungee_Outline } from "next/font/google";
import Image from "next/image";
import SmiteLogo from '../resources/smite_logo.png';

const font = Bungee_Outline({
  weight: '400',
  subsets: ["latin"]
});


export default function Home() {
  return (
    <main>
      <h1 className={`${font.className} flex flex-col items-center justify-center text-5xl text-font-color`}><Image src={SmiteLogo} alt='Smite logo'/>META</h1>
    </main>
  )
}
