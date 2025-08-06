import '../globals';
import { AppInit } from '../interfaces/app-init';
declare function App({ templates, widgets, components, customTraits, // Add this parameter
routes, singleDataModelsToPrefetch, headerComponent, footerComponent, pencilBannerComponent, handleI18, toastComponent, }: AppInit): void;
export { App };
