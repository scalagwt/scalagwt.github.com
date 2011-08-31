function $$init_179(){
}

function $containsKey(this$static, key){
  return jsNotEquals($get_3(this$static, key), null);
}

function $get_3(this$static, key){
  return instanceOf(key, Q$String)?$get_4(this$static, dynamicCast(key, Q$String)):null;
}

function $get_4(this$static, key){
  return this$static.map[':' + key];
}

function $init_0(this$static){
  this$static.map = createObject();
}

function $putImpl(this$static, key, value){
  this$static.map[':' + key] = value;
}

function $size_0(this$static){
  return this$static.keys.length;
}

function ConstantMap_0(keys, values){
  var i;
  AbstractMap_0.call(this);
  $$init_179();
  this.keys = keys;
  $init_0(this);
  for (i = 0; i < keys.length; ++i) {
    jsNotEquals(keys[i], null) || throwAssertionError();
    jsNotEquals(values[i], null) || throwAssertionError();
    $putImpl(this, keys[i], values[i]);
  }
}

defineSeed(221, 222, makeCastMap([Q$Map]), ConstantMap_0);
_.containsKey = function containsKey_0(key){
  return $containsKey(this, key);
}
;
_.entrySet_0 = function entrySet_0(){
  return new ConstantMap$1_0(this);
}
;
_.get = function get_4(key){
  return $get_3(this, key);
}
;
_.keySet_0 = function keySet_0(){
  return new ConstantMap$2_0(this);
}
;
_.size_1 = function size_1(){
  return $size_0(this);
}
;
_.keys = null;
_.map = null;
function $$init_182(){
}

function ConstantMap$1_0(this$0){
  this.this$0 = this$0;
  AbstractSet_0.call(this);
  $$init_182();
}

defineSeed(223, 224, makeCastMap([Q$Iterable, Q$Collection, Q$Set]), ConstantMap$1_0);
_.contains_0 = function contains_0(o){
  var other, value;
  if (!instanceOf(o, Q$Map$Entry)) {
    return false;
  }
  other = dynamicCast(o, Q$Map$Entry);
  value = $get_3(this.this$0, other.getKey());
  if (jsNotEquals(value, null) && $equals_3(value, other.getValue())) {
    return true;
  }
  return false;
}
;
_.iterator_0 = function iterator_0(){
  return new ConstantMap$1$1_0(this);
}
;
_.size_1 = function size_2(){
  return $size_0(this.this$0);
}
;
_.this$0 = null;
function $$init_183(this$static){
}

function $hasNext(this$static){
  return this$static.next < $size_0(this$static.this$1.this$0);
}

function $next(this$static){
  var key;
  if (!$hasNext(this$static)) {
    throw new NoSuchElementException_0;
  }
  key = this$static.this$1.this$0.keys[this$static.next++];
  return new ConstantMap$EntryImpl_0(key, $get_4(this$static.this$1.this$0, key));
}

function ConstantMap$1$1_0(this$1){
  this.this$1 = this$1;
  Object_1.call(this);
  $$init_183(this);
}

defineSeed(226, 1, {}, ConstantMap$1$1_0);
_.hasNext = function hasNext(){
  return $hasNext(this);
}
;
_.next_0 = function next_0(){
  return $next(this);
}
;
_.remove_2 = function remove_2(){
  throw new UnsupportedOperationException_0;
}
;
_.next = 0;
_.this$1 = null;
function $$init_184(){
}

function ConstantMap$2_0(this$0){
  this.this$0 = this$0;
  AbstractSet_0.call(this);
  $$init_184();
}

defineSeed(227, 224, makeCastMap([Q$Iterable, Q$Collection, Q$Set]), ConstantMap$2_0);
_.contains_0 = function contains_1(o){
  return $containsKey(this.this$0, o);
}
;
_.iterator_0 = function iterator_1(){
  return asList(this.this$0.keys).iterator_0();
}
;
_.size_1 = function size_3(){
  return $size_0(this.this$0);
}
;
_.this$0 = null;
function $$init_185(){
}

function $getKey(this$static){
  return this$static.key;
}

function $getValue_2(this$static){
  return this$static.value_0;
}

function $setValue_0(){
  throw new UnsupportedOperationException_0;
}

function ConstantMap$EntryImpl_0(key, value){
  Object_1.call(this);
  $$init_185();
  jsNotEquals(key, null) || throwAssertionError();
  jsNotEquals(value, null) || throwAssertionError();
  this.key = key;
  this.value_0 = value;
}

defineSeed(228, 1, makeCastMap([Q$Map$Entry]), ConstantMap$EntryImpl_0);
_.equals$ = function equals_3(o){
  var other;
  if (instanceOf(o, Q$Map$Entry)) {
    other = dynamicCast(o, Q$Map$Entry);
    if ($equals_3(this.key, other.getKey()) && $equals_3(this.value_0, other.getValue())) {
      return true;
    }
  }
  return false;
}
;
_.getKey = function getKey(){
  return $getKey(this);
}
;
_.getValue = function getValue_0(){
  return $getValue_2(this);
}
;
_.hashCode$ = function hashCode_5(){
  var keyHash, valueHash;
  keyHash = 0;
  valueHash = 0;
  jsNotEquals($getKey(this), null) && (keyHash = $hashCode_4($getKey(this)));
  jsNotEquals($getValue_2(this), null) && (valueHash = $hashCode_4($getValue_2(this)));
  return keyHash ^ valueHash;
}
;
_.setValue = function setValue(value){
  return $setValue_0(dynamicCast(value, Q$String));
}
;
_.toString$ = function toString_11(){
  return this.key + '=' + this.value_0;
}
;
_.key = null;
_.value_0 = null;
function clone_0(array){
  return cloneSubrange(array, 0, array.length);
}

defineSeed(393, 1, makeCastMap([Q$ShowcaseConstants]));
_.cwConstantsExampleLinkText = function cwConstantsExampleLinkText(){
  return 'This example interacts with the sample interface: ';
}
;
function $onInitialize(this$static){
  var colorBox$1, colorMap, exampleConstants, firstNameBox, lastNameBox, layout, link, linkPanel;
  exampleConstants = new ExampleConstants__0;
  layout = new FlexTable_0;
  $setCellSpacing(layout, 5);
  link = new HTML_1(' <a href="javascript:void(0);">ExampleConstants<\/a>');
  $onClick(($clinit_Handlers$() , MODULE$_3).enrichHasClickHandlers(link), new CwConstantsExample$$anonfun$onInitialize$1_0(this$static));
  linkPanel = new HorizontalPanel_0;
  $setSpacing(linkPanel, 3);
  $add_11(linkPanel, new HTML_1(this$static.constants.cwConstantsExampleLinkText()));
  $add_11(linkPanel, link);
  $setWidget_2(layout, 0, 0, linkPanel);
  $setColSpan($getFlexCellFormatter(layout), 0, 0, 2);
  firstNameBox = new TextBox_0;
  $setText_8(firstNameBox, 'Amelie');
  firstNameBox.setWidth('17em');
  $setHTML_2(layout, 1, 0, exampleConstants.firstName());
  $setWidget_2(layout, 1, 1, firstNameBox);
  lastNameBox = new TextBox_0;
  $setText_8(lastNameBox, 'Crutcher');
  lastNameBox.setWidth('17em');
  $setHTML_2(layout, 2, 0, exampleConstants.lastName());
  $setWidget_2(layout, 2, 1, lastNameBox);
  colorBox$1 = new ListBox_0;
  colorMap = exampleConstants.colorMap();
  dynamicCast($mapAsScalaMap(($clinit_JavaConversions$() , MODULE$_14 , colorMap)).filter_0(new CwConstantsExample$$anonfun$onInitialize$2_0), Q$IterableLike).foreach(new CwConstantsExample$$anonfun$onInitialize$3_0(colorBox$1));
  $setHTML_2(layout, 3, 0, exampleConstants.favoriteColor());
  $setWidget_2(layout, 3, 1, colorBox$1);
  return layout;
}

defineSeed(415, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_0(){
  this.callback$1.onSuccess_0($onInitialize(this.$outer$u0020));
}
;
function $$init_326(){
}

function $apply_17(this$static){
  $selectTab(this$static.$outer$u0020, 2);
}

function CwConstantsExample$$anonfun$onInitialize$1_0($outer){
  $$init_326();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  AbstractFunction1_0.call(this);
}

defineSeed(416, 350, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwConstantsExample$$anonfun$onInitialize$1_0);
_.apply_0 = function apply_18(v1){
  $apply_17(this, dynamicCast(v1, Q$ClickEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.$outer$u0020 = null;
function $$init_327(){
}

function $apply_18(check$ifrefutable$1){
  var temp1;
  temp1 = check$ifrefutable$1;
  return isNotNull(temp1);
}

function CwConstantsExample$$anonfun$onInitialize$2_0(){
  $$init_327();
  AbstractFunction1_0.call(this);
}

defineSeed(417, 350, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwConstantsExample$$anonfun$onInitialize$2_0);
_.apply_0 = function apply_19(v1){
  return boxToBoolean($apply_18(dynamicCast(v1, Q$Tuple2)));
}
;
function $$init_328(){
}

function $apply_19(this$static, x$2){
  var temp4;
  temp4 = x$2;
  if (isNotNull(temp4)) {
    $addItem_0(this$static.colorBox$1, dynamicCast($_2(temp4), Q$String), dynamicCast($_1(temp4), Q$String));
  }
   else {
    throw new MatchError_0(temp4);
  }
}

function CwConstantsExample$$anonfun$onInitialize$3_0(colorBox$1){
  $$init_328();
  this.colorBox$1 = colorBox$1;
  AbstractFunction1_0.call(this);
}

defineSeed(418, 350, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwConstantsExample$$anonfun$onInitialize$3_0);
_.apply_0 = function apply_20(v1){
  $apply_19(this, dynamicCast(v1, Q$Tuple2));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.colorBox$1 = null;
function $$init_360(this$static){
  this$static.cache = new HashMap_0;
}

function ExampleConstants__0(){
  Object_1.call(this);
  $$init_360(this);
}

defineSeed(450, 1, {}, ExampleConstants__0);
_.colorMap = function colorMap_0(){
  var args;
  args = dynamicCast(this.cache.get('colorMap'), Q$Map);
  if (isNull(args)) {
    args = new ConstantMap_0(initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['red', 'white', 'yellow', 'black', 'blue', 'green', 'grey', 'lightGrey']), initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Red', 'White', 'Yellow', 'Black', 'Blue', 'Green', 'Grey', 'Light Grey']));
    this.cache.put('colorMap', args);
  }
  return args;
}
;
_.favoriteColor = function favoriteColor(){
  return '<b>Favorite color:<\/b>';
}
;
_.firstName = function firstName(){
  return '<b>First Name:<\/b>';
}
;
_.lastName = function lastName(){
  return '<b>Last Name:<\/b>';
}
;
function asList(array){
  return new Arrays$ArrayList_0(array);
}

function $$init_773(){
}

function $size_4(this$static){
  return this$static.array.length;
}

function Arrays$ArrayList_0(array){
  AbstractList_0.call(this);
  $$init_773();
  jsNotEquals(array, null) || throwAssertionError();
  this.array = array;
}

defineSeed(934, 751, makeCastMap([Q$Serializable, Q$Iterable, Q$Collection, Q$List, Q$RandomAccess]), Arrays$ArrayList_0);
_.contains_0 = function contains_7(o){
  return this.indexOf_0(o) != -1;
}
;
_.get_0 = function get_68(index){
  checkIndex(index, $size_4(this));
  return this.array[index];
}
;
_.set = function set_3(index, value){
  var was;
  checkIndex(index, $size_4(this));
  was = this.array[index];
  setCheck(this.array, index, value);
  return was;
}
;
_.size_1 = function size_11(){
  return $size_4(this);
}
;
_.toArray = function toArray_3(){
  return clone_0(this.array);
}
;
_.toArray_0 = function toArray_4(out){
  var i, size;
  size = $size_4(this);
  out.length < size && (out = createFrom(out, size));
  for (i = 0; i < size; ++i) {
    setCheck(out, i, this.array[i]);
  }
  out.length > size && setCheck(out, size, null);
  return out;
}
;
_.array = null;
function $mapAsScalaMap(m_0){
  var $18$, temp52;
  temp52 = m_0;
  instanceOf(temp52, Q$JavaConversions$MutableMapWrapper)?($18$ = dynamicCast(temp52, Q$JavaConversions$MutableMapWrapper).nullMethod()):($18$ = new JavaConversions$JMapWrapper_0(m_0));
  return $18$;
}

function $$init_837(){
}

function $empty_1(){
  return new JavaConversions$JMapWrapper_0(new HashMap_0);
}

function $underlying_1(this$static){
  return this$static.underlying$u0020;
}

function JavaConversions$JMapWrapper_0(underlying){
  $$init_837();
  this.underlying$u0020 = underlying;
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
  $init$_52();
  $init$_12();
}

defineSeed(1048, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenMap, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Map_0, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$Growable, Q$HasNewBuilder, Q$Subtractable, Q$Builder, Q$Map_2]), JavaConversions$JMapWrapper_0);
_.$div$colon = function $div$colon_11(z, op){
  return $div$colon_22(this, z, op);
}
;
_.$minus$eq = function $minus$eq(key){
  return $minus$eq_1(this, key);
}
;
_.$minus$eq_0 = function $minus$eq_0(key){
  return this.$minus$eq(key);
}
;
_.$minus = function $minus_0(key){
  return this.$minus_0(key);
}
;
_.$minus_0 = function $minus_1(key){
  return $minus_14(this, key);
}
;
_.$plus$eq = function $plus$eq(elem){
  return this.$plus$eq_1(dynamicCast(elem, Q$Tuple2));
}
;
_.$plus$eq_0 = function $plus$eq_0(elem){
  return this.$plus$eq_1(dynamicCast(elem, Q$Tuple2));
}
;
_.$plus$eq_1 = function $plus$eq_1(kv){
  return $plus$eq_3(this, kv);
}
;
_.$plus$plus$eq = function $plus$plus$eq(xs){
  return $plus$plus$eq_2(this, xs);
}
;
_.addString = function addString_11(b, start, sep, end){
  return addString_17(this, b, start, sep, end);
}
;
_.apply$mcII$sp = function apply$mcII$sp_3(v1){
  return apply$mcII$sp_0(this, v1);
}
;
_.apply$mcVI$sp = function apply$mcVI$sp_16(v1){
  apply$mcVI$sp_12(this, v1);
}
;
_.apply_0 = function apply_109(key){
  return apply_119(this, key);
}
;
_.canEqual = function canEqual_5(that){
  return canEqual_2();
}
;
_.clone = function clone_2(){
  return clone_6();
}
;
_.companion = function companion_1(){
  return companion_41();
}
;
_.contains_0 = function contains_13(key){
  return contains_16(this, key);
}
;
_.copyToArray = function copyToArray_26(xs, start){
  copyToArray_48(this, xs, start);
}
;
_.copyToArray_0 = function copyToArray_27(xs, start, len){
  copyToArray_6(this, xs, start, len);
}
;
_.copyToBuffer = function copyToBuffer_11(dest){
  copyToBuffer_22(this, dest);
}
;
_.default_$ = function default_$(key){
  return default_$_0(key);
}
;
_.drop_0 = function drop_15(n){
  return drop_3(this, n);
}
;
_.empty_0 = function empty_1(){
  return $empty_1();
}
;
_.equals$ = function equals_34(that){
  return equals_29(this, that);
}
;
_.filter_0 = function filter_13(p){
  return filter_29(this, p);
}
;
_.filterNot = function filterNot_0(p){
  return this.filterNot_0(p);
}
;
_.filterNot_0 = function filterNot_1(p){
  return filterNot_4(this, p);
}
;
_.foldLeft = function foldLeft_12(z, op){
  return foldLeft_24(this, z, op);
}
;
_.forall = function forall_14(p){
  return forall_3(this, p);
}
;
_.foreach = function foreach_16(f){
  foreach_4(this, f);
}
;
_.genericBuilder = function genericBuilder_0(){
  return genericBuilder_8(this);
}
;
_.get_2 = function get_75(k){
  return get_76(this, k);
}
;
_.hashCode$ = function hashCode_43(){
  return hashCode_38(this);
}
;
_.head = function head_2(){
  return head_0(this);
}
;
_.isEmpty = function isEmpty_23(){
  return isEmpty_29(this);
}
;
_.isTraversableAgain = function isTraversableAgain_13(){
  return isTraversableAgain_0();
}
;
_.iterator_1 = function iterator_27(){
  return iterator_28(this);
}
;
_.keySet_1 = function keySet_3(){
  return keySet_4(this);
}
;
_.keys_0 = function keys_0(){
  return keys_1(this);
}
;
_.keysIterator = function keysIterator(){
  return keysIterator_0(this);
}
;
_.mapResult = function mapResult(f){
  return mapResult_8(this, f);
}
;
_.mkString = function mkString_23(sep){
  return mkString_45(this, sep);
}
;
_.mkString_0 = function mkString_24(start, sep, end){
  return mkString_46(this, start, sep, end);
}
;
_.newBuilder = function newBuilder_1(){
  return newBuilder_60(this);
}
;
_.nonEmpty = function nonEmpty_11(){
  return nonEmpty_22(this);
}
;
_.productArity = function productArity_5(){
  return 1;
}
;
_.productElement = function productElement_5(x$1){
  var $77$, temp113;
  temp113 = x$1;
  if (temp113 == 0) {
    $77$ = $underlying_1(this);
  }
   else {
    throw new IndexOutOfBoundsException_1(boxToInteger(x$1).toString$());
  }
  return $77$;
}
;
_.productIterator = function productIterator_4(){
  return productIterator_0(this);
}
;
_.productPrefix = function productPrefix_6(){
  return 'JMapWrapper';
}
;
_.put_0 = function put_2(k, v){
  return put_3(this, k, v);
}
;
_.repr = function repr_1(){
  return repr_9(this);
}
;
_.result = function result_0(){
  return this.result_0();
}
;
_.result_0 = function result_1(){
  return result_19(this);
}
;
_.sameElements = function sameElements_2(that){
  return sameElements_0(this, that);
}
;
_.seq_1 = function seq_25(){
  return this.seq_4();
}
;
_.seq_2 = function seq_26(){
  return this.seq_4();
}
;
_.seq_0 = function seq_27(){
  return this.seq_4();
}
;
_.seq_4 = function seq_28(){
  return seq_196(this);
}
;
_.size_1 = function size_30(){
  return size_32(this);
}
;
_.sizeHint$default$2 = function sizeHint$default$2(){
  return sizeHint$default$2_8();
}
;
_.sizeHint = function sizeHint(size){
  sizeHint_19();
}
;
_.sizeHint_0 = function sizeHint_0(coll, delta){
  sizeHint_20(this, coll, delta);
}
;
_.sizeHintBounded = function sizeHintBounded(size, boundingColl){
  sizeHintBounded_8(this, size, boundingColl);
}
;
_.stringPrefix = function stringPrefix_0(){
  return stringPrefix_3();
}
;
_.tail = function tail_1(){
  return tail_9(this);
}
;
_.take_0 = function take_15(n){
  return take_3(this, n);
}
;
_.toArray_1 = function toArray_21(evidence$1){
  return toArray_32(this, evidence$1);
}
;
_.toBuffer = function toBuffer_12(){
  return toBuffer_18(this);
}
;
_.toList = function toList_11(){
  return toList_22(this);
}
;
_.toSeq_0 = function toSeq_24(){
  return toSeq_35(this);
}
;
_.toStream = function toStream_13(){
  return toStream_2(this);
}
;
_.toString$ = function toString_70(){
  return toString_76(this);
}
;
_.underlying = function underlying_0(){
  return $underlying_1(this);
}
;
_.zip_0 = function zip_15(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_3(bf){
  return zipWithIndex_0(this, bf);
}
;
function $$init_838(){
}

function $next_10(this$static){
  var e;
  e = dynamicCast($ui(this$static).next_0(), Q$Map$Entry);
  return new Tuple2_0(e.getKey(), e.getValue());
}

function $ui(this$static){
  return this$static.ui$u0020;
}

function JavaConversions$JMapWrapperLike$$anon$2_0($outer){
  $$init_838();
  Object_1.call(this);
  $init$_38();
  $init$_66();
  $init$_51();
  this.ui$u0020 = $outer.underlying().entrySet_0().iterator_0();
}

defineSeed(1049, 1, makeCastMap([Q$ScalaObject, Q$GenTraversableOnce, Q$TraversableOnce]), JavaConversions$JMapWrapperLike$$anon$2_0);
_.$div$colon = function $div$colon_12(z, op){
  return $div$colon_22(this, z, op);
}
;
_.addString = function addString_12(b, start, sep, end){
  return addString_23(this, b, start, sep, end);
}
;
_.copyToArray = function copyToArray_28(xs, start){
  copyToArray_48(this, xs, start);
}
;
_.copyToArray_0 = function copyToArray_29(xs, start, len){
  copyToArray_21(this, xs, start, len);
}
;
_.copyToBuffer = function copyToBuffer_12(dest){
  copyToBuffer_22(this, dest);
}
;
_.drop = function drop_16(n){
  return drop_12(this, n);
}
;
_.filter = function filter_14(p){
  return filter_10(this, p);
}
;
_.foldLeft = function foldLeft_13(z, op){
  return foldLeft_24(this, z, op);
}
;
_.forall = function forall_15(p){
  return forall_11(this, p);
}
;
_.foreach = function foreach_17(f){
  foreach_13(this, f);
}
;
_.hasNext = function hasNext_24(){
  return $ui(this).hasNext();
}
;
_.isEmpty = function isEmpty_24(){
  return isEmpty_20(this);
}
;
_.isTraversableAgain = function isTraversableAgain_14(){
  return isTraversableAgain_10();
}
;
_.map_0 = function map_12(f){
  return map_10(this, f);
}
;
_.mkString = function mkString_25(sep){
  return mkString_45(this, sep);
}
;
_.mkString_0 = function mkString_26(start, sep, end){
  return mkString_46(this, start, sep, end);
}
;
_.next_0 = function next_25(){
  return $next_10(this);
}
;
_.nonEmpty = function nonEmpty_12(){
  return nonEmpty_22(this);
}
;
_.seq = function seq_29(){
  return seq_20(this);
}
;
_.seq_0 = function seq_30(){
  return this.seq();
}
;
_.size_1 = function size_31(){
  return size_43(this);
}
;
_.slice_0 = function slice_13(from, until){
  return slice_11(this, from, until);
}
;
_.take = function take_16(n){
  return take_12(this, n);
}
;
_.toArray_1 = function toArray_22(evidence$1){
  return toArray_32(this, evidence$1);
}
;
_.toBuffer = function toBuffer_13(){
  return toBuffer_25(this);
}
;
_.toList = function toList_12(){
  return toList_22(this);
}
;
_.toSeq_0 = function toSeq_26(){
  return toSeq_48(this);
}
;
_.toStream = function toStream_14(){
  return toStream_10(this);
}
;
_.toString$ = function toString_71(){
  return toString_67(this);
}
;
_.zip = function zip_16(that){
  return zip_12(this, that);
}
;
function $init$_52(){
}

function $minus$eq_1($this, key){
  $this.underlying().remove_0(key);
  return $this;
}

function $plus$eq_3($this, kv){
  $this.underlying().put($_1(kv), $_2(kv));
  return $this;
}

function get_76($this, k){
  var $79$, $80$, v;
  v = $this.underlying().get(k);
  if (jsNotEquals(v, null)) {
    $79$ = new Some_0(v);
  }
   else {
    $this.underlying().containsKey(k)?($80$ = new Some_0(null)):($80$ = ($clinit_None$() , MODULE$_10));
    $79$ = $80$;
  }
  return $79$;
}

function iterator_28($this){
  return new JavaConversions$JMapWrapperLike$$anon$2_0($this);
}

function put_3($this, k, v){
  var $81$, r;
  r = $this.underlying().put(k, v);
  jsNotEquals(r, null)?($81$ = new Some_0(r)):($81$ = ($clinit_None$() , MODULE$_10));
  return $81$;
}

function size_32($this){
  return $this.underlying().size_1();
}

var Lcom_google_gwt_sample_showcase_client_content_i18n_ExampleConstants_1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'ExampleConstants_', 450, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_i18n_CwConstantsExample$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'CwConstantsExample$$anonfun$onInitialize$1', 416, Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_i18n_CwConstantsExample$$anonfun$onInitialize$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'CwConstantsExample$$anonfun$onInitialize$2', 417, Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_i18n_CwConstantsExample$$anonfun$onInitialize$3_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'CwConstantsExample$$anonfun$onInitialize$3', 418, Lscala_runtime_AbstractFunction1_2_classLit), Lscala_collection_JavaConversions$JMapWrapper_2_classLit = createForClass('scala.collection.', 'JavaConversions$JMapWrapper', 1048, Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_impl_ConstantMap_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'ConstantMap', 221, Ljava_util_AbstractMap_2_classLit), Lcom_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'ConstantMap$EntryImpl', 228, Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_impl_ConstantMap$1_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'ConstantMap$1', 223, Ljava_util_AbstractSet_2_classLit), Lcom_google_gwt_i18n_client_impl_ConstantMap$1$1_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'ConstantMap$1$1', 226, Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_impl_ConstantMap$2_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'ConstantMap$2', 227, Ljava_util_AbstractSet_2_classLit), Lscala_collection_JavaConversions$JMapWrapperLike$$anon$2_2_classLit = createForClass('scala.collection.', 'JavaConversions$JMapWrapperLike$$anon$2', 1049, Ljava_lang_Object_2_classLit), Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util.', 'Arrays$ArrayList', 934, Ljava_util_AbstractList_2_classLit);
$entry(onLoad)(32);
