import 'grapesjs/dist/css/grapes.min.css';
import '../../assets/scss/app.scss';
import React from 'react';
import { AppInit } from '../../interfaces/app-init';
declare const AppUiBuilder: ({ templates, widgets, components, routes, singleDataModelsToPrefetch, headerComponent, footerComponent, pencilBannerComponent, handleI18, customTraits }: AppInit) => React.JSX.Element;
export { AppUiBuilder };
