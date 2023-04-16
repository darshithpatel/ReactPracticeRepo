import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetail() {
  let params = useParams();
  const navigate = useNavigate();

  const [ecommerce, setProduct] = useState({});

  useEffect(() => {
    fetch("https://6318bc666b4c78d91b2d9fee.mockapi.io/ecommerce/" + params.id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setProduct(res);
      });
  }, []);

  // product details from api (shoes images from amazon for 20)
  return (
    <>
      {/* name and image&price */}
      <h1 style={{ paddingTop: "2rem", paddingLeft: "24rem" }}>
        <span
          class="badge"
          style={{
            backgroundColor: "#343A40",
            color: "white",
            width: "30rem",
            height: "5rem",
            paddingTop: "1rem",
            borderRadius: "0.6rem"
          }}
        >
          {ecommerce.ProductName}
        </span>
      </h1>

      <div class="row">
        <div class="col-md-3">
          <div
            class="card"
            style={{
              border: "solid black 1px",
              width: "20rem",
              marginTop: "2rem",
              marginLeft: "2rem"
            }}
          >
            <img class="card-img-top" src={ecommerce.ProductImage} alt="a" />
            <div class="card-body">
              <h4 class="card-title" align="center">
                {ecommerce.ProductName}
              </h4>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <table>
                  <tr>
                    <td style={{ paddingLeft: "1rem", width: "2.3rem" }}>
                      Product Price
                    </td>
                    {/* <td style={{ paddingLeft: "1rem" }}>
                      {ecommerce.ProductCategory}
                    </td> */}
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: "1rem" }}>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        backgroundColor="#343A40"
                        placeholder={ecommerce.ProductPrice}
                        readOnly
                      ></input>
                    </td>
                  </tr>
                </table>
              </li>
            </ul>
            <div class="card-body">
              <table>
                <tr>
                  <td style={{ paddingLeft: "1rem", width: "2.3rem" }}>
                    Procuct Category ID
                  </td>
                  {/* <td style={{ paddingLeft: "1rem" }}>
                    {ecommerce.ProductCategory}
                  </td> */}
                </tr>
                <tr>
                  <td style={{ paddingLeft: "1rem" }}>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      backgroundColor="#343A40"
                      placeholder={ecommerce.ProductCategory}
                      readOnly
                    ></input>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card" style={{ marginTop: "2rem", marginLeft: "3rem" }}>
            <h3
              class="card-header"
              style={{ color: "#343A40", paddingTop: "2rem" }}
            >
              Product Details
            </h3>
            <div class="card-body ">
              <p class="card-text">{ecommerce.ProductDescription}</p>
              <h5 class="card-title">{ecommerce.ProcuctCategory}</h5>
              <h5 class="card-title">{ecommerce.ProductPrice}</h5>
            </div>
          </div>
          <table style={{ marginTop: "40px" }}>
            <tr>
              <td>
                <button
                  style={{
                    cursor: "pointer",
                    marginLeft: "4rem",
                    color: "white",
                    backgroundColor: "#f56642",
                    border: "none",
                    borderRadius: "7px",
                    width: "100px",
                    height: "40px",
                    fontSize: "20px"
                  }}
                  onClick={() => {
                    fetch(
                      "https://6318bc666b4c78d91b2d9fee.mockapi.io/ecommerce/" +
                        params.id,
                      {
                        method: "DELETE"
                      }
                    ).then((res) => {
                      navigate("/products");
                    });
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  style={{
                    cursor: "pointer",
                    marginLeft: "10px",
                    color: "white",
                    backgroundColor: "#63B560",
                    border: "none",
                    borderRadius: "7px",
                    width: "80px",
                    height: "40px",
                    fontSize: "20px"
                  }}
                  onClick={() => {
                    navigate("/product/edit/" + params.id);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
export default ProductDetail;
