"use client";
import { useState } from "react";
import Image from "next/image";
import { TConductorInstance } from "react-canvas-confetti/dist/types";
import Realistic from "react-canvas-confetti/dist/presets/realistic";

export default function Hero() {
  const [conductor, setConductor] = useState<TConductorInstance>();
  const onOnce = () => {
    conductor?.shoot();
  };

  const onInit = ({ conductor }: { conductor: TConductorInstance }) => {
    setConductor(conductor);
  };

  return (
    <div className="flex flex-col items-start justify-center text-center gap-2">
      <Realistic onInit={onInit} />
      <Image
        src="/profile.jpg"
        height={200}
        width={200}
        alt="Dummy Image"
        className="rounded-lg aspect-square object-cover transition-all duration-300 hover:scale-[1.02]"
        onClick={onOnce}
      />
      <h1 className="text-4xl font-semibold mt-5">Swan Htat Aung</h1>
      <p className="text-xl text-gray-600">
        Fullstack web developer from Singapore{" "}
      </p>
    </div>
  );
}
