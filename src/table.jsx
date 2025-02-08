import React from "react";

const data = [
  {
    safetyRating: "AAA",
    minSuccessfulGBs: 15,
    minEmployeeContacts: 3,
    continuousYears: "5+",
    regularUpdates: "Y",
    keysetGBMoQ: "n/a",
    ticketingResponse: "3 business days",
    gbPostLimits: "3+30",
    riskLevel: "low",
  },
  {
    safetyRating: "AA",
    minSuccessfulGBs: 10,
    minEmployeeContacts: 2,
    continuousYears: "3+",
    regularUpdates: "Y",
    keysetGBMoQ: "n/a",
    ticketingResponse: "3 business days",
    gbPostLimits: "3+20",
    riskLevel: "low",
  },
  {
    safetyRating: "A",
    minSuccessfulGBs: 8,
    minEmployeeContacts: 2,
    continuousYears: "2+",
    regularUpdates: "Y",
    keysetGBMoQ: "n/a",
    ticketingResponse: "3 business days",
    gbPostLimits: "3+16",
    riskLevel: "low",
  },
  {
    safetyRating: "N",
    minSuccessfulGBs: "<3",
    minEmployeeContacts: 1,
    continuousYears: "<1 year",
    regularUpdates: "Y",
    keysetGBMoQ: "Y",
    ticketingResponse: "4 business days",
    gbPostLimits: "3",
    riskLevel: "low",
  },
  {
    safetyRating: "C",
    minSuccessfulGBs: "n/a",
    minEmployeeContacts: "n/a",
    continuousYears: "n/a",
    regularUpdates: "N",
    keysetGBMoQ: "0",
    ticketingResponse: "N",
    gbPostLimits: "0",
    riskLevel: "moderate-high",
  },
  {
    safetyRating: "D",
    minSuccessfulGBs: "n/a",
    minEmployeeContacts: "n/a",
    continuousYears: "1 or more failed GBs in past year",
    regularUpdates: "n/a",
    keysetGBMoQ: "n/a",
    ticketingResponse: "n/a",
    gbPostLimits: "0",
    riskLevel: "high",
  },
];

const Table = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          {/* First Div */}
          <div className="flex-1  p-6 m-[5px] text-center rounded-lg ">
            <h2 className="text-rOrange text-[48px] font-bagel ">
              Trust and Safety Rating Classification Summary
            </h2>
          </div>

          {/* Second Div */}
          <div className="flex-1 p-6  flex justify-end items-center">
            <img className="w-[10%] mr-[20%] -mt-[20%]" src="/Frame 182.png" alt="" />
          </div>
        </div>
      </div>
      <div className="container justify-center items-start flex mx-auto p-4">
       <img className="w-[70%]" src="/table.png" alt="" />
      </div>
    </>
  );
};

export default Table;
















 {/* <table className="table-auto w-full border-collapse border border-gray-300 hidden mobile:hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">
                Safety Rating
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Min # of Successful GBs
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Min # Employee Contacts
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Continuous Years of No Failed GBs
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Regular GB Updates
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Keyset GB MoQ Sharing
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Ticketing System and Admin Response Time
              </th>
              <th className="border border-gray-300 px-4 py-2">
                GB Post Limits
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border border-gray-300 px-4 py-2">
                  {item.safetyRating}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.minSuccessfulGBs}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.minEmployeeContacts}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.continuousYears}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.regularUpdates}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.keysetGBMoQ}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.ticketingResponse}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.gbPostLimits}
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}