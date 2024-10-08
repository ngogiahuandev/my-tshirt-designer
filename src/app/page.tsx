import dynamic from "next/dynamic";

const Scence = dynamic(() => import("@/components/3d/Scence"), { ssr: false });

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Scence />
    </div>
  );
}
