import React from 'react'
import Banner from '../../components/ui/about/banner'

import Description from "../../components/ui/about/description"
import Ideas from "../../components/ui/about/ideas"
import Technology from "../../components/ui/about/technology"
import Team from "../../components/ui/about/team"
import Location from "../../components/ui/about/locationstore"
import Follow from "../../components/ui/about/follow"
import Seo from "../../seo/about.jsx"
export default function index() {
  return (
    <div>
        {/* <Header></Header> */}
      
        <Banner></Banner>
        <Description></Description>
        <Ideas></Ideas>
        <Technology></Technology>
        <Team></Team>
        <Location></Location>
        <Follow></Follow>
        {/* <Footer></Footer> */}
        <Seo></Seo>
    </div>
  )
}
