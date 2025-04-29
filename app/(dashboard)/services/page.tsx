import React from 'react'
import EditServices from './components/EditServices'
import ManageFeatures from './components/ManageFeatures'
import { OurServices } from '@/utils'
const page =async () => {
        const data = await OurServices()
  return (
    <div>
      <EditServices/>
      {/* {
        data.map((_data)=>(

        ))
      } */}
      
    </div>
  )
}

export default page
