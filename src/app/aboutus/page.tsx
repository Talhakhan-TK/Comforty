
export default function FAQ() {


  return (

    <div className="max-w-screen-xl mx-auto  relative my-12">
    <div className="space-y-16">
    {/* About Us Section */}
   
    
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
       
          <div className="bg-[#007580] text-white p-16 w-[619px] h-[478px]  ">
          <h2 className="text-3xl font-bold ">About Us - Comforty</h2>
          <p className="mb-32 mt-4 ">
            At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
          </p>
          <button className="bg-teal-900 text-white font-medium px-4 py-2 rounded shadow hover:bg-gray-100">
            View collection
          </button>
        </div>
        <div >
          <img
            src="/images/TopCat/7.png"
            alt="Comforty chair"  
            className="w-[619px]  h-[478px] "
          />
        </div>
      </div> 


    {/* What Makes Us Different */}
    
      <div className="max-w-screen mx-auto text-center ">
        <h2 className="text-2xl font-bold mb-8 mt-32">What Makes Our Brand Different</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-left gap-6">
          {[
            {
              icon: "🚚",
              title: "Next day as standard",
              description:
                "Order before 3pm and get your order the next day as standard.",
            },
            {
              icon: "🎨",
              title: "Made by true artisans",
              description:
                "Handmade crafted goods made with real passion and craftsmanship.",
            },
            {
              icon: "💰",
              title: "Unbeatable prices",
              description:
                "For our materials and quality, you will not find better prices anywhere.",
            },
            {
              icon: "♻️",
              title: "Recycled packaging",
              description:
                "We use 100% recycled to ensure our footprint is more manageable.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded shadow flex flex-col">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-medium mb-2 text-[#007580]">{item.title}</h3>
              <p className="text-[#007580]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      
    {/* Our Popular Products */}
     
        <h2 className="text-2xl font-semibold  my-6">Our Popular Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left mb-20">
        
  <div className="col-span-2">
    <img src="images/Topcat/5.png" alt="Large Image" /> 
      <h1 className="my-2">The Poplar suede sofa</h1>
      <h1>$99.00</h1>
    </div>
  <div>
    <img src="images/Topcat/6.png"/>
      <h1 className="my-2">The Dandy chair</h1>
      <h1>$99.00</h1>
      </div>
  <div >
    <img src="images/Topcat/4.png"/>    
      <h1 className="my-2">The Dandy chair</h1>
      <h1>$99.00</h1>
      </div>
    </div> 
  </div></div>
 
);
}
