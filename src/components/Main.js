import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Brand from './Brand';
import SectionOne from './SectionOne';
import AssetClasses from './AssetClasses';
import SaveSection from './SaveSection';
import RegulationSection from './RegulationSection';
import Review from './Review';
import JoinCommunity from './JoinCommunity';
import JoinInvesting from './JoinInvesting';
import Footer from './Footer';

const Main = () => {
  return (
    <main>
      <Nav />
      <Header />
      <Brand />
      <SectionOne />
      <AssetClasses />
      <SaveSection />
      <RegulationSection />
      <Review />
      <JoinCommunity />
      <JoinInvesting />
      <Footer />
    </main>
  )
}

export default Main