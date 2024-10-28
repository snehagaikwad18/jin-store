import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import category1 from '../assets/category1.svg'
import category2 from '../assets/category2.svg'
import category3 from '../assets/category3.svg'
import category4 from '../assets/category4.svg'
import category5 from '../assets/category5.svg'
import category6 from '../assets/category6.svg'
import category7 from '../assets/category7.svg'
import category8 from '../assets/category8.svg'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const categories = [
  {
    name: 'Milks and Dairies',
    img: category1
  },

  {
    name: 'Wines & Alcohol',
    img: category2
  },

  {
    name: 'Clothing & Beauty',
    img: category3
  },

  {
    name: 'Pet Foods & Toy',
    img: category4
  },
  {
    name: 'Packaged fast food',
    img: category5
  },
  {
    name: 'Baking material',
    img: category6
  },

  {
    name: 'Vegetables & tubers',
    img: category7
  },
  {
    name: 'Fresh Seafood',
    img: category8
  }
]


const Categories = () => {
  return (
    <div className='w-full p-5 flex flex-col gap-5 overflow-x-hidden '>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-1 items-end">
          <h1 className='mr-5 text-[25px] sm:text-[32px] font-bold text-[#253D4E]' >Shop by Categories</h1>
          <p className='text-[#7E7E7E] text-[12px] sm:font-normal  '>All Categories </p>
          <MdKeyboardArrowRight className='text-[#7E7E7E]' size={20} />
        </div>

        <div className=" hidden sm:flex sm:flex-row sm:gap-2 sm:items-center">
          <div className="bg-[#F4F6FA] rounded-full h-[40px] w-[40px] flex items-center justify-center">
            <FaArrowLeft />
          </div>
          <div className="bg-[#F4F6FA] rounded-full h-[40px] w-[40px] flex items-center justify-center">
            <FaArrowRight />
          </div>
        </div>
      </div>

      


      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
        {
          categories.map(({ name, img }, index) => {
            return (
              <div key={index} className="bg-[#F4F6FA] border-[1px] rounded-[10px] flex flex-col items-center justify-center py-2 h-[215.38px] w-full max-w-[165px]">
                <img src={img} alt={name} className="max-w-full h-auto" />
                <h2 className='text-center'>{name}</h2>
              </div>
            );
          })
        }
      </div>


    </div>
  )
}

export default Categories