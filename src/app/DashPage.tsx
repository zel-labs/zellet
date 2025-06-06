
import Image from "next/image";
import { useState,useEffect } from 'react'

export default function DashPage() {
    const [address, setAddress] =  useState<string|null>(null)
    useEffect(()=>{
        const address = localStorage.getItem('address')
        if (address!== null){
            setAddress(address)
        }
    },[])
    return(
        <>
        <div className='border-dashed  pl-3 pr-3 pt-2 pb-2  border-[#058fd5] border-[1px] rounded-lg text-xs absolute top-4 right-4'>
            <Image src="/img/wallet.png" alt="Wallet Address" width={25} height={24} className='float-left'/>
            <span className='float-left leading-[26px] ml-3 text-[16px] text-[#058fd5]'>{address}</span>
        </div>
        <div className="w-[90%] justify-center  bg-[#000000] rounded-lg m-auto mt-10 p-4 pt-10 relative">
            
            <div className='w-full justify-center'>
                <Image src="/img/center-logo.png" className="m-auto"  alt="Zellet" width={201} height={50}/>
            </div>
            <div className='w-full text-center text-2xl mt-3'>
                Let’s get started!
            </div>
            <div className='w-full text-center text-lg mt-3'>
                Add Zelonis (Zel) to your wallet to get started
            </div>
            <div className='w-full text-center text-lg mt-3'>
                <div className='w-[370px] text-center m-auto bg-[#017fec] text-[16px] pt-3 pb-3 rounded-lg'>Transfer ZEL</div>
            
                <div className='w-[370px] text-center m-auto bg-[#666666] text-[16px] pt-3 pb-3 rounded-lg mt-3'>Transfer ZEL</div>
            </div>
            
        </div>
        <div className="w-[90%] h-[300px] justify-center  bg-[#000000] rounded-lg m-auto mt-10 p-4 ">
            <div className='w-full text-center text-lg '>
                <div className='float-left'>
                    Last 5 Transactions
                </div>
                <div className='float-right'>
                    View All
                </div>
            </div>
             <div className='w-full text-center text-2xl mt-30 rounded-lg bg-[#1f1f1f] p-3'>
                No Transaction Found
            </div>
        </div>
        </>
    )
}