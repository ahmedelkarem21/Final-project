import { Card, Button } from 'react-bootstrap';
import { CiMail } from "react-icons/ci";


export default function Home() {

    return (
        <div className="homeContent">
            I am home
            <CiMail />
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the cards content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
