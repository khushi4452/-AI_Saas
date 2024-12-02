import Image from "next/image";
import LogoIcon from "../assets/Logo.jpg";
import MenuIcon from "../assets/Menu1.png";
import { Button } from "../components/Button";

export function Header() {
  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container mx-auto">
        <div className="flex justify-between items-center border-white/15">
          {/* Logo */}
          <div className="border-white/15 h-10 w-10 rounded-xl inline-flex justify-center items-center md:p-2.5">
            <Image src={LogoIcon} alt="Logo" className="h-8 w-8 object-contain" />
          </div>

          {/* Navigation */}
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition">Features</a>
              <a href="#" className="text-white/70 hover:text-white transition">Developer</a>
              <a href="#" className="text-white/70 hover:text-white transition">Pricing</a>
              <a href="#" className="text-white/70 hover:text-white transition">Changelog</a>
            </nav>
          </div>

          {/* Button and Hamburger Menu */}
          <div className="flex gap-4 items-center">
            <Button>Join Waitlist</Button>
            <Image src={MenuIcon} alt="Menu" className="h-8 w-8 object-contain sm:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
}
