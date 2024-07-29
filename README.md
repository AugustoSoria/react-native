# React Native Projects

## Project Descriptions

Each project is built using Expo and TypeScript, each one but the second has the features than the previous one and uses the NASA API to get the astronomy picture of the day. It could use the API real data or mocked data if there is not an API key. The project just are testing on Android devices and in some cases configured just to work on Android.

### NASA API app with React Navigation

It uses react navigation to could navigate between the index page and the selected picture page. Both pages are declared in the App file where we can also see the header styles for each page using the `screenOptions` attribute, we can also see the header title for the selected picture page. The index page could be divided in two sections, the upper section has a sub-title and a component which shows the newest picture with the title and date, the lower section also has a subtitle and a list of picture showing just the title of the picture and its date. Both components have a text to navigate to the picture page, sending the data between routes, the page shows the same the previous one and also the explanation of the picture. The entire app just uses the StyleSheet abstraction of react native to styling.

### NASA API app with Expo Router

This project stop using React Navigation and instead use the file-based routing of Expo Router which is a more scalable way to handle the routes, it has the index routes which also becomes in the entry point of the app and it has the page for the selected picture, also as a layout component to components or features common for every page like the StatusBar component. The app also starts using the Tailwind classes to styling which allow us a easier way to handle the styles of our component.

### NASA API app with search bar

I added a search bar to the project which allow us to find between the pictures in the list of items, this makes me to change the TodayImage component to get by itself its picture and not getting it by the data gained in the Main page because this data now could be replaced by the search bar found. The app now could change between a dark/light mode using a Switch component and Tailwind to handle what styles or classes must be applied for each specific case.

### NASA API app with push notifications and AsyncStorage

Now we can receive notification from a Node server for which we need an Expo Token which is gained in the Expo web when we create a new project, once we have one we can send a request to the route `/send-notification` and in our physical device (this couldn't be tested on emulators) we should get a notification with the `Test Notification` title. Also, now we can save our favorite pictures, on our memory phone using SQLite, pressing the heart icon that appears on each item on our list. For this project I also improve some components decoupling them, so they are not too big and handle too much information or features.

## Test Project

#### Prerequisites:

You should have installed Git, to download the code, Node.js, Android Studio. Also you could need an Android emulator, when you install AS it provides you one for default.

Node: https://nodejs.org/en
AS: https://developer.android.com/studio

#### Run the App

Once you have all installed, clone the repository with the command `git clone https://github.com/AugustoSoria/react-native.git`, go to the folder where you clone the project, open a command terminal, execute the command `npm install` and then open the project with `npm run android` and you should see the emulator opening the app, expo also gives you a QR code to open the app in your phone, in this case you need Expo Go in your Android device.
