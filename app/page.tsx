import Image from "next/image";
import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/FeatureCard/FeatureCard";

export default function Home() {
  return (
    <div className="flex flex-col gap-10  items-center justify-items-center min-h-screen p-8 pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="mt-10 sm:text-2xl ">
        <h1 className="text-5xl font-bold text-center">Your Social Hub for Meaningful <span className="flex items-center justify-center text-center text-[#6c47ff]"> Conversations</span></h1>
        <p className="text-5xl font-bold text-center">Private, Encrypted, and <span className="flex items-center justify-center text-center text-[#8365fc]">Hassle-Free Chats</span></p>
      </div>
      <div>
        <p className="font-bold flex items-center text-center text-sm w-[700px] text-gray-400">Your Social Hub for Meaningful
        Connect with friends, family, and colleagues effortlessly. FlowChat offers a 
  secure and intuitive messaging experience with end-to-end encryption, ensuring 
  your conversations remain private and protected.</p>
      </div>
      <div className="flex gap-4 mt-5">
      <Button className="bg-[#6c47ff] hover:bg-[#8263fb]">Get Started</Button>
      <Button variant="outline" className="text-[#6c47ff] shadow-[#5c4e90] hover:text-[#7959fa]">Chat</Button>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        <FeatureCard
          title="End-to-End Encryption"
          description="Your messages are private and secure, ensuring full confidentiality."
          icon={<span className="text-[#8365fc] text-4xl">🔒</span>}
        />
        <FeatureCard
          title="Real-Time Messaging"
          description="Experience seamless and instant communication with zero lag."
          icon={<span className="text-[#8365fc] text-4xl">⚡</span>}
        />
        <FeatureCard
          title="Multi-Platform Support"
          description="Access FlowChat from any device - mobile, tablet, or desktop."
          icon={<span className="text-[#8365fc] text-4xl">💻</span>}
        />
      </div>
    </div>
  );
}