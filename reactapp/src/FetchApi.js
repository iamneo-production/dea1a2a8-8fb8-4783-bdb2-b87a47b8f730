import React from "react";

function FetchApi(){

    const getApi=() =>{
        
        fetch('http://127.0.0.1:8080/LoginCheck?&username=vignesh&password=123')
        .then((response)=>response.text())
        .then((ans)=>{
           
           if(ans==="yes"){

           }
        });
    }

    return(
       <div>
            API Example

            <button onClick={getApi}> Fetch </button>
       </div>
    )
}

export default FetchApi;