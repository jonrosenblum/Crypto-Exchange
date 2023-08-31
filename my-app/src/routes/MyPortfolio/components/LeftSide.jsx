import React from 'react';

export default function LeftSide() {
  return (
    <div className="w-full px-4 lg:w-5/12">
      <div className="hero-content">
        <h3 className="text-primary font-semibold text-2xl">Sign up Today</h3>
        <h1 className="mb-4 font-bold leading-tight text-dark sm:text-[42px] lg:text-[52px] xl:text-[62px]">
          Crypto Portfolio Tracker
        </h1>
        <p className="mb-10 max-w-[480px] text-base text-body-color">
          Keep track of your profits, losses and portfolio valuation with our
          easy to use platform.
        </p>
        <ul className="flex flex-wrap items-center">
          <li>
            <a
              href="javascript:void(0)"
              className="inline-flex items-center justify-center rounded-lg bg-primary py-4 px-6 text-center text-base font-semibold text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
            >
              Create your Portfolio
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className="inline-flex items-center justify-center py-4 px-6 text-center text-base font-semibold text-body-color hover:text-primary sm:px-10 lg:px-8 xl:px-10"
            >
              Login
              <span className="pl-2">→</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
