"use strict";var __extends=this&&this.__extends||function(){var e=function(t,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(t,a)};return function(t,a){function __(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(__.prototype=a.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),react_redux_1=require("react-redux"),I18nService_1=require("sabre-ngv-app/app/services/impl/I18nService"),Context_1=require("../Context"),i18n=Context_1.getService(I18nService_1.I18nService),t=i18n.getScopedTranslator("com-cocha-sabre-redapp-posapp-web-module/translations"),Component=function(e){function Component(){return null!==e&&e.apply(this,arguments)||this}return __extends(Component,e),Component.prototype.render=function(){return React.createElement("div",{className:"com-cocha-sabre-redapp-posapp-web-module"},React.createElement("div",{className:"sample-form-container"},React.createElement("div",{className:"popover-wrapper"},React.createElement("div",{className:"navigation tab-custom-pad",style:{maxHeight:"427px"}},React.createElement("ul",{className:"nav nav-pills tabs-left tabs-air"},React.createElement("li",{className:"active"},React.createElement("a",{href:"#perfiles","data-toggle":"tab",className:"tab","aria-expanded":"true"},"Perfiles")),React.createElement("li",{className:""},React.createElement("a",{href:"#tarificacion","data-toggle":"tab",className:"tab","aria-expanded":"false"},"Tarificacion")),React.createElement("li",{className:""},React.createElement("a",{href:"#ingresoFD","data-toggle":"tab",className:"tab","aria-expanded":"false"},"FOID-DOCS")),React.createElement("li",{className:""},React.createElement("a",{href:"#OtrosDatosPax","data-toggle":"tab",className:"tab","aria-expanded":"false"},"Otros Datos Pax")),React.createElement("li",{className:""},React.createElement("a",{href:"#cotizacionSimple","data-toggle":"tab",className:"tab","aria-expanded":"false"},"Cotización Simple")),React.createElement("li",{className:""},React.createElement("a",{href:"#cotizacionMultiple","data-toggle":"tab",className:"tab","aria-expanded":"false"},"Cotización Multiple")),React.createElement("li",{className:""},React.createElement("a",{href:"#mapaAsiento","data-toggle":"tab",className:"tab","aria-expanded":"false"},"Mapa Asiento")),React.createElement("li",{className:""},React.createElement("a",{href:"#remision","data-toggle":"tab",className:"tab","aria-expanded":"false"},"Remision")),React.createElement("li",{className:""},React.createElement("a",{href:"#cambiosInvoluntarios","data-toggle":"tab",className:"tab","aria-expanded":"false"},"Cambios Involuntarios")),React.createElement("li",{className:""},React.createElement("a",{href:"#validacionItinerarios","data-toggle":"tab",className:"tab","aria-expanded":"false"},"Validacion Itinerarios")))),React.createElement("div",{className:"content content-scroll",style:{maxHeight:"427px"}},React.createElement("div",{className:"tab-content"},React.createElement("div",{className:"active tab-pane perfiles",id:"perfiles"},"Perfiles"),React.createElement("div",{className:" tab-pane tarificacion",id:"tarificacion"},React.createElement("ul",{className:"nav nav-tabs",id:"nav-tarificacion",role:"tablist"},React.createElement("li",{className:"nav-item active",role:"presentation"},React.createElement("a",{className:"nav-link",id:"opc-tar-tab","data-toggle":"tab",href:"#opc-tar",role:"tab","aria-controls":"opc-tar","aria-selected":"true","aria-expanded":"false"},"Opciones de Tarificación")),React.createElement("li",{className:"nav-item",role:"presentation"},React.createElement("a",{className:"nav-link",id:"res-tar-tab","data-toggle":"tab",href:"#res-tar",role:"tab","aria-controls":"res-tar","aria-selected":"false"},"Resultados de Tarificación")),React.createElement("li",{className:"nav-item",role:"presentation"},React.createElement("a",{className:"nav-link",id:"pasajero-tab","data-toggle":"tab",href:"#pasajero",role:"tab","aria-controls":"pasajero","aria-selected":"false"},"Pasajeros"))),React.createElement("div",{className:"tab-content",id:"myTabContent",style:{height:"350px",overflow:"scroll",fontSize:"12.5px"}},React.createElement("div",{className:"tab-pane active",id:"opc-tar",role:"tabpanel","aria-labelledby":"opc-tar-tab"},React.createElement("b",null,"Opciones de Tarificación:"),React.createElement("hr",{style:{margin:"0px"}}),"Seleccione una opción de tarificación:",React.createElement("br",null),React.createElement("div",{className:"row"},React.createElement("div",{className:"col-md-6"},React.createElement("select",{className:"form-control"},React.createElement("option",{value:"WP"},"Tarifar el itinerario actual (WP)"),React.createElement("option",{value:"WPNCB"},"Reservar la tarifa más baja disponible (WPNCB) : Solo creación"),React.createElement("option",{value:"WPNC"},"Mostrar tarifa más baja (WPNC): Sin Reservar"),React.createElement("option",{value:"WPNCS"},"Mostrar la tarifa más baja sin considerar disponibilidad (WPNCS)"),React.createElement("option",{value:"WPNI"},"Buscar otras tarifas economicas (WPNI)"),React.createElement("option",{value:"WPRW"},"Tarifar itinerario alrededor del mundo (WPRW)"),React.createElement("option",{value:"WPNCB¥RW"},"Reservar tarifa más baja disponible alrededor del mundo (WPNCB¥RW)"),React.createElement("option",{value:"PQM"},"Retener tarifa manualmente (PQM)"))),React.createElement("div",{className:"col-md-6",style:{display:"flex"}},React.createElement("label",{style:{padding:"5px 0px"}},"Familia Tarifaria:"),React.createElement("input",{type:"text",className:"form-control",style:{maxWidth:"150px",margin:"0px 5px"}}),React.createElement("input",{type:"checkbox",id:"MultiplesFamilias",style:{margin:"7px 5px"}}),React.createElement("label",{htmlFor:"MultiplesFamilias",style:{padding:"5px 0px"}},"Múltiples Familias"))),React.createElement("div",{className:"modal fade",role:"dialog","aria-labelledby":"gridSystemModalLabel",id:"exampleModal"},React.createElement("div",{className:"modal-dialog",role:"document"},React.createElement("div",{className:"modal-content"},React.createElement("div",{className:"modal-header"},React.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},React.createElement("span",{"aria-hidden":"true"},"×")),React.createElement("h5",{className:"modal-title",id:"gridSystemModalLabel"},"Familias Tarifarias")),React.createElement("div",{className:"modal-body"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-md-2"},React.createElement("input",{type:"checkbox",name:"",id:""})),React.createElement("div",{className:"col-md-3"},React.createElement("select",{name:"",id:"",className:"form-control"},React.createElement("option",{value:""}),React.createElement("option",{value:""},"1"),React.createElement("option",{value:""},"2"))),React.createElement("div",{className:"col-md-3"},React.createElement("select",{name:"",id:"",className:"form-control"},React.createElement("option",{value:""}),React.createElement("option",{value:""},"1"),React.createElement("option",{value:""},"2"))),React.createElement("div",{className:"col-md-4"},React.createElement("input",{type:"text",className:"form-control"})),React.createElement("div",{className:"col-md-2"},React.createElement("input",{type:"checkbox",name:"",id:""})),React.createElement("div",{className:"col-md-3"},React.createElement("select",{name:"",id:"",className:"form-control"},React.createElement("option",{value:""}),React.createElement("option",{value:""},"1"),React.createElement("option",{value:""},"2"))),React.createElement("div",{className:"col-md-3"},React.createElement("select",{name:"",id:"",className:"form-control"},React.createElement("option",{value:""}),React.createElement("option",{value:""},"1"),React.createElement("option",{value:""},"2"))),React.createElement("div",{className:"col-md-4"},React.createElement("input",{type:"text",className:"form-control"})),React.createElement("div",{className:"col-md-2"},React.createElement("input",{type:"checkbox",name:"",id:""})),React.createElement("div",{className:"col-md-3"},React.createElement("select",{name:"",id:"",className:"form-control"},React.createElement("option",{value:""}),React.createElement("option",{value:""},"1"),React.createElement("option",{value:""},"2"))),React.createElement("div",{className:"col-md-3"},React.createElement("select",{name:"",id:"",className:"form-control"},React.createElement("option",{value:""}),React.createElement("option",{value:""},"1"),React.createElement("option",{value:""},"2"))),React.createElement("div",{className:"col-md-4"},React.createElement("input",{type:"text",className:"form-control"})),React.createElement("div",{className:"col-md-2"},React.createElement("input",{type:"checkbox",name:"",id:""})),React.createElement("div",{className:"col-md-3"},React.createElement("select",{name:"",id:"",className:"form-control"},React.createElement("option",{value:""}),React.createElement("option",{value:""},"1"),React.createElement("option",{value:""},"2"))),React.createElement("div",{className:"col-md-3"},React.createElement("select",{name:"",id:"",className:"form-control"},React.createElement("option",{value:""}),React.createElement("option",{value:""},"1"),React.createElement("option",{value:""},"2"))),React.createElement("div",{className:"col-md-4"},React.createElement("input",{type:"text",className:"form-control"})),React.createElement("div",{className:"col-md-2"},React.createElement("input",{type:"checkbox",name:"",id:""})),React.createElement("div",{className:"col-md-3"},React.createElement("select",{name:"",id:"",className:"form-control"},React.createElement("option",{value:""}),React.createElement("option",{value:""},"1"),React.createElement("option",{value:""},"2"))),React.createElement("div",{className:"col-md-3"},React.createElement("select",{name:"",id:"",className:"form-control"},React.createElement("option",{value:""}),React.createElement("option",{value:""},"1"),React.createElement("option",{value:""},"2"))),React.createElement("div",{className:"col-md-4"},React.createElement("input",{type:"text",className:"form-control"})),React.createElement("div",{className:"col-md-2"},React.createElement("input",{type:"checkbox",name:"",id:""})),React.createElement("div",{className:"col-md-3"},React.createElement("select",{name:"",id:"",className:"form-control"},React.createElement("option",{value:""}),React.createElement("option",{value:""},"1"),React.createElement("option",{value:""},"2"))),React.createElement("div",{className:"col-md-3"},React.createElement("select",{name:"",id:"",className:"form-control"},React.createElement("option",{value:""}),React.createElement("option",{value:""},"1"),React.createElement("option",{value:""},"2"))),React.createElement("div",{className:"col-md-4"},React.createElement("input",{type:"text",className:"form-control"})))),React.createElement("div",{className:"modal-footer"},React.createElement("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Aceptar"),React.createElement("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Salir"))))),React.createElement("div",{className:"row"},React.createElement("div",{className:"col-md-3"},React.createElement("label",{style:{padding:"5px 0px"}},"Opción especial de tarificación:")),React.createElement("div",{className:"col-md-3"},React.createElement("select",{className:"form-control"},React.createElement("option",{value:""},"Ninguno"),React.createElement("option",{value:""},"Comando 3.5 o 3.75"),React.createElement("option",{value:""},"Precio de tarifa negociada(instantánea)"))),React.createElement("div",{className:"col-md-3"},React.createElement("label",{style:{padding:"5px 0px"}},"Tipo de Tarifa:")),React.createElement("div",{className:"col-md-3"},React.createElement("select",{className:"form-control"},React.createElement("option",{value:""},"Ninguno"),React.createElement("option",{value:"NL"},"NL - Tarifa normal"),React.createElement("option",{value:"EX"},"EX - Tarifa de excursión"),React.createElement("option",{value:"PV"},"PV - Tarifa privada"),React.createElement("option",{value:"PL"},"PL - Tarifa pública"),React.createElement("option",{value:"XO"},"XO - Tipo de pasajero especificado"),React.createElement("option",{value:"XM"},"XM - Lowest no-match Fare(upto 24) on Alternate RBD"),React.createElement("option",{value:"XC"},"XC - Corporate Fare Pricing")))),React.createElement("div",{className:"row"},React.createElement("div",{className:"col-md-3"},React.createElement("label",{style:{padding:"5px 0px"}},"Tipo de selección de segmentos:")),React.createElement("div",{className:"col-md-3"},React.createElement("select",{className:"form-control"},React.createElement("option",{value:""},"Automática"),React.createElement("option",{value:""},"Manual")))),React.createElement("div",{className:"panel panel-default"},React.createElement("div",{className:"panel-heading"},"Selección de segmentos Tipos de pasajeros Opciones adicionales"),React.createElement("table",{className:"table table-hover"},React.createElement("tbody",null,React.createElement("tr",null,React.createElement("th",{scope:"row"},"1"),React.createElement("td",null,"LA"),React.createElement("td",null,"500"),React.createElement("td",null,"V"),React.createElement("td",null,"10APR"),React.createElement("td",null,"SCLMIA"),React.createElement("td",null,"SS1"),React.createElement("td",null,"2320"),React.createElement("td",null,"0755"),React.createElement("td",null,"11APR 7 /DCLA/E")),React.createElement("tr",null,React.createElement("th",{scope:"row"},"2"),React.createElement("td",null,"LA"),React.createElement("td",null,"501"),React.createElement("td",null,"V"),React.createElement("td",null,"20APR"),React.createElement("td",null,"MIASCL"),React.createElement("td",null,"SS1"),React.createElement("td",null,"2300"),React.createElement("td",null,"0720"),React.createElement("td",null,"21APR 3 /DCLA/E"))))),React.createElement("div",{className:"row"},React.createElement("div",{className:"col-lg-4"},React.createElement("div",{className:"col-lg-12",style:{display:"flex",justifyContent:"space-between",marginTop:"5px"}},React.createElement("label",{htmlFor:"Nemo"},React.createElement("input",{type:"checkbox",id:"Nemo"})," Nemo"),React.createElement("input",{type:"text",id:"InputNemo",style:{width:"100px"}})),React.createElement("div",{className:"col-lg-12",style:{display:"flex",justifyContent:"space-between",marginTop:"5px"}},React.createElement("label",{htmlFor:"AccountCode"},React.createElement("input",{type:"checkbox",id:"AccountCode"})," Account codes"),React.createElement("input",{type:"text",id:"InputAccountCode",style:{width:"100px"}})),React.createElement("div",{className:"col-lg-12",style:{display:"flex",justifyContent:"space-between",marginTop:"5px"}},React.createElement("label",{htmlFor:"FechaPasada"},React.createElement("input",{type:"checkbox",id:"FechaPasada"})," Fecha Pasada"),React.createElement("input",{type:"text",id:"InputFechaPasada",style:{width:"100px"}}))),React.createElement("div",{className:"col-lg-4"},React.createElement("div",{className:"col-lg-12",style:{display:"flex",justifyContent:"space-between",marginTop:"5px"}},React.createElement("label",{htmlFor:"ObtenerFee"},React.createElement("input",{type:"checkbox",id:"ObtenerFee"})," Obtener Fee")),React.createElement("div",{className:"col-lg-12",style:{display:"flex",justifyContent:"space-between",marginTop:"5px"}},React.createElement("label",{htmlFor:"CorporateId"},React.createElement("input",{type:"checkbox",id:"CorporateId"})," Corporate Id"),React.createElement("input",{type:"text",id:"InputCorporateId",style:{width:"100px"}})),React.createElement("div",{className:"col-lg-12",style:{display:"flex",justifyContent:"space-between",marginTop:"5px"}},React.createElement("label",{htmlFor:"TourCode"},React.createElement("input",{type:"checkbox",id:"TourCode"})," TourCode Especial"),React.createElement("input",{type:"text",id:"InputTourCode",style:{width:"100px"}}))),React.createElement("div",{className:"col-lg-4"},React.createElement("div",{className:"col-lg-12",style:{display:"flex",justifyContent:"space-between",marginTop:"5px"}},React.createElement("label",{htmlFor:"Moneda"},React.createElement("input",{type:"checkbox",id:"Moneda"})," Moneda"),React.createElement("label",{htmlFor:"Moneda1"},React.createElement("input",{type:"radio",name:"InputMoneda",id:"Moneda1",value:"USD",checked:!0}),"USD"),React.createElement("label",{htmlFor:"Moneda2"},React.createElement("input",{type:"radio",name:"InputMoneda",id:"Moneda2",value:""}),"Otra")),React.createElement("div",{className:"col-lg-12",style:{display:"flex",justifyContent:"space-between",marginTop:"5px"}},React.createElement("label",{htmlFor:"PlacaEmisora"},React.createElement("input",{type:"checkbox",id:"PlacaEmisora"})," Placa Emisora"),React.createElement("input",{type:"text",id:"InputPlacaEmisora",style:{width:"100px"}})),React.createElement("div",{className:"col-lg-12",style:{display:"flex",justifyContent:"space-between",marginTop:"5px"}},React.createElement("label",{htmlFor:"OmitirNeta"},React.createElement("input",{type:"checkbox",id:"OmitirNeta"})," Omitir Neta")))),React.createElement("div",{className:"row",style:{marginTop:"5px"}},React.createElement("div",{className:"col-md-6"}),React.createElement("div",{className:"col-md-3"},React.createElement("button",{type:"button",className:"btn btn-info",style:{width:"100%",fontSize:"11px"}},"Eliminar")),React.createElement("div",{className:"col-md-3"},React.createElement("button",{type:"button",className:"btn btn-info",style:{width:"100%",fontSize:"11px"}},"Limpiar")))),React.createElement("div",{className:"tab-pane fade",id:"res-tar",role:"tabpanel","aria-labelledby":"res-tar-tab"},React.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},React.createElement("button",{className:"btn btn-success",style:{fontSize:"11px"}},"Sol. Descuento")),React.createElement("table",{className:"table table-hover"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",{scope:"col"},"Pasajeros"),React.createElement("th",{scope:"col"},"Aerolínea"),React.createElement("th",{scope:"col"},"Código de tarifa"),React.createElement("th",{scope:"col"},"Tarifa Base"),React.createElement("th",{scope:"col"},"Impuestos"),React.createElement("th",{scope:"col"},"Total Tarifa"),React.createElement("th",{scope:"col"},"Moneda"),React.createElement("th",{scope:"col"},"Serv. Agencia"),React.createElement("th",{scope:"col"},"Total General"))),React.createElement("tbody",null,React.createElement("tr",null,React.createElement("th",{scope:"row"},"1 ADT"),React.createElement("td",null,"LA"),React.createElement("td",null,"ALWSLHWB/ALXSLHWB"),React.createElement("td",null,"352.00"),React.createElement("td",null,"90.25"),React.createElement("td",null,"442.25"),React.createElement("td",null,"USD"),React.createElement("td",null),React.createElement("td",null,"442.25")),React.createElement("tr",null,React.createElement("td",{colSpan:7}),React.createElement("td",null,"Total:"),React.createElement("td",null,"442.25")))),React.createElement("table",{className:"table table-hover"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",{scope:"col",colSpan:2},"Tarifa grabada de pax"),React.createElement("th",{scope:"col"},"AL"),React.createElement("th",{scope:"col",colSpan:2},"Tarifa base"),React.createElement("th",{scope:"col",colSpan:2},"Impuestos"),React.createElement("th",{scope:"col"},"Total"))),React.createElement("tbody",null,React.createElement("tr",null,React.createElement("th",{scope:"row"},"1"),React.createElement("td",null,"1 ADT"),React.createElement("td",null,"LA"),React.createElement("td",{colSpan:2},"Total de tarifa base:"),React.createElement("td",null,"352.00"),React.createElement("td",null,"Total de impuestos:"),React.createElement("td",null,"90.25"),React.createElement("td",null,"442.25")),React.createElement("tr",null,React.createElement("td",{colSpan:3}),React.createElement("td",null,"SCLMIA"),React.createElement("td",null,"Precio por segmento:"),React.createElement("td",null,"188.50"),React.createElement("td",null,"ZQ"),React.createElement("td",null,"25.00"),React.createElement("td",null)),React.createElement("tr",null,React.createElement("td",{colSpan:3}),React.createElement("td",null,"MIASCL"),React.createElement("td",null,"Precio por segmento:"),React.createElement("td",null,"163.50"),React.createElement("td",null,"US"),React.createElement("td",null,"38.20"),React.createElement("td",null)))),React.createElement("p",null,"Línea de cálculo: Seleccione un PQ"),React.createElement("textarea",{name:"",id:"",className:"form-control",rows:3}),React.createElement("br",null),React.createElement("div",{className:"panel panel-info",style:{marginBottom:"10px"}},React.createElement("div",{className:"panel-heading"},React.createElement("h5",{className:"panel-title",style:{color:"black",fontSize:"11px"}},"Último día de compra: ",React.createElement("b",null,"13 JAN 2021/23:59")))),React.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},React.createElement("b",null,"Origen/Destini/Clases:"),React.createElement("b",null,"Convenio:")),React.createElement("div",{className:"row"},React.createElement("div",{className:"col-md-3"},React.createElement("button",{type:"button",className:"btn btn-danger",style:{width:"100%",fontSize:"11px"}},"Grabar Tarifa")),React.createElement("div",{className:"col-md-3"},React.createElement("button",{type:"button",className:"btn btn-info",style:{width:"100%",fontSize:"11px"}},"Grabar y Tarifar")),React.createElement("div",{className:"col-md-3"},React.createElement("button",{type:"button",className:"btn btn-info",style:{width:"100%",fontSize:"11px"}},"Grabar y buscar mas")),React.createElement("div",{className:"col-md-3"},React.createElement("button",{type:"button",className:"btn btn-info",style:{width:"100%",fontSize:"11px"}},"Volver a tarifar"))),React.createElement("div",{className:"row",style:{marginTop:"5px"}},React.createElement("div",{className:"col-md-3"},React.createElement("button",{type:"button",className:"btn btn-info",style:{width:"100%",fontSize:"11px"}},"Información tarifa")),React.createElement("div",{className:"col-md-3"},React.createElement("button",{type:"button",className:"btn btn-info",style:{width:"100%",fontSize:"11px"}},"Construcción Tariaria")),React.createElement("div",{className:"col-md-3"},React.createElement("button",{type:"button",className:"btn btn-primary",style:{width:"100%",fontSize:"11px"}},"Ver Air Extras")))),React.createElement("div",{className:"tab-pane fade",id:"pasajero",role:"tabpanel","aria-labelledby":"pasajero-tab"},"3"))),React.createElement("div",{className:" tab-pane ingresoFD",id:"ingresoFD"},"FOID-DOCS"),React.createElement("div",{className:" tab-pane tabOtrosDatosPax",id:"tabOtrosDatosPax"},"Otros Datos Pax"),React.createElement("div",{className:" tab-pane cotizacionSimple",id:"cotizacionSimple"},"Cotización Simple"),React.createElement("div",{className:" tab-pane cotizacionMultiple",id:"cotizacionMultiple"},"Cotización Multiple"),React.createElement("div",{className:" tab-pane mapaAsiento",id:"mapaAsiento"},"Mapa Asiento"),React.createElement("div",{className:" tab-pane remision",id:"remision"},"Remision"),React.createElement("div",{className:" tab-pane cambiosInvoluntarios",id:"cambiosInvoluntarios"},"Cambios Involuntarios"),React.createElement("div",{className:" tab-pane validacionItinerarios",id:"validacionItinerarios"},"Validacion Itinerarios")))),React.createElement("div",{className:"buttons-container"},React.createElement("div",{className:"row"},React.createElement("div",{className:"right-buttons"},React.createElement("button",{className:"cancel-button js_form-cancel btn btn-outline btn-success",onClick:this.props.handleCancel},"Cancel"),React.createElement("button",{type:"submit",className:"search-button js_form-submit btn btn-success"},"Submit"))))))},Component}(React.Component);exports.Component=Component;var mapStateToProps=function(e){return e},mapDispatchToProps=function(e,t){return{handleChange:function(t){return e({type:"update",id:t.target.id,value:t.target.value})},handleSubmit:function(t){return t.preventDefault(),e({type:"submit",id:""})},handleCancel:function(t){return t.preventDefault(),e({type:"cancel",id:""})}}};exports.App=react_redux_1.connect(mapStateToProps,mapDispatchToProps)(Component);