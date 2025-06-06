'use client'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import Image from "next/image";
import './styles/style.css';


const HomePage = dynamic(() => import('./HomePage'))
const LoginPage = dynamic(() => import('./Login'))

export default function Home() {
  
  const [homePage, setHomePage] =useState(true)
  const [loginPage, setLoginPage] =useState(false)
  
  useEffect(() => {
    const seedPhrase = localStorage.getItem('seedPhrase')
    const encryptKey = localStorage.getItem('encryptKey')
    const encryptPass = localStorage.getItem('encryptPass')
    if(seedPhrase !== null && encryptKey !== null && encryptPass !== null){
      setHomePage(false)
      setLoginPage(true)
    }
  },[])
  return (
    <>
    <div className="w-screen bg-[#1f1f1f] h-screen p-4">
      <Image src="/img/top-logo.png" alt="Zellet" width={127} height={30} />
        {homePage && <HomePage />}  
        
        {loginPage && <LoginPage />}
      
    </div>
    </>
  );
}
