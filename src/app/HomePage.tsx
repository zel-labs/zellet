
import dynamic from 'next/dynamic'
import Image from "next/image";
import { useState } from 'react'

const CreatePassword = dynamic(() => import('./CreatePassword'))
export default function HomePage() {
     const [createPassword, setCreatePassword] = useState(false)
     function hideCurrent(){
        const el = document.getElementById('homePage')
        if (el) {
            el.style.display = 'none'
        }
        setCreatePassword(true)
        
    }
  return (
    <>
    
    <div className="w-full h-full flex justify-center align-middle" id="home-page">
        <div className="bg-[#000000] w-[430px] max- h-[510px] self-center rounded-lg relative" id="homePage">
          <div className="mt-30 w-full text-center mb-10 ">
            <Image src="/img/center-logo.png" className="m-auto"  alt="Zellet" width={201} height={50}/>
          </div>
          <p className="w-full pl-10 text-center pr-10" >To get started, create a new wallet or import an existing one </p>
          <div className="absolute bottom-0 mb-3 w-full">
            <div className="w-[374px] pt-2 pb-2 mb-3 text-white m-auto text-center bg-[#017fec] rounded-lg hover:bg-[#0153ec] cursor-pointer" onClick={hideCurrent }>
              Create a new wallet
            </div>
            <div className="w-[374px] pt-2 pb-2 text-white m-auto text-center bg-[#545454] rounded-lg hover:bg-[#414141] cursor-pointer">
              I already have a wallet
            </div>
          </div>
        </div>
        {createPassword && <CreatePassword />}
    </div>
    </>
    )
}