import React, {useState} from 'react'
import Navbar from '../../Navbar/Navbar'
import Sidebar from '../../SideBar'
//import GraphicsSection from '../GraphicsSection'
import HeroSection from '../HeroSection'
import Grapcardcontainer from './Grapcardcontainer'

const Home = ()  => 
{

    const [ isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
         <Sidebar isOpen={isOpen}  toggle={toggle}/>
         <Navbar toggle={toggle}/>
         <HeroSection/>
        <Grapcardcontainer/>
        </>
    )
}

export default Home
