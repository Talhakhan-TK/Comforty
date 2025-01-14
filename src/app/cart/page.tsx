
import { products } from '../data/products';
import { Trash2 } from 'lucide-react';
import { Heart } from 'lucide-react';

export default function cart() {
 
  const cartproducts = products.slice(10)
  return (

<div className="max-w-screen-xl mx-auto relative ">
     
  <div className="flex  justify-between  my-16">
    <div> <h2 className="text-[22px] font-medium mb-4">Bag</h2>
          
      <div className="grid grid-cols-1  md:grid-cols-1 gap-10 " >
        {cartproducts.map(({ id, name, price, image, }) =>
         (<div key={id}>
           <div className="flex gap-8 border-b-2 pb-8">
            <img src={image} alt={name} className="  relative  rounded-xl h-[150px] " />
            <div className='grid-rows-3'>
            <h1 className='text-[15px]'>{name} <span className='ml-96'>MRP: ${price} </span></h1> 
            <h1 className='mt-8 text-gray-500'> Ashen Slate/Cobalt Bliss</h1>
            <h1 className='mt-2 text-gray-500 '> Size L  <span className="m-12"> Quantaity 1   </span></h1>
            <h1 className='flex mt-6 text-gray-500 gap-10 '> <Heart /> <span> <Trash2 />  </span></h1>
            </div >  
          </div> </div>
        ))} 
      </div>
    </div>


      <div><h2 className="text-[22px] font-medium mb-4 mr-52" >Summary  </h2>
        <h2 className=" text-[15px] font-normal flex justify-between my-4 ">Subtotal <span> $40</span></h2>
        <h2 className=" text-[15px] font-normal flex justify-between ">Estimated Delivery & Handling <span> Free</span></h2>
        <h2 className=" text-[15px] font-normal flex justify-between my-6 border-y-2 py-4">Total <span> $40.00</span></h2>
        <button className='bg-[#029FAE] text-white p-5 px-24 my-4  items-center w-[#334.67] rounded-3xl'>Member Checkout</button>
      </div>
      </div>
    </div>

  
  )}