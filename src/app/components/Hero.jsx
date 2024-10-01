"use client";
import React from "react";
import {TextRevealCard} from "./ui/text-reveal-card";
const Hero = () => {


    return (
        <div className="text-white justify-center flex items-center h-screen">
            <div className="text-2xl max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-blue-500 font-bold text-6xl p-2">Sorting Visualizer</p>
                <h1 className="text-5xl font-bold md:py-6 text-white">Simulator</h1>
        
                <TextRevealCard
                    text="Comming Soon"
                        revealText="Deployment on progress "
                    ></TextRevealCard>
            </div>
        </div>
    );
};

export default Hero;
