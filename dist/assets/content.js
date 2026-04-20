export const business = {
    name: 'BC Bakes Tally',
    baker: 'Brittni “Brit” Conger',
    tagline: 'Tallahassee sourdough, bagels & sweet treats',
    description: 'A local microbakery making artisan breads and rotating sweet treats in small batches for the Tallahassee community.',
    orderUrl: 'https://www.hotplate.com/bcbakestally',
    homeUrl: 'https://www.bcbakestally.com/',
    instagramUrl: 'https://www.instagram.com/bcbakestally/',
    facebookUrl: 'https://www.facebook.com/p/BC-Bakes-Tally-61571716104970/',
    email: '',
};
export const announcement = {
    eyebrow: 'New weekly pop-up',
    title: 'BC Bakes + Susan’s Homestead Harvest are setting up together.',
    details: 'Find fresh sourdough, baked goods, and local favorites at Killearn Lakes Taekwondo on Thursdays from 4:00 PM – 7:30 PM, starting April 23, 2026.',
    venue: 'Killearn Lakes Taekwondo',
    address: '6808 Thomasville Road Suite #107, Tallahassee, FL 32312',
    time: 'Thursdays · 4:00 PM – 7:30 PM',
};
export const featuredItems = [
    {
        name: 'Classic Sourdough Loaf',
        category: 'Bread',
        description: 'Naturally leavened, crusty, and baked fresh with a slow, simple process.',
        tags: ['slow-fermented', 'hand-shaped', 'signature'],
        mood: 'Everyday favorite',
    },
    {
        name: 'Sourdough Bagels',
        category: 'Bread',
        description: 'Soft, chewy bagels made for breakfast sandwiches, snack plates, or a little butter and jam.',
        tags: ['chewy', 'breakfast', 'fresh drop'],
        mood: 'Grab early',
    },
    {
        name: 'Sourdough Focaccia',
        category: 'Bread',
        description: 'A bubbly, olive-oil-rich loaf that rotates through savory flavor pairings.',
        tags: ['savory', 'shareable', 'golden'],
        mood: 'Dinner-table hero',
    },
    {
        name: 'Cinnamon Rolls',
        category: 'Sweet',
        description: 'Soft rolls with warm spice, tender layers, and a glaze that disappears fast.',
        tags: ['glazed', 'comfort bake', 'weekend treat'],
        mood: 'Coffee companion',
    },
    {
        name: 'Biscoff Cookie Butter Cookies',
        category: 'Cookies',
        description: 'Thick, soft cookies built around that cozy caramel-spice cookie butter flavor.',
        tags: ['fan favorite', 'cookie butter', 'limited'],
        mood: 'Sweet spotlight',
    },
    {
        name: 'Banana Pudding Cookies',
        category: 'Cookies',
        description: 'A playful cookie inspired by the Southern dessert: soft, nostalgic, and made to share.',
        tags: ['banana', 'nostalgic', 'rotating'],
        mood: 'Back by request',
    },
    {
        name: 'Oat Pecan Scones',
        category: 'Sweet',
        description: 'Tender scones with nutty crunch and a bakery-case feel.',
        tags: ['scone', 'oat', 'pecan'],
        mood: 'Market morning',
    },
    {
        name: 'Seasonal Bakes',
        category: 'Seasonal',
        description: 'Holiday specials, market surprises, and small-batch drops that change with the week.',
        tags: ['rotating', 'limited', 'local'],
        mood: 'Check the drop',
    },
];
export const categories = ['All', 'Bread', 'Cookies', 'Sweet', 'Seasonal'];
export const steps = [
    {
        title: 'Watch the weekly drop',
        body: 'Menus and preorder windows rotate, so the best move is to check Hotplate or social before the bake fills up.',
    },
    {
        title: 'Preorder what you love',
        body: 'Choose fresh bread, cookies, cinnamon rolls, bagels, or whatever seasonal treats are available that week.',
    },
    {
        title: 'Pick up fresh',
        body: 'Grab your order at the current pickup or pop-up location, then bring home the smell of fresh-baked bread.',
    },
];
export const proofPoints = [
    'Mixed, folded, shaped, and baked by hand in Tallahassee',
    'Small-batch menu built around fresh drops and preorder windows',
    'Artisan breads, sourdough bagels, cinnamon rolls, cookies, and rotating treats',
    'Local pickup and pop-up updates through Hotplate and social channels',
];
export const faqs = [
    {
        q: 'Can I order directly from this website?',
        a: 'This static site is designed as a promotional landing page. Orders should still go through the Hotplate link so inventory, preorder windows, and pickup details stay accurate.',
    },
    {
        q: 'Does the menu change?',
        a: 'Yes. Treats and breads rotate by week, season, and event. The cards here highlight known favorites and examples, while Hotplate should be treated as the source of truth for current availability.',
    },
    {
        q: 'Where is pickup?',
        a: 'The newest public update points customers to the Thursday pop-up with Susan’s Homestead Harvest at Killearn Lakes Taekwondo. Social channels are included for last-minute changes.',
    },
    {
        q: 'Can this site be customized?',
        a: 'Yes. Update src/content.js for copy, menu items, links, and announcement text. The ready-to-host dist folder uses the same content embedded in the static React bundle.',
    },
];
