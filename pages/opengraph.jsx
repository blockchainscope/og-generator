import { useRouter } from 'next/router'

export default function Opengraph() {
  const { query } = useRouter()
  const { title } = query

  return (
    <div className='w-[1200px] h-[630px]'>
      <div className='flex flex-col h-full items-center justify-between px-12 py-24'>
        <h1 className='text-7xl grow font-semibold'>{title}</h1>
        {/* <img className='w-24 h-24 rounded-full mb-4' src={img} alt={title} /> */}
        <span className='text-3xl'>by blockchainscope.io</span>
      </div>
    </div>
  )
}