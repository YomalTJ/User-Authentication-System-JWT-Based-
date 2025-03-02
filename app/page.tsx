'use client'

import { getProfileData } from '@/services/authService';
import React, { useEffect, useState } from 'react'

const Profile = () => {
  const [userData, setUserData] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    getProfileData(userData).then(data => {
      setUserData(data);
    });
  }, []);

  return (
    <div className='p-10 text-white flex flex-col gap-6'>
      <h2>Name: {userData?.name}</h2>
      <h2>Email: {userData?.email}</h2>
    </div>
  )
}

export default Profile