'use client'
import React from 'react'
import Image from 'next/image'
import { locationMap } from '../lib/images'

const locationCards = [
  {
    icon: 'fa-solid fa-train-subway',
    title: 'Proposed Metro (Sec 67)',
    time: '5 Min'
  },
  {
    icon: 'fa-solid fa-school',
    title: 'Artemis Hospital',
    time: '20 min'
  },
  {
    icon: 'fa-solid fa-hospital',
    title: 'Heritage Golf Course',
    time: '15 min'
  },
  {
    icon: 'fa-solid fa-plane',
    title: 'Sohna Road',
    time: '10 min'
  }
]

const Location = () => {
  return (
    <section id="location" className="location-section py-16 md:py-24 bg-white font-poppins overflow-hidden" style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-[1350px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[780px] mx-auto mb-14 md:mb-16" data-aos="fade-up">
          <span className="text-[#0d6efd] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-3 block">
            LOCATION ADVANTAGES
          </span>
          <h2 className="text-[#163B72] text-[26px] sm:text-[32px] md:text-[38px] font-extrabold m-0 leading-tight">
            Prime Location Advantages
          </h2>
        </div>

        {/* ── 4 Location Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {locationCards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index * 70).toString()}
              className="location-card group bg-white hover:bg-[#0070ff] rounded-[24px] p-8 md:p-9 text-center border border-[#f1f5f9] hover:border-[#0070ff] shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,112,255,0.3)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer"
            >
              <div className="text-[#0d6efd] group-hover:text-white text-[38px] md:text-[42px] mb-5 transform group-hover:scale-110 transition-all duration-300">
                <i className={card.icon}></i>
              </div>
              <h4 className="text-[#1b2b4b] group-hover:text-white font-bold text-[17px] sm:text-[18px] mb-2 leading-snug transition-colors duration-300">
                {card.title}
              </h4>
              <h3 className="text-[#1b2b4b] group-hover:text-white font-extrabold text-[22px] sm:text-[24px] m-0 tracking-tight transition-colors duration-300">
                {card.time}
              </h3>
            </div>
          ))}
        </div>

        {/* ── 16:9 Widescreen Map ── */}
        <div 
          className="relative w-full rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-200 bg-gray-100 aspect-[16/9]"
          data-aos="fade-up"
        >
          <Image
            src={locationMap}
            alt="Smartworld Code 67 Location Map"
            fill
            className="object-cover w-full h-full hover:scale-[1.02] transition-transform duration-700"
            sizes="100vw"
          />
        </div>

      </div>
    </section>
  )
}

export default Location
