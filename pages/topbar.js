import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import { useRouter } from 'next/router'


export default function Topbar() {
  const router = useRouter();
 
  const signinpage = ()=>{    
    router.push("/");
}
 

  return (
    <>
        <div className="header">
            <div className="header_company_name" onClick={()=>signinpage()} >Idea Pos System 0.1 </div>

            <div className="header_profile">
                <div className="header_toggle">POS</div>       
                <div className="header_toggle">Profile</div>
                <div className="header_toggle">Profile</div>
            </div>          
         </div>
    </>
  )
}
