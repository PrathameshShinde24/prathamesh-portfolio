import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      const mailtoLink = `mailto:prathameshshinde1224@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;

      toast({
        title: 'Email client opened!',
        description: 'Your email application should open with the message pre-filled.',
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was an issue opening your email client.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Let's Connect!
        </h2>
        <p className="text-lg sm:text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
          Let's build something awesome together
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Form Section */}
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 shadow-xl w-full">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 dark:text-white flex items-center gap-2">
                <Mail className="w-6 h-6" />
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    placeholder="Tell me about your project or just say hello!"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Section */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 shadow-xl w-full">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Connect with me
                </h3>

                <div className="space-y-4">
                  <a
                    href="https://www.linkedin.com/in/prathamesh-shinde-204055264"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Linkedin className="w-7 h-7 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">LinkedIn</h4>
                      <p className="text-gray-600 dark:text-gray-300">Let's connect professionally</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/PrathameshShinde24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="w-7 h-7 text-gray-800 dark:text-white" />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">GitHub</h4>
                      <p className="text-gray-600 dark:text-gray-300">Check out my code</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl">
                    <Mail className="w-7 h-7 text-purple-600" />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                      <p className="text-gray-600 dark:text-gray-300">prathameshshinde1224@gmail.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 shadow-xl w-full">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  Open for opportunities
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I'm actively looking for internships and entry-level roles in web development and software engineering.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
