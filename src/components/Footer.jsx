
import { PiPhoneCallThin } from "react-icons/pi";
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import pinterest from '../assets/pinterest.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';
import nest from '../assets/nest.svg';
import clock from '../assets/clock.svg';
import contact from '../assets/contact.svg';
import email from '../assets/email.svg';
import location from '../assets/location.svg';
import googlePlay from '../assets/googlePlay.svg';
import appStore from '../assets/appStore.svg';
const Footer = () => {
    return (
        <div className="w-full flex flex-col gap-5 mt-8 px-5">
            <div className="flex flex-col gap-5 md:flex-row  md:items-start">
                {/* div1 */}
                <div className="flex flex-col items-start justify-center gap-3 md:w-[400px]">
                    <div className="flex flex-col md:gap-8 items-start ">
                        <img src={nest} alt="" className="h-[68px] " />
                        <h2 className="text-[15px]" >Awesome grocery store website <br /> template</h2>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img src={location} alt="" />
                        <h2 className="text-[15px]" > <span className="font-bold" >Address:</span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</h2>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img src={contact} alt="" />
                        <h2 className="text-[15px]" ><span className="font-bold" >Call Us:</span>(+91) - 540-025-124553</h2>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img src={email} alt="" />
                        <h2 className="text-[15px]" ><span className="font-bold" >Email:</span>sale@Nest.com</h2>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img src={clock} alt="" />
                        <h2 className="text-[15px]" ><span className="font-bold" >Hours:</span>10:00 - 18:00, Mon - Sat</h2>
                    </div>


                </div>

                <div className="flex flex-col items-center sm:items-start sm:grid sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 justify-center gap-5 ">

                    {/* div2 */}
                    <div className="flex flex-col items-center sm:items-start justify-center gap-1">
                        <h1 className="text-[18px] font-bold pt-5 mb-8 " >Company</h1 >
                        <div className=" flex flex-col items-center sm:items-start md:gap-3 text-[15px]">
                            <h2>About Us</h2>
                            <h2>Delivery Information</h2>
                            <h2>Privacy Policy</h2>
                            <h2>Terms & Conditions</h2>
                            <h2>Contact Us</h2>
                            <h2>Support Center</h2>
                            <h2>Careers</h2>
                        </div>
                    </div>

                    {/* div3 */}
                    <div className="flex flex-col items-center sm:items-start justify-center gap-1">
                        <h1 className="text-[18px] font-bold pt-5 mb-8 " >Account</h1 >
                        <div className="flex flex-col items-center sm:items-start md:gap-3 text-[15px]">
                            <h2>Sign In</h2>
                            <h2>View Cart</h2>
                            <h2>My Wishlist</h2>
                            <h2>Track My Order</h2>
                            <h2>Help Ticket</h2>
                            <h2>Shipping Details</h2>
                            <h2>Compare products</h2>
                        </div>
                    </div>
                    {/* div4 */}
                    <div className="flex flex-col items-center sm:items-start justify-center gap-1">
                        <h1 className="text-[18px] font-bold pt-5 mb-8 " >Corporate</h1 >
                        <div className="flex flex-col items-center sm:items-start md:gap-3 text-[15px]">

                            <h2>Promotions</h2>
                            <h2>Accessibility</h2>
                            <h2>Farm Careers</h2>
                            <h2>Our Suppliers</h2>
                            <h2>Farm Business</h2>
                            <h2>Affiliate Program</h2>
                            <h2>Become a Vendor</h2>
                        </div>
                    </div>
                    {/* div5 */}
                    <div className="flex flex-col items-center sm:items-start justify-center gap-1">
                        <h1 className="text-[18px] font-bold pt-5 mb-8 " >Popular</h1 >
                        <div className="flex flex-col items-center sm:items-start md:gap-3 text-[15px]">

                            <h2>Milk & Flavoured Milk</h2>
                            <h2>Butter and Margarine</h2>
                            <h2>Eggs Substitutes</h2>
                            <h2>Marmalades</h2>
                            <h2>Sour Cream and Dips</h2>
                            <h2>Tea & Kombucha</h2>
                            <h2>Cheese</h2>
                        </div>
                    </div>
                    {/* div6 */}
                    <div className="flex flex-col items-center sm:items-start justify-center">
                        <h1 className="text-[18px] font-bold pt-5" >Install App</h1 >
                        <div className="flex flex-row gap-1">
                            <img src={appStore} alt=""   className="w-[110px] h-[110px] "   />
                            <img src={googlePlay} alt=""  className="w-[110px] h-[110px] "  />
                        </div>
                        <h2 className="text-[13px]" >Secured Payment Gateways</h2>
                    </div>
                </div>
            </div>


            {/* vertically - 2nd half */}
            <div className="flex flex-col gap-5 md:flex-row md:justify-between w-full border-t-[1px] border-[#BCE3C9] py-5 mt-5">
                <div className="flex flex-col justify-center items-center text-[#7E7E7E] md:items-start ">
                    <p className="text" >© 2022, <span className="text-[#3BB77E]" >Nest</span> - HTML Ecommerce Template</p>
                    <p>All rights reserved</p>
                </div>

                <div className="flex flex-col gap-5 justify-center items-center  md:flex-row ">
                    <div className="flex flex-row gap-5 items-center justify-center">
                        <PiPhoneCallThin size={40} />
                        <div className="flex flex-col items-start justify-center">
                            <h1 className="text-[#3BB77E] text-[30px]"  >1900 - 6666</h1>
                            <p className="text-[#7E7E7E]">Working 8:00 - 22:00</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-center">
                        <PiPhoneCallThin size={40} />
                        <div className="flex flex-col items-start justify-center">
                            <h1 className="text-[#3BB77E] text-[30px]"  >1900 - 8888</h1>
                            <p className="text-[#7E7E7E]" >24/7 Support Center</p>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row items-center justify-center gap-5 " >
                        <p className="text-[20px] font-bold">Follow Us</p>
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <div className="bg-[#3BB77E]  h-[40px] w-[40px] rounded-full justify-center items-center flex " >
                                <img src={facebook} alt="" />
                            </div>
                            <div className="bg-[#3BB77E]  h-[40px] w-[40px] rounded-full justify-center items-center flex " >
                                <img src={twitter} alt="" />
                            </div>
                            <div className="bg-[#3BB77E]  h-[40px] w-[40px] rounded-full justify-center items-center flex " >
                                <img src={instagram} alt="" />
                            </div>
                            <div className="bg-[#3BB77E]  h-[40px] w-[40px] rounded-full justify-center items-center flex " >
                                <img src={pinterest} alt="" />
                            </div>
                            <div className="bg-[#3BB77E]  h-[40px] w-[40px] rounded-full justify-center items-center flex " >
                                <img src={youtube} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="text-[#7E7E7E]">Up to 15% discount on your first subscribe</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer