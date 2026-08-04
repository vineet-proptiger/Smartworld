'use client'
import React from 'react'

const F_SERIF = '"TT Ramillas", var(--font-serif), Cormorant Garamond, serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const AboutGodrej = () => (
  <section id="about" style={{ padding: '80px 15px', background: '#ffffff' }}>
    <div className="max-w-4xl mx-auto" style={{ textAlign: 'center' }}>

      {/* Heading */}
      <h2
        data-aos="fade-up"
        style={{
          fontFamily: F_SERIF, fontWeight: '600',
          fontSize: 'clamp(32px, 5vw, 42px)',
          color: '#1a1a1a', letterSpacing: '0.02em', 
          margin: '0 0 24px',
        }}
      >
        About Developer
      </h2>

      {/* Description */}
      <p
        data-aos="fade-up"
        data-aos-delay="80"
        style={{
          fontFamily: F_SANS, fontSize: '15px',
          color: '#555555', lineHeight: 1.8,
          margin: '0 auto', textAlign: 'center',
          maxWidth: '900px'
        }}
      >
        The Eldeco Group has been at the forefront of Real Estate development since 1985. The Group is synonymous with timely and quality delivery in 20 cities in North India and has already handed over 200 projects spanning large-format integrated townships, high-rise condominiums, industrial estates, malls and office buildings. Besides, 30 projects are in various stages of active execution. The aggregate delivered area stands at more than 30 million sq.ft. with over 30,000 satisfied customers.
      </p>

    </div>
  </section>
)

export default AboutGodrej
