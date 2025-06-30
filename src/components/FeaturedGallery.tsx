
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FeaturedGallery = () => {
  const artworks = [
    {
      id: 1,
      title: "Peaceful Harmony",
      artist: "SolArtist",
      price: "2.5 SOL",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=400&fit=crop",
      category: "Trending"
    },
    {
      id: 2,
      title: "Unity Canvas",
      artist: "PeaceMaker",
      price: "1.8 SOL",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop",
      category: "Community Pick"
    },
    {
      id: 3,
      title: "Serenity",
      artist: "ZenCreator",
      price: "3.2 SOL",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop",
      category: "New"
    },
    {
      id: 4,
      title: "Collaborative Dreams",
      artist: "CommunityArt",
      price: "4.1 SOL",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop",
      category: "Trending"
    },
    {
      id: 5,
      title: "Mindful Moments",
      artist: "PeaceKeeper",
      price: "2.0 SOL",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=400&fit=crop",
      category: "New"
    },
    {
      id: 6,
      title: "Harmony in Nature",
      artist: "EarthArtist",
      price: "2.7 SOL",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop",
      category: "Community Pick"
    }
  ];

  const filters = ["All", "Trending", "New", "Community Picks"];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-800 mb-4">
            Featured Peace Art
          </h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            Discover beautiful, meaningful art created by our community of peace advocates
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={filter === "All" ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === "All"
                  ? "bg-gradient-to-r from-peace-500 to-sage-500 text-white"
                  : "border-sage-200 text-sage-700 hover:bg-sage-50"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <Card key={artwork.id} className="group cursor-pointer overflow-hidden border-sage-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-sage-700">
                    {artwork.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-sage-800 mb-2">
                  {artwork.title}
                </h3>
                <p className="text-sage-600 mb-4">by {artwork.artist}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-sage-800">{artwork.price}</span>
                  <Button
                    size="sm"
                    className="bg-sage-600 hover:bg-sage-700 text-white px-4 py-2 rounded-full"
                  >
                    View Details
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
            Load More Artworks
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
