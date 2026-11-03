import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeHero from '../components/HomeHero';
import MetricsTicker from '../components/MetricsTicker';
import CompletedProjectsCarousel from '../components/CompletedProjectsCarousel';
import GroupVerticals from '../components/GroupVerticals';
import JewelSpotlight from '../components/JewelSpotlight';
import Testimonials from '../components/Testimonials';

export default function HomePage({ onOpenBooking }) {
  const navigate = useNavigate();

  const handleExploreJewel = () => {
    navigate('/project/jewel-of-panvel');
  };

  const handleExplorePortfolio = () => {
    navigate('/portfolio');
  };

  const handleSelectProject = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div>
      {/* Mitkar Group Corporate Hero */}
      <HomeHero
        onOpenBooking={() => onOpenBooking('General Inquiry')}
        onExploreJewel={handleExploreJewel}
        onExplorePortfolio={handleExplorePortfolio}
      />

      {/* 25-Year Proven Track Record Metrics */}
      <MetricsTicker />

      {/* Completed Projects Showcase Carousel from mitkarbuilders.com/completed-projects */}
      <CompletedProjectsCarousel onOpenBooking={onOpenBooking} />

      {/* 4 Core Real Estate Verticals of Mitkar Group */}
      <GroupVerticals onExplorePortfolio={handleExplorePortfolio} />

      {/* Dedicated Spotlight Teaser for Flagship Project: Jewel of Panvel */}
      <JewelSpotlight
        onExploreJewel={handleExploreJewel}
        onOpenBooking={onOpenBooking}
      />

      {/* Homeowner Voices Across Navi Mumbai */}
      <Testimonials />
    </div>
  );
}
