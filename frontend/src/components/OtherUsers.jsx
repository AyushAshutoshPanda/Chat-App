import React, { use } from 'react'

import OtherUser from './OtherUser'
import UseGetOtherUser from '../hooks/UseGetOtherUser'
import { useSelector } from 'react-redux'


const OtherUsers = () => {
   UseGetOtherUser()
   const { otherUsers } = useSelector(store => store.user)
   if (!otherUsers)
      return

   return (
      <div className='overflow-auto'>
         {
            otherUsers?.map((user) => {
               return (<OtherUser key={user._id} user={user} />

               )
            })
         }
        





      </div>
   )
}

export default OtherUsers
