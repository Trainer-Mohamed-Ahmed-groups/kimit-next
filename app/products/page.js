'use client'
import { useState } from "react"

const Page = () => {
    const [username, setUsername] = useState("Mohamed Ahmed")

    let handleUsername = (ev) => {
        setUsername(ev.target.value)
    }
    return (<div>
        <h2>This is in products</h2>
        {username}
        <input type="text" onChange={handleUsername} />
    </div>);
}

export default Page;