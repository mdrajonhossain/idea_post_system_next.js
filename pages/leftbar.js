import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import { CCardBody, CCollapse } from '@coreui/react'
import { RiStackshareLine, RiHome5Line, RiStackFill, RiDatabase2Fill } from "react-icons/ri";




export default function Leftbar() {
  const [visible, setVisible] = useState(false)
  const [visibles, setVisibles] = useState(false)
  const [windowss, setWindowss] = useState(false)


const home = ()=>{
  if(visible){
    setVisible(!visible)  
    setVisibles(false)
    setWindowss(false)    
  }else{
    setVisible(!visible)
    setWindowss(false)    
    setVisibles(false)
  }
  
}

const format = ()=>{
  if(visibles){
    setVisibles(!visibles)
    setVisible(false)
    setWindowss(false)
  }else{
    setVisibles(!visibles)
    setVisible(false)
    setWindowss(false)
  }
  
}

const windows = ()=>{
  if(windowss){
    setWindowss(!windowss)
    setVisible(false)
    setVisibles(false)
  }else{
    setWindowss(!windowss)
    setVisible(false)
    setVisibles(false)
  }
  
}


  return (
    <>
   
 
       

        <div className="left_side">
          <div className="main_menu"> <RiStackshareLine size={20} color={'white'} /> Dashboard</div>
          <div onClick={() => home()} className="main_menu" style={{color : visible ? "white" : "", background: visible ? "#0a090a30" : ""}}> <RiHome5Line size={20} color={'white'}/> Home</div>
    <CCollapse visible={visible} className="sub_menu">      
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody>
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody>
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody>
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody>
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody>
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody>
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody>
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody>
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody>
    </CCollapse>


  <div onClick={() => format()} className="main_menu" style={{color : visibles ? "white" : "", background: visibles ? "#0a090a30" : ""}}>< RiStackFill size={20} color={'white'}/> Format</div>
    <CCollapse visible={visibles} className="sub_menu">      
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody>
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody>
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody>
    </CCollapse>


    <div onClick={() => windows()} className="main_menu" style={{color : windowss ? "white" : "", background: windowss ? "#0a090a30" : ""}}><RiDatabase2Fill size={20} color={'white'}/> Windows</div>
    <CCollapse visible={windowss} className="sub_menu">      
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href="">Inser</a></CCardBody> 
    </CCollapse>
        </div>

    </>
  )
}
