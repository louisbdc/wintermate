import Image from "next/image"

interface FeaturePhoneMockupProps {
  readonly image: string
  readonly alt: string
}

export function FeaturePhoneMockup({ image, alt }: FeaturePhoneMockupProps) {
  return (
    <div className="relative mx-auto w-56 md:w-64">
      <div className="relative overflow-hidden rounded-[2.5rem] border-[5px] border-zinc-800 bg-black shadow-[0_0_40px_rgba(0,0,0,0.8)]">
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 z-10 h-[20px] w-[80px] -translate-x-1/2 rounded-full bg-black" />

        {/* Screen content */}
        <div className="relative aspect-[9/19.5]">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 224px, 256px"
          />
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-1 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-white/20" />
      </div>
    </div>
  )
}
