# FitnessWeb UI

Our team of talented programmers tackled a challenge that many sports people face - doing the same exercises over and over again becomes a routine, which can end up making the person feel like a caged animal.

Our solution is FitnessWeb, a web-based application where registered users can generate unique exercise programmes by entering their personalised data, all at the touch of a button!

Users have access to a unique and exercise-filled database from which exercises are selected according to the user's preferences, goals and time availability. They can read about each exercise in detail and learn the intricacies of each exercise, view all the programs they have generated and edit their profile!

This repository stores only front-end code, for the back-end code see [FitnessWeb Server](https://github.com/FitnessWebas/fitnessweb-server).

## Tech stack used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/)

## Getting started

### Prerequisites

- Node.js v20.13.1
- npm package manager
- [FitnessWeb server](https://github.com/FitnessWebas/fitnessweb-server)

### Installation

```bash
# Clone the repository
git clone https://github.com/FitnessWebas/fitnessweb-ui.git
cd fitnessweb-ui
```

### Install dependencies
```bash
npm install
```

Setup `.env.local` as in `.env.local_example` (first ensure FitnessWeb server is setup)

### Running the frontend (ensure FitnessWeb server is running)
```bash
npm run dev
```
## 📁 Project structure
```bash
src/
├── api/             # Hooks for data fetching
├── api/             # Pictures used
├── components/      # Reusable components
├── pages/           # Pages / route components
├── data/            # Types and hard-coded data
├── App.tsx          # Root component
├── main.tsx         # Vite entry point
```
