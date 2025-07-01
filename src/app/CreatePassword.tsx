import Image from "next/image";
import { useRef } from 'react'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import Privacy from "./component/privacy"

const SeedPhrase = dynamic(() => import('./CreateSeed'))

export default function CreatePassword() {
  const [createSeed, setCreateSeed] = useState(false)
  const passRef = useRef<HTMLInputElement>(null)
  const confirmPassRef = useRef<HTMLInputElement>(null)
  const [terms, setTerms] = useState(false)
  
  
  const handleClick = () => {
    const pass = passRef.current?.value
    const cpass = confirmPassRef.current?.value
    if (pass != cpass){
      const el = document.getElementById('pass-err')
        if (el) {
            el.style.display = 'block'
        }
      setTimeout(() => {
         if (el) {
            el.style.display = 'none'
        }
      },2000)
      return
    }
    if (pass !== undefined){
      localStorage.setItem('tempPass', pass)
    }
    
    const el = document.getElementById('create-Pass-page')
    if (el) {
          el.style.display = 'none'
    }
    setCreateSeed(true)
  }
  const handleTerms = () =>{
    const el = document.getElementById('mask')
    if (el) {
        el.style.display = 'block'
    }
    setTerms(true)
  }
  const hideTerms =()=>{
    const el = document.getElementById('mask')
    if (el) {
        el.style.display = 'none'
    }
    setTerms(false)
  }
  return (
    <>
    {terms && <Privacy/>}
    <div className="bg-[rgba(255,255,255,0.3)] w-[100vw] h-[100vh] absolute top-0 left-0 z-[2] hidden" id="mask" onClick={hideTerms}></div>
    <div className="bg-[#000000] w-[430px] h-[510px] self-center rounded-lg relative" id="create-Pass-page">
        <div className="w-full ">
          <Image src="/img/center-logo.png" className="ml-2 mt-2"  alt="Zellet" width={123} height={31}/>
        </div>
        <p className="w-full pl-10 text-center pr-10 mt-30" >You will use this to unlock your wallet. </p>
        <div className="w-full text-center">
          <input type="password" name="pass" placeholder="Password" ref={passRef} className="w-[376px] h-[45px] mb-4 rounded-lg  border-gray-400 border pl-4 mt-4" id="pass" />
          <input type="password" name="confirm_pass" placeholder="Confirm Password" ref={confirmPassRef} className="w-[376px] h-[45px] mb-4 rounded-lg  border-gray-400 border pl-4 mt-4" id="cpass" />
        </div>
        <div className="absolute bottom-0 mb-3 w-full">
          <div className="">
            <input type="checkbox" className="ml-8 mr-3 mb-3" />I agree to the <span onClick={handleTerms} className="text-[#008de7] cursor-pointer">Terms of Service</span>
          </div>
          <div className="hidden pl-8 text-red-500" id="pass-err">Error. Password does not match</div>
          <div className="w-[374px] pt-2 pb-2 text-white m-auto text-center bg-[#545454] rounded-lg hover:bg-[#414141] cursor-pointer" onClick={handleClick}>
            Continue
          </div>
        </div>
    </div>
    {createSeed && <SeedPhrase />}
    </>
  )
}
