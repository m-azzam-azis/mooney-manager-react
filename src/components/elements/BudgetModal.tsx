import React from "react";

const BudgetModal = () => {
  return (
    <section
      className="fixed z-20 flex items-center justify-center w-full h-full p-4 overflow-y-scroll transition duration-500 bg-gray-400/20 backdrop-blur-xl py-auto sm:px-10 md:px-16 closed"
      id="budget-form"
    >
      <form
        className="w-full max-w-2xl p-2 bg-white rounded-xl h-fit sm:p-4"
        id="budget-form"
      >
        <label className="flex items-center justify-between px-4 py-2 text-lg font-bold md:text-xl">
          Edit Budget{" "}
          <button id="budget-close-button" className="font-extralight">
            &#x2715;
          </button>
        </label>
        <div className="flex flex-col gap-4 p-4">
          <div className="md:py-1">
            <p className="text-sm font-normal text-neutral-500 md:text-lg">
              Budget
            </p>
            <h4
              className="text-neutral-900 font-transaction"
              id="budget-form-label"
            ></h4>
          </div>
          <div className="md:py-1">
            <label
              htmlFor="budget-input"
              className="text-sm font-normal text-neutral-500 md:text-lg"
            >
              New Budget
            </label>
            <input
              className="w-full p-3 mt-1 bg-neutral-50 rounded-xl "
              type="text"
              name="currency-field"
              id="budget-input"
              required
              autoComplete="off"
              data-type="currency"
              placeholder="$1,000"
            ></input>
          </div>
          <button
            className="flex items-center justify-center w-full py-3 text-base font-bold bg-main md:text-lg rounded-xl hover:ring-shadow"
            id="budget-submit-button"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default BudgetModal;
