import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

const ProjectsPage: React.FC = () => (
  <div className="min-h-screen bg-gray-900 py-12 pt-20">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-200">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {([
          {
            title: 'Project One',
            description: 'A brief description of the first project, highlighting the key technologies and features.',
            tags: ['React', 'Node.js', 'MongoDB'],
            link: '#',
            image: 'https://cdn.dribbble.com/userupload/37305957/file/original-a8eff2815779a09a595bc733b6b76a6a.png?resize=1024x768&vertical=center',
          },
          {
            title: 'Project Two',
            description: 'A brief description of the second project, highlighting the key technologies and features.',
            tags: ['Python', 'TensorFlow', 'Flask'],
            link: '#',
            image: 'https://cdn.dribbble.com/userupload/43074059/file/original-e723fe6f81f0188a4f4676abbcf06294.webp?resize=1504x1128&vertical=center',
          },
          {
            title: 'Project Three',
            description: 'A brief description of the third project, highlighting the key technologies and features.',
            tags: ['Next.js', 'GraphQL', 'PostgreSQL'],
            link: '#',
            image: 'https://cdn.dribbble.com/userupload/43670863/file/original-a905a8d05e8b69c8452c7409f8794584.webp?resize=1024x745&vertical=center',
          },
        ] as Project[]).map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-gray-200">{project.title}</h3>
              <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-purple-900/50 text-purple-300 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} className="text-purple-400 hover:underline mt-auto flex items-center gap-1">
                View Project <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectsPage;