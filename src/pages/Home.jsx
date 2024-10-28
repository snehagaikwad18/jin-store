import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"
import emailGray from '../assets/emailGray.png'
import banner from '../assets/banner.svg'
import Categories from "../components/Categories"
import Products from "../components/Products"
import DealsOfDay from "../components/DealsOfDay"
import PopularProducts from "../components/PopularProducts"
import Nav1 from "../components/Nav1"
import Nav2 from "../components/Nav2"
import Nav3 from "../components/Nav3"


const home = () => {
    return (
        <div className="sm:px-10 text-[#253D4E]" >
            <Nav1 />
            <Nav2 />
            <Nav3 />

            <div className="flex flex-row items-center justify-center gap-5">
                <div className="">
                    <div className="bg-[url('./assets/hero.svg')] bg-cover bg-center rounded-[30px] pt-20 pl-10 pb-10 flex flex-col gap-5 ">
                        <h1 className="font-bold text-[30px]  lg:text-[40px] " >Don't miss amazing <br /> grocery deals</h1>
                        <h2 className="text-[#7E7E7E] text-center sm:text-start">Sign up for the daily newsletter</h2>
                        <div className=" w-[300px] sm:w-[400px]  md:w-[500px] bg-white rounded-full flex flex-row items-center pl-3 mt-5  ">
                            <div className="w-2/3 flex flex-row gap-5 items-center p ">
                                <img src={emailGray} alt="" className="w-[15px] h-[15px]" />
                                <input type="text" name="" id="" placeholder="Your emaill address" className="placeholder:text-[#838383] outline-none " />
                            </div>
                            <div className="w-full md:w-1/3 bg-[#3BB77E] rounded-full">
                                <Button className="bg-[#3BB77E] text-white rounded-full w-full h-full py-5" >Subscribe</Button>
                            </div>
                        </div>
                    </div>
                    <PopularProducts />
                </div>

            </div>
            <DealsOfDay />
            <Categories />
            <Products />
            <div className=" bg-[url('./assets/footerbg.png')] bg-cover bg-center rounded-[20px] p-2 sm:p-5 overflow-x-hidden flex flex-col md:flex-row gap-10 ">
                <div className="flex flex-col gap-5 md:w-1/2 md:pt-16 md:pl-8 ">
                    <h1 className="font-semibold text-[30px] sm:text-[35px] md:w-[500px] text-[#253D4E] text-center sm:text-start pt-5 " >Stay home & get your daily needs from our shop</h1>
                    <h2 className="text-[#7E7E7E] text-center sm:text-start">Start You'r Daily Shopping with <span className="text-[#3BB77E]" >Nest Mart</span></h2>
                    <div className=" md:w-[500px] bg-white rounded-full flex flex-row items-center pl-3 mt-5  ">
                        <div className="w-2/3 flex flex-row gap-5 items-center p ">
                            <img src={emailGray} alt="" className="w-[15px] h-[15px]" />
                            <input type="text" name="" id="" placeholder="Your emaill address" className="placeholder:text-[#838383] outline-none " />
                        </div>
                        <div className="w-full md:w-1/3 bg-[#3BB77E] rounded-full">
                            <Button className="bg-[#3BB77E] text-white rounded-full w-full h-full py-5" >Subscribe</Button>
                        </div>
                    </div>


                </div>
                <div className="md:w-1/2  ">
                    <img src={banner} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default home