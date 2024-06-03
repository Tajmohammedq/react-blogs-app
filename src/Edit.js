import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import DataContext from './context/DataContext';
import { useContext} from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import api from './Api/posts'
function Edit() {
    const history=new useHistory();
    const {id}=useParams();
    const {allposts,setAllposts,setSearch,setSearchvalue}=useContext(DataContext)
    const post=allposts.filter(ele=>ele.id===id)
    const [title,setTitle]=useState(post[0].title)
    const [body,setBody]=useState(post[0].body)
    const edithandler=async ()=>{
        const current=new Date();
        const obj={id,timeAndDate:current.toLocaleString(),title:title,body:body}
        try{
            await api.put(`/posts/${post[0].id}`,obj)
            const newposts=allposts.map((ele)=>ele.id===post[0].id?obj:ele)
            setAllposts(newposts)
            setSearch([])
            setSearchvalue("")
            history.push('/')
        }
        catch(err){
          console.log(err)
        }


    }
  return (
    <div className='spacing mt-3 ms-3 me-3'>
        <h2 className=''>Edit Post</h2>
        <div className='mb-2'>
          <p className='mb-1'> Title :</p>
          <input className='col-12' id='title' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
        </div>
        <div className=' h-50  mb-5'>
          <p className='mb-1'> Post :</p>
          <textarea className='col-12 d-flex h-100 ' id='body' value={body} onChange={(e)=>{
            setBody(e.target.value)
          }}></textarea>
        </div>
        <button className='btn col-12 border bg-success  text-white' onClick={edithandler}>Submit</button>
    </div>
  )
}

export default Edit
