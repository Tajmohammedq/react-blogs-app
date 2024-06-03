import React from 'react'
import DataContext from './context/DataContext'
import { useContext } from 'react'
import Home from './Home'

function BeforeHome() {
    const {err,loading,search,allposts}=useContext(DataContext)
  return (
    <div>
        {err&&<p className='d-flex align-items-center  spacing fs-3 text-danger justify-content-center'>{err}</p>}
        {loading && <p className='d-flex align-items-center  spacing fs-3 text-warning justify-content-center'> Data is Loading....</p>}
        {!err && !loading && search.length>0&&<Home posts={search}></Home>}
        {!err && !loading && search.length===0 && allposts.length>0&&<Home posts={allposts}></Home>}
        {!err && !loading && allposts.length===0&&<p className='d-flex align-items-center justify-content-center spacing text-center  fs-3 text-primary'>We dont have any posts ...Feel free to create yours</p>}

    </div>
  )
}

export default BeforeHome
