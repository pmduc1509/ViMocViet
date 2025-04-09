import React from "react";
import "../styles/BannerGrid.css";

const BannerGrid = () => {
  return (
    <div className="banner-grid-wrapper">
      <div id="banner-grid" className="banner-grid row row-grid banner-thuc-don row-small">
        <div id="image-1" className="col grid-col large-3 grid-col-1-3">
          <div className="col-inner">
            <div className="img has-hover" >
              <div className="img-inner dark">
                <img
                  loading="lazy"
                  width="272"
                  height="184"
                  src="https://demo.tamnguyen.vn/nhahang/wp-content/uploads/2019/04/banner1-1.jpg"
                  alt="banner1"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="image-2"  className="col grid-col large-6 grid-col-2-3">
          <div className="col-inner">
            <div className="img has-hover" >
              <div className="img-inner dark">
                <img
                  loading="lazy"
                  width="565"
                  height="385"
                  src="https://demo.tamnguyen.vn/nhahang/wp-content/uploads/2019/04/banner-05.jpg"
                  alt="banner2"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="image-3"  className="col grid-col large-3 grid-col-1-3">
          <div className="col-inner">
            <div className="img has-hover" >
              <div className="img-inner dark">
                <img
                  loading="lazy"
                  width="272"
                  height="184"
                  src="https://demo.tamnguyen.vn/nhahang/wp-content/uploads/2019/04/banner3.jpg"
                  alt="banner3"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="image-4"  className="col grid-col large-3 grid-col-1-3">
          <div className="col-inner">
            <div className="img has-hover" >
              <div className="img-inner dark">
                <img
                  loading="lazy"
                  width="272"
                  height="184"
                  src="https://demo.tamnguyen.vn/nhahang/wp-content/uploads/2019/04/banner2.jpg"
                  alt="banner4"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="image-5"  className="col grid-col large-3 grid-col-1-3">
          <div className="col-inner">
            <div className="img has-hover" >
              <div className="img-inner dark">
                <img
                  loading="lazy"
                  width="272"
                  height="184"
                  src="https://demo.tamnguyen.vn/nhahang/wp-content/uploads/2019/04/banner-04.jpg"
                  alt="banner5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerGrid;
