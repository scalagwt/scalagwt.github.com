defineSeed(309, 1, makeCastMap([Q$ShowcaseConstants]));
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
  $setText_7($topPosBox(this$static), '100');
  $leftPosBox_$eq(this$static, new TextBox_0);
  $leftPosBox(this$static).setWidth('3em');
  $setText_7($leftPosBox(this$static), '60');
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
  $foreach$mVc$sp($until_0($intWrapper(($clinit_Predef$() , MODULE$_11 , 0)), 3), new CwAbsolutePanel$$anonfun$onInitialize$1_0(grid$1));
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

function $$init_335(){
}

function CwAbsolutePanel$$anon$2_0($outer){
  $$init_335();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
}

defineSeed(436, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), CwAbsolutePanel$$anon$2_0);
_.onChange = function onChange_2(event_0){
  $com$google$gwt$sample$showcase$client$content$panels$CwAbsolutePanel$$updateSelectedItem(this.$outer$u0020);
}
;
_.$outer$u0020 = null;
function $$init_336(){
}

function CwAbsolutePanel$$anon$3_0($outer){
  $$init_336();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
}

defineSeed(437, 1, makeCastMap([Q$KeyUpHandler, Q$EventHandler]), CwAbsolutePanel$$anon$3_0);
_.onKeyUp = function onKeyUp_8(event_0){
  $com$google$gwt$sample$showcase$client$content$panels$CwAbsolutePanel$$repositionItem(this.$outer$u0020);
}
;
_.$outer$u0020 = null;
defineSeed(438, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_14(){
  this.callback$1.onSuccess_0($onInitialize_13(this.$outer$u0020));
}
;
function $$init_338(){
}

function $apply_48(this$static, name_0){
  $addItem($com$google$gwt$sample$showcase$client$content$panels$CwAbsolutePanel$$listBox(this$static.$outer$u0020), name_0);
}

function CwAbsolutePanel$$anonfun$createOptionsBar$1_0($outer){
  $$init_338();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  AbstractFunction1_0.call(this);
}

defineSeed(439, 266, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwAbsolutePanel$$anonfun$createOptionsBar$1_0);
_.apply_0 = function apply_49(v1){
  $apply_48(this, dynamicCast(v1, Q$String));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.$outer$u0020 = null;
function $$init_340(){
}

function $apply$mcVI$sp(this$static, v1){
  $setHTML_2(this$static.grid$1, 0, v1, v1 + '');
  $setWidget_2(this$static.grid$1, 1, v1, new Image_1($images(($clinit_Showcase$() , MODULE$_4)).gwtLogoThumb()));
}

function $apply_49(this$static, i){
  $apply$mcVI$sp(this$static, i);
}

function CwAbsolutePanel$$anonfun$onInitialize$1_0(grid$1){
  $$init_340();
  this.grid$1 = grid$1;
  AbstractFunction1$mcVI$sp_0.call(this);
}

defineSeed(440, 441, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwAbsolutePanel$$anonfun$onInitialize$1_0);
_.apply$mcVI$sp = function apply$mcVI$sp_0(v1){
  $apply$mcVI$sp(this, v1);
}
;
_.apply_2 = function apply_52(i){
  $apply_49(this, i);
}
;
_.apply_0 = function apply_53(v1){
  $apply_49(this, unboxToInt(v1));
  return $clinit_BoxedUnit() , UNIT;
}
;
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

defineSeed(930, 1, makeCastMap([Q$ScalaObject]));
_.apply_8 = function apply_106(elems){
  var $1$, b;
  if (elems.isEmpty()) {
    $1$ = this.empty();
  }
   else {
    b = this.newBuilder();
    b.$plus$plus$eq(elems);
    $1$ = dynamicCast(b.result(), Q$GenTraversable);
  }
  return $1$;
}
;
function $$init_748(){
}

function $iter(this$static){
  return this$static.iter$u0020;
}

function MapLike$$anon$3_0($outer){
  $$init_748();
  Object_1.call(this);
  $init$_38();
  $init$_66();
  $init$_51();
  this.iter$u0020 = $outer.iterator_1();
}

defineSeed(961, 1, makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]), MapLike$$anon$3_0);
_.$div$colon = function $div$colon_15(z, op){
  return $div$colon_22(this, z, op);
}
;
_.addString = function addString_15(b, start, sep, end){
  return addString_23(this, b, start, sep, end);
}
;
_.copyToArray = function copyToArray_34(xs, start){
  copyToArray_48(this, xs, start);
}
;
_.copyToArray_0 = function copyToArray_35(xs, start, len){
  copyToArray_21(this, xs, start, len);
}
;
_.copyToBuffer = function copyToBuffer_15(dest){
  copyToBuffer_22(this, dest);
}
;
_.drop = function drop_19(n){
  return drop_12(this, n);
}
;
_.filter = function filter_17(p){
  return filter_10(this, p);
}
;
_.foldLeft = function foldLeft_17(z, op){
  return foldLeft_24(this, z, op);
}
;
_.forall = function forall_19(p){
  return forall_11(this, p);
}
;
_.foreach = function foreach_21(f){
  foreach_13(this, f);
}
;
_.hasNext = function hasNext_26(){
  return $iter(this).hasNext();
}
;
_.isEmpty = function isEmpty_27(){
  return isEmpty_20(this);
}
;
_.isTraversableAgain = function isTraversableAgain_17(){
  return isTraversableAgain_10();
}
;
_.map_0 = function map_15(f){
  return map_10(this, f);
}
;
_.mkString = function mkString_31(sep){
  return mkString_45(this, sep);
}
;
_.mkString_0 = function mkString_32(start, sep, end){
  return mkString_46(this, start, sep, end);
}
;
_.next_0 = function next_27(){
  return $_1(dynamicCast($iter(this).next_0(), Q$Tuple2));
}
;
_.nonEmpty = function nonEmpty_15(){
  return nonEmpty_22(this);
}
;
_.seq = function seq_37(){
  return seq_20(this);
}
;
_.seq_0 = function seq_38(){
  return this.seq();
}
;
_.size_1 = function size_35(){
  return size_43(this);
}
;
_.slice_0 = function slice_15(from, until){
  return slice_11(this, from, until);
}
;
_.take = function take_19(n){
  return take_12(this, n);
}
;
_.toArray_1 = function toArray_25(evidence$1){
  return toArray_32(this, evidence$1);
}
;
_.toBuffer = function toBuffer_16(){
  return toBuffer_25(this);
}
;
_.toList = function toList_15(){
  return toList_22(this);
}
;
_.toSeq_0 = function toSeq_32(){
  return toSeq_48(this);
}
;
_.toStream = function toStream_17(){
  return toStream_10(this);
}
;
_.toString$ = function toString_74(){
  return toString_67(this);
}
;
_.zip = function zip_19(that){
  return zip_12(this, that);
}
;
function $$init_751(){
}

function $scala$collection$MapLike$DefaultKeySet$$$outer(this$static){
  return this$static.$outer$u0020;
}

function MapLike$DefaultKeySet_0($outer){
  $$init_751();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
  $init$_7();
  $init$_38();
  $init$_66();
  $init$_37();
  $init$_65();
  $init$_73();
  $init$_36();
  $init$_64();
  $init$_17();
  $init$_16();
  $init$_48();
  $init$_47();
  $init$_35();
  $init$_72();
  $init$_34();
  $init$_78();
  $init$_63();
  $init$_62();
}

defineSeed(964, 1, makeCastMap([Q$Equals, Q$Function1, Q$ScalaObject, Q$GenIterable, Q$GenIterableLike, Q$GenSet, Q$GenSetLike, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Set_0, Q$SetLike, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericSetTemplate, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Subtractable]), MapLike$DefaultKeySet_0);
_.$div$colon = function $div$colon_16(z, op){
  return $div$colon_22(this, z, op);
}
;
_.$plus$plus_1 = function $plus$plus_19(elems){
  return $plus$plus_26(this, elems);
}
;
_.$plus_1 = function $plus_4(elem){
  return dynamicCast(($clinit_Set$() , MODULE$_17).apply_8(($clinit_Nil$() , MODULE$_32)), Q$SetLike).$plus$plus_1(this).$plus_1(elem);
}
;
_.addString = function addString_16(b, start, sep, end){
  return addString_23(this, b, start, sep, end);
}
;
_.apply$mcII$sp = function apply$mcII$sp_5(v1){
  return apply$mcII$sp_0(this, v1);
}
;
_.apply$mcVI$sp = function apply$mcVI$sp_18(v1){
  apply$mcVI$sp_12(this, v1);
}
;
_.apply_0 = function apply_115(v1){
  return boxToBoolean(this.apply_7(v1));
}
;
_.apply_7 = function apply_116(elem){
  return apply_104(this, elem);
}
;
_.canEqual = function canEqual_7(that){
  return canEqual_2();
}
;
_.companion = function companion_3(){
  return companion_10();
}
;
_.contains_0 = function contains_15(key){
  return $scala$collection$MapLike$DefaultKeySet$$$outer(this).contains_0(key);
}
;
_.copyToArray = function copyToArray_36(xs, start){
  copyToArray_48(this, xs, start);
}
;
_.copyToArray_0 = function copyToArray_37(xs, start, len){
  copyToArray_6(this, xs, start, len);
}
;
_.copyToBuffer = function copyToBuffer_16(dest){
  copyToBuffer_22(this, dest);
}
;
_.drop_0 = function drop_20(n){
  return drop_3(this, n);
}
;
_.empty_1 = function empty_6(){
  return empty_9(this);
}
;
_.empty_2 = function empty_7(){
  return dynamicCast(this.empty_1(), Q$Set_0);
}
;
_.equals$ = function equals_36(that){
  return equals_31(this, that);
}
;
_.filter_0 = function filter_18(p){
  return filter_29(this, p);
}
;
_.filterNot = function filterNot_3(p){
  return filterNot_10(this, p);
}
;
_.foldLeft = function foldLeft_18(z, op){
  return foldLeft_24(this, z, op);
}
;
_.forall = function forall_20(p){
  return forall_3(this, p);
}
;
_.foreach = function foreach_22(f$1){
  dynamicCast($scala$collection$MapLike$DefaultKeySet$$$outer(this).filter_0(new MapLike$DefaultKeySet$$anonfun$foreach$1_0), Q$IterableLike).foreach(new MapLike$DefaultKeySet$$anonfun$foreach$2_0(f$1));
}
;
_.genericBuilder = function genericBuilder_2(){
  return genericBuilder_8(this);
}
;
_.hashCode$ = function hashCode_45(){
  return hashCode_40(this);
}
;
_.head = function head_4(){
  return head_0(this);
}
;
_.isEmpty = function isEmpty_28(){
  return isEmpty_35(this);
}
;
_.isTraversableAgain = function isTraversableAgain_18(){
  return isTraversableAgain_0();
}
;
_.iterator_1 = function iterator_31(){
  return $scala$collection$MapLike$DefaultKeySet$$$outer(this).keysIterator();
}
;
_.mkString = function mkString_33(sep){
  return mkString_45(this, sep);
}
;
_.mkString_0 = function mkString_34(start, sep, end){
  return mkString_46(this, start, sep, end);
}
;
_.newBuilder = function newBuilder_4(){
  return newBuilder_13(this);
}
;
_.nonEmpty = function nonEmpty_16(){
  return nonEmpty_22(this);
}
;
_.repr = function repr_3(){
  return repr_9(this);
}
;
_.sameElements = function sameElements_5(that){
  return sameElements_0(this, that);
}
;
_.seq_1 = function seq_39(){
  return this.seq_3();
}
;
_.seq_3 = function seq_40(){
  return seq_58(this);
}
;
_.seq_0 = function seq_41(){
  return this.seq_3();
}
;
_.size_1 = function size_36(){
  return $scala$collection$MapLike$DefaultKeySet$$$outer(this).size_1();
}
;
_.stringPrefix = function stringPrefix_2(){
  return stringPrefix_10();
}
;
_.subsetOf = function subsetOf_1(that){
  return subsetOf(this, that);
}
;
_.tail = function tail_3(){
  return tail_9(this);
}
;
_.take_0 = function take_20(n){
  return take_3(this, n);
}
;
_.toArray_1 = function toArray_26(evidence$1){
  return toArray_32(this, evidence$1);
}
;
_.toBuffer = function toBuffer_17(){
  return toBuffer_24(this);
}
;
_.toList = function toList_16(){
  return toList_22(this);
}
;
_.toSeq_0 = function toSeq_34(){
  return toSeq_47(this);
}
;
_.toStream = function toStream_18(){
  return toStream_2(this);
}
;
_.toString$ = function toString_75(){
  return toString_84(this);
}
;
_.zip_0 = function zip_20(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_5(bf){
  return zipWithIndex_0(this, bf);
}
;
function $$init_752(){
}

function $apply_86(check$ifrefutable$1){
  var temp9;
  temp9 = check$ifrefutable$1;
  return isNotNull(temp9);
}

function MapLike$DefaultKeySet$$anonfun$foreach$1_0(){
  $$init_752();
  AbstractFunction1_0.call(this);
}

defineSeed(965, 266, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), MapLike$DefaultKeySet$$anonfun$foreach$1_0);
_.apply_0 = function apply_117(v1){
  return boxToBoolean($apply_86(dynamicCast(v1, Q$Tuple2)));
}
;
function $$init_753(){
}

function $apply_87(this$static, x$1){
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
  $$init_753();
  this.f$1 = f$1;
  AbstractFunction1_0.call(this);
}

defineSeed(966, 266, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), MapLike$DefaultKeySet$$anonfun$foreach$2_0);
_.apply_0 = function apply_118(v1){
  return $apply_87(this, dynamicCast(v1, Q$Tuple2));
}
;
_.f$1 = null;
function keySet_4($this){
  return new MapLike$DefaultKeySet_0($this);
}

function keys_1($this){
  return $this.keySet_1();
}

function keysIterator_0($this){
  return new MapLike$$anon$3_0($this);
}

function companion_10(){
  return $clinit_Set$() , MODULE$_17;
}

function seq_58($this){
  return $this;
}

function $$init_783(){
}

function MutableMapFactory_0(){
  $$init_783();
  MapFactory_0.call(this);
}

defineSeed(1049, 969, makeCastMap([Q$ScalaObject]));
_.apply_8 = function apply_154(elems){
  return $apply_104(elems);
}
;
function $apply_111(xs){
  return xs.toStream();
}

defineSeed(1089, 969, makeCastMap([Q$ScalaObject]));
_.apply_8 = function apply_183(elems){
  return $apply_111(elems);
}
;
function $init$_98(){
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
  return toInt(div_0(mul(fromInt(size), fromInt(_loadFactor)), fromInt($loadFactorDenum_0())));
}

function $init$_99(){
}

function elemHashCode_1(key){
  return $hash_3(($clinit_ScalaRunTime$() , MODULE$_64 , key));
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

function $init$_100($this){
  $this._loadFactor_$eq($defaultLoadFactor_0(($clinit_HashTable$() , MODULE$_46)));
  $this.table_$eq_0(initDim(_3Lscala_collection_mutable_HashEntry_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$ScalaObject_$1]), Q$HashEntry, $initialCapacity(($clinit_HashTable$() , MODULE$_46)), 0));
  $this.tableSize_$eq(0);
  $this.threshold_$eq($initialThreshold(($clinit_HashTable$() , MODULE$_46), $this._loadFactor()));
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
  return equals_113(key1, key2);
}

function findEntry($this, key){
  var e, h_0;
  h_0 = $this.index_2($this.elemHashCode(key));
  e = $this.table_1()[h_0];
  while$1: while (true) {
    if (isNotNull(e) && !$this.elemEquals(e.key_0(), key)) {
      e = dynamicCast(e.next_0(), Q$HashEntry);
      continue while$1;
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

function nnSizeMapRemove($this, h_0){
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

function removeEntry($this, key){
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
      while$2: while (true) {
        if (isNotNull(e1) && !$this.elemEquals(e1.key_0(), key)) {
          e = e1;
          e1 = dynamicCast(e1.next_0(), Q$HashEntry);
          continue while$2;
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
  while$5: while (true) {
    if (i >= 0) {
      {
        e = oldTable[i];
        while$6: while (true) {
          if (isNotNull(e)) {
            {
              h_0 = $this.index_2($this.elemHashCode(e.key_0()));
              e1 = dynamicCast(e.next_0(), Q$HashEntry);
              e.next_$eq($this.table_1()[h_0]);
              setCheck($this.table_1(), h_0, e);
              e = e1;
              $this.nnSizeMapAdd(h_0);
            }
            continue while$6;
          }
          break;
        }
        i = i - 1;
      }
      continue while$5;
    }
    break;
  }
  $this.threshold_$eq($newThreshold_0(($clinit_HashTable$() , MODULE$_46), $this._loadFactor(), newSize));
}

function $$init_901(){
}

function $earlier(this$static){
  return this$static.earlier$u0020;
}

function $earlier_$eq(this$static, x$1){
  this$static.earlier$u0020 = x$1;
}

function $key_1(this$static){
  return this$static.key$u0020;
}

function $later(this$static){
  return this$static.later$u0020;
}

function $later_$eq(this$static, x$1){
  this$static.later$u0020 = x$1;
}

function $value_0(this$static){
  return this$static.value$u0020;
}

function $value_$eq(this$static, x$1){
  this$static.value$u0020 = x$1;
}

function LinkedEntry_0(key, value){
  $$init_901();
  this.key$u0020 = key;
  this.value$u0020 = value;
  Object_1.call(this);
  $init$_98();
  this.earlier$u0020 = null;
  this.later$u0020 = null;
}

defineSeed(1166, 1, makeCastMap([Q$Serializable, Q$ScalaObject, Q$Serializable_0, Q$HashEntry, Q$LinkedEntry]), LinkedEntry_0);
_.key_0 = function key_2(){
  return $key_1(this);
}
;
_.next_0 = function next_39(){
  return this.next$u0020;
}
;
_.next_$eq = function next_$eq(x$1){
  this.next$u0020 = x$1;
}
;
_.earlier$u0020 = null;
_.key$u0020 = null;
_.later$u0020 = null;
_.next$u0020 = null;
_.value$u0020 = null;
function $$init_902(){
}

function $$minus$eq(this$static, key){
  $remove_16(this$static, key);
  return this$static;
}

function $$plus$eq_10(this$static, kv){
  $put_2(this$static, $_1(kv), $_2(kv));
  return this$static;
}

function $empty_18(){
  return $empty_19(($clinit_LinkedHashMap$() , MODULE$_50));
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
  if (equals_113(e, null)) {
    e = new LinkedEntry_0(key, value);
    this$static.addEntry_0(e);
    $updateLinkedEntries(this$static, e);
    $2$ = ($clinit_None$() , MODULE$_10);
  }
   else {
    v = $value_0(e);
    $value_$eq(e, value);
    $2$ = new Some_0(v);
  }
  return $2$;
}

function $remove_16(this$static, key){
  var $3$, e;
  e = dynamicCast(this$static.removeEntry(key), Q$LinkedEntry);
  if (isNull(e)) {
    $3$ = ($clinit_None$() , MODULE$_10);
  }
   else {
    isNull($earlier(e))?$firstEntry_$eq(this$static, $later(e)):$later_$eq($earlier(e), $later(e));
    isNull($later(e))?$lastEntry_$eq(this$static, $earlier(e)):$earlier_$eq($later(e), $earlier(e));
    $3$ = new Some_0($value_0(e));
  }
  return $3$;
}

function $updateLinkedEntries(this$static, e){
  if (equals_113($firstEntry(this$static), null)) {
    $firstEntry_$eq(this$static, e);
  }
   else {
    $later_$eq($lastEntry(this$static), e);
    $earlier_$eq(e, $lastEntry(this$static));
  }
  $lastEntry_$eq(this$static, e);
}

function LinkedHashMap_0(){
  $$init_902();
  Object_1.call(this);
  $init$_38();
  $init$_66();
  $init$_37();
  $init$_65();
  $init$_73();
  $init$_36();
  $init$_64();
  $init$_116();
  $init$_17();
  $init$_16();
  $init$_48();
  $init$_47();
  $init$_108();
  $init$_24();
  $init$_7();
  $init$_11();
  $init$_78();
  $init$_57();
  $init$_56();
  $init$_74();
  $init$_94();
  $init$_77();
  $init$_95();
  $init$_110();
  $init$_109();
  $init$_99();
  $init$_100(this);
  this.firstEntry$u0020 = null;
  this.lastEntry$u0020 = null;
}

defineSeed(1167, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenMap, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Map_0, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$Growable, Q$HasNewBuilder, Q$Subtractable, Q$Builder, Q$Map_2]), LinkedHashMap_0);
_.$div$colon = function $div$colon_58(z, op){
  return $div$colon_22(this, z, op);
}
;
_.$minus$eq_0 = function $minus$eq_2(key){
  return $$minus$eq(this, key);
}
;
_.$minus = function $minus_12(key){
  return this.$minus_0(key);
}
;
_.$minus_0 = function $minus_13(key){
  return $minus_14(this, key);
}
;
_.$plus$eq = function $plus$eq_28(elem){
  return $$plus$eq_10(this, dynamicCast(elem, Q$Tuple2));
}
;
_.$plus$eq_0 = function $plus$eq_29(elem){
  return $$plus$eq_10(this, dynamicCast(elem, Q$Tuple2));
}
;
_.$plus$plus$eq = function $plus$plus$eq_13(xs){
  return $plus$plus$eq_2(this, xs);
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
_.addString = function addString_60(b, start, sep, end){
  return addString_17(this, b, start, sep, end);
}
;
_.apply$mcII$sp = function apply$mcII$sp_36(v1){
  return apply$mcII$sp_0(this, v1);
}
;
_.apply$mcVI$sp = function apply$mcVI$sp_49(v1){
  apply$mcVI$sp_12(this, v1);
}
;
_.apply_0 = function apply_222(key){
  return apply_119(this, key);
}
;
_.calcSizeMapSize = function calcSizeMapSize_2(tableLength){
  return calcSizeMapSize_1(this, tableLength);
}
;
_.canEqual = function canEqual_40(that){
  return canEqual_2();
}
;
_.clone = function clone_5(){
  return clone_6();
}
;
_.companion = function companion_42(){
  return companion_41();
}
;
_.contains_0 = function contains_33(key){
  return contains_16(this, key);
}
;
_.copyToArray = function copyToArray_119(xs, start){
  copyToArray_48(this, xs, start);
}
;
_.copyToArray_0 = function copyToArray_120(xs, start, len){
  copyToArray_6(this, xs, start, len);
}
;
_.copyToBuffer = function copyToBuffer_58(dest){
  copyToBuffer_22(this, dest);
}
;
_.default_$ = function default_$_8(key){
  return default_$_0(key);
}
;
_.drop_0 = function drop_76(n){
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
_.empty_0 = function empty_55(){
  return $empty_18();
}
;
_.equals$ = function equals_73(that){
  return equals_29(this, that);
}
;
_.filter_0 = function filter_74(p){
  return filter_29(this, p);
}
;
_.filterNot = function filterNot_45(p){
  return this.filterNot_0(p);
}
;
_.filterNot_0 = function filterNot_46(p){
  return filterNot_4(this, p);
}
;
_.findEntry = function findEntry_0(key){
  return findEntry(this, key);
}
;
_.foldLeft = function foldLeft_60(z, op){
  return foldLeft_24(this, z, op);
}
;
_.forall = function forall_61(p){
  return forall_3(this, p);
}
;
_.foreach = function foreach_69(f){
  var cur;
  cur = $firstEntry(this);
  while$1: while (true) {
    if (isNotNull(cur)) {
      f.apply_0(new Tuple2_0($key_1(cur), $value_0(cur)));
      cur = $later(cur);
      continue while$1;
    }
    break;
  }
}
;
_.genericBuilder = function genericBuilder_34(){
  return genericBuilder_8(this);
}
;
_.get_2 = function get_83(key){
  var $1$, e;
  e = dynamicCast(this.findEntry(key), Q$LinkedEntry);
  equals_113(e, null)?($1$ = ($clinit_None$() , MODULE$_10)):($1$ = new Some_0($value_0(e)));
  return $1$;
}
;
_.hashCode$ = function hashCode_79(){
  return hashCode_38(this);
}
;
_.head = function head_40(){
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
_.isEmpty = function isEmpty_75(){
  return isEmpty_29(this);
}
;
_.isTraversableAgain = function isTraversableAgain_58(){
  return isTraversableAgain_0();
}
;
_.iterator_1 = function iterator_71(){
  return new LinkedHashMap$$anon$1_0(this);
}
;
_.keySet_1 = function keySet_20(){
  return keySet_4(this);
}
;
_.keys_0 = function keys_9(){
  return keys_1(this);
}
;
_.keysIterator = function keysIterator_8(){
  return new LinkedHashMap$$anon$2_0(this);
}
;
_.mapResult = function mapResult_11(f){
  return mapResult_8(this, f);
}
;
_.mkString = function mkString_119(sep){
  return mkString_45(this, sep);
}
;
_.mkString_0 = function mkString_120(start, sep, end){
  return mkString_46(this, start, sep, end);
}
;
_.newBuilder = function newBuilder_57(){
  return newBuilder_60(this);
}
;
_.nnSizeMapAdd = function nnSizeMapAdd_2(h_0){
  nnSizeMapAdd_1(this, h_0);
}
;
_.nnSizeMapRemove = function nnSizeMapRemove_0(h_0){
  nnSizeMapRemove(this, h_0);
}
;
_.nnSizeMapReset = function nnSizeMapReset_2(tableLength){
  nnSizeMapReset_1(this, tableLength);
}
;
_.nonEmpty = function nonEmpty_58(){
  return nonEmpty_22(this);
}
;
_.put_0 = function put_4(key, value){
  return $put_2(this, key, value);
}
;
_.removeEntry = function removeEntry_0(key){
  return removeEntry(this, key);
}
;
_.repr = function repr_39(){
  return repr_9(this);
}
;
_.result = function result_15(){
  return this.result_0();
}
;
_.result_0 = function result_16(){
  return result_19(this);
}
;
_.sameElements = function sameElements_39(that){
  return sameElements_0(this, that);
}
;
_.seq_1 = function seq_182(){
  return this.seq_4();
}
;
_.seq_2 = function seq_183(){
  return this.seq_4();
}
;
_.seq_0 = function seq_184(){
  return this.seq_4();
}
;
_.seq_4 = function seq_185(){
  return seq_196(this);
}
;
_.size_1 = function size_87(){
  return this.tableSize();
}
;
_.sizeHint$default$2 = function sizeHint$default$2_11(){
  return sizeHint$default$2_8();
}
;
_.sizeHint = function sizeHint_25(size){
  sizeHint_19();
}
;
_.sizeHint_0 = function sizeHint_26(coll, delta){
  sizeHint_20(this, coll, delta);
}
;
_.sizeHintBounded = function sizeHintBounded_11(size, boundingColl){
  sizeHintBounded_8(this, size, boundingColl);
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
_.stringPrefix = function stringPrefix_40(){
  return stringPrefix_3();
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
_.tail = function tail_41(){
  return tail_9(this);
}
;
_.take_0 = function take_74(n){
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
_.toArray_1 = function toArray_69(evidence$1){
  return toArray_32(this, evidence$1);
}
;
_.toBuffer = function toBuffer_61(){
  return toBuffer_18(this);
}
;
_.toList = function toList_57(){
  return toList_22(this);
}
;
_.toSeq_0 = function toSeq_126(){
  return toSeq_35(this);
}
;
_.toStream = function toStream_59(){
  return toStream_2(this);
}
;
_.toString$ = function toString_125(){
  return toString_76(this);
}
;
_.zip_0 = function zip_60(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_38(bf){
  return zipWithIndex_0(this, bf);
}
;
function $clinit_LinkedHashMap$(){
  $clinit_LinkedHashMap$ = nullMethod;
  MODULE$_50 = new LinkedHashMap$_0;
}

function $$init_903(){
}

function $empty_19(){
  return new LinkedHashMap_0;
}

function LinkedHashMap$_0(){
  $$init_903();
  MutableMapFactory_0.call(this);
  MODULE$_50 = this;
}

defineSeed(1168, 1015, makeCastMap([Q$Serializable, Q$ScalaObject, Q$Serializable_0]), LinkedHashMap$_0);
var MODULE$_50;
function $$init_904(){
}

function $cur_0(this$static){
  return this$static.cur$u0020;
}

function $cur_$eq_0(this$static, x$1){
  this$static.cur$u0020 = x$1;
}

function $hasNext_11(this$static){
  return isNotNull($cur_0(this$static));
}

function $next_13(this$static){
  var $4$, res;
  if ($hasNext_11(this$static)) {
    res = new Tuple2_0($key_1($cur_0(this$static)), $value_0($cur_0(this$static)));
    $cur_$eq_0(this$static, $later($cur_0(this$static)));
    $4$ = res;
  }
   else {
    $4$ = dynamicCast($empty_0(($clinit_Iterator$() , MODULE$_13)).next_0(), Q$Tuple2);
  }
  return $4$;
}

function LinkedHashMap$$anon$1_0($outer){
  $$init_904();
  Object_1.call(this);
  $init$_38();
  $init$_66();
  $init$_51();
  this.cur$u0020 = $firstEntry($outer);
}

defineSeed(1169, 1, makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]), LinkedHashMap$$anon$1_0);
_.$div$colon = function $div$colon_59(z, op){
  return $div$colon_22(this, z, op);
}
;
_.addString = function addString_61(b, start, sep, end){
  return addString_23(this, b, start, sep, end);
}
;
_.copyToArray = function copyToArray_121(xs, start){
  copyToArray_48(this, xs, start);
}
;
_.copyToArray_0 = function copyToArray_122(xs, start, len){
  copyToArray_21(this, xs, start, len);
}
;
_.copyToBuffer = function copyToBuffer_59(dest){
  copyToBuffer_22(this, dest);
}
;
_.drop = function drop_77(n){
  return drop_12(this, n);
}
;
_.filter = function filter_75(p){
  return filter_10(this, p);
}
;
_.foldLeft = function foldLeft_61(z, op){
  return foldLeft_24(this, z, op);
}
;
_.forall = function forall_62(p){
  return forall_11(this, p);
}
;
_.foreach = function foreach_70(f){
  foreach_13(this, f);
}
;
_.hasNext = function hasNext_34(){
  return $hasNext_11(this);
}
;
_.isEmpty = function isEmpty_76(){
  return isEmpty_20(this);
}
;
_.isTraversableAgain = function isTraversableAgain_59(){
  return isTraversableAgain_10();
}
;
_.map_0 = function map_34(f){
  return map_10(this, f);
}
;
_.mkString = function mkString_121(sep){
  return mkString_45(this, sep);
}
;
_.mkString_0 = function mkString_122(start, sep, end){
  return mkString_46(this, start, sep, end);
}
;
_.next_0 = function next_40(){
  return $next_13(this);
}
;
_.nonEmpty = function nonEmpty_59(){
  return nonEmpty_22(this);
}
;
_.seq = function seq_186(){
  return seq_20(this);
}
;
_.seq_0 = function seq_187(){
  return this.seq();
}
;
_.size_1 = function size_88(){
  return size_43(this);
}
;
_.slice_0 = function slice_37(from, until){
  return slice_11(this, from, until);
}
;
_.take = function take_75(n){
  return take_12(this, n);
}
;
_.toArray_1 = function toArray_70(evidence$1){
  return toArray_32(this, evidence$1);
}
;
_.toBuffer = function toBuffer_62(){
  return toBuffer_25(this);
}
;
_.toList = function toList_58(){
  return toList_22(this);
}
;
_.toSeq_0 = function toSeq_128(){
  return toSeq_48(this);
}
;
_.toStream = function toStream_60(){
  return toStream_10(this);
}
;
_.toString$ = function toString_126(){
  return toString_67(this);
}
;
_.zip = function zip_61(that){
  return zip_12(this, that);
}
;
function $$init_905(){
}

function $cur_1(this$static){
  return this$static.cur$u0020;
}

function $cur_$eq_1(this$static, x$1){
  this$static.cur$u0020 = x$1;
}

function $hasNext_12(this$static){
  return isNotNull($cur_1(this$static));
}

function LinkedHashMap$$anon$2_0($outer){
  $$init_905();
  Object_1.call(this);
  $init$_38();
  $init$_66();
  $init$_51();
  this.cur$u0020 = $firstEntry($outer);
}

defineSeed(1170, 1, makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]), LinkedHashMap$$anon$2_0);
_.$div$colon = function $div$colon_60(z, op){
  return $div$colon_22(this, z, op);
}
;
_.addString = function addString_62(b, start, sep, end){
  return addString_23(this, b, start, sep, end);
}
;
_.copyToArray = function copyToArray_123(xs, start){
  copyToArray_48(this, xs, start);
}
;
_.copyToArray_0 = function copyToArray_124(xs, start, len){
  copyToArray_21(this, xs, start, len);
}
;
_.copyToBuffer = function copyToBuffer_60(dest){
  copyToBuffer_22(this, dest);
}
;
_.drop = function drop_78(n){
  return drop_12(this, n);
}
;
_.filter = function filter_76(p){
  return filter_10(this, p);
}
;
_.foldLeft = function foldLeft_62(z, op){
  return foldLeft_24(this, z, op);
}
;
_.forall = function forall_63(p){
  return forall_11(this, p);
}
;
_.foreach = function foreach_71(f){
  foreach_13(this, f);
}
;
_.hasNext = function hasNext_35(){
  return $hasNext_12(this);
}
;
_.isEmpty = function isEmpty_77(){
  return isEmpty_20(this);
}
;
_.isTraversableAgain = function isTraversableAgain_60(){
  return isTraversableAgain_10();
}
;
_.map_0 = function map_35(f){
  return map_10(this, f);
}
;
_.mkString = function mkString_123(sep){
  return mkString_45(this, sep);
}
;
_.mkString_0 = function mkString_124(start, sep, end){
  return mkString_46(this, start, sep, end);
}
;
_.next_0 = function next_41(){
  var $5$, res;
  if ($hasNext_12(this)) {
    res = $key_1($cur_1(this));
    $cur_$eq_1(this, $later($cur_1(this)));
    $5$ = res;
  }
   else {
    $5$ = $empty_0(($clinit_Iterator$() , MODULE$_13)).next_0();
  }
  return $5$;
}
;
_.nonEmpty = function nonEmpty_60(){
  return nonEmpty_22(this);
}
;
_.seq = function seq_188(){
  return seq_20(this);
}
;
_.seq_0 = function seq_189(){
  return this.seq();
}
;
_.size_1 = function size_89(){
  return size_43(this);
}
;
_.slice_0 = function slice_38(from, until){
  return slice_11(this, from, until);
}
;
_.take = function take_76(n){
  return take_12(this, n);
}
;
_.toArray_1 = function toArray_71(evidence$1){
  return toArray_32(this, evidence$1);
}
;
_.toBuffer = function toBuffer_63(){
  return toBuffer_25(this);
}
;
_.toList = function toList_59(){
  return toList_22(this);
}
;
_.toSeq_0 = function toSeq_130(){
  return toSeq_48(this);
}
;
_.toStream = function toStream_61(){
  return toStream_10(this);
}
;
_.toString$ = function toString_127(){
  return toString_67(this);
}
;
_.zip = function zip_62(that){
  return zip_12(this, that);
}
;
var Lscala_collection_mutable_LinkedHashMap_2_classLit = createForClass('scala.collection.mutable.', 'LinkedHashMap', 1167, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_panels_CwAbsolutePanel$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.panels.', 'CwAbsolutePanel$$anonfun$onInitialize$1', 440, Lscala_runtime_AbstractFunction1$mcVI$sp_2_classLit), Lscala_collection_mutable_HashEntry_2_classLit = createForInterface('scala.collection.mutable.', 'HashEntry'), _3Lscala_collection_mutable_HashEntry_2_classLit = createForArray('[Lscala.collection.mutable.', 'HashEntry;', 1334, Lscala_collection_mutable_HashEntry_2_classLit), Lscala_collection_mutable_LinkedEntry_2_classLit = createForClass('scala.collection.mutable.', 'LinkedEntry', 1166, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_panels_CwAbsolutePanel$$anonfun$createOptionsBar$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.panels.', 'CwAbsolutePanel$$anonfun$createOptionsBar$1', 439, Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_panels_CwAbsolutePanel$$anon$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.panels.', 'CwAbsolutePanel$$anon$2', 436, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_panels_CwAbsolutePanel$$anon$3_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.panels.', 'CwAbsolutePanel$$anon$3', 437, Ljava_lang_Object_2_classLit), Lscala_collection_mutable_LinkedHashMap$$anon$1_2_classLit = createForClass('scala.collection.mutable.', 'LinkedHashMap$$anon$1', 1169, Ljava_lang_Object_2_classLit), Lscala_collection_generic_MutableMapFactory_2_classLit = createForClass('scala.collection.generic.', 'MutableMapFactory', 1015, Lscala_collection_generic_MapFactory_2_classLit), Lscala_collection_mutable_LinkedHashMap$_2_classLit = createForClass('scala.collection.mutable.', 'LinkedHashMap$', 1168, Lscala_collection_generic_MutableMapFactory_2_classLit), Lscala_collection_MapLike$DefaultKeySet$$anonfun$foreach$1_2_classLit = createForClass('scala.collection.', 'MapLike$DefaultKeySet$$anonfun$foreach$1', 965, Lscala_runtime_AbstractFunction1_2_classLit), Lscala_collection_MapLike$DefaultKeySet$$anonfun$foreach$2_2_classLit = createForClass('scala.collection.', 'MapLike$DefaultKeySet$$anonfun$foreach$2', 966, Lscala_runtime_AbstractFunction1_2_classLit), Lscala_collection_mutable_LinkedHashMap$$anon$2_2_classLit = createForClass('scala.collection.mutable.', 'LinkedHashMap$$anon$2', 1170, Ljava_lang_Object_2_classLit), Lscala_collection_MapLike$$anon$3_2_classLit = createForClass('scala.collection.', 'MapLike$$anon$3', 961, Ljava_lang_Object_2_classLit);
$entry(onLoad)(20);
