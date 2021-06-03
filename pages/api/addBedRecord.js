import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_URL, process.env.ANON_KEY);

export default async (req, res) => {
  if (req.method === "POST") {
    const {
      email,
      password,
      phoneNumber,
      name,
      numberOfBeds,
      location,
      description,
    } = req.body;

    const { data, error } = await supabase.from("beds").insert({
      email: email,
      password: password,
      phone_number: phoneNumber,
      name: name,
      number_of_beds: numberOfBeds,
      address: location,
      description: description,
    });
    res.status(200).json({ data: data, error: error });
  } else {
    res.status(400).json({ error: "An unexpected error occured", status: 400 });
  }
};
