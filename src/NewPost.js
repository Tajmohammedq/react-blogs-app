import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import api from './Api/posts'
import DataContext from './context/DataContext'
import { useContext } from 'react'

function NewPost() {
  const {allposts,setAllposts}=useContext(DataContext)
  const history=useHistory()
  const Submitdata= async (e)=>{
    e.preventDefault();
    let id="1"
    if(allposts.length){
      id=parseInt(allposts[allposts.length-1].id)+1

    }
   
    
    console.log(id)
    const title=document.getElementById('title').value
    const body=document.getElementById('post').value
    const current=new Date()
    const obj={id:id.toString(),timeAndDate:current.toLocaleString(),title:title,body:body}
    try{
      api.post('/posts',obj)
      const newdata=[...allposts,obj]
      setAllposts(newdata)
      history.push('/')
    }
    catch(err){
      console.log(err)
    }
  }


  return (
    <div className='spacing mt-3 ms-3 me-3'>
        <h2 className=''>New Post</h2>
        <div className='mb-2'>
          <p className='mb-1'> Title :</p>
          <input className='col-12' id='title'></input>
        </div>
        <div className=' h-50  mb-5'>
          <p className='mb-1'> Post :</p>
          <textarea className='col-12 d-flex h-100 ' id='post' ></textarea>
        </div>
        <button className='btn col-12 border bg-success  text-white' onClick={(e)=>Submitdata(e)}>Submit</button>
    </div>
  )
}

export default NewPost
