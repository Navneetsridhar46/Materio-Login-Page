import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import img1 from '../assets/png3.png'
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validation from './Validate';


function Login({ insideRegister }) {

    const navigate = useNavigate()

    const [values, setValues] = useState({
        name: "",
        email:"",
        password: ""
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validation(values))
    }

    return (
        <>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link href="/home"><i class="fa-brands fa-meta me-1"></i>MATERIO</Nav.Link>
                </Nav.Item>
            </Nav>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 d-flex'>
                        <img style={{ height: '544px', width: '100%' }} src={img1} alt="" />
                    </div>
                    <div className='col-lg-4 d-flex justify-content-center mt-5'>
                        <div>
                            <h3>Welcome to Materio!<i class="fa-regular fa-hand-peace"></i></h3>
                            <p>Please sign-{insideRegister ? 'up' : 'in'} to your account and start the adventures!</p>
                            <Form onSubmit={handleSubmit}>
                                {
                                    insideRegister &&
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Username"
                                        className="mb-3"
                                    >
                                        <Form.Control value={values.name} type="text" placeholder="Username" name='name' onChange={handleChange} />
                                        {errors.name && <p style={{ color: 'red', fontSize: '13px' }}>{errors.name}</p>}
                                    </FloatingLabel>
                                }
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email"
                                    className="mb-3"
                                >
                                    <Form.Control value={values.email} type="email" placeholder="name@example.com" name='email' onChange={handleChange} />
                                    {errors.email && <p style={{ color: 'red', fontSize: '13px' }}>{errors.email}</p>}
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3'>
                                    <Form.Control value={values.password} type="password" placeholder="Password" name='password' onChange={handleChange} />
                                    {errors.password && <p style={{ color: 'red', fontSize: '13px' }}>{errors.password}</p>}
                                </FloatingLabel>
                                <div className='d-flex justify-content-center'>
                                    {insideRegister ?
                                        <button type='submit' className='btn btn-success w-50'>REGISTER</button>
                                        :
                                        <button type='submit' className='btn btn-success w-50'>LOGIN</button>
                                    }
                                </div>
                                <div className='d-flex justify-content-between mt-3'>
                                    <div><input className='me-1' type="checkbox" name="" id="" />Remember me</div>
                                    <p className='text-danger'>Forgot Password?</p>
                                </div>

                                {
                                    insideRegister ?
                                        <h6 className='text-center mt-3'>Enjoy our new platform!</h6>
                                        :
                                        <div>
                                            <h6 className='text-center mt-2'>New on our platform? <Link style={{ textDecoration: 'none' }} to={'/register'}>Create an account</Link></h6>
                                            <div className='d-flex justify-content-center mt-3 mb-3'>
                                                <GoogleLogin
                                                    onSuccess={credentialResponse => {
                                                        const credentialResponseDecoded = jwtDecode(credentialResponse.credential)
                                                        console.log(credentialResponseDecoded);
                                                        sessionStorage.setItem("userName", credentialResponseDecoded.name)
                                                        setTimeout(() => {
                                                            navigate('/home')
                                                        }, 2000)
                                                        toast.success("Logged In Successfully")
                                                    }}
                                                    onError={() => {
                                                        console.log('Login Failed');
                                                    }}
                                                />
                                            </div>
                                        </div>

                                }
                            </Form>
                        </div>
                    </div>
                </div>
                <ToastContainer position='top-center' theme='colored' autoClose={3000} />
            </div>
        </>
    )
}

export default Login