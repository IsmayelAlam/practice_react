import supabase from "./supabase";

export default async function apiAuth({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  console.log(data);
  return data;
}
