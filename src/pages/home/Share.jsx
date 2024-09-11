import React, { useState } from 'react'
import CryptoJS from 'crypto-js'
import SideNav from '../../components/SideNav'

function FileBlockchainWithSignature() {
    const [file, setFile] = useState(null)
    const [privateKey, setPrivateKey] = useState('')
    const chunkSize = 1024 // Size of each chunk in bytes

    const handleFileChange = (event) => {
        setFile(event.target.files[0])
    }

    const handlePrivateKeyChange = (event) => {
        setPrivateKey(event.target.value)
    }

    const processFile = () => {
        if (!file || !privateKey) {
            alert('Please upload a file and provide a private key.')
            return
        }

        const reader = new FileReader()
        let offset = 0
        let chunk = 0
        let previousHash = null

        const blockchain = [] // Array to hold the blockchain

        reader.onload = () => {
            const byteArray = new Uint8Array(reader.result)
            const chunkData = Array.from(byteArray)
                .map((b) => b.toString(16).padStart(2, '0'))
                .join('')
            const chunkHash = CryptoJS.SHA256(chunkData).toString(
                CryptoJS.enc.Hex
            )

            // Simplified "signing" - in practice, use proper signing with a private key
            const signature = CryptoJS.HmacSHA256(
                chunkHash,
                privateKey
            ).toString(CryptoJS.enc.Hex)

            // Create block
            const block = {
                index: chunk,
                data: chunkData,
                hash: chunkHash,
                previousHash: previousHash || '0', // Genesis block has '0' as previous hash
                signature
            }

            // Add block to blockchain
            blockchain.push(block)

            // Log block details (for demonstration purposes)
            console.log(`Block ${chunk}:`, block)

            previousHash = chunkHash
            offset += chunkSize
            chunk++

            if (offset < file.size) {
                readNextChunk()
            } else {
                alert('File processing complete.')
                // Optionally: Send blockchain to server or store it
                console.log('Blockchain:', blockchain)
            }
        }

        const readNextChunk = () => {
            const slice = file.slice(offset, offset + chunkSize)
            reader.readAsArrayBuffer(slice)
        }

        readNextChunk()
    }

    const verifyBlockchain = () => {
        if (!file || !privateKey) {
            alert('Please upload a file and provide a private key.')
            return
        }

        // Normally you'd verify each block against a public key
        // Here, we'll just demonstrate verifying the signature with the provided private key
        const blockchain = [] // The blockchain should be the same as created in `processFile`

        for (const block of blockchain) {
            const { hash, signature } = block

            // Verify signature (simplified, should use proper public key and cryptographic methods)
            const computedSignature = CryptoJS.HmacSHA256(
                hash,
                privateKey
            ).toString(CryptoJS.enc.Hex)

            if (computedSignature !== signature) {
                alert(`Block ${block.index} verification failed!`)
                return
            }
        }

        alert('Blockchain verification successful!')
    }

    return (
        <div className="font-Inter">
            <div className="w-[100vw] flex justify-between h-[100vh]">
                <SideNav />
                <div class=" inset-0 p-4 flex flex-wrap justify-center items-center w-[80vw] h-full ">
                    <div class="w-full max-w-lg bg-white rounded-lg p-6 relative">
                        <div class="flex items-center pb-3 border-b border-gray-200">
                            <div class="flex-1">
                                <h3 class="text-gray-800 text-xl font-bold">
                                    Share File
                                </h3>
                                <p class="text-gray-600 text-xs mt-1">
                                    Upload file to share
                                </p>
                            </div>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                                viewBox="0 0 320.591 320.591"
                            >
                                <path
                                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                    data-original="#000000"
                                ></path>
                                <path
                                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                    data-original="#000000"
                                ></path>
                            </svg>
                        </div>

                        <div class="rounded-lg border-2 border-gray-200 border-dashed mt-6">
                            <div class="p-4 min-h-[180px] flex flex-col items-center justify-center text-center cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-10 mb-4 fill-gray-600 inline-block"
                                    viewBox="0 0 32 32"
                                >
                                    <path
                                        d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                                        data-original="#000000"
                                    />
                                    <path
                                        d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                                        data-original="#000000"
                                    />
                                </svg>

                                <h4 class="text-sm text-gray-600">
                                    Drag & Drop or{' '}
                                    <label
                                        for="chooseFile"
                                        class="text-blue-600 cursor-pointer"
                                    >
                                        Choose file
                                    </label>{' '}
                                    to upload
                                </h4>
                                <input
                                    type="file"
                                    id="chooseFile"
                                    class="hidden"
                                />
                            </div>
                        </div>

                        <div class="flex flex-col bg-gray-50 p-4 rounded-lg mt-4">
                            <div class="flex">
                                <p class="text-xs text-gray-600 flex-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        class="w-5 mr-2 fill-current inline-block"
                                    >
                                        <path
                                            d="m433.798 106.268-96.423-91.222C327.119 5.343 313.695 0 299.577 0H116C85.673 0 61 24.673 61 55v402c0 30.327 24.673 55 55 55h280c30.327 0 55-24.673 55-55V146.222c0-15.049-6.27-29.612-17.202-39.954zM404.661 120H330c-2.757 0-5-2.243-5-5V44.636zM396 482H116c-13.785 0-25-11.215-25-25V55c0-13.785 11.215-25 25-25h179v85c0 19.299 15.701 35 35 35h91v307c0 13.785-11.215 25-25 25z"
                                            data-original="#000000"
                                        />
                                        <path
                                            d="M363 200H143c-8.284 0-15 6.716-15 15s6.716 15 15 15h220c8.284 0 15-6.716 15-15s-6.716-15-15-15zm0 80H143c-8.284 0-15 6.716-15 15s6.716 15 15 15h220c8.284 0 15-6.716 15-15s-6.716-15-15-15zm-147.28 80H143c-8.284 0-15 6.716-15 15s6.716 15 15 15h72.72c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                                            data-original="#000000"
                                        />
                                    </svg>
                                    document.file{' '}
                                    <span class="ml-2">1.5 mb</span>
                                </p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-3 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                                    viewBox="0 0 320.591 320.591"
                                >
                                    <path
                                        d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                        data-original="#000000"
                                    ></path>
                                    <path
                                        d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                        data-original="#000000"
                                    ></path>
                                </svg>
                            </div>

                            <div class="bg-gray-300 rounded-full w-full h-2 my-2">
                                <div class="w-1/3 h-full rounded-full bg-blue-600 flex items-center relative">
                                    <span class="absolute text-xs right-0 bg-white w-2 h-2 rounded-full"></span>
                                </div>
                            </div>

                            <p class="text-xs text-gray-600 flex-1">35% done</p>
                        </div>

                        <div class="border-t border-gray-200 pt-6 flex justify-between gap-4 mt-6">
                            <button
                                type="button"
                                class="w-full px-4 py-2 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                class="w-full px-4 py-2 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                            >
                                Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileBlockchainWithSignature
