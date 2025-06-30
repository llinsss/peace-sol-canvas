
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Marketplace = () => {
  const listings = [
    {
      id: 1,
      title: "Peaceful Meditation",
      artist: "ZenMaster",
      currentBid: "3.2 SOL",
      buyNow: "4.5 SOL",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=300&fit=crop",
      timeLeft: "2d 14h"
    },
    {
      id: 2,
      title: "Unity Symphony",
      artist: "SoundOfPeace",
      currentBid: "2.8 SOL",
      buyNow: "3.9 SOL",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop",
      timeLeft: "1d 8h"
    },
    {
      id: 3,
      title: "Harmony Haiku",
      artist: "WordWeaver",
      currentBid: "1.5 SOL",
      buyNow: "2.2 SOL",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=300&h=300&fit=crop",
      timeLeft: "3d 2h"
    }
  ];

  return (
    <section id="marketplace" className="py-20 peace-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-800 mb-4">
            Peace Marketplace
          </h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            Discover and collect meaningful art that promotes peace and unity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((item) => (
            <Card key={item.id} className="bg-white/90 backdrop-blur-sm border-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-sage-700">
                  {item.timeLeft} left
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-sage-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sage-600 mb-4">by {item.artist}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-sage-600">Current Bid</span>
                    <span className="text-lg font-bold text-sage-800">{item.currentBid}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-sage-600">Buy Now</span>
                    <span className="text-lg font-bold text-sage-800">{item.buyNow}</span>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-6">
                  <Button
                    className="flex-1 bg-gradient-to-r from-peace-500 to-sage-500 hover:from-peace-600 hover:to-sage-600 text-white rounded-full"
                  >
                    Place Bid
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-sage-300 text-sage-700 hover:bg-sage-50 rounded-full"
                  >
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-sage-300 text-sage-700 hover:bg-sage-50 px-8 py-4 rounded-full text-lg"
          >
            View All Listings
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
