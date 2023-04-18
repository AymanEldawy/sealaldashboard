import { Layout } from "@/components/Layout/Layout";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React, { useContext } from "react";

const Chat = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <Layout>
      
    </Layout>
  );
};

export default Chat;