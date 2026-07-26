"use client";

export function WaveTransition() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none flex flex-col justify-end">
      {/* Upper line / layer - Soft white */}
      <svg
        viewBox="0 0 1440 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[90px] lg:h-[130px] absolute bottom-0 left-0"
      >
        <path
          d="M0,80 C320,160 420,0 720,80 C1020,160 1120,0 1440,80 L1440,160 L0,160 Z"
          fill="#FFFFFF"
          fillOpacity="0.6"
        />
      </svg>
      {/* Lower fill - Warm Cream to connect to next section */}
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-[45px] md:h-[70px] lg:h-[100px] relative mt-auto"
      >
        <path
          d="M0,60 C320,120 420,0 720,60 C1020,120 1120,0 1440,60 L1440,120 L0,120 Z"
          fill="#efece5"
        />
      </svg>
    </div>
  );
}
