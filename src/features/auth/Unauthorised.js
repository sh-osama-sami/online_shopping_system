import React from "react";
import { useNavigate } from "react-router-dom";


const Unauthorised = () => {
    // goes 1 page in history
const navigate = useNavigate();
const goBack = () => navigate(-1);

  return  <div className="unauthorized-container">
            <h2>Unauthorised</h2>
            </div>

};

export default Unauthorised;
