import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col gap-10  items-center justify-items-center min-h-screen p-8 pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="mt-10 sm:text-2xl ">
        <h1 className="text-5xl font-bold text-center">Your Social Hub for Meaningful <span className="flex items-center justify-center text-center text-[#6c47ff]"> Conversations</span></h1>
        <p className="text-5xl font-bold text-center">Private, Encrypted, and <span className="flex items-center justify-center text-center text-[#7653ff]">Hassle-Free Chats</span></p>
      </div>
      <div>
        <p className=" mt-5 font-bold flex items-center text-center text-sm w-[700px] text-gray-400">Your Social Hub for Meaningful
        Connect with friends, family, and colleagues effortlessly. FlowChat offers a 
  secure and intuitive messaging experience with end-to-end encryption, ensuring 
  your conversations remain private and protected.</p>
      </div>
      <div className="flex gap-4 mt-5">
      <Button className="bg-[#6c47ff] ">Button</Button>
      <Button variant="outline" className="text-[#6c47ff] shadow-[#5c4e90]">Outline</Button>
      </div>
    </div>
  );
}