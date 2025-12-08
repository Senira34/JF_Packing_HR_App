import React from 'react'
import Herosection from '../components/Herosection'
import HomeWidgets from '../components/HomeWidgets'
import Websiteview from '../components/Websiteview'
import WhoWeAre from '../components/WhoWeAre'
import LatestCreations from '../components/LatestCreations'

export default function Home({ onJobClick, onViewAllJobs }) {
  return (
    <div className="bg-white">
      <Herosection />
      <WhoWeAre />
      <LatestCreations />
      <HomeWidgets onJobClick={onJobClick} onViewAllJobs={onViewAllJobs} />
      <Websiteview />
    </div>
  )
}
