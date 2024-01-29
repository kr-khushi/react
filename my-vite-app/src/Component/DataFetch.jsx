import React, { useEffect, useState } from "react";
import axios from 'axios'

const DataFetch = () => {

    const [post, setPost] = useState([])
    const [id, setId] = useState(1)

    // useEffect(() => {
    //     axios
    //     .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //     .then(res => {
    //         console.log(res.data)
    //         setPost(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }, [id])

    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

            if(!res.ok){
                throw new Error(`HTTP Error! Status : ${res.status}`)
            }

            const data = await res.json()
            console.log(data)
            setPost(data)

            } catch (error) {
                console.log("Error while fetching data: ", error)
            }
        }

        fetchData()
    }, [id])

    return(
        <>
          <p>Data fetch from json</p>
          <ul>
            {
                // post.map(p => {
                    <li key={post.id}>{post.title}</li>
                // })
            }
          </ul>
        </>
    )
}

export default DataFetch