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

function ConstantMap(){
}

_ = ConstantMap_0.prototype = ConstantMap.prototype = new AbstractMap;
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
_.getClass$ = function getClass_180(){
  return Lcom_google_gwt_i18n_client_impl_ConstantMap_2_classLit;
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
_.castableTypeMap$ = makeCastMap([Q$Map]);
_.keys = null;
_.map = null;
function $$init_182(){
}

function ConstantMap$1_0(this$0){
  this.this$0 = this$0;
  AbstractSet_0.call(this);
  $$init_182();
}

function ConstantMap$1(){
}

_ = ConstantMap$1_0.prototype = ConstantMap$1.prototype = new AbstractSet;
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
_.getClass$ = function getClass_183(){
  return Lcom_google_gwt_i18n_client_impl_ConstantMap$1_2_classLit;
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
_.castableTypeMap$ = makeCastMap([Q$Iterable, Q$Collection, Q$Set]);
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

function ConstantMap$1$1(){
}

_ = ConstantMap$1$1_0.prototype = ConstantMap$1$1.prototype = new Object_0;
_.getClass$ = function getClass_184(){
  return Lcom_google_gwt_i18n_client_impl_ConstantMap$1$1_2_classLit;
}
;
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

function ConstantMap$2(){
}

_ = ConstantMap$2_0.prototype = ConstantMap$2.prototype = new AbstractSet;
_.contains_0 = function contains_1(o){
  return $containsKey(this.this$0, o);
}
;
_.getClass$ = function getClass_185(){
  return Lcom_google_gwt_i18n_client_impl_ConstantMap$2_2_classLit;
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
_.castableTypeMap$ = makeCastMap([Q$Iterable, Q$Collection, Q$Set]);
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

function ConstantMap$EntryImpl(){
}

_ = ConstantMap$EntryImpl_0.prototype = ConstantMap$EntryImpl.prototype = new Object_0;
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
_.getClass$ = function getClass_186(){
  return Lcom_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_2_classLit;
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
_.castableTypeMap$ = makeCastMap([Q$Map$Entry]);
_.key = null;
_.value_0 = null;
function clone_0(array){
  return cloneSubrange(array, 0, array.length);
}

_ = ShowcaseConstants_.prototype;
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
  $onClick(($clinit_Handlers$() , MODULE$_2).enrichHasClickHandlers(link), new CwConstantsExample$$anonfun$onInitialize$1_0(this$static));
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
  $javaToScala(($clinit_JavaConversions$() , MODULE$_3 , colorMap.entrySet_0())).foreach(new CwConstantsExample$$anonfun$onInitialize$2_0(colorBox$1));
  $setHTML_2(layout, 3, 0, exampleConstants.favoriteColor());
  $setWidget_2(layout, 3, 1, colorBox$1);
  return layout;
}

_ = CwConstantsExample$$anon$1.prototype;
_.onSuccess = function onSuccess_0(){
  this.callback$1.onSuccess_0($onInitialize(this.$outer$u0020));
}
;
function $$init_323(){
}

function $apply_16(this$static){
  $selectTab(this$static.$outer$u0020, 2);
}

function CwConstantsExample$$anonfun$onInitialize$1_0($outer){
  $$init_323();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  AbstractFunction1_0.call(this);
}

function CwConstantsExample$$anonfun$onInitialize$1(){
}

_ = CwConstantsExample$$anonfun$onInitialize$1_0.prototype = CwConstantsExample$$anonfun$onInitialize$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_17(v1){
  $apply_16(this, dynamicCast(v1, Q$ClickEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_324(){
  return Lcom_google_gwt_sample_showcase_client_content_i18n_CwConstantsExample$$anonfun$onInitialize$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.$outer$u0020 = null;
function $$init_324(){
}

function $apply_17(this$static, entry){
  var key, value;
  key = dynamicCast(entry.getKey(), Q$String);
  value = dynamicCast(entry.getValue(), Q$String);
  $addItem_0(this$static.colorBox$1, value, key);
}

function CwConstantsExample$$anonfun$onInitialize$2_0(colorBox$1){
  $$init_324();
  this.colorBox$1 = colorBox$1;
  AbstractFunction1_0.call(this);
}

function CwConstantsExample$$anonfun$onInitialize$2(){
}

_ = CwConstantsExample$$anonfun$onInitialize$2_0.prototype = CwConstantsExample$$anonfun$onInitialize$2.prototype = new AbstractFunction1;
_.apply_0 = function apply_18(v1){
  $apply_17(this, dynamicCast(v1, Q$Map$Entry));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_325(){
  return Lcom_google_gwt_sample_showcase_client_content_i18n_CwConstantsExample$$anonfun$onInitialize$2_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.colorBox$1 = null;
function $$init_353(this$static){
  this$static.cache = new HashMap_0;
}

function ExampleConstants__0(){
  Object_1.call(this);
  $$init_353(this);
}

function ExampleConstants_(){
}

_ = ExampleConstants__0.prototype = ExampleConstants_.prototype = new Object_0;
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
_.getClass$ = function getClass_354(){
  return Lcom_google_gwt_sample_showcase_client_content_i18n_ExampleConstants_1_2_classLit;
}
;
_.lastName = function lastName(){
  return '<b>Last Name:<\/b>';
}
;
function asList(array){
  return new Arrays$ArrayList_0(array);
}

function $$init_757(){
}

function $size_4(this$static){
  return this$static.array.length;
}

function Arrays$ArrayList_0(array){
  AbstractList_0.call(this);
  $$init_757();
  jsNotEquals(array, null) || throwAssertionError();
  this.array = array;
}

function Arrays$ArrayList(){
}

_ = Arrays$ArrayList_0.prototype = Arrays$ArrayList.prototype = new AbstractList;
_.contains_0 = function contains_7(o){
  return this.indexOf_0(o) != -1;
}
;
_.get_0 = function get_68(index){
  checkIndex(index, $size_4(this));
  return this.array[index];
}
;
_.getClass$ = function getClass_759(){
  return Ljava_util_Arrays$ArrayList_2_classLit;
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
_.size_1 = function size_12(){
  return $size_4(this);
}
;
_.toArray = function toArray_4(){
  return clone_0(this.array);
}
;
_.toArray_0 = function toArray_5(out){
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
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Iterable, Q$Collection, Q$List, Q$RandomAccess]);
_.array = null;
var Lcom_google_gwt_sample_showcase_client_content_i18n_ExampleConstants_1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'ExampleConstants_', 'ExampleConstants_', Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_i18n_CwConstantsExample$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'CwConstantsExample$$anonfun$onInitialize$1', 'CwConstantsExample$$anonfun$onInitialize$1', Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_i18n_CwConstantsExample$$anonfun$onInitialize$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'CwConstantsExample$$anonfun$onInitialize$2', 'CwConstantsExample$$anonfun$onInitialize$2', Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_i18n_client_impl_ConstantMap_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'ConstantMap', 'ConstantMap', Ljava_util_AbstractMap_2_classLit), Lcom_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'ConstantMap$EntryImpl', 'ConstantMap$EntryImpl', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_impl_ConstantMap$1_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'ConstantMap$1', 'ConstantMap$1', Ljava_util_AbstractSet_2_classLit), Lcom_google_gwt_i18n_client_impl_ConstantMap$1$1_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'ConstantMap$1$1', 'ConstantMap$1$1', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_impl_ConstantMap$2_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'ConstantMap$2', 'ConstantMap$2', Ljava_util_AbstractSet_2_classLit), Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util.', 'Arrays$ArrayList', 'Arrays$ArrayList', Ljava_util_AbstractList_2_classLit);
$entry(onLoad)(32);
