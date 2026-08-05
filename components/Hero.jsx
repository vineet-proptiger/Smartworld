'use client'
import LeadForm from './LeadForm'

const Hero = ({ setIsOpen }) => {
  return (
    <section
      id="home"
      className="hero-section relative min-h-screen flex items-center overflow-hidden bg-[url('/images/hero/smDevice.webp')] md:bg-[url('/images/hero/banner1.webp')] bg-cover bg-center bg-no-repeat"
      style={{
        padding: '160px 0 100px',
        fontFamily: 'var(--font-poppins), Poppins, sans-serif',
        color: '#1b2b4b',
      }}
    >
      {/* Dark overlay (disabled on small devices) */}
      <div className="hidden md:block absolute inset-0 bg-black/55 z-0" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: '1350px' }}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
          
          {/* ── Left Content ── */}
          <div className="w-full lg:w-[58%] xl:w-[60%] text-white">
            
            {/* Partner Badge */}
            <div
              className="inline-flex items-center gap-2 mb-5 px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.22)',
              }}
            >
              <i className="fas fa-shield-alt text-[#0d6efd] text-base" />
              <span className="text-white font-normal">
                Authorized Channel Partner for smartworld{' '}
              </span>
            </div>

            {/* Sub-heading */}
            <h5
              className="mb-3 uppercase font-bold tracking-[3px]"
              style={{
                fontSize: '14px',
                color: '#4a9eff',
              }}
            >
              RERA REGISTERED | SMARTWORLD SECTOR 67A
            </h5>

            {/* Main Heading (Guaranteed 2 Lines on Desktop) */}
            <h1
              className="mb-4 font-bold tracking-tight"
              style={{
                fontSize: 'clamp(28px, 3.1vw, 44px)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.22,
              }}
            >
              Smartworld Sector 67A New Launch
            </h1>

            {/* Subtitle */}
            <p
              className="mb-8 font-normal"
              style={{
                fontSize: 'clamp(16px, 1.3vw, 19px)',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.5,
              }}
            >
              Your Dream Home, Now with Assured Benefits Up to ₹5 Lakh
            </p>

            <div
              className="flex flex-col sm:flex-row sm:items-center justify-between p-5 mb-9 rounded-[20px]"
              style={{
                background: 'rgba(30, 36, 48, 0.7)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.35)',
              }}
            >
              {/* Starting Price */}
              <div className="flex flex-row items-center justify-between sm:block flex-1 px-2 mb-3 sm:mb-0 pb-3 sm:pb-0 border-b border-white/10 sm:border-b-0">
                <span className="text-[13.5px] text-white/75 font-normal sm:block sm:mb-1">
                  Starting Price
                </span>
                <h4 className="text-[17px] sm:text-[20px] xl:text-[22px] font-extrabold text-[#3b82f6] m-0 tracking-tight text-right sm:text-left">
                  ₹ 2.40 Cr*
                </h4>
              </div>

              {/* Vertical Divider */}
              <div className="hidden sm:block w-[1px] h-11 bg-white/20 mx-2"></div>

              {/* Payment Plan */}
              <div className="flex flex-row items-center justify-between sm:block flex-1 px-2 mb-3 sm:mb-0 pb-3 sm:pb-0 sm:pl-5 border-b border-white/10 sm:border-b-0">
                <span className="text-[13.5px] text-white/75 font-normal sm:block sm:mb-1">
                  Payment Plan
                </span>
                <h4 className="text-[17px] sm:text-[20px] xl:text-[22px] font-extrabold text-white m-0 tracking-tight text-right sm:text-left">
                  30:40:30
                </h4>
              </div>

              {/* Vertical Divider */}
              <div className="hidden sm:block w-[1px] h-11 bg-white/20 mx-2"></div>

              {/* Configuration */}
              <div className="flex flex-row items-center justify-between sm:block flex-[1.3] px-2 sm:pl-5">
                <span className="text-[13.5px] text-white/75 font-normal sm:block sm:mb-1">
                  Configuration
                </span>
                <h4 className="text-[15px] sm:text-[17px] xl:text-[20px] font-extrabold text-white m-0 tracking-tight text-right sm:text-left whitespace-nowrap">
                  1350 sq.ft. | 1750 sq.ft.
                </h4>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setIsOpen && setIsOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-9 py-3.5 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 cursor-pointer text-center"
                style={{
                  background: '#0070ff',
                  color: '#ffffff',
                  border: '2px solid #0070ff',
                  boxShadow: '0 6px 20px rgba(0, 112, 255, 0.4)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#0070ff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#0070ff';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                Book Site Visit
              </button>
              <button
                type="button"
                onClick={() => setIsOpen && setIsOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-9 py-3.5 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 cursor-pointer text-center"
                style={{
                  background: 'rgba(15, 20, 30, 0.65)',
                  border: '2px solid rgba(255, 255, 255, 0.85)',
                  color: '#ffffff',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#0070ff';
                  e.currentTarget.style.borderColor = '#ffffff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(15, 20, 30, 0.65)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.85)';
                }}
              >
                Download Brochure
              </button>
            </div>
          </div>

          {/* ── Right Form ── */}
          <div className="hidden lg:block w-full lg:w-[42%] xl:w-[38%] lg:pl-4 xl:pl-8">
            <div
              className="lead-form rounded-[24px] p-8 lg:p-10"
              style={{
                background: 'rgba(32, 42, 60, 0.85)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                boxShadow: '0 30px 70px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderTop: '6px solid #1a6dff',
              }}
            >
              <h3
                className="text-center mb-6"
                style={{
                  fontSize: '25px',
                  fontWeight: 700,
                  color: '#ffffff',
                  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  letterSpacing: '-0.3px',
                }}
              >
                Get Exclusive Details
              </h3>
              <LeadForm formName="Hero Form" btnText="Submit Now" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
