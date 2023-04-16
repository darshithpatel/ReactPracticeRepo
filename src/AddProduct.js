import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    if (params.id > 0) {
      fetch(
        "https://6318bc666b4c78d91b2d9fee.mockapi.io/ecommerce/" + params.id,
        {
          method: "GET"
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
        });
    }
  }, []);

  return (
    <>
      <table
        align="center"
        style={{
          width: "40%",
          marginTop: "50px",
          marginBottom: "50px"
        }}
      >
        <tr>
          <td
            style={{
              paddingLeft: "20px",
              fontSize: "20px",
              fontFamily: "Verdana"
            }}
          >
            Name
          </td>
          <td align="left" style={{ fontSize: "25px" }}>
            :
          </td>
          <td align="right">
            <input
              style={{
                width: "100%",
                height: "40px",
                fontSize: "15px",
                backgroundColor: "#1c2331",
                color: "white",
                borderRadius: "8px"
              }}
              placeholder="Enter Product Name"
              value={data.ProductName}
              onChange={(e) => {
                setData({ ...data, ProductName: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td
            style={{
              paddingLeft: "20px",
              fontSize: "20px",
              fontFamily: "Verdana"
            }}
          >
            Image
          </td>
          <td style={{ fontSize: "25px" }}>:</td>
          <td align="right">
            <input
              style={{
                width: "100%",
                height: "40px",
                fontSize: "15px",
                backgroundColor: "#1c2331",
                color: "white",
                borderRadius: "8px",
                marginTop: "10px"
              }}
              placeholder="Enter Product Image URL"
              value={data.ProductImage}
              onChange={(e) => {
                setData({ ...data, ProductImage: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td
            style={{
              paddingLeft: "20px",
              fontSize: "20px",
              fontFamily: "Verdana"
            }}
          >
            Price
          </td>
          <td style={{ fontSize: "25px" }}>:</td>
          <td align="right">
            <input
              style={{
                width: "100%",
                height: "40px",
                fontSize: "15px",
                backgroundColor: "#1c2331",
                color: "white",
                borderRadius: "8px",
                marginTop: "10px"
              }}
              placeholder="Enter Product Price"
              value={data.ProductPrice}
              onChange={(e) => {
                setData({ ...data, ProductPrice: e.target.value });
              }}
              type="number"
              min="1000"
              max="30000"
            />
          </td>
        </tr>
        <tr>
          <td
            style={{
              paddingLeft: "20px",
              fontSize: "20px",
              fontFamily: "Verdana"
            }}
          >
            Category
          </td>
          <td style={{ fontSize: "25px" }}>:</td>
          <td align="right">
            <input
              style={{
                width: "100%",
                height: "40px",
                fontSize: "15px",
                backgroundColor: "#1c2331",
                color: "white",
                borderRadius: "8px",
                marginTop: "10px",
                marginBottom: "10px"
              }}
              placeholder="Enter Product Category"
              value={data.ProductCategory}
              onChange={(e) => {
                setData({ ...data, ProductCategory: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td align="center" colSpan="7">
            <button
              style={{
                color: "white",
                backgroundColor: "#63b560",
                border: "none",
                borderRadius: "30px",
                width: "80px",
                height: "40px",
                fontSize: "20px",
                fontFamily: "Verdana"
              }}
              onClick={() => {
                if (params.id > 0) {
                  fetch(
                    "https://6318bc666b4c78d91b2d9fee.mockapi.io/ecommerce/" +
                      params.id,
                    {
                      method: "PUT",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }
                  ).then(() => {
                    navigate("/products");
                  });
                } else {
                  fetch(
                    "https://6318bc666b4c78d91b2d9fee.mockapi.io/ecommerce/",
                    {
                      method: "POST",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }
                  ).then(() => {
                    navigate("/products");
                  });
                }
              }}
            >
              {params.id > 0 && "Edit  "}
              {!(params.id > 0) && "Add + "}
            </button>
          </td>
        </tr>
      </table>
    </>
  );
}
