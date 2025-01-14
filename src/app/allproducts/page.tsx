
import { products } from '../data/products';


export default function Home() {
 
  const discountproducts = products.slice(6)
  return (
<div>
<div className="max-w-screen-xl mx-auto  relative my-12">
  <h1 className="font-medium  text-[32px] my-6"> All Products</h1>
  
      <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-4  gap-6 gap-y-24">
        {products.map(({ id, name, price, originalPrice, image, img2, badge, badgeColor }) =>
         (<div key={id} className="relative  rounded-lg">
            {badge && <div className={`absolute top-4 left-4 text-white text-xs px-2 py-1 rounded ${badgeColor}`}>{badge}</div>}
            <img src={image} alt={name} />
              <h3 className=" font-normal text-[16px] mt-4  hover:text-[#029FAE]">{name}</h3>
              <p className="text-black font-semibold mt-1" >
               ${price} {originalPrice ? <span className="line-through text-gray-400 text-xs font-normal" >${originalPrice}</span> : null}
             <img src={img2} className="absolute bottom-1 right-1 hover:bg-[#029FAE]"/> </p>  
         
          </div>
        ))} 
  </div> </div> </div>

{/* Subscribe Section */}

<div className=" gap-6 bg-gray-100  ">
<div className="max-w-screen-xl mx-auto  py-12 my-32 relative ">
      <div className="text-center mb-8">
        <h2 className="text-[42px] font-medium mb-4">Or Subscribe To The Newsletter</h2>
        <div className="flex items-center justify-center gap-8  my-16">
          <input
            type="email"
            placeholder="Email Address..."
            className="border-b w-[575px] bg-gray-100  border-gray-400 px-2 outline-none focus:border-black transition"
          />
          <button className="text-sm  uppercase border-b border-gray-400 hover:border-black transition">
            Submit
          </button>
        </div>
      </div>

  {/* Follow on Instagram Section */}
        <h3 className="text-center text-[42px] font-medium m-10">Follow Products And Discounts On Instagram</h3>

        <div className="grid grid-cols-1  md:grid-cols-6 gap-4 p-2 mb-12 justify-center" >
        {discountproducts.map(({ id, name, image, }) =>
         (<div key={id}>
            <img src={image} alt={name} className="relative  rounded-xl" />
          </div>
        ))} 
      </div>
    </div>
   </div>
    </div>
  )}