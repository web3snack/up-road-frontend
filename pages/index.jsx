import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>메인페이지</h1>
      <ul>
        <li>검색</li>
        <li>콘텐츠 리스트</li>
      </ul>
    </div>
  )
}
