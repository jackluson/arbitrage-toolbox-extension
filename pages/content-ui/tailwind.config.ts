import baseConfig from '@arbitrage-toolbox/tailwindcss-config';
import { withUI } from '@arbitrage-toolbox/ui';

export default withUI({
  ...baseConfig,
  content: ['./src/**/*.{ts,tsx}'],
});
