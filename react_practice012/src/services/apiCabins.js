import supabase, { supabaseUrl } from "./supabase";
import { nanoid } from "nanoid";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) throw new Error("Cabins could not be loaded");

  return data;
}

export async function createCabin(newCabin) {
  const imageName = nanoid();

  const imagepath = `${supabaseUrl}/storage/v1/object/public/cabinsImages/${imageName}`;

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagepath }])
    .select();

  if (error) throw new Error("Cabins could not be created");

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
