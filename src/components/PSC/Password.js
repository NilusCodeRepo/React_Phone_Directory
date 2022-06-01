import { useState } from "react"

const Password=()=>{
    const [password,setPassword]=useState("")
    return(
        <div>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
    )
}