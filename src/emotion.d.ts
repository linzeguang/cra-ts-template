import type { ZewideTheme } from './theme';

import '@emotion/react';

declare module '@emotion/react' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface Theme extends ZewideTheme {}
}
