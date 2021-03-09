import { ImageProps as RNImageProps, ImageSourcePropType } from 'react-native';

export interface ImageProps extends Omit<RNImageProps, 'source'> {
  file?: string;
  source?: ImageSourcePropType;
}
