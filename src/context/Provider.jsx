/* eslint-disable react/prop-types */
import { useState } from "react"
import { Context } from './Context'



export const Provider =({children})=>{
  
  const [title,setTitle] = useState('')
  
  const value ={
    changeTitle:(titulo)=>{
      setTitle(titulo)
    },
    title
  }
  return(
    <Context.Provider value ={value}>
      {children}
    </Context.Provider>
  )
}