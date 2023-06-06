import React from 'react'

const CalenderIcon = ({ ...props }) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2C0.895431 2 0 2.89543 0 4V12C0 13.1046 0.89543 14 2 14H12C13.1046 14 14 13.1046 14 12V4C14 2.89543 13.1046 2 12 2H2ZM12 4H2V6H12V4Z" fill="white" />
      <path d="M5 1C5 0.447715 4.55228 0 4 0C3.44772 0 3 0.447715 3 1V2C3 2.55228 3.44772 3 4 3C4.55228 3 5 2.55228 5 2V1Z" fill="white" />
      <path d="M11 1C11 0.447715 10.5523 0 10 0C9.44772 0 9 0.447715 9 1V2C9 2.55228 9.44772 3 10 3C10.5523 3 11 2.55228 11 2V1Z" fill="white" />
    </svg>
  )
}

export default CalenderIcon