import urlMetadata from 'url-metadata'

const LinkPreview = () => {

  const getMetaData = async() => {
    await urlMetadata("https://tailwindcss.com/")
    .then((metadata) => {
      console.log(metadata)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>
      Hello
      <button className='border-2' onClick={getMetaData}>클릭!</button>
    </div>
  )
}

export default LinkPreview