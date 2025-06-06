import Image from "next/image";

import dynamic from 'next/dynamic'
import { useState,useEffect } from 'react'

const DashPage = dynamic(() => import('./DashPage'))

export default function CreateSeed() {
  //const [createSeed, setCreateSeed] = useState(false)
  
  const [key1, setKey1] =  useState<string[]>([])
  const [encryptKey, setEncryptKey] =  useState<string|null>(null)
  const [oKey, setOkey] =  useState<string|null>(null)
  const [address, setAddress] =  useState<string|null>(null)
  const [dashPage, setDashPage] =useState(false)
 

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.zellet.org/createwallet')
      const json = await res.json()
      setKey1(json.mnemonic.split(' '))
      setOkey(json.mnemonic)
      setAddress(json.address)
      setEncryptKey(json.encryptKey)
    }

    fetchData()
  }, []) 
  const handleClick = () => {
    
    if (oKey !== null&&encryptKey !== null && address!== null){
      localStorage.setItem('seedPhrase', oKey)
      
      localStorage.setItem('encryptKey', encryptKey)
      localStorage.setItem('address', address)
      
      const pass = localStorage.getItem('tempPass')
      if (pass !== null){
        localStorage.setItem('encryptPass', pass)
      }
      
    }
    
    
    const el = document.getElementById('seed-continue')
    if (el) {
          el.style.display = 'none'
    }
    setDashPage(true)
  }
  return (
    <>
    <div className="bg-[#000000] w-[430px] h-[510px] self-center rounded-lg relative" id="seed-continue">
        <div className="w-full ">
          <Image src="/img/center-logo.png" className="ml-2 mt-2"  alt="Zellet" width={123} height={31}/>
        </div>
        <p className="w-full pl-10 text-center pr-10 mt-15 text-sm text-[#d38322]" >This phrase and encryptKey Combination is the ONLY way to recover your wallet. Do NOT share it with anyone! </p>
        <div className="w-full text-center grid-cols-3 grid place-content-center">
           {key1.map((key, index) => (
              <div  className="w-[120px] pt-2 pb-2 mb-4 rounded-lg  border-gray-400 border  mt-2  text-sm ml-2 relative" key ={index} >
                <span className="absolute top-1 left-1 text-xs text-[#4f4f4f]">{index+1}.</span>{key}
              </div>
            ))}
        </div>
        <div>
          <div className="text-xs ml-4 mt-2">Encrypt Key: <span className="tracking-[3px] ml-2 text-blue-400">{encryptKey}</span></div>
        </div>
        <div className="absolute bottom-0 mb-3 w-full">
          
          <div className="w-[374px] pt-2 pb-2 text-white m-auto text-center bg-[#545454] rounded-lg hover:bg-[#414141] cursor-pointer" onClick={handleClick}>
            Continue
          </div>
        </div>
    </div>
    {dashPage && <DashPage />} 
    </>
    //{createSeed && <SeedPhrase />}
  )
}
