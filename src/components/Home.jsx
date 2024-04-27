import { useEffect, useState } from "react"
import NormalCard from "./NormalCard"
import EnhancedCard from "./EnhancedCard"

export default function Home(params) {
    const [data,setData] = useState(null)

const fetchData = async()=>{
    const res = await fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
    const data = await res.json()
    console.log(data.results);
    setData(data.results)
}

    useEffect(()=>{
        fetchData()
    },[])

    return(
        <div className=" h-screen flex justify-center items-center flex-wrap gap-10">

           {data && data.map(item=>{
          //  return <NormalCard key={item.id.name} firstName={item.name.first} LastName={item.name.last} PhoneNumber={item.phone} Gender={item.gender} imgUrl={item.picture.large}/>
          return <EnhancedCard key={item.id.name} firstName={item.name.first} LastName={item.name.last} PhoneNumber={item.phone} Gender={item.gender} imgUrl={item.picture.large} country={item.location.country}/>
           })}
  

        </div>
    )
};


/* there are 2 versions of Card the Normal is the one which was asked and Enhanced Card component is the one which i created in my own style */