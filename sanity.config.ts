import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk";
// import project from "./sanity/schemas/project-schema";
import schemas from "./sanity/schemas"

const config = defineConfig({
    projectId: "guml0be7",
    dataset:"production",
    title:"cms-next",
    apiVersion:"2023-07-23",
    basePath:"/admin",
    plugins:[deskTool()],
    // schema:{types: [project]}
    schema:{types: schemas}
})


export default config;