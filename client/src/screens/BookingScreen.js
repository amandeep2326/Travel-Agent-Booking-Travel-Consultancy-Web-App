import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function BookingScreen() {
    let { agentid } = useParams();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();
    const [agent, setagent] = useState();
    useEffect(() => {
        async function fetch() {
            try {
                setloading(true)
                const data = (await axios.post("/api/agents/getagentbyid",{agentid:agentid})).data;
                console.log(data)
                setagent(data)
                setloading(false)
            } catch (error) {
                setloading(false)
                seterror(true)
            }
        }
        fetch();
    }, []);
    return (
        <div className="m-5">
            {loading?(<h1>loading...</h1>):error?(<h1>Error</h1>) :(
                <div className="row justify-content-center mt-5 bs">
                    <div className="col-md-6">
                        <h1>{agent.name}</h1>
                        <img src = {agent.imageurls[0]} className="bigimg"/>
                    </div>
                    <div className="col-md-4" style={{"text-align":"right"}}>
                        <h1> Booking Details</h1>
                        <hr/>
                        <b>
                        <p>Name : </p>
                        <p>Date : </p>
                        <p>Time : </p>
                        <p>Max Count : {agent.maxcount}</p>
                        <p>Cost : {agent.costperday}</p>
                        
                        </b>
                        <div style={{"float":"right"}}>
                        <button className="btn btn-primary">Pay Now</button>
                        </div>
                    </div>
                    
                </div>
            )
            }
        </div>
    )
}
export default BookingScreen