_ = JavaConversions$Siterator.prototype;
_.map_0 = function map_0(f){
  return map_9(this, f);
}
;
_ = ShowcaseConstants_.prototype;
_.cwAbsolutePanelClickMe = function cwAbsolutePanelClickMe(){
  return 'Click Me!';
}
;
_.cwAbsolutePanelHelloWorld = function cwAbsolutePanelHelloWorld(){
  return 'Hello World';
}
;
_.cwAbsolutePanelItemsToMove = function cwAbsolutePanelItemsToMove(){
  return '<b>Items to move:<\/b>';
}
;
_.cwAbsolutePanelLeft = function cwAbsolutePanelLeft(){
  return '<b>Left:<\/b>';
}
;
_.cwAbsolutePanelTop = function cwAbsolutePanelTop(){
  return '<b>Top:<\/b>';
}
;
_.cwAbsolutePanelWidgetNames = function cwAbsolutePanelWidgetNames(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwAbsolutePanelWidgetNames'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Hello World', 'Button', 'Grid']);
    this.cache.put('cwAbsolutePanelWidgetNames', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
function $absolutePanel_$eq(this$static, x$1){
  this$static.absolutePanel$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$panels$CwAbsolutePanel$$repositionItem(this$static){
  var $e0, item, left, name_0, top_0;
  name_0 = $getValue_4($com$google$gwt$sample$showcase$client$content$panels$CwAbsolutePanel$$listBox(this$static), $getSelectedIndex_0($com$google$gwt$sample$showcase$client$content$panels$CwAbsolutePanel$$listBox(this$static)));
  item = dynamicCast($widgetMap(this$static).get_2(name_0).get_1(), Q$Widget);
  try {
    top_0 = parseInt_0($getText_1($topPosBox(this$static)));
    left = parseInt_0($getText_1($leftPosBox(this$static)));
    $setWidgetPosition($absolutePanel(this$static), item, left, top_0);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$NumberFormatException)) {
      $e0;
    }
     else 
      throw $e0;
  }
}

function $createOptionsBar_0(this$static){
  var optionsBar, repositionHandler;
  optionsBar = new FlexTable_0;
  $topPosBox_$eq(this$static, new TextBox_0);
  $topPosBox(this$static).setWidth('3em');
  $setText_8($topPosBox(this$static), '100');
  $leftPosBox_$eq(this$static, new TextBox_0);
  $leftPosBox(this$static).setWidth('3em');
  $setText_8($leftPosBox(this$static), '60');
  $setHTML_2(optionsBar, 0, 0, this$static.constants.cwAbsolutePanelItemsToMove());
  $setWidget_2(optionsBar, 0, 1, $com$google$gwt$sample$showcase$client$content$panels$CwAbsolutePanel$$listBox(this$static));
  $setHTML_2(optionsBar, 1, 0, this$static.constants.cwAbsolutePanelTop());
  $setWidget_2(optionsBar, 1, 1, $topPosBox(this$static));
  $setHTML_2(optionsBar, 2, 0, this$static.constants.cwAbsolutePanelLeft());
  $setWidget_2(optionsBar, 2, 1, $leftPosBox(this$static));
  $widgetMap(this$static).keys_0().foreach(new CwAbsolutePanel$$anonfun$createOptionsBar$1_0(this$static));
  $addChangeHandler($com$google$gwt$sample$showcase$client$content$panels$CwAbsolutePanel$$listBox(this$static), new CwAbsolutePanel$$anon$2_0(this$static));
  repositionHandler = new CwAbsolutePanel$$anon$3_0(this$static);
  $addKeyUpHandler($topPosBox(this$static), repositionHandler);
  $addKeyUpHandler($leftPosBox(this$static), repositionHandler);
  return optionsBar;
}

function $leftPosBox_$eq(this$static, x$1){
  this$static.leftPosBox$u0020 = x$1;
}

function $onInitialize_13(this$static){
  var absolutePanelWrapper, button, grid$1, mainLayout, optionsWrapper, text, widgetNames;
  $widgetMap_$eq(this$static, new LinkedHashMap_0);
  $absolutePanel_$eq(this$static, new AbsolutePanel_0);
  $absolutePanel(this$static).setSize('250px', '250px');
  $ensureDebugId($absolutePanel(this$static), 'cwAbsolutePanel');
  widgetNames = this$static.constants.cwAbsolutePanelWidgetNames();
  text = new HTML_1(this$static.constants.cwAbsolutePanelHelloWorld());
  $add_5($absolutePanel(this$static), text, 10, 20);
  $widgetMap(this$static).put_0(widgetNames[0], text);
  button = new Button_1(this$static.constants.cwAbsolutePanelClickMe());
  $add_5($absolutePanel(this$static), button, 80, 45);
  $widgetMap(this$static).put_0(widgetNames[1], button);
  grid$1 = new Grid_1(2, 3);
  $setBorderWidth(grid$1, 1);
  $foreach($until_0($intWrapper(($clinit_Predef$() , MODULE$_12 , 0)), 3), new CwAbsolutePanel$$anonfun$onInitialize$1_0(grid$1));
  $add_5($absolutePanel(this$static), grid$1, 60, 100);
  $widgetMap(this$static).put_0(widgetNames[2], grid$1);
  absolutePanelWrapper = new DecoratorPanel_0;
  absolutePanelWrapper.setWidget($absolutePanel(this$static));
  optionsWrapper = new DecoratorPanel_0;
  optionsWrapper.setWidget($createOptionsBar_0(this$static));
  mainLayout = new HorizontalPanel_0;
  $setSpacing(mainLayout, 10);
  $add_11(mainLayout, optionsWrapper);
  $add_11(mainLayout, absolutePanelWrapper);
  return mainLayout;
}

function $topPosBox_$eq(this$static, x$1){
  this$static.topPosBox$u0020 = x$1;
}

function $widgetMap_$eq(this$static, x$1){
  this$static.widgetMap$u0020 = x$1;
}

function $$init_400(){
}

function CwAbsolutePanel$$anon$2_0($outer){
  $$init_400();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
}

function CwAbsolutePanel$$anon$2(){
}

_ = CwAbsolutePanel$$anon$2_0.prototype = CwAbsolutePanel$$anon$2.prototype = new Object_0;
_.getClass$ = function getClass_401(){
  return Lcom_google_gwt_sample_showcase_client_content_panels_CwAbsolutePanel$$anon$2_2_classLit;
}
;
_.onChange = function onChange_2(event_0){
  $com$google$gwt$sample$showcase$client$content$panels$CwAbsolutePanel$$updateSelectedItem(this.$outer$u0020);
}
;
_.castableTypeMap$ = makeCastMap([Q$ChangeHandler, Q$EventHandler]);
_.$outer$u0020 = null;
function $$init_401(){
}

function CwAbsolutePanel$$anon$3_0($outer){
  $$init_401();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
}

function CwAbsolutePanel$$anon$3(){
}

_ = CwAbsolutePanel$$anon$3_0.prototype = CwAbsolutePanel$$anon$3.prototype = new Object_0;
_.getClass$ = function getClass_402(){
  return Lcom_google_gwt_sample_showcase_client_content_panels_CwAbsolutePanel$$anon$3_2_classLit;
}
;
_.onKeyUp = function onKeyUp_8(event_0){
  $com$google$gwt$sample$showcase$client$content$panels$CwAbsolutePanel$$repositionItem(this.$outer$u0020);
}
;
_.castableTypeMap$ = makeCastMap([Q$KeyUpHandler, Q$EventHandler]);
_.$outer$u0020 = null;
_ = CwAbsolutePanel$$anon$4.prototype;
_.onSuccess = function onSuccess_14(){
  this.callback$1.onSuccess_0($onInitialize_13(this.$outer$u0020));
}
;
function $$init_403(){
}

function $apply_45(this$static, name_0){
  $addItem($com$google$gwt$sample$showcase$client$content$panels$CwAbsolutePanel$$listBox(this$static.$outer$u0020), name_0);
}

function CwAbsolutePanel$$anonfun$createOptionsBar$1_0($outer){
  $$init_403();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  AbstractFunction1_0.call(this);
}

function CwAbsolutePanel$$anonfun$createOptionsBar$1(){
}

_ = CwAbsolutePanel$$anonfun$createOptionsBar$1_0.prototype = CwAbsolutePanel$$anonfun$createOptionsBar$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_46(v1){
  $apply_45(this, dynamicCast(v1, Q$String));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_404(){
  return Lcom_google_gwt_sample_showcase_client_content_panels_CwAbsolutePanel$$anonfun$createOptionsBar$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.$outer$u0020 = null;
function $$init_404(){
}

function $apply_46(this$static, i){
  $setHTML_2(this$static.grid$1, 0, i, i + '');
  $setWidget_2(this$static.grid$1, 1, i, new Image_1($images(($clinit_Showcase$() , MODULE$_4)).gwtLogoThumb()));
}

function CwAbsolutePanel$$anonfun$onInitialize$1_0(grid$1){
  $$init_404();
  this.grid$1 = grid$1;
  AbstractFunction1_0.call(this);
}

function CwAbsolutePanel$$anonfun$onInitialize$1(){
}

_ = CwAbsolutePanel$$anonfun$onInitialize$1_0.prototype = CwAbsolutePanel$$anonfun$onInitialize$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_47(v1){
  $apply_46(this, unboxToInt(v1));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_405(){
  return Lcom_google_gwt_sample_showcase_client_content_panels_CwAbsolutePanel$$anonfun$onInitialize$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.grid$1 = null;
function $add_5(this$static, w, left, top_0){
  var beforeIndex;
  $removeFromParent(w);
  beforeIndex = $getWidgetCount(this$static);
  this$static.setWidgetPositionImpl(w, left, top_0);
  $insert_0(this$static, w, beforeIndex);
  $verifyPositionNotStatic(this$static, w);
}

function $insert_0(this$static, w, beforeIndex){
  $insert(this$static, w, $getElement(this$static), beforeIndex, true);
}

function $isDefined(this$static){
  return !this$static.isEmpty();
}

_ = Product$$anon$1.prototype;
_.map_0 = function map_1(f){
  return map_9(this, f);
}
;
function $$init_795(){
}

function $apply_73(this$static, x0$1){
  var $2$, k, temp1, temp5, temp6;
  temp5 = x0$1;
  if (isNotNull(temp5)) {
    temp6 = $_1(temp5);
    k = temp6;
    temp1 = this$static.that$1.get_2(k);
    $2$ = instanceOf(temp1, Q$Some) && equals_85($_2(temp5), $x_0(dynamicCast(temp1, Q$Some)));
  }
   else {
    throw new MatchError_0(temp5);
  }
  return $2$;
}

function GenMapLike$$anonfun$liftedTree1$1$1_0(that$1){
  $$init_795();
  this.that$1 = that$1;
  AbstractFunction1_0.call(this);
}

function GenMapLike$$anonfun$liftedTree1$1$1(){
}

_ = GenMapLike$$anonfun$liftedTree1$1$1_0.prototype = GenMapLike$$anonfun$liftedTree1$1$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_77(v1){
  return boxToBoolean($apply_73(this, dynamicCast(v1, Q$Tuple2)));
}
;
_.getClass$ = function getClass_797(){
  return Lscala_collection_GenMapLike$$anonfun$liftedTree1$1$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.that$1 = null;
function $init$_23(){
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
  return $symmetricHash(($clinit_MurmurHash$() , MODULE$_55), $this.seq_2(), $hashSeed(($clinit_Map$() , MODULE$_14)));
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
      $println(($clinit_Predef$() , MODULE$_12));
      exceptionResult1 = false;
    }
     else 
      throw $e0;
  }
  return exceptionResult1;
}

_ = IndexedSeqLike$Elements.prototype;
_.map_0 = function map_2(f){
  return map_9(this, f);
}
;
_ = Iterator$$anon$12.prototype;
_.map_0 = function map_3(f){
  return map_9(this, f);
}
;
_ = Iterator$$anon$18.prototype;
_.map_0 = function map_4(f){
  return map_9(this, f);
}
;
function $$init_805(){
}

function Iterator$$anon$19_0($outer, f$2){
  $$init_805();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.f$2 = f$2;
  Object_1.call(this);
  $init$_36();
  $init$_62();
  $init$_48();
}

function Iterator$$anon$19(){
}

_ = Iterator$$anon$19_0.prototype = Iterator$$anon$19.prototype = new Object_0;
_.$div$colon = function $div$colon_4(z, op){
  return $div$colon_14(this, z, op);
}
;
_.addString = function addString_4(b, start, sep, end){
  return addString_15(this, b, start, sep, end);
}
;
_.copyToArray = function copyToArray_11(xs, start){
  copyToArray_32(this, xs, start);
}
;
_.copyToArray_0 = function copyToArray_12(xs, start, len){
  copyToArray_19(this, xs, start, len);
}
;
_.copyToBuffer = function copyToBuffer_4(dest){
  copyToBuffer_14(this, dest);
}
;
_.drop = function drop_7(n){
  return drop_11(this, n);
}
;
_.filter = function filter_5(p){
  return filter_9(this, p);
}
;
_.foldLeft = function foldLeft_5(z, op){
  return foldLeft_16(this, z, op);
}
;
_.forall = function forall_6(p){
  return forall_10(this, p);
}
;
_.foreach = function foreach_8(f){
  foreach_12(this, f);
}
;
_.getClass$ = function getClass_807(){
  return Lscala_collection_Iterator$$anon$19_2_classLit;
}
;
_.hasNext = function hasNext_18(){
  return this.$outer$u0020.hasNext();
}
;
_.isEmpty = function isEmpty_14(){
  return isEmpty_18(this);
}
;
_.isTraversableAgain = function isTraversableAgain_5(){
  return isTraversableAgain_9();
}
;
_.map_0 = function map_5(f){
  return map_9(this, f);
}
;
_.mkString = function mkString_9(sep){
  return mkString_29(this, sep);
}
;
_.mkString_0 = function mkString_10(start, sep, end){
  return mkString_30(this, start, sep, end);
}
;
_.next_0 = function next_19(){
  return this.f$2.apply_0(this.$outer$u0020.next_0());
}
;
_.nonEmpty = function nonEmpty_4(){
  return nonEmpty_14(this);
}
;
_.seq = function seq_9(){
  return seq_17(this);
}
;
_.seq_0 = function seq_10(){
  return this.seq();
}
;
_.size_1 = function size_23(){
  return size_34(this);
}
;
_.slice_0 = function slice_6(from, until){
  return slice_10(this, from, until);
}
;
_.take = function take_7(n){
  return take_11(this, n);
}
;
_.toArray_1 = function toArray_14(evidence$1){
  return toArray_24(this, evidence$1);
}
;
_.toBuffer = function toBuffer_5(){
  return toBuffer_17(this);
}
;
_.toList = function toList_4(){
  return toList_14(this);
}
;
_.toSeq = function toSeq_4(){
  return toSeq_17(this);
}
;
_.toSet = function toSet_4(){
  return toSet_14(this);
}
;
_.toStream = function toStream_5(){
  return toStream_9(this);
}
;
_.toString$ = function toString_61(){
  return toString_66(this);
}
;
_.zip = function zip_7(that){
  return zip_11(this, that);
}
;
_.castableTypeMap$ = makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]);
_.$outer$u0020 = null;
_.f$2 = null;
_ = Iterator$$anon$22.prototype;
_.map_0 = function map_6(f){
  return map_9(this, f);
}
;
_ = Iterator$$anon$3.prototype;
_.map_0 = function map_7(f){
  return map_9(this, f);
}
;
_ = Iterator$$anon$5.prototype;
_.map_0 = function map_8(f){
  return map_9(this, f);
}
;
function map_9($this, f$2){
  return new Iterator$$anon$19_0($this, f$2);
}

_ = LinearSeqLike$$anon$1.prototype;
_.map_0 = function map_10(f){
  return map_9(this, f);
}
;
function $clinit_Map$(){
  $clinit_Map$ = nullMethod;
  MODULE$_14 = new Map$_0;
}

function $$init_814(){
}

function $hashSeed(this$static){
  return this$static.hashSeed$u0020;
}

function Map$_0(){
  $$init_814();
  MapFactory_0.call(this);
  this.hashSeed$u0020 = $hashCode_4('Map');
}

function Map$(){
}

_ = Map$_0.prototype = Map$.prototype = new MapFactory;
_.getClass$ = function getClass_816(){
  return Lscala_collection_Map$_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$ScalaObject]);
_.hashSeed$u0020 = 0;
var MODULE$_14;
function $init$_52(){
}

function $$init_815(){
}

function $apply_80(x0$1){
  var $11$, temp33;
  temp33 = x0$1;
  if (isNotNull(temp33)) {
    $11$ = $$plus_7($any2stringadd(($clinit_Predef$() , MODULE$_12 , $_1(temp33))), ' -> ') + $_2(temp33);
  }
   else {
    throw new MatchError_0(temp33);
  }
  return $11$;
}

function MapLike$$anonfun$addString$1_0(){
  $$init_815();
  AbstractFunction1_0.call(this);
}

function MapLike$$anonfun$addString$1(){
}

_ = MapLike$$anonfun$addString$1_0.prototype = MapLike$$anonfun$addString$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_92(v1){
  return $apply_80(dynamicCast(v1, Q$Tuple2));
}
;
_.getClass$ = function getClass_817(){
  return Lscala_collection_MapLike$$anonfun$addString$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
function $$init_816(){
}

function $apply_81(this$static, kv){
  unboxToBoolean(this$static.p$2.apply_0(kv)) && (this$static.res$1.elem = dynamicCast(this$static.res$1.elem, Q$Map_0).$minus($_1(kv)));
}

function MapLike$$anonfun$filterNot$1_0(p$2, res$1){
  $$init_816();
  this.p$2 = p$2;
  this.res$1 = res$1;
  AbstractFunction1_0.call(this);
}

function MapLike$$anonfun$filterNot$1(){
}

_ = MapLike$$anonfun$filterNot$1_0.prototype = MapLike$$anonfun$filterNot$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_93(v1){
  $apply_81(this, dynamicCast(v1, Q$Tuple2));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_818(){
  return Lscala_collection_MapLike$$anonfun$filterNot$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.p$2 = null;
_.res$1 = null;
function $$init_817(){
}

function $scala$collection$MapLike$DefaultKeySet$$$outer(this$static){
  return this$static.$outer$u0020;
}

function MapLike$DefaultKeySet_0($outer){
  $$init_817();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
  $init$_7();
  $init$_36();
  $init$_62();
  $init$_35();
  $init$_61();
  $init$_68();
  $init$_34();
  $init$_60();
  $init$_17();
  $init$_16();
  $init$_45();
  $init$_44();
  $init$_33();
  $init$_67();
  $init$_32();
  $init$_73();
  $init$_59();
  $init$_58();
}

function MapLike$DefaultKeySet(){
}

_ = MapLike$DefaultKeySet_0.prototype = MapLike$DefaultKeySet.prototype = new Object_0;
_.$div$colon = function $div$colon_9(z, op){
  return $div$colon_14(this, z, op);
}
;
_.$minus_0 = function $minus_0(elem){
  return dynamicCast(($clinit_Set$() , MODULE$_16).apply_8(($clinit_Nil$() , MODULE$_25)), Q$SetLike).$plus$plus(this).$minus_0(elem);
}
;
_.$plus$plus = function $plus$plus(elems){
  return $plus$plus_0(this, elems);
}
;
_.$plus = function $plus_0(elem){
  return dynamicCast(($clinit_Set$() , MODULE$_16).apply_8(($clinit_Nil$() , MODULE$_25)), Q$SetLike).$plus$plus(this).$plus(elem);
}
;
_.addString = function addString_9(b, start, sep, end){
  return addString_15(this, b, start, sep, end);
}
;
_.apply$mcII$sp = function apply$mcII$sp_3(v1){
  return apply$mcII$sp_0(this, v1);
}
;
_.apply$mcVI$sp = function apply$mcVI$sp_4(v1){
  apply$mcVI$sp_0(this, v1);
}
;
_.apply_0 = function apply_94(v1){
  return boxToBoolean(this.apply_7(v1));
}
;
_.apply_7 = function apply_95(elem){
  return apply_87(this, elem);
}
;
_.canEqual = function canEqual_3(that){
  return canEqual_2();
}
;
_.companion = function companion(){
  return companion_5();
}
;
_.contains_0 = function contains_13(key){
  return $scala$collection$MapLike$DefaultKeySet$$$outer(this).contains_0(key);
}
;
_.copyToArray = function copyToArray_22(xs, start){
  copyToArray_32(this, xs, start);
}
;
_.copyToArray_0 = function copyToArray_23(xs, start, len){
  copyToArray_6(this, xs, start, len);
}
;
_.copyToBuffer = function copyToBuffer_9(dest){
  copyToBuffer_14(this, dest);
}
;
_.drop_0 = function drop_13(n){
  return drop_3(this, n);
}
;
_.empty_0 = function empty_0(){
  return empty_4(this);
}
;
_.empty_1 = function empty_1(){
  return dynamicCast(this.empty_0(), Q$Set_0);
}
;
_.equals$ = function equals_32(that){
  return equals_31(this, that);
}
;
_.filter_0 = function filter_11(p){
  return filter_20(this, p);
}
;
_.filterNot_0 = function filterNot(p){
  return filterNot_5(this, p);
}
;
_.foldLeft = function foldLeft_11(z, op){
  return foldLeft_16(this, z, op);
}
;
_.forall = function forall_13(p){
  return forall_3(this, p);
}
;
_.foreach = function foreach_15(f$1){
  dynamicCast($scala$collection$MapLike$DefaultKeySet$$$outer(this).filter_0(new MapLike$DefaultKeySet$$anonfun$foreach$1_0), Q$IterableLike).foreach(new MapLike$DefaultKeySet$$anonfun$foreach$2_0(f$1));
}
;
_.genericBuilder = function genericBuilder(){
  return genericBuilder_4(this);
}
;
_.getClass$ = function getClass_819(){
  return Lscala_collection_MapLike$DefaultKeySet_2_classLit;
}
;
_.hashCode$ = function hashCode_41(){
  return hashCode_40(this);
}
;
_.head = function head_1(){
  return head_0(this);
}
;
_.isEmpty = function isEmpty_20(){
  return isEmpty_26(this);
}
;
_.isTraversableAgain = function isTraversableAgain_11(){
  return isTraversableAgain_1();
}
;
_.iterator_1 = function iterator_26(){
  return $scala$collection$MapLike$DefaultKeySet$$$outer(this).keysIterator();
}
;
_.mkString = function mkString_19(sep){
  return mkString_29(this, sep);
}
;
_.mkString_0 = function mkString_20(start, sep, end){
  return mkString_30(this, start, sep, end);
}
;
_.newBuilder = function newBuilder(){
  return newBuilder_6(this);
}
;
_.nonEmpty = function nonEmpty_9(){
  return nonEmpty_14(this);
}
;
_.repr = function repr_0(){
  return repr_5(this);
}
;
_.sameElements = function sameElements_2(that){
  return sameElements_0(this, that);
}
;
_.seq_1 = function seq_20(){
  return this.seq_3();
}
;
_.seq_3 = function seq_21(){
  return seq_36(this);
}
;
_.seq_0 = function seq_22(){
  return this.seq_3();
}
;
_.size_1 = function size_28(){
  return $scala$collection$MapLike$DefaultKeySet$$$outer(this).size_1();
}
;
_.stringPrefix = function stringPrefix(){
  return stringPrefix_6();
}
;
_.subsetOf = function subsetOf_0(that){
  return subsetOf(this, that);
}
;
_.tail = function tail_1(){
  return tail_6(this);
}
;
_.take_0 = function take_13(n){
  return take_3(this, n);
}
;
_.toArray_1 = function toArray_19(evidence$1){
  return toArray_24(this, evidence$1);
}
;
_.toBuffer = function toBuffer_10(){
  return toBuffer_16(this);
}
;
_.toList = function toList_9(){
  return toList_14(this);
}
;
_.toSeq = function toSeq_9(){
  return toSeq_16(this);
}
;
_.toSet = function toSet_9(){
  return toSet_14(this);
}
;
_.toStream = function toStream_11(){
  return toStream_2(this);
}
;
_.toString$ = function toString_68(){
  return toString_76(this);
}
;
_.zip_0 = function zip_13(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_2(bf){
  return zipWithIndex_0(this, bf);
}
;
_.castableTypeMap$ = makeCastMap([Q$Equals, Q$Function1, Q$ScalaObject, Q$GenIterable, Q$GenIterableLike, Q$GenSet, Q$GenSetLike, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Set_0, Q$SetLike, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericSetTemplate, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Subtractable]);
_.$outer$u0020 = null;
function $$init_818(){
}

function $apply_82(check$ifrefutable$1){
  var temp9;
  temp9 = check$ifrefutable$1;
  return isNotNull(temp9);
}

function MapLike$DefaultKeySet$$anonfun$foreach$1_0(){
  $$init_818();
  AbstractFunction1_0.call(this);
}

function MapLike$DefaultKeySet$$anonfun$foreach$1(){
}

_ = MapLike$DefaultKeySet$$anonfun$foreach$1_0.prototype = MapLike$DefaultKeySet$$anonfun$foreach$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_96(v1){
  return boxToBoolean($apply_82(dynamicCast(v1, Q$Tuple2)));
}
;
_.getClass$ = function getClass_820(){
  return Lscala_collection_MapLike$DefaultKeySet$$anonfun$foreach$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
function $$init_819(){
}

function $apply_83(this$static, x$1){
  var $5$, temp12;
  temp12 = x$1;
  if (isNotNull(temp12)) {
    $5$ = this$static.f$1.apply_0($_1(temp12));
  }
   else {
    throw new MatchError_0(temp12);
  }
  return $5$;
}

function MapLike$DefaultKeySet$$anonfun$foreach$2_0(f$1){
  $$init_819();
  this.f$1 = f$1;
  AbstractFunction1_0.call(this);
}

function MapLike$DefaultKeySet$$anonfun$foreach$2(){
}

_ = MapLike$DefaultKeySet$$anonfun$foreach$2_0.prototype = MapLike$DefaultKeySet$$anonfun$foreach$2.prototype = new AbstractFunction1;
_.apply_0 = function apply_97(v1){
  return $apply_83(this, dynamicCast(v1, Q$Tuple2));
}
;
_.getClass$ = function getClass_821(){
  return Lscala_collection_MapLike$DefaultKeySet$$anonfun$foreach$2_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.f$1 = null;
function $init$_53(){
}

function addString_10($this, b, start, sep, end){
  return $this.iterator_1().map_0(new MapLike$$anonfun$addString$1_0).addString(b, start, sep, end);
}

function apply_98($this, key){
  var $3$, $4$, temp5;
  temp5 = $this.get_2(key);
  if (equals_85(($clinit_None$() , MODULE$_10), temp5)) {
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

function contains_14($this, key){
  return $isDefined($this.get_2(key));
}

function default_$(key){
  throw new NoSuchElementException_1('key not found: ' + key);
}

function filterNot_0($this, p$2){
  var res$1;
  res$1 = new ObjectRef_0(dynamicCast($this.repr(), Q$Map_0));
  $this.foreach(new MapLike$$anonfun$filterNot$1_0(p$2, res$1));
  return dynamicCast(res$1.elem, Q$Map_0);
}

function isEmpty_21($this){
  return $this.size_1() == 0;
}

function keySet_3($this){
  return new MapLike$DefaultKeySet_0($this);
}

function keys_0($this){
  return $this.keySet_1();
}

function stringPrefix_0(){
  return 'Map';
}

function toBuffer_11($this){
  var result;
  result = new ArrayBuffer_1($this.size_1());
  $this.copyToBuffer(result);
  return result;
}

function toSeq_10($this){
  return $this.toBuffer();
}

function toString_69($this){
  return toString_77($this);
}

function companion_5(){
  return $clinit_Set$() , MODULE$_16;
}

function seq_36($this){
  return $this;
}

function $$init_847(){
}

function MutableMapFactory_0(){
  $$init_847();
  MapFactory_0.call(this);
}

function MutableMapFactory(){
}

_ = MutableMapFactory.prototype = new MapFactory;
_.getClass$ = function getClass_849(){
  return Lscala_collection_generic_MutableMapFactory_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$ScalaObject]);
_ = TrieIterator.prototype;
_.map_0 = function map_11(f){
  return map_9(this, f);
}
;
_ = ListSet$$anon$1.prototype;
_.map_0 = function map_12(f){
  return map_9(this, f);
}
;
_ = StreamIterator.prototype;
_.map_0 = function map_13(f){
  return map_9(this, f);
}
;
_ = VectorIterator.prototype;
_.map_0 = function map_14(f){
  return map_9(this, f);
}
;
_ = FlatHashTable$$anon$1.prototype;
_.map_0 = function map_15(f){
  return map_9(this, f);
}
;
function $init$_91(){
}

function $capacity_1(this$static, expectedSize){
  var $1$;
  expectedSize == 0?($1$ = 1):($1$ = $powerOfTwo(expectedSize));
  return $1$;
}

function $defaultLoadFactor_0(){
  return 750;
}

function $initialCapacity(this$static){
  return $capacity_1(this$static, $initialSize_0());
}

function $initialSize_0(){
  return 16;
}

function $initialThreshold(this$static, _loadFactor){
  return $newThreshold_0(this$static, _loadFactor, $initialCapacity(this$static));
}

function $loadFactorDenum_0(){
  return 1000;
}

function $newThreshold_0(this$static, _loadFactor, size){
  return narrow_int(mul(fromInt(size), fromInt(_loadFactor)) / $loadFactorDenum_0());
}

function $init$_92(){
}

function elemHashCode_1(key){
  return $hash_1(($clinit_ScalaRunTime$() , MODULE$_54 , key));
}

function improve_1(hcode){
  var i;
  i = hcode * -1640532531;
  i = reverseBytes(i);
  return i * -1640532531;
}

function sizeMapBucketBitSize_1(){
  return 5;
}

function $init$_93($this){
  $this._loadFactor_$eq($defaultLoadFactor_0(($clinit_HashTable$() , MODULE$_39)));
  $this.table_$eq_0(initDim(_3Lscala_collection_mutable_HashEntry_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$ScalaObject_$1]), Q$HashEntry, $initialCapacity(($clinit_HashTable$() , MODULE$_39)), 0));
  $this.tableSize_$eq(0);
  $this.threshold_$eq($initialThreshold(($clinit_HashTable$() , MODULE$_39), $this._loadFactor()));
  $this.sizemap_$eq(null);
}

function addEntry_1($this, e){
  var h_0;
  h_0 = $this.index_2($this.elemHashCode(e.key_0()));
  e.next_$eq($this.table_1()[h_0]);
  setCheck($this.table_1(), h_0, e);
  $this.tableSize_$eq($this.tableSize() + 1);
  $this.nnSizeMapAdd(h_0);
  $this.tableSize() > $this.threshold() && resize($this, 2 * $this.table_1().length);
}

function calcSizeMapSize_1($this, tableLength){
  return (tableLength >>> $this.sizeMapBucketBitSize()) + 1;
}

function elemEquals(key1, key2){
  return equals_85(key1, key2);
}

function findEntry($this, key){
  var e, h_0;
  h_0 = $this.index_2($this.elemHashCode(key));
  e = $this.table_1()[h_0];
  while$2: while (true) {
    if (isNotNull(e) && !$this.elemEquals(e.key_0(), key)) {
      e = dynamicCast(e.next_0(), Q$HashEntry);
      continue while$2;
    }
    break;
  }
  return e;
}

function index_4($this, hcode){
  var improved, ones, shifted;
  ones = $this.table_1().length - 1;
  improved = $this.improve(hcode);
  shifted = improved >>> 32 - bitCount(ones) & ones;
  return shifted;
}

function nnSizeMapAdd_1($this, h_0){
  var ev$1, ev$2;
  if (jsNotEquals($this.sizemap(), null)) {
    ev$1 = $this.sizemap();
    ev$2 = h_0 >>> $this.sizeMapBucketBitSize();
    ev$1[ev$2] = ev$1[ev$2] + 1;
  }
}

function nnSizeMapRemove_1($this, h_0){
  var ev$3, ev$4;
  if (jsNotEquals($this.sizemap(), null)) {
    ev$3 = $this.sizemap();
    ev$4 = h_0 >>> $this.sizeMapBucketBitSize();
    ev$3[ev$4] = ev$3[ev$4] - 1;
  }
}

function nnSizeMapReset_1($this, tableLength){
  var nsize;
  if (jsNotEquals($this.sizemap(), null)) {
    nsize = $this.calcSizeMapSize(tableLength);
    $this.sizemap().length != nsize?$this.sizemap_$eq(initDim(_3I_classLit, makeCastMap([Q$int_$1, Q$Serializable]), -1, nsize, 1)):fill($this.sizemap(), 0);
  }
}

function removeEntry_1($this, key){
  var e, e1, h_0;
  h_0 = $this.index_2($this.elemHashCode(key));
  e = $this.table_1()[h_0];
  if (isNotNull(e)) {
    if ($this.elemEquals(e.key_0(), key)) {
      setCheck($this.table_1(), h_0, dynamicCast(e.next_0(), Q$HashEntry));
      $this.tableSize_$eq($this.tableSize() - 1);
      $this.nnSizeMapRemove(h_0);
      return e;
    }
     else {
      e1 = dynamicCast(e.next_0(), Q$HashEntry);
      while$3: while (true) {
        if (isNotNull(e1) && !$this.elemEquals(e1.key_0(), key)) {
          e = e1;
          e1 = dynamicCast(e1.next_0(), Q$HashEntry);
          continue while$3;
        }
        break;
      }
      if (isNotNull(e1)) {
        e.next_$eq(e1.next_0());
        $this.tableSize_$eq($this.tableSize() - 1);
        $this.nnSizeMapRemove(h_0);
        return e1;
      }
    }
  }
  return null;
}

function resize($this, newSize){
  var e, e1, h_0, i, oldTable;
  oldTable = $this.table_1();
  $this.table_$eq_0(initDim(_3Lscala_collection_mutable_HashEntry_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$ScalaObject_$1]), Q$HashEntry, newSize, 0));
  $this.nnSizeMapReset($this.table_1().length);
  i = oldTable.length - 1;
  while$6: while (true) {
    if (i >= 0) {
      {
        e = oldTable[i];
        while$7: while (true) {
          if (isNotNull(e)) {
            {
              h_0 = $this.index_2($this.elemHashCode(e.key_0()));
              e1 = dynamicCast(e.next_0(), Q$HashEntry);
              e.next_$eq($this.table_1()[h_0]);
              setCheck($this.table_1(), h_0, e);
              e = e1;
              $this.nnSizeMapAdd(h_0);
            }
            continue while$7;
          }
          break;
        }
        i = i - 1;
      }
      continue while$6;
    }
    break;
  }
  $this.threshold_$eq($newThreshold_0(($clinit_HashTable$() , MODULE$_39), $this._loadFactor(), newSize));
}

function $clinit_Iterable$(){
  $clinit_Iterable$ = nullMethod;
  MODULE$_42 = new Iterable$_0;
}

function $$init_939(){
}

function Iterable$_0(){
  $$init_939();
  GenTraversableFactory_0.call(this);
  $init$_66();
  $init$_74();
}

function Iterable$(){
}

_ = Iterable$_0.prototype = Iterable$.prototype = new GenTraversableFactory;
_.getClass$ = function getClass_941(){
  return Lscala_collection_mutable_Iterable$_2_classLit;
}
;
_.newBuilder = function newBuilder_40(){
  return new ArrayBuffer_0;
}
;
_.castableTypeMap$ = makeCastMap([Q$ScalaObject]);
var MODULE$_42;
function companion_27(){
  return $clinit_Iterable$() , MODULE$_42;
}

function $$init_940(){
}

function $earlier(this$static){
  return this$static.earlier$u0020;
}

function $earlier_$eq(this$static, x$1){
  this$static.earlier$u0020 = x$1;
}

function $key_0(this$static){
  return this$static.key$u0020;
}

function $later(this$static){
  return this$static.later$u0020;
}

function $later_$eq(this$static, x$1){
  this$static.later$u0020 = x$1;
}

function $value(this$static){
  return this$static.value$u0020;
}

function $value_$eq(this$static, x$1){
  this$static.value$u0020 = x$1;
}

function LinkedEntry_0(key, value){
  $$init_940();
  this.key$u0020 = key;
  this.value$u0020 = value;
  Object_1.call(this);
  $init$_91();
  this.earlier$u0020 = null;
  this.later$u0020 = null;
}

function LinkedEntry(){
}

_ = LinkedEntry_0.prototype = LinkedEntry.prototype = new Object_0;
_.getClass$ = function getClass_942(){
  return Lscala_collection_mutable_LinkedEntry_2_classLit;
}
;
_.key_0 = function key_0(){
  return $key_0(this);
}
;
_.next_0 = function next_31(){
  return this.next$u0020;
}
;
_.next_$eq = function next_$eq(x$1){
  this.next$u0020 = x$1;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$ScalaObject, Q$Serializable_0, Q$HashEntry, Q$LinkedEntry]);
_.earlier$u0020 = null;
_.key$u0020 = null;
_.later$u0020 = null;
_.next$u0020 = null;
_.value$u0020 = null;
function $$init_941(){
}

function $$minus$eq_0(this$static, key){
  $remove_16(this$static, key);
  return this$static;
}

function $$plus$eq_9(this$static, kv){
  $put_2(this$static, $_1(kv), $_2(kv));
  return this$static;
}

function $empty_10(){
  return $empty_11(($clinit_LinkedHashMap$() , MODULE$_43));
}

function $firstEntry(this$static){
  return this$static.firstEntry$u0020;
}

function $firstEntry_$eq(this$static, x$1){
  this$static.firstEntry$u0020 = x$1;
}

function $lastEntry(this$static){
  return this$static.lastEntry$u0020;
}

function $lastEntry_$eq(this$static, x$1){
  this$static.lastEntry$u0020 = x$1;
}

function $put_2(this$static, key, value){
  var $2$, e, v;
  e = dynamicCast(this$static.findEntry(key), Q$LinkedEntry);
  if (equals_85(e, null)) {
    e = new LinkedEntry_0(key, value);
    this$static.addEntry_0(e);
    $scala$collection$mutable$LinkedHashMap$$updateLinkedEntries(this$static, e);
    $2$ = ($clinit_None$() , MODULE$_10);
  }
   else {
    v = $value(e);
    $value_$eq(e, value);
    $2$ = new Some_0(v);
  }
  return $2$;
}

function $remove_16(this$static, key){
  var $3$, e;
  e = dynamicCast(this$static.removeEntry_0(key), Q$LinkedEntry);
  if (isNull(e)) {
    $3$ = ($clinit_None$() , MODULE$_10);
  }
   else {
    isNull($earlier(e))?$firstEntry_$eq(this$static, $later(e)):$later_$eq($earlier(e), $later(e));
    isNull($later(e))?$lastEntry_$eq(this$static, $earlier(e)):$earlier_$eq($later(e), $earlier(e));
    $3$ = new Some_0($value(e));
  }
  return $3$;
}

function $scala$collection$mutable$LinkedHashMap$$updateLinkedEntries(this$static, e){
  if (equals_85($firstEntry(this$static), null)) {
    $firstEntry_$eq(this$static, e);
  }
   else {
    $later_$eq($lastEntry(this$static), e);
    $earlier_$eq(e, $lastEntry(this$static));
  }
  $lastEntry_$eq(this$static, e);
}

function LinkedHashMap_0(){
  $$init_941();
  Object_1.call(this);
  $init$_36();
  $init$_62();
  $init$_35();
  $init$_61();
  $init$_68();
  $init$_34();
  $init$_60();
  $init$_109();
  $init$_17();
  $init$_16();
  $init$_45();
  $init$_44();
  $init$_101();
  $init$_23();
  $init$_7();
  $init$_11();
  $init$_73();
  $init$_53();
  $init$_52();
  $init$_69();
  $init$_87();
  $init$_72();
  $init$_88();
  $init$_103();
  $init$_102();
  $init$_92();
  $init$_93(this);
  this.firstEntry$u0020 = null;
  this.lastEntry$u0020 = null;
}

function LinkedHashMap(){
}

_ = LinkedHashMap_0.prototype = LinkedHashMap.prototype = new Object_0;
_.$div$colon = function $div$colon_41(z, op){
  return $div$colon_14(this, z, op);
}
;
_.$minus$eq_0 = function $minus$eq_0(key){
  return $$minus$eq_0(this, key);
}
;
_.$minus = function $minus_13(key){
  return this.$minus_3(key);
}
;
_.$minus_3 = function $minus_14(key){
  return $minus_15(this, key);
}
;
_.$plus$eq = function $plus$eq_20(elem){
  return $$plus$eq_9(this, dynamicCast(elem, Q$Tuple2));
}
;
_.$plus$eq_0 = function $plus$eq_21(elem){
  return $$plus$eq_9(this, dynamicCast(elem, Q$Tuple2));
}
;
_.$plus$plus$eq = function $plus$plus$eq_11(xs){
  return $plus$plus$eq_0(this, xs);
}
;
_._loadFactor = function _loadFactor_1(){
  return this._loadFactor$u0020;
}
;
_._loadFactor_$eq = function _loadFactor_$eq_0(x$1){
  this._loadFactor$u0020 = x$1;
}
;
_.addEntry_0 = function addEntry_2(e){
  addEntry_1(this, e);
}
;
_.addString = function addString_43(b, start, sep, end){
  return addString_10(this, b, start, sep, end);
}
;
_.apply$mcII$sp = function apply$mcII$sp_26(v1){
  return apply$mcII$sp_0(this, v1);
}
;
_.apply$mcVI$sp = function apply$mcVI$sp_27(v1){
  apply$mcVI$sp_0(this, v1);
}
;
_.apply_0 = function apply_183(key){
  return apply_98(this, key);
}
;
_.calcSizeMapSize = function calcSizeMapSize_2(tableLength){
  return calcSizeMapSize_1(this, tableLength);
}
;
_.canEqual = function canEqual_28(that){
  return canEqual_2();
}
;
_.clone_0 = function clone_3(){
  return clone_4(this);
}
;
_.companion = function companion_28(){
  return companion_27();
}
;
_.contains_0 = function contains_24(key){
  return contains_14(this, key);
}
;
_.copyToArray = function copyToArray_85(xs, start){
  copyToArray_32(this, xs, start);
}
;
_.copyToArray_0 = function copyToArray_86(xs, start, len){
  copyToArray_6(this, xs, start, len);
}
;
_.copyToBuffer = function copyToBuffer_41(dest){
  copyToBuffer_14(this, dest);
}
;
_.default_$ = function default_$_0(key){
  return default_$(key);
}
;
_.drop_0 = function drop_58(n){
  return drop_3(this, n);
}
;
_.elemEquals = function elemEquals_0(key1, key2){
  return elemEquals(key1, key2);
}
;
_.elemHashCode = function elemHashCode_2(key){
  return elemHashCode_1(key);
}
;
_.empty = function empty_28(){
  return $empty_10();
}
;
_.equals$ = function equals_61(that){
  return equals_29(this, that);
}
;
_.filter_0 = function filter_56(p){
  return filter_20(this, p);
}
;
_.filterNot_0 = function filterNot_26(p){
  return this.filterNot(p);
}
;
_.filterNot = function filterNot_27(p){
  return filterNot_0(this, p);
}
;
_.findEntry = function findEntry_0(key){
  return findEntry(this, key);
}
;
_.foldLeft = function foldLeft_43(z, op){
  return foldLeft_16(this, z, op);
}
;
_.forall = function forall_44(p){
  return forall_3(this, p);
}
;
_.foreach = function foreach_49(f){
  var cur;
  cur = $firstEntry(this);
  while$1: while (true) {
    if (isNotNull(cur)) {
      f.apply_0(new Tuple2_0($key_0(cur), $value(cur)));
      cur = $later(cur);
      continue while$1;
    }
    break;
  }
}
;
_.genericBuilder = function genericBuilder_23(){
  return genericBuilder_4(this);
}
;
_.get_2 = function get_75(key){
  var $1$, e;
  e = dynamicCast(this.findEntry(key), Q$LinkedEntry);
  equals_85(e, null)?($1$ = ($clinit_None$() , MODULE$_10)):($1$ = new Some_0($value(e)));
  return $1$;
}
;
_.getClass$ = function getClass_943(){
  return Lscala_collection_mutable_LinkedHashMap_2_classLit;
}
;
_.hashCode$ = function hashCode_67(){
  return hashCode_38(this);
}
;
_.head = function head_29(){
  return head_0(this);
}
;
_.improve = function improve_2(hcode){
  return improve_1(hcode);
}
;
_.index_2 = function index_6(hcode){
  return index_4(this, hcode);
}
;
_.isEmpty = function isEmpty_56(){
  return isEmpty_21(this);
}
;
_.isTraversableAgain = function isTraversableAgain_41(){
  return isTraversableAgain_1();
}
;
_.iterator_1 = function iterator_55(){
  return new LinkedHashMap$$anon$1_0(this);
}
;
_.keySet_1 = function keySet_4(){
  return keySet_3(this);
}
;
_.keys_0 = function keys_1(){
  return keys_0(this);
}
;
_.keysIterator = function keysIterator(){
  return new LinkedHashMap$$anon$2_0(this);
}
;
_.mapResult = function mapResult_9(f){
  return mapResult_6(this, f);
}
;
_.mkString = function mkString_85(sep){
  return mkString_29(this, sep);
}
;
_.mkString_0 = function mkString_86(start, sep, end){
  return mkString_30(this, start, sep, end);
}
;
_.newBuilder = function newBuilder_41(){
  return newBuilder_44(this);
}
;
_.nnSizeMapAdd = function nnSizeMapAdd_2(h_0){
  nnSizeMapAdd_1(this, h_0);
}
;
_.nnSizeMapRemove = function nnSizeMapRemove_2(h_0){
  nnSizeMapRemove_1(this, h_0);
}
;
_.nnSizeMapReset = function nnSizeMapReset_2(tableLength){
  nnSizeMapReset_1(this, tableLength);
}
;
_.nonEmpty = function nonEmpty_41(){
  return nonEmpty_14(this);
}
;
_.put_0 = function put_2(key, value){
  return $put_2(this, key, value);
}
;
_.removeEntry_0 = function removeEntry_2(key){
  return removeEntry_1(this, key);
}
;
_.repr = function repr_28(){
  return repr_5(this);
}
;
_.result = function result_11(){
  return this.result_1();
}
;
_.result_1 = function result_12(){
  return result_14(this);
}
;
_.sameElements = function sameElements_28(that){
  return sameElements_0(this, that);
}
;
_.seq_1 = function seq_123(){
  return this.seq_9();
}
;
_.seq_2 = function seq_124(){
  return this.seq_9();
}
;
_.seq_0 = function seq_125(){
  return this.seq_9();
}
;
_.seq_9 = function seq_126(){
  return seq_137(this);
}
;
_.size_1 = function size_65(){
  return this.tableSize();
}
;
_.sizeHint$default$2 = function sizeHint$default$2_9(){
  return sizeHint$default$2_6();
}
;
_.sizeHint = function sizeHint_21(size){
  sizeHint_15();
}
;
_.sizeHint_0 = function sizeHint_22(coll, delta){
  sizeHint_16(this, coll, delta);
}
;
_.sizeHintBounded = function sizeHintBounded_9(size, boundingColl){
  sizeHintBounded_6(this, size, boundingColl);
}
;
_.sizeMapBucketBitSize = function sizeMapBucketBitSize_2(){
  return sizeMapBucketBitSize_1();
}
;
_.sizemap = function sizemap_0(){
  return this.sizemap$u0020;
}
;
_.sizemap_$eq = function sizemap_$eq_0(x$1){
  this.sizemap$u0020 = x$1;
}
;
_.stringPrefix = function stringPrefix_29(){
  return stringPrefix_0();
}
;
_.table_1 = function table_1(){
  return this.table$u0020;
}
;
_.tableSize = function tableSize_0(){
  return this.tableSize$u0020;
}
;
_.tableSize_$eq = function tableSize_$eq_0(x$1){
  this.tableSize$u0020 = x$1;
}
;
_.table_$eq_0 = function table_$eq_0(x$1){
  this.table$u0020 = x$1;
}
;
_.tail = function tail_31(){
  return tail_6(this);
}
;
_.take_0 = function take_56(n){
  return take_3(this, n);
}
;
_.threshold = function threshold_0(){
  return this.threshold$u0020;
}
;
_.threshold_$eq = function threshold_$eq_0(x$1){
  this.threshold$u0020 = x$1;
}
;
_.toArray_1 = function toArray_52(evidence$1){
  return toArray_24(this, evidence$1);
}
;
_.toBuffer = function toBuffer_44(){
  return toBuffer_11(this);
}
;
_.toList = function toList_40(){
  return toList_14(this);
}
;
_.toSeq = function toSeq_50(){
  return toSeq_10(this);
}
;
_.toSet = function toSet_42(){
  return toSet_14(this);
}
;
_.toStream = function toStream_42(){
  return toStream_2(this);
}
;
_.toString$ = function toString_108(){
  return toString_69(this);
}
;
_.zip_0 = function zip_43(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_27(bf){
  return zipWithIndex_0(this, bf);
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenMap, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Map_0, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$Growable, Q$HasNewBuilder, Q$Subtractable, Q$Builder, Q$Map_1]);
_._loadFactor$u0020 = 0;
_.firstEntry$u0020 = null;
_.lastEntry$u0020 = null;
_.sizemap$u0020 = null;
_.table$u0020 = null;
_.tableSize$u0020 = 0;
_.threshold$u0020 = 0;
function $clinit_LinkedHashMap$(){
  $clinit_LinkedHashMap$ = nullMethod;
  MODULE$_43 = new LinkedHashMap$_0;
}

function $$init_942(){
}

function $empty_11(){
  return new LinkedHashMap_0;
}

function LinkedHashMap$_0(){
  $$init_942();
  MutableMapFactory_0.call(this);
}

function LinkedHashMap$(){
}

_ = LinkedHashMap$_0.prototype = LinkedHashMap$.prototype = new MutableMapFactory;
_.getClass$ = function getClass_944(){
  return Lscala_collection_mutable_LinkedHashMap$_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$ScalaObject, Q$Serializable_0]);
var MODULE$_43;
function $$init_943(){
}

function $cur(this$static){
  return this$static.cur$u0020;
}

function $cur_$eq(this$static, x$1){
  this$static.cur$u0020 = x$1;
}

function $hasNext_9(this$static){
  return isNotNull($cur(this$static));
}

function $next_11(this$static){
  var $4$, res;
  if ($hasNext_9(this$static)) {
    res = new Tuple2_0($key_0($cur(this$static)), $value($cur(this$static)));
    $cur_$eq(this$static, $later($cur(this$static)));
    $4$ = res;
  }
   else {
    $4$ = dynamicCast($empty(($clinit_Iterator$() , MODULE$_13)).next_0(), Q$Tuple2);
  }
  return $4$;
}

function LinkedHashMap$$anon$1_0($outer){
  $$init_943();
  Object_1.call(this);
  $init$_36();
  $init$_62();
  $init$_48();
  this.cur$u0020 = $firstEntry($outer);
}

function LinkedHashMap$$anon$1(){
}

_ = LinkedHashMap$$anon$1_0.prototype = LinkedHashMap$$anon$1.prototype = new Object_0;
_.$div$colon = function $div$colon_42(z, op){
  return $div$colon_14(this, z, op);
}
;
_.addString = function addString_44(b, start, sep, end){
  return addString_15(this, b, start, sep, end);
}
;
_.copyToArray = function copyToArray_87(xs, start){
  copyToArray_32(this, xs, start);
}
;
_.copyToArray_0 = function copyToArray_88(xs, start, len){
  copyToArray_19(this, xs, start, len);
}
;
_.copyToBuffer = function copyToBuffer_42(dest){
  copyToBuffer_14(this, dest);
}
;
_.drop = function drop_59(n){
  return drop_11(this, n);
}
;
_.filter = function filter_57(p){
  return filter_9(this, p);
}
;
_.foldLeft = function foldLeft_44(z, op){
  return foldLeft_16(this, z, op);
}
;
_.forall = function forall_45(p){
  return forall_10(this, p);
}
;
_.foreach = function foreach_50(f){
  foreach_12(this, f);
}
;
_.getClass$ = function getClass_945(){
  return Lscala_collection_mutable_LinkedHashMap$$anon$1_2_classLit;
}
;
_.hasNext = function hasNext_28(){
  return $hasNext_9(this);
}
;
_.isEmpty = function isEmpty_57(){
  return isEmpty_18(this);
}
;
_.isTraversableAgain = function isTraversableAgain_42(){
  return isTraversableAgain_9();
}
;
_.map_0 = function map_16(f){
  return map_9(this, f);
}
;
_.mkString = function mkString_87(sep){
  return mkString_29(this, sep);
}
;
_.mkString_0 = function mkString_88(start, sep, end){
  return mkString_30(this, start, sep, end);
}
;
_.next_0 = function next_32(){
  return $next_11(this);
}
;
_.nonEmpty = function nonEmpty_42(){
  return nonEmpty_14(this);
}
;
_.seq = function seq_127(){
  return seq_17(this);
}
;
_.seq_0 = function seq_128(){
  return this.seq();
}
;
_.size_1 = function size_66(){
  return size_34(this);
}
;
_.slice_0 = function slice_31(from, until){
  return slice_10(this, from, until);
}
;
_.take = function take_57(n){
  return take_11(this, n);
}
;
_.toArray_1 = function toArray_53(evidence$1){
  return toArray_24(this, evidence$1);
}
;
_.toBuffer = function toBuffer_45(){
  return toBuffer_17(this);
}
;
_.toList = function toList_41(){
  return toList_14(this);
}
;
_.toSeq = function toSeq_51(){
  return toSeq_17(this);
}
;
_.toSet = function toSet_43(){
  return toSet_14(this);
}
;
_.toStream = function toStream_43(){
  return toStream_9(this);
}
;
_.toString$ = function toString_109(){
  return toString_66(this);
}
;
_.zip = function zip_44(that){
  return zip_11(this, that);
}
;
_.castableTypeMap$ = makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]);
_.cur$u0020 = null;
function $$init_944(){
}

function $cur_0(this$static){
  return this$static.cur$u0020;
}

function $cur_$eq_0(this$static, x$1){
  this$static.cur$u0020 = x$1;
}

function $hasNext_10(this$static){
  return isNotNull($cur_0(this$static));
}

function LinkedHashMap$$anon$2_0($outer){
  $$init_944();
  Object_1.call(this);
  $init$_36();
  $init$_62();
  $init$_48();
  this.cur$u0020 = $firstEntry($outer);
}

function LinkedHashMap$$anon$2(){
}

_ = LinkedHashMap$$anon$2_0.prototype = LinkedHashMap$$anon$2.prototype = new Object_0;
_.$div$colon = function $div$colon_43(z, op){
  return $div$colon_14(this, z, op);
}
;
_.addString = function addString_45(b, start, sep, end){
  return addString_15(this, b, start, sep, end);
}
;
_.copyToArray = function copyToArray_89(xs, start){
  copyToArray_32(this, xs, start);
}
;
_.copyToArray_0 = function copyToArray_90(xs, start, len){
  copyToArray_19(this, xs, start, len);
}
;
_.copyToBuffer = function copyToBuffer_43(dest){
  copyToBuffer_14(this, dest);
}
;
_.drop = function drop_60(n){
  return drop_11(this, n);
}
;
_.filter = function filter_58(p){
  return filter_9(this, p);
}
;
_.foldLeft = function foldLeft_45(z, op){
  return foldLeft_16(this, z, op);
}
;
_.forall = function forall_46(p){
  return forall_10(this, p);
}
;
_.foreach = function foreach_51(f){
  foreach_12(this, f);
}
;
_.getClass$ = function getClass_946(){
  return Lscala_collection_mutable_LinkedHashMap$$anon$2_2_classLit;
}
;
_.hasNext = function hasNext_29(){
  return $hasNext_10(this);
}
;
_.isEmpty = function isEmpty_58(){
  return isEmpty_18(this);
}
;
_.isTraversableAgain = function isTraversableAgain_43(){
  return isTraversableAgain_9();
}
;
_.map_0 = function map_17(f){
  return map_9(this, f);
}
;
_.mkString = function mkString_89(sep){
  return mkString_29(this, sep);
}
;
_.mkString_0 = function mkString_90(start, sep, end){
  return mkString_30(this, start, sep, end);
}
;
_.next_0 = function next_33(){
  var $5$, res;
  if ($hasNext_10(this)) {
    res = $key_0($cur_0(this));
    $cur_$eq_0(this, $later($cur_0(this)));
    $5$ = res;
  }
   else {
    $5$ = $empty(($clinit_Iterator$() , MODULE$_13)).next_0();
  }
  return $5$;
}
;
_.nonEmpty = function nonEmpty_43(){
  return nonEmpty_14(this);
}
;
_.seq = function seq_129(){
  return seq_17(this);
}
;
_.seq_0 = function seq_130(){
  return this.seq();
}
;
_.size_1 = function size_67(){
  return size_34(this);
}
;
_.slice_0 = function slice_32(from, until){
  return slice_10(this, from, until);
}
;
_.take = function take_58(n){
  return take_11(this, n);
}
;
_.toArray_1 = function toArray_54(evidence$1){
  return toArray_24(this, evidence$1);
}
;
_.toBuffer = function toBuffer_46(){
  return toBuffer_17(this);
}
;
_.toList = function toList_42(){
  return toList_14(this);
}
;
_.toSeq = function toSeq_52(){
  return toSeq_17(this);
}
;
_.toSet = function toSet_44(){
  return toSet_14(this);
}
;
_.toStream = function toStream_44(){
  return toStream_9(this);
}
;
_.toString$ = function toString_110(){
  return toString_66(this);
}
;
_.zip = function zip_45(that){
  return zip_11(this, that);
}
;
_.castableTypeMap$ = makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]);
_.cur$u0020 = null;
_ = ListBuffer$$anon$1.prototype;
_.map_0 = function map_18(f){
  return map_9(this, f);
}
;
function $init$_102(){
}

function seq_137($this){
  return $this;
}

function $init$_103(){
}

function $minus_15($this, key){
  return dynamicCast($this.clone_0().$minus$eq_0(key), Q$Map_1);
}

function clone_4($this){
  return dynamicCast(dynamicCast($this.empty(), Q$Growable).$plus$plus$eq(dynamicCast($this.repr(), Q$TraversableOnce)), Q$Map_1);
}

function newBuilder_44($this){
  return dynamicCast($this.empty(), Q$Builder);
}

function result_14($this){
  return dynamicCast($this.repr(), Q$Map_1);
}

var Lscala_collection_mutable_LinkedHashMap_2_classLit = createForClass('scala.collection.mutable.', 'LinkedHashMap', 'LinkedHashMap', Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_panels_CwAbsolutePanel$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.panels.', 'CwAbsolutePanel$$anonfun$onInitialize$1', 'CwAbsolutePanel$$anonfun$onInitialize$1', Lscala_runtime_AbstractFunction1_2_classLit), Lscala_collection_mutable_HashEntry_2_classLit = createForInterface('scala.collection.mutable.', 'HashEntry'), _3Lscala_collection_mutable_HashEntry_2_classLit = createForArray('[Lscala.collection.mutable.', 'HashEntry;', 'Array_0', Lscala_collection_mutable_HashEntry_2_classLit), Lscala_collection_mutable_LinkedEntry_2_classLit = createForClass('scala.collection.mutable.', 'LinkedEntry', 'LinkedEntry', Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_panels_CwAbsolutePanel$$anonfun$createOptionsBar$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.panels.', 'CwAbsolutePanel$$anonfun$createOptionsBar$1', 'CwAbsolutePanel$$anonfun$createOptionsBar$1', Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_panels_CwAbsolutePanel$$anon$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.panels.', 'CwAbsolutePanel$$anon$2', 'CwAbsolutePanel$$anon$2', Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_panels_CwAbsolutePanel$$anon$3_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.panels.', 'CwAbsolutePanel$$anon$3', 'CwAbsolutePanel$$anon$3', Ljava_lang_Object_2_classLit), Lscala_collection_mutable_LinkedHashMap$$anon$1_2_classLit = createForClass('scala.collection.mutable.', 'LinkedHashMap$$anon$1', 'LinkedHashMap$$anon$1', Ljava_lang_Object_2_classLit), Lscala_collection_MapLike$$anonfun$addString$1_2_classLit = createForClass('scala.collection.', 'MapLike$$anonfun$addString$1', 'MapLike$$anonfun$addString$1', Lscala_runtime_AbstractFunction1_2_classLit), Lscala_collection_Map$_2_classLit = createForClass('scala.collection.', 'Map$', 'Map$', Lscala_collection_generic_MapFactory_2_classLit), Lscala_collection_mutable_Iterable$_2_classLit = createForClass('scala.collection.mutable.', 'Iterable$', 'Iterable$', Lscala_collection_generic_GenTraversableFactory_2_classLit), Lscala_collection_GenMapLike$$anonfun$liftedTree1$1$1_2_classLit = createForClass('scala.collection.', 'GenMapLike$$anonfun$liftedTree1$1$1', 'GenMapLike$$anonfun$liftedTree1$1$1', Lscala_runtime_AbstractFunction1_2_classLit), Lscala_collection_MapLike$$anonfun$filterNot$1_2_classLit = createForClass('scala.collection.', 'MapLike$$anonfun$filterNot$1', 'MapLike$$anonfun$filterNot$1', Lscala_runtime_AbstractFunction1_2_classLit), Lscala_collection_generic_MutableMapFactory_2_classLit = createForClass('scala.collection.generic.', 'MutableMapFactory', 'MutableMapFactory', Lscala_collection_generic_MapFactory_2_classLit), Lscala_collection_mutable_LinkedHashMap$_2_classLit = createForClass('scala.collection.mutable.', 'LinkedHashMap$', 'LinkedHashMap$', Lscala_collection_generic_MutableMapFactory_2_classLit), Lscala_collection_Iterator$$anon$19_2_classLit = createForClass('scala.collection.', 'Iterator$$anon$19', 'Iterator$$anon$19', Ljava_lang_Object_2_classLit), Lscala_collection_MapLike$DefaultKeySet_2_classLit = createForClass('scala.collection.', 'MapLike$DefaultKeySet', 'MapLike$DefaultKeySet', Ljava_lang_Object_2_classLit), Lscala_collection_MapLike$DefaultKeySet$$anonfun$foreach$1_2_classLit = createForClass('scala.collection.', 'MapLike$DefaultKeySet$$anonfun$foreach$1', 'MapLike$DefaultKeySet$$anonfun$foreach$1', Lscala_runtime_AbstractFunction1_2_classLit), Lscala_collection_MapLike$DefaultKeySet$$anonfun$foreach$2_2_classLit = createForClass('scala.collection.', 'MapLike$DefaultKeySet$$anonfun$foreach$2', 'MapLike$DefaultKeySet$$anonfun$foreach$2', Lscala_runtime_AbstractFunction1_2_classLit), Lscala_collection_mutable_LinkedHashMap$$anon$2_2_classLit = createForClass('scala.collection.mutable.', 'LinkedHashMap$$anon$2', 'LinkedHashMap$$anon$2', Ljava_lang_Object_2_classLit);
$entry(onLoad)(20);
