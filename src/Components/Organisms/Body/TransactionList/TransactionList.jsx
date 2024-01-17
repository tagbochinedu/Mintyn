import { useState, useEffect } from "react";
import CustomDropdown from "../../../Atoms/CustomDropdown";
import { items } from "../../../../lib/lists";
import CustomDropdown2 from "../../../Atoms/CustomDropdown2";

const TransactionList = () => {
  const [dropdownValue, setDropdownValue] = useState("");
  const [value, setValue] = useState("");
  const [slice, setSlice] = useState(5);
  const [page, setPage] = useState(1);
  const [buttonList, setButtonList] = useState([]);
  const sliceIndex = slice * (page - 1);
  const sliceEnd = page === 1 ? slice : slice * page;
  const filteredItems = items
    .filter(
      (item) =>
        item.itemType.toLowerCase().includes(value) ||
        item.price.includes(value) ||
        item.transactNo.includes(value) ||
        item.time.includes(value)
    )
    .filter((item) => item.status.includes(dropdownValue));

  const buttonLength = () => {
    const numberArray = [];
    for (let i = 1; i <= filteredItems.length / slice; i++) {
      numberArray.push(i);
    }
    setButtonList(numberArray);
  };

  useEffect(() => {
    buttonLength();
  }, [slice, filteredItems.length]);

  return (
    <section className="mt-[43px]">
      <h2 className="text-[#262626] font-segoe text-4xl font-normal mb-4">
        Payments
      </h2>

      <div className="flex items-center my-4">
        <div className="flex gap-x-5 font-segoe text-[13px]">
          <span className="">Showing</span>
          <CustomDropdown2
            data={[
              { value: 5, title: 5 },
              { value: 10, title: 10 },
              { value: 20, title: 20 },
            ]}
            dataHandler={(prop) => setSlice(prop)}
          />

          <span className="">out of 500 payments</span>
        </div>
        <div className="flex items-center grow max-w-[31%] ml-[57px] mr-[137px] gap-x-2 py-[9px] border-b-[0.5px] border-[#787878]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M11.6573 12L7.66054 8.00325C6.77101 8.80345 5.60422 9.22472 4.40868 9.17734C3.21314 9.12995 2.08334 8.61766 1.25994 7.74958C0.436537 6.8815 -0.0153972 5.72623 0.000400647 4.52986C0.0161985 3.33348 0.49848 2.19056 1.34452 1.34452C2.19056 0.49848 3.33348 0.0161985 4.52986 0.000400647C5.72623 -0.0153972 6.8815 0.436537 7.74958 1.25994C8.61766 2.08334 9.12995 3.21314 9.17734 4.40868C9.22472 5.60422 8.80345 6.77101 8.00325 7.66054L12 11.6573L11.6573 12ZM4.5954 0.492454C3.7833 0.489588 2.98862 0.727783 2.31199 1.17687C1.63536 1.62597 1.10723 2.26575 0.794463 3.01521C0.481699 3.76467 0.398378 4.59008 0.555052 5.38693C0.711726 6.18377 1.10135 6.9162 1.67457 7.49146C2.2478 8.06671 2.97884 8.45892 3.77513 8.61841C4.57142 8.7779 5.39712 8.6975 6.14768 8.38739C6.89824 8.07727 7.53989 7.5514 7.99137 6.87637C8.44285 6.20133 8.68385 5.4075 8.68386 4.5954C8.68259 3.51012 8.2519 2.46945 7.48585 1.70069C6.71981 0.931925 5.68066 0.497555 4.5954 0.492454Z"
              fill="#0E1D25"
            />
          </svg>
          <input
            type="text"
            className="text-[#787878] font-segoe placeholder:font-segoe placeholder:text-[11px] text-[11px] appearance-none bg-transparent outline-none w-full h-[18px]"
            placeholder="Search..."
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="font-segoe grow flex items-center gap-x-4">
          <span className="text-black text-[13px]">Show</span>
          <CustomDropdown
            data={[
              { value: "", title: "All" },
              { value: "Reconcilled", title: "Reconcilled" },
              { value: "Un-reconcilled", title: "Un-reconcilled" },
              { value: "Settled", title: "Settled" },
              { value: "Unsettled", title: "Unsettled" },
            ]}
            dataHandler={(prop) => setDropdownValue(prop)}
          />
        </div>
      </div>
      <div className="mb-8">
        <div className="bg-[#eaeef0] py-3 px-6 flex justify-between text-[#7f8fa4] font-segoe text-sm font-normal">
          <div className="w-[44.2%]">
            <h6 className="">Item Type</h6>
          </div>
          <div className="w-[11.4%]">
            <h6 className="">Price</h6>
          </div>
          <div className="w-[16.2%]">
            <h6 className="">Transaction No.</h6>
          </div>
          <div className="w-[10.0%]">
            <h6 className="">Time</h6>
          </div>
          <div className="w-[17.7%]">
            <h6 className="">Status</h6>
          </div>
        </div>
        <ul>
          {filteredItems.slice(sliceIndex, sliceEnd).map((item, index) => (
            <li
              className="flex py-5 px-6 bg-white items-center justify-between text-sm font-segoe text-[#7f8fa4] border-t-[#cccfda] border first:border-none"
              key={index}
            >
              <div className="w-[44.2%] flex items-center gap-x-6">
                <div className="w-9 h-9 rounded-full bg-[#7f8fa4] flex items-center justify-center text-white text-xs font-segoe">
                  VW
                </div>
                <span className="text-[#414042]">{item.itemType}</span>
              </div>
              <div className="w-[11.4%]">
                <h6 className="">{item.price}</h6>
              </div>
              <div className="w-[16.2%]">
                <h6 className="">{item.transactNo}</h6>
              </div>
              <div className="w-[10.0%]">
                <h6 className="">{item.time}</h6>
              </div>
              <div className="w-[17.7%] flex items-center gap-x-8">
                <div className="py-[9px] pl-3 w-[120px] rounded-[30px] flex items-center gap-x-2 border-[#cccfda] border">
                  <div
                    className={`w-[9px] h-[9px] rounded-full ${
                      item.status === "Pending"
                        ? "bg-[#ebc315]"
                        : item.status === "Reconcilled"
                        ? "bg-[#27ae60]"
                        : item.status === "Un-reconcilled"
                        ? "bg-[#7f8fa4]"
                        : ""
                    }`}
                  />
                  <p
                    className={`text-xs ${
                      item.status === "Pending"
                        ? "text-[#ebc315]"
                        : item.status === "Reconcilled"
                        ? "text-[#27ae60]"
                        : item.status === "Un-reconcilled"
                        ? "text-[#7f8fa4]"
                        : ""
                    }`}
                  >
                    {item.status}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="16"
                  viewBox="0 0 9 6"
                  fill="none"
                >
                  <path d="M8 1L4.5 5L1 1" stroke="#cccfda" />
                </svg>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between text-[13px]">
        <p className="font-segoe text-black">
          Showing {sliceIndex + 1} to {sliceEnd} of {filteredItems.length} entries
        </p>
        <div className="flex border border-[#ced0da]">
          <button
            className="font-segoe text-black px-2.5"
            onClick={() => {
              page > 1 && setPage((prev) => prev - 1);
            }}
          >
            Previous
          </button>
          {buttonList.map((button, index) => (
            <button
              className={`w-8 h-7 border border-x-[#ced0da]  ${
                page === button ? "bg-[#1875F0] text-white" : "text-[#979797]"
              }`}
              onClick={() => setPage(button)} key={index}
            >
              {button}
            </button>
          ))}

          <button
            className="font-segoe text-black px-2.5"
            onClick={() => {
              page < 2 && setPage((prev) => prev + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransactionList;
