# ⚛️ In1Solutions - Frontend Developer Test Task

Create a simple app in the React or Angular framework containing the following routes:
 * `/` - Products List Page
 * `product/{id}` Product Detail Page

For a list of products/vouchers please select one the following properties:

| Name                | URL                                 | API Url                                                 |
|---------------------|-------------------------------------|---------------------------------------------------------|
| Bushmills Inn       | https://www.bushmillsinn.com/       | https://shop.bookin1.com/api/property/16609/allvouchers |
| Merchant Hotel      | https://www.themerchanthotel.com/   | https://shop.bookin1.com/api/property/7716/allvouchers  |
| Mount Juliet Estate | https://www.mountjuliet.ie/         | https://shop.bookin1.com/api/property/474/allvouchers   |
| TINTSWALO ATLANTIC  | https://www.tintswalo.com/atlantic/ | https://shop.bookin1.com/api/property/11128/allvouchers |

# 👁️ Style Guide
Adhere to [Clean Code](https://github.com/ryanmcdermott/clean-code-javascript) javascript and [naming conventions](https://github.com/kettanaito/naming-cheatsheet) to help with code readability.

# 💅 Components And Styling

Keep components, functions, styles, state, etc. as close as possible to the component where it's being used. 

Use the colourscheme of the property you've chosen above and adhere to their style and colours, substituting fonts for those publicly available in Google Fonts if needed.

To speed up your development, you're allowed to use any component library you like, or if you prefer to develop your own to keep it simple and fast. Here are some recommendations:

**Fully featured component libraries:**

- [Chakra UI](https://chakra-ui.com/)
- [MUI](https://mui.com/)

**Headless component libraries:**

- [Reakit](https://reakit.io/)
- [Headless UI](https://headlessui.dev/)
- [Radix UI](https://www.radix-ui.com/)
- [react-aria](https://react-spectrum.adobe.com/react-aria/)

**Some good combinations of component library + styling:**

- [Chakra UI](https://chakra-ui.com/) + [emotion](https://emotion.sh/docs/introduction) - The best choice for most applications
- [Headless UI](https://headlessui.dev/) + [tailwind](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/) + [stitches](https://stitches.dev/)

# 🌐 Deployment

Deploy and serve your applications and assets over a CDN. This is required so we can view your test immediately without having to clone the repo and build internally. Good options for that are:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
