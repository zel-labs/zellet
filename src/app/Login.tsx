import dynamic from 'next/dynamic'
import Image from "next/image";
import { useState,useRef, useEffect } from 'react'
const HomePage = dynamic(() => import('./HomePage'))
const DashPage = dynamic(() => import('./DashPage'))
export default function LoginPage() {
    const [homePage, setHomePage] =useState(false)
    const [dashPage, setDashPage] =useState(false)
    const passRef = useRef<HTMLInputElement>(null)
    
    

    function OpenHome(){
        const el = document.getElementById('login-page')
        if (el) {
            el.style.display = 'none'
        }
        setHomePage(true)
    }
    function login(){
        const encryptPass = localStorage.getItem('encryptPass')
        const pass = passRef.current?.value
        if (pass != encryptPass){
            alert("Incorrect Passowrd")
            return
        }
        const el = document.getElementById('login-page')
        if (el) {
            el.style.display = 'none'
        }
        setDashPage(true)
    }
    return (
        <>
        <div className="w-full h-full flex justify-center align-middle" id="login-page">
            <div className="bg-[#000000] w-[430px] h-[510px] self-center rounded-lg relative" id="loginPage">
                <div className="mt-30 w-full text-center mb-10 ">
                <Image src="/img/center-logo.png" className="m-auto"  alt="Zellet" width={201} height={50}/>
                </div>
                <p className="w-full pl-10 text-center pr-10" >Please enter your wallet password </p>
                <input type="password" name="pass" placeholder="Password" ref={passRef} className="w-[376px] h-[45px] mb-4 rounded-lg  border-gray-400 border pl-4 mt-4 ml-7" id="pass" />
                
                <div className="absolute bottom-0 mb-3 w-full">
                <div className="w-[374px] pt-2 pb-2 mb-3 text-white m-auto text-center bg-[#017fec] rounded-lg hover:bg-[#0153ec] cursor-pointer" onClick={login} >
                    Login
                </div>
                <div className="w-[374px] pt-2 pb-2 text-white m-auto text-center bg-[#545454] rounded-lg hover:bg-[#414141] cursor-pointer" onClick={OpenHome}>
                    Change Wallet
                </div>
                </div>
            </div>
            
        </div>
        {homePage && <HomePage />} 
        {dashPage && <DashPage />} 
        </>
    )
}