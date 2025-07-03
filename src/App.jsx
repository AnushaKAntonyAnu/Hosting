import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import image from './image.png';
import image1 from './image1.png';
import image0 from './image 0.png';
import image_1 from './imag 1.png';
import image_1_paren from './image (1).png';
import image_2_paren from './image (2).png';
import image_3_paren from './image (3).png';
import image_4_paren from './image (4).png';
import image_5_paren from './image (5).png';
import image_6_paren from './image (6).png';
import image_7_paren from './image (7).png';
import image_11_paren from './image (11).png';
import image_12_paren from './image (12).png';
import image_13_paren from './image (13).png';
import image14 from './image 14.png';
import pokakLogo1 from './Pokak Logo 1 (1) 3.png';
import pokakLogo2 from './Pokak Logo 2 (1) 3.png';

function App() {
  const [count, setCount] = useState(0)
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    setShowHeading(true);
  }, []);

  return (
    <div className="min-h-screen w-350 max-w-screen overflow-x-hidden">
      <div className="w-full h-5 bg-black fixed top-0 left-0 z-50" />
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-8 border-gray-200 w-full max-w-none">
        <div className="flex items-center gap-2">
          <img src={pokakLogo1} alt="Logo" className="h-10 w-50" />
        </div>
        <nav className="flex-1 flex justify-center">
          <ul className="flex gap-4 bg-[#1F2937] top-80 rounded-full px-4 py-1 text-sm text-white">
            {[
              { label: 'Home', active: false },
              { label: 'About Us', active: false },
              { label: 'Services', active: true },
              { label: 'Industries', active: false },
              { label: 'Careers', active: false },
              { label: 'Projects', active: false },
            ].map((item, idx) => (
              <li key={item.label}>
                <a
                  href="#"
                  className={`transition-all duration-300 relative inline-block px-2 py-1 text-white group ${item.active ? 'font-semibold' : ''}`}
                  style={{ color: 'white' }}
                >
                  <span
                    className="block group-hover:translate-y-6 group-hover:opacity-0 transition-all duration-300 text-white"
                    style={{ color: 'white' }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="block absolute left-0 top-0 w-full h-full translate-y-[-1.5rem] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-white"
                    style={{ color: 'white' }}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-md font-medium transition border-2 border-blue-700 hover:border-blue-800 shadow-lg"
            style={{ backgroundColor: '#1D4ED8', borderColor: '#1D4ED8' }}
          >
            Contact
          </button>
          <button
            className="bg-black hover:bg-blue-700 text-white p-2 rounded-md border-2 border-black hover:border-blue-700 shadow-lg"
            style={{ backgroundColor: '#000', borderColor: '#000' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 pt-15 pb-0  bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex flex-col items-start">
              <div className="text-gray-500 text-base mb-6 ml-2">/Our Services</div>
              <h1
                className={`text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-4 transition-all duration-700 ease-out transform ${showHeading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                  }`}>
                Turning <span className="font-bold">Ideas Into</span><br /></h1>
              <h1
                className={`text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-4 transition-all duration-700 ease-out transform ${showHeading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                  }`}>
                <span className="font-bold">Impact</span>
              </h1>
            </div>
          </div>
          <div
            className="flex-1 max-w-xl text-gray-3000 text-[20px] leading-[140%] tracking-[0] font-light md:text-normal md:pl-60 text-justify font-poppins"
          >
            We specialize in building tailored digital <br />
            solutions that bring your vision to life—<br />
            efficiently, creatively, and at scale.
          </div>

        </div>
      </main>


      {/* Image Section */}
      <div className="w-full mt-8">
        <img src={image} alt="Code Example" className="w-full h-150 object-cover object-left-top rounded-lg shadow-lg" style={{ background: '#0a1833' }} />
        {/* New Section Under Image */}
        <div className="w-full h-[2460.07px]  bg-[#2A4DD0] mx-auto relative flex justify-start items-start">
          <div
            className="font-poppins font-normal text-[60px] leading-[112%] tracking-[0] text-left p-8 mt-12 ml-12 rounded-lg max-w-[900px]"
            style={{ letterSpacing: '0%', color: '#FFFFFF' }}>
            Solutions That Drive <br />Digital Success
          </div>
          {/* Image1.png under the text, left side, with specified size and position */}
          <div>
            <img
              src={image1}
              alt="Decorative"
              className="absolute rounded-[6px] w-[300px] h-[300px] brightness-50 top-[100.59px] left-[800.5px]"
            />
            <div
              className="absolute left-[800.5px] top-[410.59px] w-[300px] font-poppins font-normal text-[18px] leading-[140%] text-white text-left"
            >
              We build tailored software solutions that streamline operations, boost productivity, and solve complex business challenges.
            </div>
            <div
              className="absolute left-[760.5px] top-[230.59px] font-poppins text-white text-[32px] font-semibold h-[200px] space-y-1"
            >
              <div className="font-normal text-left">01</div>
              <div className="text-left">Software</div>
              <div className=" font-normal text-left">Development</div>
            </div></div>
          <div>
            <img
              src={image_1_paren}
              alt="Decorative"
              className="absolute rounded-[6px] w-[300px] h-[300px] brightness-50 top-[300.59px] right-[800.5px]"
            />
            <div className="absolute right-[800.5px] top-[600.59px] w-[300px] font-poppins font-normal text-[18px] leading-[140%] tracking-[0] text-white text-left">
              <br></br>From responsive websites to dynamic web apps, we craft robust, user-friendly digital experiences.          </div>
            <div className="absolute right-[950.5px] top-[440.59px]  font-poppins text-white text-[32px] font-semibold space-y-1 h-[570px]">

              <div className="font-normal text-left">02</div>
              <div className="text-left">Web</div>
              <div className=" font-normal text-left">Development</div>
            </div></div>
          <div>
            <img
              src={image_2_paren}
              alt="Decorative"
              className="absolute rounded-[6px] w-[300px] brightness-50 h-[300px] top-[600.59px] left-[800.5px]"
            />
            <div className="absolute left-[800.5px] top-[910.59px] w-[300px] font-poppins font-normal text-[18px] leading-[140%] tracking-[0] text-left text-white">
              Launch scalable, secure e-commerce platforms with intuitive design and powerful backend functionality.          </div>
            <div className="absolute left-[760.5px] top-[740.59px]  font-poppins text-white text-[30px] font-semibold space-y-1 h-[200px]">

              <div className="font-normal text-left">03</div>
              <div className="text-left">E-Commerce</div>
              <div className=" font-normal text-left">Development</div>

            </div></div>
          <div>
            <img
              src={image_1}
              alt="Decorative"
              className="absolute rounded-[6px] w-[300px] brightness-50 h-[300px] top-[780.59px] right-[800.5px]"
            />
            <div className="absolute right-[800.5px] top-[1080.59px] w-[300px] font-poppins font-normal text-[18px] leading-[140%] tracking-[0] text-left text-white">
              <br></br>
              Custom mobile apps designed for performance, usability, and seamless cross-platform integration.              </div>
            <div className="absolute right-[896.5px] top-[910.59px]  font-poppins text-white text-[32px] font-semibold space-y-1 h-[1540px]">
              <div className="font-normal text-left">04</div>
              <div className="text-left">iOS/Android App</div>
              <div className=" font-normal text-left">Development</div>
            </div></div>
          <div>
            <img
              src={image_5_paren}
              alt="Decorative"
              className="absolute rounded-[6px] w-[300px] brightness-50 h-[300px] top-[1080.59px] left-[800.5px]"
            />
            <div className="absolute left-[800.5px] top-[1390.59px] w-[300px] font-poppins font-normal text-[18px] leading-[140%] tracking-[0] text-left text-white">
              Grow your brand visibility and reach with data-driven SEO, social media, and performance marketing strategies.          </div>
            <div className="absolute left-[760.5px] top-[1220.59px]  font-poppins text-white text-[30px] font-semibold space-y-1 h-[200px]">
              <div className="font-normal text-left">05</div>
              <div className="text-left">Digital</div>
              <div className=" font-normal text-left">Marketing</div>

            </div></div>
          <div>
            <img
              src={image_3_paren}
              alt="Decorative"
              className="absolute rounded-[6px] w-[300px] brightness-50 h-[300px] top-[1300.59px] right-[800.5px]"
            />
            <div className="absolute right-[800.5px] top-[1590.59px] w-[300px] font-poppins font-normal text-[18px] leading-[140%] tracking-[0] text-left text-white">
              <br></br>
              Innovating future-ready solutions through deep research, emerging tech, and experimental prototyping.               </div>
            <div className="absolute right-[950.5px] top-[1440.59px]  font-poppins text-white text-[32px] font-semibold space-y-1 h-[1540px]">
              <div className="font-normal text-left">06</div>
              <div className="text-left">Research</div>
              <div className=" font-normal text-left">Development</div>
            </div></div>
          <div>
            <img
              src={image_6_paren}
              alt="Decorative"
              className="absolute rounded-[6px] w-[300px] brightness-50 h-[300px] top-[1600.59px] left-[800.5px]"
            />
            <div className="absolute left-[800.5px] top-[1910.59px] w-[300px] font-poppins font-normal text-[18px] leading-[140%] tracking-[0] text-left text-white">
              Visually striking designs that communicate your brand’s message with clarity and creativity.                 </div>
            <div className="absolute left-[760.5px] top-[1750.59px]  font-poppins text-white text-[30px] font-semibold space-y-1 h-[200px]">
              <div className="font-normal text-left">07</div>
              <div className="text-left">Graphic</div>
              <div className=" font-normal text-left">Designing</div>

            </div></div>
          <div>
            <img
              src={image_7_paren}
              alt="Decorative"
              className="absolute rounded-[6px] brightness-50  w-[300px] h-[300px] top-[1900.59px] right-[800.5px]"
            />
            <div className="absolute right-[800.5px] top-[2200.59px] w-[300px] font-poppins font-normal text-[18px] leading-[140%] tracking-[0] text-left text-white">
              <br></br>
              We create intuitive, user-centric interfaces and experiences that drive engagement and satisfaction.                   </div>
            <div className="absolute right-[950.5px] top-[2040.59px]  font-poppins text-white text-[32px] font-semibold space-y-1  h-[1540px]">
              <div className="font-normal text-left">08</div>
              <div className="text-left">UI UX </div>
              <div className=" font-normal text-left">Development</div>
            </div>
          </div>
        </div>
      </div>
      {/* Intelligent Solutions Section */}
      <section className="w-full bg-[#F5F8FC] py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-light text-left text-gray-800 mb-12">
            <span className="font-bold">Empowering</span> Businesses<br className="hidden md:block" />
            with <span className="font-bold">Intelligent Solutions</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* Image 1 */}
            <div className="flex flex-col  w-[300px]">
              <img src={image_13_paren} alt="Artificial Intelligence" className="rounded-md w-full h-[250px] object-cover mb-4 bg-gray-200" />
              <div className="font-poppins text-gray-800 text-[20px] font-normal text-left">Artificial <br></br>Intelligence</div>
            </div>
            {/* Image 2 */}
            <div className="flex flex-col w-[300px]">
              <img src={image_12_paren} alt="Customer Relationship Management" className="rounded-md w-full h-[250px] object-cover mb-4 bg-gray-200" />
              <div className="font-poppins text-gray-800 text-[20px] font-normal text-left">Customer Relationship Management</div>
            </div>
            {/* Image 3 */}
            <div className="flex flex-col  w-[300px]">
              <img src={image_11_paren} alt="Enterprise Resource Planning" className="rounded-md w-full h-[250px] object-cover mb-4 bg-gray-200" />
              <div className="font-poppins text-gray-800 text-[20px] font-normal text-left">Enterprise Resource <br></br> Planning</div>
            </div>
          </div>
        </div>
      </section>

      {/* ODOO ERP Section */}
      <section className="w-full bg-white py-10">
        <div className="max-w-7xl mx-auto px-20">
          <h2 className="text-4xl px-10 text-left font-semibold text-gray-800 mb-10">ODOO ERP</h2>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Image placeholder - replace src as needed */}
            <div className="flex-shrink-0 w-full md:w-[600px] flex justify-center">
              <img src={image14} alt="ODOO ERP" className="rounded-xl w-full left-600px max-w-[500px] h-[370px] object-cover bg-gray-200" />
            </div>
            {/* Paragraphs */}
            <div className="flex flex-col gap-10  text-left w-full">
              {/* Odoo Manufacturing ERP */}
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="font-bold text-xl  left-20px text-[22px] top-[200px] text-gray-800 mb-2">Odoo Manufacturing ERP</div>
                  <div className="text-gray-700 right text-base text-[18px] left-[900.5px]  w-[350px] font-poppins leading-relaxed">
                    We specialize in end-to-end Odoo ERP implementation, customization, and integration — helping businesses manage sales, HR, inventory, accounts, and more with precision and ease.
                  </div>
                </div>
                <div className="flex items-center pl-4 pt-2">
                  <span className="text-5xl text-gray-700">→</span>
                </div>
              </div>
              {/* Odoo ERP */}
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="font-bold text-xl text-[22px] text-gray-800 mb-2">Odoo ERP</div>
                  <div className="text-gray-700 text-[18px] text-base w-[400px] leading-relaxed">
                    End-to-end Odoo ERP solutions—including consultation, customization, data migration, and ongoing support—to automate your core business processes (CRM, sales, inventory, accounting, HR) and drive organizational efficiency.
                  </div>
                </div>
                <div className="flex items-center pl-4 pt-2">
                  <span className="text-5xl text-gray-700 font-bold">→</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section (Ready to Transform Your Business?) */}
      <section className="w-full bg-[#F5F8FC] py-20 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-6">
          Ready to <span className="font-bold">Transform<br></br><br className="md:hidden" /> Your Business</span>?
        </h2>
        <button style={{ backgroundColor: '#2A4DD0' }} className="text-white px-8 py-2 rounded-md font-medium transition text-base">
          Contact Us
        </button>

      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gradient-to-r from-[#403ab9] via-[#2A4DD0] to-[#2563eb] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start">
          {/* Logo and tagline */}
          <div className="flex-1 min-w-[220px] flex flex-col gap-3 mb-8 md:mb-0">
            <img src={pokakLogo2} alt="Pokak Technologies Logo" className="h-14 w-60 gap-[3cm] mb-2" />
            <div className="text-3xl md:text-2xl text-left text-white mt-2">Where Ideas Meet Innovation.</div>
          </div>
          {/* Right side: Follow Us, Sitemap, Get in touch */}
          <div className="flex flex-row gap-[3cm] flex-1 justify-end w-full">
            {/* Follow Us */}
            <div className="min-w-[150px] text-left">
              <div className="font-semibold text-2xl mb-3">Follow Us</div>
              <ul className="space-y-2 text-white text-base">
                <li><a href="#" className="!text-white hover:underline">LinkedIn <span  className="inline-block transform rotate-[310deg]">→</span></a></li>
                <li><a href="#" className="!text-white hover:underline">Instagram <span  className="inline-block transform rotate-[310deg]">→</span></a></li>
                <li><a href="#" className="!text-white hover:underline">Whatsapp <span  className="inline-block transform rotate-[310deg]">→</span></a></li>
                <li><a href="#" className="!text-white hover:underline">Facebook <span  className="inline-block transform rotate-[310deg]">→</span></a></li>
              </ul>

            </div>
            {/* Sitemap */}
            <div className="min-w-[100px] text-left">
              <div className="font-semibold text-2xl mb-3">Sitemap</div>
              <ul className="space-y-2 text-white text-base">
                <li><a href="#" className="!text-white  text-1xl  hover:underline">Home <span  className="inline-block transform rotate-[310deg]">→</span></a></li>
                <li><a href="#" className="!text-white  hover:underline">About Us <span  className="inline-block transform rotate-[310deg]">→</span></a></li>
                <li><a href="#" className="!text-white hover:underline">Services <span  className="inline-block transform rotate-[310deg]">→</span></a></li>
                <li><a href="#" className="!text-white hover:underline">Projects <span  className="inline-block transform rotate-[310deg]">→</span></a></li>
                <li><a href="#" className="!text-white hover:underline">Odoo ERP<span  className="inline-block transform rotate-[310deg]">→</span></a></li>
              </ul>
            </div>
            {/* Get in touch */}
            <div className="min-w-[220px] text-left">
              <div className="font-semibold text-2xl mb-3">Get in touch</div>
              <div className="text-white text-1xl  text-base mb-2">Pokak Technologies  PVT LTD<br />Suit No.414 Valamkottil Tower<br />Kakkanad, Kochit-682021</div>
              <div className="text-white text-base mb-2">+91 9656 033 444</div>
              <div className="text-white text-base mb-2"><a href="#" className="!text-white  text-1xl hover:underline">info@pokaktech.com <span  className="inline-block transform rotate-[310deg]">→</span></a></div>
              <div className="text-white text-base"><a href="#" className="!text-white  text-1xl hover:underline">pokaktech@gmail.com <span  className="inline-block transform rotate-[310deg]">→</span></a></div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
