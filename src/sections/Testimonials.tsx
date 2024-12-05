import Image from "next/image";
import avatar1 from "./../assets/Avatar 1.png";

const testimonials = [
    {
        test: "the product",
        name: "khushi",
        title: "cncje",
        avatarImg: avatar1,
    },
    {
        test: "the product",
        name: "khushi",
        title: "cncje",
        avatarImg: avatar1,
    },
    {
        test: "the product",
        name: "khushi",
        title: "cncje",
        avatarImg: avatar1,
    },
    {
        test: "the product",
        name: "khushi",
        title: "cncje",
        avatarImg: avatar1,
    },
];

export const Testimonials = () => {
    return (
 <section className="container">
<h2>Beyound the Expectation</h2>
<p>Our revolutionary AI SEO tools have transformed our clients' strategies</p>
{testimonials.map((testimonial, index) => (
<div key={index}
 className="border border-white/15 p-6 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)]"
>
 <div>{testimonial.test}</div>
<Image src={testimonial.avatarImg}
alt={`Avatar for ${testimonial.name}`}
/>
<div>{testimonial.name}</div>
<div>{testimonial.title}</div>
</div>
))}
</section>
);
};
