import React from 'react';

type CountdownCardProps = {
  value: number;
  label: string;
};

export function CountdownCard({ value, label }: CountdownCardProps) {
  return (
    <div className="bg-black rounded-xl shadow-lg p-4 flex flex-col items-center justify-center w-[140px] h-[140px] backdrop-blur-sm bg-opacity-80">
      <span className="text-4xl font-bold text-pink-500">{value}</span>
      <span className="text-sm text-pink-400 mt-2 font-medium">{label}</span>
    </div>
  );
}