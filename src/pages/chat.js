import ChatMessageCard from "@/components/ChatMessageCard/ChatMessageCard";
import { InputField } from "@/components/Forms/InputField";
import { Button } from "@/components/Global/Button/Button";
import { LinkIcon, SendIcon } from "@/components/Icons";
import { Layout } from "@/components/Layout/Layout";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import React, { useContext, useState } from "react";

const allMessages = [
  { status: 'read', message: "Hey how are you ?", author: "me" },
  { status: 'arrived', message: "I need to ask you about ……….", author: "me" },
  { status: '', message: "I am fine ... ", author: "" },
  { status: 'send', message: "Did you check the new updates?", author: "me" },
];
const Chat = () => {
  const { lang } = useContext(LanguageContext);
  const [messages, setMessages] = useState(allMessages);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      setMessages((prev) => {
        return [...prev, { message, author: "me" }];
      });
      setMessage('')
    }
  };
  return (
    <Layout hideApp>
      <div className="flex gap-4">
        <div className="bg-gray-200 min-w-[400px] sticky h-[100dvh] overflow-auto scroll-hide">
          {
            Array(12).fill(0)?.map((room, index) => (

              <div key={index} className="border-b px-4 border-gray-300 py-2 hover:rounded-md cursor-pointer hover:bg-gray-300">
                <div className="flex items-start gap-4 p-1">
                  <Image src="/images/clients/Ellipse 180.png" alt="user Avatart" height={50} width={50} />
                  <div className="">
                    <h3>John smeth</h3>
                    <p className="text-lead text-sm">testing message lab lab lab</p>
                  </div>
                  <span className="capitalize text-xs ltr:ml-auto rtl:mr-auto text-gray-600">yesterday</span>
                </div>
              </div>
            ))
          }
        </div>
        <div className="relative flex-1 flex-col flex">
          <div className="flex flex-col gap-4 mt-4 mx-8 overflow-auto scroll-hide max-h-[576px]">
            {messages?.map((msg, index) => (
              <ChatMessageCard key={`${msg?.author}${index}`} author={msg?.author} status={msg?.status}>
                {msg?.message}
              </ChatMessageCard>
            ))}
          </div>
          <form
            onSubmit={sendMessage}
            className="flex gap-2 bg-white py-2 px-4 w-full mt-auto"
          >
            <div className="relative !bg-[#1DA1F2] p-2 w-12 flex items-center justify-center  rounded-md">
              <input
                type="file"
                multiple
                className="opacity-0 z-10 absolute top-0 left-0 h-full w-full"
              />
              <LinkIcon />
            </div>
            <InputField
              name="message"
              value={message}
              classes=" flex-1"
              onChange={(e) => setMessage(e.target.value)}
              containerClassName="!mb-0"
            />
            <Button classes="!bg-primary !text-white !p-1 !w-16 flex !bg-[#1DA1F2] items-center justify-center">
              <SendIcon />
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Chat;