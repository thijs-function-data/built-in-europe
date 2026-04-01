'use client';

import Lottie from "lottie-react";
import header3Animation from "../../../public/animations/header3.json";
import { useEffect, useState } from "react";

export default function BackgroundAnimations() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, pointerEvents: "none", overflow: "hidden" }}>

            {/* Top right */}
            <div style={{
                position: "absolute", top: "-5vh", right: "-5vw", width: "45vw",
                opacity: 0.55,
                transform: "rotate(-10deg)",
                filter: "saturate(2.5) brightness(1.4) contrast(1.1)"
            }}>
                <Lottie animationData={header3Animation} loop={true} />
            </div>

            {/* Bottom left — gespiegeld */}
            <div style={{
                position: "absolute", bottom: "-10vh", left: "-5vw", width: "40vw",
                opacity: 0.4,
                transform: "rotate(170deg)",
                filter: "saturate(2.5) brightness(1.4) hue-rotate(30deg) contrast(1.1)"
            }}>
                <Lottie animationData={header3Animation} loop={true} />
            </div>

        </div>
    );
}
