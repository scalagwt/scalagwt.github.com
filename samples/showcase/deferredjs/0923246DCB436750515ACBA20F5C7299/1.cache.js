defineSeed(395, 1, makeCastMap([Q$ShowcaseConstants]));
_.cwRadioButtonColors = function cwRadioButtonColors(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwRadioButtonColors'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['blue', 'red', 'yellow', 'green']);
    this.cache.put('cwRadioButtonColors', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwRadioButtonSelectColor = function cwRadioButtonSelectColor(){
  return '<b>Select your favorite color:<\/b>';
}
;
_.cwRadioButtonSelectSport = function cwRadioButtonSelectSport(){
  return '<b>Select your favorite sport:<\/b>';
}
;
_.cwRadioButtonSports = function cwRadioButtonSports(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwRadioButtonSports'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Baseball', 'Basketball', 'Football', 'Hockey', 'Soccer', 'Water Polo']);
    this.cache.put('cwRadioButtonSports', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
function $onInitialize_35(this$static){
  var colors$1, sports$1, vPanel$1;
  vPanel$1 = new VerticalPanel_0;
  $add_16(vPanel$1, new HTML_1(this$static.constants.cwRadioButtonSelectColor()));
  colors$1 = this$static.constants.cwRadioButtonColors();
  $foreach$mVc$sp($until_0($intWrapper(($clinit_Predef$() , MODULE$_11 , 0)), colors$1.length), new CwRadioButton$$anonfun$onInitialize$1_0(vPanel$1, colors$1));
  $add_16(vPanel$1, new HTML_1('<br>' + this$static.constants.cwRadioButtonSelectSport()));
  sports$1 = this$static.constants.cwRadioButtonSports();
  $foreach$mVc$sp($until_0($intWrapper(($clinit_Predef$() , MODULE$_11 , 0)), sports$1.length), new CwRadioButton$$anonfun$onInitialize$2_0(vPanel$1, sports$1));
  return vPanel$1;
}

defineSeed(616, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_35(){
  this.callback$1.onSuccess_0($onInitialize_35(this.$outer$u0020));
}
;
function $$init_495(){
}

function $apply$mcVI$sp_9(this$static, v1){
  var color, radioButton;
  color = this$static.colors$1[v1];
  radioButton = new RadioButton_1('color', color);
  $ensureDebugId(radioButton, 'cwRadioButton-color-' + color);
  v1 == 2 && $setEnabled_1(radioButton, false);
  $add_16(this$static.vPanel$1, radioButton);
}

function $apply_72(this$static, i){
  $apply$mcVI$sp_9(this$static, i);
}

function CwRadioButton$$anonfun$onInitialize$1_0(vPanel$1, colors$1){
  $$init_495();
  this.vPanel$1 = vPanel$1;
  this.colors$1 = colors$1;
  AbstractFunction1$mcVI$sp_0.call(this);
}

defineSeed(617, 527, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwRadioButton$$anonfun$onInitialize$1_0);
_.apply$mcVI$sp = function apply$mcVI$sp_10(v1){
  $apply$mcVI$sp_9(this, v1);
}
;
_.apply_2 = function apply_85(i){
  $apply_72(this, i);
}
;
_.apply_0 = function apply_86(v1){
  $apply_72(this, unboxToInt(v1));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.colors$1 = null;
_.vPanel$1 = null;
function $$init_496(){
}

function $apply$mcVI$sp_10(this$static, v1){
  var radioButton, sport;
  sport = this$static.sports$1[v1];
  radioButton = new RadioButton_1('sport', sport);
  $ensureDebugId(radioButton, 'cwRadioButton-sport-' + $replaceAll(sport, ' ', ''));
  v1 == 2 && $setValue_1(radioButton, $boolean2Boolean(($clinit_Predef$() , MODULE$_11 , true)));
  $add_16(this$static.vPanel$1, radioButton);
}

function $apply_73(this$static, i){
  $apply$mcVI$sp_10(this$static, i);
}

function CwRadioButton$$anonfun$onInitialize$2_0(vPanel$1, sports$1){
  $$init_496();
  this.vPanel$1 = vPanel$1;
  this.sports$1 = sports$1;
  AbstractFunction1$mcVI$sp_0.call(this);
}

defineSeed(618, 527, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwRadioButton$$anonfun$onInitialize$2_0);
_.apply$mcVI$sp = function apply$mcVI$sp_11(v1){
  $apply$mcVI$sp_10(this, v1);
}
;
_.apply_2 = function apply_87(i){
  $apply_73(this, i);
}
;
_.apply_0 = function apply_88(v1){
  $apply_73(this, unboxToInt(v1));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.sports$1 = null;
_.vPanel$1 = null;
function $boolean2Boolean(x){
  return valueOf_9(x);
}

var Lcom_google_gwt_sample_showcase_client_content_widgets_CwRadioButton$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.widgets.', 'CwRadioButton$$anonfun$onInitialize$1', 617, Lscala_runtime_AbstractFunction1$mcVI$sp_2_classLit), Lcom_google_gwt_sample_showcase_client_content_widgets_CwRadioButton$$anonfun$onInitialize$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.widgets.', 'CwRadioButton$$anonfun$onInitialize$2', 618, Lscala_runtime_AbstractFunction1$mcVI$sp_2_classLit);
$entry(onLoad)(1);
