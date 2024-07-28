import React from 'react'

export default function Footer() {
    return (
        <footer class="bg-[#537AF6] text-white py-6 px-16 font-Inter tracking-wide">
            <div class="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
                <p class="text-[15px] leading-loose">© 2023<a href='https://readymadeui.com/' target='_blank'
                    class="hover:underline mx-1">nerdtech</a>All Rights Reserved.</p>

                <ul class="flex space-x-6 gap-y-2 max-lg:justify-center flex-wrap">
                    <li><a href="javascript:void(0)" class="text-[15px] text-white">Terms of Service</a></li>
                    <li><a href="javascript:void(0)" class="text-[15px] text-white">Privacy Policy</a></li>
                    <li><a href="javascript:void(0)" class="text-[15px] text-white">Contact</a></li>
                </ul>
            </div>
        </footer>
    )
}
