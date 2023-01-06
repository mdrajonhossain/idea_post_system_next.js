import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import { CCardBody, CCollapse } from '@coreui/react'
import { RiHome5Line } from "react-icons/ri";
import { ImCart, ImShare2, ImStarFull, ImFileText, ImDroplet, ImNotification, ImGift, ImCalendar, ImLocation, ImShrink, ImWrench } from "react-icons/im";

import { AiFillCaretRight, AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";


export default function Leftbar() {

  const [pose, setPose] = useState(false);
  const [catagory, setCatagory] = useState(false);
  const [product, setProduct] = useState(false)
  const [accountmanagement, setAccountmanagement] = useState(false)
  const [customer, setCustomer] = useState(false)
  const [supplier, setSupplier] = useState(false)
  const [settings, setSettings] = useState(false)


const pos = ()=>{
  if(pose){
    setPose(!pose) 
    setCatagory(false)
    setProduct(false)
    setAccountmanagement(false)
    setCustomer(false)
    setSupplier(false)
    setSettings(false)
  }else{
    setPose(!pose) 
    setCatagory(false)
    setProduct(false)
    setAccountmanagement(false)
    setCustomer(false)
    setSupplier(false)
    setSettings(false)
  }
  
}

const catagory_function = ()=>{
  if(catagory){
    setCatagory(!catagory)    
    setPose(false)     
    setProduct(false)
    setAccountmanagement(false)
    setCustomer(false)
    setSupplier(false)
    setSettings(false)
  }else{
    setCatagory(!catagory)    
    setPose(false)     
    setProduct(false)
    setAccountmanagement(false)
    setCustomer(false)
    setSupplier(false)
    setSettings(false)
  }
  
}

const product_function = ()=>{
  if(product){
    setCatagory(false)    
    setPose(false)
    setProduct(!product)
    setAccountmanagement(false)
    setCustomer(false)
    setSupplier(false)
    setSettings(false)
  }else{
    setCatagory(false)    
    setPose(false)
    setProduct(!product)
    setAccountmanagement(false)
    setCustomer(false)
    setSupplier(false)
    setSettings(false)
  }
  
}

const accountmanagement_function = ()=>{
  if(accountmanagement){
    setCatagory(false)    
    setPose(false)
    setProduct(false)
    setAccountmanagement(!accountmanagement)
    setCustomer(false)
    setSupplier(false)
    setSettings(false)
  }else{
    setCatagory(false)    
    setPose(false)
    setProduct(false)
    setAccountmanagement(!accountmanagement)
    setCustomer(false)
    setSupplier(false)
    setSettings(false)
  }
  
}

const customer_function = ()=>{
  if(customer){
    setCatagory(false)    
    setPose(false)
    setProduct(false)
    setAccountmanagement(false)
    setCustomer(!customer)
    setSupplier(false)
    setSettings(false)
  }else{
    setCatagory(false)    
    setPose(false)
    setProduct(false)
    setAccountmanagement(false)
    setCustomer(!customer)
    setSupplier(false)
    setSettings(false)
  }
  
}

const supplier_function = ()=>{
  if(supplier){
    setCatagory(false)    
    setPose(false)
    setProduct(false)
    setAccountmanagement(false)
    setCustomer(false)
    setSupplier(!supplier)
    setSettings(false)
  }else{
    setCatagory(false)    
    setPose(false)
    setProduct(false)
    setAccountmanagement(false)
    setCustomer(false)
    setSupplier(!supplier)
    setSettings(false)
  }
  
}

const settings_function = ()=>{
  if(settings){
    setCatagory(false)    
    setPose(false)
    setProduct(false)
    setAccountmanagement(false)
    setCustomer(false)
    setSupplier(false)
    setSettings(!settings)
  }else{
    setCatagory(false)    
    setPose(false)
    setProduct(false)
    setAccountmanagement(false)
    setCustomer(false)
    setSupplier(false)
    setSettings(!settings)
  }
  
}

 

  return (
    <>
   
 
       

    <div className="left_side">
          <div className="main_menu">
            <RiHome5Line size={20} color={'white'}/>
                &nbsp;Dashboard
            </div>
    
    <div onClick={() => pos()} className="main_menu" style={{color : pose ? "white" : "", background: pose ? "#0a090a30" : ""}}>
        <ImCart size={20} color={'white'}/> 
            &nbsp; POS  {pose ? <AiFillCaretDown size={20} color={'white'} className="main_menu_icons"/> : <AiFillCaretUp size={20} color={'white'} className="main_menu_icons"/>}</div>
                <CCollapse visible={pose} className="sub_menu">      
                <CCardBody className="sub_menu_btn"><a href=""><AiFillCaretRight size={18} color={'white'}/> Pos</a></CCardBody>        
                <CCardBody className="sub_menu_btn"><a href=""><AiFillCaretRight size={18} color={'white'}/> Orders</a></CCardBody>
            </CCollapse>


  <div onClick={() => catagory_function()} className="main_menu" style={{color : catagory ? "white" : "", background: catagory ? "#0a090a30" : ""}}><ImShare2 size={20} color={'white'}/>&nbsp; Category{catagory ? <AiFillCaretDown size={20} color={'white'} className="main_menu_icons" /> : <AiFillCaretUp size={20} color={'white'} className="main_menu_icons"/>} </div>
    <CCollapse visible={catagory} className="sub_menu">              
        <CCardBody className="sub_menu_btn"><a href=""><AiFillCaretRight size={18} color={'white'}/> Category</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href=""><AiFillCaretRight size={18} color={'white'}/> Sub Category</a></CCardBody>        
    </CCollapse>

    <div className="main_menu"> <ImStarFull size={18} color={'white'}/>&nbsp; Brand </div>
    <div className="main_menu"> <ImFileText size={18} color={'white'}/>&nbsp; Unit </div>

    <div onClick={() => product_function()} className="main_menu" style={{color : product ? "white" : "", background: product ? "#0a090a30" : ""}}> <ImDroplet size={20} color={'white'} />&nbsp; Product {product ? <AiFillCaretDown size={20} color={'white'}  className="main_menu_icons"/> : <AiFillCaretUp size={20} color={'white'}  className="main_menu_icons"/>}</div>
    <CCollapse visible={product} className="sub_menu">      
        <CCardBody className="sub_menu_btn"><a href=""><AiFillCaretRight size={18} color={'white'}/> Add New</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href=""><AiFillCaretRight size={18} color={'white'}/> List</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href=""><AiFillCaretRight size={18} color={'white'}/> Bulk Import</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href=""><AiFillCaretRight size={18} color={'white'}/> Builk Export</a></CCardBody>
    </CCollapse>

    <div className="main_menu"> <ImNotification size={18} color={'white'}/>&nbsp; Stock limit products </div>
    <div className="main_menu"> <ImGift size={18} color={'white'}/>&nbsp; Coupons </div>


    <div onClick={() => accountmanagement_function()} className="main_menu" style={{color : accountmanagement ? "white" : "", background: accountmanagement ? "#0a090a30" : ""}}> <ImCalendar size={18} color={'white'} />&nbsp; Account management {accountmanagement ? <AiFillCaretDown size={20} color={'white'} className="main_menu_icons"/> : <AiFillCaretUp size={20} color={'white'} className="main_menu_icons"/>}</div>
    <CCollapse visible={accountmanagement} className="sub_menu">      
        <CCardBody className="sub_menu_btn"><a href=""><AiFillCaretRight size={18} color={'white'}/> Add New Account</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href=""><AiFillCaretRight size={18} color={'white'}/> Accounts</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href=""><AiFillCaretRight size={18} color={'white'}/> New Expense</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href=""><AiFillCaretRight size={18} color={'white'}/> New Income</a></CCardBody>
        <CCardBody className="sub_menu_btn"><a href=""><AiFillCaretRight size={18} color={'white'}/> NewTransfer</a></CCardBody>
        <CCardBody className="sub_menu_btn"><a href=""><AiFillCaretRight size={18} color={'white'}/> Transection List</a></CCardBody>
    </CCollapse>

    <div onClick={() => customer_function()} className="main_menu" style={{color : customer ? "white" : "", background: customer ? "#0a090a30" : ""}}> <ImLocation size={20}/>&nbsp; Customer {customer ? <AiFillCaretDown size={20} color={'white'} className="main_menu_icons"/> : <AiFillCaretUp size={20} color={'white'} className="main_menu_icons"/>}</div>
    <CCollapse visible={customer} className="sub_menu">      
        <CCardBody className="sub_menu_btn"><a href=""><AiFillCaretRight size={18} color={'white'}/> Add Customer</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href=""><AiFillCaretRight size={18} color={'white'}/> Customer List</a></CCardBody>
    </CCollapse>


    <div onClick={() => supplier_function()} className="main_menu" style={{color : supplier ? "white" : "", background: supplier ? "#0a090a30" : ""}}> <ImShrink size={20} color={'white'}/>&nbsp; Supplier {supplier ? <AiFillCaretDown size={20} color={'white'} className="main_menu_icons"/> : <AiFillCaretUp size={20} color={'white'} className="main_menu_icons"/>}</div>
    <CCollapse visible={supplier} className="sub_menu">      
        <CCardBody className="sub_menu_btn"><a href=""><AiFillCaretRight size={18} color={'white'}/> Add Supplier</a></CCardBody> 
        <CCardBody className="sub_menu_btn"><a href=""><AiFillCaretRight size={18} color={'white'}/> Supplier List</a></CCardBody>
    </CCollapse>


    <div onClick={() => settings_function()} className="main_menu" style={{color : settings ? "white" : "", background: settings ? "#0a090a30" : ""}}> <ImWrench size={20} color={'white'}/>&nbsp; Settings {settings ? <AiFillCaretDown size={20} color={'white'} className="main_menu_icons" /> : <AiFillCaretUp size={20} color={'white'} className="main_menu_icons"/>} </div>
    <CCollapse visible={settings} className="sub_menu">      
        <CCardBody className="sub_menu_btn"><a href=""><AiFillCaretRight size={20} color={'white'}/> Shop Setup</a></CCardBody> 
    </CCollapse>



        </div>

    </>
  )
}
