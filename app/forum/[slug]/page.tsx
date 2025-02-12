"use client"
import ChatForum from '@/components/ChatForum';

const page = async ({ params }) => {
  const slug = (await params).slug;
  return (
    <ChatForum></ChatForum>
  )
}

export default page
