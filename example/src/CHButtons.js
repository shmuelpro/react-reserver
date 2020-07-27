import React from 'react'


export default function CHButtons({ stroke, togglelines, copyCode }) {


    const buttonClasses = "bg-transparent   text-blue-700 font-semibold hover:text-white py-2 px-4 border border-transparent hover:border-orange-500 rounded"


    return (<div className="copy-code-button absolute">
        <button onClick={copyCode} className={buttonClasses}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-copy" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="8" y="8" width="12" height="12" rx="2" />
                <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
            </svg>
        </button>

        <button onClick={togglelines} className={buttonClasses}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="2" />
                <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
            </svg>
        </button></div>)
}