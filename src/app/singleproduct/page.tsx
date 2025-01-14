import Image from "next/image";
import { products } from '../data/products';
import { ShoppingCart } from 'lucide-react';

export default function Home() {
    const singleproducts = products.slice(7);
  return (
    <div className="max-w-screen-xl mx-auto m-24">
      <div className="flex flex-col md:flex-row gap-32">
        <div className="md:w-1/2">
          <Image src="/images/Fp/2.png" alt="Hero Chair" width={675} height={607} className="hover:rounded-2xl hover:border-blue-500 hover:border-4" />
        </div>
        <div className="md:w-1/2 ">
          <h1 className="text-6xl font-bold text-[#272343] w-[541px]">Library Stool Chair</h1>
          <button className="text-[20px] font-semibold bg-[#029FAE] text-white mt-8 p-2 px-4 rounded-3xl"> $20.00 USD </button>
          <h1 className=" my-12 border-t-2 border-{D9D9D9} "> </h1>
          <p className="text-[22px] font-light text-[#272343] mt-4  w-[541px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          <button className="mt-6 bg-[#029FAE] text-[20px] font-semibold text-white px-6 py-4 rounded-md hover:bg-teal-600 flex items-center gap-2">
          <ShoppingCart size={30} strokeWidth={1} />  Add To Cart
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[28px] font-bold text-gray-800 my-8">FEATURED PRODUCTS</h2>
          <a href="#" className="text-[18px] font-bold text-sm underline text-black hover:text-teal-500 ">View all</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {singleproducts.map(({ id, name, price, image }) => (
            <div key={id} className="text-center">
                <img src={image} alt={name} />
              <div className="flex justify-between items-center mt-4">
             <h3 className=" text-gray-700">{name}</h3>
              <p className="text-gray-800 font-semibold">${price}</p>
            </div>  </div>
          ))}
        </div>
      </div>
    </div>
  );
}
