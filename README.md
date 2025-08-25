## Overview
This is a **Next.js 14 App Router** project with authentication and role-based access control.  
It uses **NextAuth** with **Auth0** provider, supports **JWT sessions**, and provides admin-only pages.  

Main features:

- Sign in with **Auth0**
- Role-based authentication (user/admin)
- Protected admin routes
- Unauthorized page handling

## Tech Stack

- Next.js 14(App Router)
- TypeScript
- NextAuth.js for authentication
- Auth0
- TailwindCSS for styling
- Role-based route protection with **middleware**

## Setup & Installation
### 1- Clone the repo
git clone https://github.com/idrissaktass/next-auth.git
cd myshop
### 2- Install dependencies
npm install or yarn install
### 3- Environment variables
AUTH0_CLIENT_ID=YOUR_CLIENT_ID
AUTH0_CLIENT_SECRET=YOUR_CLIENT_SECRET
AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
NEXTAUTH_SECRET=YOUR_NEXTAUTH_SECRET
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
NEXT_PUBLIC_AUTH0_CLIENT_ID=YOUR_CLIENT_ID
NEXT_PUBLIC_NEXTAUTH_URL=http://localhost:3000
Replace YOUR_CLIENT_ID, YOUR_CLIENT_SECRET, and YOUR_AUTH0_DOMAIN with your actual Auth0 credentials.
### 3- Run the development server
npm run dev or yarn dev

App will be available at http://localhost:3000
  
 
