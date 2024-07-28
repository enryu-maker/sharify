import React from 'react'
import Header from '../../components/Header'
import { Image } from '../../assets/image'

export default function Home() {
    return (
        <div className=' font-Inter'>
            {/* Hero */}
            <div className="font-sans max-w-6xl max-md:max-w-md mx-auto">
                <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
                    <div className="max-md:order-1 max-md:text-center z-50 relative">
                        <h2 className="text-gray-800 lg:text-6xl md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[56px]"><span className="text-[#537AF6]">Share</span> File with <span className="text-[#537AF6]">Sharify</span></h2>
                        <p className="text-gray-600 mt-6 text-base leading-relaxed">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>

                        <button type='button'
                            className="mt-6 bg-[#537AF6] hover:bg-transparent hover:text-[#537AF6] border-2 border-[#537AF6] transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">Get Started</button>

                        <div className="mt-12">
                            <div className="grid sm:grid-cols-3 gap-4 items-center">
                                <div className="flex flex-col items-center text-center">
                                    <h5 className="text-gray-800 font-bold text-xl mb-2">10+</h5>
                                    <p className="text-gray-600">Years Experience</p>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <h5 className="text-gray-800 font-bold text-xl mb-2">890</h5>
                                    <p className="text-gray-600">Cases Solved</p>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <h5 className="text-gray-800 font-bold text-xl mb-2">250</h5>
                                    <p className="text-gray-600">Business Partners</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:h-[550px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:bg-white before:h-[120%] before:w-[120%] before:right-0 before:z-0">
                        <img src={Image?.hero} className="rounded-md lg:w-4/5 z-50 relative" alt="Dining Experience" />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 z-50 relative md:px-4 max-md:mt-12 mb-12">
                    <div className="bg-white p-6 shadow rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-11 h-11 mb-4 inline-block bg-blue-100 p-3 rounded-md" viewBox="0 0 32 32">
                            <path d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z" data-original="#000000" />
                            <path d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z" data-original="#000000" />
                        </svg>
                        <h3 className="text-gray-800 text-xl font-bold mb-2">Customization</h3>
                        <p className="text-sm text-gray-600">Tailor our product to suit your needs.</p>
                        <a href="javascript:void(0);" className="text-[#537AF6] font-bold inline-block text-sm hover:underline mt-4">Learn more</a>
                    </div>
                    <div className="bg-white p-6 shadow rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-11 h-11 mb-4 inline-block bg-blue-100 p-3 rounded-md" viewBox="0 0 512.001 512.001">
                            <path d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z" data-original="#000000" />
                        </svg>
                        <h3 className="text-gray-800 text-xl font-bold mb-2">Support</h3>
                        <p className="text-sm text-gray-600">24/7 customer support for all your inquiries.</p>
                        <a href="javascript:void(0);" className="text-[#537AF6] font-bold inline-block text-sm hover:underline mt-4">Learn more</a>
                    </div>
                    <div className="bg-white p-6 shadow rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-11 h-11 mb-4 inline-block bg-blue-100 p-3 rounded-md" viewBox="0 0 24 24">
                            <g fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z" data-original="#000000" />
                                <path d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z" data-original="#000000" />
                                <path d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z" data-original="#000000" />
                            </g>
                        </svg>
                        <h3 className="text-gray-800 text-xl font-bold mb-2">Performance</h3>
                        <p className="text-sm text-gray-600">Experience blazing-fast performance with our product.</p>
                        <a href="javascript:void(0);" className="text-[#537AF6] font-bold inline-block text-sm hover:underline mt-4">Learn more</a>
                    </div>
                </div>
            </div>
            {/* banner */}
            <div className="grid md:grid-cols-3 gap-6 min-h-[164px] py-8 my-8 p-16 bg-gradient-to-r from-[#537AF6] to-blue-300 font-sans overflow-hidden">
                <div className="md:col-span-2">
                    <h1 className="text-3xl font-bold text-white">Welcome to ReadymadeUI!</h1>
                    <p className="text-base text-gray-200 mt-4">Best tailwind css readymade UI plateform</p>

                    <button type="button"
                        className="py-3 px-6 text-sm font-semibold bg-white text-[#537AF6] hover:bg-slate-100 rounded-md mt-8">Get
                        Started</button>
                </div>

                <div className="relative max-md:hidden">
                    <img src="https://readymadeui.com/readymadeui_banner2.webp" alt="Banner Image"
                        className="w-full right-4 top-[-13px] md:absolute skew-x-[-16deg] rotate-2 object-cover" />
                </div>
            </div>
            {/* price */}
            <div class="font-Inter">
                <div class="max-w-5xl mx-auto">
                    <div class="text-center">
                        <h2 class="text-gray-800 text-4xl font-bold mb-4"><span className="text-[#537AF6]">Sharify</span> Pricing</h2>
                        <p class="text-sm text-gray-500">Change your plant according your needs</p>
                    </div>

                    <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-12 max-sm:max-w-sm max-sm:mx-auto">
                        <div class="border rounded-md p-6">
                            <h3 class="text-gray-800 text-xl font-semibold mb-2">Starter</h3>
                            <p class="text-sm text-gray-500">For Individuals and Small Teams</p>

                            <div class="mt-6">
                                <h3 class="text-gray-800 text-2xl font-semibold">$10 <sub class="text-gray-500 text-sm font-medium">per month</sub></h3>
                            </div>

                            <div class="mt-6">
                                <h4 class="text-gray-800 text-xl font-semibold mb-2">Include</h4>
                                <p class="text-sm text-gray-500">Everything you get in this plan</p>

                                <ul class="mt-6 space-y-4">
                                    <li class="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" class="mr-3 fill-green-500" viewBox="0 0 24 24">
                                            <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                        </svg>
                                        50 Page Unlock
                                    </li>
                                    <li class="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" class="mr-3 fill-green-500" viewBox="0 0 24 24">
                                            <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                        </svg>
                                        10 GB Storage
                                    </li>
                                    <li class="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" class="mr-3 fill-green-500" viewBox="0 0 24 24">
                                            <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                        </svg>
                                        6 Team Members
                                    </li>
                                    <li class="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" class="mr-3 fill-green-500" viewBox="0 0 24 24">
                                            <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                        </svg>
                                        Unlimited Book Mark
                                    </li>
                                    <li class="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" class="mr-3 fill-green-500" viewBox="0 0 24 24">
                                            <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                        </svg>
                                        Unlimited basic feature
                                    </li>
                                </ul>

                                <button type="button" class="w-full mt-6 px-5 py-2.5 text-sm text-white bg-[#537AF6] hover:bg-[#537AF6] rounded-md">Buy now</button>
                            </div>
                        </div>

                        <div class="border rounded-md p-6">
                            <h3 class="text-gray-800 text-xl font-semibold mb-2 flex items-center">Professional <span class="px-2 py-1 text-xs font-semibold text-white bg-[#537AF6] rounded-md ml-3">Best Deal</span></h3>
                            <p class="text-sm text-gray-500">For Individuals and Largest Teams</p>

                            <div class="mt-6">
                                <h3 class="text-gray-800 text-2xl font-semibold">$20 <sub class="text-gray-500 text-sm font-medium">per month</sub></h3>
                            </div>

                            <div class="mt-6">
                                <h4 class="text-gray-800 text-xl font-semibold mb-2">Include</h4>
                                <p class="text-sm text-gray-500">Everything you get in this plan</p>

                                <ul class="mt-6 space-y-4">
                                    <li class="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" class="mr-3 fill-green-500" viewBox="0 0 24 24">
                                            <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                        </svg>
                                        100 Page Unlock
                                    </li>
                                    <li class="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" class="mr-3 fill-green-500" viewBox="0 0 24 24">
                                            <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                        </svg>
                                        20 GB Storage
                                    </li>
                                    <li class="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" class="mr-3 fill-green-500" viewBox="0 0 24 24">
                                            <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                        </svg>
                                        8 Team Members
                                    </li>
                                    <li class="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" class="mr-3 fill-green-500" viewBox="0 0 24 24">
                                            <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                        </svg>
                                        Unlimited Book Mark
                                    </li>
                                    <li class="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" class="mr-3 fill-green-500" viewBox="0 0 24 24">
                                            <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                        </svg>
                                        Unlimited basic feature
                                    </li>
                                </ul>

                                <button type="button" class="w-full mt-6 px-5 py-2.5 text-sm text-white bg-[#537AF6] hover:bg-[#537AF6] rounded-md">Buy now</button>
                            </div>
                        </div>

                        <div class="border rounded-md p-6">
                            <h3 class="text-gray-800 text-xl font-semibold mb-2">Business</h3>
                            <p class="text-sm text-gray-500">For Multiples and Largest Teams</p>

                            <div class="mt-6">
                                <h3 class="text-gray-800 text-2xl font-semibold">$100 <sub class="text-gray-500 text-sm font-medium">per month</sub></h3>
                            </div>

                            <div class="mt-6">
                                <h4 class="text-gray-800 text-xl font-semibold mb-2">Include</h4>
                                <p class="text-sm text-gray-500">Everything you get in this plan</p>

                                <ul class="mt-6 space-y-4">
                                    <li class="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" class="mr-3 fill-green-500" viewBox="0 0 24 24">
                                            <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                        </svg>
                                        300 Page Unlock
                                    </li>
                                    <li class="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" class="mr-3 fill-green-500" viewBox="0 0 24 24">
                                            <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                        </svg>
                                        100 GB Storage
                                    </li>
                                    <li class="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" class="mr-3 fill-green-500" viewBox="0 0 24 24">
                                            <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                        </svg>
                                        100 Team Members
                                    </li>
                                    <li class="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" class="mr-3 fill-green-500" viewBox="0 0 24 24">
                                            <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                        </svg>
                                        Unlimited Book Mark
                                    </li>
                                    <li class="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" class="mr-3 fill-green-500" viewBox="0 0 24 24">
                                            <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                        </svg>
                                        Unlimited basic feature
                                    </li>
                                </ul>

                                <button type="button" class="w-full mt-6 px-5 py-2.5 text-sm text-white bg-[#537AF6] hover:bg-[#537AF6] rounded-md">Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* baner2 */}
            <div class="flex gap-4 max-sm:flex-col my-8 items-center justify-center text-center bg-[#537AF6] text-white px-6 py-3.5  font-[sans-serif]">
                <p class="text-base">Limited Time Offer: Get 20% Off!</p>

                <div class="flex gap-2">
                    <button type="button" class="bg-white text-[#537AF6] py-2.5 px-5 rounded text-sm hover:underline">
                        Learn More
                    </button>
                </div>
            </div>
            {/* team */}
            <div class="font-Inter my-8">
                <div class="lg:max-w-5xl max-w-3xl mx-auto">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-gray-800 text-3xl font-extrabold">Meet our team</h2>
                        <p class="text-gray-800 text-sm mt-4 leading-relaxed">Meet our team of professionals to serve you.</p>
                    </div>

                    <div class="grid lg:grid-cols-4 md:grid-cols-3 gap-6 max-md:justify-center mt-12">
                        <div class="border rounded-lg overflow-hidden">
                            <img src="https://readymadeui.com/team-1.webp" class="w-full h-56 object-cover" />

                            <div class="p-4">
                                <h4 class="text-gray-800 text-base font-bold">John Doe</h4>
                                <p class="text-gray-800 text-xs mt-1">Software Engineer</p>

                                <div class="space-x-4 mt-4">
                                    <button type="button"
                                        class="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#537AF6] hover:bg-blue-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
                                            <path
                                                d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                                data-original="#010002" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        class="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
                                            <path
                                                d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                                data-original="#03a9f4" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        class="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
                                            <path
                                                d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                                data-original="#0077b5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="border rounded-lg overflow-hidden">
                            <img src="https://readymadeui.com/team-2.webp" class="w-full h-56 object-cover" />

                            <div class="p-4">
                                <h4 class="text-gray-800 text-base font-bold">Mark Adair</h4>
                                <p class="text-gray-800 text-xs mt-1">Software Engineer</p>

                                <div class="space-x-4 mt-4">
                                    <button type="button"
                                        class="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#537AF6] hover:bg-blue-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
                                            <path
                                                d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                                data-original="#010002" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        class="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
                                            <path
                                                d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                                data-original="#03a9f4" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        class="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
                                            <path
                                                d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                                data-original="#0077b5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="border rounded-lg overflow-hidden">
                            <img src="https://readymadeui.com/team-3.webp" class="w-full h-56 object-cover" />

                            <div class="p-4">
                                <h4 class="text-gray-800 text-base font-bold">Simon Konecki</h4>
                                <p class="text-gray-800 text-xs mt-1">Web Designer</p>

                                <div class="space-x-4 mt-4">
                                    <button type="button"
                                        class="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#537AF6] hover:bg-blue-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
                                            <path
                                                d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                                data-original="#010002" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        class="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
                                            <path
                                                d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                                data-original="#03a9f4" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        class="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
                                            <path
                                                d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                                data-original="#0077b5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="border rounded-lg overflow-hidden">
                            <img src="https://readymadeui.com/team-4.webp" class="w-full h-56 object-cover" />

                            <div class="p-4">
                                <h4 class="text-gray-800 text-base font-bold">Sophia</h4>
                                <p class="text-gray-800 text-xs mt-1">Software Developer</p>

                                <div class="space-x-4 mt-4">
                                    <button type="button"
                                        class="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#537AF6] hover:bg-blue-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
                                            <path
                                                d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                                data-original="#010002" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        class="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
                                            <path
                                                d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                                data-original="#03a9f4" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        class="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
                                            <path
                                                d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                                data-original="#0077b5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact */}
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-gray-800 text-3xl font-extrabold">Contact us</h2>
            </div>
            <div class="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif]">

                <div>
                    <h1 class="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
                    <p class="text-sm text-gray-500 mt-4">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>

                    <div class="mt-12">
                        <h2 class="text-gray-800 text-base font-bold">Email</h2>
                        <ul class="mt-4">
                            <li class="flex items-center">
                                <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                        viewBox="0 0 479.058 479.058">
                                        <path
                                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                            data-original="#000000" />
                                    </svg>
                                </div>
                                <a href="javascript:void(0)" class="text-[#007bff] text-sm ml-4">
                                    <small class="block">Mail</small>
                                    <strong>info@example.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-12">
                        <h2 class="text-gray-800 text-base font-bold">Socials</h2>

                        <ul class="flex mt-4 space-x-4">
                            <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                                            data-original="#000000" />
                                    </svg>
                                </a>
                            </li>
                            <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                        viewBox="0 0 511 512">
                                        <path
                                            d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                                            data-original="#000000" />
                                    </svg>
                                </a>
                            </li>
                            <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                                        </path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <form class="ml-auto space-y-4">
                    <input type='text' placeholder='Name'
                        class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                    <input type='email' placeholder='Email'
                        class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                    <input type='text' placeholder='Subject'
                        class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                    <textarea placeholder='Message' rows="6"
                        class="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"></textarea>
                    <button type='button'
                        class="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6">Send</button>
                </form>
            </div>
        </div>
    )
}
