import axios from 'axios'
import React, { useState, useEffect } from 'react'
import SideNav from '../../components/SideNav'

export default function Dash() {
    return (
        <div className="font-SUSE">
            <div className="w-[100vw] flex justify-between h-[100vh]">
                <SideNav />
                <div className="w-[80vw] h-[100vh] ">
                    <h1 className="text-3xl font-bold text-center">
                        Dashboard coming soon
                    </h1>
                </div>
            </div>
        </div>
    )
}
