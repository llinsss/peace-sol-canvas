# Peace Sol Canvas

## Overview
Peace Sol Canvas is a project that integrates a React front-end with a Solana smart contract. The application allows users to interact with the blockchain through a user-friendly interface.

## Project Structure
```
peace-sol-canvas
├── src
│   ├── main.tsx          # Entry point of the React application
│   ├── App.tsx           # Main application component
│   ├── index.css         # CSS styles for the application
│   └── types
│       └── index.ts      # TypeScript types and interfaces
├── smart-contract
│   ├── Cargo.toml        # Configuration file for the Rust smart contract
│   └── src
│       └── lib.rs        # Main logic of the smart contract
├── package.json          # npm configuration file
├── tsconfig.json         # TypeScript configuration file
└── README.md             # Documentation for the project
```

## Getting Started

### Prerequisites
- Node.js and npm installed
- Rust and Cargo installed
- Solana CLI installed

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd peace-sol-canvas
   ```

2. Install the front-end dependencies:
   ```
   cd src
   npm install
   ```

3. Build the smart contract:
   ```
   cd smart-contract
   cargo build
   ```

### Running the Application
1. Start the React application:
   ```
   cd src
   npm start
   ```

2. Interact with the smart contract through the application interface.

## Usage
- The application allows users to perform actions defined in the smart contract.
- Follow the on-screen instructions to interact with the features.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.