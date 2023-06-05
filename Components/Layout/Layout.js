import React from 'react'

function Layout({children}) {
  return (
    <div>
        <header className='max-w-[600px] m-auto flex flex-col items-center bg-blue-700 rounded-lg p-[10px]'>
            <h1 className='text-4xl font-bold text-orange-500'>Kamy Cars</h1>
            <h2 className='text-xl text-red-700 font-bold'>Choos an Buy your Car</h2>
        </header>

            <div className='min-h-[700px]'>{children}</div>

        <footer className='bg-gray-600 text-white text-[20px] text-center p-[15px]'>
            <p>This website has been designed by Kamyar Kamali to showcase pagination in Next.js ©</p>
        </footer>
    </div>
  )
}

export default Layout