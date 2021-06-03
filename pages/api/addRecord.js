import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_URL, process.env.ANON_KEY);

export default async (req, res) => {
  if (req.method === "POST") {
    const {
      email,
      password,
      phoneNumber,
      name,
      price_per_litre,
      location,
      description,
    } = req.body;

    const { data, error } = await supabase.from("oxygen").insert({
      email: email,
      password: password,
      phone_number: phoneNumber,
      name: name,
      price_per_litre: price_per_litre,
      address: location,
      desc: description,
    });
    res.status(200).json({ data: data, error: error });
  } else {
    res.status(400).json({ error: "An unexpected error occured", status: 400 });
  }
};
