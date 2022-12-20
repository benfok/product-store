# Mock Product Store (Vail Resorts)
[![License: GNU AGPLv3](https://img.shields.io/badge/License-GNU_AGPLv3-red.svg)](https://www.gnu.org/licenses/agpl-3.0.en.html)

## Description
This is a concept webpage, designed and coded from scratch to mimic Vail's ecommerce template for selling ski and snowboard lessons, and to showcase potential solutions to some of the perceived shortfalls of the existing system. **Please note:** The products, pricing and information displayed on the mock page are for display purposes only, and not connected to actual products or pricing sold by Vail.com.

This mock product store page is built to match the sylistic framework of the existing vail.com site and store structure. It is enhanced however as a single page, product search and filter application, designed to both perosnalize and streamline the purchase experience, as well as drive increased revenue through promoting alternative products if the preferred option is unavailable - a frequent occurrence for popular products.

**A note on render times:** It is recognized and appreciated that a real-life application of this concept would require database calls for real-time product inventory that may impact rendering times. It may limit the effectiveness of a 7-day availability display for multiple products on slow-speed connections, or the need to setup and account for using cached inventory data. For the purpose of demonstration here, API calls are replaced by static values in a .json file.

**Mobile Version:** This concept is designed for desktop only, and will not render if viewed on devices below 1080px is screen width. For a mobile concept version, please contact me directly [ben@tidylines.co](mailto:ben@tidylines.co)

<details>
<summary><strong>Table of Contents</strong></summary>

- [Background, Credits and Tech](#background-credits-and-tech)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Screenshots](#screenshots)
- [Questions and Links](#questions-and-links)
- [Details and Learnings](#details-and-learnings)
</details>

## Background, Credits and Tech

This concept considers the following **USER STORY**

<details>
<summary><strong>User Story</strong></summary>
<blockquote>
<br>
<p>AS A customer visiting a resort and wanting to purchase ski/snowboard lessons for my family<br>
I WANT the interface to be responsive and intuitive<br>
SO THAT it’s easy to navigate<br>
I WANT an easy way to view the product options and filter them in useful ways<br>
SO THAT I can narrow my search<br>
I WANT to be able to easily see availability for particular dates and times<br>
SO THAT I can plan my trip accordingly<br>
I WANT to be able to customize how I compare products and availability<br>
SO THAT I can be assured of meeting the needs of my families varied skill level, ages, disciplines and interests<br>
I WANT to be able to easily add products and necessary add-ons to my cart and continue shopping<br>
SO THAT I can shop efficiently<br>
I WANT to know if I am eligible for any discounts or perks as a passholder<br>
SO THAT I know I am getting the best deal<br>
<br></p>
</blockquote>
</details>

This app was built from scratch by [benfok](https://github.com/benfok/) dba Tidy Lines LLC. 

### Languages and Modules Used
The page is written entirely in [React.JS](https://reactjs.org) and leverages the following dependency packages:

- [react-icons](https://www.npmjs.com/package/react-icons) as an icon library
- [react-datepicker](https://www.npmjs.com/package/react-datepicker) for the calendar date picker functionality

## Installation
### Local Installation
- Clone the repo.
- Navigate to the root folder and run `npm init` followed by `npm run install` in order to install the dependencies.
- Be sure to add a MongoDB string and JWT session secret to the .env.EXAMPLE file and rename to .env.
- Run the command `npm run seed` to load seed data
- run `npm run develop` to run the application on your local machine running at http://localhost:3000/.

## Usage
- This application does nothing other than showcase potential design solutions. You cannot actually purchase or book any ski or snowboard lessons.
- Select a date from the date picker (default is tomorrow)
- Apply filters and sort results as desired. Note that Sorting is instantly rendered, where as Filters require the Update Results button to be clicked to avoid unecessary "API" calls
- Adding a product to "comparison" will add it to the comparison tap atop the search widget 

## License
Distributed under the **GNU AGPLv3** license. 

## Screenshots
Here are some screenshots of the deployed application

### Desktop
![Screenshot of lists](./server/assets/ethel-desktop1.png)

### Mobile
<p float="left">
<img src="./server/assets/ethel-signup.png" alt="mobile signup" width="160"/>
<img src="./server/assets/ethel-category.png" alt="mobile category" width="160"/>
<img src="./server/assets/ethel-list.png" alt="mobile list" width="160"/>
<img src="./server/assets/ethel-modal.png" alt="mobile modal" width="160"/>
<img src="./server/assets/ethel-move.png" alt="mobile move" width="160"/>
</p>

## Questions and Links
Please reach out with any questions regarding the application.

The repository in [GitHub](https://github.com/benfok/product-store)

The deployed [page](https://ethyl.herokuapp.com/)

## Details and Learnings
- Location is currently defined at the product level, rather than both the product and date level. It is possible for a product to be sold out or unavailable at a certain location, yet available at others. This concept does not yet communicate that effectively.
- Filters currently reset when moving between Search and Comparison tabs. It makes sense to not carry filters over to the comparison tab, but perhaps Search tab filters should persist.
- Filters are not dynamically applied but instead require the Update Results button to be clicked. This was intentional to avoid redundant re-renders.
- Within the Product Detail Modal - Price of product, add-ons and discounts increment for Group Lessons based on number of days selected. For Private Lessons, price is currently coded to remain the same regardless of number of participants.

Some considerations for **additional enhancements** include:
  - Design a more visual representation of Start Time, Lesson Type, Duration and Age Range within the product table
  - Allow users to save 'favorite' products either within browser storage or their account if logged in
  - Offer users to chance to be notified if a Sold Out product date becomes available