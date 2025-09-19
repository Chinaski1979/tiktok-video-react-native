# TikTok POC - Expo React Native App

A React Native application built with Expo for rapid development and easy deployment.

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 16)
- Expo CLI: `npm install -g @expo/cli`
- Expo Go app on your phone (for testing)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

### Running the App

#### On Physical Device (Recommended)
1. Install Expo Go app on your phone
2. Scan the QR code from the terminal
3. The app will load on your device

#### iOS Simulator
```bash
npm run ios
```

#### Android Emulator
```bash
npm run android
```

#### Web Browser
```bash
npm run web
```

## 📱 Why Expo for TikTok POC?

- **Camera Access**: Built-in camera APIs perfect for video recording
- **Media Handling**: Easy video/image processing and playback
- **Fast Development**: Hot reloading and instant updates
- **Easy Deployment**: Simple app store publishing
- **Rich Ecosystem**: Tons of pre-built components and libraries

## 🛠 Development

- Start development server: `npm start`
- Type checking: `npx tsc --noEmit`
- Clear cache: `npx expo start --clear`

## 📦 Project Structure

- `App.tsx` - Main application component
- `app.json` - Expo configuration
- `tsconfig.json` - TypeScript configuration
- `babel.config.js` - Babel configuration

## 🎯 Next Steps for TikTok POC

1. Add camera functionality with `expo-camera`
2. Implement video recording and playback
3. Add social features and user authentication
4. Integrate with TikTok API (if available)
5. Deploy to app stores with EAS Build