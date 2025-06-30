
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UserDashboard = () => {
  const userStats = {
    ownedNFTs: 24,
    mintedNFTs: 8,
    totalEarnings: "12.5 SOL",
    collaborations: 15
  };

  const ownedNFTs = [
    {
      id: 1,
      title: "Peaceful Garden",
      artist: "NatureArtist",
      price: "2.3 SOL",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Zen Moment",
      artist: "MindfulCreator",
      price: "1.8 SOL",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=200&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Unity Circle",
      artist: "CommunityArt",
      price: "3.1 SOL",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=200&h=200&fit=crop"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: "purchase",
      title: "Purchased 'Peaceful Garden'",
      amount: "2.3 SOL",
      time: "2 hours ago"
    },
    {
      id: 2,
      type: "mint",
      title: "Minted 'Harmony Haiku'",
      amount: "+1.5 SOL",
      time: "1 day ago"
    },
    {
      id: 3,
      type: "collaboration",
      title: "Contributed to Community Canvas",
      amount: "1 pixel",
      time: "3 days ago"
    },
    {
      id: 4,
      type: "sale",
      title: "Sold 'Peaceful Meditation'",
      amount: "+4.2 SOL",
      time: "1 week ago"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-800 mb-4">
            Your Peace Portfolio
          </h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            Track your NFT collection, earnings, and contributions to the peace movement
          </p>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center border-sage-100">
            <CardHeader>
              <CardTitle className="text-lg font-serif text-sage-800">Owned NFTs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-sage-800">{userStats.ownedNFTs}</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-sage-100">
            <CardHeader>
              <CardTitle className="text-lg font-serif text-sage-800">Minted NFTs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-sage-800">{userStats.mintedNFTs}</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-sage-100">
            <CardHeader>
              <CardTitle className="text-lg font-serif text-sage-800">Total Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-sage-800">{userStats.totalEarnings}</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-sage-100">
            <CardHeader>
              <CardTitle className="text-lg font-serif text-sage-800">Collaborations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-sage-800">{userStats.collaborations}</div>
            </CardContent>
          </Card>
        </div>
        
        {/* Dashboard Tabs */}
        <Tabs defaultValue="portfolio" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="portfolio" className="text-sage-700">Portfolio</TabsTrigger>
            <TabsTrigger value="activity" className="text-sage-700">Activity</TabsTrigger>
            <TabsTrigger value="settings" className="text-sage-700">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="portfolio" className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-sage-800 mb-6">Your NFT Collection</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ownedNFTs.map((nft) => (
                  <Card key={nft.id} className="border-sage-100 hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={nft.image}
                        alt={nft.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-serif font-semibold text-sage-800 mb-2">{nft.title}</h4>
                      <p className="text-sm text-sage-600 mb-3">by {nft.artist}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-sage-800">{nft.price}</span>
                        <Button size="sm" variant="outline" className="border-sage-300 text-sage-700 hover:bg-sage-50">
                          List for Sale
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="activity" className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-sage-800 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <Card key={activity.id} className="border-sage-100">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <div className={`w-3 h-3 rounded-full ${
                            activity.type === 'purchase' ? 'bg-blue-500' :
                            activity.type === 'mint' ? 'bg-green-500' :
                            activity.type === 'sale' ? 'bg-yellow-500' :
                            'bg-purple-500'
                          }`}></div>
                          <div>
                            <p className="font-medium text-sage-800">{activity.title}</p>
                            <p className="text-sm text-sage-600">{activity.time}</p>
                          </div>
                        </div>
                        <span className={`font-bold ${
                          activity.amount.includes('+') ? 'text-green-600' : 'text-sage-800'
                        }`}>
                          {activity.amount}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-sage-800 mb-6">Account Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-sage-100">
                  <CardHeader>
                    <CardTitle className="text-sage-800">Wallet Connection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sage-600 mb-4">Connected: Phantom Wallet</p>
                    <p className="text-sm text-sage-500 mb-4">7xK...m2N9</p>
                    <Button variant="outline" className="border-sage-300 text-sage-700 hover:bg-sage-50">
                      Disconnect
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-sage-100">
                  <CardHeader>
                    <CardTitle className="text-sage-800">Notifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" defaultChecked className="rounded border-sage-300" />
                        <span className="text-sage-700">NFT sales</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" defaultChecked className="rounded border-sage-300" />
                        <span className="text-sage-700">New proposals</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded border-sage-300" />
                        <span className="text-sage-700">Collaboration invites</span>
                      </label>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default UserDashboard;
