import Image from "next/image";
import LogoIcon from "../assets/Logo.jpg";
import MenuIcon from "../assets/Menu1.png";
import { Button } from "../components/Button";

export function Header() {
  return (
 <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 ">
 <div className="absolute inset-0 backdrop-blur -z-10 md:hidden "></div>
 <div className="container ">
 <div className="flex justify-between items-center md:border  border-white/15 md:-2.5 rounded-xl max-w-2xl mx-auto relative ">
 <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
         
 <div className="border-white/15 h-10 w-10 rounded-xl inline-flex justify-center items-center md:p-2.5">
 <Image src={LogoIcon} alt="Logo" className="h-8 w-8 object-contain" />
  </div>

   
 <div className="hidden md:block">
 <nav className="flex gap-10 text-sm">
 <a href="#" className="text-white/70 hover:text-white transition">Features</a>
 <a href="#" className="text-white/70 hover:text-white transition">Developer</a>
 <a href="#" className="text-white/70 hover:text-white transition">Pricing</a>
 <a href="#" className="text-white/70 hover:text-white transition">Changelog</a>
 </nav>
 </div>

         
<div className="flex gap-10 items-center">
 <Button>Sign In</Button>
          
<Image src={MenuIcon} alt="Menu" className="h-8 w-8 object-contain sm:hidden" />
 </div>
</div>
</div>
 </header>
  );
}
