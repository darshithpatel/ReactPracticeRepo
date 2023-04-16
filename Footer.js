import React from "react";

function Footer() {
  return (
    <div>
      <div class="container-fluid" style={{ marginTop: "-40px" }}>
        <footer
          class="text-center text-white"
          style={{ backgroundColor: "#343A40" }}
        >
          <div class="container">
            <section class="mt-5">
              <div class="row text-center d-flex justify-content-center pt-5">
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="text-white">
                      About us
                    </a>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="text-white">
                      Products
                    </a>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="text-white">
                      Awards
                    </a>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="text-white">
                      Help
                    </a>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="text-white">
                      Contact
                    </a>
                  </h6>
                </div>
              </div>
            </section>

            <hr class="my-5" />

            <section class="mb-5" style={{ marginTop: "-40px" }}>
              <div class="row d-flex justify-content-center">
                <div class="col-lg-8">
                  <p>
                    Nike Air cushioning reduces the weight of the shoe without
                    reducing performance. The lighter the shoe is, the less
                    energy athletes put out during their performance. Athletes
                    need the cushioning in their footwear to last, and Nike Air
                    is designed to provide support throughout the life of the
                    shoe.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div
            class="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 ALL RIGHTS RESERVED TO NIKE - ADIDAS
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
