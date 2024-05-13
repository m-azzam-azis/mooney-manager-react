import React from "react";
import { TransactionItem } from "@/app/inter";
import Image from "next/image";

const HistoryCard = (transaction: TransactionItem) => {
  let amountClass = "";
  if (transaction.type === "expense") {
    amountClass = "text-mainRed";
  } else if (transaction.type === "income") {
    amountClass = "text-mainGreen";
  }
  const date = new Date(transaction.date);
  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg ring-shadow md:p-8 transaction-item">
      <div className="flex justify-between text-xs md:text-sm">
        <p>
          {dateString}
          {"    "}
          <span className="font-thin text-neutral-500">{timeString}</span>
        </p>
        <p className="text-sm font-bold transaction-category md:text-base">
          {transaction.category}
        </p>
      </div>
      <div className="flex w-full gap-4">
        <Image src={transaction.url} alt="icon" height={48} width={48} />
        <div className="flex flex-col flex-1 truncate text-clip w-max-full">
          <h4 className="text-base font-bold truncate sm:text-lg md:text-xl transaction-name">
            {transaction.name}
          </h4>
          <p className="text-sm font-thin truncate text-neutral-500 md:text-base">
            {transaction.description}
          </p>
        </div>
      </div>
      <div className="border border-neutral-300"> </div>
      <div className="${amountClass} flex-1 text-end font-bold text-lg md:text-2xl">
        {transaction.amount}
      </div>
    </div>
  );
};

export default HistoryCard;
