defineSeed(395, 1, makeCastMap([Q$ShowcaseConstants]));
_.cwHorizontalSplitPanelText = function cwHorizontalSplitPanelText(){
  return 'This is some text to show how the contents on either side of the splitter flow.';
}
;
function $onInitialize_19(this$static){
  var decPanel, hSplit, randomText$1;
  hSplit = new HorizontalSplitPanel_0;
  $ensureDebugId(hSplit, 'cwHorizontalSplitPanel');
  hSplit.setSize('500px', '350px');
  $setSplitPosition(hSplit, '30%');
  randomText$1 = new ObjectRef_0(this$static.constants.cwHorizontalSplitPanelText());
  $foreach$mVc$sp($until_0($intWrapper(($clinit_Predef$() , MODULE$_11 , 0)), 2), new CwHorizontalSplitPanel$$anonfun$onInitialize$1_0(randomText$1));
  $setRightWidget(hSplit, new HTML_1(dynamicCast(randomText$1.elem, Q$String)));
  $setLeftWidget(hSplit, new HTML_1(dynamicCast(randomText$1.elem, Q$String)));
  decPanel = new DecoratorPanel_0;
  decPanel.setWidget(hSplit);
  return decPanel;
}

defineSeed(543, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_20(){
  this.callback$1.onSuccess_0($onInitialize_19(this.$outer$u0020));
}
;
function $$init_440(){
}

function $apply$mcVI$sp_2(this$static){
  this$static.randomText$1.elem = dynamicCast(this$static.randomText$1.elem, Q$String) + dynamicCast(this$static.randomText$1.elem, Q$String);
}

function $apply_53(this$static, i){
  $apply$mcVI$sp_2(this$static);
}

function CwHorizontalSplitPanel$$anonfun$onInitialize$1_0(randomText$1){
  $$init_440();
  this.randomText$1 = randomText$1;
  AbstractFunction1$mcVI$sp_0.call(this);
}

defineSeed(544, 527, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwHorizontalSplitPanel$$anonfun$onInitialize$1_0);
_.apply$mcVI$sp = function apply$mcVI$sp_3(v1){
  $apply$mcVI$sp_2(this);
}
;
_.apply_2 = function apply_59(i){
  $apply_53(this, i);
}
;
_.apply_0 = function apply_60(v1){
  $apply_53(this, unboxToInt(v1));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.randomText$1 = null;
function getOffsetWidth_1(elem){
  $clinit_UIObject();
  return getElementPropertyInt(elem, 'offsetWidth');
}

function $$init_600(this$static){
  this$static.impl = new HorizontalSplitPanel$ImplIE6_0;
}

function $buildDOM(this$static, thumbImage){
  var leftDiv, rightDiv, splitDiv;
  leftDiv = $getElement_1(this$static, 0);
  rightDiv = $getElement_1(this$static, 1);
  splitDiv = $getSplitElement(this$static);
  appendChild($getElement(this$static), this$static.container);
  appendChild(this$static.container, leftDiv);
  appendChild(this$static.container, splitDiv);
  appendChild(this$static.container, rightDiv);
  setInnerHTML(splitDiv, "<table class='hsplitter' height='100%' cellpadding='0' cellspacing='0'><tr><td align='center' valign='middle'>" + $getHTML(thumbImage));
  addScrolling(leftDiv);
  addScrolling(rightDiv);
}

function $getEndOfLinePos(){
  return $isRTL_0(getCurrentLocale())?0:1;
}

function $getEndOfLineWidget(this$static){
  return $getWidget_2(this$static, $getEndOfLinePos());
}

function $getStartOfLinePos(){
  return $isRTL_0(getCurrentLocale())?1:0;
}

function $getStartOfLineWidget(this$static){
  return $getWidget_2(this$static, $getStartOfLinePos());
}

function $setEndOfLineWidget(this$static, w){
  $setWidget_3(this$static, $getEndOfLinePos(), w);
}

function $setLeftWidget(this$static, w){
  $setWidget_3(this$static, 0, w);
}

function $setRightWidget(this$static, w){
  $setWidget_3(this$static, 1, w);
}

function $setSplitPosition(this$static, pos){
  this$static.lastSplitPosition = pos;
  $setSplitPosition_0(this$static.impl, pos);
}

function $setStartOfLineWidget(this$static, w){
  $setWidget_3(this$static, $getStartOfLinePos(), w);
}

function HorizontalSplitPanel_0(){
  HorizontalSplitPanel_2.call(this, new HorizontalSplitPanel_Resources_en_StaticClientBundleGenerator_0);
}

function HorizontalSplitPanel_1(thumbImage){
  SplitPanel_0.call(this, createDiv(), createDiv(), preventBoxStyles(createDiv()), preventBoxStyles(createDiv()));
  $$init_600(this);
  this.container = preventBoxStyles(createDiv());
  $buildDOM(this, thumbImage);
  this.setStyleName('gwt-HorizontalSplitPanel');
  this.impl.init_1(this);
  this.setHeight('100%');
}

function HorizontalSplitPanel_2(resources){
  HorizontalSplitPanel_1.call(this, create_9(resources.horizontalSplitPanelThumb()));
}

defineSeed(738, 739, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Iterable]), HorizontalSplitPanel_0);
_.add_1 = function add_10(w){
  if (isNull($getStartOfLineWidget(this))) {
    $setStartOfLineWidget(this, w);
  }
   else if (isNull($getEndOfLineWidget(this))) {
    $setEndOfLineWidget(this, w);
  }
   else {
    throw new IllegalStateException_1('A Splitter can only contain two Widgets.');
  }
}
;
_.onEnsureDebugId = function onEnsureDebugId_10(baseID){
  $onEnsureDebugId_0(this, baseID);
  ensureDebugId($getElement_1(this, 0), baseID, 'left');
  ensureDebugId($getElement_1(this, 1), baseID, 'right');
}
;
_.onLoad = function onLoad_4(){
  this.impl.onAttach();
  $setSplitPosition(this, this.lastSplitPosition);
  addCommand(new HorizontalSplitPanel$1_0(this));
}
;
_.onSplitterResize = function onSplitterResize(x, y){
  this.impl.onSplitResize(this.initialLeftWidth + x - this.initialThumbPos);
}
;
_.onSplitterResizeStarted = function onSplitterResizeStarted(x, y){
  this.initialThumbPos = x;
  this.initialLeftWidth = getOffsetWidth_1($getElement_1(this, 0));
}
;
_.onUnload = function onUnload_3(){
  this.impl.onDetach();
}
;
_.container = null;
_.initialLeftWidth = 0;
_.initialThumbPos = 0;
_.lastSplitPosition = '50%';
function $$init_601(){
}

function HorizontalSplitPanel$1_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_601();
}

defineSeed(740, 1, makeCastMap([Q$Command]), HorizontalSplitPanel$1_0);
_.execute_1 = function execute_13(){
  $setSplitPosition(this.this$0, this.this$0.lastSplitPosition);
}
;
_.this$0 = null;
function $$init_602(){
}

function $init_1(this$static, panel){
  this$static.panel = panel;
  setStyleAttribute($getElement(panel), 'position', 'relative');
  expandToFitParentHorizontally($getElement_1(panel, 0));
  expandToFitParentHorizontally($getElement_1(panel, 1));
  expandToFitParentHorizontally($getSplitElement(panel));
  expandToFitParentUsingCssOffsets(panel.container);
  $isRTL_0(getCurrentLocale())?setLeft($getElement_1(panel, 0), '0px'):setRight($getElement_1(panel, 1), '0px');
}

function $setSplitPosition_0(this$static, pos){
  var leftElem;
  leftElem = $getElement_1(this$static.panel, 0);
  setWidth_1(leftElem, pos);
  this$static.setSplitPositionUsingPixels(getOffsetWidth_1(leftElem));
}

function $setSplitPositionUsingPixels(this$static, px){
  var newRightWidth, rightElem, rootElemWidth, splitElem, splitElemWidth;
  splitElem = $getSplitElement(this$static.panel);
  rootElemWidth = getOffsetWidth_1(this$static.panel.container);
  splitElemWidth = getOffsetWidth_1(splitElem);
  if (rootElemWidth < splitElemWidth) {
    return;
  }
  newRightWidth = rootElemWidth - px - splitElemWidth;
  if (px < 0) {
    px = 0;
    newRightWidth = rootElemWidth - splitElemWidth;
  }
   else if (newRightWidth < 0) {
    px = rootElemWidth - splitElemWidth;
    newRightWidth = 0;
  }
  rightElem = $getElement_1(this$static.panel, 1);
  setWidth_1($getElement_1(this$static.panel, 0), px + 'px');
  setLeft(splitElem, px + 'px');
  setLeft(rightElem, px + splitElemWidth + 'px');
  this$static.updateRightWidth(rightElem, newRightWidth);
}

function HorizontalSplitPanel$Impl_0(){
  Object_1.call(this);
  $$init_602();
}

function expandToFitParentHorizontally(elem){
  addAbsolutePositoning(elem);
  '0px';
  setTop(elem, '0px');
  setBottom(elem, '0px');
}

defineSeed(741, 1, {});
_.init_1 = function init_4(panel){
  $init_1(this, panel);
}
;
_.onAttach = function onAttach_3(){
}
;
_.onDetach = function onDetach_2(){
}
;
_.onSplitResize = function onSplitResize(px){
  this.setSplitPositionUsingPixels(px);
}
;
_.setSplitPositionUsingPixels = function setSplitPositionUsingPixels(px){
  $setSplitPositionUsingPixels(this, px);
}
;
_.updateRightWidth = function updateRightWidth(rightElem, newRightWidth){
}
;
_.panel = null;
function $$init_603(this$static){
}

function $addResizeListener(this$static, container){
  var self_0 = this$static;
  container.onresize = $entry(function(){
    self_0.onResize_0();
  }
  );
}

function $onResize(this$static){
  var height, leftElem, rightElem;
  leftElem = $getElement_1(this$static.panel, 0);
  rightElem = $getElement_1(this$static.panel, 1);
  height = getOffsetHeight_1(this$static.panel.container) + 'px';
  setHeight_1(rightElem, height);
  setHeight_1($getSplitElement(this$static.panel), height);
  setHeight_1(leftElem, height);
  $setSplitPositionUsingPixels_0(this$static, getOffsetWidth_1(leftElem));
}

function $setSplitPositionUsingPixels_0(this$static, px){
  var newRightWidth, rootElemWidth, splitElem, splitElemWidth;
  if ($isRTL_0(getCurrentLocale())) {
    splitElem = $getSplitElement(this$static.panel);
    rootElemWidth = getOffsetWidth_1(this$static.panel.container);
    splitElemWidth = getOffsetWidth_1(splitElem);
    if (rootElemWidth < splitElemWidth) {
      return;
    }
    newRightWidth = rootElemWidth - px - splitElemWidth;
    if (px < 0) {
      px = 0;
      newRightWidth = rootElemWidth - splitElemWidth;
    }
     else if (newRightWidth < 0) {
      px = rootElemWidth - splitElemWidth;
      newRightWidth = 0;
    }
    setWidth_1($getElement_1(this$static.panel, 1), newRightWidth + 'px');
    setLeft(splitElem, px + 'px');
    px == 0?addCommand(new HorizontalSplitPanel$ImplIE6$2_0(this$static)):setWidth_1($getElement_1(this$static.panel, 0), px + 'px');
  }
   else {
    $setSplitPositionUsingPixels(this$static, px);
  }
}

function HorizontalSplitPanel$ImplIE6_0(){
  HorizontalSplitPanel$Impl_0.call(this);
  $$init_603(this);
}

defineSeed(742, 741, {}, HorizontalSplitPanel$ImplIE6_0);
_.init_1 = function init_5(panel){
  var elem;
  this.panel = panel;
  elem = $getElement(panel);
  $isRTL_0(getCurrentLocale())?setStyleAttribute(elem, 'textAlign', 'right'):setStyleAttribute(elem, 'textAlign', 'left');
  setStyleAttribute(elem, 'position', 'relative');
  addAbsolutePositoning($getElement_1(panel, 0));
  addAbsolutePositoning($getElement_1(panel, 1));
  addAbsolutePositoning($getSplitElement(panel));
  expandToFitParentUsingPercentages(panel.container);
  $isRTL_0(getCurrentLocale()) && setLeft($getElement_1(panel, 0), '0px');
}
;
_.onAttach = function onAttach_4(){
  $addResizeListener(this, this.panel.container);
  $onResize(this);
}
;
_.onDetach = function onDetach_3(){
  setElementAttribute(this.panel.container, 'onresize', null);
}
;
_.onResize_0 = function onResize_3(){
  $onResize(this);
}
;
_.onSplitResize = function onSplitResize_0(px){
  20;
  if (!this.isResizeInProgress) {
    this.isResizeInProgress = true;
    $schedule(new HorizontalSplitPanel$ImplIE6$1_0(this), 20);
  }
  this.splitPosition = px;
}
;
_.setSplitPositionUsingPixels = function setSplitPositionUsingPixels_0(px){
  $setSplitPositionUsingPixels_0(this, px);
}
;
_.updateRightWidth = function updateRightWidth_0(rightElem, newRightWidth){
  setWidth_1(rightElem, newRightWidth + 'px');
}
;
_.isResizeInProgress = false;
_.splitPosition = 0;
function $$init_604(){
}

function HorizontalSplitPanel$ImplIE6$1_0(this$1){
  $clinit_Timer();
  this.this$1 = this$1;
  Timer_0.call(this);
  $$init_604();
}

defineSeed(743, 10, makeCastMap([Q$Timer]), HorizontalSplitPanel$ImplIE6$1_0);
_.run = function run_4(){
  $setSplitPositionUsingPixels_0(this.this$1, this.this$1.splitPosition);
  this.this$1.isResizeInProgress = false;
}
;
_.this$1 = null;
function $$init_605(){
}

function HorizontalSplitPanel$ImplIE6$2_0(this$1){
  this.this$1 = this$1;
  Object_1.call(this);
  $$init_605();
}

defineSeed(744, 1, makeCastMap([Q$Command]), HorizontalSplitPanel$ImplIE6$2_0);
_.execute_1 = function execute_14(){
  setWidth_1($getElement_1(this.this$1.panel, 0), '0px');
}
;
_.this$1 = null;
function $clinit_HorizontalSplitPanel_Resources_en_StaticClientBundleGenerator(){
  $clinit_HorizontalSplitPanel_Resources_en_StaticClientBundleGenerator = nullMethod;
  _instance0_5 = new HorizontalSplitPanel_Resources_en_StaticClientBundleGenerator_0;
  bundledImage_None_4 = getModuleBaseURL() + '8603379B5088782D2C0620FAE856E112.cache.png';
}

function $$init_606(){
}

function $horizontalSplitPanelThumbInitializer(){
  horizontalSplitPanelThumb = new ImageResourcePrototype_0('horizontalSplitPanelThumb', fromTrustedString_1(bundledImage_None_4), 0, 0, 7, 7, false, false);
}

function HorizontalSplitPanel_Resources_en_StaticClientBundleGenerator_0(){
  $clinit_HorizontalSplitPanel_Resources_en_StaticClientBundleGenerator();
  Object_1.call(this);
  $$init_606();
}

defineSeed(745, 1, {}, HorizontalSplitPanel_Resources_en_StaticClientBundleGenerator_0);
_.horizontalSplitPanelThumb = function horizontalSplitPanelThumb_0(){
  return get_57();
}
;
var _instance0_5, bundledImage_None_4, horizontalSplitPanelThumb = null;
function $clinit_HorizontalSplitPanel_Resources_en_StaticClientBundleGenerator$horizontalSplitPanelThumbInitializer(){
  $clinit_HorizontalSplitPanel_Resources_en_StaticClientBundleGenerator$horizontalSplitPanelThumbInitializer = nullMethod;
  $horizontalSplitPanelThumbInitializer(($clinit_HorizontalSplitPanel_Resources_en_StaticClientBundleGenerator() , _instance0_5));
}

function get_57(){
  $clinit_HorizontalSplitPanel_Resources_en_StaticClientBundleGenerator$horizontalSplitPanelThumbInitializer();
  return $clinit_HorizontalSplitPanel_Resources_en_StaticClientBundleGenerator() , horizontalSplitPanelThumb;
}

var Lcom_google_gwt_user_client_ui_HorizontalSplitPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HorizontalSplitPanel', 738, Lcom_google_gwt_user_client_ui_SplitPanel_2_classLit), Lcom_google_gwt_user_client_ui_HorizontalSplitPanel$Impl_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HorizontalSplitPanel$Impl', 741, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_HorizontalSplitPanel$ImplIE6_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HorizontalSplitPanel$ImplIE6', 742, Lcom_google_gwt_user_client_ui_HorizontalSplitPanel$Impl_2_classLit), Lcom_google_gwt_user_client_ui_HorizontalSplitPanel$ImplIE6$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HorizontalSplitPanel$ImplIE6$1', 743, Lcom_google_gwt_user_client_Timer_2_classLit), Lcom_google_gwt_user_client_ui_HorizontalSplitPanel$ImplIE6$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HorizontalSplitPanel$ImplIE6$2', 744, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_HorizontalSplitPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HorizontalSplitPanel$1', 740, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_panels_CwHorizontalSplitPanel$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.panels.', 'CwHorizontalSplitPanel$$anonfun$onInitialize$1', 544, Lscala_runtime_AbstractFunction1$mcVI$sp_2_classLit), Lcom_google_gwt_user_client_ui_HorizontalSplitPanel_1Resources_1en_1StaticClientBundleGenerator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HorizontalSplitPanel_Resources_en_StaticClientBundleGenerator', 745, Ljava_lang_Object_2_classLit);
$entry(onLoad)(24);