import React from 'react'
import { Pagination } from '@mui/material'

const Conpagination = ({setpage,}) => {
  const handlePageChange=(page)=>{
    setpage(page);
    window.scroll(0,0);
  }
  return (
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: "10px",
      marginBottom:"10px",
    }}>
      <Pagination
      count={50}
      onChange={(e)=>handlePageChange(e.target.textContent)}/>
    </div>
  )
}

export default Conpagination
