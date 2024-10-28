import nest from '../assets/nest.svg'
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { GrCart } from "react-icons/gr";
import compare from '../assets/compare.svg'
import { FiUser } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


const Nav2 = () => {
    return (
        <div className='py-5 px-5 flex flex-col md:flex-row md:items-center md:justify-between  '>
            <div className="flex flex-col gap-5 pb-5 md:pb-0 md:flex-row md:items-center md:gap-10   md:w-1/2">
                <img src={nest} alt="" className=' hidden md:flex  md:w-[100px]' />
                <div className=" border-[2px] border-[#BCE3C9] rounded-sm p-2 flex-1 flex items-center  gap-2 w-full ">
                    <h2 className='font-bold text-[14px] flex flex-row items-center gap-2 border-r-[2px] pr-5 whitespace-nowrap ' >All Categories <MdKeyboardArrowDown /> </h2>
                    <input type="text" name="" id="" className='outline-none w-full ' />
                    <CiSearch className='text-[#838383]' size={25} />
                </div>
            </div>

            <div className="flex flex-col items-start justify-center lg:flex-row gap-5 md:items-center md:justify-center md:w-1/2 ">
                <div className="flex flex-row gap justify-between w-full md:justify-end md:items-center md:gap-5 ">
                    <div className="shadow-lg border-[1px] border-[#ECECEC] p-2 flex flex-row items-center justify-center gap-3 text-[#B6B6B6] rounded-sm ">
                        <CiLocationOn />
                        <h2 className='text-[#3BB77E] text-[12px] ' >Your Location</h2>
                        <MdKeyboardArrowDown />
                    </div>

                    <div className="xl:hidden">
                        <Popover  >
                            <PopoverTrigger className="bg-white" ><HiDotsVertical /></PopoverTrigger>
                            <PopoverContent className="w-full" ><div className="flex flex-row items-center justify-center">

                                <div className="flex flex-row items-end  ">
                                    <div className="relative flex flex-row pt-3 px-[10px] w-fit">
                                        <img src={compare} alt="" />
                                        <div className="bg-[#3BB77E] rounded-full h-[20px] w-[20px] absolute right-0 top-1 flex flex-row items-center justify-center text-[12px] text-white " >3</div>
                                    </div>
                                    <h2 className='text-[#7E7E7E] pt-3 pr-1' >Compare</h2>
                                </div>

                                <div className="flex flex-row items-end">
                                    <div className="relative flex flex-row pt-3 px-[10px] w-fit">
                                        <GoHeart size={25} />
                                        <div className="bg-[#3BB77E] rounded-full h-[20px] w-[20px] absolute right-0 top-1 flex flex-row items-center justify-center text-[12px] text-white " >6</div>
                                    </div>
                                    <h2 className='text-[#7E7E7E]' >Wishlist</h2>
                                </div>

                                <div className="flex flex-row items-end">
                                    <div className="relative flex flex-row pt-3 px-[10px] w-fit">
                                        <GrCart size={25} />
                                        <div className="bg-[#3BB77E] rounded-full h-[20px] w-[20px] absolute right-0 top-1 flex flex-row items-center justify-center text-[12px] text-white " >2</div>
                                    </div>
                                    <h2 className='text-[#7E7E7E]' >Cart</h2>
                                </div>

                                <div className="flex flex-row items-end">
                                    <div className="relative flex flex-row pt-3 px-[10px] w-fit">
                                        <FiUser size={25} />
                                    </div>
                                    <h2 className='text-[#7E7E7E]' >Account</h2>
                                </div>
                            </div></PopoverContent>
                        </Popover>
                    </div>

                </div>

                <div className="hidden xl:flex flex-row items-center justify-center">
                    <div className="flex flex-row items-end  ">
                        <div className="relative flex flex-row pt-3 px-[10px] w-[45px] ">
                            <img src={compare} alt="" />
                            <div className="bg-[#3BB77E] rounded-full h-[20px] w-[20px] absolute right-0 top-1 flex flex-row items-center justify-center text-[12px] text-white " >3</div>
                        </div>
                        <h2 className='text-[#7E7E7E] pt-3 pr-1' >Compare</h2>
                    </div>

                    <div className="flex flex-row items-end">
                        <div className="relative flex flex-row pt-3 px-[10px] w-fit">
                            <GoHeart size={25} />
                            <div className="bg-[#3BB77E] rounded-full h-[20px] w-[20px] absolute right-0 top-1 flex flex-row items-center justify-center text-[12px] text-white " >6</div>
                        </div>
                        <h2 className='text-[#7E7E7E]' >Wishlist</h2>
                    </div>

                    <div className="flex flex-row items-end">
                        <div className="relative flex flex-row pt-3 px-[10px] w-fit">
                            <GrCart size={25} />
                            <div className="bg-[#3BB77E] rounded-full h-[20px] w-[20px] absolute right-0 top-1 flex flex-row items-center justify-center text-[12px] text-white " >2</div>
                        </div>
                        <h2 className='text-[#7E7E7E]' >Cart</h2>
                    </div>

                    <div className="flex flex-row items-end">
                        <div className="relative flex flex-row pt-3 px-[10px] w-fit">
                            <FiUser size={25} />
                        </div>
                        <h2 className='text-[#7E7E7E]' >Account</h2>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Nav2