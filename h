"use client";
import {DotLottiePlayer} from "./dotlottie/react-player"

const tabs = [
    {
      icon: "/assests/lottice/vroom.lottice",
      title: "user friendly dashboard",
      isNew: false,
      backgroundPositionX: 0,
      backgroundPositionY: 0,
      backgroundSize: 150,
    },
    {
      icon: "/assests/lottice/click.lottice",
      title: "one click Optimization",
      isNew: false,
      backgroundPositionX: 98,
      backgroundPositionY: 100,
      backgroundSize: 135,
    },
    {
      icon: "/assests/lottice/stars.lottice",
      title: "Smart Keyboard Generator",
      isNew: true,
      backgroundPositionX: 100,
      backgroundPositionY: 27,
      backgroundSize: 172,
    },
  ];
  
  export const Features = () => {
    return (
      <section>
        <div className="container">
          <h2>Elevate your SEO efforts</h2>
          <p>
            From small Startups to large enterprises, our AI Driven tool has
            revolutionized the way businesses approach SEO
          </p>
          {tabs.map((tab) => (
            <div key={tab.title}>
             <DotLottiePlayer src={tab.icon}/>
            </div>
          ))}
        </div>
      </section>
    );
  };