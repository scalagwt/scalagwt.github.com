function $getLayoutData(this$static){
  return this$static.layoutData;
}

function $setLayoutData(this$static, layoutData){
  this$static.layoutData = layoutData;
}

defineSeed(310, 1, makeCastMap([Q$ShowcaseConstants]));
_.cwDockPanelCenter = function cwDockPanelCenter(){
  return "This is a <code>ScrollPanel<\/code> contained at the center of a <code>DockPanel<\/code>.  By putting some fairly large contents in the middle and setting its size explicitly, it becomes a scrollable area within the page, but without requiring the use of an IFRAME.<br><br>Here's quite a bit more meaningless text that will serve primarily to make this thing scroll off the bottom of its visible area.  Otherwise, you might have to make it really, really small in order to see the nifty scroll bars!";
}
;
_.cwDockPanelEast = function cwDockPanelEast(){
  return 'This is the east component';
}
;
_.cwDockPanelNorth1 = function cwDockPanelNorth1(){
  return 'This is the first north component';
}
;
_.cwDockPanelNorth2 = function cwDockPanelNorth2(){
  return 'This is the second north component';
}
;
_.cwDockPanelSouth1 = function cwDockPanelSouth1(){
  return 'This is the first south component';
}
;
_.cwDockPanelSouth2 = function cwDockPanelSouth2(){
  return 'This is the second south component';
}
;
_.cwDockPanelWest = function cwDockPanelWest(){
  return 'This is the west component';
}
;
function $onInitialize_16(this$static){
  var contents, dock, scroller;
  dock = new DockPanel_0;
  dock.setStyleName('cw-DockPanel');
  $setSpacing(dock, 4);
  $setHorizontalAlignment(dock, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $add_9(dock, new HTML_1(this$static.constants.cwDockPanelNorth1()), ($clinit_DockPanel() , NORTH));
  $add_9(dock, new HTML_1(this$static.constants.cwDockPanelSouth1()), ($clinit_DockPanel() , SOUTH));
  $add_9(dock, new HTML_1(this$static.constants.cwDockPanelEast()), ($clinit_DockPanel() , EAST));
  $add_9(dock, new HTML_1(this$static.constants.cwDockPanelWest()), ($clinit_DockPanel() , WEST));
  $add_9(dock, new HTML_1(this$static.constants.cwDockPanelNorth2()), ($clinit_DockPanel() , NORTH));
  $add_9(dock, new HTML_1(this$static.constants.cwDockPanelSouth2()), ($clinit_DockPanel() , SOUTH));
  contents = new HTML_1(this$static.constants.cwDockPanelCenter());
  scroller = new ScrollPanel_1(contents);
  $setSize_1(scroller, '400px', '100px');
  $add_9(dock, scroller, ($clinit_DockPanel() , CENTER));
  $ensureDebugId(dock, 'cwDockPanel');
  return dock;
}

defineSeed(450, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_17(){
  this.callback$1.onSuccess_0($onInitialize_16(this.$outer$u0020));
}
;
function $clinit_DockPanel(){
  $clinit_DockPanel = nullMethod;
  $clinit_UIObject();
  CENTER = new DockPanel$DockLayoutConstant_0;
  LINE_START = new DockPanel$DockLayoutConstant_0;
  LINE_END = new DockPanel$DockLayoutConstant_0;
  EAST = new DockPanel$DockLayoutConstant_0;
  NORTH = new DockPanel$DockLayoutConstant_0;
  SOUTH = new DockPanel$DockLayoutConstant_0;
  WEST = new DockPanel$DockLayoutConstant_0;
}

function $$init_493(this$static){
  this$static.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this$static.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
}

function $add_9(this$static, widget, direction){
  var layout;
  if (jsEquals(direction, CENTER)) {
    if (jsEquals(widget, this$static.center)) {
      return;
    }
     else if (isNotNull(this$static.center)) {
      throw new IllegalArgumentException_1('Only one CENTER widget may be added');
    }
  }
  $removeFromParent(widget);
  $add_17($getChildren(this$static), widget);
  jsEquals(direction, CENTER) && (this$static.center = widget);
  layout = new DockPanel$LayoutData_0(direction);
  $setLayoutData(widget, layout);
  $setCellHorizontalAlignment_0(this$static, widget, this$static.horzAlign);
  $setCellVerticalAlignment_0(this$static, widget, this$static.vertAlign);
  $realizeTable(this$static);
  $adopt(this$static, widget);
}

function $realizeTable(this$static){
  var bodyElem, centerTd, child, colCount, dir, i, it, layout, logicalLeftCol, logicalRightCol, northRow, row, rowCount, rows, southRow, td;
  bodyElem = $getBody_0(this$static);
  while (getChildCount(bodyElem) > 0) {
    removeChild(bodyElem, getChild(bodyElem, 0));
  }
  rowCount = 1;
  colCount = 1;
  for (it = $iterator_2($getChildren(this$static)); it.hasNext();) {
    child = dynamicCast(it.next_0(), Q$Widget);
    dir = dynamicCast($getLayoutData(child), Q$DockPanel$LayoutData).direction_0;
    jsEquals(dir, NORTH) || jsEquals(dir, SOUTH)?++rowCount:(jsEquals(dir, EAST) || jsEquals(dir, WEST) || jsEquals(dir, LINE_START) || jsEquals(dir, LINE_END)) && ++colCount;
  }
  rows = initDim(_3Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$DockPanel$TmpRow, rowCount, 0);
  for (i = 0; i < rowCount; ++i) {
    rows[i] = new DockPanel$TmpRow_0;
    rows[i].tr = createTR();
    appendChild(bodyElem, rows[i].tr);
  }
  logicalLeftCol = 0;
  logicalRightCol = colCount - 1;
  northRow = 0;
  southRow = rowCount - 1;
  centerTd = null;
  for (it = $iterator_2($getChildren(this$static)); it.hasNext();) {
    child = dynamicCast(it.next_0(), Q$Widget);
    layout = dynamicCast($getLayoutData(child), Q$DockPanel$LayoutData);
    td = createTD();
    layout.td = td;
    setElementProperty(layout.td, 'align', layout.hAlign);
    setStyleAttribute(layout.td, 'verticalAlign', layout.vAlign);
    setElementProperty(layout.td, 'width', layout.width_0);
    setElementProperty(layout.td, 'height', layout.height_0);
    if (jsEquals(layout.direction_0, NORTH)) {
      insertChild(rows[northRow].tr, td, rows[northRow].center);
      appendChild(td, $getElement(child));
      setElementPropertyInt(td, 'colSpan', logicalRightCol - logicalLeftCol + 1);
      ++northRow;
    }
     else if (jsEquals(layout.direction_0, SOUTH)) {
      insertChild(rows[southRow].tr, td, rows[southRow].center);
      appendChild(td, $getElement(child));
      setElementPropertyInt(td, 'colSpan', logicalRightCol - logicalLeftCol + 1);
      --southRow;
    }
     else if (jsEquals(layout.direction_0, CENTER)) {
      centerTd = td;
    }
     else if ($shouldAddToLogicalLeftOfTable(layout.direction_0)) {
      row = rows[northRow];
      insertChild(row.tr, td, row.center++);
      appendChild(td, $getElement(child));
      setElementPropertyInt(td, 'rowSpan', southRow - northRow + 1);
      ++logicalLeftCol;
    }
     else if ($shouldAddToLogicalRightOfTable(layout.direction_0)) {
      row = rows[northRow];
      insertChild(row.tr, td, row.center);
      appendChild(td, $getElement(child));
      setElementPropertyInt(td, 'rowSpan', southRow - northRow + 1);
      --logicalRightCol;
    }
  }
  if (isNotNull(this$static.center)) {
    row = rows[northRow];
    insertChild(row.tr, centerTd, row.center);
    appendChild(centerTd, $getElement(this$static.center));
  }
}

function $setCellHorizontalAlignment_0(this$static, w, align){
  var data;
  data = dynamicCast($getLayoutData(w), Q$DockPanel$LayoutData);
  data.hAlign = $getTextAlignString(align);
  isNotNull(data.td) && $setCellHorizontalAlignment(data.td, align);
}

function $setCellVerticalAlignment_0(this$static, w, align){
  var data;
  data = dynamicCast($getLayoutData(w), Q$DockPanel$LayoutData);
  data.vAlign = $getVerticalAlignString(align);
  isNotNull(data.td) && $setCellVerticalAlignment(data.td, align);
}

function $setHorizontalAlignment(this$static, align){
  this$static.horzAlign = align;
}

function $shouldAddToLogicalLeftOfTable(widgetDirection){
  jsEquals(widgetDirection, LINE_START) || jsEquals(widgetDirection, LINE_END) || jsEquals(widgetDirection, EAST) || jsEquals(widgetDirection, WEST) || throwAssertionError();
  if (jsEquals(widgetDirection, LINE_START)) {
    return true;
  }
  if ($isRTL_0(getCurrentLocale())) {
    return jsEquals(widgetDirection, EAST);
  }
  return jsEquals(widgetDirection, WEST);
}

function $shouldAddToLogicalRightOfTable(widgetDirection){
  jsEquals(widgetDirection, LINE_START) || jsEquals(widgetDirection, LINE_END) || jsEquals(widgetDirection, EAST) || jsEquals(widgetDirection, WEST) || throwAssertionError();
  if (jsEquals(widgetDirection, LINE_END)) {
    return true;
  }
  if ($isRTL_0(getCurrentLocale())) {
    return jsEquals(widgetDirection, WEST);
  }
  return jsEquals(widgetDirection, EAST);
}

function DockPanel_0(){
  $clinit_DockPanel();
  CellPanel_0.call(this);
  $$init_493(this);
  setElementPropertyInt($getTable(this), 'cellSpacing', 0);
  setElementPropertyInt($getTable(this), 'cellPadding', 0);
}

function generateDebugId(direction, count){
  return jsEquals(direction, NORTH)?'north' + count:jsEquals(direction, SOUTH)?'south' + count:jsEquals(direction, WEST)?'west' + count:jsEquals(direction, EAST)?'east' + count:jsEquals(direction, LINE_START)?'linestart' + count:jsEquals(direction, LINE_END)?'lineend' + count:'center';
}

defineSeed(626, 594, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Iterable]), DockPanel_0);
_.onEnsureDebugId = function onEnsureDebugId_6(baseID){
  var child, count, countObj, debugID, dir, dirCount, it;
  $onEnsureDebugId(this, baseID);
  dirCount = new HashMap_0;
  it = $iterator_2($getChildren(this));
  while (it.hasNext()) {
    child = dynamicCast(it.next_0(), Q$Widget);
    dir = dynamicCast($getLayoutData(child), Q$DockPanel$LayoutData).direction_0;
    countObj = dynamicCast(dirCount.get(dir), Q$Integer);
    count = isNull(countObj)?1:$intValue_1(countObj);
    debugID = generateDebugId(dir, count);
    ensureDebugId(getParent($getElement(child)), baseID, debugID);
    dirCount.put(dir, valueOf_14(count + 1));
  }
}
;
_.remove_3 = function remove_12(w){
  var removed;
  removed = $remove_2(this, w);
  if (removed) {
    jsEquals(w, this.center) && (this.center = null);
    $realizeTable(this);
  }
  return removed;
}
;
_.setCellHeight = function setCellHeight_0(w, height){
  var data;
  data = dynamicCast($getLayoutData(w), Q$DockPanel$LayoutData);
  data.height_0 = height;
  isNotNull(data.td) && setStyleAttribute(data.td, 'height', data.height_0);
}
;
_.setCellHorizontalAlignment = function setCellHorizontalAlignment_0(w, align){
  $setCellHorizontalAlignment_0(this, w, align);
}
;
_.setCellWidth = function setCellWidth_0(w, width){
  var data;
  data = dynamicCast($getLayoutData(w), Q$DockPanel$LayoutData);
  data.width_0 = width;
  isNotNull(data.td) && setStyleAttribute(data.td, 'width', data.width_0);
}
;
_.center = null;
var CENTER, EAST, LINE_END, LINE_START, NORTH, SOUTH, WEST;
function $$init_494(){
}

function DockPanel$DockLayoutConstant_0(){
  Object_1.call(this);
  $$init_494();
}

defineSeed(627, 1, {}, DockPanel$DockLayoutConstant_0);
function $$init_495(this$static){
  this$static.hAlign = $getTextAlignString(($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT));
  this$static.vAlign = $getVerticalAlignString(($clinit_HasVerticalAlignment() , ALIGN_TOP));
}

function DockPanel$LayoutData_0(dir){
  Object_1.call(this);
  $$init_495(this);
  this.direction_0 = dir;
}

defineSeed(628, 1, makeCastMap([Q$DockPanel$LayoutData]), DockPanel$LayoutData_0);
_.direction_0 = null;
_.height_0 = '';
_.td = null;
_.width_0 = '';
function $$init_496(){
}

function DockPanel$TmpRow_0(){
  Object_1.call(this);
  $$init_496();
}

defineSeed(629, 1, makeCastMap([Q$DockPanel$TmpRow]), DockPanel$TmpRow_0);
_.center = 0;
_.tr = null;
var Lcom_google_gwt_user_client_ui_DockPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DockPanel', 626, Lcom_google_gwt_user_client_ui_CellPanel_2_classLit), Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DockPanel$TmpRow', 629, Ljava_lang_Object_2_classLit), _3Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'DockPanel$TmpRow;', 1335, Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit), Lcom_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DockPanel$DockLayoutConstant', 627, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_DockPanel$LayoutData_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DockPanel$LayoutData', 628, Ljava_lang_Object_2_classLit);
$entry(onLoad)(21);
