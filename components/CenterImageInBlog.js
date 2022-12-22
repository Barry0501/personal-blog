// eslint-disable-next-line @next/next/no-img-element

const CenterImageInBlog = ({ src, alt }) => (
  <div className="grid place-items-center">
    <img className="inline w-full rounded-lg" src={src} alt={alt} />
  </div>
)

export default CenterImageInBlog
