import IndivisualProject from "../../../components/sections/IndivisualProject";
import { portfolioData } from "../../../data/portfolio-data";

export default async function ProjectPage({ params }) {
  // Step 1: Await params
  const resolvedParams = await params;
  // console.log("Resolved Params:", resolvedParams);

  // Step 2: Extract id
  const { id } = resolvedParams;
  // console.log("ID:", id);

  // Step 3: Find the project
  const project = portfolioData.projects.find(
    (p) => p.id === parseInt(id, 10)
  );
  // console.log("Project:", project);

  // Step 4: Return minimal UI
  return <IndivisualProject project={project}/>
}
