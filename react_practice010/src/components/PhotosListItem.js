import { GoTrashcan } from "react-icons/go";
import { useDeletePhotoMutation } from "../store";

export default function PhotosListItem({ photo }) {
  const [removePhoto, resultRemovePhoto] = useDeletePhotoMutation();

  const handleDeletePhoto = () => removePhoto(photo);

  return (
    <div className="relative cursor-pointer m-2">
      <img className="h-20" src={photo.url} alt="photos" />
      <div
        className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80 text-center"
        onClick={handleDeletePhoto}
      >
        <GoTrashcan className="text-3xl fill-black" />
      </div>
    </div>
  );
}
