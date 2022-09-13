import Link from 'next/link'
import { FiCloud, FiCode, FiLock } from 'react-icons/fi'

type TButtonsProps = {
  demo: string
  code: string
}

const Buttons = ({ demo, code }: TButtonsProps) => (
  <div>
    {code ? (
      <Link href={code}>
        <a>
          <FiCode /> Code
        </a>
      </Link>
    ) : (
      <span>
        <FiLock /> Code
      </span>
    )}
    {demo ? (
      <Link href={demo}>
        <a>
          <FiCloud /> Demo
        </a>
      </Link>
    ) : (
      <span>
        <FiLock /> Demo
      </span>
    )}
  </div>
)

export default Buttons
