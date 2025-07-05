
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Android Weather App 🌤️",
      description: "A beautiful weather application with real-time updates, location-based forecasts, and intuitive UI design.",
      techStack: ["Java", "Android SDK", "REST API"],
      github: "#",
      demo: "#"
    },
    {
      title: "Jarvis Assistant 🤖",
      description: "An AI-powered voice assistant capable of performing various tasks and providing intelligent responses.",
      techStack: ["Python", "Speech Recognition", "AI/ML"],
      github: "#",
      demo: "#"
    },
    {
      title: "Student Portal Database 🎓",
      description: "A comprehensive database management system for student information, grades, and administrative tasks.",
      techStack: ["MySQL", "Python", "Database Design"],
      github: "#",
      demo: "#"
    },
    {
      title: "Calling App 📞",
      description: "A modern calling application with clean interface and essential communication features.",
      techStack: ["Java", "Android", "WebRTC"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Featured Projects 🚀
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 border-none">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 dark:text-white">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="hover:scale-110 transition-transform">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 hover:bg-blue-50 dark:hover:bg-blue-900"
                  >
                    View Code 💻
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    Live Demo 🌐
                  </Button>
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
