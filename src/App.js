import { useState,useEffect } from 'react';
import './App.css';
import React from 'react';
import {useParams} from "react-router-dom";

function  App() {
  // API key
  const apiUrl = `https://jsonplaceholder.typicode.com/posts`
  const params = useParams();
 
  //Declare states to the data
  const [data,setData] = useState([]);

   const getData = async() =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const arrayOfData = await response.json();
    console.log(arrayOfData)
    setData(arrayOfData)
   }

   // useEffect to run getCoin when component mounts
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1> Users </h1>
{data.map((text) => <li>{text.body}/ {text.id}</li>)}



    </div>
  );
}

export default App;
