import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/products/ProductSlicer';
import Product from './Product';
import { Container, Row, Spinner } from 'react-bootstrap';
import { fetchProductById } from '../redux/product-crude';

function ProductList() {
    const { data, status, error } = useSelector(state => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        if (status === 'idle') {
            // dispatch(fetchProducts())
            dispatch(fetchProductById(12));
        }
        else if (status === 'successed') {
            console.log(data)
        }
        else {
            console.log(error)
        }
    }, [status, dispatch])

    let content = ''
    if (status === 'loading')
        content = <Spinner animation="border" role="status" text="Loading..." />
    else if (status === "successed")
        content = data.map((prod) => <Product key={prod.id} product={prod} />)
    else if (status === 'failed')
        content = <div>{error}</div>


    return (
        <>
            <Container>
                <Row>
                    {content}
                </Row>
            </Container>
        </>
    )
}

export default ProductList