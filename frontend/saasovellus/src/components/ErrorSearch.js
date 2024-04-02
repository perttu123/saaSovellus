import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import React from 'react';

const ErrorSearch = () => {
    const navigate = useNavigate();
    return (
        <>

        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
         <Card style={{ backgroundColor: '#332D2D', border: '2px solid black', paddingLeft: "20px", width: "50%"}} >
         <Card.Body style={{ position: 'relative' , justifyContent: 'center'}}>
           <Card.Title style={{fontSize:"30px", color:"#f8f9fa"}}>Oops! Something went wrong.</Card.Title>
   
             <div style={{ marginLeft: '25%', marginRight: '20%' }}>
             <Card.Title style={{fontSize:"40px", color:"#f8f9fa"}}>Type correctly next time</Card.Title>
             <button className="btn btn-primary" onClick={() => navigate("/Mikkeli")}>Reload Page</button>
             </div>
             
         </Card.Body>
       </Card>
       </div>
       </>
    );
}

export default ErrorSearch;