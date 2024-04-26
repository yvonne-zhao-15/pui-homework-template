const cuisines = {
    "Anhui": {
        "name": "Anhui Cuisine 徽菜",
        "dishes": ["Stinky Mandarin Fish", "Fried Hairy Tofu"],
        "flavors": "salty and fresh, light, the original flavor of wild ingredients",
        "description": "Anhui cuisine, or simply Hui cuisine, is originated over 1,000 years ago from Huizhou, the current Shexian County at the foot of Yellow Mountain in Anhui Province. Anhui cuisine is one of the eight Chinese cuisines. The ingredients are mostly from the wild, and the flavor is light. Anhui cuisine attaches importance to dietetic invigoration with natural ingredients. The representative dishes and Anhui cuisine desserts include Stinky Mandarin Fish, Fried Hairy Tofu, Steamed Partridge, Stewed Bamboo Shoots of Wenzheng Mountain, Huangshan Stewed Pigeon, Li Hongzhang Chop Suey, etc."
    },
    "Cantonese": {
        "name": "Cantonese Cuisine 粤菜",
        "dishes": ["Dim Sum", "Roast Duck"],
        "flavors": "light, sweet, smooth, and fresh",
        "description": "Cantonese cuisine, also known as Yue cuisine, hails from Guangdong Province, including Hong Kong and Macau. It is the most widely served style of Chinese cuisine in the world. Known for its emphasis on preserving the natural flavor of the food, Cantonese dishes often involve steaming and stir-frying. Representative dishes include Dim Sum, Roast Duck, Char Siu (BBQ Pork), and Sweet and Sour Pork."
    },
    "Sichuan": {
        "name": "Sichuan Cuisine 川菜",
        "dishes": ["Mapo Tofu", "Kung Pao Chicken"],
        "flavors": "bold, spicy (especially with Sichuan pepper), pungent",
        "description": "Sichuan cuisine, recognized for its bold flavors, particularly the pungency and spiciness resulting from liberal use of garlic and chili peppers, as well as the unique flavor of the Sichuan pepper. Dishes like Mapo Tofu, Kung Pao Chicken, and Sichuan Hotpot are internationally renowned."
    },
    "Shandong": {
        "name": "Shandong Cuisine 鲁菜",
        "dishes": ["Sweet and Sour Carp", "Braised Abalone"],
        "flavors": "fresh and salty with a lot of seafood dishes",
        "description": "Shandong cuisine, or Lu cuisine, originates from Northeast China and is one of the oldest and most diverse culinary traditions in China. Shandong chefs are particularly famous for their intricate knife skills and their ability to bring out the natural flavor of the seafood which is abundant in the region. Classic dishes include Sweet and Sour Carp, Braised Abalone, and Jiuzhuan Dachang."
    },
    "Jiangsu": {
        "name": "Jiangsu Cuisine 苏菜",
        "dishes": ["Braised Mandarin Fish", "Nanjing Salted Duck"],
        "flavors": "sweet and light",
        "description": "Jiangsu cuisine, or Su cuisine, is known for its soft textures and its emphasis on retaining the fresh taste of its ingredients. It is famous for its careful selection of ingredients according to the seasons, and its finishing touches that are highly valued for visual appeal. Representative dishes include Braised Mandarin Fish, Nanjing Salted Duck, and Lion's Head Meatballs (large pork meatballs)."
    },
    "Fujian": {
        "name": "Fujian Cuisine 闽菜",
        "dishes": ["Buddha Jumping Over the Wall", "Sweet and Sour Litchi Pork"],
        "flavors": "light but flavorful, slightly sweet and sour, with an emphasis on umami",
        "description": "Fujian cuisine, also known as Min cuisine, is famed for its seafood dishes and soups as well as its use of unique ingredients like mushrooms and bamboo shoots. The taste of Fujian cuisine is often slightly sweet and sour, and nearly always features a light but flavorful profile with a lot of broth and soup dishes. Typical dishes include Buddha Jumping Over the Wall and Sweet and Sour Litchi Pork."
    },
    "Hunan": {
        "name": "Hunan Cuisine 湘菜",
        "dishes": ["Dong'an Chicken", "Steamed Fish Head with Diced Hot Red Peppers"],
        "flavors": "hot and spicy, fresh, aromatic",
        "description": "Hunan cuisine, or Xiang cuisine, is well known for its hot spicy flavor, fresh aroma, and deep color. Common cooking techniques include smoking and pickling. Dishes often involve lots of chili peppers and shallots. Representative dishes include Dong'an Chicken, Steamed Fish Head with Diced Hot Red Peppers, and Smoked Pork with Tofu."
    },
    "Zhejiang": {
        "name": "Zhejiang Cuisine 浙菜",
        "dishes": ["West Lake Fish in Vinegar Gravy", "Dongpo Pork"],
        "flavors": "fresh, soft, with a mellow fragrance",
        "description": "Zhejiang cuisine, or Zhe cuisine, originates from the regions around Hangzhou, Ningbo, and Shaoxing in Zhejiang Province. The dishes are not heavily seasoned, focusing instead on the freshness and tenderness of the ingredients. Prominent dishes include West Lake Fish in Vinegar Gravy, Dongpo Pork, and Longjing Shrimp."
    }
};

const originInfo = {
    "Anhui": {
        "origin": "Anhui Province, China, known for using local herbs and mountainous region ingredients."
    },
    "Cantonese": {
        "origin": "Guangdong Province, China, including cities like Guangzhou and regions such as Hong Kong and Macau."
    },
    "Sichuan": {
        "origin": "Sichuan Province, China, famous for bold flavors and heavy use of garlic and chili."
    },
    "Shandong": {
        "origin": "Shandong Province, China, with a culinary style influenced by its coastal geography."
    },
    "Jiangsu": {
        "origin": "Jiangsu Province, China, noted for its refined culinary techniques and natural flavors."
    },
    "Fujian": {
        "origin": "Fujian Province, China, known for seafood and mountain harvests, featuring broths and soups."
    },
    "Hunan": {
        "origin": "Hunan Province, China, characterized by hot, spicy, and colorful cuisine."
    },
    "Zhejiang": {
        "origin": "Zhejiang Province, China, renowned for delicate, fresh, and balanced flavors."
    }
};