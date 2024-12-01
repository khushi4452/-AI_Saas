import Image from "next/image";
import LogoIcon from "../assets/Logo.jpg";
import MenuIcon from "../assets/Menu1.png"; 

export function Header() {
  return (
    <header className="py-4 border-b border-white/15">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center boredr-white/15">
            {/* Using Next.js Image component for the logo */}
            <Image src={LogoIcon} alt="Logo" className="h-8 w-8 object-contain" />
          </div>
          <div className="flex gap-4 items-center  ">
            <button className=" relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#48208a] shadow-[0px_0px_12px_#8cff]" >
             <div className="absolute inset-0">
              
               <div className=" rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]">
               
               <div className="border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
              <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
               </div>
             </div>
              <span>Join Waitlist</span>
            </button>
            {/* Use Image component for MenuIcon */}
            <Image src={MenuIcon} alt="Menu" className="h-8 w-8 object-contain" />
           
          </div>
        </div>
      </div>
    </header>
  );
}
