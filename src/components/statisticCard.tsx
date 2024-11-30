import { ClassValue } from "clsx";
import React, { ReactElement } from "react";

function StatisticCard({
  title,
  total,
  iconColor,
  Icon,
}: {
  title: string;
  total: number;
  iconColor: ClassValue;
  Icon: ReactElement;
}) {
  return (
    <div>
      <main className="card bg-base-100 w-72 md:w-60 min-[885px]:w-72  shadow-lg">
        <section className="card-body">
          <div className="flex box-border justify-between">
            <div className="card-title mb-3 mt-[-6px]">{title}</div>
            <div
              className={`rounded-full box-border avatar w-10 h-10 ${iconColor}`}
            >
              {React.cloneElement(Icon, {
                className: `${Icon.props.className || ""} ml-2 mt-2 text-white`, // Tambahkan gaya default
              })}
            </div>
          </div>
          <p className="text-xl">{total}</p>
        </section>
      </main>
    </div>
  );
}

export default StatisticCard;
