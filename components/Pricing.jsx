'use client'
import React from 'react'

const Pricing = ({ setIsOpen }) => {
  return (
    <section id="pricing" className="w-full py-[100px] font-poppins" style={{ background: '#f8f9fc' }}>
      <div className="container mx-auto px-4" style={{ maxWidth: '1000px' }}>
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-[#3b82f6] font-bold text-[14px] tracking-[2px] uppercase mb-3 block">
            PRICE LIST
          </span>
          <h2 className="text-[#1b2b4b] text-[32px] md:text-[38px] font-bold mb-4">
            Splendid Investment Opportunities
          </h2>
          <p className="text-[#6c757d] text-[16px] m-0">
            Easy Payment Plans (Construction Linked &amp; Subvention Plans Available).
          </p>
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-hidden border border-[#e5e7eb]">
          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse whitespace-nowrap min-w-[700px]">
              <thead>
                <tr className="bg-[#113166] text-white">
                  <th className="py-5 px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 w-1/4">UNIT TYPE</th>
                  <th className="py-5 px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 w-1/4">SUPER BUILT-UP AREA</th>
                  <th className="py-5 px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 w-1/4">ESTIMATED PRICE</th>
                  <th className="py-5 px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 w-1/4">ACTION</th>
                </tr>
              </thead>
              <tbody className="text-[#1b2b4b]">
                
                {/* Row 1 */}
                <tr className="border-b border-[#f0f0f0] hover:bg-gray-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-[18px]">2 BHK</td>
                  <td className="py-6 px-6 text-[15px] font-medium text-gray-800">1350 Sq.ft.</td>
                  <td className="py-6 px-6 font-extrabold text-[16px]">₹ 2.40 Cr.*</td>
                  <td className="py-6 px-6">
                    <button 
                      onClick={() => setIsOpen(true)}
                      className="inline-flex items-center justify-center px-8 py-2.5 rounded-[50px] text-white font-semibold text-[14px] transition-all duration-300"
                      style={{
                        background: '#1a56db',
                        boxShadow: '0 4px 14px 0 rgba(26, 86, 219, 0.39)'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#1e40af';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = '#1a56db';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      Get Price List
                    </button>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="border-b border-[#f0f0f0] hover:bg-gray-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-[18px]">3 BHK</td>
                  <td className="py-6 px-6 text-[15px] font-medium text-gray-800">1750 Sq.ft.</td>
                  <td className="py-6 px-6 font-extrabold text-[16px]">₹ 3.15 Cr.*</td>
                  <td className="py-6 px-6">
                    <button 
                      onClick={() => setIsOpen(true)}
                      className="inline-flex items-center justify-center px-8 py-2.5 rounded-[50px] text-white font-semibold text-[14px] transition-all duration-300"
                      style={{
                        background: '#1a56db',
                        boxShadow: '0 4px 14px 0 rgba(26, 86, 219, 0.39)'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#1e40af';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = '#1a56db';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      Get Price List
                    </button>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-[18px]">3 BHK + Utility</td>
                  <td className="py-6 px-6 text-[15px] font-medium text-gray-800">1950 - 2000 Sq. ft.</td>
                  <td className="py-6 px-6 font-extrabold text-[16px]">₹ 3.50 Cr.*</td>
                  <td className="py-6 px-6">
                    <button 
                      onClick={() => setIsOpen(true)}
                      className="inline-flex items-center justify-center px-8 py-2.5 rounded-[50px] text-white font-semibold text-[14px] transition-all duration-300"
                      style={{
                        background: '#1a56db',
                        boxShadow: '0 4px 14px 0 rgba(26, 86, 219, 0.39)'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#1e40af';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = '#1a56db';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      Get Price List
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Pricing
