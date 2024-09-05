"use client";

import Header from "@/components/headers";
import ExploreToolsSection from "@/components/home/ExploreToolsSection";
import HeroSection from "@/components/home/HeroSection";
import Container from "@/components/shared/Container";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <HeroSection />
          <ExploreToolsSection />
        </Container>
      </main>
    </>
  );
}
