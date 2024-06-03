import React from 'react';
import { useHistory } from 'react-router-dom';
import DataContext from './context/DataContext'
import { useContext } from 'react'

function Nav() {
  const {setSearch,allposts,searchvalue,setSearchvalue}=useContext(DataContext)
  const history = useHistory();
  const change = (path) => {
    history.push(path);
  };
  const datachange=()=>{
    var match=[]
    let val=document.getElementById('search').value
    setSearchvalue(val)
    if(val===""){
      setSearch([])
    }
   else{
      allposts.map((ele)=>{
        if(ele.title.substring(0,val.length).toLowerCase()===val.toLowerCase() ||ele.body.substring(0,val.length).toLowerCase()===val.toLowerCase() ){
          match.push(ele)  
        }
        return 0;
      })
      if(match.length===0){
        match=[{id:1,got:false}]
      }
      setSearch(match)
   }
  }


  return (
    <div className='nav navbar bg-black d-flex p-2 focus-ring-warning'>
      <input placeholder='Search Posts' value={searchvalue} onChange={datachange} id='search' className='col-7'></input>
      <div className='d-flex col-5 justify-content-between'>
        <button className='btn text-white' onClick={() => change('/')}>Home</button>
        <button className='btn text-white' onClick={() => change('/post')}>Post</button>
        <button className='btn text-white' onClick={() => change('/about')}>About</button>
      </div>
    </div>
  );
}

export default Nav;
