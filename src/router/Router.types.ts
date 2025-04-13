import {RouteProp} from '@react-navigation/native';

export const enum Screens {
  Home = 'Home',
  Splash = 'Splash',
  Gallery = 'Gallery',
  Photo = 'Photo',
}

export type RootStackParamList = {
  [Screens.Home]: undefined;
  [Screens.Splash]: undefined;
  [Screens.Gallery]: undefined;
  [Screens.Photo]: {
    img_src: string;
    id: number;
  };
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type PhotoScreenRouteProp = RouteProp<RootStackParamList, Screens.Photo>;
