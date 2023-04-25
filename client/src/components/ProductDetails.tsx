import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"



export function ProductDetails() {

    const params = useParams()
    const productId = params.productId

    let name1: string = productId as string;

    const pID = parseInt(name1)

    const item = storeItems.find(i => i.id === pID)

    return (
        <Container>

            <h1 className="pt-4">Product Details</h1>

            <div>
                <div className="row">
                    <div className="col">
                        <img src={item?.imgUrl} alt="photoooo"
                            style={{ width: "400px", height: "400px", objectFit: "cover" }}
                        />
                    </div>
                    <div className="col">
                        <h3>Product name: {item?.name}</h3>
                        <h4>Price: {formatCurrency(item?.price)}</h4>
                    </div>
                </div>

                <div className="pt-5">
                    <h5>Write a Review on the product</h5>
                    <div className="input-group mb-3">
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                        <button className="btn btn-primary">submit</button>
                    </div>
                </div>

            </div>

        </Container>
    )


}