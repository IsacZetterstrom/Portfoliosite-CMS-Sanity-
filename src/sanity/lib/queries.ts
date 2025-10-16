export const NavQuery = `*[_type == "navigation"][0]{
  title,
  logo
}`;

export const LandingPageQuery = `*[_type == "landingPage"][0]{
  title,
  subtitle,
  content,
  image,
  publishedAt
}`;

export const ProjectsQuery = `*[_type == "project"]{
  title,
  slug,
  description,
  image,
  projectUrl,
  githubUrl,
  technologies,
  publishedAt
}`;