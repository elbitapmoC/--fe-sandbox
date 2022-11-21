'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image';

const Back = () => {
  const router = useRouter();
  return (
    <button type="button" onClick={() => { router.back() }} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-8">
      <Image
        src="/icons/left.svg"
        alt="Left arrow"
        height={16}
        width={16}
        priority
      />
    </button>
  )
}

export default Back