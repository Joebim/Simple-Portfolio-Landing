import React from 'react'
import joseph from "../../assets/images/josey.png"
import blob from "../../assets/images/blob.svg"
import { ReactComponent as Mouse } from '../../assets/images/mouse.svg'

export default function Intro() {
  return (
    <>
      <div className="head-contain flex flex-col-reverse md:flex-row w-full h-[100vh] ">
        <div className="left flex items-center flex-[1] flex-col">
          <div className="h-full flex items-center px-[40px] justify-center">
            <div className="intro-text-contain pt-[20px] md:pt-0 pl-0 md:pl-[60px]">
              <h3 className='text-[20px] md:text-[30px] font-light'>Hello, My name is</h3>
              <h1 className='text-[45px] md:text-[60px] font-extrabold'>John Doe</h1>
              <div className="title-slide h-[50px] overflow-hidden my-[10px]">
                <div className="title-wrapper animate-[move_10s_ease-in-out_infinite_alternate]">
                  <div className='title text-[30px] font-bold text-[#59b256] h-[50px] flex items-center'>Web Developer</div>
                  <div className='title text-[30px] font-bold text-[#59b256] h-[50px] flex items-center'>UI/UX Designer</div>
                  <div className='title text-[30px] font-bold text-[#59b256] h-[50px] flex items-center'>Photographer</div>
                  <div className='title text-[30px] font-bold text-[#59b256] h-[50px] flex items-center'>Writer</div>
                  <div className='title text-[30px] font-bold text-[#59b256] h-[50px] flex items-center'>Content Creator</div>
                </div>
              </div>
              <p className='pt-[30px]'>I create and develop services for customers of all sizes, specializing in creating stylish modern websites, web services and online store</p>
          </div>
          </div>
          
            <Mouse className='stroke-black fill-none h-[30px] mt-[20px] md:mt-0 mb-[20px] cursor-pointer hover:stroke-[#59b256] ease duration-500'/>
        </div>
        <div className="right flex-[1] flex justify-center">
          <img src={joseph} className="w-[180px] h-[280px] md:w-[300px] md:h-[460px] mt-[200px] md:mt-[155px]" alt="" />
          <img src={blob} className='absolute z-[-1] w-[550px] h-[610px]' alt="" />
        </div>
      </div>
    </>
  )
}
