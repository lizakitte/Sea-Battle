import Image from "next/image";
import LineChart from "./_components/LineChart";

export default function Home() {
  const size = 1024;
  return (
    <div>
      {/* <svg viewBox={`0 0 ${size} ${size}`} width="200" height="200">
        <rect
          x="8"
          y="8"
          width="512"
          height="512"
          fill="none"
          strokeWidth="10"
          stroke="black"
        />
        <line x1="8" y1="8" x2="512" y2="512" strokeWidth="10" stroke="black" />
        <circle
          cx="512"
          cy="512"
          r="138"
          fill="none"
          strokeWidth="10"
          stroke="black"
        />
        <polygon
          points="8 580 512 780 8 980"
          fill="none"
          strokeWidth="10"
          stroke="black"
        />
        <polyline
          points="512 512 1024 1024 0 1024"
          fill="none"
          strokeWidth="10"
          stroke="black"
        />
      </svg> */}
      {/* <LineChart data={[1, 2, 6, 1, 9, 1, 8, 4]}></LineChart> */}
    </div>
  );
}
