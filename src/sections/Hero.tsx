import { Button } from "../components/Button";

export const Hero = () => {
  return (
    <section className="h-[492px] flex items-center justify-center relative">
      <div className="absolute h-64 w-64 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,225)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      <div className="absolute h-[344px] w-[344px] border rounded-full"></div>
      <div className="container relative z-10 text-center">
        <h1 className="text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
          AI SEO
        </h1>
        <p className="text-lg text-white/70 mt-5">
          Evaluate your site visibility effortlessly with AI, where smart technology meets
          user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join Waitlist</Button>
        </div>
      </div>
    </section>
  );
};
