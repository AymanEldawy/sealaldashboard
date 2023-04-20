import React from "react";

const ProfileBanner = ({ containerClassName, bannerClassName, children }) => {
  return (
    <div
      className={`h-[110px] bg-primary shadow-inner items-end flex justify-center ${containerClassName}`}
    >
      <div
        className={`bg-white rounded-3xl shadow-md p-3 min-h-[100px] min-w-[400px] lg:min-w-[600px] max-w-4xl ${bannerClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

export default ProfileBanner;
