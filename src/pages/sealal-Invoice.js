import { SectionBar } from "@/components/Global/SectionBar/SectionBar";
import { Layout } from "@/components/Layout/Layout";
import { SealalInvoiceEditing } from "@/components/SealalInvoiceComponents/SealalInvoiceEditing";
import { SealalPackages } from "@/components/SealalInvoiceComponents/SealalPackages";
import { SealalProcess } from "@/components/SealalInvoiceComponents/SealalProcess";
import { SealalQuestions } from "@/components/SealalInvoiceComponents/SealalQuestions";
import { SealalReviews } from "@/components/SealalInvoiceComponents/SealalReviews";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import React, { useContext } from "react";

const SealalInvoice = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <Layout>
      <SectionBar title={fetchWord('My_Sealal_Invoice', lang)}
        extraContent={
          <Link href="/" className="text-secondary">
            {fetchWord('Screen_Introduction', lang)}
          </Link>
        }
      />
      <div className="container !my-4 md:!my-8">
        <SealalInvoiceEditing />
        <SealalProcess />
        <SealalPackages />
        <SealalReviews />
        <SealalQuestions />
      </div>
    </Layout>
  );
};

export default SealalInvoice;