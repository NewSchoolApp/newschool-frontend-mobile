import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { Label } from '@ns/ui/components/atoms/label/label';
import { HomeScreen } from '@ns/ui/modules/home/home-screen';
import { PRIMARY } from '@ns/ui/styles/colors/constants';
import { BarStyle } from './bottom-tab.style';

const fakeComponent = (text: string): JSX.Element => <Label color="white" preset="medium" text={text} />

const route = (route: string, title: string, icon: string) => ({
  key: route,
  title,
  icon,
  testID: `${route}-btn`,
  accessibilityLabel: `${route} button`
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
  profile: () => fakeComponent('Profile'),
  courses: () => fakeComponent('Courses'),
  certificates: () => fakeComponent('Certificates'),
  others: () => fakeComponent('Others'),
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
