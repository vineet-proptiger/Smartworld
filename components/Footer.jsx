'use client'
import React from 'react'
import Link from 'next/link'

const Footer = () => (
  <footer style={{ background: '#111111', color: '#ffffff', fontFamily: 'var(--font-poppins), Poppins, sans-serif' }} className="py-16 px-4 sm:px-6 md:px-10 border-t border-neutral-800/60">
    <div className="max-w-[1150px] mx-auto flex flex-col items-center text-center">

      {/* ── Heading ── */}
      <h2 
        data-aos="fade-up"
        className="text-white font-bold text-[28px] sm:text-[34px] md:text-[38px] tracking-[2.5px] uppercase mb-2"
        style={{ letterSpacing: '0.08em' }}
      >
        ABOUT THE DEVELOPER
      </h2>

      {/* ── Subheading / Tagline ── */}
      <p 
        data-aos="fade-up" data-aos-delay="50"
        className="text-[#dfab58] font-semibold text-[12px] sm:text-[13.5px] tracking-[2px] uppercase m-0"
      >
        LANDMARK LUXURY RESIDENTIAL DEVELOPMENT — SECTOR 67, GURUGRAM
      </p>

      {/* ── Accent Underline ── */}
      <div className="w-12 h-[2.5px] bg-[#dfab58] my-6 rounded-full" />

      {/* ── Developer Description ── */}
      <p 
        data-aos="fade-up" data-aos-delay="100"
        className="text-[#a1a1aa] text-[15px] sm:text-[16px] leading-[1.8] max-w-[920px] mb-10"
      >
        Smartworld Developers is a dynamic and visionary real estate brand engineered to revolutionize the Indian luxury real estate landscape. Driven by professional management, progressive architectural intelligence, and uncompromising quality standards — Smartworld has established itself as a premier name in ultra-luxury living. With highly acclaimed residential landmarks across prime sectors of Gurugram — Smartworld Code 67 in Sector 67 stands as a pinnacle of curated architecture where world-class privileges meet a tranquil, panoramic way of living.
      </p>

      {/* ── RERA Number Box ── */}
      <div 
        data-aos="fade-up" data-aos-delay="150"
        className="inline-flex flex-wrap items-center justify-center bg-white/[0.05] border border-white/15 rounded-[8px] py-3 px-6 sm:px-8 shadow-inner mb-6 transition-all hover:border-white/30"
      >
        <span className="text-neutral-400 text-[14px] sm:text-[15px] mr-2">
          RERA No :
        </span>
        <span className="text-white font-bold text-[14px] sm:text-[15.5px] tracking-wide">
          Coming Soon (Subject to official approvals)
        </span>
      </div>

      {/* ── Full Width Horizontal Divider ── */}
      <div className="w-full border-t border-neutral-800/80 my-8" />

      {/* ── Copyright & Privacy Policy Bar ── */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-[13.5px] text-neutral-400 mb-6">
        <p className="m-0">
          &copy; 2026 Smartworld Code 67. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-neutral-700">|</span>
          <Link
            href="/privacy-policy"
            className="text-neutral-300 hover:text-[#0070ff] transition-colors duration-200"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* ── Detailed Legal Disclaimer ── */}
      <p className="w-full text-left text-neutral-500 text-[12px] leading-[1.75] m-0">
        <strong className="text-neutral-400">Disclaimer:</strong> This is not the official website of the developer. The information depicted herein, including master plans, floor plans, furniture layout, fittings, illustrations, specifications, designs, dimensions, rendered views, colours, amenities and facilities etc., are subject to change without notification as may be required by the relevant authorities or the Developer&apos;s architect. This advertisement is an invitation to offer and shall not be construed as an offer or contract. * Prices subject to change without notice. All taxes extra as applicable.
      </p>

    </div>
  </footer>
)

export default Footer
