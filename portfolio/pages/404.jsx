// pages/404.js
import Head from 'next/head'

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 | MageshKumar</title>
        <meta name="description" content="Portfolio" />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <div className="text-6xl font-extrabold text-gray-800">404</div>
          <h3 className="text-xl font-semibold mb-3">Whoops!</h3>
          <p className="text-gray-600">The page you’re looking for doesn’t exist or has been moved.</p>
        </div>
      </div>
    </>
  )
}

export default Custom404
