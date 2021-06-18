(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);



const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomeModule),
    },
    {
        path: 'search-results',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./search-results/search-results.module */ 3714)).then(m => m.SearchResultsModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 4523)).then(m => m.ProfileModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _common_components_components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-components/components/app-header/app-header.component */ 8095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class AppComponent {
    constructor() {
        this.title = 'app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_common_components_components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_0__.AppHeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-components/common-components.module */ 754);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ 7001);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 3220);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ 5396);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.module */ 3467);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/chips */ 8341);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/autocomplete */ 1554);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/reducers */ 8006);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngrx/effects */ 5322);
/* harmony import */ var _store_effects_search_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/effects/search.effects */ 5461);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ngrx/store-devtools */ 3572);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _search_results_search_results_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-results/search-results.module */ 3714);
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.module */ 4523);
/* harmony import */ var _store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/effects/auth.effects */ 3172);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);






































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
            _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_2__.CommonComponentsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatNativeDateModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__.MatSnackBarModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatNativeDateModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatSidenavModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__.MatListModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_27__.MatCardModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__.MatChipsModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__.MatAutocompleteModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinnerModule,
            _home_home_module__WEBPACK_IMPORTED_MODULE_3__.HomeModule,
            _search_results_search_results_module__WEBPACK_IMPORTED_MODULE_7__.SearchResultsModule,
            _profile_profile_module__WEBPACK_IMPORTED_MODULE_8__.ProfileModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_32__.StoreModule.forRoot(_store_reducers__WEBPACK_IMPORTED_MODULE_4__.reducers, {
                metaReducers: _store_reducers__WEBPACK_IMPORTED_MODULE_4__.metaReducers,
                runtimeChecks: {
                    strictActionImmutability: true,
                    strictStateImmutability: true
                }
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_33__.EffectsModule.forRoot([
                _store_effects_search_effects__WEBPACK_IMPORTED_MODULE_5__.searchEffects,
                _store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_9__.profileEffects
            ]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_34__.StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_2__.CommonComponentsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatNativeDateModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__.MatSnackBarModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatNativeDateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatSidenavModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__.MatListModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_27__.MatCardModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__.MatChipsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__.MatAutocompleteModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinnerModule,
        _home_home_module__WEBPACK_IMPORTED_MODULE_3__.HomeModule,
        _search_results_search_results_module__WEBPACK_IMPORTED_MODULE_7__.SearchResultsModule,
        _profile_profile_module__WEBPACK_IMPORTED_MODULE_8__.ProfileModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_32__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_33__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_34__.StoreDevtoolsModule] }); })();


/***/ }),

/***/ 4130:
/*!***********************************************************************!*\
  !*** ./src/app/common-components/common-components-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonComponentsRoutingModule": () => (/* binding */ CommonComponentsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);



const routes = [];
class CommonComponentsRoutingModule {
}
CommonComponentsRoutingModule.ɵfac = function CommonComponentsRoutingModule_Factory(t) { return new (t || CommonComponentsRoutingModule)(); };
CommonComponentsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CommonComponentsRoutingModule });
CommonComponentsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommonComponentsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 754:
/*!***************************************************************!*\
  !*** ./src/app/common-components/common-components.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonComponentsModule": () => (/* binding */ CommonComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _common_components_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-components-routing.module */ 4130);
/* harmony import */ var _components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/app-header/app-header.component */ 8095);
/* harmony import */ var _components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/side-navigation/side-navigation.component */ 1462);
/* harmony import */ var _icons_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/icon/icon.component */ 8213);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _components_app_header_profile_menu_profile_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app-header/profile-menu/profile-menu.component */ 3917);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/search/search.component */ 6454);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ 1554);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/chips */ 8341);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _components_app_logo_app_logo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/app-logo/app-logo.component */ 4166);
/* harmony import */ var _components_panel_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/panel/panel-header/panel-header.component */ 6865);
/* harmony import */ var _components_panel_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/panel/panel-body/panel-body.component */ 293);
/* harmony import */ var _components_panel_panel_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/panel/panel/panel.component */ 338);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/modal/modal.component */ 1663);
/* harmony import */ var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/loading-spinner/loading-spinner.component */ 8541);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7716);


























class CommonComponentsModule {
}
CommonComponentsModule.ɵfac = function CommonComponentsModule_Factory(t) { return new (t || CommonComponentsModule)(); };
CommonComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: CommonComponentsModule });
CommonComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _common_components_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommonComponentsRoutingModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatSidenavModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__.MatChipsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](CommonComponentsModule, { declarations: [_components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__.AppHeaderComponent,
        _components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_2__.SideNavigationComponent,
        _icons_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent,
        _components_app_header_profile_menu_profile_menu_component__WEBPACK_IMPORTED_MODULE_4__.ProfileMenuComponent,
        _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__.SearchComponent,
        _components_app_logo_app_logo_component__WEBPACK_IMPORTED_MODULE_6__.AppLogoComponent,
        _components_panel_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_7__.PanelHeaderComponent,
        _components_panel_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_8__.PanelBodyComponent,
        _components_panel_panel_panel_component__WEBPACK_IMPORTED_MODULE_9__.PanelComponent,
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__.ModalComponent,
        _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_11__.LoadingSpinnerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _common_components_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommonComponentsRoutingModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatSidenavModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__.MatChipsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule], exports: [_components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__.AppHeaderComponent,
        _components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_2__.SideNavigationComponent,
        _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__.SearchComponent,
        _components_app_logo_app_logo_component__WEBPACK_IMPORTED_MODULE_6__.AppLogoComponent,
        _components_panel_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_7__.PanelHeaderComponent,
        _components_panel_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_8__.PanelBodyComponent,
        _components_panel_panel_panel_component__WEBPACK_IMPORTED_MODULE_9__.PanelComponent,
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__.ModalComponent,
        _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_11__.LoadingSpinnerComponent] }); })();


/***/ }),

/***/ 8095:
/*!*********************************************************************************!*\
  !*** ./src/app/common-components/components/app-header/app-header.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppHeaderComponent": () => (/* binding */ AppHeaderComponent)
/* harmony export */ });
/* harmony import */ var _store_reducers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/reducers/index */ 8006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _app_logo_app_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-logo/app-logo.component */ 4166);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../side-navigation/side-navigation.component */ 1462);












const _c0 = function () { return ["/profile/settings"]; };
function AppHeaderComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return [""]; };
const _c2 = function () { return ["/profile/drinks-profile"]; };
const _c3 = function () { return ["/profile/acct"]; };
class AppHeaderComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.getProfile();
    }
    getProfile() {
        this.store.select(_store_reducers_index__WEBPACK_IMPORTED_MODULE_0__.getAuthUser).subscribe((authenticated) => {
            this.authenticated = authenticated;
        });
    }
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store)); };
AppHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-app-header"]], decls: 23, vars: 11, consts: [[1, "toolBar"], ["mat-icon-button", "", 3, "click"], [1, "alignContent"], ["mat-button", "", 3, "routerLink"], ["mat-icon-button", "", 3, "routerLink"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["profile_menu", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "routerLink", 4, "ngIf"], ["sidenav", ""]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppHeaderComponent_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21); return _r2.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "local_bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-menu", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AppHeaderComponent_button_18_Template, 2, 2, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-sidenav", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "app-side-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.authenticated ? "Profile" : "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-elevation-z2", true);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _app_logo_app_logo_component__WEBPACK_IMPORTED_MODULE_1__.AppLogoComponent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenav, _side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_2__.SideNavigationComponent], styles: [".toolBar[_ngcontent-%COMP%] {\n  position: sticky;\n  position: -webkit-sticky;\n  \n  top: 0;\n  \n  z-index: 1000;\n  \n  color: #212121;\n}\n\n.alignContent[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQTBCLHlCQUFBO0VBQzFCLE1BQUE7RUFBUSx5Q0FBQTtFQUNSLGFBQUE7RUFBZSwrREFBQTtFQUNmLGNBQUE7QUFJRjs7QUFEQTtFQUNFLGNBQUE7QUFJRiIsImZpbGUiOiJhcHAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xCYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIEZvciBtYWNPUy9pT1MgU2FmYXJpICovXG4gIHRvcDogMDsgLyogU2V0cyB0aGUgc3RpY2t5IHRvb2xiYXIgdG8gYmUgb24gdG9wICovXG4gIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSB0aGF0IHlvdXIgYXBwJ3MgY29udGVudCBkb2Vzbid0IG92ZXJsYXAgdGhlIHRvb2xiYXIgKi9cbiAgY29sb3I6ICMyMTIxMjE7XG59XG5cbi5hbGlnbkNvbnRlbnQge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 3917:
/*!************************************************************************************************!*\
  !*** ./src/app/common-components/components/app-header/profile-menu/profile-menu.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileMenuComponent": () => (/* binding */ ProfileMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ProfileMenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileMenuComponent.ɵfac = function ProfileMenuComponent_Factory(t) { return new (t || ProfileMenuComponent)(); };
ProfileMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileMenuComponent, selectors: [["app-profile-menu"]], decls: 2, vars: 0, template: function ProfileMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile-menu works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4166:
/*!*****************************************************************************!*\
  !*** ./src/app/common-components/components/app-logo/app-logo.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppLogoComponent": () => (/* binding */ AppLogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class AppLogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppLogoComponent.ɵfac = function AppLogoComponent_Factory(t) { return new (t || AppLogoComponent)(); };
AppLogoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppLogoComponent, selectors: [["app-app-logo"]], inputs: { width: "width", height: "height" }, decls: 1, vars: 2, consts: [["src", "", 3, "width", "height"]], template: function AppLogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("height", ctx.height);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAtbG9nby5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8541:
/*!*******************************************************************************************!*\
  !*** ./src/app/common-components/components/loading-spinner/loading-spinner.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingSpinnerComponent": () => (/* binding */ LoadingSpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);


class LoadingSpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); };
LoadingSpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], decls: 2, vars: 0, template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__.MatSpinner], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1663:
/*!***********************************************************************!*\
  !*** ./src/app/common-components/components/modal/modal.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 1095);





function ModalComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_button_3_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.save.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_button_4_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.close.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_button_5_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.cancel.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_button_6_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.wildCardButtonOneEvent.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.wildCardButtonOne);
} }
function ModalComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_button_7_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.wildCardButtonTwoEvent.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.wildCardButtonTwo);
} }
const _c0 = ["*"];
class ModalComponent {
    constructor() {
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.wildCardButtonTwoEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.wildCardButtonOneEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        this.showSaveButton = this.showSaveButton || false;
        this.showCloseButton = this.showCloseButton || false;
        this.showCancelButton = this.showCancelButton || false;
        this.wildCardButtonOne = this.wildCardButtonOne || false;
        this.wildCardButtonTwo = this.wildCardButtonTwo || false;
        this.class = this.class || 'auto';
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], inputs: { showSaveButton: "showSaveButton", showCloseButton: "showCloseButton", showCancelButton: "showCancelButton", wildCardButtonOne: "wildCardButtonOne", wildCardButtonTwo: "wildCardButtonTwo", name: "name", class: "class" }, outputs: { save: "save", close: "close", cancel: "cancel", wildCardButtonTwoEvent: "wildCardButtonTwoEvent", wildCardButtonOneEvent: "wildCardButtonOneEvent" }, ngContentSelectors: _c0, decls: 8, vars: 8, consts: [[2, "justify-content", "center"], ["mat-raised-button", "", "mat-dialog-close", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "mat-dialog-close", "", 3, "click"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-actions", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalComponent_button_3_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModalComponent_button_4_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ModalComponent_button_5_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ModalComponent_button_6_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ModalComponent_button_7_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSaveButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCloseButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCancelButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wildCardButtonOne);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wildCardButtonTwo);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose], styles: [".auto[_ngcontent-%COMP%] {\n  height: auto;\n  width: auto;\n  min-height: 200px;\n  min-width: 200px;\n}\n\n.loginSize[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6Im1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dG8ge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuLmxvZ2luU2l6ZSB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 293:
/*!***************************************************************************************!*\
  !*** ./src/app/common-components/components/panel/panel-body/panel-body.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelBodyComponent": () => (/* binding */ PanelBodyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

const _c0 = ["*"];
class PanelBodyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PanelBodyComponent.ɵfac = function PanelBodyComponent_Factory(t) { return new (t || PanelBodyComponent)(); };
PanelBodyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelBodyComponent, selectors: [["app-panel-body"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "panel__body", "bg-lighter", "has-no-padding"]], template: function PanelBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYW5lbC1ib2R5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6865:
/*!*******************************************************************************************!*\
  !*** ./src/app/common-components/components/panel/panel-header/panel-header.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderComponent": () => (/* binding */ PanelHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

const _c0 = ["*"];
class PanelHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
PanelHeaderComponent.ɵfac = function PanelHeaderComponent_Factory(t) { return new (t || PanelHeaderComponent)(); };
PanelHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelHeaderComponent, selectors: [["app-panel-header"]], inputs: { title: "title" }, ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "panel__header", "has-padding-y-2"], [1, "panel__header-title"]], template: function PanelHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYW5lbC1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 338:
/*!*****************************************************************************!*\
  !*** ./src/app/common-components/components/panel/panel/panel.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelComponent": () => (/* binding */ PanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

const _c0 = [[["app-panel-header"]], [["app-panel-body"]]];
const _c1 = ["app-panel-header", "app-panel-body"];
class PanelComponent {
    constructor() { }
    ngOnInit() {
    }
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(); };
PanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelComponent, selectors: [["app-panel"]], ngContentSelectors: _c1, decls: 3, vars: 0, consts: [[1, "panel", "has-padding-y-1"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".has-padding-y-1[_ngcontent-%COMP%] {\n  padding-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJwYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oYXMtcGFkZGluZy15LTEge1xuICBwYWRkaW5nLXRvcDogMWVtO1xufVxuIl19 */"] });


/***/ }),

/***/ 6454:
/*!*************************************************************************!*\
  !*** ./src/app/common-components/components/search/search.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ 6461);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6888);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _store_actions_search_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/actions/search.actions */ 3710);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/reducers */ 8006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var _utilities_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/services/search.service */ 6582);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ 8341);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ 1554);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 7817);

















const _c0 = ["searchInput"];
const _c1 = ["searchAutoComplete"];
function SearchComponent_mat_chip_3_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SearchComponent_mat_chip_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("removed", function SearchComponent_mat_chip_3_Template_mat_chip_removed_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const param_r5 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.remove(param_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SearchComponent_mat_chip_3_mat_icon_2_Template, 2, 0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const param_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selectable", ctx_r1.selectable)("removable", ctx_r1.removable);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", param_r5, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.removable);
} }
function SearchComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r9, " ");
} }
class SearchComponent {
    constructor(store, searchService, router) {
        this.store = store;
        this.searchService = searchService;
        this.router = router;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.COMMA];
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl();
        this.searchList = [];
        this.list = [];
        this.removable = true;
        this.selectable = true;
        this.filteredSearchCriteria = this.searchCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((param) => param ? this._filter(param) : this.list.slice()));
    }
    ngOnInit() {
        this.setUpSearch();
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            this.searchList.push(value.trim());
        }
        if (input) {
            input.value = '';
        }
        this.searchCtrl.setValue(null);
    }
    remove(searchParam) {
        const searchIndex = this.searchList.indexOf(searchParam);
        if (searchIndex >= 0) {
            this.searchList.splice(searchIndex, 1);
        }
    }
    selected(event) {
        this.searchList.push(event.option.viewValue);
        this.searchInput.nativeElement.value = '';
        this.searchCtrl.setValue(null);
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.list.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
    }
    setUpSearch() {
        this.store.dispatch(_store_actions_search_actions__WEBPACK_IMPORTED_MODULE_0__.setupSearchInformation());
        this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_1__.getSearchInfo).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.skipWhile)((info) => !info), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.skipWhile)((info) => info.length === 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe((info) => {
            this.list = info;
        });
    }
    search() {
        this.store.dispatch(_store_actions_search_actions__WEBPACK_IMPORTED_MODULE_0__.searchSuccessful({ payload: false }));
        this.store.dispatch(_store_actions_search_actions__WEBPACK_IMPORTED_MODULE_0__.search({ payload: this.searchList.join() }));
        this.router.navigate(['search-results']);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_utilities_services_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router)); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], viewQuery: function SearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.matAutocomplete = _t.first);
    } }, decls: 12, vars: 8, consts: [["aria-label", "Fruit selection"], ["searchChipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Search", 3, "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd"], ["searchInput", ""], [3, "optionSelected"], ["searchAutoComplete", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "click"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [3, "value"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-chip-list", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SearchComponent_mat_chip_3_Template, 3, 4, "mat-chip", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("matChipInputTokenEnd", function SearchComponent_Template_input_matChipInputTokenEnd_4_listener($event) { return ctx.add($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-autocomplete", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("optionSelected", function SearchComponent_Template_mat_autocomplete_optionSelected_6_listener($event) { return ctx.selected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, SearchComponent_mat_option_8_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_10_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.searchList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.searchCtrl)("matAutocomplete", _r3)("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 6, ctx.filteredSearchCriteria));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipList, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteTrigger, _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocomplete, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChip, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipRemove, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUFDRiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAzMCU7XG59XG4iXX0= */"] });


/***/ }),

/***/ 1462:
/*!*******************************************************************************************!*\
  !*** ./src/app/common-components/components/side-navigation/side-navigation.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideNavigationComponent": () => (/* binding */ SideNavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 6627);



class SideNavigationComponent {
    constructor() { }
    ngOnInit() {
    }
}
SideNavigationComponent.ɵfac = function SideNavigationComponent_Factory(t) { return new (t || SideNavigationComponent)(); };
SideNavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavigationComponent, selectors: [["app-side-navigation"]], decls: 5, vars: 0, consts: [["mat-list-item", "", 1, "whiteFont"]], template: function SideNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Never Forget A Text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_1__.MatListItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8213:
/*!****************************************************************!*\
  !*** ./src/app/common-components/icons/icon/icon.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconComponent": () => (/* binding */ IconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


function IconComponent__svg_svg_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class IconComponent {
    constructor() { }
    ngOnInit() {
    }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); };
IconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconComponent, selectors: [["app-icon"]], inputs: { name: "name", height: "height", width: "width" }, decls: 1, vars: 1, consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "15", "height", "15", "viewBox", "0 0 576 512", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "15", "height", "15", "viewBox", "0 0 576 512"], ["fill", "currentColor", "d", "M208 280.27L264.28 224H151.72zM432 0c-62.6 0-115.34 40.2-135.17 96h52.53C366 67.45 396.63 48 432 48a96 96 0 0 1 0 192 95 95 0 0 1-39.32-8.64l-35.26 35.26A144 144 0 1 0 432 0z", "opacity", "0.4", 1, "fa-secondary"], ["fill", "currentColor", "d", "M408.75 170.05c15.52-15.52 4.53-42.05-17.42-42.05H24.69c-22 0-32.94 26.53-17.42 42.05L176 338.78V464h-56a40 40 0 0 0-40 40 8 8 0 0 0 8 8h240a8 8 0 0 0 8-8 40 40 0 0 0-40-40h-56V338.78zM208 280.27L119.73 192h176.55z", 1, "fa-primary"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, IconComponent__svg_svg_0_Template, 3, 0, "svg", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "cocktail");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpY29uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8816:
/*!**************************************************************!*\
  !*** ./src/app/drink/drink-create/drink-create.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrinkCreateComponent": () => (/* binding */ DrinkCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class DrinkCreateComponent {
    constructor() { }
    ngOnInit() {
    }
}
DrinkCreateComponent.ɵfac = function DrinkCreateComponent_Factory(t) { return new (t || DrinkCreateComponent)(); };
DrinkCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrinkCreateComponent, selectors: [["app-drink-create"]], decls: 2, vars: 0, template: function DrinkCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "drink-create works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmluay1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3171:
/*!**********************************************************!*\
  !*** ./src/app/drink/drink-edit/drink-edit.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrinkEditComponent": () => (/* binding */ DrinkEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class DrinkEditComponent {
    constructor() { }
    ngOnInit() {
    }
}
DrinkEditComponent.ɵfac = function DrinkEditComponent_Factory(t) { return new (t || DrinkEditComponent)(); };
DrinkEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrinkEditComponent, selectors: [["app-drink-edit"]], decls: 2, vars: 0, template: function DrinkEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "drink-edit works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmluay1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8410:
/*!**********************************************************!*\
  !*** ./src/app/drink/drink-form/drink-form.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrinkFormComponent": () => (/* binding */ DrinkFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class DrinkFormComponent {
    constructor() { }
    ngOnInit() {
    }
}
DrinkFormComponent.ɵfac = function DrinkFormComponent_Factory(t) { return new (t || DrinkFormComponent)(); };
DrinkFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrinkFormComponent, selectors: [["app-drink-form"]], decls: 2, vars: 0, template: function DrinkFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "drink-form works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmluay1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3456:
/*!***********************************************!*\
  !*** ./src/app/drink/drink-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrinkRoutingModule": () => (/* binding */ DrinkRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);



const routes = [];
class DrinkRoutingModule {
}
DrinkRoutingModule.ɵfac = function DrinkRoutingModule_Factory(t) { return new (t || DrinkRoutingModule)(); };
DrinkRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DrinkRoutingModule });
DrinkRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DrinkRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 7364:
/*!***********************************************************************!*\
  !*** ./src/app/drink/drink-view/drink-glass/drink-glass.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrinkGlassComponent": () => (/* binding */ DrinkGlassComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


function DrinkGlassComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Glass:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.drink.glass.name, "");
} }
class DrinkGlassComponent {
    constructor() { }
    ngOnInit() {
    }
}
DrinkGlassComponent.ɵfac = function DrinkGlassComponent_Factory(t) { return new (t || DrinkGlassComponent)(); };
DrinkGlassComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrinkGlassComponent, selectors: [["app-drink-glass"]], inputs: { drink: "drink" }, decls: 3, vars: 1, consts: [[1, "panel__body"], [4, "ngIf"], [1, "is-bold"]], template: function DrinkGlassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DrinkGlassComponent_li_2_Template, 4, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.drink == null ? null : ctx.drink.glass == null ? null : ctx.drink.glass.name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmluay1nbGFzcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3765:
/*!***********************************************************************!*\
  !*** ./src/app/drink/drink-view/drink-image/drink-image.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrinkImageComponent": () => (/* binding */ DrinkImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class DrinkImageComponent {
    constructor() { }
    ngOnInit() {
    }
}
DrinkImageComponent.ɵfac = function DrinkImageComponent_Factory(t) { return new (t || DrinkImageComponent)(); };
DrinkImageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrinkImageComponent, selectors: [["app-drink-image"]], inputs: { drink: "drink" }, decls: 2, vars: 1, consts: [[1, "panel__body", "center-image"], [3, "src"]], template: function DrinkImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.drink.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["img[_ngcontent-%COMP%] {\n  max-width: 250px;\n  max-height: 250px;\n}\n\n.center-image[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyaW5rLWltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7QUFDRiIsImZpbGUiOiJkcmluay1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xufVxuXG4uY2VudGVyLWltYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ 1481:
/*!*******************************************************************************************!*\
  !*** ./src/app/drink/drink-view/drink-ingredient-list/drink-ingredient-list.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrinkIngredientListComponent": () => (/* binding */ DrinkIngredientListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


function DrinkIngredientListComponent_div_1_ul_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- ", ingredient_r1.amount, "");
} }
function DrinkIngredientListComponent_div_1_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DrinkIngredientListComponent_div_1_ul_1_span_3_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ingredient_r1.ingredient.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ingredient_r1.amount);
} }
function DrinkIngredientListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DrinkIngredientListComponent_div_1_ul_1_Template, 4, 2, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ingredient_r1 == null ? null : ingredient_r1.ingredient);
} }
class DrinkIngredientListComponent {
    constructor() { }
    ngOnInit() {
    }
}
DrinkIngredientListComponent.ɵfac = function DrinkIngredientListComponent_Factory(t) { return new (t || DrinkIngredientListComponent)(); };
DrinkIngredientListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrinkIngredientListComponent, selectors: [["app-drink-ingredient-list"]], inputs: { drink: "drink" }, decls: 2, vars: 1, consts: [[1, "panel__body"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function DrinkIngredientListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DrinkIngredientListComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.drink == null ? null : ctx.drink.ingredients);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmluay1pbmdyZWRpZW50LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4816:
/*!*************************************************************************************!*\
  !*** ./src/app/drink/drink-view/drink-instructions/drink-instructions.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrinkInstructionsComponent": () => (/* binding */ DrinkInstructionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class DrinkInstructionsComponent {
    constructor() { }
    ngOnInit() {
    }
}
DrinkInstructionsComponent.ɵfac = function DrinkInstructionsComponent_Factory(t) { return new (t || DrinkInstructionsComponent)(); };
DrinkInstructionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrinkInstructionsComponent, selectors: [["app-drink-instructions"]], inputs: { drink: "drink" }, decls: 3, vars: 1, consts: [[1, "panel__body"]], template: function DrinkInstructionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.drink.instruction);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmluay1pbnN0cnVjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6433:
/*!*********************************************************************!*\
  !*** ./src/app/drink/drink-view/drink-name/drink-name.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrinkNameComponent": () => (/* binding */ DrinkNameComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

const _c0 = ["*"];
class DrinkNameComponent {
    constructor() { }
    ngOnInit() {
    }
}
DrinkNameComponent.ɵfac = function DrinkNameComponent_Factory(t) { return new (t || DrinkNameComponent)(); };
DrinkNameComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrinkNameComponent, selectors: [["app-drink-name"]], inputs: { drink: "drink" }, ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "panel__header", "has-padding-y-2"], [1, "panel__header-title"]], template: function DrinkNameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmluay1uYW1lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6544:
/*!**********************************************************!*\
  !*** ./src/app/drink/drink-view/drink-view.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrinkViewComponent": () => (/* binding */ DrinkViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _drink_name_drink_name_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drink-name/drink-name.component */ 6433);
/* harmony import */ var _drink_image_drink_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drink-image/drink-image.component */ 3765);
/* harmony import */ var _drink_glass_drink_glass_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drink-glass/drink-glass.component */ 7364);
/* harmony import */ var _drink_ingredient_list_drink_ingredient_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drink-ingredient-list/drink-ingredient-list.component */ 1481);
/* harmony import */ var _drink_instructions_drink_instructions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drink-instructions/drink-instructions.component */ 4816);







function DrinkViewComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-drink-image", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("drink", ctx_r1.drink);
} }
function DrinkViewComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-drink-glass", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("drink", ctx_r2.drink);
} }
function DrinkViewComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-drink-ingredient-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("drink", ctx_r3.drink);
} }
function DrinkViewComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-drink-instructions", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("drink", ctx_r4.drink);
} }
function DrinkViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "app-drink-name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DrinkViewComponent_div_0_div_4_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, DrinkViewComponent_div_0_div_5_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, DrinkViewComponent_div_0_div_6_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, DrinkViewComponent_div_0_div_7_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.drink.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.drink.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.drink.glass);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.drink.ingredients);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.drink.instruction);
} }
class DrinkViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
DrinkViewComponent.ɵfac = function DrinkViewComponent_Factory(t) { return new (t || DrinkViewComponent)(); };
DrinkViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DrinkViewComponent, selectors: [["app-drink-view"]], inputs: { drink: "drink" }, decls: 1, vars: 1, consts: [["class", "panel__body", "style", "overflow: hidden !important;", 4, "ngIf"], [1, "panel__body", 2, "overflow", "hidden !important"], [4, "ngIf"], [3, "drink"]], template: function DrinkViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DrinkViewComponent_div_0_Template, 8, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.drink.name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _drink_name_drink_name_component__WEBPACK_IMPORTED_MODULE_0__.DrinkNameComponent, _drink_image_drink_image_component__WEBPACK_IMPORTED_MODULE_1__.DrinkImageComponent, _drink_glass_drink_glass_component__WEBPACK_IMPORTED_MODULE_2__.DrinkGlassComponent, _drink_ingredient_list_drink_ingredient_list_component__WEBPACK_IMPORTED_MODULE_3__.DrinkIngredientListComponent, _drink_instructions_drink_instructions_component__WEBPACK_IMPORTED_MODULE_4__.DrinkInstructionsComponent], styles: [".panel__body[_ngcontent-%COMP%] {\n  page-break-inside: avoid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyaW5rLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtBQUNGIiwiZmlsZSI6ImRyaW5rLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWxfX2JvZHkge1xuICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ 7941:
/*!***************************************!*\
  !*** ./src/app/drink/drink.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrinkModule": () => (/* binding */ DrinkModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _drink_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drink-routing.module */ 3456);
/* harmony import */ var _drink_form_drink_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drink-form/drink-form.component */ 8410);
/* harmony import */ var _drink_create_drink_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drink-create/drink-create.component */ 8816);
/* harmony import */ var _drink_view_drink_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drink-view/drink-view.component */ 6544);
/* harmony import */ var _drink_edit_drink_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drink-edit/drink-edit.component */ 3171);
/* harmony import */ var _drink_view_drink_ingredient_list_drink_ingredient_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drink-view/drink-ingredient-list/drink-ingredient-list.component */ 1481);
/* harmony import */ var _drink_view_drink_image_drink_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drink-view/drink-image/drink-image.component */ 3765);
/* harmony import */ var _drink_view_drink_instructions_drink_instructions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drink-view/drink-instructions/drink-instructions.component */ 4816);
/* harmony import */ var _drink_view_drink_glass_drink_glass_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drink-view/drink-glass/drink-glass.component */ 7364);
/* harmony import */ var _drink_view_drink_name_drink_name_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./drink-view/drink-name/drink-name.component */ 6433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);












class DrinkModule {
}
DrinkModule.ɵfac = function DrinkModule_Factory(t) { return new (t || DrinkModule)(); };
DrinkModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: DrinkModule });
DrinkModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _drink_routing_module__WEBPACK_IMPORTED_MODULE_0__.DrinkRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](DrinkModule, { declarations: [_drink_form_drink_form_component__WEBPACK_IMPORTED_MODULE_1__.DrinkFormComponent, _drink_create_drink_create_component__WEBPACK_IMPORTED_MODULE_2__.DrinkCreateComponent, _drink_view_drink_view_component__WEBPACK_IMPORTED_MODULE_3__.DrinkViewComponent, _drink_edit_drink_edit_component__WEBPACK_IMPORTED_MODULE_4__.DrinkEditComponent, _drink_view_drink_ingredient_list_drink_ingredient_list_component__WEBPACK_IMPORTED_MODULE_5__.DrinkIngredientListComponent, _drink_view_drink_image_drink_image_component__WEBPACK_IMPORTED_MODULE_6__.DrinkImageComponent, _drink_view_drink_instructions_drink_instructions_component__WEBPACK_IMPORTED_MODULE_7__.DrinkInstructionsComponent, _drink_view_drink_glass_drink_glass_component__WEBPACK_IMPORTED_MODULE_8__.DrinkGlassComponent, _drink_view_drink_name_drink_name_component__WEBPACK_IMPORTED_MODULE_9__.DrinkNameComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _drink_routing_module__WEBPACK_IMPORTED_MODULE_0__.DrinkRoutingModule], exports: [_drink_view_drink_view_component__WEBPACK_IMPORTED_MODULE_3__.DrinkViewComponent] }); })();


/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 4988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 4988);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ 8341);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ 1554);
/* harmony import */ var _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-components/common-components.module */ 754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);










class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocompleteModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_2__.CommonComponentsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocompleteModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_2__.CommonComponentsModule], exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent] }); })();


/***/ }),

/***/ 4988:
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _common_components_components_app_logo_app_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common-components/components/app-logo/app-logo.component */ 4166);
/* harmony import */ var _common_components_components_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common-components/components/search/search.component */ 6454);



class HomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, consts: [[1, "centered-text"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_common_components_components_app_logo_app_logo_component__WEBPACK_IMPORTED_MODULE_0__.AppLogoComponent, _common_components_components_search_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent], styles: ["div[_ngcontent-%COMP%] {\n  margin: 5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gIG1hcmdpbjogNWVtO1xufVxuIl19 */"] });


/***/ }),

/***/ 2450:
/*!************************************************************************************!*\
  !*** ./src/app/profile/create-profile-account/create-profile-account.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateProfileAccountComponent": () => (/* binding */ CreateProfileAccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/actions/auth.actions */ 6338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var _common_components_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common-components/components/modal/modal.component */ 1663);
/* harmony import */ var _common_components_components_panel_panel_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common-components/components/panel/panel/panel.component */ 338);
/* harmony import */ var _common_components_components_panel_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common-components/components/panel/panel-header/panel-header.component */ 6865);
/* harmony import */ var _common_components_components_panel_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common-components/components/panel/panel-body/panel-body.component */ 293);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 3166);












class CreateProfileAccountComponent {
    constructor(router, formBuilder, store) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.store = store;
        this.error_messages = {
            'name': [
                { type: 'required', message: 'First/Last Name is required.' },
            ],
            'lname': [
                { type: 'required', message: 'Last Name is required.' }
            ],
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'minlength', message: 'Email length.' },
                { type: 'maxlength', message: 'Email length.' },
                { type: 'email', message: 'please enter a valid email address.' },
            ],
            'password': [
                { type: 'required', message: 'password is required.' },
                { type: 'minlength', message: 'password length.' },
                { type: 'maxlength', message: 'password length.' }
            ],
            'confirmpassword': [
                { type: 'required', message: 'password is required.' },
                { type: 'minlength', message: 'password length.' },
                { type: 'maxlength', message: 'password length.' }
            ],
        };
    }
    ngOnInit() {
        this.createProfileForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(30),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(30)
            ])),
            confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(30)
            ])),
        }, {
            validators: this.password.bind(this)
        });
    }
    password(formGroup) {
        const { value: password } = formGroup.get('password');
        const { value: confirmPassword } = formGroup.get('confirmpassword');
        return password === confirmPassword ? null : { passwordNotMatch: true };
    }
    submitRegistration() {
        this.loading = true;
        this.store.dispatch(_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.createProfileAction({ payload: this.createProfileForm }));
    }
}
CreateProfileAccountComponent.ɵfac = function CreateProfileAccountComponent_Factory(t) { return new (t || CreateProfileAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store)); };
CreateProfileAccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CreateProfileAccountComponent, selectors: [["app-create-profile-account"]], decls: 25, vars: 7, consts: [[3, "name", "showSaveButton", "showCancelButton", "save"], [3, "formGroup"], ["matInput", "", "formControlName", "name"], ["matInput", "", "formControlName", "email"], ["matInput", "", "formControlName", "password", "type", "password"], ["matInput", "", "formControlName", "confirmpassword", "type", "password"]], template: function CreateProfileAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("save", function CreateProfileAccountComponent_Template_app_modal_save_0_listener() { return ctx.submitRegistration(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "app-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "app-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Create Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "app-panel-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", "createProfileModal")("showSaveButton", true)("showCancelButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.createProfileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.createProfileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.createProfileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.createProfileForm);
    } }, directives: [_common_components_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__.ModalComponent, _common_components_components_panel_panel_panel_component__WEBPACK_IMPORTED_MODULE_2__.PanelComponent, _common_components_components_panel_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_3__.PanelHeaderComponent, _common_components_components_panel_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_4__.PanelBodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcHJvZmlsZS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7123:
/*!********************************************************************!*\
  !*** ./src/app/profile/drinks-profile/drinks-profile.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrinksProfileComponent": () => (/* binding */ DrinksProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class DrinksProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
DrinksProfileComponent.ɵfac = function DrinksProfileComponent_Factory(t) { return new (t || DrinksProfileComponent)(); };
DrinksProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrinksProfileComponent, selectors: [["app-drinks-profile"]], decls: 2, vars: 0, template: function DrinksProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "drinks-profile works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmlua3MtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5659:
/*!********************************************************************************!*\
  !*** ./src/app/profile/edit-profile-account/edit-profile-account.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfileAccountComponent": () => (/* binding */ EditProfileAccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class EditProfileAccountComponent {
    constructor() { }
    ngOnInit() {
    }
}
EditProfileAccountComponent.ɵfac = function EditProfileAccountComponent_Factory(t) { return new (t || EditProfileAccountComponent)(); };
EditProfileAccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditProfileAccountComponent, selectors: [["app-edit-profile-account"]], decls: 2, vars: 0, template: function EditProfileAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit-profile-account works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXByb2ZpbGUtYWNjb3VudC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5455:
/*!******************************************************************!*\
  !*** ./src/app/profile/login-profile/login-profile.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginProfileComponent": () => (/* binding */ LoginProfileComponent)
/* harmony export */ });
/* harmony import */ var _store_reducers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/reducers/index */ 8006);
/* harmony import */ var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions/auth.actions */ 6338);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _create_profile_account_create_profile_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-profile-account/create-profile-account.component */ 2450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _common_components_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common-components/components/modal/modal.component */ 1663);
/* harmony import */ var _common_components_components_panel_panel_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common-components/components/panel/panel/panel.component */ 338);
/* harmony import */ var _common_components_components_panel_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common-components/components/panel/panel-header/panel-header.component */ 6865);
/* harmony import */ var _common_components_components_panel_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common-components/components/panel/panel-body/panel-body.component */ 293);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 8583);
















function LoginProfileComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function LoginProfileComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please enter a valid email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function LoginProfileComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class LoginProfileComponent {
    constructor(store, formBuilder, router, dialog) {
        this.store = store;
        this.formBuilder = formBuilder;
        this.router = router;
        this.dialog = dialog;
        this.loginForm = this.formBuilder.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email
            ]))
        });
    }
    ngOnInit() {
    }
    authLogin($event) {
        this.store.dispatch(_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.loginProfileAction({ payload: { email: this.loginForm.controls['email'].value,
                password: this.loginForm.controls['password'].value }
        }));
        this.store.select(_store_reducers_index__WEBPACK_IMPORTED_MODULE_0__.getAuthLoginSuccess).subscribe((success) => {
            if (success) {
                this.router.navigate(['/home']);
            }
        });
    }
    openCreateProfileModal() {
        this.dialog.open(_create_profile_account_create_profile_account_component__WEBPACK_IMPORTED_MODULE_2__.CreateProfileAccountComponent);
    }
}
LoginProfileComponent.ɵfac = function LoginProfileComponent_Factory(t) { return new (t || LoginProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog)); };
LoginProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: LoginProfileComponent, selectors: [["app-login-profile"]], decls: 18, vars: 10, consts: [[3, "name", "wildCardButtonOne", "wildCardButtonTwo", "wildCardButtonOneEvent", "wildCardButtonTwoEvent"], [3, "formGroup"], ["appearance", "fill"], ["matInput", "", "formControlName", "email", "required", ""], [4, "ngIf"], ["matInput", "", "type", "password", "formControlName", "password", "required", ""]], template: function LoginProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("wildCardButtonOneEvent", function LoginProfileComponent_Template_app_modal_wildCardButtonOneEvent_0_listener($event) { return ctx.authLogin($event); })("wildCardButtonTwoEvent", function LoginProfileComponent_Template_app_modal_wildCardButtonTwoEvent_0_listener() { return ctx.openCreateProfileModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "app-panel-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, LoginProfileComponent_mat_error_10_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, LoginProfileComponent_mat_error_11_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, LoginProfileComponent_mat_error_17_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("loginSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", "loginModal")("wildCardButtonOne", "Login")("wildCardButtonTwo", "Create Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loginForm.get("email").hasError("required") && (ctx.loginForm.get("email").dirty || ctx.loginForm.get("email").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loginForm.get("email").hasError("email") && (ctx.loginForm.get("email").dirty || ctx.loginForm.get("email").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loginForm.get("password").hasError("required") && (ctx.loginForm.get("password").dirty || ctx.loginForm.get("password").touched));
    } }, directives: [_common_components_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__.ModalComponent, _common_components_components_panel_panel_panel_component__WEBPACK_IMPORTED_MODULE_4__.PanelComponent, _common_components_components_panel_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_5__.PanelHeaderComponent, _common_components_components_panel_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_6__.PanelBodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6829:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileRoutingModule": () => (/* binding */ ProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _edit_profile_account_edit_profile_account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile-account/edit-profile-account.component */ 5659);
/* harmony import */ var _create_profile_account_create_profile_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-profile-account/create-profile-account.component */ 2450);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ 1480);
/* harmony import */ var _profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-settings/profile-settings.component */ 4429);
/* harmony import */ var _drinks_profile_drinks_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drinks-profile/drinks-profile.component */ 7123);
/* harmony import */ var _utilities_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/services/auth.service */ 4898);
/* harmony import */ var _login_profile_login_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-profile/login-profile.component */ 5455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);










const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'edit',
        component: _edit_profile_account_edit_profile_account_component__WEBPACK_IMPORTED_MODULE_0__.EditProfileAccountComponent,
        canActivate: [_utilities_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService]
    },
    {
        path: 'create',
        component: _create_profile_account_create_profile_account_component__WEBPACK_IMPORTED_MODULE_1__.CreateProfileAccountComponent
    },
    {
        path: 'acct',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent,
        canActivate: [_utilities_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService]
    },
    {
        path: 'settings',
        component: _profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_3__.ProfileSettingsComponent,
        canActivate: [_utilities_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService]
    },
    {
        path: 'drinks-profile',
        component: _drinks_profile_drinks_profile_component__WEBPACK_IMPORTED_MODULE_4__.DrinksProfileComponent,
        canActivate: [_utilities_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService]
    },
    {
        path: 'login',
        component: _login_profile_login_profile_component__WEBPACK_IMPORTED_MODULE_6__.LoginProfileComponent
    }
];
class ProfileRoutingModule {
}
ProfileRoutingModule.ɵfac = function ProfileRoutingModule_Factory(t) { return new (t || ProfileRoutingModule)(); };
ProfileRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ProfileRoutingModule });
ProfileRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 4429:
/*!************************************************************************!*\
  !*** ./src/app/profile/profile-settings/profile-settings.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileSettingsComponent": () => (/* binding */ ProfileSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ProfileSettingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileSettingsComponent.ɵfac = function ProfileSettingsComponent_Factory(t) { return new (t || ProfileSettingsComponent)(); };
ProfileSettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileSettingsComponent, selectors: [["app-profile-settings"]], decls: 2, vars: 0, template: function ProfileSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile-settings works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 6829);
/* harmony import */ var _profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-settings/profile-settings.component */ 4429);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ 1480);
/* harmony import */ var _create_profile_account_create_profile_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-profile-account/create-profile-account.component */ 2450);
/* harmony import */ var _edit_profile_account_edit_profile_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-profile-account/edit-profile-account.component */ 5659);
/* harmony import */ var _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common-components/common-components.module */ 754);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _drinks_profile_drinks_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drinks-profile/drinks-profile.component */ 7123);
/* harmony import */ var _login_profile_login_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-profile/login-profile.component */ 5455);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);













class ProfileModule {
}
ProfileModule.ɵfac = function ProfileModule_Factory(t) { return new (t || ProfileModule)(); };
ProfileModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileRoutingModule,
            _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_5__.CommonComponentsModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_1__.ProfileSettingsComponent, _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent, _create_profile_account_create_profile_account_component__WEBPACK_IMPORTED_MODULE_3__.CreateProfileAccountComponent, _edit_profile_account_edit_profile_account_component__WEBPACK_IMPORTED_MODULE_4__.EditProfileAccountComponent, _drinks_profile_drinks_profile_component__WEBPACK_IMPORTED_MODULE_6__.DrinksProfileComponent, _login_profile_login_profile_component__WEBPACK_IMPORTED_MODULE_7__.LoginProfileComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileRoutingModule,
        _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_5__.CommonComponentsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule] }); })();


/***/ }),

/***/ 1480:
/*!******************************************************!*\
  !*** ./src/app/profile/profile/profile.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _store_reducers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/reducers/index */ 8006);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6888);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _common_components_components_panel_panel_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common-components/components/panel/panel/panel.component */ 338);
/* harmony import */ var _common_components_components_panel_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common-components/components/panel/panel-header/panel-header.component */ 6865);
/* harmony import */ var _common_components_components_panel_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common-components/components/panel/panel-body/panel-body.component */ 293);
/* harmony import */ var _edit_profile_account_edit_profile_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-profile-account/edit-profile-account.component */ 5659);









function ProfileComponent_app_panel_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "app-panel-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-edit-profile-account");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class ProfileComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.getUserProfile();
    }
    getUserProfile() {
        this.store.select(_store_reducers_index__WEBPACK_IMPORTED_MODULE_0__.getAuthUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.skipWhile)((user) => !user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe((profile) => {
            this.profile = profile;
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ProfileComponent_app_panel_0_Template, 6, 0, "app-panel", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.profile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _common_components_components_panel_panel_panel_component__WEBPACK_IMPORTED_MODULE_1__.PanelComponent, _common_components_components_panel_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_2__.PanelHeaderComponent, _common_components_components_panel_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_3__.PanelBodyComponent, _edit_profile_account_edit_profile_account_component__WEBPACK_IMPORTED_MODULE_4__.EditProfileAccountComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 193:
/*!*****************************************************************!*\
  !*** ./src/app/search-results/search-results-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultsRoutingModule": () => (/* binding */ SearchResultsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-results/search-results.component */ 728);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    {
        path: '',
        component: _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_0__.SearchResultsComponent
    }
];
class SearchResultsRoutingModule {
}
SearchResultsRoutingModule.ɵfac = function SearchResultsRoutingModule_Factory(t) { return new (t || SearchResultsRoutingModule)(); };
SearchResultsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SearchResultsRoutingModule });
SearchResultsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SearchResultsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3714:
/*!*********************************************************!*\
  !*** ./src/app/search-results/search-results.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultsModule": () => (/* binding */ SearchResultsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _search_results_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-results-routing.module */ 193);
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-results/search-results.component */ 728);
/* harmony import */ var _drink_drink_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drink/drink.module */ 7941);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common-components/common-components.module */ 754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);








class SearchResultsModule {
}
SearchResultsModule.ɵfac = function SearchResultsModule_Factory(t) { return new (t || SearchResultsModule)(); };
SearchResultsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SearchResultsModule });
SearchResultsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _search_results_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchResultsRoutingModule,
            _drink_drink_module__WEBPACK_IMPORTED_MODULE_2__.DrinkModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
            _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_3__.CommonComponentsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SearchResultsModule, { declarations: [_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_1__.SearchResultsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _search_results_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchResultsRoutingModule,
        _drink_drink_module__WEBPACK_IMPORTED_MODULE_2__.DrinkModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_3__.CommonComponentsModule] }); })();


/***/ }),

/***/ 728:
/*!***************************************************************************!*\
  !*** ./src/app/search-results/search-results/search-results.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultsComponent": () => (/* binding */ SearchResultsComponent)
/* harmony export */ });
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/reducers */ 8006);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6888);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _store_actions_search_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions/search.actions */ 3710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var _common_components_components_panel_panel_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common-components/components/panel/panel/panel.component */ 338);
/* harmony import */ var _common_components_components_panel_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common-components/components/panel/panel-header/panel-header.component */ 6865);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _common_components_components_panel_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common-components/components/panel/panel-body/panel-body.component */ 293);
/* harmony import */ var _drink_drink_view_drink_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../drink/drink-view/drink-view.component */ 6544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _common_components_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common-components/components/loading-spinner/loading-spinner.component */ 8541);













function SearchResultsComponent_app_panel_body_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-drink-view", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const drink_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("drink", drink_r4);
} }
function SearchResultsComponent_app_panel_body_3_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SearchResultsComponent_app_panel_body_3_div_3_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r7.getSearchPaginationPage(ctx_r7.currentPage - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "navigate_before");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SearchResultsComponent_app_panel_body_3_div_3_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SearchResultsComponent_app_panel_body_3_div_3_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r9.getSearchPaginationPage(ctx_r9.currentPage + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "navigate_next");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SearchResultsComponent_app_panel_body_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SearchResultsComponent_app_panel_body_3_div_3_button_1_Template, 3, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, SearchResultsComponent_app_panel_body_3_div_3_button_5_Template, 3, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.searchResults == null ? null : ctx_r3.searchResults.search == null ? null : ctx_r3.searchResults.search.prev_page_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.searchResults == null ? null : ctx_r3.searchResults.search == null ? null : ctx_r3.searchResults.search.next_page_url);
} }
function SearchResultsComponent_app_panel_body_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-panel-body", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SearchResultsComponent_app_panel_body_3_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, SearchResultsComponent_app_panel_body_3_div_3_Template, 6, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.searchResults.search.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
} }
function SearchResultsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class SearchResultsComponent {
    constructor(store) {
        this.store = store;
        this.loading = true;
    }
    ngOnInit() {
        this.getSearchResults();
    }
    getSearchPaginationPage(page) {
        this.loading = true;
        this.store.dispatch(_store_actions_search_actions__WEBPACK_IMPORTED_MODULE_1__.search({ payload: this.searchResults.prevSearchCriteria, page: page }));
        this.getSearchResults();
    }
    getSearchResults() {
        this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_0__.getSearchResults).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.skipWhile)((state) => state.searching === true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.skipWhile)((state) => state.searchSuccessful !== true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe((result) => {
            this.loading = false;
            this.searchResults = result;
        });
    }
    get currentPage() {
        return this.searchResults.search.current_page;
    }
}
SearchResultsComponent.ɵfac = function SearchResultsComponent_Factory(t) { return new (t || SearchResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store)); };
SearchResultsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: SearchResultsComponent, selectors: [["app-search-results"]], decls: 5, vars: 2, consts: [["class", "search-results-body", 4, "ngIf"], ["class", "columns is-centered", 4, "ngIf"], [1, "search-results-body"], ["class", "column", 4, "ngFor", "ngForOf"], ["class", "centered-text", "style", "  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 0 -3rem;", 4, "ngIf"], [1, "column"], [3, "drink"], [1, "centered-text", 2, "display", "flex", "flex-direction", "row", "justify-content", "center", "flex-wrap", "wrap", "margin", "0 -3rem"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "disabled", ""], [2, "color", "black"], ["mat-icon-button", "", 3, "click"], [1, "columns", "is-centered"]], template: function SearchResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Search Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, SearchResultsComponent_app_panel_body_3_Template, 4, 2, "app-panel-body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, SearchResultsComponent_div_4_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_common_components_components_panel_panel_panel_component__WEBPACK_IMPORTED_MODULE_2__.PanelComponent, _common_components_components_panel_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_3__.PanelHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _common_components_components_panel_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_4__.PanelBodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _drink_drink_view_drink_view_component__WEBPACK_IMPORTED_MODULE_5__.DrinkViewComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _common_components_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__.LoadingSpinnerComponent], styles: [".search-results-panel[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJzZWFyY2gtcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtcmVzdWx0cy1wYW5lbCB7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 6338:
/*!***********************************************!*\
  !*** ./src/app/store/actions/auth.actions.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProfileAction": () => (/* binding */ createProfileAction),
/* harmony export */   "createProfileSuccessfulAction": () => (/* binding */ createProfileSuccessfulAction),
/* harmony export */   "createProfileFailedAction": () => (/* binding */ createProfileFailedAction),
/* harmony export */   "loginProfileAction": () => (/* binding */ loginProfileAction),
/* harmony export */   "loginProfileSuccessfulAction": () => (/* binding */ loginProfileSuccessfulAction),
/* harmony export */   "loginProfileFailedAction": () => (/* binding */ loginProfileFailedAction),
/* harmony export */   "editProfileAction": () => (/* binding */ editProfileAction),
/* harmony export */   "editProfileSuccessfulAction": () => (/* binding */ editProfileSuccessfulAction),
/* harmony export */   "editProfileFailedAction": () => (/* binding */ editProfileFailedAction)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6710);

const createProfileAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile] create profile account', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const createProfileSuccessfulAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile] create profile account successful', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const createProfileFailedAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile] create profile account failed', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loginProfileAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile] login profile account', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loginProfileSuccessfulAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile] login profile account successful', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loginProfileFailedAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile] login profile account failed', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const editProfileAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile] edit profile account', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const editProfileSuccessfulAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile] edit profile account successful', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const editProfileFailedAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile] edit profile account failed', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 3710:
/*!*************************************************!*\
  !*** ./src/app/store/actions/search.actions.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupSearchInformation": () => (/* binding */ setupSearchInformation),
/* harmony export */   "setupSearchInformationSuccessful": () => (/* binding */ setupSearchInformationSuccessful),
/* harmony export */   "setupSearchInformationFailed": () => (/* binding */ setupSearchInformationFailed),
/* harmony export */   "search": () => (/* binding */ search),
/* harmony export */   "searchSuccessful": () => (/* binding */ searchSuccessful),
/* harmony export */   "searchFailed": () => (/* binding */ searchFailed)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6710);

const setupSearchInformation = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Search] set up search information');
const setupSearchInformationSuccessful = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Search] set up search information successful', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setupSearchInformationFailed = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Search] set up search information failed', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const search = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Search] search for params', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const searchSuccessful = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Search] search for params successful', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const searchFailed = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Search] search for params failed', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 3172:
/*!***********************************************!*\
  !*** ./src/app/store/effects/auth.effects.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "profileEffects": () => (/* binding */ profileEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 5322);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/auth.actions */ 6338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _utilities_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/services/auth.service */ 4898);







class profileEffects {
    constructor(actions$, authService) {
        this.actions$ = actions$;
        this.authService = authService;
        this.createProfile$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.createProfileAction.type), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)((profile) => this.authService.create(profile.payload)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.createProfileSuccessfulAction({ payload: response })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.createProfileFailedAction({ payload: error })))));
        this.loadProfile$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.loginProfileAction.type), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)((profile) => this.authService.login(profile.payload)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.loginProfileSuccessfulAction({ payload: response })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.loginProfileFailedAction({ payload: error })))));
        this.editProfile$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.editProfileAction.type), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)((profile) => this.authService.update(profile.payload)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.editProfileSuccessfulAction({ payload: response })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.editProfileFailedAction({ payload: error })))));
    }
}
profileEffects.ɵfac = function profileEffects_Factory(t) { return new (t || profileEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_utilities_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
profileEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: profileEffects, factory: profileEffects.ɵfac });


/***/ }),

/***/ 5461:
/*!*************************************************!*\
  !*** ./src/app/store/effects/search.effects.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchEffects": () => (/* binding */ searchEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 5322);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var _actions_search_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/search.actions */ 3710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _utilities_services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/services/search.service */ 6582);







class searchEffects {
    constructor(actions$, searchService) {
        this.actions$ = actions$;
        this.searchService = searchService;
        this.getSearchInfo$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_search_actions__WEBPACK_IMPORTED_MODULE_0__.setupSearchInformation.type), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)((action) => this.searchService.setUpSearch()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => _actions_search_actions__WEBPACK_IMPORTED_MODULE_0__.setupSearchInformationSuccessful({ payload: response })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_actions_search_actions__WEBPACK_IMPORTED_MODULE_0__.setupSearchInformationFailed({ error })))));
        this.search$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_search_actions__WEBPACK_IMPORTED_MODULE_0__.search.type), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)((params) => this.searchService.search(params.payload, (params === null || params === void 0 ? void 0 : params.page) || null)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => _actions_search_actions__WEBPACK_IMPORTED_MODULE_0__.searchSuccessful({ payload: response })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_actions_search_actions__WEBPACK_IMPORTED_MODULE_0__.searchFailed({ error })))));
    }
}
searchEffects.ɵfac = function searchEffects_Factory(t) { return new (t || searchEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_utilities_services_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService)); };
searchEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: searchEffects, factory: searchEffects.ɵfac });


/***/ }),

/***/ 3943:
/*!************************************************!*\
  !*** ./src/app/store/reducers/auth.reducer.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authFeatureKey": () => (/* binding */ authFeatureKey),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "getAuthUser": () => (/* binding */ getAuthUser),
/* harmony export */   "getAuthLoginSuccess": () => (/* binding */ getAuthLoginSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/auth.actions */ 6338);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage */ 5392);
var _a;



const authFeatureKey = 'auth';
const initialState = {
    loading: false,
    createProfileSuccessful: null,
    createProfileFailed: null,
    loginProfileSuccessful: null,
    loginProfileFailed: null,
    loadProfileSuccessful: null,
    loadProfileFailed: null,
    editProfileSuccessful: null,
    editProfileFailed: null,
    profile: (_a = _storage__WEBPACK_IMPORTED_MODULE_1__.getItem(authFeatureKey).profile) !== null && _a !== void 0 ? _a : null,
};
const searchReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.createProfileAction, (state, action) => (Object.assign(Object.assign({}, state), { loading: true }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.createProfileSuccessfulAction, (state, action) => (Object.assign(Object.assign({}, state), { loading: false, createProfileSuccessful: true, profile: action.payload }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.createProfileFailedAction, (state, action) => (Object.assign(Object.assign({}, state), { loading: false, createProfileSuccessful: false, createProfileFailed: action.payload }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.loginProfileAction, (state, action) => (Object.assign(Object.assign({}, state), { loading: true }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.loginProfileSuccessfulAction, (state, action) => (Object.assign(Object.assign({}, state), { loading: false, loginProfileSuccessful: true, profile: action.payload }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.loginProfileFailedAction, (state, action) => (Object.assign(Object.assign({}, state), { loading: false, loginProfileSuccessful: false, loginProfileFailed: action.payload }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.editProfileAction, (state, action) => (Object.assign(Object.assign({}, state), { loading: true }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.editProfileSuccessfulAction, (state, action) => (Object.assign(Object.assign({}, state), { loading: false, editProfileSuccessful: true, profile: action.payload }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.editProfileFailedAction, (state, action) => (Object.assign(Object.assign({}, state), { loading: false, editProfileSuccessful: false, editProfileFailed: action.payload }))));
function reducer(state, action) {
    return searchReducer(state, action);
}
const getAuthUser = (state) => state.profile;
const getAuthLoginSuccess = (state) => state.loginProfileSuccessful;


/***/ }),

/***/ 8006:
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducers": () => (/* binding */ reducers),
/* harmony export */   "localStorageSyncReducer": () => (/* binding */ localStorageSyncReducer),
/* harmony export */   "search": () => (/* binding */ search),
/* harmony export */   "getSearchInfo": () => (/* binding */ getSearchInfo),
/* harmony export */   "getSearchResults": () => (/* binding */ getSearchResults),
/* harmony export */   "auth": () => (/* binding */ auth),
/* harmony export */   "getAuthUser": () => (/* binding */ getAuthUser),
/* harmony export */   "getAuthLoginSuccess": () => (/* binding */ getAuthLoginSuccess),
/* harmony export */   "metaReducers": () => (/* binding */ metaReducers)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngrx-store-localstorage */ 1019);
/* harmony import */ var _search_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.reducer */ 904);
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.reducer */ 3943);





const reducers = {
    [_search_reducer__WEBPACK_IMPORTED_MODULE_1__.searchFeatureKey]: _search_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer,
    [_auth_reducer__WEBPACK_IMPORTED_MODULE_2__.authFeatureKey]: _auth_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer
};
const reducerKeys = [_search_reducer__WEBPACK_IMPORTED_MODULE_1__.searchFeatureKey, _auth_reducer__WEBPACK_IMPORTED_MODULE_2__.authFeatureKey];
function localStorageSyncReducer(reducer) {
    return (0,ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_3__.localStorageSync)({ keys: reducerKeys })(reducer);
}
const search = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.createFeatureSelector)(_search_reducer__WEBPACK_IMPORTED_MODULE_1__.searchFeatureKey);
const getSearchInfo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.createSelector)(search, _search_reducer__WEBPACK_IMPORTED_MODULE_1__.getSearchInfo);
const getSearchResults = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.createSelector)(search, _search_reducer__WEBPACK_IMPORTED_MODULE_1__.getSearchResults);
const auth = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.createFeatureSelector)(_auth_reducer__WEBPACK_IMPORTED_MODULE_2__.authFeatureKey);
const getAuthUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.createSelector)(auth, _auth_reducer__WEBPACK_IMPORTED_MODULE_2__.getAuthUser);
const getAuthLoginSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.createSelector)(auth, _auth_reducer__WEBPACK_IMPORTED_MODULE_2__.getAuthLoginSuccess);
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? [localStorageSyncReducer] : [localStorageSyncReducer];


/***/ }),

/***/ 904:
/*!**************************************************!*\
  !*** ./src/app/store/reducers/search.reducer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchFeatureKey": () => (/* binding */ searchFeatureKey),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "getSearchInfo": () => (/* binding */ getSearchInfo),
/* harmony export */   "getSearchResults": () => (/* binding */ getSearchResults)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var _actions_search_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/search.actions */ 3710);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage */ 5392);



const searchFeatureKey = 'search';
const initialState = {
    loading: _storage__WEBPACK_IMPORTED_MODULE_1__.getItem(searchFeatureKey).loading,
    searching: _storage__WEBPACK_IMPORTED_MODULE_1__.getItem(searchFeatureKey).searching,
    searchInfo: _storage__WEBPACK_IMPORTED_MODULE_1__.getItem(searchFeatureKey).searchInfo || null,
    searchInfoSuccessful: _storage__WEBPACK_IMPORTED_MODULE_1__.getItem(searchFeatureKey).searchInfoSuccessful,
    searchInfoFailed: _storage__WEBPACK_IMPORTED_MODULE_1__.getItem(searchFeatureKey).searchInfoFailed || null,
    search: _storage__WEBPACK_IMPORTED_MODULE_1__.getItem(searchFeatureKey).search || null,
    searchSuccessful: _storage__WEBPACK_IMPORTED_MODULE_1__.getItem(searchFeatureKey).searchSuccessful,
    searchFailed: _storage__WEBPACK_IMPORTED_MODULE_1__.getItem(searchFeatureKey).searchFailed || null,
    prevSearchCriteria: _storage__WEBPACK_IMPORTED_MODULE_1__.getItem(searchFeatureKey).prevSearchCriteria || null
};
const searchReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_search_actions__WEBPACK_IMPORTED_MODULE_0__.setupSearchInformation, (state, action) => (Object.assign(Object.assign({}, state), { loading: true }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_search_actions__WEBPACK_IMPORTED_MODULE_0__.setupSearchInformationSuccessful, (state, action) => (Object.assign(Object.assign({}, state), { loading: false, searchInfo: action.payload }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_search_actions__WEBPACK_IMPORTED_MODULE_0__.setupSearchInformationFailed, (state, action) => (Object.assign(Object.assign({}, state), { loading: false, searchInfoFailed: action.error }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_search_actions__WEBPACK_IMPORTED_MODULE_0__.search, (state, action) => (Object.assign(Object.assign({}, state), { searching: true, searchSuccessful: null, prevSearchCriteria: action.payload }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_search_actions__WEBPACK_IMPORTED_MODULE_0__.searchSuccessful, (state, action) => (Object.assign(Object.assign({}, state), { search: action.payload, searching: false, searchSuccessful: true }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_search_actions__WEBPACK_IMPORTED_MODULE_0__.searchFailed, (state, action) => (Object.assign(Object.assign({}, state), { searching: false, searchFailed: action.error, search: action.error }))));
function reducer(state, action) {
    return searchReducer(state, action);
}
const getSearchInfo = (state) => state.searchInfo;
const getSearchResults = (state) => [
    'search',
    'searching',
    'searchSuccessful',
    'searchFailed',
    'prevSearchCriteria',
].reduce((carry, item) => {
    carry[item] = state[item];
    return carry;
}, {});


/***/ }),

/***/ 5392:
/*!**********************************!*\
  !*** ./src/app/store/storage.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getThisState": () => (/* binding */ getThisState),
/* harmony export */   "getItem": () => (/* binding */ getItem),
/* harmony export */   "saveItem": () => (/* binding */ saveItem),
/* harmony export */   "getItemByKey": () => (/* binding */ getItemByKey),
/* harmony export */   "deleteItemByKey": () => (/* binding */ deleteItemByKey),
/* harmony export */   "emptyLocalStorage": () => (/* binding */ emptyLocalStorage),
/* harmony export */   "clearStorage": () => (/* binding */ clearStorage)
/* harmony export */ });
const getThisState = (stateName) => {
    try {
        const serializedState = localStorage.getItem(stateName);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch (err) {
        return undefined;
    }
};
const getItem = (itemName) => {
    const items = getThisState(itemName);
    if (items === undefined) {
        return false;
    }
    else {
        return items;
    }
};
const saveItem = (key, data) => {
    const serializedState = JSON.stringify(data);
    localStorage.setItem(key, serializedState);
};
const getItemByKey = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch (err) {
        return undefined;
    }
};
const deleteItemByKey = (key) => localStorage.setItem(key, null);
const emptyLocalStorage = (reducerkeys) => {
    try {
        if (undefined != reducerkeys && reducerkeys.length > 0) {
            reducerkeys.forEach(key => {
                localStorage.setItem(key, null);
            });
        }
    }
    catch (err) {
        //console.log("ERROR===emptyLocalStorage==>>>")
    }
};
const clearStorage = () => localStorage.clear();


/***/ }),

/***/ 4898:
/*!****************************************************!*\
  !*** ./src/app/utilities/services/auth.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/reducers */ 8006);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _profile_login_profile_login_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../profile/login-profile/login-profile.component */ 5455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 2238);









class AuthService {
    constructor(http, router, store, dialog) {
        this.http = http;
        this.router = router;
        this.store = store;
        this.dialog = dialog;
        this.urlApi = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/auth';
    }
    update(profile) {
        let name = profile.controls.name.value;
        let email = profile.controls.email.value;
        let password = profile.controls.password.value;
        let url = `${this.urlApi}/update`;
        return this.http.get(url, {
            params: {
                name, email, password
            }
        });
    }
    create(profile) {
        let name = profile.controls.name.value;
        let email = profile.controls.email.value;
        let password = profile.controls.password.value;
        let url = `${this.urlApi}/create`;
        return this.http.get(url, {
            params: {
                name, email, password
            }
        });
    }
    login(credentials) {
        let url = `${this.urlApi}/login`;
        return this.http.get(url, {
            params: credentials
        });
    }
    canActivate() {
        this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_1__.getAuthUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(profile => {
            if (profile) {
                return true;
            }
            else {
                this.dialog.open(_profile_login_profile_login_profile_component__WEBPACK_IMPORTED_MODULE_2__.LoginProfileComponent);
                return false;
            }
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6582:
/*!******************************************************!*\
  !*** ./src/app/utilities/services/search.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": () => (/* binding */ SearchService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 6710);





class SearchService {
    constructor(http, router, store) {
        this.http = http;
        this.router = router;
        this.store = store;
        this.urlApi = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/search';
    }
    setUpSearch() {
        let url = `${this.urlApi}/getSearchInfo`;
        return this.http.get(url);
    }
    search(searchParams, page = false) {
        let url = `${this.urlApi}/search`;
        if (page) {
            url = url + '?page=' + page;
        }
        return this.http.get(url, {
            params: {
                searchParams
            }
        });
    }
    pagination(url) {
        return this.http.get(url);
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store)); };
SearchService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://getmesloshed.test/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map