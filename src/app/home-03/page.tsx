import liveAuctionData from "@/assets/fake-data/data-live-auction";
import popularCollectionData from "@/assets/fake-data/data-popular-collection";
import heroSliderData from "@/assets/fake-data/data-slider-3";
import todayPickData from "@/assets/fake-data/data-today-pick";
import topSellerData from "@/assets/fake-data/data-top-seller";
import Header from "@/components/header/Header";
import Create from "@/components/layouts/home-2/Create";
import LiveAuction from "@/components/layouts/home-3/LiveAuction";
import PopularCollection from "@/components/layouts/home-3/PopularCollection";
import TodayPicks from "@/components/layouts/home-3/TodayPicks";
import TopSeller from "@/components/layouts/home-3/TopSeller";
import Slider from "@/components/slider/Slider";

const Home03 = () => {
  return (
    <div className="home-3">
      <Header />
      <Slider data={heroSliderData} />
      <Create />
      <LiveAuction data={liveAuctionData} />
      <TopSeller data={topSellerData} />
      <TodayPicks data={todayPickData} />
      <PopularCollection data={popularCollectionData} />
    </div>
  );
};

export default Home03;
