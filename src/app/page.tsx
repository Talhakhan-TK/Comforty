
import { products } from './data/products'

export default function Home() {

  const FeProducts = products.slice(0, 4);
  const ourproducts = products.slice(0, 8);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto h-[850px] text-[#272343] bg-[#F0F2F3] relative">
        <h1 className="text-[14px]   absolute" style={{ left: '70px', top: '229px' }} >WELCOME TO CHAIRY</h1>
        <h1 className="text-[60px] w-[50%] font-bold absolute " style={{ left: '70px', top: '267px', lineHeight: '1.1', }} >Best Furniture Collection for your interior.</h1>
        <button className="bg-[#029FAE] text-white px-4 py-2 rounded-md hover:bg-black absolute" style={{ left: '70px', top: '514px' }}>Shop Now <span className="m-2"> </span>→ </button>
        <img src="/images/chair.png" className="relative " style={{ left: '777px', top: '115px', }} />
        </div>
        <div className="max-w-screen-xl relative mx-auto flex gap-24 pt-8">
        
        <img src="/images/bar logos/1.png"/>
        <img src="/images/bar logos/2.png"/>
        <img src="/images/bar logos/3.png"/>
        <img src="/images/bar logos/4.png"/>
        <img src="/images/bar logos/5.png"/>
        <img src="/images/bar logos/6.png"/>
        <img src="/images/bar logos/7.png"/>
     
       </div> 

{/* Featured Products */}
  <div className="max-w-screen-xl mx-auto  relative">
  <h1 className="font-medium text-[32px] mt-6"> Featured Products</h1>
    
      <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  
        {FeProducts.map(({ id, name, price, originalPrice, image, img2, badge, badgeColor }) =>
         (<div key={id} className="relative  rounded-lg">
            {badge && <div className={`absolute top-4 left-4 text-white text-xs px-2 py-1 rounded ${badgeColor}`}>{badge}</div>}
            <img src={image} alt={name} />
            <div className=""> 
              <h3 className=" font-normal text-[16px] mt-4  hover:text-[#029FAE]">{name}</h3>
              <p className="text-black font-semibold mt-1" >
               ${price} {originalPrice ? <span className="line-through text-gray-400 text-xs font-normal" >${originalPrice}</span> : null}
             <img src={img2} className="absolute bottom-1 right-1 hover:bg-[#029FAE]"/> </p>  
            </div>
          </div>
        ))}  
  </div> </div> </div>

{/* Top Categories */}
  <div className="max-w-screen-xl mx-auto  relative my-8">
  <h1 className="font-medium text-[32px] my-12"> Top Categories</h1>
    
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      <img src="/images/TopCat/1.png"/>
      <img src="/images/TopCat/2.png"/>
      <img src="/images/TopCat/3.png"/>

  </div> </div> 


{/* New styles */}
  <div className="max-w-screen-xl mx-auto relative my-36">
  <div className="flex">
    <p className="text-[30px] font-medium text-center text-gray-600 rotate-[180deg]" style={{ writingMode: "vertical-lr", }}>
  EXPLORE NEW AND POPULAR STYLES
</p>

  <div className="grid grid-cols-4 gap-4">   
  <div className="col-span-2 row-span-2">
    <img src="images/Fp/3.png" alt="Large Image" className="w-full h-full" />  
    </div>
      <img src="/images/Fp/4.png"/>
      <img src="/images/Fp/1.png"/>
      <img src="/images/Fp/6.png"/>
      <img src="/images/Fp/1.png"/>
      </div> 
  </div></div>

{/* Our Products */}

<div className="max-w-screen-xl mx-auto  relative my-12">
  <h1 className="font-medium text-center text-[32px] my-6"> Our Products</h1>
    
      <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {ourproducts.map(({ id, name, price, originalPrice, image, img2, badge, badgeColor }) =>
         (<div key={id} className="relative  rounded-lg">
            {badge && <div className={`absolute top-4 left-4 text-white text-xs px-2 py-1 rounded ${badgeColor}`}>{badge}</div>}
            <img src={image} alt={name} />
            <div className=""> 
              <h3 className=" font-normal text-[16px] mt-4  hover:text-[#029FAE]">{name}</h3>
              <p className="text-black font-semibold mt-1" >
               ${price} {originalPrice ? <span className="line-through text-gray-400 text-xs font-normal" >${originalPrice}</span> : null}
             <img src={img2} className="absolute bottom-1 right-1 hover:bg-[#029FAE]"/> </p>  
            </div>
          </div>
        ))}  
  </div> </div> </div>
</div>);}
