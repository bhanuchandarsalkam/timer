import React,{useState} from 'react';

const Typinginput=()=>{
    const [name,setName]=useState(15);
    let displaytext =
    "eat happily low wooden fight me frighten distant solve move being tin improve guard unhappy band east capital noun myself strike thought turn weather scientist canal finger roll move wonder settlers camera traffic honor compass victory whose health vast ought fresh dog successful straw these of cheese simply answer finally";
    let keychar=0;
    return(
        <div className="name">
        <div className="typing">
            <p>{name}</p>
            <div>
                <button onClick={()=>setName(15)}>15s</button>
                <button onClick={()=>setName(30)}>30s</button>
                <button onClick={()=>setName(60)}>60s</button>
            </div>
            </div>
            <div className="text-box">
            {displaytext.split("").map((char)=>(<span key={'char'+(keychar++)}>{char}</span>))}
            </div>
        </div>
    )
}
export default Typinginput;