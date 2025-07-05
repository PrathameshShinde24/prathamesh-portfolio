import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Android Weather App 🌤️",
      description:
        "A beautiful weather application with real-time updates, location-based forecasts, and intuitive UI design.",
      techStack: ["Java", "Android SDK", "REST API"],
    },
    {
      title: "Jarvis Assistant 🤖",
      description:
        "An AI-powered voice assistant capable of performing various tasks and providing intelligent responses.",
      techStack: ["Python", "Speech Recognition", "AI/ML"],
    },
    {
      title: "Student Portal Database 🎓",
      description:
        "A comprehensive database management system for student information, grades, and administrative tasks.",
      techStack: ["MySQL", "Python", "Database Design"],
    },
    {
      title: "Calling App 📞",
      description:
        "A modern calling application with clean interface and essential communication features.",
      techStack: ["Java", "Android", "WebRTC"],
    },
  ];

  return (
    <section className="min-h-screen py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Featured Projects 🚀
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 border-none"
            >
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-gray-800 dark:text-white">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="hover:scale-105 transition-transform px-3 py-1 text-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
