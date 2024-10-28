import thumbnail1 from '../assets/thumbnail1.svg'
import thumbnail2 from '../assets/thumbnail2.svg'
import thumbnail3 from '../assets/thumbnail3.svg'
import thumbnail4 from '../assets/thumbnail4.svg'
import thumbnail5 from '../assets/thumbnail5.svg'
import thumbnail6 from '../assets/thumbnail6.svg'
import thumbnail7 from '../assets/thumbnail7.svg'
import thumbnail8 from '../assets/thumbnail8.svg'
import thumbnail9 from '../assets/thumbnail9.svg'
import thumbnail10 from '../assets/thumbnail10.svg'
import thumbnail11 from '../assets/thumbnail11.svg'
import thumbnail12 from '../assets/thumbnail12.svg'
import star from '../assets/star.svg'


const topSelling = [
    {
        name: 'Coffee Creamer',
        description: 'Nestle Original Coffee-Mate',
        img: thumbnail1,
        ratingStar: star,
        rating: '4.0',
        price: '32.85',
        oldPrice: '33.8',
    },
    {
        name: 'Coffee Creamer',
        description: 'Nestle Original Coffee-Mate',
        img: thumbnail2,
        ratingStar: star,
        rating: '4.0',
        price: '32.85',
        oldPrice: '33.8',
    },
    {
        name: 'Coffee Creamer',
        description: 'Nestle Original Coffee-Mate',
        img: thumbnail3,
        ratingStar: star,
        rating: '4.0',
        price: '32.85',
        oldPrice: '33.8',
    },

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

const recentlyAdded = [
    {
        name: 'Hearty White Bread',
        description: 'Pepperidge Farm Farmhouse',
        img: thumbnail7,
        ratingStar: star,
        rating: '4.0',
        price: '32.85',
        oldPrice: '33.8',
    },
    {
        name: 'Blend',
        description: 'Organic Frozen Triple Berry',
        img: thumbnail8,
        ratingStar: star,
        rating: '4.0',
        price: '32.85',
        oldPrice: '33.8',
    },
    {
        name: 'Bread',
        description: 'Oroweat Country Buttermilk',
        img: thumbnail9,
        ratingStar: star,
        rating: '4.0',
        price: '32.85',
        oldPrice: '33.8',
    },
]

const topRated = [
    {
        name: 'Classic Buffalo Wings',
        description: 'Foster Farms Takeout Crispy',
        img: thumbnail10,
        ratingStar: star,
        rating: '4.0',
        price: '32.85',
        oldPrice: '33.8',
    },
    {
        name: '& Salty Kettle Corn',
        description: 'Angie`s Boomchickapop Sweet',
        img: thumbnail11,
        ratingStar: star,
        rating: '4.0',
        price: '32.85',
        oldPrice: '33.8',
    },
    {
        name: 'Chicken Meatballs',
        description: 'All Natural Italian-Style',
        img: thumbnail12,
        ratingStar: star,
        rating: '4.0',
        price: '32.85',
        oldPrice: '33.8',
    },
]

const Products = () => {
    return (
        <div className='px-5 py-10'>
            <div className="flex flex-col gap-8  md:grid md:grid-cols-2 xl:grid-cols-4 ">
                {/* div 1 */}
                <div className="flex flex-col ">
                    <h2 className=' pb-5 font-bold text-[25px] border-b-[3px] border-[#BCE3C9] w-fit first-letter: ' >Top Selling</h2>

                    <div className="flex flex-col border-t-[1px] border-[#ECECEC] pt-8 gap-5 ">
                        {topSelling.map((data, index) => {
                            return <div key={index} className="flex flex-row gap-5 ">
                                <div className=" bg-[#F4F6FA] border-[1px] rounded-[10px] flex flex-col items-center justify-center py-2  ">
                                    <img src={data.img} alt="" />
                                </div>
                                <div className="">
                                    <h2 className='font-bold' >{data.description}</h2>
                                    <h2 className='font-bold' >{data.name}</h2>
                                    <div className="flex flex-row justify-between items-center">
                                        <img src={data.ratingStar} alt="" />
                                        <h2 className='text-[#B6B6B6]'>({data.rating})</h2>
                                    </div>
                                    <div className="flex flex-row justify-between items-center">
                                        <h2 className='text-[#3BB77E] text-[20px] font-bold'>${data.price}</h2>
                                        <h2 className='line-through text-[#ADADAD] font-bold' >${data.oldPrice}</h2>
                                    </div>
                                </div>

                            </div>
                        })}
                    </div>
                </div>


                {/* div 2 */}
                <div className="flex flex-col ">
                    <h2 className=' pb-5 font-bold text-[25px] border-b-[3px] border-[#BCE3C9] w-fit first-letter: ' >Trending Products</h2>

                    <div className="flex flex-col border-t-[1px] border-[#ECECEC] pt-8 gap-5 ">
                        {trendingProducts.map((data, index) => {
                            return <div key={index} className="flex flex-row gap-5 ">
                                <div className=" bg-[#F4F6FA] border-[1px] rounded-[10px] flex flex-col items-center justify-center py-2  ">
                                    <img src={data.img} alt="" />
                                </div>
                                <div className="">
                                    <h2 className='font-bold' >{data.description}</h2>
                                    <h2 className='font-bold' >{data.name}</h2>
                                    <div className="flex flex-row justify-between items-center">
                                        <img src={data.ratingStar} alt="" />
                                        <h2 className='text-[#B6B6B6]'>({data.rating})</h2>
                                    </div>
                                    <div className="flex flex-row justify-between items-center">
                                        <h2 className='text-[#3BB77E] text-[20px] font-bold'>${data.price}</h2>
                                        <h2 className='line-through text-[#ADADAD] font-bold' >${data.oldPrice}</h2>
                                    </div>
                                </div>

                            </div>
                        })}
                    </div>
                </div>


                {/* div 3 */}
                <div className="flex flex-col ">
                    <h2 className=' pb-5 font-bold text-[25px] border-b-[3px] border-[#BCE3C9] w-fit first-letter: ' >Recently added</h2>

                    <div className="flex flex-col border-t-[1px] border-[#ECECEC] pt-8 gap-5 ">
                        {recentlyAdded.map((data, index) => {
                            return <div key={index} className="flex flex-row gap-5 ">
                                <div className=" bg-[#F4F6FA] border-[1px] rounded-[10px] flex flex-col items-center justify-center py-2  ">
                                    <img src={data.img} alt="" />
                                </div>
                                <div className="">
                                    <h2 className='font-bold' >{data.description}</h2>
                                    <h2 className='font-bold' >{data.name}</h2>
                                    <div className="flex flex-row justify-between items-center">
                                        <img src={data.ratingStar} alt="" />
                                        <h2 className='text-[#B6B6B6]'>({data.rating})</h2>
                                    </div>
                                    <div className="flex flex-row justify-between items-center">
                                        <h2 className='text-[#3BB77E] text-[20px] font-bold'>${data.price}</h2>
                                        <h2 className='line-through text-[#ADADAD] font-bold' >${data.oldPrice}</h2>
                                    </div>
                                </div>

                            </div>
                        })}
                    </div>
                </div>



                {/* div 4 */}
                <div className="flex flex-col ">
                    <h2 className=' pb-5 font-bold text-[25px] border-b-[3px] border-[#BCE3C9] w-fit first-letter: ' >Top Rated</h2>

                    <div className="flex flex-col border-t-[1px] border-[#ECECEC] pt-8 gap-5 ">
                        {topRated.map((data, index) => {
                            return <div key={index} className="flex flex-row gap-5 ">
                                <div className=" bg-[#F4F6FA] border-[1px] rounded-[10px] flex flex-col items-center justify-center py-2  ">
                                    <img src={data.img} alt="" />
                                </div>
                                <div className="">
                                    <h2 className='font-bold' >{data.description}</h2>
                                    <h2 className='font-bold' >{data.name}</h2>
                                    <div className="flex flex-row justify-between items-center">
                                        <img src={data.ratingStar} alt="" />
                                        <h2 className='text-[#B6B6B6]'>({data.rating})</h2>
                                    </div>
                                    <div className="flex flex-row justify-between items-center">
                                        <h2 className='text-[#3BB77E] text-[20px] font-bold'>${data.price}</h2>
                                        <h2 className='line-through text-[#ADADAD] font-bold' >${data.oldPrice}</h2>
                                    </div>
                                </div>

                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products