# desafio-meli

#### 🔍 Technical Frontend Challenge for MELI

This project is a solution for a frontend technical challenge proposed by MELI. It aims to simulate a product detail page.

## 🤔 Architectural Decisions

### Why **Next.js**?

This project uses **Next.js** to take advantage of both **Server-Side Rendering (SSR)** and **Client-Side Rendering (CSR)** depending on the specific requirements of each page.

- **SEO**: SSR is used for pages that must be indexed properly by search engines — a limitation in purely CSR-based SPAs.
- **Performance**: CSR can be selectively applied where it reduces server load and improves perceived performance.

This hybrid flexibility helps strike a balance between SEO, performance, and developer ergonomics.

### Why **App Router** (instead of Pages Router)?

The App Router was chosen due to:

- Better support for **streaming and partial rendering**
- Reduction of **overfetching** via React Server Components
- Official recommendation from the **Next.js team** for new projects

It improves the performance profile and maintainability of the application.

### Why **Radix UI** + **TailwindCSS**?

- **Radix UI** offers accessible, unstyled primitives, which speeds up delivery while keeping flexibility to customize layout and theme.
- **TailwindCSS** facilitates rapid UI development and enables defining a consistent **Design System** via tokens (colors, spacings, font sizes, etc.).

However, I recognize that in larger systems, isolating the design system into a separate package would be preferable to encourage reusability and modular architecture.

### Why **i18next**?

- **Familiarity and ecosystem maturity**: i18next is widely adopted, well-documented, and integrates well with Next.js via `next-i18next`.
- **Maintainability**: its structure allows centralized, scalable language resource management.
- **Flexibility**: supports namespaces, lazy loading, and fallbacks — ideal for production-ready internationalized apps.

---

## Considerations

I'd like to explain that due to the time constraint I had to work on this project (approximately 12 hours), I wasn't able to deliver everything.

The following items remained pending:
* Tests
* Stock endpoint

The difficulties I faced were:
I had considerable difficulty working with **App Router**. As it's a new feature, I encountered many errors and found few solutions online, requiring significant personal analysis and troubleshooting. For instance, the **internationalization (i18n)** part ended up taking a lot of time because of this.

I'm grateful for the opportunity and managed to learn a lot about the new version of Next.js through this project.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project running locally for development and testing.

### 📋 Prerequisites

Ensure the following tools are installed:

- Node.js (18+)
- pnpm
- Git

### 🔧 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/seu-usuario/desafio-meli.git
   ```

2. Navigate to the project directory:

   ```bash
   cd desafio-meli
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the mock API server:

   ```bash
   pnpm dev:server
   ```

---

## ⚙️ How to Run

Start the development environment:

```bash
pnpm dev
```

Then access: [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Development Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/docs)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Internationalization**: [i18next](https://www.i18next.com/) + [next-i18next](https://github.com/i18next/next-i18next)
- **Mock API**: [JSON Server](https://github.com/typicode/json-server)

---

## 📋 Functionalities

1. **Product Fetching**: Loads a product from a mock API with title, price, discount, installment options and images.
2. **Product Details View**: Displays product images, technical details, and description.
3. **Purchase Box**: Shows total price, discount, and installment calculation.
4. **Store Information**: Displays basic seller information.
5. **i18n Support**: Content is available in multiple languages with automatic language detection based on URL (e.g., `/pt/product`, `/en/product`).
6. **Responsive Design**: Layout adapts for mobile, tablet, and desktop.
