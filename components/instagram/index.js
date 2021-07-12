import React, { useState, useEffect } from "react";
import Image from "next/image"
import axios from "axios";

const { INSTA_URL } = process.env;

export async function getStaticProps(context) {
    const res = axios.get("https://v1.nocodeapi.com/akgngr2/instagram/oUGBBqJXHyLAlsUG");

    const data = await res.json()
  
    if (!data) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
  
    return {
      props: { data: res }, // will be passed to the page component as props
    }
  }

const photoData = async () => {
  const result = await fetch('https://v1.nocodeapi.com/akgngr2/instagram/oUGBBqJXHyLAlsUG', {
    method: "GET"
  });
  const json = await result.json();

  if (!json.error) {
      console.log(json)
    return json;
  }
  return false;
}

export default function Instagram(photoData) {
    
    console.log(photoData)
    return(
        
        <ul>
            <li>mmm</li>
        </ul>
    )
    
}