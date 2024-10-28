import contact2 from '../assets/contact2.svg'
import { Button } from "@/components/ui/button"
import { RxDashboard } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LiaFireAltSolid } from "react-icons/lia";
import { FiFilter } from "react-icons/fi";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import category1 from '../assets/category1.svg'
import category3 from '../assets/category3.svg'
import category4 from '../assets/category4.svg'
import category6 from '../assets/category6.svg'
import category7 from '../assets/category7.svg'
import category8 from '../assets/category8.svg'
import star from '../assets/star.svg'
import thumbnail4 from '../assets/thumbnail4.svg'
import thumbnail5 from '../assets/thumbnail5.svg'
import thumbnail6 from '../assets/thumbnail6.svg'
import filter from '../assets/filter.png'


const menu = [
    {
        icon: <LiaFireAltSolid size={25} />,
        name: 'Deals',
        list: <MdKeyboardArrowDown />,
    },
    {
        icon: null,
        name: 'Home',
        list: <MdKeyboardArrowDown />,
    },
    {
        icon: null,
        name: 'About',
        list: <MdKeyboardArrowDown />,
    },
    {
        icon: null,
        name: 'Shop ',
        list: <MdKeyboardArrowDown />,
    },
    {
        icon: null,
        name: 'Vendors ',
        list: <MdKeyboardArrowDown />,
    },
    {
        icon: null,
        name: 'Mega menu ',
        list: <MdKeyboardArrowDown />,
    },
    {
        icon: null,
        name: 'Blog ',
        list: <MdKeyboardArrowDown />,
    },
    {
        icon: null,
        name: 'Pages ',
        list: <MdKeyboardArrowDown />,
    },
    {
        icon: null,
        name: 'Contact',
        list: <MdKeyboardArrowDown />,
    },
]

const categories = [
    {
        name: 'Milks and Dairies',
        img: category1,
        quantity: 5,
    },

    {
        name: 'Clothing',
        img: category3,
        quantity: 5,
    },

    {
        name: 'Pet Foods ',
        img: category4,
        quantity: 5,
    },

    {
        name: 'Baking material',
        img: category6,
        quantity: 5,
    },

    {
        name: 'Vegetables & tubers',
        img: category7,
        quantity: 5,
    },
    {
        name: 'Fresh Seafood',
        img: category8,
        quantity: 5,
    }
]


const trendingProducts = [

    {
        name: 'Large Brown Eggs',
        description: 'Organic Cage-Free Grade A',
        img: thumbnail4,
        ratingStar: star,
        rating: '4.0',
        price: '32.85',
        oldPrice: '33.8',
    },
    {
        name: 'Vanilla Light Roast Coffee',
        description: 'Naturally Flavored Cinnamon',
        img: thumbnail5,
        ratingStar: star,
        rating: '4.0',
        price: '32.85',
        oldPrice: '33.8',
    },
    {
        name: 'Quinoa,Brown, & Red Rice',
        description: 'Seeds of Change Organice',
        img: thumbnail6,
        ratingStar: star,
        rating: '4.0',
        price: '32.85',
        oldPrice: '33.8',
    },
]
const Nav3 = () => {
    return (
        <div className='py-2 border-b-[1px] border-t-[1px] px-5 mb-5' >
            <div className="flex flex-col gap-5  md:flex-row md:items-center md:justify-center ">
                <div className="flex flex-col md:flex-row gap-2 md:gap-8  2xl:gap-0">
                    <Sheet>
                        <SheetTrigger className="p-0" ><Button className="bg-[#3BB77E] text-white rounded-[5px] w-[210.42px] h-[44px] py-5 flex flex-row items-center justify-center font-bold " > <RxDashboard /> Browse All Categories <MdKeyboardArrowDown /></Button></SheetTrigger>
                        <SheetContent side="left" >
                            <SheetHeader>
                                <SheetTitle>Are you absolutely sure?</SheetTitle>
                                <SheetDescription >
                                    <div className="flex flex-col gap-5 overflow-y-auto h-[calc(100vh-120px)]">
                                        <div className=" shadow-xl border-[1px] border-[#ECECEC] rounded-[15px] p-5 flex flex-col ">
                                            <h2 className='font-bold py-2 border-b-[2px] border-[#BCE3C9] w-fit' >Category</h2>
                                            <div className="flex flex-col gap-2 border-t-[1px] border-[#ECECEC]  pt-5">
                                                {categories.map((data, index) => {
                                                    return <div key={index} className="border-[1px] border-[#ECECEC] rounded-[5px] py-2 px-5 flex flex-row justify-between items-center gap-5">
                                                        <img src={data.img} alt="" className='w-[30px] h-[30px]' />
                                                        <h2>{data.name}</h2>
                                                        <div className="w-[20px] h-[20px] bg-[#BCE3C9] items-center justify-center rounded-full text-center text-[#253D4E] ">{data.quantity}</div>
                                                    </div>

                                                })}
                                            </div>
                                        </div>


                                        <div className=" shadow-xl border-[1px] border-[#ECECEC] rounded-[15px] p-5 flex flex-col ">
                                            <h2 className='font-bold py-2 border-b-[2px] border-[#BCE3C9] w-fit' >Fill by price</h2>
                                            <div className="w-full py-3">
                                                <input type="range" className='w-full' />
                                            </div>
                                            <div className=" text-[#7E7E7E] flex flex-row justify-between items-center">
                                                <h2>From: <span className='text-[#3BB77E]' >$500</span></h2>
                                                <h2>To: <span className='text-[#3BB77E]' >$1000</span></h2>
                                            </div>


                                            <div className="flex flex-col gap-5 py-5">
                                                <div className="flex flex-col gap-3">
                                                    <h2 className='text-[#7E7E7E] font-bold' >Color</h2>
                                                    <div className="flex flex-col justify-center gap-2">
                                                        <div className="flex flex-row gap-2 ">
                                                            <input type="checkbox" className='accent-[#3BB77E] w-[16px]  ' />
                                                            <h2>Red (56)</h2>
                                                        </div>
                                                        <div className="flex flex-row gap-2">
                                                            <input type="checkbox" className='accent-[#3BB77E]  w-[16px] ' />
                                                            <h2>Green (56)</h2>
                                                        </div>
                                                        <div className="flex flex-row gap-2">
                                                            <input type="checkbox" className='accent-[#3BB77E]  w-[16px]' />
                                                            <h2>Blue (56)</h2>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col gap-3">
                                                    <h2 className='text-[#7E7E7E] font-bold' >Item Condition</h2>
                                                    <div className="flex flex-col justify-center gap-2">
                                                        <div className="flex flex-row gap-2 ">
                                                            <input type="checkbox" className='accent-[#3BB77E] w-[16px]  ' />
                                                            <h2>New (1506)</h2>
                                                        </div>
                                                        <div className="flex flex-row gap-2">
                                                            <input type="checkbox" className='accent-[#3BB77E] w-[16px]' />
                                                            <h2>Refurbished (27)</h2>
                                                        </div>
                                                        <div className="flex flex-row gap-2">
                                                            <input type="checkbox" className='accent-[#3BB77E] w-[16px]' />
                                                            <h2>Used (45)</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" shadow-xl border-[1px] border-[#ECECEC] rounded-[15px] p-5 flex flex-col ">
                                            <h2 className=' pb-3 border-b-[2px] border-[#BCE3C9] w-fit font-bold ' >New products</h2>

                                            <div className="flex flex-col border-t-[1px] border-[#ECECEC] pt-8 gap-5 ">
                                                {trendingProducts.map((data, index) => {
                                                    return <div key={index} className="flex flex-row gap-5 border-b-[2px] border-dashed  ">
                                                        <div className=" bg-[#F4F6FA] border-[1px] rounded-[10px] flex flex-col items-center justify-center py-2  ">
                                                            <img src={data.img} alt="" className='w-[50px] h-[50px]' />
                                                        </div>
                                                        <div className="">
                                                            <h2 className='font-bold text-[#3BB77E]' >{data.name}</h2>
                                                            <h2 className='text-[#ADADAD] text-[15px]'>${data.price}</h2>
                                                            <div className="flex flex-row justify-between items-center">
                                                                <img src={data.ratingStar} alt="" />
                                                            </div>

                                                        </div>

                                                    </div>
                                                })}
                                            </div>
                                        </div>

                                        <div className="flex flex-row gap5 items-center justify-between">
                                            <Button className="bg-[#3BB77E] text-white rounded-sm py-2 px-10" > <FiFilter /> Filter</Button>
                                            <img src={filter} alt="" className='w-[150px]' />
                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-9 gap-2">
                        {menu.map((data, index) => {
                            return <div key={index} className="flex flex-row gap-2 items-center">
                                <span className='text-[#3BB77E]'>{data.icon}</span>
                                <h2 className='text-[14px] whitespace-nowrap' >{data.name}</h2>
                                <span>{data.list}</span>
                            </div>
                        })}
                    </div>
                </div>

                <div className="flex flex-row gap-5 items-center justify-start md:justify-center">
                    <img src={contact2} alt="" />
                    <div className="flex flex-col items-start justify-center">
                        <h1 className="text-[#3BB77E] text-[16px]"  >1900 - 888</h1>
                        <p className="text-[#7E7E7E] text-[13px] whitespace-nowrap ">24/7 Support Center</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav3