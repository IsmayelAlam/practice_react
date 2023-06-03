export default function ImageShow({ image }) {
  return <img src={image.urls.small_s3} alt={image.alt_description} />;
}
