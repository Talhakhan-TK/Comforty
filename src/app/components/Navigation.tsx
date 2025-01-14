
import { CircleAlert } from 'lucide-react'
import { ChevronDown } from 'lucide-react';

const Nav = () => {
    return(
        <nav>
           
           <div className="w-full h-[45px]  bg-[#272343] ">
            <div className="max-w-screen-xl mx-auto h-[45px] pt-[14px] pb-[14px]  gap-0 flex justify-between text-white  ">
                <h1 className="text-[13px] font-normal leading-[14.3px]" > ✔ Free Shipping on All Orders Over $50</h1>  
                <h1 className="text-[13px] font-normal leading-[14.3px] flex items-center space-x-6 text-[#FFFFFF] w-[202px] h-[17px]">  
                <span className='flex '>Eng <ChevronDown size={16} strokeWidth={1} /></span><span><a href="../faq">  Faqs</a></span> 
                <span className='flex gap-1'><CircleAlert size={16} strokeWidth={1}/><a href="../contactus">  Need Help</a></span> </h1> 
                </div>
                </div>
                <div className='bg-[#F0F2F3] w-full'>

                <div className="max-w-screen-xl mx-auto h-[84px]   flex justify-between  ">
                <h1 className="text-[26px] font-normal leading-[14.3px] text-[#272343] justify-center items-center flex gap-2" > <img src="/images/Logo Icon.png"/> Comforty</h1>  
                <button className="w-[120px] h-[44px] bg-[#FFFFFF] text-black justify-center items-center mt-5 flex text-xs gap-2"> <img src="/images/Buy 2.png"/><a href="../cart"> Cart  </a> <img src="/images/No.png"/></button> 
             </div>
             </div>

             <div className="max-w-screen-xl mx-auto h-[74px]  flex justify-between items-center bg-[#FFFFFF] text-[14px] border-b-2 border-[#F0F2F3]  ">
                <ul className="pt-[14px] pb-[14px] flex space-x-8 "> 
                <li><a href="/" className="border-b-2 border-transparent hover:border-black text-[#007580]">Home</a></li>    
                <li><a href="../cart" className="border-b-2 border-transparent hover:border-black ">Shop</a></li>
                <li><a href="../allproducts" className="border-b-2 border-transparent hover:border-black ">Product</a></li>
                <li><a href="../singleproduct" className="border-b-2 border-transparent hover:border-black ">Pages</a></li>
                <li><a href="../aboutus" className="border-b-2 border-transparent hover:border-black ">About </a></li>
                </ul> 
                <h1 className="justify-center flex gap-2  h-[15px]"> <span className=" text-[#636270]"> Contact: </span>(808) 555-0111  </h1>
             </div>
     
        </nav>
    )
}
export default Nav