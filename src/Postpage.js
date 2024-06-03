import React, { useContext } from 'react'
import { useParams} from 'react-router-dom/cjs/react-router-dom.min';
import DataContext from './context/DataContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function Postpage() {
  const history=useHistory();
  const {allposts,deletepost}=useContext(DataContext)
  const {id}= useParams();
  const post=allposts.filter((ele)=>ele.id===id)
  return (
    <div className='spacing overflow-auto ms-3 '>
      <h2>{post[0].title}</h2>
      <p>{post[0].timeAndDate}</p>
      <p>
        {post[0].body}
      </p>
      <div className='d-flex '>
        <button className='col-3 btn btn-success m-5' onClick={()=>{history.push(`/edit/${post[0].id}`) }}>Edit Post</button>
        <button className='col-3 btn btn-danger m-5' onClick={(e)=>{deletepost(e,post[0].id) }}>Delete Post</button>
      </div>
    </div>
  )
}

export default Postpage
