import React, { useState, useEffect } from 'react'
import axios from "axios";
import Agent from '../components/Agent';

function Homescreen() {
    const [agents, setagents] = useState([]);
    const [loading, setloading] = useState();
    const [error, seterror] = useState();
    useEffect(() => {
        async function fetchData() {
            try {
                setloading(true)

                const data = (await axios.get('/api/agents/getallagents')).data
                setagents(data)
                setloading(false)
            } catch (error) {
                seterror(true)
                console.log(error)
                setloading(false)
            }
        }
        fetchData();
    }, [])
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                {loading ? (<h1>loading</h1>) : error ? (<h1>Error</h1>) : (agents.map(agent => {
                    return <div className="col-md-9 mt-2">
                        <Agent agent = {agent} />
                         </div>
                }))}
            </div>
        </div>
    )
}

export default Homescreen