import { PluginInitializerContext } from '../../../src/core/server';
import { AtlastixInfrastruturePlugin } from './plugin';

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new AtlastixInfrastruturePlugin(initializerContext);
}

export { AtlastixInfrastruturePluginSetup, AtlastixInfrastruturePluginStart } from './types';
