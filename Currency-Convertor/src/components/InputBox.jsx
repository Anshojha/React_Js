import React from 'react'

function InputBox() {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className='w-1/2'>
                <label className='text-black/40  mb-2  inline-block ' htmlFor="">label</label>
                <input
                    type="number"
                    className='outline-none w-full'
                    placeholder='amount'
                />
            </div>
            <div className="">
                <p className="">Currency type </p>
                <select className=''>
                    <option value="usd" className="">
                        usd
                    </option>
                </select>

            </div>
        </div>
    )
}

export default InputBox
