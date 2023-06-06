import { DocumentTransactionsForm } from '@/components/DocumentTransactionsComponent/DocumentTransactionsForm';
import { DocumentTransactionsTable } from '@/components/DocumentTransactionsComponent/DocumentTransactionsTable';
import { SectionBar } from '@/components/Global/SectionBar/SectionBar'
import { Layout } from '@/components/Layout/Layout'
import TabsContent from '@/components/Tabs/TabsContent';
import TabsList from '@/components/Tabs/TabsList';
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import { useContext } from 'react';
import { useState } from 'react';
const listFilter = [
  'Authenticity_document',
  'Trademark_Registration_procedures',
]


const DocumentTransactions = () => {
  const { lang } = useContext(LanguageContext)
  const [activeTab, setActiveTab] = useState(listFilter?.[0])
  return (
    <Layout>
      <SectionBar title={fetchWord('Document_Transactions', lang)} />
      <div className='container '>
        <div className='mt-4 p-5'>
          <TabsList
            list={listFilter}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            containerClassName="gap-8 bg-white !mb-0 px-4 pt-4 rounded-t-xl border-b scroll-hide overflow-auto"
            itemClassName="!px-0 !py-4 justify-start capitalize whitespace-nowrap text-secondary flex relative text-sm !gap-1"
            activeClassName="before:w-[60px] before:bg-primary before:h-[2px] text-primary before:absolute before:bottom-0 ltr:before:left-0 rtl:before:right-0"
          />
          <TabsContent activeTabName={activeTab}>
            <DocumentTransactionsTable tabName="Authenticity_document" />
             
            <div tabName="Trademark_Registration_procedures" />
          </TabsContent>
        </div>
      </div>
    </Layout>
  )
}

export default DocumentTransactions