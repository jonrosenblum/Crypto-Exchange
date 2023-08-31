import React from 'react';

export default function Input({ type = 'text', className = '', ...props }) {
  return (
    <input
      type={type}
      className="border-[#E9EDF4] w-full rounded border bg-[#FCFDFE] py-1 px-2 mx-1 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
      {...props}
    />
  );
}
