"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

function FramedCard () {
  return (
    <CardContainer className="inter-var md:mx-0 mx-4 mt-0 md:mt-14">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-gray-500/[0.1] bg-black bg-opacity-85  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="60" className="w-full rounded-md mt-4">
            <div className="banner">
                <Image
                src={'/banner11.png'}
                width={960}
                height={240}
                alt="Banner"
                className="object-cover rounded-lg  w-full h-[168px]"
                />
            </div>
            <div className="avatar">
          <Image
            src="/avatar3.png"
            height="108"
            width="108"
            className=" object-cover ml-4 absolute top-24 w-[108px] h-[108px] sm:top-20 rounded-full group-hover/card:shadow-xl mx-auto"
            alt="Avatar"
          />
          </div>
        </CardItem>
       <CardItem translateZ="80">
        <div className="w-[20rem] sm:w[24rem] md:w-[27rem] px-1">
       <div className="profile px-2 w-full mt-8 flex justify-between items-center">
    <div className="flex items-center">
        <a className="font-semibold text-2xl">@ekwg</a>
    </div>
    <div className="badges ml-auto p-1 gap-1 flex items-center bg-neutral-950 bg-opacity-40 rounded-md">
    <svg xmlns="http://www.w3.org/2000/svg" height="140" viewBox="0 0 24 24" width="140">
  <circle cx="15" cy="12" fill="#fff" r="6"/>
  <path clipRule="evenodd" d="m2.20812 10.124c.42636 0 .7816-.34817.7816-.76611 0-.41793-.35524-.76615-.7816-.76615h-.42635c-.42636 0-.78177.34822-.78177.76615 0 .41794.35541.76611.78177.76611zm16.13038 9.2643c4.0504-1.811 5.7558-6.4083 3.9083-10.23937-1.2791-2.71657-3.9793-4.31859-6.8217-4.45801h-8.02965c-.71065 0-1.20812.55735-1.20812 1.18425 0 .69645.56859 1.18409 1.20812 1.18409h2.06067c.42635 0 .78158.34822.78158.76616 0 .41793-.35523.76632-.78158.76632h-5.04517c-.42635 0-.78176.34822-.78176.76615 0 .41794.35541.76611.78176.76611h3.62404c.42635 0 .78159.3484.78159.7664 0 .4179-.35524.7661-.78159.7661h-2.27402c-.42636 0-.7816.3482-.7816.7662 0 .4179.35524.7663.7816.7663h1.56336c.07112.8359.2843 1.6717.63954 2.4379 1.77654 3.8311 6.46643 5.5028 10.37463 3.7614zm-7.2725-5.1884c-1.0318-2.2025-.0466-4.80794 2.2003-5.81933 2.2469-1.0114 4.9049-.04564 5.9366 2.15683 1.0318 2.2025.0468 4.8079-2.2003 5.8193-2.2469 1.0114-4.9048.0457-5.9366-2.1568z" fill="#4f5d7f" fillRule="evenodd"/>
  <path d="m16.8142 9.86662 1.4212 2.36838c.0711.1392.0711.2089 0 .3482l-1.4212 2.3683c-.0711.1393-.2131.1393-.2842.1393h-2.7714c-.142 0-.2131-.0697-.2841-.1393l-1.4213-2.3683c-.0709-.1393-.0709-.209 0-.3482l1.4213-2.36838c.071-.13926.2132-.13926.2841-.13926h2.7714c.1422-.06971.2131 0 .2842.13926z" fill="#c5cedd"/>
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.43 22">
  <path d="M21.26 16h-1.67A3.64 3.64 0 0 1 16 12.32V10.6a1.45 1.45 0 0 1 1.43-1.47h7.88V7.08h-14c-1.27 2.86-2.57 5.83-3 7a3.65 3.65 0 0 1-3.37 2.31v1.23a6 6 0 0 0 4.16 1.7h12.58a3.64 3.64 0 0 0 3.63-3.63v-.26a3.45 3.45 0 0 1-1.9.57zm-8.43-2.8a1.24 1.24 0 1 1 1.24-1.2 1.24 1.24 0 0 1-1.24 1.2z" fill="#aabff2"/>
  <path d="M12.83 10.72a1.24 1.24 0 0 0 0 2.48 1.24 1.24 0 0 0 0-2.48z"/>
  <path d="M25.56 9.13h-8.13A1.45 1.45 0 0 0 16 10.6v1.72A3.64 3.64 0 0 0 19.59 16h3.82a3.45 3.45 0 0 0 1.9-.57.53.53 0 0 0 .1-.06 3.69 3.69 0 0 0 1.59-3V10.6a1.46 1.46 0 0 0-1.44-1.47zM22 14.4h-1.61a.61.61 0 1 1 0-1.21H22a.61.61 0 1 1 0 1.21zm2.85 0h-.65a.61.61 0 1 1 0-1.21h.61a.61.61 0 0 1 0 1.21z" fill="#cbdaf7"/>
  <path d="M22 13.19h-1.61a.61.61 0 1 0 0 1.21H22a.61.61 0 1 0 0-1.21zM24.81 13.19h-.61a.61.61 0 1 0 0 1.21h.61a.61.61 0 0 0 0-1.21z" fill="#aabff2"/>
  <path d="M2.23 15.37a3.75 3.75 0 0 1-.44-.24v5.78L3.34 22l1.55-1.09v-4.55a3.76 3.76 0 0 1-2.66-.99z" fill="#ef8843"/>
  <path d="M7.29 13.41a3.75 3.75 0 0 1-5.06 2 3.76 3.76 0 0 0 2.66 1 3.65 3.65 0 0 0 3.37-2.31c.45-1.14 1.75-4.11 3-7H10s-1.74 3.84-2.71 6.31z" fill="#d0d9ea"/>
  <path d="M14.46 0l.85.07zM11.32.11A16.07 16.07 0 0 1 13.19 0a16.07 16.07 0 0 0-1.87.11zM21.83 4.3a23 23 0 0 1 3.59.36c-.79-.93-3.82-4-10.11-4.55 4.55 1.09 6.23 3.68 6.52 4.19zM7.29 13.41C8.26 10.94 10 7.08 10 7.08s3.08-2.33 9.41-2.73c-2.2-3-5.83-4-8.08-4.24C3.61.94 0 6.8 0 11.48a4.08 4.08 0 0 0 1.79 3.65 3.77 3.77 0 0 0 5.5-1.72zM.77 10.57A2.86 2.86 0 0 1 3.7 7.85a2.85 2.85 0 0 1 2.18 3.35A2.84 2.84 0 0 1 3 13.92a2.84 2.84 0 0 1-2.23-3.35z" fill="#ebeff7"/>
  <path d="M19.39 4.35c.46 0 .93 0 1.42-.06h1c-.29-.51-2-3.1-6.52-4.19l-.83-.1h-1.27a16.07 16.07 0 0 0-1.87.11c2.24.27 5.87 1.19 8.07 4.24z" fill="#fc964b"/>
  <path d="M20.81 4.29c-.49 0-1 0-1.42.06-6.33.4-9.39 2.73-9.39 2.73h21.43a13.46 13.46 0 0 0-6-2.42 23 23 0 0 0-3.59-.36zM3 13.92a2.84 2.84 0 0 0 2.88-2.72A2.85 2.85 0 0 0 3.7 7.85a2.86 2.86 0 0 0-2.93 2.72A2.84 2.84 0 0 0 3 13.92zm-1.76-3.24a1.9 1.9 0 0 1 2-1.81 1.9 1.9 0 0 1 1.4 2.23 1.89 1.89 0 0 1-1.95 1.8 1.89 1.89 0 0 1-1.45-2.22z" fill="#647096"/>
  <path d="M2.69 12.9a1.89 1.89 0 0 0 1.95-1.8 1.9 1.9 0 0 0-1.45-2.23 1.9 1.9 0 0 0-1.95 1.81 1.89 1.89 0 0 0 1.45 2.22z" fill="#fc964b"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 360 320" version="1.1">
<path d="M 111.293 17.508 C 90.438 22.040, 75.945 36.749, 71.374 58.022 C 69.678 65.915, 69.678 65.915, 66.175 61.419 C 53.320 44.919, 39.695 41.456, 28.960 51.960 C 11.465 69.079, 12.483 94.399, 31.746 121.231 C 35.142 125.961, 35.142 125.961, 30.821 124.418 C 18.755 120.109, 7.659 122.101, 5.306 129 C -1.261 148.258, 10.027 174.367, 30.224 186.636 C 37.257 190.908, 37.106 191.236, 26.656 194.424 C 12.603 198.710, 7.714 203.600, 7.714 213.370 C 7.714 241.302, 61.176 263.676, 85.883 246.083 C 89.566 243.461, 89.650 243.469, 90.425 246.559 C 91.168 249.518, 98.217 257.521, 102.266 260.003 C 105.033 261.698, 105.033 261.698, 98.040 264.280 C 78.941 271.331, 69.855 283.102, 74.830 294.348 C 79.397 304.674, 85.668 304.934, 106.239 295.650 C 145.875 277.761, 175.515 277.165, 212.500 293.514 C 236.800 304.256, 240.397 304.792, 246.595 298.595 C 257.567 287.622, 243.766 267.687, 221.658 262.573 C 218.816 261.916, 218.816 261.916, 222.658 259.129 C 227.735 255.448, 232.820 249.567, 233.594 246.482 C 234.354 243.453, 234.102 243.451, 238.628 246.522 C 263.394 263.329, 316.286 240.957, 316.286 213.674 C 316.286 204.377, 311.543 198.627, 301.387 195.612 C 286.660 191.240, 285.813 190.461, 292.336 187.292 C 329.441 169.265, 330.319 111.333, 293.289 124.398 C 289.098 125.877, 289.098 125.877, 293.607 119.290 C 312.797 91.260, 311.862 64.081, 291.164 48.295 C 282.861 41.962, 268.586 47.606, 257.759 61.503 C 254.322 65.915, 254.322 65.915, 252.626 58.022 C 246.653 30.224, 226.945 16.068, 194.150 16.017 C 178.428 15.993, 176 18.111, 176 31.851 C 176 62.811, 196.217 84, 225.757 84 C 235.588 84, 246.924 113.582, 247.741 141.368 C 248.825 178.268, 239.197 202.665, 215.645 222.698 C 141.045 286.152, 41.844 192.608, 85.592 100.059 C 91.891 86.732, 94.153 84, 98.891 84 C 121.033 84, 141.650 68.308, 146.492 47.769 C 153.118 19.665, 142.676 10.688, 111.293 17.508" stroke="none" fill="#bcdaff" fillRule="evenodd"/>
  </svg>
</div>
</div>
</div>
</CardItem>
<CardItem translateZ="60" className="px-2 mt-5">
  <h3 className="uppercase text-white text-opacity-55 font-semibold text-xs">About me</h3>
  <div className="aboutme mt-2 text-white text-opacity-90">
    <p>
      <span>
      Inquiries:{" "}
        <a
          href="mailto:oohokay@proton.me"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#87CEEB" }}
        >
          !!!
        </a>
      </span>
      <br />
       15 | html , python , c#
      <br />
      ekwg on discord
    </p>
  </div>
</CardItem>



<CardItem translateZ="80" className="px-2 mt-8">
    <h3 className="uppercase text-white text-opacity-55 font-semibold text-xs">Connections</h3>
    <div className="gap-2 md:flex flex-wrap w-full">
    <a href="https://www.instagram.com/payjaspe/" target="_blank" className="w-[48%]">
            <div className="connection mt-2 bg-neutral-950 bg-opacity-70 rounded-md py-2.5 px-4 flex items-center gap-2 w-50%">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
                Instagram
                <div className="arrow ml-auto opacity-60 justify-end flex items-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                </div>
            </div>
        </a>
 

        <a href="https://discord.com/users/933839896823619654" target="_blank" className="w-[48%]">
  <div className="connection mt-2 bg-neutral-950 bg-opacity-70 rounded-md py-2.5 px-4 flex items-center gap-2 w-50%">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
      <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.248a18.257 18.257 0 0 0-5.487 0 12.54 12.54 0 0 0-.617-1.248.076.076 0 0 0-.078-.037A19.736 19.736 0 0 0 3.683 4.369a.069.069 0 0 0-.03.027C.533 9.045-.32 13.58.099 18.057a.086.086 0 0 0 .031.056 19.96 19.96 0 0 0 5.993 3.053.077.077 0 0 0 .084-.027c.462-.63.873-1.295 1.226-1.993a.076.076 0 0 0-.041-.103 13.214 13.214 0 0 1-1.884-.894.076.076 0 0 1-.008-.127c.126-.094.252-.19.374-.287a.074.074 0 0 1 .077-.01c3.927 1.792 8.18 1.792 12.061 0a.074.074 0 0 1 .078.009c.122.097.248.193.375.288a.076.076 0 0 1-.006.127 12.648 12.648 0 0 1-1.885.893.076.076 0 0 0-.04.104c.36.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.028 19.93 19.93 0 0 0 6.003-3.053.076.076 0 0 0 .03-.055c.5-5.177-.838-9.665-3.552-13.661a.062.062 0 0 0-.03-.028zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.175 1.094 2.157 2.42 0 1.334-.955 2.418-2.157 2.418zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.175 1.094 2.157 2.42 0 1.334-.947 2.418-2.157 2.418z"/>
    </svg>
    Discord
    <div className="arrow ml-auto opacity-60 justify-end flex items-end">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
      </svg>
    </div>
  </div>
</a>


        <a href="https://github.com/knockemsockem" target="_blank" className="w-[48%]">
            <div className="connection mt-2 bg-neutral-950 bg-opacity-70 rounded-md py-2.5 px-4 flex items-center gap-2 w-50%">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
                GitHub
                <div className="arrow ml-[4rem] sm:ml-auto opacity-60 justify-end flex items-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                </div>
            </div>
        </a>

        

    </div>
</CardItem>

      </CardBody>
    </CardContainer>
  );
}

export default FramedCard
