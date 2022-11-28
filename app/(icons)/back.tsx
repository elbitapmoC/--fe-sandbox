'use client'

import Link from "next/link";

const Back = () => {

  return (
    <Link href='/' type="button" className='w-fit grid' aria-label="Back button, takes us home" title='Button to go back home'>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.35376 1.68681C8.54902 1.49154 8.54902 1.17496 8.35376 0.979699C8.1585 0.784436 7.84192 0.784436 7.64666 0.979699L1.33354 7.29281C0.943017 7.68334 0.943019 8.3165 1.33354 8.70703L7.64666 15.0201C7.84192 15.2154 8.1585 15.2154 8.35376 15.0201C8.54902 14.8249 8.54902 14.5083 8.35376 14.313L2.54073 8.5H15.3336C15.6098 8.5 15.8336 8.27614 15.8336 8C15.8336 7.72386 15.6098 7.5 15.3336 7.5H2.54057L8.35376 1.68681Z" fill="currentColor" />
      </svg>
    </Link>
  )
}

export default Back