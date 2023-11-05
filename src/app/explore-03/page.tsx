import todayPickData from "@/assets/fake-data/data-today-pick";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import TodayPicks from "@/components/layouts/explore-03/TodayPicks";
import Link from "next/link";

const Explore03 = () => {
  return (
    <div>
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Explore 3</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="#">Explore</Link>
                  </li>
                  <li>Explore 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TodayPicks data={todayPickData} />
      <Footer />
    </div>
  );
};

export default Explore03;
