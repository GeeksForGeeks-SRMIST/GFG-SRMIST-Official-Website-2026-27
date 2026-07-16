import React from "react";

export default function BouncingLoader() {
  return (
    <div className="w-full flex justify-center py-12 bg-neutral-background">
      <div className="relative w-[200px] h-[60px]">
        {/* Ball 1 - Pink/Red (Raw Material) */}
        <div className="absolute w-5 h-5 rounded-full left-[15%] bg-accent-500 animate-[ball_0.5s_alternate_infinite_ease]"></div>

        {/* Ball 2 - Yellow (Weaving) */}
        <div className="absolute w-5 h-5 rounded-full left-[45%] bg-primary-500 animate-[ball_0.5s_alternate_infinite_ease_0.2s]"></div>

        {/* Ball 3 - Blue (Finished Product) */}
        <div className="absolute w-5 h-5 rounded-full right-[15%] bg-text-headline animate-[ball_0.5s_alternate_infinite_ease_0.3s]"></div>

        {/* Shadows */}
        <div className="absolute w-5 h-1 rounded-[50%] bg-neutral-300 top-[62px] left-[15%] blur-[1px] animate-[shadow_0.5s_alternate_infinite_ease]"></div>
        <div className="absolute w-5 h-1 rounded-[50%] bg-neutral-300 top-[62px] left-[45%] blur-[1px] animate-[shadow_0.5s_alternate_infinite_ease_0.2s]"></div>
        <div className="absolute w-5 h-1 rounded-[50%] bg-neutral-300 top-[62px] right-[15%] blur-[1px] animate-[shadow_0.5s_alternate_infinite_ease_0.3s]"></div>
      </div>

      <style>{`
        @keyframes ball {
          0% { top: 60px; height: 5px; border-radius: 50px 50px 25px 25px; transform: scaleX(1.7); }
          40% { height: 20px; border-radius: 50%; transform: scaleX(1); }
          100% { top: 0%; }
        }
        @keyframes shadow {
          0% { transform: scaleX(1.5); opacity: 0.8; }
          40% { transform: scaleX(1); opacity: 0.7; }
          100% { transform: scaleX(0.2); opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
