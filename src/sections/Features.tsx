"use client";
import Image from "next/image"; 
import ProductImage from "./../assets/product.png"; 

export const Features = () => {
return (
<section className="py-20 md:py-24">
<div className="container">
 <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">Elevate your SEO efforts</h2>
<p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">
 From small Startups to large enterprises, our AI Driven tool has
 revolutionized the way businesses approach SEO.
</p>
        
   
 <div className="border border-white/20 p-2.5 rounded-xl mt-3 ">
<div className="aspect-video bg-cover border-white/20 rounded-lg" style={{
backgroundImage: `url(${ProductImage.src})`
}}></div>
</div>
</div>
</section>
  );
};

