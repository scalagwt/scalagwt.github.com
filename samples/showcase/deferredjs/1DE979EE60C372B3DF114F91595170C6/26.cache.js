function $onInitialize_26(){
  var grid$1, numColumns$1, numRows;
  grid$1 = new Grid_1(4, 4);
  numRows = $getRowCount_0(grid$1);
  numColumns$1 = $getColumnCount(grid$1);
  $foreach$mVc$sp($until_0($intWrapper(($clinit_Predef$() , MODULE$_11 , 0)), numRows), new CwGrid$$anonfun$onInitialize$1_0(grid$1, numColumns$1));
  $ensureDebugId(grid$1, 'cwGrid');
  return grid$1;
}

defineSeed(570, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_27(){
  this.callback$1.onSuccess_0($onInitialize_26());
}
;
function $$init_469(){
}

function $apply$mcVI$sp_6(this$static, v1$1){
  $foreach$mVc$sp($until_0($intWrapper(($clinit_Predef$() , MODULE$_11 , 0)), this$static.numColumns$1), new CwGrid$$anonfun$onInitialize$1$$anonfun$apply$mcVI$sp$1_0(this$static, v1$1));
}

function $apply_64(this$static, row){
  $apply$mcVI$sp_6(this$static, row);
}

function CwGrid$$anonfun$onInitialize$1_0(grid$1, numColumns$1){
  $$init_469();
  this.grid$1 = grid$1;
  this.numColumns$1 = numColumns$1;
  AbstractFunction1$mcVI$sp_0.call(this);
}

defineSeed(571, 529, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwGrid$$anonfun$onInitialize$1_0);
_.apply$mcVI$sp = function apply$mcVI$sp_7(v1$1){
  $apply$mcVI$sp_6(this, v1$1);
}
;
_.apply_2 = function apply_74(row){
  $apply_64(this, row);
}
;
_.apply_0 = function apply_75(v1){
  $apply_64(this, unboxToInt(v1));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.grid$1 = null;
_.numColumns$1 = 0;
function $$init_470(){
}

function $apply$mcVI$sp_7(this$static, v1){
  $setWidget_2(this$static.$outer$u0020.grid$1, this$static.v1$1, v1, new Image_1($images(($clinit_Showcase$() , MODULE$_4)).gwtLogo()));
}

function $apply_65(this$static, col){
  $apply$mcVI$sp_7(this$static, col);
}

function CwGrid$$anonfun$onInitialize$1$$anonfun$apply$mcVI$sp$1_0($outer, v1$1){
  $$init_470();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.v1$1 = v1$1;
  AbstractFunction1$mcVI$sp_0.call(this);
}

defineSeed(572, 529, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwGrid$$anonfun$onInitialize$1$$anonfun$apply$mcVI$sp$1_0);
_.apply$mcVI$sp = function apply$mcVI$sp_8(v1){
  $apply$mcVI$sp_7(this, v1);
}
;
_.apply_2 = function apply_76(col){
  $apply_65(this, col);
}
;
_.apply_0 = function apply_77(v1){
  $apply_65(this, unboxToInt(v1));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.$outer$u0020 = null;
_.v1$1 = 0;
function $getColumnCount(this$static){
  return this$static.numColumns;
}

var Lcom_google_gwt_sample_showcase_client_content_tables_CwGrid$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.tables.', 'CwGrid$$anonfun$onInitialize$1', 571, Lscala_runtime_AbstractFunction1$mcVI$sp_2_classLit), Lcom_google_gwt_sample_showcase_client_content_tables_CwGrid$$anonfun$onInitialize$1$$anonfun$apply$mcVI$sp$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.tables.', 'CwGrid$$anonfun$onInitialize$1$$anonfun$apply$mcVI$sp$1', 572, Lscala_runtime_AbstractFunction1$mcVI$sp_2_classLit);
$entry(onLoad)(26);
