import { useState } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { ImFacebook2 } from 'react-icons/im'
import { RiInstagramLine } from 'react-icons/ri'
import { ImWhatsapp } from 'react-icons/im'
import { Loading } from '../Utils/Loading/Loading'

const Footer = () => {

    const [load, setLoad] = useState(true)
    setTimeout(() => setLoad(false), 2000)

    return (
        <>
            {
                load ? <div></div>
                    :
                    <footer className='containerFooter'>
                        <div className='categoryFt'>
                            <h1>marcas</h1>
                            <Link to="/category/Motorola">
                                <span>Motorola</span>
                            </Link>
                            <Link to="/category/Samsung">
                                <span>Samsung</span>
                            </Link>
                            <Link to="/category/Xiaomi">
                                <span>Xiaomi</span>
                            </Link>
                            <Link to="/category/ZTE">
                                <span>ZTE</span>
                            </Link>
                            <Link to="/category/TCL">
                                <span>TCL</span>
                            </Link>
                        </div>
                        <div className='nosotrosFt'>
                            <h2>Sobre Nosotros</h2>
                            <p className='parrafoNosotros'>
                                En DeluxeGalaxy buscamos destacar por nuestro conocimiento e intentamos establecernos como la opción ideal para sus compras de tecnología. Todos nuestros vendedores se encuentran altamente capacitados para asesorarlo y ofrecerle exactamente lo que necesita.
                            </p>
                        </div>
                        <div className='contactoFt'>
                            <h3>Contactate</h3>
                            <p>E-mail: deluxe_galaxy1@dlxg.com.ar</p>
                            <p>Teléfono: (011) 1122-3344</p>
                            <p>Whatsapp: +54 6 1342 6521</p>
                            <p>Soporte: dlxGalaxy@dlxg.com.ar</p>
                            <div className='redesFt'>
                                <Link to="/">
                                    <ImFacebook2 />
                                </Link>
                                <Link to="/">
                                    <RiInstagramLine />
                                </Link>
                                <Link to="/">
                                    <ImWhatsapp />
                                </Link>
                            </div>
                        </div>
                    </footer>
            }
        </>
    )
}

export default Footer