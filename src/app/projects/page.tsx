import { ProjectsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

async function Projects() {

    const projects = await client.fetch(ProjectsQuery);

    return (
        <div>Projects</div>
    )
}

export default Projects