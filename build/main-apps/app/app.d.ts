import { AppInit } from '../../interfaces/app-init';
import '../../assets/scss/grid.scss';
declare const CMSApp: ({ templates, components, routes, headerComponent, footerComponent, pencilBannerComponent }: AppInit) => JSX.Element;
export { CMSApp };
