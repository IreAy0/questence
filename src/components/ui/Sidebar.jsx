import React from 'react'
import CourseIcon from '../../assets/icons/CourseIcon'
import Bookmark from '../../assets/icons/Bookmark'
import Message from '../../assets/icons/Message'
import Bell from '../../assets/icons/Bell'
import { studies } from '../../../course_outline'
import AccordionItem from '../AccordionItem'
function Sidebar() {
  return (
   <div className='flex justify-center  flex-col w-11/12 mx-auto'>
    <div >
      <ul className='flex gap-10 py-5 px-5'>
        <li>
          <CourseIcon color={"#00798C"} />
        </li>
        <li>
          <Bookmark />
        </li>
        <li>
          <Message />
        </li>
        <li>
          <Bell />
        </li>
      </ul>
    </div>
    <div className="mt-2">
            {studies.map((study, index) => (
                <AccordionItem key={index} study={study} />
            ))}
        </div>
   </div>
  )
}

export default Sidebar