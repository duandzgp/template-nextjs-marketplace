"use client";
import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { Dropdown } from "react-bootstrap";
import CardModal from "../CardModal";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface TodayPicksProps {
  data: {
    img: StaticImageData;
    title: string;
    tags: string;
    imgAuthor: StaticImageData;
    nameAuthor: string;
    price: string;
    priceChange: string;
    wishlist: string;
    imgCollection: StaticImageData;
    nameCollection: string;
    feature?: any;
  }[];
}

const TodayPicks = (props: TodayPicksProps) => {
  const data = props.data;

  const [visible, setVisible] = useState(8);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const [modalShow, setModalShow] = useState(false);
  return (
    <Fragment>
      <section className="tf-section today-pick">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-live-auctions mg-bt-21">
                <h2 className="tf-title pad-l-7">Today&apos;s Picks</h2>
                <Link href="/explore-03" className="exp style2">
                  EXPLORE MORE
                </Link>
              </div>
            </div>
            {data.slice(0, visible).map((item, index) => (
              <div
                key={index}
                className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6"
              >
                <div
                  className={`sc-card-product menu_card style2 ${
                    item.feature ? "comingsoon" : ""
                  } `}
                >
                  <div className="meta-info style">
                    <div className="author">
                      <div className="avatar">
                        <Image src={item.imgCollection} alt="Axies" />
                      </div>
                      <div className="info">
                        <span>Collection</span>
                        <h6>
                          {" "}
                          <Link href="/author-02">
                            {item.nameCollection}
                          </Link>{" "}
                        </h6>
                      </div>
                    </div>
                    <div className="menu_card">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                          <i className="fas fa-ellipsis-h"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ margin: 0 }}>
                          <Dropdown.Item href="#">
                            Refresh Metadata
                          </Dropdown.Item>
                          <Dropdown.Item href="#">Share</Dropdown.Item>
                          <Dropdown.Item href="#">Report</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="card-media">
                    <Link href="/item-details-01">
                      <Image src={item.img} alt="Axies" />
                    </Link>
                    <Link href="/login" className="wishlist-button heart">
                      <span className="number-like">{item.wishlist}</span>
                    </Link>
                    <div className="coming-soon">{item.feature}</div>
                  </div>
                  <div className="card-title">
                    <h5 className="style2">
                      <Link href="/item-details-01">{item.title}</Link>
                    </h5>
                    <div className="tags">{item.tags}</div>
                  </div>
                  <div className="meta-info">
                    <div className="author">
                      <div className="avatar">
                        <Image src={item.imgAuthor} alt="Axies" />
                      </div>
                      <div className="info">
                        <span>Owned By</span>
                        <h6>
                          {" "}
                          <Link href="/author-02">{item.nameAuthor}</Link>{" "}
                        </h6>
                      </div>
                    </div>
                    <div className="price">
                      <span>Current Bid</span>
                      <h5>{item.price}</h5>
                    </div>
                  </div>
                  <div className="card-bottom">
                    <button
                      onClick={() => setModalShow(true)}
                      className="sc-button style bag fl-button pri-3 no-bg"
                    >
                      <span>Place Bid</span>
                    </button>
                    <Link href="/activity-01" className="view-history reload">
                      View History
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {visible < data.length && (
              <div className="col-md-12 wrap-inner load-more text-center">
                <Link
                  href="#"
                  id="load-more"
                  className="sc-button loadmore fl-button pri-3"
                  onClick={showMoreItems}
                >
                  <span>Load More</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      <CardModal show={modalShow} onHide={() => setModalShow(false)} />
    </Fragment>
  );
};

TodayPicks.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TodayPicks;
