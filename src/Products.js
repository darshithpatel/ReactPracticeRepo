import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://6318bc666b4c78d91b2d9fee.mockapi.io/ecommerce/")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setProducts(res);
      });
  }, []);

  const foramtedProducts = products.map((pro) => {
    return (
      <>
        <Link to={"../product/" + pro.id}>
          <div
            class="card, col-10"
            style={{
              width: "17rem",
              border: "solid black 1px"
            }}
          >
            <img
              class="card-img-top"
              style={{ width: "200px" }}
              src={pro.ProductImage}
              alt="i"
            />
            <div class="card-body">
              <h5 class="card-title">{pro.ProductName}</h5>
              <a href="#" class="btn btn-primary">
                Product Details
              </a>
            </div>
          </div>
        </Link>
      </>
    );
  });

  return (
    <>
      <div class="container">
        <div class="row">{foramtedProducts}</div>
      </div>
    </>
  );
}

export default Products;
