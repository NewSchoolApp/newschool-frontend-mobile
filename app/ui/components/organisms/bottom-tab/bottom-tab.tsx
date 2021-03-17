import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { HomeScreen } from '@ns/ui/modules/home/home-screen';
import { PRIMARY } from '@ns/ui/styles/colors/constants';
import { BarStyle } from './bottom-tab.style';

const route = (route: string, title: string, icon: string) => ({
  key: route,
  title,
  icon,
  testID: route,
});

export const routeStates = [
  route('home', 'Início', 'home'),
  route('profile', 'Perfil', 'account'),
  route('courses', 'Meus Cursos', 'library'),
  route('certificates', 'Certificados', 'school'),
  route('others', 'Outros', 'apps'),
];

export const mapper = {
  home: HomeScreen,
  profile: HomeScreen,
  courses: HomeScreen,
  certificates: HomeScreen,
  others: HomeScreen,
};

const BottomTabs = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(routeStates);
  const renderScene = BottomNavigation.SceneMap(mapper);
  return (
    <BottomNavigation
      barStyle={BarStyle}
      shifting={false}
      activeColor={PRIMARY}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomTabs;
