"use client";
import React from "react";
import Image from "next/image";
import ellipse from "@/assets/Ellipse 1.svg";
import TransactionModal from "./elements/TransactionModal";
import BudgetModal from "./elements/BudgetModal";

const ResultSection = () => {
  const [showModal, setShowModal] = React.useState(false);

  function popUpNewRecord() {
    setShowModal(true);
  }
  return (
    <section className="relative flex flex-wrap gap-4 sm:gap-6">
      <div className="relative flex flex-col w-full gap-6 px-4 py-6 overflow-hidden duration-300 shadow-sm bg-main rounded-xl ring-1 ring-yellow-500 md:flex-row sm:p-6 hover:shadow-md">
        {/* <img className="absolute top-0 left-0 z-auto rounded-tl-xl" src="icons/Ellipse 1.svg" alt="ellipse decoration"> */}
        <Image
          className="absolute top-0 left-0 z-auto rounded-tl-xl"
          src={ellipse}
          alt="ellipse decoration"
          width={450}
          height={450}
        />
        <h2 className="z-10 text-xl font-bold md:text-2xl">
          Add a new transaction record right now!
        </h2>
        <button
          className="z-10 w-full text-sm font-bold duration-200 border-2 border-black bg-neutral-900 h-14 rounded-xl text-main hover:bg-transparent hover:backdrop-blur-3xl hover:text-black md:w-2/3 md:text-base"
          id="new-record-button"
          onClick={popUpNewRecord}
        >
          Create new record &nbsp;&rarr;
        </button>
      </div>

      <div className="flex flex-col w-full gap-6 p-3 bg-white rounded-xl ring-shadow md:flex-1 sm:p-5 sm:flex-2 ">
        <div>
          <p className="font-description">Budget</p>
          <h4
            className="text-neutral-900 font-transaction md:text-xl"
            id="budget"
          ></h4>
        </div>
        <button
          className="text-base text-yellow-600 duration-200 text-start hover:translate-x-2 w-fit"
          id="budget-edit-button"
        >
          Edit Budget &nbsp;&rarr;
        </button>
      </div>

      <div className="flex flex-col flex-1 gap-1 p-3 bg-white rounded-xl ring-shadow sm:p-5">
        <div className="font-description">Income</div>
        <h4 className="text-mainGreen font-transaction" id="income"></h4>
      </div>

      <div className="flex flex-col flex-1 gap-1 p-3 bg-white rounded-xl ring-shadow sm:p-5">
        <div className="font-description">Expense</div>
        <h4 className="text-mainRed font-transaction" id="expense"></h4>
      </div>
      {showModal && <TransactionModal />}
      <BudgetModal />
    </section>
  );
};

export default ResultSection;
