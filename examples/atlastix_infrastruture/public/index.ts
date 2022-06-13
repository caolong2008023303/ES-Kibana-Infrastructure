import './index.scss';

import { AtlastixInfrastruturePlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin() {
  return new AtlastixInfrastruturePlugin();
}
export { AtlastixInfrastruturePluginSetup, AtlastixInfrastruturePluginStart } from './types';
