function $setDir(this$static, dir){
  this$static.dir = dir;
}

function $clinit_Dictionary(){
  $clinit_Dictionary = nullMethod;
  cache_0 = new HashMap_0;
  20;
}

function $$init_154(){
}

function $addKeys(this$static, s){
  var map = this$static.dict;
  for (var key in map) {
    if (map.hasOwnProperty(key)) {
      s.add_0(key);
    }
  }
}

function $attach(this$static, name_0){
  try {
    if (typeof $wnd[name_0] != 'object') {
      resourceErrorBadType(name_0);
    }
    this$static.dict = $wnd[name_0];
  }
   catch (e) {
    resourceErrorBadType(name_0);
  }
}

function $get_2(this$static, key){
  key = String(key);
  var map = this$static.dict;
  var value = map[key];
  if (value == null || !map.hasOwnProperty(key)) {
    this$static.resourceError(key);
  }
  return String(value);
}

function $keySet(this$static){
  var s;
  s = new HashSet_0;
  $addKeys(this$static, s);
  return s;
}

function $toString_1(this$static){
  return this$static.label;
}

function Dictionary_0(name_0){
  Object_1.call(this);
  $$init_154();
  if (jsEquals(name_0, null) || $equals_3('', name_0)) {
    throw new IllegalArgumentException_1('Cannot create a Dictionary with a null or empty name');
  }
  this.label = 'Dictionary ' + name_0;
  $attach(this, name_0);
  if (isNull(this.dict)) {
    throw new MissingResourceException_0("Cannot find JavaScript object with the name '" + name_0 + "'", name_0, null);
  }
}

function getDictionary(name_0){
  $clinit_Dictionary();
  var target;
  target = dynamicCast(cache_0.get(name_0), Q$Dictionary);
  if (isNull(target)) {
    target = new Dictionary_0(name_0);
    cache_0.put(name_0, target);
  }
  return target;
}

function resourceErrorBadType(name_0){
  throw new MissingResourceException_0("'" + name_0 + "' is not a JavaScript object and cannot be used as a Dictionary", null, name_0);
}

function Dictionary(){
}

_ = Dictionary_0.prototype = Dictionary.prototype = new Object_0;
_.getClass$ = function getClass_155(){
  return Lcom_google_gwt_i18n_client_Dictionary_2_classLit;
}
;
_.resourceError = function resourceError(key){
  var error;
  error = "Cannot find '" + key + "' in " + this;
  throw new MissingResourceException_0(error, $toString_1(this), key);
}
;
_.toString$ = function toString_9(){
  return $toString_1(this);
}
;
_.castableTypeMap$ = makeCastMap([Q$Dictionary]);
_.dict = null;
_.label = null;
var cache_0;
_ = ShowcaseConstants_.prototype;
_.cwDictionaryExampleLinkText = function cwDictionaryExampleLinkText(){
  return '<b>This example interacts with the following JavaScript variable:<\/b>';
}
;
function $onInitialize_2(this$static){
  var columnCount$1, layout, source, userInfo$1, userInfoGrid$1;
  layout = new VerticalPanel_0;
  source = new HTML_1('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');
  $setDir($getElement(source), 'ltr');
  $setProperty_0($getStyle($getElement(source)), 'textAlign', 'left');
  $add_16(layout, new HTML_1(this$static.constants.cwDictionaryExampleLinkText()));
  $add_16(layout, source);
  userInfoGrid$1 = new FlexTable_0;
  userInfo$1 = getDictionary('userInfo');
  columnCount$1 = new IntRef_0(0);
  $javaToScala(($clinit_JavaConversions$() , MODULE$_3 , $keySet(userInfo$1))).foreach(new CwDictionaryExample$$anonfun$onInitialize$1_0(userInfoGrid$1, userInfo$1, columnCount$1));
  $setStyleName_2($getRowFormatter(userInfoGrid$1), 0, 'cw-DictionaryExample-headerRow');
  $setStyleName_2($getRowFormatter(userInfoGrid$1), 1, 'cw-DictionaryExample-dataRow');
  $add_16(layout, new HTML_1('<br><br>'));
  $add_16(layout, userInfoGrid$1);
  return layout;
}

_ = CwDictionaryExample$$anon$1.prototype;
_.onSuccess = function onSuccess_3(){
  this.callback$1.onSuccess_0($onInitialize_2(this.$outer$u0020));
}
;
function $$init_339(){
}

function $apply_19(this$static, key){
  var value;
  value = $get_2(this$static.userInfo$1, key);
  $setHTML_2(this$static.userInfoGrid$1, 0, this$static.columnCount$1.elem, key);
  $setHTML_2(this$static.userInfoGrid$1, 1, this$static.columnCount$1.elem, value);
  this$static.columnCount$1.elem = this$static.columnCount$1.elem + 1;
}

function CwDictionaryExample$$anonfun$onInitialize$1_0(userInfoGrid$1, userInfo$1, columnCount$1){
  $$init_339();
  this.userInfoGrid$1 = userInfoGrid$1;
  this.userInfo$1 = userInfo$1;
  this.columnCount$1 = columnCount$1;
  AbstractFunction1_0.call(this);
}

function CwDictionaryExample$$anonfun$onInitialize$1(){
}

_ = CwDictionaryExample$$anonfun$onInitialize$1_0.prototype = CwDictionaryExample$$anonfun$onInitialize$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_20(v1){
  $apply_19(this, dynamicCast(v1, Q$String));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_340(){
  return Lcom_google_gwt_sample_showcase_client_content_i18n_CwDictionaryExample$$anonfun$onInitialize$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.columnCount$1 = null;
_.userInfo$1 = null;
_.userInfoGrid$1 = null;
function $setStyleName_2(this$static, row, styleName){
  setStyleName($ensureElement_0(this$static, row), styleName);
}

var Lcom_google_gwt_i18n_client_Dictionary_2_classLit = createForClass('com.google.gwt.i18n.client.', 'Dictionary', 'Dictionary', Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_i18n_CwDictionaryExample$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'CwDictionaryExample$$anonfun$onInitialize$1', 'CwDictionaryExample$$anonfun$onInitialize$1', Lscala_runtime_AbstractFunction1_2_classLit);
$entry(onLoad)(34);
