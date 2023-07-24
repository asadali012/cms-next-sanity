import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props ={
    params:{ project: string}
}

export default async function Project({params}: Props)
{
    const slug = params.project;
    const project = await getProject(slug);


    return <div className="">
        <header className="flex items-center justify-between">
            <h1 className="text-3xl lg:text-5xl text-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent drop-shadow">
                {project.name}
            </h1>
            <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className="bg-gray-100 text-gray-500 font-bold px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition">
                View Project
            </a>
        </header>

        {/* content goes here */}
        <div className="text-lg text-gray-700 mt-5">
            <PortableText value={project.content} />
        </div>

        {/* Image goes here */}
        <Image 
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl" />
    </div>
}