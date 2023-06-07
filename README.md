# vortex-nuxt
Vortex: IT Store & Service in Skopje, Macedonia. Nuxt.js + Vuetify. Light & dark themes, laptop animation, Vuetify datatable from CSV. Explore our wide range of products and services.
www.vortex.com.mk

## Prerequisites

Before running the Vortex.com.mk application, make sure you have the following software installed on your machine:

- Node.js 
- npm

## Getting Started

To run the Vortex.com.mk application locally, follow these steps:

1. Clone the repository
git clone https://github.com/borcezarinski/vortex-nuxt.git
2. Navigate to the project directory
cd vortex-nuxt
3. Convert CSV to JSON:
- Run the following command to create and write JSON from the `static/Cenovnici/cenovnik.csv`, which will generate `static/Cenovnici/cenovnik.json` + `static/Cenovnici/category.json
  node csvToJson.js
4. Install dependencies:
npm install
5. Run the application in development mode:
npm run dev
The application will be accessible at `http://localhost:3000`.

## Production

To build and generate the application for production, follow these steps:

1. Build the application:
npm run build
2. Generate static files:
npm run generate
The generated files will be located in the `dist` directory.
You can now deploy the generated files to a production server or hosting platform.
