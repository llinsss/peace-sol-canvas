
const Footer = () => {
  return (
    <footer className="bg-sage-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-peace-400 to-sage-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <h3 className="text-2xl font-serif font-bold">PeaceSol</h3>
            </div>
            <p className="text-sage-200 mb-4">
              Creating a more peaceful world through the power of art and blockchain technology.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-sage-700 rounded-full flex items-center justify-center hover:bg-sage-600 transition-colors cursor-pointer">
                <span className="text-sm">🐦</span>
              </div>
              <div className="w-8 h-8 bg-sage-700 rounded-full flex items-center justify-center hover:bg-sage-600 transition-colors cursor-pointer">
                <span className="text-sm">📸</span>
              </div>
              <div className="w-8 h-8 bg-sage-700 rounded-full flex items-center justify-center hover:bg-sage-600 transition-colors cursor-pointer">
                <span className="text-sm">💬</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Platform</h4>
            <ul className="space-y-2 text-sage-200">
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#mint" className="hover:text-white transition-colors">Mint NFT</a></li>
              <li><a href="#collaborate" className="hover:text-white transition-colors">Collaborate</a></li>
              <li><a href="#marketplace" className="hover:text-white transition-colors">Marketplace</a></li>
              <li><a href="#dao" className="hover:text-white transition-colors">DAO</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Community</h4>
            <ul className="space-y-2 text-sage-200">
              <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Medium</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-sage-200">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-sage-700 mt-12 pt-8 text-center">
          <p className="text-sage-200">
            © 2024 PeaceSol. Built with ❤️ for a more peaceful world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
