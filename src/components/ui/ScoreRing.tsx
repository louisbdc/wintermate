interface ScoreRingProps {
  readonly score: number
  readonly size?: number
}

function getScoreColor(score: number): string {
  if (score >= 80) return "#22c55e"
  if (score >= 50) return "#F97316"
  return "#ef4444"
}

export function ScoreRing({ score, size = 140 }: ScoreRingProps) {
  const strokeWidth = 8
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference
  const color = getScoreColor(score)

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="score-ring -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="font-montserrat text-3xl font-black"
          style={{ color }}
        >
          {score}
        </span>
        <span className="text-[10px] uppercase tracking-widest text-zinc-500">
          /100
        </span>
      </div>
    </div>
  )
}
