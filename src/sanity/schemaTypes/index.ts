import { type SchemaTypeDefinition } from "sanity";
import projectSchema from "./projectsSchema";
import landingPage from "./landingPageSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingPage, projectSchema],
};
