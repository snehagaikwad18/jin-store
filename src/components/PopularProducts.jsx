import product1 from '../assets/product1.svg'
import product2 from '../assets/product2.svg'
import product3 from '../assets/product3.svg'
import product4 from '../assets/product4.svg'
import product5 from '../assets/product5.svg'
import product6 from '../assets/product6.svg'
import product7 from '../assets/product7.svg'
import product8 from '../assets/product8.svg'
import product9 from '../assets/product9.svg'
import product10 from '../assets/product10.svg'
import star from '../assets/star.svg'
import { Button } from "@/components/ui/button"
import { GrCart } from "react-icons/gr";


const product = [
    {
        tag: 'Hot',
        tagColor: '#F74B81',
        img: product1,
        productType: 'Snack',
        description: 'Seeds of Change',
        name: 'Organic Quinoe',
        ratingStar: star,
        rating: '4.0',
        seller: 'NestFood',
        price: '25.85',
        oldPrice: '32.5'
    },
    {
        tag: 'Sale',
        tagColor: '#67BCEE',
        img: product2,
        productType: 'Hodo Foods',
        description: 'All Natural Italian-Style',
        name: 'Chicken Meatballs',
        ratingStar: star,
        rating: '3.5',
        seller: 'Stouffer',
        price: '52.85',
        oldPrice: '55.8'
    },
    {
        tag: 'New',
        tagColor: '#3BB77E',
        img: product3,
        productType: 'Snack',
        description: 'Angie’s Boomchickapop',
        name: 'Sweet & Salty',
        ratingStar: star,
        rating: '4.0',
        seller: 'StarKist',
        price: '48.85',
        oldPrice: '52.8'
    },
    {
        tag: null,
        tagColor: null,
        img: product4,
        productType: 'Vegetables',
        description: 'Foster Farms Takeout',
        name: 'Crispy Classic',
        ratingStar: star,
        rating: '4.0',
        seller: 'NestFood',
        price: '17.85',
        oldPrice: '19.5'
    },
    {
        tag: '-14%',
        tagColor: '#F59758',
        img: product5,
        productType: 'Pet Foods',
        description: 'Blue Diamond Almonds',
        name: 'Lightly',
        ratingStar: star,
        rating: '4.0',
        seller: 'NestFood',
        price: '23.85',
        oldPrice: '32.5'
    },
    {
        tag: null,
        tagColor: null,
        img: product6,
        productType: 'Hodo Foods',
        description: 'Chobani Complete',
        name: 'Vanilla Greek',
        ratingStar: star,
        rating: '4.0',
        seller: 'NestFood',
        price: '54.12',
        oldPrice: '55.89'
    },
    {
        tag: null,
        tagColor: null,
        img: product7,
        productType: 'Meats',
        description: 'Canada Dry Ginger Ale –',
        name: '2 L Bottle',
        ratingStar: star,
        rating: '4.0',
        seller: 'NestFood',
        price: '25.85',
        oldPrice: '32.5'
    },
    {
        tag: 'Sale',
        tagColor: '#67BCEE',
        img: product8,
        productType: 'Snack',
        description: 'Encore Seafoods',
        name: 'Stuffed Alaskan',
        ratingStar: star,
        rating: '4.0',
        seller: 'NestFood',
        price: '25.85',
        oldPrice: '32.5'
    },
    {
        tag: 'Hot',
        tagColor: '#F74B81',
        img: product9,
        productType: 'Coffes',
        description: 'Gorton’s Beer Battered',
        name: 'Fish Fillets',
        ratingStar: star,
        rating: '4.0',
        seller: 'Old El Paso',
        price: '25.85',
        oldPrice: '32.5'
    }, {
        tag: null,
        tagColor: null,
        img: product10,
        productType: 'Cream',
        description: 'Haage n-Dazs Caramel',
        name: 'Cone Ice Cream',
        ratingStar: star,
        rating: '2.0',
        seller: 'Tyson',
        price: '22.85',
        oldPrice: '24.5'
    },

]
const PopularProducts = () => {
    return (
        <div className='w-full flex flex-col gap-5 pt-5 ' >
            <div className="flex flex-row justify-between items-center">
                <h1 className='text-[30px] font-bold pl-5'>Popular Products</h1>
                <div className="flex flex-row gap-3 text-[14px] font-semibold ">
                    <h2 className='text-[#3BB77E]'>All</h2>
                    <h2>Milks & Dairies</h2>
                    <h2>Coffes & Teas</h2>
                    <h2>Pet Foods</h2>
                    <h2>Vegetables</h2>
                    <h2>Fruits</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 sm2:grid-cols-2 lg:grid-cols-3 lg3:grid-cols-4  xl2:grid-cols-5 px-5 gap-5">
                {product.map((data, index) => {
                    return <div key={index} className=" border-[#ECECEC] border-[1px] rounded-[15px] flex-col pb-5 ">
                        <h2 style={{ backgroundColor: data.tagColor }}
                            className={` ${data.tag ? 'text-white text-[12px] py-2 text-center w-1/5 h-1/7 rounded-tl-[15px] rounded-br-[20px] ' : 'py-4 '}`}>{data.tag}
                        </h2>

                        <div className="w-full h-[2/7] flex items-center justify-center">
                            <img src={data.img} alt={data.img} className='h-[206.59px] w-[231.59px]' />
                        </div>
                        <div className="flex flex-col">

                            <p className='px-5 h-1/7   text-[#ADADAD] text-[14px] '>{data.productType}</p>
                            <h2 className='px-5 h-1/7 lg:text-[17px]   text-[22px] font-bold leading-6 pt-3 ' >{data.description}</h2>
                            <h2 className='px-5 h-1/7   lg:text-[17px] text-[22px] font-bold leading-6' >{data.name}</h2>
                            <div className="px-5 h-1/7  flex flex-row items-center justify-between w-1/2 pt-1">
                                <img src={data.ratingStar} alt={data.ratingStar} />
                                <h2>{data.rating}</h2>
                            </div>
                            <h2 className='px-5 h-1/7 text-[#ADADAD] text-[14px] pt-1' >By <span className='text-[#3BB77E]'> {data.seller}</span></h2>
                            <div className="px-5 h-1/7 flex flex-row justify-between items-center gap-5 pt-5">
                                <h2 className='text-[#3BB77E] text-[15px] font-bold'>${data.price}</h2>
                                <h2 className='line-through text-[#ADADAD] text-[13px] font-bold' >${data.oldPrice}</h2>
                                <div className="w-full">
                                    <Button className="bg-[#DEF9EC] font-bold rounded-md flex items-center gap-2 text-[#3BB77E] "><GrCart /> Add</Button>
                                </div>
                            </div>
                        </div>


                    </div>
                })}
            </div >
        </div >
    )
}

export default PopularProducts