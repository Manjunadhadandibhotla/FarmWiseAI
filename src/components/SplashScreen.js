import React, { useEffect, useRef } from "react";
import "./SplashScreen.css";

const SplashScreen = ({ onFinish }) => {
  const ballRef = useRef(null);
  const squareRef = useRef(null);
  const bubble1Ref = useRef(null);
  const bubble2Ref = useRef(null);
  const curveRef = useRef(null);

  useEffect(() => {
    const ball = ballRef.current;
    const square = squareRef.current;
    const bubble1 = bubble1Ref.current;
    const bubble2 = bubble2Ref.current;
    const curve = curveRef.current;

    ball.animate(
      [
        { transform: "translateX(0) rotate(0)" },
        { transform: "translateX(100vw) rotate(360deg)" },
      ],
      {
        duration: 4000,
        easing: "linear",
        fill: "forwards",
      }
    );

    square.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(-30px)" },
        { transform: "translateY(0)" },
      ],
      {
        duration: 1000,
        easing: "ease-in-out",
        iterations: Infinity,
      }
    );

    bubble1.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(-20px)" },
        { transform: "translateY(0)" },
      ],
      {
        duration: 3000,
        easing: "ease-in-out",
        iterations: Infinity,
      }
    );

    bubble2.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(-25px)" },
        { transform: "translateY(0)" },
      ],
      {
        duration: 2500,
        easing: "ease-in-out",
        iterations: Infinity,
      }
    );

    curve.animate(
      [
        { transform: "translateY(0) rotate(45deg)" },
        { transform: "translateY(-20px) rotate(45deg)" },
        { transform: "translateY(0) rotate(45deg)" },
      ],
      {
        duration: 4000,
        easing: "ease-in-out",
        iterations: Infinity,
      }
    );

    setTimeout(() => {
      onFinish();
    }, 4000);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <div className="animation-container">
        <div className="ball" ref={ballRef}></div>
        <div className="square" ref={squareRef}></div>
        <div className="bubble" ref={bubble1Ref}></div>
        <div className="bubble" ref={bubble2Ref}></div>
        <div className="curve" ref={curveRef}></div>
      </div>
      <div className="welcome-text">Manjunadha Welcomes You</div>
    </div>
  );
};

export default SplashScreen;
