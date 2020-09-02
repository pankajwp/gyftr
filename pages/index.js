import { initializeStore } from "../redux/store";

import Link from "next/link";
import Router from "next/router";

import Layout from "../components/layout";
import HomeSlider from "../components/home/home-slider";
import AmazingDeals from "../components/home/amazing-deals";
import SellingBrands from "../components/home/selling-brands";
import TrendingCat from "../components/home/trending-cat";
import BestDiscounts from "../components/home/best-discounts";

import owl_carousel from "../utils/owl-carousel";
import custom from "../utils/custom";

const Index = () => {
  React.useEffect(() => {
    custom();
    owl_carousel();
    Router.events.on("routeChangeComplete", () =>
      $("body").removeClass("open-nav")
    );
  }, []);

  return (
    <Layout
      title="Online Gift Voucher Website | Indus Shop Plus"
      desc="Gift Voucher Website"
    >
      <HomeSlider />

      <AmazingDeals />

      <SellingBrands />

      <TrendingCat />

      <BestDiscounts />
    </Layout>
  );
};

export async function getStaticProps() {
  const store = initializeStore();

  return {
    props: {},
  };
}

export default React.memo(Index);
