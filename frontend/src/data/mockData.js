
import athleticShoesImg from '../assets/flipkartimages/athlatic shoes.png';
import beltImg from '../assets/flipkartimages/belt.png';
import blazerImg from '../assets/flipkartimages/blazer.png';
import blueJeansImg from '../assets/flipkartimages/blue jeans.png';
import denimJacketImg from '../assets/flipkartimages/denim jacket.png';
import gownImg from '../assets/flipkartimages/gown.png';
import heelsImg from '../assets/flipkartimages/heals.png';
import leatherBagImg from '../assets/flipkartimages/leather bag.png';
import sneakersImg from '../assets/flipkartimages/sneakers.png';
import watchImg from '../assets/flipkartimages/stylish watch.png';
import summerDressImg from '../assets/flipkartimages/summer dress.png';
import sunglassesImg from '../assets/flipkartimages/sunglass.png';
import sweaterImg from '../assets/flipkartimages/sweater.png';
import trackPantsImg from '../assets/flipkartimages/track pants.png';
import whiteTshirtImg from '../assets/flipkartimages/white t shirt.png';
import winterScarfImg from '../assets/flipkartimages/winter scarf.png';
import banner1Img from '../assets/flipkartimages/banner1.jpg';
import banner2Img from '../assets/flipkartimages/banner2.jpeg';
import banner3Img from '../assets/flipkartimages/banner3.jpeg';

export const categories = [
    { name: "Minutes", icon: trackPantsImg },
    { name: "Mobiles & Tablets", icon: sneakersImg },
    { name: "Fashion", icon: summerDressImg },
    { name: "Electronics", icon: watchImg },
    { name: "TVs & Appliances", icon: denimJacketImg },
    { name: "Home & Furniture", icon: winterScarfImg },
    { name: "Flight Bookings", icon: sunglassesImg },
    { name: "Beauty, Food..", icon: gownImg },
    { name: "Grocery", icon: leatherBagImg },
];

export const heroSlides = [
    {
        id: 1,
        image: banner1Img,
        title: "Big Savings on Fashion",
        subtitle: "Up to 70% Off",
        offer: "Shop Now",
        tag: "Best of Styles",
    },
    {
        id: 2,
        image: banner2Img,
        title: "Electronics Bonanza",
        subtitle: "Top Deals on Gadgets",
        offer: "Grab Now",
        tag: "Latest Tech",
    },
    {
        id: 3,
        image: banner3Img,
        title: "Home & Furniture Sale",
        subtitle: "Makeover Your Home",
        offer: "Discover Now",
        tag: "Comfort & Style",
    }
];

export const smartphoneDeals = [
    // Using remaining local assets images which are not already used in top categories
    { name: "iPhone 15", image: blazerImg, price: "From ₹65,999" },
    { name: "Galaxy S24", image: athleticShoesImg, price: "From ₹74,999" },
    { name: "moto g04", image: blueJeansImg, price: "From ₹6,999" },
    { name: "edge 40 neo", image: whiteTshirtImg, price: "From ₹22,999" },
    { name: "vivo T2x 5G", image: sweaterImg, price: "From ₹11,999" },
    { name: "POCO C65", image: beltImg, price: "From ₹7,999" },
];

export const electronicsDeals = [
    { name: "Noise Smartwatch", image: "https://loremflickr.com/312/312/smartwatch,wearable", price: "From ₹1,299" },
    { name: "Sony Headphones", image: "https://loremflickr.com/312/312/sony,headphones", price: "From ₹4,999" },
    { name: "Canon Cameras", image: "https://loremflickr.com/312/312/canon,camera", price: "From ₹45,999" },
    { name: "HP Laptops", image: "https://loremflickr.com/312/312/hp,laptop", price: "From ₹35,999" },
    { name: "Gaming Monitors", image: "https://loremflickr.com/312/312/gaming,monitor", price: "From ₹12,999" },
    { name: "Power Banks", image: "https://loremflickr.com/312/312/powerbank,battery", price: "From ₹999" },
];

export const featuredGridItems = [
    {
        id: 1,
        tag: "Chill-ready winter fits",
        title: "Fort Collins, Wildcraft...",
        offer: "Min. 55% Off",
        image: sweaterImg
    },
    {
        id: 2,
        tag: "Ethnic styles, redefined",
        title: "Libas, Indo Era & more",
        offer: "Min. 70% Off",
        image: gownImg
    },
    {
        id: 3,
        tag: "Flex your sporty side",
        title: "PUMA, ADIDAS & more",
        offer: "Min. 60% Off",
        image: athleticShoesImg
    },
    {
        id: 4,
        tag: "Helmets, riding jackets...",
        title: "Riding essentials",
        offer: "From ₹799",
        image: "https://loremflickr.com/612/612/motorcycle,helmet"
    },
    {
        id: 5,
        tag: "Revel, Intern & more",
        title: "Acoustic guitars",
        offer: "Up to 65% Off",
        image: "https://loremflickr.com/612/612/acoustic-guitar"
    },
    {
        id: 6,
        tag: "NIVEA, Plix...",
        title: "Winter care",
        offer: "Under ₹349",
        image: "https://loremflickr.com/612/612/skincare,cream"
    }
];

export const weddingGridItems = [
    {
        id: 1,
        tag: "Wedding Special",
        title: "Designer Sarees",
        offer: "Min. 60% Off",
        image: "https://loremflickr.com/612/612/saree,wedding"
    },
    {
        id: 2,
        tag: "Groom's Choice",
        title: "Sherwanis & Suits",
        offer: "Min. 40% Off",
        image: "https://loremflickr.com/612/612/sherwani,groom"
    },
    {
        id: 3,
        tag: "Jewelry Essentials",
        title: "Sets, Rings & more",
        offer: "Up to 80% Off",
        image: "https://loremflickr.com/612/612/jewelry,necklace"
    },
    {
        id: 4,
        tag: "Footwear",
        title: "Heels & Mojaris",
        offer: "Under ₹999",
        image: "https://loremflickr.com/612/612/heels,footwear"
    },
    {
        id: 5,
        tag: "Home Decor",
        title: "Lights & Flowers",
        offer: "From ₹199",
        image: "https://loremflickr.com/612/612/decor,lights"
    },
    {
        id: 6,
        tag: "Gifting",
        title: "Gift Sets",
        offer: "Min 20% Off",
        image: "https://loremflickr.com/612/612/gift,box"
    }
];


export const furnitureBestDeals = [
    { name: "Collapsible Wardrobes", offer: "Min. 50% Off", image: "https://loremflickr.com/612/612/wardrobe,closet" },
    { name: "Home Temple", offer: "Min. 50% Off", image: "https://loremflickr.com/612/612/home-temple,altar" },
    { name: "Kitchen Trolleys", offer: "Top Sellers", image: "https://loremflickr.com/612/612/kitchen,trolley" },
    { name: "Hammock Swings", offer: "Min. 50% Off", image: "https://loremflickr.com/612/612/hammock,swing" },
];

export const homeDecor = [
    { name: "Mats", offer: "Top Deals", image: "https://loremflickr.com/612/612/doormat,rug" },
    { name: "Wall Clocks", offer: "Widest Range", image: "https://loremflickr.com/612/612/wall-clock,decor" },
    { name: "Blankets", offer: "Best Deals", image: "https://loremflickr.com/612/612/blanket,warm" },
    { name: "Water Bottles & Flasks", offer: "Min. 50% Off", image: "https://loremflickr.com/612/612/water-bottle,flask" },
];

export const clothingBestSellers = [
    { name: "Men's Shirts", offer: "Min. 50% Off", image: whiteTshirtImg },
    { name: "Women's Kurtas", offer: "Min. 60% Off", image: gownImg },
    { name: "Jeans", offer: "Top Sellers", image: blueJeansImg },
    { name: "T-Shirts", offer: "Min. 70% Off", image: summerDressImg },
];

export const fashionAccessories = [
    { name: "Watches", offer: "Top Deals", image: watchImg },
    { name: "Handbags", offer: "Widest Range", image: leatherBagImg },
    { name: "Sunglasses", offer: "Best Deals", image: sunglassesImg },
    { name: "Belts & Wallets", offer: "Min. 50% Off", image: beltImg },
];

export const furnitureScrollData = [
    { name: "Bean Bag", price: "from ₹999", image: "https://loremflickr.com/312/312/bean-bag,chair" },
    { name: "Portable laptop table", price: "from ₹399", image: "https://loremflickr.com/312/312/laptop-table,desk" },
    { name: "Wardrobes", price: "From ₹8999", image: "https://loremflickr.com/312/312/wardrobe,closet" },
    { name: "TV Units", price: "from ₹1999", image: "https://loremflickr.com/312/312/tv-unit,media" },
    { name: "Wardrobe", price: "From ₹9,999", image: "https://loremflickr.com/312/312/wardrobe,furniture" },
    { name: "Office Tables", price: "From ₹2,999", image: "https://loremflickr.com/312/312/office-table,desk" },
    { name: "Chairs", price: "From ₹2990", image: "https://loremflickr.com/312/312/office-chair" },
];

export const appliancesScrollData = [
    { name: "Best-selling Refrigerators", price: "From ₹9,990", image: "https://loremflickr.com/312/312/refrigerator,appliance" },
    { name: "Fully automatics", price: "Shop now!", image: "https://loremflickr.com/312/312/washing-machine" },
    { name: "Kitchen Essentials", price: "From ₹1249", image: "https://loremflickr.com/312/312/kitchen,appliances" },
    { name: "Microwave Ovens", price: "From ₹3,999", image: "https://loremflickr.com/312/312/microwave,oven" },
    { name: "Home Essentials", price: "Shop Now!", image: "https://loremflickr.com/312/312/water-purifier,appliance" },
    { name: "Fans & Geysers", price: "From ₹799", image: "https://loremflickr.com/312/312/fan,geyser" },
    { name: "Lowest Price Ever", price: "From ₹2,999/M*", image: "https://loremflickr.com/312/312/air-conditioner,ac" },
];

export const booksToysScrollData = [
    { name: "Best Selling Books", price: "From ₹99", image: "https://loremflickr.com/312/312/books,reading" },
    { name: "Remote Control Toys", price: "Up to 70% Off", image: "https://loremflickr.com/312/312/remote-control,toy" },
    { name: "Board Games", price: "From ₹199", image: "https://loremflickr.com/312/312/board-game" },
    { name: "Soft Toys", price: "From ₹149", image: "https://loremflickr.com/312/312/teddy-bear" },
    { name: "Educational Toys", price: "Min 40% Off", image: "https://loremflickr.com/312/312/educational-toy" },
    { name: "Stationery", price: "From ₹49", image: "https://loremflickr.com/312/312/stationery,pens" },
    { name: "Outdoor Sports", price: "From ₹299", image: "https://loremflickr.com/312/312/outdoor,sports" },
];

export const beautyFoodScrollData = [
    { name: "Makeup Bestsellers", price: "From ₹499", image: "https://loremflickr.com/312/312/makeup,cosmetics" },
    { name: "Premium Fragrances", price: "Min 40% Off", image: "https://loremflickr.com/312/312/perfume,fragrance" },
    { name: "Hair Care", price: "From ₹199", image: "https://loremflickr.com/312/312/hair-care,shampoo" },
    { name: "Skincare", price: "Up to 60% Off", image: "https://loremflickr.com/312/312/skincare,face-cream" },
    { name: "Chocolates & Snacks", price: "From ₹99", image: "https://loremflickr.com/312/312/chocolates,snacks" },
    { name: "Tea & Coffee", price: "Min 30% Off", image: "https://loremflickr.com/312/312/coffee,tea" },
    { name: "Baby Care", price: "From ₹149", image: "https://loremflickr.com/312/312/baby-care,products" },
];
