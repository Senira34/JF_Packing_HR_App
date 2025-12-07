import React from 'react'
import Herosection from '../components/Herosection'
import HomeWidgets from '../components/HomeWidgets'
import Websiteview from '../components/Websiteview'
import WhoWeAre from '../components/WhoWeAre'

export default function Home({ onJobClick, onViewAllJobs }) {
  return (
    <div className="bg-white">
      <Herosection />
      <WhoWeAre />
      <HomeWidgets onJobClick={onJobClick} onViewAllJobs={onViewAllJobs} />
      <Websiteview />
    </div>
  )
}
