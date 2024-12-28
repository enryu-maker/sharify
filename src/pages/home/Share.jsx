import React, { useState } from 'react'
import CryptoJS from 'crypto-js'

function FileBlockchainWithSignature() {
    const [file, setFile] = useState(null)
    const [progress, setProgress] = useState(0)
    const [current, setCurrent] = useState(0)
    const [blockchain, setBlockchain] = useState([])
    const [email, setEmail] = useState("")
    const [privateKey, setPrivateKey] = useState('')
    const [preview, setPreview] = useState(null) // State for preview
    const chunkSize = 1024 // Size of each chunk in bytes

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0]
        setFile(selectedFile)

        // Create a preview for images or videos
        if (selectedFile) {
            const fileReader = new FileReader()

            if (selectedFile.type.startsWith('image')) {
                fileReader.onloadend = () => {
                    setPreview(fileReader.result)
                }
                fileReader.readAsDataURL(selectedFile)
            } else if (selectedFile.type.startsWith('video')) {
                setPreview(URL.createObjectURL(selectedFile)) // For video preview
            }
        }
    }

    const handlePrivateKeyChange = (event) => {
        setPrivateKey(event.target.value)
    }

    // sender code for processing file ie converting to blockchain
    const processFile = (file, privateKey) => {
        if (!file || !privateKey) {
            alert('Please upload a file and provide a private key.')
            return
        }

        const reader = new FileReader()
        let offset = 0
        let chunkIndex = 0
        let previousHash = null
        const processedBlockchain = []

        reader.onload = () => {
            const byteArray = new Uint8Array(reader.result)
            const chunkHash = CryptoJS.SHA256(byteArray).toString(CryptoJS.enc.Hex)
            const signature = CryptoJS.HmacSHA256(chunkHash, privateKey).toString(CryptoJS.enc.Hex)

            // Generate a unique name for the block
            const blockName = `${file.name}_chunk`

            const block = {
                index: chunkIndex,
                hash: chunkHash,
                previousHash: previousHash || '0',
                signature,
                name: blockName, // Add the unique name to the block
            }

            processedBlockchain.push(block)
            previousHash = chunkHash
            offset += chunkSize
            chunkIndex++

            if (offset < file.size) {
                readNextChunk()
            } else {
                alert('File processing complete.')
                setBlockchain(processedBlockchain)
                console.log(processedBlockchain)
                setCurrent(1)
            }
        }

        const readNextChunk = () => {
            setProgress((offset / file.size) * 100)
            const slice = file.slice(offset, offset + chunkSize)
            reader.readAsArrayBuffer(slice)
        }

        readNextChunk()
    }


    const verifyBlockchain = () => {
        for (const block of blockchain) {
            const computedSignature = CryptoJS.HmacSHA256(block.hash, privateKey).toString(CryptoJS.enc.Hex)
            if (computedSignature !== block.signature) {
                alert(`Block ${block.index} verification failed!`)
                return
            }
        }
        alert('Blockchain verification successful!')
    }

    return (
        <div className="font-Inter">
            <div className="w-[100vw] flex justify-center h-[100vh]">
                <div className="inset-0 p-4 flex flex-wrap justify-center items-center w-[80vw] h-full">
                    <div className="w-full max-w-lg bg-white rounded-lg p-6 relative">
                        <div className="flex items-center pb-3 border-b border-gray-200">
                            <div className="flex-1">
                                <h3 className="text-gray-800 text-xl font-bold">Share File</h3>
                                <p className="text-gray-600 text-xs mt-1">Upload file to share</p>
                            </div>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
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
                        {
                            current === 0 ?
                                <>
                                    <div className="rounded-lg border-2 border-gray-200 border-dashed mt-6">
                                        <div className="p-4 min-h-[180px] flex flex-col items-center justify-center text-center cursor-pointer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-10 mb-4 fill-gray-600 inline-block"
                                                viewBox="0 0 32 32"
                                            >
                                                <path
                                                    d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                                                />
                                                <path
                                                    d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                                                />
                                            </svg>

                                            <h4 className="text-sm text-gray-600">
                                                Drag & Drop or{' '}
                                                <label htmlFor="chooseFile" className="text-blue-600 cursor-pointer">
                                                    Choose file
                                                </label>{' '}
                                                to upload
                                            </h4>
                                            <input type="file" id="chooseFile" className="hidden" onChange={handleFileChange} />
                                        </div>
                                    </div>

                                    {/* Preview Section */}
                                    {preview && (
                                        <div className="mt-6 self-center w-full flex justify-center">
                                            {file.type.startsWith('image') ? (
                                                <img src={preview} alt="File Preview" className="w-[100px] rounded-lg" />
                                            ) : file.type.startsWith('video') ? (
                                                <video controls className="w-full rounded-lg">
                                                    <source src={preview} type={file.type} />
                                                </video>
                                            ) : null}
                                        </div>
                                    )}

                                    <div className="flex flex-col bg-gray-50 p-4 rounded-lg mt-4">
                                        <progress className="w-full text-blue-500 rounded-lg" value={progress} max={100} />
                                    </div>

                                    <div className="border-t border-gray-200 pt-6 flex justify-between gap-4 mt-6">
                                        <button
                                            type="button"
                                            className="w-full px-4 py-2 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                processFile(file, "Akif@1432")

                                            }}
                                            className="w-full px-4 py-2 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="mt-6">
                                        <h4 className="text-gray-800 text-lg font-bold">Share file with</h4>
                                        <p className="text-gray-600 text-xs mt-1">Enter a reciver email to share the file.</p>
                                        <input
                                            type="email"
                                            className="w-full p-2 border-2 border-gray-200 mt-4 rounded-lg"
                                            placeholder="Enter reciever email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value)
                                            }}
                                        />
                                    </div>

                                    <div className="border-t border-gray-200 pt-6 flex justify-between gap-4 mt-6">
                                        <button
                                            type="button"
                                            className="w-full px-4 py-2 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
                                            onClick={() => setCurrent(0)}
                                        >
                                            back
                                        </button>
                                        <button
                                            type="button"
                                            className="w-full px-4 py-2 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                                        // onClick={handleShareBlockchain}
                                        >
                                            Share Blockchain
                                        </button>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileBlockchainWithSignature
