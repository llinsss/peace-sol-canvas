
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MintingInterface = () => {
  const steps = [
    {
      number: "01",
      title: "Connect Your Wallet",
      description: "Link your Phantom, Backpack, or Solflare wallet to get started",
      icon: "🔗"
    },
    {
      number: "02",
      title: "Upload Your Art",
      description: "Share your peace-themed artwork, music, or poetry with the world",
      icon: "🎨"
    },
    {
      number: "03",
      title: "Mint & Share",
      description: "Confirm your transaction and watch your art become an eternal NFT",
      icon: "✨"
    }
  ];

  return (
    <section id="mint" className="py-20 peace-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-800 mb-4">
            Mint Your Peace
          </h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            Transform your creative vision into a lasting symbol of peace on the Solana blockchain
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="text-center border-white bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-peace-400 to-sage-400 rounded-full flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                </div>
                <div className="text-sm font-bold text-sage-400 mb-2">{step.number}</div>
                <CardTitle className="text-xl font-serif text-sage-800">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sage-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-serif font-bold text-sage-800 mb-6 text-center">
            Ready to Mint?
          </h3>
          <div className="space-y-4">
            <div className="border-2 border-dashed border-sage-200 rounded-lg p-8 text-center hover:border-sage-300 transition-colors">
              <div className="text-4xl mb-4">📁</div>
              <p className="text-sage-600 mb-2">Drop your artwork here or click to browse</p>
              <p className="text-sm text-sage-500">Supports JPG, PNG, GIF, MP4, MP3 (Max 100MB)</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-sage-700 mb-2">Artwork Title</label>
                <input
                  type="text"
                  placeholder="Enter artwork title"
                  className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-300 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sage-700 mb-2">Price (SOL)</label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-300 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">Description</label>
              <textarea
                placeholder="Tell the story behind your peace-themed artwork..."
                rows={4}
                className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-300 focus:border-transparent resize-none"
              />
            </div>
            
            <div className="flex justify-center pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-peace-500 to-sage-500 hover:from-peace-600 hover:to-sage-600 text-white font-medium px-12 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              >
                Mint NFT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MintingInterface;
