import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { HomeScreen } from "@ns/ui/modules/home/home-screen"

const route = (route: string, title: string, icon: string) => ({
  key: route, 
  title,
  icon,
  testID: route 
})

export const routeStates = [
  route('home', 'Home', 'home')
]

export const mapper = {
  home: HomeScreen,
}

const BottomTabs = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(routeStates);
  const renderScene = BottomNavigation.SceneMap(mapper);
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomTabs;