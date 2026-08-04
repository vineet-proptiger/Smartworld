'use client'
import React from 'react'
import Image from 'next/image'

const MasterPlan = ({ setIsOpen }) => {
  return (
    <section id="masterplan" className="w-full py-[100px] font-poppins" style={{ background: '#ffffff' }}>
      <div className="container mx-auto px-4" style={{ maxWidth: '1100px' }}>

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-[#3b82f6] font-bold text-[14px] tracking-[2px] uppercase mb-3 block">
            FLOOR PLANS
          </span>
          <h2 className="text-[#1b2b4b] text-[32px] md:text-[38px] font-bold mb-4">
            Planned Around Light &amp; Views
          </h2>
          <p className="text-[#6c757d] text-[16px] m-0">
            Choose the layout that best suits your lifestyle.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* 2 BHK Card */}
          <div className="bg-white rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden border border-[#f3f4f6] cursor-pointer hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-shadow duration-300" onClick={() => setIsOpen(true)}>
            <div className="relative w-full aspect-[4/3] bg-gray-50 p-6 flex items-center justify-center border-b border-[#f3f4f6]">
               <div className="relative w-full h-full">
                 <Image 
                   src="/images/masterplan/2bhk.webp" 
                   alt="2 BHK Floor Plan" 
                   fill 
                   className="object-contain" 
                   sizes="(max-width: 1024px) 100vw, 50vw" 
                 />
               </div>
            </div>
            <div className="py-6 px-4 text-center">
              <h5 className="text-[#1b2b4b] font-extrabold text-[20px] m-0">2 BHK</h5>
            </div>
          </div>

          {/* 3 BHK + Utility Card */}
          <div className="bg-white rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden border border-[#f3f4f6] cursor-pointer hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-shadow duration-300" onClick={() => setIsOpen(true)}>
            <div className="relative w-full aspect-[4/3] bg-gray-50 p-6 flex items-center justify-center border-b border-[#f3f4f6]">
               <div className="relative w-full h-full">
                 <Image 
                   src="/images/masterplan/3bhk.webp" 
                   alt="3 BHK + Utility Floor Plan" 
                   fill 
                   className="object-contain" 
                   sizes="(max-width: 1024px) 100vw, 50vw" 
                 />
               </div>
            </div>
            <div className="py-6 px-4 text-center">
              <h5 className="text-[#1b2b4b] font-extrabold text-[20px] m-0">3 BHK + Utility</h5>
            </div>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={() => setIsOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-3.5 rounded-[50px] text-white font-semibold text-[15px] transition-all duration-300 gap-2"
            style={{
              background: '#1a6dff',
              boxShadow: '0 4px 14px 0 rgba(26, 109, 255, 0.39)',
              border: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#0050d5';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#1a6dff';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <i className="bi bi-download"></i> Download Brochure
          </button>
          
          <button 
            onClick={() => setIsOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-3.5 rounded-[50px] font-semibold text-[15px] transition-all duration-300"
            style={{
              background: 'transparent',
              color: '#1b2b4b',
              border: '1.5px solid #1b2b4b',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#f3f4f6';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Enquire Now
          </button>
        </div>

      </div>
    </section>
  )
}

export default MasterPlan
