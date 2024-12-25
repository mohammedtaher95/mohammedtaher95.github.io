import React, { useContext } from "react";
// import Headroom from "react-headroom";
import "./Header.css";

function Header() {
  return (
    <div class="header">
      <div class="container">
        <div class="div">
          <div class="c">&lt;c/&gt;</div>
          <div class="sinan-tokmak">MohammedTaher</div>
        </div>
        <div class="div-2">
          <div class="menu-1">
            <div class="menu-item">
              <a href="" class="menu-item">
                Home
              </a>
            </div>
            <div class="menu-item">Blogs</div>
          </div>
          <div class="menu-2">
            <div class="search">
              <div class="img">
                <div class="icon-search">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.5 9.16667C3.5 6.03705 6.03705 3.5 9.16667 3.5C12.2963 3.5 14.8333 6.03705 14.8333 9.16667C14.8333 10.689 14.2331 12.0711 13.2563 13.0892C13.2256 13.1134 13.1961 13.1396 13.1678 13.1679C13.1395 13.1962 13.1133 13.2257 13.0891 13.2564C12.071 14.2331 10.6889 14.8333 9.16667 14.8333C6.03705 14.8333 3.5 12.2963 3.5 9.16667ZM13.8346 15.2489C12.5418 16.2426 10.9232 16.8333 9.16667 16.8333C4.93248 16.8333 1.5 13.4008 1.5 9.16667C1.5 4.93248 4.93248 1.5 9.16667 1.5C13.4008 1.5 16.8333 4.93248 16.8333 9.16667C16.8333 10.9233 16.2426 12.5419 15.2489 13.8347L18.207 16.7929C18.5976 17.1834 18.5976 17.8166 18.207 18.2071C17.8165 18.5976 17.1833 18.5976 16.7928 18.2071L13.8346 15.2489Z"
                      fill="#292F36"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="div-3">
              <div class="div">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.74037 7.51861C10.6739 7.03424 11.7363 6.85655 12.7766 7.01081C13.8378 7.16817 14.8202 7.66264 15.5788 8.4212C16.3373 9.17975 16.8318 10.1622 16.9891 11.2233C17.1434 12.2636 16.9657 13.3261 16.4813 14.2596C15.997 15.1931 15.2306 15.9501 14.2912 16.4229C13.3518 16.8957 12.2872 17.0603 11.2489 16.8932C10.2105 16.7261 9.25134 16.2359 8.50768 15.4923C7.76403 14.7486 7.2738 13.7894 7.10672 12.7511C6.93964 11.7128 7.10422 10.6482 7.57704 9.70878C8.04987 8.76938 8.80687 8.00299 9.74037 7.51861ZM12.4833 8.98918C11.8591 8.89662 11.2216 9.00324 10.6615 9.29386C10.1014 9.58449 9.64721 10.0443 9.36351 10.608C9.07982 11.1716 8.98107 11.8103 9.08132 12.4333C9.18157 13.0563 9.47571 13.6319 9.9219 14.0781C10.3681 14.5242 10.9436 14.8184 11.5666 14.9186C12.1896 15.0189 12.8283 14.9201 13.392 14.6364C13.9556 14.3527 14.4155 13.8985 14.7061 13.3384C14.9967 12.7783 15.1033 12.1409 15.0108 11.5167C14.9164 10.88 14.6197 10.2905 14.1645 9.83541C13.7094 9.38028 13.12 9.08359 12.4833 8.98918Z"
                    fill="#2D3648"
                  />
                  <path
                    d="M17.5 5.5C16.9477 5.5 16.5 5.94772 16.5 6.5C16.5 7.05228 16.9477 7.5 17.5 7.5H17.51C18.0623 7.5 18.51 7.05228 18.51 6.5C18.51 5.94772 18.0623 5.5 17.51 5.5H17.5Z"
                    fill="#2D3648"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 7C1 3.68629 3.68629 1 7 1H17C20.3137 1 23 3.68629 23 7V17C23 20.3137 20.3137 23 17 23H7C3.68629 23 1 20.3137 1 17V7ZM7 3C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3H7Z"
                    fill="#2D3648"
                  />
                </svg>
                <div class="menu-item">Instagram</div>
              </div>
              <div class="div">
                <svg
                  class="icons"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1ZM3 4C3 3.44772 3.44772 3 4 3C4.55228 3 5 3.44772 5 4C5 4.55228 4.55228 5 4 5C3.44772 5 3 4.55228 3 4Z"
                    fill="#2D3648"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 7C14.1435 7 12.363 7.7375 11.0503 9.05025C9.7375 10.363 9 12.1435 9 14V21C9 21.5523 9.44771 22 10 22H14C14.5523 22 15 21.5523 15 21V14C15 13.7348 15.1054 13.4804 15.2929 13.2929C15.4804 13.1054 15.7348 13 16 13C16.2652 13 16.5196 13.1054 16.7071 13.2929C16.8946 13.4804 17 13.7348 17 14V21C17 21.5523 17.4477 22 18 22H22C22.5523 22 23 21.5523 23 21V14C23 12.1435 22.2625 10.363 20.9497 9.05025C19.637 7.7375 17.8565 7 16 7ZM16 9C14.6739 9 13.4021 9.52678 12.4645 10.4645C11.5268 11.4021 11 12.6739 11 14V20H13V14C13 13.2043 13.3161 12.4413 13.8787 11.8787C14.4413 11.3161 15.2043 11 16 11C16.7957 11 17.5587 11.3161 18.1213 11.8787C18.6839 12.4413 19 13.2043 19 14V20H21V14C21 12.6739 20.4732 11.4021 19.5355 10.4645C18.5979 9.52678 17.3261 9 16 9Z"
                    fill="#2D3648"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 9C1 8.44772 1.44772 8 2 8H6C6.55228 8 7 8.44772 7 9V21C7 21.5523 6.55228 22 6 22H2C1.44772 22 1 21.5523 1 21V9ZM3 10V20H5V10H3Z"
                    fill="#2D3648"
                  />
                </svg>
                <a
                  class="menu-item"
                  href="https://www.linkedin.com/in/mohtaher-95/"
                >
                  LinkedIn
                </a>
              </div>
              <div class="div">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.24658C9.62547 2.24668 7.32846 3.0917 5.51996 4.63043C3.71146 6.16916 2.5095 8.3012 2.12913 10.6451C1.74876 12.9889 2.21481 15.3917 3.4439 17.4233C4.67298 19.455 6.58488 20.9831 8.83752 21.7341C9.33752 21.8216 9.52502 21.5216 9.52502 21.2591C9.52502 21.0216 9.51251 20.2341 9.51251 19.3966C7 19.8591 6.35 18.7841 6.15 18.2216C5.92807 17.6745 5.57627 17.1897 5.125 16.8091C4.775 16.6216 4.275 16.1591 5.11249 16.1466C5.43227 16.1813 5.73898 16.2926 6.00663 16.471C6.27427 16.6494 6.49496 16.8897 6.65 17.1716C6.78677 17.4173 6.97068 17.6336 7.19119 17.8081C7.4117 17.9826 7.66447 18.1118 7.93503 18.1885C8.20559 18.2651 8.48861 18.2876 8.76788 18.2547C9.04714 18.2218 9.31717 18.134 9.56248 17.9966C9.60577 17.4882 9.83234 17.0129 10.2 16.6591C7.975 16.4091 5.65 15.5466 5.65 11.7216C5.63594 10.7278 6.00268 9.76619 6.675 9.03411C6.36928 8.17033 6.40505 7.2224 6.775 6.38411C6.775 6.38411 7.61247 6.1216 9.525 7.40911C11.1613 6.95909 12.8887 6.95909 14.525 7.40911C16.4375 6.10911 17.275 6.38411 17.275 6.38411C17.645 7.22238 17.6808 8.17034 17.375 9.03411C18.0493 9.76494 18.4164 10.7273 18.4 11.7216C18.4 15.5591 16.0625 16.4091 13.8375 16.6591C14.0761 16.901 14.2599 17.1914 14.3764 17.5106C14.4929 17.8298 14.5393 18.1704 14.5125 18.5091C14.5125 19.8466 14.5 20.9216 14.5 21.2591C14.5 21.5216 14.6875 21.8341 15.1875 21.7341C17.4362 20.977 19.3426 19.4453 20.5664 17.4126C21.7903 15.3799 22.2519 12.9784 21.8689 10.6368C21.4859 8.29523 20.2832 6.16595 18.4755 4.62909C16.6678 3.09223 14.3727 2.24782 12 2.24658Z"
                    fill="black"
                  />
                </svg>
                <a href="https://github.com/mohammedtaher95/" class="menu-item">
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="line">
        <svg
          width="1664"
          height="1"
          viewBox="0 0 1664 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="0.5" x2="1664" y2="0.5" stroke="#43454D" />
        </svg>
      </div>
    </div>
  );
}
export default Header;
