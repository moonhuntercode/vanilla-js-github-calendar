# 🤝 Contributing to Vanilla JS GitHub Calendar

First off, thank you for considering contributing to this project! It's people like you that make open-source software such a great community.

## 🚀 Getting Started

This library is built with modern, pure Vanilla JS (ES Modules) and HTML5 Web Components. We purposely avoid heavy frameworks (like React or Vue) to keep the bundle size minimal.

### Prerequisites
- [Node.js](https://nodejs.org/) (version 20 or higher recommended)
- `npm` (Node Package Manager)

### Local Setup

1. **Fork** this repository to your own GitHub account.
2. **Clone** your fork to your local machine:
   ```shell
   git clone https://github.com/YOUR_USERNAME/vanilla-js-github-calendar.git
   cd vanilla-js-github-calendar
   ```
3. **Install dependencies**:
   ```shell
   npm install
   ```

## 🏗️ Project Architecture

To understand how to improve the code, here is a quick overview of our structure:

- `src/index.js`: The main entry point. Defines the `<github-calendar>` Web Component.
- `src/lib.js`: Contains the core logic for fetching and transforming data from the GitHub Contributions API.
- `src/styles.css`: The library's stylesheet. **Important:** All classes must use the `vghc-` prefix (Vanilla GitHub Calendar) to prevent CSS collisions since we use Light DOM instead of Shadow DOM.
- `index.html`: Our interactive demo and playground.
- `test/`: Contains all our Unit Tests built with Vitest.

## 💻 Development Workflow

We use Vite for an ultra-fast development experience.

```shell
# Start the local development server (with Hot Module Replacement)
npm run dev
```

Open `http://localhost:5173` in your browser. Any changes you make in `src/` will automatically refresh the page.

## 🧪 Testing and Linting

We maintain a high standard of code quality. Before submitting your code, please ensure it passes our linters and tests.

```shell
# 1. Run the Linter (ESLint)
npm run lint

# 2. Run the Test Suite (Vitest + JSDOM)
npm run test
```

> **Note:** If you are adding a new feature, please add a corresponding test in the `test/` directory to prove that it works.

## 📬 Submitting a Pull Request

1. Create a new branch for your feature: `git checkout -b feature/my-awesome-idea`
2. Commit your changes with a descriptive message: `git commit -m "feat: add support for custom tooltip formatting"`
3. Push your branch to your fork: `git push origin feature/my-awesome-idea`
4. Open a Pull Request in our main repository: **[moonhuntercode/vanilla-js-github-calendar](https://github.com/moonhuntercode/vanilla-js-github-calendar)**

We will review your code as quickly as possible. Thank you for your help!
