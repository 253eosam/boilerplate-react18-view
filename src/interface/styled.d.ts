import 'styled-components';
import {
  flexSet,
  boxSet,
  fontSet,
  colorSet,
  backgroundSet,
} from '../styles/mixin';

declare module 'styled-components' {
  export interface DefaultTheme {
    flexSet: typeof flexSet;
    boxSet: typeof boxSet;
    fontSet: typeof fontSet;
    colorSet: typeof colorSet;
    backgroundSet: typeof backgroundSet;
  }
}
