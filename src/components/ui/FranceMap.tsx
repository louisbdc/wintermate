"use client"

import { useMemo } from "react"
import { geoMercator, geoPath } from "d3-geo"
import type { Feature, MultiPolygon } from "geojson"
import franceGeoJson from "@/data/france-metropole.json"

const WIDTH = 600
const HEIGHT = 600

// Coordonnees GPS reelles [lng, lat]
const STATIONS: readonly {
  readonly name: string
  readonly coords: readonly [number, number]
}[] = [
  { name: "Avoriaz", coords: [6.7726, 46.1912] },
  { name: "Chamonix", coords: [6.8696, 45.9237] },
  { name: "La Plagne", coords: [6.6774, 45.5064] },
  { name: "Courchevel", coords: [6.6348, 45.4153] },
  { name: "Val d'Isere", coords: [6.9806, 45.4486] },
  { name: "Chamrousse", coords: [5.8787, 45.1172] },
  { name: "Les 2 Alpes", coords: [6.1222, 45.0167] },
  { name: "Serre Chevalier", coords: [6.5563, 44.9427] },
  { name: "Cauterets", coords: [-0.1103, 42.8892] },
  { name: "Font-Romeu", coords: [2.0372, 42.5018] },
  { name: "La Bresse", coords: [6.8716, 48.0031] },
  { name: "Le Lioran", coords: [2.7473, 45.0808] },
  { name: "Super-Besse", coords: [2.8489, 45.5107] },
] as const

interface FranceMapProps {
  readonly className?: string
}

export function FranceMap({ className }: FranceMapProps) {
  const { svgPath, stationPoints } = useMemo(() => {
    const projection = geoMercator().fitSize(
      [WIDTH, HEIGHT],
      franceGeoJson as unknown as Feature<MultiPolygon>
    )
    const pathGenerator = geoPath().projection(projection)
    const path =
      pathGenerator(franceGeoJson as unknown as Feature<MultiPolygon>) ?? ""

    const points = STATIONS.map((s) => {
      const [x, y] = projection(s.coords as [number, number]) ?? [0, 0]
      return { name: s.name, x, y }
    })

    return { svgPath: path, stationPoints: points }
  }, [])

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="map-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow */}
      <path
        d={svgPath}
        fill="none"
        stroke="rgba(59, 130, 246, 0.1)"
        strokeWidth="10"
        filter="url(#map-glow)"
      />

      {/* France fill + stroke */}
      <path
        d={svgPath}
        fill="rgba(59, 130, 246, 0.04)"
        stroke="rgba(59, 130, 246, 0.25)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Station pins */}
      {stationPoints.map((station, i) => (
        <g key={station.name}>
          {/* Pulse ring */}
          <circle
            cx={station.x}
            cy={station.y}
            r="8"
            fill="rgba(59, 130, 246, 0.15)"
            style={{
              animation: "pulse-point 3s infinite",
              animationDelay: `${i * 0.25}s`,
              transformOrigin: `${station.x}px ${station.y}px`,
            }}
          />
          {/* Pin */}
          <circle
            cx={station.x}
            cy={station.y}
            r="4"
            fill="#3b82f6"
            stroke="#3b82f6"
            strokeWidth="1"
          >
            <title>{station.name}</title>
          </circle>
        </g>
      ))}
    </svg>
  )
}
