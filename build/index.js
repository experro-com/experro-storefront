import * as cmsAppExportObjects from './app-main-index';

let App = cmsAppExportObjects.App;
let Http = cmsAppExportObjects.Http;
let Widget = cmsAppExportObjects.Widget;
let DraggableArea = cmsAppExportObjects.DraggableArea;
let ContentService = cmsAppExportObjects.ContentService;
let AuthService = cmsAppExportObjects.AuthService;
let EcommerceService = cmsAppExportObjects.EcommerceService;
let UserContext = cmsAppExportObjects.UserContext;
let IsCMSApp = cmsAppExportObjects.IsCMSApp;
let useParams = cmsAppExportObjects.useParams;
let Navigate = cmsAppExportObjects.Navigate;
let Link = cmsAppExportObjects.Link;
let toast = cmsAppExportObjects.toast;
let CommonUtilities = cmsAppExportObjects.CommonUtilities;
let useNavigate = cmsAppExportObjects.useNavigate;
let useSearchParams = cmsAppExportObjects.useSearchParams;
let Route = cmsAppExportObjects.Route;
let Router = cmsAppExportObjects.Router;
let Switch = cmsAppExportObjects.Switch;
let Page = cmsAppExportObjects.Page;
let AnalyticsService = cmsAppExportObjects.AnalyticsService;
let BigcommerceService = cmsAppExportObjects.BigcommerceService;
let Select = cmsAppExportObjects.Select;

if (process.env.REACT_APP_BUILD_TARGET === 'app-ui-builder') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const uiBuilderAppExportObjects = require('./ui-builder-main-index');
  require('./css/index.css');
  App = uiBuilderAppExportObjects.App;
  Http = uiBuilderAppExportObjects.Http;
  Widget = uiBuilderAppExportObjects.Widget;
  DraggableArea = uiBuilderAppExportObjects.DraggableArea;
  ContentService = uiBuilderAppExportObjects.ContentService;
  AuthService = uiBuilderAppExportObjects.AuthService;
  EcommerceService = uiBuilderAppExportObjects.EcommerceService;
  UserContext = uiBuilderAppExportObjects.UserContext;
  IsCMSApp = uiBuilderAppExportObjects.IsCMSApp;
  useParams = uiBuilderAppExportObjects.useParams;
  Navigate = uiBuilderAppExportObjects.Navigate;
  Link = uiBuilderAppExportObjects.Link;
  toast = uiBuilderAppExportObjects.toast;
  CommonUtilities = uiBuilderAppExportObjects.CommonUtilities;
  useNavigate = uiBuilderAppExportObjects.useNavigate;
  useSearchParams = uiBuilderAppExportObjects.useSearchParams;
  Route = uiBuilderAppExportObjects.Route;
  Router = uiBuilderAppExportObjects.Router;
  Switch = uiBuilderAppExportObjects.Switch;
  Page = uiBuilderAppExportObjects.Page;
  AnalyticsService = uiBuilderAppExportObjects.AnalyticsService;
  BigcommerceService = uiBuilderAppExportObjects.BigcommerceService;
  Select = cmsAppExportObjects.Select;
}

export {
  App,
  Http,
  Widget,
  DraggableArea,
  ContentService,
  AuthService,
  UserContext,
  IsCMSApp,
  useParams,
  Navigate,
  useNavigate,
  Link,
  toast,
  CommonUtilities,
  useSearchParams,
  Route,
  Router,
  Switch,
  EcommerceService,
  Page,
  AnalyticsService,
  BigcommerceService,
  Select,
};
