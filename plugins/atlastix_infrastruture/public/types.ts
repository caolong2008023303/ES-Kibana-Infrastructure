import { NavigationPublicPluginStart } from '../../../src/plugins/navigation/public';

export interface AtlastixInfrastruturePluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AtlastixInfrastruturePluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}
