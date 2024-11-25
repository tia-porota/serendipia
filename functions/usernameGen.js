const colors = [
    "red", "blue", "green", "yellow", "purple", "pink", "orange", "brown",
    "black", "white", "gray", "violet", "indigo", "cyan", "magenta", "teal",
    "turquoise", "lime", "olive", "maroon", "navy", "beige", "lavender",
    "salmon", "coral", "gold", "silver", "bronze", "amber", "ivory", "peach",
    "crimson", "plum", "mint", "charcoal", "denim", "fuchsia", "rose", "apricot",
    "emerald", "sapphire", "ruby", "aquamarine", "periwinkle", "taupe", "ochre",
    "mauve", "khaki", "mustard", "tangerine", "copper", "cherry", "slate", 
    "cobalt", "jade", "bordeaux", "champagne", "ebony", "amethyst", "ivory", 
    "brick", "clay", "sand", "blush", "caramel", "terracotta", "hazel", "lemon",
    "azure", "spruce", "seafoam", "mint", "pearl", "pine", "russet", "clover",
    "flax", "honey", "dandelion", "mulberry", "orchid", "pewter", "rosewood",
    "seashell", "sangria", "bubblegum", "butterscotch", "pistachio", "chestnut"
  ];

  const criminalNames = [
    "Al", "Pablo", "Bonnie", "Clyde", "Charles", "John", "Frank", "Vito",
    "Lucky", "Jesse", "Jack", "Bugsy", "Sam", "Meyer", "Sonny", "Tommy",
    "Willie", "Salvatore", "George", "Richard", "Ronnie", "Victor", "Joe",
    "Benny", "Angelo", "Tony", "Carlos", "Fred", "Raymond", "Eddie", "Nicky",
    "Hector", "Louis", "Anthony", "Harry", "Billy", "Vincent", "Ralph", 
    "Michael", "Frankie", "Paulie", "Leo", "Lenny", "Dean", "Bruce", "Jake", 
    "Ricky", "Dino", "Archie", "Gino", "Danny", "Tom", "Jimmy", "Johnny",
    "Mickey", "Bobby", "Cliff", "Diego", "Lorenzo", "Enzo", "Rafael", 
    "Esteban", "Sal", "Pedro", "Alejandro", "Raul", "Marco", "Roberto"
  ];

 export default function gen(animal){
    let name=""
    animal = animal.toUpperCase()
    const cName = criminalNames[~~(Math.random() * criminalNames.length)];
    const color = colors[~~(Math.random() * colors.length)]
    name=`${color}${animal}-${cName}`
    return name;



}