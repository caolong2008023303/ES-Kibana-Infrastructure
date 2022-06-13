import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '......srccoreserver';

import { AtlastixInfrastruturePluginSetup, AtlastixInfrastruturePluginStart } from './types';
import { defineRoutes } from './routes';

export class AtlastixInfrastruturePlugin
  implements Plugin<AtlastixInfrastruturePluginSetup, AtlastixInfrastruturePluginStart> {
  private readonly logger: Logger;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    this.logger.debug('Atlastix Infrastruture: Setup');
    const router = core.http.createRouter();

    // Register server side APIs
    defineRoutes(router);

    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('Atlastix Infrastruture: Started');
    return {};
  }

  public stop() {}
}
