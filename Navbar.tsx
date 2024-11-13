import React from 'react'
import Image from 'next/image'
import BrandName from "@/app/BrandName.png"
const Navbar = () => {
  return (
    <div>

      <div className="home w-[1440px] h-[1132px] bg-[black] top-[-590px] left-[-720px]">
        <div className="container bg-[#252B42] w-[1322px] h-[91px] left-[59px] flex flex-row ">
         <div className="navbar-style-2 navbar-light w-[1322px] h-[91px] bg-[#252B42] flex flex-row"> 
         <Image src={BrandName} alt="brand" className='brand ml-24 mt-4 w-[197px] h-[58px] bg-[#252B42] px-4 object-center py-2 left-36px'></Image>
          
          <div className="collapse-navbar-collapse flex flex-row mt-4 ml-[174px] w-[815px] h-[58px]bg-[#252B42]">
          <div className="Navbar-nav-1 mb-4 w-[198px] h-52px gap-[21px]">
          <ul className=" text-white w-[275px] h-[24px] flex flex-row  mt-[17px] gap-[21px]">
            <li>Home </li>
            <li>Product </li>
            <li>Pricing </li>
            <li>Contact </li>
          </ul>

          </div>
          

          <div className="nav-items flex flex-row w-[189px] h-[52px] mt-[3px] ml-[316px] gap-[45px]">
            <button className="login text-white  mt-3 w-[41px] h-[22px] rounded">
              Login
            </button>

            <button className="button.btn.primary-color ml-2 mt-0 bg-blue-700 text-white font-bold w-[110px] h-[52px] leading-[22px] tracking-[0.2px] rounded">
            JOIN US
            </button>

          </div>
          
</div>
       </div> 
        </div>
        <div className="container bg-[#252B42] w-[1440px] h-[1132px] top-[104px] left-[197px] py-20 gap-20">

<div className="main-content ml-16 bg-[#252B42] py-10">
  <h5 className="header-tag w-[77px] h-[24px] text-[#23A6F0] text-base leading-6 tracking-tight ml-[560px]">Welcome</h5>
  <h1 className="headline ml-64 w-[692px] h-[160px] text-white text-center leading-[52px] tracking-tight text-[58px] gap-10 px-24 py-4">Selling on the internet like a pro</h1>
<h4 className="sub-headline w-[586px] h-[60px] ml-[300px] px-28 text-center text-white">We know how large objects will act, but things on a 
small scale just do not act that way.</h4>

<div className="cta ml-[364px] w-[465px] h-[100px] bg-[#252B42] mt-4">
<button className="button.btn.primary-color ml-[40px] mt-6 px-[40px] py-[14px] bg-blue-700 text-white w-[193px] h-[52px] rounded">
            Get Quote Now
            </button>

            <button className="button.btn.primary mt-1px ml-2 px-[22px] py-[12px] border border-sky-500 text-white w-[182px] h-[52px] rounded">
            Learn More
            </button>

            </div>


<div className="row flex flex-row w-[1086px] h-[292px] mt-24 gap-[30px] bg-[#252B42] ">
<div className="flex flex-row col-md-4 w-900px] h-292px">
<div className="flex flex-row card w-[328px] h-[292px] border-2 border-black bg-white ml-16 mr-8 gap-5 relative">
<div className="text absolute top-[136px] left-8 font-bold">
  <span>training Courses</span>
  </div>  
<div className="absolute h-1 w-12 top-44 left-8 bg-red-400">
  
</div>
<div className="absolute w-60  top-48 left-8 text-white">
  <span className="para absolute text-gray-400 ">The gradual accumulation of information about atomic and small scale behavior ...</span>
</div>
<div className="square  flex flex-row  bg-[#FFDCD1] ml-8 mt-8 h-20 w-20 border-2 border-black rounded-md">

</div>

</div>


<div className="flex flex-row card w-[328px] h-[292px] border-2 border-black bg-white gap-5 relative rounded-md">
<div className="text absolute top-[136px] left-8 font-bold">
  <span>2769 online Courses</span>
  </div>
  <div className="absolute h-1 w-12 top-44 left-8 bg-red-400">
  
  </div>

  <div className="absolute w-60  top-48 left-8 text-white">
  <span className="para absolute text-gray-400 ">The gradual accumulation of information about atomic and small scale behavior ...</span>
</div>
<div className="line h-1 bg-red-400 top-48 left-8 absolute">
<span></span>
</div>
<div className="square bg-[#B9EAA8] ml-8 mt-8  h-20 w-20 border-2 border-black rounded-md"></div>
      </div>
</div>
<div className="flex flex-row card w-[328px] h-[292px] border-2 border-black bg-blue-400 gap-5 relative rounded-md">
<div className="text absolute top-[136px] left-8 text-white shadow font-bold">
  <span>training Courses</span>
  </div>

  <div className="absolute h-1 w-12 top-44 left-8 bg-white">
  
</div>

<div className="absolute w-60  top-48 left-8 text-white">
  <span className="para absolute text-white ">The gradual accumulation of information about atomic and small scale behavior ...</span>
</div>
<div className="square ml-8 mt-8 h-20 w-20 border-2 bg-white border-black rounded-md"></div>
</div>


</div>

</div>
      
</div>




</div>
 

    

      
</div>
    
  



  )
}

export default Navbar
