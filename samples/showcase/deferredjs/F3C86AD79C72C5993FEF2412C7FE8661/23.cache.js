function $cancel_1(this$static){
  this$static.canceled = true;
}

function $getItem_0(this$static){
  return this$static.item;
}

function getType_25(){
  isNull(TYPE_16) && (TYPE_16 = new GwtEvent$Type_0);
  return TYPE_16;
}

defineSeed(310, 1, makeCastMap([Q$ShowcaseConstants]));
_.cwTabPanelTab0 = function cwTabPanelTab0(){
  return 'Click one of the tabs to see more content.';
}
;
_.cwTabPanelTab2 = function cwTabPanelTab2(){
  return 'Tabs are highly customizable using CSS.';
}
;
_.cwTabPanelTabs = function cwTabPanelTabs(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwTabPanelTabs'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Home', 'GWT Logo', 'More Info']);
    this.cache.put('cwTabPanelTabs', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
function $onInitialize_20(this$static){
  var homeText, moreInfo, tabPanel, tabTitles, vPanel;
  tabPanel = new DecoratedTabPanel_0;
  tabPanel.setWidth('400px');
  $setAnimationEnabled_1(tabPanel, true);
  tabTitles = this$static.constants.cwTabPanelTabs();
  homeText = new HTML_1(this$static.constants.cwTabPanelTab0());
  $add_8(tabPanel, homeText, tabTitles[0]);
  vPanel = new VerticalPanel_0;
  $add_16(vPanel, new Image_1($images(($clinit_Showcase$() , MODULE$_4)).gwtLogo()));
  $add_8(tabPanel, vPanel, tabTitles[1]);
  moreInfo = new HTML_1(this$static.constants.cwTabPanelTab2());
  $add_8(tabPanel, moreInfo, tabTitles[2]);
  $selectTab_2(tabPanel, 0);
  $ensureDebugId(tabPanel, 'cwTabPanel');
  return tabPanel;
}

defineSeed(461, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_21(){
  this.callback$1.onSuccess_0($onInitialize_20(this.$outer$u0020));
}
;
function $insert_1(this$static, w, beforeIndex){
  var container;
  container = $createWidgetContainer();
  insertChild($getElement(this$static), container, beforeIndex);
  $insert(this$static, w, container, beforeIndex, true);
  $finishWidgetInitialization(container, w);
}

function $setAnimationEnabled(this$static, enable){
  this$static.isAnimationEnabled = enable;
}

function $addBeforeSelectionHandler(this$static, handler){
  return $addHandler_1(this$static, handler, getType_25());
}

function $addTabListener(this$static, listener){
  add_16(this$static, listener);
}

function $removeTab(this$static, index){
  var toRemove;
  $checkTabIndex(this$static, index);
  toRemove = $getWidget_0(this$static.panel, index + 1);
  jsEquals(toRemove, this$static.selectedTab) && (this$static.selectedTab = null);
  $remove_8(this$static.panel, toRemove);
}

function $clinit_DecoratedTabBar(){
  $clinit_DecoratedTabBar = nullMethod;
  $clinit_UIObject();
  TAB_ROW_STYLES = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['tabTop', 'tabMiddle']);
  'gwt-DecoratedTabBar';
}

var TAB_ROW_STYLES;
function $$init_476(this$static){
  this$static.tabBar = new TabPanel$UnmodifiableTabBar_0(this$static);
  this$static.deck = new TabPanel$TabbedDeckPanel_0(this$static.tabBar);
}

function $add_8(this$static, w, tabText){
  $insert_3(this$static, w, tabText, $getWidgetCount_0(this$static));
}

function $addSelectionHandler_0(this$static, handler){
  return $addHandler_1(this$static, handler, getType_29());
}

function $getTabBar_0(this$static){
  return this$static.tabBar;
}

function $getWidgetCount_0(this$static){
  return $getWidgetCount(this$static.deck);
}

function $insert_3(this$static, widget, tabText, beforeIndex){
  $insert_4(this$static, widget, tabText, false, beforeIndex);
}

function $insert_4(this$static, widget, tabText, asHTML, beforeIndex){
  $insertProtected(this$static.deck, widget, tabText, asHTML, beforeIndex);
}

function $remove_6(this$static, widget){
  return $remove_11(this$static.deck, widget);
}

function $selectTab_2(this$static, index){
  $selectTab_3(this$static, index, true);
}

function $selectTab_3(this$static, index, fireEvents){
  $selectTab_1(this$static.tabBar, index, fireEvents);
}

function $setAnimationEnabled_1(this$static, enable){
  $setAnimationEnabled(this$static.deck, enable);
}

function TabPanel_0(){
  var panel;
  Composite_0.call(this);
  $$init_476(this);
  panel = new VerticalPanel_0;
  $add_16(panel, this.tabBar);
  $add_16(panel, this.deck);
  panel.setCellHeight(this.deck, '100%');
  this.tabBar.setWidth('100%');
  $addTabListener(this.tabBar, this);
  $initWidget(this, panel);
  this.setStyleName('gwt-TabPanel');
  this.deck.setStyleName('gwt-TabPanelBottom');
  setRole($getElement(this.deck), 'tabpanel');
}

defineSeed(608, 240, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsRenderable, Q$IsWidget, Q$SourcesTabEvents, Q$TabListener, Q$UIObject, Q$Widget, Q$Iterable]));
_.addSelectionHandler = function addSelectionHandler_1(handler){
  return $addSelectionHandler_0(this, handler);
}
;
_.createTabTextWrapper = function createTabTextWrapper_0(){
  return null;
}
;
_.iterator_0 = function iterator_5(){
  return $iterator_0(this.deck);
}
;
_.onBeforeTabSelected = function onBeforeTabSelected(sender, tabIndex){
  var event_0;
  event_0 = fire_1(this, valueOf_14(tabIndex));
  return isNull(event_0) || !$isCanceled(event_0);
}
;
_.onEnsureDebugId = function onEnsureDebugId_3(baseID){
  $onEnsureDebugId(this, baseID);
  $ensureDebugId(this.tabBar, baseID + '-bar');
  $ensureDebugId(this.deck, baseID + '-bottom');
}
;
_.onTabSelected = function onTabSelected(sender, tabIndex){
  $showWidget(this.deck, tabIndex);
  fire_7(this, valueOf_14(tabIndex));
}
;
_.remove_3 = function remove_10(widget){
  return $remove_6(this, widget);
}
;
function $$init_477(){
}

function DecoratedTabPanel_0(){
  TabPanel_0.call(this);
  $$init_477();
  $setStylePrimaryName(this, 'gwt-DecoratedTabPanel');
  $setStylePrimaryName($getTabBar_0(this), 'gwt-DecoratedTabBar');
}

defineSeed(607, 608, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsRenderable, Q$IsWidget, Q$SourcesTabEvents, Q$TabListener, Q$UIObject, Q$Widget, Q$Iterable]), DecoratedTabPanel_0);
_.createTabTextWrapper = function createTabTextWrapper_1(){
  return new DecoratorPanel_1(($clinit_DecoratedTabBar() , TAB_ROW_STYLES), 1);
}
;
function $$init_527(){
}

function ListenerWrapper$WrappedTabListener_0(listener){
  ListenerWrapper_0.call(this, listener);
  $$init_527();
}

function add_16(source, listener){
  var t;
  t = new ListenerWrapper$WrappedTabListener_0(listener);
  $addBeforeSelectionHandler(source, t);
  $addSelectionHandler(source, t);
}

defineSeed(663, 661, makeCastMap([Q$BeforeSelectionHandler, Q$SelectionHandler, Q$EventHandler]), ListenerWrapper$WrappedTabListener_0);
_.onBeforeSelection = function onBeforeSelection(event_0){
  dynamicCast($getListener(this), Q$TabListener).onBeforeTabSelected(dynamicCast($getSource_0(event_0), Q$SourcesTabEvents), $intValue_1(dynamicCast($getItem_0(event_0), Q$Integer))) || $cancel_1(event_0);
}
;
_.onSelection = function onSelection_5(event_0){
  dynamicCast($getListener(this), Q$TabListener).onTabSelected(dynamicCast($getSource_0(event_0), Q$SourcesTabEvents), $intValue_1(dynamicCast($getSelectedItem(event_0), Q$Integer)));
}
;
function $$init_577(){
}

function $insertProtected(this$static, w, tabText, asHTML, beforeIndex){
  var idx;
  idx = $getWidgetIndex(this$static, w);
  if (idx != -1) {
    $remove_11(this$static, w);
    idx < beforeIndex && --beforeIndex;
  }
  $insertTabProtected(this$static.tabBar, tabText, asHTML, beforeIndex);
  $insert_1(this$static, w, beforeIndex);
}

function $remove_11(this$static, w){
  var idx;
  idx = $getWidgetIndex(this$static, w);
  if (idx != -1) {
    $removeTabProtected(this$static.tabBar, idx);
    return $remove_4(this$static, w);
  }
  return false;
}

function TabPanel$TabbedDeckPanel_0(tabBar){
  DeckPanel_0.call(this);
  $$init_577();
  this.tabBar = tabBar;
}

defineSeed(716, 599, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Iterable]), TabPanel$TabbedDeckPanel_0);
_.add_1 = function add_19(w){
  throw new UnsupportedOperationException_1('Use TabPanel.add() to alter the DeckPanel');
}
;
_.remove_3 = function remove_22(w){
  return $remove_11(this, w);
}
;
_.tabBar = null;
function $$init_578(){
}

function $insertTabProtected(this$static, text, asHTML, beforeIndex){
  $insertTab_0(this$static, text, asHTML, beforeIndex);
}

function $removeTabProtected(this$static, index){
  $removeTab(this$static, index);
}

function TabPanel$UnmodifiableTabBar_0(this$0){
  this.this$0 = this$0;
  TabBar_0.call(this);
  $$init_578();
}

defineSeed(717, 606, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$SourcesTabEvents, Q$TabBar, Q$UIObject, Q$Widget]), TabPanel$UnmodifiableTabBar_0);
_.createTabTextWrapper = function createTabTextWrapper_2(){
  return this.this$0.createTabTextWrapper();
}
;
_.insertTab = function insertTab_0(text, asHTML, beforeIndex){
  throw new UnsupportedOperationException_1('Use TabPanel.insert() to alter the TabBar');
}
;
_.this$0 = null;
var Lcom_google_gwt_user_client_ui_TabPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TabPanel', 608, Lcom_google_gwt_user_client_ui_Composite_2_classLit), Lcom_google_gwt_user_client_ui_DecoratedTabPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DecoratedTabPanel', 607, Lcom_google_gwt_user_client_ui_TabPanel_2_classLit), Lcom_google_gwt_user_client_ui_TabPanel$TabbedDeckPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TabPanel$TabbedDeckPanel', 716, Lcom_google_gwt_user_client_ui_DeckPanel_2_classLit), Lcom_google_gwt_user_client_ui_TabPanel$UnmodifiableTabBar_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TabPanel$UnmodifiableTabBar', 717, Lcom_google_gwt_user_client_ui_TabBar_2_classLit), Lcom_google_gwt_user_client_ui_ListenerWrapper$WrappedTabListener_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ListenerWrapper$WrappedTabListener', 663, Lcom_google_gwt_user_client_ui_ListenerWrapper_2_classLit);
$entry(onLoad)(23);
