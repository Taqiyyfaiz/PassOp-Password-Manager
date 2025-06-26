import React from 'react'

function Navbar() {
  return (
  <>    
  <nav className='bg-zinc-900 text-white'>
      <div className="md:mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className='Logo font-bold text-2xl'>
          <span className='text-green-500'> &lt;</span>
          Pass
          <span className='text-green-500'>OP/ &gt;</span>

          <span className='italic font-mono font-extralight text-2xl'> = Your Own <span className='text-green-500'>Password Manager</span></span>
        </div>
        {/* <ul>
          <li className='flex gap-4 '>
            <a className='hover:font-bold hover:underline decoration-green-600' href="#">Home</a>
            <a className='hover:font-bold hover:underline decoration-green-600' href="#">About</a>
            <a className='hover:font-bold hover:underline decoration-green-600' href="#">Contacts</a>
          </li>
        </ul> */}

        <button className='text-white bg-green-700 my-5 rounded-full flex gap-4 justify-between items-center px-4 hover:bg-green-500 ring-white ring-1'>
          <img className='invert w-10 p-1' src="./Icon/github.png" alt="Github" />
          <span className='font-bold px-2'> <a href="https://github.com/Taqiyyfaiz" target="_blank">Github</a></span>
        </button>

      </div>
    </nav>
    </>

  )
}

export default Navbar