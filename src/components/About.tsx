
const About = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Main Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Hello! I'm Prathamesh Shinde 🎯
              </h3>
              
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate B.Tech Computer Science Engineering student who believes in building 
                  beautiful, functional websites that make people smile 😊
                </p>
                
                <p>
                  My journey in web development started with curiosity and has evolved into a deep love for 
                  creating digital experiences. I enjoy the challenge of turning complex problems into simple, 
                  elegant solutions.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, participating in hackathons, 
                  or contributing to open-source projects. I believe in continuous learning and sharing knowledge 
                  with the community! 🌟
                </p>
              </div>
            </div>

            {/* Right Column - Quick Facts */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                Quick Facts
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    🎓 B.Tech in Computer Science Engineering
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    💻 Full Stack Web Development
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    🚀 Always Learning New Tech
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    🤝 Open to Collaboration
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    🎯 Seeking Internship Opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
