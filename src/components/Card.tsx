import Link from 'next/link'
import Image from 'next/image'
import { Project } from 'contentlayer/generated'
import Browser from './Browser'

type CardProps = {
  project: Project
}

const Card = ({ project }: CardProps) => {
  return (
    <article className='pb-4'>
      <Link href={`/${project.slug}`}>
        <a>
          <Browser>
            <div style={{ fontSize: 0 }}>
              <Image
                src={`/images/${project.slug}-screenshot.png`}
                width={2560}
                height={1600}
                alt='project screenshot'
                priority
              />
            </div>
          </Browser>
          <h3 className='mt-4'>{project.title}</h3>
        </a>
      </Link>
    </article>
  )
}

export default Card
