'use client';

import Lottie from "lottie-react";
import drieluikAnimation from "../../../public/animations/drieluik.json";
import header3Animation from "../../../public/animations/header3.json";
import testjeAnimation from "../../../public/animations/testje.json";
import { useEffect, useState } from "react";

export default function BackgroundAnimations() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, pointerEvents: "none", overflow: "hidden" }}>

            {/* Header Animation - Positioned similar to IntroSection */}
            <div style={{ position: "absolute", top: "-10vh", right: "-10vw", width: "70vw", opacity: 0.6, transform: "rotate(-15deg)" }}>
                <Lottie animationData={header3Animation} loop={true} />
            </div>

            {/* Drieluik Animation - Bottom Left */}
            <div style={{ position: "absolute", bottom: "-20vh", left: "-5vw", width: "50vw", opacity: 0.4 }}>
                <Lottie animationData={drieluikAnimation} loop={true} />
            </div>

            {/* Testje Animation - Floating Center Right */}
            <div style={{ position: "absolute", top: "40vh", right: "15vw", width: "30vw", opacity: 0.3 }}>
                <Lottie animationData={testjeAnimation} loop={true} />
            </div>

        </div>
    );
}
