'use client'
import React from 'react'

const highlights = [
  {
    title: 'Prime Business Connectivity',
    description: 'Close to Cyber City & Golf Course Extension Road Business Hubs.',
    icon: 'fa-solid fa-briefcase'
  },
  {
    title: 'Grand Private Clubhouse',
    description: 'Expansive 1.5 Lakh Sq.Ft. exclusive clubhouse offering world-class luxury.',
    icon: 'fa-solid fa-building-columns'
  },
  {
    title: 'All-Weather Infinity Pool',
    description: 'Temperature controlled infinity pool equipped with private leisure cabanas.',
    icon: 'fa-solid fa-water-ladder'
  },
  {
    title: 'Holistic Wellness Spa',
    description: 'Dedicated spa featuring steam, sauna, and rejuvenating therapy rooms.',
    icon: 'fa-solid fa-spa'
  },
  {
    title: 'Private Cinema Experience',
    description: 'Exclusive residential private theatre with Dolby Atmos acoustic acoustics.',
    icon: 'fa-solid fa-film'
  },
  {
    title: 'State-of-the-Art Fitness',
    description: 'Modern fitness center equipped with technology-driven cardio and strength zones.',
    icon: 'fa-solid fa-dumbbell'
  },
  {
    title: 'Unmatched Accessibility',
    description: 'Located seamlessly just 2 minutes from NH-48 (Delhi-Jaipur Highway).',
    icon: 'fa-solid fa-road'
  },
  {
    title: 'Panoramic Corner Views',
    description: 'Expansive wraparound balconies designed around natural light & air.',
    icon: 'fa-solid fa-city'
  },
]

const Highlights = ({ setIsOpen }) => {
  return (
    <section id="highlights" className="w-full py-[100px] font-poppins" style={{ background: '#f8fafe' }}>
      <div className="container mx-auto px-4" style={{ maxWidth: '1280px' }}>

        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-12" data-aos="fade-up">
          <span className="text-[#3b82f6] font-bold text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
            WHY CHOOSE SMARTWORLD SECTOR 67
          </span>
          <h2 className="text-[#163B72] text-[26px] sm:text-[32px] md:text-[38px] font-extrabold m-0 leading-tight md:whitespace-nowrap">
            Highlights of Smartworld Sector 67
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {highlights.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={(i * 50).toString()}
              onClick={() => setIsOpen(true)}
              className="group relative bg-white rounded-[20px] p-7 border border-[#e2effe] shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(13,110,253,0.14)] hover:border-[#0d6efd]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Top Row: Icon & Title Side-by-Side */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-[52px] h-[52px] min-w-[52px] min-h-[52px] rounded-[14px] bg-[#edf4ff] text-[#0d6efd] group-hover:bg-[#0d6efd] group-hover:text-white flex items-center justify-center text-[22px] transition-all duration-300 shadow-sm flex-shrink-0 group-hover:scale-105">
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="text-[#1b2b4b] font-bold text-[17px] sm:text-[18px] leading-snug group-hover:text-[#0d6efd] transition-colors duration-200 m-0">
                    {item.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-[#6c757d] text-[13.5px] leading-[1.65] m-0">
                  {item.description}
                </p>
              </div>

              {/* Subtle bottom accent line that expands on hover */}
              <div className="w-12 h-[3px] bg-[#0d6efd]/20 group-hover:bg-[#0d6efd] group-hover:w-full rounded-full mt-6 transition-all duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Highlights
