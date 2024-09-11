import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
export default function Login() {
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [qr, setQR] = useState('')

    const [data, setData] = useState({
        username: '',
        password: '',
        login_type: 4,
        otp: 0
    })

    const userLogin = async () => {
        setLoading(true)
        await axios
            .post('http://127.0.0.1:8000/v1/auth/login', data, {
                responseType: 'blob'
            })
            .then((res) => {
                console.log(res.data)
                setQR(URL.createObjectURL(res?.data))
                setLoading(false)
                setShow(true)
            })
            .catch((err) => {
                console.log(err.data)
                setLoading(false)
            })
    }
    const verifyLogin = async () => {
        setLoading(true)
        await axios
            .post('http://127.0.0.1:8000/v1/auth/verify', data)
            .then((res) => {
                if (res.status === 201) {
                    navigate('/dash')
                }
            })
            .catch((err) => {
                console.log(err.data)
                setLoading(false)
            })
    }
    return (
        <>
            <Header />
            <div className="font-Inter">
                {show ? (
                    <div class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto ">
                        <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                            <div class="flex items-center pb-3 border-b border-gray-300">
                                <h3 class="text-gray-800 text-xl font-bold flex-1">
                                    Two factor Authentication (2FA)
                                </h3>
                            </div>

                            <div class="my-6 flex justify-center items-center flex-col">
                                <h1 className=" font-bold text-[#537AF6] border-b-2 w-full text-left pb-1">
                                    Configuring Google Authenticator or Authy
                                </h1>
                                <p className="text-sm py-1">
                                    1. Install Google Authenticator (IOS -
                                    Android) or Authy (IOS - Android). <br /> 2.
                                    In the authenticator app, select "+" icon.{' '}
                                    <br /> 3. Select "Scan a barcode (or QR
                                    code)" and use the phone's camera to scan
                                    this barcode.
                                </p>
                                <h1 className=" font-bold text-[#537AF6] border-b-2 pb-1 w-full text-left">
                                    Scan QR code
                                </h1>
                                <img src={qr} className="h-[200px] w-[200px]" />
                                <h1 className=" font-bold text-[#537AF6] border-b-2 pb-1 w-full text-left">
                                    Verify Code
                                </h1>
                                <p className="text-sm py-1 text-left w-full">
                                    Please verify the authentication code:
                                </p>
                                <input
                                    type="number"
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            otp: e.target.value
                                        })
                                    }}
                                    minLength={6}
                                    maxLength={6}
                                    className="border-2 text-center self-start mt-2 h-[35px] w-[150px] tracking-[8px] px-2 "
                                />
                            </div>

                            <div class="border-t border-gray-300 pt-6 flex justify-end gap-4">
                                <button
                                    onClick={() => {
                                        verifyLogin()
                                    }}
                                    type="button"
                                    class="px-6 font-bold py-2 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-[#537AF6] hover:bg-blue-700 active:bg-[#537AF6]"
                                >
                                    Verify
                                </button>
                            </div>
                        </div>
                    </div>
                ) : null}
                <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
                    <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
                        <div className=" rounded-lg p-6 max-w-md  max-md:mx-auto">
                            <form className="space-y-4">
                                <div className="mb-8">
                                    <h3 className="text-gray-800 text-3xl font-extrabold">
                                        Sign in
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                                        Sign in to your account and explore a
                                        world of possibilities. Your journey
                                        begins here.
                                    </p>
                                </div>

                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">
                                        User name
                                    </label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="username"
                                            type="text"
                                            required
                                            onChange={(e) => {
                                                setData({
                                                    ...data,
                                                    username: e.target.value
                                                })
                                            }}
                                            className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-[#537AF6]"
                                            placeholder="Enter user name"
                                        />
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#bbb"
                                            stroke="#bbb"
                                            className="w-[18px] h-[18px] absolute right-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                cx="10"
                                                cy="7"
                                                r="6"
                                                data-original="#000000"
                                            ></circle>
                                            <path
                                                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                                                data-original="#000000"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">
                                        Password
                                    </label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="password"
                                            type="password"
                                            required
                                            onChange={(e) => {
                                                setData({
                                                    ...data,
                                                    password: e.target.value
                                                })
                                            }}
                                            className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-[#537AF6]"
                                            placeholder="Enter password"
                                        />
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#bbb"
                                            stroke="#bbb"
                                            className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                                            viewBox="0 0 128 128"
                                        >
                                            <path
                                                d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                                                data-original="#000000"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 shrink-0 text-[#537AF6] focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <label
                                            for="remember-me"
                                            className="ml-3 block text-sm text-gray-800"
                                        >
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        <a
                                            href="jajvascript:void(0);"
                                            className="text-[#537AF6] hover:underline font-semibold"
                                        >
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>

                                <div className="!mt-8">
                                    <button
                                        disabled={loading}
                                        onClick={() => {
                                            userLogin()
                                        }}
                                        type="button"
                                        className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-[#537AF6] hover:bg-blue-700 focus:outline-none"
                                    >
                                        Log in
                                    </button>
                                </div>

                                <p className="text-sm !mt-8 text-center text-gray-800">
                                    Don't have an account{' '}
                                    <a
                                        href="/register"
                                        className="text-[#537AF6] font-semibold hover:underline ml-1 whitespace-nowrap"
                                    >
                                        Register here
                                    </a>
                                </p>
                            </form>
                        </div>
                        <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
                            <img
                                src="https://readymadeui.com/login-image.webp"
                                className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
                                alt="Dining Experience"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
