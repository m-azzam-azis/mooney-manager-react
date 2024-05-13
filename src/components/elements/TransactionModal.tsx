import { useRef, useEffect, useState } from "react";

const TransactionModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef(null);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: any) => {
    const sectionElement = modalRef.current;
    const formElement = sectionElement.querySelector("form");

    if (sectionElement && !formElement.contains(event.target)) {
      handleModalClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section
      className={`fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen p-4 overflow-y-scroll transition duration-500 bg-gray-400/20 backdrop-blur-xl py-auto sm:px-10 md:px-16 ${
        isOpen ? "" : "closed"
      }`}
      id="record-htmlForm"
      ref={modalRef}
    >
      <form className="w-full max-w-2xl p-2 bg-white rounded-xl h-fit sm:p-4">
        <label
          htmlFor="record-htmlForm"
          className="flex items-center justify-between px-4 py-2 text-lg font-bold md:text-xl"
        >
          New Record{" "}
          <button
            id="record-close-button"
            className="font-extralight"
            onClick={handleModalClose}
          >
            &#x2715;
          </button>
        </label>
        <div className="flex flex-wrap gap-4 p-4 md:gap-6">
          <div
            className="flex w-full bg-neutral-50 rounded-xl"
            id="income-expense-choice"
          >
            <button
              className="flex items-center justify-center flex-1 py-4 text-sm font-normal transition-colors md:text-base rounded-xl hover:ring-1 ring-inset ring-main"
              id="income-choice"
            >
              Income
            </button>
            <button
              className="flex items-center justify-center flex-1 py-4 text-sm font-normal transition-colors md:text-base rounded-xl hover:ring-1 ring-inset ring-main"
              id="expense-choice"
            >
              Expense
            </button>
          </div>

          <div className="flex flex-col w-full gap-2 md:flex-1 md:gap-4 md:w-1/2">
            <label
              className="text-sm font-normal text-neutral-500 md:text-lg"
              htmlFor="order-category"
            >
              Categories
            </label>
            <select
              className="p-4 text-sm bg-neutral-50 md:text-base rounded-xl"
              name="order-category"
              id="order-category"
            >
              <option value="" disabled selected>
                Select Category
              </option>
              <option value="Salary">Salary</option>
              <option value="Housing">Housing</option>
              <option value="Transportation">Transportation</option>
              <option value="Food">Food & Drinks</option>
              <option value="Bills">Bills</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="flex flex-col w-full gap-2 md:flex-1 md:gap-4 md:w-1/2">
            <label
              className="text-sm font-normal text-neutral-500 md:text-lg"
              htmlFor="order-name"
            >
              Transaction Name
            </label>
            <input
              className="p-4 text-sm bg-neutral-50 md:text-base rounded-xl"
              type="text"
              required
              id="order-name"
              placeholder="Pay rent, car payment, etc"
            ></input>
          </div>
          <div className="flex flex-col w-full gap-2 text-sm font-normal md:gap-4 text-neutral-500 md:text-lg">
            <label htmlFor="order-description">Description</label>
            <textarea
              className="p-4 text-sm bg-neutral-50 md:text-base rounded-xl"
              typeof="text"
              name="order-description"
              id="order-description"
              rows={4}
              cols={0}
              placeholder="Additional Description htmlFor the transaction"
            ></textarea>
          </div>

          <div className="w-full md:py-1">
            <label
              htmlFor="order-input"
              className="text-sm font-normal text-neutral-500 md:text-lg"
            >
              Amount
            </label>
            <input
              className="w-full p-3 mt-1 bg-neutral-50 rounded-xl "
              type="text"
              name="currency-field"
              id="order-input"
              required
              autoComplete="off"
              data-type="currency"
              placeholder="$1,000"
            ></input>
          </div>
          <button
            className="flex items-center justify-center w-full py-3 text-base font-bold bg-main md:text-lg rounded-xl hover:ring-shadow"
            id="order-submit-button"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default TransactionModal;
