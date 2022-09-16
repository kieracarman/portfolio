import { PropsWithChildren } from 'react'

const Browser = ({ children }: PropsWithChildren) => {
  return (
    <div className='w-full overflow-hidden rounded-xl border border-background-light'>
      <div className='flex items-center justify-between bg-background py-2 px-2'>
        <div className='ml-1 flex w-14 justify-between'>
          <div className='h-3 w-3 rounded-full bg-alert'></div>
          <div className='h-3 w-3 rounded-full bg-warn'></div>
          <div className='h-3 w-3 rounded-full bg-success'></div>
        </div>
        <div className='ml-3 h-5 w-full rounded-md bg-background-light'></div>
      </div>
      <div>{children}</div>
    </div>
  )
}
export default Browser
