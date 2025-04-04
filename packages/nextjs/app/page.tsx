import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/assets/ghibli/bg-hero.png"
        alt="HODLotto Background"
        layout="fill"
        objectFit="cover"
        objectPosition="top center" // Adjusts the starting position of the image
        priority
        quality={100}
      />
    </div>
  );
}
