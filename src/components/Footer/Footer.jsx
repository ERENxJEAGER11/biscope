import React from 'react'
import {Link} from 'react-router-dom'
import {Typography} from '@mui/material'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <>
        <footer className="mt-5 bg-blue-400 p-5 text-center">
            <Typography variant='h6'>Made with ❤️ by &nbsp; 
                <Link to="https://zaheer-zk.github.io/Advanced-porfolio/" className="text-gray-200 hover:text-gray-700">
                    Zaheer Khan
                </Link>
            </Typography>
        </footer>
    </>
  )
}

export default Footer