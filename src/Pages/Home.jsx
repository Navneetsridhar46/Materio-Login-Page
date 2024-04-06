import React, { useEffect, useState } from 'react'
import img1 from '../assets/png6.png'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home() {
    
    const [userName, setUserName] = useState('')

    const navigate = useNavigate()

    const handleSignOut = () => {
        googleLogout();
        sessionStorage.removeItem("userName")
        setUserName('');
        toast.info("Signout Successfully")
        navigate('/')
    }

    useEffect(() => {
        if (sessionStorage.getItem("userName")) {
            const savedName = sessionStorage.getItem('userName')
            setUserName(savedName)
        }
    }, [])
    return (
        <>
            <header>
                <Navbar className="bg-body-success">
                    <Container>
                        <Navbar.Brand href="#home"><i class="fa-brands fa-meta me-1"></i>Materio</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Button style={{color:'white'}} className='btn btn-danger' onClick={handleSignOut} variant="outline-secondary">Sign Out<i class="fa-solid fa-right-from-bracket ms-1"></i></Button>{' '}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <div className="mainDiv  d-flex justify-content-center">
                <h1 className='mt-5'>Hi, <span className='text-success fw-bolder'>{userName}</span></h1>

            </div>
            <div className="mainDiv  d-flex justify-content-center">
                <img src={img1} width={'650px'}></img>
                <ToastContainer position='top-center' theme='colored' autoClose={3000} />
            </div>
        </>
    )
}

export default Home