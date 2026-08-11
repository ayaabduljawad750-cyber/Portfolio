import "./hero.css";
import PackageLottie from "lottie-react";
import HeroAnimation from "../../animations/heroAnimation.json";
// import { useRef } from "react";

const Lottie = PackageLottie.default;

export default function Hero() {
  return (
    <section className="hero">
      <div className="left-section">
        <div className="parent-avatar">
          <img src="/me.png" alt="" className="avatar" />
          <div className="icon-verified" />
        </div>
        <h1 className="title">
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className="sub-text">
          I’m Spencer, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>
        <div className="icons-box">
          <i className="icon-twitter" />
          <i className="icon-instagram" />
          <i className="icon-github" />
          <i className="icon-linkedin" />
        </div>
      </div>
      <div className="right-section animation ">
        <DevAnimation />
      </div>
    </section>
  );
}

function DevAnimation() {
  return <Lottie animationData={HeroAnimation} style={{ width: "100%" }} />;
}

// function DevAnimation() {
//   const lottieRef = useRef();
//   return (
//     <Lottie
//       lottieRef={lottieRef}
//       onLoadedImages={()=>{
//         lottieRef.current.setSpeed(0.5)
//       }}
//       animationData={HeroAnimation}
//       style={{width:"100%"}}
//     />
//   );
// }
