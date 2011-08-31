function $getTarget(this$static){
  return this$static.target_0;
}

defineSeed(271, 1, makeCastMap([Q$ScalaObject]));
_.enrichHasOpenHandlers = function enrichHasOpenHandlers(o){
  return enrichHasOpenHandlers_0(this, o);
}
;
_.fn2openHandler = function fn2openHandler(fn){
  return fn2openHandler_0(fn);
}
;
function $$init_203(){
}

function OpenHandlers$$anon$7_0(fn$7){
  $$init_203();
  this.fn$7 = fn$7;
  Object_1.call(this);
}

defineSeed(276, 1, makeCastMap([Q$OpenHandler, Q$EventHandler]), OpenHandlers$$anon$7_0);
_.onOpen = function onOpen(event_0){
  this.fn$7.apply_0(event_0);
}
;
_.fn$7 = null;
function $$init_204(){
}

function $com$google$gwt$sample$showcase$client$OpenHandlers$RichHasOpenHandlers$$$outer(this$static){
  return this$static.$outer$u0020;
}

function $onOpen(this$static, fn){
  return this$static.o.addOpenHandler($com$google$gwt$sample$showcase$client$OpenHandlers$RichHasOpenHandlers$$$outer(this$static).fn2openHandler(fn));
}

function OpenHandlers$RichHasOpenHandlers_0($outer, o){
  $$init_204();
  this.o = o;
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
}

defineSeed(277, 1, makeCastMap([Q$ScalaObject]), OpenHandlers$RichHasOpenHandlers_0);
_.$outer$u0020 = null;
_.o = null;
function enrichHasOpenHandlers_0($this, o){
  return new OpenHandlers$RichHasOpenHandlers_0($this, o);
}

function fn2openHandler_0(fn$7){
  return new OpenHandlers$$anon$7_0(fn$7);
}

defineSeed(313, 1, makeCastMap([Q$ShowcaseConstants]));
_.cwTreeBeethovenWorkConcertos = function cwTreeBeethovenWorkConcertos(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwTreeBeethovenWorkConcertos'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['No. 1 - C', 'No. 2 - B-Flat Major', 'No. 3 - C Minor', 'No. 4 - G Major', 'No. 5 - E-Flat Major']);
    this.cache.put('cwTreeBeethovenWorkConcertos', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwTreeBeethovenWorkQuartets = function cwTreeBeethovenWorkQuartets(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwTreeBeethovenWorkQuartets'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Six String Quartets', 'Three String Quartets', 'Grosse Fugue for String Quartets']);
    this.cache.put('cwTreeBeethovenWorkQuartets', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwTreeBeethovenWorkSonatas = function cwTreeBeethovenWorkSonatas(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwTreeBeethovenWorkSonatas'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Sonata in A Minor', 'Sonata in F Major']);
    this.cache.put('cwTreeBeethovenWorkSonatas', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwTreeBeethovenWorkSymphonies = function cwTreeBeethovenWorkSymphonies(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwTreeBeethovenWorkSymphonies'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['No. 2 - D Major', 'No. 2 - D Major', 'No. 3 - E-Flat Major', 'No. 4 - B-Flat Major', 'No. 5 - C Minor', 'No. 6 - F Major', 'No. 7 - A Major', 'No. 8 - F Major', 'No. 9 - D Minor']);
    this.cache.put('cwTreeBeethovenWorkSymphonies', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwTreeBrahmsWorkConcertos = function cwTreeBrahmsWorkConcertos(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwTreeBrahmsWorkConcertos'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Violin Concerto', 'Double Concerto - A Minor', 'Piano Concerto No. 1 - D Minor', 'Piano Concerto No. 2 - B-Flat Major']);
    this.cache.put('cwTreeBrahmsWorkConcertos', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwTreeBrahmsWorkQuartets = function cwTreeBrahmsWorkQuartets(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwTreeBrahmsWorkQuartets'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Piano Quartet No. 1 - G Minor', 'Piano Quartet No. 2 - A Major', 'Piano Quartet No. 3 - C Minor', 'String Quartet No. 3 - B-Flat Minor']);
    this.cache.put('cwTreeBrahmsWorkQuartets', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwTreeBrahmsWorkSonatas = function cwTreeBrahmsWorkSonatas(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwTreeBrahmsWorkSonatas'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Two Sonatas for Clarinet - F Minor', 'Two Sonatas for Clarinet - E-Flat Major']);
    this.cache.put('cwTreeBrahmsWorkSonatas', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwTreeBrahmsWorkSymphonies = function cwTreeBrahmsWorkSymphonies(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwTreeBrahmsWorkSymphonies'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['No. 1 - C Minor', 'No. 2 - D Minor', 'No. 3 - F Major', 'No. 4 - E Minor']);
    this.cache.put('cwTreeBrahmsWorkSymphonies', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwTreeComposers = function cwTreeComposers(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwTreeComposers'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Beethoven', 'Brahms', 'Mozart']);
    this.cache.put('cwTreeComposers', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwTreeConcertos = function cwTreeConcertos(){
  return 'Concertos';
}
;
_.cwTreeDynamicLabel = function cwTreeDynamicLabel(){
  return '<b>Dynamic Tree:<\/b>';
}
;
_.cwTreeItem = function cwTreeItem(){
  return 'Item';
}
;
_.cwTreeMozartWorkConcertos = function cwTreeMozartWorkConcertos(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwTreeMozartWorkConcertos'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Piano Concerto No. 12', 'Piano Concerto No. 17', 'Clarinet Concerto', 'Violin Concerto No. 5', 'Violin Concerto No. 4']);
    this.cache.put('cwTreeMozartWorkConcertos', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwTreeQuartets = function cwTreeQuartets(){
  return 'Quartets';
}
;
_.cwTreeSonatas = function cwTreeSonatas(){
  return 'Sonatas';
}
;
_.cwTreeStaticLabel = function cwTreeStaticLabel(){
  return '<b>Static Tree:<\/b>';
}
;
_.cwTreeSymphonies = function cwTreeSymphonies(){
  return 'Symphonies';
}
;
function $addMusicSection(parent$1){
  return new CwTree$$anonfun$addMusicSection$1_0(parent$1);
}

function $createDynamicTree(this$static){
  var dynamicTree$1;
  dynamicTree$1 = new Tree_0;
  $foreach($until_0($intWrapper(($clinit_Predef$() , MODULE$_11 , 0)), 5), new CwTree$$anonfun$createDynamicTree$1_0(this$static, dynamicTree$1));
  $onOpen(($clinit_Handlers$() , MODULE$_3).enrichHasOpenHandlers(dynamicTree$1), new CwTree$$anonfun$createDynamicTree$2_0);
  return dynamicTree$1;
}

function $createStaticTree(this$static){
  var beethovenItem, brahmsItem, composers, concertosLabel, mozartItem, quartetsLabel, sonatasLabel, staticTree, symphoniesLabel;
  composers = $com$google$gwt$sample$showcase$client$content$lists$CwTree$$constants(this$static).cwTreeComposers();
  concertosLabel = $com$google$gwt$sample$showcase$client$content$lists$CwTree$$constants(this$static).cwTreeConcertos();
  quartetsLabel = $com$google$gwt$sample$showcase$client$content$lists$CwTree$$constants(this$static).cwTreeQuartets();
  sonatasLabel = $com$google$gwt$sample$showcase$client$content$lists$CwTree$$constants(this$static).cwTreeSonatas();
  symphoniesLabel = $com$google$gwt$sample$showcase$client$content$lists$CwTree$$constants(this$static).cwTreeSymphonies();
  staticTree = new Tree_0;
  beethovenItem = $addItem_4(staticTree, composers[0]);
  $apply_104(($clinit_List$() , MODULE$_25 , $wrapRefArray(($clinit_Predef$() , MODULE$_11 , initValues(_3Lscala_Tuple2_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$Equals_$1, Q$ScalaObject_$1]), Q$Tuple2, [$$minus$greater($any2ArrowAssoc(($clinit_Predef$() , MODULE$_11 , concertosLabel)), $com$google$gwt$sample$showcase$client$content$lists$CwTree$$constants(this$static).cwTreeBeethovenWorkConcertos()), $$minus$greater($any2ArrowAssoc(($clinit_Predef$() , MODULE$_11 , quartetsLabel)), $com$google$gwt$sample$showcase$client$content$lists$CwTree$$constants(this$static).cwTreeBeethovenWorkQuartets()), $$minus$greater($any2ArrowAssoc(($clinit_Predef$() , MODULE$_11 , sonatasLabel)), $com$google$gwt$sample$showcase$client$content$lists$CwTree$$constants(this$static).cwTreeBeethovenWorkSonatas()), $$minus$greater($any2ArrowAssoc(($clinit_Predef$() , MODULE$_11 , symphoniesLabel)), $com$google$gwt$sample$showcase$client$content$lists$CwTree$$constants(this$static).cwTreeBeethovenWorkSymphonies())]))))).foreach($addMusicSection(beethovenItem).tupled());
  brahmsItem = $addItem_4(staticTree, composers[1]);
  $apply_104(($clinit_List$() , MODULE$_25 , $wrapRefArray(($clinit_Predef$() , MODULE$_11 , initValues(_3Lscala_Tuple2_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$Equals_$1, Q$ScalaObject_$1]), Q$Tuple2, [$$minus$greater($any2ArrowAssoc(($clinit_Predef$() , MODULE$_11 , concertosLabel)), $com$google$gwt$sample$showcase$client$content$lists$CwTree$$constants(this$static).cwTreeBrahmsWorkConcertos()), $$minus$greater($any2ArrowAssoc(($clinit_Predef$() , MODULE$_11 , quartetsLabel)), $com$google$gwt$sample$showcase$client$content$lists$CwTree$$constants(this$static).cwTreeBrahmsWorkQuartets()), $$minus$greater($any2ArrowAssoc(($clinit_Predef$() , MODULE$_11 , sonatasLabel)), $com$google$gwt$sample$showcase$client$content$lists$CwTree$$constants(this$static).cwTreeBrahmsWorkSonatas()), $$minus$greater($any2ArrowAssoc(($clinit_Predef$() , MODULE$_11 , symphoniesLabel)), $com$google$gwt$sample$showcase$client$content$lists$CwTree$$constants(this$static).cwTreeBrahmsWorkSymphonies())]))))).foreach($addMusicSection(brahmsItem).tupled());
  mozartItem = $addItem_4(staticTree, composers[2]);
  $addMusicSection(mozartItem).apply_1(concertosLabel, $com$google$gwt$sample$showcase$client$content$lists$CwTree$$constants(this$static).cwTreeMozartWorkConcertos());
  return staticTree;
}

function $onInitialize_10(this$static){
  var dynamicDecorator, dynamicTree, dynamicTreeWrapper, grid, staticDecorator, staticTree, staticTreeWrapper;
  staticTree = $createStaticTree(this$static);
  $setAnimationEnabled_4(staticTree, true);
  $ensureDebugId(staticTree, 'cwTree-staticTree');
  staticTreeWrapper = new ScrollPanel_1(staticTree);
  $ensureDebugId(staticTreeWrapper, 'cwTree-staticTree-Wrapper');
  $setSize_1(staticTreeWrapper, '300px', '300px');
  staticDecorator = new DecoratorPanel_0;
  staticDecorator.setWidget(staticTreeWrapper);
  dynamicTree = $createDynamicTree(this$static);
  $ensureDebugId(dynamicTree, 'cwTree-dynamicTree');
  dynamicTreeWrapper = new ScrollPanel_1(dynamicTree);
  $ensureDebugId(dynamicTreeWrapper, 'cwTree-dynamicTree-Wrapper');
  $setSize_1(dynamicTreeWrapper, '300px', '300px');
  dynamicDecorator = new DecoratorPanel_0;
  dynamicDecorator.setWidget(dynamicTreeWrapper);
  grid = new Grid_1(2, 3);
  $setCellPadding(grid, 2);
  $setVerticalAlign($getRowFormatter(grid), 1, ($clinit_HasVerticalAlignment() , ALIGN_TOP));
  $setHTML_2(grid, 0, 0, $com$google$gwt$sample$showcase$client$content$lists$CwTree$$constants(this$static).cwTreeStaticLabel());
  $setHTML_2(grid, 0, 1, '&nbsp;&nbsp;&nbsp;');
  $setHTML_2(grid, 0, 2, $com$google$gwt$sample$showcase$client$content$lists$CwTree$$constants(this$static).cwTreeDynamicLabel());
  $setWidget_2(grid, 1, 0, staticDecorator);
  $setHTML_2(grid, 1, 1, '&nbsp;&nbsp;&nbsp;');
  $setWidget_2(grid, 1, 2, dynamicDecorator);
  return grid;
}

defineSeed(418, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_11(){
  this.callback$1.onSuccess_0($onInitialize_10(this.$outer$u0020));
}
;
defineSeed(420, 1, makeCastMap([Q$ScalaObject]));
_.tupled = function tupled(){
  return tupled_0(this);
}
;
function $$init_318(){
}

function $apply_37(this$static, label, composerWorks){
  var section$1;
  section$1 = $addItem_6(this$static.parent$1, label);
  $refArrayOps(($clinit_Predef$() , MODULE$_11 , composerWorks), $classType_0(($clinit_FactoryClassManifest$() , MODULE$_60 , Ljava_lang_String_2_classLit), new CwTree$$anonfun$addMusicSection$1$$anon$2_0)).foreach(new CwTree$$anonfun$addMusicSection$1$$anonfun$apply$1_0(section$1));
}

function CwTree$$anonfun$addMusicSection$1_0(parent$1){
  $$init_318();
  this.parent$1 = parent$1;
  AbstractFunction2_0.call(this);
}

defineSeed(419, 420, makeCastMap([Q$Serializable, Q$ScalaObject, Q$Serializable_0]), CwTree$$anonfun$addMusicSection$1_0);
_.apply_1 = function apply_38(v1, v2){
  $apply_37(this, dynamicCast(v1, Q$String), dynamicCast(v2, Q$String_$1));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.parent$1 = null;
function $$init_319(){
}

function $newInstance_13(len){
  return initDim(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, len, 0);
}

function CwTree$$anonfun$addMusicSection$1$$anon$2_0(){
  $$init_319();
  Object_1.call(this);
}

defineSeed(421, 1, {}, CwTree$$anonfun$addMusicSection$1$$anon$2_0);
_.newInstance = function newInstance_13(len){
  return $newInstance_13(len);
}
;
function $$init_320(){
}

function $apply_38(this$static, work){
  return $addItem_6(this$static.section$1, work);
}

function CwTree$$anonfun$addMusicSection$1$$anonfun$apply$1_0(section$1){
  $$init_320();
  this.section$1 = section$1;
  AbstractFunction1_0.call(this);
}

defineSeed(422, 270, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwTree$$anonfun$addMusicSection$1$$anonfun$apply$1_0);
_.apply_0 = function apply_39(v1){
  return $apply_38(this, dynamicCast(v1, Q$String));
}
;
_.section$1 = null;
function $$init_321(){
}

function $apply_39(this$static, i){
  var item;
  item = $addItem_4(this$static.dynamicTree$1, $com$google$gwt$sample$showcase$client$content$lists$CwTree$$constants(this$static.$outer$u0020).cwTreeItem() + ' ' + boxToInteger(i));
  return $addItem_6(item, '');
}

function CwTree$$anonfun$createDynamicTree$1_0($outer, dynamicTree$1){
  $$init_321();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.dynamicTree$1 = dynamicTree$1;
  AbstractFunction1_0.call(this);
}

defineSeed(423, 270, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwTree$$anonfun$createDynamicTree$1_0);
_.apply_0 = function apply_40(v1){
  return $apply_39(this, unboxToInt(v1));
}
;
_.$outer$u0020 = null;
_.dynamicTree$1 = null;
function $$init_322(){
}

function $apply_40(event_0){
  var item$1, itemText$1, numChildren;
  item$1 = dynamicCast($getTarget(event_0), Q$TreeItem);
  if ($getChildCount_0(item$1) == 1) {
    $setState_1(item$1, false, false);
    itemText$1 = $getText_3(item$1);
    numChildren = nextInt(5) + 2;
    $foreach($until_0($intWrapper(($clinit_Predef$() , MODULE$_11 , 0)), numChildren), new CwTree$$anonfun$createDynamicTree$2$$anonfun$apply$2_0(item$1, itemText$1));
    $remove_12($getChild(item$1, 0));
    $setState_1(item$1, true, false);
  }
}

function CwTree$$anonfun$createDynamicTree$2_0(){
  $$init_322();
  AbstractFunction1_0.call(this);
}

defineSeed(424, 270, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwTree$$anonfun$createDynamicTree$2_0);
_.apply_0 = function apply_41(v1){
  $apply_40(dynamicCast(v1, Q$OpenEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
function $$init_323(){
}

function $apply_41(this$static, i){
  var child;
  child = $addItem_6(this$static.item$1, this$static.itemText$1 + '.' + boxToInteger(i));
  return $addItem_6(child, '');
}

function CwTree$$anonfun$createDynamicTree$2$$anonfun$apply$2_0(item$1, itemText$1){
  $$init_323();
  this.item$1 = item$1;
  this.itemText$1 = itemText$1;
  AbstractFunction1_0.call(this);
}

defineSeed(425, 270, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwTree$$anonfun$createDynamicTree$2$$anonfun$apply$2_0);
_.apply_0 = function apply_42(v1){
  return $apply_41(this, unboxToInt(v1));
}
;
_.item$1 = null;
_.itemText$1 = null;
function nextInt(upperBound){
  return ~~Math.floor(Math.random() * upperBound);
}

function Tree_0(){
  Widget_0.call(this);
  $$init_585(this);
  $init_4(this, new Tree$ImageAdapter_0, false);
}

defineSeed(725, 244, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]), Tree_0);
_.addOpenHandler = function addOpenHandler_0(handler){
  return $addHandler_1(this, handler, getType_27());
}
;
function Tree$ImageAdapter_0(){
  $clinit_Tree$ImageAdapter();
  Tree$ImageAdapter_1.call(this, DEFAULT_RESOURCES);
}

defineSeed(726, 1, {}, Tree$ImageAdapter_0);
function $$init_708(){
}

function $apply_74(this$static, x0$1){
  var $1$, temp1;
  temp1 = x0$1;
  if (isNotNull(temp1)) {
    $1$ = this$static.$outer$u0020.apply_1($_1(temp1), $_2(temp1));
  }
   else {
    throw new MatchError_0(temp1);
  }
  return $1$;
}

function Function2$$anonfun$tupled$1_0($outer){
  $$init_708();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  AbstractFunction1_0.call(this);
}

defineSeed(875, 270, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), Function2$$anonfun$tupled$1_0);
_.apply_0 = function apply_91(v1){
  return $apply_74(this, dynamicCast(v1, Q$Tuple2));
}
;
_.$outer$u0020 = null;
function tupled_0($this){
  return new Function2$$anonfun$tupled$1_0($this);
}

var Lcom_google_gwt_sample_showcase_client_content_lists_CwTree$$anonfun$createDynamicTree$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.lists.', 'CwTree$$anonfun$createDynamicTree$1', 423, Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_OpenHandlers$RichHasOpenHandlers_2_classLit = createForClass('com.google.gwt.sample.showcase.client.', 'OpenHandlers$RichHasOpenHandlers', 277, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_lists_CwTree$$anonfun$createDynamicTree$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.lists.', 'CwTree$$anonfun$createDynamicTree$2', 424, Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_lists_CwTree$$anonfun$addMusicSection$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.lists.', 'CwTree$$anonfun$addMusicSection$1', 419, Lscala_runtime_AbstractFunction2_2_classLit), Lcom_google_gwt_sample_showcase_client_content_lists_CwTree$$anonfun$createDynamicTree$2$$anonfun$apply$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.lists.', 'CwTree$$anonfun$createDynamicTree$2$$anonfun$apply$2', 425, Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_OpenHandlers$$anon$7_2_classLit = createForClass('com.google.gwt.sample.showcase.client.', 'OpenHandlers$$anon$7', 276, Ljava_lang_Object_2_classLit), Lscala_Function2$$anonfun$tupled$1_2_classLit = createForClass('scala.', 'Function2$$anonfun$tupled$1', 875, Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_lists_CwTree$$anonfun$addMusicSection$1$$anon$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.lists.', 'CwTree$$anonfun$addMusicSection$1$$anon$2', 421, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_lists_CwTree$$anonfun$addMusicSection$1$$anonfun$apply$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.lists.', 'CwTree$$anonfun$addMusicSection$1$$anonfun$apply$1', 422, Lscala_runtime_AbstractFunction1_2_classLit);
$entry(onLoad)(9);
