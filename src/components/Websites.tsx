"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const websites = [
  {
    name: "Goodhelper",
    image: "/francis.jpg", // Replace with actual image path
    link: "https://goodhelper.com.sg", // Replace with actual website URL
    techStack: ["Next.js", "Tailwind", "ShadCN"],
  },
  {
    name: "Another Site",
    image: "/another-site.jpg", // Replace with actual image path
    link: "https://anothersite.com",
    techStack: ["React", "MUI", "Firebase"],
  },
  {
    name: "Business Pro",
    image: "/business.jpg",
    link: "https://businesspro.com",
    techStack: ["Vue.js", "Nuxt", "Strapi"],
  },
];

export default function Websites() {
  const plugin = React.useRef(
    Autoplay({ delay: 7000, stopOnInteraction: true })
  );
  return (
    <div className="py-12 max-w-6xl mx-auto">
      <div className="text-start mb-8">
        <h1 className="text-4xl font-bold mb-2">
          Real Websites for Real Businesses
        </h1>
        <p className="text-lg text-muted-foreground">
          Happy websites, happy customers
        </p>
      </div>

      <Carousel
        className="w-full transition-all duration-300 hover:scale-[1.02]"
        opts={{
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-4">
          {websites.map((site, index) => (
            <CarouselItem key={index} className="pl-4 ">
              <div className="bg-muted rounded-xl overflow-hidden shadow-lg">
                {/* Website Image */}
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-2">{site.name}</h3>
                  <Image
                    src={site.image}
                    width={400}
                    height={250}
                    alt={site.name}
                    className="object-cover w-full h-96"
                  />
                </div>

                {/* Website Details */}
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {site.techStack.map((tech, i) => (
                      <Badge key={i} className="bg-gray-800 text-white">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full">
                    <a
                      href={site.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                    </a>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
