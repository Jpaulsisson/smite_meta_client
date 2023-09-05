import { Bungee_Outline, Josefin_Slab } from "next/font/google";
import Image from "next/image";
import AvatarPlaceHolder from "../resources/avatar.svg"
import SmiteLogo from '../resources/smite_logo.png';



const font = Josefin_Slab({
  weight: ["100", "200", "300"],
  subsets: ["latin"]
})

const specialFont = Bungee_Outline({
  weight: '400',
  subsets: ["latin"]
});


export default function Navbar() {
  return (
    <nav className="mt-2 grid grid-cols-10 items-center gap-2">
      <h1 className={`col-start-4 col-end-8 ${specialFont.className} text-font-color text-3xl flex flex-col items-center`}>
        <Image src={SmiteLogo} alt='Smite logo'/>
        META
      </h1>
      <a className="col-start-9">
        <Image src={AvatarPlaceHolder}  className='' />
      </a>
    </nav>
  )
}
