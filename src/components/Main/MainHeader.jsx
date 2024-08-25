import React from 'react'
import BookMarkDark from '../../assets/icons/BookMarkDark'

function MainHeader() {
  return (
    <>
      <div className='flex justify-between items-center '>
        <div>
          <h2 className='text-primary text-lg font-semibold'>Meet the Course Team</h2>
        </div>
        <div className='flex items-center gap-2'>
          <BookMarkDark />
          <p className='font-semibold text-base'>Bookmark/Note</p>
        </div>
      </div>
    </>
  )
}

export default MainHeader