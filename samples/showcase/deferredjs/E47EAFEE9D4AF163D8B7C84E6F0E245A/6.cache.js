defineSeed(313, 1, makeCastMap([Q$ShowcaseConstants]));
_.cwHyperlinkChoose = function cwHyperlinkChoose(){
  return '<b>Choose a section:<\/b>';
}
;
function $getHyperlink(cwClass, name_0){
  var className, link;
  className = $getName_0(cwClass);
  className = $substring(className, $lastIndexOf(className, 46) + 1);
  link = new Hyperlink_2(name_0, className);
  $ensureDebugId(link, 'cwHyperlink-' + className);
  return link;
}

function $onInitialize_34(this$static){
  var allConstants, vPanel;
  vPanel = new VerticalPanel_0;
  $add_16(vPanel, new HTML_1(this$static.constants.cwHyperlinkChoose()));
  $setSpacing(vPanel, 5);
  allConstants = dynamicCast(this$static.constants, Q$ShowcaseConstants);
  $add_16(vPanel, $getHyperlink(Lcom_google_gwt_sample_showcase_client_content_widgets_CwCheckBox_2_classLit, allConstants.cwCheckBoxName()));
  $add_16(vPanel, $getHyperlink(Lcom_google_gwt_sample_showcase_client_content_widgets_CwRadioButton_2_classLit, allConstants.cwRadioButtonName()));
  $add_16(vPanel, $getHyperlink(Lcom_google_gwt_sample_showcase_client_content_widgets_CwBasicButton_2_classLit, allConstants.cwBasicButtonName()));
  $add_16(vPanel, $getHyperlink(Lcom_google_gwt_sample_showcase_client_content_widgets_CwCustomButton_2_classLit, allConstants.cwCustomButtonName()));
  $add_16(vPanel, $getHyperlink(Lcom_google_gwt_sample_showcase_client_content_widgets_CwFileUpload_2_classLit, allConstants.cwFileUploadName()));
  $add_16(vPanel, $getHyperlink(Lcom_google_gwt_sample_showcase_client_content_widgets_CwDatePicker_2_classLit, allConstants.cwDatePickerName()));
  return vPanel;
}

defineSeed(532, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_34(){
  this.callback$1.onSuccess_0($onInitialize_34(this.$outer$u0020));
}
;
function $clinit_Hyperlink(){
  $clinit_Hyperlink = nullMethod;
  $clinit_UIObject();
  $clinit_DirectionalTextHelper() , DEFAULT_DIRECTION_ESTIMATOR;
  impl_9 = new HyperlinkImplSafari_0;
}

function $$init_521(this$static){
  this$static.anchorElem = createAnchor();
}

function $getTargetHistoryToken(this$static){
  return this$static.targetHistoryToken;
}

function $setTargetHistoryToken(this$static, targetHistoryToken){
  jsNotEquals(targetHistoryToken, null) || throwAssertionError_Object('targetHistoryToken must not be null, consider using Anchor instead');
  this$static.targetHistoryToken = targetHistoryToken;
  setElementProperty(this$static.anchorElem, 'href', '#' + targetHistoryToken);
}

function Hyperlink_0(){
  Hyperlink_1.call(this, createDiv());
}

function Hyperlink_1(elem){
  Widget_0.call(this);
  $$init_521(this);
  if (isNull(elem)) {
    $setElement_0(this, this.anchorElem);
  }
   else {
    $setElement_0(this, elem);
    appendChild($getElement(this), this.anchorElem);
  }
  this.sinkEvents(1);
  this.setStyleName('gwt-Hyperlink');
  this.directionalTextHelper = new DirectionalTextHelper_0(this.anchorElem, true);
}

function Hyperlink_2(text, targetHistoryToken){
  $clinit_Hyperlink();
  Hyperlink_3.call(this, text, false, targetHistoryToken);
}

function Hyperlink_3(text, asHTML, targetHistoryToken){
  Hyperlink_0.call(this);
  $setTextOrHtml_0(this.directionalTextHelper, text, asHTML);
  $setTargetHistoryToken(this, targetHistoryToken);
}

defineSeed(657, 244, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), Hyperlink_2);
_.addClickHandler = function addClickHandler_2(handler){
  return $addHandler_1(this, handler, getType_10());
}
;
_.getText = function getText_7(){
  return $getTextOrHtml(this.directionalTextHelper, false);
}
;
_.onBrowserEvent = function onBrowserEvent_8(event_0){
  $onBrowserEvent(this, event_0);
  if (eventGetType(event_0) == 1 && impl_9.handleAsClick(event_0)) {
    newItem($getTargetHistoryToken(this));
    eventPreventDefault_0(event_0);
  }
}
;
_.onEnsureDebugId = function onEnsureDebugId_11(baseID){
  ensureDebugId(this.anchorElem, '', baseID);
  ensureDebugId($getElement(this), baseID, 'wrapper');
}
;
var impl_9;
function $$init_613(){
}

function HyperlinkImpl_0(){
  Object_1.call(this);
  $$init_613();
}

defineSeed(759, 1, {});
_.handleAsClick = function handleAsClick(event_0){
  var alt, ctrl, meta, middle, modifiers, mouseButtons, right, shift;
  mouseButtons = $getButton(event_0);
  alt = $getAltKey(event_0);
  ctrl = $getCtrlKey(event_0);
  meta = $getMetaKey(event_0);
  shift = $getShiftKey(event_0);
  modifiers = alt || ctrl || meta || shift;
  middle = mouseButtons == 4;
  right = mouseButtons == 2;
  return !modifiers && !middle && !right;
}
;
function $clinit_HyperlinkImplSafari(){
  $clinit_HyperlinkImplSafari = nullMethod;
  shiftIsModifier = onChrome();
}

function $$init_614(){
}

function HyperlinkImplSafari_0(){
  $clinit_HyperlinkImplSafari();
  HyperlinkImpl_0.call(this);
  $$init_614();
}

function onChrome(){
  return navigator.userAgent.indexOf('Chrome') != -1;
}

defineSeed(760, 759, {}, HyperlinkImplSafari_0);
_.handleAsClick = function handleAsClick_0(event_0){
  var alt, ctrl, meta, middle, modifiers, mouseButtons, right, shift;
  mouseButtons = $getButton(event_0);
  alt = $getAltKey(event_0);
  ctrl = $getCtrlKey(event_0);
  meta = $getMetaKey(event_0);
  shift = $getShiftKey(event_0);
  middle = mouseButtons == 4;
  right = mouseButtons == 2;
  modifiers = alt || ctrl || meta;
  shiftIsModifier && (modifiers = modifiers | shift);
  return !modifiers && !middle && !right;
}
;
var shiftIsModifier;
var Lcom_google_gwt_user_client_ui_Hyperlink_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Hyperlink', 657, Lcom_google_gwt_user_client_ui_Widget_2_classLit), Lcom_google_gwt_user_client_ui_impl_HyperlinkImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'HyperlinkImpl', 759, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_impl_HyperlinkImplSafari_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'HyperlinkImplSafari', 760, Lcom_google_gwt_user_client_ui_impl_HyperlinkImpl_2_classLit);
$entry(onLoad)(6);
