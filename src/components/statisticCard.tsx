// components/StatisticsCard.tsx

import React from "react";

// Definisikan tipe props untuk komponen
interface StatisticsCardProps {
  title: string;
  value: number | string;
  icon?: React.ReactNode; // Komponen ikon opsional
  bgColor?: string; // Warna background opsional untuk card
}

// Komponen StatisticsCard
const StatisticsCard: React.FC<StatisticsCardProps> = ({
  title,
  value,
  icon,
  bgColor,
}) => {
  return (
    <div
      className={`card w-full max-w-xs shadow-lg p-4 rounded-lg ${
        bgColor || "bg-base-100"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Menampilkan ikon jika ada */}
        {icon && <div className="text-3xl text-primary">{icon}</div>}
        <div className="text-right">
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold text-primary">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
