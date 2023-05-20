import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Navigator(){
    const navigate = useNavigate()

    useEffect(() =>{
        navigate("/notes")
    }, []
    )
    
    return
}

export default Navigator