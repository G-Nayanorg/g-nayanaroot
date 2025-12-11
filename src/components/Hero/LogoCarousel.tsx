import React from "react";
import Image from "next/image";

const logos = [
  { id: 1, src: "/logos/logo1.svg", alt: "Client Logo 1" },
  { id: 2, src: "/logos/logo2.svg", alt: "Client Logo 2" },
  { id: 3, src: "/logos/logo3.png", alt: "Client Logo 3" },
  { id: 4, src: "/logos/logo4.svg", alt: "Client Logo 4" },
  { id: 5, src: "/logos/Glaucoma.png", alt: "Client Logo 5" }, // Fixed duplicate ID
];

const LogoCarousel = () => {
  // Duplicate list once to create seamless loop
  const scrollingList = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-2">
      <div className="scroll-wrapper">
        {scrollingList.map((logo, index) => (
          <div
            key={`logo-${index}`}
            className="flex items-center justify-center shrink-0 px-6 sm:px-8 md:px-12"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={40}
              className="object-contain max-h-8 sm:max-h-10 w-auto"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .scroll-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 20px; /* Even spacing between all logos */
          animation: scroll 25s linear infinite;
          width: max-content; /* AUTO adjusts width, prevents layout breaking */
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-40%);
          }
        }

        .scroll-wrapper:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .scroll-wrapper {
            gap: 10px;
            animation: scroll 20s linear infinite;
          }
        }

        @media (max-width: 768px) {
          .scroll-wrapper {
            gap: 15px;
            animation: scroll 22s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel;
