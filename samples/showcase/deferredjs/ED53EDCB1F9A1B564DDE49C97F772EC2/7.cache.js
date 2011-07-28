_ = ShowcaseConstants_.prototype;
_.cwListBoxCars = function cwListBoxCars(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwListBoxCars'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['compact', 'sedan', 'coupe', 'convertible', 'SUV', 'truck']);
    this.cache.put('cwListBoxCars', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwListBoxCategories = function cwListBoxCategories(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwListBoxCategories'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Cars', 'Sports', 'Vacation Spots']);
    this.cache.put('cwListBoxCategories', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwListBoxSelectAll = function cwListBoxSelectAll(){
  return '<b>Select all that apply:<\/b>';
}
;
_.cwListBoxSelectCategory = function cwListBoxSelectCategory(){
  return '<b>Select a category:<\/b>';
}
;
_.cwListBoxSports = function cwListBoxSports(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwListBoxSports'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Baseball', 'Basketball', 'Football', 'Hockey', 'Lacrosse', 'Polo', 'Soccer', 'Softball', 'Water Polo']);
    this.cache.put('cwListBoxSports', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwListBoxVacations = function cwListBoxVacations(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwListBoxVacations'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Carribean', 'Grand Canyon', 'Paris', 'Italy', 'New York', 'Las Vegas']);
    this.cache.put('cwListBoxVacations', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
function $com$google$gwt$sample$showcase$client$content$lists$CwListBox$$showCategory(this$static, listBox$1, category){
  var $1$, $2$, listData, temp1;
  $clear_2(listBox$1);
  temp1 = category;
  $1$ = temp1;
  switch ($1$) {
    case 1:
      $2$ = $constants(this$static).cwListBoxSports();
      break;
    case 2:
      $2$ = $constants(this$static).cwListBoxVacations();
      break;
    case 0:
      $2$ = $constants(this$static).cwListBoxCars();
      break;
    default:throw new MatchError_0(boxToInteger(temp1));
  }
  listData = $2$;
  $refArrayOps(($clinit_Predef$() , MODULE$_12 , listData)).foreach(new CwListBox$$anonfun$com$google$gwt$sample$showcase$client$content$lists$CwListBox$$showCategory$1_0(listBox$1));
}

function $onInitialize_6(this$static){
  var dropBox$1, dropBoxPanel, hPanel, listTypes, multiBox$1, multiBoxPanel;
  hPanel = new HorizontalPanel_0;
  $setSpacing(hPanel, 20);
  dropBox$1 = new ListBox_1(false);
  listTypes = $constants(this$static).cwListBoxCategories();
  $refArrayOps(($clinit_Predef$() , MODULE$_12 , listTypes)).foreach(new CwListBox$$anonfun$onInitialize$1_0(dropBox$1));
  $ensureDebugId(dropBox$1, 'cwListBox-dropBox');
  dropBoxPanel = new VerticalPanel_0;
  $setSpacing(dropBoxPanel, 4);
  $add_16(dropBoxPanel, new HTML_1($constants(this$static).cwListBoxSelectCategory()));
  $add_16(dropBoxPanel, dropBox$1);
  $add_11(hPanel, dropBoxPanel);
  multiBox$1 = new ListBox_1(true);
  $ensureDebugId(multiBox$1, 'cwListBox-multiBox');
  multiBox$1.setWidth('11em');
  $setVisibleItemCount(multiBox$1, 10);
  multiBoxPanel = new VerticalPanel_0;
  $setSpacing(multiBoxPanel, 4);
  $add_16(multiBoxPanel, new HTML_1($constants(this$static).cwListBoxSelectAll()));
  $add_16(multiBoxPanel, multiBox$1);
  $add_11(hPanel, multiBoxPanel);
  $onChange(($clinit_Handlers$() , MODULE$_2).enrichHasChangeHandlers(dropBox$1), new CwListBox$$anonfun$onInitialize$2_0(this$static, dropBox$1, multiBox$1));
  $com$google$gwt$sample$showcase$client$content$lists$CwListBox$$showCategory(this$static, multiBox$1, 0);
  $ensureDebugId(multiBox$1, 'cwListBox-multiBox');
  return hPanel;
}

_ = CwListBox$$anon$1.prototype;
_.onSuccess = function onSuccess_7(){
  this.callback$1.onSuccess_0($onInitialize_6(this.$outer$u0020));
}
;
function $$init_274(){
}

function $apply_21(this$static, x$3){
  $addItem(this$static.listBox$1, x$3);
}

function CwListBox$$anonfun$com$google$gwt$sample$showcase$client$content$lists$CwListBox$$showCategory$1_0(listBox$1){
  $$init_274();
  this.listBox$1 = listBox$1;
  AbstractFunction1_0.call(this);
}

function CwListBox$$anonfun$com$google$gwt$sample$showcase$client$content$lists$CwListBox$$showCategory$1(){
}

_ = CwListBox$$anonfun$com$google$gwt$sample$showcase$client$content$lists$CwListBox$$showCategory$1_0.prototype = CwListBox$$anonfun$com$google$gwt$sample$showcase$client$content$lists$CwListBox$$showCategory$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_22(v1){
  $apply_21(this, dynamicCast(v1, Q$String));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_275(){
  return Lcom_google_gwt_sample_showcase_client_content_lists_CwListBox$$anonfun$com$google$gwt$sample$showcase$client$content$lists$CwListBox$$showCategory$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.listBox$1 = null;
function $$init_275(){
}

function $apply_22(this$static, x$1){
  $addItem(this$static.dropBox$1, x$1);
}

function CwListBox$$anonfun$onInitialize$1_0(dropBox$1){
  $$init_275();
  this.dropBox$1 = dropBox$1;
  AbstractFunction1_0.call(this);
}

function CwListBox$$anonfun$onInitialize$1(){
}

_ = CwListBox$$anonfun$onInitialize$1_0.prototype = CwListBox$$anonfun$onInitialize$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_23(v1){
  $apply_22(this, dynamicCast(v1, Q$String));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_276(){
  return Lcom_google_gwt_sample_showcase_client_content_lists_CwListBox$$anonfun$onInitialize$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.dropBox$1 = null;
function $$init_276(){
}

function $apply_23(this$static){
  $com$google$gwt$sample$showcase$client$content$lists$CwListBox$$showCategory(this$static.$outer$u0020, this$static.multiBox$1, $getSelectedIndex_0(this$static.dropBox$1));
  $ensureDebugId(this$static.multiBox$1, 'cwListBox-multiBox');
}

function CwListBox$$anonfun$onInitialize$2_0($outer, dropBox$1, multiBox$1){
  $$init_276();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.dropBox$1 = dropBox$1;
  this.multiBox$1 = multiBox$1;
  AbstractFunction1_0.call(this);
}

function CwListBox$$anonfun$onInitialize$2(){
}

_ = CwListBox$$anonfun$onInitialize$2_0.prototype = CwListBox$$anonfun$onInitialize$2.prototype = new AbstractFunction1;
_.apply_0 = function apply_24(v1){
  $apply_23(this, dynamicCast(v1, Q$ChangeEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_277(){
  return Lcom_google_gwt_sample_showcase_client_content_lists_CwListBox$$anonfun$onInitialize$2_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.$outer$u0020 = null;
_.dropBox$1 = null;
_.multiBox$1 = null;
var Lcom_google_gwt_sample_showcase_client_content_lists_CwListBox$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.lists.', 'CwListBox$$anonfun$onInitialize$1', 'CwListBox$$anonfun$onInitialize$1', Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_lists_CwListBox$$anonfun$onInitialize$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.lists.', 'CwListBox$$anonfun$onInitialize$2', 'CwListBox$$anonfun$onInitialize$2', Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_lists_CwListBox$$anonfun$com$google$gwt$sample$showcase$client$content$lists$CwListBox$$showCategory$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.lists.', 'CwListBox$$anonfun$com$google$gwt$sample$showcase$client$content$lists$CwListBox$$showCategory$1', 'CwListBox$$anonfun$com$google$gwt$sample$showcase$client$content$lists$CwListBox$$showCategory$1', Lscala_runtime_AbstractFunction1_2_classLit);
$entry(onLoad)(7);
