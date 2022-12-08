import React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {}

const Logo = ({ width = 168, height = 168, ...props }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 168 168"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={84}
        cy={84}
        r={80}
        fill="transparent"
        stroke="var(--blue12)"
        strokeWidth={10}
      />
      <path
        d="M36.018 40.904h-21.41l31.007 92.754h21.41L93.6 58.713h22.886l5.906-17.809H44.139l6.644 17.809h21.409v1.484L58.165 101.01 36.018 40.904Z"
        fill="var(--blue12)"
        stroke="transparent"
        strokeWidth={4}
      />
      <path
        d="M109.843 100.267 98.031 68.359l-9.598 28.198 11.812 37.843h22.148l30.268-93.496h-22.148l-20.67 59.363Z"
        fill="var(--blue12)"
        stroke="transparent"
        strokeWidth={4}
      />
      <circle
        cx={84}
        cy={84}
        r={82.5}
        fill="transparent"
        stroke="var(--blue12)"
        strokeWidth={3}
      />
      <path
        d="M36.018 40.904h-21.41l31.007 92.754h21.41L93.6 58.713h22.886l5.906-17.809H44.139l6.644 17.809h21.409v1.484L58.165 101.01 36.018 40.904Z"
        fill="transparent"
        stroke="var(--blue12)"
        strokeWidth={4}
      />
      <path
        d="M109.843 100.267 98.031 68.359l-9.598 28.198 11.812 37.843h22.148l30.268-93.496h-22.148l-20.67 59.363Z"
        fill="transparent"
        stroke="var(--blue12)"
        strokeWidth={4}
      />
    </svg>
  );
};

export default Logo;
