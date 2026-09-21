import { supabase } from "@/lib/supabase";
import type { Coursebook } from "@/types/coursebook";

export async function getCoursebooks() {
  const { data, error } = await supabase
    .from("coursebooks")
    .select("id, type, title, price, discount_rate, sale_price, image_url")
    .order("id");

  if (error) throw error;
  return data as Coursebook[];
}
