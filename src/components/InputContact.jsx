// import { useContext } from "react"
// import { ProductsContext } from "../App"
import { useState } from "react"
import { useEffect } from "react"

export default function InputContact() {
    let [username, setUsername] = useState("")
    // let products = useContext(ProductsContext)

    let handleUsername = (ev) => {
        setUsername(ev.target.value)
    }

    let sayRendered = () => {
        console.log("rendered")
    }

    useEffect(() => {
        sayRendered()
    }, [])

    useEffect(() => {
        if (username !== "") {
            console.log("Changed")
        }
    }, [username]) // only run when username changes

    useEffect(() => {
        return () => {
            console.log("cleanup")
        }
    }, [])

    return (
        <div>
            <input className="form-control w-50 mx-auto" onChange={handleUsername} type="text" />
            {/* {products.numOfProducts} */}
        </div>
    )
}
