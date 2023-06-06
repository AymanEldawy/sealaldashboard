import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React, { useContext, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { ChevronIcon } from '../Icons';

const CustomCalendarHeader = ({ date, decreaseMonth, increaseMonth }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("en-us", { month: "long" });

  return (
    <div className="flex gap-1 items-center justify-between px-4 border-t border-b bg-white border-gray-300 py-3">
      <button onClick={decreaseMonth}><ChevronIcon className="scale-75 text-gray-400 rtl:rotate-180" /></button>
      <h3 className='text-primary font-medium text-base'>{`${month} ${year}`}</h3>
      <button onClick={increaseMonth}><ChevronIcon className="scale-75 text-gray-400 ltr:rotate-180" /></button>
    </div>
  );
}
export const EventsCalender = () => {
  const { lang } = useContext(LanguageContext)
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className='bg-white rounded-md mt-4 p-4'>
      <h2 className='text-secondary lg:text-lg font-semibold'>{fetchWord('Events_calendar', lang)}</h2>
      <ReactDatePicker
        // selected={startDate}
        // onChange={(date) => setStartDate(date)}
        
        open={true}
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        calendarClassName="custom-calendar-events !flex flex-col w-full !border-0"
        className='w-full'
        shouldCloseOnSelect={false}
        wrapperClassName='w-full !hidden'
        popperClassName='w-full !static !transform-none'
        monthClassName="flex flex-col"
        // dayClassName="text-[#9291A5] text-lg"
        showPopperArrow={false}
        openToDate={selectedDate}
        c
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          <CustomCalendarHeader
            date={date}
            decreaseMonth={decreaseMonth}
            increaseMonth={increaseMonth}
          />
        )}
      >
        <div className="flex gap-4 items-center w-full border-t mt-4 px-4">
          <span className='flex flex-col text-base font-medium items-center justify-center text-center rounded-full h-20 w-20 bg-secondary-light'>
            <span className='text-primary'>02</span>
            <span className='text-secondary'>Nov</span>
          </span>
          <div className=''>
            <h4 className="text-secondary font-medium text-base lg:text-lg">{fetchWord('Fashion_sale', lang)}</h4>
            <p className="whitespace-nowrap text-gray-500">{fetchWord('Fashion_sale_msg', lang)}</p>
          </div>
        </div>
      </ReactDatePicker>
    </div >
  )
}
