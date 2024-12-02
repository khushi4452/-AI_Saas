import { Button } from "../components/Button";

export const Hero = () => {
  return (
    <section>
      <div className="container">
        <h1 className="text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          AI SEO
        </h1>
        <p>
          Evaluate your site visibility effortlessly with AI, where smart technology meets
          user-friendly SEO tools.
        </p>
        <Button>Join Waitlist</Button>
      </div>
    </section>
  );
};
