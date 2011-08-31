defineSeed(310, 1, makeCastMap([Q$ShowcaseConstants]));
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

defineSeed(458, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_20(){
  this.callback$1.onSuccess_0($onInitialize_19(this.$outer$u0020));
}
;
function $$init_358(){
}

function $apply$mcVI$sp_2(this$static){
  this$static.randomText$1.elem = dynamicCast(this$static.randomText$1.elem, Q$String) + dynamicCast(this$static.randomText$1.elem, Q$String);
}

function $apply_53(this$static, i){
  $apply$mcVI$sp_2(this$static);
}

function CwHorizontalSplitPanel$$anonfun$onInitialize$1_0(randomText$1){
  $$init_358();
  this.randomText$1 = randomText$1;
  AbstractFunction1$mcVI$sp_0.call(this);
}

defineSeed(459, 442, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwHorizontalSplitPanel$$anonfun$onInitialize$1_0);
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

function setWidth_1(elem, width){
  $clinit_UIObject();
  setStyleAttribute(elem, 'width', width);
}

function $$init_513(this$static){
  this$static.impl = new HorizontalSplitPanel$Impl_0;
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
  HorizontalSplitPanel_2.call(this, new HorizontalSplitPanel_Resources_default_InlineClientBundleGenerator_0);
}

function HorizontalSplitPanel_1(thumbImage){
  SplitPanel_0.call(this, createDiv(), createDiv(), preventBoxStyles(createDiv()), preventBoxStyles(createDiv()));
  $$init_513(this);
  this.container = preventBoxStyles(createDiv());
  $buildDOM(this, thumbImage);
  this.setStyleName('gwt-HorizontalSplitPanel');
  this.impl.init_1(this);
  this.setHeight('100%');
}

function HorizontalSplitPanel_2(resources){
  HorizontalSplitPanel_1.call(this, create_9(resources.horizontalSplitPanelThumb()));
}

defineSeed(646, 647, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Iterable]), HorizontalSplitPanel_0);
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
function $$init_514(){
}

function HorizontalSplitPanel$1_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_514();
}

defineSeed(648, 1, makeCastMap([Q$Command]), HorizontalSplitPanel$1_0);
_.execute_1 = function execute_11(){
  $setSplitPosition(this.this$0, this.this$0.lastSplitPosition);
}
;
_.this$0 = null;
function $$init_515(){
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
  $$init_515();
}

function expandToFitParentHorizontally(elem){
  addAbsolutePositoning(elem);
  '0px';
  setTop(elem, '0px');
  setBottom(elem, '0px');
}

defineSeed(649, 1, {}, HorizontalSplitPanel$Impl_0);
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
function $clinit_HorizontalSplitPanel_Resources_default_InlineClientBundleGenerator(){
  $clinit_HorizontalSplitPanel_Resources_default_InlineClientBundleGenerator = nullMethod;
  _instance0_4 = new HorizontalSplitPanel_Resources_default_InlineClientBundleGenerator_0;
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAArklEQVR42mNgAAI/Pz/xsLCweUC8KygoqJ4BBnx8fKRjYmJeBAQEPAwODr4THR39DIgPgSVBOoCCD+Pi4s5UVVWdaW5uPpOdnf02Pj7emyEiImJXYmLinUmTJp3ZsmXLmV27dp1pamp6UVxcXMgQFRXVnJ+f/xQkcerUqTMnTpw4W1tb+66trU0LbHRBQcH+urq6dz09PS9B9MSJExGOAgGgSnug0ekzZszQgokBAExeULnCXQAFAAAAAElFTkSuQmCC';
}

function $$init_516(){
}

function $horizontalSplitPanelThumbInitializer(){
  horizontalSplitPanelThumb = new ImageResourcePrototype_0('horizontalSplitPanelThumb', fromTrustedString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAArklEQVR42mNgAAI/Pz/xsLCweUC8KygoqJ4BBnx8fKRjYmJeBAQEPAwODr4THR39DIgPgSVBOoCCD+Pi4s5UVVWdaW5uPpOdnf02Pj7emyEiImJXYmLinUmTJp3ZsmXLmV27dp1pamp6UVxcXMgQFRXVnJ+f/xQkcerUqTMnTpw4W1tb+66trU0LbHRBQcH+urq6dz09PS9B9MSJExGOAgGgSnug0ekzZszQgokBAExeULnCXQAFAAAAAElFTkSuQmCC'), 0, 0, 7, 7, false, false);
}

function HorizontalSplitPanel_Resources_default_InlineClientBundleGenerator_0(){
  $clinit_HorizontalSplitPanel_Resources_default_InlineClientBundleGenerator();
  Object_1.call(this);
  $$init_516();
}

defineSeed(650, 1, {}, HorizontalSplitPanel_Resources_default_InlineClientBundleGenerator_0);
_.horizontalSplitPanelThumb = function horizontalSplitPanelThumb_0(){
  return get_55();
}
;
var _instance0_4, horizontalSplitPanelThumb = null;
function $clinit_HorizontalSplitPanel_Resources_default_InlineClientBundleGenerator$horizontalSplitPanelThumbInitializer(){
  $clinit_HorizontalSplitPanel_Resources_default_InlineClientBundleGenerator$horizontalSplitPanelThumbInitializer = nullMethod;
  $horizontalSplitPanelThumbInitializer(($clinit_HorizontalSplitPanel_Resources_default_InlineClientBundleGenerator() , _instance0_4));
}

function get_55(){
  $clinit_HorizontalSplitPanel_Resources_default_InlineClientBundleGenerator$horizontalSplitPanelThumbInitializer();
  return $clinit_HorizontalSplitPanel_Resources_default_InlineClientBundleGenerator() , horizontalSplitPanelThumb;
}

var Lcom_google_gwt_user_client_ui_HorizontalSplitPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HorizontalSplitPanel', 646, Lcom_google_gwt_user_client_ui_SplitPanel_2_classLit), Lcom_google_gwt_user_client_ui_HorizontalSplitPanel$Impl_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HorizontalSplitPanel$Impl', 649, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_HorizontalSplitPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HorizontalSplitPanel$1', 648, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_panels_CwHorizontalSplitPanel$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.panels.', 'CwHorizontalSplitPanel$$anonfun$onInitialize$1', 459, Lscala_runtime_AbstractFunction1$mcVI$sp_2_classLit), Lcom_google_gwt_user_client_ui_HorizontalSplitPanel_1Resources_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HorizontalSplitPanel_Resources_default_InlineClientBundleGenerator', 650, Ljava_lang_Object_2_classLit);
$entry(onLoad)(24);
