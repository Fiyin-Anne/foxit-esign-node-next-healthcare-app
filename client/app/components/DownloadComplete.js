'use client'

import Link from 'next/link';

const DownloadComplete = () => {
    return (
        <div className='h-[calc(100vh-55px)] bg-gray-200 w-full flex justify-center items-center'>
            <div className="card w-96 h-64 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Downloading!</h2>
                    <p>Download in progress...</p>
                    <div className="card-actions justify-evenly">
                    <Link 
                        href='/'
                        className="btn btn-primary"
                    >Go Home</Link>
                    <Link
                        href='/patients/request-record'
                        className="btn btn-ghost"
                    >Try Again</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadComplete;