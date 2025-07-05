const About = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Hello! I'm Prathamesh Shinde 🎯
            </h3>

            <div className="space-y-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
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
          <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg">
            <h4 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Quick Facts
            </h4>

            <div className="space-y-4">
              {[
                { color: "blue", text: "🎓 B.Tech in Computer Science Engineering" },
                { color: "green", text: "💻 Full Stack Web Development" },
                { color: "purple", text: "🚀 Always Learning New Tech" },
                { color: "yellow", text: "🤝 Open to Collaboration" },
                { color: "red", text: "🎯 Seeking Internship Opportunities" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-3 h-3 bg-${item.color}-500 rounded-full`}></div>
                  <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
