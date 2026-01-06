
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

// Category specific images
import electronicsImg from '../assets/flipkartimages/electronics.jpeg';
import fashionImg from '../assets/flipkartimages/fashion.jpg';
import flightImg from '../assets/flipkartimages/flight.jpeg';
import furnitureImg from '../assets/flipkartimages/furniture.jpeg';
import groceryImg from '../assets/flipkartimages/grocery.jpeg';
import mobilesImg from '../assets/flipkartimages/mobiles.jpeg';

export const categories = [
    { name: "Minutes", icon: watchImg },
    { name: "Mobiles & Tablets", icon: mobilesImg },
    { name: "Fashion", icon: fashionImg },
    { name: "Electronics", icon: electronicsImg },
    { name: "TVs & Appliances", icon: banner2Img },
    { name: "Home & Furniture", icon: furnitureImg },
    { name: "Flight Bookings", icon: flightImg },
    { name: "Beauty, Food..", icon: gownImg },
    { name: "Grocery", icon: groceryImg },
];

export const categoryDropdowns = {
    "Fashion": {
        sections: [
            {
                heading: "Men's Top Wear",
                items: ["Men's T-Shirts", "Men's Casual Shirts", "Men's Formal Shirts", "Men's Kurtas", "Men's Ethnic Sets", "Men's Blazers", "Men's Raincoat", "Men's Windcheaters", "Men's Suit", "Men's Fabrics"]
            },
            {
                heading: "Women's Western",
                items: ["Women's Tops", "Women's Dresses", "Women's T-shirts", "Women's Jeans", "Women's Nightweare", "Women's Bathrobes", "Women's Jumpsuits", "Women's Dungarees", "Women's Winter Wear"]
            },
            {
                heading: "Men's Bottom Wear",
                items: ["Men's Jeans", "Men's Trousers", "Men's Trackpants", "Men's Shorts", "Men's Cargos", "Men's Three Fourths", "Men's Boxers", "Men's Trunk & Vests"]
            }
        ]
    },
    "Mobiles & Tablets": {
        sections: [
            {
                heading: "Mobiles",
                items: ["Mi", "Realme", "Samsung", "Infinix", "OPPO", "Apple", "Vivo", "Honor", "Asus", "Poco X2", "realme Narzo 10", "Infinix Hot 9", "IQOO 3", "iPhone SE", "Motorola razr", "realme Narzo 10A", "Motorola g8 power lite"]
            },
            {
                heading: "Mobile Accessories",
                items: ["Mobile Cases", "Headphones & Headsets", "Power Banks", "Screenguards", "Memory Cards", "Smart Headphones", "Mobile Cables", "Mobile Chargers", "Mobile Holders"]
            }
        ]
    },
    "Electronics": {
        sections: [
            {
                heading: "Audio",
                items: ["Bluetooth Headphones", "Wired Headphones", "True Wireless Earbuds", "Bluetooth Speakers", "Soundbars", "Home Theatres", "TV Streaming Device", "Remote Control"]
            },
            {
                heading: "Cameras & Accessories",
                items: ["DSLR & Mirrorless", "Compact & Bridge Cameras", "Sports & Action", "Camera Accessories", "Lens", "Tripods", "Camera Bags"]
            },
            {
                heading: "Computer Peripherals",
                items: ["Printers", "Monitors", "Projectors", "Portable Projectors", "Ink Cartridges", "Ink Bottles", "Mouse", "Keyboards", "Power Banks"]
            }
        ]
    },
    "TVs & Appliances": {
        sections: [
            {
                heading: "Televisions",
                items: ["Screen Guards", "Playstation Consoles", "Playstation Games", "Playstation Controllers", "Mouse", "Gaming Keyboards", "Xbox Consoles", "Xbox Games"]
            },
            {
                heading: "Air Conditioners",
                items: ["Split ACs", "Window ACs", "Inverter ACs", "Portable ACs", "Fixed Speed ACs"]
            },
            {
                heading: "Kitchen Appliances",
                items: ["Microwave Ovens", "Oven Toaster Grills (OTG)", "Juicer/Mixer/Grinder", "Electric Kettle", "Induction Cooktops", "Chimneys", "Hand Blenders", "Sandwich Makers", "Pop Up Toasters"]
            }
        ]
    },
    "Home & Furniture": {
        sections: [
            {
                heading: "Kitchen & Dining",
                items: ["Cookware", "Knives, Choppers & Cutters", "Gas Stoves", "Tiffins", "Bakeware", "Pressure Cookers", "Flasks", "Casseroles", "Kitchen Tools", "Tableware & Dinnerware", "Containers & Bottles", "Coffee Mugs"]
            },
            {
                heading: "Furniture",
                items: ["Beds", "Sofas", "Dining Tables", "Chairs", "TV Units", "Shoe Racks", "Cupboards", "Bean Bags", "Mattresses"]
            },
            {
                heading: "Home Decor",
                items: ["Paintings", "Clocks", "Wall Shelves", "Stickers", "Showpieces", "Photo Frames", "Diya", "Candles & Stands", "Vases", "Flowers"]
            }
        ]
    },
    "Beauty, Food..": {
        sections: [
            {
                heading: "Beauty & Grooming",
                items: ["Deodorants", "Perfumes", "Make Up", "Hair Care", "Skin Care", "Body Care", "Personal Care & Grooming"]
            },
            {
                heading: "Food & Drinks",
                items: ["Beverages", "Nuts & Dry Fruits", "Cooking Essentials", "Snacks Corner", "Breakfast Items", "Chocolates", "Sweets Store", "Jams, Honey & Spreads", "Ready to Cook"]
            }
        ]
    },
    "Grocery": {
        sections: [
            {
                heading: "Staples",
                items: ["Dals & Pulses", "Ghee & Oils", "Atta & Flours", "Masalas & Spices", "Rice & Rice Products", "Dry Fruits, Nuts & Seeds", "Sugar, Jaggery & Salt"]
            },
            {
                heading: "Snacks & Beverages",
                items: ["Biscuits", "Chips, Namkeen & Snacks", "Tea", "Coffee", "Fruit Juices", "Squash & Syrups", "Soft Drinks", "Health Drinks", "Energy Drinks"]
            }
        ]
    },
    // Default for others
    "Minutes": {
        sections: [
            {
                heading: "More on Minutes",
                items: ["Prepaid Recharge", "Postpaid Bill Payment", "Broadband Bill Payment", "DTH Recharge", "Electricity Bill Payment"]
            }
        ]
    },
    "Flight Bookings": {
        sections: [
            {
                heading: "Travel",
                items: ["Flight Bookings", "Bus Bookings", "Hotel Bookings", "Holiday Packages", "Train Bookings"]
            }
        ]
    }
};

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
    { name: "Top Mirrorless Cameras", image: electronicsImg, price: "Shop Now!" },
    { name: "Printers", image: banner2Img, price: "From ₹2336" },
    { name: "Monitors", image: banner3Img, price: "From ₹6599" },
    { name: "Best of Shavers", image: leatherBagImg, price: "From ₹1,699" },
    { name: "Power Banks", image: mobilesImg, price: "Grab Now" },
    { name: "Smartwatches", image: watchImg, price: "From ₹1,299" },
];

export const electronicsDeals = [
    { name: "Mobile Cases", image: mobilesImg, price: "From ₹129" },
    { name: "Headphones", image: watchImg, price: "From ₹999" },
    { name: "Cameras", image: electronicsImg, price: "From ₹45,999" },
    { name: "Laptops", image: banner2Img, price: "From ₹35,999" },
    { name: "Gaming Monitors", image: banner3Img, price: "From ₹12,999" },
    { name: "Power Banks", image: mobilesImg, price: "From ₹999" },
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
        image: denimJacketImg
    },
    {
        id: 5,
        tag: "Fashion Forward",
        title: "Latest Trends",
        offer: "Up to 65% Off",
        image: summerDressImg
    },
    {
        id: 6,
        tag: "Winter Care",
        title: "Cozy Comfort",
        offer: "Under ₹349",
        image: winterScarfImg
    }
];

export const weddingGridItems = [
    {
        id: 1,
        tag: "Wedding Special",
        title: "Designer Sarees",
        offer: "Min. 60% Off",
        image: gownImg
    },
    {
        id: 2,
        tag: "Groom's Choice",
        title: "Sherwanis & Suits",
        offer: "Min. 40% Off",
        image: blazerImg
    },
    {
        id: 3,
        tag: "Jewelry Essentials",
        title: "Sets, Rings & more",
        offer: "Up to 80% Off",
        image: sunglassesImg
    },
    {
        id: 4,
        tag: "Footwear",
        title: "Heels & Mojaris",
        offer: "Under ₹999",
        image: heelsImg
    },
    {
        id: 5,
        tag: "Home Decor",
        title: "Lights & Flowers",
        offer: "From ₹199",
        image: furnitureImg
    },
    {
        id: 6,
        tag: "Gifting",
        title: "Gift Sets",
        offer: "Min 20% Off",
        image: beltImg
    }
];


export const furnitureBestDeals = [
    { name: "Wardrobes", offer: "Min. 50% Off", image: furnitureImg },
    { name: "Home Temple", offer: "Min. 50% Off", image: banner3Img },
    { name: "Kitchen Trolleys", offer: "Top Sellers", image: banner2Img },
    { name: "Hammock Swings", offer: "Min. 50% Off", image: furnitureImg },
];

export const homeDecor = [
    { name: "Mats", offer: "Top Deals", image: banner1Img },
    { name: "Wall Clocks", offer: "Widest Range", image: watchImg },
    { name: "Blankets", offer: "Best Deals", image: winterScarfImg },
    { name: "Water Bottles", offer: "Min. 50% Off", image: leatherBagImg },
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
    { name: "Bean Bag", price: "from ₹999", image: furnitureImg },
    { name: "Portable laptop table", price: "from ₹399", image: banner2Img },
    { name: "Wardrobes", price: "From ₹8999", image: furnitureImg },
    { name: "TV Units", price: "from ₹1999", image: electronicsImg },
    { name: "Wardrobe", price: "From ₹9,999", image: furnitureImg },
    { name: "Office Tables", price: "From ₹2,999", image: banner3Img },
    { name: "Chairs", price: "From ₹2990", image: furnitureImg },
];

export const appliancesScrollData = [
    { name: "Best-selling Refrigerators", price: "From ₹9,990", image: electronicsImg },
    { name: "Fully automatics", price: "Shop now!", image: banner2Img },
    { name: "Kitchen Essentials", price: "From ₹1249", image: groceryImg },
    { name: "Microwave Ovens", price: "From ₹3,999", image: electronicsImg },
    { name: "Home Essentials", price: "Shop Now!", image: banner3Img },
    { name: "Fans & Geysers", price: "From ₹799", image: electronicsImg },
    { name: "Lowest Price Ever", price: "From ₹2,999/M*", image: banner2Img },
];

export const booksToysScrollData = [
    { name: "Best Selling Books", price: "From ₹99", image: banner1Img },
    { name: "Remote Control Toys", price: "Up to 70% Off", image: electronicsImg },
    { name: "Board Games", price: "From ₹199", image: banner3Img },
    { name: "Soft Toys", price: "From ₹149", image: sweaterImg },
    { name: "Educational Toys", price: "Min 40% Off", image: banner2Img },
    { name: "Stationery", price: "From ₹49", image: groceryImg },
    { name: "Outdoor Sports", price: "From ₹299", image: athleticShoesImg },
];

export const beautyFoodScrollData = [
    { name: "Makeup Bestsellers", price: "From ₹499", image: gownImg },
    { name: "Premium Fragrances", price: "Min 40% Off", image: sunglassesImg },
    { name: "Hair Care", price: "From ₹199", image: summerDressImg },
    { name: "Skincare", price: "Up to 60% Off", image: winterScarfImg },
    { name: "Chocolates & Snacks", price: "From ₹99", image: groceryImg },
    { name: "Tea & Coffee", price: "Min 30% Off", image: groceryImg },
    { name: "Baby Care", price: "From ₹149", image: sweaterImg },
];

export const furnitureBannerCardImages = [
    furnitureImg,
    banner2Img,
    banner3Img
];

