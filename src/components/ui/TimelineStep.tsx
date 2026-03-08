import type { TimelineStep as TimelineStepType } from "@/data/pricing"

interface TimelineStepProps {
  readonly step: TimelineStepType
  readonly isLast: boolean
}

function StepIcon({ icon, active }: { readonly icon: string; readonly active: boolean }) {
  const bgColor = active ? "bg-neon-blue" : "bg-zinc-700"

  return (
    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${bgColor}`}>
      {icon === "lock" && (
        <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
      )}
      {icon === "bell" && (
        <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 01-3.46 0" />
        </svg>
      )}
      {icon === "crown" && (
        <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20h20L18 8l-4 6-2-8-2 8-4-6z" />
        </svg>
      )}
    </div>
  )
}

export function TimelineStep({ step, isLast }: TimelineStepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <StepIcon icon={step.icon} active={step.active} />
        {!isLast && <div className="mt-2 h-full w-px bg-zinc-800" />}
      </div>
      <div className="pb-8">
        <h3 className="font-bold">{step.title}</h3>
        <p className="text-sm leading-relaxed text-zinc-400">
          {step.description}
        </p>
      </div>
    </div>
  )
}
