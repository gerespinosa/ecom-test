# 🛍️ Next.js E-commerce Test with Stripe

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  
[![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)  
[![Zustand](https://img.shields.io/badge/Zustand-443d2f?style=for-the-badge&logo=react&logoColor=white)](https://github.com/pmndrs/zustand)  
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)  
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=radix-ui&logoColor=white)](https://ui.shadcn.com/)

---

## English 🇬🇧

### Project Overview
This repository contains a **test/demo e-commerce application** built with **Next.js** and **TypeScript**, integrating **Stripe** for payments. It demonstrates a simple product catalog, cart management using **Zustand**, and a Stripe-powered checkout flow. UI is styled with **Tailwind CSS** and **shadcn/ui** components.

### Tech Stack
- Next.js (React)
- TypeScript
- Zustand (state management)
- Stripe (payments)
- Tailwind CSS
- shadcn/ui

### Features
- Product listing (mock/sample data)
- Add / remove items in cart (Zustand)
- Checkout using Stripe (client + server integration)
- Responsive layout with Tailwind + shadcn/ui
- Demo/test only — not hardened for production

### Getting Started (Development)
```bash
# Clone
git clone https://github.com/gerespinosa/ecom-test.git
cd ecom-test

# Install dependencies
npm install

# Create env file
# .env.local
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
STRIPE_SECRET_KEY=your_secret_key
# (other env vars if your app requires them)

# Run dev server
npm run dev

# Open http://localhost:3000

# 🛍️ E-commerce de prueba con Next.js y Stripe

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  
[![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)  
[![Zustand](https://img.shields.io/badge/Zustand-443d2f?style=for-the-badge&logo=react&logoColor=white)](https://github.com/pmndrs/zustand)  
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)  
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=radix-ui&logoColor=white)](https://ui.shadcn.com/)

---

## 📖 Descripción del proyecto
Este repositorio contiene una **aplicación de comercio electrónico de prueba** desarrollada con **Next.js** y **TypeScript**, que integra **Stripe** para procesar pagos.  
El objetivo es mostrar un flujo básico de catálogo → carrito → checkout, usando **Zustand** para la gestión de estado y **Tailwind CSS + shadcn/ui** para el diseño de la interfaz.

---

## 🚀 Tecnologías principales
- **Next.js** – Framework de React con renderizado del lado del servidor y enrutamiento
- **TypeScript** – JavaScript tipado
- **Zustand** – Gestión de estado ligera
- **Stripe** – Pasarela de pagos
- **Tailwind CSS** – Framework CSS basado en utilidades
- **shadcn/ui** – Componentes accesibles y personalizables

---

## ⚙️ Funcionalidades
- Listado de productos (ejemplo/mock)
- Añadir y eliminar productos del carrito
- Checkout con Stripe (integración cliente + servidor)
- Diseño responsive y moderno con Tailwind + shadcn/ui
- Proyecto de **demostración** (no listo para producción)

---

## 📦 Instalación y configuración
1. Clonar el repositorio:  
   ```bash
   git clone https://github.com/gerespinosa/ecom-test.git
   cd ecom-test