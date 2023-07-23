import supabase from "./supabase";
import { nanoid } from "nanoid";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ fullName, avatar, password }) {
  let updateDate;
  if (password) updateDate = { password };
  if (fullName) updateDate = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateDate);

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  const fileName = `avatar-data${nanoid()}`;

  const { error: avatarError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (avatarError) throw new Error(error.message);

  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `https://jdsoathhqndqyzvjvcdl.supabase.co/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error(error.message);

  return updatedUser;
}
