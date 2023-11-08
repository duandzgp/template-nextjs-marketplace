"use client";
import React, { useState } from "react";
import img1 from "../../../assets/images/box-item/icon1-recont-post.jpg";
import Header from "@/components/header/Header";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import { useDetailEvent } from "@/hooks/useDetailEvent";
import moment from "moment";

const EventDetails = () => {
  const { detailEvent } = useDetailEvent();

  const [ticketSelect, setTicketSelect] = useState<number | null>(null);

  const selectOptionTicket = (id: number) => {
    if (ticketSelect === id) {
      setTicketSelect(null);
    } else {
      setTicketSelect(id);
    }
  };

  return (
    <div>
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Event Detail</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tf-section post-details">
        <div className="themesflat-container">
          <div className="wrap-flex-box style">
            <div className="post">
              <div className="inner-content">
                <h2 className="title-post">{detailEvent?.event.name}</h2>
                <div className="divider"></div>
                <div className="meta-post flex mg-bt-31">
                  <div className="box d-flex">
                    <div className="inner boder pad-r-50">
                      <h6 className="desc">LOCATION</h6>
                      <p>{detailEvent?.event.location}</p>
                    </div>
                    <div className="inner mg-l-39 mg-r-1">
                      <h6 className="desc">DATE</h6>
                      <p>{moment(detailEvent?.event.date).format("LL")}</p>
                    </div>
                  </div>
                </div>
                <div className="image">
                  <Image
                    src={detailEvent?.event.feature_image ?? ""}
                    width={1000}
                    height={500}
                    alt="Axies"
                  />
                </div>
                <div className="inner-post mg-t-40">
                  <p className="mg-bt-24">{detailEvent?.event.description}</p>
                </div>
              </div>
            </div>
            <div className="side-bar details">
              <div className="widget widget-recent-post mg-bt-43">
                <h3 className="title-widget mg-bt-23">Buy Ticket</h3>
                <ul>
                  {detailEvent?.tickets?.map((item, index) => (
                    <li
                      key={index}
                      className={`box-recent-post ${
                        ticketSelect === item.id
                          ? "btn-select-ticket-active"
                          : "btn-select-ticket"
                      }`}
                      onClick={() => selectOptionTicket(item.id)}
                    >
                      <div className="box-feature">
                        <Image src={img1} alt="Axies" />
                      </div>
                      <div className="box-content">
                        <p className="title-recent-post">{item.name}</p>
                        <span>
                          <span className="sub-recent-post">
                            {item.current_qty}/{item.total_qty}
                          </span>
                          <b className="day-recent-post text-white">
                            {item.price} ALGO
                          </b>
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                style={{ width: "100%" }}
                className="sc-button loadmore style bag fl-button pri-3"
                disabled={ticketSelect ? false : true}
              >
                <span>Buy</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default EventDetails;
