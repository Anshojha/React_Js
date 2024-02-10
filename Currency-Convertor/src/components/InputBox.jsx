import React from 'react'
import { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmontChange,
    onCurrencyChange,
    currencyOptions = [],
    selctCurrency = "usd1",
    amountDisabled = false,
    currencyDisable = false,
    className = ""
}) 
{
    const amountUniquieId = useId();
    return (
        <div className={`bg-white rounded-lg border-2 border-black p-3 text-sm flex `}>
            <div className='w-1/2'>
                <label htmlFor={amountUniquieId} className='text-black/40  mb-2  inline-block ' >{label}</label>
                <input
                    id={amountUniquieId}
                    type="number"
                    className='outline-none w-full bg-transparent py-1.5'
                    placeholder='amount'
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmontChange &&
                        onAmontChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type </p>
                <select
                    className='rounded-lg px-1 py-1 bg-gray-200 cursor-pointer outline-none'
                    value={selctCurrency}
                    onChange={(e) => selctCurrency &&
                        selctCurrency(e.target.value)
                    }
                    disabled={currencyDisable}
                >
                 {
                    currencyOptions.map((currency)=>(
                    <option value={currency} className="">
                        {currency}
                    </option>
                    ))
                 }   
                </select>

            </div>
        </div>
    )
}

export default InputBox
