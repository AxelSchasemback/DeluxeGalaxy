import React, { useState } from 'react'
import './Register.css'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import Search from '../../Navbar/Search/Search'
import { Loading } from '../../Utils/Loading/Loading'

export const Register = () => {

    const { signUp, loginWhithgoogle } = useAuth()

    const Navigate = useNavigate()

    const [load, setLoad] = useState(true)
    setTimeout(() => setLoad(false), 1000)
    const [error, setError] = useState()
    const [user, setUser] = useState({
        displayName: '',
        email: '',
        password: '',
        phoneNumber: ''
    })

    const handleGoogleSingin = async () => {
        await loginWhithgoogle()
        Navigate('/Home')
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await signUp(user.email, user.password)
            Navigate('/Home')
        } catch (error) {
            setError(error.code)
            if (error.code === 'auth/internal-error') setError('Error: Correo Invalido')
            if (error.code === 'auth/email-already-in-use') setError('Error: El Correo ya Existe')
            if (error.code === 'auth/weak-password') setError('Error: La Contraseña es Debil')
        }
    }

    return (
        <main className='mainContainer'>
            <Search searchProd="Buscar Producto" />
            {load ? <Loading />
                :
                <div className='containerRegister2'>
                    <form onSubmit={handleSubmit} className='containerForm2'>
                        {error && <p className='errorAlert'>{error}</p>}
                        <div className='inputsForm2'>
                            <h1 className='titleRegister'>registrate</h1>
                            <label>
                                <p>Nombre de Usuario</p>
                                <input type="text" name='displayName' placeholder='ej: Roberto Carlos' className='formInput displayName' onChange={handleChange} />
                            </label>
                            <label>
                                <p>Email:</p>
                                <input type="email" name='email' placeholder='Example@gmail.com' className="formInput email" onChange={handleChange} />
                            </label>
                            <label>
                                <p>contraseña:</p>
                                <input type="password" placeholder='******' name='password' id='password' className="formInput password" onChange={handleChange} />
                            </label>
                            <label>
                                <p>Telefono</p>
                                <input type="tel" name='phoneNumber' placeholder='ej: 1122334455' className='formInput phoneNumber' onChange={handleChange} />
                            </label>
                            <div className="buttonsForm">
                                <button className='registrate'>Registrate</button>
                                <Link className='linkLoginAccount' to='/login'>
                                    <p>ya tienes una Cuenta?</p>
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
