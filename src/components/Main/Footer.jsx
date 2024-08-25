import React from "react";
import Logo from "../../assets/single-logo.png";
export default function Footer() {
  return (
    <footer className="text-white bg-[#00873D]">
      <div className="container px-10 py-24 ">
        <div className="pb-12">
          <a className="flex title-font w-60 font-medium items-center md:justify-start justify-center ">
            <img src={Logo} alt="" className="w-full" />
          </a>
        </div>
        <div className="mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-1/4 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <p className="mt-2 text-lg mb-3">
              Build skills with courses, certificates, and programmes online
              from world-class trainers and institutions.
            </p>
            <span className="inline-flex  mt-6 mb-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  width="28"
                  height="29"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1_378)">
                    <path
                      d="M45.86 22.6802C45.86 10.5602 36.035 0.750244 23.93 0.750244C11.81 0.750244 2 10.5752 2 22.6802C2 33.6302 10.025 42.7052 20.51 44.3402V29.0252H14.945V22.6802H20.51V17.8502C20.51 12.3602 23.78 9.31524 28.79 9.31524C31.19 9.31524 33.695 9.75024 33.695 9.75024V15.1502H30.935C28.205 15.1502 27.365 16.8452 27.365 18.5702V22.6802H33.455L32.48 29.0252H27.365V44.3552C37.85 42.7052 45.86 33.6302 45.86 22.6802Z"
                      fill="white"
                    />
                  </g>
                  <path
                    d="M32.4652 29.0253L33.4402 22.6803H27.3502V18.5703C27.3502 16.8303 28.2052 15.1503 30.9202 15.1503H33.6802V9.75031C33.6802 9.75031 31.1752 9.31531 28.7752 9.31531C23.7652 9.31531 20.4952 12.3453 20.4952 17.8503V22.6803H14.9302V29.0253H20.4952V44.3553C21.6052 44.5353 22.7602 44.6253 23.9152 44.6253C25.0852 44.6253 26.2252 44.5353 27.3352 44.3553V29.0253H32.4652Z"
                    fill="black"
                  />
                  <defs>
                    <filter
                      id="filter0_d_1_378"
                      x="0"
                      y="0.750244"
                      width="47.86"
                      height="47.605"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_378"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_378"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  width="28"
                  height="29"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1_375)">
                    <path
                      d="M23.9642 44.6102C36.0758 44.6102 45.8942 34.7919 45.8942 22.6802C45.8942 10.5686 36.0758 0.750244 23.9642 0.750244C11.8526 0.750244 2.03418 10.5686 2.03418 22.6802C2.03418 34.7919 11.8526 44.6102 23.9642 44.6102Z"
                      fill="white"
                    />
                  </g>
                  <path
                    d="M36.0693 15.1655C35.3043 15.5105 34.4643 15.7205 33.6543 15.8555C34.0443 15.7955 34.6143 15.0905 34.8393 14.8055C35.1843 14.3705 35.4843 13.8755 35.6493 13.3355C35.6643 13.2905 35.6793 13.2455 35.6493 13.2155C35.6043 13.2005 35.5593 13.2005 35.5143 13.2305C34.5993 13.7255 33.6543 14.0705 32.6493 14.3255C32.5593 14.3405 32.4993 14.3255 32.4543 14.2805C32.3643 14.1905 32.2893 14.1005 32.1993 14.0255C31.7793 13.6655 31.3293 13.3805 30.8043 13.1705C30.1293 12.9005 29.3943 12.7805 28.6743 12.8255C27.9693 12.8705 27.2793 13.0655 26.6493 13.3955C26.0193 13.7255 25.4643 14.1755 25.0143 14.7305C24.5493 15.3005 24.2193 15.9755 24.0393 16.6805C23.8743 17.3705 23.8893 18.0455 23.9943 18.7355C24.0093 18.8555 23.9943 18.8705 23.8893 18.8555C19.9443 18.2705 16.6893 16.8605 14.0343 13.8455C13.9143 13.7105 13.8543 13.7105 13.7643 13.8605C12.6093 15.6005 13.1643 18.3905 14.6193 19.7705C14.8143 19.9505 15.0093 20.1305 15.2193 20.3105C15.1443 20.3255 14.1843 20.2205 13.3143 19.7705C13.1943 19.6955 13.1343 19.7405 13.1343 19.8755C13.1193 20.0705 13.1343 20.2355 13.1643 20.4455C13.3893 22.2005 14.6043 23.8355 16.2843 24.4805C16.4793 24.5705 16.7043 24.6305 16.9143 24.6755C16.5393 24.7655 16.1343 24.8255 15.0543 24.7355C14.9193 24.7055 14.8593 24.7805 14.9193 24.9005C15.7443 27.1355 17.5143 27.7955 18.8343 28.1855C19.0143 28.2155 19.1943 28.2155 19.3743 28.2605C19.3593 28.2755 19.3593 28.2755 19.3443 28.2905C18.9093 28.9655 17.3793 29.4605 16.6743 29.7155C15.3843 30.1655 13.9743 30.3755 12.6093 30.2405C12.3843 30.2105 12.3393 30.2105 12.2793 30.2405C12.2193 30.2705 12.2643 30.3305 12.3393 30.3905C12.6093 30.5705 12.8943 30.7355 13.1793 30.8855C14.0493 31.3505 14.9493 31.7105 15.8943 31.9655C20.7843 33.3155 26.2743 32.3255 29.9493 28.6805C32.8293 25.8155 33.8343 21.8705 33.8343 17.9255C33.8343 17.7755 34.0143 17.6855 34.1193 17.6105C34.8693 17.0405 35.4693 16.3805 36.0243 15.6155C36.1443 15.4505 36.1443 15.3005 36.1443 15.2405C36.1443 15.2255 36.1443 15.2255 36.1443 15.2255C36.1743 15.1055 36.1743 15.1205 36.0693 15.1655Z"
                    fill="black"
                  />
                  <defs>
                    <filter
                      id="filter0_d_1_375"
                      x="0.0341797"
                      y="0.750244"
                      width="47.86"
                      height="47.86"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_375"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_375"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 49 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1_382)">
                    <path
                      d="M24.43 44.6103C36.5416 44.6103 46.36 34.7919 46.36 22.6803C46.36 10.5687 36.5416 0.750244 24.43 0.750244C12.3184 0.750244 2.5 10.5687 2.5 22.6803C2.5 34.7919 12.3184 44.6103 24.43 44.6103Z"
                      fill="white"
                    />
                  </g>
                  <path
                    d="M15.2352 18.6H19.4802V32.2499H15.2352V18.6ZM17.3652 11.8199C18.7302 11.8199 19.8251 12.9149 19.8251 14.2799C19.8251 15.6299 18.7302 16.7399 17.3652 16.7399C16.0002 16.7399 14.9052 15.6299 14.9052 14.2799C14.9052 12.9149 16.0002 11.8199 17.3652 11.8199Z"
                    fill="black"
                  />
                  <path
                    d="M22.1496 18.6001H26.2146V20.4601H26.2746C26.8446 19.3801 28.2246 18.2551 30.2946 18.2551C34.5846 18.2551 35.3796 21.0751 35.3796 24.7501V32.2351H31.1346V25.6051C31.1346 24.0151 31.1046 21.9901 28.9296 21.9901C26.7246 21.9901 26.3796 23.7151 26.3796 25.5001V32.2501H22.1346V18.6001H22.1496Z"
                    fill="black"
                  />
                  <defs>
                    <filter
                      id="filter0_d_1_382"
                      x="0.5"
                      y="0.750244"
                      width="47.86"
                      height="47.86"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_382"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_382"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </a>
            
            </span>
            <p className="text-white text-sm text-center sm:text-left">
              © 2021 Questence. All rights reserved.
            </p>
          </div>
          <div className="flex-grow  justify-end mr-auto flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-extrabold tracking-widest text-xl mb-3">
                Pages
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="font-medium text-lg">About Us</a>
                </li>
                <li>
                  <a className="font-medium text-lg">Blog</a>
                </li>
                <li>
                  <a className="font-medium text-lg">Career</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-extrabold tracking-widest text-xl mb-3">
                Connect
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="font-medium text-lg">Contact Us</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-extrabold tracking-widest text-xl mb-3">
                Legal
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="font-medium text-lg">Terms of Service</a>
                </li>
                <li>
                  <a className="font-medium text-lg">Honour Code</a>
                </li>
                <li>
                  <a className="font-medium text-lg">Privacy Policy</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </div>
    
    </footer>
  );
}
