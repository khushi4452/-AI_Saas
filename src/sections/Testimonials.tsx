import Image from "next/image";
import avatar1 from "./../assets/Avatar 1.png";

const testimonials = [
    {
        text: "This Product has completely transformed how I manage my projects and deadlines",
        name: "Khushi",
        title: "Director @ Quantum",
        avatarImg: avatar1,
    },
    {
        text: "This Product has completely transformed how I manage my projects and deadlines",
        name: "Khushi",
        title: "Manager @ CNCJE",
        avatarImg: avatar1,
    },
    {
        text: "This Product has completely transformed how I manage my projects and deadlines",
        name: "Khushi",
        title: "Team Lead @ CNCJE",
        avatarImg: avatar1,
    },
    {
        text: "This Product has completely transformed how I manage my projects and deadlines",
        name: "Khushi",
        title: "Analyst @ CNCJE",
        avatarImg: avatar1,
    },
];

export const Testimonials = () => {
 return (
<section className="py-20 md:py-24">
<h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">
    Beyond the Expectation
 </h2>

 <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto">
  Our revolutionary AI SEO tools have transformed our clients'
  strategies
 </p> 

 <div className="overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
<div className="flex gap-5">
 {testimonials.map((testimonial, index) => (
 <div
 key={index}
className="border border-white/15 p-6 md:p-10 rounded-[1.5rem] bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs md:max-w-md flex-none" >
 <div className="text-lg tracking-tight md:text-cxl">
 {testimonial.text}
</div>
<div className="flex items-center gap-3 mt-5">
<div className="relative">
<div className="absolute inset-0 bg-[rgb(140,69,244)] mix-blend-soft-light rounded-lg"></div>
<div className="absolute inset-0 border border-white/30 rounded-lg z-10"></div>



 <Image src={testimonial.avatarImg}
 alt={`Avatar for ${testimonial.name}`}
 className="h-11 w-11 rounded-lg grayscale" />
 </div>
<div>
<div className="text-white font-semibold">
{testimonial.name}
  </div>
<div className="text-white/50 text-sm">
 {testimonial.title}
 </div>
 </div>
</div>
</div>
 ))}
</div>
 </div>
</section>
    );
};
