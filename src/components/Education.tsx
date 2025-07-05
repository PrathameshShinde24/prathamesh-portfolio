
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const certifications = [
    "MongoDB Certification",
    "Java for Beginners",
    "DSA in C++",
    "The Joy of Computing using Python (NPTEL)"
  ];

  return (
    <section className="min-h-screen flex items-center py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-green-900 dark:to-blue-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Education & Certifications 🎓
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education */}
          <Card className="bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-3xl text-gray-800 dark:text-white flex items-center gap-3">
                🏛️ Bachelor of Technology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                    Computer Science Engineering
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Sanjivani University
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Expected Graduation: 2028
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-4">
                  <p className="text-gray-700 dark:text-gray-200">
                    Currently pursuing a comprehensive degree in Computer Science with focus on 
                    software development, algorithms, data structures, and modern programming paradigms.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-3xl text-gray-800 dark:text-white flex items-center gap-3">
                🏆 Certifications & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((certification, index) => (
                  <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                    <Badge variant="secondary" className="w-full justify-center py-2 text-center">
                      {certification}
                    </Badge>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-gray-300 italic">
                  Continuously learning and expanding my skill set! 📚✨
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
