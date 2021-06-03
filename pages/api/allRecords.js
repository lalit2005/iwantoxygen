import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_URL, process.env.ANON_KEY);

export default async (req, res) => {
  if (req.method === "GET") {
    const { data, error } = await supabase.from("oxygen").select();
    // TODO: .limit(10);

    for (var i = 0; i < data.length; i++) {
      delete data[i]["password"];
    }

    res.status(200).json({ data: data, error: error });
  } else {
    res.status(400).json({ error: "An unexpected error occured", status: 400 });
  }
};
