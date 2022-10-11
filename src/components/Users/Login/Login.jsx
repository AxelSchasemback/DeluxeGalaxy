import React, { useState } from 'react'
import './Login.css'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import Search from '../../Navbar/Search/Search'
import { Loading } from '../../Utils/Loading/Loading'

export const Login = () => {

    const { login, loginWhithgoogle } = useAuth()

    const Navigate = useNavigate()

    const [load, setLoad] = useState(true)
    setTimeout(() => setLoad(false), 1000)
    const [error, setError] = useState()
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleGoogleSingin = async () => {
        await loginWhithgoogle()
        setError('')
        Navigate('/Home')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await login(user.email, user.password)
            Navigate("/Home")
        } catch (error) {
            setError(error.code)
            if (error.code === 'auth/user-not-found') setError('Error: El Correo no existe')
            if (error.code === 'auth/wrong-password') setError('Error: Contraseña Incorrecta')
            if (error.code === 'auth/internal-error') setError('Error: Coloca una Contraseña')
            if (error.code === 'auth/invalid-email') setError('Error: Coloca un Email')
        }
    }


    return (
        <main className='mainContainer'>
            <Search searchProd="Buscar Producto" />
            {load ? <Loading />
                :
                <div className='containerRegister'>
                    <form onSubmit={handleSubmit} className='containerForm'>
                        {error && <p className='errorAlert'>{error}</p>}
                        <div className='inputsForm'>
                            <h1 className='titleRegister'>Iniciar Sesion</h1>
                            <label>
                                <p>Email:</p>
                                <input type="email" name='email' placeholder='Example@gmail.com' className="email" onChange={handleChange} />
                            </label>
                            <label>
                                <p>contraseña:</p>
                                <input type="password" placeholder='******' name='password' id='password' className="password" onChange={handleChange} />
                            </label>
                            <div className="buttonsForm">
                                <button className='registrate'>Loguear</button>
                                <Link className='linkLoginAccount' to='/register'>
                                    <p>no tienes una cuenta?</p>
                                </Link>
                            </div>
                        </div>
                    </form>
                    <label className='contGoogle'>
                        <button className='buttonGoogle' onClick={(() => handleGoogleSingin())}>
                            <p className='googleLogin'>
                                Google Login
                            </p>
                                <FcGoogle className='iconGoogle' />
                        </button>
                    </label>
                </div>}
        </main>
    )
}

