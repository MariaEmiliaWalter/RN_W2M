import AppInicio from "./AppInicio";
import { Provider } from "react-redux";
import React from "react";
import { init } from "./db";
import store from "./store/Index";

// import { useFonts } from "expo-font";

init()
  .then(() => console.log('Database initialized'))
  .catch(err => {
    console.log('Database failed to connect')
    console.log(err.message)
  });


  // const [loaded] = useFonts({
  // "roboto-regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),  
  // });
  
  export default function App() {
  return (
    <Provider store={store}>

  <AppInicio/>

    </Provider>

  );
};



