import { v4 as uuid } from 'uuid'

const kCategoryVegan = 'vegan pastries';
const kCategoryFrench = 'french classics';
const kCategoryWorld = 'world pastries';
const kCategoryCourses = 'courses';
const kCategoryNewArrivals = 'new arrivals';
const kCategorySale = 'on sale';


let inventory = [

  {
    categories: [kCategoryFrench], name: 'Financier', price: '4,00', image: '/products/Financier.png', description: 'A financier is a small French almond cake, flavoured with beurre noisette, usually baked in a small mold. Light and moist with a crisp, eggshell-like exterior, the traditional financier also contains egg whites, flour, and powdered sugar. The molds are usually small rectangular loaves similar in size to petits fours.', brand: 'De Tort', currentInventory: 8 },
  {
    categories: [kCategoryFrench], name: 'Gougere', price: '4,20', image: '/products/Gougeres.png', description: 'A gougère, in French cuisine, is a baked savory choux pastry made of choux dough mixed with cheese. There are many variants. The cheese is commonly grated Gruyère, Comté, or Emmentaler.' , brand: 'De Tort', currentInventory: 10},
  {
    categories: [kCategoryFrench], name: 'Brioche', price: '3,00', image: '/products/Brioche.png', description: 'This classic egg- and butter-rich bread is delightfully tender, perfect for shaped and filled sweet breads.', brand: 'De Tort' , currentInventory: 7 },
  {
    categories: [kCategoryFrench], name: 'Baba au rhum', price: '3,50', image: '/products/Babaaurhum.png', description: 'Babas Au Rhum (or Rum Babas) are cakes saturated in an alcoholic syrup topped with whipped cream. As you might have guessed from the name, the alcohol is typically rum. The cake plays a critical role too. It should be soft, but structrually strong enough to withstand the liquid. It should be moist but not soggy. I also use yeast, both to leaven (rise) the batter and for the yeasty flavor.' , brand: 'De Tort', currentInventory: 13},
  {
    categories: [kCategoryFrench], name: 'Croquenbouche', price: '35,00', image: '/products/Croquenbouche.png', description: 'A croquembouche, French for “crunch in the mouth”, is a cone-shaped tower of cream puffs bound together by caramel.' , brand: 'De Tort', currentInventory: 9},

  {
    categories: [kCategoryFrench], name: 'Croissants', price: '2,00', image: '/products/Croissants.png', description: 'French viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough. Croissants are named for their historical crescent shape, the dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating.', brand: 'De Tort', currentInventory: 43 },

  { categories: [kCategoryWorld, kCategoryVegan], name: 'Tiramisu', price: '3,50', image: '/products/Tiramisu.png', description: 'Tiramisu is a coffee-flavoured Italian dessert. It is made of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa. The recipe has been adapted into many varieties of cakes and other desserts.' , brand: 'De Tort', currentInventory: 13},
  { categories: [kCategoryWorld], name: 'Sculptured fruits', price: '5,00', image: '/products/Sculpturedfruits.png', description: 'The fruit pastries are so authentic that if you scrolled past them on Instagram, you’d probably just assume they were the real thing. The lemons and limes come stippled with a natural texture, green leaves and all, while the apricot, full of fruit filling, has an incredibly organic texture.', brand: 'De Tort', currentInventory: 15 },

  { categories: [kCategoryWorld], name: 'Small mouse cakes', price: '20,00', image: '/products/Smallmousecakes.png', description: 'Chocolate Mousse Cake is a chocolate lover\'s dream come true! Simple chocolate box cake is dressed up deliciously with a thick layer of chocolate mousse.', brand: 'De Tort', currentInventory: 44 },
  { categories: [kCategoryWorld], name: 'Mouse cakes', price: '45,00', image: '/products/Mousecakes.png', description: 'This super moist dark chocolate mousse cake combines unsweetened natural cocoa powder and dark cocoa powder for an extra rich flavor.', brand: 'De Tort', currentInventory: 17 },
  { categories: [kCategoryWorld], name: 'Marshmallows', price: '1,50', image: '/products/Marshmallows.png', description: 'Marshmallow is a type of confectionery that is typically made from sugar, water and gelatin whipped to a solid-but-soft consistency. It is used as a filling in baking or normally molded into shapes and coated with corn starch.', brand: 'De Tort', currentInventory: 28 },
  { categories: [kCategoryWorld], name: 'Muffins', price: '2,50', image: '/products/Muffins.png', description: 'A muffin is an individually portioned baked product, however the term can refer to one of two distinct items: a part-raised flatbread that is baked and then cooked on a griddle, or an quickbread that is chemically leavened and then baked in a mold.', brand: 'De Tort', currentInventory: 31 },
  {
    categories: [kCategoryFrench, kCategoryVegan], name: 'Macarons', price: '1,50', image: '/products/Macarons.png', description: 'The macaron is traditionally held to have been introduced in France by the Italian chef of queen Catherine de Medici during the Renaissance. Since the 19th century, a typical Parisian-style macaron is presented with a ganache, buttercream or jam filling sandwiched between two such cookies, akin to a sandwich cookie.', brand: 'De Tort' , currentInventory: 2},
  {
    categories: [kCategoryFrench, kCategoryVegan], name: 'Eclairs', price: '3,50', image: '/products/Eclairs.png', description: 'An éclair is a pastry made with choux dough filled with a cream and topped with a flavored icing. The dough, which is the same as that used for profiterole, is typically piped into an oblong shape with a pastry bag and baked until it is crisp and hollow inside.', currentInventory: 14 },
  {
    categories: [kCategoryCourses], name: 'Muffins Master', price: '55,00', image: '/products/MuffinsMaster.png', description: 'This short course is designed to guide you to start a simple home based business during this unprecedented time. In 5 weeks, you will be able to learn from our professional trainers to craft varieties of recipes. Our approach in this course is to help you generate some fundamental ideas on how to maximize the use of simple recipes in a home business.' , brand: 'Jason Bourne' , currentInventory: 2 },

]

inventory.map(i => {
  i.id = uuid()
  return i
})

export default inventory