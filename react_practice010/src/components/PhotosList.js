import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";
import PhotosListItem from "./PhotosListItem";
import Skeleton from "./Skeleton";

export default function PhotosList({ album }) {
  const { data, isFetching, error } = useFetchPhotosQuery(album);

  const [addPhoto, resultAddPhoto] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;

  if (isFetching) {
    content = <Skeleton className="h-20 w-20" times={10} />;
  } else if (error) {
    content = <div>error fetching data.</div>;
  } else {
    content = data.map((photo) => (
      <PhotosListItem key={photo.id} photo={photo} />
    ));
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos in {album.title}</h3>
        <Button loading={resultAddPhoto.isLoading} onClick={handleAddPhoto}>
          + Add photos
        </Button>
      </div>
      <div className="flex flex-wrap flex-row justify-center gap-2">
        {content}
      </div>
    </div>
  );
}
