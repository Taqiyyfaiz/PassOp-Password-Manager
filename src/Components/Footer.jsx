import React from 'react'

function Footer() {
    return (
        <>
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center gap-2 py-4'>
            <div className='Logo font-bold text-2xl'>
                <span className='text-green-500'> &lt;</span>
                Pass
                <span className='text-green-500'>OP/ &gt;</span>
            </div>
            <div className='flex '>
                Created with ❤️ by <a className='text-green-500 hover:underline' href="https://github.com/Taqiyyfaiz">Taqiyy-Faiz</a>
            </div>
        </div>
        </>
    )
}

export default Footer