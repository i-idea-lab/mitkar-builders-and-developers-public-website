import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectHeroBanner from '../components/ProjectHeroBanner';
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
      {/* 1st Viewport: Prestigious Projects Showcase Hero Banner */}
      <ProjectHeroBanner onOpenBooking={onOpenBooking} />

      {/* 2nd Viewport: Mitkar Group Corporate & Engineering Legacy */}
      <HomeHero
        onOpenBooking={() => onOpenBooking('General Inquiry')}
        onExploreJewel={handleExploreJewel}
        onExplorePortfolio={handleExplorePortfolio}
      />

      {/* 3rd Viewport: 25-Year Proven Track Record Metrics */}
      <MetricsTicker />

      {/* 4th Viewport: Completed Projects Showcase Carousel from mitkarbuilders.com/completed-projects */}
      <CompletedProjectsCarousel onOpenBooking={onOpenBooking} />

      {/* 5th Viewport: 4 Core Real Estate Verticals of Mitkar Group */}
      <GroupVerticals onExplorePortfolio={handleExplorePortfolio} />

      {/* 6th Viewport: Dedicated Spotlight Teaser for Flagship Project: Jewel of Panvel */}
      <JewelSpotlight
        onExploreJewel={handleExploreJewel}
        onOpenBooking={onOpenBooking}
      />

      {/* 7th Viewport: Homeowner Voices Across Navi Mumbai */}
      <Testimonials />
    </div>
  );
}