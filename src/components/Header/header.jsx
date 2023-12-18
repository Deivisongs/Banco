import './header.css'
import { useState, useEffect } from 'react'

export default function Header() {

    /*const [menutoggle, setToggle] = useState(null)
    const [nav, setNav] = useState(null)

    useEffect(() => {

        setToggle(document.querySelector(".toggle"));
        setNav(document.querySelector(".nav"))

      }, []);
      
    menutoggle.addEventListener("click", abrir() )

    function abrir(){

        menutoggle.style.classList.toggle("on")
    }*/



    return (
        <>
            <header>
                <div className="logo">
                    <span><h1>Banco <strong>Online...</strong></h1></span>
                </div>
                <div className="toggle" id='toggle'>
                    <div className='one'></div>
                    <div className='two'></div>
                    <div className='three'></div>
                </div>
                <nav className='nav on'>
                    <a href="#">Home</a>
                    <a href="#">Transferencia</a>
                    <a href="#">Extrato</a>
                </nav>    
            </header>
        </>
    )

    
}