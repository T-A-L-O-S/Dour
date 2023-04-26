import storeItems from '../data/items.json'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { StoreItem } from '../components/StoreItem';

export function Store() {


    return (
        <Container className='fluid'>

            <Row>
                <Col md={2} className="pt-4">
                    <h4 className='pb-4'>Product Categories</h4>
                    <ul className="list-unstyled">
                        <li className='pb-2 active'>All</li>
                        <li className='pb-2'>Category 1</li>
                        <li className='pb-2'>Category 2</li>
                        <li className='pb-2'>Category 3</li>
                    </ul>
                </Col>

                <Col md={10}>
                    <h4 className='pt-4'>Products</h4>
                    <Row xs={1} md={2} lg={3}>

                        {storeItems.map(items => (
                            <Col key={items.id} className="pb-4">
                                <StoreItem {...items} />
                            </Col>
                        ))}

                    </Row>
                </Col>
            </Row>
        </Container>
    )
}