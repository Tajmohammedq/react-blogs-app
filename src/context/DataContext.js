import {  createContext } from "react";
import {useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';

import useWindowSize from '../Hooks/useWindowSize'
import api from '../Api/posts'

const DataContext=createContext()
export const DataProvider =({children})=>{
    const {width}=useWindowSize();
    const [search,setSearch]=useState([])
    const [allposts,setAllposts]=useState([])
    const[err,setErr]=useState(false)
    const[loading,setloading]=useState(true)
    const [searchvalue,setSearchvalue]=useState("")
    const history=useHistory();

    const deletepost=async (e,id)=>{
      e.preventDefault()
      try{
          const response=await api.delete(`/posts/${id}`)
          console.log(response)
          const newposts=allposts.filter((ele)=>ele.id!==id)
          setAllposts(newposts)
          setSearch([])
          setSearchvalue("")
          history.push('/')
      }
      catch(err){
        console.log(err)
      }
    }

    useEffect(()=>{
        setTimeout(() => {
          setloading(false)
        }, 2000);
        const getdata=(async ()=>{
          try{
            const response=await api.get("/posts")
            setAllposts(response.data)
          }
          catch(err){
            setErr(err.message)
          }
        })
        getdata()
    
      },[])
    return (
        <DataContext.Provider value={{
          width,setSearch,allposts,searchvalue,setSearchvalue,err,loading,search,setAllposts,deletepost
        }}>

        {children}

        </DataContext.Provider>

    )
}
export default DataContext;