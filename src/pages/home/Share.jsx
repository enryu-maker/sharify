import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function FileBlockchainWithSignature() {
    const [file, setFile] = useState(null);
    const [privateKey, setPrivateKey] = useState('');
    const chunkSize = 1024; // Size of each chunk in bytes

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handlePrivateKeyChange = (event) => {
        setPrivateKey(event.target.value);
    };

    const processFile = () => {
        if (!file || !privateKey) {
            alert('Please upload a file and provide a private key.');
            return;
        }

        const reader = new FileReader();
        let offset = 0;
        let chunk = 0;
        let previousHash = null;

        const blockchain = []; // Array to hold the blockchain

        reader.onload = () => {
            const byteArray = new Uint8Array(reader.result);
            const chunkData = Array.from(byteArray).map(b => b.toString(16).padStart(2, '0')).join('');
            const chunkHash = CryptoJS.SHA256(chunkData).toString(CryptoJS.enc.Hex);

            // Simplified "signing" - in practice, use proper signing with a private key
            const signature = CryptoJS.HmacSHA256(chunkHash, privateKey).toString(CryptoJS.enc.Hex);

            // Create block
            const block = {
                index: chunk,
                data: chunkData,
                hash: chunkHash,
                previousHash: previousHash || '0', // Genesis block has '0' as previous hash
                signature
            };

            // Add block to blockchain
            blockchain.push(block);

            // Log block details (for demonstration purposes)
            console.log(`Block ${chunk}:`, block);

            previousHash = chunkHash;
            offset += chunkSize;
            chunk++;

            if (offset < file.size) {
                readNextChunk();
            } else {
                alert('File processing complete.');
                // Optionally: Send blockchain to server or store it
                console.log('Blockchain:', blockchain);
            }
        };

        const readNextChunk = () => {
            const slice = file.slice(offset, offset + chunkSize);
            reader.readAsArrayBuffer(slice);
        };

        readNextChunk();
    };

    const verifyBlockchain = () => {
        if (!file || !privateKey) {
            alert('Please upload a file and provide a private key.');
            return;
        }

        // Normally you'd verify each block against a public key
        // Here, we'll just demonstrate verifying the signature with the provided private key
        const blockchain = []; // The blockchain should be the same as created in `processFile`

        for (const block of blockchain) {
            const { hash, signature } = block;

            // Verify signature (simplified, should use proper public key and cryptographic methods)
            const computedSignature = CryptoJS.HmacSHA256(hash, privateKey).toString(CryptoJS.enc.Hex);

            if (computedSignature !== signature) {
                alert(`Block ${block.index} verification failed!`);
                return;
            }
        }

        alert('Blockchain verification successful!');
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <input type="text" placeholder="Private Key" onChange={handlePrivateKeyChange} />
            <button onClick={processFile}>Process File</button>
            <button onClick={verifyBlockchain}>Verify Blockchain</button>
        </div>
    );
}

export default FileBlockchainWithSignature;
