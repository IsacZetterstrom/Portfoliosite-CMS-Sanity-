import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Portfolio")
    .items([
      S.listItem()
        .title("Landing Page")
        .child(
          S.document().schemaType("landingPage").documentId("landingPage")
        ),
      S.documentTypeListItem("projects").title("Projects"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() && !["landingPage", "projects"].includes(item.getId()!)
      ),
    ]);
