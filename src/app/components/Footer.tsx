import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return(
  
  <div className=" w-full bg-white border-t-2">
    
    
      <div className=" footer-sections max-w-screen-xl mx-auto flex flex-col-4 ">
  
        <div className="footer-logo flex flex-col sm:w-1/4 mb-6 sm:mb-0   ">
          <div className="footer-logo-text flex items-center  mb-4">
            <span className=" text-[26px]  flex font-bold text-black pt-8   ">  <img src="/images/Logo Icon.png" className="mr-2"/> Comforty</span>
          </div>
          <p className="mr-8   text-gray-600 text-[16px]">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.</p>
          <div className="social-icons flex space-x-4 mt-6">
            <a href="#" className="icon text-[#029FAE] hover:text-blue-600  "><i className="fab fa-facebook"></i></a>
            <a href="#" className="icon text-gray-500 hover:text-blue-600"><i className="fab fa-twitter"></i></a>
            <a href="#" className="icon text-gray-500 hover:text-blue-600"><i className="fab fa-instagram"></i></a>
            <a href="#" className="icon text-gray-500 hover:text-blue-600"><i className="fab fa-pinterest"></i></a>
            <a href="#" className="icon text-gray-500 hover:text-blue-600"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-categories flex flex-col w-full sm:w-1/4 sm:mb-0">
          <h3 className=" text-[#9A9CAA] font-medium text-[14px] pt-8 pb-2 ml-10">CATEGORY</h3>
          <ul className="category-list font-regular text-[16px] ml-10  ">
            <li><a href="#" className="category-item text-gray-600 hover:text-blue-600">Sofa</a></li>
            <li><a href="#" className="category-item text-gray-600 hover:text-blue-600">Armchair</a></li>
            <li><a href="#" className="category-item text-gray-600 hover:text-blue-600">Wing Chair</a></li>
            <li><a href="#" className="category-item text-[#029FAE] text- hover:text-blue-600">Desk Chair</a></li>
            <li><a href="#" className="category-item text-gray-600 hover:text-blue-600">Wooden Chair</a></li>
            <li><a href="#" className="category-item text-gray-600 hover:text-blue-600">Park Bench</a></li>
          </ul>
        </div>

        <div className="footer-support flex-col w-full sm:w-1/4 mb-6 sm:mb-0">
          <h3 className="text-[#9A9CAA] font-medium text-[14px]  pt-8 pb-2">SUPPORT</h3>
          <ul className="category-list font-regular text-[16px]">
            <li><a href="#" className="support-item text-gray-600 hover:text-blue-600">Help & Support</a></li>
            <li><a href="#" className="support-item text-gray-600 hover:text-blue-600">Terms & Conditions</a></li>
            <li><a href="#" className="support-item text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
            <li><a href="#" className="support-item text-gray-600 hover:text-blue-600">Help</a></li>
          </ul>
        </div>

        <div className="footer-newsletter flex flex-col sm:w-1/4 ">
          <h3 className="text-[#9A9CAA] font-medium text-[14px] pt-8 pb-2">NEWSLETTER</h3>
          <form className="newsletter-form flex flex-col-1 w-[400px] ">
          <input className="rounded-md border transition-all duration-200 w-[285px] h-[46px] mr-1.5" placeholder="   Your email"  />
          <button className="subscribe-button bg-[#029FAE] w-[127px] h-[46px] text-white px-4 py-2 rounded-md hover:bg-black">Subscribe</button>
          </form>
          <p className=" text-[#272343] text-[15px] mt-4 w-[424px] h-[46px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
        </div>
      </div>

      <div className="mt-8 border-t pt-6 max-w-screen-xl mx-auto flex justify-between mb-6 ">
        <p className="footer-text text-gray-600 ">&copy; 2021 - Blogy - Designed & Developed by <a href="#" className="footer-link text-black">Zakirsoft</a></p>
        <img src="/images/Logos.png" alt="PayPal" className="payment-logo h-6"/>
      </div>

  </div> 
    )
}

export default Footer