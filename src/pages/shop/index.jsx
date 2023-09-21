import React, { useState, useEffect } from 'react';
import { getProduct } from '../../services/api/product';
import Url from '../../components/ui/shop/url';
import Buy from '../../components/ui/shop/buy';
import Seo from '../../seo/shop.jsx';

export default function index() {
  const [dataFetchApi,setDataFetchApi] =useState([])
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await getProduct();
      setDataFetchApi(data);
    };
    fetchData();
  }, []);

  console.log(dataFetchApi,"dataFetch",1)

  return (
    <div>
      <Url />
      <Buy data={dataFetchApi} />
      <Seo />
    </div>
  );
}
