'use client'
import React from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const Overview = ({ setIsOpen }) => {
  return (
    <section id="overview" className="w-full py-[100px] bg-white font-poppins">
      <div className="container mx-auto px-4" style={{ maxWidth: '1200px' }}>
        <div className="flex flex-col lg:flex-row items-center lg:mx-[-12px]">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2 lg:px-[12px] mb-12 lg:mb-0">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[580px] rounded-[16px] overflow-hidden">
               <Image 
                 src={overviewImage} 
                 alt="About Project" 
                 fill 
                 className="object-cover" 
                 sizes="(max-width: 1024px) 100vw, 50vw" 
               />
               <div className="absolute" style={{ right: '8px', bottom: '50%', transform: 'translateY(50%) rotate(-90deg)', transformOrigin: 'center right' }}>
                 <span className="text-[#e0e0e0] text-[10px] tracking-widest uppercase" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Artistic Impression</span>
               </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 lg:px-[12px] lg:pl-16">
            <div className="section-heading">
              <span className="text-[#0d6efd] font-bold text-[14px] tracking-widest uppercase mb-3 block">
                Wellness Architecture
              </span>
              <h2 className="text-[#163B72] text-[25px] sm:text-[30px] md:text-[38px] font-extrabold leading-[1.2] mb-4">
                Designed by architects. Built for wellness.
              </h2>
              <p className="text-[#6c757d] text-[15px] leading-[1.7] mb-8 pr-0 lg:pr-10">
                Code 67 represents Gurugram's first true wellness-themed residence. Architect-led design integrates healing spaces, organic living, and mindful movement into every floor plan. 75% of luxury homebuyers rank health and wellness above size and view—we built for that priority.
              </p>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 mb-8">
                {/* Feature 1 */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-[#0d6efd]">
                    <i className="fa-solid fa-circle-check text-[18px] sm:text-[22px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#1b2b4b] font-bold text-[13.5px] sm:text-[16px] mb-1 leading-snug">Unit Types</h5>
                    <p className="text-[#6c757d] text-[12px] sm:text-[14px] m-0 leading-normal">2, 3 &amp; 3+U BHK</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-[#0d6efd]">
                    <i className="fa-solid fa-circle-check text-[18px] sm:text-[22px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#1b2b4b] font-bold text-[13.5px] sm:text-[16px] mb-1 leading-snug">Health Priority</h5>
                    <p className="text-[#6c757d] text-[12px] sm:text-[14px] m-0 leading-normal">75% of buyers</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-[#0d6efd]">
                    <i className="fa-solid fa-circle-check text-[18px] sm:text-[22px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#1b2b4b] font-bold text-[13.5px] sm:text-[16px] mb-1 leading-snug">Total Residences</h5>
                    <p className="text-[#6c757d] text-[12px] sm:text-[14px] m-0 leading-normal">350</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-[#0d6efd]">
                    <i className="fa-solid fa-circle-check text-[18px] sm:text-[22px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#1b2b4b] font-bold text-[13.5px] sm:text-[16px] mb-1 leading-snug">350 Starting Price</h5>
                    <p className="text-[#6c757d] text-[12px] sm:text-[14px] m-0 leading-normal">₹2.40 Cr</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsOpen(true)}
                className="mt-2 inline-flex items-center justify-center px-8 py-3.5 rounded-[50px] font-semibold text-[15px] transition-all duration-300"
                style={{
                  background: '#1a56db',
                  color: '#ffffff',
                  border: '2px solid #1a56db',
                  boxShadow: '0 4px 14px 0 rgba(26, 86, 219, 0.39)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#1a56db';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#1a56db';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                Request Full Details
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Overview
