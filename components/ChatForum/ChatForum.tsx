"use client"
import { useEffect, useState } from 'react';
import { Channel, ChannelHeader, Chat, MessageInput, MessageList, Thread, useCreateChatClient, Window } from 'stream-chat-react';
import type { User, Channel as StreamChannel } from 'stream-chat';

// your Stream app information
const apiKey = 'dz5f4d5kzrue';
const userId = 'wandering-waterfall-9';
const userName = 'wandering';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoid2FuZGVyaW5nLXdhdGVyZmFsbC05IiwiZXhwIjoxNzM5MzU5Mjc5fQ.vSIyIYwCOJNKtdsP6_Dqfryp3cBS0gjZCE5qsCypgaQ';

const user: User = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
};

const ChatForum = () => {

  const [channel, setChannel] = useState<StreamChannel>();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', 'custom_channel_id', {
      image: 'https://getstream.io/random_png/?name=react',
      name: 'Talk about React',
      members: [userId],
    });

    setChannel(channel);
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

  return  (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
}

export default ChatForum
