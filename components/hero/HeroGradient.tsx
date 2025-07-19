import StarsBackground from "./StarsBackground";

interface HeroGradientProps {
  children: React.ReactNode;
  backgroundType?: "image" | "video";
  backgroundSrc?: string;
  className?: string;
  style?: React.CSSProperties;
}

const HeroGradient = ({
  children,
  backgroundType = "image",
  backgroundSrc = "/images/hero.jpg",
  className = "",
  style,
}: HeroGradientProps) => {
  const baseGradientStyle = {
    backgroundImage:
      backgroundType === "image"
        ? `linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, #362c05 100%),
       linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%),
       url('${backgroundSrc}')`
        : `linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, #362c05 100%),
       linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  if (backgroundType === "image") {
    return (
      <section
        className={`h-screen w-full relative overflow-hidden hero-gradient ${className}`}
        style={style}
      >
        {/* Animated stars background */}
        <StarsBackground />
        {/* Solid #362c05 background as the base layer */}
        <div className="absolute inset-0 z-0 bg-[#362c05]" />
        {/* The hero-gradient class now handles the background gradient. The image/video will be layered below. */}
        <div className="absolute inset-0 z-0" style={baseGradientStyle} />
        {/* Top fade overlay */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-40 z-20" style={{background: "linear-gradient(to bottom, #362c05 0%, transparent 100%)"}} />
        {/* Bottom fade overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 z-20" style={{background: "linear-gradient(to top, #362c05 0%, transparent 100%)"}} />
        <div className="relative z-20 h-full w-full">{children}</div>
      </section>
    );
  } else if (backgroundType === "video") {
    return (
      <section
        className={`h-screen w-full relative overflow-hidden hero-gradient ${className}`}
      >
        {/* Solid #362c05 background as the base layer */}
        <div className="absolute inset-0 z-0 bg-[#362c05]" />
        {/* The hero-gradient class now handles the background gradient. The video will be layered below. */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={backgroundSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div
          className="absolute top-0 left-0 w-full h-full z-10"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, #362c05 100%),
                            linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)`,
          }}
        />
        <div className="relative z-20 h-full w-full">{children}</div>
      </section>
    );
  }
};

export default HeroGradient;
