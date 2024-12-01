import { FaGithub } from "react-icons/fa";

export const Card = ({ projectName, link, github, description, techStack }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md max-w-xs w-80 gap-4"> 
            <div>
                <img src={link} alt={projectName} className="w-full h-48 object-cover rounded-md" />
            </div>
            <div className="flex justify-between items-center mt-4">
                <div className="text-lg font-bold">{projectName}</div>
                <a href={github} target="_blank" rel="noopener noreferrer">
                    <div className="text-gray-800 hover:text-gray-600">
                        <FaGithub size={24} />
                    </div>
                </a>
            </div>
            <ul className="flex flex-wrap space-x-2 mt-2 "> 
                {techStack.map((tech, index) => (
                    <li key={index} className="rounded px-2 py-1 text-[#00E4F2]"> 
                        {tech}
                    </li>
                ))}
            </ul>
            <div className="mt-2">{description}</div>
        </div>
    );
};
