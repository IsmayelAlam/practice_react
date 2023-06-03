import ImageShow from "./ImageShow";
import "./ImageList.css";

export default function ImageList({ images }) {
  const renderImages = images.map((image) => (
    <ImageShow image={image} key={image.id} />
  ));

  return <div className="image-list">{renderImages}</div>;
}
