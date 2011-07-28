function $onInitialize_26(){
  var grid$1, numColumns$1, numRows;
  grid$1 = new Grid_1(4, 4);
  numRows = $getRowCount_0(grid$1);
  numColumns$1 = $getColumnCount(grid$1);
  $foreach($until_0($intWrapper(($clinit_Predef$() , MODULE$_12 , 0)), numRows), new CwGrid$$anonfun$onInitialize$1_0(grid$1, numColumns$1));
  $ensureDebugId(grid$1, 'cwGrid');
  return grid$1;
}

_ = CwGrid$$anon$1.prototype;
_.onSuccess = function onSuccess_27(){
  this.callback$1.onSuccess_0($onInitialize_26());
}
;
function $$init_446(){
}

function $apply_61(this$static, row$1){
  $foreach($until_0($intWrapper(($clinit_Predef$() , MODULE$_12 , 0)), this$static.numColumns$1), new CwGrid$$anonfun$onInitialize$1$$anonfun$apply$1_0(this$static, row$1));
}

function CwGrid$$anonfun$onInitialize$1_0(grid$1, numColumns$1){
  $$init_446();
  this.grid$1 = grid$1;
  this.numColumns$1 = numColumns$1;
  AbstractFunction1_0.call(this);
}

function CwGrid$$anonfun$onInitialize$1(){
}

_ = CwGrid$$anonfun$onInitialize$1_0.prototype = CwGrid$$anonfun$onInitialize$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_62(v1){
  $apply_61(this, unboxToInt(v1));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_447(){
  return Lcom_google_gwt_sample_showcase_client_content_tables_CwGrid$$anonfun$onInitialize$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.grid$1 = null;
_.numColumns$1 = 0;
function $$init_447(){
}

function $apply_62(this$static, col){
  $setWidget_2(this$static.$outer$u0020.grid$1, this$static.row$1, col, new Image_1($images(($clinit_Showcase$() , MODULE$_4)).gwtLogo()));
}

function CwGrid$$anonfun$onInitialize$1$$anonfun$apply$1_0($outer, row$1){
  $$init_447();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.row$1 = row$1;
  AbstractFunction1_0.call(this);
}

function CwGrid$$anonfun$onInitialize$1$$anonfun$apply$1(){
}

_ = CwGrid$$anonfun$onInitialize$1$$anonfun$apply$1_0.prototype = CwGrid$$anonfun$onInitialize$1$$anonfun$apply$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_63(v1){
  $apply_62(this, unboxToInt(v1));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_448(){
  return Lcom_google_gwt_sample_showcase_client_content_tables_CwGrid$$anonfun$onInitialize$1$$anonfun$apply$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.$outer$u0020 = null;
_.row$1 = 0;
function $getColumnCount(this$static){
  return this$static.numColumns;
}

var Lcom_google_gwt_sample_showcase_client_content_tables_CwGrid$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.tables.', 'CwGrid$$anonfun$onInitialize$1', 'CwGrid$$anonfun$onInitialize$1', Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_tables_CwGrid$$anonfun$onInitialize$1$$anonfun$apply$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.tables.', 'CwGrid$$anonfun$onInitialize$1$$anonfun$apply$1', 'CwGrid$$anonfun$onInitialize$1$$anonfun$apply$1', Lscala_runtime_AbstractFunction1_2_classLit);
$entry(onLoad)(26);
