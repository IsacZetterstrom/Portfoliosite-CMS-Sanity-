import { LandingPageQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

async function Home() {

  const landingPage = await client.fetch(LandingPageQuery);

  return (
    <><h1>Home</h1></>
  );
}

export default Home
