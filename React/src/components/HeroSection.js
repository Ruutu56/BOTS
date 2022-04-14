import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1 style={{color:"white",textShadow:"5px 8px 5px black"}}>BOTS</h1>
        <p style={{ paddingLeft: "30px",paddingRight:"30px",textShadow:"5px 5px black",backgroundImage:"linear-gradient(90deg, black, skyblue)",fontFamily:"Copperplate, Papyrus, fantasy",color:"white",fontWeight:"bolder" }}>You Were Born To Be A Player...</p><br />
        <p style={{ paddingLeft: "20px",paddingRight:"20px",textShadow:"5px 5px black",backgroundImage:"linear-gradient(180deg, black, skyblue)",color:"black",fontFamily:"Copperplate, Papyrus, fantasy",color:"white",fontWeight:"bolder"}}>You Were Meant To Be Here...</p> <br/>
        <p style={{ paddingLeft: "30px",paddingRight:"30px",textShadow:"5px 5px black",backgroundImage:"linear-gradient(-90deg, black, skyblue)",fontFamily:"Copperplate, Papyrus, fantasy",color:"white",fontWeight:"bolder" }}>This Moment is Yours!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          <span style={{color:"black",fontWeight:"bolder",fontSize:"28px"}}>Get Started</span>
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;
