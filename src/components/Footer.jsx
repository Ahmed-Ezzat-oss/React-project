import React from "react";

function Footer() {
  const popularCategories = [
    "Staples",
    "Beverages",
    "Personal Care",
    "Home Care",
    "Baby Care",
    "Vegetables & Fruits",
    "Snacks & Foods",
    "Dairy & Bakery",
  ];

  const customerServices = [
    "About Us",
    "Terms & Conditions",
    "FAQ",
    "Privacy Policy",
    "E-waste Policy",
    "Cancellation & Return Policy",
  ];
  return (
    <footer className="relative bg-[#008ECC] text-white pt-12 pb-16 overflow-hidden font-sans">
      <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full border-[60px] border-white/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">MegaMart</h2>

          <div>
            <h3 className="text-base font-semibold mb-3">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.84 9.84 0 0 0 12.04 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs text-blue-100">Whats App</span>
                  <a
                    href="tel:+12029182132"
                    className="font-semibold hover:underline"
                  >
                    +1 202-918-2132
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs text-blue-100">Call Us</span>
                  <a
                    href="tel:+12029182132"
                    className="font-semibold hover:underline"
                  >
                    +1 202-918-2132
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3">Download App</h3>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="inline-block transition-transform hover:scale-105"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  className="h-10"
                />
              </a>
              <a
                href="#"
                className="inline-block transition-transform hover:scale-105"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="relative pb-2 mb-4">
            <h3 className="text-lg font-semibold">Most Popular Categories</h3>
            <div className="absolute bottom-0 left-0 w-48 h-0.5 bg-white"></div>
          </div>
          <ul className="space-y-2.5 text-sm text-blue-50">
            {popularCategories.map((category, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-xs">•</span>
                <a
                  href="#"
                  className="hover:underline hover:text-white transition-colors"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="relative pb-2 mb-4">
            <h3 className="text-lg font-semibold">Customer Services</h3>
            <div className="absolute bottom-0 left-0 w-36 h-0.5 bg-white"></div>
          </div>
          <ul className="space-y-2.5 text-sm text-blue-50">
            {customerServices.map((service, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-xs">•</span>
                <a
                  href="#"
                  className="hover:underline hover:text-white transition-colors"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
