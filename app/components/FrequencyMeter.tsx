"use client";
import { useEffect, useState } from "react";

interface FrequencyMeterProps {
  frequency: number;
}

export const FrequencyMeter = ({ frequency }: FrequencyMeterProps) => {
  const [margin, setMargin] = useState(0);

  useEffect(() => {
    const centerDiff = frequency - 50;
    setMargin(centerDiff * 600);
  }, [frequency]);

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-xl font-semibold">{frequency.toFixed(2)}</p>
      <div className="grid grid-cols-7 w-[420px] h-[50px] border border-white">
        <div className="col-span-1 h-[50px] bg-[#f87171] border-r-2 border-white" />
        <div className="col-span-2 h-[50px] bg-[#fcd34d] border-r-2 border-white" />
        <div className="col-span-1 h-[50px] bg-[#84cc16] border-r-2 border-white" />
        <div className="col-span-2 h-[50px] bg-[#fcd34d] border-r-2 border-white" />
        <div className="col-span-1 h-[50px] bg-[#f87171]" />
      </div>
      <div
        style={{ marginLeft: `${margin - 2}px` }}
        className={`absolute mt-[29px] h-[51px] w-[4px] bg-black`}
      />
      <div>
        <div className="absolute -ml-[32px] h-[15px] w-[2px] bg-white" />
        <p className="absolute -ml-[47px] mt-[15px]">49.9</p>
      </div>
      <div>
        <div className="absolute ml-[28px] h-[15px] w-[2px] bg-white" />
        <p className="absolute ml-[17px] mt-[15px]">50.1</p>
      </div>
      <div>
        <div className="absolute -ml-[151.5px] h-[15px] w-[2px] bg-white" />
        <p className="absolute -ml-[166px] mt-[15px]">49.5</p>
      </div>
      <div>
        <div className="absolute ml-[147.5px] h-[15px] w-[2px] bg-white" />
        <p className="absolute ml-[134px] mt-[15px]">50.5</p>
      </div>
    </div>
  );
};
