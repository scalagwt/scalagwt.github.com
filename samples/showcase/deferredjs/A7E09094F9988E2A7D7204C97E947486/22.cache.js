defineSeed(309, 1, makeCastMap([Q$ShowcaseConstants]));
_.cwDisclosurePanelFormAdvancedCriteria = function cwDisclosurePanelFormAdvancedCriteria(){
  return 'Advanced Criteria';
}
;
_.cwDisclosurePanelFormDescription = function cwDisclosurePanelFormDescription(){
  return 'Description:';
}
;
_.cwDisclosurePanelFormGender = function cwDisclosurePanelFormGender(){
  return 'Gender:';
}
;
_.cwDisclosurePanelFormGenderOptions = function cwDisclosurePanelFormGenderOptions(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwDisclosurePanelFormGenderOptions'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['male', 'female']);
    this.cache.put('cwDisclosurePanelFormGenderOptions', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwDisclosurePanelFormLocation = function cwDisclosurePanelFormLocation(){
  return 'Location:';
}
;
_.cwDisclosurePanelFormName = function cwDisclosurePanelFormName(){
  return 'Name:';
}
;
_.cwDisclosurePanelFormTitle = function cwDisclosurePanelFormTitle(){
  return '<b>Enter Search Criteria<\/b>';
}
;
function $createAdvancedForm(this$static){
  var advancedDisclosure, advancedOptions, cellFormatter, decPanel, genderOptions, genderPanel$1, layout;
  layout = new FlexTable_0;
  $setCellSpacing(layout, 6);
  layout.setWidth('300px');
  cellFormatter = $getFlexCellFormatter(layout);
  $setHTML_2(layout, 0, 0, this$static.constants.cwDisclosurePanelFormTitle());
  $setColSpan(cellFormatter, 0, 0, 2);
  $setHorizontalAlignment_0(cellFormatter, 0, 0, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $setHTML_2(layout, 1, 0, this$static.constants.cwDisclosurePanelFormName());
  $setWidget_2(layout, 1, 1, new TextBox_0);
  $setHTML_2(layout, 2, 0, this$static.constants.cwDisclosurePanelFormDescription());
  $setWidget_2(layout, 2, 1, new TextBox_0);
  genderPanel$1 = new HorizontalPanel_0;
  genderOptions = this$static.constants.cwDisclosurePanelFormGenderOptions();
  $refArrayOps(($clinit_Predef$() , MODULE$_11 , genderOptions), $classType_0(($clinit_FactoryClassManifest$() , MODULE$_60 , Ljava_lang_String_2_classLit), new CwDisclosurePanel$$anon$2_0)).foreach(new CwDisclosurePanel$$anonfun$createAdvancedForm$1_0(genderPanel$1));
  advancedOptions = new Grid_1(2, 2);
  $setCellSpacing(advancedOptions, 6);
  $setHTML_2(advancedOptions, 0, 0, this$static.constants.cwDisclosurePanelFormLocation());
  $setWidget_2(advancedOptions, 0, 1, new TextBox_0);
  $setHTML_2(advancedOptions, 1, 0, this$static.constants.cwDisclosurePanelFormGender());
  $setWidget_2(advancedOptions, 1, 1, genderPanel$1);
  advancedDisclosure = new DisclosurePanel_2(this$static.constants.cwDisclosurePanelFormAdvancedCriteria());
  $setAnimationEnabled_2(advancedDisclosure, true);
  $ensureDebugId(advancedDisclosure, 'cwDisclosurePanel');
  $setContent_0(advancedDisclosure, advancedOptions);
  $setWidget_2(layout, 3, 0, advancedDisclosure);
  $setColSpan(cellFormatter, 3, 0, 2);
  decPanel = new DecoratorPanel_0;
  decPanel.setWidget(layout);
  return decPanel;
}

function $onInitialize_15(this$static){
  var vPanel;
  vPanel = new VerticalPanel_0;
  $setSpacing(vPanel, 8);
  $add_16(vPanel, $createAdvancedForm(this$static));
  return vPanel;
}

defineSeed(445, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_16(){
  this.callback$1.onSuccess_0($onInitialize_15(this.$outer$u0020));
}
;
function $$init_344(){
}

function $newInstance_14(len){
  return initDim(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, len, 0);
}

function CwDisclosurePanel$$anon$2_0(){
  $$init_344();
  Object_1.call(this);
}

defineSeed(446, 1, {}, CwDisclosurePanel$$anon$2_0);
_.newInstance = function newInstance_14(len){
  return $newInstance_14(len);
}
;
function $$init_345(){
}

function $apply_50(this$static, genderOption){
  $add_11(this$static.genderPanel$1, new RadioButton_1('gender', genderOption));
}

function CwDisclosurePanel$$anonfun$createAdvancedForm$1_0(genderPanel$1){
  $$init_345();
  this.genderPanel$1 = genderPanel$1;
  AbstractFunction1_0.call(this);
}

defineSeed(447, 266, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwDisclosurePanel$$anonfun$createAdvancedForm$1_0);
_.apply_0 = function apply_54(v1){
  $apply_50(this, dynamicCast(v1, Q$String));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.genderPanel$1 = null;
function $clinit_DisclosurePanel(){
  $clinit_DisclosurePanel = nullMethod;
  $clinit_UIObject();
  DEFAULT_IMAGES = new DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator_0;
  350;
  'gwt-DisclosurePanel';
  'open';
  'closed';
  'header';
  'content';
}

function $$init_489(this$static){
  this$static.mainPanel = new VerticalPanel_0;
  this$static.contentWrapper = new SimplePanel_0;
  this$static.header = new DisclosurePanel$ClickableHeader_0(this$static);
}

function $addCloseHandler_0(this$static, handler){
  return $addHandler_1(this$static, handler, getType_26());
}

function $addOpenHandler(this$static, handler){
  return $addHandler_1(this$static, handler, getType_27());
}

function $fireEvent_2(this$static){
  this$static.isOpen?fire_5(this$static, this$static):fire_2(this$static, this$static);
}

function $getContent_0(this$static){
  return this$static.contentWrapper.getWidget();
}

function $setAnimationEnabled_2(this$static, enable){
  this$static.isAnimationEnabled = enable;
}

function $setContent_0(this$static, content_0){
  var currentContent;
  currentContent = $getContent_0(this$static);
  if (isNotNull(currentContent)) {
    this$static.contentWrapper.setWidget(null);
    currentContent.removeStyleName('content');
  }
  if (isNotNull(content_0)) {
    this$static.contentWrapper.setWidget(content_0);
    content_0.addStyleName('content');
    $setContentDisplay(this$static, false);
  }
}

function $setContentDisplay(this$static, animate){
  if (this$static.isOpen) {
    $removeStyleDependentName(this$static, 'closed');
    $addStyleDependentName(this$static, 'open');
  }
   else {
    $removeStyleDependentName(this$static, 'open');
    $addStyleDependentName(this$static, 'closed');
  }
  if (isNotNull($getContent_0(this$static))) {
    isNull(contentAnimation) && (contentAnimation = new DisclosurePanel$ContentAnimation_0);
    $setOpen_0(contentAnimation, this$static, animate && this$static.isAnimationEnabled);
  }
}

function $setHeader(this$static, headerWidget){
  this$static.header.setWidget(headerWidget);
}

function $setOpen(this$static, isOpen){
  if (this$static.isOpen != isOpen) {
    this$static.isOpen = isOpen;
    $setContentDisplay(this$static, true);
    $fireEvent_2(this$static);
  }
}

function DisclosurePanel_0(){
  Composite_0.call(this);
  $$init_489(this);
  $initWidget(this, this.mainPanel);
  $add_16(this.mainPanel, this.header);
  $add_16(this.mainPanel, this.contentWrapper);
  setStyleAttribute($getElement(this.contentWrapper), 'padding', '0px');
  setStyleAttribute($getElement(this.contentWrapper), 'overflow', 'hidden');
  this.setStyleName('gwt-DisclosurePanel');
  $setContentDisplay(this, false);
}

function DisclosurePanel_1(openImage, closedImage, headerText){
  DisclosurePanel_0.call(this);
  $setHeader(this, new DisclosurePanel$DefaultHeader_0(this, openImage, closedImage, headerText));
}

function DisclosurePanel_2(headerText){
  $clinit_DisclosurePanel();
  DisclosurePanel_1.call(this, DEFAULT_IMAGES.disclosurePanelOpen(), DEFAULT_IMAGES.disclosurePanelClosed(), headerText);
}

defineSeed(623, 239, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]), DisclosurePanel_2);
_.addCloseHandler = function addCloseHandler_2(handler){
  return $addCloseHandler_0(this, handler);
}
;
_.addOpenHandler = function addOpenHandler(handler){
  return $addOpenHandler(this, handler);
}
;
_.iterator_0 = function iterator_6(){
  return createWidgetIterator(this, initValues(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Widget, [$getContent_0(this)]));
}
;
_.onEnsureDebugId = function onEnsureDebugId_5(baseID){
  $onEnsureDebugId(this, baseID);
  $ensureDebugId(this.header, baseID + '-header');
}
;
_.remove_3 = function remove_11(w){
  if (jsEquals(w, $getContent_0(this))) {
    $setContent_0(this, null);
    return true;
  }
  return false;
}
;
_.isAnimationEnabled = false;
_.isOpen = false;
var DEFAULT_IMAGES, contentAnimation = null;
function $$init_490(){
}

function DisclosurePanel$ClickableHeader_0(this$0){
  $clinit_UIObject();
  var elem;
  this.this$0 = this$0;
  SimplePanel_1.call(this, createAnchor());
  $$init_490();
  elem = $getElement(this);
  setElementProperty(elem, 'href', 'javascript:void(0);');
  setStyleAttribute(elem, 'display', 'block');
  this.sinkEvents(1);
  this.setStyleName('header');
}

defineSeed(624, 256, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$AcceptsOneWidget, Q$HasOneWidget, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$SimplePanel, Q$UIObject, Q$Widget, Q$Iterable]), DisclosurePanel$ClickableHeader_0);
_.onBrowserEvent = function onBrowserEvent_4(event_0){
  switch (eventGetType(event_0)) {
    case 1:
      eventPreventDefault_0(event_0);
      $setOpen(this.this$0, !this.this$0.isOpen);
  }
}
;
_.this$0 = null;
function $$init_491(){
}

function $setOpen_0(this$static, panel, animate){
  $cancel(this$static);
  if (animate) {
    this$static.curPanel = panel;
    this$static.opening = panel.isOpen;
    $run(this$static, 350);
  }
   else {
    panel.contentWrapper.setVisible(panel.isOpen);
    panel.isOpen && $getContent_0(panel).setVisible(true);
  }
}

function DisclosurePanel$ContentAnimation_0(){
  Animation_0.call(this);
  $$init_491();
}

defineSeed(625, 3, {}, DisclosurePanel$ContentAnimation_0);
_.onComplete = function onComplete_2(){
  this.opening || this.curPanel.contentWrapper.setVisible(false);
  setStyleAttribute($getElement(this.curPanel.contentWrapper), 'height', 'auto');
  this.curPanel = null;
}
;
_.onStart = function onStart_2(){
  $onStart(this);
  if (this.opening) {
    this.curPanel.contentWrapper.setVisible(true);
    $getContent_0(this.curPanel).setVisible(true);
  }
}
;
_.onUpdate = function onUpdate_1(progress){
  var height, scrollHeight;
  scrollHeight = getElementPropertyInt($getElement(this.curPanel.contentWrapper), 'scrollHeight');
  height = round_int(progress * scrollHeight);
  this.opening || (height = scrollHeight - height);
  height = max_0(height, 1);
  setStyleAttribute($getElement(this.curPanel.contentWrapper), 'height', height + 'px');
  setStyleAttribute($getElement(this.curPanel.contentWrapper), 'width', 'auto');
}
;
_.curPanel = null;
_.opening = false;
function $$init_492(){
}

function $setStyle(this$static){
  this$static.imager.updateImage(this$static.this$0.isOpen, this$static.iconImage);
}

function $setText_5(this$static, text){
  setInnerText_1(this$static.labelTD, text);
}

function DisclosurePanel$DefaultHeader_0(this$0, openImage, closedImage, text){
  $clinit_UIObject();
  DisclosurePanel$DefaultHeader_1.call(this, this$0, new DisclosurePanel$DefaultHeader$2_0(this$0, closedImage, openImage), text);
}

function DisclosurePanel$DefaultHeader_1(this$0, imager, text){
  var imageTD, root, tbody, tr;
  this.this$0 = this$0;
  Widget_0.call(this);
  $$init_492();
  this.imager = imager;
  this.iconImage = imager.makeImage();
  root = createTable();
  tbody = createTBody();
  tr = createTR();
  imageTD = createTD();
  this.labelTD = createTD();
  $setElement_0(this, root);
  appendChild(root, tbody);
  appendChild(tbody, tr);
  appendChild(tr, imageTD);
  appendChild(tr, this.labelTD);
  setElementProperty(imageTD, 'align', 'center');
  setElementProperty(imageTD, 'valign', 'middle');
  setStyleAttribute(imageTD, 'width', $getWidth_0(this.iconImage) + 'px');
  appendChild(imageTD, $getElement(this.iconImage));
  $setText_5(this, text);
  $addOpenHandler(this$0, this);
  $addCloseHandler_0(this$0, this);
  $setStyle(this);
}

defineSeed(626, 240, makeCastMap([Q$CloseHandler, Q$HasAttachHandlers, Q$OpenHandler, Q$EventHandler, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), DisclosurePanel$DefaultHeader_0);
_.getText = function getText_8(){
  return getInnerText_1(this.labelTD);
}
;
_.onClose = function onClose_0(event_0){
  $setStyle(this);
}
;
_.onOpen = function onOpen_0(event_0){
  $setStyle(this);
}
;
_.setText = function setText_5(text){
  $setText_5(this, text);
}
;
_.iconImage = null;
_.imager = null;
_.labelTD = null;
_.this$0 = null;
function $$init_493(){
}

function DisclosurePanel$DefaultHeader$2_0(val$this$0, val$closedImage, val$openImage){
  this , val$this$0;
  this.val$closedImage = val$closedImage;
  this.val$openImage = val$openImage;
  Object_1.call(this);
  $$init_493();
}

defineSeed(627, 1, {}, DisclosurePanel$DefaultHeader$2_0);
_.makeImage = function makeImage(){
  return new Image_1(this.val$closedImage);
}
;
_.updateImage = function updateImage(open_0, image){
  open_0?$setResource(image, this.val$openImage):$setResource(image, this.val$closedImage);
}
;
_.val$closedImage = null;
_.val$openImage = null;
function $clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator(){
  $clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator = nullMethod;
  _instance0_4 = new DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator_0;
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAfklEQVR42mNgoDZITk4WosiAtLS0M6mpqb1Amp9cAy4B8X8gfpWenp5MiQEwfB6IbSgxAIaXArEcJQaA8Ddg+NQVFhZykmsADG8MDQ1lJseA5wQDFocBP0FRm5WVxUNOGGwEJi4VcmLhKtC5HuSkg8NA5+bjDCRCAG8UDUoAAIw8kVdwMG+3AAAAAElFTkSuQmCC';
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkElEQVR42mNgoCdITk4WIktjWloaf2pqai+QPkOy5vT09GSgxldA/B+IL5Fiqw0Qn4dq/E+0AUBFckC8FE0jYQMKCws5gf6sAyr6hkMzbgNCQ0OZgZIb8WgkzgvQAHtOtgEgkJWVxQONsp9kGYCUaFSweOsSOenAA6jxKtkGwAIZ6K18oAGHKcoLoKhmGHQAAOyGkVflBH+sAAAAAElFTkSuQmCC';
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjUlEQVR42mNgGD6gsLCQMy0t7TAQXyICn0lOThbCMCQ1NTUfKPmfEAaq68XqitDQUGaggqsEDHgFxPw4vZKenu6BzwCgfDLB8AAq3IjDgPNEBSgwgFSAin9iMcCG6FgBBRSa5qUkRWtWVhYPUNNzqOZvQCxHctoABRg02urITmCgAAUlMrINAKWNwZ2HAAhGkVd3k7/tAAAAAElFTkSuQmCC';
}

function $$init_494(){
}

function $disclosurePanelClosedInitializer(){
  disclosurePanelClosed = new ImageResourcePrototype_0('disclosurePanelClosed', fromTrustedString_0($isRTL_0(getCurrentLocale())?'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkElEQVR42mNgoCdITk4WIktjWloaf2pqai+QPkOy5vT09GSgxldA/B+IL5Fiqw0Qn4dq/E+0AUBFckC8FE0jYQMKCws5gf6sAyr6hkMzbgNCQ0OZgZIb8WgkzgvQAHtOtgEgkJWVxQONsp9kGYCUaFSweOsSOenAA6jxKtkGwAIZ6K18oAGHKcoLoKhmGHQAAOyGkVflBH+sAAAAAElFTkSuQmCC':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAfklEQVR42mNgoDZITk4WosiAtLS0M6mpqb1Amp9cAy4B8X8gfpWenp5MiQEwfB6IbSgxAIaXArEcJQaA8Ddg+NQVFhZykmsADG8MDQ1lJseA5wQDFocBP0FRm5WVxUNOGGwEJi4VcmLhKtC5HuSkg8NA5+bjDCRCAG8UDUoAAIw8kVdwMG+3AAAAAElFTkSuQmCC'), 0, 0, 16, 16, false, false);
}

function $disclosurePanelOpenInitializer(){
  disclosurePanelOpen = new ImageResourcePrototype_0('disclosurePanelOpen', fromTrustedString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjUlEQVR42mNgGD6gsLCQMy0t7TAQXyICn0lOThbCMCQ1NTUfKPmfEAaq68XqitDQUGaggqsEDHgFxPw4vZKenu6BzwCgfDLB8AAq3IjDgPNEBSgwgFSAin9iMcCG6FgBBRSa5qUkRWtWVhYPUNNzqOZvQCxHctoABRg02urITmCgAAUlMrINAKWNwZ2HAAhGkVd3k7/tAAAAAElFTkSuQmCC'), 0, 0, 16, 16, false, false);
}

function DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator_0(){
  $clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator();
  Object_1.call(this);
  $$init_494();
}

defineSeed(628, 1, {}, DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator_0);
_.disclosurePanelClosed = function disclosurePanelClosed_0(){
  return get_55();
}
;
_.disclosurePanelOpen = function disclosurePanelOpen_0(){
  return get_56();
}
;
var _instance0_4, disclosurePanelClosed = null, disclosurePanelOpen = null;
function $clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator$disclosurePanelClosedInitializer(){
  $clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator$disclosurePanelClosedInitializer = nullMethod;
  $disclosurePanelClosedInitializer(($clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator() , _instance0_4));
}

function get_55(){
  $clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator$disclosurePanelClosedInitializer();
  return $clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator() , disclosurePanelClosed;
}

function $clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator$disclosurePanelOpenInitializer(){
  $clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator$disclosurePanelOpenInitializer = nullMethod;
  $disclosurePanelOpenInitializer(($clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator() , _instance0_4));
}

function get_56(){
  $clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator$disclosurePanelOpenInitializer();
  return $clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator() , disclosurePanelOpen;
}

function $setResource(this$static, resource){
  $setUrlAndVisibleRect(this$static, resource.getSafeUri(), resource.getLeft(), resource.getTop(), resource.getWidth(), resource.getHeight());
}

function $setUrlAndVisibleRect(this$static, url, left, top_0, width, height){
  this$static.state.setUrlAndVisibleRect(this$static, url, left, top_0, width, height);
}

defineSeed(662, 663, {});
_.setUrlAndVisibleRect = function setUrlAndVisibleRect(image, url, left, top_0, width, height){
  if (!this.url.equals$(url) || this.left_0 != left || this.top_0 != top_0 || this.width != width || this.height != height) {
    this.url = url;
    this.left_0 = left;
    this.top_0 = top_0;
    this.width = width;
    this.height = height;
    impl_10.adjust($getElement(image), url, left, top_0, width, height);
    this.pendingNativeLoadEvent || $fireSyntheticLoadEvent(this, image);
  }
}
;
var Lcom_google_gwt_user_client_ui_DisclosurePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DisclosurePanel', 623, Lcom_google_gwt_user_client_ui_Composite_2_classLit), Lcom_google_gwt_user_client_ui_DisclosurePanel$ClickableHeader_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DisclosurePanel$ClickableHeader', 624, Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit), Lcom_google_gwt_user_client_ui_DisclosurePanel$ContentAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DisclosurePanel$ContentAnimation', 625, Lcom_google_gwt_animation_client_Animation_2_classLit), Lcom_google_gwt_user_client_ui_DisclosurePanel$DefaultHeader_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DisclosurePanel$DefaultHeader', 626, Lcom_google_gwt_user_client_ui_Widget_2_classLit), Lcom_google_gwt_user_client_ui_DisclosurePanel$DefaultHeader$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DisclosurePanel$DefaultHeader$2', 627, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_panels_CwDisclosurePanel$$anon$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.panels.', 'CwDisclosurePanel$$anon$2', 446, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_panels_CwDisclosurePanel$$anonfun$createAdvancedForm$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.panels.', 'CwDisclosurePanel$$anonfun$createAdvancedForm$1', 447, Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_user_client_ui_DisclosurePanel_1DefaultImages_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator', 628, Ljava_lang_Object_2_classLit);
$entry(onLoad)(22);
