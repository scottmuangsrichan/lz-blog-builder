import { useState, useEffect } from "react";

export default function Calculator() {
  const [earn, setEarn] = useState(0);
  const [yearsActive, setYearsActive] = useState(0);
  const [debt, setDebt] = useState(0);
  const [cashSurplus, setCashSurplus] = useState(0);
  const [valuation, setValuation] = useState(0);
  const [multiple, setMultiple] = useState(2.5);
  const [debtRisky, setDebtRisky] = useState(0);
  const [debtProfit, setDebtProfit] = useState(0);
  const [debtOwner, setDebtOwner] = useState(0);

  useEffect(() => {
    totalMultiple();
    valuationEstimate();
  }, [
    yearsActive,
    debtRisky,
    debtProfit,
    debtOwner,
    earn,
    debt,
    cashSurplus,
    valuation,
  ]);

  const totalMultiple = () => {
    const totalYears = yearsActive === 0 ? 0 : yearsActive / 10;
    const totalDebtRisky = debtRisky === 1 ? 0.05 : debtRisky / 10;
    const totalDebtProfit = debtProfit === 1 ? 0.05 : debtProfit / 10;
    const totalDebtOwner = debtOwner === 1 ? 0.1 : debtOwner / 10;
    const total =
      totalYears + totalDebtRisky + totalDebtProfit + totalDebtOwner;
    const roundedTotal = Math.round(total * 4) / 4;
    setMultiple(roundedTotal);
  };

  const valuationEstimate = () => {
    const totalMultiple = multiple * earn;
    const totalDebt = debt;
    const totalCashSurplus = cashSurplus;
    const totalValuation = totalMultiple - totalDebt + totalCashSurplus;
    const roundedValuation = Math.round(totalValuation * 4) / 4;
    setValuation(roundedValuation);
  };

  return (
    <div className="max-w-[1200px] mx-auto w-fit">
      <h1 className="font-bold text-6xl text-center py-10">
        Small Business <br /> Valuation Calculator
      </h1>
      <div className="flex flex-col gap-10 shadow-2xl border rounded-lg md:w-3/4 mx-auto">
        <div className="p-10">
          <h3 className="text-xl font-semibold pb-6 text-gray-800">
            How much does the business earn in a normal year?
          </h3>
          <div className="border flex flex-col pl-3 py-3">
            <label className="font-semibold text-gray-500">
              Enter the EBITDA
            </label>
            <div>
              <span className="text-xl">$</span>
              <input
                type="number"
                placeholder="0"
                className="text-xl text-orange-500"
                value={earn}
                onChange={(e) => setEarn(parseInt(e.target.value))}
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-100 px-10 py-20">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-xl font-semibold pb-3 text-gray-800">
              How many years has your busienss been active?
            </h3>
            <p className="text-2xl font-semibold text-gray-500">
              <span className="text-2xl text-orange-500 pr-3">
                {yearsActive}
              </span>
              Years
            </p>
          </div>
          <input
            type="range"
            min="0"
            max="20"
            value={yearsActive}
            className="w-full h-2 bg-orange-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-800"
            onChange={(e) => setYearsActive(parseInt(e.target.value))}
          />
          <div className="flex flex-row justify-between">
            <p className="text-xl text-gray-600">0</p>
            <p className="text-xl text-gray-600">20+</p>
          </div>
        </div>
        <div className="p-10">
          <h3 className="text-xl font-semibold pb-6 text-gray-800">
            How stable is your industry and business model?
          </h3>
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-col gap-3">
              <input
                type="radio"
                name="debt-risky"
                value="8"
                className="w-full h-6 text-orange-500 focus:ring-orange-500"
                onChange={(e) => setDebtRisky(parseInt(e.target.value))}
              />
              <label>Very Unstable</label>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="radio"
                name="debt-risky"
                value="6"
                className="w-full h-6 text-orange-500 focus:ring-orange-500"
                onChange={(e) => setDebtRisky(parseInt(e.target.value))}
              />
              <label>Unstable</label>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="radio"
                name="debt-risky"
                value="4"
                className="w-full h-6 text-orange-500 focus:ring-orange-500"
                onChange={(e) => setDebtRisky(parseInt(e.target.value))}
              />
              <label>Average</label>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="radio"
                name="debt-risky"
                value="2"
                className="w-full h-6 text-orange-500 focus:ring-orange-500"
                onChange={(e) => setDebtRisky(parseInt(e.target.value))}
              />
              <label>Stable</label>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="radio"
                name="debt-risky"
                value="0"
                className="w-full h-6 text-orange-500 focus:ring-orange-500"
                onChange={(e) => setDebtRisky(parseInt(e.target.value))}
              />
              <label>Very Stable</label>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 px-10 py-20">
          <h3 className="text-xl font-semibold pb-6 text-gray-800">
            What is the trend of your annual profits?
          </h3>
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-col gap-3">
              <input
                type="radio"
                name="debt-profit"
                value="0"
                className="w-full h-6 text-orange-500 focus:ring-orange-500"
                onChange={(e) => setDebtProfit(parseInt(e.target.value))}
              />
              <label>Declining Rapidly</label>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="radio"
                name="debt-profit"
                value="2"
                className="w-full h-6 text-orange-500 focus:ring-orange-500"
                onChange={(e) => setDebtProfit(parseInt(e.target.value))}
              />
              <label>Declining Slowly</label>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="radio"
                name="debt-profit"
                value="4"
                className="w-full h-6 text-orange-500 focus:ring-orange-500"
                onChange={(e) => setDebtProfit(parseInt(e.target.value))}
              />
              <label>Stable</label>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="radio"
                name="debt-profit"
                value="6"
                className="w-full h-6 text-orange-500 focus:ring-orange-500"
                onChange={(e) => setDebtProfit(parseInt(e.target.value))}
              />
              <label>Growing Slowly</label>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="radio"
                name="debt-profit"
                value="8"
                className="w-full h-6 text-orange-500 focus:ring-orange-500"
                onChange={(e) => setDebtProfit(parseInt(e.target.value))}
              />
              <label>Growing Rapidly</label>
            </div>
          </div>
        </div>
        <div className="p-10">
          <h3 className="text-lg font-semibold pb-6 text-gray-800">
            How easy would it be for a new owner to take over? Is the current
            owner replaceable, or are they a key part of the business?
          </h3>
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-col gap-3">
              <input
                type="radio"
                name="debt-owner"
                value="0"
                className="w-full h-6 text-orange-500 focus:ring-orange-500"
                onChange={(e) => setDebtOwner(parseInt(e.target.value))}
              />
              <label>Very Difficult</label>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="radio"
                name="debt-owner"
                value="2"
                className="w-full h-6 text-orange-500 focus:ring-orange-500"
                onChange={(e) => setDebtOwner(parseInt(e.target.value))}
              />
              <label>Difficult</label>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="radio"
                name="debt-owner"
                value="4"
                className="w-full h-6 text-orange-500 focus:ring-orange-500"
                onChange={(e) => setDebtOwner(parseInt(e.target.value))}
              />
              <label>Average</label>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="radio"
                name="debt-owner"
                value="6"
                className="w-full h-6 text-orange-500 focus:ring-orange-500"
                onChange={(e) => setDebtOwner(parseInt(e.target.value))}
              />
              <label>Easy</label>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="radio"
                name="debt-owner"
                value="8"
                className="w-full h-6 text-orange-500 focus:ring-orange-500"
                onChange={(e) => setDebtOwner(parseInt(e.target.value))}
              />
              <label>Very Easy</label>
            </div>
          </div>
        </div>
        <div className="px-10 py-20	 bg-gray-100">
          <h3 className="text-xl font-semibold pb-6 text-gray-800">
            Does your business have any surplus cash or investments? If so, how
            much are they worth?
          </h3>
          <div className="border flex flex-col pl-3 py-3 bg-white">
            <label className="font-semibold text-gray-500">Enter amount</label>
            <div>
              <span className="text-xl">$</span>
              <input
                type="number"
                placeholder="0"
                className="text-xl text-orange-500"
                value={cashSurplus}
                onChange={(e) => setCashSurplus(parseInt(e.target.value))}
              />
            </div>
          </div>
        </div>
        <div className="p-10">
          <h3 className="text-xl font-semibold pb-6 text-gray-800">
            Does your business have any debt? If so, how much for?
          </h3>
          <div className="border flex flex-col pl-3 py-3">
            <label className="font-semibold text-gray-500">Enter amount</label>
            <div>
              <span className="text-xl">$</span>
              <input
                type="number"
                placeholder="0"
                className="text-xl text-orange-500"
                value={debt}
                onChange={(e) => setDebt(parseInt(e.target.value))}
              />
            </div>
          </div>
        </div>
        <hr className="bg-orange-500 h-1" />
        <div className="flex flex-row justify-end pr-10 py-10">
          <div className="flex flex-col">
            <h3> Multiple </h3>
            <p> {multiple} </p>
          </div>
          <div className="flex flex-col">
            <h3> Valuation estimate </h3>
            <p>${valuation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
