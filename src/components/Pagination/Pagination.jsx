import React from 'react'
import { Typography, Button } from '@mui/material'

const Pagination = ({page, setPage, totalPages}) => {
    let currPage = page;

    // Handle prev navigation
    const handlePrev = () => {
        if(currPage != 1)
        setPage((prevPage) => prevPage - 1);
    };

    // Handle next navigation
    const handleNext = () => {
        if(currPage < totalPages)
        setPage((prevPage) => prevPage + 1);
    };

    if (totalPages === 0) return null; 
  return (
    <div className='flex justify-center items-center'>
        {
            currPage > 1 ?
            <Button variant='contained' onClick={handlePrev}>Prev</Button> :
            <Button variant='contained' onClick={handlePrev} disabled>Prev</Button>
        }
        <Typography variant='h4' className='mx-2' style={{marginLeft: "1rem", marginRight: "1rem"}}> { currPage } 
        </Typography>
        {
            currPage === totalPages - 1 ?
            <Button variant='contained' onClick={handleNext} disabled>Last</Button>
            : <Button variant='contained' onClick={handleNext}>Next</Button>
        }
    </div>
  )
}

export default Pagination