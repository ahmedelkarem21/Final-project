import { useState } from "react";
import InputContact from "../components/InputContact";
import { Button } from "react-bootstrap"
export default function Contact() {
    let [show, setShow] = useState(true)

    let handleShow = () => {
        setShow(!show)
    }
    return (
        <div>
            <h2>Contact</h2>
            <Button variant="primary" onClick={handleShow}>{show ? "Hide" : "Show"}</Button>
            {show && <InputContact />}
        </div>
    )
}
