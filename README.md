# 📦 StockTracker Pro - Inventory Management System

A modern, mobile-first inventory management application built with native Android WebView technology. Perfect for small businesses, warehouses, and personal collections that need efficient, offline-capable inventory tracking with image support.

## 🚀 Features

### 📱 Mobile-Optimized Interface
- **Responsive Design**: Optimized for mobile screens (360x760px and similar)
- **Touch-Friendly**: 44px minimum touch targets for accessibility
- **Multi-Screen Navigation**: Dashboard, Add Item, Inventory, and Edit screens
- **Bottom Navigation**: Easy thumb-friendly navigation

### 📸 Image Management
- **Photo Upload**: Attach images to inventory items
- **Camera Integration**: Take photos directly or select from gallery
- **Image Preview**: Visual confirmation before saving
- **Local Storage**: All images stored locally for offline access

### 🎯 Inventory Features
- **Add Items**: Complete item details with name, category, quantity, price
- **Edit Items**: Full editing capabilities for existing inventory
- **Delete Items**: Safe deletion with confirmation dialogs
- **Search Function**: Find items by name, category, or description
- **Low Stock Alerts**: Visual indicators for items with quantity < 10

### 📊 Dashboard Analytics
- **Total Items**: Count of all inventory items
- **Total Value**: Calculated total inventory worth
- **Low Stock Count**: Items requiring attention
- **Recent Activity**: Latest inventory modifications

### 💾 Data Management
- **Local Storage**: All data persisted locally using localStorage
- **Offline Capable**: Works without internet connection
- **Data Persistence**: Survives app restarts and device reboots
- **Export Ready**: Data structure ready for future export features

## 📱 Download & Installation

### 🚀 Direct APK Download
**[📥 Download StockTracker Pro APK (3.84 MB)](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/raw/main/android/app/build/outputs/apk/debug/app-debug.apk)**

> **Note**: Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub repository details after uploading.

### Installation Steps
1. Download the APK file to your Android device
2. Enable "Install from unknown sources" in your device settings:
   - Go to Settings > Security > Unknown Sources (Android 7 and below)
   - Go to Settings > Apps > Special Access > Install Unknown Apps (Android 8+)
3. Tap the downloaded APK file to install
4. Launch StockTracker Pro from your app drawer

### System Requirements
- **Android Version**: 5.0 (API level 21) or higher
- **Storage**: 10 MB free space
- **Permissions**: Camera, Storage (for image uploads)

## 🛠️ Technical Specifications

### Architecture
- **Platform**: Native Android WebView Application
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Storage**: Browser localStorage API
- **Images**: Base64 encoding for local storage
- **Build System**: Gradle with Android SDK

### Key Technologies
- **WebView**: Android WebView with JavaScript enabled
- **Responsive CSS**: Mobile-first design approach
- **File API**: HTML5 File API for image handling
- **Local Storage**: Browser localStorage for data persistence

### Performance
- **App Size**: 3.84 MB
- **Load Time**: < 2 seconds on modern devices
- **Memory Usage**: Optimized for mobile devices
- **Battery Impact**: Minimal background usage

## 📸 Screenshots

### Dashboard View
The main dashboard provides an overview of your inventory with key statistics and recent activity.

### Add Item Screen
Intuitive form for adding new inventory items with image upload capability.

### Inventory Table
Compact, mobile-optimized table view of all inventory items with search functionality.

### Edit Item Interface
Full editing capabilities with image management and item deletion options.

## 🏗️ Development

### Project Structure
```
StockTracker Pro/
├── android/                          # Android project files
│   ├── app/
│   │   ├── src/main/
│   │   │   ├── assets/public/         # Web application files
│   │   │   │   ├── index.html         # Main application HTML
│   │   │   │   └── js/app.js          # Application JavaScript
│   │   │   ├── java/                  # Android Java source
│   │   │   └── res/                   # Android resources
│   │   └── build.gradle               # App-level Gradle config
│   └── build.gradle                   # Project-level Gradle config
└── README.md                          # This file
```

### Building from Source
1. **Prerequisites**:
   - Android Studio or Android SDK
   - Java Development Kit (JDK) 8 or higher
   - Gradle 8.0+

2. **Build Commands**:
   ```bash
   cd android
   ./gradlew clean assembleDebug
   ```

3. **Output Location**:
   ```
   android/app/build/outputs/apk/debug/app-debug.apk
   ```

### Code Quality
- **Mobile-First CSS**: Responsive design optimized for small screens
- **Vanilla JavaScript**: No external dependencies for maximum compatibility
- **Professional Structure**: Clean, maintainable code architecture
- **Error Handling**: Comprehensive validation and error management

## 🎯 Use Cases

### Small Business Inventory
- Track product stock levels
- Monitor inventory value
- Identify low-stock items
- Visual product identification

### Personal Collections
- Organize personal items
- Track valuable possessions
- Maintain purchase records
- Visual cataloging

### Warehouse Management
- Quick stock checks
- Mobile inventory updates
- Offline capability for remote locations
- Image-based item identification

## 🔧 Configuration

### Permissions
The app requests the following Android permissions:
- **CAMERA**: For taking photos of inventory items
- **READ_EXTERNAL_STORAGE**: For selecting images from gallery
- **WRITE_EXTERNAL_STORAGE**: For saving image data
- **INTERNET**: For future cloud sync features (optional)

### Storage Limits
- **Local Storage**: 5-10 MB typical browser limit
- **Image Size**: Maximum 5 MB per image
- **Total Items**: Limited by available storage space

## 🚀 Future Enhancements

### Planned Features
- [ ] Cloud synchronization
- [ ] Data export (CSV, JSON)
- [ ] Barcode scanning
- [ ] Multi-user support
- [ ] Advanced reporting
- [ ] Backup/restore functionality

### Technical Improvements
- [ ] Progressive Web App (PWA) support
- [ ] Offline-first architecture
- [ ] Advanced image compression
- [ ] Database migration tools

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Developer

Built with modern web technologies and Android best practices for optimal mobile performance and user experience.

### Contact
For questions, suggestions, or support, please create an issue in this repository.

---

**StockTracker Pro** - Inventory management made simple. 📦✨
