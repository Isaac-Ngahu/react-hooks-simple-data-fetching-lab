// create your App component here
import { useEffect,useState } from "react"


function App() {
const [isLoaded,setIsLoaded]=useState(false)
const [data,setData]=useState("")
useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res=>res.json())
    .then(data=>{
        setData(data.message)
    setIsLoaded(true)})
    if(isLoaded){
      console.log("loaded")  
    }else{
        <p>Loading...</p>
    }
},[])
  return (
    <>
    <img src={data} alt="A random dog"/>
    </>
  )
}

export default App