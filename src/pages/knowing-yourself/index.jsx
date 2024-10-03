import Courses from '@/components/Yourself/Courses'
import Header from '@/components/Yourself/header'
import Interest from '@/components/Yourself/intrest'
import React from 'react'

function KnowingYourself() {
  return (
    <div className="my-10">
      <Header/>
      <Interest/>
      <Courses/>
    </div>
  )
}

export default KnowingYourself
