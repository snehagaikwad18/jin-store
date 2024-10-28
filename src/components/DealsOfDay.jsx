import banner1 from '../assets/banner1.svg'
import banner2 from '../assets/banner2.svg'
import banner3 from '../assets/banner3.svg'
import deal1 from '../assets/deal1.svg'
import star from '../assets/star.svg'
import { Button } from "@/components/ui/button"
import { MdKeyboardArrowRight } from "react-icons/md";
import { GrCart } from "react-icons/gr";

const DealsOfDay = () => {
    return (
        <div className=' w-full flex flex-col gap-3 p-5 ' >
            <div className="flex flex-row w-full justify-between items-center">
                <h1 className='text-[30px] font-bold'>Deals Of The Day</h1>
                <p className='text-[#7E7E7E] text-[12px] sm:font-normal flex  '>All Deals <span> <MdKeyboardArrowRight className='text-[#7E7E7E]' size={20} /></span> </p>
            </div>
            <div className="w-full grid grid-cols-1 justify-items-center  md:grid-cols-2 lg2:grid-cols-3 xl:grid-cols-4 gap-5 ">
                <div className="bg-cover  bg-center flex flex-col items-center justify-center h-[263.89px] w-[298px] relative "
                    style={{ backgroundImage: `url(${deal1})` }}
                >
                    <div className="flex flex-row gap-2 items-center absolute">
                        <div className="bg-white rounded-[4px] py-4 px-1 text-center w-[50px] h-[65px]">
                            <h2 className='text-[#3BB77E]' >426</h2>
                            <h2 className='text-[#7E7E7E]'>Days</h2>
                        </div>
                        <div className="bg-white rounded-[4px] py-4 px-1 text-center w-[50px] h-[65px]">
                            <h2 className='text-[#3BB77E]' >8</h2>
                            <h2 className='text-[#7E7E7E]'>Hours</h2>
                        </div>
                        <div className="bg-white rounded-[4px] py-4 px-1 text-center w-[50px] h-[65px]">
                            <h2 className='text-[#3BB77E]' >17</h2>
                            <h2 className='text-[#7E7E7E]'>Mins</h2>
                        </div>
                        <div className="bg-white rounded-[4px] py-4 px-1 text-center w-[50px] h-[65px]">
                            <h2 className='text-[#3BB77E]' >59</h2>
                            <h2 className='text-[#7E7E7E]'>Sec</h2>
                        </div>
                    </div>

                    <div className="h-[192.38px] w-[256.27px] bg-white rounded-[10px]  absolute top-44 p-5 flex flex-col shadow-2xl  ">
                        <h2 className='font-bold text-[16px] ' >Seeds of Change Organic</h2>
                        <h2 className='font-bold text-[16px] ' >Quinoa, Brown</h2>
                        <div className="flex flex-row justify-between items-center w-1/2">
                            <img src={star} alt="" />
                            <h2 className='text-[#B6B6B6] text-[14px] pt-1'>(4.0)</h2>
                        </div>
                        <h2 className='text-[#3BB77E] text-[14px] pt-1'><span className='text-[#B6B6B6]' >By</span> Old El Paso</h2>
                        <div className="flex flex-row justify-between items-center gap-5 pt-5">
                            <h2 className='text-[#3BB77E] text-[15px] font-bold'>$32.85</h2>
                            <h2 className='line-through text-[#ADADAD] text-[13px] font-bold' >$33.8</h2>
                            <div className="w-full">
                            <Button className="bg-[#DEF9EC] font-bold rounded-md flex items-center gap-2 text-[#3BB77E] "><GrCart /> Add</Button>
                            </div>
                        </div>
                        <h2></h2>
                    </div>
                </div>


                <div className="mt-32 md:mt-0  bg-cover  bg-center flex flex-col items-center justify-center h-[263.89px] w-[298px] relative "
                    style={{ backgroundImage: `url(${deal1})` }}
                >
                    <div className="flex flex-row gap-2 items-center absolute">
                        <div className="bg-white rounded-[4px] py-4 px-1 text-center w-[50px] h-[65px]">
                            <h2 className='text-[#3BB77E]' >426</h2>
                            <h2 className='text-[#7E7E7E]'>Days</h2>
                        </div>
                        <div className="bg-white rounded-[4px] py-4 px-1 text-center w-[50px] h-[65px]">
                            <h2 className='text-[#3BB77E]' >8</h2>
                            <h2 className='text-[#7E7E7E]'>Hours</h2>
                        </div>
                        <div className="bg-white rounded-[4px] py-4 px-1 text-center w-[50px] h-[65px]">
                            <h2 className='text-[#3BB77E]' >17</h2>
                            <h2 className='text-[#7E7E7E]'>Mins</h2>
                        </div>
                        <div className="bg-white rounded-[4px] py-4 px-1 text-center w-[50px] h-[65px]">
                            <h2 className='text-[#3BB77E]' >59</h2>
                            <h2 className='text-[#7E7E7E]'>Sec</h2>
                        </div>
                    </div>

                    <div className="h-[192.38px] w-[256.27px] bg-white rounded-[10px]  absolute top-44 p-5 flex flex-col shadow-2xl  ">
                        <h2 className='font-bold text-[16px] ' >Seeds of Change Organic</h2>
                        <h2 className='font-bold text-[16px] ' >Quinoa, Brown</h2>
                        <div className="flex flex-row justify-between items-center w-1/2">
                            <img src={star} alt="" />
                            <h2 className='text-[#B6B6B6] text-[14px] pt-1'>(4.0)</h2>
                        </div>
                        <h2 className='text-[#3BB77E] text-[14px] pt-1'><span className='text-[#B6B6B6]' >By</span> Old El Paso</h2>
                        <div className="flex flex-row justify-between items-center gap-5 pt-5">
                            <h2 className='text-[#3BB77E] text-[15px] font-bold'>$32.85</h2>
                            <h2 className='line-through text-[#ADADAD] text-[13px] font-bold' >$33.8</h2>
                            <div className="w-full">
                            <Button className="bg-[#DEF9EC] font-bold rounded-md flex items-center gap-2 text-[#3BB77E] "><GrCart /> Add</Button>

                            </div>
                        </div>
                        <h2></h2>
                    </div>
                </div>


                <div className="mt-32 bg-cover lg2:mt-0  bg-center flex flex-col items-center justify-center h-[263.89px] w-[298px] relative "
                    style={{ backgroundImage: `url(${deal1})` }}
                >
                    <div className="flex flex-row gap-2 items-center absolute">
                        <div className="bg-white rounded-[4px] py-4 px-1 text-center w-[50px] h-[65px]">
                            <h2 className='text-[#3BB77E]' >426</h2>
                            <h2 className='text-[#7E7E7E]'>Days</h2>
                        </div>
                        <div className="bg-white rounded-[4px] py-4 px-1 text-center w-[50px] h-[65px]">
                            <h2 className='text-[#3BB77E]' >8</h2>
                            <h2 className='text-[#7E7E7E]'>Hours</h2>
                        </div>
                        <div className="bg-white rounded-[4px] py-4 px-1 text-center w-[50px] h-[65px]">
                            <h2 className='text-[#3BB77E]' >17</h2>
                            <h2 className='text-[#7E7E7E]'>Mins</h2>
                        </div>
                        <div className="bg-white rounded-[4px] py-4 px-1 text-center w-[50px] h-[65px]">
                            <h2 className='text-[#3BB77E]' >59</h2>
                            <h2 className='text-[#7E7E7E]'>Sec</h2>
                        </div>
                    </div>

                    <div className="h-[192.38px] w-[256.27px] bg-white rounded-[10px]  absolute top-44 p-5 flex flex-col shadow-2xl  ">
                        <h2 className='font-bold text-[16px] ' >Seeds of Change Organic</h2>
                        <h2 className='font-bold text-[16px] ' >Quinoa, Brown</h2>
                        <div className="flex flex-row justify-between items-center w-1/2">
                            <img src={star} alt="" />
                            <h2 className='text-[#B6B6B6] text-[14px] pt-1'>(4.0)</h2>
                        </div>
                        <h2 className='text-[#3BB77E] text-[14px] pt-1'><span className='text-[#B6B6B6]' >By</span> Old El Paso</h2>
                        <div className="flex flex-row justify-between items-center gap-5 pt-5">
                            <h2 className='text-[#3BB77E] text-[15px] font-bold'>$32.85</h2>
                            <h2 className='line-through text-[#ADADAD] text-[13px] font-bold' >$33.8</h2>
                            <div className="w-full">
                            <Button className="bg-[#DEF9EC] font-bold rounded-md flex items-center gap-2 text-[#3BB77E] "><GrCart /> Add</Button>

                            </div>
                        </div>
                        <h2></h2>
                    </div>
                </div>


                <div className=" mt-32 lg2:mt-32 xl:mt-0  bg-cover  bg-center flex flex-col items-center justify-center h-[263.89px] w-[298px] relative "
                    style={{ backgroundImage: `url(${deal1})` }}
                >
                    <div className="flex flex-row gap-2 items-center absolute">
                        <div className="bg-white rounded-[4px] py-4 px-1 text-center w-[50px] h-[65px]">
                            <h2 className='text-[#3BB77E]' >426</h2>
                            <h2 className='text-[#7E7E7E]'>Days</h2>
                        </div>
                        <div className="bg-white rounded-[4px] py-4 px-1 text-center w-[50px] h-[65px]">
                            <h2 className='text-[#3BB77E]' >8</h2>
                            <h2 className='text-[#7E7E7E]'>Hours</h2>
                        </div>
                        <div className="bg-white rounded-[4px] py-4 px-1 text-center w-[50px] h-[65px]">
                            <h2 className='text-[#3BB77E]' >17</h2>
                            <h2 className='text-[#7E7E7E]'>Mins</h2>
                        </div>
                        <div className="bg-white rounded-[4px] py-4 px-1 text-center w-[50px] h-[65px]">
                            <h2 className='text-[#3BB77E]' >59</h2>
                            <h2 className='text-[#7E7E7E]'>Sec</h2>
                        </div>
                    </div>

                    <div className="h-[192.38px] w-[256.27px] bg-white rounded-[10px]  absolute top-44 p-5 flex flex-col shadow-2xl  ">
                        <h2 className='font-bold text-[16px] ' >Seeds of Change Organic</h2>
                        <h2 className='font-bold text-[16px] ' >Quinoa, Brown</h2>
                        <div className="flex flex-row justify-between items-center w-1/2">
                            <img src={star} alt="" />
                            <h2 className='text-[#B6B6B6] text-[14px] pt-1'>(4.0)</h2>
                        </div>
                        <h2 className='text-[#3BB77E] text-[14px] pt-1'><span className='text-[#B6B6B6]' >By</span> Old El Paso</h2>
                        <div className="flex flex-row justify-between items-center gap-5 pt-5">
                            <h2 className='text-[#3BB77E] text-[15px] font-bold'>$32.85</h2>
                            <h2 className='line-through text-[#ADADAD] text-[13px] font-bold' >$33.8</h2>
                            <div className="w-full">
                            <Button className="bg-[#DEF9EC] font-bold rounded-md flex items-center gap-2 text-[#3BB77E] "><GrCart /> Add</Button>

                            </div>
                        </div>
                        <h2></h2>
                    </div>
                </div>


                
            </div>

            <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-5 overflow-x-hidden pt-36 justify-items-center ">

                <div className=" w-full bg-cover bg-center p-5 rounded-[10px] "
                    style={{ backgroundImage: `url(${banner1})` }}>
                    <div className="w-1/2 flex flex-col items-end gap-6 ">
                        <h1 className='font-bold text-[24px] tracking-wide leading-7 ' >Everyday Fresh & Clean with Our Products</h1>
                        <div className="w-full">
                            <Button className="bg-[#3BB77E] text-white font-bold w-[103.61px] rounded-[4px] h-full " >Shop Now</Button>
                        </div>
                    </div>
                </div>

                <div className=" w-full bg-cover bg-center p-5 sm:p-10  rounded-[10px] "
                    style={{ backgroundImage: `url(${banner2})` }}>
                    <div className="w-1/2 flex flex-col items-end gap-6 ">
                        <h1 className='font-bold text-[24px] tracking-wide leading-7 ' >Everyday Fresh & Clean with Our Products</h1>
                        <div className="w-full">
                            <Button className="bg-[#3BB77E] text-white font-bold w-[103.61px] rounded-[4px] h-full " >Shop Now</Button>
                        </div>
                    </div>
                </div>
                <div className=" w-full bg-cover bg-center p-5 sm:p-10  rounded-[10px] "
                    style={{ backgroundImage: `url(${banner3})` }}>
                    <div className="w-1/2 flex flex-col items-end gap-6 ">
                        <h1 className='font-bold text-[24px] tracking-wide leading-7 ' >Everyday Fresh & Clean with Our Products</h1>
                        <div className="w-full">
                            <Button className="bg-[#3BB77E] text-white font-bold w-[103.61px] rounded-[4px] h-full " >Shop Now</Button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default DealsOfDay