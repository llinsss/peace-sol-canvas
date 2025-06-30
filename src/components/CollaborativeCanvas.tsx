
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CollaborativeCanvas = () => {
  return (
    <section id="collaborate" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-800 mb-4">
            Collaborative Peace Canvas
          </h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            Join artists worldwide in creating a living masterpiece that evolves with each contribution
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="border-sage-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-sage-800 font-serif">
                  Current Community Canvas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gradient-to-br from-peace-100 via-white to-sage-100 rounded-lg p-4 mb-6">
                  <div className="w-full h-full bg-white rounded-lg shadow-inner flex items-center justify-center">
                    <div className="grid grid-cols-16 gap-1 w-full h-full max-w-md max-h-md">
                      {/* Simulate pixel art grid */}
                      {Array.from({ length: 256 }, (_, i) => (
                        <div
                          key={i}
                          className={`aspect-square rounded-sm ${
                            Math.random() > 0.7
                              ? Math.random() > 0.5
                                ? 'bg-peace-300'
                                : 'bg-sage-300'
                              : 'bg-gray-100'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sage-600 mb-4">
                    <strong>2,847</strong> pixels placed by <strong>156</strong> artists
                  </p>
                  <Button className="bg-gradient-to-r from-peace-500 to-sage-500 hover:from-peace-600 hover:to-sage-600 text-white px-6 py-2 rounded-full">
                    Add Your Pixel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-sage-800 mb-4">
                How It Works
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-peace-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-sage-800">Choose Your Pixel</h4>
                    <p className="text-sage-600">Select an empty pixel on the canvas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sage-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-sage-800">Pick Your Color</h4>
                    <p className="text-sage-600">Choose from our peaceful color palette</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-peace-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-sage-800">Submit & Vote</h4>
                    <p className="text-sage-600">Place your pixel and vote on community art</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-sage-50 rounded-lg p-6">
              <h4 className="font-serif font-bold text-sage-800 mb-3">Community Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-sage-800">156</div>
                  <div className="text-sm text-sage-600">Active Artists</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-sage-800">2,847</div>
                  <div className="text-sm text-sage-600">Pixels Placed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-sage-800">12</div>
                  <div className="text-sm text-sage-600">Completed Works</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-sage-800">45</div>
                  <div className="text-sm text-sage-600">Hours Remaining</div>
                </div>
              </div>
            </div>
            
            <Button
              size="lg"
              variant="outline"
              className="w-full border-2 border-sage-300 text-sage-700 hover:bg-sage-50 py-4 rounded-full text-lg"
            >
              View Previous Canvases
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborativeCanvas;
