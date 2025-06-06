import React from 'react'
import { useState } from 'react'

export default function Privacy() {
  
  
  return (
    <div className='p-10 w-[700px] absolute bg-[#111] rounded-lg left-[calc(50%-350px)] max-h-[calc(100vh-200px)] z-10 box-border '>
      <span className='border-[1px] border-[#fff] rounded-[30px] absolute top-[-15px] right-[-15px] text-[12px] h-[30px] w-[30px] text-center leading-[30px] bg-black cursor-pointer hover:bg-white hover:text-black' >X</span>
      <h1 className='text-[24px]'>Zellet Privacy Policy</h1>
      <div className='h-[500px] mb-10 overflow-y-scroll text-justify pr-4 leading-8 font-light text-[14px]'>
        <h2 className='font-semibold text-[16px]'>Effective Date: [26/05/2025]</h2><br/>
      
        Zellet (“we”, “our”, or “us”) respects your privacy and is committed to protecting the personal data you may provide while using our services. This Privacy Policy explains how we collect, use, store, and disclose your information when you access or use our website, browser extension, mobile applications, and any associated services (collectively, the “Services”).
        <br/>
        By using Zellet, you agree to the collection and use of information in accordance with this Privacy Policy.<br/><br/>
        
        <h2 className='font-semibold text-[16px]'>1. Information We Collect</h2>
        Zellet is a non-custodial wallet. We do not collect or have access to your private keys, seed phrases, or wallet contents.<br/>
        However, we may collect the following limited personal and usage data:<br/>
        a. Information You Provide to Us<br/>
        •	Contact Information: If you contact us for support, we may collect your email address and any additional information you voluntarily provide.<br/>
        b. Automatically Collected Information<br/>
        •	Device & Usage Data: We may automatically collect technical information, such as:<br/>
        o	IP address<br/>
        o	Browser type<br/>
        o	Device information<br/>
        o	Operating system<br/>
        o	App version<br/>
        o	Usage logs and event data<br/>
        This data helps us improve the functionality, security, and performance of the Services.<br/><br/>
        c. Cookies and Tracking Technologies<br/>
        We may use cookies and similar technologies to:<br/>
        •	Remember preferences<br/>
        •	Analyze traffic<br/>
        •	Detect and prevent fraud<br/>
        You can manage your cookie preferences through your browser settings.<br/><br/>
        
        <h2 className='font-semibold text-[16px]'>2. How We Use Your Information</h2>
        We use the collected data for the following purposes:<br/>
        •	To provide, maintain, and improve the Services<br/>
        •	To communicate with you and respond to inquiries<br/>
        •	To ensure the security and integrity of our systems<br/>
        •	To comply with legal obligations<br/>
        •	To analyze trends and user behavior<br/>
        We do not use your data for advertising or sell it to third parties.<br/><br/>
        
        <h2 className='font-semibold text-[16px]'>3. Data Sharing and Disclosure</h2>
        We may share your data in the following limited circumstances:<br/>
        •	Service Providers: With third-party providers who assist with analytics, hosting, or customer support, under strict data protection agreements.<br/>
        •	Legal Requirements: When required by law or in response to valid legal processes.<br/>
        •	Business Transfers: If Zellet is involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.<br/><br/>
        
        <h2 className='font-semibold text-[16px]'>4. Your Rights and Choices</h2>
        Depending on your location, you may have rights under privacy laws such as the GDPR, including:<br/>
        •	The right to access or correct your personal data<br/>
        •	The right to request deletion of your data<br/>
        •	The right to object to or restrict processing<br/>
        •	The right to data portability<br/>
        •	The right to withdraw consent (where applicable)<br/>
        You can exercise these rights by contacting us at [Insert contact email].<br/><br/>
        
        <h2 className='font-semibold text-[16px]'>5. Data Retention</h2>
        We retain your information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.<br/><br/>
        
        <h2 className='font-semibold text-[16px]'>6. Data Security</h2>
        We implement reasonable administrative, technical, and physical safeguards to protect your data. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
        <br/><br/>
        <h2 className='font-semibold text-[16px]'>7. Third-Party Services</h2>
        Our Services may contain links to third-party sites or use third-party integrations (such as blockchain explorers or analytics tools). This Privacy Policy does not apply to those third parties. We encourage you to review their privacy policies separately.
        <br/><br/>
        <h2 className='font-semibold text-[16px]'>8. International Data Transfers</h2>
        If you are accessing our Services from outside the jurisdiction where our servers are located, your information may be transferred, stored, and processed in a country with different data protection laws. We will take appropriate safeguards to protect your data in such cases.
        <br/><br/>
        <h2 className='font-semibold text-[16px]'>9. Children’s Privacy</h2>
        Zellet is not intended for children under 13 (or the equivalent age in your jurisdiction). We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us.
        <br/><br/>
        <h2 className='font-semibold text-[16px]'>10. Changes to This Privacy Policy</h2>
        We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review the policy periodically.
        <br/><br/>
        <h2 className='font-semibold text-[16px]'>11. Contact Us</h2>
        If you have any questions or concerns about this Privacy Policy or your data, please contact us at:<br/>
        📧 privacy@zellet.org<br/>
        🌐 https://zellet.org<br/>
      </div>
</div>
  )
}
