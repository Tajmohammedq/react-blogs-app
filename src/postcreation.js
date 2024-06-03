import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
function Postcreation({post}) {
  

  return (
    <div className='' >
        <div className='border-bottom border-bottom-2 ps-4 d-flex flex-column mt-1 row-gap-0'>
        <Link className='text-black text-decoration-none' to={`post/${post.id}`}><h2 className='mb-1 cur '  >{post.title}</h2></Link>
            <p className='mb-1'>{post.timeAndDate}</p>
            <p className='mb-1'>
                {post.body.length >=25?
                    post.body.slice(0,25)+" . . ."
                    :post.body}
            </p>
        </div>
    </div>
  )
}

export default Postcreation
