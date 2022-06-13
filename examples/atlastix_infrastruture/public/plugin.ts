import { i18n } from '@kbn/i18n';
import { AppMountParameters, CoreSetup, CoreStart, Plugin } from '......srccorepublic';
import {
  AtlastixInfrastruturePluginSetup,
  AtlastixInfrastruturePluginStart,
  AppPluginStartDependencies,
} from './types';
import { PLUGIN_NAME } from '../common';

export class AtlastixInfrastruturePlugin
  implements Plugin<AtlastixInfrastruturePluginSetup, AtlastixInfrastruturePluginStart> {
  public setup(core: CoreSetup): AtlastixInfrastruturePluginSetup {
    // Register an application into the side navigation menu
    core.application.register({
      id: 'atlastixInfrastruture',
      title: PLUGIN_NAME,
      async mount(params: AppMountParameters) {
        // Load application bundle
        const { renderApp } = await import('./application');
        // Get start services as specified in kibana.json
        const [coreStart, depsStart] = await core.getStartServices();
        // Render the application
        return renderApp(coreStart, depsStart as AppPluginStartDependencies, params);
      },
    });

    // Return methods that should be available to other plugins
    return {
      getGreeting() {
        return i18n.translate('atlastixInfrastruture.greetingText', {
          defaultMessage: 'Hello from {name}!',
          values: {
            name: PLUGIN_NAME,
          },
        });
      },
    };
  }

  public start(core: CoreStart): AtlastixInfrastruturePluginStart {
    return {};
  }

  public stop() {}
}
