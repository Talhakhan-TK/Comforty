import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Clock9 } from 'lucide-react';
import { Trophy } from 'lucide-react';
import { BadgeCheck } from 'lucide-react';
import { Headset } from 'lucide-react';

export default function contactus() { 
  return (

<div className="max-w-screen-xl mx-auto relative my-12 ">
<h1 className="flex justify-center mt-16 text-[36px] font-semibold">Get In Touch With Us</h1>
<h2 className="text-center text-[16px] text-[#9F9F9F] max-w-[644px] mx-auto ">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</h2>
     
<div className="flex justify-center mt-20">
<div className="grid  justify-center grid-cols-1 md:grid-cols-2  w-2/3">
    <div className="space-y-20 w-2/3  ">
      
      <div className="flex items-start gap-6">
        <div className="text-primary text-2xl">
        <MapPin />
        </div>
        <div>
        <h3 className="text-[24px] font-semibold">Address</h3>
        <p className="text-[16px]">
            236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
      </div>

      <div className="flex items-start gap-6">
        <Phone />
        <div>
        <h3 className="text-[24px] font-semibold">Phone</h3>
        <p className="text-[16px]">
            Mobile: (+84) 546-6789<br />
            Hotline: (+84) 456-6789
          </p>
        </div>
      </div>
 
      <div className="flex items-start gap-6">
        <div className="text-primary text-2xl">
        <Clock9 />
        </div>
        <div>
          <h3 className="text-[24px] font-semibold">Working Time</h3>
          <p className="text-[16px]">
            Monday-Friday: 9:00 - 22:00<br />
            Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>


    <div className="space-y-8">
        <div >
          <label  className="block text-[16px] font-medium text-black">Your name</label>
          <input type="text" id="name" placeholder='Abc' name="name"
            className="mt-4 p-4 block w-full border-gray-300 rounded-lg border-2 "/>
        </div>

        <div>
          <label  className="block text-[16px] font-medium text-black">Email address</label>
          <input type="email" id="email" name="email" placeholder='Abc@def.com'
                 className="mt-4 p-4 block w-full border-gray-300 rounded-lg border-2 "/>
        </div>

        <div>
          <label  className="block text-[16px] font-medium text-black">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="This is an optional"
            className="mt-4 p-4 block w-full border-gray-300 rounded-lg border-2 "/>
        </div>

        <div>
          <label  className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" 
                 className="mt-4 p-4 block w-full border-gray-300 rounded-lg border-2 "
            placeholder="Hi! I'd like to ask about..."></textarea>
        </div>

        <div>
          <button className="w-1/2  text-white bg-[#029FAE] p-3 rounded-md shadow hover:bg-primary-dark focus:outline-none">
            Submit
          </button>
        </div>
    </div>
  </div>
</div>


<div className='flex justify-between bg-[#F4F4F4] px-16 py-24 mt-12'> 
<div className='flex gap-4'>
<Trophy className='size-[60px]'/>  
<div className='font-semibold text-[25px]'>High Quality
<h1 className='font-medium text-[#898989] text-[20px]'>Crafted from top materials</h1>
</div></div>


<div className='flex gap-3'>
<BadgeCheck className='size-[60px]'/>  
<div className='font-semibold text-[25px]'>Warranty Protection
<h1 className='font-medium text-[#898989] text-[20px]'>Over 2 years</h1>
</div></div>

<div className='flex gap-3'>
<Headset className='size-[60px]'/>  
<div className='font-semibold text-[25px]'>24 / 7 Support
<h1 className='font-medium text-[#898989] text-[20px]'>Dedicated support</h1>
</div></div>

</div>
</div>
  )}