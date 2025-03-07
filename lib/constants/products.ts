import { Images } from "lucide-react"
import { IMAGES } from "../constants"

export const PRODUCTS = {
  rice: [
    {
      id: 1,
      name: "Basmati Rice",
      category: "rice",
      description:
        "Premium aged basmati rice with aromatic flavor, sourced from the foothills of the Himalayas. Perfect for biryanis and pilaf dishes.",
      longDescription:
        "Our premium Basmati rice is aged for 12+ months to develop its distinctive aroma and flavor. Known for its long, slender grains that cook up fluffy and separate, this rice is ideal for both everyday cooking and special occasions.",
      price: "Wholesale pricing available",
      packaging: ["5kg bags", "10kg bags", "25kg sacks"],
      features: [
        "Long grain variety",
        "Aged for 12+ months",
        "Aromatic flavor profile",
        "High quality standards",
        "ISO certified production",
        "Suitable for restaurants and retail",
      ],
      specifications: {
        origin: "India",
        grainLength: "7.5mm+",
        cookingTime: "15-20 minutes",
        shelfLife: "24 months",
        storage: "Store in a cool, dry place",
      },
      images: [
        IMAGES.products.rice.basmati,
        IMAGES.products.rice.jasmine,
        IMAGES.products.rice.brown,
        IMAGES.products.rice.sona_masoori,
        IMAGES.products.rice.arborio
      ],
    },
    {
      id: 2,
      name: "Jasmine Rice",
      category: "rice",
      description: "Fragrant jasmine rice imported from Thailand, known for its sweet aroma and soft texture.",
      longDescription:
        "Our premium Thai Jasmine rice is sourced directly from trusted farmers in Thailand. It features a delicate floral aroma and becomes soft and slightly sticky when cooked, making it perfect for Asian cuisine.",
      price: "Wholesale pricing available",
      packaging: ["5kg bags", "10kg bags", "25kg sacks"],
      features: [
        "Premium Thai variety",
        "Sweet floral aroma",
        "Soft, slightly sticky texture",
        "Perfect for Asian cuisine",
        "Quality-controlled processing",
        "Consistent grain size",
      ],
      specifications: {
        origin: "Thailand",
        grainLength: "7.0mm+",
        cookingTime: "15-18 minutes",
        shelfLife: "24 months",
        storage: "Store in a cool, dry place",
      },
      images: [
        IMAGES.products.rice.jasmine,
        IMAGES.products.rice.basmati,
        IMAGES.products.rice.brown,
        IMAGES.products.rice.sona_masoori,
        IMAGES.products.rice.arborio
      ],
    },
    {
      id: 3,
      name: "Brown Rice",
      category: "rice",
      description: "Nutritious whole grain brown rice with a nutty flavor and chewy texture.",
      longDescription:
        "Our brown rice retains its bran layer and germ, making it a nutritious whole grain option rich in fiber, vitamins, and minerals. It has a pleasant nutty flavor and slightly chewy texture that pairs well with a variety of dishes.",
      price: "Wholesale pricing available",
      packaging: ["5kg bags", "10kg bags", "25kg sacks"],
      features: [
        "Whole grain variety",
        "Rich in fiber and nutrients",
        "Nutty flavor profile",
        "Organically grown",
        "No artificial processing",
        "Suitable for health-conscious consumers",
      ],
      specifications: {
        origin: "Multiple regions",
        grainType: "Whole grain",
        cookingTime: "25-30 minutes",
        shelfLife: "12 months",
        storage: "Store in a cool, dry place",
      },
      images: [
        IMAGES.products.rice.brown,
        IMAGES.products.rice.basmati,
        IMAGES.products.rice.jasmine,
        IMAGES.products.rice.sona_masoori,
        IMAGES.products.rice.arborio
      ],
    },
    {
      id: 4,
      name: "Sona Masoori Rice",
      category: "rice",
      description: "Medium-grain rice popular in South Indian cuisine, known for its light and fluffy texture.",
      longDescription:
        "Sona Masoori is a premium medium-grain rice variety that's a staple in South Indian households. It cooks up light and fluffy with grains that remain separate, making it perfect for everyday meals, dosas, and idlis.",
      price: "Wholesale pricing available",
      packaging: ["5kg bags", "10kg bags", "25kg sacks"],
      features: [
        "Medium grain variety",
        "Light and fluffy texture",
        "Low starch content",
        "Versatile for various dishes",
        "Premium quality selection",
        "Popular in South Indian cuisine",
      ],
      specifications: {
        origin: "South India",
        grainLength: "5.0-6.0mm",
        cookingTime: "15-20 minutes",
        shelfLife: "24 months",
        storage: "Store in a cool, dry place",
      },
      images: [
        IMAGES.products.rice.sona_masoori,
        IMAGES.products.rice.basmati,
        IMAGES.products.rice.jasmine,
        IMAGES.products.rice.brown,
        IMAGES.products.rice.arborio
      ],
    },
    {
      id: 5,
      name: "Arborio Rice",
      category: "rice",
      description: "Italian short-grain rice ideal for risotto, with high starch content for creamy texture.",
      longDescription:
        "Arborio rice is a premium Italian short-grain rice named after the town of Arborio in the Po Valley. Its high starch content creates the creamy texture essential for authentic risotto while maintaining a firm, slightly chewy center when cooked.",
      price: "Wholesale pricing available",
      packaging: ["1kg bags", "5kg bags", "10kg sacks"],
      features: [
        "Italian short-grain variety",
        "High starch content",
        "Perfect for risotto",
        "Maintains al dente texture",
        "Premium imported quality",
        "Authentic Italian cuisine essential",
      ],
      specifications: {
        origin: "Italy",
        grainType: "Short grain",
        cookingTime: "18-20 minutes",
        shelfLife: "24 months",
        storage: "Store in a cool, dry place",
      },
      images: [
        IMAGES.products.rice.arborio,
        IMAGES.products.rice.basmati, // Using placeholder
        IMAGES.products.rice.jasmine,
        IMAGES.products.rice.brown,
        IMAGES.products.rice.sona_masoori
      ],
    },
  ],
  dals: [
    {
      id: 6,
      name: "Toor Dal (Arhar Dal)",
      category: "dals",
      description: "Split yellow pigeon peas, a staple in Indian cuisine, perfect for soups and stews.",
      longDescription:
        "Toor Dal, also known as Arhar Dal or split pigeon peas, is a staple in Indian households. It has a mild, nutty flavor and cooks to a soft consistency, making it perfect for traditional dishes like sambar, dal fry, and various soups and stews.",
      price: "Wholesale pricing available",
      packaging: ["1kg bags", "5kg bags", "10kg sacks", "25kg sacks"],
      features: [
        "High protein content",
        "Excellent source of fiber",
        "Mild, nutty flavor",
        "Premium quality selection",
        "Thoroughly cleaned and processed",
        "Consistent cooking quality",
      ],
      specifications: {
        origin: "India",
        type: "Split pigeon peas",
        cookingTime: "25-30 minutes",
        shelfLife: "24 months",
        storage: "Store in a cool, dry place",
      },
      images: [
        IMAGES.products.dals.toor,
        IMAGES.products.dals.moong,
        IMAGES.products.dals.masoor,
        IMAGES.products.dals.urad,
        IMAGES.products.dals.chana,
      ],
    },
    {
      id: 7,
      name: "Moong Dal (Split Mung Beans)",
      category: "dals",
      description: "Split yellow mung beans with high nutritional value, ideal for light and digestible dishes.",
      longDescription:
        "Moong Dal consists of split yellow mung beans that are easy to digest and cook quickly. With a mild, sweet flavor, it's perfect for khichdi, soups, and light meals. It's highly nutritious, packed with protein, fiber, and essential minerals.",
      price: "Wholesale pricing available",
      packaging: ["1kg bags", "5kg bags", "10kg sacks", "25kg sacks"],
      features: [
        "Quick cooking time",
        "Easy to digest",
        "High protein content",
        "Mild, sweet flavor",
        "Versatile for various dishes",
        "Premium quality selection",
      ],
      specifications: {
        origin: "India",
        type: "Split mung beans",
        cookingTime: "15-20 minutes",
        shelfLife: "24 months",
        storage: "Store in a cool, dry place",
      },
      images: [
        IMAGES.products.dals.moong,
        IMAGES.products.dals.toor,
        IMAGES.products.dals.masoor,
        IMAGES.products.dals.urad,
        IMAGES.products.dals.chana,
      ],
    },
    {
      id: 8,
      name: "Masoor Dal (Red Lentils)",
      category: "dals",
      description: "Split red lentils that cook quickly and have a mild, earthy flavor.",
      longDescription:
        "Masoor Dal, or split red lentils, is known for its quick cooking time and soft texture. With a mild, slightly sweet, earthy flavor, it's perfect for soups, stews, and light curries. It's also rich in protein, fiber, and iron.",
      price: "Wholesale pricing available",
      packaging: ["1kg bags", "5kg bags", "10kg sacks", "25kg sacks"],
      features: [
        "Fastest cooking lentil",
        "Soft texture when cooked",
        "Mild, earthy flavor",
        "High in protein and iron",
        "No pre-soaking required",
        "Premium quality selection",
      ],
      specifications: {
        origin: "Multiple regions",
        type: "Split red lentils",
        cookingTime: "10-15 minutes",
        shelfLife: "24 months",
        storage: "Store in a cool, dry place",
      },
      images: [
        IMAGES.products.dals.masoor,
        IMAGES.products.dals.toor,
        IMAGES.products.dals.moong,
        IMAGES.products.dals.urad,
        IMAGES.products.dals.chana,
      ],
    },
    {
      id: 9,
      name: "Urad Dal (Black Gram)",
      category: "dals",
      description: "Split black gram lentils, essential for South Indian dishes like dosa and idli.",
      longDescription:
        "Urad Dal, or split black gram, is a versatile lentil with a distinctive earthy flavor. It's the key ingredient in many South Indian dishes including dosa, idli, and vada. Available in whole (with skin), split (with skin), and split (without skin) varieties.",
      price: "Wholesale pricing available",
      packaging: ["1kg bags", "5kg bags", "10kg sacks", "25kg sacks"],
      features: [
        "Rich, earthy flavor",
        "Essential for South Indian cuisine",
        "High protein content",
        "Multiple varieties available",
        "Premium quality selection",
        "Consistent cooking results",
      ],
      specifications: {
        origin: "India",
        type: "Split black gram",
        cookingTime: "30-45 minutes",
        shelfLife: "24 months",
        storage: "Store in a cool, dry place",
      },
      images: [
        IMAGES.products.dals.urad,
        IMAGES.products.dals.toor,
        IMAGES.products.dals.moong,
        IMAGES.products.dals.masoor,
        IMAGES.products.dals.chana,
      ],
    },
    {
      id: 10,
      name: "Chana Dal (Split Bengal Gram)",
      category: "dals",
      description: "Split chickpeas with a nutty flavor, commonly used in curries and snacks.",
      longDescription:
        "Chana Dal, or split Bengal gram, has a mild, nutty flavor and holds its shape well when cooked. It's used in a variety of dishes from curries and soups to snacks and sweets. It's also high in protein, fiber, and has a low glycemic index.",
      price: "Wholesale pricing available",
      packaging: ["1kg bags", "5kg bags", "10kg sacks", "25kg sacks"],
      features: [
        "Nutty flavor profile",
        "Holds shape when cooked",
        "Low glycemic index",
        "High in protein and fiber",
        "Versatile for various dishes",
        "Premium quality selection",
      ],
      specifications: {
        origin: "India",
        type: "Split chickpeas",
        cookingTime: "35-45 minutes",
        shelfLife: "24 months",
        storage: "Store in a cool, dry place",
      },
      images: [
        IMAGES.products.dals.chana,
        IMAGES.products.dals.toor, // Using placeholder
        IMAGES.products.dals.moong,
        IMAGES.products.dals.masoor,
        IMAGES.products.dals.urad,
      ],
    },
  ],
  spices: [
    {
      id: 11,
      name: "Green Cardamom (Whole)",
      category: "spices",
      description: "Premium green cardamom pods with intense aroma and flavor.",
      longDescription:
        "Our premium green cardamom pods are carefully selected from the finest harvests. Known for their intense aroma and versatile use in both sweet and savory dishes, these pods are essential for authentic Indian and Middle Eastern cuisine.",
      price: "Wholesale pricing available",
      packaging: ["100g packs", "500g packs", "1kg bags"],
      features: [
        "Premium grade pods",
        "Intense aroma",
        "Versatile usage",
        "Hand-picked quality",
        "Natural preservation",
        "No artificial additives",
      ],
      specifications: {
        origin: "Kerala, India",
        grade: "Premium",
        shelfLife: "24 months",
        storage: "Store in airtight container",
        form: "Whole pods",
      },
      images: [
        IMAGES.products.spices.cardamom,
        IMAGES.products.spices.saffron,
        IMAGES.products.spices.turmeric,
        IMAGES.products.spices.pepper,
        IMAGES.products.spices.blackpepper
      ],
    },
    {
      id: 12,
      name: "Saffron Threads",
      category: "spices",
      description: "Premium quality Spanish saffron threads, known for their rich color and aroma.",
      longDescription:
        "Our premium Spanish saffron is sourced from the finest crops in Spain. Each thread is carefully selected to ensure maximum color, flavor, and aroma. Perfect for paellas, risottos, and traditional desserts.",
      price: "Wholesale pricing available",
      packaging: ["1g boxes", "5g boxes", "10g boxes"],
      features: [
        "Premium Spanish variety",
        "Rich color and aroma",
        "High coloring power",
        "100% pure threads",
        "Laboratory tested",
        "ISO certified",
      ],
      specifications: {
        origin: "Spain",
        grade: "Superior",
        category: "Category I",
        shelfLife: "36 months",
        storage: "Store in dark, cool place",
      },
      images: [
        IMAGES.products.spices.saffron,
        IMAGES.products.spices.cardamom,
        IMAGES.products.spices.turmeric,
        IMAGES.products.spices.pepper,
        IMAGES.products.spices.blackpepper
      ],
    },
    {
      id: 13,
      name: "Turmeric Powder",
      category: "spices",
      description: "Vibrant yellow turmeric powder with earthy flavor and numerous health benefits.",
      longDescription:
        "Our turmeric powder is made from premium quality turmeric roots, carefully processed to preserve its natural color, aroma, and health benefits. Known for its anti-inflammatory properties, it's a staple in Indian cuisine and Ayurvedic medicine.",
      price: "Wholesale pricing available",
      packaging: ["100g packs", "500g packs", "1kg bags", "5kg bags"],
      features: [
        "Vibrant yellow color",
        "High curcumin content",
        "Earthy, warm flavor",
        "No artificial additives",
        "Fine powder consistency",
        "Premium quality selection",
      ],
      specifications: {
        origin: "India",
        curcuminContent: "3-5%",
        shelfLife: "24 months",
        storage: "Store in airtight container",
        form: "Fine powder",
      },
      images: [
        IMAGES.products.spices.turmeric,
        IMAGES.products.spices.cardamom,
        IMAGES.products.spices.saffron,
        IMAGES.products.spices.pepper,
        IMAGES.products.spices.blackpepper
      ],
    },
    {
      id: 14,
      name: "Black Peppercorns (Whole)",
      category: "spices",
      description: "Premium black peppercorns with a bold, pungent flavor and aroma.",
      longDescription:
        "Our black peppercorns are carefully selected for size, aroma, and flavor. They have a robust, woody aroma with a sharp, pungent taste that adds depth to any dish. Perfect for grinding fresh or using whole in marinades and pickling.",
      price: "Wholesale pricing available",
      packaging: ["100g packs", "500g packs", "1kg bags", "5kg bags"],
      features: [
        "Bold, pungent flavor",
        "Uniform size selection",
        "High essential oil content",
        "No artificial additives",
        "Premium quality",
        "Versatile culinary use",
      ],
      specifications: {
        origin: "Vietnam/India",
        grade: "Premium",
        shelfLife: "36 months",
        storage: "Store in airtight container",
        form: "Whole peppercorns",
      },
      images: [
        IMAGES.products.spices.blackpepper,
        IMAGES.products.spices.pepper,
        IMAGES.products.spices.cardamom,
        IMAGES.products.spices.saffron,
        IMAGES.products.spices.turmeric
      ],
    },
    {
      id: 15,
      name: "Cinnamon Sticks",
      category: "spices",
      description: "Premium quality cinnamon sticks with sweet, woody aroma and flavor.",
      longDescription:
        "Our cinnamon sticks are sourced from the finest Ceylon cinnamon bark, known for its delicate, sweet flavor with notes of citrus. These premium quills are perfect for infusing into beverages, desserts, and savory dishes.",
      price: "Wholesale pricing available",
      packaging: ["100g packs", "500g packs", "1kg bags"],
      features: [
        "Ceylon cinnamon variety",
        "Sweet, delicate flavor",
        "Thin, layered bark",
        "Premium quality selection",
        "No artificial additives",
        "Versatile culinary use",
      ],
      specifications: {
        origin: "Sri Lanka",
        type: "Ceylon (true cinnamon)",
        shelfLife: "24 months",
        storage: "Store in airtight container",
        form: "Whole sticks (quills)",
      },
      images: [
        IMAGES.products.spices.pepper, // Using placeholder
        IMAGES.products.spices.cardamom,
        IMAGES.products.spices.saffron,
        IMAGES.products.spices.turmeric,
        IMAGES.products.spices.blackpepper
      ],
    },
  ],
  sugar: [
    {
      id: 21,
      name: "Refined White Sugar",
      category: "sugar",
      description: "Fine granulated refined white sugar for baking and everyday use.",
      longDescription:
        "Our refined white sugar is processed to the highest standards, resulting in fine, uniform crystals with pure sweetness. Perfect for baking, beverages, and everyday sweetening needs in both commercial and home kitchens.",
      price: "Wholesale pricing available",
      packaging: ["1kg bags", "5kg bags", "25kg sacks", "50kg sacks"],
      features: [
        "Fine, uniform crystals",
        "Pure sweet taste",
        "Quick dissolving",
        "Consistent quality",
        "Versatile for all uses",
        "No impurities",
      ],
      specifications: {
        origin: "Multiple regions",
        type: "Refined granulated",
        polarization: "99.7% min",
        moisture: "0.04% max",
        shelfLife: "36 months",
        storage: "Store in cool, dry place",
      },
      images: [
        IMAGES.products.other.sugar,
        IMAGES.products.other.ghee,
        IMAGES.products.other.flour,
        IMAGES.products.other.eggs,
        IMAGES.products.other.brownsugar
      ],
    },
    {
      id: 22,
      name: "Brown Sugar",
      category: "sugar",
      description: "Soft brown sugar with molasses flavor, perfect for baking and desserts.",
      longDescription:
        "Our brown sugar contains molasses for a rich, caramel-like flavor and moist texture. It adds depth to baked goods, desserts, and savory dishes like glazes and marinades. Available in light and dark varieties to suit different recipe needs.",
      price: "Wholesale pricing available",
      packaging: ["1kg bags", "5kg bags", "25kg sacks"],
      features: [
        "Rich molasses flavor",
        "Moist, soft texture",
        "Available in light and dark varieties",
        "Perfect for baking",
        "Adds depth to dishes",
        "Premium quality",
      ],
      specifications: {
        origin: "Multiple regions",
        type: "Soft brown sugar",
        moisture: "3-4%",
        shelfLife: "24 months",
        storage: "Store in airtight container",
      },
      images: [
        IMAGES.products.other.brownsugar,
        IMAGES.products.other.sugar,
        IMAGES.products.other.ghee,
        IMAGES.products.other.flour,
        IMAGES.products.other.eggs,
      ],
    },
  ],
  ghee: [
    {
      id: 26,
      name: "Pure Cow Ghee",
      category: "ghee",
      description: "Traditional clarified butter made from pure cow's milk, rich in flavor.",
      longDescription:
        "Our Pure Cow Ghee is made using the traditional method of simmering unsalted butter until the milk solids separate and caramelize slightly, giving it a rich, nutty flavor. It has a high smoke point, making it ideal for cooking and deep-frying.",
      price: "Wholesale pricing available",
      packaging: ["500ml jars", "1L jars", "5L tins", "15L tins"],
      features: [
        "Made from pure cow's milk",
        "Rich, nutty flavor",
        "High smoke point",
        "No preservatives",
        "Traditional preparation method",
        "Long shelf life",
      ],
      specifications: {
        origin: "Multiple regions",
        type: "Clarified butter",
        smokePoint: "250°C/482°F",
        shelfLife: "12 months",
        storage: "Store in cool, dry place",
      },
      images: [
        IMAGES.products.other.ghee,
        IMAGES.products.other.sugar,
        IMAGES.products.other.flour,
        IMAGES.products.other.eggs,
      ],
    },
  ],
  flour: [
    {
      id: 31,
      name: "Chakki Fresh Atta",
      category: "flour",
      description: "Stone-ground whole wheat flour for traditional Indian flatbreads.",
      longDescription:
        "Our Chakki Fresh Atta is stone-ground whole wheat flour that retains the bran and germ, preserving nutrients and natural flavor. It has a coarser texture than refined flour and is perfect for making rotis, chapatis, parathas, and other Indian flatbreads.",
      price: "Wholesale pricing available",
      packaging: ["1kg bags", "5kg bags", "10kg bags", "25kg sacks"],
      features: [
        "Stone-ground traditional method",
        "Whole grain nutrition",
        "Perfect for Indian flatbreads",
        "Natural wheat flavor",
        "No additives or preservatives",
        "Premium quality wheat",
      ],
      specifications: {
        origin: "India",
        type: "Whole wheat flour",
        grindType: "Stone-ground",
        shelfLife: "6 months",
        storage: "Store in cool, dry place",
      },
      images: [
        IMAGES.products.other.flour,
        IMAGES.products.other.sugar,
        IMAGES.products.other.ghee,
        IMAGES.products.other.eggs,
      ],
    },
  ],
  eggs: [
    {
      id: 34,
      name: "Farm Fresh Eggs",
      category: "eggs",
      description: "Grade A farm fresh eggs from free-range hens.",
      longDescription:
        "Our Farm Fresh Eggs come from free-range hens raised in humane conditions with access to outdoor areas. The eggs have bright orange yolks and firm whites, indicating freshness and quality. They're perfect for all cooking and baking applications.",
      price: "Wholesale pricing available",
      packaging: ["Trays of 30 eggs", "Cartons of 12 eggs", "Bulk options available"],
      features: [
        "From free-range hens",
        "Bright orange yolks",
        "Firm egg whites",
        "Fresh daily collection",
        "Carefully inspected",
        "Premium quality",
      ],
      specifications: {
        origin: "Local farms",
        grade: "Grade A",
        size: "Large (53-63g)",
        shelfLife: "4 weeks refrigerated",
        storage: "Refrigerate at 4°C/39°F",
      },
      images: [
        IMAGES.products.other.eggs,
        IMAGES.products.other.sugar,
        IMAGES.products.other.ghee,
        IMAGES.products.other.flour,
      ],
    },
  ],
}

export function getProductById(id: number) {
  return Object.values(PRODUCTS)
    .flat()
    .find((product) => product.id === id)
}

export function getRelatedProducts(categoryName: string, currentProductId: number) {
  const categoryProducts = PRODUCTS[categoryName as keyof typeof PRODUCTS] || []
  return categoryProducts.filter((product) => product.id !== currentProductId).slice(0, 3) // Return up to 3 related products
}