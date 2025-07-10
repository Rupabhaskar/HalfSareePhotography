import { useEffect } from "react";

export default function WhyChooseUs() {
  useEffect(() => {
    const cards = document.querySelectorAll(".fade-in-card");
    cards.forEach((card, i) => {
      card.setAttribute("style", `animation-delay: ${i * 0.2}s`);
      card.classList.add("animate-fade-in-up");
    });

    const titles = document.querySelectorAll(".fade-in-title");
    titles.forEach((title) => {
      title.classList.add("animate-fade-in-up");
    });
  }, []);

  const features = [
    {
      title: 'All Over UK Coverage',
      description: 'Whether you\'re moving into a new home in London or celebrating in the West Midlands or Scotland, Snap U Photography offers professional housewarming photography services across all UK regions.',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l6 6-6 6M21 7l-6 6 6 6" />
        </svg>
      ),
    },
    {
      title: 'Professional Storytelling',
      description: 'We specialize in capturing housewarming moments with candid photography and storytelling—from your first step into your home to joyful gatherings with loved ones.',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l-4-4 4-4m8 8l4-4-4-4" />
        </svg>
      ),
    },
    {
      title: 'Fast Delivery',
      description: 'Our affordable services include fast turnaround so you can quickly receive and share your stunning housewarming memories with friends and family.',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11M9 21V3M17 16l4-4m0 0l-4-4m4 4H9" />
        </svg>
      ),
    },
    {
      title: 'At-Home Sessions',
      description: 'Enjoy relaxed, intimate Half Saree shoots in the comfort of your home. We capture authentic emotions in your familiar, cozy surroundings. Our mobile setup brings professional photography right to your doorstep.',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 22V12h6v10" />
        </svg>
      ),
    },
    {
      title: 'Creative Concepts',
      description: 'From vintage charm to modern elegance, we design each shoot around your vision. Our creative themes bring your personality and story to life.',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Affordable Packages',
      description: 'Get high-quality maternity photography without breaking the bank. We offer flexible packages tailored to your needs and budget.',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Candid & Posed Shots',
      description: 'We deliver a mix of natural and posed shots—from interior showcases to emotional family moments—capturing your celebration beautifully.',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553 2.276A2 2 0 0120 14v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 01.447-1.276L9 10m6 0V5a3 3 0 00-6 0v5m6 0H9" />
        </svg>
      ),
    },
    {
      title: 'Customized Coverage',
      description: 'Choose from packages designed for your budget and celebration size. We offer coverage from blessing rituals to decor-focused housewarming photography.',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Stunning Visuals',
      description: 'From elegant decor to wide-angle home shots, our housewarming photography highlights interiors and emotions in beautiful visual storytelling.',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h18M3 19h18M5 7v10M19 7v10M10 12h4" />
        </svg>
      ),
    },
    {
      title: 'Experienced Team',
      description: 'With years of housewarming photography experience, we capture key moments from smiles to decor, ensuring every detail is documented with care.',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
    },
    {
      title: 'Memorable Keepsakes',
      description: 'Turn your photos into albums or shareable videos. We offer home gathering photography services that leave you with timeless keepsakes.',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4-4-4-4m16 8l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Stress-Free Experience',
      description: 'Enjoy your celebration while we handle everything. Our professional team delivers a smooth, relaxed, and memorable photography experience.',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ];

  return (
    <section id="About" className="py-16 md:py-20 bg-white">
      <div className="mx-auto px-4 md:px-6">
        <div className="max-w-full mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-black mb-3 fade-in-title">
            Why Choose Us for Your Half Saree Photography in the UK
          </h2>
          <p className="text-sm md:text-lg xl:text-xl 2xl:text-2xl 4xl:text-3xl text-gray-600 fade-in-title delay-200">
            From <strong>half saree photoshoots in London</strong> to{" "}
            <strong>traditional Indian photography in the West Midlands</strong>,
            we craft authentic, heartfelt, and cultural experiences — wherever you are in the UK.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-10">
          {features.map((item, i) => (
            <div
              key={i}
              className=" p-4 md:p-8 rounded-xl shadow-xl fade-in-card transform transition-transform hover:scale-105 hover:shadow-2xl duration-500 ease-in-out"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center hover:bg-red-200 transition duration-300">
                  <div className="w-6 h-6 md:w-8 md:h-8 text-red-800">
                    {item.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-black mb-2 md:mb-3">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm xl:text-base 2xl:text-lg text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center fade-in-title delay-400">
          <p className="text-sm md:text-lg xl:text-xl 2xl:text-2xl text-gray-800">
            Ready to plan your <strong>half saree photoshoot in the UK</strong>?{" "}
            <a
              href="#Contact"
              className="text-red-800 font-semibold hover:underline transition duration-300 ml-1"
            >
              Get in touch today
            </a>{" "}
            — let’s celebrate culture and beauty together.
          </p>
        </div>
      </div>

      <style jsx>{`
        .fade-in-title {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }

        .fade-in-card {
          opacity: 0;
          transform: translateY(40px);
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
