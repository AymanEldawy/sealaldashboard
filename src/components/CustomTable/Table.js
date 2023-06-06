import React from "react";


const Table = ({ children, className }) => {
  return (
    <div className={`relative overflow-x-auto rounded-xl border-collapse ${className}`}>
      <table className="border-collapse w-full text-sm text-left text-gray-500 dark:text-gray-400 border rounded-md dark:border-[#333]">
        {children}
      </table>
    </div>
  );
};

export default Table;
