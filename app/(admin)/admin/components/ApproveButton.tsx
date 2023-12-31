"use client"

import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Campaign, Pin } from "@prisma/client";
import { useRouter } from 'next/navigation';

interface AppButtonProps {
    pin: Pin;
    campaign: Campaign;
  }

const AppButton: React.FC<AppButtonProps> = ({ pin, campaign })  => {

  const router = useRouter();
  const dat = {
    message: "accepted",
    status: "accepted"
    }

    const onSubmit = async () => {
        try {
          await axios.patch(`/api/${pin.id}/${campaign.id}`, dat);
          router.refresh();
          router.push(`/admin`);
          toast.success("Approved");
        } catch (error: any) {
          toast.error(`Something went wrong. ${error}`);
        } finally {
        }
      };

  return (
      <button className='bg-green-400 px-2 py-1 border border-black rounded-md text-xs text-white' onClick={onSubmit}>Approve</button>
    )
}

export default AppButton