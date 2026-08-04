'use client'
import React, { useState } from 'react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_SERIF = '"TT Ramillas", serif'

const locationCategories = [
  {
    title: 'School & Colleges',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z"/>
      </svg>
    ),
    items: [
      'Suraj School – 4 Km',
      'St. Xavier High School – 6.4 Km',
      'DPS International School – 8 Km',
      'Heritage Xperiential School – 10 Km',
      'Shiv Nadar School – 12 Km',
    ]
  },
  {
    title: 'Connectivity',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.13 12H21.46L19.1 4H15.03L18.13 12ZM8.97 4H4.9L2.54 12H5.87L8.97 4ZM10 12H14L12.54 4H11.46L10 12ZM13.5 14H10.5L10 17H14L13.5 14ZM14.33 19H9.67L9.12 22H14.88L14.33 19Z"/>
      </svg>
    ),
    items: [
      'NH-48 (Delhi-Jaipur Highway) – 2 Km',
      'Dwarka Expressway – 5 Km',
      'Southern Peripheral Road (SPR) – 6 Km',
      'Rajiv Chowk – 12 Km',
    ]
  },
  {
    title: 'Healthcare',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17H7V14H10V17ZM10 11H7V8H10V11ZM17 17H14V14H17V17ZM17 11H14V8H17V11Z"/>
      </svg>
    ),
    items: [
      'MET Hospital – 3.3 Km',
      'Apollo Spectra Hospital – 6 Km',
      'Aarvy Healthcare Hospital – 6 Km',
      'Medanta Medicity – 18 Km',
    ]
  },
  {
    title: 'IT Hubs & Workspaces',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 6H16V4C16 2.9 15.1 2 14 2H10C8.9 2 8 2.9 8 4V6H4C2.9 6 2 6.9 2 8V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V8C22 6.9 21.1 6 20 6ZM10 4H14V6H10V4ZM20 19H4V8H20V19Z"/>
      </svg>
    ),
    items: [
      'Eros Corporate Park – 4.4 Km',
      'IMT Manesar – 8 Km',
      'Cyber City Gurgaon – 25 Km',
    ]
  }
]

const Location = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="location" style={{ padding: '72px 0', background: '#ffffff' }}>
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 style={{
            fontFamily: F_SERIF, fontWeight: '600',
            fontSize: 'clamp(32px, 5vw, 42px)',
            color: '#1a1a1a', letterSpacing: '0.02em',
            margin: '0 0 16px',
          }}>
            Location Advantages
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* LEFT — Accordion */}
          <div className="w-full lg:w-[42%]" data-aos="fade-right">
            <div className="flex flex-col gap-4">
              {locationCategories.map((cat, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={i} className="flex flex-col">
                    {/* Header */}
                    <div 
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      style={{
                        background: '#0B6638', // Dark Green
                        padding: '16px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                      }}
                    >
                      <h3 style={{
                        fontFamily: F_SERIF, fontWeight: '600', fontSize: '20px',
                        color: '#ffffff', margin: 0, letterSpacing: '0.02em'
                      }}>
                        {cat.title}
                      </h3>
                      <div style={{
                        width: '42px', height: '42px', borderRadius: '50%',
                        background: '#E8DAC2', color: '#0B6638',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        {cat.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{
                      maxHeight: isOpen ? '500px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease',
                      background: '#F1EAD9', // Light Beige
                    }}>
                      <div style={{ padding: '20px 24px' }}>
                        {cat.items.map((item, idx) => (
                          <p key={idx} style={{
                            fontFamily: F_SERIF, fontSize: '16px', fontWeight: '600',
                            color: '#000000', margin: '0 0 10px', letterSpacing: '0.01em'
                          }}>
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="w-full lg:flex-1" data-aos="fade-left" style={{ minHeight: '500px' }}>
            <div style={{
              overflow: 'hidden',
              height: '100%', minHeight: '500px',
              position: 'relative',
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46299.42718654414!2d76.88981362167966!3d28.3631715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d44a1889ea7%3A0x21f45894d51f58b0!2sEldeco%20Terra%20%26%20Sol!5e1!3m2!1sen!2sin!4v1782276440912!5m2!1sen!2sin"
                width="100%" height="100%"
                style={{ border: 0, minHeight: '500px', display: 'block' }}
                allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
