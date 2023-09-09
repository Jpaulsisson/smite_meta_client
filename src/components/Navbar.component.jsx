import { Exo_2 } from "next/font/google";
import Image from "next/image";
import AvatarPlaceHolder from "../resources/avatar.svg"
import SmiteLogo from '../resources/smite_logo.png';


const exoFont = Exo_2({
  weight: '200',
  subsets: ["latin"]
});


export default function Navbar() {
  return (
    <nav className={`mt-2 grid grid-cols-10 items-center gap-2 ${exoFont.className}`}>
      <h1 className={`col-start-4 col-end-8 text-font-color text-3xl flex flex-col items-center`}>
        <Image src={SmiteLogo} alt='Smite logo'/>
        META
      </h1>
      <h2 className="text-neutral text-3xl hidden md:block">Welcome</h2>
      <a className="col-start-9">
        <Image src={AvatarPlaceHolder}  className='max-h-[75px]' />
      </a>
    </nav>
  )
}
