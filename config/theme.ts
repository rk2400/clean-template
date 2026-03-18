import { crochetTheme } from './themes/crochet';
import { candleTheme } from './themes/candle';

export type ThemeName = 'crochet' | 'candle';

const defaultTheme: ThemeName = 'crochet';

const envTheme = (process.env.NEXT_PUBLIC_THEME as ThemeName | undefined) ?? defaultTheme;

export const selectedThemeName: ThemeName = envTheme === 'candle' ? 'candle' : 'crochet';

export const theme = selectedThemeName === 'candle' ? candleTheme : crochetTheme;
