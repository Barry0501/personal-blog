// eslint-disable-next-line @next/next/no-img-element

const CenterImageInBlog = ({ src, alt, width = '100%' }) => (
  <div className="grid place-items-center">
    <img className="inline rounded-lg" src={src} alt={alt} width={width} />
  </div>
)

export default CenterImageInBlog
