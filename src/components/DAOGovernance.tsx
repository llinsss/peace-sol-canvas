
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DAOGovernance = () => {
  const proposals = [
    {
      id: 1,
      title: "Establish Peace Education Initiative",
      description: "Allocate 10% of treasury funds to create educational content about peace and conflict resolution through art.",
      status: "Active",
      votesFor: 1247,
      votesAgainst: 89,
      timeLeft: "5 days",
      type: "Treasury"
    },
    {
      id: 2,
      title: "Monthly Community Art Challenge",
      description: "Launch a monthly themed art challenge with rewards for top community-voted pieces.",
      status: "Pending",
      votesFor: 892,
      votesAgainst: 156,
      timeLeft: "12 days",
      type: "Community"
    },
    {
      id: 3,
      title: "Partnership with Peace Organizations",
      description: "Collaborate with established peace organizations to expand our reach and impact.",
      status: "Active",
      votesFor: 1654,
      votesAgainst: 234,
      timeLeft: "2 days",
      type: "Partnership"
    }
  ];

  return (
    <section id="dao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-800 mb-4">
            DAO Governance
          </h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            Shape the future of PeaceSol through community-driven governance and democratic decision-making
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center border-sage-100">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-sage-800">Active Voters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-sage-800 mb-2">2,341</div>
              <p className="text-sage-600">Community members participating in governance</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-sage-100">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-sage-800">Total Proposals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-sage-800 mb-2">47</div>
              <p className="text-sage-600">Proposals submitted since launch</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-sage-100">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-sage-800">Treasury Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-sage-800 mb-2">15,432</div>
              <p className="text-sage-600">SOL in community treasury</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-serif font-bold text-sage-800 text-center mb-8">
            Current Proposals
          </h3>
          
          {proposals.map((proposal) => (
            <Card key={proposal.id} className="border-sage-100 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Badge
                      variant={proposal.status === "Active" ? "default" : "secondary"}
                      className={`${
                        proposal.status === "Active"
                          ? "bg-peace-500 hover:bg-peace-600"
                          : "bg-sage-200 text-sage-700"
                      }`}
                    >
                      {proposal.status}
                    </Badge>
                    <Badge variant="outline" className="border-sage-300 text-sage-700">
                      {proposal.type}
                    </Badge>
                  </div>
                  <span className="text-sm text-sage-600">{proposal.timeLeft} remaining</span>
                </div>
                <CardTitle className="text-xl font-serif text-sage-800">
                  {proposal.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sage-600 mb-6">{proposal.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-peace-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-sage-700">Votes For</span>
                      <span className="text-lg font-bold text-peace-700">{proposal.votesFor}</span>
                    </div>
                    <div className="w-full bg-peace-100 rounded-full h-2">
                      <div
                        className="bg-peace-500 h-2 rounded-full"
                        style={{
                          width: `${(proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100}%`
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="bg-sage-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-sage-700">Votes Against</span>
                      <span className="text-lg font-bold text-sage-700">{proposal.votesAgainst}</span>
                    </div>
                    <div className="w-full bg-sage-100 rounded-full h-2">
                      <div
                        className="bg-sage-500 h-2 rounded-full"
                        style={{
                          width: `${(proposal.votesAgainst / (proposal.votesFor + proposal.votesAgainst)) * 100}%`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-peace-600 hover:bg-peace-700 text-white rounded-full">
                    Vote For
                  </Button>
                  <Button variant="outline" className="flex-1 border-sage-300 text-sage-700 hover:bg-sage-50 rounded-full">
                    Vote Against
                  </Button>
                  <Button variant="ghost" className="flex-1 text-sage-600 hover:text-sage-800 rounded-full">
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
            className="bg-gradient-to-r from-peace-500 to-sage-500 hover:from-peace-600 hover:to-sage-600 text-white px-8 py-4 rounded-full text-lg"
          >
            Submit New Proposal
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DAOGovernance;
