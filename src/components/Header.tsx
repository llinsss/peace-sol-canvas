
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b border-sage-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-peace-400 to-sage-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <h1 className="text-2xl font-serif font-bold text-sage-800">PeaceSol</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#gallery" className="text-sage-700 hover:text-sage-900 transition-colors">Gallery</a>
          <a href="#mint" className="text-sage-700 hover:text-sage-900 transition-colors">Mint</a>
          <a href="#collaborate" className="text-sage-700 hover:text-sage-900 transition-colors">Collaborate</a>
          <a href="#marketplace" className="text-sage-700 hover:text-sage-900 transition-colors">Marketplace</a>
          <a href="#dao" className="text-sage-700 hover:text-sage-900 transition-colors">DAO</a>
        </nav>
        
        <Button 
          className="bg-gradient-to-r from-peace-500 to-sage-500 hover:from-peace-600 hover:to-sage-600 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Connect Wallet
        </Button>
      </div>
    </header>
  );
};

export default Header;
