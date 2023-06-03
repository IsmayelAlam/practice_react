import ImageShow from "./ImageShow";

export default function ImageList({ images }) {
  const renderImages = images.map((image) => (
    <ImageShow image={image} key={image.id} />
  ));

  return <div>{renderImages}</div>;
}
