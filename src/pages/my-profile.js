import { Layout } from "@/components/Layout/Layout";
import React, { useState } from "react";
import ProfileHeader from "@/components/ProfileComponents/ProfileHeader";
import ProfileBody from "@/components/ProfileComponents/ProfileBody";
import { useContext } from "react";
import { UserRoleContext } from "@/context/UserContext";
const MyProfile = () => {
  const { userRole } = useContext(UserRoleContext)
  return (
    <Layout>
      <ProfileHeader role={userRole} />
      <ProfileBody role={userRole} />
    </Layout>
  );
};

export default MyProfile;
