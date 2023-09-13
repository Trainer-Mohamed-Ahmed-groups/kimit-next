"use client"
import { useState } from "react";

const Page = () => {
    var [username , setUsername] = useState("Mohamed")

    return (<div>
        <h2>This is in products</h2>
        {username}
        {console.log(username)}
    </div>);
}

export default Page;