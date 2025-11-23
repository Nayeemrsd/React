// import { useId } from "react";

// import { useId } from "react";

// function InputBox({
//   label,
//   amount,
//   onAmountChange,
//   onCurrencyChange,
//   currencyOptions = [],
//   selectCurrency = "usd",
//   amountDisable = false,
//   currencyDisable = false,
//   className = "",
// }) {
//   const amountInputId = useId();
//   return (
//     <div className={`bg-white p-3 rounded-lg text-sm flex  ${className} `}>
//       <div className="w-1/2">
//         <label
//           htmlFor={amountInputId}
//           className="text-black/40 mb-2 inline-block"
//         >
//           {label}
//         </label>
//         <input
//           id={amountInputId}
//           className="outline-none w-full bg-transparent py-1.5"
//           type="number"
//           placeholder="Amount"
//           disabled={amountDisable}
//           value={amount}
//           onChange={
//             (e) => onAmountChange && onAmountChange(Number(e.target.value))
//             // && is lye use karre taake hum check kar saken k wo method exsist karta ya nhi
//             // agr karta hai to wo check hoga aur implement hoga aur agr exsist nhi karta to website crash nhi hogi
//             // aur uske baad number mein e.target.value ko is liye rap kardiye q k wo string return karega
//             // aur hum ko number chahiye sometimes ye bug solve karne bht time lag jaata
//           }
//         />
//       </div>
//       <div className="w-1/2 flex flex-wrap justify-end text-right">
//         <p className="text-black/40 mb-2 w-full">Currency Type</p>
//         <select
//           className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//           disabled={currencyDisable}
//           value={selectCurrency}
//           onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
//         >
//           {currencyOptions.map((currency) => (
//             <option key={currency} value={currency}>
//               {currency}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }

// export default InputBox;

// PRACTICE

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  // const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2">
        <label
          // htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          // key={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          disabled={currencyDisabled}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
