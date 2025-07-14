// Notes database
/* TESTING
let topNotes = [
  "Cotton Candy on Sticky Fingers",
  "Banana Peels in the Lunchbox",
  "Freshly Cut Grass Stuck to Your Jeans"
];

let midNotes = [
  "Bubble Bath Splash Party",
  "Teddy Bear Fur After a Hug",
  "Cinnamon Latte from a Shared Cup"
];

let baseNotes = [
  "Warm Blanket Fort Dreams",
  "Spilled Milk Under the Fridge",
  "Birthday Cake Candle That Won't Blow Out"
];
*/
const NOTES = [
  {
    "feelings": "Your Name Carved in a Picnic Table",
    "chemical": "Skatole",
    "description": "Smells like Ink, flickering like a memory just out of reach.",
    "note": "Top",
    "color": "Black"
  },
  {
    "feelings": "Their Old Hoodie That Still Smells Like Goodbye",
    "chemical": "Iso E Super",
    "description": "Smells like Tar, soft as a whisper in a locked drawer.",
    "note": "Top",
    "color": "Black"
  },
  {
    "feelings": "That Song They Played When You Walked Away",
    "chemical": "Squalene",
    "description": "Smells like Charred wood, clinging like a secret you forgot to tell.",
    "note": "Top",
    "color": "Black"
  },
  {
    "feelings": "Bike Ride Past the Lemon Trees",
    "chemical": "Alpha-Pinene",
    "description": "Smells like Tar, drifting past like a breeze through old curtains.",
    "note": "Top",
    "color": "Black"
  },
  {
    "feelings": "The First Note in Your Glove Compartment",
    "chemical": "Linalool",
    "description": "Smells like Charred wood, lingering like a note from a forgotten song.",
    "note": "Top",
    "color": "Black"
  },
  {
    "feelings": "The Forgotten Candy in Your Winter Coat",
    "chemical": "Geosmin",
    "description": "Smells like Burnt sugar, glowing with warmth from another time.",
    "note": "Mid",
    "color": "Black"
  },
  {
    "feelings": "The Bookstore You Didn't Mean to Fall in Love In",
    "chemical": "Naphthalene",
    "description": "Smells like Tar, sharp as a flashback in an empty room.",
    "note": "Mid",
    "color": "Black"
  },
  {
    "feelings": "Postcard You Never Sent From the Train Station",
    "chemical": "Nerol",
    "description": "Smells like Licorice, fading slow, like old film left in the sun.",
    "note": "Mid",
    "color": "Black"
  },
  {
    "feelings": "That One Shirt You Wore Every Summer",
    "chemical": "Patchouli Alcohol",
    "description": "Smells like Tar, settling in the corners of your mind.",
    "note": "Mid",
    "color": "Black"
  },
  {
    "feelings": "Rain on a Window While the Kettle Screams",
    "chemical": "Nerol",
    "description": "Smells like Charred wood, wrapped in the silence of something unfinished.",
    "note": "Mid",
    "color": "Black"
  },
  {
    "feelings": "The Glitter Stuck to Your Skin After the Concert",
    "chemical": "Myrcene",
    "description": "Smells like Ink, flickering like a memory just out of reach.",
    "note": "Base",
    "color": "Black"
  },
  {
    "feelings": "Leftover Sparks from a Campfire Kiss",
    "chemical": "Castoreum",
    "description": "Smells like Burnt sugar, soft as a whisper in a locked drawer.",
    "note": "Base",
    "color": "Black"
  },
  {
    "feelings": "Sunlight Through the Lace Curtain at Her Place",
    "chemical": "Nerol",
    "description": "Smells like Tar, clinging like a secret you forgot to tell.",
    "note": "Base",
    "color": "Black"
  },
  {
    "feelings": "Midnight Walk Past a Closed Florist",
    "chemical": "Naphthalene",
    "description": "Smells like Burnt sugar, drifting past like a breeze through old curtains.",
    "note": "Base",
    "color": "Black"
  },
  {
    "feelings": "Birthday Cake Crumbs in a Shared Bed",
    "chemical": "Galaxolide",
    "description": "Smells like Tar, lingering like a note from a forgotten song.",
    "note": "Base",
    "color": "Black"
  },
  {
    "feelings": "When the Streetlight Flickered Just for You",
    "chemical": "Alpha-Pinene",
    "description": "Smells like Wet stone, glowing with warmth from another time.",
    "note": "Top",
    "color": "Gray"
  },
  {
    "feelings": "The Backseat Confession You Keep Replaying",
    "chemical": "Hedione",
    "description": "Smells like Cement, sharp as a flashback in an empty room.",
    "note": "Top",
    "color": "Gray"
  },
  {
    "feelings": "Steam From a Bowl of Noodles at Midnight",
    "chemical": "Beta-Ionone",
    "description": "Smells like Steel, fading slow, like old film left in the sun.",
    "note": "Top",
    "color": "Gray"
  },
  {
    "feelings": "Worn Pages of Her Favorite Cookbook",
    "chemical": "Iso E Super",
    "description": "Smells like Dust, settling in the corners of your mind.",
    "note": "Top",
    "color": "Gray"
  },
  {
    "feelings": "Last Hug at the Airport Gate",
    "chemical": "Eugenol",
    "description": "Smells like Dust, wrapped in the silence of something unfinished.",
    "note": "Top",
    "color": "Gray"
  },
  {
    "feelings": "Your Name Carved in a Picnic Table",
    "chemical": "Vanillin",
    "description": "Smells like Ash, flickering like a memory just out of reach.",
    "note": "Mid",
    "color": "Gray"
  },
  {
    "feelings": "Their Old Hoodie That Still Smells Like Goodbye",
    "chemical": "Ethyl Maltol",
    "description": "Smells like Steel, soft as a whisper in a locked drawer.",
    "note": "Mid",
    "color": "Gray"
  },
  {
    "feelings": "That Song They Played When You Walked Away",
    "chemical": "Octyl Acetate",
    "description": "Smells like Ash, clinging like a secret you forgot to tell.",
    "note": "Mid",
    "color": "Gray"
  },
  {
    "feelings": "Bike Ride Past the Lemon Trees",
    "chemical": "Squalene",
    "description": "Smells like Ash, drifting past like a breeze through old curtains.",
    "note": "Mid",
    "color": "Gray"
  },
  {
    "feelings": "The First Note in Your Glove Compartment",
    "chemical": "Galaxolide",
    "description": "Smells like Wet stone, lingering like a note from a forgotten song.",
    "note": "Mid",
    "color": "Gray"
  },
  {
    "feelings": "The Forgotten Candy in Your Winter Coat",
    "chemical": "Naphthalene",
    "description": "Smells like Wet stone, glowing with warmth from another time.",
    "note": "Base",
    "color": "Gray"
  },
  {
    "feelings": "The Bookstore You Didn't Mean to Fall in Love In",
    "chemical": "Ethyl Maltol",
    "description": "Smells like Dust, sharp as a flashback in an empty room.",
    "note": "Base",
    "color": "Gray"
  },
  {
    "feelings": "Postcard You Never Sent From the Train Station",
    "chemical": "Eugenol",
    "description": "Smells like Cement, fading slow, like old film left in the sun.",
    "note": "Base",
    "color": "Gray"
  },
  {
    "feelings": "That One Shirt You Wore Every Summer",
    "chemical": "Patchouli Alcohol",
    "description": "Smells like Wet stone, settling in the corners of your mind.",
    "note": "Base",
    "color": "Gray"
  },
  {
    "feelings": "Rain on a Window While the Kettle Screams",
    "chemical": "Iso E Super",
    "description": "Smells like Dust, wrapped in the silence of something unfinished.",
    "note": "Base",
    "color": "Gray"
  },
  {
    "feelings": "The Glitter Stuck to Your Skin After the Concert",
    "chemical": "Phenethyl Alcohol",
    "description": "Smells like Smoke, flickering like a memory just out of reach.",
    "note": "Top",
    "color": "Charcoal"
  },
  {
    "feelings": "Leftover Sparks from a Campfire Kiss",
    "chemical": "Octenol",
    "description": "Smells like Graphite, soft as a whisper in a locked drawer.",
    "note": "Top",
    "color": "Charcoal"
  },
  {
    "feelings": "Sunlight Through the Lace Curtain at Her Place",
    "chemical": "Menthol",
    "description": "Smells like Soot, clinging like a secret you forgot to tell.",
    "note": "Top",
    "color": "Charcoal"
  },
  {
    "feelings": "Midnight Walk Past a Closed Florist",
    "chemical": "Octyl Acetate",
    "description": "Smells like Gunpowder, drifting past like a breeze through old curtains.",
    "note": "Top",
    "color": "Charcoal"
  },
  {
    "feelings": "Birthday Cake Crumbs in a Shared Bed",
    "chemical": "Methyl Anthranilate",
    "description": "Smells like Coal, lingering like a note from a forgotten song.",
    "note": "Top",
    "color": "Charcoal"
  },
  {
    "feelings": "When the Streetlight Flickered Just for You",
    "chemical": "Ambroxan",
    "description": "Smells like Smoke, glowing with warmth from another time.",
    "note": "Mid",
    "color": "Charcoal"
  },
  {
    "feelings": "The Backseat Confession You Keep Replaying",
    "chemical": "Myrcene",
    "description": "Smells like Smoke, sharp as a flashback in an empty room.",
    "note": "Mid",
    "color": "Charcoal"
  },
  {
    "feelings": "Steam From a Bowl of Noodles at Midnight",
    "chemical": "Myrcene",
    "description": "Smells like Smoke, fading slow, like old film left in the sun.",
    "note": "Mid",
    "color": "Charcoal"
  },
  {
    "feelings": "Worn Pages of Her Favorite Cookbook",
    "chemical": "Dihydromyrcenol",
    "description": "Smells like Coal, settling in the corners of your mind.",
    "note": "Mid",
    "color": "Charcoal"
  },
  {
    "feelings": "Last Hug at the Airport Gate",
    "chemical": "Coumarin",
    "description": "Smells like Graphite, wrapped in the silence of something unfinished.",
    "note": "Mid",
    "color": "Charcoal"
  },
  {
    "feelings": "Your Name Carved in a Picnic Table",
    "chemical": "Vanillin",
    "description": "Smells like Soot, flickering like a memory just out of reach.",
    "note": "Base",
    "color": "Charcoal"
  },
  {
    "feelings": "Their Old Hoodie That Still Smells Like Goodbye",
    "chemical": "Dihydromyrcenol",
    "description": "Smells like Graphite, soft as a whisper in a locked drawer.",
    "note": "Base",
    "color": "Charcoal"
  },
  {
    "feelings": "That Song They Played When You Walked Away",
    "chemical": "Acetophenone",
    "description": "Smells like Gunpowder, clinging like a secret you forgot to tell.",
    "note": "Base",
    "color": "Charcoal"
  },
  {
    "feelings": "Bike Ride Past the Lemon Trees",
    "chemical": "Farnesol",
    "description": "Smells like Smoke, drifting past like a breeze through old curtains.",
    "note": "Base",
    "color": "Charcoal"
  },
  {
    "feelings": "The First Note in Your Glove Compartment",
    "chemical": "Dimethyl Sulfide",
    "description": "Smells like Graphite, lingering like a note from a forgotten song.",
    "note": "Base",
    "color": "Charcoal"
  },
  {
    "feelings": "The Forgotten Candy in Your Winter Coat",
    "chemical": "Ethyl Maltol",
    "description": "Smells like Denim, glowing with warmth from another time.",
    "note": "Top",
    "color": "Navy Blue"
  },
  {
    "feelings": "The Bookstore You Didn't Mean to Fall in Love In",
    "chemical": "Myrcene",
    "description": "Smells like Denim, sharp as a flashback in an empty room.",
    "note": "Top",
    "color": "Navy Blue"
  },
  {
    "feelings": "Postcard You Never Sent From the Train Station",
    "chemical": "Geosmin",
    "description": "Smells like Indigo, fading slow, like old film left in the sun.",
    "note": "Top",
    "color": "Navy Blue"
  },
  {
    "feelings": "That One Shirt You Wore Every Summer",
    "chemical": "Menthol",
    "description": "Smells like Indigo, settling in the corners of your mind.",
    "note": "Top",
    "color": "Navy Blue"
  },
  {
    "feelings": "Rain on a Window While the Kettle Screams",
    "chemical": "Dihydromyrcenol",
    "description": "Smells like Deep ocean, wrapped in the silence of something unfinished.",
    "note": "Top",
    "color": "Navy Blue"
  },
  {
    "feelings": "The Glitter Stuck to Your Skin After the Concert",
    "chemical": "Benzyl Acetate",
    "description": "Smells like Indigo, flickering like a memory just out of reach.",
    "note": "Mid",
    "color": "Navy Blue"
  },
  {
    "feelings": "Leftover Sparks from a Campfire Kiss",
    "chemical": "Vanillin",
    "description": "Smells like Ink, soft as a whisper in a locked drawer.",
    "note": "Mid",
    "color": "Navy Blue"
  },
  {
    "feelings": "Sunlight Through the Lace Curtain at Her Place",
    "chemical": "Indole",
    "description": "Smells like Ink, clinging like a secret you forgot to tell.",
    "note": "Mid",
    "color": "Navy Blue"
  },
  {
    "feelings": "Midnight Walk Past a Closed Florist",
    "chemical": "Geosmin",
    "description": "Smells like Indigo, drifting past like a breeze through old curtains.",
    "note": "Mid",
    "color": "Navy Blue"
  },
  {
    "feelings": "Birthday Cake Crumbs in a Shared Bed",
    "chemical": "Tolu Balsam",
    "description": "Smells like Ink, lingering like a note from a forgotten song.",
    "note": "Mid",
    "color": "Navy Blue"
  },
  {
    "feelings": "When the Streetlight Flickered Just for You",
    "chemical": "Octyl Acetate",
    "description": "Smells like Ink, glowing with warmth from another time.",
    "note": "Base",
    "color": "Navy Blue"
  },
  {
    "feelings": "The Backseat Confession You Keep Replaying",
    "chemical": "Ethyl Maltol",
    "description": "Smells like Indigo, sharp as a flashback in an empty room.",
    "note": "Base",
    "color": "Navy Blue"
  },
  {
    "feelings": "Steam From a Bowl of Noodles at Midnight",
    "chemical": "Castoreum",
    "description": "Smells like Ink, fading slow, like old film left in the sun.",
    "note": "Base",
    "color": "Navy Blue"
  },
  {
    "feelings": "Worn Pages of Her Favorite Cookbook",
    "chemical": "Vanillin",
    "description": "Smells like Deep ocean, settling in the corners of your mind.",
    "note": "Base",
    "color": "Navy Blue"
  },
  {
    "feelings": "Last Hug at the Airport Gate",
    "chemical": "Naphthalene",
    "description": "Smells like Midnight sky, wrapped in the silence of something unfinished.",
    "note": "Base",
    "color": "Navy Blue"
  },
  {
    "feelings": "Your Name Carved in a Picnic Table",
    "chemical": "Coumarin",
    "description": "Smells like Blueberry, flickering like a memory just out of reach.",
    "note": "Top",
    "color": "Blue"
  },
  {
    "feelings": "Their Old Hoodie That Still Smells Like Goodbye",
    "chemical": "Methyl Anthranilate",
    "description": "Smells like Blueberry, soft as a whisper in a locked drawer.",
    "note": "Top",
    "color": "Blue"
  },
  {
    "feelings": "That Song They Played When You Walked Away",
    "chemical": "Hexyl Acetate",
    "description": "Smells like Sky, clinging like a secret you forgot to tell.",
    "note": "Top",
    "color": "Blue"
  },
  {
    "feelings": "Bike Ride Past the Lemon Trees",
    "chemical": "Limonene",
    "description": "Smells like Lapis, drifting past like a breeze through old curtains.",
    "note": "Top",
    "color": "Blue"
  },
  {
    "feelings": "The First Note in Your Glove Compartment",
    "chemical": "Phenethyl Alcohol",
    "description": "Smells like Blueberry, lingering like a note from a forgotten song.",
    "note": "Top",
    "color": "Blue"
  },
  {
    "feelings": "The Forgotten Candy in Your Winter Coat",
    "chemical": "Naphthalene",
    "description": "Smells like Sky, glowing with warmth from another time.",
    "note": "Mid",
    "color": "Blue"
  },
  {
    "feelings": "The Bookstore You Didn't Mean to Fall in Love In",
    "chemical": "Alpha-Pinene",
    "description": "Smells like Blueberry, sharp as a flashback in an empty room.",
    "note": "Mid",
    "color": "Blue"
  },
  {
    "feelings": "Postcard You Never Sent From the Train Station",
    "chemical": "Naphthalene",
    "description": "Smells like Hydrangea, fading slow, like old film left in the sun.",
    "note": "Mid",
    "color": "Blue"
  },
  {
    "feelings": "That One Shirt You Wore Every Summer",
    "chemical": "Hexyl Acetate",
    "description": "Smells like Cornflower, settling in the corners of your mind.",
    "note": "Mid",
    "color": "Blue"
  },
  {
    "feelings": "Rain on a Window While the Kettle Screams",
    "chemical": "Nerol",
    "description": "Smells like Cornflower, wrapped in the silence of something unfinished.",
    "note": "Mid",
    "color": "Blue"
  },
  {
    "feelings": "The Glitter Stuck to Your Skin After the Concert",
    "chemical": "Galaxolide",
    "description": "Smells like Blueberry, flickering like a memory just out of reach.",
    "note": "Base",
    "color": "Blue"
  },
  {
    "feelings": "Leftover Sparks from a Campfire Kiss",
    "chemical": "Hedione",
    "description": "Smells like Blueberry, soft as a whisper in a locked drawer.",
    "note": "Base",
    "color": "Blue"
  },
  {
    "feelings": "Sunlight Through the Lace Curtain at Her Place",
    "chemical": "Tolu Balsam",
    "description": "Smells like Sky, clinging like a secret you forgot to tell.",
    "note": "Base",
    "color": "Blue"
  },
  {
    "feelings": "Midnight Walk Past a Closed Florist",
    "chemical": "Menthol",
    "description": "Smells like Blueberry, drifting past like a breeze through old curtains.",
    "note": "Base",
    "color": "Blue"
  },
  {
    "feelings": "Birthday Cake Crumbs in a Shared Bed",
    "chemical": "Alpha-Pinene",
    "description": "Smells like Lapis, lingering like a note from a forgotten song.",
    "note": "Base",
    "color": "Blue"
  },
  {
    "feelings": "When the Streetlight Flickered Just for You",
    "chemical": "Naphthalene",
    "description": "Smells like Sea breeze, glowing with warmth from another time.",
    "note": "Top",
    "color": "Light Blue"
  },
  {
    "feelings": "The Backseat Confession You Keep Replaying",
    "chemical": "Phenethyl Alcohol",
    "description": "Smells like Frost, sharp as a flashback in an empty room.",
    "note": "Top",
    "color": "Light Blue"
  },
  {
    "feelings": "Steam From a Bowl of Noodles at Midnight",
    "chemical": "Benzyl Acetate",
    "description": "Smells like Frost, fading slow, like old film left in the sun.",
    "note": "Top",
    "color": "Light Blue"
  },
  {
    "feelings": "Worn Pages of Her Favorite Cookbook",
    "chemical": "Hedione",
    "description": "Smells like Sky, settling in the corners of your mind.",
    "note": "Top",
    "color": "Light Blue"
  },
  {
    "feelings": "Last Hug at the Airport Gate",
    "chemical": "Methyl Anthranilate",
    "description": "Smells like Washed denim, wrapped in the silence of something unfinished.",
    "note": "Top",
    "color": "Light Blue"
  },
  {
    "feelings": "Your Name Carved in a Picnic Table",
    "chemical": "Farnesol",
    "description": "Smells like Sky, flickering like a memory just out of reach.",
    "note": "Mid",
    "color": "Light Blue"
  },
  {
    "feelings": "Their Old Hoodie That Still Smells Like Goodbye",
    "chemical": "Dihydromyrcenol",
    "description": "Smells like Washed denim, soft as a whisper in a locked drawer.",
    "note": "Mid",
    "color": "Light Blue"
  },
  {
    "feelings": "That Song They Played When You Walked Away",
    "chemical": "Coumarin",
    "description": "Smells like Frost, clinging like a secret you forgot to tell.",
    "note": "Mid",
    "color": "Light Blue"
  },
  {
    "feelings": "Bike Ride Past the Lemon Trees",
    "chemical": "Squalene",
    "description": "Smells like Washed denim, drifting past like a breeze through old curtains.",
    "note": "Mid",
    "color": "Light Blue"
  },
  {
    "feelings": "The First Note in Your Glove Compartment",
    "chemical": "Octyl Acetate",
    "description": "Smells like Sea breeze, lingering like a note from a forgotten song.",
    "note": "Mid",
    "color": "Light Blue"
  },
  {
    "feelings": "The Forgotten Candy in Your Winter Coat",
    "chemical": "Phenethyl Alcohol",
    "description": "Smells like Iris, glowing with warmth from another time.",
    "note": "Base",
    "color": "Light Blue"
  },
  {
    "feelings": "The Bookstore You Didn't Mean to Fall in Love In",
    "chemical": "Eugenol",
    "description": "Smells like Washed denim, sharp as a flashback in an empty room.",
    "note": "Base",
    "color": "Light Blue"
  },
  {
    "feelings": "Postcard You Never Sent From the Train Station",
    "chemical": "Alpha-Pinene",
    "description": "Smells like Iris, fading slow, like old film left in the sun.",
    "note": "Base",
    "color": "Light Blue"
  },
  {
    "feelings": "That One Shirt You Wore Every Summer",
    "chemical": "Skatole",
    "description": "Smells like Sea breeze, settling in the corners of your mind.",
    "note": "Base",
    "color": "Light Blue"
  },
  {
    "feelings": "Rain on a Window While the Kettle Screams",
    "chemical": "Hedione",
    "description": "Smells like Sky, wrapped in the silence of something unfinished.",
    "note": "Base",
    "color": "Light Blue"
  },
  {
    "feelings": "The Glitter Stuck to Your Skin After the Concert",
    "chemical": "Benzyl Acetate",
    "description": "Smells like Pomegranate, flickering like a memory just out of reach.",
    "note": "Top",
    "color": "Red"
  },
  {
    "feelings": "Leftover Sparks from a Campfire Kiss",
    "chemical": "Ethyl Maltol",
    "description": "Smells like Rose, soft as a whisper in a locked drawer.",
    "note": "Top",
    "color": "Red"
  },
  {
    "feelings": "Sunlight Through the Lace Curtain at Her Place",
    "chemical": "Ambroxan",
    "description": "Smells like Rose, clinging like a secret you forgot to tell.",
    "note": "Top",
    "color": "Red"
  },
  {
    "feelings": "Midnight Walk Past a Closed Florist",
    "chemical": "Octyl Acetate",
    "description": "Smells like Tomato, drifting past like a breeze through old curtains.",
    "note": "Top",
    "color": "Red"
  },
  {
    "feelings": "Birthday Cake Crumbs in a Shared Bed",
    "chemical": "Cinnamaldehyde",
    "description": "Smells like Cherry, lingering like a note from a forgotten song.",
    "note": "Top",
    "color": "Red"
  },
  {
    "feelings": "When the Streetlight Flickered Just for You",
    "chemical": "Methyl Anthranilate",
    "description": "Smells like Rose, glowing with warmth from another time.",
    "note": "Mid",
    "color": "Red"
  },
  {
    "feelings": "The Backseat Confession You Keep Replaying",
    "chemical": "Skatole",
    "description": "Smells like Blood, sharp as a flashback in an empty room.",
    "note": "Mid",
    "color": "Red"
  },
  {
    "feelings": "Steam From a Bowl of Noodles at Midnight",
    "chemical": "Dihydromyrcenol",
    "description": "Smells like Rose, fading slow, like old film left in the sun.",
    "note": "Mid",
    "color": "Red"
  },
  {
    "feelings": "Worn Pages of Her Favorite Cookbook",
    "chemical": "Linalool",
    "description": "Smells like Cherry, settling in the corners of your mind.",
    "note": "Mid",
    "color": "Red"
  },
  {
    "feelings": "Last Hug at the Airport Gate",
    "chemical": "Octenol",
    "description": "Smells like Pomegranate, wrapped in the silence of something unfinished.",
    "note": "Mid",
    "color": "Red"
  },
  {
    "feelings": "Your Name Carved in a Picnic Table",
    "chemical": "Dihydromyrcenol",
    "description": "Smells like Blood, flickering like a memory just out of reach.",
    "note": "Base",
    "color": "Red"
  },
  {
    "feelings": "Their Old Hoodie That Still Smells Like Goodbye",
    "chemical": "Musk Ketone",
    "description": "Smells like Rose, soft as a whisper in a locked drawer.",
    "note": "Base",
    "color": "Red"
  },
  {
    "feelings": "That Song They Played When You Walked Away",
    "chemical": "Geosmin",
    "description": "Smells like Tomato, clinging like a secret you forgot to tell.",
    "note": "Base",
    "color": "Red"
  },
  {
    "feelings": "Bike Ride Past the Lemon Trees",
    "chemical": "Castoreum",
    "description": "Smells like Tomato, drifting past like a breeze through old curtains.",
    "note": "Base",
    "color": "Red"
  },
  {
    "feelings": "The First Note in Your Glove Compartment",
    "chemical": "Myrcene",
    "description": "Smells like Rose, lingering like a note from a forgotten song.",
    "note": "Base",
    "color": "Red"
  },
  {
    "feelings": "The Forgotten Candy in Your Winter Coat",
    "chemical": "Cinnamaldehyde",
    "description": "Smells like Beetroot, glowing with warmth from another time.",
    "note": "Top",
    "color": "Maroon"
  },
  {
    "feelings": "The Bookstore You Didn't Mean to Fall in Love In",
    "chemical": "Indole",
    "description": "Smells like Beetroot, sharp as a flashback in an empty room.",
    "note": "Top",
    "color": "Maroon"
  },
  {
    "feelings": "Postcard You Never Sent From the Train Station",
    "chemical": "Squalene",
    "description": "Smells like Fig, fading slow, like old film left in the sun.",
    "note": "Top",
    "color": "Maroon"
  },
  {
    "feelings": "That One Shirt You Wore Every Summer",
    "chemical": "Vanillin",
    "description": "Smells like Red wine, settling in the corners of your mind.",
    "note": "Top",
    "color": "Maroon"
  },
  {
    "feelings": "Rain on a Window While the Kettle Screams",
    "chemical": "Iso E Super",
    "description": "Smells like Cranberry, wrapped in the silence of something unfinished.",
    "note": "Top",
    "color": "Maroon"
  },
  {
    "feelings": "The Glitter Stuck to Your Skin After the Concert",
    "chemical": "Skatole",
    "description": "Smells like Fig, flickering like a memory just out of reach.",
    "note": "Mid",
    "color": "Maroon"
  },
  {
    "feelings": "Leftover Sparks from a Campfire Kiss",
    "chemical": "Phenethyl Alcohol",
    "description": "Smells like Red wine, soft as a whisper in a locked drawer.",
    "note": "Mid",
    "color": "Maroon"
  },
  {
    "feelings": "Sunlight Through the Lace Curtain at Her Place",
    "chemical": "Myrcene",
    "description": "Smells like Beetroot, clinging like a secret you forgot to tell.",
    "note": "Mid",
    "color": "Maroon"
  },
  {
    "feelings": "Midnight Walk Past a Closed Florist",
    "chemical": "Eugenol",
    "description": "Smells like Beetroot, drifting past like a breeze through old curtains.",
    "note": "Mid",
    "color": "Maroon"
  },
  {
    "feelings": "Birthday Cake Crumbs in a Shared Bed",
    "chemical": "Farnesol",
    "description": "Smells like Fig, lingering like a note from a forgotten song.",
    "note": "Mid",
    "color": "Maroon"
  },
  {
    "feelings": "When the Streetlight Flickered Just for You",
    "chemical": "Iso E Super",
    "description": "Smells like Beetroot, glowing with warmth from another time.",
    "note": "Base",
    "color": "Maroon"
  },
  {
    "feelings": "The Backseat Confession You Keep Replaying",
    "chemical": "Geosmin",
    "description": "Smells like Red wine, sharp as a flashback in an empty room.",
    "note": "Base",
    "color": "Maroon"
  },
  {
    "feelings": "Steam From a Bowl of Noodles at Midnight",
    "chemical": "Dimethyl Sulfide",
    "description": "Smells like Fig, fading slow, like old film left in the sun.",
    "note": "Base",
    "color": "Maroon"
  },
  {
    "feelings": "Worn Pages of Her Favorite Cookbook",
    "chemical": "Menthol",
    "description": "Smells like Plum skin, settling in the corners of your mind.",
    "note": "Base",
    "color": "Maroon"
  },
  {
    "feelings": "Last Hug at the Airport Gate",
    "chemical": "Musk Ketone",
    "description": "Smells like Red wine, wrapped in the silence of something unfinished.",
    "note": "Base",
    "color": "Maroon"
  },
  {
    "feelings": "Your Name Carved in a Picnic Table",
    "chemical": "Musk Ketone",
    "description": "Smells like Rose petal, flickering like a memory just out of reach.",
    "note": "Top",
    "color": "Pink"
  },
  {
    "feelings": "Their Old Hoodie That Still Smells Like Goodbye",
    "chemical": "Coumarin",
    "description": "Smells like Strawberry, soft as a whisper in a locked drawer.",
    "note": "Top",
    "color": "Pink"
  },
  {
    "feelings": "That Song They Played When You Walked Away",
    "chemical": "Alpha-Pinene",
    "description": "Smells like Blush, clinging like a secret you forgot to tell.",
    "note": "Top",
    "color": "Pink"
  },
  {
    "feelings": "Bike Ride Past the Lemon Trees",
    "chemical": "Farnesol",
    "description": "Smells like Bubblegum, drifting past like a breeze through old curtains.",
    "note": "Top",
    "color": "Pink"
  },
  {
    "feelings": "The First Note in Your Glove Compartment",
    "chemical": "Phenethyl Alcohol",
    "description": "Smells like Cotton candy, lingering like a note from a forgotten song.",
    "note": "Top",
    "color": "Pink"
  },
  {
    "feelings": "The Forgotten Candy in Your Winter Coat",
    "chemical": "Octenol",
    "description": "Smells like Rose petal, glowing with warmth from another time.",
    "note": "Mid",
    "color": "Pink"
  },
  {
    "feelings": "The Bookstore You Didn't Mean to Fall in Love In",
    "chemical": "Ethyl Maltol",
    "description": "Smells like Rose petal, sharp as a flashback in an empty room.",
    "note": "Mid",
    "color": "Pink"
  },
  {
    "feelings": "Postcard You Never Sent From the Train Station",
    "chemical": "Menthol",
    "description": "Smells like Cotton candy, fading slow, like old film left in the sun.",
    "note": "Mid",
    "color": "Pink"
  },
  {
    "feelings": "That One Shirt You Wore Every Summer",
    "chemical": "Squalene",
    "description": "Smells like Bubblegum, settling in the corners of your mind.",
    "note": "Mid",
    "color": "Pink"
  },
  {
    "feelings": "Rain on a Window While the Kettle Screams",
    "chemical": "Dimethyl Sulfide",
    "description": "Smells like Cotton candy, wrapped in the silence of something unfinished.",
    "note": "Mid",
    "color": "Pink"
  },
  {
    "feelings": "The Glitter Stuck to Your Skin After the Concert",
    "chemical": "Cis-3-Hexenol",
    "description": "Smells like Rose petal, flickering like a memory just out of reach.",
    "note": "Base",
    "color": "Pink"
  },
  {
    "feelings": "Leftover Sparks from a Campfire Kiss",
    "chemical": "Musk Ketone",
    "description": "Smells like Blush, soft as a whisper in a locked drawer.",
    "note": "Base",
    "color": "Pink"
  },
  {
    "feelings": "Sunlight Through the Lace Curtain at Her Place",
    "chemical": "Indole",
    "description": "Smells like Cotton candy, clinging like a secret you forgot to tell.",
    "note": "Base",
    "color": "Pink"
  },
  {
    "feelings": "Midnight Walk Past a Closed Florist",
    "chemical": "Dimethyl Sulfide",
    "description": "Smells like Cotton candy, drifting past like a breeze through old curtains.",
    "note": "Base",
    "color": "Pink"
  },
  {
    "feelings": "Birthday Cake Crumbs in a Shared Bed",
    "chemical": "Musk Ketone",
    "description": "Smells like Blush, lingering like a note from a forgotten song.",
    "note": "Base",
    "color": "Pink"
  },
  {
    "feelings": "When the Streetlight Flickered Just for You",
    "chemical": "Ambroxan",
    "description": "Smells like Peony, glowing with warmth from another time.",
    "note": "Top",
    "color": "Blush Pink"
  },
  {
    "feelings": "The Backseat Confession You Keep Replaying",
    "chemical": "Naphthalene",
    "description": "Smells like Peony, sharp as a flashback in an empty room.",
    "note": "Top",
    "color": "Blush Pink"
  },
  {
    "feelings": "Steam From a Bowl of Noodles at Midnight",
    "chemical": "Squalene",
    "description": "Smells like Silk, fading slow, like old film left in the sun.",
    "note": "Top",
    "color": "Blush Pink"
  },
  {
    "feelings": "Worn Pages of Her Favorite Cookbook",
    "chemical": "Octenol",
    "description": "Smells like Petal, settling in the corners of your mind.",
    "note": "Top",
    "color": "Blush Pink"
  },
  {
    "feelings": "Last Hug at the Airport Gate",
    "chemical": "Castoreum",
    "description": "Smells like Peony, wrapped in the silence of something unfinished.",
    "note": "Top",
    "color": "Blush Pink"
  },
  {
    "feelings": "Your Name Carved in a Picnic Table",
    "chemical": "Iso E Super",
    "description": "Smells like Petal, flickering like a memory just out of reach.",
    "note": "Mid",
    "color": "Blush Pink"
  },
  {
    "feelings": "Their Old Hoodie That Still Smells Like Goodbye",
    "chemical": "Castoreum",
    "description": "Smells like Peony, soft as a whisper in a locked drawer.",
    "note": "Mid",
    "color": "Blush Pink"
  },
  {
    "feelings": "That Song They Played When You Walked Away",
    "chemical": "Dihydromyrcenol",
    "description": "Smells like Rosé, clinging like a secret you forgot to tell.",
    "note": "Mid",
    "color": "Blush Pink"
  },
  {
    "feelings": "Bike Ride Past the Lemon Trees",
    "chemical": "Skatole",
    "description": "Smells like Petal, drifting past like a breeze through old curtains.",
    "note": "Mid",
    "color": "Blush Pink"
  },
  {
    "feelings": "The First Note in Your Glove Compartment",
    "chemical": "Phenethyl Alcohol",
    "description": "Smells like Rosé, lingering like a note from a forgotten song.",
    "note": "Mid",
    "color": "Blush Pink"
  },
  {
    "feelings": "The Forgotten Candy in Your Winter Coat",
    "chemical": "Ambroxan",
    "description": "Smells like Peony, glowing with warmth from another time.",
    "note": "Base",
    "color": "Blush Pink"
  },
  {
    "feelings": "The Bookstore You Didn't Mean to Fall in Love In",
    "chemical": "Naphthalene",
    "description": "Smells like Rosé, sharp as a flashback in an empty room.",
    "note": "Base",
    "color": "Blush Pink"
  },
  {
    "feelings": "Postcard You Never Sent From the Train Station",
    "chemical": "Limonene",
    "description": "Smells like Powder, fading slow, like old film left in the sun.",
    "note": "Base",
    "color": "Blush Pink"
  },
  {
    "feelings": "That One Shirt You Wore Every Summer",
    "chemical": "Alpha-Pinene",
    "description": "Smells like Silk, settling in the corners of your mind.",
    "note": "Base",
    "color": "Blush Pink"
  },
  {
    "feelings": "Rain on a Window While the Kettle Screams",
    "chemical": "Coumarin",
    "description": "Smells like Powder, wrapped in the silence of something unfinished.",
    "note": "Base",
    "color": "Blush Pink"
  },
  {
    "feelings": "The Glitter Stuck to Your Skin After the Concert",
    "chemical": "Geosmin",
    "description": "Smells like Tangerine, flickering like a memory just out of reach.",
    "note": "Top",
    "color": "Orange"
  },
  {
    "feelings": "Leftover Sparks from a Campfire Kiss",
    "chemical": "Benzyl Acetate",
    "description": "Smells like Tangerine, soft as a whisper in a locked drawer.",
    "note": "Top",
    "color": "Orange"
  },
  {
    "feelings": "Sunlight Through the Lace Curtain at Her Place",
    "chemical": "Benzyl Acetate",
    "description": "Smells like Tangerine, clinging like a secret you forgot to tell.",
    "note": "Top",
    "color": "Orange"
  },
  {
    "feelings": "Midnight Walk Past a Closed Florist",
    "chemical": "Farnesol",
    "description": "Smells like Tangerine, drifting past like a breeze through old curtains.",
    "note": "Top",
    "color": "Orange"
  },
  {
    "feelings": "Birthday Cake Crumbs in a Shared Bed",
    "chemical": "Castoreum",
    "description": "Smells like Clementine, lingering like a note from a forgotten song.",
    "note": "Top",
    "color": "Orange"
  },
  {
    "feelings": "When the Streetlight Flickered Just for You",
    "chemical": "Vanillin",
    "description": "Smells like Papaya, glowing with warmth from another time.",
    "note": "Mid",
    "color": "Orange"
  },
  {
    "feelings": "The Backseat Confession You Keep Replaying",
    "chemical": "Alpha-Pinene",
    "description": "Smells like Clementine, sharp as a flashback in an empty room.",
    "note": "Mid",
    "color": "Orange"
  },
  {
    "feelings": "Steam From a Bowl of Noodles at Midnight",
    "chemical": "Acetophenone",
    "description": "Smells like Papaya, fading slow, like old film left in the sun.",
    "note": "Mid",
    "color": "Orange"
  },
  {
    "feelings": "Worn Pages of Her Favorite Cookbook",
    "chemical": "Octenol",
    "description": "Smells like Clementine, settling in the corners of your mind.",
    "note": "Mid",
    "color": "Orange"
  },
  {
    "feelings": "Last Hug at the Airport Gate",
    "chemical": "Alpha-Pinene",
    "description": "Smells like Papaya, wrapped in the silence of something unfinished.",
    "note": "Mid",
    "color": "Orange"
  },
  {
    "feelings": "Your Name Carved in a Picnic Table",
    "chemical": "Tolu Balsam",
    "description": "Smells like Amber, flickering like a memory just out of reach.",
    "note": "Base",
    "color": "Orange"
  },
  {
    "feelings": "Their Old Hoodie That Still Smells Like Goodbye",
    "chemical": "Skatole",
    "description": "Smells like Tangerine, soft as a whisper in a locked drawer.",
    "note": "Base",
    "color": "Orange"
  },
  {
    "feelings": "That Song They Played When You Walked Away",
    "chemical": "Menthol",
    "description": "Smells like Tangerine, clinging like a secret you forgot to tell.",
    "note": "Base",
    "color": "Orange"
  },
  {
    "feelings": "Bike Ride Past the Lemon Trees",
    "chemical": "Hedione",
    "description": "Smells like Clementine, drifting past like a breeze through old curtains.",
    "note": "Base",
    "color": "Orange"
  },
  {
    "feelings": "The First Note in Your Glove Compartment",
    "chemical": "Benzyl Acetate",
    "description": "Smells like Amber, lingering like a note from a forgotten song.",
    "note": "Base",
    "color": "Orange"
  },
  {
    "feelings": "The Forgotten Candy in Your Winter Coat",
    "chemical": "Naphthalene",
    "description": "Smells like Saffron, glowing with warmth from another time.",
    "note": "Top",
    "color": "Burnt Orange"
  },
  {
    "feelings": "The Bookstore You Didn't Mean to Fall in Love In",
    "chemical": "Tolu Balsam",
    "description": "Smells like Cider, sharp as a flashback in an empty room.",
    "note": "Top",
    "color": "Burnt Orange"
  },
  {
    "feelings": "Postcard You Never Sent From the Train Station",
    "chemical": "Naphthalene",
    "description": "Smells like Cider, fading slow, like old film left in the sun.",
    "note": "Top",
    "color": "Burnt Orange"
  },
  {
    "feelings": "That One Shirt You Wore Every Summer",
    "chemical": "Limonene",
    "description": "Smells like Saffron, settling in the corners of your mind.",
    "note": "Top",
    "color": "Burnt Orange"
  },
  {
    "feelings": "Rain on a Window While the Kettle Screams",
    "chemical": "Hexyl Acetate",
    "description": "Smells like Saffron, wrapped in the silence of something unfinished.",
    "note": "Top",
    "color": "Burnt Orange"
  },
  {
    "feelings": "The Glitter Stuck to Your Skin After the Concert",
    "chemical": "Acetophenone",
    "description": "Smells like Rust, flickering like a memory just out of reach.",
    "note": "Mid",
    "color": "Burnt Orange"
  },
  {
    "feelings": "Leftover Sparks from a Campfire Kiss",
    "chemical": "Squalene",
    "description": "Smells like Rust, soft as a whisper in a locked drawer.",
    "note": "Mid",
    "color": "Burnt Orange"
  },
  {
    "feelings": "Sunlight Through the Lace Curtain at Her Place",
    "chemical": "Nerol",
    "description": "Smells like Rust, clinging like a secret you forgot to tell.",
    "note": "Mid",
    "color": "Burnt Orange"
  },
  {
    "feelings": "Midnight Walk Past a Closed Florist",
    "chemical": "Iso E Super",
    "description": "Smells like Clay, drifting past like a breeze through old curtains.",
    "note": "Mid",
    "color": "Burnt Orange"
  },
  {
    "feelings": "Birthday Cake Crumbs in a Shared Bed",
    "chemical": "Patchouli Alcohol",
    "description": "Smells like Chili powder, lingering like a note from a forgotten song.",
    "note": "Mid",
    "color": "Burnt Orange"
  },
  {
    "feelings": "When the Streetlight Flickered Just for You",
    "chemical": "Acetophenone",
    "description": "Smells like Clay, glowing with warmth from another time.",
    "note": "Base",
    "color": "Burnt Orange"
  },
  {
    "feelings": "The Backseat Confession You Keep Replaying",
    "chemical": "Farnesol",
    "description": "Smells like Clay, sharp as a flashback in an empty room.",
    "note": "Base",
    "color": "Burnt Orange"
  },
  {
    "feelings": "Steam From a Bowl of Noodles at Midnight",
    "chemical": "Musk Ketone",
    "description": "Smells like Cider, fading slow, like old film left in the sun.",
    "note": "Base",
    "color": "Burnt Orange"
  },
  {
    "feelings": "Worn Pages of Her Favorite Cookbook",
    "chemical": "Geosmin",
    "description": "Smells like Chili powder, settling in the corners of your mind.",
    "note": "Base",
    "color": "Burnt Orange"
  },
  {
    "feelings": "Last Hug at the Airport Gate",
    "chemical": "Ethyl Maltol",
    "description": "Smells like Cider, wrapped in the silence of something unfinished.",
    "note": "Base",
    "color": "Burnt Orange"
  },
  {
    "feelings": "Your Name Carved in a Picnic Table",
    "chemical": "Hedione",
    "description": "Smells like Lemon, flickering like a memory just out of reach.",
    "note": "Top",
    "color": "Yellow"
  },
  {
    "feelings": "Their Old Hoodie That Still Smells Like Goodbye",
    "chemical": "Linalool",
    "description": "Smells like Candle wax, soft as a whisper in a locked drawer.",
    "note": "Top",
    "color": "Yellow"
  },
  {
    "feelings": "That Song They Played When You Walked Away",
    "chemical": "Linalool",
    "description": "Smells like Lemon, clinging like a secret you forgot to tell.",
    "note": "Top",
    "color": "Yellow"
  },
  {
    "feelings": "Bike Ride Past the Lemon Trees",
    "chemical": "Patchouli Alcohol",
    "description": "Smells like Banana, drifting past like a breeze through old curtains.",
    "note": "Top",
    "color": "Yellow"
  },
  {
    "feelings": "The First Note in Your Glove Compartment",
    "chemical": "Skatole",
    "description": "Smells like Banana, lingering like a note from a forgotten song.",
    "note": "Top",
    "color": "Yellow"
  },
  {
    "feelings": "The Forgotten Candy in Your Winter Coat",
    "chemical": "Musk Ketone",
    "description": "Smells like Lemon, glowing with warmth from another time.",
    "note": "Mid",
    "color": "Yellow"
  },
  {
    "feelings": "The Bookstore You Didn't Mean to Fall in Love In",
    "chemical": "Hedione",
    "description": "Smells like Candle wax, sharp as a flashback in an empty room.",
    "note": "Mid",
    "color": "Yellow"
  },
  {
    "feelings": "Postcard You Never Sent From the Train Station",
    "chemical": "Skatole",
    "description": "Smells like Banana, fading slow, like old film left in the sun.",
    "note": "Mid",
    "color": "Yellow"
  },
  {
    "feelings": "That One Shirt You Wore Every Summer",
    "chemical": "Hedione",
    "description": "Smells like Candle wax, settling in the corners of your mind.",
    "note": "Mid",
    "color": "Yellow"
  },
  {
    "feelings": "Rain on a Window While the Kettle Screams",
    "chemical": "Indole",
    "description": "Smells like Honey, wrapped in the silence of something unfinished.",
    "note": "Mid",
    "color": "Yellow"
  },
  {
    "feelings": "The Glitter Stuck to Your Skin After the Concert",
    "chemical": "Acetophenone",
    "description": "Smells like Banana, flickering like a memory just out of reach.",
    "note": "Base",
    "color": "Yellow"
  },
  {
    "feelings": "Leftover Sparks from a Campfire Kiss",
    "chemical": "Menthol",
    "description": "Smells like Candle wax, soft as a whisper in a locked drawer.",
    "note": "Base",
    "color": "Yellow"
  },
  {
    "feelings": "Sunlight Through the Lace Curtain at Her Place",
    "chemical": "Limonene",
    "description": "Smells like Honey, clinging like a secret you forgot to tell.",
    "note": "Base",
    "color": "Yellow"
  },
  {
    "feelings": "Midnight Walk Past a Closed Florist",
    "chemical": "Skatole",
    "description": "Smells like Banana, drifting past like a breeze through old curtains.",
    "note": "Base",
    "color": "Yellow"
  },
  {
    "feelings": "Birthday Cake Crumbs in a Shared Bed",
    "chemical": "Patchouli Alcohol",
    "description": "Smells like Candle wax, lingering like a note from a forgotten song.",
    "note": "Base",
    "color": "Yellow"
  },
  {
    "feelings": "When the Streetlight Flickered Just for You",
    "chemical": "Phenethyl Alcohol",
    "description": "Smells like Goldenrod, glowing with warmth from another time.",
    "note": "Top",
    "color": "Mustard Yellow"
  },
  {
    "feelings": "The Backseat Confession You Keep Replaying",
    "chemical": "Nerol",
    "description": "Smells like Goldenrod, sharp as a flashback in an empty room.",
    "note": "Top",
    "color": "Mustard Yellow"
  },
  {
    "feelings": "Steam From a Bowl of Noodles at Midnight",
    "chemical": "Farnesol",
    "description": "Smells like Goldenrod, fading slow, like old film left in the sun.",
    "note": "Top",
    "color": "Mustard Yellow"
  },
  {
    "feelings": "Worn Pages of Her Favorite Cookbook",
    "chemical": "Dimethyl Sulfide",
    "description": "Smells like Goldenrod, settling in the corners of your mind.",
    "note": "Top",
    "color": "Mustard Yellow"
  },
  {
    "feelings": "Last Hug at the Airport Gate",
    "chemical": "Linalool",
    "description": "Smells like Turmeric, wrapped in the silence of something unfinished.",
    "note": "Top",
    "color": "Mustard Yellow"
  },
  {
    "feelings": "Your Name Carved in a Picnic Table",
    "chemical": "Farnesol",
    "description": "Smells like Goldenrod, flickering like a memory just out of reach.",
    "note": "Mid",
    "color": "Mustard Yellow"
  },
  {
    "feelings": "Their Old Hoodie That Still Smells Like Goodbye",
    "chemical": "Ambroxan",
    "description": "Smells like Cornmeal, soft as a whisper in a locked drawer.",
    "note": "Mid",
    "color": "Mustard Yellow"
  },
  {
    "feelings": "That Song They Played When You Walked Away",
    "chemical": "Squalene",
    "description": "Smells like Dijon, clinging like a secret you forgot to tell.",
    "note": "Mid",
    "color": "Mustard Yellow"
  },
  {
    "feelings": "Bike Ride Past the Lemon Trees",
    "chemical": "Naphthalene",
    "description": "Smells like Dijon, drifting past like a breeze through old curtains.",
    "note": "Mid",
    "color": "Mustard Yellow"
  },
  {
    "feelings": "The First Note in Your Glove Compartment",
    "chemical": "Myrcene",
    "description": "Smells like Mustard seed, lingering like a note from a forgotten song.",
    "note": "Mid",
    "color": "Mustard Yellow"
  },
  {
    "feelings": "The Forgotten Candy in Your Winter Coat",
    "chemical": "Octenol",
    "description": "Smells like Turmeric, glowing with warmth from another time.",
    "note": "Base",
    "color": "Mustard Yellow"
  },
  {
    "feelings": "The Bookstore You Didn't Mean to Fall in Love In",
    "chemical": "Patchouli Alcohol",
    "description": "Smells like Goldenrod, sharp as a flashback in an empty room.",
    "note": "Base",
    "color": "Mustard Yellow"
  },
  {
    "feelings": "Postcard You Never Sent From the Train Station",
    "chemical": "Octyl Acetate",
    "description": "Smells like Mustard seed, fading slow, like old film left in the sun.",
    "note": "Base",
    "color": "Mustard Yellow"
  },
  {
    "feelings": "That One Shirt You Wore Every Summer",
    "chemical": "Beta-Ionone",
    "description": "Smells like Dijon, settling in the corners of your mind.",
    "note": "Base",
    "color": "Mustard Yellow"
  },
  {
    "feelings": "Rain on a Window While the Kettle Screams",
    "chemical": "Cis-3-Hexenol",
    "description": "Smells like Mustard seed, wrapped in the silence of something unfinished.",
    "note": "Base",
    "color": "Mustard Yellow"
  },
  {
    "feelings": "The Glitter Stuck to Your Skin After the Concert",
    "chemical": "Linalool",
    "description": "Smells like Basil, flickering like a memory just out of reach.",
    "note": "Top",
    "color": "Green"
  },
  {
    "feelings": "Leftover Sparks from a Campfire Kiss",
    "chemical": "Acetophenone",
    "description": "Smells like Pine, soft as a whisper in a locked drawer.",
    "note": "Top",
    "color": "Green"
  },
  {
    "feelings": "Sunlight Through the Lace Curtain at Her Place",
    "chemical": "Galaxolide",
    "description": "Smells like Pine, clinging like a secret you forgot to tell.",
    "note": "Top",
    "color": "Green"
  },
  {
    "feelings": "Midnight Walk Past a Closed Florist",
    "chemical": "Beta-Ionone",
    "description": "Smells like Matcha, drifting past like a breeze through old curtains.",
    "note": "Top",
    "color": "Green"
  },
  {
    "feelings": "Birthday Cake Crumbs in a Shared Bed",
    "chemical": "Cis-3-Hexenol",
    "description": "Smells like Lime peel, lingering like a note from a forgotten song.",
    "note": "Top",
    "color": "Green"
  },
  {
    "feelings": "When the Streetlight Flickered Just for You",
    "chemical": "Hedione",
    "description": "Smells like Pine, glowing with warmth from another time.",
    "note": "Mid",
    "color": "Green"
  },
  {
    "feelings": "The Backseat Confession You Keep Replaying",
    "chemical": "Acetophenone",
    "description": "Smells like Grass, sharp as a flashback in an empty room.",
    "note": "Mid",
    "color": "Green"
  },
  {
    "feelings": "Steam From a Bowl of Noodles at Midnight",
    "chemical": "Hexyl Acetate",
    "description": "Smells like Pine, fading slow, like old film left in the sun.",
    "note": "Mid",
    "color": "Green"
  },
  {
    "feelings": "Worn Pages of Her Favorite Cookbook",
    "chemical": "Myrcene",
    "description": "Smells like Matcha, settling in the corners of your mind.",
    "note": "Mid",
    "color": "Green"
  },
  {
    "feelings": "Last Hug at the Airport Gate",
    "chemical": "Castoreum",
    "description": "Smells like Basil, wrapped in the silence of something unfinished.",
    "note": "Mid",
    "color": "Green"
  },
  {
    "feelings": "Your Name Carved in a Picnic Table",
    "chemical": "Cis-3-Hexenol",
    "description": "Smells like Grass, flickering like a memory just out of reach.",
    "note": "Base",
    "color": "Green"
  },
  {
    "feelings": "Their Old Hoodie That Still Smells Like Goodbye",
    "chemical": "Dihydromyrcenol",
    "description": "Smells like Pine, soft as a whisper in a locked drawer.",
    "note": "Base",
    "color": "Green"
  },
  {
    "feelings": "That Song They Played When You Walked Away",
    "chemical": "Coumarin",
    "description": "Smells like Pine, clinging like a secret you forgot to tell.",
    "note": "Base",
    "color": "Green"
  },
  {
    "feelings": "Bike Ride Past the Lemon Trees",
    "chemical": "Eugenol",
    "description": "Smells like Lime peel, drifting past like a breeze through old curtains.",
    "note": "Base",
    "color": "Green"
  },
  {
    "feelings": "The First Note in Your Glove Compartment",
    "chemical": "Methyl Anthranilate",
    "description": "Smells like Matcha, lingering like a note from a forgotten song.",
    "note": "Base",
    "color": "Green"
  },
  {
    "feelings": "The Forgotten Candy in Your Winter Coat",
    "chemical": "Indole",
    "description": "Smells like Avocado skin, glowing with warmth from another time.",
    "note": "Top",
    "color": "Olive Green"
  },
  {
    "feelings": "The Bookstore You Didn't Mean to Fall in Love In",
    "chemical": "Ethyl Maltol",
    "description": "Smells like Pistachio shell, sharp as a flashback in an empty room.",
    "note": "Top",
    "color": "Olive Green"
  },
  {
    "feelings": "Postcard You Never Sent From the Train Station",
    "chemical": "Indole",
    "description": "Smells like Pistachio shell, fading slow, like old film left in the sun.",
    "note": "Top",
    "color": "Olive Green"
  },
  {
    "feelings": "That One Shirt You Wore Every Summer",
    "chemical": "Beta-Ionone",
    "description": "Smells like Avocado skin, settling in the corners of your mind.",
    "note": "Top",
    "color": "Olive Green"
  },
  {
    "feelings": "Rain on a Window While the Kettle Screams",
    "chemical": "Alpha-Pinene",
    "description": "Smells like Avocado skin, wrapped in the silence of something unfinished.",
    "note": "Top",
    "color": "Olive Green"
  },
  {
    "feelings": "The Glitter Stuck to Your Skin After the Concert",
    "chemical": "Limonene",
    "description": "Smells like Moss, flickering like a memory just out of reach.",
    "note": "Mid",
    "color": "Olive Green"
  },
  {
    "feelings": "Leftover Sparks from a Campfire Kiss",
    "chemical": "Phenethyl Alcohol",
    "description": "Smells like Olive, soft as a whisper in a locked drawer.",
    "note": "Mid",
    "color": "Olive Green"
  },
  {
    "feelings": "Sunlight Through the Lace Curtain at Her Place",
    "chemical": "Dimethyl Sulfide",
    "description": "Smells like Olive, clinging like a secret you forgot to tell.",
    "note": "Mid",
    "color": "Olive Green"
  },
  {
    "feelings": "Midnight Walk Past a Closed Florist",
    "chemical": "Dimethyl Sulfide",
    "description": "Smells like Avocado skin, drifting past like a breeze through old curtains.",
    "note": "Mid",
    "color": "Olive Green"
  },
  {
    "feelings": "Birthday Cake Crumbs in a Shared Bed",
    "chemical": "Octyl Acetate",
    "description": "Smells like Avocado skin, lingering like a note from a forgotten song.",
    "note": "Mid",
    "color": "Olive Green"
  },
  {
    "feelings": "When the Streetlight Flickered Just for You",
    "chemical": "Methyl Anthranilate",
    "description": "Smells like Avocado skin, glowing with warmth from another time.",
    "note": "Base",
    "color": "Olive Green"
  },
  {
    "feelings": "The Backseat Confession You Keep Replaying",
    "chemical": "Beta-Ionone",
    "description": "Smells like Moss, sharp as a flashback in an empty room.",
    "note": "Base",
    "color": "Olive Green"
  },
  {
    "feelings": "Steam From a Bowl of Noodles at Midnight",
    "chemical": "Dihydromyrcenol",
    "description": "Smells like Pistachio shell, fading slow, like old film left in the sun.",
    "note": "Base",
    "color": "Olive Green"
  },
  {
    "feelings": "Worn Pages of Her Favorite Cookbook",
    "chemical": "Ethyl Maltol",
    "description": "Smells like Avocado skin, settling in the corners of your mind.",
    "note": "Base",
    "color": "Olive Green"
  },
  {
    "feelings": "Last Hug at the Airport Gate",
    "chemical": "Methyl Anthranilate",
    "description": "Smells like Avocado skin, wrapped in the silence of something unfinished.",
    "note": "Base",
    "color": "Olive Green"
  },
  {
    "feelings": "Your Name Carved in a Picnic Table",
    "chemical": "Octenol",
    "description": "Smells like Cucumber, flickering like a memory just out of reach.",
    "note": "Top",
    "color": "Mint Green"
  },
  {
    "feelings": "Their Old Hoodie That Still Smells Like Goodbye",
    "chemical": "Beta-Ionone",
    "description": "Smells like Pale jade, soft as a whisper in a locked drawer.",
    "note": "Top",
    "color": "Mint Green"
  },
  {
    "feelings": "That Song They Played When You Walked Away",
    "chemical": "Hexyl Acetate",
    "description": "Smells like Cucumber, clinging like a secret you forgot to tell.",
    "note": "Top",
    "color": "Mint Green"
  },
  {
    "feelings": "Bike Ride Past the Lemon Trees",
    "chemical": "Cinnamaldehyde",
    "description": "Smells like Aloe, drifting past like a breeze through old curtains.",
    "note": "Top",
    "color": "Mint Green"
  },
  {
    "feelings": "The First Note in Your Glove Compartment",
    "chemical": "Benzyl Acetate",
    "description": "Smells like Aloe, lingering like a note from a forgotten song.",
    "note": "Top",
    "color": "Mint Green"
  },
  {
    "feelings": "The Forgotten Candy in Your Winter Coat",
    "chemical": "Tolu Balsam",
    "description": "Smells like Cucumber, glowing with warmth from another time.",
    "note": "Mid",
    "color": "Mint Green"
  },
  {
    "feelings": "The Bookstore You Didn't Mean to Fall in Love In",
    "chemical": "Dihydromyrcenol",
    "description": "Smells like Pale jade, sharp as a flashback in an empty room.",
    "note": "Mid",
    "color": "Mint Green"
  },
  {
    "feelings": "Postcard You Never Sent From the Train Station",
    "chemical": "Ambroxan",
    "description": "Smells like Mint, fading slow, like old film left in the sun.",
    "note": "Mid",
    "color": "Mint Green"
  },
  {
    "feelings": "That One Shirt You Wore Every Summer",
    "chemical": "Myrcene",
    "description": "Smells like Pale jade, settling in the corners of your mind.",
    "note": "Mid",
    "color": "Mint Green"
  },
  {
    "feelings": "Rain on a Window While the Kettle Screams",
    "chemical": "Eugenol",
    "description": "Smells like Pale jade, wrapped in the silence of something unfinished.",
    "note": "Mid",
    "color": "Mint Green"
  },
  {
    "feelings": "The Glitter Stuck to Your Skin After the Concert",
    "chemical": "Patchouli Alcohol",
    "description": "Smells like Mint, flickering like a memory just out of reach.",
    "note": "Base",
    "color": "Mint Green"
  },
  {
    "feelings": "Leftover Sparks from a Campfire Kiss",
    "chemical": "Squalene",
    "description": "Smells like Mint, soft as a whisper in a locked drawer.",
    "note": "Base",
    "color": "Mint Green"
  },
  {
    "feelings": "Sunlight Through the Lace Curtain at Her Place",
    "chemical": "Tolu Balsam",
    "description": "Smells like Spearmint, clinging like a secret you forgot to tell.",
    "note": "Base",
    "color": "Mint Green"
  },
  {
    "feelings": "Midnight Walk Past a Closed Florist",
    "chemical": "Musk Ketone",
    "description": "Smells like Mint, drifting past like a breeze through old curtains.",
    "note": "Base",
    "color": "Mint Green"
  },
  {
    "feelings": "Birthday Cake Crumbs in a Shared Bed",
    "chemical": "Coumarin",
    "description": "Smells like Aloe, lingering like a note from a forgotten song.",
    "note": "Base",
    "color": "Mint Green"
  },
  {
    "feelings": "When the Streetlight Flickered Just for You",
    "chemical": "Limonene",
    "description": "Smells like Peacock feather, glowing with warmth from another time.",
    "note": "Top",
    "color": "Teal"
  },
  {
    "feelings": "The Backseat Confession You Keep Replaying",
    "chemical": "Castoreum",
    "description": "Smells like Tealight, sharp as a flashback in an empty room.",
    "note": "Top",
    "color": "Teal"
  },
  {
    "feelings": "Steam From a Bowl of Noodles at Midnight",
    "chemical": "Galaxolide",
    "description": "Smells like Peacock feather, fading slow, like old film left in the sun.",
    "note": "Top",
    "color": "Teal"
  },
  {
    "feelings": "Worn Pages of Her Favorite Cookbook",
    "chemical": "Iso E Super",
    "description": "Smells like Tealight, settling in the corners of your mind.",
    "note": "Top",
    "color": "Teal"
  },
  {
    "feelings": "Last Hug at the Airport Gate",
    "chemical": "Ambroxan",
    "description": "Smells like Tealight, wrapped in the silence of something unfinished.",
    "note": "Top",
    "color": "Teal"
  },
  {
    "feelings": "Your Name Carved in a Picnic Table",
    "chemical": "Vanillin",
    "description": "Smells like Pine, flickering like a memory just out of reach.",
    "note": "Mid",
    "color": "Teal"
  },
  {
    "feelings": "Their Old Hoodie That Still Smells Like Goodbye",
    "chemical": "Musk Ketone",
    "description": "Smells like Peacock feather, soft as a whisper in a locked drawer.",
    "note": "Mid",
    "color": "Teal"
  },
  {
    "feelings": "That Song They Played When You Walked Away",
    "chemical": "Linalool",
    "description": "Smells like Deep sea, clinging like a secret you forgot to tell.",
    "note": "Mid",
    "color": "Teal"
  },
  {
    "feelings": "Bike Ride Past the Lemon Trees",
    "chemical": "Musk Ketone",
    "description": "Smells like Ocean tide, drifting past like a breeze through old curtains.",
    "note": "Mid",
    "color": "Teal"
  },
  {
    "feelings": "The First Note in Your Glove Compartment",
    "chemical": "Skatole",
    "description": "Smells like Ocean tide, lingering like a note from a forgotten song.",
    "note": "Mid",
    "color": "Teal"
  },
  {
    "feelings": "The Forgotten Candy in Your Winter Coat",
    "chemical": "Geosmin",
    "description": "Smells like Ocean tide, glowing with warmth from another time.",
    "note": "Base",
    "color": "Teal"
  },
  {
    "feelings": "The Bookstore You Didn't Mean to Fall in Love In",
    "chemical": "Menthol",
    "description": "Smells like Ocean tide, sharp as a flashback in an empty room.",
    "note": "Base",
    "color": "Teal"
  },
  {
    "feelings": "Postcard You Never Sent From the Train Station",
    "chemical": "Dimethyl Sulfide",
    "description": "Smells like Peacock feather, fading slow, like old film left in the sun.",
    "note": "Base",
    "color": "Teal"
  },
  {
    "feelings": "That One Shirt You Wore Every Summer",
    "chemical": "Geosmin",
    "description": "Smells like Ocean tide, settling in the corners of your mind.",
    "note": "Base",
    "color": "Teal"
  },
  {
    "feelings": "Rain on a Window While the Kettle Screams",
    "chemical": "Phenethyl Alcohol",
    "description": "Smells like Pine, wrapped in the silence of something unfinished.",
    "note": "Base",
    "color": "Teal"
  },
  {
    "feelings": "The Glitter Stuck to Your Skin After the Concert",
    "chemical": "Eugenol",
    "description": "Smells like Sea glass, flickering like a memory just out of reach.",
    "note": "Top",
    "color": "Turquoise"
  },
  {
    "feelings": "Leftover Sparks from a Campfire Kiss",
    "chemical": "Methyl Anthranilate",
    "description": "Smells like Turquoise stone, soft as a whisper in a locked drawer.",
    "note": "Top",
    "color": "Turquoise"
  },
  {
    "feelings": "Sunlight Through the Lace Curtain at Her Place",
    "chemical": "Galaxolide",
    "description": "Smells like Tropical water, clinging like a secret you forgot to tell.",
    "note": "Top",
    "color": "Turquoise"
  },
  {
    "feelings": "Midnight Walk Past a Closed Florist",
    "chemical": "Naphthalene",
    "description": "Smells like Verdigris, drifting past like a breeze through old curtains.",
    "note": "Top",
    "color": "Turquoise"
  },
  {
    "feelings": "Birthday Cake Crumbs in a Shared Bed",
    "chemical": "Phenethyl Alcohol",
    "description": "Smells like Tropical water, lingering like a note from a forgotten song.",
    "note": "Top",
    "color": "Turquoise"
  },
  {
    "feelings": "When the Streetlight Flickered Just for You",
    "chemical": "Acetophenone",
    "description": "Smells like Turquoise stone, glowing with warmth from another time.",
    "note": "Mid",
    "color": "Turquoise"
  },
  {
    "feelings": "The Backseat Confession You Keep Replaying",
    "chemical": "Nerol",
    "description": "Smells like Tropical water, sharp as a flashback in an empty room.",
    "note": "Mid",
    "color": "Turquoise"
  },
  {
    "feelings": "Steam From a Bowl of Noodles at Midnight",
    "chemical": "Tolu Balsam",
    "description": "Smells like Sea glass, fading slow, like old film left in the sun.",
    "note": "Mid",
    "color": "Turquoise"
  },
  {
    "feelings": "Worn Pages of Her Favorite Cookbook",
    "chemical": "Hexyl Acetate",
    "description": "Smells like Sea glass, settling in the corners of your mind.",
    "note": "Mid",
    "color": "Turquoise"
  },
  {
    "feelings": "Last Hug at the Airport Gate",
    "chemical": "Octenol",
    "description": "Smells like Turquoise stone, wrapped in the silence of something unfinished.",
    "note": "Mid",
    "color": "Turquoise"
  },
  {
    "feelings": "Your Name Carved in a Picnic Table",
    "chemical": "Menthol",
    "description": "Smells like Turquoise stone, flickering like a memory just out of reach.",
    "note": "Base",
    "color": "Turquoise"
  },
  {
    "feelings": "Their Old Hoodie That Still Smells Like Goodbye",
    "chemical": "Iso E Super",
    "description": "Smells like Pool tile, soft as a whisper in a locked drawer.",
    "note": "Base",
    "color": "Turquoise"
  },
  {
    "feelings": "That Song They Played When You Walked Away",
    "chemical": "Coumarin",
    "description": "Smells like Sea glass, clinging like a secret you forgot to tell.",
    "note": "Base",
    "color": "Turquoise"
  },
  {
    "feelings": "Bike Ride Past the Lemon Trees",
    "chemical": "Ethyl Maltol",
    "description": "Smells like Verdigris, drifting past like a breeze through old curtains.",
    "note": "Base",
    "color": "Turquoise"
  },
  {
    "feelings": "The First Note in Your Glove Compartment",
    "chemical": "Benzyl Acetate",
    "description": "Smells like Turquoise stone, lingering like a note from a forgotten song.",
    "note": "Base",
    "color": "Turquoise"
  },
  {
    "feelings": "The Forgotten Candy in Your Winter Coat",
    "chemical": "Farnesol",
    "description": "Smells like Eggplant, glowing with warmth from another time.",
    "note": "Top",
    "color": "Purple"
  },
  {
    "feelings": "The Bookstore You Didn't Mean to Fall in Love In",
    "chemical": "Methyl Anthranilate",
    "description": "Smells like Orchid, sharp as a flashback in an empty room.",
    "note": "Top",
    "color": "Purple"
  },
  {
    "feelings": "Postcard You Never Sent From the Train Station",
    "chemical": "Iso E Super",
    "description": "Smells like Eggplant, fading slow, like old film left in the sun.",
    "note": "Top",
    "color": "Purple"
  },
  {
    "feelings": "That One Shirt You Wore Every Summer",
    "chemical": "Skatole",
    "description": "Smells like Eggplant, settling in the corners of your mind.",
    "note": "Top",
    "color": "Purple"
  },
  {
    "feelings": "Rain on a Window While the Kettle Screams",
    "chemical": "Galaxolide",
    "description": "Smells like Violet, wrapped in the silence of something unfinished.",
    "note": "Top",
    "color": "Purple"
  },
  {
    "feelings": "The Glitter Stuck to Your Skin After the Concert",
    "chemical": "Octenol",
    "description": "Smells like Grape, flickering like a memory just out of reach.",
    "note": "Mid",
    "color": "Purple"
  },
  {
    "feelings": "Leftover Sparks from a Campfire Kiss",
    "chemical": "Patchouli Alcohol",
    "description": "Smells like Lavender, soft as a whisper in a locked drawer.",
    "note": "Mid",
    "color": "Purple"
  },
  {
    "feelings": "Sunlight Through the Lace Curtain at Her Place",
    "chemical": "Limonene",
    "description": "Smells like Violet, clinging like a secret you forgot to tell.",
    "note": "Mid",
    "color": "Purple"
  },
  {
    "feelings": "Midnight Walk Past a Closed Florist",
    "chemical": "Coumarin",
    "description": "Smells like Grape, drifting past like a breeze through old curtains.",
    "note": "Mid",
    "color": "Purple"
  },
  {
    "feelings": "Birthday Cake Crumbs in a Shared Bed",
    "chemical": "Squalene",
    "description": "Smells like Orchid, lingering like a note from a forgotten song.",
    "note": "Mid",
    "color": "Purple"
  },
  {
    "feelings": "When the Streetlight Flickered Just for You",
    "chemical": "Geosmin",
    "description": "Smells like Lavender, glowing with warmth from another time.",
    "note": "Base",
    "color": "Purple"
  },
  {
    "feelings": "The Backseat Confession You Keep Replaying",
    "chemical": "Menthol",
    "description": "Smells like Violet, sharp as a flashback in an empty room.",
    "note": "Base",
    "color": "Purple"
  },
  {
    "feelings": "Steam From a Bowl of Noodles at Midnight",
    "chemical": "Hedione",
    "description": "Smells like Eggplant, fading slow, like old film left in the sun.",
    "note": "Base",
    "color": "Purple"
  },
  {
    "feelings": "Worn Pages of Her Favorite Cookbook",
    "chemical": "Coumarin",
    "description": "Smells like Eggplant, settling in the corners of your mind.",
    "note": "Base",
    "color": "Purple"
  },
  {
    "feelings": "Last Hug at the Airport Gate",
    "chemical": "Methyl Anthranilate",
    "description": "Smells like Orchid, wrapped in the silence of something unfinished.",
    "note": "Base",
    "color": "Purple"
  },
  {
    "feelings": "Your Name Carved in a Picnic Table",
    "chemical": "Vanillin",
    "description": "Smells like Periwinkle, flickering like a memory just out of reach.",
    "note": "Top",
    "color": "Lavender"
  },
  {
    "feelings": "Their Old Hoodie That Still Smells Like Goodbye",
    "chemical": "Alpha-Pinene",
    "description": "Smells like Lilac, soft as a whisper in a locked drawer.",
    "note": "Top",
    "color": "Lavender"
  },
  {
    "feelings": "That Song They Played When You Walked Away",
    "chemical": "Skatole",
    "description": "Smells like Soft heather, clinging like a secret you forgot to tell.",
    "note": "Top",
    "color": "Lavender"
  },
  {
    "feelings": "Bike Ride Past the Lemon Trees",
    "chemical": "Ambroxan",
    "description": "Smells like Periwinkle, drifting past like a breeze through old curtains.",
    "note": "Top",
    "color": "Lavender"
  },
  {
    "feelings": "The First Note in Your Glove Compartment",
    "chemical": "Dihydromyrcenol",
    "description": "Smells like Wisteria, lingering like a note from a forgotten song.",
    "note": "Top",
    "color": "Lavender"
  },
  {
    "feelings": "The Forgotten Candy in Your Winter Coat",
    "chemical": "Tolu Balsam",
    "description": "Smells like Wisteria, glowing with warmth from another time.",
    "note": "Mid",
    "color": "Lavender"
  },
  {
    "feelings": "The Bookstore You Didn't Mean to Fall in Love In",
    "chemical": "Tolu Balsam",
    "description": "Smells like Periwinkle, sharp as a flashback in an empty room.",
    "note": "Mid",
    "color": "Lavender"
  },
  {
    "feelings": "Postcard You Never Sent From the Train Station",
    "chemical": "Castoreum",
    "description": "Smells like Wisteria, fading slow, like old film left in the sun.",
    "note": "Mid",
    "color": "Lavender"
  },
  {
    "feelings": "That One Shirt You Wore Every Summer",
    "chemical": "Beta-Ionone",
    "description": "Smells like Soft heather, settling in the corners of your mind.",
    "note": "Mid",
    "color": "Lavender"
  },
  {
    "feelings": "Rain on a Window While the Kettle Screams",
    "chemical": "Linalool",
    "description": "Smells like Soft heather, wrapped in the silence of something unfinished.",
    "note": "Mid",
    "color": "Lavender"
  },
  {
    "feelings": "The Glitter Stuck to Your Skin After the Concert",
    "chemical": "Acetophenone",
    "description": "Smells like Wisteria, flickering like a memory just out of reach.",
    "note": "Base",
    "color": "Lavender"
  },
  {
    "feelings": "Leftover Sparks from a Campfire Kiss",
    "chemical": "Geosmin",
    "description": "Smells like Lavender, soft as a whisper in a locked drawer.",
    "note": "Base",
    "color": "Lavender"
  },
  {
    "feelings": "Sunlight Through the Lace Curtain at Her Place",
    "chemical": "Farnesol",
    "description": "Smells like Wisteria, clinging like a secret you forgot to tell.",
    "note": "Base",
    "color": "Lavender"
  },
  {
    "feelings": "Midnight Walk Past a Closed Florist",
    "chemical": "Limonene",
    "description": "Smells like Soft heather, drifting past like a breeze through old curtains.",
    "note": "Base",
    "color": "Lavender"
  },
  {
    "feelings": "Birthday Cake Crumbs in a Shared Bed",
    "chemical": "Musk Ketone",
    "description": "Smells like Lilac, lingering like a note from a forgotten song.",
    "note": "Base",
    "color": "Lavender"
  },
  {
    "feelings": "When the Streetlight Flickered Just for You",
    "chemical": "Myrcene",
    "description": "Smells like Sugared plum, glowing with warmth from another time.",
    "note": "Top",
    "color": "Lilac"
  },
  {
    "feelings": "The Backseat Confession You Keep Replaying",
    "chemical": "Myrcene",
    "description": "Smells like Pastel grape, sharp as a flashback in an empty room.",
    "note": "Top",
    "color": "Lilac"
  },
  {
    "feelings": "Steam From a Bowl of Noodles at Midnight",
    "chemical": "Cis-3-Hexenol",
    "description": "Smells like Macaron, fading slow, like old film left in the sun.",
    "note": "Top",
    "color": "Lilac"
  },
  {
    "feelings": "Worn Pages of Her Favorite Cookbook",
    "chemical": "Cinnamaldehyde",
    "description": "Smells like Sugared plum, settling in the corners of your mind.",
    "note": "Top",
    "color": "Lilac"
  },
  {
    "feelings": "Last Hug at the Airport Gate",
    "chemical": "Dihydromyrcenol",
    "description": "Smells like Macaron, wrapped in the silence of something unfinished.",
    "note": "Top",
    "color": "Lilac"
  },
  {
    "feelings": "Your Name Carved in a Picnic Table",
    "chemical": "Limonene",
    "description": "Smells like Sugared plum, flickering like a memory just out of reach.",
    "note": "Mid",
    "color": "Lilac"
  },
  {
    "feelings": "Their Old Hoodie That Still Smells Like Goodbye",
    "chemical": "Cis-3-Hexenol",
    "description": "Smells like Macaron, soft as a whisper in a locked drawer.",
    "note": "Mid",
    "color": "Lilac"
  },
  {
    "feelings": "That Song They Played When You Walked Away",
    "chemical": "Tolu Balsam",
    "description": "Smells like Lilac, clinging like a secret you forgot to tell.",
    "note": "Mid",
    "color": "Lilac"
  },
  {
    "feelings": "Bike Ride Past the Lemon Trees",
    "chemical": "Limonene",
    "description": "Smells like Hyacinth, drifting past like a breeze through old curtains.",
    "note": "Mid",
    "color": "Lilac"
  },
  {
    "feelings": "The First Note in Your Glove Compartment",
    "chemical": "Patchouli Alcohol",
    "description": "Smells like Lilac, lingering like a note from a forgotten song.",
    "note": "Mid",
    "color": "Lilac"
  },
  {
    "feelings": "The Forgotten Candy in Your Winter Coat",
    "chemical": "Skatole",
    "description": "Smells like Lilac, glowing with warmth from another time.",
    "note": "Base",
    "color": "Lilac"
  },
  {
    "feelings": "The Bookstore You Didn't Mean to Fall in Love In",
    "chemical": "Musk Ketone",
    "description": "Smells like Lilac, sharp as a flashback in an empty room.",
    "note": "Base",
    "color": "Lilac"
  },
  {
    "feelings": "Postcard You Never Sent From the Train Station",
    "chemical": "Indole",
    "description": "Smells like Macaron, fading slow, like old film left in the sun.",
    "note": "Base",
    "color": "Lilac"
  },
  {
    "feelings": "That One Shirt You Wore Every Summer",
    "chemical": "Alpha-Pinene",
    "description": "Smells like Hyacinth, settling in the corners of your mind.",
    "note": "Base",
    "color": "Lilac"
  },
  {
    "feelings": "Rain on a Window While the Kettle Screams",
    "chemical": "Galaxolide",
    "description": "Smells like Lilac, wrapped in the silence of something unfinished.",
    "note": "Base",
    "color": "Lilac"
  },
  {
    "feelings": "The Glitter Stuck to Your Skin After the Concert",
    "chemical": "Geosmin",
    "description": "Smells like Cinnamon, flickering like a memory just out of reach.",
    "note": "Top",
    "color": "Brown"
  },
  {
    "feelings": "Leftover Sparks from a Campfire Kiss",
    "chemical": "Hexyl Acetate",
    "description": "Smells like Walnut, soft as a whisper in a locked drawer.",
    "note": "Top",
    "color": "Brown"
  },
  {
    "feelings": "Sunlight Through the Lace Curtain at Her Place",
    "chemical": "Coumarin",
    "description": "Smells like Cinnamon, clinging like a secret you forgot to tell.",
    "note": "Top",
    "color": "Brown"
  },
  {
    "feelings": "Midnight Walk Past a Closed Florist",
    "chemical": "Vanillin",
    "description": "Smells like Cinnamon, drifting past like a breeze through old curtains.",
    "note": "Top",
    "color": "Brown"
  },
  {
    "feelings": "Birthday Cake Crumbs in a Shared Bed",
    "chemical": "Hexyl Acetate",
    "description": "Smells like Cocoa, lingering like a note from a forgotten song.",
    "note": "Top",
    "color": "Brown"
  },
  {
    "feelings": "When the Streetlight Flickered Just for You",
    "chemical": "Iso E Super",
    "description": "Smells like Walnut, glowing with warmth from another time.",
    "note": "Mid",
    "color": "Brown"
  },
  {
    "feelings": "The Backseat Confession You Keep Replaying",
    "chemical": "Alpha-Pinene",
    "description": "Smells like Cocoa, sharp as a flashback in an empty room.",
    "note": "Mid",
    "color": "Brown"
  },
  {
    "feelings": "Steam From a Bowl of Noodles at Midnight",
    "chemical": "Beta-Ionone",
    "description": "Smells like Cocoa, fading slow, like old film left in the sun.",
    "note": "Mid",
    "color": "Brown"
  },
  {
    "feelings": "Worn Pages of Her Favorite Cookbook",
    "chemical": "Eugenol",
    "description": "Smells like Cinnamon, settling in the corners of your mind.",
    "note": "Mid",
    "color": "Brown"
  },
  {
    "feelings": "Last Hug at the Airport Gate",
    "chemical": "Alpha-Pinene",
    "description": "Smells like Coffee bean, wrapped in the silence of something unfinished.",
    "note": "Mid",
    "color": "Brown"
  },
  {
    "feelings": "Your Name Carved in a Picnic Table",
    "chemical": "Hexyl Acetate",
    "description": "Smells like Leather, flickering like a memory just out of reach.",
    "note": "Base",
    "color": "Brown"
  },
  {
    "feelings": "Their Old Hoodie That Still Smells Like Goodbye",
    "chemical": "Dimethyl Sulfide",
    "description": "Smells like Coffee bean, soft as a whisper in a locked drawer.",
    "note": "Base",
    "color": "Brown"
  },
  {
    "feelings": "That Song They Played When You Walked Away",
    "chemical": "Dimethyl Sulfide",
    "description": "Smells like Cinnamon, clinging like a secret you forgot to tell.",
    "note": "Base",
    "color": "Brown"
  },
  {
    "feelings": "Bike Ride Past the Lemon Trees",
    "chemical": "Hedione",
    "description": "Smells like Cinnamon, drifting past like a breeze through old curtains.",
    "note": "Base",
    "color": "Brown"
  },
  {
    "feelings": "The First Note in Your Glove Compartment",
    "chemical": "Cis-3-Hexenol",
    "description": "Smells like Cinnamon, lingering like a note from a forgotten song.",
    "note": "Base",
    "color": "Brown"
  },
  {
    "feelings": "The Forgotten Candy in Your Winter Coat",
    "chemical": "Ambroxan",
    "description": "Smells like Wheat, glowing with warmth from another time.",
    "note": "Top",
    "color": "Tan"
  },
  {
    "feelings": "The Bookstore You Didn't Mean to Fall in Love In",
    "chemical": "Castoreum",
    "description": "Smells like Twine, sharp as a flashback in an empty room.",
    "note": "Top",
    "color": "Tan"
  },
  {
    "feelings": "Postcard You Never Sent From the Train Station",
    "chemical": "Galaxolide",
    "description": "Smells like Pine nut, fading slow, like old film left in the sun.",
    "note": "Top",
    "color": "Tan"
  },
  {
    "feelings": "That One Shirt You Wore Every Summer",
    "chemical": "Menthol",
    "description": "Smells like Sand, settling in the corners of your mind.",
    "note": "Top",
    "color": "Tan"
  },
  {
    "feelings": "Rain on a Window While the Kettle Screams",
    "chemical": "Octenol",
    "description": "Smells like Pine nut, wrapped in the silence of something unfinished.",
    "note": "Top",
    "color": "Tan"
  },
  {
    "feelings": "The Glitter Stuck to Your Skin After the Concert",
    "chemical": "Cinnamaldehyde",
    "description": "Smells like Sand, flickering like a memory just out of reach.",
    "note": "Mid",
    "color": "Tan"
  },
  {
    "feelings": "Leftover Sparks from a Campfire Kiss",
    "chemical": "Iso E Super",
    "description": "Smells like Pine nut, soft as a whisper in a locked drawer.",
    "note": "Mid",
    "color": "Tan"
  },
  {
    "feelings": "Sunlight Through the Lace Curtain at Her Place",
    "chemical": "Vanillin",
    "description": "Smells like Wheat, clinging like a secret you forgot to tell.",
    "note": "Mid",
    "color": "Tan"
  },
  {
    "feelings": "Midnight Walk Past a Closed Florist",
    "chemical": "Beta-Ionone",
    "description": "Smells like Cardboard, drifting past like a breeze through old curtains.",
    "note": "Mid",
    "color": "Tan"
  },
  {
    "feelings": "Birthday Cake Crumbs in a Shared Bed",
    "chemical": "Eugenol",
    "description": "Smells like Cardboard, lingering like a note from a forgotten song.",
    "note": "Mid",
    "color": "Tan"
  },
  {
    "feelings": "When the Streetlight Flickered Just for You",
    "chemical": "Dimethyl Sulfide",
    "description": "Smells like Twine, glowing with warmth from another time.",
    "note": "Base",
    "color": "Tan"
  },
  {
    "feelings": "The Backseat Confession You Keep Replaying",
    "chemical": "Nerol",
    "description": "Smells like Sand, sharp as a flashback in an empty room.",
    "note": "Base",
    "color": "Tan"
  },
  {
    "feelings": "Steam From a Bowl of Noodles at Midnight",
    "chemical": "Eugenol",
    "description": "Smells like Twine, fading slow, like old film left in the sun.",
    "note": "Base",
    "color": "Tan"
  },
  {
    "feelings": "Worn Pages of Her Favorite Cookbook",
    "chemical": "Indole",
    "description": "Smells like Twine, settling in the corners of your mind.",
    "note": "Base",
    "color": "Tan"
  },
  {
    "feelings": "Last Hug at the Airport Gate",
    "chemical": "Octyl Acetate",
    "description": "Smells like Pine nut, wrapped in the silence of something unfinished.",
    "note": "Base",
    "color": "Tan"
  },
  {
    "feelings": "Your Name Carved in a Picnic Table",
    "chemical": "Indole",
    "description": "Smells like Ecru, flickering like a memory just out of reach.",
    "note": "Top",
    "color": "Beige"
  },
  {
    "feelings": "Their Old Hoodie That Still Smells Like Goodbye",
    "chemical": "Linalool",
    "description": "Smells like Almond, soft as a whisper in a locked drawer.",
    "note": "Top",
    "color": "Beige"
  },
  {
    "feelings": "That Song They Played When You Walked Away",
    "chemical": "Galaxolide",
    "description": "Smells like Parchment, clinging like a secret you forgot to tell.",
    "note": "Top",
    "color": "Beige"
  },
  {
    "feelings": "Bike Ride Past the Lemon Trees",
    "chemical": "Hexyl Acetate",
    "description": "Smells like Almond, drifting past like a breeze through old curtains.",
    "note": "Top",
    "color": "Beige"
  },
  {
    "feelings": "The First Note in Your Glove Compartment",
    "chemical": "Geosmin",
    "description": "Smells like Oatmeal, lingering like a note from a forgotten song.",
    "note": "Top",
    "color": "Beige"
  },
  {
    "feelings": "The Forgotten Candy in Your Winter Coat",
    "chemical": "Phenethyl Alcohol",
    "description": "Smells like Oatmeal, glowing with warmth from another time.",
    "note": "Mid",
    "color": "Beige"
  },
  {
    "feelings": "The Bookstore You Didn't Mean to Fall in Love In",
    "chemical": "Linalool",
    "description": "Smells like Cashew, sharp as a flashback in an empty room.",
    "note": "Mid",
    "color": "Beige"
  },
  {
    "feelings": "Postcard You Never Sent From the Train Station",
    "chemical": "Dihydromyrcenol",
    "description": "Smells like Parchment, fading slow, like old film left in the sun.",
    "note": "Mid",
    "color": "Beige"
  },
  {
    "feelings": "That One Shirt You Wore Every Summer",
    "chemical": "Benzyl Acetate",
    "description": "Smells like Oatmeal, settling in the corners of your mind.",
    "note": "Mid",
    "color": "Beige"
  },
  {
    "feelings": "Rain on a Window While the Kettle Screams",
    "chemical": "Hedione",
    "description": "Smells like Ecru, wrapped in the silence of something unfinished.",
    "note": "Mid",
    "color": "Beige"
  },
  {
    "feelings": "The Glitter Stuck to Your Skin After the Concert",
    "chemical": "Menthol",
    "description": "Smells like Cashew, flickering like a memory just out of reach.",
    "note": "Base",
    "color": "Beige"
  },
  {
    "feelings": "Leftover Sparks from a Campfire Kiss",
    "chemical": "Limonene",
    "description": "Smells like Cashew, soft as a whisper in a locked drawer.",
    "note": "Base",
    "color": "Beige"
  },
  {
    "feelings": "Sunlight Through the Lace Curtain at Her Place",
    "chemical": "Octenol",
    "description": "Smells like Parchment, clinging like a secret you forgot to tell.",
    "note": "Base",
    "color": "Beige"
  },
  {
    "feelings": "Midnight Walk Past a Closed Florist",
    "chemical": "Phenethyl Alcohol",
    "description": "Smells like Ecru, drifting past like a breeze through old curtains.",
    "note": "Base",
    "color": "Beige"
  },
  {
    "feelings": "Birthday Cake Crumbs in a Shared Bed",
    "chemical": "Patchouli Alcohol",
    "description": "Smells like Parchment, lingering like a note from a forgotten song.",
    "note": "Base",
    "color": "Beige"
  },
  {
    "feelings": "When the Streetlight Flickered Just for You",
    "chemical": "Dimethyl Sulfide",
    "description": "Smells like Milk, glowing with warmth from another time.",
    "note": "Top",
    "color": "Cream"
  },
  {
    "feelings": "The Backseat Confession You Keep Replaying",
    "chemical": "Nerol",
    "description": "Smells like Butter, sharp as a flashback in an empty room.",
    "note": "Top",
    "color": "Cream"
  },
  {
    "feelings": "Steam From a Bowl of Noodles at Midnight",
    "chemical": "Dimethyl Sulfide",
    "description": "Smells like Custard, fading slow, like old film left in the sun.",
    "note": "Top",
    "color": "Cream"
  },
  {
    "feelings": "Worn Pages of Her Favorite Cookbook",
    "chemical": "Octyl Acetate",
    "description": "Smells like Vanilla, settling in the corners of your mind.",
    "note": "Top",
    "color": "Cream"
  },
  {
    "feelings": "Last Hug at the Airport Gate",
    "chemical": "Octyl Acetate",
    "description": "Smells like Butter, wrapped in the silence of something unfinished.",
    "note": "Top",
    "color": "Cream"
  },
  {
    "feelings": "Your Name Carved in a Picnic Table",
    "chemical": "Beta-Ionone",
    "description": "Smells like Vanilla, flickering like a memory just out of reach.",
    "note": "Mid",
    "color": "Cream"
  },
  {
    "feelings": "Their Old Hoodie That Still Smells Like Goodbye",
    "chemical": "Ethyl Maltol",
    "description": "Smells like Butter, soft as a whisper in a locked drawer.",
    "note": "Mid",
    "color": "Cream"
  },
  {
    "feelings": "That Song They Played When You Walked Away",
    "chemical": "Eugenol",
    "description": "Smells like Butter, clinging like a secret you forgot to tell.",
    "note": "Mid",
    "color": "Cream"
  },
  {
    "feelings": "Bike Ride Past the Lemon Trees",
    "chemical": "Castoreum",
    "description": "Smells like Butter, drifting past like a breeze through old curtains.",
    "note": "Mid",
    "color": "Cream"
  },
  {
    "feelings": "The First Note in Your Glove Compartment",
    "chemical": "Squalene",
    "description": "Smells like Chantilly, lingering like a note from a forgotten song.",
    "note": "Mid",
    "color": "Cream"
  },
  {
    "feelings": "The Forgotten Candy in Your Winter Coat",
    "chemical": "Ambroxan",
    "description": "Smells like Vanilla, glowing with warmth from another time.",
    "note": "Base",
    "color": "Cream"
  },
  {
    "feelings": "The Bookstore You Didn't Mean to Fall in Love In",
    "chemical": "Octenol",
    "description": "Smells like Butter, sharp as a flashback in an empty room.",
    "note": "Base",
    "color": "Cream"
  },
  {
    "feelings": "Postcard You Never Sent From the Train Station",
    "chemical": "Cis-3-Hexenol",
    "description": "Smells like Milk, fading slow, like old film left in the sun.",
    "note": "Base",
    "color": "Cream"
  },
  {
    "feelings": "That One Shirt You Wore Every Summer",
    "chemical": "Ethyl Maltol",
    "description": "Smells like Chantilly, settling in the corners of your mind.",
    "note": "Base",
    "color": "Cream"
  },
  {
    "feelings": "Rain on a Window While the Kettle Screams",
    "chemical": "Castoreum",
    "description": "Smells like Custard, wrapped in the silence of something unfinished.",
    "note": "Base",
    "color": "Cream"
  },
  {
    "feelings": "The Glitter Stuck to Your Skin After the Concert",
    "chemical": "Benzyl Acetate",
    "description": "Smells like Chalk, flickering like a memory just out of reach.",
    "note": "Top",
    "color": "Off-White"
  },
  {
    "feelings": "Leftover Sparks from a Campfire Kiss",
    "chemical": "Limonene",
    "description": "Smells like Canvas, soft as a whisper in a locked drawer.",
    "note": "Top",
    "color": "Off-White"
  },
  {
    "feelings": "Sunlight Through the Lace Curtain at Her Place",
    "chemical": "Dihydromyrcenol",
    "description": "Smells like Canvas, clinging like a secret you forgot to tell.",
    "note": "Top",
    "color": "Off-White"
  },
  {
    "feelings": "Midnight Walk Past a Closed Florist",
    "chemical": "Cinnamaldehyde",
    "description": "Smells like Porcelain, drifting past like a breeze through old curtains.",
    "note": "Top",
    "color": "Off-White"
  },
  {
    "feelings": "Birthday Cake Crumbs in a Shared Bed",
    "chemical": "Eugenol",
    "description": "Smells like Canvas, lingering like a note from a forgotten song.",
    "note": "Top",
    "color": "Off-White"
  },
  {
    "feelings": "When the Streetlight Flickered Just for You",
    "chemical": "Ambroxan",
    "description": "Smells like Bone, glowing with warmth from another time.",
    "note": "Mid",
    "color": "Off-White"
  },
  {
    "feelings": "The Backseat Confession You Keep Replaying",
    "chemical": "Cinnamaldehyde",
    "description": "Smells like Porcelain, sharp as a flashback in an empty room.",
    "note": "Mid",
    "color": "Off-White"
  },
  {
    "feelings": "Steam From a Bowl of Noodles at Midnight",
    "chemical": "Tolu Balsam",
    "description": "Smells like Chalk, fading slow, like old film left in the sun.",
    "note": "Mid",
    "color": "Off-White"
  },
  {
    "feelings": "Worn Pages of Her Favorite Cookbook",
    "chemical": "Indole",
    "description": "Smells like Bone, settling in the corners of your mind.",
    "note": "Mid",
    "color": "Off-White"
  },
  {
    "feelings": "Last Hug at the Airport Gate",
    "chemical": "Vanillin",
    "description": "Smells like Eggshell, wrapped in the silence of something unfinished.",
    "note": "Mid",
    "color": "Off-White"
  },
  {
    "feelings": "Your Name Carved in a Picnic Table",
    "chemical": "Vanillin",
    "description": "Smells like Canvas, flickering like a memory just out of reach.",
    "note": "Base",
    "color": "Off-White"
  },
  {
    "feelings": "Their Old Hoodie That Still Smells Like Goodbye",
    "chemical": "Eugenol",
    "description": "Smells like Bone, soft as a whisper in a locked drawer.",
    "note": "Base",
    "color": "Off-White"
  },
  {
    "feelings": "That Song They Played When You Walked Away",
    "chemical": "Iso E Super",
    "description": "Smells like Chalk, clinging like a secret you forgot to tell.",
    "note": "Base",
    "color": "Off-White"
  },
  {
    "feelings": "Bike Ride Past the Lemon Trees",
    "chemical": "Eugenol",
    "description": "Smells like Porcelain, drifting past like a breeze through old curtains.",
    "note": "Base",
    "color": "Off-White"
  },
  {
    "feelings": "The First Note in Your Glove Compartment",
    "chemical": "Skatole",
    "description": "Smells like Bone, lingering like a note from a forgotten song.",
    "note": "Base",
    "color": "Off-White"
  },
  {
    "feelings": "The Forgotten Candy in Your Winter Coat",
    "chemical": "Cis-3-Hexenol",
    "description": "Smells like Indigo thread, glowing with warmth from another time.",
    "note": "Top",
    "color": "Denim"
  },
  {
    "feelings": "The Bookstore You Didn't Mean to Fall in Love In",
    "chemical": "Limonene",
    "description": "Smells like Stonewash, sharp as a flashback in an empty room.",
    "note": "Top",
    "color": "Denim"
  },
  {
    "feelings": "Postcard You Never Sent From the Train Station",
    "chemical": "Galaxolide",
    "description": "Smells like Stonewash, fading slow, like old film left in the sun.",
    "note": "Top",
    "color": "Denim"
  },
  {
    "feelings": "That One Shirt You Wore Every Summer",
    "chemical": "Hexyl Acetate",
    "description": "Smells like Stonewash, settling in the corners of your mind.",
    "note": "Top",
    "color": "Denim"
  },
  {
    "feelings": "Rain on a Window While the Kettle Screams",
    "chemical": "Methyl Anthranilate",
    "description": "Smells like Cotton twill, wrapped in the silence of something unfinished.",
    "note": "Top",
    "color": "Denim"
  },
  {
    "feelings": "The Glitter Stuck to Your Skin After the Concert",
    "chemical": "Octyl Acetate",
    "description": "Smells like Denim, flickering like a memory just out of reach.",
    "note": "Mid",
    "color": "Denim"
  },
  {
    "feelings": "Leftover Sparks from a Campfire Kiss",
    "chemical": "Hedione",
    "description": "Smells like Indigo thread, soft as a whisper in a locked drawer.",
    "note": "Mid",
    "color": "Denim"
  },
  {
    "feelings": "Sunlight Through the Lace Curtain at Her Place",
    "chemical": "Patchouli Alcohol",
    "description": "Smells like Stonewash, clinging like a secret you forgot to tell.",
    "note": "Mid",
    "color": "Denim"
  },
  {
    "feelings": "Midnight Walk Past a Closed Florist",
    "chemical": "Linalool",
    "description": "Smells like Washed jeans, drifting past like a breeze through old curtains.",
    "note": "Mid",
    "color": "Denim"
  },
  {
    "feelings": "Birthday Cake Crumbs in a Shared Bed",
    "chemical": "Indole",
    "description": "Smells like Indigo thread, lingering like a note from a forgotten song.",
    "note": "Mid",
    "color": "Denim"
  },
  {
    "feelings": "When the Streetlight Flickered Just for You",
    "chemical": "Acetophenone",
    "description": "Smells like Cotton twill, glowing with warmth from another time.",
    "note": "Base",
    "color": "Denim"
  },
  {
    "feelings": "The Backseat Confession You Keep Replaying",
    "chemical": "Phenethyl Alcohol",
    "description": "Smells like Stonewash, sharp as a flashback in an empty room.",
    "note": "Base",
    "color": "Denim"
  },
  {
    "feelings": "Steam From a Bowl of Noodles at Midnight",
    "chemical": "Galaxolide",
    "description": "Smells like Stonewash, fading slow, like old film left in the sun.",
    "note": "Base",
    "color": "Denim"
  },
  {
    "feelings": "Worn Pages of Her Favorite Cookbook",
    "chemical": "Coumarin",
    "description": "Smells like Denim, settling in the corners of your mind.",
    "note": "Base",
    "color": "Denim"
  },
  {
    "feelings": "Last Hug at the Airport Gate",
    "chemical": "Iso E Super",
    "description": "Smells like Denim, wrapped in the silence of something unfinished.",
    "note": "Base",
    "color": "Denim"
  },
  {
    "feelings": "Your Name Carved in a Picnic Table",
    "chemical": "Squalene",
    "description": "Smells like Canvas, flickering like a memory just out of reach.",
    "note": "Top",
    "color": "Khaki"
  },
  {
    "feelings": "Their Old Hoodie That Still Smells Like Goodbye",
    "chemical": "Galaxolide",
    "description": "Smells like Dried grass, soft as a whisper in a locked drawer.",
    "note": "Top",
    "color": "Khaki"
  },
  {
    "feelings": "That Song They Played When You Walked Away",
    "chemical": "Ethyl Maltol",
    "description": "Smells like Canvas, clinging like a secret you forgot to tell.",
    "note": "Top",
    "color": "Khaki"
  },
  {
    "feelings": "Bike Ride Past the Lemon Trees",
    "chemical": "Beta-Ionone",
    "description": "Smells like Camel hair, drifting past like a breeze through old curtains.",
    "note": "Top",
    "color": "Khaki"
  },
  {
    "feelings": "The First Note in Your Glove Compartment",
    "chemical": "Benzyl Acetate",
    "description": "Smells like Dusty olive, lingering like a note from a forgotten song.",
    "note": "Top",
    "color": "Khaki"
  },
  {
    "feelings": "The Forgotten Candy in Your Winter Coat",
    "chemical": "Coumarin",
    "description": "Smells like Camel hair, glowing with warmth from another time.",
    "note": "Mid",
    "color": "Khaki"
  },
  {
    "feelings": "The Bookstore You Didn't Mean to Fall in Love In",
    "chemical": "Hexyl Acetate",
    "description": "Smells like Dried grass, sharp as a flashback in an empty room.",
    "note": "Mid",
    "color": "Khaki"
  },
  {
    "feelings": "Postcard You Never Sent From the Train Station",
    "chemical": "Naphthalene",
    "description": "Smells like Khaki, fading slow, like old film left in the sun.",
    "note": "Mid",
    "color": "Khaki"
  },
  {
    "feelings": "That One Shirt You Wore Every Summer",
    "chemical": "Geosmin",
    "description": "Smells like Dusty olive, settling in the corners of your mind.",
    "note": "Mid",
    "color": "Khaki"
  },
  {
    "feelings": "Rain on a Window While the Kettle Screams",
    "chemical": "Castoreum",
    "description": "Smells like Camel hair, wrapped in the silence of something unfinished.",
    "note": "Mid",
    "color": "Khaki"
  },
  {
    "feelings": "The Glitter Stuck to Your Skin After the Concert",
    "chemical": "Octyl Acetate",
    "description": "Smells like Dried grass, flickering like a memory just out of reach.",
    "note": "Base",
    "color": "Khaki"
  },
  {
    "feelings": "Leftover Sparks from a Campfire Kiss",
    "chemical": "Castoreum",
    "description": "Smells like Camel hair, soft as a whisper in a locked drawer.",
    "note": "Base",
    "color": "Khaki"
  },
  {
    "feelings": "Sunlight Through the Lace Curtain at Her Place",
    "chemical": "Myrcene",
    "description": "Smells like Khaki, clinging like a secret you forgot to tell.",
    "note": "Base",
    "color": "Khaki"
  },
  {
    "feelings": "Midnight Walk Past a Closed Florist",
    "chemical": "Cinnamaldehyde",
    "description": "Smells like Dried grass, drifting past like a breeze through old curtains.",
    "note": "Base",
    "color": "Khaki"
  },
  {
    "feelings": "Birthday Cake Crumbs in a Shared Bed",
    "chemical": "Indole",
    "description": "Smells like Camel hair, lingering like a note from a forgotten song.",
    "note": "Base",
    "color": "Khaki"
  }
]

//variant : "color"
//ADD THE ML5 STRUCTURE HERE TO PICK THE COLOUR OF THE CLOTHING 
function getColour(variant) {
  return NOTES.filter(specificColor => specificColor.color === variant);
}

// variant: Base, Top, Mid
// function getNote(variant) {
//   const notes = NOTES.filter(scent => scent.note === variant)
//   const randomIndex = Math.floor(Math.random() * notes.length);
//   const selected = notes[randomIndex];
//   return `${selected.feelings.trim()} (${selected.chemical.trim()})
// ${selected.description.trim()}`
// }

// variant: "Top", "Mid", or "Base"
// notesList: the array of notes returned by getColour()
function getNote(variant, notesList) {
//   const notes = notesList.filter(scent => scent.note === variant);
//   const randomIndex = Math.floor(Math.random() * notes.length);
//   const selected = notes[randomIndex];
//   return `${selected.feelings.trim()} (${selected.chemical.trim()})
// ${selected.description.trim()}`;
  
   if (!notesList || notesList.length === 0) {
    console.warn(`No notes provided to getNote for type: ${variant}`);
    return "Unavailable";
  }

  const matchingNotes = notesList.filter(n => n.note === variant);

  if (matchingNotes.length === 0) {
    console.warn(`No ${variant} note found in filtered notes.`);
    return "Unavailable";
  }

  const selected = matchingNotes[Math.floor(Math.random() * matchingNotes.length)];
  return `${selected.feelings.trim()} (${selected.chemical.trim()})
${selected.description.trim()}`;
}

// Variables to store the selected notes
let topNote = "";
let midNote = "";
let baseNote = "";
let colorOfClothing = ""; //Holds the final color of clothing 
let displayText = "Come close and take a sniff?"; // Default text
let colorHistory = [];

let serial; // Variable to hold the serial object
let latestData = ""; // To store the latest data from Arduino
let speech

let bodySegmentation;
let video;
let segmentation;

let options = {
  maskType: "parts",
};

function preload() {
  bodySegmentation = ml5.bodySegmentation("BodyPix", options);
}


function setup() {
  createCanvas(window.innerWidth, window.innerHeight); // Create a canvas
  textAlign(CENTER, CENTER);
  textSize(20);
  
  //ML5 Set up REPLACE THIS SET UP WITH THE CAMERA 
  
//   video = createCapture(VIDEO);
//   video.size(640, 480);
//   video.hide();

//   bodySegmentation.detectStart(video, gotResults);
  
  // Step 1: Get video input devices
  navigator.mediaDevices.enumerateDevices().then(devices => {
    const videoDevices = devices.filter(device => device.kind === 'videoinput');
    console.log("Video devices:", videoDevices);

    // Step 2: Select the external webcam, since the order is almost never the same everytime you run it, just in case it is not running the way you want it to, swap 0 and 1
    const selectedDeviceId = videoDevices[0]?.deviceId || videoDevices[1].deviceId;

    // Step 3: Create capture with selected camera
    const constraints = {
      audio: false, // disabling the audio
      video: {
        deviceId: selectedDeviceId
      }
    };

    video = createCapture(constraints, () => {
      console.log("Camera started:", selectedDeviceId);

      // Only call detectStart AFTER video is ready and pass .elt
      bodySegmentation.detectStart(video.elt, gotResults);
    });

    //video.size(640, 480);
    video.size(window.innerWidth, window.innerHeight);
    video.hide();
  }).catch(err => {
    console.error("Error getting video devices:", err);
  });
  
  //---------------------------------------------------------------------------------
  
  // Applying the Google Font
  textFont('VT323'); 


  // Initialize WebSerial
  serial = new p5.WebSerial();

  // Check if WebSerial is supported
  if (!navigator.serial) {
    alert("WebSerial is not supported in this browser. Try Chrome or MS Edge.");
    noLoop();
    return;
  }

  // Setup WebSerial events
  serial.on("portavailable", () => {
    serial.open();
    console.log("portavailable");
  });
  serial.on("data", serialEvent); // When data is received
  serial.on("close", makePortButton); // When port is closed
  serial.on("requesterror", portError); // Handle errors

  // Add a button to choose the serial port
  makePortButton();
  speech = new p5.Speech();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  
  //adding the video being captured and colour being detected-----
   if (segmentation) {
    let parts = bodySegmentation.getPartsId();
    let gridSize = 5;

    let colorCount = {};
    let colorKeys = [];
    let count = 0;

    video.loadPixels();

    for (let x = 0; x < video.width; x += gridSize) {
      for (let y = int(video.height * 0.25); y < video.height; y += gridSize) {
        let index = y * video.width + x;
        if (segmentation.data[index] === parts.TORSO_FRONT) {
          let pixelIndex = 4 * index;
          let r = video.pixels[pixelIndex];
          let g = video.pixels[pixelIndex + 1];
          let b = video.pixels[pixelIndex + 2];

          let rQ = Math.round(r / 10) * 10;
          let gQ = Math.round(g / 10) * 10;
          let bQ = Math.round(b / 10) * 10;

          let key = `${rQ},${gQ},${bQ}`;
          if (!colorCount[key]) {
            colorCount[key] = 0;
            colorKeys.push(key);
          }
          colorCount[key]++;
          count++;
           }
      }
    }

    if (count > 0 && colorKeys.length > 0) {
      let mostCommon = colorKeys[0];
      for (let k of colorKeys) {
        if (colorCount[k] > colorCount[mostCommon]) {
          mostCommon = k;
        }
      }

      let [rPred, gPred, bPred] = mostCommon.split(",").map(n => int(n));
      let colorName = getClothingColorName(rPred, gPred, bPred);
      console.log("Predominant Clothing Color:", colorName);
      trackColor(colorName);

    }
   }
  
  //-------------------------------------------------------------
  background(50); // Light gray background interchanged 

  fill(240); // Dark gray text interchanged
 if (displayText === "A memory whispers, somewhere in time, you smelled like…") {
  // Dynamically resize to fit screen width
  let targetWidth = width * 0.9;
  let fontSize = 70;
  textSize(fontSize);
  while (textWidth(displayText) > targetWidth && fontSize > 10) {
    fontSize -= 1;
    textSize(fontSize);
  }

  textAlign(CENTER, CENTER);
  text(displayText, width / 2, 100);

  // Draw the notes with a fixed smaller size
  textSize(25);
  text(`Top Note: ${topNote}`, width / 2, 200);
  text(`Mid Note: ${midNote}`, width / 2, 300);
  text(`Base Note: ${baseNote}`, width / 2, 400);
  console.log(speech);
} else {
  // Dynamically resize for other messages too
  let targetWidth = width * 0.9;
  let fontSize = 70;
  textSize(fontSize);
  while (textWidth(displayText) > targetWidth && fontSize > 10) {
    fontSize -= 1;
    textSize(fontSize);
  }

  textAlign(CENTER, CENTER);
  text(displayText, width / 2, height / 2);
}

}

// Callback for incoming serial data
function serialEvent() {
  let currentString = serial.readLine(); // Read incoming data
  console.log("Serial event", currentString);
  if (currentString) {
    latestData = currentString.trim(); // Remove whitespace

    if (latestData === "TRIGGER") {
      generateScent(); // Generate a new scent profile
      displayText = "A memory whispers, somewhere in time, you smelled like…"; // Update display text
      window.speechSynthesis.cancel();
      speech.setVoice('Boing');
      speech.setRate(1.125);
      speech.speak(`${displayText}. Top note is ${topNote}. Mid note is ${midNote}. Base note is ${baseNote}.`);
      setTimeout(() => {
        displayText = "Come close and take a sniff?"; // Reset to default after 60 seconds
      }, 60000); // 60-second timeout
    } else if (latestData === "WAIT") {
      displayText = "Come close and take a sniff?";
      //keep calculating the color until you have a trigger coming in 
    }
  }
}

// Function to generate a random scent profile
//I will make changes to the generate scent function to get the latest scent
// function generateScent() {
//   topNote = getNote('Top')
//   midNote = getNote('Mid')
//   baseNote = getNote('Base')
// }

function generateScent() {
//   const color = getColorFrom4SecondsAgo(); // Get the color from 4 seconds ago
//   const filteredNotes = getColour(color);  // Filter notes by this color

//   topNote = getNote('Top', filteredNotes);
//   midNote = getNote('Mid', filteredNotes);
//   baseNote = getNote('Base', filteredNotes);
  
  const color = getColorFrom4SecondsAgo();
  const filteredNotes = getColour(color);

  if (!filteredNotes || filteredNotes.length === 0) {
    console.warn(`No notes found for color: ${color}`);
    topNote = midNote = baseNote = "Unavailable";
    return;
  }

  topNote = getNote('Top', filteredNotes);
  midNote = getNote('Mid', filteredNotes);
  baseNote = getNote('Base', filteredNotes);
}


function getClothingColorName(r, g, b) {
  let rNorm = r / 255;
  let gNorm = g / 255;
  let bNorm = b / 255;

  let max = Math.max(rNorm, gNorm, bNorm);
  let min = Math.min(rNorm, gNorm, bNorm);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rNorm: h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0); break;
      case gNorm: h = (bNorm - rNorm) / d + 2; break;
      case bNorm: h = (rNorm - gNorm) / d + 4; break;
    }
    h *= 60;
  }

  if (l < 0.2) return "Black";
  if (l > 0.9 && s < 0.15) return "Off-White";
  if (s < 0.15 && l >= 0.6 && l <= 0.9) return "Cream";
  if (s < 0.15 && l < 0.6) return "Gray";
  if (s < 0.2 && l >= 0.45 && l < 0.6) return "Beige";
  if (s < 0.25 && l >= 0.35 && l < 0.45) return "Tan";
  if (s < 0.3 && l < 0.35) return "Brown";

  if (h >= 0 && h < 10) return "Red";
  if (h >= 10 && h < 25) return "Burnt Orange";
  if (h >= 25 && h < 40) return "Orange";
  if (h >= 40 && h < 55) return "Mustard Yellow";
  if (h >= 55 && h < 70) return "Yellow";
  if (h >= 70 && h < 90) return "Olive Green";
  if (h >= 90 && h < 150) return "Green";
  if (h >= 150 && h < 170) return "Mint Green";
  if (h >= 170 && h < 190) return "Teal";
  if (h >= 190 && h < 210) return "Turquoise";
  if (h >= 210 && h < 225) return "Denim";
  if (h >= 225 && h < 235) return "Navy Blue";
  if (h >= 235 && h < 245) return "Blue";
  if (h >= 245 && h < 260) return "Light Blue";
  if (h >= 260 && h < 275) return "Lavender";
  if (h >= 275 && h < 290) return "Lilac";
  if (h >= 290 && h < 315) return "Pink";
  if (h >= 315 && h < 340) return "Blush Pink";
  if (h >= 340 && h <= 360) return "Maroon";
  if (h >= 260 && h < 280 && s < 0.2) return "Purple";
  if (s < 0.1 && l > 0.2 && l < 0.4) return "Charcoal";
  if (s < 0.2 && l > 0.3 && l < 0.45) return "Khaki";

  return "Gray";
}

//Keeping the time stamps of the colour 
function trackColor(currentColor) {
  const now = Date.now();
  colorHistory.push({ color: currentColor, time: now });

  // Keep only the last 10 seconds of history
  colorHistory = colorHistory.filter(entry => now - entry.time <= 10000);
}

function getColorFrom4SecondsAgo() {
  const now = Date.now();
  const fourSecondsAgo = now - 4000;

  // Find the color closest to four seconds ago
  let closest = colorHistory.reduce((prev, curr) => {
    return Math.abs(curr.time - fourSecondsAgo) < Math.abs(prev.time - fourSecondsAgo) ? curr : prev;
  });

  return closest.color;
}

function handleData(latestData) {
  if (latestData === "TRIGGER") {
    let colorVariant = getColorFrom4SecondsAgo();
    getColour(colorVariant);
  }
}

function gotResults(result) {
  segmentation = result;
}



// Handle port selection button
function makePortButton() {
  let button = createButton("Select Port");
  button.position(10, 10);
  button.mousePressed(() => serial.requestPort());
}

// Handle errors
function portError(err) {
  console.error("Serial port error: " + err);
}
