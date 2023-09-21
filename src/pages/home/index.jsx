import React from 'react'

import Support from "../../components/ui/home/support";
import Sale from "../../components/ui/home/sale";
import DealsOfDay from "../../components/ui/home/dealsOfDay";
import Bestseller from "../../components/ui/home/bestseller";
import Selling from "../../components/ui/home/selling";
import Featured from "../../components/ui/home/featured";
import BannerSell from "../../components/ui/home/bannerSell";
import HotDeals from "../../components/ui/home/hotDeals";
import Recommended from "../../components/ui/home/recommended";
import Container from "../../components/ui/home/container";
import Contact from "../../components/ui/home/contact";
import Banner from "../../components/ui/home/Banner";
import Seo from "../../seo/home.jsx"
import { useEffect,useState } from "react";
import {getProduct} from "../../services/api/product";
export default function index() {
  const [dataFetchApi,setDataFetchApi] =useState([])
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await getProduct();
      setDataFetchApi(data);
    };
    fetchData();
  }, []);

  console.log(dataFetchApi)
  return (
    <div>

      <Banner dataFetchApi={dataFetchApi}></Banner>
      <Support></Support>
      <Sale dataFetchApi={dataFetchApi}></Sale>
      <DealsOfDay dataFetchApi={dataFetchApi}></DealsOfDay>
      {/* <Bestseller></Bestseller> */}
      <Selling dataFetchApi={dataFetchApi}></Selling>
      <Featured dataFetchApi={dataFetchApi}></Featured>
      <BannerSell></BannerSell>
      <HotDeals></HotDeals>
      <Recommended dataFetchApi={dataFetchApi} ></Recommended>
      <Container></Container>
      <Contact></Contact>
  
      <Seo></Seo>

    </div>
  )
}
