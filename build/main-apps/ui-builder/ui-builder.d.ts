import 'grapesjs/dist/css/grapes.min.css';
import '../../assets/scss/app.scss';
import '../../assets/scss/grid.scss';
import '../../assets/scss/grid-for-ui-builder.scss';
import { AppInit } from '../../interfaces/app-init';
declare const AppUiBuilder: ({ templates, widgets, components, routes, singleDataModelsToPrefetch, headerComponent, footerComponent, pencilBannerComponent, }: AppInit) => JSX.Element;
export { AppUiBuilder };
