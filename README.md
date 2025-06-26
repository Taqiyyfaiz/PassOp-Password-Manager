This README provides an overview of a React + Vite project template. It describes the minimal setup required to get React working with Vite, including Hot Module Replacement (HMR) and basic ESLint rules. The document highlights two official Vite plugins for React—one using Babel and the other using SWC for Fast Refresh. Additionally, it recommends expanding the ESLint configuration for production applications, especially by integrating TypeScript and type-aware lint rules, and provides references for further integration details.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
