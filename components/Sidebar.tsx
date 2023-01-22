import React from 'react'
import style from './layout.module.css'
import { useRouter } from 'next/router' 

const Sidebar = () => {
  const router = useRouter()
  return (
    <div className={`${style.sidebar} dark:bg-gray-800 dark:text-white`}>
      sidebar
      <p onClick={() => router.push('/')}>홈</p>
      <p onClick={() => router.push('/subtitle/create_sub')}> 자막 생성</p>
    </div>
  )
}

export default Sidebar