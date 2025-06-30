
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedGallery from "@/components/FeaturedGallery";
import MintingInterface from "@/components/MintingInterface";
import CollaborativeCanvas from "@/components/CollaborativeCanvas";
import Marketplace from "@/components/Marketplace";
import DAOGovernance from "@/components/DAOGovernance";
import UserDashboard from "@/components/UserDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedGallery />
      <MintingInterface />
      <CollaborativeCanvas />
      <Marketplace />
      <DAOGovernance />
      <UserDashboard />
      <Footer />
    </div>
  );
};

export default Index;
