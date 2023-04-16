import { Link } from "react-router-dom";
// 25fontsize and garamount fonts...
function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="navbar-brand">
          <a href="https://www.adidas.co.in/">
            {/* logo image online uploaded*/}
            <img
              src="https://i.postimg.cc/GmxJ8r3Z/nike-adidas-collab-tee-0-removebg-preview.png"
              alt="a"
              style={{ width: "200px" }}
            />
          </a>
        </div>
        {/* font info for home,products... */}
        <ul class="navbar-nav mr-auto">
          <li
            // add garamount fonts after positioning(everytime..)
            class="nav-item active"
            style={{
              position: "relative",
              paddingLeft: "13rem",
              fontSize: "25px",
              fontFamily: "Garamond"
            }}
          >
            <Link to="./" class="nav-link">
              <i class="fa fa-home" aria-hidden="true"></i> Home{" "}
              <span class="sr-only"></span>
            </Link>
          </li>
          <li
            class="nav-item"
            style={{
              position: "relative",
              paddingLeft: "13rem",
              fontSize: "25px",
              fontFamily: "Garamond"
            }}
          >
            <Link to="./products" class="nav-link">
              <i class="fa fa-product-hunt" aria-hidden="true"></i> Products
            </Link>
          </li>

          <li
            class="nav-item"
            style={{
              position: "relative",
              paddingLeft: "13rem",
              fontSize: "25px",
              fontFamily: "Garamond"
            }}
          >
            <Link to="./product/add" class="nav-link">
              <i class="fa fa-plus" aria-hidden="true"></i> Add (Sell)
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
