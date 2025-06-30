
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center px-4 py-20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Floating Peace Symbol */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-peace-400 via-sage-400 to-peace-500 rounded-full flex items-center justify-center animate-float shadow-lg">
              <span className="text-white text-6xl">☮</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
            <span className="text-gradient">Create, Collect, and</span>
            <br />
            <span className="text-sage-800">Promote Peace</span>
            <br />
            <span className="text-4xl md:text-5xl text-sage-600">on Solana</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-sage-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Join the world's first Web3 art platform dedicated to peace. Mint meaningful NFTs, 
            collaborate on community art, and build a more peaceful world together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-peace-500 to-sage-500 hover:from-peace-600 hover:to-sage-600 text-white font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Minting
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-sage-300 text-sage-700 hover:bg-sage-50 px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Gallery
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center items-center space-x-8 text-sage-600">
            <div className="text-center">
              <div className="text-2xl font-bold text-sage-800">12.5K+</div>
              <div className="text-sm">NFTs Minted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-sage-800">3.2K+</div>
              <div className="text-sm">Artists</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-sage-800">850+</div>
              <div className="text-sm">Collectors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
