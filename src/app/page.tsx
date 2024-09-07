"use client";

import Header from "@/components/headers";
import { AboutSection } from "@/components/home/About";
import ExploreToolsSection from "@/components/home/ExploreToolsSection";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import { WhatPeopleSay } from "@/components/home/WhatPeopleSay";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <HeroSection />
        </Container>
        {/* <AboutSection /> */}
        <Container>
          <Section>
            <ExploreToolsSection />
          </Section>
        </Container>
        <Container>
          <Section>
            <HowItWorks />
          </Section>
        </Container>

        <Section>
          <WhatPeopleSay />
        </Section>
      </main>
    </>
  );
}
