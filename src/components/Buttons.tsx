import Link from 'next/link'
import { FiCloud, FiCode, FiLock } from 'react-icons/fi'

type ButtonsProps = {
  demo?: string
  code?: string
}

const Buttons = ({ demo, code }: ButtonsProps) => {
  const activeClass =
    'flex gap-2 no-underline rounded-lg items-center bg-gray-500 px-3 py-1 text-white'
  const inactiveClass =
    'flex cursor-default line-through decoration-2 gap-2 rounded-lg items-center bg-gray-500 px-3 py-1 text-white text-opacity-50'

  return (
    <div className='mb-12 flex gap-2'>
      {code ? (
        <Link href={code} className={activeClass}>
          <FiCode /> Code
        </Link>
      ) : (
        <span className={inactiveClass}>
          <FiLock /> Code
        </span>
      )}
      {demo ? (
        <Link href={demo} className={activeClass}>
          <FiCloud /> Demo
        </Link>
      ) : (
        <span className={inactiveClass}>
          <FiLock /> Demo
        </span>
      )}
    </div>
  )
}

export default Buttons
