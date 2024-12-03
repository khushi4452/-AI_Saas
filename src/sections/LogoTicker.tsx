import achmeLogo from "./../assets/acme 1.png";
import apexLogo from "./../assets/apexw 1.png";
import celestialLogo from "./../assets/celestial 1.png";
import echoLogo from "./../assets/echo-vw 1.png";
import pulseLogo from "./../assets/pulsew 1.png";
import quantumLogo from "./../assets/quantrumw 1.png";

export const LogoTicker = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div>
            
          <div className=" flex items-center">
            <div className="flex-1">
            <h2>Trusted by Top Innovative Teams</h2>
            </div>
           <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent">
           <div className="flex flex-none gap-14">
              {[achmeLogo, apexLogo, celestialLogo, echoLogo, pulseLogo, quantumLogo].map((logo, index) => (
                <img src={logo.src} key={logo.src} className="h-6 w-auto" />
              ))}
            </div>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
};
