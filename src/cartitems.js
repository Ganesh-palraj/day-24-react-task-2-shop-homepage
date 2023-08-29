import React from "react";
import { Card, CardBody, CardFooter, CardTitle } from "reactstrap";
import { Container } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import Button from "react-bootstrap/Button";

export default function Cartitems({ props, addToCart, cartItems , removeFromCart }) {
  return (
    <>
      <Container className="px-4 px-lg-5 mt-5">
        <div className="row gx-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {props.map((data) => (
            <div className="col mb-5">
              <Card key={data.id} className="h-100">
                {data.name === "Special Item" ? (
                  <div className="badge bg-dark text-white position-absolute">
                    Sale
                  </div>
                ) : (
                  ""
                )}
                {data.name === "Sale Item" ? (
                  <div className="badge bg-dark text-white position-absolute">
                    Sale
                  </div>
                ) : (
                  ""
                )}
                <img
                  className="card-img-top"
                  alt="Sample"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                />
                <CardBody className="p-4 text-center ">
                  <CardTitle className="fw-bolder" tag="h5">
                    {data.name}
                  </CardTitle>
                  {data.name === "Special Item" ? (
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  ) : (
                    ""
                  )}
                  {data.name === "Popular Item" ? (
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  ) : (
                    ""
                  )}
                  <div>{data.price}</div>
                </CardBody>
                <CardFooter className="p-4 pt-0 border-top-0 bg-transparent text-center">
                  <div className="text-center">
                    <div className="mt-auto">
                      {data.id in cartItems ? (
                        <>
                          <Button
                            variant="outline-dark"
                            disabled={true}
                            onClick={() => addToCart(data.id)}
                          >
                            {data.button}
                          </Button>
                          <Button variant="outline-dark" onClick={() => removeFromCart(data.id)}>Remove from cart</Button>
                        </>
                      ) : (
                        <Button
                          variant="outline-dark"
                          onClick={() => addToCart(data.id)}
                        >
                          {data.button}
                        </Button>
                      )}
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
