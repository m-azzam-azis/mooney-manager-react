import React from 'react'

const HistorySection = () => {
  return (
    <section className="flex flex-col w-full gap-6 p-4 bg-white rounded-xl ring-shadow sm:p-6">
      <h4 className="text-xl font-bold md:text-2xl">Transaction History</h4>
      <input className="w-full p-3 mt-1 bg-neutral-50 rounded-xl md:flex-1" type="text"
        placeholder="Search transaction name" id="search-transaction"></input>

      <div className="flex flex-col gap-2 md:gap-4 md:flex-1">
        <label className="text-sm font-normal text-neutral-500 md:text-lg" htmlFor="filter-category">Filter Category</label>
        <select className="p-4 text-sm bg-neutral-50 md:text-base rounded-xl" name="filter-category" id="filter-category">
          <option value="" disabled selected>Select Category</option>
          <option value="all">All</option>
          <option value="Salary">Salary</option>
          <option value="Housing">Housing</option>
          <option value="Transportation">Transportation</option>
          <option value="Food">Food & Drinks</option>
          <option value="Bills">Bills</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div className="flex flex-col gap-4 px-2 md:grid md:grid-cols-2 lg:grid-cols-3" id="history-container">

      </div>
    </section>
  )
}

export default HistorySection