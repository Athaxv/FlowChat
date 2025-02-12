"use client"
import ChatForum from '@/components/ChatForum';

const page = async ({ params }) => {
  const slug = (await params).slug;
  return (
    <div className='p-10'>
    <ChatForum></ChatForum>
    </div>
  )
}

export default page
