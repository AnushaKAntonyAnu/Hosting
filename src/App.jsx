import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full mt-8">
        <img src="src/image.png" alt="Code Example" className="w-full h-150 object-cover object-left-top rounded-lg shadow-lg" style={{ background: '#0a1833' }} />
        <div className="w-full h-[2460.07px]  bg-[#2A4DD0] mx-auto relative flex justify-start items-start">
          <div
            className="font-poppins font-normal text-[60px] leading-[112%] tracking-[0] text-left p-8 mt-12 ml-12 rounded-lg max-w-[900px]"
            style={{ letterSpacing: '0%', color: '#FFFFFF' }}>
            Solutions That Drive <br />Digital Success
          </div>
          {/* Image1.png under the text, left side, with specified size and position */}
          <div>
            <img
              src="src/image1.png"
              alt="Decorative"
              className="absolute rounded-[6px] w-[300px] h-[300px] top-[100.59px] left-[800.5px]"
            />
            <div className="absolute left-[800.5px] top-[410.59px] w-[300px] font-poppins font-normal text-[18px] leading-[100%] tracking-[0] text-white">
              We build tailored software solutions that streamline operations, boost productivity, and solve complex business challenges.
            </div>
            <div className="absolute left-[750.5px] top-[220.59px]  font-poppins text-white text-[30px] font-semibold flex items-center justify-center h-[200px]">
              01<br></br>
              Software<br></br> Development

            </div></div>
          <div>
            <img
              src="src/image (1).png"
              alt="Decorative"
              className="absolute rounded-[6px] w-[300px] h-[300px] top-[300.59px] right-[800.5px]"
            />
            <div className="absolute right-[800.5px] top-[600.59px] w-[300px] font-poppins font-normal text-[20px] leading-[100%] tracking-[0] text-white">
              <br></br>From responsive websites to dynamic web apps, we craft robust, user-friendly digital experiences.          </div>
            <div className="absolute right-[950.5px] top-[220.59px]  font-poppins text-white text-[32px] font-semibold flex items-center justify-center h-[570px]">
              02<br></br>
              Web<br></br> Development
            </div></div>
          <div>
            <img
              src="src/image (2).png"
              alt="Decorative"
              className="absolute rounded-[6px] w-[300px] h-[300px] top-[600.59px] left-[800.5px]"
            />
            <div className="absolute left-[800.5px] top-[910.59px] w-[300px] font-poppins font-normal text-[20px] leading-[100%] tracking-[0] text-white">
              Launch scalable, secure e-commerce platforms with intuitive design and powerful backend functionality.          </div>
            <div className="absolute left-[750.5px] top-[720.59px]  font-poppins text-white text-[30px] font-semibold flex items-center justify-center h-[200px]">
              03<br></br>
              E-Commerce<br></br> Development

            </div></div>
          <div>
            <img
              src="src/imag 1.png"
              alt="Decorative"
              className="absolute rounded-[6px] w-[300px] h-[300px] top-[780.59px] right-[800.5px]"
            />
            <div className="absolute right-[800.5px] top-[1080.59px] w-[300px] font-poppins font-normal text-[20px] leading-[100%] tracking-[0] text-white">
              <br></br>
              Custom mobile apps designed for performance, usability, and seamless cross-platform integration.              </div>
            <div className="absolute right-[896.5px] top-[220.59px]  font-poppins text-white text-[32px] font-semibold flex items-center justify-center h-[1540px]">
              04<br></br>
              iOS/Android App<br></br> Development
            </div></div>
          <div>
            <img
              src="src/image (5).png"
              alt="Decorative"
              className="absolute rounded-[6px] w-[300px] h-[300px] top-[1080.59px] left-[800.5px]"
            />
            <div className="absolute left-[800.5px] top-[1390.59px] w-[300px] font-poppins font-normal text-[18px] leading-[100%] tracking-[0] text-white">
              Grow your brand visibility and reach with data-driven SEO, social media, and performance marketing strategies.          </div>
            <div className="absolute left-[750.5px] top-[1200.59px]  font-poppins text-white text-[30px] font-semibold flex items-center justify-center h-[200px]">
              05<br></br>
              Digital <br></br> Marketing

            </div></div>
          <div>
            <img
              src="src/image (3).png"
              alt="Decorative"
              className="absolute rounded-[6px] w-[300px] h-[300px] top-[1300.59px] right-[800.5px]"
            />
            <div className="absolute right-[800.5px] top-[1590.59px] w-[300px] font-poppins font-normal text-[20px] leading-[100%] tracking-[0] text-white">
              <br></br>
              Innovating future-ready solutions through deep research, emerging tech, and experimental prototyping.               </div>
            <div className="absolute right-[950.5px] top-[750.59px]  font-poppins text-white text-[32px] font-semibold flex items-center justify-center h-[1540px]">
              06<br></br>
              Research & <br></br> Development
            </div></div>
          <div>
            <img
              src="src/image (6).png"
              alt="Decorative"
              className="absolute rounded-[6px] w-[300px] h-[300px] top-[1600.59px] left-[800.5px]"
            />
            <div className="absolute left-[800.5px] top-[1910.59px] w-[300px] font-poppins font-normal text-[18px] leading-[100%] tracking-[0] text-white">
              Visually striking designs that communicate your brand’s message with clarity and creativity.                 </div>
            <div className="absolute left-[750.5px] top-[1710.59px]  font-poppins text-white text-[30px] font-semibold flex items-center justify-center h-[200px]">
              07<br></br>
              Graphic
              <br></br> Designing

            </div></div>
          <div>
            <img
              src="src/image (7).png"
              alt="Decorative"
              className="absolute rounded-[6px] w-[300px] h-[300px] top-[1900.59px] right-[800.5px]"
            />
            <div className="absolute right-[800.5px] top-[2200.59px] w-[300px] font-poppins font-normal text-[20px] leading-[100%] tracking-[0] text-white">
              <br></br>
              We create intuitive, user-centric interfaces and experiences that drive engagement and satisfaction.                   </div>
            <div className="absolute right-[950.5px] top-[1340.59px]  font-poppins text-white text-[32px] font-semibold flex items-center justify-center h-[1540px]">
              08<br></br>
              UI UX <br></br> Development
            </div>
          </div>
        </div>
      </div>
        {/* Intelligent Solutions Section */}
      <section className="w-full bg-[#F5F8FC] py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-light text-gray-800 mb-12">
            <span className="font-bold">Empowering</span> Businesses<br className="hidden md:block" />
            with <span className="font-bold">Intelligent Solutions</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* Image 1 */}
            <div className="flex flex-col items-center w-[300px]">
              <img src="src/image (13).png" alt="Artificial Intelligence" className="rounded-md w-full h-[250px] object-cover mb-4 bg-gray-200" />
              <div className="font-poppins text-gray-800 text-[20px] font-normal text-center">Artificial Intelligence</div>
            </div>
            {/* Image 2 */}
            <div className="flex flex-col items-center w-[300px]">
              <img src="src/image (12).png" alt="Customer Relationship Management" className="rounded-md w-full h-[250px] object-cover mb-4 bg-gray-200" />
              <div className="font-poppins text-gray-800 text-[20px] font-normal text-center">Customer Relationship Management</div>
            </div>
            {/* Image 3 */}
            <div className="flex flex-col items-center w-[300px]">
              <img src="src/image (11).png" alt="Enterprise Resource Planning" className="rounded-md w-full h-[250px] object-cover mb-4 bg-gray-200" />
              <div className="font-poppins text-gray-800 text-[20px] font-normal text-center">Enterprise Resource Planning</div>
            </div>
          </div>
        </div>
      </section>

       {/* ODOO ERP Section */}
      <section className="w-full bg-white py-10">
        <div className="max-w-7xl mx-auto px-15">
          <h2 className="text-4xl px-10  font-semibold text-gray-800 mb-10">ODOO ERP</h2>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Image placeholder - replace src as needed */}
            <div className="flex-shrink-0 w-full md:w-[600px] flex justify-center">
              <img src="image 14.png" alt="ODOO ERP" className="rounded-xl w-full left-600px max-w-[500px] h-[370px] object-cover bg-gray-200" />
            </div>
            {/* Paragraphs */}
            <div className="flex flex-col gap-10   w-full">
              {/* Odoo Manufacturing ERP */}
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="font-bold text-xl  left-20px text-[22px] top-[200px] text-gray-800 mb-2">Odoo Manufacturing ERP</div>
                  <div className="text-gray-700 right text-base text-[18px] left-[900.5px]  w-[350px] font-poppins leading-relaxed">
                    We specialize in end-to-end Odoo ERP implementation, customization, and integration — helping businesses manage sales, HR, inventory, accounts, and more with precision and ease.
                  </div>
                </div>
                <div className="flex items-center pl-4 pt-2">
                  <span className="text-2xl text-gray-700">→</span>
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
                  <span className="text-2xl text-gray-700">→</span>
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
        <button className="bg-[#2A4DD0]  text-white px-8 py-2 rounded-md font-medium transition text-base">
          Contact Us</button>
      </section>

    {/* Footer Section */}
      <footer className="w-full bg-gradient-to-r from-[#6C63FF] via-[#2A4DD0] to-[#2563eb] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start">
          {/* Logo and tagline */}
          <div className="flex-1 min-w-[220px] flex flex-col gap-3 mb-8 md:mb-0">
            <img src="src/Pokak Logo 2 (1) 3.png" alt="Pokak Technologies Logo" className="h-14 w-60 gap-[3cm] mb-2" />
            <div className="text-3xl md:text-2xl text-white mt-2">Where Ideas Meet Innovation.</div>
          </div>
          {/* Right side: Follow Us, Sitemap, Get in touch */}
          <div className="flex flex-row gap-[3cm] flex-1 justify-end w-full">
            {/* Follow Us */}
            <div className="min-w-[150px]">
              <div className="font-semibold text-2xl mb-3">Follow Us</div>
              <ul className="space-y-2 text-white text-base">
                <li><a href="#" className="hover:underline">LinkedIn &rarr;</a></li>
                <li><a href="#" className="hover:underline">Instagram &rarr;</a></li>
                <li><a href="#" className="hover:underline">Whatsapp &rarr;</a></li>
                <li><a href="#" className="hover:underline">Facebook &rarr;</a></li>
              </ul>
            </div>
            {/* Sitemap */}
            <div className="min-w-[100px]">
              <div className="font-semibold text-2xl mb-3">Sitemap</div>
              <ul className="space-y-2 text-white text-base">
                <li><a href="#" className="hover:underline">Home &rarr;</a></li>
                <li><a href="#" className="hover:underline">About Us &rarr;</a></li>
                <li><a href="#" className="hover:underline">Services &rarr;</a></li>
                <li><a href="#" className="hover:underline">Projects &rarr;</a></li>
                <li><a href="#" className="hover:underline">Odoo ERP &rarr;</a></li>
              </ul>
            </div>
            {/* Get in touch */}
            <div className="min-w-[220px]">
              <div className="font-semibold text-2xl mb-3">Get in touch</div>
              <div className="text-white text-base mb-2">Pokak Technologies  PVT LTD<br />Suit No.414 Valamkottil Tower<br />Kakkanad, Kochit-682021</div>
              <div className="text-white text-base mb-2">+91 9656 033 444</div>
              <div className="text-white text-base mb-2"><a href="#" className="hover:underline">info@pokaktech.com &rarr;</a></div>
              <div className="text-white text-base"><a href="#" className="hover:underline">pokaktech@gmail.com &rarr;</a></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
