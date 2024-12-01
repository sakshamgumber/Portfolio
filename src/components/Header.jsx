import './Header.css';
import { useState, useEffect } from 'react';
import { Navbar } from './navbar';
import { ReactTyped } from "react-typed";
import { FaGithub} from "react-icons/fa";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { Card } from './box';
import { Background } from './background';
// import ParticlesComponent from './particles';
export const Header = () => {
    return (
      
    <div lassName="fixed top-0 left-0 w-full flex items-center justify-start z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0 mt-8 ml-16 overflow-y-scroll z-40">
      <Background></Background>
      <div><Navbar></Navbar></div>
      <header className='flex items-center gap-16 px-32 py-8'>
        <div className="ml-20">
          <h1>
            <a href="#" className="logo ">
              <img 
                className='drop-shadow-xl'
                src="/saksham_edit.png" 
                height={40} 
                width={200} 
                alt="" 
                style={{ borderRadius: '10%' }} 
              />
            </a>
          </h1>
        </div>
        <div>
          <h1>
            <div className='flex flex-col'>
            <h3 className='text-left font-mono'>Hi,it's Me</h3>
            <h1 className='text-left font-mono'>Saksham Gumber</h1>
            <h2 className='text-left font-mono'>I'm a Engineering student who is a passionate</h2>
            <ReactTyped
            strings={[
              "Web Developer",
              "Competitive Programmer",
              "Frontend Developer",
              "Problem solver"
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
            className='text-left'
            style={{ color: '#00EAFE' }}
            >
            </ReactTyped>
            <div className='flex gap-4 py-4'>
            <a href="https://github.com/sakshamgumber"  target="_blank" rel="noopener noreferrer" className="text-[30px] hover:text-[#00E4F2] transition-colors duration-300" style={{ color: '#00EAFE' }}  // Initial color is #00EAFE
            >
            <FaGithub />
          </a>
           <a href="https://www.linkedin.com/in/saksham-gumber-4a115b261/"  target="_blank" rel="noopener noreferrer" className="text-[30px] hover:text-[#00E4F2] transition-colors duration-300"
           style={{ color: '#00EAFE' }}
           >
          <BsLinkedin />
          </a>
            </div>
            <div className=''>
            <a href="" >
            <button className="transition-colors duration-300 hover:bg-[#00E4F2] bg-[#00EAFE] text-white px-4 py-2 rounded text-black text-sm h-8">
              <a href="">Resume</a>
            </button>
            </a>
            </div>
            </div>
          </h1>
        </div>
      </header>
      <div className='font-mono text-4xl py-2'> <section id="2">Project</section></div>
      <div className='flex justify-between py-16'>
      <Card projectName="Workholic"   techStack={['Flask', 'Python', 'React','Javascript','HTML',"CSS"]} github="https://github.com/sakshamgumber/IEEE-hacky-1st-year" description="This is a website where" link='/workholic.png'/>
      <Card projectName="Transactioin website"   techStack={['React', 'Express', 'MonogDb','Node','Zod']} github="https://github.com/sakshamgumber/Transction-App" description="This is a good website" link='/RPA.png'/>
      <Card projectName="Forms Automation"   techStack={['UI Path Automation']} github="https://github.com/sakshamgumber/STGI" description="This is a good website" link='Pay.jpg'/>
      </div>
    </div>
    );
  };