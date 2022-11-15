import React from "react";

const GradientBg = () => {
  return (
    <div className="bg">
      <span className="fade"></span>
      <style jsx>
        {`
          .bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.1;
            z-index: -1;
            background: radial-gradient(
                ellipse farthest-side at 76% 77%,
                rgba(212, 227, 245, 0.25) 4%,
                rgba(255, 255, 255, 0) calc(4% + 1px)
              ),
              radial-gradient(
                circle at 76% 40%,
                var(--blue3) 4%,
                rgba(255, 255, 255, 0) 4.18%
              ),
              linear-gradient(135deg, var(--blue9) 0%, var(--blue11) 100%),
              radial-gradient(
                ellipse at 28% 0%,
                var(--blue4) 0%,
                rgba(98, 125, 149, 0.5) 100%
              ),
              linear-gradient(
                180deg,
                var(--violet4) 0%,
                var(--violet6) 69%,
                var(--violet3) 70%,
                var(--violet4) 100%
              );
            background-blend-mode: normal, normal, screen, overlay, normal;
            background-blend-mode: overlay, color, overlay, difference,
              color-dodge, difference, normal;
          }

          .fade {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0) 0%,
              var(--slate1) 100%
            );
          }

          :global(.dark) .bg {
            opacity: 0.7;
          }

          :global(.dark) .fade {
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(1, 1, 1, 1) 100%
            );
          }
        `}
      </style>
    </div>
  );
};

export default GradientBg;
