import React from 'react'
import Postcreation from './postcreation'

function Home({posts}) {
  let ex=true
  if(posts[0].got===false){
    ex=false
  }
  return (
  [ ex&& <div key={posts[0].id} className='spacing overflow-y-scroll'>
      {posts.map((post)=>(
        <Postcreation key={post.id} post={post} ></Postcreation>
      ))}
    </div>,!ex&&<p key={posts[0].id} className='text-center mt-5 fs-3 spacing  text-danger'>No matched data found</p>]
    
  )
}

export default Home
