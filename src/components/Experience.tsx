import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Circle } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    year: "2021 - Today",
    role: "Senior Developer and VP of Product at Qonto",
    location: "London, UK",
    description:
      "Setting vision, leadership, processes while directly participating in communications with clients such as eBay, Amazon, X, Twitch, Instagram, and many others.",
    icon: "/qonto-icon.png",
  },
  {
    year: "2019 - 2021",
    role: "Fullstack Developer at Medium Inc.",
    location: "New York, NYC",
    description:
      "Setting vision, leadership, processes while directly participating in communications with clients such as eBay, Amazon, X, Twitch, Instagram, and many others.",
    icon: "/medium-icon.png",
  },
  {
    year: "2017 - 2019",
    role: "System Engineer and Web Developer at Vimeo",
    location: "London, UK",
    description:
      "Setting vision, leadership, processes while directly participating in communications with clients such as eBay, Amazon, X, Twitch, Instagram, and many others.",
    icon: "/vimeo-icon.png",
  },
];

export default function Experience() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <div className="flex flex-col space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4">
            {/* Experience Card */}
            <Card className="w-full">
              <CardContent className="p-4">
                <p className="text-sm text-gray-500 italic">{exp.year}</p>
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-sm text-gray-600">{exp.location}</p>
                <p className="text-gray-700 mt-2">{exp.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
