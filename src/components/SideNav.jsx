import React from 'react'

export default function SideNav() {
    return (
        <nav class="bg-white shadow-xl h-screen w-[20vw] py-6 px-4 font-Inter overflow-auto">
            <div class="relative flex flex-col h-full">
                <div class="flex flex-wrap items-center cursor-pointer relative">
                    {/* <img
                        src="https://readymadeui.com/readymadeui-short.svg"
                        class="w-10 h-10"
                    /> */}

                    <div class="ml-4">
                        <p class="text-2xl text-blue-500 font-semibold capitalize">
                            Sharify
                        </p>
                        {/* <p class="text-xs text-gray-400 mt-0.5">anayabytes</p> */}
                    </div>
                </div>

                <hr class="my-6" />

                <div>
                    <h4 class="text-sm text-gray-400 mb-4">Insights</h4>
                    <ul class="space-y-4 px-2 flex-1">
                        <li>
                            <a
                                href="/dash"
                                class="text-[#333] text-sm flex items-center hover:text-blue-600 transition-all"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    class="w-4 h-4 mr-4"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        d="M197.332 170.668h-160C16.746 170.668 0 153.922 0 133.332v-96C0 16.746 16.746 0 37.332 0h160c20.59 0 37.336 16.746 37.336 37.332v96c0 20.59-16.746 37.336-37.336 37.336zM37.332 32A5.336 5.336 0 0 0 32 37.332v96a5.337 5.337 0 0 0 5.332 5.336h160a5.338 5.338 0 0 0 5.336-5.336v-96A5.337 5.337 0 0 0 197.332 32zm160 480h-160C16.746 512 0 495.254 0 474.668v-224c0-20.59 16.746-37.336 37.332-37.336h160c20.59 0 37.336 16.746 37.336 37.336v224c0 20.586-16.746 37.332-37.336 37.332zm-160-266.668A5.337 5.337 0 0 0 32 250.668v224A5.336 5.336 0 0 0 37.332 480h160a5.337 5.337 0 0 0 5.336-5.332v-224a5.338 5.338 0 0 0-5.336-5.336zM474.668 512h-160c-20.59 0-37.336-16.746-37.336-37.332v-96c0-20.59 16.746-37.336 37.336-37.336h160c20.586 0 37.332 16.746 37.332 37.336v96C512 495.254 495.254 512 474.668 512zm-160-138.668a5.338 5.338 0 0 0-5.336 5.336v96a5.337 5.337 0 0 0 5.336 5.332h160a5.336 5.336 0 0 0 5.332-5.332v-96a5.337 5.337 0 0 0-5.332-5.336zm160-74.664h-160c-20.59 0-37.336-16.746-37.336-37.336v-224C277.332 16.746 294.078 0 314.668 0h160C495.254 0 512 16.746 512 37.332v224c0 20.59-16.746 37.336-37.332 37.336zM314.668 32a5.337 5.337 0 0 0-5.336 5.332v224a5.338 5.338 0 0 0 5.336 5.336h160a5.337 5.337 0 0 0 5.332-5.336v-224A5.336 5.336 0 0 0 474.668 32zm0 0"
                                        data-original="#000000"
                                    />
                                </svg>
                                <span>Dashboard</span>
                            </a>
                        </li>
                    </ul>
                </div>





                <div class="flex flex-wrap items-center cursor-pointer py-2">
                    <img
                        src="https://readymadeui.com/team-2.webp"
                        class="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <div class="ml-4">
                        <p class="text-sm text-[#333] font-semibold">
                            Admin
                        </p>
                        <p class="text-xs text-gray-400 mt-0.5">
                            Silver Plan
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    )
}
