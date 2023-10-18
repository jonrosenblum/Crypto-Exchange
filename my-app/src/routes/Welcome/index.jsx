import React from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Welcome() {
  return (
    <div
      id="home"
      className="relative overflow-hidden pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div
              className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
              data-wow-delay=".2s"
            >
              <h1 class="text-4xl font-bold tracking-tight text-dark sm:text-6xl mb-8">Welcome to Cryptox</h1>
              <p
                className="text-lg leading-8 text-body-color mb-12"
              >
                Stay updated with real-time information about various
                cryptocurrencies, including their prices, market trends, and other
                relevant data.
                Explore the world of digital currencies and make informed investment
                decisions. Start tracking your favorite cryptocurrencies now!
              </p>
              <ul className="mb-12 flex flex-wrap items-center justify-center">
                <li>
                  <a
                    href=""
                    className="inline-flex items-center justify-center rounded-lg font-semibold bg-primary py-4 px-6 text-center text-base text-white transition duration-300 ease-in-out hover:text-white hover:shadow-lg sm:px-10"
                  >
                    Get started
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    target="_blank"
                    className="font-semibold leading-6 text-dark transition duration-300 ease-in-out hover:opacity-70 sm:px-10"
                  >
                    Login
                    <span className="pl-2">→</span>
                  </a>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
