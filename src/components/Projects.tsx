"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface PlanCardProps {
  title: string;
  description: string;
  techStack: string[];
  url: string;
  type?: string;
  className?: string;
}

function PlanCard({
  title,
  description,
  techStack,
  url,
  type,
  className,
}: PlanCardProps) {
  return (
    <a target="_blank" href={url} className="h-full">
      <div
        className={cn(
          "p-6 rounded-lg relative group cursor-pointer transition-all duration-300 hover:scale-[1.02] flex flex-col h-full",
          className
        )}
      >
        {type && (
          <div className="text-sm mb-4 font-medium opacity-80 uppercase tracking-wider">
            {type}
          </div>
        )}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm opacity-70 mb-4 line-clamp-2">{description}</p>

        {/* Ensures the tech stack stays at the top */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <Badge key={tech} className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        {/* This will push the arrow icon to the bottom */}
        <div className="mt-auto flex items-center">
          <ArrowRight className="h-5 w-5" />
        </div>
      </div>
    </a>
  );
}

function Projects() {
  return (
    <div className="py-12 max-w-6xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <PlanCard
          type="WEB"
          title="Code to MDX"
          description="Effortlessly transform your code snippet into meaningful MDX documentation in seconds."
          techStack={["Next.js", "ShadCN", "Gemini API", "MDX"]}
          url="https://mdx.swanhtataung.com"
          className="bg-pink-100 hover:bg-pink-2000"
        />
        <PlanCard
          type="WEB"
          title="Parsely AI (Demo)"
          description="AI-powered resume parsing tool. (Demo)"
          techStack={["Next.js", "ShadCN", "Gemini API"]}
          url="https://parsely.swanhtataung.com"
          className="bg-emerald-100 hover:bg-emerald-200"
        />
        <PlanCard
          type="WEB"
          title="Horizon Focus CRM (WIP)"
          description="CRM tool built for SMEs in Singapore."
          techStack={["Next.js", "Auth.js", "PostgreSQL", "Zod"]}
          url="https://horizonfocus.cloud"
          className="bg-black text-white hover:bg-black/90"
        />
        <PlanCard
          type="MAC OS"
          title="Zenless"
          description="The small breaks in life go a long way."
          techStack={["Swift", "XCode"]}
          url="https://zenless.swanhtataung.com"
          className="bg-purple-100 hover:bg-purple-200"
        />
        <PlanCard
          type="WEB"
          title="Portfolio Template"
          description="This portfolio template is open-source, sharing is caring!"
          techStack={["Next.js", "Tailwind", "ShadCN", "Typescript"]}
          url="https://github.com/15WattPowerBrick/portfolio"
          className="bg-yellow-100 hover:bg-yellow-200"
        />
      </div>
    </div>
  );
}

export default Projects;
