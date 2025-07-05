import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-white leading-tight">
                  Hey there! I'm{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Prathamesh
                  </span>
                  <span className="inline-block ml-2">👋</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Web Developer | Full Stack Enthusiast | Tech Explorer
                </p>

                <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  B.Tech CSE student passionate about creating beautiful, functional websites that make a difference. I love turning ideas into reality through code! 🚀
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  onClick={scrollToProjects}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View My Work
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={scrollToContact}
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get In Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-6 pt-4">
                <Github className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer transition-colors" />
                <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex justify-center lg:justify-end relative">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full"></div>

                {/* Profile Image */}
                <div className="relative">
                  <img
                    src="/lovable-uploads/7a9b9792-814f-4c3e-a640-efe83860728a.png"
                    alt="Prathamesh Shinde"
                    className="w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <div className="animate-bounce">
            <ArrowDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
