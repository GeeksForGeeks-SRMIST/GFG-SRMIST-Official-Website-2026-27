import React from "react";
import SEO from "@/components/SEO";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import VisionMission from "@/components/home/VisionMission";
import WhatWeDo from "@/components/home/WhatWeDo";
import ImpactStats from "@/components/home/ImpactStats";
import FeaturedEvents from "@/components/home/FeaturedEvents";
import GalleryPreview from "@/components/home/GalleryPreview";
import AchievementsPreview from "@/components/home/AchievementsPreview";
import Sponsors from "@/components/home/Sponsors";
import JoinCTA from "@/components/home/JoinCTA";

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Official website of GeeksforGeeks Campus Body SRMIST — fostering coding excellence, DSA mastery, and full-stack development at SRM Institute of Science and Technology."
        url="https://gfg-srmist.vercel.app/"
      />

      <main>
        <Hero />
        <AboutPreview />
        <VisionMission />
        <WhatWeDo />
        <ImpactStats />
        <FeaturedEvents />
        <GalleryPreview />
        <AchievementsPreview />
        <Sponsors />
        <JoinCTA />
      </main>
    </>
  );
}
