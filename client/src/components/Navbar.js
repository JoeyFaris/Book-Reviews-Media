import React, {useState} from "react"
import Button from "./Button"


const NavBar = () => {
    let Links = [
        {name:"HOME",link:'/'},
        {name:"ADD BOOK",link:'/'},
        {name:"TOP 10",link:'/'},
        {name:"ABOUT US",link:'/'},
        {name:"LOGIN", link:'/login' }
    ]
    const [open, setOpen] = useState(false)
    

    
    return (
        <div className='shadow-md w-full Z-999 fixed pb-25 mb-25 top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-7 md:px-10 px-7'>
            <div className='text-xl font-bold text-3x1 cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                <span className='text-3x1 text-indigo-600 mr-1 pt-2'>
                <ion-icon name="book-sharp"></ion-icon>
                </span>
                Book Review
            </div>
            <div onClick={() =>setOpen(!open)}
            className='text-3x1 absolute right-8 top-10 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close' : 'menu-sharp'}></ion-icon>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
              {Links.map((Link) =>
              <li key={Link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                  <a href={Link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{Link.name}</a>
              </li>
              )}
               {/* <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'>LOG IN
        </button> */}
            </ul>
            </div>
        </div>
    )
}

export default NavBar