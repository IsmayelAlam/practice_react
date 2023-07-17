import supabase, { supabaseUrl } from "./supabase";
import { nanoid } from "nanoid";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) throw new Error("Cabins could not be loaded");

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin?.image?.startsWith?.(supabaseUrl);

  const imageName = nanoid();

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabinsImages/${imageName}`;

  let query;

  if (!id)
    query = supabase.from("cabins").insert([{ ...newCabin, image: imagePath }]);

  if (id)
    query = supabase
      .from("cabins")
      .update({ ...newCabin, image: imagePath })
      .eq("id", id);

  const { data, error } = await query.select().single();

  console.log(error);

  if (error) throw new Error("Cabins could not be created");

  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabinsImages")
    .upload(imageName, newCabin.image);

  if (storageError) await supabase.from("cabins").delete().eq("id", data.id);

  return data;
}

export async function deleteCabins(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) throw new Error("Cabins could not be deleted");
}
