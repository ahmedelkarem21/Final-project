import { Button, Row, Col, Card, Container, Spinner } from "react-bootstrap"
import { useEffect, useState } from "react"

export default function Products() {

    let [products, setProducts] = useState([])

    let getProducts = () => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }

    useEffect(()=>
    {
        getProducts()
    },[])
    return (
        <div>
            <h2>Products</h2>
            <Container fluid>
                <Row className="g-4">
                    {products.length > 0
                        ? products.map(product =>
                            <Col md={4} key={product.id}>
                                <Card className="h-100">
                                    <Card.Img variant="top" src={product.image} loading="lazy" />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>{products.description}</Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                        :
                        <Spinner animation="grow" className="m-auto" />
                    }
                </Row>
            </Container>
        </div>
    )
}
