import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="mt-40">
        <h1 className="text-5xl font-bold">Your Social Hub for Meaningful <span className="flex text-[#6c47ff]"> Conversations</span></h1>
        <p className="text-5xl font-bold">Private, Encrypted, and <span className="flex">Hassle-Free Chats</span></p>
      </div>
      <div className="flex gap-4">
      <Button className="bg-[#6c47ff]">Button</Button>
      <Button variant="outline" className="text-[#6c47ff] shadow-[#5c4e90]">Outline</Button>
      </div>
    </div>
  );
}
