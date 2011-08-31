function $getOwnerDocument(this$static){
  return this$static.ownerDocument;
}

function $setLeft(this$static, value, unit){
  $setProperty(this$static, 'left', value, unit);
}

function $setTop(this$static, value, unit){
  $setProperty(this$static, 'top', value, unit);
}

function $getRelativeElement(this$static){
  $assertLive(this$static);
  return this$static.relativeElem;
}

function $getClientX_0(this$static){
  return $getClientX($getNativeEvent(this$static));
}

function $getClientY_0(this$static){
  return $getClientY($getNativeEvent(this$static));
}

function $getRelativeX(this$static, target){
  var e;
  e = $getNativeEvent(this$static);
  return $getClientX(e) - $getAbsoluteLeft(target) + $getScrollLeft(target) + $getScrollLeft_1($getOwnerDocument(target));
}

function $getRelativeY(this$static, target){
  var e;
  e = $getNativeEvent(this$static);
  return $getClientY(e) - $getAbsoluteTop(target) + $getScrollTop(target) + $getScrollTop_0($getOwnerDocument(target));
}

function $getX(this$static){
  var relativeElem;
  relativeElem = $getRelativeElement(this$static);
  if (isNotNull(relativeElem)) {
    return $getRelativeX(this$static, relativeElem);
  }
  return $getClientX_0(this$static);
}

function $getY(this$static){
  var relativeElem;
  relativeElem = $getRelativeElement(this$static);
  if (isNotNull(relativeElem)) {
    return $getRelativeY(this$static, relativeElem);
  }
  return $getClientY_0(this$static);
}

function $clinit_MouseDownEvent(){
  $clinit_MouseDownEvent = nullMethod;
  TYPE_6 = new DomEvent$Type_0('mousedown', new MouseDownEvent_0);
}

function $$init_82(){
}

function $dispatch_6(this$static, handler){
  handler.onMouseDown(this$static);
}

function MouseDownEvent_0(){
  MouseEvent_1.call(this);
  $$init_82();
}

function getType_15(){
  $clinit_MouseDownEvent();
  return TYPE_6;
}

defineSeed(116, 104, {}, MouseDownEvent_0);
_.dispatch_0 = function dispatch_7(handler){
  $dispatch_6(this, dynamicCast(handler, Q$MouseDownHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_8(){
  return TYPE_6;
}
;
var TYPE_6;
function $clinit_MouseMoveEvent(){
  $clinit_MouseMoveEvent = nullMethod;
  TYPE_7 = new DomEvent$Type_0('mousemove', new MouseMoveEvent_0);
}

function $$init_83(){
}

function $dispatch_7(this$static, handler){
  handler.onMouseMove(this$static);
}

function MouseMoveEvent_0(){
  MouseEvent_1.call(this);
  $$init_83();
}

function getType_16(){
  $clinit_MouseMoveEvent();
  return TYPE_7;
}

defineSeed(117, 104, {}, MouseMoveEvent_0);
_.dispatch_0 = function dispatch_8(handler){
  $dispatch_7(this, dynamicCast(handler, Q$MouseMoveHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_9(){
  return TYPE_7;
}
;
var TYPE_7;
function $clinit_MouseOutEvent(){
  $clinit_MouseOutEvent = nullMethod;
  TYPE_8 = new DomEvent$Type_0('mouseout', new MouseOutEvent_0);
}

function $$init_84(){
}

function $dispatch_8(this$static, handler){
  handler.onMouseOut(this$static);
}

function MouseOutEvent_0(){
  MouseEvent_1.call(this);
  $$init_84();
}

function getType_17(){
  $clinit_MouseOutEvent();
  return TYPE_8;
}

defineSeed(118, 104, {}, MouseOutEvent_0);
_.dispatch_0 = function dispatch_9(handler){
  $dispatch_8(this, dynamicCast(handler, Q$MouseOutHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_10(){
  return TYPE_8;
}
;
var TYPE_8;
function $clinit_MouseOverEvent(){
  $clinit_MouseOverEvent = nullMethod;
  TYPE_9 = new DomEvent$Type_0('mouseover', new MouseOverEvent_0);
}

function $$init_85(){
}

function $dispatch_9(this$static, handler){
  handler.onMouseOver(this$static);
}

function MouseOverEvent_0(){
  MouseEvent_1.call(this);
  $$init_85();
}

function getType_18(){
  $clinit_MouseOverEvent();
  return TYPE_9;
}

defineSeed(119, 104, {}, MouseOverEvent_0);
_.dispatch_0 = function dispatch_10(handler){
  $dispatch_9(this, dynamicCast(handler, Q$MouseOverHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_11(){
  return TYPE_9;
}
;
var TYPE_9;
function $clinit_MouseUpEvent(){
  $clinit_MouseUpEvent = nullMethod;
  TYPE_10 = new DomEvent$Type_0('mouseup', new MouseUpEvent_0);
}

function $$init_86(){
}

function $dispatch_10(this$static, handler){
  handler.onMouseUp(this$static);
}

function MouseUpEvent_0(){
  MouseEvent_1.call(this);
  $$init_86();
}

function getType_19(){
  $clinit_MouseUpEvent();
  return TYPE_10;
}

defineSeed(120, 104, {}, MouseUpEvent_0);
_.dispatch_0 = function dispatch_11(handler){
  $dispatch_10(this, dynamicCast(handler, Q$MouseUpHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_12(){
  return TYPE_10;
}
;
var TYPE_10;
defineSeed(303, 304, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.setText = function setText(text){
  $setInnerText($getElement(this), text);
}
;
defineSeed(302, 303, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.setText = function setText_0(text){
  $setText_1($getCurrentFace(this), text);
}
;
defineSeed(309, 1, makeCastMap([Q$ShowcaseConstants]));
_.cwDialogBoxCaption = function cwDialogBoxCaption(){
  return 'Sample DialogBox';
}
;
_.cwDialogBoxClose = function cwDialogBoxClose(){
  return 'Close';
}
;
_.cwDialogBoxDetails = function cwDialogBoxDetails(){
  return 'This is an example of a standard dialog box component.';
}
;
_.cwDialogBoxItem = function cwDialogBoxItem(){
  return 'item';
}
;
_.cwDialogBoxListBoxInfo = function cwDialogBoxListBoxInfo(){
  return 'This list box demonstrates that you can drag the popup over it. This obscure corner case renders incorrectly for many other libraries.';
}
;
_.cwDialogBoxShowButton = function cwDialogBoxShowButton(){
  return 'Show Dialog Box';
}
;
function $createDialogBox(this$static){
  var closeButton, details, dialogBox$2, dialogContents, image;
  dialogBox$2 = new DialogBox_0;
  $ensureDebugId(dialogBox$2, 'cwDialogBox');
  $setText_2(dialogBox$2, this$static.com$google$gwt$sample$showcase$client$content$popups$CwDialogBox$$constants.cwDialogBoxCaption());
  dialogContents = new VerticalPanel_0;
  $setSpacing(dialogContents, 4);
  $setWidget_1(dialogBox$2, dialogContents);
  details = new HTML_1(this$static.com$google$gwt$sample$showcase$client$content$popups$CwDialogBox$$constants.cwDialogBoxDetails());
  $add_16(dialogContents, details);
  dialogContents.setCellHorizontalAlignment(details, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  image = new Image_1($images(($clinit_Showcase$() , MODULE$_4)).jimmy());
  $add_16(dialogContents, image);
  dialogContents.setCellHorizontalAlignment(image, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  closeButton = new Button_2(this$static.com$google$gwt$sample$showcase$client$content$popups$CwDialogBox$$constants.cwDialogBoxClose(), ($clinit_Handlers$() , MODULE$_3).fn2clickHandler(new CwDialogBox$$anonfun$2_0(dialogBox$2)));
  $add_16(dialogContents, closeButton);
  $isRTL(getCurrentLocale())?dialogContents.setCellHorizontalAlignment(closeButton, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT)):dialogContents.setCellHorizontalAlignment(closeButton, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT));
  return dialogBox$2;
}

function $onInitialize_24(this$static){
  var dialogBox$1, list$1, listDesc, openButton, vPanel;
  dialogBox$1 = $createDialogBox(this$static);
  $setGlassEnabled(dialogBox$1, true);
  $setAnimationEnabled_0(dialogBox$1, true);
  openButton = new Button_2(this$static.com$google$gwt$sample$showcase$client$content$popups$CwDialogBox$$constants.cwDialogBoxShowButton(), ($clinit_Handlers$() , MODULE$_3).fn2clickHandler(new CwDialogBox$$anonfun$1_0(dialogBox$1)));
  listDesc = new HTML_1('<br><br><br>' + this$static.com$google$gwt$sample$showcase$client$content$popups$CwDialogBox$$constants.cwDialogBoxListBoxInfo());
  list$1 = new ListBox_0;
  $setVisibleItemCount(list$1, 1);
  $foreach$mVc$sp($until_0($intWrapper(($clinit_Predef$() , MODULE$_11 , 10)), 0), new CwDialogBox$$anonfun$onInitialize$1_0(this$static, list$1));
  vPanel = new VerticalPanel_0;
  $setSpacing(vPanel, 8);
  $add_16(vPanel, openButton);
  $add_16(vPanel, listDesc);
  $add_16(vPanel, list$1);
  return vPanel;
}

defineSeed(473, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_25(){
  this.callback$1.onSuccess_0($onInitialize_24(this.$outer$u0020));
}
;
function $$init_373(){
}

function $apply_59(this$static){
  $center(this$static.dialogBox$1);
  $show_0(this$static.dialogBox$1);
}

function CwDialogBox$$anonfun$1_0(dialogBox$1){
  $$init_373();
  this.dialogBox$1 = dialogBox$1;
  AbstractFunction1_0.call(this);
}

defineSeed(474, 266, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwDialogBox$$anonfun$1_0);
_.apply_0 = function apply_68(v1){
  $apply_59(this, dynamicCast(v1, Q$ClickEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.dialogBox$1 = null;
function $$init_374(){
}

function $apply_60(this$static){
  $hide_1(this$static.dialogBox$2);
}

function CwDialogBox$$anonfun$2_0(dialogBox$2){
  $$init_374();
  this.dialogBox$2 = dialogBox$2;
  AbstractFunction1_0.call(this);
}

defineSeed(475, 266, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwDialogBox$$anonfun$2_0);
_.apply_0 = function apply_69(v1){
  $apply_60(this, dynamicCast(v1, Q$ClickEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.dialogBox$2 = null;
function $$init_375(){
}

function $apply$mcVI$sp_5(this$static, v1){
  $addItem(this$static.list$1, this$static.$outer$u0020.com$google$gwt$sample$showcase$client$content$popups$CwDialogBox$$constants.cwDialogBoxItem() + ' ' + boxToInteger(v1));
}

function $apply_61(this$static, i){
  $apply$mcVI$sp_5(this$static, i);
}

function CwDialogBox$$anonfun$onInitialize$1_0($outer, list$1){
  $$init_375();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.list$1 = list$1;
  AbstractFunction1$mcVI$sp_0.call(this);
}

defineSeed(476, 441, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwDialogBox$$anonfun$onInitialize$1_0);
_.apply$mcVI$sp = function apply$mcVI$sp_6(v1){
  $apply$mcVI$sp_5(this, v1);
}
;
_.apply_2 = function apply_70(i){
  $apply_61(this, i);
}
;
_.apply_0 = function apply_71(v1){
  $apply_61(this, unboxToInt(v1));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.$outer$u0020 = null;
_.list$1 = null;
defineSeed(593, 303, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$HasWordWrap, Q$IsWidget, Q$UIObject, Q$Widget]));
_.setText = function setText_1(text){
  $setText_0(this, text);
}
;
function $setText_1(this$static, text){
  this$static.face = createDiv();
  setStyleName_0(this$static.face, 'html-face', true);
  setInnerText_1(this$static.face, text);
  $updateButtonFace(this$static);
}

defineSeed(596, 1, {});
_.setText = function setText_2(text){
  $setText_1(this, text);
}
;
function $setGlassEnabled(this$static, enabled){
  this$static.isGlassEnabled = enabled;
  if (enabled && isNull(this$static.glass)) {
    this$static.glass = $createDivElement(get_1());
    $setClassName(this$static.glass, 'gwt-PopupPanelGlass');
    $setPosition($getStyle(this$static.glass), ($clinit_Style$Position() , ABSOLUTE));
    $setLeft($getStyle(this$static.glass), 0, ($clinit_Style$Unit() , PX));
    $setTop($getStyle(this$static.glass), 0, ($clinit_Style$Unit() , PX));
  }
}

function $getCellElement(this$static, row, cell){
  return $getCellElement_0(this$static.decPanel, row, cell);
}

function $getCellElement_0(this$static, row, cell){
  var td, tr;
  tr = getChild(this$static.tbody, row);
  td = getChild(tr, cell);
  return getFirstChild(td);
}

function $$init_477(){
}

function $beginDragging(this$static, event_0){
  $onMouseDown(this$static, (this$static.caption.asWidget() , $getX(event_0)), $getY(event_0));
}

function $continueDragging(this$static, event_0){
  $onMouseMove(this$static, (this$static.caption.asWidget() , $getX(event_0)), $getY(event_0));
}

function $endDragging(this$static, event_0){
  $onMouseUp(this$static, (this$static.caption.asWidget() , $getX(event_0) , $getY(event_0)));
}

function $hide_1(this$static){
  if (isNotNull(this$static.resizeHandlerRegistration)) {
    this$static.resizeHandlerRegistration.removeHandler();
    this$static.resizeHandlerRegistration = null;
  }
  $hide(this$static);
}

function $isCaptionEvent(this$static, event_0){
  var target;
  target = $getEventTarget(event_0);
  if (is_0(target)) {
    return $isOrHasChild($getParentElement($getCellElement(this$static, 0, 1)), as(target));
  }
  return false;
}

function $onMouseDown(this$static, x, y){
  if (isNull(getCaptureElement())) {
    this$static.dragging = true;
    setCapture($getElement(this$static));
    this$static.dragStartX = x;
    this$static.dragStartY = y;
  }
}

function $onMouseEnter(){
}

function $onMouseLeave(){
}

function $onMouseMove(this$static, x, y){
  var absX, absY;
  if (this$static.dragging) {
    absX = x + $getAbsoluteLeft_0(this$static);
    absY = y + $getAbsoluteTop_0(this$static);
    if (absX < this$static.clientLeft || absX >= this$static.windowWidth || absY < this$static.clientTop) {
      return;
    }
    $setPopupPosition(this$static, absX - this$static.dragStartX, absY - this$static.dragStartY);
  }
}

function $onMouseUp(this$static){
  this$static.dragging = false;
  releaseCapture($getElement(this$static));
}

function $setText_2(this$static, text){
  this$static.caption.setText(text);
}

function $show_0(this$static){
  isNull(this$static.resizeHandlerRegistration) && (this$static.resizeHandlerRegistration = addResizeHandler(new DialogBox$1_0(this$static)));
  $show(this$static);
}

function DialogBox_0(){
  $clinit_PopupPanel();
  DialogBox_1.call(this, false);
}

function DialogBox_1(autoHide){
  DialogBox_2.call(this, autoHide, true);
}

function DialogBox_2(autoHide, modal){
  DialogBox_3.call(this, autoHide, modal, new DialogBox$CaptionImpl_0);
}

function DialogBox_3(autoHide, modal, captionWidget){
  var mouseHandler, td;
  DecoratedPopupPanel_2.call(this, autoHide, modal, 'dialog');
  $$init_477();
  isNotNull(captionWidget) || throwAssertionError_Object('The caption must not be null');
  $removeFromParent(captionWidget.asWidget());
  this.caption = captionWidget;
  td = $getCellElement(this, 0, 1);
  appendChild(td, $getElement(this.caption.asWidget()));
  $adopt(this, this.caption.asWidget());
  this.setStyleName('gwt-DialogBox');
  this.windowWidth = getClientWidth();
  this.clientLeft = $getBodyOffsetLeft(get_1());
  this.clientTop = $getBodyOffsetTop(get_1());
  mouseHandler = new DialogBox$MouseHandler_0(this);
  $addDomHandler(this, mouseHandler, getType_15());
  $addDomHandler(this, mouseHandler, getType_19());
  $addDomHandler(this, mouseHandler, getType_16());
  $addDomHandler(this, mouseHandler, getType_18());
  $addDomHandler(this, mouseHandler, getType_17());
}

defineSeed(608, 599, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$AcceptsOneWidget, Q$HasOneWidget, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$PopupPanel, Q$SimplePanel, Q$UIObject, Q$Widget, Q$Iterable]), DialogBox_0);
_.doAttachChildren = function doAttachChildren_2(){
  try {
    $doAttachChildren(this);
  }
   finally {
    this.caption.asWidget().onAttach();
  }
}
;
_.doDetachChildren = function doDetachChildren_2(){
  try {
    $doDetachChildren(this);
  }
   finally {
    this.caption.asWidget().onDetach();
  }
}
;
_.getText = function getText_4(){
  return this.caption.getText();
}
;
_.hide = function hide_0(){
  $hide_1(this);
}
;
_.onBrowserEvent = function onBrowserEvent_3(event_0){
  switch ($getTypeInt(event_0)) {
    case 4:
    case 8:
    case 64:
    case 16:
    case 32:
      if (!this.dragging && !$isCaptionEvent(this, event_0)) {
        return;
      }

  }
  $onBrowserEvent(this, event_0);
}
;
_.onEnsureDebugId = function onEnsureDebugId_4(baseID){
  $onEnsureDebugId(this, baseID);
  $ensureDebugId(this.caption.asWidget(), baseID + '-caption');
  ensureDebugId($getCellElement(this, 1, 1), baseID, 'content');
}
;
_.onPreviewNativeEvent = function onPreviewNativeEvent_1(event_0){
  var nativeEvent;
  nativeEvent = $getNativeEvent_0(event_0);
  !$isCanceled_0(event_0) && $getTypeInt_0(event_0) == 4 && $isCaptionEvent(this, nativeEvent) && $preventDefault(nativeEvent);
  $onPreviewNativeEvent(this, event_0);
}
;
_.setText = function setText_3(text){
  $setText_2(this, text);
}
;
_.show = function show_0(){
  $show_0(this);
}
;
_.caption = null;
_.clientLeft = 0;
_.clientTop = 0;
_.dragStartX = 0;
_.dragStartY = 0;
_.dragging = false;
_.resizeHandlerRegistration = null;
_.windowWidth = 0;
function $$init_478(){
}

function DialogBox$1_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_478();
}

defineSeed(609, 1, makeCastMap([Q$ResizeHandler, Q$EventHandler]), DialogBox$1_0);
_.onResize = function onResize_2(event_0){
  this.this$0.windowWidth = $getWidth(event_0);
}
;
_.this$0 = null;
defineSeed(612, 613, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWordWrap, Q$IsWidget, Q$Label, Q$UIObject, Q$Widget]));
_.setText = function setText_4(text){
  $setText_3(this, text);
}
;
function $$init_482(){
}

function DialogBox$CaptionImpl_0(){
  $clinit_Label();
  HTML_0.call(this);
  $$init_482();
  this.setStyleName('Caption');
}

defineSeed(610, 611, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HTML, Q$HasVisibility, Q$HasWordWrap, Q$IsWidget, Q$Label, Q$UIObject, Q$Widget]), DialogBox$CaptionImpl_0);
function $$init_483(){
}

function DialogBox$MouseHandler_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_483();
}

defineSeed(614, 1, makeCastMap([Q$MouseDownHandler, Q$MouseMoveHandler, Q$MouseOutHandler, Q$MouseOverHandler, Q$MouseUpHandler, Q$EventHandler]), DialogBox$MouseHandler_0);
_.onMouseDown = function onMouseDown(event_0){
  $beginDragging(this.this$0, event_0);
}
;
_.onMouseMove = function onMouseMove(event_0){
  $continueDragging(this.this$0, event_0);
}
;
_.onMouseOut = function onMouseOut(event_0){
  $onMouseLeave(this.this$0.caption.asWidget());
}
;
_.onMouseOver = function onMouseOver(event_0){
  $onMouseEnter(this.this$0.caption.asWidget());
}
;
_.onMouseUp = function onMouseUp(event_0){
  $endDragging(this.this$0, event_0);
}
;
_.this$0 = null;
defineSeed(651, 240, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.setText = function setText_6(text){
  $setTextOrHtml_0(this.directionalTextHelper, text, false);
}
;
defineSeed(670, 241, makeCastMap([Q$HasVisibility, Q$MenuItem, Q$UIObject]));
_.setText = function setText_7(text){
  $setText_6(this, text);
}
;
defineSeed(693, 304, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.setText = function setText_9(text){
  this.impl.setText(text);
}
;
defineSeed(703, 239, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]));
_.setText = function setText_10(text){
  $setText_8(this, text);
}
;
defineSeed(721, 241, makeCastMap([Q$HasVisibility, Q$TreeItem, Q$UIObject]));
_.setText = function setText_11(text){
  $setWidget_4(this, null);
  setInnerText_1(this.contentElem, text);
}
;
defineSeed(754, 1, {});
_.setText = function setText_12(text){
  setElementProperty(this.elem, 'value', text);
}
;
defineSeed(756, 754, makeCastMap([Q$RichTextArea$Formatter]));
_.setText = function setText_13(text){
  isNull(this.beforeInitPlaceholder)?this.setTextImpl(text):setInnerText_1(this.beforeInitPlaceholder, text);
}
;
_.setTextImpl = function setTextImpl(text){
  this.elem.contentWindow.document.body.textContent = text;
}
;
var Lcom_google_gwt_user_client_ui_DialogBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox', 608, Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2_classLit), Lcom_google_gwt_user_client_ui_DialogBox$CaptionImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox$CaptionImpl', 610, Lcom_google_gwt_user_client_ui_HTML_2_classLit), Lcom_google_gwt_user_client_ui_DialogBox$MouseHandler_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox$MouseHandler', 614, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_DialogBox$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox$1', 609, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_popups_CwDialogBox$$anonfun$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.popups.', 'CwDialogBox$$anonfun$1', 474, Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_popups_CwDialogBox$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.popups.', 'CwDialogBox$$anonfun$onInitialize$1', 476, Lscala_runtime_AbstractFunction1$mcVI$sp_2_classLit), Lcom_google_gwt_sample_showcase_client_content_popups_CwDialogBox$$anonfun$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.popups.', 'CwDialogBox$$anonfun$2', 475, Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseDownEvent', 116, Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit), Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseUpEvent', 120, Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit), Lcom_google_gwt_event_dom_client_MouseMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseMoveEvent', 117, Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit), Lcom_google_gwt_event_dom_client_MouseOverEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseOverEvent', 119, Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit), Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseOutEvent', 118, Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit);
$entry(onLoad)(15);
