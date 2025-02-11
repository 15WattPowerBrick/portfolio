import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlanCardProps {
  title: string;
  description: string;
  metric: string;
  period: string;
  type?: string;
  className?: string;
}

function PlanCard({
  title,
  description,
  metric,
  period,
  type,
  className,
}: PlanCardProps) {
  return (
    <div
      className={cn(
        "p-6 rounded-lg relative group cursor-pointer transition-all duration-300 hover:scale-[1.02]",
        className
      )}
    >
      {type && (
        <div className="text-sm mb-4 font-medium opacity-80 uppercase tracking-wider">
          {type}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-70 mb-8 line-clamp-2">{description}</p>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-2xl font-bold">{metric}</div>
          <div className="text-sm opacity-70">{period}</div>
        </div>
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
      </div>
    </div>
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
          title="Parsely AI"
          description="AI-powered resume parsing tool for recruitment agencies."
          metric="7.20%"
          period="3 yrs CAGR"
          className="bg-emerald-100 hover:bg-emerald-200"
        />
        <PlanCard
          type="WEB"
          title="Horizon Focus CRM"
          description="CRM tool built for SMEs in Singapore."
          metric="14.20%"
          period="25 yrs CAGR"
          className="bg-black text-white hover:bg-black/90"
        />
        <PlanCard
          type="MAC OS"
          title="Zenless"
          description="The small breaks in life goes a long way."
          metric="11.20%"
          period="1 yr returns"
          className="bg-purple-100 hover:bg-purple-200"
        />
        <PlanCard
          type="WEB"
          title="Portfolio Template"
          description="This portfolio template is open-source, sharing is caring!"
          metric="8.20%"
          period="5 yrs CAGR"
          className="bg-yellow-100 hover:bg-yellow-200"
        />
      </div>
    </div>
  );
}

export default Projects;
