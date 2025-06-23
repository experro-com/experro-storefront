/// <reference types="react" />
import { AppInit } from '../../interfaces/app-init';
import '../../assets/scss/grid.scss';
declare const CMSApp: ({ templates, components, routes, headerComponent, footerComponent, pencilBannerComponent }: AppInit) => import("react").JSX.Element;
export { CMSApp };
