import React,{useState} from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Agent({agent}) {
    const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//     console.log(agent);
  return (
    <div className="row bs">
        <div className="col-md-4">
            <img src = {agent.imageurls[0]} className='smallimg'></img>
        </div>
        <div className="col-md-7 ">
            <h1>{agent.name}</h1>
            <p>Max Count : {agent.maxcount}</p>
            <p>Phone Number : {agent.phonenumber}</p>
            <p>Type : {agent.type}</p>
            <p>Description : {agent.description}</p>
            <div style = {{float:'right'}}>
              <Link to = {`/book/${agent._id}`}>
                <button  className="btn btn-primary" >
                    Book Now
                </button>
                </Link>
    
            </div>
        </div>
{/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button> */}
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{agent.name}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
         </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Agent