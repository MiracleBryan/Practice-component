import React from 'react'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components'
import './App.css'

const APP = () =>{
    return(
        <div className='App'>
            <div className='gradientBg'>
                <Navbar />
                <Header />
            </div>
            <Brand/>
            <WhatGPT3/>
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default APP