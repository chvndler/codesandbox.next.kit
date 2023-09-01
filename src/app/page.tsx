import Image from "next/image";
import AppCanvas from "@/components/canvas";

export default function Home() {
  return (
    <main className="main">
      <AppCanvas>
        <Image
          className="logo"
          src="/kit.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
          style={{}}
        />
      </AppCanvas>
    </main>
  );
}
