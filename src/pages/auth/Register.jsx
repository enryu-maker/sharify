import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
export default function Register() {
    const [data, setData] = useState({
        name: '',
        username: '',
        password: '',
        email: '',
        mobile_number: '',
        login_method: 4
    })
    const [loading, setLoading] = useState(false)
    const userRegister = async () => {
        setLoading(true)
        await axios
            .post('http://127.0.0.1:8000/v1/auth/register', data)
            .then((res) => {
                alert(res?.data?.message)
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
                <div className="min-h-screen flex fle-col items-center justify-center p-6">
                    <div className="grid lg:grid-cols-2 items-center gap-6 max-w-7xl max-lg:max-w-xl w-full">
                        <form className="lg:max-w-md w-full">
                            <h3 className="text-gray-800 text-3xl font-extrabold mb-12">
                                Registration
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">
                                        Name
                                    </label>
                                    <input
                                        required
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                name: e.target.value
                                            })
                                        }}
                                        name="name"
                                        type="text"
                                        className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                                        placeholder="Enter name"
                                    />
                                </div>
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">
                                        Username
                                    </label>
                                    <input
                                        required
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                username: e.target.value
                                            })
                                        }}
                                        name="username"
                                        type="text"
                                        className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                                        placeholder="Enter username"
                                    />
                                </div>
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">
                                        Email
                                    </label>
                                    <input
                                        required
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                email: e.target.value
                                            })
                                        }}
                                        name="email"
                                        type="text"
                                        className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                                        placeholder="Enter email"
                                    />
                                </div>
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">
                                        Phone
                                    </label>
                                    <input
                                        required
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                mobile_number: e.target.value
                                            })
                                        }}
                                        name="mobile_number"
                                        type="text"
                                        className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                                        placeholder="Enter Mobile Number"
                                    />
                                </div>
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">
                                        Password
                                    </label>
                                    <input
                                        required
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                password: e.target.value
                                            })
                                        }}
                                        name="password"
                                        type="password"
                                        className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                                        placeholder="Enter password"
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <button
                                    onClick={() => {
                                        console.log(data)
                                        userRegister()
                                    }}
                                    type="button"
                                    className="py-4 px-8 text-sm font-semibold text-white tracking-wide bg-[#537AF6] hover:bg-blue-700 focus:outline-none"
                                >
                                    Create an account
                                </button>
                            </div>
                            <p className="text-sm text-gray-800 mt-6">
                                Already have an account?{' '}
                                <a
                                    href="/"
                                    className="text-[#537AF6] font-semibold hover:underline ml-1"
                                >
                                    Login here
                                </a>
                            </p>
                        </form>

                        <div className="h-full max-lg:mt-12">
                            <img
                                src="https://readymadeui.com/login-image.webp"
                                className="w-full h-full object-cover"
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
