defineSeed(311, 1, makeCastMap([Q$ShowcaseConstants]));
_.cwBasicPopupClickOutsideInstructions = function cwBasicPopupClickOutsideInstructions(){
  return 'Click anywhere outside this popup to make it disappear.';
}
;
_.cwBasicPopupInstructions = function cwBasicPopupInstructions(){
  return '<b>Click an image to see full size:<\/b>';
}
;
_.cwBasicPopupShowButton = function cwBasicPopupShowButton(){
  return 'Show Basic Popup';
}
;
function $jimmyThumbInitializer(){
  jimmyThumb_0 = new ImageResourcePrototype_0('jimmyThumb', fromTrustedString_1(externalImage0), 0, 0, 120, 87, false, true);
}

defineSeed(312, 1, {});
_.jimmyThumb = function jimmyThumb_1(){
  return get_21();
}
;
var jimmyThumb_0 = null;
function $clinit_ShowcaseImages_default_StaticClientBundleGenerator$jimmyThumbInitializer(){
  $clinit_ShowcaseImages_default_StaticClientBundleGenerator$jimmyThumbInitializer = nullMethod;
  $jimmyThumbInitializer(($clinit_ShowcaseImages_default_StaticClientBundleGenerator() , _instance0_0));
}

function get_21(){
  $clinit_ShowcaseImages_default_StaticClientBundleGenerator$jimmyThumbInitializer();
  return $clinit_ShowcaseImages_default_StaticClientBundleGenerator() , jimmyThumb_0;
}

function $onInitialize_23(this$static){
  var imagePopup$1, jimmyFull, jimmyThumb, openButton, simplePopup$1, vPanel;
  simplePopup$1 = new DecoratedPopupPanel_0(true);
  $ensureDebugId(simplePopup$1, 'cwBasicPopup-simplePopup');
  $setWidth_1(simplePopup$1, '150px');
  $setWidget_1(simplePopup$1, new HTML_1(this$static.constants.cwBasicPopupClickOutsideInstructions()));
  openButton = new Button_2(this$static.constants.cwBasicPopupShowButton(), ($clinit_Handlers$() , MODULE$_3).fn2clickHandler(new CwBasicPopup$$anonfun$1_0(simplePopup$1)));
  jimmyFull = new Image_1($images(($clinit_Showcase$() , MODULE$_4)).jimmy());
  imagePopup$1 = new PopupPanel_1(true);
  $setAnimationEnabled_0(imagePopup$1, true);
  $ensureDebugId(imagePopup$1, 'cwBasicPopup-imagePopup');
  imagePopup$1.setWidget(jimmyFull);
  $onClick(($clinit_Handlers$() , MODULE$_3).enrichHasClickHandlers(jimmyFull), new CwBasicPopup$$anonfun$onInitialize$1_0(imagePopup$1));
  jimmyThumb = new Image_1($images(($clinit_Showcase$() , MODULE$_4)).jimmyThumb());
  $ensureDebugId(jimmyThumb, 'cwBasicPopup-thumb');
  jimmyThumb.addStyleName('cw-BasicPopup-thumb');
  $onClick(($clinit_Handlers$() , MODULE$_3).enrichHasClickHandlers(jimmyThumb), new CwBasicPopup$$anonfun$onInitialize$2_0(imagePopup$1));
  vPanel = new VerticalPanel_0;
  $setSpacing(vPanel, 5);
  $add_16(vPanel, openButton);
  $add_16(vPanel, new HTML_1('<br><br><br>' + this$static.constants.cwBasicPopupInstructions()));
  $add_16(vPanel, jimmyThumb);
  return vPanel;
}

defineSeed(470, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_24(){
  this.callback$1.onSuccess_0($onInitialize_23(this.$outer$u0020));
}
;
function $$init_367(){
}

function $apply_56(this$static, event_0){
  var left, source, top_0;
  source = dynamicCast($getSource_0(event_0), Q$Widget);
  left = $getAbsoluteLeft_0(source) + 10;
  top_0 = $getAbsoluteTop_0(source) + 10;
  $setPopupPosition(this$static.simplePopup$1, left, top_0);
  this$static.simplePopup$1.show();
}

function CwBasicPopup$$anonfun$1_0(simplePopup$1){
  $$init_367();
  this.simplePopup$1 = simplePopup$1;
  AbstractFunction1_0.call(this);
}

defineSeed(471, 268, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwBasicPopup$$anonfun$1_0);
_.apply_0 = function apply_65(v1){
  $apply_56(this, dynamicCast(v1, Q$ClickEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.simplePopup$1 = null;
function $$init_368(){
}

function $apply_57(this$static){
  this$static.imagePopup$1.hide();
}

function CwBasicPopup$$anonfun$onInitialize$1_0(imagePopup$1){
  $$init_368();
  this.imagePopup$1 = imagePopup$1;
  AbstractFunction1_0.call(this);
}

defineSeed(472, 268, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwBasicPopup$$anonfun$onInitialize$1_0);
_.apply_0 = function apply_66(v1){
  $apply_57(this, dynamicCast(v1, Q$ClickEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.imagePopup$1 = null;
function $$init_369(){
}

function $apply_58(this$static){
  $center(this$static.imagePopup$1);
}

function CwBasicPopup$$anonfun$onInitialize$2_0(imagePopup$1){
  $$init_369();
  this.imagePopup$1 = imagePopup$1;
  AbstractFunction1_0.call(this);
}

defineSeed(473, 268, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwBasicPopup$$anonfun$onInitialize$2_0);
_.apply_0 = function apply_67(v1){
  $apply_58(this, dynamicCast(v1, Q$ClickEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.imagePopup$1 = null;
function DecoratedPopupPanel_0(autoHide){
  $clinit_PopupPanel();
  DecoratedPopupPanel_1.call(this, autoHide, false);
}

function DecoratedPopupPanel_1(autoHide, modal){
  DecoratedPopupPanel_2.call(this, autoHide, modal, 'popup');
}

defineSeed(609, 610, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$AcceptsOneWidget, Q$HasOneWidget, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$PopupPanel, Q$SimplePanel, Q$UIObject, Q$Widget, Q$Iterable]), DecoratedPopupPanel_0);
var Lcom_google_gwt_sample_showcase_client_content_popups_CwBasicPopup$$anonfun$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.popups.', 'CwBasicPopup$$anonfun$1', 471, Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_popups_CwBasicPopup$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.popups.', 'CwBasicPopup$$anonfun$onInitialize$1', 472, Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_popups_CwBasicPopup$$anonfun$onInitialize$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.popups.', 'CwBasicPopup$$anonfun$onInitialize$2', 473, Lscala_runtime_AbstractFunction1_2_classLit);
$entry(onLoad)(14);
