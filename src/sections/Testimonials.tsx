import Image from "next/image";
import avatar1 from "./../assets/Avatar 1.png";

const testimonials = [
    {
        text: "This Product hascompletely transformed how I Managed my projects and Deadlines",
        name: "khushi",
        title: "Directory @ Quantum",
        avatarImg: avatar1,
    },
    {
        text: "This Product hascompletely transformed how I Managed my projects and Deadlines",
        name: "khushi",
        title: "cncje",
        avatarImg: avatar1,
    },
    {
        text: "This Product hascompletely transformed how I Managed my projects and Deadlines",
        name: "khushi",
        title: "cncje",
        avatarImg: avatar1,
    },
    {
        text: "This Product hascompletely transformed how I Managed my projects and Deadlines",
        name: "khushi",
        title: "cncje",
        avatarImg: avatar1,
    },
];

export const Testimonials = () => {
    return (
        <section className="container">
            <h2>Beyond the Expectation</h2>
            <p>
                Our revolutionary AI SEO tools have transformed our clients'
                strategies
            </p>
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className="border border-white/15 p-6 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)]"
                >
                    <div className="text-lg tracking-tight">
                        {testimonial.text}
                    </div>
                    <div className="flex items-center gap-3 mt-5">
                        <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30">
                            <Image
                                src={testimonial.avatarImg}
                                alt={`Avatar for ${testimonial.name}`}
                                className="h-11 w-11 rounded-lg grayscale "
                            />
                        </div>
                        <div>
                            <div>{testimonial.name}</div>
                            <div>{testimonial.title}</div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};
