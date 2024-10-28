import { MdKeyboardArrowDown } from "react-icons/md";

const Nav1 = () => {
    return (
        <div className='py-2 px-5 gap-2 border-b-[1px] flex flex-col md:flex-row justify-between items-center text-[12px] '>
            <div className="flex flex-row  gap-5 ">
                <h2 className='text-[#7E7E7E] border-r-[2px] border-[#DEDFE2] pr-4 '>About Us</h2>
                <h2 className='text-[#7E7E7E] border-r-[2px] border-[#DEDFE2] pr-4 '>My Account</h2>
                <h2 className='text-[#7E7E7E] border-r-[2px] border-[#DEDFE2] pr-4 '>Wishlist</h2>
                <h2 className='text-[#7E7E7E] border-r-[2px] border-[#DEDFE2] pr-4 '>Order Tracking</h2>
            </div>
            <h2  className="text-[#7E7E7E] font-semibold">100% Secure delivery without contacting the courier</h2>
            <div className="flex flex-row  gap-5 text-[#7E7E7E] ">
                <h2>Need help? Call Us: <span className='text-[#3BB77E]' >+ 1800 900</span></h2>
                <h2 className='border-r-[2px] border-[#DEDFE2] pr-4 flex items-center gap-1 '>English <MdKeyboardArrowDown size={16}/> </h2>
                <h2 className='border-r-[2px] border-[#DEDFE2] pr-4 flex items-center gap-1 '>USD <MdKeyboardArrowDown size={16} /> </h2>
            </div>
        </div>
    )
}

export default Nav1