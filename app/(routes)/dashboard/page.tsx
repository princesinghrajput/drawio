"use client";

import { Button } from '@/components/ui/button';
import { api } from '@/convex/_generated/api';
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useConvex, useMutation } from 'convex/react';
import React, { useEffect, useState } from 'react';
import Header from './_components/Header';
import FileList from './_components/FileList';
const Dashboard = () => {
  const convex = useConvex();
  const { user }: any = useKindeBrowserClient();
  const createUser = useMutation(api.user.createUser);
  
  // Local state to manage loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      checkUser();
    }
  }, [user]);

  const checkUser = async () => {
    try {
      // Ensure email exists before querying
      if (!user?.email) {
        setLoading(false);
        return;
      }

      const result = await convex.query(api.user.getUser, { email: user.email });

      if (!result?.length) {
        await createUser({
          name: user.given_name,
          email: user.email,
          image: user.picture,
        });
      }
    } catch (error) {
      console.error("Error checking or creating user:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='text-black p-8'>
      <Header/>

      <FileList/>
    </div>
  );
};

export default Dashboard;
