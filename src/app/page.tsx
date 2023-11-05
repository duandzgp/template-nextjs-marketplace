import Image from "next/image";
import styles from "../styles/page.module.css";
import Header from "@/components/header/Header";
import Slider from "@/components/slider/Slider";
import LiveAuction from "@/components/layouts/LiveAuction";
import TopSeller from "@/components/layouts/TopSeller";
import TodayPicks from "@/components/layouts/TodayPicks";
import PopularCollection from "@/components/layouts/PopularCollection";
import Create from "@/components/layouts/Create";
import Footer from "@/components/footer/Footer";
import heroSliderData from "@/assets/fake-data/data-slider";
import liveAuctionData from "@/assets/fake-data/data-live-auction";
import topSellerData from "@/assets/fake-data/data-top-seller";
import todayPickData from "@/assets/fake-data/data-today-pick";
import popularCollectionData from "@/assets/fake-data/data-popular-collection";

export default function Home() {
  return (
    <div className="home-1">
      <Header />
      <Slider data={heroSliderData} />
      <LiveAuction data={liveAuctionData} />
      <TopSeller data={topSellerData} />
      <TodayPicks data={todayPickData} />
      <PopularCollection data={popularCollectionData} />
      <Create />
      <Footer />
    </div>
  );
}
