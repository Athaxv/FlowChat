"use client"
import { Chat, useCreateChatClient } from 'stream-chat-react';

// your Stream app information
const apiKey = 'dz5f4d5kzrue';
const userId = 'wandering-waterfall-9';
const userName = 'wandering';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoid2FuZGVyaW5nLXdhdGVyZmFsbC05IiwiZXhwIjoxNzM5MzU5Mjc5fQ.vSIyIYwCOJNKtdsP6_Dqfryp3cBS0gjZCE5qsCypgaQ';

const ChatForum = async () => {
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: { id: userId },
  });

  if (!client) return <div>Setting up client & connection...</div>;

  return <Chat client={client}>Chat with client is ready!</Chat>
}

export default ChatForum
