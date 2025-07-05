const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Removed "Thanks for visiting!" and quote */}

          <div className="border-t border-purple-300 pt-6">
            <p className="text-lg font-medium">
              Made with 💙 by Prathamesh Shinde
            </p>
            <p className="text-purple-200 mt-2">
              © 2024 • Crafted with love, coffee, and lots of code ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
