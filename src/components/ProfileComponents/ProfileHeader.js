import React, { useContext } from "react";
import ProfileBanner from "../ProfileBanner/ProfileBanner";
import Link from "next/link";
import { EditIcon, GearIcon, StarIcon } from "../Icons";
import Image from "next/image";
import ProfileHeaderInfo from "./ProfileHeaderInfo";
import { fetchWord } from "@/lang/fetchWord";
import { LanguageContext } from "@/context/LangContext";

const ProfileHeader = ({ role }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <ProfileBanner
      containerClassName="items-center h-[180px]"
      bannerClassName="!min-w-[450px] relative overflow-hidden py-4"
    >
   
      <div className="flex gap-4">
        <div className="relative w-fit">
          <div
            className="scale-50 absolute -top-3 ltr:right-0 rtl:left-0 "
          >
            <input type="file"  className="absolute top-0 left-0 z-10 opacity-0"/>
            <EditIcon className="text-secondary" />
          </div>
          <Image
            src={"/images/clients/Ellipse 182.png"}
            alt="Avatar"
            height={100}
            width={100}
            className="rounded-full border-[6px] border-[#F2F2F2]"
          />
        </div>
        <div className="flex-1 flex justify-around items-center gap-8 ltr:pr-4 rtl:pl-4">
          <ProfileHeaderInfo
            title={
              <>
                <StarIcon className="text-secondary w-6 h-6" />
                (5)
              </>
            }
            subtitle={fetchWord("reviews", lang)}
          />
          <ProfileHeaderInfo
            title="175"
            subtitle={fetchWord(role === "provider" || role === "company" ? "offers" : "orders", lang)}
          />
          <ProfileHeaderInfo
            title="+500$"
            subtitle={fetchWord(role === "provider" || role === "company" ? "earning" : 'payments', lang)}
          />
        </div>
      </div>
    </ProfileBanner>
  );
};

export default ProfileHeader;
