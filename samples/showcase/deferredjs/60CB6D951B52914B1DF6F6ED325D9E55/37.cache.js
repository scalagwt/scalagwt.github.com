defineSeed(1, -1, {});
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
function isProdMode(){
  return true;
}

function $getDate(this$static){
  return this$static.getDate();
}

function $getDay(this$static){
  return this$static.getDay();
}

function $getFullYear(this$static){
  return this$static.getFullYear();
}

function $getHours(this$static){
  return this$static.getHours();
}

function $getMinutes(this$static){
  return this$static.getMinutes();
}

function $getMonth(this$static){
  return this$static.getMonth();
}

function $getSeconds(this$static){
  return this$static.getSeconds();
}

function $getTime(this$static){
  return this$static.getTime();
}

function $getTimezoneOffset(this$static){
  return this$static.getTimezoneOffset();
}

function create(){
  return new Date;
}

function create_0(milliseconds){
  return new Date(milliseconds);
}

function parse(dateString){
  return Date.parse(dateString);
}

defineSeed(35, 22, {});
_.scheduleFinally = function scheduleFinally(cmd){
  this.finallyCommands = push(this.finallyCommands, create_3(cmd));
}
;
_.scheduleFixedDelay = function scheduleFixedDelay(cmd, delayMs){
  $scheduleFixedDelay(cmd, delayMs);
}
;
defineSeed(43, 41, {});
_.replace_0 = function replace_0(a, start, end, toInsert){
  var s;
  s = $takeString(a);
  $appendNonNull(a, $substring_0(s, 0, start));
  $append(this, a, toInsert);
  $appendNonNull(a, $substring(s, end));
}
;
function $getNodeName(this$static){
  return this$static.nodeName;
}

function $getNodeType(this$static){
  return this$static.nodeType;
}

function is(o){
  try {
    return !!o && !!o.nodeType;
  }
   catch (e) {
    return false;
  }
}

function $getOffsetParent(this$static){
  return this$static.offsetParent;
}

function $setPropertyBoolean(this$static, name_0, value){
  this$static[name_0] = value;
}

function $setScrollLeft(this$static, scrollLeft){
  ($clinit_DOMImpl() , impl_0).setScrollLeft(this$static, scrollLeft);
}

function $setScrollTop(this$static, scrollTop){
  this$static.scrollTop = scrollTop;
}

function as(o){
  is_0(o) || throwAssertionError();
  return o;
}

function is_0(o){
  if (is(o)) {
    return is_1(o);
  }
  return false;
}

function is_1(node){
  return isNotNull(node) && $getNodeType(node) == 1;
}

function $createInputElement(doc, type){
  var e = doc.createElement('INPUT');
  e.type = type;
  return e;
}

function $eventGetClientX(evt){
  return evt.clientX || 0;
}

function $eventGetClientY(evt){
  return evt.clientY || 0;
}

function $getTouches(evt){
  return evt.touches;
}

function $selectClear(select){
  select.options.length = 0;
}

function $setScrollLeft_0(elem, left){
  elem.scrollLeft = left;
}

function $touchGetPageX(touch){
  return touch.pageX;
}

function $touchGetPageY(touch){
  return touch.pageY;
}

defineSeed(51, 1, {});
_.createButtonElement = function createButtonElement(doc, type){
  var e = doc.createElement('BUTTON');
  e.type = type;
  return e;
}
;
_.getBodyOffsetLeft = function getBodyOffsetLeft(doc){
  return 0;
}
;
_.getBodyOffsetTop = function getBodyOffsetTop(doc){
  return 0;
}
;
_.setScrollLeft = function setScrollLeft(elem, left){
  $setScrollLeft_0(elem, left);
}
;
function $getClientLeft(elem){
  return elem.clientLeft;
}

function $getClientTop(elem){
  return elem.clientTop;
}

defineSeed(53, 51, {});
_.createButtonElement = function createButtonElement_0(doc, type){
  return doc.createElement("<BUTTON type='" + type + "'><\/BUTTON>");
}
;
_.createInputRadioElement = function createInputRadioElement(doc, name_0){
  return doc.createElement("<INPUT type='RADIO' name='" + name_0 + "'>");
}
;
_.getBodyOffsetLeft = function getBodyOffsetLeft_0(doc){
  return $getClientLeft($getViewportElement(doc));
}
;
_.getBodyOffsetTop = function getBodyOffsetTop_0(doc){
  return $getClientTop($getViewportElement(doc));
}
;
defineSeed(52, 53, {});
_.setScrollLeft = function setScrollLeft_0(elem, left){
  $isRTL(elem) && (left += $getScrollWidth(elem) - $getClientWidth(elem));
  $setScrollLeft_0(elem, left);
}
;
function $createAnchorElement(this$static){
  return ($clinit_DOMImpl() , impl_0).createElement_0(this$static, 'a');
}

function $createPushButtonElement(this$static){
  return ($clinit_DOMImpl() , impl_0).createButtonElement(this$static, 'button');
}

function $createRadioInputElement(this$static, name_0){
  return ($clinit_DOMImpl() , impl_0).createInputRadioElement(this$static, name_0);
}

function $createScrollEvent(this$static){
  return $createHtmlEvent(this$static, 'scroll', false, false);
}

function $createTextAreaElement(this$static){
  return ($clinit_DOMImpl() , impl_0).createElement_0(this$static, 'textarea');
}

function $createTextInputElement(this$static){
  return $createInputElement(($clinit_DOMImpl() , impl_0 , this$static), 'text');
}

function $getBodyOffsetLeft(this$static){
  return ($clinit_DOMImpl() , impl_0).getBodyOffsetLeft(this$static);
}

function $getBodyOffsetTop(this$static){
  return ($clinit_DOMImpl() , impl_0).getBodyOffsetTop(this$static);
}

function $getScrollHeight_0(this$static){
  return $getScrollHeight($getViewportElement(this$static));
}

function $getScrollWidth_0(this$static){
  return $getScrollWidth($getViewportElement(this$static));
}

function $getClientX(this$static){
  return $eventGetClientX(($clinit_DOMImpl() , impl_0 , this$static));
}

function $getClientY(this$static){
  return $eventGetClientY(($clinit_DOMImpl() , impl_0 , this$static));
}

function $getTouches_0(this$static){
  return $getTouches(($clinit_DOMImpl() , impl_0 , this$static));
}

function $clear_0(this$static){
  $selectClear(($clinit_DOMImpl() , impl_0 , this$static));
}

function $setSize(this$static, size){
  this$static.size = size;
}

function $setDisplay(this$static, value){
  $setProperty_0(this$static, 'display', value.getCssName());
}

function $setHeight(this$static, value, unit){
  $setProperty(this$static, 'height', value, unit);
}

function $setOverflow(this$static, value){
  $setProperty_0(this$static, 'overflow', value.getCssName());
}

function $setPosition(this$static, value){
  $setProperty_0(this$static, 'position', value.getCssName());
}

function $setWidth(this$static, value, unit){
  $setProperty(this$static, 'width', value, unit);
}

function $clinit_Style$Display(){
  $clinit_Style$Display = nullMethod;
  NONE = new Style$Display$1_0('NONE', 0);
  BLOCK = new Style$Display$2_0('BLOCK', 1);
  INLINE = new Style$Display$3_0('INLINE', 2);
  INLINE_BLOCK = new Style$Display$4_0('INLINE_BLOCK', 3);
  $VALUES = initValues(_3Lcom_google_gwt_dom_client_Style$Display_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Display, [NONE, BLOCK, INLINE, INLINE_BLOCK]);
}

function $$init_38(){
}

function Style$Display_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
  $$init_38();
}

function valueOf_0(name_0){
  $clinit_Style$Display();
  return valueOf(($clinit_Style$Display$Map() , $MAP), name_0);
}

function values_0(){
  $clinit_Style$Display();
  return $VALUES;
}

defineSeed(68, 69, makeCastMap([Q$Style$Display, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES, BLOCK, INLINE, INLINE_BLOCK, NONE;
function $$init_39(){
}

function Style$Display$1_0(enum$name, enum$ordinal){
  Style$Display_0.call(this, enum$name, enum$ordinal);
  $$init_39();
}

defineSeed(70, 68, makeCastMap([Q$Style$Display, Q$Serializable, Q$Comparable, Q$Enum]), Style$Display$1_0);
_.getCssName = function getCssName(){
  return 'none';
}
;
function $$init_40(){
}

function Style$Display$2_0(enum$name, enum$ordinal){
  Style$Display_0.call(this, enum$name, enum$ordinal);
  $$init_40();
}

defineSeed(71, 68, makeCastMap([Q$Style$Display, Q$Serializable, Q$Comparable, Q$Enum]), Style$Display$2_0);
_.getCssName = function getCssName_0(){
  return 'block';
}
;
function $$init_41(){
}

function Style$Display$3_0(enum$name, enum$ordinal){
  Style$Display_0.call(this, enum$name, enum$ordinal);
  $$init_41();
}

defineSeed(72, 68, makeCastMap([Q$Style$Display, Q$Serializable, Q$Comparable, Q$Enum]), Style$Display$3_0);
_.getCssName = function getCssName_1(){
  return 'inline';
}
;
function $$init_42(){
}

function Style$Display$4_0(enum$name, enum$ordinal){
  Style$Display_0.call(this, enum$name, enum$ordinal);
  $$init_42();
}

defineSeed(73, 68, makeCastMap([Q$Style$Display, Q$Serializable, Q$Comparable, Q$Enum]), Style$Display$4_0);
_.getCssName = function getCssName_2(){
  return 'inline-block';
}
;
function $clinit_Style$Display$Map(){
  $clinit_Style$Display$Map = nullMethod;
  $MAP = createValueOfMap(($clinit_Style$Display() , $VALUES));
}

var $MAP;
function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = nullMethod;
  VISIBLE = new Style$Overflow$1_0('VISIBLE', 0);
  HIDDEN = new Style$Overflow$2_0('HIDDEN', 1);
  SCROLL = new Style$Overflow$3_0('SCROLL', 2);
  AUTO = new Style$Overflow$4_0('AUTO', 3);
  $VALUES_0 = initValues(_3Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Overflow, [VISIBLE, HIDDEN, SCROLL, AUTO]);
}

function $$init_43(){
}

function Style$Overflow_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
  $$init_43();
}

function valueOf_1(name_0){
  $clinit_Style$Overflow();
  return valueOf(($clinit_Style$Overflow$Map() , $MAP_0), name_0);
}

function values_1(){
  $clinit_Style$Overflow();
  return $VALUES_0;
}

defineSeed(75, 69, makeCastMap([Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_0, AUTO, HIDDEN, SCROLL, VISIBLE;
function $$init_44(){
}

function Style$Overflow$1_0(enum$name, enum$ordinal){
  Style$Overflow_0.call(this, enum$name, enum$ordinal);
  $$init_44();
}

defineSeed(76, 75, makeCastMap([Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]), Style$Overflow$1_0);
_.getCssName = function getCssName_3(){
  return 'visible';
}
;
function $$init_45(){
}

function Style$Overflow$2_0(enum$name, enum$ordinal){
  Style$Overflow_0.call(this, enum$name, enum$ordinal);
  $$init_45();
}

defineSeed(77, 75, makeCastMap([Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]), Style$Overflow$2_0);
_.getCssName = function getCssName_4(){
  return 'hidden';
}
;
function $$init_46(){
}

function Style$Overflow$3_0(enum$name, enum$ordinal){
  Style$Overflow_0.call(this, enum$name, enum$ordinal);
  $$init_46();
}

defineSeed(78, 75, makeCastMap([Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]), Style$Overflow$3_0);
_.getCssName = function getCssName_5(){
  return 'scroll';
}
;
function $$init_47(){
}

function Style$Overflow$4_0(enum$name, enum$ordinal){
  Style$Overflow_0.call(this, enum$name, enum$ordinal);
  $$init_47();
}

defineSeed(79, 75, makeCastMap([Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]), Style$Overflow$4_0);
_.getCssName = function getCssName_6(){
  return 'auto';
}
;
function $clinit_Style$Overflow$Map(){
  $clinit_Style$Overflow$Map = nullMethod;
  $MAP_0 = createValueOfMap(($clinit_Style$Overflow() , $VALUES_0));
}

var $MAP_0;
function $clinit_Style$Position(){
  $clinit_Style$Position = nullMethod;
  STATIC = new Style$Position$1_0('STATIC', 0);
  RELATIVE = new Style$Position$2_0('RELATIVE', 1);
  ABSOLUTE = new Style$Position$3_0('ABSOLUTE', 2);
  FIXED = new Style$Position$4_0('FIXED', 3);
  $VALUES_1 = initValues(_3Lcom_google_gwt_dom_client_Style$Position_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Position, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

function $$init_48(){
}

function Style$Position_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
  $$init_48();
}

function valueOf_2(name_0){
  $clinit_Style$Position();
  return valueOf(($clinit_Style$Position$Map() , $MAP_1), name_0);
}

function values_2(){
  $clinit_Style$Position();
  return $VALUES_1;
}

defineSeed(81, 69, makeCastMap([Q$Style$Position, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_1, ABSOLUTE, FIXED, RELATIVE, STATIC;
function $$init_49(){
}

function Style$Position$1_0(enum$name, enum$ordinal){
  Style$Position_0.call(this, enum$name, enum$ordinal);
  $$init_49();
}

defineSeed(82, 81, makeCastMap([Q$Style$Position, Q$Serializable, Q$Comparable, Q$Enum]), Style$Position$1_0);
_.getCssName = function getCssName_7(){
  return 'static';
}
;
function $$init_50(){
}

function Style$Position$2_0(enum$name, enum$ordinal){
  Style$Position_0.call(this, enum$name, enum$ordinal);
  $$init_50();
}

defineSeed(83, 81, makeCastMap([Q$Style$Position, Q$Serializable, Q$Comparable, Q$Enum]), Style$Position$2_0);
_.getCssName = function getCssName_8(){
  return 'relative';
}
;
function $$init_51(){
}

function Style$Position$3_0(enum$name, enum$ordinal){
  Style$Position_0.call(this, enum$name, enum$ordinal);
  $$init_51();
}

defineSeed(84, 81, makeCastMap([Q$Style$Position, Q$Serializable, Q$Comparable, Q$Enum]), Style$Position$3_0);
_.getCssName = function getCssName_9(){
  return 'absolute';
}
;
function $$init_52(){
}

function Style$Position$4_0(enum$name, enum$ordinal){
  Style$Position_0.call(this, enum$name, enum$ordinal);
  $$init_52();
}

defineSeed(85, 81, makeCastMap([Q$Style$Position, Q$Serializable, Q$Comparable, Q$Enum]), Style$Position$4_0);
_.getCssName = function getCssName_10(){
  return 'fixed';
}
;
function $clinit_Style$Position$Map(){
  $clinit_Style$Position$Map = nullMethod;
  $MAP_1 = createValueOfMap(($clinit_Style$Position() , $VALUES_1));
}

var $MAP_1;
function $getPageX(this$static){
  return $touchGetPageX(($clinit_DOMImpl() , impl_0 , this$static));
}

function $getPageY(this$static){
  return $touchGetPageY(($clinit_DOMImpl() , impl_0 , this$static));
}

function $getNativeEvent(this$static){
  $assertLive(this$static);
  return this$static.nativeEvent;
}

function $preventDefault_0(this$static){
  $assertLive(this$static);
  $preventDefault(this$static.nativeEvent);
}

function $clinit_BlurEvent(){
  $clinit_BlurEvent = nullMethod;
  TYPE = new DomEvent$Type_0('blur', new BlurEvent_0);
}

function $$init_66(){
}

function $dispatch(this$static, handler){
  handler.onBlur(this$static);
}

function BlurEvent_0(){
  DomEvent_0.call(this);
  $$init_66();
}

function getType_8(){
  $clinit_BlurEvent();
  return TYPE;
}

defineSeed(100, 101, {}, BlurEvent_0);
_.dispatch_0 = function dispatch_0(handler){
  $dispatch(this, dynamicCast(handler, Q$BlurHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_1(){
  return TYPE;
}
;
var TYPE;
function $$init_76(){
}

function KeyEvent_1(){
  DomEvent_0.call(this);
  $$init_76();
}

defineSeed(114, 101, {});
function $$init_77(){
}

function $getNativeKeyCode(this$static){
  return $getKeyCode($getNativeEvent(this$static));
}

function KeyCodeEvent_0(){
  KeyEvent_1.call(this);
  $$init_77();
}

defineSeed(113, 114, {});
function $clinit_KeyDownEvent(){
  $clinit_KeyDownEvent = nullMethod;
  TYPE_3 = new DomEvent$Type_0('keydown', new KeyDownEvent_0);
}

function $$init_78(){
}

function $dispatch_3(this$static, handler){
  handler.onKeyDown(this$static);
}

function KeyDownEvent_0(){
  KeyCodeEvent_0.call(this);
  $$init_78();
}

function getType_12(){
  $clinit_KeyDownEvent();
  return TYPE_3;
}

defineSeed(115, 113, {}, KeyDownEvent_0);
_.dispatch_0 = function dispatch_4(handler){
  $dispatch_3(this, dynamicCast(handler, Q$KeyDownHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_5(){
  return TYPE_3;
}
;
var TYPE_3;
function $clinit_KeyUpEvent(){
  $clinit_KeyUpEvent = nullMethod;
  TYPE_5 = new DomEvent$Type_0('keyup', new KeyUpEvent_0);
}

function $$init_80(){
}

function $dispatch_5(this$static, handler){
  handler.onKeyUp(this$static);
}

function KeyUpEvent_0(){
  KeyCodeEvent_0.call(this);
  $$init_80();
}

function getType_14(){
  $clinit_KeyUpEvent();
  return TYPE_5;
}

defineSeed(117, 113, makeCastMap([Q$KeyUpEvent]), KeyUpEvent_0);
_.dispatch_0 = function dispatch_6(handler){
  $dispatch_5(this, dynamicCast(handler, Q$KeyUpHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_7(){
  return TYPE_5;
}
;
var TYPE_5;
function $$init_87(){
}

function $getTouches_1(this$static){
  return $getTouches_0($getNativeEvent(this$static));
}

function TouchEvent_0(){
  HumanInputEvent_0.call(this);
  $$init_87();
}

function isSupported(){
  isNull(impl_1) && (impl_1 = new TouchEvent$TouchSupportDetector_0);
  return $isSupported(impl_1);
}

defineSeed(126, 107, {});
var impl_1 = null;
function $clinit_TouchCancelEvent(){
  $clinit_TouchCancelEvent = nullMethod;
  TYPE_11 = new DomEvent$Type_0('touchcancel', new TouchCancelEvent_0);
}

function $$init_88(){
}

function $dispatch_11(this$static, handler){
  handler.onTouchCancel(this$static);
}

function TouchCancelEvent_0(){
  TouchEvent_0.call(this);
  $$init_88();
}

function getType_20(){
  $clinit_TouchCancelEvent();
  return TYPE_11;
}

defineSeed(125, 126, {}, TouchCancelEvent_0);
_.dispatch_0 = function dispatch_12(handler){
  $dispatch_11(this, dynamicCast(handler, Q$TouchCancelHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_13(){
  return TYPE_11;
}
;
var TYPE_11;
function $clinit_TouchEndEvent(){
  $clinit_TouchEndEvent = nullMethod;
  TYPE_12 = new DomEvent$Type_0('touchend', new TouchEndEvent_0);
}

function $$init_89(){
}

function $dispatch_12(this$static, handler){
  handler.onTouchEnd(this$static);
}

function TouchEndEvent_0(){
  TouchEvent_0.call(this);
  $$init_89();
}

function getType_21(){
  $clinit_TouchEndEvent();
  return TYPE_12;
}

defineSeed(127, 126, {}, TouchEndEvent_0);
_.dispatch_0 = function dispatch_13(handler){
  $dispatch_12(this, dynamicCast(handler, Q$TouchEndHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_14(){
  return TYPE_12;
}
;
var TYPE_12;
function $$init_90(this$static){
  this$static.isSupported = $detectTouchSupport();
}

function $detectTouchSupport(){
  var elem = document.createElement('div');
  elem.setAttribute('ontouchstart', 'return;');
  return typeof elem.ontouchstart == 'function';
}

function $isSupported(this$static){
  return this$static.isSupported;
}

function TouchEvent$TouchSupportDetector_0(){
  Object_1.call(this);
  $$init_90(this);
}

defineSeed(128, 1, {}, TouchEvent$TouchSupportDetector_0);
function $clinit_TouchMoveEvent(){
  $clinit_TouchMoveEvent = nullMethod;
  TYPE_13 = new DomEvent$Type_0('touchmove', new TouchMoveEvent_0);
}

function $$init_91(){
}

function $dispatch_13(this$static, handler){
  handler.onTouchMove(this$static);
}

function TouchMoveEvent_0(){
  TouchEvent_0.call(this);
  $$init_91();
}

function getType_22(){
  $clinit_TouchMoveEvent();
  return TYPE_13;
}

defineSeed(129, 126, {}, TouchMoveEvent_0);
_.dispatch_0 = function dispatch_14(handler){
  $dispatch_13(this, dynamicCast(handler, Q$TouchMoveHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_15(){
  return TYPE_13;
}
;
var TYPE_13;
function $clinit_TouchStartEvent(){
  $clinit_TouchStartEvent = nullMethod;
  TYPE_14 = new DomEvent$Type_0('touchstart', new TouchStartEvent_0);
}

function $$init_92(){
}

function $dispatch_14(this$static, handler){
  handler.onTouchStart(this$static);
}

function TouchStartEvent_0(){
  TouchEvent_0.call(this);
  $$init_92();
}

function getType_23(){
  $clinit_TouchStartEvent();
  return TYPE_14;
}

defineSeed(130, 126, {}, TouchStartEvent_0);
_.dispatch_0 = function dispatch_15(handler){
  $dispatch_14(this, dynamicCast(handler, Q$TouchStartHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_16(){
  return TYPE_14;
}
;
var TYPE_14;
function $isAttached(this$static){
  return this$static.attached;
}

function getType_24(){
  isNull(TYPE_15) && (TYPE_15 = new GwtEvent$Type_0);
  return TYPE_15;
}

function $isAutoClosed(this$static){
  return this$static.autoClosed;
}

function getType_27(){
  isNull(TYPE_20) && (TYPE_20 = new GwtEvent$Type_0);
  return TYPE_20;
}

function fireIfNotEqual(source, oldValue, newValue){
  var event_0;
  if (shouldFire(oldValue, newValue)) {
    event_0 = new ValueChangeEvent_0(newValue);
    source.fireEvent_0(event_0);
  }
}

function shouldFire(oldValue, newValue){
  return isNotNull(TYPE_24) && maskUndefined(oldValue) !== maskUndefined(newValue) && (jsEquals(oldValue, null) || !equals__devirtual$(oldValue, newValue));
}

function $doRemove(this$static, type, source, handler){
  this$static.firingDepth > 0?$enqueueRemove(this$static, type, source, handler):$doRemoveNow(this$static, type, source, handler);
}

function $doRemoveNow(this$static, type, source, handler){
  var l_0, removed;
  l_0 = $getHandlerList(this$static, type, source);
  removed = l_0.remove_1(handler);
  removed || throwAssertionError_Object('redundant remove call');
  removed && l_0.isEmpty() && $prune(this$static, type, source);
}

function $enqueueRemove(this$static, type, source, handler){
  $defer(this$static, new SimpleEventBus$3_0(this$static, type, source, handler));
}

function $prune(this$static, type, source){
  var pruned, sourceMap;
  sourceMap = dynamicCast(this$static.map.get(type), Q$Map);
  pruned = dynamicCast(sourceMap.remove_0(source), Q$List);
  isNotNull(pruned) || throwAssertionError_Object("Can't prune what wasn't there");
  pruned.isEmpty() || throwAssertionError_Object('Pruned unempty list!');
  sourceMap.isEmpty() && this$static.map.remove_0(type);
}

defineSeed(143, 144, {});
_.doRemove = function doRemove(type, source, handler){
  $doRemove(this, type, source, handler);
}
;
defineSeed(142, 143, {});
_.doRemove = function doRemove_0(type, source, handler){
  $doRemove(this, type, source, handler);
}
;
defineSeed(145, 1, makeCastMap([Q$HandlerRegistration]));
_.removeHandler = function removeHandler(){
  this.real.removeHandler();
}
;
function $$init_121(){
}

function $refreshDirection(this$static){
  var dir;
  if (isNotNull(this$static.directionEstimator)) {
    dir = this$static.directionEstimator.estimateDirection(this$static.target.getText());
    jsNotEquals(dir, this$static.target.getDirection()) && this$static.target.setDirection(dir);
  }
}

function $setDirectionEstimator(this$static, directionEstimator){
  this$static.directionEstimator = directionEstimator;
  if (isNull(directionEstimator) != isNull(this$static.handlerRegistration)) {
    if (isNull(directionEstimator)) {
      this$static.handlerRegistration.removeHandler();
      this$static.handlerRegistration = null;
    }
     else {
      this$static.handlerRegistration = this$static.target.addKeyUpHandler(this$static);
    }
  }
  $refreshDirection(this$static);
}

function AutoDirectionHandler_0(target, directionEstimator){
  Object_1.call(this);
  $$init_121();
  this.target = target;
  this.handlerRegistration = null;
  $setDirectionEstimator(this, directionEstimator);
}

function addTo(target, directionEstimator){
  var autoDirHandler;
  autoDirHandler = new AutoDirectionHandler_0(target, directionEstimator);
  return autoDirHandler;
}

function addTo_0(target, enabled){
  return addTo(target, enabled?get_6():null);
}

defineSeed(161, 1, makeCastMap([Q$KeyUpHandler, Q$EventHandler]), AutoDirectionHandler_0);
_.onKeyUp = function onKeyUp(event_0){
  $refreshDirection(this);
}
;
_.directionEstimator = null;
_.handlerRegistration = null;
_.target = null;
function $clinit_BidiPolicy(){
  $clinit_BidiPolicy = nullMethod;
  impl_2 = new BidiPolicy$BidiPolicyImpl_0;
}

function isBidiEnabled(){
  $clinit_BidiPolicy();
  return $isBidiEnabled();
}

var impl_2;
function $$init_122(){
}

function $isBidiEnabled(){
  return hasAnyRTL();
}

function BidiPolicy$BidiPolicyImpl_0(){
  Object_1.call(this);
  $$init_122();
}

defineSeed(163, 1, {}, BidiPolicy$BidiPolicyImpl_0);
function $clinit_DateTimeFormat(){
  $clinit_DateTimeFormat = nullMethod;
  'EEE, d MMM yyyy HH:mm:ss Z';
  "yyyy-MM-dd'T'HH:mm:ss.SSSZZZ";
  10;
  1900;
  86400000;
  'GyMLdkHmsSEcDahKzZv';
  'MLydhHmsSDkK';
  ' \t\r\n';
  'GMT';
  'UTC';
  60;
  new HashMap_0;
}

function $$init_125(this$static){
  this$static.patternParts = new ArrayList_0;
}

function $addPart(this$static, buf, count){
  if ($length_2(buf) > 0) {
    $add_13(this$static.patternParts, new DateTimeFormat$PatternPart_0($toString_4(buf), count));
    $setLength(buf, 0);
  }
}

function $createTimeZone(timezoneOffset){
  return createTimeZone(timezoneOffset);
}

function $format(this$static, date){
  return $format_0(this$static, date, null);
}

function $format_0(this$static, date, timeZone){
  var ch, diff, i, j, keepDate, keepTime, n, toAppendTo, trailQuote;
  isNull(timeZone) && (timeZone = $createTimeZone($getTimezoneOffset_0(date)));
  diff = ($getTimezoneOffset_0(date) - timeZone.getOffset(date)) * 60000;
  keepDate = new Date_4(add_1($getTime_0(date), fromInt(diff)));
  keepTime = keepDate;
  if ($getTimezoneOffset_0(keepDate) != $getTimezoneOffset_0(date)) {
    diff > 0?(diff -= 86400000):(diff += 86400000);
    keepTime = new Date_4(add_1($getTime_0(date), fromInt(diff)));
  }
  toAppendTo = new StringBuffer_1;
  n = $length_1(this$static.pattern);
  for (i = 0; i < n;) {
    ch = $charAt(this$static.pattern, i);
    if (ch >= 97 && ch <= 122 || ch >= 65 && ch <= 90) {
      for (j = i + 1; j < n && $charAt(this$static.pattern, j) == ch; ++j) {
      }
      $subFormat(this$static, toAppendTo, ch, j - i, date, keepDate, keepTime, timeZone);
      i = j;
    }
     else if (ch == 39) {
      ++i;
      if (i < n && $charAt(this$static.pattern, i) == 39) {
        $append_1(toAppendTo, 39);
        ++i;
        continue;
      }
      trailQuote = false;
      while (!trailQuote) {
        j = i;
        while (j < n && $charAt(this$static.pattern, j) != 39) {
          ++j;
        }
        if (j >= n) {
          throw new IllegalArgumentException_1("Missing trailing '");
        }
        j + 1 < n && $charAt(this$static.pattern, j + 1) == 39?++j:(trailQuote = true);
        $append_3(toAppendTo, $substring_0(this$static.pattern, i, j));
        i = j + 1;
      }
    }
     else {
      $append_1(toAppendTo, ch);
      ++i;
    }
  }
  return $toString_4(toAppendTo);
}

function $format0To11Hours(this$static, buf, count, date){
  var value;
  value = $getHours_0(date) % 12;
  $zeroPaddingNumber(buf, value, count);
}

function $format0To23Hours(this$static, buf, count, date){
  var value;
  value = $getHours_0(date);
  $zeroPaddingNumber(buf, value, count);
}

function $format1To12Hours(this$static, buf, count, date){
  var value;
  value = $getHours_0(date) % 12;
  value == 0?$zeroPaddingNumber(buf, 12, count):$zeroPaddingNumber(buf, value, count);
}

function $format24Hours(this$static, buf, count, date){
  var value;
  value = $getHours_0(date);
  value == 0?$zeroPaddingNumber(buf, 24, count):$zeroPaddingNumber(buf, value, count);
}

function $formatAmPm(this$static, buf, date){
  $getHours_0(date) >= 12 && $getHours_0(date) < 24?$append_3(buf, this$static.dateTimeFormatInfo.ampms()[1]):$append_3(buf, this$static.dateTimeFormatInfo.ampms()[0]);
}

function $formatDate(this$static, buf, count, date){
  var value;
  value = $getDate_0(date);
  $zeroPaddingNumber(buf, value, count);
}

function $formatDayOfWeek(this$static, buf, count, date){
  var value;
  value = $getDay_0(date);
  count == 5?$append_3(buf, this$static.dateTimeFormatInfo.weekdaysNarrow()[value]):count == 4?$append_3(buf, this$static.dateTimeFormatInfo.weekdaysFull()[value]):$append_3(buf, this$static.dateTimeFormatInfo.weekdaysShort()[value]);
}

function $formatEra(this$static, buf, count, date){
  var value;
  value = $getYear(date) >= -1900?1:0;
  count >= 4?$append_3(buf, this$static.dateTimeFormatInfo.erasFull()[value]):$append_3(buf, this$static.dateTimeFormatInfo.erasShort()[value]);
}

function $formatFractionalSeconds(this$static, buf, count, date){
  var time, value;
  time = $getTime_0(date);
  if (lt(time, P0_longLit)) {
    value = 1000 - toInt(mod(neg(time), P3e8_longLit));
    value == 1000 && (value = 0);
  }
   else {
    value = toInt(mod(time, P3e8_longLit));
  }
  if (count == 1) {
    value = min_1(narrow_int((value + 50) / 100), 9);
    $append_1(buf, narrow_char(48 + value));
  }
   else if (count == 2) {
    value = min_1(narrow_int((value + 5) / 10), 99);
    $zeroPaddingNumber(buf, value, 2);
  }
   else {
    $zeroPaddingNumber(buf, value, 3);
    count > 3 && $zeroPaddingNumber(buf, 0, count - 3);
  }
}

function $formatMinutes(this$static, buf, count, date){
  var value;
  value = $getMinutes_0(date);
  $zeroPaddingNumber(buf, value, count);
}

function $formatMonth(this$static, buf, count, date){
  var value;
  value = $getMonth_0(date);
  switch (count) {
    case 5:
      $append_3(buf, this$static.dateTimeFormatInfo.monthsNarrow()[value]);
      break;
    case 4:
      $append_3(buf, this$static.dateTimeFormatInfo.monthsFull()[value]);
      break;
    case 3:
      $append_3(buf, this$static.dateTimeFormatInfo.monthsShort()[value]);
      break;
    default:$zeroPaddingNumber(buf, value + 1, count);
  }
}

function $formatQuarter(this$static, buf, count, date){
  var value;
  value = narrow_int($getMonth_0(date) / 3);
  count < 4?$append_3(buf, this$static.dateTimeFormatInfo.quartersShort()[value]):$append_3(buf, this$static.dateTimeFormatInfo.quartersFull()[value]);
}

function $formatSeconds(this$static, buf, count, date){
  var value;
  value = $getSeconds_0(date);
  $zeroPaddingNumber(buf, value, count);
}

function $formatStandaloneDay(this$static, buf, count, date){
  var value;
  value = $getDay_0(date);
  count == 5?$append_3(buf, this$static.dateTimeFormatInfo.weekdaysNarrowStandalone()[value]):count == 4?$append_3(buf, this$static.dateTimeFormatInfo.weekdaysFullStandalone()[value]):count == 3?$append_3(buf, this$static.dateTimeFormatInfo.weekdaysShortStandalone()[value]):$zeroPaddingNumber(buf, value, 1);
}

function $formatStandaloneMonth(this$static, buf, count, date){
  var value;
  value = $getMonth_0(date);
  count == 5?$append_3(buf, this$static.dateTimeFormatInfo.monthsNarrowStandalone()[value]):count == 4?$append_3(buf, this$static.dateTimeFormatInfo.monthsFullStandalone()[value]):count == 3?$append_3(buf, this$static.dateTimeFormatInfo.monthsShortStandalone()[value]):$zeroPaddingNumber(buf, value + 1, count);
}

function $formatTimeZone(buf, count, date, timeZone){
  count < 4?$append_3(buf, timeZone.getShortName(date)):$append_3(buf, timeZone.getLongName(date));
}

function $formatTimeZoneRFC(buf, count, date, timeZone){
  count < 3?$append_3(buf, timeZone.getRFCTimeZoneString(date)):count == 3?$append_3(buf, timeZone.getISOTimeZoneString(date)):$append_3(buf, timeZone.getGMTString(date));
}

function $formatYear(this$static, buf, count, date){
  var value;
  value = $getYear(date) + 1900;
  value < 0 && (value = -value);
  switch (count) {
    case 1:
      $append_2(buf, value);
      break;
    case 2:
      $zeroPaddingNumber(buf, value % 100, 2);
      break;
    default:$zeroPaddingNumber(buf, value, count);
  }
}

function $getNextCharCountInPattern(pattern, start){
  var ch, next;
  ch = $charAt(pattern, start);
  next = start + 1;
  while (next < $length_1(pattern) && $charAt(pattern, next) == ch) {
    ++next;
  }
  return next - start;
}

function $identifyAbutStart(this$static){
  var abut, i, len;
  abut = false;
  len = $size_1(this$static.patternParts);
  for (i = 0; i < len; ++i) {
    if ($isNumeric(dynamicCast($get_6(this$static.patternParts, i), Q$DateTimeFormat$PatternPart))) {
      if (!abut && i + 1 < len && $isNumeric(dynamicCast($get_6(this$static.patternParts, i + 1), Q$DateTimeFormat$PatternPart))) {
        abut = true;
        dynamicCast($get_6(this$static.patternParts, i), Q$DateTimeFormat$PatternPart).abutStart = true;
      }
    }
     else {
      abut = false;
    }
  }
}

function $isNumeric(part){
  var i;
  if (part.count <= 0) {
    return false;
  }
  i = $indexOf_2('MLydhHmsSDkK', $charAt(part.text_0, 0));
  return i > 1 || i >= 0 && part.count < 3;
}

function $parsePattern(this$static, pattern){
  var buf, ch, count, i, inQuote;
  buf = new StringBuffer_1;
  inQuote = false;
  for (i = 0; i < $length_1(pattern); ++i) {
    ch = $charAt(pattern, i);
    if (ch == 32) {
      $addPart(this$static, buf, 0);
      $append_1(buf, 32);
      $addPart(this$static, buf, 0);
      while (i + 1 < $length_1(pattern) && $charAt(pattern, i + 1) == 32) {
        ++i;
      }
      continue;
    }
    if (inQuote) {
      if (ch == 39) {
        if (i + 1 < $length_1(pattern) && $charAt(pattern, i + 1) == 39) {
          $append_1(buf, ch);
          ++i;
        }
         else {
          inQuote = false;
        }
      }
       else {
        $append_1(buf, ch);
      }
      continue;
    }
    if ($indexOf_2('GyMLdkHmsSEcDahKzZv', ch) > 0) {
      $addPart(this$static, buf, 0);
      $append_1(buf, ch);
      count = $getNextCharCountInPattern(pattern, i);
      $addPart(this$static, buf, count);
      i += count - 1;
      continue;
    }
    if (ch == 39) {
      if (i + 1 < $length_1(pattern) && $charAt(pattern, i + 1) == 39) {
        $append_1(buf, 39);
        ++i;
      }
       else {
        inQuote = true;
      }
    }
     else {
      $append_1(buf, ch);
    }
  }
  $addPart(this$static, buf, 0);
  $identifyAbutStart(this$static);
}

function $subFormat(this$static, buf, ch, count, date, adjustedDate, adjustedTime, timezone){
  switch (ch) {
    case 71:
      $formatEra(this$static, buf, count, adjustedDate);
      break;
    case 121:
      $formatYear(this$static, buf, count, adjustedDate);
      break;
    case 77:
      $formatMonth(this$static, buf, count, adjustedDate);
      break;
    case 107:
      $format24Hours(this$static, buf, count, adjustedTime);
      break;
    case 83:
      $formatFractionalSeconds(this$static, buf, count, adjustedTime);
      break;
    case 69:
      $formatDayOfWeek(this$static, buf, count, adjustedDate);
      break;
    case 97:
      $formatAmPm(this$static, buf, adjustedTime);
      break;
    case 104:
      $format1To12Hours(this$static, buf, count, adjustedTime);
      break;
    case 75:
      $format0To11Hours(this$static, buf, count, adjustedTime);
      break;
    case 72:
      $format0To23Hours(this$static, buf, count, adjustedTime);
      break;
    case 99:
      $formatStandaloneDay(this$static, buf, count, adjustedDate);
      break;
    case 76:
      $formatStandaloneMonth(this$static, buf, count, adjustedDate);
      break;
    case 81:
      $formatQuarter(this$static, buf, count, adjustedDate);
      break;
    case 100:
      $formatDate(this$static, buf, count, adjustedDate);
      break;
    case 109:
      $formatMinutes(this$static, buf, count, adjustedTime);
      break;
    case 115:
      $formatSeconds(this$static, buf, count, adjustedTime);
      break;
    case 122:
      $formatTimeZone(buf, count, date, timezone);
      break;
    case 118:
      $append_3(buf, timezone.getID());
      break;
    case 90:
      $formatTimeZoneRFC(buf, count, date, timezone);
      break;
    default:return false;
  }
  return true;
}

function $zeroPaddingNumber(buf, value, minWidth){
  var b, i;
  b = 10;
  for (i = 0; i < minWidth - 1; ++i) {
    value < b && $append_1(buf, 48);
    b *= 10;
  }
  $append_2(buf, value);
}

function DateTimeFormat_1(pattern, dtfi){
  $clinit_DateTimeFormat();
  Object_1.call(this);
  $$init_125(this);
  this.pattern = pattern;
  this.dateTimeFormatInfo = dtfi;
  $parsePattern(this, pattern);
}

defineSeed(169, 1, {});
_.dateTimeFormatInfo = null;
_.pattern = null;
function $clinit_DateTimeFormat_0(){
  $clinit_DateTimeFormat_0 = nullMethod;
  $clinit_DateTimeFormat();
  cache = new HashMap_0;
}

function $$init_126(){
}

function DateTimeFormat_2(pattern, dtfi){
  DateTimeFormat_1.call(this, pattern, dtfi);
  $$init_126();
}

function getDefaultDateTimeFormatInfo(){
  return $getDateTimeFormatInfo(getCurrentLocale());
}

function getFormat(predef){
  $clinit_DateTimeFormat_0();
  var dtfi, pattern;
  if (usesFixedEnglishStrings(predef)) {
    switch ($ordinal(predef)) {
      case 1:
        pattern = 'EEE, d MMM yyyy HH:mm:ss Z';
        break;
      case 0:
        pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZZZ";
        break;
      default:throw new IllegalStateException_1('Unexpected predef type ' + predef);
    }
    return getFormat_1(pattern, new DateTimeFormatInfoImpl_en_0);
  }
  dtfi = getDefaultDateTimeFormatInfo();
  switch ($ordinal(predef)) {
    case 2:
      pattern = dtfi.dateFormatFull();
      break;
    case 3:
      pattern = dtfi.dateFormatLong();
      break;
    case 4:
      pattern = dtfi.dateFormatMedium();
      break;
    case 5:
      pattern = dtfi.dateFormatShort();
      break;
    case 10:
      pattern = dtfi.dateTimeFull(dtfi.timeFormatFull(), dtfi.dateFormatFull());
      break;
    case 11:
      pattern = dtfi.dateTimeLong(dtfi.timeFormatLong(), dtfi.dateFormatLong());
      break;
    case 12:
      pattern = dtfi.dateTimeMedium(dtfi.timeFormatMedium(), dtfi.dateFormatMedium());
      break;
    case 13:
      pattern = dtfi.dateTimeShort(dtfi.timeFormatShort(), dtfi.dateFormatShort());
      break;
    case 14:
      pattern = dtfi.formatDay();
      break;
    case 17:
      pattern = dtfi.formatHour24Minute();
      break;
    case 18:
      pattern = dtfi.formatHour24MinuteSecond();
      break;
    case 15:
      pattern = dtfi.formatHour12Minute();
      break;
    case 16:
      pattern = dtfi.formatHour12MinuteSecond();
      break;
    case 19:
      pattern = dtfi.formatMinuteSecond();
      break;
    case 20:
      pattern = dtfi.formatMonthFull();
      break;
    case 21:
      pattern = dtfi.formatMonthAbbrev();
      break;
    case 22:
      pattern = dtfi.formatMonthAbbrevDay();
      break;
    case 23:
      pattern = dtfi.formatMonthFullDay();
      break;
    case 24:
      pattern = dtfi.formatMonthNumDay();
      break;
    case 25:
      pattern = dtfi.formatMonthFullWeekdayDay();
      break;
    case 6:
      pattern = dtfi.timeFormatFull();
      break;
    case 7:
      pattern = dtfi.timeFormatLong();
      break;
    case 8:
      pattern = dtfi.timeFormatMedium();
      break;
    case 9:
      pattern = dtfi.timeFormatShort();
      break;
    case 26:
      pattern = dtfi.formatYear();
      break;
    case 27:
      pattern = dtfi.formatYearMonthFull();
      break;
    case 28:
      pattern = dtfi.formatYearMonthAbbrev();
      break;
    case 29:
      pattern = dtfi.formatYearMonthAbbrevDay();
      break;
    case 30:
      pattern = dtfi.formatYearMonthFullDay();
      break;
    case 31:
      pattern = dtfi.formatYearMonthNum();
      break;
    case 32:
      pattern = dtfi.formatYearMonthNumDay();
      break;
    case 33:
      pattern = dtfi.formatYearMonthWeekdayDay();
      break;
    case 34:
      pattern = dtfi.formatYearQuarterFull();
      break;
    case 35:
      pattern = dtfi.formatYearQuarterShort();
      break;
    default:throw new IllegalArgumentException_1('Unexpected predefined format ' + predef);
  }
  return getFormat_1(pattern, dtfi);
}

function getFormat_0(pattern){
  $clinit_DateTimeFormat_0();
  return getFormat_1(pattern, getDefaultDateTimeFormatInfo());
}

function getFormat_1(pattern, dtfi){
  var defaultDtfi, dtf;
  defaultDtfi = getDefaultDateTimeFormatInfo();
  dtf = null;
  jsEquals(dtfi, defaultDtfi) && (dtf = dynamicCast(cache.get(pattern), Q$DateTimeFormat));
  if (isNull(dtf)) {
    dtf = new DateTimeFormat_2(pattern, dtfi);
    jsEquals(dtfi, defaultDtfi) && cache.put(pattern, dtf);
  }
  return dtf;
}

function getLongDateFormat(){
  $clinit_DateTimeFormat_0();
  return getFormat(($clinit_DateTimeFormat$PredefinedFormat() , DATE_LONG));
}

function getMediumDateFormat(){
  $clinit_DateTimeFormat_0();
  return getFormat(($clinit_DateTimeFormat$PredefinedFormat() , DATE_MEDIUM));
}

function getMediumDateTimeFormat(){
  $clinit_DateTimeFormat_0();
  return getFormat(($clinit_DateTimeFormat$PredefinedFormat() , DATE_TIME_MEDIUM));
}

function usesFixedEnglishStrings(predef){
  switch ($ordinal(predef)) {
    case 1:
      return true;
    case 0:
      return true;
    default:return false;
  }
}

defineSeed(168, 169, makeCastMap([Q$DateTimeFormat]), DateTimeFormat_2);
var cache = null;
function $clinit_DateTimeFormat$PredefinedFormat(){
  $clinit_DateTimeFormat$PredefinedFormat = nullMethod;
  ISO_8601 = new DateTimeFormat$PredefinedFormat_0('ISO_8601', 0);
  RFC_2822 = new DateTimeFormat$PredefinedFormat_0('RFC_2822', 1);
  DATE_FULL = new DateTimeFormat$PredefinedFormat_0('DATE_FULL', 2);
  DATE_LONG = new DateTimeFormat$PredefinedFormat_0('DATE_LONG', 3);
  DATE_MEDIUM = new DateTimeFormat$PredefinedFormat_0('DATE_MEDIUM', 4);
  DATE_SHORT = new DateTimeFormat$PredefinedFormat_0('DATE_SHORT', 5);
  TIME_FULL = new DateTimeFormat$PredefinedFormat_0('TIME_FULL', 6);
  TIME_LONG = new DateTimeFormat$PredefinedFormat_0('TIME_LONG', 7);
  TIME_MEDIUM = new DateTimeFormat$PredefinedFormat_0('TIME_MEDIUM', 8);
  TIME_SHORT = new DateTimeFormat$PredefinedFormat_0('TIME_SHORT', 9);
  DATE_TIME_FULL = new DateTimeFormat$PredefinedFormat_0('DATE_TIME_FULL', 10);
  DATE_TIME_LONG = new DateTimeFormat$PredefinedFormat_0('DATE_TIME_LONG', 11);
  DATE_TIME_MEDIUM = new DateTimeFormat$PredefinedFormat_0('DATE_TIME_MEDIUM', 12);
  DATE_TIME_SHORT = new DateTimeFormat$PredefinedFormat_0('DATE_TIME_SHORT', 13);
  DAY = new DateTimeFormat$PredefinedFormat_0('DAY', 14);
  HOUR_MINUTE = new DateTimeFormat$PredefinedFormat_0('HOUR_MINUTE', 15);
  HOUR_MINUTE_SECOND = new DateTimeFormat$PredefinedFormat_0('HOUR_MINUTE_SECOND', 16);
  HOUR24_MINUTE = new DateTimeFormat$PredefinedFormat_0('HOUR24_MINUTE', 17);
  HOUR24_MINUTE_SECOND = new DateTimeFormat$PredefinedFormat_0('HOUR24_MINUTE_SECOND', 18);
  MINUTE_SECOND = new DateTimeFormat$PredefinedFormat_0('MINUTE_SECOND', 19);
  MONTH = new DateTimeFormat$PredefinedFormat_0('MONTH', 20);
  MONTH_ABBR = new DateTimeFormat$PredefinedFormat_0('MONTH_ABBR', 21);
  MONTH_ABBR_DAY = new DateTimeFormat$PredefinedFormat_0('MONTH_ABBR_DAY', 22);
  MONTH_DAY = new DateTimeFormat$PredefinedFormat_0('MONTH_DAY', 23);
  MONTH_NUM_DAY = new DateTimeFormat$PredefinedFormat_0('MONTH_NUM_DAY', 24);
  MONTH_WEEKDAY_DAY = new DateTimeFormat$PredefinedFormat_0('MONTH_WEEKDAY_DAY', 25);
  YEAR = new DateTimeFormat$PredefinedFormat_0('YEAR', 26);
  YEAR_MONTH = new DateTimeFormat$PredefinedFormat_0('YEAR_MONTH', 27);
  YEAR_MONTH_ABBR = new DateTimeFormat$PredefinedFormat_0('YEAR_MONTH_ABBR', 28);
  YEAR_MONTH_ABBR_DAY = new DateTimeFormat$PredefinedFormat_0('YEAR_MONTH_ABBR_DAY', 29);
  YEAR_MONTH_DAY = new DateTimeFormat$PredefinedFormat_0('YEAR_MONTH_DAY', 30);
  YEAR_MONTH_NUM = new DateTimeFormat$PredefinedFormat_0('YEAR_MONTH_NUM', 31);
  YEAR_MONTH_NUM_DAY = new DateTimeFormat$PredefinedFormat_0('YEAR_MONTH_NUM_DAY', 32);
  YEAR_MONTH_WEEKDAY_DAY = new DateTimeFormat$PredefinedFormat_0('YEAR_MONTH_WEEKDAY_DAY', 33);
  YEAR_QUARTER = new DateTimeFormat$PredefinedFormat_0('YEAR_QUARTER', 34);
  YEAR_QUARTER_ABBR = new DateTimeFormat$PredefinedFormat_0('YEAR_QUARTER_ABBR', 35);
  $VALUES_3 = initValues(_3Lcom_google_gwt_i18n_client_DateTimeFormat$PredefinedFormat_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$DateTimeFormat$PredefinedFormat, [ISO_8601, RFC_2822, DATE_FULL, DATE_LONG, DATE_MEDIUM, DATE_SHORT, TIME_FULL, TIME_LONG, TIME_MEDIUM, TIME_SHORT, DATE_TIME_FULL, DATE_TIME_LONG, DATE_TIME_MEDIUM, DATE_TIME_SHORT, DAY, HOUR_MINUTE, HOUR_MINUTE_SECOND, HOUR24_MINUTE, HOUR24_MINUTE_SECOND, MINUTE_SECOND, MONTH, MONTH_ABBR, MONTH_ABBR_DAY, MONTH_DAY, MONTH_NUM_DAY, MONTH_WEEKDAY_DAY, YEAR, YEAR_MONTH, YEAR_MONTH_ABBR, YEAR_MONTH_ABBR_DAY, YEAR_MONTH_DAY, YEAR_MONTH_NUM, YEAR_MONTH_NUM_DAY, YEAR_MONTH_WEEKDAY_DAY, YEAR_QUARTER, YEAR_QUARTER_ABBR]);
}

function $$init_127(){
}

function DateTimeFormat$PredefinedFormat_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
  $$init_127();
}

function valueOf_4(name_0){
  $clinit_DateTimeFormat$PredefinedFormat();
  return valueOf(($clinit_DateTimeFormat$PredefinedFormat$Map() , $MAP_3), name_0);
}

function values_4(){
  $clinit_DateTimeFormat$PredefinedFormat();
  return $VALUES_3;
}

defineSeed(170, 69, makeCastMap([Q$DateTimeFormat$PredefinedFormat, Q$Serializable, Q$Comparable, Q$Enum]), DateTimeFormat$PredefinedFormat_0);
var $VALUES_3, DATE_FULL, DATE_LONG, DATE_MEDIUM, DATE_SHORT, DATE_TIME_FULL, DATE_TIME_LONG, DATE_TIME_MEDIUM, DATE_TIME_SHORT, DAY, HOUR24_MINUTE, HOUR24_MINUTE_SECOND, HOUR_MINUTE, HOUR_MINUTE_SECOND, ISO_8601, MINUTE_SECOND, MONTH, MONTH_ABBR, MONTH_ABBR_DAY, MONTH_DAY, MONTH_NUM_DAY, MONTH_WEEKDAY_DAY, RFC_2822, TIME_FULL, TIME_LONG, TIME_MEDIUM, TIME_SHORT, YEAR, YEAR_MONTH, YEAR_MONTH_ABBR, YEAR_MONTH_ABBR_DAY, YEAR_MONTH_DAY, YEAR_MONTH_NUM, YEAR_MONTH_NUM_DAY, YEAR_MONTH_WEEKDAY_DAY, YEAR_QUARTER, YEAR_QUARTER_ABBR;
function $clinit_DateTimeFormat$PredefinedFormat$Map(){
  $clinit_DateTimeFormat$PredefinedFormat$Map = nullMethod;
  $MAP_3 = createValueOfMap(($clinit_DateTimeFormat$PredefinedFormat() , $VALUES_3));
}

var $MAP_3;
function $$init_129(){
}

function DefaultDateTimeFormatInfo_1(){
  Object_1.call(this);
  $$init_129();
}

defineSeed(174, 1, {});
_.ampms = function ampms(){
  return initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['AM', 'PM']);
}
;
_.dateFormatFull = function dateFormatFull(){
  return 'EEEE, y MMMM dd';
}
;
_.dateFormatLong = function dateFormatLong(){
  return 'y MMMM d';
}
;
_.dateFormatMedium = function dateFormatMedium(){
  return 'y MMM d';
}
;
_.dateFormatShort = function dateFormatShort(){
  return 'yyyy-MM-dd';
}
;
_.dateTimeFull = function dateTimeFull(timePattern, datePattern){
  return $toString_4($append_3($append_3($append_3(new StringBuffer_0, datePattern), ' '), timePattern));
}
;
_.dateTimeLong = function dateTimeLong(timePattern, datePattern){
  return $toString_4($append_3($append_3($append_3(new StringBuffer_0, datePattern), ' '), timePattern));
}
;
_.dateTimeMedium = function dateTimeMedium(timePattern, datePattern){
  return $toString_4($append_3($append_3($append_3(new StringBuffer_0, datePattern), ' '), timePattern));
}
;
_.dateTimeShort = function dateTimeShort(timePattern, datePattern){
  return $toString_4($append_3($append_3($append_3(new StringBuffer_0, datePattern), ' '), timePattern));
}
;
_.erasFull = function erasFull(){
  return initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Before Christ', 'Anno Domini']);
}
;
_.erasShort = function erasShort(){
  return initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['BC', 'AD']);
}
;
_.formatDay = function formatDay(){
  return 'd';
}
;
_.formatHour12Minute = function formatHour12Minute(){
  return 'h:mm a';
}
;
_.formatHour12MinuteSecond = function formatHour12MinuteSecond(){
  return 'h:mm:ss a';
}
;
_.formatHour24Minute = function formatHour24Minute(){
  return 'HH:mm';
}
;
_.formatHour24MinuteSecond = function formatHour24MinuteSecond(){
  return 'HH:mm:ss';
}
;
_.formatMinuteSecond = function formatMinuteSecond(){
  return 'mm:ss';
}
;
_.formatMonthAbbrev = function formatMonthAbbrev(){
  return 'LLL';
}
;
_.formatMonthAbbrevDay = function formatMonthAbbrevDay(){
  return 'MMM d';
}
;
_.formatMonthFull = function formatMonthFull(){
  return 'LLLL';
}
;
_.formatMonthFullDay = function formatMonthFullDay(){
  return 'MMMM d';
}
;
_.formatMonthFullWeekdayDay = function formatMonthFullWeekdayDay(){
  return 'EEEE MMMM d';
}
;
_.formatMonthNumDay = function formatMonthNumDay(){
  return 'M-d';
}
;
_.formatYear = function formatYear(){
  return 'y';
}
;
_.formatYearMonthAbbrev = function formatYearMonthAbbrev(){
  return 'y MMM';
}
;
_.formatYearMonthAbbrevDay = function formatYearMonthAbbrevDay(){
  return 'y MMM d';
}
;
_.formatYearMonthFull = function formatYearMonthFull(){
  return 'y MMMM';
}
;
_.formatYearMonthFullDay = function formatYearMonthFullDay(){
  return 'y MMMM d';
}
;
_.formatYearMonthNum = function formatYearMonthNum(){
  return 'y-M';
}
;
_.formatYearMonthNumDay = function formatYearMonthNumDay(){
  return 'y-M-d';
}
;
_.formatYearMonthWeekdayDay = function formatYearMonthWeekdayDay(){
  return 'EEE, y MMM d';
}
;
_.formatYearQuarterFull = function formatYearQuarterFull(){
  return 'y QQQQ';
}
;
_.formatYearQuarterShort = function formatYearQuarterShort(){
  return 'y Q';
}
;
_.monthsFull = function monthsFull(){
  return initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
}
;
_.monthsFullStandalone = function monthsFullStandalone(){
  return this.monthsFull();
}
;
_.monthsNarrow = function monthsNarrow(){
  return initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']);
}
;
_.monthsNarrowStandalone = function monthsNarrowStandalone(){
  return this.monthsNarrow();
}
;
_.monthsShort = function monthsShort(){
  return initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}
;
_.monthsShortStandalone = function monthsShortStandalone(){
  return this.monthsShort();
}
;
_.quartersFull = function quartersFull(){
  return initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']);
}
;
_.quartersShort = function quartersShort(){
  return initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Q1', 'Q2', 'Q3', 'Q4']);
}
;
_.timeFormatFull = function timeFormatFull(){
  return 'HH:mm:ss zzzz';
}
;
_.timeFormatLong = function timeFormatLong(){
  return 'HH:mm:ss z';
}
;
_.timeFormatMedium = function timeFormatMedium(){
  return 'HH:mm:ss';
}
;
_.timeFormatShort = function timeFormatShort(){
  return 'HH:mm';
}
;
_.weekdaysFull = function weekdaysFull(){
  return initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
}
;
_.weekdaysFullStandalone = function weekdaysFullStandalone(){
  return this.weekdaysFull();
}
;
_.weekdaysNarrow = function weekdaysNarrow(){
  return initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['S', 'M', 'T', 'W', 'T', 'F', 'S']);
}
;
_.weekdaysNarrowStandalone = function weekdaysNarrowStandalone(){
  return this.weekdaysNarrow();
}
;
_.weekdaysShort = function weekdaysShort(){
  return initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
}
;
_.weekdaysShortStandalone = function weekdaysShortStandalone(){
  return this.weekdaysShort();
}
;
function $$init_130(){
}

function DefaultDateTimeFormatInfo_2(){
  DefaultDateTimeFormatInfo_1.call(this);
  $$init_130();
}

defineSeed(173, 174, {});
function $ensureDateTimeFormatInfo(this$static){
  isNull(this$static.dateTimeFormatInfo) && (this$static.dateTimeFormatInfo = this$static.infoImpl.getDateTimeFormatInfo());
}

function $getDateTimeFormatInfo(this$static){
  $ensureDateTimeFormatInfo(this$static);
  return this$static.dateTimeFormatInfo;
}

function hasAnyRTL(){
  $clinit_LocaleInfo();
  return instance_0.infoImpl.hasAnyRTL();
}

function $$init_135(){
}

function $getDaylightAdjustment(this$static, date){
  var index, timeInHours;
  if (jsEquals(this$static.transitionPoints, null)) {
    return 0;
  }
  timeInHours = div_0(div_0($getTime_0(date), P3e8_longLit), Pe10_longLit);
  index = 0;
  while (index < this$static.transitionPoints.length && gte_0(timeInHours, fromInt(this$static.transitionPoints[index]))) {
    ++index;
  }
  return index == 0?0:this$static.adjustments[index - 1];
}

function $getOffset(this$static, date){
  return this$static.standardOffset - $getDaylightAdjustment(this$static, date);
}

function $isDaylightTime(this$static, date){
  return $getDaylightAdjustment(this$static, date) > 0;
}

function TimeZone_0(){
  Object_1.call(this);
  $$init_135();
}

function composeGMTString(offset){
  var data;
  data = initValues(_3C_classLit, makeCastMap([Q$char_$1, Q$Serializable]), -1, [71, 77, 84, 45, 48, 48, 58, 48, 48]);
  if (offset <= 0) {
    data[3] = 43;
    offset = -offset;
  }
  data[4] = narrow_char(data[4] + narrow_int(narrow_int(offset / 60) / 10));
  data[5] = narrow_char(data[5] + narrow_int(offset / 60) % 10);
  data[7] = narrow_char(data[7] + narrow_int(offset % 60 / 10));
  data[8] = narrow_char(data[8] + offset % 10);
  return _String(data);
}

function composePOSIXTimeZoneID(offset){
  var str;
  if (offset == 0) {
    return 'Etc/GMT';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'Etc/GMT-';
  }
   else {
    str = 'Etc/GMT+';
  }
  return str + offsetDisplay(offset);
}

function composeUTCString(offset){
  var str;
  if (offset == 0) {
    return 'UTC';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'UTC+';
  }
   else {
    str = 'UTC-';
  }
  return str + offsetDisplay(offset);
}

function createTimeZone(timeZoneOffsetInMinutes){
  var tz;
  tz = new TimeZone_0;
  tz.standardOffset = timeZoneOffsetInMinutes;
  tz.timezoneID = composePOSIXTimeZoneID(timeZoneOffsetInMinutes);
  tz.tzNames = initDim(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, 2, 0);
  tz.tzNames[0] = composeUTCString(timeZoneOffsetInMinutes);
  tz.tzNames[1] = composeUTCString(timeZoneOffsetInMinutes);
  tz.transitionPoints = null;
  tz.adjustments = null;
  return tz;
}

function offsetDisplay(offset){
  var hour, mins;
  hour = narrow_int(offset / 60);
  mins = offset % 60;
  if (mins == 0) {
    return toString_33(hour);
  }
  return toString_33(hour) + ':' + toString_33(mins);
}

defineSeed(180, 1, {}, TimeZone_0);
_.getGMTString = function getGMTString(date){
  return composeGMTString($getOffset(this, date));
}
;
_.getID = function getID(){
  return this.timezoneID;
}
;
_.getISOTimeZoneString = function getISOTimeZoneString(date){
  var data, offset;
  offset = -$getOffset(this, date);
  data = initValues(_3C_classLit, makeCastMap([Q$char_$1, Q$Serializable]), -1, [43, 48, 48, 58, 48, 48]);
  if (offset < 0) {
    data[0] = 45;
    offset = -offset;
  }
  data[1] = narrow_char(data[1] + narrow_int(narrow_int(offset / 60) / 10));
  data[2] = narrow_char(data[2] + narrow_int(offset / 60) % 10);
  data[4] = narrow_char(data[4] + narrow_int(offset % 60 / 10));
  data[5] = narrow_char(data[5] + offset % 10);
  return _String(data);
}
;
_.getLongName = function getLongName(date){
  return this.tzNames[$isDaylightTime(this, date)?3:1];
}
;
_.getOffset = function getOffset(date){
  return $getOffset(this, date);
}
;
_.getRFCTimeZoneString = function getRFCTimeZoneString(date){
  var data, offset;
  offset = -$getOffset(this, date);
  data = initValues(_3C_classLit, makeCastMap([Q$char_$1, Q$Serializable]), -1, [43, 48, 48, 48, 48]);
  if (offset < 0) {
    data[0] = 45;
    offset = -offset;
  }
  data[1] = narrow_char(data[1] + narrow_int(narrow_int(offset / 60) / 10));
  data[2] = narrow_char(data[2] + narrow_int(offset / 60) % 10);
  data[3] = narrow_char(data[3] + narrow_int(offset % 60 / 10));
  data[4] = narrow_char(data[4] + offset % 10);
  return _String(data);
}
;
_.getShortName = function getShortName(date){
  return this.tzNames[$isDaylightTime(this, date)?2:0];
}
;
_.adjustments = null;
_.standardOffset = 0;
_.timezoneID = null;
_.transitionPoints = null;
_.tzNames = null;
defineSeed(184, 1, makeCastMap([Q$Map]));
_.isEmpty = function isEmpty(){
  return $isEmpty_0(this);
}
;
defineSeed(193, 1, {});
_.getDateTimeFormatInfo = function getDateTimeFormatInfo(){
  return new DateTimeFormatInfoImpl_0;
}
;
_.hasAnyRTL = function hasAnyRTL_0(){
  return false;
}
;
defineSeed(195, 193, {});
_.hasAnyRTL = function hasAnyRTL_1(){
  return false;
}
;
defineSeed(194, 195, {});
_.getDateTimeFormatInfo = function getDateTimeFormatInfo_0(){
  return new DateTimeFormatInfoImpl_0;
}
;
function $$init_150(){
}

function DateTimeFormatInfoImpl_0(){
  DefaultDateTimeFormatInfo_2.call(this);
  $$init_150();
}

defineSeed(196, 173, {}, DateTimeFormatInfoImpl_0);
function $$init_151(){
}

function DateTimeFormatInfoImpl_en_0(){
  DateTimeFormatInfoImpl_0.call(this);
  $$init_151();
}

defineSeed(197, 196, {}, DateTimeFormatInfoImpl_en_0);
_.dateFormatFull = function dateFormatFull_0(){
  return 'EEEE, MMMM d, y';
}
;
_.dateFormatLong = function dateFormatLong_0(){
  return 'MMMM d, y';
}
;
_.dateFormatMedium = function dateFormatMedium_0(){
  return 'MMM d, y';
}
;
_.dateFormatShort = function dateFormatShort_0(){
  return 'M/d/yy';
}
;
_.formatMonthFullWeekdayDay = function formatMonthFullWeekdayDay_0(){
  return 'EEEE, MMMM d';
}
;
_.formatMonthNumDay = function formatMonthNumDay_0(){
  return 'M/d';
}
;
_.formatYearMonthAbbrev = function formatYearMonthAbbrev_0(){
  return 'MMM y';
}
;
_.formatYearMonthAbbrevDay = function formatYearMonthAbbrevDay_0(){
  return 'MMM d, y';
}
;
_.formatYearMonthFull = function formatYearMonthFull_0(){
  return 'MMMM y';
}
;
_.formatYearMonthFullDay = function formatYearMonthFullDay_0(){
  return 'MMMM d, y';
}
;
_.formatYearMonthNum = function formatYearMonthNum_0(){
  return 'M/y';
}
;
_.formatYearMonthNumDay = function formatYearMonthNumDay_0(){
  return 'M/d/y';
}
;
_.formatYearMonthWeekdayDay = function formatYearMonthWeekdayDay_0(){
  return 'EEE, MMM d, y';
}
;
_.formatYearQuarterFull = function formatYearQuarterFull_0(){
  return 'QQQQ y';
}
;
_.formatYearQuarterShort = function formatYearQuarterShort_0(){
  return 'Q y';
}
;
_.timeFormatFull = function timeFormatFull_0(){
  return 'h:mm:ss a zzzz';
}
;
_.timeFormatLong = function timeFormatLong_0(){
  return 'h:mm:ss a z';
}
;
_.timeFormatMedium = function timeFormatMedium_0(){
  return 'h:mm:ss a';
}
;
_.timeFormatShort = function timeFormatShort_0(){
  return 'h:mm a';
}
;
function $$init_159(){
}

function DateTimeFormat$PatternPart_0(txt, cnt){
  Object_1.call(this);
  $$init_159();
  this.text_0 = txt;
  this.count = cnt;
  this.abutStart = false;
}

defineSeed(207, 1, makeCastMap([Q$DateTimeFormat$PatternPart]), DateTimeFormat$PatternPart_0);
_.abutStart = false;
_.count = 0;
_.text_0 = null;
function $$init_162(){
}

function $getDate_0(this$static){
  return $getDate(this$static.jsdate);
}

function $getDay_0(this$static){
  return $getDay(this$static.jsdate);
}

function $getHours_0(this$static){
  return $getHours(this$static.jsdate);
}

function $getMinutes_0(this$static){
  return $getMinutes(this$static.jsdate);
}

function $getMonth_0(this$static){
  return $getMonth(this$static.jsdate);
}

function $getSeconds_0(this$static){
  return $getSeconds(this$static.jsdate);
}

function $getTime_0(this$static){
  return fromDouble($getTime(this$static.jsdate));
}

function $getTimezoneOffset_0(this$static){
  return $getTimezoneOffset(this$static.jsdate);
}

function $getYear(this$static){
  return $getFullYear(this$static.jsdate) - 1900;
}

function Date_1(){
  Object_1.call(this);
  $$init_162();
  this.jsdate = create();
}

function Date_4(date){
  Object_1.call(this);
  $$init_162();
  this.jsdate = create_0(toDouble(date));
}

function Date_5(date){
  Date_4.call(this, parse_0(date));
}

function padTwo(number){
  return number < 10?'0' + number:valueOf_20(number);
}

function parse_0(s){
  var parsed;
  parsed = parse(s);
  if (isNaN_0(parsed)) {
    throw new IllegalArgumentException_0;
  }
  return fromDouble(parsed);
}

defineSeed(211, 1, makeCastMap([Q$Serializable, Q$Comparable, Q$Date]), Date_1, Date_4, Date_5);
_.equals$ = function equals_4(obj){
  return instanceOf(obj, Q$Date) && eq($getTime_0(this), $getTime_0(dynamicCast(obj, Q$Date)));
}
;
_.hashCode$ = function hashCode_6(){
  var time;
  time = $getTime_0(this);
  return toInt(xor_0(time, shru(time, 32)));
}
;
_.toString$ = function toString_12(){
  var hourOffset, minuteOffset, offset;
  offset = -$getTimezoneOffset(this.jsdate);
  hourOffset = (offset >= 0?'+':'') + narrow_int(offset / 60);
  minuteOffset = padTwo(abs_0(offset) % 60);
  return ($clinit_Date$StringData() , DAYS)[$getDay(this.jsdate)] + ' ' + ($clinit_Date$StringData() , MONTHS)[$getMonth(this.jsdate)] + ' ' + padTwo($getDate(this.jsdate)) + ' ' + padTwo($getHours(this.jsdate)) + ':' + padTwo($getMinutes(this.jsdate)) + ':' + padTwo($getSeconds(this.jsdate)) + ' GMT' + hourOffset + minuteOffset + ' ' + $getFullYear(this.jsdate);
}
;
_.jsdate = null;
function shru(a, n){
  $clinit_LongLibBase();
  var a2, res0, res1, res2;
  n &= 63;
  a2 = getH(a) & 1048575;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = getM(a) >> n | a2 << 22 - n;
    res0 = getL(a) >> n | getM(a) << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = getM(a) >> n - 22 | getH(a) << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return create_7(res0 & 4194303, res1 & 4194303, res2 & 1048575);
}

function xor_0(a, b){
  $clinit_LongLibBase();
  return create_7(getL(a) ^ getL(b), getM(a) ^ getM(b), getH(a) ^ getH(b));
}

function $getOffsetHeight_0(this$static){
  return getElementPropertyInt($getElement(this$static), 'offsetHeight');
}

function $setStylePrimaryName(this$static, style){
  setStylePrimaryName(this$static.getStyleElement(), style);
}

function setStylePrimaryName(elem, style){
  if (isNull(elem)) {
    throw new RuntimeException_1('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if ($length_1(style) == 0) {
    throw new IllegalArgumentException_1('Style names cannot be empty');
  }
  updatePrimaryAndDependentStyleNames(elem, style);
}

function updatePrimaryAndDependentStyleNames(elem, newPrimaryStyle){
  var classes = elem.className.split(/\s+/);
  if (!classes) {
    return;
  }
  var oldPrimaryStyle = classes[0];
  var oldPrimaryStyleLen = oldPrimaryStyle.length;
  classes[0] = newPrimaryStyle;
  for (var i = 1, n = classes.length; i < n; i++) {
    var name_0 = classes[i];
    if (name_0.length > oldPrimaryStyleLen && (name_0.charAt(oldPrimaryStyleLen) == '-' && name_0.indexOf(oldPrimaryStyle) == 0)) {
      classes[i] = newPrimaryStyle + name_0.substring(oldPrimaryStyleLen);
    }
  }
  elem.className = classes.join(' ');
}

defineSeed(243, 1, makeCastMap([Q$HasVisibility, Q$UIObject]));
_.getOffsetHeight = function getOffsetHeight(){
  return $getOffsetHeight_0(this);
}
;
function $addAttachHandler(this$static, handler){
  return $addHandler_1(this$static, handler, getType_24());
}

defineSeed(242, 243, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.asWidget = function asWidget(){
  return this;
}
;
function $selectTab(this$static, index){
  return $selectTab_0($tabBar(this$static), index);
}

function $addKeyDownHandler(this$static, handler){
  return $addDomHandler(this$static, handler, getType_12());
}

function $addKeyUpHandler(this$static, handler){
  return $addDomHandler(this$static, handler, getType_14());
}

function $setEnabled(this$static, enabled){
  setElementPropertyBoolean($getElement(this$static), 'disabled', !enabled);
}

defineSeed(306, 242, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.addKeyUpHandler = function addKeyUpHandler(handler){
  return $addKeyUpHandler(this, handler);
}
;
_.setEnabled = function setEnabled(enabled){
  $setEnabled(this, enabled);
}
;
defineSeed(305, 306, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.getText = function getText_0(){
  return $getInnerText($getElement(this));
}
;
_.setHTML = function setHTML(html){
  $setInnerHTML($getElement(this), html);
}
;
function $setEnabled_0(this$static, enabled){
  if (this$static.isEnabled() != enabled) {
    $toggleDisabled(this$static);
    $setEnabled(this$static, enabled);
    if (enabled) {
      $setAriaPressed(this$static, $getCurrentFace(this$static));
    }
     else {
      $cleanupCaptureState(this$static);
      removeState($getElement(this$static), 'aria-pressed');
    }
  }
}

function $setHTML(this$static, html){
  $setHTML_0($getCurrentFace(this$static), html);
}

function $toggleDisabled(this$static){
  var newFaceID;
  newFaceID = $getCurrentFace(this$static).getFaceID() ^ 4;
  newFaceID &= -3;
  $setCurrentFace(this$static, newFaceID);
}

function CustomButton_1(upImage){
  CustomButton_0.call(this);
  $setImage($getUpFace(this), upImage);
}

defineSeed(304, 305, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.getText = function getText_1(){
  return $getText($getCurrentFace(this));
}
;
_.setDown = function setDown(down){
  $setDown(this, down);
}
;
_.setEnabled = function setEnabled_0(enabled){
  $setEnabled_0(this, enabled);
}
;
_.setHTML = function setHTML_0(html){
  $setHTML(this, html);
}
;
function ToggleButton_1(upImage){
  $clinit_FocusWidget();
  CustomButton_1.call(this, upImage);
  $$init_227(this);
}

defineSeed(303, 304, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$ToggleButton, Q$UIObject, Q$Widget]), ToggleButton_1);
_.setDown = function setDown_0(down){
  $setDown_0(this, down);
}
;
function $gwtLogoThumbInitializer(){
  gwtLogoThumb = new ImageResourcePrototype_0('gwtLogoThumb', fromTrustedString_1(bundledImage_None_0), 61, 16, 14, 13, false, false);
}

function $jimmyInitializer(){
  jimmy = new ImageResourcePrototype_0('jimmy', fromTrustedString_1(externalImage), 0, 0, 400, 290, false, true);
}

defineSeed(312, 1, {});
_.gwtLogoThumb = function gwtLogoThumb_0(){
  return get_19();
}
;
_.jimmy = function jimmy_0(){
  return get_20();
}
;
var gwtLogoThumb = null, jimmy = null;
function $clinit_ShowcaseImages_default_StaticClientBundleGenerator$gwtLogoThumbInitializer(){
  $clinit_ShowcaseImages_default_StaticClientBundleGenerator$gwtLogoThumbInitializer = nullMethod;
  $gwtLogoThumbInitializer(($clinit_ShowcaseImages_default_StaticClientBundleGenerator() , _instance0_0));
}

function get_19(){
  $clinit_ShowcaseImages_default_StaticClientBundleGenerator$gwtLogoThumbInitializer();
  return $clinit_ShowcaseImages_default_StaticClientBundleGenerator() , gwtLogoThumb;
}

function $clinit_ShowcaseImages_default_StaticClientBundleGenerator$jimmyInitializer(){
  $clinit_ShowcaseImages_default_StaticClientBundleGenerator$jimmyInitializer = nullMethod;
  $jimmyInitializer(($clinit_ShowcaseImages_default_StaticClientBundleGenerator() , _instance0_0));
}

function get_20(){
  $clinit_ShowcaseImages_default_StaticClientBundleGenerator$jimmyInitializer();
  return $clinit_ShowcaseImages_default_StaticClientBundleGenerator() , jimmy;
}

function $$init_413(){
}

function AbstractRenderer_0(){
  Object_1.call(this);
  $$init_413();
}

defineSeed(535, 1, {});
function $$init_414(){
}

function $parse_2(object){
  return object.toString$();
}

function PassthroughParser_0(){
  Object_1.call(this);
  $$init_414();
}

function instance_2(){
  isNull(INSTANCE_2) && (INSTANCE_2 = new PassthroughParser_0);
  return INSTANCE_2;
}

defineSeed(536, 1, {}, PassthroughParser_0);
_.parse_0 = function parse_1(object){
  return $parse_2(object);
}
;
var INSTANCE_2 = null;
function $$init_415(){
}

function PassthroughRenderer_0(){
  AbstractRenderer_0.call(this);
  $$init_415();
}

function instance_3(){
  isNull(INSTANCE_3) && (INSTANCE_3 = new PassthroughRenderer_0);
  return INSTANCE_3;
}

defineSeed(537, 535, {}, PassthroughRenderer_0);
var INSTANCE_3 = null;
function $$init_416(){
}

function $calcNewVelocity(initialVelocity, decelFactor, oldVelocity, minDecel){
  var maxVelocityX, minVelocityX, newVelocity;
  newVelocity = initialVelocity * decelFactor;
  if (oldVelocity >= 0) {
    maxVelocityX = max(0, oldVelocity - minDecel);
    newVelocity = min_0(newVelocity, maxVelocityX);
  }
   else {
    minVelocityX = min_0(0, oldVelocity + minDecel);
    newVelocity = max(newVelocity, minVelocityX);
  }
  return newVelocity;
}

function DefaultMomentum_0(){
  Object_1.call(this);
  $$init_416();
}

defineSeed(538, 1, {}, DefaultMomentum_0);
_.createState = function createState(initialPosition, initialVelocity){
  return new Momentum$State_0(initialPosition, initialVelocity);
}
;
_.updateState = function updateState(state){
  var decelFactor, dist, elapsedMillis, ellapsedMillis, initialVelocity, minDecel, newVelocity, newVelocityX, newVelocityY, oldVelocity, position, totalEllapsedMillis;
  ellapsedMillis = $getElapsedMillis(state);
  totalEllapsedMillis = $getCumulativeElapsedMillis(state);
  initialVelocity = $getInitialVelocity(state);
  oldVelocity = $getVelocity(state);
  decelFactor = pow(0.9993, totalEllapsedMillis);
  minDecel = ellapsedMillis * 5.0E-4;
  newVelocityX = $calcNewVelocity($getX_0(initialVelocity), decelFactor, $getX_0(oldVelocity), minDecel);
  newVelocityY = $calcNewVelocity($getY_0(initialVelocity), decelFactor, $getY_0(oldVelocity), minDecel);
  newVelocity = new Point_0(newVelocityX, newVelocityY);
  $setVelocity(state, newVelocity);
  elapsedMillis = $getElapsedMillis(state);
  dist = $mult(newVelocity, new Point_0(elapsedMillis, elapsedMillis));
  position = $getPosition(state);
  $setPosition_0(state, $plus(position, dist));
  if (abs($getX_0(newVelocity)) < 0.02 && abs($getY_0(newVelocity)) < 0.02) {
    return false;
  }
  return true;
}
;
function $$init_417(this$static){
}

function $getCumulativeElapsedMillis(this$static){
  return this$static.cumulativeElapsedMillis;
}

function $getElapsedMillis(this$static){
  return this$static.elapsedMillis;
}

function $getInitialVelocity(this$static){
  return this$static.initialVelocity;
}

function $getPosition(this$static){
  return this$static.position_0;
}

function $getVelocity(this$static){
  return this$static.velocity;
}

function $setCumulativeElapsedMillis(this$static, cumulativeElapsedMillis){
  this$static.cumulativeElapsedMillis = cumulativeElapsedMillis;
}

function $setElapsedMillis(this$static, elapsedMillis){
  this$static.elapsedMillis = elapsedMillis;
}

function $setPosition_0(this$static, position){
  this$static.position_0 = position;
}

function $setVelocity(this$static, velocity){
  this$static.velocity = velocity;
}

function Momentum$State_0(initialPosition, initialVelocity){
  Object_1.call(this);
  $$init_417(this);
  this , initialPosition;
  this.initialVelocity = initialVelocity;
  this.position_0 = new Point_1(initialPosition);
  this.velocity = new Point_1(initialVelocity);
}

defineSeed(539, 1, {}, Momentum$State_0);
_.cumulativeElapsedMillis = 0;
_.elapsedMillis = 0;
_.initialVelocity = null;
_.position_0 = null;
_.velocity = null;
function $$init_418(){
}

function $getX_0(this$static){
  return this$static.x;
}

function $getY_0(this$static){
  return this$static.y;
}

function $minus(this$static, c){
  return new Point_0(this$static.x - c.x, this$static.y - c.y);
}

function $mult(this$static, c){
  return new Point_0(this$static.x * c.x, this$static.y * c.y);
}

function $plus(this$static, c){
  return new Point_0(this$static.x + c.x, this$static.y + c.y);
}

function Point_0(x, y){
  Object_1.call(this);
  $$init_418();
  this.x = x;
  this.y = y;
}

function Point_1(c){
  Point_0.call(this, c.x, c.y);
}

defineSeed(540, 1, makeCastMap([Q$Point]), Point_0, Point_1);
_.equals$ = function equals_9(obj){
  var c;
  if (!instanceOf(obj, Q$Point)) {
    return false;
  }
  c = dynamicCast(obj, Q$Point);
  return this.x == c.x && this.y == c.y;
}
;
_.hashCode$ = function hashCode_11(){
  return round_int(this.x) ^ round_int(this.y);
}
;
_.toString$ = function toString_17(){
  return 'Point(' + this.x + ',' + this.y + ')';
}
;
_.x = 0;
_.y = 0;
function $$init_419(this$static){
  this$static.handlerRegs = new ArrayList_0;
  this$static.lastTouchPosition = new TouchScroller$TemporalPoint_0;
  this$static.recentTouchPosition = new TouchScroller$TemporalPoint_0;
  this$static.recentScrollTriggeringTouchPosition = new TouchScroller$TemporalPoint_0;
  this$static.touchPositionsDuringMomentum = new ArrayList_0;
  this$static.momentumTouchRemovalCommand = new TouchScroller$MomentumTouchRemovalCommand_0(this$static);
}

function $calculateEndVelocity(from, to){
  var dist, time;
  time = $getTime_1(to) - $getTime_1(from);
  if (time <= 0) {
    return null;
  }
  dist = $minus($getPoint(from), $getPoint(to));
  return new Point_0($getX_0(dist) / time, $getY_0(dist) / time);
}

function $cancelAll(this$static){
  this$static.touching = false;
  this$static.dragging = false;
  this$static.momentumCommand = null;
}

function $getTouchFromEvent(event_0){
  var touches;
  touches = $getTouches_1(event_0);
  return $length(touches) > 0?$get(touches, 0):null;
}

function $getWidgetScrollPosition(this$static){
  return new Point_0(this$static.widget.getHorizontalScrollPosition(), this$static.widget.getVerticalScrollPosition());
}

function $hitTest(point1, point2){
  var absDiffX, absDiffY, diff;
  diff = $minus(point1, point2);
  absDiffX = abs($getX_0(diff));
  absDiffY = abs($getY_0(diff));
  return absDiffX <= 25 && absDiffY <= 25;
}

function $isClickScrollTriggeringTouch(this$static, clickPoint){
  if (isNotNull($getPoint(this$static.recentScrollTriggeringTouchPosition))) {
    return $hitTest(clickPoint, $getPoint(this$static.recentScrollTriggeringTouchPosition));
  }
  return false;
}

function $isClickTouchPositionDuringMomentum(this$static, clickPoint){
  var currentTime, point, point$iterator, same;
  currentTime = currentTimeMillis_0();
  same = false;
  for (point$iterator = this$static.touchPositionsDuringMomentum.iterator_0(); point$iterator.hasNext();) {
    point = dynamicCast(point$iterator.next_0(), Q$TouchScroller$TemporalPoint);
    if (currentTime - $getTime_1(point) <= 2500 && $hitTest(clickPoint, $getPoint(point))) {
      same = true;
      break;
    }
  }
  return same;
}

function $isMomentumActive(this$static){
  return isNotNull(this$static.momentumCommand);
}

function $onDragEnd(this$static){
  var endVelocity;
  if (isNull(this$static.momentum)) {
    return;
  }
  endVelocity = $calculateEndVelocity(this$static.recentTouchPosition, this$static.lastTouchPosition);
  if (isNotNull(endVelocity)) {
    this$static.momentumCommand = new TouchScroller$MomentumCommand_0(this$static, endVelocity);
    get_0().scheduleFixedDelay(this$static.momentumCommand, 16);
  }
}

function $onDragMove(this$static){
  var curScrollPosition, diff;
  diff = $minus(this$static.startTouchPosition, $getPoint(this$static.lastTouchPosition));
  curScrollPosition = $plus(this$static.startScrollPosition, diff);
  $setWidgetScrollPosition(this$static, curScrollPosition);
}

function $onDragStart(){
}

function $onTouchCancel(this$static, event_0){
  $onTouchEnd(this$static, event_0);
}

function $onTouchEnd(this$static, event_0){
  if (!this$static.touching) {
    return;
  }
  this$static.touching = false;
  if (this$static.dragging) {
    this$static.dragging = false;
    $onDragEnd(this$static);
  }
}

function $onTouchMove(this$static, event_0){
  var absDiffX, absDiffY, diff, hMax, hMin, hPosition, touch, touchPoint, touchTime, trackingTime, vMax, vMin, vPosition;
  if (!this$static.touching) {
    return;
  }
  touch = $getTouchFromEvent(event_0);
  touchPoint = new Point_0($getPageX(touch), $getPageY(touch));
  touchTime = currentTimeMillis_0();
  $setTemporalPoint(this$static.lastTouchPosition, touchPoint, touchTime);
  if (!this$static.dragging) {
    diff = $minus(touchPoint, this$static.startTouchPosition);
    absDiffX = abs($getX_0(diff));
    absDiffY = abs($getY_0(diff));
    if (absDiffX > 5 || absDiffY > 5) {
      $setTemporalPoint(this$static.recentScrollTriggeringTouchPosition, $getPoint(this$static.recentTouchPosition), $getTime_1(this$static.recentTouchPosition));
      if (absDiffX > absDiffY) {
        hPosition = this$static.widget.getHorizontalScrollPosition();
        hMin = this$static.widget.getMinimumHorizontalScrollPosition();
        hMax = this$static.widget.getMaximumHorizontalScrollPosition();
        if ($getX_0(diff) < 0 && hMax <= hPosition) {
          $cancelAll(this$static);
          return;
        }
         else if ($getX_0(diff) > 0 && hMin >= hPosition) {
          $cancelAll(this$static);
          return;
        }
      }
       else {
        vPosition = this$static.widget.getVerticalScrollPosition();
        vMin = this$static.widget.getMinimumVerticalScrollPosition();
        vMax = this$static.widget.getMaximumVerticalScrollPosition();
        if ($getY_0(diff) < 0 && vMax <= vPosition) {
          $cancelAll(this$static);
          return;
        }
         else if ($getY_0(diff) > 0 && vMin >= vPosition) {
          $cancelAll(this$static);
          return;
        }
      }
      this$static.dragging = true;
      $onDragStart();
    }
  }
  $preventDefault_0(event_0);
  if (this$static.dragging) {
    $onDragMove(this$static);
    trackingTime = touchTime - $getTime_1(this$static.recentTouchPosition);
    if (trackingTime > 200 && isNotNull(this$static.recentTouchPositionOnDeck)) {
      $setTemporalPoint(this$static.recentTouchPosition, $getPoint(this$static.recentTouchPositionOnDeck), $getTime_1(this$static.recentTouchPositionOnDeck));
      this$static.recentTouchPositionOnDeck = null;
    }
     else 
      trackingTime > 100 && isNull(this$static.recentTouchPositionOnDeck) && (this$static.recentTouchPositionOnDeck = new TouchScroller$TemporalPoint_1(touchPoint, touchTime));
  }
}

function $onTouchStart(this$static, event_0){
  var startTouchTime, touch;
  $setTemporalPoint(this$static.recentScrollTriggeringTouchPosition, null, 0);
  if (this$static.touching) {
    return;
  }
  touch = $getTouchFromEvent(event_0);
  this$static.startTouchPosition = new Point_0($getPageX(touch), $getPageY(touch));
  startTouchTime = currentTimeMillis_0();
  $setTemporalPoint(this$static.recentTouchPosition, this$static.startTouchPosition, startTouchTime);
  $setTemporalPoint(this$static.lastTouchPosition, this$static.startTouchPosition, startTouchTime);
  this$static.recentTouchPositionOnDeck = null;
  if ($isMomentumActive(this$static)) {
    this$static.touchPositionsDuringMomentum.add_0(new TouchScroller$TemporalPoint_1(this$static.startTouchPosition, startTouchTime));
    get_0().scheduleFixedDelay(this$static.momentumTouchRemovalCommand, 2500);
  }
  this$static.startScrollPosition = $getWidgetScrollPosition(this$static);
  $cancelAll(this$static);
  this$static.touching = true;
}

function $removeAttachHandler(this$static){
  if (isNotNull(this$static.attachHandlerReg)) {
    this$static.attachHandlerReg.removeHandler();
    this$static.attachHandlerReg = null;
  }
}

function $removeBustClickHandler(this$static){
  if (isNotNull(this$static.bustClickHandlerReg)) {
    this$static.bustClickHandlerReg.removeHandler();
    this$static.bustClickHandlerReg = null;
  }
}

function $setMomentum(this$static, momentum){
  this$static.momentum = momentum;
  isNull(momentum) && (this$static.momentumCommand = null);
}

function $setTargetWidget(this$static, widget){
  var reg, reg$iterator;
  if (jsEquals(this$static.widget, widget)) {
    return;
  }
  $cancelAll(this$static);
  for (reg$iterator = this$static.handlerRegs.iterator_0(); reg$iterator.hasNext();) {
    reg = dynamicCast(reg$iterator.next_0(), Q$HandlerRegistration);
    reg.removeHandler();
  }
  this$static.handlerRegs.clear();
  $removeAttachHandler(this$static);
  $removeBustClickHandler(this$static);
  this$static.widget = widget;
  if (isNotNull(widget)) {
    widget.asWidget().isAttached() && $setupBustClickHandler(this$static);
    this$static.attachHandlerReg = $addAttachHandler(widget.asWidget(), new TouchScroller$1_0(this$static));
    this$static.handlerRegs.add_0($addDomHandler(widget.asWidget(), new TouchScroller$2_0(this$static), getType_23()));
    this$static.handlerRegs.add_0($addDomHandler(widget.asWidget(), new TouchScroller$3_0(this$static), getType_22()));
    this$static.handlerRegs.add_0($addDomHandler(widget.asWidget(), new TouchScroller$4_0(this$static), getType_21()));
    this$static.handlerRegs.add_0($addDomHandler(widget.asWidget(), new TouchScroller$5_0(this$static), getType_20()));
  }
}

function $setWidgetScrollPosition(this$static, position){
  this$static.widget.setHorizontalScrollPosition(round_int($getX_0(position)));
  this$static.widget.setVerticalScrollPosition(round_int($getY_0(position)));
}

function $setupBustClickHandler(this$static){
  $removeBustClickHandler(this$static);
  this$static.bustClickHandlerReg = addNativePreviewHandler(new TouchScroller$6_0(this$static));
}

function TouchScroller_0(){
  Object_1.call(this);
  $$init_419(this);
  $setMomentum(this, new DefaultMomentum_0);
}

function createIfSupported(){
  return isSupported_1()?new TouchScroller_0:null;
}

function createIfSupported_0(widget){
  var scroller;
  scroller = createIfSupported();
  isNotNull(scroller) && $setTargetWidget(scroller, widget);
  return scroller;
}

function isAndroid3(){
  var ua = navigator.userAgent.toLowerCase();
  return /android ([3-9]+)\.([0-9]+)/.exec(ua) != null;
}

function isSupported_1(){
  isNull(isSupported_0) && (isSupported_0 = valueOf_9(isSupported() && !isAndroid3()));
  return $booleanValue(isSupported_0);
}

defineSeed(541, 1, {}, TouchScroller_0);
_.attachHandlerReg = null;
_.bustClickHandlerReg = null;
_.dragging = false;
_.momentum = null;
_.momentumCommand = null;
_.recentTouchPositionOnDeck = null;
_.startScrollPosition = null;
_.startTouchPosition = null;
_.touching = false;
_.widget = null;
var isSupported_0 = null;
function $$init_420(){
}

function TouchScroller$1_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_420();
}

defineSeed(542, 1, makeCastMap([Q$AttachEvent$Handler, Q$EventHandler]), TouchScroller$1_0);
_.onAttachOrDetach = function onAttachOrDetach(event_0){
  $isAttached(event_0)?$setupBustClickHandler(this.this$0):$removeBustClickHandler(this.this$0);
}
;
_.this$0 = null;
function $$init_421(){
}

function TouchScroller$2_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_421();
}

defineSeed(543, 1, makeCastMap([Q$TouchStartHandler, Q$EventHandler]), TouchScroller$2_0);
_.onTouchStart = function onTouchStart(event_0){
  $onTouchStart(this.this$0, event_0);
}
;
_.this$0 = null;
function $$init_422(){
}

function TouchScroller$3_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_422();
}

defineSeed(544, 1, makeCastMap([Q$TouchMoveHandler, Q$EventHandler]), TouchScroller$3_0);
_.onTouchMove = function onTouchMove(event_0){
  $onTouchMove(this.this$0, event_0);
}
;
_.this$0 = null;
function $$init_423(){
}

function TouchScroller$4_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_423();
}

defineSeed(545, 1, makeCastMap([Q$TouchEndHandler, Q$EventHandler]), TouchScroller$4_0);
_.onTouchEnd = function onTouchEnd(event_0){
  $onTouchEnd(this.this$0, event_0);
}
;
_.this$0 = null;
function $$init_424(){
}

function TouchScroller$5_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_424();
}

defineSeed(546, 1, makeCastMap([Q$TouchCancelHandler, Q$EventHandler]), TouchScroller$5_0);
_.onTouchCancel = function onTouchCancel(event_0){
  $onTouchCancel(this.this$0, event_0);
}
;
_.this$0 = null;
function $$init_425(){
}

function TouchScroller$6_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_425();
}

defineSeed(547, 1, makeCastMap([Q$EventHandler, Q$Event$NativePreviewHandler]), TouchScroller$6_0);
_.onPreviewNativeEvent = function onPreviewNativeEvent(event_0){
  var clickPoint;
  if (1 == $getTypeInt_0(event_0)) {
    clickPoint = new Point_0($getClientX($getNativeEvent_0(event_0)), $getClientY($getNativeEvent_0(event_0)));
    if ($isClickScrollTriggeringTouch(this.this$0, clickPoint) || $isClickTouchPositionDuringMomentum(this.this$0, clickPoint)) {
      $cancel_3(event_0);
      $stopPropagation($getNativeEvent_0(event_0));
      $preventDefault($getNativeEvent_0(event_0));
    }
  }
}
;
_.this$0 = null;
function $$init_426(this$static){
  this$static.duration = new Duration_0;
  this$static.initialPosition = $getWidgetScrollPosition(this$static.this$0);
}

function $finish(this$static){
  if (isNotNull(this$static.windowResizeHandler)) {
    this$static.windowResizeHandler.removeHandler();
    this$static.windowResizeHandler = null;
  }
  jsEquals(this$static, this$static.this$0.momentumCommand) && (this$static.this$0.momentumCommand = null);
}

function TouchScroller$MomentumCommand_0(this$0, endVelocity){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_426(this);
  this.state = this$0.momentum.createState(this.initialPosition, endVelocity);
  this.windowResizeHandler = addResizeHandler(new TouchScroller$MomentumCommand$1_0(this));
}

defineSeed(548, 1, {}, TouchScroller$MomentumCommand_0);
_.execute_0 = function execute_7(){
  var cumulativeElapsedMillis, hMax, hMin, hPos, notDone, vMax, vMin, vPos;
  if (jsNotEquals(this, this.this$0.momentumCommand)) {
    $finish(this);
    return false;
  }
  cumulativeElapsedMillis = $elapsedMillis(this.duration);
  $setElapsedMillis(this.state, cumulativeElapsedMillis - this.lastElapsedMillis);
  this.lastElapsedMillis = cumulativeElapsedMillis;
  $setCumulativeElapsedMillis(this.state, cumulativeElapsedMillis);
  notDone = this.this$0.momentum.updateState(this.state);
  notDone || $finish(this);
  $setWidgetScrollPosition(this.this$0, $getPosition(this.state));
  hPos = round_int($getX_0($getPosition(this.state)));
  hMin = this.this$0.widget.getMinimumHorizontalScrollPosition();
  hMax = this.this$0.widget.getMaximumHorizontalScrollPosition();
  vMin = this.this$0.widget.getMinimumVerticalScrollPosition();
  vMax = this.this$0.widget.getMaximumVerticalScrollPosition();
  vPos = round_int($getY_0($getPosition(this.state)));
  if ((vMax <= vPos || vMin >= vPos) && (hMax <= hPos || hMin >= hPos)) {
    $finish(this);
    return false;
  }
  return notDone;
}
;
_.lastElapsedMillis = 0;
_.state = null;
_.this$0 = null;
_.windowResizeHandler = null;
function $$init_427(){
}

function TouchScroller$MomentumCommand$1_0(this$1){
  this.this$1 = this$1;
  Object_1.call(this);
  $$init_427();
}

defineSeed(549, 1, makeCastMap([Q$ResizeHandler, Q$EventHandler]), TouchScroller$MomentumCommand$1_0);
_.onResize = function onResize_0(event_0){
  $finish(this.this$1);
}
;
_.this$1 = null;
function $$init_428(){
}

function TouchScroller$MomentumTouchRemovalCommand_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_428();
}

defineSeed(550, 1, {}, TouchScroller$MomentumTouchRemovalCommand_0);
_.execute_0 = function execute_8(){
  var currentTime, iter, point;
  currentTime = currentTimeMillis_0();
  iter = this.this$0.touchPositionsDuringMomentum.iterator_0();
  while (iter.hasNext()) {
    point = dynamicCast(iter.next_0(), Q$TouchScroller$TemporalPoint);
    currentTime - $getTime_1(point) >= 2500 && iter.remove_2();
  }
  return !this.this$0.touchPositionsDuringMomentum.isEmpty();
}
;
_.this$0 = null;
function $$init_429(){
}

function $getPoint(this$static){
  return this$static.point;
}

function $getTime_1(this$static){
  return this$static.time;
}

function $setTemporalPoint(this$static, point, time){
  this$static.point = point;
  this$static.time = time;
}

function TouchScroller$TemporalPoint_0(){
  Object_1.call(this);
  $$init_429();
}

function TouchScroller$TemporalPoint_1(point, time){
  Object_1.call(this);
  $$init_429();
  $setTemporalPoint(this, point, time);
}

defineSeed(551, 1, makeCastMap([Q$TouchScroller$TemporalPoint]), TouchScroller$TemporalPoint_0, TouchScroller$TemporalPoint_1);
_.point = null;
_.time = 0;
function $$init_430(){
}

function $getListener(this$static){
  return this$static.listener;
}

function BaseListenerWrapper_0(listener){
  Object_1.call(this);
  $$init_430();
  this.listener = listener;
}

defineSeed(552, 1, makeCastMap([Q$EventHandler]));
_.listener = null;
function createAnchor(){
  $clinit_DOM();
  return $cast($createAnchorElement(get_1()));
}

function createInputRadio(name_0){
  $clinit_DOM();
  return $cast($createRadioInputElement(get_1(), name_0));
}

function eventGetClientX(evt){
  $clinit_DOM();
  return $getClientX(evt);
}

function eventGetClientY(evt){
  $clinit_DOM();
  return $getClientY(evt);
}

function getCaptureElement(){
  $clinit_DOM();
  return sCaptureElem;
}

function getChildCount(parent_0){
  $clinit_DOM();
  return impl_4.getChildCount(parent_0);
}

function getInnerText_1(elem){
  $clinit_DOM();
  return $getInnerText(elem);
}

function maybeInitializeEventSystem(){
  $clinit_DOM();
  $maybeInitializeEventSystem(impl_4);
}

function setElementPropertyBoolean(elem, prop, value){
  $clinit_DOM();
  $setPropertyBoolean(elem, prop, value);
}

function $getTarget_0(this$static){
  return $cast($getEventTarget(this$static));
}

function addNativePreviewHandler(handler){
  isNotNull(handler) || throwAssertionError_Object('Cannot add a null handler');
  maybeInitializeEventSystem();
  getType_31();
  if (isNull(handlers_0)) {
    handlers_0 = new HandlerManager_1(null, true);
    singleton = new Event$NativePreviewEvent_0;
  }
  return $addHandler(handlers_0, TYPE_25, handler);
}

function as_1(event_0){
  return event_0;
}

function setEventListener_0(elem, listener){
  setEventListener(elem, listener);
}

function $$init_439(this$static){
}

function $cancel_3(this$static){
  this$static.isCanceled = true;
}

function $consume(this$static){
  this$static.isConsumed = true;
}

function $dispatch_25(this$static, handler){
  handler.onPreviewNativeEvent(this$static);
  singleton.isFirstHandler = false;
}

function $getNativeEvent_0(this$static){
  return this$static.nativeEvent;
}

function $getTypeInt_0(this$static){
  return $getTypeInt(as_1($getNativeEvent_0(this$static)));
}

function $isCanceled_0(this$static){
  return this$static.isCanceled;
}

function $isConsumed(this$static){
  return this$static.isConsumed;
}

function $isFirstHandler(this$static){
  return this$static.isFirstHandler;
}

function $revive_0(this$static){
  $revive(this$static);
  this$static.isCanceled = false;
  this$static.isConsumed = false;
  this$static.isFirstHandler = true;
  this$static.nativeEvent = null;
}

function $setNativeEvent_0(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function Event$NativePreviewEvent_0(){
  GwtEvent_0.call(this);
  $$init_439(this);
}

function getType_31(){
  isNull(TYPE_25) && (TYPE_25 = new GwtEvent$Type_0);
  return TYPE_25;
}

defineSeed(567, 102, {}, Event$NativePreviewEvent_0);
_.dispatch_0 = function dispatch_26(handler){
  $dispatch_25(this, dynamicCast(handler, Q$Event$NativePreviewHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_27(){
  return TYPE_25;
}
;
_.isCanceled_0 = function isCanceled(){
  return $isCanceled_0(this);
}
;
_.isConsumed_0 = function isConsumed(){
  return $isConsumed(this);
}
;
_.revive = function revive_0(){
  $revive_0(this);
}
;
_.setNativeEvent = function setNativeEvent(nativeEvent){
  $setNativeEvent_0(this, nativeEvent);
}
;
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
_.nativeEvent = null;
function getScrollLeft_2(){
  $clinit_Window();
  return $getScrollLeft_1(get_1());
}

function getScrollTop_0(){
  $clinit_Window();
  return $getScrollTop_0(get_1());
}

defineSeed(577, 141, makeCastMap([Q$HasHandlers]));
_.addCloseHandler = function addCloseHandler_0(handler){
  return $addHandler(this, getType_26(), handler);
}
;
defineSeed(580, 578, {});
_.getChildCount = function getChildCount_0(elem){
  return elem.children.length;
}
;
function $setWidgetPosition(this$static, w, left, top_0){
  $checkWidgetParent(this$static, w);
  this$static.setWidgetPositionImpl(w, left, top_0);
  $verifyPositionNotStatic(this$static, w);
}

function $setWidgetPositionImpl(w, left, top_0){
  var h_0;
  h_0 = $getElement(w);
  if (left == -1 && top_0 == -1) {
    changeToStaticPositioning(h_0);
  }
   else {
    setStyleAttribute(h_0, 'position', 'absolute');
    setStyleAttribute(h_0, 'left', left + 'px');
    setStyleAttribute(h_0, 'top', top_0 + 'px');
  }
}

function $verifyPositionNotStatic(this$static, child){
  var className;
  if (isProdMode()) {
    return;
  }
  if (isNull($getOffsetParent($getElement(child)))) {
    return;
  }
  if (jsEquals($getOffsetParent($getElement(child)), $getElement(this$static))) {
    return;
  }
  if ($equals_3('body', $toLowerCase($getNodeName($getElement(this$static))))) {
    return;
  }
  className = $getName_0(this$static.___clazz$);
  log_0(new IllegalStateException_1(className + " is missing CSS 'position:{relative,absolute,fixed}'"));
}

function AbsolutePanel_0(){
  AbsolutePanel_1.call(this, createDiv());
  setStyleAttribute($getElement(this), 'position', 'relative');
  setStyleAttribute($getElement(this), 'overflow', 'hidden');
}

defineSeed(594, 595, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Iterable]), AbsolutePanel_0);
_.setWidgetPositionImpl = function setWidgetPositionImpl(w, left, top_0){
  $setWidgetPositionImpl(w, left, top_0);
}
;
function $$init_466(){
}

function Button_0(){
  ButtonBase_0.call(this, $createPushButtonElement(get_1()));
  $$init_466();
  this.setStyleName('gwt-Button');
}

function Button_1(html){
  $clinit_FocusWidget();
  Button_0.call(this);
  this.setHTML(html);
}

function Button_2(html, handler){
  $clinit_FocusWidget();
  Button_1.call(this, html);
  $addClickHandler(this, handler);
}

defineSeed(601, 305, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), Button_1, Button_2);
defineSeed(603, 305, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$HasWordWrap, Q$IsWidget, Q$UIObject, Q$Widget]));
_.getText = function getText_4(){
  return $getTextOrHtml(this.directionalTextHelper, false);
}
;
_.setEnabled = function setEnabled_1(enabled){
  $setEnabled_1(this, enabled);
}
;
_.setHTML = function setHTML_1(html){
  $setTextOrHtml_0(this.directionalTextHelper, html, true);
}
;
function $getText(this$static){
  return getInnerText_1($getFace(this$static));
}

function $setHTML_0(this$static, html){
  this$static.face = createDiv();
  setStyleName_0(this$static.face, 'html-face', true);
  setInnerHTML(this$static.face, html);
  $updateButtonFace(this$static);
}

function $setImage(this$static, image){
  this$static.face = $getElement(image);
  $updateButtonFace(this$static);
}

function $updateButtonFace(this$static){
  isNotNull(this$static.this$0.curFace) && jsEquals($getFace(this$static.this$0.curFace), $getFace(this$static)) && $setCurrentFaceElement(this$static.this$0, this$static.face);
}

defineSeed(606, 1, {});
_.getText = function getText_5(){
  return $getText(this);
}
;
function $clinit_PopupPanel(){
  $clinit_PopupPanel = nullMethod;
  $clinit_UIObject();
  200;
  'gwt-PopupPanel';
  impl_7 = new PopupImplIE6_0;
}

function $$init_474(this$static){
  this$static.glassResizer = new PopupPanel$1_0(this$static);
  this$static.animType = ($clinit_PopupPanel$AnimationType() , CENTER_0);
  this$static , 'gwt-PopupPanelGlass';
  this$static.resizeAnimation = new PopupPanel$ResizeAnimation_0(this$static);
}

function $addAutoHidePartner(this$static, partner){
  isNotNull(partner) || throwAssertionError_Object('partner cannot be null');
  isNull(this$static.autoHidePartners) && (this$static.autoHidePartners = new ArrayList_0);
  this$static.autoHidePartners.add_0(partner);
}

function $addCloseHandler(this$static, handler){
  return $addHandler_1(this$static, handler, getType_26());
}

function $addPopupListener(this$static, listener){
  add_15(this$static, listener);
}

function $blur_0(elt){
  if (elt.blur && elt != $doc.body) {
    elt.blur();
  }
}

function $center(this$static){
  var initiallyAnimated, initiallyShowing, left, top_0;
  initiallyShowing = this$static.showing;
  initiallyAnimated = this$static.isAnimationEnabled;
  if (!initiallyShowing) {
    $setVisible_0(this$static, false);
    $setAnimationEnabled_0(this$static, false);
    this$static.show();
  }
  left = getClientWidth() - $getOffsetWidth_1(this$static) >> 1;
  top_0 = getClientHeight() - $getOffsetHeight_1(this$static) >> 1;
  $setPopupPosition(this$static, max_0(getScrollLeft_2() + left, 0), max_0(getScrollTop_0() + top_0, 0));
  if (!initiallyShowing) {
    $setAnimationEnabled_0(this$static, initiallyAnimated);
    if (initiallyAnimated) {
      impl_7.setClip($getElement(this$static), 'rect(0px, 0px, 0px, 0px)');
      $setVisible_0(this$static, true);
      $run(this$static.resizeAnimation, 200);
    }
     else {
      $setVisible_0(this$static, true);
    }
  }
}

function $eventTargetsPartner(this$static, event_0){
  var elem, elem$iterator, target;
  if (isNull(this$static.autoHidePartners)) {
    return false;
  }
  target = $getEventTarget(event_0);
  if (is_0(target)) {
    for (elem$iterator = this$static.autoHidePartners.iterator_0(); elem$iterator.hasNext();) {
      elem = dynamicCastJso(elem$iterator.next_0());
      if ($isOrHasChild(elem, as(target))) {
        return true;
      }
    }
  }
  return false;
}

function $eventTargetsPopup(this$static, event_0){
  var target;
  target = $getEventTarget(event_0);
  if (is_0(target)) {
    return $isOrHasChild($getElement(this$static), as(target));
  }
  return false;
}

function $getContainerElement_0(this$static){
  return $cast(impl_7.getContainerElement_0($getPopupImplElement(this$static)));
}

function $getOffsetHeight_1(this$static){
  return $getOffsetHeight_0(this$static);
}

function $getOffsetWidth_1(this$static){
  return $getOffsetWidth_0(this$static);
}

function $getPopupImplElement(this$static){
  return getFirstChild($getContainerElement(this$static));
}

function $hide(this$static){
  $hide_0(this$static, false);
}

function $hide_0(this$static, autoClosed){
  if (!$isShowing(this$static)) {
    return;
  }
  $setState(this$static.resizeAnimation, false, false);
  fire_3(this$static, this$static, autoClosed);
}

function $isShowing(this$static){
  return this$static.showing;
}

function $maybeUpdateSize(this$static){
  var w;
  w = $getWidget(this$static);
  if (isNotNull(w)) {
    jsNotEquals(this$static.desiredHeight, null) && w.setHeight(this$static.desiredHeight);
    jsNotEquals(this$static.desiredWidth, null) && w.setWidth(this$static.desiredWidth);
  }
}

function $onEventPreview(){
  return true;
}

function $onKeyDownPreview(){
  return true;
}

function $onKeyPressPreview(){
  return true;
}

function $onKeyUpPreview(){
  return true;
}

function $onPreviewNativeEvent(this$static, event_0){
  $isFirstHandler(event_0) && !$onEventPreview(as_1($getNativeEvent_0(event_0))) && $cancel_3(event_0);
}

function $position(this$static, relativeObject, offsetWidth, offsetHeight){
  var distanceFromWindowLeft, distanceFromWindowTop, distanceToWindowBottom, distanceToWindowRight, left, offsetWidthDiff, textBoxAbsoluteLeft, textBoxLeftValForRightEdge, textBoxOffsetWidth, top_0, windowBottom, windowLeft, windowRight, windowTop;
  textBoxOffsetWidth = relativeObject.getOffsetWidth();
  offsetWidthDiff = offsetWidth - textBoxOffsetWidth;
  if ($isRTL_0(getCurrentLocale())) {
    textBoxAbsoluteLeft = $getAbsoluteLeft_0(relativeObject);
    left = textBoxAbsoluteLeft - offsetWidthDiff;
    if (offsetWidthDiff > 0) {
      windowRight = getClientWidth() + getScrollLeft_2();
      windowLeft = getScrollLeft_2();
      textBoxLeftValForRightEdge = textBoxAbsoluteLeft + textBoxOffsetWidth;
      distanceToWindowRight = windowRight - textBoxLeftValForRightEdge;
      distanceFromWindowLeft = textBoxLeftValForRightEdge - windowLeft;
      distanceFromWindowLeft < offsetWidth && distanceToWindowRight >= offsetWidthDiff && (left = textBoxAbsoluteLeft);
    }
  }
   else {
    left = $getAbsoluteLeft_0(relativeObject);
    if (offsetWidthDiff > 0) {
      windowRight = getClientWidth() + getScrollLeft_2();
      windowLeft = getScrollLeft_2();
      distanceToWindowRight = windowRight - left;
      distanceFromWindowLeft = left - windowLeft;
      distanceToWindowRight < offsetWidth && distanceFromWindowLeft >= offsetWidthDiff && (left -= offsetWidthDiff);
    }
  }
  top_0 = $getAbsoluteTop_0(relativeObject);
  windowTop = getScrollTop_0();
  windowBottom = getScrollTop_0() + getClientHeight();
  distanceFromWindowTop = top_0 - windowTop;
  distanceToWindowBottom = windowBottom - (top_0 + relativeObject.getOffsetHeight());
  distanceToWindowBottom < offsetHeight && distanceFromWindowTop >= offsetHeight?(top_0 -= offsetHeight):(top_0 += relativeObject.getOffsetHeight());
  $setPopupPosition(this$static, left, top_0);
}

function $previewNativeEvent(this$static, event_0){
  var eventTargetsPopupOrPartner, nativeEvent, target, type;
  if ($isCanceled_0(event_0) || !this$static.previewAllNativeEvents && $isConsumed(event_0)) {
    this$static.modal && $cancel_3(event_0);
    return;
  }
  this$static.onPreviewNativeEvent(event_0);
  if ($isCanceled_0(event_0)) {
    return;
  }
  nativeEvent = as_1($getNativeEvent_0(event_0));
  eventTargetsPopupOrPartner = $eventTargetsPopup(this$static, nativeEvent) || $eventTargetsPartner(this$static, nativeEvent);
  eventTargetsPopupOrPartner && $consume(event_0);
  this$static.modal && $cancel_3(event_0);
  type = $getTypeInt(nativeEvent);
  switch (type) {
    case 128:
      {
        $onKeyDownPreview((narrow_char($getKeyCode(nativeEvent)) , getKeyboardModifiers(nativeEvent))) || $cancel_3(event_0);
        return;
      }

    case 512:
      {
        $onKeyUpPreview((narrow_char($getKeyCode(nativeEvent)) , getKeyboardModifiers(nativeEvent))) || $cancel_3(event_0);
        return;
      }

    case 256:
      {
        $onKeyPressPreview((narrow_char($getKeyCode(nativeEvent)) , getKeyboardModifiers(nativeEvent))) || $cancel_3(event_0);
        return;
      }

    case 4:
      if (isNotNull(getCaptureElement())) {
        $consume(event_0);
        return;
      }

      if (!eventTargetsPopupOrPartner && this$static.autoHide) {
        $hide_0(this$static, true);
        return;
      }

      break;
    case 8:
    case 64:
    case 1:
    case 2:
      {
        if (isNotNull(getCaptureElement())) {
          $consume(event_0);
          return;
        }
        break;
      }

    case 2048:
      {
        target = $getTarget_0(nativeEvent);
        if (this$static.modal && !eventTargetsPopupOrPartner && isNotNull(target)) {
          $blur_0(target);
          $cancel_3(event_0);
          return;
        }
        break;
      }

  }
}

function $setAnimationEnabled_0(this$static, enable){
  this$static.isAnimationEnabled = enable;
}

function $setAnimationType(this$static, type){
  this$static.animType = type;
}

function $setPopupPosition(this$static, left, top_0){
  var elem;
  this$static.leftPosition = left;
  this$static.topPosition = top_0;
  left -= $getBodyOffsetLeft(get_1());
  top_0 -= $getBodyOffsetTop(get_1());
  elem = $getElement(this$static);
  $setPropertyPx($getStyle(elem), 'left', left);
  $setPropertyPx($getStyle(elem), 'top', top_0);
}

function $setPopupPositionAndShow(this$static, callback){
  $setVisible_0(this$static, false);
  this$static.show();
  callback.setPosition($getOffsetWidth_1(this$static), $getOffsetHeight_1(this$static));
  $setVisible_0(this$static, true);
}

function $setPreviewingAllNativeEvents(this$static, previewAllNativeEvents){
  this$static.previewAllNativeEvents = previewAllNativeEvents;
}

function $setVisible_0(this$static, visible){
  setStyleAttribute($getElement(this$static), 'visibility', visible?'visible':'hidden');
  impl_7.setVisible_0($getElement(this$static), visible);
  if (isNotNull(this$static.glass)) {
    impl_7.setVisible_0(this$static.glass, visible);
    $setProperty_0($getStyle(this$static.glass), 'visibility', visible?'visible':'hidden');
  }
}

function $setWidget_0(this$static, w){
  $setWidget(this$static, w);
  $maybeUpdateSize(this$static);
}

function $setWidth_1(this$static, width){
  this$static.desiredWidth = width;
  $maybeUpdateSize(this$static);
  $length_1(width) == 0 && (this$static.desiredWidth = null);
}

function $show(this$static){
  if (this$static.showing) {
    return;
  }
   else 
    this$static.isAttached() && $removeFromParent(this$static);
  $setState(this$static.resizeAnimation, true, false);
}

function $showRelativeTo(this$static, target){
  $setPopupPositionAndShow(this$static, new PopupPanel$2_0(this$static, target));
}

function $updateHandlers(this$static){
  if (isNotNull(this$static.nativePreviewHandlerRegistration)) {
    this$static.nativePreviewHandlerRegistration.removeHandler();
    this$static.nativePreviewHandlerRegistration = null;
  }
  if (isNotNull(this$static.historyHandlerRegistration)) {
    this$static.historyHandlerRegistration.removeHandler();
    this$static.historyHandlerRegistration = null;
  }
  if (this$static.showing) {
    this$static.nativePreviewHandlerRegistration = addNativePreviewHandler(new PopupPanel$3_0(this$static));
    this$static.historyHandlerRegistration = addValueChangeHandler_0(new PopupPanel$4_0(this$static));
  }
}

function PopupPanel_0(){
  SimplePanel_0.call(this);
  $$init_474(this);
  $appendChild($getContainerElement(this), impl_7.createElement_2());
  $setPopupPosition(this, 0, 0);
  this.setStyleName('gwt-PopupPanel');
  setStyleName($getContainerElement_0(this), 'popupContent');
}

function PopupPanel_1(autoHide){
  $clinit_PopupPanel();
  PopupPanel_0.call(this);
  this.autoHide = autoHide;
  this.autoHideOnHistoryEvents = autoHide;
}

function PopupPanel_2(autoHide, modal){
  $clinit_PopupPanel();
  PopupPanel_1.call(this, autoHide);
  this.modal = modal;
}

defineSeed(610, 258, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$AcceptsOneWidget, Q$HasOneWidget, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$PopupPanel, Q$SimplePanel, Q$UIObject, Q$Widget, Q$Iterable]), PopupPanel_1, PopupPanel_2);
_.addCloseHandler = function addCloseHandler_1(handler){
  return $addCloseHandler(this, handler);
}
;
_.getContainerElement = function getContainerElement_0(){
  return $getContainerElement_0(this);
}
;
_.getOffsetHeight = function getOffsetHeight_0(){
  return $getOffsetHeight_1(this);
}
;
_.getOffsetWidth = function getOffsetWidth_0(){
  return $getOffsetWidth_1(this);
}
;
_.getStyleElement = function getStyleElement_0(){
  return $cast(impl_7.getStyleElement_0($getPopupImplElement(this)));
}
;
_.hide = function hide(){
  $hide(this);
}
;
_.onPreviewNativeEvent = function onPreviewNativeEvent_0(event_0){
  $onPreviewNativeEvent(this, event_0);
}
;
_.onUnload = function onUnload_2(){
  $onUnload();
  $isShowing(this) && $setState(this.resizeAnimation, false, true);
}
;
_.setHeight = function setHeight_0(height){
  this.desiredHeight = height;
  $maybeUpdateSize(this);
  $length_1(height) == 0 && (this.desiredHeight = null);
}
;
_.setVisible = function setVisible_2(visible){
  $setVisible_0(this, visible);
}
;
_.setWidget = function setWidget_0(w){
  $setWidget_0(this, w);
}
;
_.setWidth = function setWidth_0(width){
  $setWidth_1(this, width);
}
;
_.show = function show(){
  $show(this);
}
;
_.autoHide = false;
_.autoHideOnHistoryEvents = false;
_.autoHidePartners = null;
_.desiredHeight = null;
_.desiredWidth = null;
_.glass = null;
_.historyHandlerRegistration = null;
_.isAnimationEnabled = false;
_.isGlassEnabled = false;
_.leftPosition = -1;
_.modal = false;
_.nativePreviewHandlerRegistration = null;
_.previewAllNativeEvents = false;
_.showing = false;
_.topPosition = -1;
var impl_7;
function $$init_475(){
}

function $doAttachChildren(this$static){
  this$static.decPanel.onAttach();
}

function $doDetachChildren(this$static){
  this$static.decPanel.onDetach();
}

function $setWidget_1(this$static, w){
  this$static.decPanel.setWidget(w);
  $maybeUpdateSize(this$static);
}

function DecoratedPopupPanel_2(autoHide, modal, prefix){
  $clinit_PopupPanel();
  var rowStyles;
  PopupPanel_2.call(this, autoHide, modal);
  $$init_475();
  rowStyles = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, [prefix + 'Top', prefix + 'Middle', prefix + 'Bottom']);
  this.decPanel = new DecoratorPanel_1(rowStyles, 1);
  this.decPanel.setStyleName('');
  $setStylePrimaryName(this, 'gwt-DecoratedPopupPanel');
  $setWidget_0(this, this.decPanel);
  setStyleName_0($getContainerElement_0(this), 'popupContent', false);
  setStyleName_0($getContainerElement_1(this.decPanel), prefix + 'Content', true);
}

defineSeed(609, 610, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$AcceptsOneWidget, Q$HasOneWidget, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$PopupPanel, Q$SimplePanel, Q$UIObject, Q$Widget, Q$Iterable]), DecoratedPopupPanel_2);
_.doAttachChildren = function doAttachChildren_1(){
  $doAttachChildren(this);
}
;
_.doDetachChildren = function doDetachChildren_1(){
  $doDetachChildren(this);
}
;
_.getWidget = function getWidget_0(){
  return this.decPanel.getWidget();
}
;
_.iterator_0 = function iterator_4(){
  return this.decPanel.iterator_0();
}
;
_.remove_3 = function remove_8(w){
  return this.decPanel.remove_3(w);
}
;
_.setWidget = function setWidget_1(w){
  $setWidget_1(this, w);
}
;
_.decPanel = null;
defineSeed(612, 595, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Iterable]));
_.body_0 = null;
_.visibleStack = -1;
defineSeed(622, 623, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWordWrap, Q$IsWidget, Q$Label, Q$UIObject, Q$Widget]));
_.getDirection = function getDirection(){
  return getDirectionOnElement($getElement(this));
}
;
_.getText = function getText_7(){
  return $getText_0(this);
}
;
_.setDirection = function setDirection(direction){
  $setDirection(this, direction);
}
;
function $setBorderWidth(this$static, width){
  setElementProperty(this$static.tableElem, 'border', '' + width);
}

function $setHTML_2(this$static, row, column, html){
  var td;
  this$static.prepareCell(row, column);
  td = $cleanCell(this$static, row, column, jsEquals(html, null));
  jsNotEquals(html, null) && setInnerHTML(td, html);
}

function $setVerticalAlignment(this$static, row, column, align){
  this$static.this$0.prepareCell(row, column);
  setStyleAttribute($getCellElement_1(this$static.this$0.bodyElem, row, column), 'verticalAlign', $getVerticalAlignString(align));
}

function $$init_515(this$static){
  this$static.widgets = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Widget, 2, 0);
  this$static.elements = initDim(_3Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), -1, 2, 0);
}

function $getElement_1(this$static, index){
  return this$static.elements[index];
}

function $getSplitElement(this$static){
  return this$static.splitElem;
}

function $isResizing(this$static){
  return this$static.isResizing;
}

function $onEnsureDebugId_0(this$static, baseID){
  $onEnsureDebugId(this$static, baseID);
  ensureDebugId(this$static.splitElem, baseID, 'splitter');
}

function $setWidget_3(this$static, index, w){
  var oldWidget;
  oldWidget = this$static.widgets[index];
  if (jsEquals(oldWidget, w)) {
    return;
  }
  isNotNull(w) && $removeFromParent(w);
  if (isNotNull(oldWidget)) {
    try {
      $orphan(this$static, oldWidget);
    }
     finally {
      removeChild_0(this$static.elements[index], $getElement(oldWidget));
      setCheck(this$static.widgets, index, null);
    }
  }
  setCheck(this$static.widgets, index, w);
  if (isNotNull(w)) {
    appendChild(this$static.elements[index], $getElement(w));
    $adopt(this$static, w);
  }
}

function $startResizingFrom(this$static, x, y){
  var height, width;
  this$static.isResizing = true;
  this$static.onSplitterResizeStarted(x, y);
  height = $getScrollHeight(getBodyElement()) - 1;
  width = $getScrollWidth(getBodyElement()) - 1;
  $setProperty_0($getStyle(glassElem), 'height', height + 'px');
  $setProperty_0($getStyle(glassElem), 'width', width + 'px');
  $appendChild(getBodyElement(), glassElem);
}

function $stopResizing(this$static){
  this$static.isResizing = false;
  $removeChild(getBodyElement(), glassElem);
}

function SplitPanel_0(mainElem, splitElem, headElem, tailElem){
  Panel_0.call(this);
  $$init_515(this);
  $setElement_0(this, mainElem);
  this.splitElem = splitElem;
  this.elements[0] = headElem;
  this.elements[1] = tailElem;
  this.sinkEvents(8316);
  if (isNull(glassElem)) {
    glassElem = createDiv();
    $setProperty_0($getStyle(glassElem), 'position', 'absolute');
    $setProperty_0($getStyle(glassElem), 'top', '0px');
    $setProperty_0($getStyle(glassElem), 'left', '0px');
    $setProperty_0($getStyle(glassElem), 'margin', '0px');
    $setProperty_0($getStyle(glassElem), 'padding', '0px');
    $setProperty_0($getStyle(glassElem), 'border', '0px');
    $setProperty_0($getStyle(glassElem), 'background', 'white');
    $setProperty_0($getStyle(glassElem), 'opacity', '0.0');
    $setProperty_0($getStyle(glassElem), 'filter', 'alpha(opacity=0)');
  }
}

function addAbsolutePositoning(elem){
  $clinit_UIObject();
  setStyleAttribute(elem, 'position', 'absolute');
}

function addScrolling(elem){
  setStyleAttribute(elem, 'overflow', 'auto');
}

function expandToFitParentUsingCssOffsets(elem){
  $clinit_UIObject();
  '0px';
  addAbsolutePositoning(elem);
  setLeft(elem, '0px');
  setRight(elem, '0px');
  setTop(elem, '0px');
  setBottom(elem, '0px');
}

function expandToFitParentUsingPercentages(elem){
  $clinit_UIObject();
  '0px';
  '100%';
  addAbsolutePositoning(elem);
  setTop(elem, '0px');
  setLeft(elem, '0px');
  setWidth_1(elem, '100%');
  setHeight_1(elem, '100%');
}

function getOffsetHeight_1(elem){
  $clinit_UIObject();
  return getElementPropertyInt(elem, 'offsetHeight');
}

function preventBoxStyles(elem){
  setIntStyleAttribute(elem, 'padding', 0);
  setIntStyleAttribute(elem, 'margin', 0);
  setStyleAttribute(elem, 'border', 'none');
  return elem;
}

function setBottom(elem, size){
  $clinit_UIObject();
  setStyleAttribute(elem, 'bottom', size);
}

function setHeight_1(elem, height){
  $clinit_UIObject();
  setStyleAttribute(elem, 'height', height);
}

function setLeft(elem, left){
  $clinit_UIObject();
  setStyleAttribute(elem, 'left', left);
}

function setRight(elem, right){
  $clinit_UIObject();
  setStyleAttribute(elem, 'right', right);
}

function setTop(elem, top_0){
  $clinit_UIObject();
  setStyleAttribute(elem, 'top', top_0);
}

function setWidth_1(elem, width){
  $clinit_UIObject();
  setStyleAttribute(elem, 'width', width);
}

defineSeed(655, 259, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Iterable]));
_.iterator_0 = function iterator_8(){
  return createWidgetIterator(this, this.widgets);
}
;
_.onBrowserEvent = function onBrowserEvent_7(event_0){
  var target;
  switch (eventGetType(event_0)) {
    case 4:
      {
        target = eventGetTarget_0(event_0);
        if (isOrHasChild_0(this.splitElem, target)) {
          $startResizingFrom(this, eventGetClientX(event_0) - $getAbsoluteLeft_0(this), eventGetClientY(event_0) - $getAbsoluteTop_0(this));
          setCapture($getElement(this));
          eventPreventDefault_0(event_0);
        }
        break;
      }

    case 8:
      {
        if ($isResizing(this)) {
          $stopResizing(this);
          releaseCapture($getElement(this));
        }
        break;
      }

    case 64:
      {
        if ($isResizing(this)) {
          isNotNull(getCaptureElement()) || throwAssertionError();
          this.onSplitterResize(eventGetClientX(event_0) - $getAbsoluteLeft_0(this), eventGetClientY(event_0) - $getAbsoluteTop_0(this));
          eventPreventDefault_0(event_0);
        }
        break;
      }

    case 8192:
      {
        $isResizing(this) && $stopResizing(this);
        break;
      }

  }
  $onBrowserEvent(this, event_0);
}
;
_.onEnsureDebugId = function onEnsureDebugId_9(baseID){
  $onEnsureDebugId_0(this, baseID);
}
;
_.remove_3 = function remove_16(widget){
  if (jsEquals(this.widgets[0], widget)) {
    $setWidget_3(this, 0, null);
    return true;
  }
   else if (jsEquals(this.widgets[1], widget)) {
    $setWidget_3(this, 1, null);
    return true;
  }
  return false;
}
;
_.isResizing = false;
_.splitElem = null;
var glassElem = null;
defineSeed(663, 242, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.directionalTextHelper = null;
_.targetHistoryToken = null;
defineSeed(670, 187, makeCastMap([Q$Iterable, Q$Collection, Q$List]));
_.indexOf_0 = function indexOf(toFind){
  var i, n;
  for (i = 0 , n = this.size_1(); i < n; ++i) {
    if (jsEquals(toFind, null)?jsEquals(this.get_0(i), null):equals__devirtual$(toFind, this.get_0(i))) {
      return i;
    }
  }
  return -1;
}
;
defineSeed(669, 670, makeCastMap([Q$Serializable, Q$Iterable, Q$Collection, Q$List, Q$RandomAccess]));
_.indexOf_0 = function indexOf_0(o){
  return $indexOf(this, o);
}
;
function $addItem(this$static, item){
  $insertItem(this$static, item, -1);
}

function $clear_2(this$static){
  $clear_0($getSelectElement(this$static));
}

function $insertItem(this$static, item, index){
  $insertItem_1(this$static, item, item, index);
}

function $setVisibleItemCount(this$static, visibleItems){
  $setSize($getSelectElement(this$static), visibleItems);
}

function $$init_531(){
}

function ListenerWrapper_0(listener){
  BaseListenerWrapper_0.call(this, listener);
  $$init_531();
}

defineSeed(672, 552, makeCastMap([Q$EventHandler]));
function $$init_532(){
}

function ListenerWrapper$WrappedPopupListener_0(listener){
  ListenerWrapper_0.call(this, listener);
  $$init_532();
}

function add_15(source, listener){
  source.addCloseHandler(new ListenerWrapper$WrappedPopupListener_0(listener));
}

defineSeed(673, 672, makeCastMap([Q$CloseHandler, Q$EventHandler]), ListenerWrapper$WrappedPopupListener_0);
_.onClose = function onClose_1(event_0){
  dynamicCast($getListener(this), Q$PopupListener).onPopupClosed(dynamicCast($getSource_0(event_0), Q$PopupPanel), $isAutoClosed(event_0));
}
;
function $$init_534(this$static){
  this$static.allItems = new ArrayList_0;
  this$static.items = new ArrayList_0;
}

function $addItem_1(this$static, item){
  return $insertItem_2(this$static, item, $size_1(this$static.allItems));
}

function $addItemElement(this$static, beforeIndex, tdElem){
  var tr;
  if (this$static.vertical) {
    tr = createTR();
    insertChild(this$static.body_0, tr, beforeIndex);
    appendChild(tr, tdElem);
  }
   else {
    tr = getChild(this$static.body_0, 0);
    insertChild(tr, tdElem, beforeIndex);
  }
}

function $close(this$static, focus_0){
  if (isNotNull(this$static.parentMenu)) {
    $hide_0(this$static.parentMenu.popup, !focus_0);
    focus_0 && $focus_0(this$static.parentMenu);
  }
}

function $closeAllParents(this$static){
  isNotNull(this$static.parentMenu)?$close(this$static, false):$selectItem(this$static, null);
}

function $closeAllParentsAndChildren(this$static){
  $closeAllParents(this$static);
  isNull(this$static.parentMenu) && isNotNull(this$static.popup) && this$static.popup.hide();
}

function $doItemAction(this$static, item, fireCommand, focus_0){
  var cmd;
  if (!$isEnabled(item)) {
    return;
  }
  $selectItem(this$static, item);
  if (fireCommand && isNotNull($getCommand(item))) {
    $closeAllParents(this$static);
    cmd = $getCommand(item);
    get_0().scheduleFinally(new MenuBar$1_0(this$static, cmd));
    if (isNotNull(this$static.shownChildMenu)) {
      $onHide(this$static.shownChildMenu, focus_0);
      this$static.popup.hide();
      this$static.shownChildMenu = null;
      $selectItem(this$static, null);
    }
  }
   else if (isNotNull($getSubMenu(item))) {
    if (isNull(this$static.shownChildMenu)) {
      $openPopup(this$static, item);
    }
     else if (jsNotEquals($getSubMenu(item), this$static.shownChildMenu)) {
      $onHide(this$static.shownChildMenu, focus_0);
      this$static.popup.hide();
      $openPopup(this$static, item);
    }
     else if (fireCommand && !this$static.autoOpen) {
      $onHide(this$static.shownChildMenu, focus_0);
      this$static.popup.hide();
      this$static.shownChildMenu = null;
      $selectItem(this$static, item);
    }
  }
   else if (this$static.autoOpen && isNotNull(this$static.shownChildMenu)) {
    $onHide(this$static.shownChildMenu, focus_0);
    this$static.popup.hide();
    this$static.shownChildMenu = null;
  }
}

function $eatEvent(event_0){
  eventCancelBubble(event_0, true);
  eventPreventDefault_0(event_0);
}

function $findItem(this$static, hItem){
  var item, item$iterator;
  for (item$iterator = this$static.items.iterator_0(); item$iterator.hasNext();) {
    item = dynamicCast(item$iterator.next_0(), Q$MenuItem);
    if (isOrHasChild_0($getElement(item), hItem)) {
      return item;
    }
  }
  return null;
}

function $focus_0(this$static){
  ($clinit_FocusPanel() , impl_8).focus_1($getElement(this$static));
}

function $getItemContainerElement(this$static){
  return this$static.vertical?this$static.body_0:getChild(this$static.body_0, 0);
}

function $getItems(this$static){
  return this$static.items;
}

function $getSelectedItem_0(this$static){
  return this$static.selectedItem;
}

function $init_2(this$static, vertical, subMenuIcon){
  var outer, table, tr;
  this$static.subMenuIcon = subMenuIcon;
  table = createTable();
  this$static.body_0 = createTBody();
  appendChild(table, this$static.body_0);
  if (!vertical) {
    tr = createTR();
    appendChild(this$static.body_0, tr);
  }
  this$static.vertical = vertical;
  outer = ($clinit_FocusPanel() , impl_8).createFocusable();
  appendChild(outer, table);
  $setElement_0(this$static, outer);
  setRole($getElement(this$static), 'menubar');
  this$static.sinkEvents(2225);
  this$static.setStyleName('gwt-MenuBar');
  vertical?$addStyleDependentName(this$static, 'vertical'):$addStyleDependentName(this$static, 'horizontal');
  setStyleAttribute($getElement(this$static), 'outline', '0px');
  setElementAttribute($getElement(this$static), 'hideFocus', 'true');
  $addDomHandler(this$static, new MenuBar$2_0(this$static), getType_8());
}

function $insertItem_2(this$static, item, beforeIndex){
  var i, itemsIndex;
  if (beforeIndex < 0 || beforeIndex > $size_1(this$static.allItems)) {
    throw new IndexOutOfBoundsException_0;
  }
  $add_12(this$static.allItems, beforeIndex, item);
  itemsIndex = 0;
  for (i = 0; i < beforeIndex; ++i) {
    instanceOf($get_6(this$static.allItems, i), Q$MenuItem) && ++itemsIndex;
  }
  $add_12(this$static.items, itemsIndex, item);
  $addItemElement(this$static, beforeIndex, $getElement(item));
  $setParentMenu(item, this$static);
  $setSelectionStyle_0(item, false);
  $updateSubmenuIcon(this$static, item);
  return item;
}

function $itemOver(this$static, item, focus_0){
  if (isNull(item)) {
    if (isNotNull(this$static.selectedItem) && jsEquals(this$static.shownChildMenu, $getSubMenu(this$static.selectedItem))) {
      return;
    }
  }
  if (isNotNull(item) && !$isEnabled(item)) {
    return;
  }
  $selectItem(this$static, item);
  focus_0 && this$static.focusOnHover && $focus_0(this$static);
  isNotNull(item) && ((isNotNull(this$static.shownChildMenu) || isNotNull(this$static.parentMenu) || this$static.autoOpen) && $doItemAction(this$static, item, false, this$static.focusOnHover));
}

function $moveSelectionDown(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  if (this$static.vertical) {
    $selectNextItem(this$static);
  }
   else {
    if (isNotNull($getSubMenu(this$static.selectedItem)) && !$getItems($getSubMenu(this$static.selectedItem)).isEmpty() && (isNull(this$static.shownChildMenu) || isNull($getSelectedItem_0(this$static.shownChildMenu)))) {
      isNull(this$static.shownChildMenu) && $doItemAction(this$static, this$static.selectedItem, false, true);
      $focus_0($getSubMenu(this$static.selectedItem));
    }
     else 
      isNotNull(this$static.parentMenu) && (this$static.parentMenu.vertical?$selectNextItem(this$static.parentMenu):$moveSelectionDown(this$static.parentMenu));
  }
}

function $moveSelectionUp(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  isNull(this$static.shownChildMenu) && this$static.vertical?$selectPrevItem(this$static):isNotNull(this$static.parentMenu) && this$static.parentMenu.vertical?$selectPrevItem(this$static.parentMenu):$close(this$static, true);
}

function $moveToNextItem(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  if (this$static.vertical) {
    if (isNotNull($getSubMenu(this$static.selectedItem)) && !$getItems($getSubMenu(this$static.selectedItem)).isEmpty() && (isNull(this$static.shownChildMenu) || isNull($getSelectedItem_0(this$static.shownChildMenu)))) {
      isNull(this$static.shownChildMenu) && $doItemAction(this$static, this$static.selectedItem, false, true);
      $focus_0($getSubMenu(this$static.selectedItem));
    }
     else 
      isNotNull(this$static.parentMenu) && (this$static.parentMenu.vertical?$moveToNextItem(this$static.parentMenu):$selectNextItem(this$static.parentMenu));
  }
   else {
    $selectNextItem(this$static);
  }
}

function $moveToPrevItem(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  this$static.vertical?isNotNull(this$static.parentMenu) && !this$static.parentMenu.vertical?$selectPrevItem(this$static.parentMenu):$close(this$static, true):$selectPrevItem(this$static);
}

function $onHide(this$static, focus_0){
  if (isNotNull(this$static.shownChildMenu)) {
    $onHide(this$static.shownChildMenu, focus_0);
    this$static.popup.hide();
    focus_0 && $focus_0(this$static);
  }
}

function $onShow(this$static){
  $selectItem(this$static, null);
}

function $openPopup(this$static, item){
  var primaryStyleName;
  isNotNull(this$static.parentMenu) && isNotNull(this$static.parentMenu.popup) && $setPreviewingAllNativeEvents(this$static.parentMenu.popup, false);
  this$static.popup = new MenuBar$3_0(this$static, true, false, 'menuPopup', item);
  $setAnimationType(this$static.popup, ($clinit_PopupPanel$AnimationType() , ONE_WAY_CORNER));
  $setAnimationEnabled_0(this$static.popup, this$static.isAnimationEnabled);
  this$static.popup.setStyleName('gwt-MenuBarPopup');
  primaryStyleName = $getStylePrimaryName(this$static);
  $equals_3('gwt-MenuBar', primaryStyleName) || this$static.popup.addStyleName(primaryStyleName + 'Popup');
  $addPopupListener(this$static.popup, this$static);
  this$static.shownChildMenu = $getSubMenu(item);
  $getSubMenu(item).parentMenu = this$static;
  $setPopupPositionAndShow(this$static.popup, new MenuBar$4_0(this$static, item));
}

function $selectFirstItemIfNoneSelected(this$static){
  var nextItem, nextItem$iterator;
  if (isNull(this$static.selectedItem)) {
    for (nextItem$iterator = this$static.items.iterator_0(); nextItem$iterator.hasNext();) {
      nextItem = dynamicCast(nextItem$iterator.next_0(), Q$MenuItem);
      if ($isEnabled(nextItem)) {
        $selectItem(this$static, nextItem);
        break;
      }
    }
    return true;
  }
  return false;
}

function $selectItem(this$static, item){
  var td, tr;
  isNull(item) || jsEquals($getParentMenu(item), this$static) || throwAssertionError();
  if (jsEquals(item, this$static.selectedItem)) {
    return;
  }
  if (isNotNull(this$static.selectedItem)) {
    $setSelectionStyle_0(this$static.selectedItem, false);
    if (this$static.vertical) {
      tr = getParent($getElement(this$static.selectedItem));
      if (getChildCount(tr) == 2) {
        td = getChild(tr, 1);
        setStyleName_0(td, 'subMenuIcon-selected', false);
      }
    }
  }
  if (isNotNull(item)) {
    $setSelectionStyle_0(item, true);
    if (this$static.vertical) {
      tr = getParent($getElement(item));
      if (getChildCount(tr) == 2) {
        td = getChild(tr, 1);
        setStyleName_0(td, 'subMenuIcon-selected', true);
      }
    }
    setState($getElement(this$static), 'aria-activedescendant', getElementAttribute($getElement(item), 'id'));
  }
  this$static.selectedItem = item;
}

function $selectNextItem(this$static){
  var firstIndex, index, itemToBeSelected;
  if (isNull(this$static.selectedItem)) {
    return;
  }
  index = $indexOf(this$static.items, this$static.selectedItem);
  index != -1 || throwAssertionError();
  firstIndex = index;
  while (true) {
    index = index + 1;
    index == $size_1(this$static.items) && (index = 0);
    if (index == firstIndex) {
      itemToBeSelected = dynamicCast($get_6(this$static.items, firstIndex), Q$MenuItem);
      break;
    }
     else {
      itemToBeSelected = dynamicCast($get_6(this$static.items, index), Q$MenuItem);
      if ($isEnabled(itemToBeSelected)) {
        break;
      }
    }
  }
  $selectItem(this$static, itemToBeSelected);
  isNotNull(this$static.shownChildMenu) && $doItemAction(this$static, itemToBeSelected, false, true);
}

function $selectPrevItem(this$static){
  var firstIndex, index, itemToBeSelected;
  if (isNull(this$static.selectedItem)) {
    return;
  }
  index = $indexOf(this$static.items, this$static.selectedItem);
  index != -1 || throwAssertionError();
  firstIndex = index;
  while (true) {
    index = index - 1;
    index < 0 && (index = $size_1(this$static.items) - 1);
    if (index == firstIndex) {
      itemToBeSelected = dynamicCast($get_6(this$static.items, firstIndex), Q$MenuItem);
      break;
    }
     else {
      itemToBeSelected = dynamicCast($get_6(this$static.items, index), Q$MenuItem);
      if ($isEnabled(itemToBeSelected)) {
        break;
      }
    }
  }
  $selectItem(this$static, itemToBeSelected);
  isNotNull(this$static.shownChildMenu) && $doItemAction(this$static, itemToBeSelected, false, true);
}

function $setItemColSpan(item, colspan){
  setElementPropertyInt($getElement(item), 'colSpan', colspan);
}

function $setMenuItemDebugIds(this$static, baseID){
  var item, item$iterator, itemCount;
  itemCount = 0;
  for (item$iterator = this$static.items.iterator_0(); item$iterator.hasNext();) {
    item = dynamicCast(item$iterator.next_0(), Q$MenuItem);
    $ensureDebugId(item, baseID + '-item' + itemCount);
    ++itemCount;
  }
}

function $updateSubmenuIcon(this$static, item){
  var container, idx, submenu, td, tdCount, tr;
  if (!this$static.vertical) {
    return;
  }
  idx = $indexOf(this$static.allItems, item);
  if (idx == -1) {
    return;
  }
  container = $getItemContainerElement(this$static);
  tr = getChild(container, idx);
  tdCount = getChildCount(tr);
  submenu = $getSubMenu(item);
  if (isNull(submenu)) {
    tdCount == 2 && removeChild_0(tr, getChild(tr, 1));
    $setItemColSpan(item, 2);
  }
   else if (tdCount == 1) {
    $setItemColSpan(item, 1);
    td = createTD();
    setElementProperty(td, 'vAlign', 'middle');
    setInnerHTML(td, $getHTML(this$static.subMenuIcon));
    setStyleName(td, 'subMenuIcon');
    appendChild(tr, td);
  }
}

function MenuBar_1(vertical){
  MenuBar_2.call(this, vertical, new MenuBar_Resources_default_StaticClientBundleGenerator_0);
}

function MenuBar_2(vertical, resources){
  Widget_0.call(this);
  $$init_534(this);
  $init_2(this, vertical, create_9(resources.menuBarSubMenuIcon()));
}

defineSeed(675, 242, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$PopupListener, Q$UIObject, Q$Widget]), MenuBar_1);
_.addCloseHandler = function addCloseHandler_3(handler){
  return $addHandler_1(this, handler, getType_26());
}
;
_.onBrowserEvent = function onBrowserEvent_10(event_0){
  var item, keyCode;
  item = $findItem(this, eventGetTarget_0(event_0));
  switch (eventGetType(event_0)) {
    case 1:
      {
        ($clinit_FocusPanel() , impl_8).focus_1($getElement(this));
        isNotNull(item) && $doItemAction(this, item, true, true);
        break;
      }

    case 16:
      {
        isNotNull(item) && $itemOver(this, item, true);
        break;
      }

    case 32:
      {
        isNotNull(item) && $itemOver(this, null, true);
        break;
      }

    case 2048:
      {
        $selectFirstItemIfNoneSelected(this);
        break;
      }

    case 128:
      {
        keyCode = eventGetKeyCode(event_0);
        switch (keyCode) {
          case 37:
            $isRTL_0(getCurrentLocale())?$moveToNextItem(this):$moveToPrevItem(this);
            $eatEvent(event_0);
            break;
          case 39:
            $isRTL_0(getCurrentLocale())?$moveToPrevItem(this):$moveToNextItem(this);
            $eatEvent(event_0);
            break;
          case 38:
            $moveSelectionUp(this);
            $eatEvent(event_0);
            break;
          case 40:
            $moveSelectionDown(this);
            $eatEvent(event_0);
            break;
          case 27:
            $closeAllParentsAndChildren(this);
            $eatEvent(event_0);
            break;
          case 9:
            $closeAllParentsAndChildren(this);
            break;
          case 13:
            if (!$selectFirstItemIfNoneSelected(this)) {
              $doItemAction(this, this.selectedItem, true, true);
              $eatEvent(event_0);
            }

        }
        break;
      }

  }
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach_4(){
  isNotNull(this.popup) && this.popup.hide();
  $onDetach(this);
}
;
_.onEnsureDebugId = function onEnsureDebugId_13(baseID){
  $onEnsureDebugId(this, baseID);
  $setMenuItemDebugIds(this, baseID);
}
;
_.onPopupClosed = function onPopupClosed(sender, autoClosed){
  autoClosed && $closeAllParents(this);
  $onHide(this, !autoClosed);
  fire_2(this, sender);
  this.shownChildMenu = null;
  this.popup = null;
  isNotNull(this.parentMenu) && isNotNull(this.parentMenu.popup) && $setPreviewingAllNativeEvents(this.parentMenu.popup, true);
}
;
_.autoOpen = false;
_.body_0 = null;
_.focusOnHover = true;
_.isAnimationEnabled = false;
_.parentMenu = null;
_.popup = null;
_.selectedItem = null;
_.shownChildMenu = null;
_.subMenuIcon = null;
_.vertical = false;
function $$init_535(){
}

function MenuBar$1_0(this$0, val$cmd){
  this , this$0;
  this.val$cmd = val$cmd;
  Object_1.call(this);
  $$init_535();
}

defineSeed(676, 1, {}, MenuBar$1_0);
_.execute_1 = function execute_16(){
  this.val$cmd.execute_1();
}
;
_.val$cmd = null;
function $$init_536(){
}

function MenuBar$2_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_536();
}

defineSeed(677, 1, makeCastMap([Q$BlurHandler, Q$EventHandler]), MenuBar$2_0);
_.onBlur = function onBlur(event_0){
  isNull(this.this$0.shownChildMenu) && $selectItem(this.this$0, null);
}
;
_.this$0 = null;
function $$init_537(this$static){
  $setWidget_1(this$static, $getSubMenu(this$static.val$item));
  $setPreviewingAllNativeEvents(this$static, true);
  $onShow($getSubMenu(this$static.val$item));
}

function MenuBar$3_0(this$0, $anonymous0, $anonymous1, $anonymous2, val$item){
  $clinit_PopupPanel();
  this.this$0 = this$0;
  this.val$item = val$item;
  DecoratedPopupPanel_2.call(this, $anonymous0, $anonymous1, $anonymous2);
  $$init_537(this);
}

defineSeed(678, 609, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$AcceptsOneWidget, Q$HasOneWidget, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$PopupPanel, Q$SimplePanel, Q$UIObject, Q$Widget, Q$Iterable]), MenuBar$3_0);
_.onPreviewNativeEvent = function onPreviewNativeEvent_2(event_0){
  var parentMenuElement, target;
  if (!$isCanceled_0(event_0)) {
    switch ($getTypeInt_0(event_0)) {
      case 4:
        target = $getEventTarget($getNativeEvent_0(event_0));
        parentMenuElement = $getElement($getParentMenu(this.val$item));
        if ($isOrHasChild(parentMenuElement, as(target))) {
          $cancel_3(event_0);
          return;
        }

        $onPreviewNativeEvent(this, event_0);
        $isCanceled_0(event_0) && $selectItem(this.this$0, null);
        return;
    }
  }
  $onPreviewNativeEvent(this, event_0);
}
;
_.this$0 = null;
_.val$item = null;
function $$init_538(){
}

function MenuBar$4_0(this$0, val$item){
  this.this$0 = this$0;
  this.val$item = val$item;
  Object_1.call(this);
  $$init_538();
}

defineSeed(679, 1, {}, MenuBar$4_0);
_.setPosition = function setPosition(offsetWidth, offsetHeight){
  $isRTL_0(getCurrentLocale())?this.this$0.vertical?$setPopupPosition(this.this$0.popup, $getAbsoluteLeft_0(this.this$0) - offsetWidth + 1, $getAbsoluteTop_0(this.val$item)):$setPopupPosition(this.this$0.popup, $getAbsoluteLeft_0(this.val$item) + this.val$item.getOffsetWidth() - offsetWidth, $getAbsoluteTop_0(this.this$0) + this.this$0.getOffsetHeight() - 1):this.this$0.vertical?$setPopupPosition(this.this$0.popup, $getAbsoluteLeft_0(this.this$0) + this.this$0.getOffsetWidth() - 1, $getAbsoluteTop_0(this.val$item)):$setPopupPosition(this.this$0.popup, $getAbsoluteLeft_0(this.val$item), $getAbsoluteTop_0(this.this$0) + this.this$0.getOffsetHeight() - 1);
}
;
_.this$0 = null;
_.val$item = null;
function $clinit_MenuBar_Resources_default_StaticClientBundleGenerator(){
  $clinit_MenuBar_Resources_default_StaticClientBundleGenerator = nullMethod;
  _instance0_6 = new MenuBar_Resources_default_StaticClientBundleGenerator_0;
  bundledImage_None_5 = getModuleBaseURL() + 'DF7764EEC1903CD03C9545B354D8D8E4.cache.png';
  bundledImage_None_rtl_0 = getModuleBaseURL() + '396F806CD63ABD414BFBB9D57429F05B.cache.png';
}

function $$init_539(){
}

function $menuBarSubMenuIconInitializer(){
  menuBarSubMenuIcon = new ImageResourcePrototype_0('menuBarSubMenuIcon', fromTrustedString_1($isRTL_0(getCurrentLocale())?bundledImage_None_rtl_0:bundledImage_None_5), 0, 0, 5, 9, false, false);
}

function MenuBar_Resources_default_StaticClientBundleGenerator_0(){
  $clinit_MenuBar_Resources_default_StaticClientBundleGenerator();
  Object_1.call(this);
  $$init_539();
}

defineSeed(680, 1, {}, MenuBar_Resources_default_StaticClientBundleGenerator_0);
_.menuBarSubMenuIcon = function menuBarSubMenuIcon_0(){
  return get_59();
}
;
var _instance0_6, bundledImage_None_5, bundledImage_None_rtl_0, menuBarSubMenuIcon = null;
function $clinit_MenuBar_Resources_default_StaticClientBundleGenerator$menuBarSubMenuIconInitializer(){
  $clinit_MenuBar_Resources_default_StaticClientBundleGenerator$menuBarSubMenuIconInitializer = nullMethod;
  $menuBarSubMenuIconInitializer(($clinit_MenuBar_Resources_default_StaticClientBundleGenerator() , _instance0_6));
}

function get_59(){
  $clinit_MenuBar_Resources_default_StaticClientBundleGenerator$menuBarSubMenuIconInitializer();
  return $clinit_MenuBar_Resources_default_StaticClientBundleGenerator() , menuBarSubMenuIcon;
}

function $$init_540(this$static){
}

function $getCommand(this$static){
  return this$static.command;
}

function $getParentMenu(this$static){
  return this$static.parentMenu;
}

function $getSubMenu(this$static){
  return this$static.subMenu;
}

function $isEnabled(this$static){
  return this$static.enabled;
}

function $setCommand(this$static, cmd){
  this$static.command = cmd;
}

function $setHTML_3(this$static, html){
  setInnerHTML($getElement(this$static), html);
}

function $setParentMenu(this$static, parentMenu){
  this$static.parentMenu = parentMenu;
}

function $setSelectionStyle_0(this$static, selected){
  selected?$addStyleDependentName(this$static, 'selected'):$removeStyleDependentName(this$static, 'selected');
}

function $setText_7(this$static, text){
  setInnerText_1($getElement(this$static), text);
}

function MenuItem_2(text, asHTML){
  UIObject_0.call(this);
  $$init_540(this);
  $setElement_0(this, createTD());
  $setSelectionStyle_0(this, false);
  asHTML?$setHTML_3(this, text):$setText_7(this, text);
  this.setStyleName('gwt-MenuItem');
  setElementAttribute($getElement(this), 'id', createUniqueId());
  setRole($getElement(this), 'menuitem');
}

defineSeed(682, 243, makeCastMap([Q$HasVisibility, Q$MenuItem, Q$UIObject]));
_.getText = function getText_10(){
  return getInnerText_1($getElement(this));
}
;
_.onEnsureDebugId = function onEnsureDebugId_14(baseID){
  $onEnsureDebugId(this, baseID);
  isNotNull(this.subMenu) && $setMenuItemDebugIds(this.subMenu, baseID);
}
;
_.command = null;
_.enabled = true;
_.parentMenu = null;
_.subMenu = null;
function $setParentMenu_0(this$static, parentMenu){
  this$static , parentMenu;
}

function $clinit_ValueBoxBase(){
  $clinit_ValueBoxBase = nullMethod;
  $clinit_FocusWidget();
  impl_11 = new TextBoxImplIE6_0;
}

function $$init_546(){
}

function $addChangeHandler_0(this$static, handler){
  return $addDomHandler(this$static, handler, getType_9());
}

function $addValueChangeHandler_0(this$static, handler){
  if (!this$static.valueChangeHandlerInitialized) {
    this$static.valueChangeHandlerInitialized = true;
    $addChangeHandler_0(this$static, new ValueBoxBase$1_0(this$static));
  }
  return $addHandler_1(this$static, handler, getType_30());
}

function $getText_1(this$static){
  return getElementProperty($getElement(this$static), 'value');
}

function $getValue_5(this$static){
  var $e0;
  try {
    return $getValueOrThrow(this$static);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$ParseException)) {
      $e0;
      return null;
    }
     else 
      throw $e0;
  }
}

function $getValueOrThrow(this$static){
  var parseResult, text;
  text = $getText_1(this$static);
  parseResult = this$static.parser.parse_0(text);
  if ($equals_3('', text)) {
    return null;
  }
  return parseResult;
}

function $setText_8(this$static, text){
  setElementProperty($getElement(this$static), 'value', jsNotEquals(text, null)?text:'');
  $refreshDirection(this$static.autoDirHandler);
}

function ValueBoxBase_0(elem, renderer, parser){
  $clinit_ValueBoxBase();
  FocusWidget_1.call(this, elem);
  $$init_546();
  this.autoDirHandler = addTo_0(this, isBidiEnabled());
  this , renderer;
  this.parser = parser;
}

defineSeed(691, 306, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.addChangeHandler = function addChangeHandler_1(handler){
  return $addChangeHandler_0(this, handler);
}
;
_.getDirection = function getDirection_0(){
  return getDirectionOnElement($getElement(this));
}
;
_.getText = function getText_11(){
  return $getText_1(this);
}
;
_.getValue = function getValue_1(){
  return $getValue_5(this);
}
;
_.onBrowserEvent = function onBrowserEvent_11(event_0){
  var type;
  type = eventGetType(event_0);
  if ((type & 896) != 0) {
    this , event_0;
    $onBrowserEvent(this, event_0);
    this , null;
  }
   else {
    $onBrowserEvent(this, event_0);
  }
}
;
_.onLoad = function onLoad_6(){
  $onLoad();
  $refreshDirection(this.autoDirHandler);
}
;
_.setDirection = function setDirection_0(direction){
  setDirectionOnElement($getElement(this), direction);
}
;
_.setText = function setText_8(text){
  $setText_8(this, text);
}
;
_.autoDirHandler = null;
_.parser = null;
_.valueChangeHandlerInitialized = false;
var impl_11;
function $clinit_TextBoxBase(){
  $clinit_TextBoxBase = nullMethod;
  $clinit_ValueBoxBase();
  new TextBoxBase$TextAlignConstant_0(($clinit_ValueBoxBase$TextAlignment() , CENTER_2));
  new TextBoxBase$TextAlignConstant_0(($clinit_ValueBoxBase$TextAlignment() , JUSTIFY));
  new TextBoxBase$TextAlignConstant_0(($clinit_ValueBoxBase$TextAlignment() , LEFT_0));
  new TextBoxBase$TextAlignConstant_0(($clinit_ValueBoxBase$TextAlignment() , RIGHT_0));
}

function $$init_547(){
}

function $getValue_6(this$static){
  var raw;
  raw = dynamicCast($getValue_5(this$static), Q$String);
  return jsEquals(raw, null)?'':raw;
}

function TextBoxBase_0(elem){
  ValueBoxBase_0.call(this, elem, instance_3(), instance_2());
  $$init_547();
}

defineSeed(690, 691, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.getValue = function getValue_2(){
  return $getValue_6(this);
}
;
function $$init_548(){
}

function TextBox_0(){
  $clinit_TextBoxBase();
  TextBox_1.call(this, $createTextInputElement(get_1()), 'gwt-TextBox');
}

function TextBox_1(element, styleName){
  TextBoxBase_0.call(this, element);
  $$init_548();
  jsNotEquals(styleName, null) && this.setStyleName(styleName);
}

defineSeed(689, 690, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), TextBox_0);
function $$init_550(){
}

function PopupPanel$1_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_550();
}

defineSeed(692, 1, makeCastMap([Q$ResizeHandler, Q$EventHandler]), PopupPanel$1_0);
_.onResize = function onResize_4(event_0){
  var height, style, width, winHeight, winWidth;
  style = $getStyle(this.this$0.glass);
  winWidth = getClientWidth();
  winHeight = getClientHeight();
  $setDisplay(style, ($clinit_Style$Display() , NONE));
  $setWidth(style, 0, ($clinit_Style$Unit() , PX));
  $setHeight(style, 0, ($clinit_Style$Unit() , PX));
  width = $getScrollWidth_0(get_1());
  height = $getScrollHeight_0(get_1());
  $setWidth(style, max_0(width, winWidth), ($clinit_Style$Unit() , PX));
  $setHeight(style, max_0(height, winHeight), ($clinit_Style$Unit() , PX));
  $setDisplay(style, ($clinit_Style$Display() , BLOCK));
}
;
_.this$0 = null;
function $$init_551(){
}

function PopupPanel$2_0(this$0, val$target){
  this.this$0 = this$0;
  this.val$target = val$target;
  Object_1.call(this);
  $$init_551();
}

defineSeed(693, 1, {}, PopupPanel$2_0);
_.setPosition = function setPosition_0(offsetWidth, offsetHeight){
  $position(this.this$0, this.val$target, offsetWidth, offsetHeight);
}
;
_.this$0 = null;
_.val$target = null;
function $$init_552(){
}

function PopupPanel$3_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_552();
}

defineSeed(694, 1, makeCastMap([Q$EventHandler, Q$Event$NativePreviewHandler]), PopupPanel$3_0);
_.onPreviewNativeEvent = function onPreviewNativeEvent_3(event_0){
  $previewNativeEvent(this.this$0, event_0);
}
;
_.this$0 = null;
function $$init_553(){
}

function PopupPanel$4_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_553();
}

defineSeed(695, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), PopupPanel$4_0);
_.onValueChange = function onValueChange_0(event_0){
  this.this$0.autoHideOnHistoryEvents && this.this$0.hide();
}
;
_.this$0 = null;
function $clinit_PopupPanel$AnimationType(){
  $clinit_PopupPanel$AnimationType = nullMethod;
  CENTER_0 = new PopupPanel$AnimationType_0('CENTER', 0);
  ONE_WAY_CORNER = new PopupPanel$AnimationType_0('ONE_WAY_CORNER', 1);
  ROLL_DOWN = new PopupPanel$AnimationType_0('ROLL_DOWN', 2);
  $VALUES_6 = initValues(_3Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$PopupPanel$AnimationType, [CENTER_0, ONE_WAY_CORNER, ROLL_DOWN]);
}

function $$init_554(){
}

function PopupPanel$AnimationType_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
  $$init_554();
}

function valueOf_7(name_0){
  $clinit_PopupPanel$AnimationType();
  return valueOf(($clinit_PopupPanel$AnimationType$Map() , $MAP_6), name_0);
}

function values_8(){
  $clinit_PopupPanel$AnimationType();
  return $VALUES_6;
}

defineSeed(696, 69, makeCastMap([Q$PopupPanel$AnimationType, Q$Serializable, Q$Comparable, Q$Enum]), PopupPanel$AnimationType_0);
var $VALUES_6, CENTER_0, ONE_WAY_CORNER, ROLL_DOWN;
function $clinit_PopupPanel$AnimationType$Map(){
  $clinit_PopupPanel$AnimationType$Map = nullMethod;
  $MAP_6 = createValueOfMap(($clinit_PopupPanel$AnimationType() , $VALUES_6));
}

var $MAP_6;
function $$init_555(this$static){
}

function $getRectString(top_0, right, bottom, left){
  return 'rect(' + top_0 + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)';
}

function $maybeShowGlass(this$static){
  if (this$static.showing) {
    if (this$static.curPanel.isGlassEnabled) {
      $appendChild($getBody(get_1()), this$static.curPanel.glass);
      ($clinit_PopupPanel() , impl_7).onShow(this$static.curPanel.glass);
      this$static.resizeRegistration = addResizeHandler(this$static.curPanel.glassResizer);
      this$static.curPanel.glassResizer.onResize(null);
      this$static.glassShowing = true;
    }
  }
   else if (this$static.glassShowing) {
    $removeChild($getBody(get_1()), this$static.curPanel.glass);
    ($clinit_PopupPanel() , impl_7).onHide(this$static.curPanel.glass);
    this$static.resizeRegistration.removeHandler();
    this$static.resizeRegistration = null;
    this$static.glassShowing = false;
  }
}

function $onComplete_1(this$static){
  if (!this$static.showing) {
    $maybeShowGlass(this$static);
    this$static.isUnloading || $remove_3(get_60(), this$static.curPanel);
    ($clinit_PopupPanel() , impl_7).onHide($getElement(this$static.curPanel));
  }
  ($clinit_PopupPanel() , impl_7).setClip($getElement(this$static.curPanel), 'rect(auto, auto, auto, auto)');
  setStyleAttribute($getElement(this$static.curPanel), 'overflow', 'visible');
}

function $onInstantaneousRun_0(this$static){
  $maybeShowGlass(this$static);
  if (this$static.showing) {
    setStyleAttribute($getElement(this$static.curPanel), 'position', 'absolute');
    this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
    $add_4(get_60(), this$static.curPanel);
    ($clinit_PopupPanel() , impl_7).onShow($getElement(this$static.curPanel));
  }
   else {
    this$static.isUnloading || $remove_3(get_60(), this$static.curPanel);
    ($clinit_PopupPanel() , impl_7).onHide($getElement(this$static.curPanel));
  }
  setStyleAttribute($getElement(this$static.curPanel), 'overflow', 'visible');
}

function $setState(this$static, showing, isUnloading){
  var animate;
  this$static.isUnloading = isUnloading;
  $cancel(this$static);
  if (isNotNull(this$static.showTimer)) {
    $cancel_0(this$static.showTimer);
    this$static.showTimer = null;
    $onComplete_1(this$static);
  }
  this$static.curPanel.showing = showing;
  $updateHandlers(this$static.curPanel);
  animate = !isUnloading && this$static.curPanel.isAnimationEnabled;
  jsNotEquals(this$static.curPanel.animType, ($clinit_PopupPanel$AnimationType() , CENTER_0)) && !showing && (animate = false);
  this$static.showing = showing;
  if (animate) {
    if (showing) {
      $maybeShowGlass(this$static);
      setStyleAttribute($getElement(this$static.curPanel), 'position', 'absolute');
      this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
      ($clinit_PopupPanel() , impl_7).setClip($getElement(this$static.curPanel), $getRectString(0, 0, 0, 0));
      $add_4(get_60(), this$static.curPanel);
      ($clinit_PopupPanel() , impl_7).onShow($getElement(this$static.curPanel));
      this$static.showTimer = new PopupPanel$ResizeAnimation$1_0(this$static);
      $schedule(this$static.showTimer, 1);
    }
     else {
      $run(this$static, 200);
    }
  }
   else {
    $onInstantaneousRun_0(this$static);
  }
}

function PopupPanel$ResizeAnimation_0(panel){
  Animation_0.call(this);
  $$init_555(this);
  this.curPanel = panel;
}

defineSeed(698, 3, {}, PopupPanel$ResizeAnimation_0);
_.onComplete = function onComplete_3(){
  $onComplete_1(this);
}
;
_.onStart = function onStart_3(){
  this.offsetHeight_0 = $getOffsetHeight_1(this.curPanel);
  this.offsetWidth_0 = $getOffsetWidth_1(this.curPanel);
  setStyleAttribute($getElement(this.curPanel), 'overflow', 'hidden');
  $onStart(this);
}
;
_.onUpdate = function onUpdate_2(progress){
  var bottom, height, left, right, top_0, width;
  this.showing || (progress = 1 - progress);
  top_0 = 0;
  left = 0;
  right = 0;
  bottom = 0;
  height = round_int(progress * this.offsetHeight_0);
  width = round_int(progress * this.offsetWidth_0);
  switch ($ordinal(this.curPanel.animType)) {
    case 2:
      right = this.offsetWidth_0;
      bottom = height;
      break;
    case 0:
      top_0 = this.offsetHeight_0 - height >> 1;
      left = this.offsetWidth_0 - width >> 1;
      right = left + width;
      bottom = top_0 + height;
      break;
    case 1:
      $isRTL_0(getCurrentLocale()) && (left = this.offsetWidth_0 - width);
      right = left + width;
      bottom = top_0 + height;
  }
  ($clinit_PopupPanel() , impl_7).setClip($getElement(this.curPanel), $getRectString(top_0, right, bottom, left));
}
;
_.curPanel = null;
_.glassShowing = false;
_.isUnloading = false;
_.offsetHeight_0 = 0;
_.offsetWidth_0 = -1;
_.resizeRegistration = null;
_.showTimer = null;
_.showing = false;
function $$init_556(){
}

function PopupPanel$ResizeAnimation$1_0(this$1){
  $clinit_Timer();
  this.this$1 = this$1;
  Timer_0.call(this);
  $$init_556();
}

defineSeed(699, 10, makeCastMap([Q$Timer]), PopupPanel$ResizeAnimation$1_0);
_.run = function run_5(){
  this.this$1.showTimer = null;
  $run(this.this$1, 200);
}
;
_.this$1 = null;
function $$init_559(this$static){
  this$static.setStyleName('gwt-PushButton');
}

function PushButton_1(upImage){
  $clinit_FocusWidget();
  CustomButton_1.call(this, upImage);
  $$init_559(this);
}

defineSeed(703, 304, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$PushButton, Q$UIObject, Q$Widget]), PushButton_1);
_.onClick_0 = function onClick_8(){
  this.setDown(false);
  $onClick_0(this);
}
;
_.onClickCancel = function onClickCancel_0(){
  this.setDown(false);
}
;
_.onClickStart = function onClickStart_0(){
  this.setDown(true);
}
;
function $clinit_RadioButton(){
  $clinit_RadioButton = nullMethod;
  $clinit_CheckBox();
  $clinit_DirectionalTextHelper() , DEFAULT_DIRECTION_ESTIMATOR;
}

function $$init_560(){
}

function $sinkEvents_2(this$static, eventBitsToAdd){
  if ($isOrWasAttached(this$static)) {
    sinkEvents_1(this$static.inputElem, eventBitsToAdd | getEventsSunk_0(this$static.inputElem));
    sinkEvents_1(this$static.labelElem, eventBitsToAdd | getEventsSunk_0(this$static.labelElem));
  }
   else {
    $sinkEvents_1(this$static, eventBitsToAdd);
  }
}

function RadioButton_0(name_0){
  CheckBox_1.call(this, createInputRadio(name_0));
  $$init_560();
  this.setStyleName('gwt-RadioButton');
  $sinkEvents_2(this, 1);
  $sinkEvents_2(this, 8);
  $sinkEvents_2(this, 4096);
  $sinkEvents_2(this, 128);
}

function RadioButton_1(name_0, label){
  $clinit_RadioButton();
  RadioButton_0.call(this, name_0);
  $setText_1(this, label);
}

defineSeed(704, 603, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$HasWordWrap, Q$IsWidget, Q$UIObject, Q$Widget]), RadioButton_1);
_.onBrowserEvent = function onBrowserEvent_12(event_0){
  var target;
  switch (eventGetType(event_0)) {
    case 8:
    case 4096:
    case 128:
      this.oldValue = $getValue_3(this);
      break;
    case 1:
      target = $getEventTarget(event_0);
      if (is_0(target) && $isOrHasChild(this.labelElem, as(target))) {
        this.oldValue = $getValue_3(this);
        return;
      }

      $onBrowserEvent(this, event_0);
      fireIfNotEqual(this, this.oldValue, $getValue_3(this));
      return;
  }
  $onBrowserEvent(this, event_0);
}
;
_.sinkEvents = function sinkEvents_4(eventBitsToAdd){
  $sinkEvents_2(this, eventBitsToAdd);
}
;
_.oldValue = null;
defineSeed(705, 306, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
defineSeed(711, 708, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$RootPanel, Q$UIObject, Q$Widget, Q$Iterable]));
_.setWidgetPositionImpl = function setWidgetPositionImpl_0(w, left, top_0){
  left -= $getBodyOffsetLeft(get_1());
  top_0 -= $getBodyOffsetTop(get_1());
  $setWidgetPositionImpl(w, left, top_0);
}
;
function $$init_568(){
}

function $getMaximumHorizontalScrollPosition(this$static, scrollable){
  return this$static.isRtl(scrollable)?0:$getScrollWidth(scrollable) - $getClientWidth(scrollable);
}

function $getMinimumHorizontalScrollPosition(this$static, scrollable){
  return this$static.isRtl(scrollable)?$getClientWidth(scrollable) - $getScrollWidth(scrollable):0;
}

function ScrollImpl_0(){
  Object_1.call(this);
  $$init_568();
}

function get_62(){
  isNull(impl_12) && (impl_12 = new ScrollImpl$ScrollImplTrident_0);
  return impl_12;
}

defineSeed(712, 1, {});
_.initialize = function initialize(scrollable, container){
}
;
_.isRtl = function isRtl(scrollable){
  var computedStyle = $doc.defaultView.getComputedStyle(scrollable, null);
  return computedStyle.getPropertyValue('direction') == 'rtl';
}
;
var impl_12 = null;
function $$init_569(){
}

function ScrollImpl$ScrollImplTrident_0(){
  ScrollImpl_0.call(this);
  $$init_569();
}

function triggerScrollEvent(elem){
  $dispatchEvent(elem, $createScrollEvent(get_1()));
}

defineSeed(713, 712, {}, ScrollImpl$ScrollImplTrident_0);
_.initialize = function initialize_0(scrollable, container){
  var scrollableElem = scrollable;
  scrollableElem.__lastScrollTop = scrollableElem.__lastScrollLeft = 0;
  var scrollHandler = $entry(function(){
    scrollableElem.__lastScrollTop = scrollableElem.scrollTop;
    scrollableElem.__lastScrollLeft = scrollableElem.scrollLeft;
  }
  );
  scrollable.attachEvent('onscroll', scrollHandler);
  var resizeHandler = $entry(function(){
    setTimeout($entry(function(){
      if (scrollableElem.scrollTop != scrollableElem.__lastScrollTop || scrollableElem.scrollLeft != scrollableElem.__lastScrollLeft) {
        scrollHandler();
        triggerScrollEvent(scrollableElem);
      }
    }
    ), 1);
  }
  );
  scrollable.attachEvent('onresize', resizeHandler);
  container.attachEvent('onresize', resizeHandler);
}
;
_.isRtl = function isRtl_0(scrollable){
  return scrollable.currentStyle.direction == 'rtl';
}
;
function $$init_570(){
}

function $getScrollPosition(this$static){
  return $getScrollTop($getScrollableElement(this$static));
}

function $getScrollableElement(this$static){
  return this$static.scrollableElem;
}

function $initialize(this$static){
  $setAlwaysShowScrollBars(this$static, false);
  $setPosition($getStyle(this$static.scrollableElem), ($clinit_Style$Position() , RELATIVE));
  $setPosition($getStyle(this$static.containerElem), ($clinit_Style$Position() , RELATIVE));
  $setProperty_0($getStyle(this$static.scrollableElem), 'zoom', '1');
  $setProperty_0($getStyle(this$static.containerElem), 'zoom', '1');
  $setTouchScrollingDisabled(this$static, false);
  get_62().initialize(this$static.scrollableElem, this$static.containerElem);
}

function $isTouchScrollingDisabled(this$static){
  return isNull(this$static.touchScroller);
}

function $setAlwaysShowScrollBars(this$static, alwaysShow){
  $setOverflow($getStyle($getScrollableElement(this$static)), alwaysShow?($clinit_Style$Overflow() , SCROLL):($clinit_Style$Overflow() , AUTO));
}

function $setScrollPosition(this$static, position){
  $setScrollTop($getScrollableElement(this$static), position);
}

function $setSize_1(this$static, width, height){
  $setSize_0(this$static, width, height);
}

function $setTouchScrollingDisabled(this$static, isDisabled){
  if (isDisabled == $isTouchScrollingDisabled(this$static)) {
    return isDisabled;
  }
  if (isDisabled) {
    $setTargetWidget(this$static.touchScroller, null);
    this$static.touchScroller = null;
  }
   else {
    this$static.touchScroller = createIfSupported_0(this$static);
  }
  return $isTouchScrollingDisabled(this$static);
}

function ScrollPanel_0(){
  SimplePanel_0.call(this);
  $$init_570();
  this.scrollableElem = $getElement(this);
  this.containerElem = $cast($createDivElement(get_1()));
  $appendChild(this.scrollableElem, this.containerElem);
  $initialize(this);
}

function ScrollPanel_1(child){
  ScrollPanel_0.call(this);
  this.setWidget(child);
}

defineSeed(714, 258, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$AcceptsOneWidget, Q$HasOneWidget, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$SimplePanel, Q$UIObject, Q$Widget, Q$Iterable]), ScrollPanel_1);
_.getContainerElement = function getContainerElement_2(){
  return this.containerElem;
}
;
_.getHorizontalScrollPosition = function getHorizontalScrollPosition(){
  return $getScrollLeft($getScrollableElement(this));
}
;
_.getMaximumHorizontalScrollPosition = function getMaximumHorizontalScrollPosition(){
  return $getMaximumHorizontalScrollPosition(get_62(), $getScrollableElement(this));
}
;
_.getMaximumVerticalScrollPosition = function getMaximumVerticalScrollPosition(){
  return $getScrollHeight($getScrollableElement(this)) - $getClientHeight($getScrollableElement(this));
}
;
_.getMinimumHorizontalScrollPosition = function getMinimumHorizontalScrollPosition(){
  return $getMinimumHorizontalScrollPosition(get_62(), $getScrollableElement(this));
}
;
_.getMinimumVerticalScrollPosition = function getMinimumVerticalScrollPosition(){
  return 0;
}
;
_.getVerticalScrollPosition = function getVerticalScrollPosition(){
  return $getScrollPosition(this);
}
;
_.onAttach = function onAttach_6(){
  $onAttach(this);
  setEventListener_0($getScrollableElement(this), this);
}
;
_.onDetach = function onDetach_6(){
  setEventListener_0($getScrollableElement(this), null);
  $onDetach(this);
}
;
_.setHeight = function setHeight_2(height){
  $setHeight_0(this, height);
}
;
_.setHorizontalScrollPosition = function setHorizontalScrollPosition(position){
  $setScrollLeft($getScrollableElement(this), position);
}
;
_.setSize = function setSize_0(width, height){
  $setSize_1(this, width, height);
}
;
_.setVerticalScrollPosition = function setVerticalScrollPosition(position){
  $setScrollPosition(this, position);
}
;
_.setWidth = function setWidth_2(width){
  $setWidth_0(this, width);
}
;
_.containerElem = null;
_.scrollableElem = null;
_.touchScroller = null;
defineSeed(716, 241, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]));
_.box = null;
_.currentText = null;
_.display_0 = null;
_.limit = 20;
_.oracle = null;
defineSeed(727, 241, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWordWrap, Q$IsRenderable, Q$IsWidget, Q$TabBar$ClickDelegatePanel, Q$UIObject, Q$Widget]));
_.addKeyUpHandler = function addKeyUpHandler_1(handler){
  return $addDomHandler(this, handler, getType_14());
}
;
function $$init_587(){
}

function TextBoxBase$TextAlignConstant_0(value){
  Object_1.call(this);
  $$init_587();
  this , value;
}

defineSeed(731, 1, {}, TextBoxBase$TextAlignConstant_0);
defineSeed(732, 242, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]));
_.addCloseHandler = function addCloseHandler_4(handler){
  return $addHandler_1(this, handler, getType_26());
}
;
_.addKeyUpHandler = function addKeyUpHandler_2(handler){
  return $addDomHandler(this, handler, getType_14());
}
;
function $getText_3(this$static){
  return getInnerText_1(this$static.contentElem);
}

defineSeed(734, 243, makeCastMap([Q$HasVisibility, Q$TreeItem, Q$UIObject]));
_.getText = function getText_14(){
  return $getText_3(this);
}
;
function $$init_597(){
}

function ValueBoxBase$1_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_597();
}

defineSeed(744, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ValueBoxBase$1_0);
_.onChange = function onChange_4(event_0){
  fire_9(this.this$0, this.this$0.getValue());
}
;
_.this$0 = null;
function $clinit_ValueBoxBase$TextAlignment(){
  $clinit_ValueBoxBase$TextAlignment = nullMethod;
  CENTER_2 = new ValueBoxBase$TextAlignment$1_0('CENTER', 0);
  JUSTIFY = new ValueBoxBase$TextAlignment$2_0('JUSTIFY', 1);
  LEFT_0 = new ValueBoxBase$TextAlignment$3_0('LEFT', 2);
  RIGHT_0 = new ValueBoxBase$TextAlignment$4_0('RIGHT', 3);
  $VALUES_7 = initValues(_3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$ValueBoxBase$TextAlignment, [CENTER_2, JUSTIFY, LEFT_0, RIGHT_0]);
}

function $$init_598(){
}

function ValueBoxBase$TextAlignment_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
  $$init_598();
}

function valueOf_8(name_0){
  $clinit_ValueBoxBase$TextAlignment();
  return valueOf(($clinit_ValueBoxBase$TextAlignment$Map() , $MAP_7), name_0);
}

function values_9(){
  $clinit_ValueBoxBase$TextAlignment();
  return $VALUES_7;
}

defineSeed(745, 69, makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_7, CENTER_2, JUSTIFY, LEFT_0, RIGHT_0;
function $$init_599(){
}

function ValueBoxBase$TextAlignment$1_0(enum$name, enum$ordinal){
  ValueBoxBase$TextAlignment_0.call(this, enum$name, enum$ordinal);
  $$init_599();
}

defineSeed(746, 745, makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]), ValueBoxBase$TextAlignment$1_0);
function $$init_600(){
}

function ValueBoxBase$TextAlignment$2_0(enum$name, enum$ordinal){
  ValueBoxBase$TextAlignment_0.call(this, enum$name, enum$ordinal);
  $$init_600();
}

defineSeed(747, 745, makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]), ValueBoxBase$TextAlignment$2_0);
function $$init_601(){
}

function ValueBoxBase$TextAlignment$3_0(enum$name, enum$ordinal){
  ValueBoxBase$TextAlignment_0.call(this, enum$name, enum$ordinal);
  $$init_601();
}

defineSeed(748, 745, makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]), ValueBoxBase$TextAlignment$3_0);
function $$init_602(){
}

function ValueBoxBase$TextAlignment$4_0(enum$name, enum$ordinal){
  ValueBoxBase$TextAlignment_0.call(this, enum$name, enum$ordinal);
  $$init_602();
}

defineSeed(749, 745, makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]), ValueBoxBase$TextAlignment$4_0);
function $clinit_ValueBoxBase$TextAlignment$Map(){
  $clinit_ValueBoxBase$TextAlignment$Map = nullMethod;
  $MAP_7 = createValueOfMap(($clinit_ValueBoxBase$TextAlignment() , $VALUES_7));
}

var $MAP_7;
function $$init_621(){
}

function $getStyleElement(popup){
  return $getParentElement(popup);
}

function $setClip(popup, rect){
  $setProperty_0($getStyle(popup), 'clip', rect);
}

function PopupImpl_0(){
  Object_1.call(this);
  $$init_621();
}

defineSeed(771, 1, {});
_.createElement_2 = function createElement_4(){
  return $createDivElement(get_1());
}
;
_.getContainerElement_0 = function getContainerElement_3(popup){
  return popup;
}
;
_.getStyleElement_0 = function getStyleElement_1(popup){
  return $getStyleElement(popup);
}
;
_.onHide = function onHide(popup){
}
;
_.onShow = function onShow(popup){
}
;
_.setClip = function setClip(popup, rect){
  $setClip(popup, rect);
}
;
_.setVisible_0 = function setVisible_3(popup, visible){
}
;
function $$init_622(){
}

function PopupImplIE6_0(){
  PopupImpl_0.call(this);
  $$init_622();
}

defineSeed(772, 771, {}, PopupImplIE6_0);
_.onHide = function onHide_0(popup){
  var frame = popup.__frame;
  if (frame) {
    frame.parentElement.removeChild(frame);
    frame.__popup = null;
    popup.__frame = null;
    popup.onresize = null;
    popup.onmove = null;
  }
}
;
_.onShow = function onShow_0(popup){
  var frame = $doc.createElement('iframe');
  frame.src = "javascript:''";
  frame.scrolling = 'no';
  frame.frameBorder = 0;
  popup.__frame = frame;
  frame.__popup = popup;
  var style = frame.style;
  style.position = 'absolute';
  style.filter = 'alpha(opacity=0)';
  style.visibility = popup.currentStyle.visibility;
  style.border = 0;
  style.padding = 0;
  style.margin = 0;
  style.left = popup.offsetLeft;
  style.top = popup.offsetTop;
  style.width = popup.offsetWidth;
  style.height = popup.offsetHeight;
  style.zIndex = popup.currentStyle.zIndex;
  popup.onmove = function(){
    frame.style.left = popup.offsetLeft;
    frame.style.top = popup.offsetTop;
  }
  ;
  popup.onresize = function(){
    frame.style.width = popup.offsetWidth;
    frame.style.height = popup.offsetHeight;
  }
  ;
  style.setExpression('zIndex', 'this.__popup.currentStyle.zIndex');
  popup.parentElement.insertBefore(frame, popup);
}
;
_.setVisible_0 = function setVisible_4(popup, visible){
  if (popup.__frame) {
    popup.__frame.style.visibility = visible?'visible':'hidden';
  }
}
;
defineSeed(773, 1, {});
_.elem = null;
_.owner = null;
defineSeed(775, 773, makeCastMap([Q$RichTextArea$Formatter]));
_.initializing = false;
_.isPendingFocus = false;
_.isReady = false;
defineSeed(774, 775, makeCastMap([Q$RichTextArea$Formatter]));
function $$init_626(){
}

function TextBoxImpl_0(){
  Object_1.call(this);
  $$init_626();
}

defineSeed(776, 1, {});
function $$init_627(){
}

function TextBoxImplIE6_0(){
  TextBoxImpl_0.call(this);
  $$init_627();
}

defineSeed(777, 776, {}, TextBoxImplIE6_0);
defineSeed(801, 1, {});
_.removeHandler = function removeHandler_0(){
  this.this$0.doRemove(this.val$type, this.val$source, this.val$handler);
}
;
function $$init_651(){
}

function SimpleEventBus$3_0(this$0, val$type, val$source, val$handler){
  this.this$0 = this$0;
  this.val$type = val$type;
  this.val$source = val$source;
  this.val$handler = val$handler;
  Object_1.call(this);
  $$init_651();
}

defineSeed(803, 1, makeCastMap([Q$SimpleEventBus$Command]), SimpleEventBus$3_0);
_.execute_1 = function execute_22(){
  $doRemoveNow(this.this$0, this.val$type, this.val$source, this.val$handler);
}
;
_.this$0 = null;
_.val$handler = null;
_.val$source = null;
_.val$type = null;
function abs(x){
  return x <= 0?0 - x:x;
}

function abs_0(x){
  return x < 0?-x:x;
}

function max(x, y){
  return x > y?x:y;
}

function min_0(x, y){
  return x < y?x:y;
}

function pow(x, exp){
  return Math.pow(x, exp);
}

function _String(value){
  $clinit_String();
  return valueOf_24(value);
}

function valueOf_24(x){
  $clinit_String();
  return String.fromCharCode.apply(null, x);
}

function $append_1(this$static, x){
  this$static.impl.appendNonNull(this$static.data_0, valueOf_17(x));
  return this$static;
}

function $append_2(this$static, x){
  this$static.impl.append(this$static.data_0, x);
  return this$static;
}

function $append_4(this$static, x){
  this$static.impl.appendNonNull(this$static.data_0, valueOf_24(x));
  return this$static;
}

function $delete(this$static, start, end){
  return $replace_2(this$static, start, end, '');
}

function $length_2(this$static){
  return this$static.impl.length_0(this$static.data_0);
}

function $replace_2(this$static, start, end, toInsert){
  this$static.impl.replace_0(this$static.data_0, start, end, toInsert);
  return this$static;
}

function $setLength(this$static, newLength){
  var oldLength;
  oldLength = $length_2(this$static);
  newLength < oldLength?$delete(this$static, newLength, oldLength):newLength > oldLength && $append_4(this$static, initDim(_3C_classLit, makeCastMap([Q$char_$1, Q$Serializable]), -1, newLength - oldLength, 1));
}

function StringBuffer_1(){
  Object_1.call(this);
  $$init_677(this);
}

defineSeed(837, 1, makeCastMap([Q$CharSequence]), StringBuffer_1);
defineSeed(866, 1, makeCastMap([Q$Map]));
_.isEmpty = function isEmpty_4(){
  return this.map.isEmpty();
}
;
function $clinit_Date$StringData(){
  $clinit_Date$StringData = nullMethod;
  DAYS = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function $$init_712(){
}

function MissingResourceException_0(s, className, key){
  RuntimeException_1.call(this, s);
  $$init_712();
  this , key;
  this , className;
}

defineSeed(878, 15, makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable, Q$MissingResourceException]), MissingResourceException_0);
function $unwrapString(ws){
  var $14$;
  isNotNull(ws)?($14$ = $self_0(ws)):($14$ = null);
  return $14$;
}

function $isDefined(this$static){
  return !this$static.isEmpty();
}

defineSeed(893, 1, makeCastMap([Q$Serializable, Q$Equals, Q$ScalaObject, Q$Serializable_0]));
_.productIterator = function productIterator(){
  return productIterator_0(this);
}
;
_.productPrefix = function productPrefix(){
  return productPrefix_1();
}
;
defineSeed(892, 893, makeCastMap([Q$Serializable, Q$Equals, Q$None$, Q$ScalaObject, Q$Serializable_0]));
_.productArity = function productArity(){
  return 0;
}
;
_.productElement = function productElement(x$1){
  x$1;
  throw new IndexOutOfBoundsException_1(boxToInteger(x$1).toString$());
}
;
_.productPrefix = function productPrefix_0(){
  return 'None';
}
;
function $any2ArrowAssoc(x){
  return new Predef$ArrowAssoc_0(x);
}

function $any2stringadd(x){
  return new StringAdd_0(x);
}

function $$init_728(){
}

function $$minus$greater(this$static, y){
  return new Tuple2_0($x(this$static), y);
}

function $x(this$static){
  return this$static.x$u0020;
}

function Predef$ArrowAssoc_0(x){
  $$init_728();
  this.x$u0020 = x;
  Object_1.call(this);
}

defineSeed(901, 1, makeCastMap([Q$ScalaObject]), Predef$ArrowAssoc_0);
_.x$u0020 = null;
function $$init_729(){
}

function $c(this$static){
  return this$static.c$u0020;
}

function $c_$eq(this$static, x$1){
  this$static.c$u0020 = x$1;
}

function $cmax(this$static){
  return this$static.cmax$u0020;
}

function Product$$anon$1_0($outer){
  $$init_729();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
  $init$_38();
  $init$_66();
  $init$_51();
  this.c$u0020 = 0;
  this.cmax$u0020 = $outer.productArity();
}

defineSeed(902, 1, makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]), Product$$anon$1_0);
_.$div$colon = function $div$colon(z, op){
  return $div$colon_22(this, z, op);
}
;
_.addString = function addString(b, start, sep, end){
  return addString_23(this, b, start, sep, end);
}
;
_.copyToArray = function copyToArray(xs, start){
  copyToArray_48(this, xs, start);
}
;
_.copyToArray_0 = function copyToArray_0(xs, start, len){
  copyToArray_21(this, xs, start, len);
}
;
_.copyToBuffer = function copyToBuffer(dest){
  copyToBuffer_22(this, dest);
}
;
_.drop = function drop(n){
  return drop_12(this, n);
}
;
_.foldLeft = function foldLeft(z, op){
  return foldLeft_24(this, z, op);
}
;
_.forall = function forall(p){
  return forall_11(this, p);
}
;
_.foreach = function foreach(f){
  foreach_13(this, f);
}
;
_.hasNext = function hasNext_13(){
  return $c(this) < $cmax(this);
}
;
_.isEmpty = function isEmpty_7(){
  return isEmpty_20(this);
}
;
_.isTraversableAgain = function isTraversableAgain(){
  return isTraversableAgain_10();
}
;
_.map_0 = function map_0(f){
  return map_10(this, f);
}
;
_.mkString = function mkString(sep){
  return mkString_45(this, sep);
}
;
_.mkString_0 = function mkString_0(start, sep, end){
  return mkString_46(this, start, sep, end);
}
;
_.next_0 = function next_14(){
  var result;
  result = this.$outer$u0020.productElement($c(this));
  $c_$eq(this, $c(this) + 1);
  return result;
}
;
_.nonEmpty = function nonEmpty(){
  return nonEmpty_22(this);
}
;
_.seq = function seq(){
  return seq_20(this);
}
;
_.seq_0 = function seq_0(){
  return this.seq();
}
;
_.size_1 = function size_18(){
  return size_43(this);
}
;
_.slice_0 = function slice_0(from, until){
  return slice_11(this, from, until);
}
;
_.take = function take(n){
  return take_12(this, n);
}
;
_.toArray_1 = function toArray_9(evidence$1){
  return toArray_32(this, evidence$1);
}
;
_.toBuffer = function toBuffer(){
  return toBuffer_25(this);
}
;
_.toList = function toList(){
  return toList_22(this);
}
;
_.toString$ = function toString_53(){
  return toString_67(this);
}
;
_.$outer$u0020 = null;
_.c$u0020 = 0;
_.cmax$u0020 = 0;
function productIterator_0($this){
  return new Product$$anon$1_0($this);
}

function productPrefix_1(){
  return '';
}

function $init$_13(){
}

function productArity_0(){
  return 2;
}

function productElement_0($this, n){
  var $1$, $2$, temp1;
  temp1 = n;
  $1$ = temp1;
  switch ($1$) {
    case 1:
      $2$ = $this._2();
      break;
    case 0:
      $2$ = $this._1();
      break;
    default:throw new IndexOutOfBoundsException_1(boxToInteger(n).toString$());
  }
  return $2$;
}

function $$init_730(){
}

function $gd1$1(this$static, x$1){
  return equals_113(x$1, $x_0(this$static));
}

function $x_0(this$static){
  return this$static.x$u0020;
}

function Some_0(x){
  $$init_730();
  this.x$u0020 = x;
  Option_1.call(this);
}

defineSeed(906, 893, makeCastMap([Q$Serializable, Q$Equals, Q$ScalaObject, Q$Serializable_0, Q$Some]), Some_0);
_.canEqual = function canEqual_0(x$1){
  return instanceOf(x$1, Q$Some);
}
;
_.equals$ = function equals_27(x$1){
  var $14$, $15$, $17$, temp1, temp2, temp3, x$1;
  temp1 = x$1;
  if (instanceOf(temp1, Q$Some)) {
    temp2 = dynamicCast(temp1, Q$Some);
    temp3 = $x_0(temp2);
    x$1 = temp3;
    if ($gd1$1(this, x$1)) {
      undefined;
      body$percent01: while (true) {
        $17$ = dynamicCast(x$1, Q$Some).canEqual(this);
        break;
      }
      $15$ = $17$;
    }
     else {
      $15$ = false;
    }
    $14$ = $15$;
  }
   else {
    $14$ = false;
  }
  return this === x$1 || $14$;
}
;
_.get_1 = function get_74(){
  return $x_0(this);
}
;
_.hashCode$ = function hashCode_36(){
  return $_hashCode(($clinit_ScalaRunTime$() , MODULE$_64 , this));
}
;
_.isEmpty = function isEmpty_8(){
  return false;
}
;
_.productArity = function productArity_1(){
  return 1;
}
;
_.productElement = function productElement_1(x$1){
  var $18$, temp4;
  temp4 = x$1;
  if (temp4 == 0) {
    $18$ = $x_0(this);
  }
   else {
    throw new IndexOutOfBoundsException_1(boxToInteger(x$1).toString$());
  }
  return $18$;
}
;
_.productPrefix = function productPrefix_2(){
  return 'Some';
}
;
_.toString$ = function toString_55(){
  return $_toString(($clinit_ScalaRunTime$() , MODULE$_64 , this));
}
;
_.x$u0020 = null;
function $$init_731(){
}

function $_1(this$static){
  return this$static._1$u0020;
}

function $_2$mcI$sp(this$static){
  return unboxToInt($_2(this$static));
}

function $_2(this$static){
  return this$static._2$u0020;
}

function $gd1$1_0(this$static, x$1, x$2){
  return equals_113(x$1, $_1(this$static)) && equals_113(x$2, $_2(this$static));
}

function Tuple2_0(_1, _2){
  $$init_731();
  this._1$u0020 = _1;
  this._2$u0020 = _2;
  Object_1.call(this);
  $init$_12();
  $init$_13();
}

defineSeed(907, 1, makeCastMap([Q$Serializable, Q$Equals, Q$ScalaObject, Q$Serializable_0, Q$Tuple2]), Tuple2_0);
_._1 = function _1_0(){
  return $_1(this);
}
;
_._2 = function _2_0(){
  return $_2(this);
}
;
_.canEqual = function canEqual_1(x$1){
  return instanceOf(x$1, Q$Tuple2);
}
;
_.equals$ = function equals_28(x$1){
  var $1$, $2$, $5$, _1$1, _2$1, temp1, temp2, temp3, temp4;
  temp1 = x$1;
  if (instanceOf(temp1, Q$Tuple2)) {
    temp2 = dynamicCast(temp1, Q$Tuple2);
    temp3 = $_1(temp2);
    temp4 = $_2(temp2);
    _1$1 = temp3;
    _2$1 = temp4;
    if ($gd1$1_0(this, _1$1, _2$1)) {
      undefined;
      undefined;
      body$percent01: while (true) {
        $5$ = dynamicCast(x$1, Q$Tuple2).canEqual(this);
        break;
      }
      $2$ = $5$;
    }
     else {
      $2$ = false;
    }
    $1$ = $2$;
  }
   else {
    $1$ = false;
  }
  return this === x$1 || $1$;
}
;
_.hashCode$ = function hashCode_37(){
  return $_hashCode(($clinit_ScalaRunTime$() , MODULE$_64 , this));
}
;
_.productArity = function productArity_2(){
  return productArity_0();
}
;
_.productElement = function productElement_2(n){
  return productElement_0(this, n);
}
;
_.productIterator = function productIterator_1(){
  return productIterator_0(this);
}
;
_.productPrefix = function productPrefix_3(){
  return 'Tuple2';
}
;
_.toString$ = function toString_56(){
  return '(' + $_1(this) + ',' + $_2(this) + ')';
}
;
_._1$u0020 = null;
_._2$u0020 = null;
function $$init_734(){
}

function $apply_76(this$static, x0$1){
  var $2$, k, temp1, temp5, temp6;
  temp5 = x0$1;
  if (isNotNull(temp5)) {
    temp6 = $_1(temp5);
    k = temp6;
    temp1 = this$static.that$1.get_2(k);
    $2$ = instanceOf(temp1, Q$Some) && equals_113($_2(temp5), $x_0(dynamicCast(temp1, Q$Some)));
  }
   else {
    throw new MatchError_0(temp5);
  }
  return $2$;
}

function GenMapLike$$anonfun$liftedTree1$1$1_0(that$1){
  $$init_734();
  this.that$1 = that$1;
  AbstractFunction1_0.call(this);
}

defineSeed(919, 268, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), GenMapLike$$anonfun$liftedTree1$1$1_0);
_.apply_0 = function apply_95(v1){
  return boxToBoolean($apply_76(this, dynamicCast(v1, Q$Tuple2)));
}
;
_.that$1 = null;
function $init$_24(){
}

function equals_29($this, that){
  var $1$, temp8, temp9, that$1;
  temp8 = that;
  if (instanceOf(temp8, Q$GenMap)) {
    temp9 = dynamicCast(temp8, Q$GenMap);
    that$1 = temp9;
    $1$ = jsEquals($this, that$1) || that$1.canEqual($this) && $this.size_1() == that$1.size_1() && liftedTree1$1($this, that$1);
  }
   else {
    $1$ = false;
  }
  return $1$;
}

function hashCode_38($this){
  return $symmetricHash(($clinit_MurmurHash$() , MODULE$_66), $this.seq_2(), $hashSeed(($clinit_Map$() , MODULE$_15)));
}

function liftedTree1$1($this, that$1){
  var $e0, exceptionResult1;
  try {
    exceptionResult1 = $this.forall(new GenMapLike$$anonfun$liftedTree1$1$1_0(that$1));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$ClassCastException)) {
      $e0;
      exceptionResult1 = false;
    }
     else 
      throw $e0;
  }
  return exceptionResult1;
}

defineSeed(943, 1, makeCastMap([Q$Serializable, Q$ScalaObject, Q$Serializable_0, Q$GenTraversableOnce, Q$TraversableOnce]));
_.map_0 = function map_1(f){
  return map_10(this, f);
}
;
function thisCollection($this){
  return dynamicCast($this, Q$IndexedSeq);
}

function zip_2($this, that, bf){
  var $6$, b, i, len, temp1, temp2, that;
  temp1 = that;
  if (instanceOf(temp1, Q$IndexedSeq)) {
    temp2 = dynamicCast(temp1, Q$IndexedSeq);
    that = temp2;
    b = bf.apply_9($this.repr());
    i = 0;
    len = $min_0($intWrapper(($clinit_Predef$() , MODULE$_11 , $this.length_1())), that.length_1());
    b.sizeHint(len);
    while$2: while (true) {
      if (i < len) {
        b.$plus$eq_0(new Tuple2_0($this.apply_5(i), that.apply_5(i)));
        i = i + 1;
        continue while$2;
      }
      break;
    }
    $6$ = b.result();
  }
   else {
    $6$ = $this.scala$collection$IndexedSeqOptimized$$super$zip(that, bf);
  }
  return $6$;
}

function zipWithIndex($this, bf){
  var b, i, len;
  b = bf.apply_9($this.repr());
  len = $this.length_1();
  b.sizeHint(len);
  i = 0;
  while$3: while (true) {
    if (i < len) {
      b.$plus$eq_0(new Tuple2_0($this.apply_5(i), boxToInteger(i)));
      i = i + 1;
      continue while$3;
    }
    break;
  }
  return b.result();
}

function zip_3($this, that, bf){
  var b, these, those;
  b = bf.apply_9($this.repr());
  these = $this.iterator_1();
  those = that.iterator_1();
  while$7: while (true) {
    if (these.hasNext() && those.hasNext()) {
      b.$plus$eq_0(new Tuple2_0(these.next_0(), those.next_0()));
      continue while$7;
    }
    break;
  }
  return b.result();
}

defineSeed(957, 1, makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]));
_.map_0 = function map_3(f){
  return map_10(this, f);
}
;
defineSeed(958, 1, makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]));
_.map_0 = function map_4(f){
  return map_10(this, f);
}
;
function $$init_747(){
}

function Iterator$$anon$19_0($outer, f$1){
  $$init_747();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.f$1 = f$1;
  Object_1.call(this);
  $init$_38();
  $init$_66();
  $init$_51();
}

defineSeed(959, 1, makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]), Iterator$$anon$19_0);
_.$div$colon = function $div$colon_4(z, op){
  return $div$colon_22(this, z, op);
}
;
_.addString = function addString_4(b, start, sep, end){
  return addString_23(this, b, start, sep, end);
}
;
_.copyToArray = function copyToArray_11(xs, start){
  copyToArray_48(this, xs, start);
}
;
_.copyToArray_0 = function copyToArray_12(xs, start, len){
  copyToArray_21(this, xs, start, len);
}
;
_.copyToBuffer = function copyToBuffer_4(dest){
  copyToBuffer_22(this, dest);
}
;
_.drop = function drop_7(n){
  return drop_12(this, n);
}
;
_.foldLeft = function foldLeft_5(z, op){
  return foldLeft_24(this, z, op);
}
;
_.forall = function forall_6(p){
  return forall_11(this, p);
}
;
_.foreach = function foreach_8(f){
  foreach_13(this, f);
}
;
_.hasNext = function hasNext_18(){
  return this.$outer$u0020.hasNext();
}
;
_.isEmpty = function isEmpty_15(){
  return isEmpty_20(this);
}
;
_.isTraversableAgain = function isTraversableAgain_5(){
  return isTraversableAgain_10();
}
;
_.map_0 = function map_5(f){
  return map_10(this, f);
}
;
_.mkString = function mkString_9(sep){
  return mkString_45(this, sep);
}
;
_.mkString_0 = function mkString_10(start, sep, end){
  return mkString_46(this, start, sep, end);
}
;
_.next_0 = function next_19(){
  return this.f$1.apply_0(this.$outer$u0020.next_0());
}
;
_.nonEmpty = function nonEmpty_4(){
  return nonEmpty_22(this);
}
;
_.seq = function seq_10(){
  return seq_20(this);
}
;
_.seq_0 = function seq_11(){
  return this.seq();
}
;
_.size_1 = function size_23(){
  return size_43(this);
}
;
_.slice_0 = function slice_6(from, until){
  return slice_11(this, from, until);
}
;
_.take = function take_7(n){
  return take_12(this, n);
}
;
_.toArray_1 = function toArray_14(evidence$1){
  return toArray_32(this, evidence$1);
}
;
_.toBuffer = function toBuffer_5(){
  return toBuffer_25(this);
}
;
_.toList = function toList_4(){
  return toList_22(this);
}
;
_.toString$ = function toString_62(){
  return toString_67(this);
}
;
_.$outer$u0020 = null;
_.f$1 = null;
defineSeed(961, 1, makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]));
_.$outer$u0020 = null;
_.hd$u0020 = null;
_.hdDefined$u0020 = false;
_.p$1 = null;
defineSeed(962, 1, makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]));
_.map_0 = function map_8(f){
  return map_10(this, f);
}
;
defineSeed(963, 1, makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]));
_.$outer$u0020 = null;
_.that$2 = null;
function map_10($this, f$1){
  return new Iterator$$anon$19_0($this, f$1);
}

function $clinit_JavaConversions$(){
  $clinit_JavaConversions$ = nullMethod;
  MODULE$_14 = new JavaConversions$_0;
}

function $$init_753(){
}

function $asScalaIterator(i){
  var $12$, temp34;
  temp34 = i;
  instanceOf(temp34, Q$JavaConversions$IteratorWrapper)?($12$ = dynamicCast(temp34, Q$JavaConversions$IteratorWrapper).nullMethod()):($12$ = new JavaConversions$JIteratorWrapper_0(i));
  return $12$;
}

function JavaConversions$_0(){
  $$init_753();
  Object_1.call(this);
  MODULE$_14 = this;
}

defineSeed(966, 1, makeCastMap([Q$ScalaObject]), JavaConversions$_0);
var MODULE$_14;
function $$init_755(){
}

function $gd2$1(this$static, x$1){
  return equals_113(x$1, $underlying_0(this$static));
}

function $underlying_0(this$static){
  return this$static.underlying$u0020;
}

function JavaConversions$JIteratorWrapper_0(underlying){
  $$init_755();
  this.underlying$u0020 = underlying;
  Object_1.call(this);
  $init$_38();
  $init$_66();
  $init$_51();
  $init$_12();
}

defineSeed(968, 1, makeCastMap([Q$Serializable, Q$Equals, Q$ScalaObject, Q$Serializable_0, Q$GenTraversableOnce, Q$JavaConversions$JIteratorWrapper, Q$TraversableOnce]), JavaConversions$JIteratorWrapper_0);
_.$div$colon = function $div$colon_10(z, op){
  return $div$colon_22(this, z, op);
}
;
_.addString = function addString_10(b, start, sep, end){
  return addString_23(this, b, start, sep, end);
}
;
_.canEqual = function canEqual_4(x$1){
  return instanceOf(x$1, Q$JavaConversions$JIteratorWrapper);
}
;
_.copyToArray = function copyToArray_24(xs, start){
  copyToArray_48(this, xs, start);
}
;
_.copyToArray_0 = function copyToArray_25(xs, start, len){
  copyToArray_21(this, xs, start, len);
}
;
_.copyToBuffer = function copyToBuffer_10(dest){
  copyToBuffer_22(this, dest);
}
;
_.drop = function drop_14(n){
  return drop_12(this, n);
}
;
_.equals$ = function equals_33(x$1){
  var $25$, $26$, $28$, temp59, temp60, temp61, underlying$2;
  temp59 = x$1;
  if (instanceOf(temp59, Q$JavaConversions$JIteratorWrapper)) {
    temp60 = dynamicCast(temp59, Q$JavaConversions$JIteratorWrapper);
    temp61 = $underlying_0(temp60);
    underlying$2 = temp61;
    if ($gd2$1(this, underlying$2)) {
      undefined;
      body$percent021: while (true) {
        $28$ = dynamicCast(x$1, Q$JavaConversions$JIteratorWrapper).canEqual(this);
        break;
      }
      $26$ = $28$;
    }
     else {
      $26$ = false;
    }
    $25$ = $26$;
  }
   else {
    $25$ = false;
  }
  return this === x$1 || $25$;
}
;
_.foldLeft = function foldLeft_11(z, op){
  return foldLeft_24(this, z, op);
}
;
_.forall = function forall_13(p){
  return forall_11(this, p);
}
;
_.foreach = function foreach_15(f){
  foreach_13(this, f);
}
;
_.hasNext = function hasNext_23(){
  return $underlying_0(this).hasNext();
}
;
_.hashCode$ = function hashCode_42(){
  return $_hashCode(($clinit_ScalaRunTime$() , MODULE$_64 , this));
}
;
_.isEmpty = function isEmpty_22(){
  return isEmpty_20(this);
}
;
_.isTraversableAgain = function isTraversableAgain_12(){
  return isTraversableAgain_10();
}
;
_.map_0 = function map_11(f){
  return map_10(this, f);
}
;
_.mkString = function mkString_21(sep){
  return mkString_45(this, sep);
}
;
_.mkString_0 = function mkString_22(start, sep, end){
  return mkString_46(this, start, sep, end);
}
;
_.next_0 = function next_24(){
  return $underlying_0(this).next_0();
}
;
_.nonEmpty = function nonEmpty_10(){
  return nonEmpty_22(this);
}
;
_.productArity = function productArity_4(){
  return 1;
}
;
_.productElement = function productElement_4(x$1){
  var $29$, temp62;
  temp62 = x$1;
  if (temp62 == 0) {
    $29$ = $underlying_0(this);
  }
   else {
    throw new IndexOutOfBoundsException_1(boxToInteger(x$1).toString$());
  }
  return $29$;
}
;
_.productIterator = function productIterator_3(){
  return productIterator_0(this);
}
;
_.productPrefix = function productPrefix_5(){
  return 'JIteratorWrapper';
}
;
_.seq = function seq_23(){
  return seq_20(this);
}
;
_.seq_0 = function seq_24(){
  return this.seq();
}
;
_.size_1 = function size_29(){
  return size_43(this);
}
;
_.slice_0 = function slice_12(from, until){
  return slice_11(this, from, until);
}
;
_.take = function take_14(n){
  return take_12(this, n);
}
;
_.toArray_1 = function toArray_20(evidence$1){
  return toArray_32(this, evidence$1);
}
;
_.toBuffer = function toBuffer_11(){
  return toBuffer_25(this);
}
;
_.toList = function toList_10(){
  return toList_22(this);
}
;
_.toString$ = function toString_69(){
  return toString_67(this);
}
;
_.underlying$u0020 = null;
defineSeed(969, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenMap, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Map_0, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$Growable, Q$HasNewBuilder, Q$Subtractable, Q$Builder, Q$Map_2]));
_.underlying$u0020 = null;
defineSeed(970, 1, makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]));
_.ui$u0020 = null;
defineSeed(974, 1, makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]));
_.map_0 = function map_14(f){
  return map_10(this, f);
}
;
function thisCollection_7($this){
  return dynamicCast($this, Q$LinearSeq);
}

function $clinit_Map$(){
  $clinit_Map$ = nullMethod;
  MODULE$_15 = new Map$_0;
}

function $$init_762(){
}

function $hashSeed(this$static){
  return this$static.hashSeed$u0020;
}

function Map$_0(){
  $$init_762();
  MapFactory_0.call(this);
  MODULE$_15 = this;
  this.hashSeed$u0020 = $hashCode_4('Map');
}

defineSeed(977, 978, makeCastMap([Q$ScalaObject]), Map$_0);
_.hashSeed$u0020 = 0;
var MODULE$_15;
function $init$_56(){
}

defineSeed(981, 1, makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]));
_.iter$u0020 = null;
function $$init_764(){
}

function $apply_84(x0$1){
  var $11$, temp33;
  temp33 = x0$1;
  if (isNotNull(temp33)) {
    $11$ = $$plus_16($any2stringadd(($clinit_Predef$() , MODULE$_11 , $_1(temp33))), ' -> ') + $_2(temp33);
  }
   else {
    throw new MatchError_0(temp33);
  }
  return $11$;
}

function MapLike$$anonfun$addString$1_0(){
  $$init_764();
  AbstractFunction1_0.call(this);
}

defineSeed(982, 268, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), MapLike$$anonfun$addString$1_0);
_.apply_0 = function apply_113(v1){
  return $apply_84(dynamicCast(v1, Q$Tuple2));
}
;
function $$init_765(){
}

function $apply_85(this$static, kv){
  unboxToBoolean(this$static.p$2.apply_0(kv)) && (this$static.res$1.elem = dynamicCast(this$static.res$1.elem, Q$Map_0).$minus($_1(kv)));
}

function MapLike$$anonfun$filterNot$1_0(p$2, res$1){
  $$init_765();
  this.p$2 = p$2;
  this.res$1 = res$1;
  AbstractFunction1_0.call(this);
}

defineSeed(983, 268, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), MapLike$$anonfun$filterNot$1_0);
_.apply_0 = function apply_114(v1){
  $apply_85(this, dynamicCast(v1, Q$Tuple2));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.p$2 = null;
_.res$1 = null;
defineSeed(984, 1, makeCastMap([Q$Equals, Q$Function1, Q$ScalaObject, Q$GenIterable, Q$GenIterableLike, Q$GenSet, Q$GenSetLike, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Set_0, Q$SetLike, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericSetTemplate, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Subtractable]));
_.$outer$u0020 = null;
function $init$_57(){
}

function addString_17($this, b, start, sep, end){
  return $this.iterator_1().map_0(new MapLike$$anonfun$addString$1_0).addString(b, start, sep, end);
}

function apply_119($this, key){
  var $3$, $4$, temp5;
  temp5 = $this.get_2(key);
  if (equals_113(($clinit_None$() , MODULE$_10), temp5)) {
    $3$ = $this.default_$(key);
  }
   else {
    if (instanceOf(temp5, Q$Some)) {
      $4$ = $x_0(dynamicCast(temp5, Q$Some));
    }
     else {
      throw new MatchError_0(temp5);
    }
    $3$ = $4$;
  }
  return $3$;
}

function contains_16($this, key){
  return $isDefined($this.get_2(key));
}

function default_$_0(key){
  throw new NoSuchElementException_1('key not found: ' + key);
}

function filterNot_4($this, p$2){
  var res$1;
  res$1 = new ObjectRef_0(dynamicCast($this.repr(), Q$Map_0));
  $this.foreach(new MapLike$$anonfun$filterNot$1_0(p$2, res$1));
  return dynamicCast(res$1.elem, Q$Map_0);
}

function isEmpty_29($this){
  return $this.size_1() == 0;
}

function stringPrefix_3(){
  return 'Map';
}

function toBuffer_18($this){
  var result;
  result = new ArrayBuffer_1($this.size_1());
  $this.copyToBuffer(result);
  return result;
}

function toString_76($this){
  return toString_85($this);
}

function thisCollection_10($this){
  return dynamicCast($this, Q$Seq);
}

defineSeed(995, 1, makeCastMap([Q$Equals, Q$Function1, Q$ScalaObject, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$TraversableView, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder]));
_.$outer$u0020 = null;
defineSeed(997, 1, makeCastMap([Q$Equals, Q$Function1, Q$ScalaObject, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$TraversableView, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder]));
_.$outer$u0020 = null;
_.bitmap$0 = 0;
_.index$u0020 = null;
_.pred$u0020 = null;
defineSeed(998, 1, makeCastMap([Q$Equals, Q$Function1, Q$ScalaObject, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$TraversableView, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder]));
_.$outer$u0020 = null;
_.endpoints$u0020 = null;
defineSeed(999, 1, makeCastMap([Q$Equals, Q$Function1, Q$ScalaObject, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$TraversableView, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder]));
_.$outer$u0020 = null;
_.bitmap$0 = 0;
_.other$u0020 = null;
_.thatSeq$u0020 = null;
function $$init_793(){
}

function $apply_98(from){
  return from.genericBuilder();
}

function GenTraversableFactory$GenericCanBuildFrom_0($outer){
  $$init_793();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this , $outer;
  }
  Object_1.call(this);
}

defineSeed(1025, 1, makeCastMap([Q$ScalaObject]));
_.apply_9 = function apply_143(from){
  return $apply_98(dynamicCast(from, Q$GenTraversable));
}
;
function genericBuilder_8($this){
  return $this.companion().newBuilder();
}

defineSeed(1035, 978, makeCastMap([Q$ScalaObject]));
defineSeed(1045, 1, makeCastMap([Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$LinearSeq, Q$LinearSeqLike, Q$LinearSeqOptimized, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Iterable_1, Q$List_0, Q$Traversable_0]));
_.genericBuilder = function genericBuilder_9(){
  return genericBuilder_8(this);
}
;
_.productIterator = function productIterator_6(){
  return productIterator_0(this);
}
;
_.productPrefix = function productPrefix_8(){
  return productPrefix_1();
}
;
_.seq_1 = function seq_59(){
  return this.seq_7();
}
;
_.thisCollection_2 = function thisCollection_27(){
  return thisCollection_7(this);
}
;
_.thisCollection_3 = function thisCollection_28(){
  return this.thisCollection_2();
}
;
defineSeed(1044, 1045, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$LinearSeq, Q$LinearSeqLike, Q$LinearSeqOptimized, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$$colon$colon, Q$Iterable_1, Q$List_0, Q$Traversable_0]));
_.productArity = function productArity_7(){
  return 2;
}
;
_.productElement = function productElement_7(x$1){
  var $16$, $17$, temp24;
  temp24 = x$1;
  $16$ = temp24;
  switch ($16$) {
    case 1:
      $17$ = $tl(this);
      break;
    case 0:
      $17$ = $scala$collection$immutable$$colon$colon$$hd(this);
      break;
    default:throw new IndexOutOfBoundsException_1(boxToInteger(x$1).toString$());
  }
  return $17$;
}
;
_.productPrefix = function productPrefix_9(){
  return '::';
}
;
defineSeed(1055, 1, makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]));
_.map_0 = function map_19(f){
  return map_10(this, f);
}
;
defineSeed(1056, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSet, Q$GenSetLike, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Set_0, Q$SetLike, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericSetTemplate, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Subtractable, Q$HashSet, Q$Iterable_1, Q$Set_1, Q$Traversable_0]));
_.genericBuilder = function genericBuilder_11(){
  return genericBuilder_8(this);
}
;
_.seq_1 = function seq_69(){
  return this.seq_9();
}
;
function $clinit_Iterable$_0(){
  $clinit_Iterable$_0 = nullMethod;
  MODULE$_24 = new Iterable$_2;
}

function $$init_823(){
}

function $newBuilder(){
  return new ListBuffer_0;
}

function Iterable$_2(){
  $$init_823();
  GenTraversableFactory_0.call(this);
  MODULE$_24 = this;
  $init$_71();
  $init$_79();
}

defineSeed(1066, 949, makeCastMap([Q$ScalaObject]), Iterable$_2);
_.newBuilder = function newBuilder_23(){
  return $newBuilder();
}
;
var MODULE$_24;
defineSeed(1077, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSet, Q$GenSetLike, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Set_0, Q$SetLike, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericSetTemplate, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Subtractable, Q$Iterable_1, Q$ListSet, Q$Set_1, Q$Traversable_0]));
_.genericBuilder = function genericBuilder_13(){
  return genericBuilder_8(this);
}
;
_.seq_1 = function seq_79(){
  return this.seq_9();
}
;
defineSeed(1079, 1, makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]));
_.map_0 = function map_23(f){
  return map_10(this, f);
}
;
defineSeed(1081, 1, makeCastMap([Q$ScalaObject, Q$ListSet$ListSetBuilder, Q$Builder]));
_.mapResult = function mapResult_2(f){
  return mapResult_8(this, f);
}
;
defineSeed(1094, 1045, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$LinearSeq, Q$LinearSeqLike, Q$LinearSeqOptimized, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Iterable_1, Q$List_0, Q$Traversable_0]));
_.productArity = function productArity_8(){
  return 0;
}
;
_.productElement = function productElement_8(x$1){
  x$1;
  throw new IndexOutOfBoundsException_1(boxToInteger(x$1).toString$());
}
;
_.productPrefix = function productPrefix_10(){
  return 'Nil';
}
;
defineSeed(1096, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$IndexedSeq, Q$IndexedSeqLike, Q$Iterable_0, Q$IterableLike, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Iterable_1, Q$Range, Q$Traversable_0]));
_.genericBuilder = function genericBuilder_19(){
  return genericBuilder_8(this);
}
;
_.seq_1 = function seq_110(){
  return this.seq_7();
}
;
_.thisCollection = function thisCollection_49(){
  return thisCollection(this);
}
;
_.thisCollection_3 = function thisCollection_51(){
  return this.thisCollection();
}
;
defineSeed(1102, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSet, Q$GenSetLike, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Set_0, Q$SetLike, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericSetTemplate, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Subtractable, Q$Iterable_1, Q$Set_1, Q$Traversable_0]));
_.genericBuilder = function genericBuilder_20(){
  return genericBuilder_8(this);
}
;
_.seq_1 = function seq_115(){
  return this.seq_9();
}
;
defineSeed(1103, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSet, Q$GenSetLike, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Set_0, Q$SetLike, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericSetTemplate, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Subtractable, Q$Iterable_1, Q$Set_1, Q$Traversable_0]));
_.genericBuilder = function genericBuilder_21(){
  return genericBuilder_8(this);
}
;
_.seq_1 = function seq_119(){
  return this.seq_9();
}
;
defineSeed(1104, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSet, Q$GenSetLike, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Set_0, Q$SetLike, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericSetTemplate, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Subtractable, Q$Iterable_1, Q$Set_1, Q$Traversable_0]));
_.genericBuilder = function genericBuilder_22(){
  return genericBuilder_8(this);
}
;
_.seq_1 = function seq_123(){
  return this.seq_9();
}
;
defineSeed(1105, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSet, Q$GenSetLike, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Set_0, Q$SetLike, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericSetTemplate, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Subtractable, Q$Iterable_1, Q$Set_1, Q$Traversable_0]));
_.genericBuilder = function genericBuilder_23(){
  return genericBuilder_8(this);
}
;
_.seq_1 = function seq_127(){
  return this.seq_9();
}
;
defineSeed(1106, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSet, Q$GenSetLike, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Set_0, Q$SetLike, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericSetTemplate, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Subtractable, Q$Iterable_1, Q$Set_1, Q$Traversable_0]));
_.genericBuilder = function genericBuilder_24(){
  return genericBuilder_8(this);
}
;
_.seq_1 = function seq_131(){
  return this.seq_9();
}
;
defineSeed(1108, 1, makeCastMap([Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$LinearSeq, Q$LinearSeqLike, Q$LinearSeqOptimized, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Iterable_1, Q$Stream, Q$Traversable_0]));
defineSeed(1109, 989, makeCastMap([Q$ScalaObject]));
defineSeed(1127, 1, makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]));
_.scala$collection$immutable$StreamIterator$$self = null;
_.these$u0020 = null;
function apply_197($this, n){
  return $charAt($this.toString$(), n);
}

function $thisCollection(this$static){
  return new WrappedString_0($repr(this$static));
}

defineSeed(1133, 1, makeCastMap([Q$Comparable, Q$Equals, Q$ScalaObject, Q$GenIterableLike, Q$GenTraversableLike, Q$GenTraversableOnce, Q$IndexedSeqLike, Q$IterableLike, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$HasNewBuilder]));
_.apply_10 = function apply_198(index){
  return $apply_126(this, index);
}
;
_.scala$collection$IndexedSeqOptimized$$super$zip = function scala$collection$IndexedSeqOptimized$$super$zip(that, bf){
  return zip_3(this, that, bf);
}
;
_.thisCollection = function thisCollection_67(){
  return $thisCollection(this);
}
;
_.thisCollection_3 = function thisCollection_69(){
  return $thisCollection(this);
}
;
defineSeed(1135, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$IndexedSeq, Q$IndexedSeqLike, Q$Iterable_0, Q$IterableLike, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Iterable_1, Q$Traversable_0]));
_.genericBuilder = function genericBuilder_26(){
  return genericBuilder_8(this);
}
;
_.seq_1 = function seq_143(){
  return this.seq_7();
}
;
_.thisCollection = function thisCollection_71(){
  return thisCollection(this);
}
;
_.thisCollection_3 = function thisCollection_73(){
  return this.thisCollection();
}
;
defineSeed(1138, 1, makeCastMap([Q$ScalaObject, Q$VectorBuilder, Q$Builder]));
_.mapResult = function mapResult_4(f){
  return mapResult_8(this, f);
}
;
defineSeed(1139, 1, makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]));
_.map_0 = function map_31(f){
  return map_10(this, f);
}
;
function $$init_889(){
}

function $length_7(this$static){
  return $length_1($self_0(this$static));
}

function $self_0(this$static){
  return this$static.self$u0020;
}

function $slice_0(this$static, from, until){
  var $1$, $2$, end, start;
  from < 0?($1$ = 0):($1$ = from);
  start = $1$;
  if (until <= start || start >= $length_7(dynamicCast(this$static.repr(), Q$WrappedString))) {
    return new WrappedString_0('');
  }
  until > $length_7(this$static)?($2$ = $length_7(this$static)):($2$ = until);
  end = $2$;
  return new WrappedString_0($substring_0($unwrapString(($clinit_Predef$() , MODULE$_11 , dynamicCast(this$static.repr(), Q$WrappedString))), start, end));
}

function $thisCollection_0(this$static){
  return this$static;
}

function WrappedString_0(self_0){
  $$init_889();
  this.self$u0020 = self_0;
  Object_1.call(this);
  $init$_38();
  $init$_66();
  $init$_37();
  $init$_65();
  $init$_73();
  $init$_36();
  $init$_64();
  $init$_89();
  $init$_17();
  $init$_16();
  $init$_48();
  $init$_47();
  $init$_82();
  $init$_7();
  $init$_11();
  $init$_26();
  $init$_25();
  $init$_59();
  $init$_58();
  $init$_86();
  $init$_45();
  $init$_44();
  $init$_81();
  $init$_46();
  $init$_121();
  $init$_88();
}

defineSeed(1141, 1, makeCastMap([Q$Comparable, Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$IndexedSeq, Q$IndexedSeqLike, Q$Iterable_0, Q$IterableLike, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Iterable_1, Q$Traversable_0, Q$WrappedString]), WrappedString_0);
_.$div$colon = function $div$colon_49(z, op){
  return $div$colon_22(this, z, op);
}
;
_.addString = function addString_51(b, start, sep, end){
  return addString_23(this, b, start, sep, end);
}
;
_.apply$mcII$sp = function apply$mcII$sp_29(v1){
  return apply$mcII$sp_0(this, v1);
}
;
_.apply$mcVI$sp = function apply$mcVI$sp_42(v1){
  apply$mcVI$sp_12(this, v1);
}
;
_.apply_10 = function apply_202(n){
  return apply_197(this, n);
}
;
_.apply_5 = function apply_203(idx){
  return boxToCharacter(this.apply_10(idx));
}
;
_.apply_0 = function apply_204(v1){
  return boxToCharacter(this.apply_10(unboxToInt(v1)));
}
;
_.canEqual = function canEqual_32(that){
  return canEqual_2();
}
;
_.companion = function companion_33(){
  return companion_14();
}
;
_.copyToArray = function copyToArray_101(xs, start){
  copyToArray_48(this, xs, start);
}
;
_.copyToArray_0 = function copyToArray_102(xs, start, len){
  copyToArray_5(this, xs, start, len);
}
;
_.copyToBuffer = function copyToBuffer_49(dest){
  copyToBuffer_22(this, dest);
}
;
_.corresponds = function corresponds_11(that, p){
  return corresponds(this, that, p);
}
;
_.drop_0 = function drop_58(n){
  return drop_2(this, n);
}
;
_.equals$ = function equals_62(that){
  return equals_30(this, that);
}
;
_.filter_1 = function filter_56(p){
  return filter_29(this, p);
}
;
_.filterNot = function filterNot_37(p){
  return filterNot_10(this, p);
}
;
_.foldLeft = function foldLeft_51(z, op){
  return foldLeft_2(this, z, op);
}
;
_.forall = function forall_52(p){
  return forall_2(this, p);
}
;
_.foreach = function foreach_60(f){
  foreach_3(this, f);
}
;
_.format_1 = function format_3(args){
  return format_1();
}
;
_.genericBuilder = function genericBuilder_27(){
  return genericBuilder_8(this);
}
;
_.hashCode$ = function hashCode_70(){
  return hashCode_39(this);
}
;
_.head = function head_32(){
  return head(this);
}
;
_.isEmpty = function isEmpty_66(){
  return isEmpty_11(this);
}
;
_.isTraversableAgain = function isTraversableAgain_49(){
  return isTraversableAgain_0();
}
;
_.iterator_1 = function iterator_62(){
  return iterator_25(this);
}
;
_.length_1 = function length_18(){
  return $length_7(this);
}
;
_.mkString = function mkString_101(sep){
  return mkString_45(this, sep);
}
;
_.mkString_0 = function mkString_102(start, sep, end){
  return mkString_46(this, start, sep, end);
}
;
_.newBuilder = function newBuilder_45(){
  return $newBuilder_3(($clinit_WrappedString$() , MODULE$_42));
}
;
_.nonEmpty = function nonEmpty_49(){
  return nonEmpty_22(this);
}
;
_.prefixLength_0 = function prefixLength_12(p){
  return prefixLength_0(this, p);
}
;
_.repr = function repr_29(){
  return repr_9(this);
}
;
_.reverse = function reverse_17(){
  return reverse(this);
}
;
_.sameElements = function sameElements_31(that){
  return sameElements(this, that);
}
;
_.scala$collection$IndexedSeqOptimized$$super$head = function scala$collection$IndexedSeqOptimized$$super$head_0(){
  return head_0(this);
}
;
_.scala$collection$IndexedSeqOptimized$$super$sameElements = function scala$collection$IndexedSeqOptimized$$super$sameElements_0(that){
  return sameElements_0(this, that);
}
;
_.scala$collection$IndexedSeqOptimized$$super$tail = function scala$collection$IndexedSeqOptimized$$super$tail_0(){
  return tail_9(this);
}
;
_.scala$collection$IndexedSeqOptimized$$super$zip = function scala$collection$IndexedSeqOptimized$$super$zip_0(that, bf){
  return zip_3(this, that, bf);
}
;
_.segmentLength = function segmentLength_13(p, from){
  return segmentLength(this, p, from);
}
;
_.seq_1 = function seq_151(){
  return this.seq_7();
}
;
_.seq_0 = function seq_153(){
  return this.seq_7();
}
;
_.seq_7 = function seq_154(){
  return seq_114(this);
}
;
_.size_1 = function size_78(){
  return size_37(this);
}
;
_.slice_1 = function slice_24(from, until){
  return $slice_0(this, from, until);
}
;
_.stringPrefix = function stringPrefix_32(){
  return stringPrefix_11(this);
}
;
_.tail = function tail_33(){
  return tail(this);
}
;
_.take_0 = function take_56(n){
  return take_2(this, n);
}
;
_.thisCollection = function thisCollection_75(){
  return $thisCollection_0(this);
}
;
_.thisCollection_3 = function thisCollection_77(){
  return $thisCollection_0(this);
}
;
_.toArray_1 = function toArray_60(evidence$1){
  return toArray_55(this);
}
;
_.toBuffer = function toBuffer_52(){
  return toBuffer_1(this);
}
;
_.toList = function toList_48(){
  return toList_22(this);
}
;
_.toString$ = function toString_112(){
  return $self_0(this);
}
;
_.self$u0020 = null;
function $clinit_WrappedString$(){
  $clinit_WrappedString$ = nullMethod;
  MODULE$_42 = new WrappedString$_0;
}

function $$init_890(){
}

function $newBuilder_3(){
  return $newBuilder_7(($clinit_StringBuilder$() , MODULE$_53)).mapResult(new WrappedString$$anonfun$newBuilder$1_0);
}

function WrappedString$_0(){
  $$init_890();
  Object_1.call(this);
  MODULE$_42 = this;
}

defineSeed(1142, 1, makeCastMap([Q$ScalaObject]), WrappedString$_0);
var MODULE$_42;
function $$init_891(){
}

function $apply_128(x){
  return new WrappedString_0(x);
}

function WrappedString$$anonfun$newBuilder$1_0(){
  $$init_891();
  AbstractFunction1_0.call(this);
}

defineSeed(1143, 268, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), WrappedString$$anonfun$newBuilder$1_0);
_.apply_0 = function apply_205(v1){
  return $apply_128(dynamicCast(v1, Q$String));
}
;
defineSeed(1144, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$IndexedSeq, Q$IndexedSeqLike, Q$Iterable_0, Q$IterableLike, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$Growable, Q$HasNewBuilder, Q$Subtractable, Q$ArrayBuffer, Q$Builder, Q$IndexedSeq_0, Q$IndexedSeqLike_0]));
_.genericBuilder = function genericBuilder_28(){
  return genericBuilder_8(this);
}
;
_.mapResult = function mapResult_5(f){
  return mapResult_8(this, f);
}
;
_.scala$collection$IndexedSeqOptimized$$super$zip = function scala$collection$IndexedSeqOptimized$$super$zip_1(that, bf){
  return zip_3(this, that, bf);
}
;
_.seq_1 = function seq_155(){
  return this.seq_10();
}
;
_.thisCollection = function thisCollection_79(){
  return this.thisCollection_4();
}
;
_.thisCollection_3 = function thisCollection_81(){
  return this.thisCollection_4();
}
;
_.thisCollection_4 = function thisCollection_83(){
  return thisCollection_106(this);
}
;
defineSeed(1146, 1, makeCastMap([Q$Serializable, Q$ScalaObject, Q$Serializable_0, Q$Builder]));
_.mapResult = function mapResult_6(f){
  return mapResult_8(this, f);
}
;
defineSeed(1150, 1, makeCastMap([Q$Equals, Q$ScalaObject, Q$GenIterableLike, Q$GenTraversableLike, Q$GenTraversableOnce, Q$IndexedSeqLike, Q$IterableLike, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$HasNewBuilder, Q$IndexedSeqLike_0]));
_.scala$collection$IndexedSeqOptimized$$super$zip = function scala$collection$IndexedSeqOptimized$$super$zip_2(that, bf){
  return zip_3(this, that, bf);
}
;
_.thisCollection = function thisCollection_84(){
  return this.thisCollection_4();
}
;
_.thisCollection_3 = function thisCollection_86(){
  return this.thisCollection_4();
}
;
_.thisCollection_4 = function thisCollection_88(){
  return thisCollection_106(this);
}
;
defineSeed(1151, 1150, makeCastMap([Q$Equals, Q$ScalaObject, Q$GenIterableLike, Q$GenTraversableLike, Q$GenTraversableOnce, Q$IndexedSeqLike, Q$IterableLike, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$HasNewBuilder, Q$IndexedSeqLike_0]));
_.repr$u0020 = null;
function $thisCollection_2(this$static){
  return new WrappedArray$ofRef_0($repr_1(this$static));
}

defineSeed(1152, 1150, makeCastMap([Q$Equals, Q$ScalaObject, Q$GenIterableLike, Q$GenTraversableLike, Q$GenTraversableOnce, Q$IndexedSeqLike, Q$IterableLike, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$HasNewBuilder, Q$IndexedSeqLike_0]));
_.thisCollection = function thisCollection_94(){
  return $thisCollection_2(this);
}
;
_.thisCollection_3 = function thisCollection_96(){
  return $thisCollection_2(this);
}
;
_.thisCollection_4 = function thisCollection_98(){
  return $thisCollection_2(this);
}
;
function $$init_900(){
}

function $$plus$eq_7(this$static, x){
  $self_1(this$static).$plus$eq_0(x);
  return this$static;
}

function $$plus$plus$eq_4(this$static, xs){
  $self_1(this$static).$plus$plus$eq(xs);
  return this$static;
}

function $self_1(this$static){
  return this$static.self$u0020;
}

function Builder$$anon$1_0($outer, f$1){
  $$init_900();
  this.f$1 = f$1;
  Object_1.call(this);
  $init$_74();
  $init$_94();
  $init$_14();
  this.self$u0020 = $outer;
}

defineSeed(1155, 1, makeCastMap([Q$ScalaObject, Q$Builder]), Builder$$anon$1_0);
_.$plus$eq = function $plus$eq_21(elem){
  return $$plus$eq_7(this, elem);
}
;
_.$plus$eq_0 = function $plus$eq_22(elem){
  return $$plus$eq_7(this, elem);
}
;
_.$plus$plus$eq = function $plus$plus$eq_10(xs){
  return $$plus$plus$eq_4(this, xs);
}
;
_.equals$ = function equals_67(that){
  return equals_26(this, that);
}
;
_.hashCode$ = function hashCode_73(){
  return hashCode_35(this);
}
;
_.mapResult = function mapResult_7(f){
  return mapResult_8(this, f);
}
;
_.result = function result_12(){
  return this.f$1.apply_0($self_1(this).result());
}
;
_.self_1 = function self_1(){
  return $self_1(this);
}
;
_.sizeHint$default$2 = function sizeHint$default$2_7(){
  return sizeHint$default$2_8();
}
;
_.sizeHint = function sizeHint_17(size){
  sizeHint_19();
}
;
_.sizeHint_0 = function sizeHint_18(coll, delta){
  sizeHint_20(this, coll, delta);
}
;
_.sizeHintBounded = function sizeHintBounded_7(size, boundingColl){
  sizeHintBounded_8(this, size, boundingColl);
}
;
_.toString$ = function toString_117(){
  return toString_54(this);
}
;
_.f$1 = null;
_.self$u0020 = null;
function mapResult_8($this, f$1){
  return new Builder$$anon$1_0($this, f$1);
}

defineSeed(1159, 1, makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]));
_.map_0 = function map_32(f){
  return map_10(this, f);
}
;
defineSeed(1163, 1, makeCastMap([Q$ScalaObject, Q$Builder]));
_.mapResult = function mapResult_9(f){
  return mapResult_8(this, f);
}
;
defineSeed(1165, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSet, Q$GenSetLike, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Set_0, Q$SetLike, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericSetTemplate, Q$GenericTraversableTemplate, Q$Growable, Q$HasNewBuilder, Q$Subtractable, Q$Builder, Q$HashSet_0, Q$Set_2]));
_.genericBuilder = function genericBuilder_29(){
  return genericBuilder_8(this);
}
;
_.mapResult = function mapResult_10(f){
  return mapResult_8(this, f);
}
;
_.seq_1 = function seq_162(){
  return this.seq_5();
}
;
defineSeed(1172, 1, makeCastMap([Q$Equals, Q$Function1, Q$ScalaObject, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$IndexedSeq, Q$IndexedSeqLike, Q$Iterable_0, Q$IterableLike, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$TraversableView, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$IndexedSeq_0, Q$IndexedSeqLike_0]));
_.$outer$u0020 = null;
function thisCollection_106($this){
  return dynamicCast($this, Q$IndexedSeq_0);
}

defineSeed(1175, 1, makeCastMap([Q$Equals, Q$Function1, Q$ScalaObject, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$IndexedSeq, Q$IndexedSeqLike, Q$Iterable_0, Q$IterableLike, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$TraversableView, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$IndexedSeq_0, Q$IndexedSeqLike_0]));
_.$outer$u0020 = null;
_.bitmap$0 = 0;
_.index$u0020 = null;
_.pred$u0020 = null;
defineSeed(1176, 1, makeCastMap([Q$Equals, Q$Function1, Q$ScalaObject, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$IndexedSeq, Q$IndexedSeqLike, Q$Iterable_0, Q$IterableLike, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$TraversableView, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$IndexedSeq_0, Q$IndexedSeqLike_0]));
_.$outer$u0020 = null;
_.endpoints$u0020 = null;
defineSeed(1177, 1, makeCastMap([Q$Equals, Q$Function1, Q$ScalaObject, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$IndexedSeq, Q$IndexedSeqLike, Q$Iterable_0, Q$IterableLike, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$TraversableView, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$IndexedSeq_0, Q$IndexedSeqLike_0]));
_.$outer$u0020 = null;
function $clinit_Iterable$_1(){
  $clinit_Iterable$_1 = nullMethod;
  MODULE$_49 = new Iterable$_4;
}

function $$init_915(){
}

function Iterable$_4(){
  $$init_915();
  GenTraversableFactory_0.call(this);
  MODULE$_49 = this;
  $init$_71();
  $init$_79();
}

defineSeed(1184, 949, makeCastMap([Q$ScalaObject]), Iterable$_4);
_.newBuilder = function newBuilder_56(){
  return new ArrayBuffer_0;
}
;
var MODULE$_49;
function companion_41(){
  return $clinit_Iterable$_1() , MODULE$_49;
}

defineSeed(1187, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenMap, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Map_0, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$Growable, Q$HasNewBuilder, Q$Subtractable, Q$Builder, Q$Map_2]));
_._loadFactor$u0020 = 0;
_.firstEntry$u0020 = null;
_.lastEntry$u0020 = null;
_.sizemap$u0020 = null;
_.table$u0020 = null;
_.tableSize$u0020 = 0;
_.threshold$u0020 = 0;
defineSeed(1188, 1035, makeCastMap([Q$Serializable, Q$ScalaObject, Q$Serializable_0]));
defineSeed(1189, 1, makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]));
_.cur$u0020 = null;
defineSeed(1190, 1, makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]));
_.cur$u0020 = null;
defineSeed(1191, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$Growable, Q$HasNewBuilder, Q$Subtractable, Q$Builder, Q$ListBuffer]));
_.genericBuilder = function genericBuilder_35(){
  return genericBuilder_8(this);
}
;
_.mapResult = function mapResult_12(f){
  return mapResult_8(this, f);
}
;
_.seq_1 = function seq_190(){
  return this.seq_10();
}
;
_.thisCollection_3 = function thisCollection_125(){
  return thisCollection_10(this);
}
;
defineSeed(1193, 1, makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]));
_.map_0 = function map_36(f){
  return map_10(this, f);
}
;
function $init$_109(){
}

function seq_196($this){
  return $this;
}

function $init$_110(){
}

function $minus_14($this, key){
  return dynamicCast($this.clone().$minus$eq_0(key), Q$Map_2);
}

function clone_6(){
  $error(($clinit_package$_0() , MODULE$_65 , "GWT doesn't support clone method."));
}

function newBuilder_60($this){
  return dynamicCast($this.empty_0(), Q$Builder);
}

function result_20($this){
  return dynamicCast($this.repr(), Q$Map_2);
}

defineSeed(1202, 1, makeCastMap([Q$ScalaObject, Q$Builder]));
_.mapResult = function mapResult_14(f){
  return mapResult_8(this, f);
}
;
function $thisCollection_3(this$static){
  return this$static;
}

defineSeed(1204, 1, makeCastMap([Q$Serializable, Q$CharSequence, Q$Comparable, Q$Equals, Q$Function1, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$IndexedSeq, Q$IndexedSeqLike, Q$Iterable_0, Q$IterableLike, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$Growable, Q$HasNewBuilder, Q$Builder, Q$IndexedSeq_0, Q$IndexedSeqLike_0, Q$StringBuilder]));
_.apply_10 = function apply_226(index){
  return $apply_134(this, index);
}
;
_.genericBuilder = function genericBuilder_36(){
  return genericBuilder_8(this);
}
;
_.mapResult = function mapResult_15(f){
  return mapResult_8(this, f);
}
;
_.scala$collection$IndexedSeqOptimized$$super$zip = function scala$collection$IndexedSeqOptimized$$super$zip_7(that, bf){
  return zip_3(this, that, bf);
}
;
_.seq_1 = function seq_199(){
  return this.seq_10();
}
;
_.thisCollection = function thisCollection_127(){
  return $thisCollection_3(this);
}
;
_.thisCollection_3 = function thisCollection_129(){
  return $thisCollection_3(this);
}
;
_.thisCollection_4 = function thisCollection_131(){
  return $thisCollection_3(this);
}
;
function $thisCollection_4(this$static){
  return this$static;
}

defineSeed(1207, 1, makeCastMap([Q$Equals, Q$Function1, Q$ScalaObject, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$IndexedSeq, Q$IndexedSeqLike, Q$Iterable_0, Q$IterableLike, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$IndexedSeq_0, Q$IndexedSeqLike_0, Q$WrappedArray]));
_.genericBuilder = function genericBuilder_37(){
  return genericBuilder_8(this);
}
;
_.scala$collection$IndexedSeqOptimized$$super$zip = function scala$collection$IndexedSeqOptimized$$super$zip_8(that, bf){
  return zip_3(this, that, bf);
}
;
_.seq_1 = function seq_203(){
  return this.seq_10();
}
;
_.thisCollection = function thisCollection_132(){
  return $thisCollection_4(this);
}
;
_.thisCollection_3 = function thisCollection_134(){
  return $thisCollection_4(this);
}
;
_.thisCollection_4 = function thisCollection_136(){
  return $thisCollection_4(this);
}
;
defineSeed(1219, 1, makeCastMap([Q$ScalaObject, Q$Builder]));
_.mapResult = function mapResult_16(f){
  return mapResult_8(this, f);
}
;
function $_hashCode(x){
  var $36$, arr, c, elem, h_0, i, k;
  arr = x.productArity();
  if (arr == 0) {
    $36$ = $hashCode_4(x.productPrefix());
  }
   else {
    h_0 = $startHash(($clinit_MurmurHash$() , MODULE$_66 , arr));
    c = $startMagicA(($clinit_MurmurHash$() , MODULE$_66));
    k = $startMagicB(($clinit_MurmurHash$() , MODULE$_66));
    i = 0;
    while$1: while (true) {
      if (i < arr) {
        {
          elem = x.productElement(i);
          h_0 = $extendHash(($clinit_MurmurHash$() , MODULE$_66 , h_0), $hash_3(elem), c, k);
          c = $nextMagicA(($clinit_MurmurHash$() , MODULE$_66 , c));
          k = $nextMagicB(($clinit_MurmurHash$() , MODULE$_66 , k));
          i = i + 1;
        }
        continue while$1;
      }
      break;
    }
    $36$ = $finalizeHash(($clinit_MurmurHash$() , MODULE$_66 , h_0));
  }
  return $36$;
}

function $_toString(x){
  return x.productIterator().mkString_0(x.productPrefix() + '(', ',', ')');
}

function $$init_1003(){
}

function $$plus_16(this$static, other){
  return valueOf_22(this$static.self_0) + other;
}

function StringAdd_0(self_0){
  $$init_1003();
  this.self_0 = self_0;
  Object_1.call(this);
}

defineSeed(1298, 1, makeCastMap([Q$ScalaObject]), StringAdd_0);
_.self_0 = null;
function $startMagicA(){
  return -1789642873;
}

function $startMagicB(){
  return 718793509;
}

defineSeed(1307, 1, makeCastMap([Q$Serializable, Q$Equals, Q$ScalaObject, Q$Serializable_0, Q$Equality, Q$NamespaceBinding]));
_.productArity = function productArity_9(){
  return 3;
}
;
_.productElement = function productElement_9(x$1){
  var $7$, $8$, temp11;
  temp11 = x$1;
  $7$ = temp11;
  switch ($7$) {
    case 1:
      $8$ = $uri(this);
      break;
    case 2:
      $8$ = $parent(this);
      break;
    case 0:
      $8$ = $prefix(this);
      break;
    default:throw new IndexOutOfBoundsException_1(boxToInteger(x$1).toString$());
  }
  return $8$;
}
;
_.productIterator = function productIterator_7(){
  return productIterator_0(this);
}
;
_.productPrefix = function productPrefix_11(){
  return 'NamespaceBinding';
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'SimpleEventBus$3', 803, Ljava_lang_Object_2_classLit), Lscala_Tuple2_2_classLit = createForClass('scala.', 'Tuple2', 907, Ljava_lang_Object_2_classLit), _3Lscala_Tuple2_2_classLit = createForArray('[Lscala.', 'Tuple2;', 1335, Lscala_Tuple2_2_classLit), Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ValueBoxBase', 691, Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit), Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextBoxBase', 690, Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit), Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextBox', 689, Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit), Lcom_google_gwt_user_client_ui_TextBoxBase$TextAlignConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextBoxBase$TextAlignConstant', 731, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment', 745, Ljava_lang_Enum_2_classLit, values_9, valueOf_8), _3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment;', 1337, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$1', 746, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null, null), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$2', 747, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null, null), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$3', 748, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null, null), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$4', 749, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null, null), Lcom_google_gwt_user_client_ui_ValueBoxBase$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ValueBoxBase$1', 744, Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_AutoDirectionHandler_2_classLit = createForClass('com.google.gwt.i18n.client.', 'AutoDirectionHandler', 161, Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_shared_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.shared.', 'DateTimeFormat', 169, Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.client.', 'DateTimeFormat', 168, Lcom_google_gwt_i18n_shared_DateTimeFormat_2_classLit), Lcom_google_gwt_i18n_client_DateTimeFormat$PredefinedFormat_2_classLit = createForEnum('com.google.gwt.i18n.client.', 'DateTimeFormat$PredefinedFormat', 170, Ljava_lang_Enum_2_classLit, values_4, valueOf_4), _3Lcom_google_gwt_i18n_client_DateTimeFormat$PredefinedFormat_2_classLit = createForArray('[Lcom.google.gwt.i18n.client.', 'DateTimeFormat$PredefinedFormat;', 1338, Lcom_google_gwt_i18n_client_DateTimeFormat$PredefinedFormat_2_classLit), Lcom_google_gwt_i18n_shared_DateTimeFormat$PatternPart_2_classLit = createForClass('com.google.gwt.i18n.shared.', 'DateTimeFormat$PatternPart', 207, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Button', 601, Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit), Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client.', 'Event$NativePreviewEvent', 567, Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display', 68, Ljava_lang_Enum_2_classLit, values_0, valueOf_0), _3Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Display;', 1340, Lcom_google_gwt_dom_client_Style$Display_2_classLit), Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow', 75, Ljava_lang_Enum_2_classLit, values_1, valueOf_1), _3Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Overflow;', 1341, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit), Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Position', 81, Ljava_lang_Enum_2_classLit, values_2, valueOf_2), _3Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Position;', 1342, Lcom_google_gwt_dom_client_Style$Position_2_classLit), Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$1', 70, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$2', 71, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$3', 72, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$4', 73, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow$1', 76, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow$2', 77, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow$3', 78, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow$4', 79, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Position$1', 82, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Position$2', 83, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Position$3', 84, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Position$4', 85, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null, null), Lcom_google_gwt_user_client_ui_PushButton_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PushButton', 703, Lcom_google_gwt_user_client_ui_CustomButton_2_classLit), Ljava_util_Date_2_classLit = createForClass('java.util.', 'Date', 211, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_MenuBar_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MenuBar', 675, Lcom_google_gwt_user_client_ui_Widget_2_classLit), Lcom_google_gwt_user_client_ui_MenuItem_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MenuItem', 682, Lcom_google_gwt_user_client_ui_UIObject_2_classLit), Lcom_google_gwt_user_client_ui_MenuBar$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MenuBar$1', 676, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_MenuBar$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MenuBar$2', 677, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel', 610, Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit), Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DecoratedPopupPanel', 609, Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit), Lcom_google_gwt_user_client_ui_MenuBar$3_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MenuBar$3', 678, Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2_classLit), Lcom_google_gwt_user_client_ui_MenuBar$4_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MenuBar$4', 679, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'PopupPanel$AnimationType', 696, Ljava_lang_Enum_2_classLit, values_8, valueOf_7), _3Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'PopupPanel$AnimationType;', 1351, Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit), Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$ResizeAnimation', 698, Lcom_google_gwt_animation_client_Animation_2_classLit), Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$ResizeAnimation$1', 699, Lcom_google_gwt_user_client_Timer_2_classLit), Lcom_google_gwt_user_client_ui_PopupPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$1', 692, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_PopupPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$2', 693, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_PopupPanel$3_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$3', 694, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_PopupPanel$4_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$4', 695, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_ScrollPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ScrollPanel', 714, Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit), Lcom_google_gwt_user_client_ui_SplitPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SplitPanel', 655, Lcom_google_gwt_user_client_ui_Panel_2_classLit), _3Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForArray('[Lcom.google.gwt.core.client.', 'JavaScriptObject$;', 1353, Lcom_google_gwt_core_client_JavaScriptObject_2_classLit), Lscala_collection_JavaConversions$_2_classLit = createForClass('scala.collection.', 'JavaConversions$', 966, Ljava_lang_Object_2_classLit), Lscala_Predef$ArrowAssoc_2_classLit = createForClass('scala.', 'Predef$ArrowAssoc', 901, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_MenuBar_1Resources_1default_1StaticClientBundleGenerator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MenuBar_Resources_default_StaticClientBundleGenerator', 680, Ljava_lang_Object_2_classLit), Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyEvent', 114, Lcom_google_gwt_event_dom_client_DomEvent_2_classLit), Lcom_google_gwt_event_dom_client_KeyCodeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyCodeEvent', 113, Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit), Lcom_google_gwt_event_dom_client_KeyUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyUpEvent', 117, Lcom_google_gwt_event_dom_client_KeyCodeEvent_2_classLit), Ljava_util_MissingResourceException_2_classLit = createForClass('java.util.', 'MissingResourceException', 878, Ljava_lang_RuntimeException_2_classLit), Lcom_google_gwt_user_client_ui_RadioButton_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RadioButton', 704, Lcom_google_gwt_user_client_ui_CheckBox_2_classLit), Lcom_google_gwt_i18n_shared_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.shared.', 'DefaultDateTimeFormatInfo', 174, Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.client.', 'DefaultDateTimeFormatInfo', 173, Lcom_google_gwt_i18n_shared_DefaultDateTimeFormatInfo_2_classLit), Lcom_google_gwt_i18n_client_impl_cldr_DateTimeFormatInfoImpl_2_classLit = createForClass('com.google.gwt.i18n.client.impl.cldr.', 'DateTimeFormatInfoImpl', 196, Lcom_google_gwt_i18n_client_DefaultDateTimeFormatInfo_2_classLit), Lcom_google_gwt_i18n_client_impl_cldr_DateTimeFormatInfoImpl_1en_2_classLit = createForClass('com.google.gwt.i18n.client.impl.cldr.', 'DateTimeFormatInfoImpl_en', 197, Lcom_google_gwt_i18n_client_impl_cldr_DateTimeFormatInfoImpl_2_classLit), Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom_2_classLit = createForClass('scala.collection.generic.', 'GenTraversableFactory$GenericCanBuildFrom', 1025, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_impl_TextBoxImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'TextBoxImpl', 776, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_impl_TextBoxImplIE6_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'TextBoxImplIE6', 777, Lcom_google_gwt_user_client_ui_impl_TextBoxImpl_2_classLit), Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass('com.google.gwt.text.shared.', 'AbstractRenderer', 535, Ljava_lang_Object_2_classLit), Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit = createForClass('com.google.gwt.text.shared.testing.', 'PassthroughRenderer', 537, Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit), Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit = createForClass('com.google.gwt.text.shared.testing.', 'PassthroughParser', 536, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_impl_PopupImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'PopupImpl', 771, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_impl_PopupImplIE6_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'PopupImplIE6', 772, Lcom_google_gwt_user_client_ui_impl_PopupImpl_2_classLit), Lscala_Some_2_classLit = createForClass('scala.', 'Some', 906, Lscala_Option_2_classLit), Lcom_google_gwt_event_dom_client_BlurEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'BlurEvent', 100, Lcom_google_gwt_event_dom_client_DomEvent_2_classLit), Lcom_google_gwt_event_dom_client_KeyDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyDownEvent', 115, Lcom_google_gwt_event_dom_client_KeyCodeEvent_2_classLit), Lcom_google_gwt_user_client_ui_ScrollImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ScrollImpl', 712, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_ScrollImpl$ScrollImplTrident_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ScrollImpl$ScrollImplTrident', 713, Lcom_google_gwt_user_client_ui_ScrollImpl_2_classLit), Lcom_google_gwt_i18n_client_BidiPolicy$BidiPolicyImpl_2_classLit = createForClass('com.google.gwt.i18n.client.', 'BidiPolicy$BidiPolicyImpl', 163, Ljava_lang_Object_2_classLit), Lscala_collection_MapLike$$anonfun$addString$1_2_classLit = createForClass('scala.collection.', 'MapLike$$anonfun$addString$1', 982, Lscala_runtime_AbstractFunction1_2_classLit), Lscala_collection_Map$_2_classLit = createForClass('scala.collection.', 'Map$', 977, Lscala_collection_generic_MapFactory_2_classLit), Lcom_google_gwt_user_client_BaseListenerWrapper_2_classLit = createForClass('com.google.gwt.user.client.', 'BaseListenerWrapper', 552, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_ListenerWrapper_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ListenerWrapper', 672, Lcom_google_gwt_user_client_BaseListenerWrapper_2_classLit), Lcom_google_gwt_user_client_ui_ListenerWrapper$WrappedPopupListener_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ListenerWrapper$WrappedPopupListener', 673, Lcom_google_gwt_user_client_ui_ListenerWrapper_2_classLit), Lscala_collection_mutable_Iterable$_2_classLit = createForClass('scala.collection.mutable.', 'Iterable$', 1184, Lscala_collection_generic_GenTraversableFactory_2_classLit), Lcom_google_gwt_touch_client_TouchScroller_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller', 541, Ljava_lang_Object_2_classLit), Lcom_google_gwt_touch_client_TouchScroller$TemporalPoint_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$TemporalPoint', 551, Ljava_lang_Object_2_classLit), Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$MomentumCommand', 548, Ljava_lang_Object_2_classLit), Lcom_google_gwt_touch_client_TouchScroller$MomentumTouchRemovalCommand_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$MomentumTouchRemovalCommand', 550, Ljava_lang_Object_2_classLit), Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand$1_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$MomentumCommand$1', 549, Ljava_lang_Object_2_classLit), Lcom_google_gwt_touch_client_TouchScroller$1_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$1', 542, Ljava_lang_Object_2_classLit), Lcom_google_gwt_touch_client_TouchScroller$2_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$2', 543, Ljava_lang_Object_2_classLit), Lcom_google_gwt_touch_client_TouchScroller$3_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$3', 544, Ljava_lang_Object_2_classLit), Lcom_google_gwt_touch_client_TouchScroller$4_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$4', 545, Ljava_lang_Object_2_classLit), Lcom_google_gwt_touch_client_TouchScroller$5_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$5', 546, Ljava_lang_Object_2_classLit), Lcom_google_gwt_touch_client_TouchScroller$6_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$6', 547, Ljava_lang_Object_2_classLit), Lscala_collection_GenMapLike$$anonfun$liftedTree1$1$1_2_classLit = createForClass('scala.collection.', 'GenMapLike$$anonfun$liftedTree1$1$1', 919, Lscala_runtime_AbstractFunction1_2_classLit), Lscala_collection_MapLike$$anonfun$filterNot$1_2_classLit = createForClass('scala.collection.', 'MapLike$$anonfun$filterNot$1', 983, Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_i18n_client_TimeZone_2_classLit = createForClass('com.google.gwt.i18n.client.', 'TimeZone', 180, Ljava_lang_Object_2_classLit), Lcom_google_gwt_event_dom_client_TouchEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'TouchEvent', 126, Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit), Lcom_google_gwt_event_dom_client_TouchStartEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'TouchStartEvent', 130, Lcom_google_gwt_event_dom_client_TouchEvent_2_classLit), Lcom_google_gwt_event_dom_client_TouchEvent$TouchSupportDetector_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'TouchEvent$TouchSupportDetector', 128, Ljava_lang_Object_2_classLit), Lcom_google_gwt_event_dom_client_TouchMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'TouchMoveEvent', 129, Lcom_google_gwt_event_dom_client_TouchEvent_2_classLit), Lcom_google_gwt_event_dom_client_TouchEndEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'TouchEndEvent', 127, Lcom_google_gwt_event_dom_client_TouchEvent_2_classLit), Lcom_google_gwt_event_dom_client_TouchCancelEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'TouchCancelEvent', 125, Lcom_google_gwt_event_dom_client_TouchEvent_2_classLit), Lscala_runtime_StringAdd_2_classLit = createForClass('scala.runtime.', 'StringAdd', 1298, Ljava_lang_Object_2_classLit), Lscala_collection_Iterator$$anon$19_2_classLit = createForClass('scala.collection.', 'Iterator$$anon$19', 959, Ljava_lang_Object_2_classLit), Lscala_collection_MapLike$DefaultKeySet_2_classLit = createForClass('scala.collection.', 'MapLike$DefaultKeySet', 984, Ljava_lang_Object_2_classLit), Lscala_collection_JavaConversions$JIteratorWrapper_2_classLit = createForClass('scala.collection.', 'JavaConversions$JIteratorWrapper', 968, Ljava_lang_Object_2_classLit), Lscala_collection_immutable_Iterable$_2_classLit = createForClass('scala.collection.immutable.', 'Iterable$', 1066, Lscala_collection_generic_GenTraversableFactory_2_classLit), Lcom_google_gwt_touch_client_DefaultMomentum_2_classLit = createForClass('com.google.gwt.touch.client.', 'DefaultMomentum', 538, Ljava_lang_Object_2_classLit), Lcom_google_gwt_touch_client_Momentum$State_2_classLit = createForClass('com.google.gwt.touch.client.', 'Momentum$State', 539, Ljava_lang_Object_2_classLit), Lscala_Product$$anon$1_2_classLit = createForClass('scala.', 'Product$$anon$1', 902, Ljava_lang_Object_2_classLit), Lcom_google_gwt_touch_client_Point_2_classLit = createForClass('com.google.gwt.touch.client.', 'Point', 540, Ljava_lang_Object_2_classLit), Lscala_collection_immutable_WrappedString_2_classLit = createForClass('scala.collection.immutable.', 'WrappedString', 1141, Ljava_lang_Object_2_classLit), Lscala_collection_immutable_WrappedString$_2_classLit = createForClass('scala.collection.immutable.', 'WrappedString$', 1142, Ljava_lang_Object_2_classLit), Lscala_collection_immutable_WrappedString$$anonfun$newBuilder$1_2_classLit = createForClass('scala.collection.immutable.', 'WrappedString$$anonfun$newBuilder$1', 1143, Lscala_runtime_AbstractFunction1_2_classLit), Lscala_collection_mutable_Builder$$anon$1_2_classLit = createForClass('scala.collection.mutable.', 'Builder$$anon$1', 1155, Ljava_lang_Object_2_classLit);
$entry(onLoad)(37);
