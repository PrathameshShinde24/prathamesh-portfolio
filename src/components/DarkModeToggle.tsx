
import { Button } from '@/components/ui/button';

interface DarkModeToggleProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const DarkModeToggle = ({ darkMode, setDarkMode }: DarkModeToggleProps) => {
  return (
    <Button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      size="icon"
    >
      <span className="text-xl">
        {darkMode ? '☀️' : '🌙'}
      </span>
    </Button>
  );
};

export default DarkModeToggle;
