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

      <div className="block absolute -translate-y-48 translate-x-52">
        <svg
          className="w-16 h-auto text-orange-500"
          width={121}
          height={135}
          viewBox="0 0 121 135"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
            stroke="currentColor"
            strokeWidth={10}
            strokeLinecap="round"
          />
          <path
            d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
            stroke="currentColor"
            strokeWidth={10}
            strokeLinecap="round"
          />
          <path
            d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
            stroke="currentColor"
            strokeWidth={10}
            strokeLinecap="round"
          />
        </svg>
      </div>

      <h1 className="text-4xl font-semibold mt-5">Swan Htat Aung</h1>
      <p className="text-xl text-gray-600">
        Fullstack web developer from Singapore{" "}
      </p>
    </div>
  );
}
