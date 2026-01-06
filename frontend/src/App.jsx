
import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import HeroSlider from './components/HeroSlider';
import ProductSection from './components/ProductSection';
import FeaturedGrid from './components/FeaturedGrid';
import FurnitureDeals from './components/FurnitureDeals';
import SimpleProductSlider from './components/SimpleProductSlider';
import {
  furnitureScrollData,
  appliancesScrollData,
  electronicsDeals,
  weddingGridItems,
  clothingBestSellers,
  fashionAccessories,
  booksToysScrollData,
  beautyFoodScrollData
} from './data/mockData';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#f1f3f6]">
      <Header />
      <div className="flex flex-col gap-2"> {/* Gap for spacing between sections */}
        <Categories />
        <HeroSlider />
        <ProductSection />
        <FeaturedGrid />
        <FurnitureDeals />
        <SimpleProductSlider title="Best deals on furniture" items={furnitureScrollData} />
        <SimpleProductSlider title="Appliances" items={appliancesScrollData} />

        {/* Repeated Sections with New Data */}
        <ProductSection
          title="Top Deals on Electronics"
          items={electronicsDeals}
          adImage="https://picsum.photos/seed/electronics-ad/300/450"
        />
        <FeaturedGrid items={weddingGridItems} />
        <FurnitureDeals
          col1Title="Men's Clothing Best Sellers"
          col1Items={clothingBestSellers}
          col2Title="Fashion Accessories"
          col2Items={fashionAccessories}
          bannerTitle="Fashion Festival Season"
          bannerDesc="50-80% Off on Top Brands"
          bannerBtnText="Shop Fashion"
          bannerBgColor="bg-[#f0f5ff]"
          bannerTextColor="text-[#2874f0]"
        />
        <SimpleProductSlider title="Books, Toys & More" items={booksToysScrollData} />
        <SimpleProductSlider title="Beauty, Food & More" items={beautyFoodScrollData} />

        <Footer />
      </div>
    </div>
  );
}

export default App;
