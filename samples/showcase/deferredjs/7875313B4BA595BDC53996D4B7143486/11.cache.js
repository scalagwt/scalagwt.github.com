_ = ShowcaseConstants_.prototype;
_.cwStackPanelContacts = function cwStackPanelContacts(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwStackPanelContacts'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Benoit Mandelbrot', 'Albert Einstein', 'Rene Descartes', 'Bob Saget', 'Ludwig von Beethoven', 'Richard Feynman', 'Alan Turing', 'John von Neumann']);
    this.cache.put('cwStackPanelContacts', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwStackPanelContactsEmails = function cwStackPanelContactsEmails(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwStackPanelContactsEmails'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['benoit@example.com', 'albert@example.com', 'rene@example.com', 'bob@example.com', 'ludwig@example.com', 'richard@example.com', 'alan@example.com', 'john@example.com']);
    this.cache.put('cwStackPanelContactsEmails', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwStackPanelContactsHeader = function cwStackPanelContactsHeader(){
  return 'Contacts';
}
;
_.cwStackPanelFilters = function cwStackPanelFilters(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwStackPanelFilters'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['All', 'Starred', 'Read', 'Unread', 'Recent', 'Sent by me']);
    this.cache.put('cwStackPanelFilters', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwStackPanelFiltersHeader = function cwStackPanelFiltersHeader(){
  return 'Filters';
}
;
_.cwStackPanelMailFolders = function cwStackPanelMailFolders(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwStackPanelMailFolders'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Inbox', 'Drafts', 'Templates', 'Sent', 'Trash']);
    this.cache.put('cwStackPanelMailFolders', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwStackPanelMailHeader = function cwStackPanelMailHeader(){
  return 'Mail';
}
;
function $com$google$gwt$sample$showcase$client$content$lists$CwStackPanel$$addItem(root, image, label){
  $addItem_6(root, $getHTML(create_9(image)) + ' ' + label);
}

function $createContactsItem(this$static, images){
  var contactEmails, contactInfo$1, contactNames, contactPopup$1, contactPopupContainer, contactsPanel$1;
  contactPopupContainer = new HorizontalPanel_0;
  $setSpacing(contactPopupContainer, 5);
  $add_11(contactPopupContainer, new Image_1(images.defaultContact()));
  contactInfo$1 = new HTML_0;
  $add_11(contactPopupContainer, contactInfo$1);
  contactPopup$1 = new PopupPanel_2(true, false);
  contactPopup$1.setWidget(contactPopupContainer);
  contactsPanel$1 = new VerticalPanel_0;
  $setSpacing(contactsPanel$1, 4);
  contactNames = $constants_0(this$static).cwStackPanelContacts();
  contactEmails = $constants_0(this$static).cwStackPanelContactsEmails();
  dynamicCast($refArrayOps(($clinit_Predef$() , MODULE$_12 , contactNames)).toList().zip_0($wrapRefArray(($clinit_Predef$() , MODULE$_12 , contactEmails)), $canBuildFrom(($clinit_List$() , MODULE$_21))), Q$LinearSeqOptimized).foreach(new CwStackPanel$$anonfun$createContactsItem$1_0(contactInfo$1, contactPopup$1, contactsPanel$1));
  return contactsPanel$1;
}

function $createFiltersItem(this$static){
  var filtersPanel$1;
  filtersPanel$1 = new VerticalPanel_0;
  $setSpacing(filtersPanel$1, 4);
  $refArrayOps(($clinit_Predef$() , MODULE$_12 , $constants_0(this$static).cwStackPanelFilters())).foreach(new CwStackPanel$$anonfun$createFiltersItem$1_0(filtersPanel$1));
  return filtersPanel$1;
}

function $createMailItem(this$static, images){
  var mailFolders$1, mailPanel, mailPanelRoot$1;
  mailPanel = new Tree_1(images);
  mailPanelRoot$1 = new ObjectRef_0($addItem_4(mailPanel, 'foo@example.com'));
  mailFolders$1 = new ObjectRef_0($constants_0(this$static).cwStackPanelMailFolders());
  dynamicCast($apply_95(($clinit_List$() , MODULE$_21 , $wrapRefArray(($clinit_Predef$() , MODULE$_12 , initValues(_3Lcom_google_gwt_resources_client_ImageResource_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$ImageResource, [images.inbox(), images.drafts(), images.templates(), images.sent(), images.trash()]))))).zipWithIndex($canBuildFrom(($clinit_List$() , MODULE$_21))), Q$LinearSeqOptimized).foreach(new CwStackPanel$$anonfun$createMailItem$1_0(this$static, mailPanelRoot$1, mailFolders$1));
  $setState_0(dynamicCast(mailPanelRoot$1.elem, Q$TreeItem), true);
  return mailPanel;
}

function $getHeaderString(text, image){
  var hPanel, headerText;
  hPanel = new HorizontalPanel_0;
  $setSpacing(hPanel, 0);
  $setVerticalAlignment_0(hPanel, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  $add_11(hPanel, new Image_1(image));
  headerText = new HTML_1(text);
  headerText.setStyleName('cw-StackPanelHeader');
  $add_11(hPanel, headerText);
  return $getString($getElement(hPanel));
}

function $onInitialize_8(this$static){
  var contactsHeader, filtersHeader, images, mailHeader, stackPanel;
  images = new CwStackPanel_Images_default_StaticClientBundleGenerator_0;
  stackPanel = new DecoratedStackPanel_0;
  stackPanel.setWidth('200px');
  mailHeader = $getHeaderString($constants_0(this$static).cwStackPanelMailHeader(), images.mailgroup());
  $add_7(stackPanel, $createMailItem(this$static, images), mailHeader, true);
  filtersHeader = $getHeaderString($constants_0(this$static).cwStackPanelFiltersHeader(), images.filtersgroup());
  $add_7(stackPanel, $createFiltersItem(this$static), filtersHeader, true);
  contactsHeader = $getHeaderString($constants_0(this$static).cwStackPanelContactsHeader(), images.contactsgroup());
  $add_7(stackPanel, $createContactsItem(this$static, images), contactsHeader, true);
  $ensureDebugId(stackPanel, 'cwStackPanel');
  return stackPanel;
}

_ = CwStackPanel$$anon$1.prototype;
_.onSuccess = function onSuccess_9(){
  this.callback$1.onSuccess_0($onInitialize_8(this.$outer$u0020));
}
;
function $$init_286(){
}

function $apply_29(this$static, pair){
  var $1$, contactEmail$1, contactLink$1, contactName$1, temp1, x$1;
  temp1 = pair;
  if (isNotNull(temp1)) {
    $1$ = new Tuple2_0($_1(temp1), $_2(temp1));
  }
   else {
    throw new MatchError_0(temp1);
  }
  x$1 = $1$;
  contactName$1 = dynamicCast($_1(x$1), Q$String);
  contactEmail$1 = dynamicCast($_2(x$1), Q$String);
  contactLink$1 = new HTML_1('<a href="javascript:undefined;">' + contactName$1 + '<\/a>');
  $add_16(this$static.contactsPanel$1, contactLink$1);
  return $onClick(($clinit_Handlers$() , MODULE$_2).enrichHasClickHandlers(contactLink$1), new CwStackPanel$$anonfun$createContactsItem$1$$anonfun$apply$1_0(this$static, contactName$1, contactEmail$1, contactLink$1));
}

function CwStackPanel$$anonfun$createContactsItem$1_0(contactInfo$1, contactPopup$1, contactsPanel$1){
  $$init_286();
  this.contactInfo$1 = contactInfo$1;
  this.contactPopup$1 = contactPopup$1;
  this.contactsPanel$1 = contactsPanel$1;
  AbstractFunction1_0.call(this);
}

function CwStackPanel$$anonfun$createContactsItem$1(){
}

_ = CwStackPanel$$anonfun$createContactsItem$1_0.prototype = CwStackPanel$$anonfun$createContactsItem$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_30(v1){
  return $apply_29(this, dynamicCast(v1, Q$Tuple2));
}
;
_.getClass$ = function getClass_287(){
  return Lcom_google_gwt_sample_showcase_client_content_lists_CwStackPanel$$anonfun$createContactsItem$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.contactInfo$1 = null;
_.contactPopup$1 = null;
_.contactsPanel$1 = null;
function $$init_287(){
}

function $apply_30(this$static){
  var left, top_0;
  $setHTML_1(this$static.$outer$u0020.contactInfo$1, this$static.contactName$1 + '<br><i>' + this$static.contactEmail$1 + '<\/i>');
  left = $getAbsoluteLeft_0(this$static.contactLink$1) + 14;
  top_0 = $getAbsoluteTop_0(this$static.contactLink$1) + 14;
  $setPopupPosition(this$static.$outer$u0020.contactPopup$1, left, top_0);
  this$static.$outer$u0020.contactPopup$1.show();
}

function CwStackPanel$$anonfun$createContactsItem$1$$anonfun$apply$1_0($outer, contactName$1, contactEmail$1, contactLink$1){
  $$init_287();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.contactName$1 = contactName$1;
  this.contactEmail$1 = contactEmail$1;
  this.contactLink$1 = contactLink$1;
  AbstractFunction1_0.call(this);
}

function CwStackPanel$$anonfun$createContactsItem$1$$anonfun$apply$1(){
}

_ = CwStackPanel$$anonfun$createContactsItem$1$$anonfun$apply$1_0.prototype = CwStackPanel$$anonfun$createContactsItem$1$$anonfun$apply$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_31(v1){
  $apply_30(this, dynamicCast(v1, Q$ClickEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_288(){
  return Lcom_google_gwt_sample_showcase_client_content_lists_CwStackPanel$$anonfun$createContactsItem$1$$anonfun$apply$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.$outer$u0020 = null;
_.contactEmail$1 = null;
_.contactLink$1 = null;
_.contactName$1 = null;
function $$init_288(){
}

function $apply_31(this$static, filter){
  $add_16(this$static.filtersPanel$1, new CheckBox_2(filter));
}

function CwStackPanel$$anonfun$createFiltersItem$1_0(filtersPanel$1){
  $$init_288();
  this.filtersPanel$1 = filtersPanel$1;
  AbstractFunction1_0.call(this);
}

function CwStackPanel$$anonfun$createFiltersItem$1(){
}

_ = CwStackPanel$$anonfun$createFiltersItem$1_0.prototype = CwStackPanel$$anonfun$createFiltersItem$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_32(v1){
  $apply_31(this, dynamicCast(v1, Q$String));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_289(){
  return Lcom_google_gwt_sample_showcase_client_content_lists_CwStackPanel$$anonfun$createFiltersItem$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.filtersPanel$1 = null;
function $$init_289(){
}

function $apply_32(this$static, pair){
  var $2$, idx, img, temp4, x$3;
  temp4 = pair;
  if (isNotNull(temp4)) {
    $2$ = new Tuple2_0($_1(temp4), $_2(temp4));
  }
   else {
    throw new MatchError_0(temp4);
  }
  x$3 = $2$;
  img = dynamicCast($_1(x$3), Q$ImageResource);
  idx = unboxToInt($_2(x$3));
  $com$google$gwt$sample$showcase$client$content$lists$CwStackPanel$$addItem(dynamicCast(this$static.mailPanelRoot$1.elem, Q$TreeItem), img, dynamicCast(this$static.mailFolders$1.elem, Q$String_$1)[idx]);
}

function CwStackPanel$$anonfun$createMailItem$1_0($outer, mailPanelRoot$1, mailFolders$1){
  $$init_289();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.mailPanelRoot$1 = mailPanelRoot$1;
  this.mailFolders$1 = mailFolders$1;
  AbstractFunction1_0.call(this);
}

function CwStackPanel$$anonfun$createMailItem$1(){
}

_ = CwStackPanel$$anonfun$createMailItem$1_0.prototype = CwStackPanel$$anonfun$createMailItem$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_33(v1){
  $apply_32(this, dynamicCast(v1, Q$Tuple2));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_290(){
  return Lcom_google_gwt_sample_showcase_client_content_lists_CwStackPanel$$anonfun$createMailItem$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.$outer$u0020 = null;
_.mailFolders$1 = null;
_.mailPanelRoot$1 = null;
function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator = nullMethod;
  _instance0_1 = new CwStackPanel_Images_default_StaticClientBundleGenerator_0;
  bundledImage_None_1 = getModuleBaseURL() + '55414EBEFCEF03959C9B6A2E58903034.cache.png';
  externalImage_0 = getModuleBaseURL() + '662D45A7A4C7FF83F80FDD5504D9CCE3.cache.jpg';
}

function $$init_290(){
}

function $contactsgroupInitializer(){
  contactsgroup = new ImageResourcePrototype_0('contactsgroup', fromTrustedString_1(bundledImage_None_1), 64, 0, 32, 32, false, false);
}

function $defaultContactInitializer(){
  defaultContact = new ImageResourcePrototype_0('defaultContact', fromTrustedString_1(externalImage_0), 0, 0, 32, 32, false, true);
}

function $draftsInitializer(){
  drafts = new ImageResourcePrototype_0('drafts', fromTrustedString_1(bundledImage_None_1), 144, 0, 15, 16, false, false);
}

function $filtersgroupInitializer(){
  filtersgroup = new ImageResourcePrototype_0('filtersgroup', fromTrustedString_1(bundledImage_None_1), 32, 0, 32, 32, false, false);
}

function $inboxInitializer(){
  inbox = new ImageResourcePrototype_0('inbox', fromTrustedString_1(bundledImage_None_1), 128, 16, 16, 16, false, false);
}

function $mailgroupInitializer(){
  mailgroup = new ImageResourcePrototype_0('mailgroup', fromTrustedString_1(bundledImage_None_1), 0, 0, 32, 32, false, false);
}

function $sentInitializer(){
  sent = new ImageResourcePrototype_0('sent', fromTrustedString_1(bundledImage_None_1), 128, 0, 16, 16, false, false);
}

function $templatesInitializer(){
  templates = new ImageResourcePrototype_0('templates', fromTrustedString_1(bundledImage_None_1), 112, 16, 16, 16, false, false);
}

function $trashInitializer(){
  trash = new ImageResourcePrototype_0('trash', fromTrustedString_1(bundledImage_None_1), 112, 0, 16, 16, false, false);
}

function $treeClosedInitializer_0(){
  treeClosed_1 = new ImageResourcePrototype_0('treeClosed', fromTrustedString_1(bundledImage_None_1), 96, 16, 16, 16, false, false);
}

function $treeLeafInitializer_0(){
  treeLeaf_1 = new ImageResourcePrototype_0('treeLeaf', fromTrustedString_1(bundledImage_None_1), 144, 16, 1, 1, false, false);
}

function $treeOpenInitializer_0(){
  treeOpen_1 = new ImageResourcePrototype_0('treeOpen', fromTrustedString_1(bundledImage_None_1), 96, 0, 16, 16, false, false);
}

function CwStackPanel_Images_default_StaticClientBundleGenerator_0(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator();
  Object_1.call(this);
  $$init_290();
}

function CwStackPanel_Images_default_StaticClientBundleGenerator(){
}

_ = CwStackPanel_Images_default_StaticClientBundleGenerator_0.prototype = CwStackPanel_Images_default_StaticClientBundleGenerator.prototype = new Object_0;
_.contactsgroup = function contactsgroup_0(){
  return get_23();
}
;
_.defaultContact = function defaultContact_0(){
  return get_24();
}
;
_.drafts = function drafts_0(){
  return get_25();
}
;
_.filtersgroup = function filtersgroup_0(){
  return get_26();
}
;
_.getClass$ = function getClass_291(){
  return Lcom_google_gwt_sample_showcase_client_content_lists_CwStackPanel_1Images_1default_1StaticClientBundleGenerator_2_classLit;
}
;
_.inbox = function inbox_0(){
  return get_27();
}
;
_.mailgroup = function mailgroup_0(){
  return get_28();
}
;
_.sent = function sent_0(){
  return get_29();
}
;
_.templates = function templates_0(){
  return get_30();
}
;
_.trash = function trash_0(){
  return get_31();
}
;
_.treeClosed_0 = function treeClosed_2(){
  return get_32();
}
;
_.treeLeaf_0 = function treeLeaf_2(){
  return get_33();
}
;
_.treeOpen_0 = function treeOpen_2(){
  return get_34();
}
;
var _instance0_1, bundledImage_None_1, contactsgroup = null, defaultContact = null, drafts = null, externalImage_0, filtersgroup = null, inbox = null, mailgroup = null, sent = null, templates = null, trash = null, treeClosed_1 = null, treeLeaf_1 = null, treeOpen_1 = null;
function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$contactsgroupInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$contactsgroupInitializer = nullMethod;
  $contactsgroupInitializer(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_23(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$contactsgroupInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , contactsgroup;
}

function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$defaultContactInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$defaultContactInitializer = nullMethod;
  $defaultContactInitializer(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_24(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$defaultContactInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , defaultContact;
}

function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$draftsInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$draftsInitializer = nullMethod;
  $draftsInitializer(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_25(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$draftsInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , drafts;
}

function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$filtersgroupInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$filtersgroupInitializer = nullMethod;
  $filtersgroupInitializer(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_26(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$filtersgroupInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , filtersgroup;
}

function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$inboxInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$inboxInitializer = nullMethod;
  $inboxInitializer(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_27(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$inboxInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , inbox;
}

function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$mailgroupInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$mailgroupInitializer = nullMethod;
  $mailgroupInitializer(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_28(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$mailgroupInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , mailgroup;
}

function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$sentInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$sentInitializer = nullMethod;
  $sentInitializer(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_29(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$sentInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , sent;
}

function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$templatesInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$templatesInitializer = nullMethod;
  $templatesInitializer(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_30(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$templatesInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , templates;
}

function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$trashInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$trashInitializer = nullMethod;
  $trashInitializer(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_31(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$trashInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , trash;
}

function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$treeClosedInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$treeClosedInitializer = nullMethod;
  $treeClosedInitializer_0(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_32(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$treeClosedInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , treeClosed_1;
}

function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$treeLeafInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$treeLeafInitializer = nullMethod;
  $treeLeafInitializer_0(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_33(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$treeLeafInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , treeLeaf_1;
}

function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$treeOpenInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$treeOpenInitializer = nullMethod;
  $treeOpenInitializer_0(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_34(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$treeOpenInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , treeOpen_1;
}

function $$init_457(this$static){
}

function $add_6(this$static, w){
  $insert_2(this$static, w, $getWidgetCount(this$static));
}

function $add_7(this$static, w, stackText, asHTML){
  $add_6(this$static, w);
  $setStackText(this$static, $getWidgetCount(this$static) - 1, stackText, asHTML);
}

function $findDividerIndex(this$static, elem){
  var expando, ownerHash;
  while (isNotNull(elem) && jsNotEquals(elem, $getElement(this$static))) {
    expando = getElementProperty(elem, '__index');
    if (jsNotEquals(expando, null)) {
      ownerHash = getElementPropertyInt(elem, '__owner');
      return ownerHash == this$static.hashCode$()?parseInt_0(expando):-1;
    }
    elem = getParent(elem);
  }
  return -1;
}

function $insert_2(this$static, w, beforeIndex){
  var effectiveIndex, tdb, tdh, trb, trh;
  trh = createTR();
  tdh = createTD();
  appendChild(trh, tdh);
  appendChild(tdh, this$static.createHeaderElem());
  trb = createTR();
  tdb = createTD();
  appendChild(trb, tdb);
  beforeIndex = $adjustIndex(this$static, w, beforeIndex);
  effectiveIndex = beforeIndex * 2;
  insertChild(this$static.body_0, trb, effectiveIndex);
  insertChild(this$static.body_0, trh, effectiveIndex);
  setStyleName_0(tdh, 'gwt-StackPanelItem', true);
  setElementPropertyInt(tdh, '__owner', this$static.hashCode$());
  setElementProperty(tdh, 'height', '1px');
  setStyleName_0(tdb, 'gwt-StackPanelContent', true);
  setElementProperty(tdb, 'height', '100%');
  setElementProperty(tdb, 'vAlign', 'top');
  $insert(this$static, w, tdb, beforeIndex, false);
  $updateIndicesFrom(this$static, beforeIndex);
  if (this$static.visibleStack == -1) {
    $showStack(this$static, 0);
  }
   else {
    $setStackVisible(this$static, beforeIndex, false);
    this$static.visibleStack >= beforeIndex && ++this$static.visibleStack;
    $setStackVisible(this$static, this$static.visibleStack, true);
  }
}

function $remove_5(this$static, child, index){
  var removed, rowIndex, tr;
  removed = $remove_2(this$static, child);
  if (removed) {
    rowIndex = 2 * index;
    tr = getChild(this$static.body_0, rowIndex);
    removeChild_0(this$static.body_0, tr);
    tr = getChild(this$static.body_0, rowIndex);
    removeChild_0(this$static.body_0, tr);
    this$static.visibleStack == index?(this$static.visibleStack = -1):this$static.visibleStack > index && --this$static.visibleStack;
    $updateIndicesFrom(this$static, index);
  }
  return removed;
}

function $setStackContentVisible(this$static, index, visible){
  var tr;
  tr = getChild(this$static.body_0, index * 2 + 1);
  setVisible(tr, visible);
  $getWidget_0(this$static, index).setVisible(visible);
}

function $setStackText(this$static, index, text, asHTML){
  var headerElem, tdWrapper;
  if (index >= $getWidgetCount(this$static)) {
    return;
  }
  tdWrapper = getChild(getChild(this$static.body_0, index * 2), 0);
  headerElem = getFirstChild(tdWrapper);
  asHTML?setInnerHTML(this$static.getHeaderTextElem(headerElem), text):setInnerText_1(this$static.getHeaderTextElem(headerElem), text);
}

function $setStackVisible(this$static, index, visible){
  var td, tdNext, tr, trNext;
  tr = getChild(this$static.body_0, index * 2);
  if (isNull(tr)) {
    return;
  }
  td = getFirstChild(tr);
  setStyleName_0(td, 'gwt-StackPanelItem-selected', visible);
  $setStackContentVisible(this$static, index, visible);
  trNext = getChild(this$static.body_0, (index + 1) * 2);
  if (isNotNull(trNext)) {
    tdNext = getFirstChild(trNext);
    setStyleName_0(tdNext, 'gwt-StackPanelItem-below-selected', visible);
  }
}

function $showStack(this$static, index){
  if (index >= $getWidgetCount(this$static) || index < 0 || index == this$static.visibleStack) {
    return;
  }
  this$static.visibleStack >= 0 && $setStackVisible(this$static, this$static.visibleStack, false);
  this$static.visibleStack = index;
  $setStackVisible(this$static, this$static.visibleStack, true);
}

function $updateIndicesFrom(this$static, beforeIndex){
  var c, childTD, childTR, i;
  for (i = beforeIndex , c = $getWidgetCount(this$static); i < c; ++i) {
    childTR = getChild(this$static.body_0, i * 2);
    childTD = getFirstChild(childTR);
    setElementPropertyInt(childTD, '__index', i);
    beforeIndex == 0?setStyleName_0(childTD, 'gwt-StackPanelItem-first', true):setStyleName_0(childTD, 'gwt-StackPanelItem-first', false);
  }
}

function StackPanel_0(){
  $clinit_UIObject();
  var table;
  ComplexPanel_0.call(this);
  $$init_457(this);
  table = createTable();
  $setElement_0(this, table);
  this.body_0 = createTBody();
  appendChild(table, this.body_0);
  setElementPropertyInt(table, 'cellSpacing', 0);
  setElementPropertyInt(table, 'cellPadding', 0);
  sinkEvents_0(table, 1);
  this.setStyleName('gwt-StackPanel');
}

_ = StackPanel.prototype;
_.createHeaderElem = function createHeaderElem(){
  return createDiv();
}
;
_.getClass$ = function getClass_458(){
  return Lcom_google_gwt_user_client_ui_StackPanel_2_classLit;
}
;
_.getHeaderTextElem = function getHeaderTextElem(headerElem){
  return headerElem;
}
;
_.onBrowserEvent = function onBrowserEvent_2(event_0){
  var index, target;
  if (eventGetType(event_0) == 1) {
    target = eventGetTarget_0(event_0);
    index = $findDividerIndex(this, target);
    index != -1 && $showStack(this, index);
  }
  $onBrowserEvent(this, event_0);
}
;
_.onEnsureDebugId = function onEnsureDebugId_1(baseID){
  var bodyElem, headerElem, i, numHeaders, tdWrapper;
  $onEnsureDebugId(this, baseID);
  numHeaders = getChildCount(this.body_0) >> 1;
  for (i = 0; i < numHeaders; ++i) {
    tdWrapper = getFirstChild(getChild(this.body_0, 2 * i));
    headerElem = getFirstChild(tdWrapper);
    bodyElem = getFirstChild(getChild(this.body_0, 2 * i + 1));
    ensureDebugId(tdWrapper, baseID, 'text-wrapper' + i);
    ensureDebugId(bodyElem, baseID, 'content' + i);
    ensureDebugId(this.getHeaderTextElem(headerElem), baseID, 'text' + i);
  }
}
;
_.remove_3 = function remove_9(child){
  return $remove_5(this, child, $getWidgetIndex(this, child));
}
;
function $clinit_DecoratedStackPanel(){
  $clinit_DecoratedStackPanel = nullMethod;
  $clinit_UIObject();
  'gwt-DecoratedStackPanel';
  DEFAULT_ROW_STYLENAMES = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['stackItemTop', 'stackItemMiddle']);
}

function $$init_458(){
}

function DecoratedStackPanel_0(){
  $clinit_DecoratedStackPanel();
  StackPanel_0.call(this);
  $$init_458();
  $setStylePrimaryName(this, 'gwt-DecoratedStackPanel');
}

function DecoratedStackPanel(){
}

_ = DecoratedStackPanel_0.prototype = DecoratedStackPanel.prototype = new StackPanel;
_.createHeaderElem = function createHeaderElem_0(){
  var i, table, tbody;
  table = createTable();
  tbody = createTBody();
  appendChild(table, tbody);
  setStyleAttribute(table, 'width', '100%');
  setElementPropertyInt(table, 'cellSpacing', 0);
  setElementPropertyInt(table, 'cellPadding', 0);
  for (i = 0; i < DEFAULT_ROW_STYLENAMES.length; ++i) {
    appendChild(tbody, createTR_0(DEFAULT_ROW_STYLENAMES[i]));
  }
  return table;
}
;
_.getClass$ = function getClass_459(){
  return Lcom_google_gwt_user_client_ui_DecoratedStackPanel_2_classLit;
}
;
_.getHeaderTextElem = function getHeaderTextElem_0(headerElem){
  var tbody, td, tr;
  tbody = getFirstChild(headerElem);
  tr = getChild(tbody, 1);
  td = getChild(tr, 1);
  return getFirstChild(td);
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Iterable]);
var DEFAULT_ROW_STYLENAMES;
function $$init_720(){
}

function $apply_77(this$static, x){
  this$static.b$2.$plus$eq_0(new Tuple2_0(x, boxToInteger(this$static.i$1.elem)));
  this$static.i$1.elem = this$static.i$1.elem + 1;
}

function IterableLike$$anonfun$zipWithIndex$1_0(b$2, i$1){
  $$init_720();
  this.b$2 = b$2;
  this.i$1 = i$1;
  AbstractFunction1_0.call(this);
}

function IterableLike$$anonfun$zipWithIndex$1(){
}

_ = IterableLike$$anonfun$zipWithIndex$1_0.prototype = IterableLike$$anonfun$zipWithIndex$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_89(v1){
  $apply_77(this, v1);
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_722(){
  return Lscala_collection_IterableLike$$anonfun$zipWithIndex$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.b$2 = null;
_.i$1 = null;
function zipWithIndex_0($this, bf){
  var b$2, i$1;
  b$2 = bf.apply_9($this.repr());
  i$1 = new IntRef_0(0);
  $this.foreach(new IterableLike$$anonfun$zipWithIndex$1_0(b$2, i$1));
  return b$2.result();
}

function $ReusableCBF(this$static){
  if ((this$static.bitmap$0 & 1) == 0) {
    if ((this$static.bitmap$0 & 1) == 0) {
      this$static.ReusableCBF$u0020 = new GenTraversableFactory$ReusableCBF_0(this$static);
      this$static.bitmap$0 = this$static.bitmap$0 | 1;
    }
  }
  return this$static.ReusableCBF$u0020;
}

function $$init_762(){
}

function GenTraversableFactory$ReusableCBF_0($outer){
  $$init_762();
  GenTraversableFactory$GenericCanBuildFrom_0.call(this, $outer);
}

function GenTraversableFactory$ReusableCBF(){
}

_ = GenTraversableFactory$ReusableCBF_0.prototype = GenTraversableFactory$ReusableCBF.prototype = new GenTraversableFactory$GenericCanBuildFrom;
_.getClass$ = function getClass_764(){
  return Lscala_collection_generic_GenTraversableFactory$ReusableCBF_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$ScalaObject]);
_ = List.prototype;
_.zip_0 = function zip_18(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_7(bf){
  return zipWithIndex_0(this, bf);
}
;
_ = HashSet_1.prototype;
_.zip_0 = function zip_19(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_8(bf){
  return zipWithIndex_0(this, bf);
}
;
function $canBuildFrom(this$static){
  return $ReusableCBF(this$static);
}

_ = ListSet.prototype;
_.zip_0 = function zip_21(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_9(bf){
  return zipWithIndex_0(this, bf);
}
;
_ = Range_0.prototype;
_.zip_0 = function zip_23(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_10(bf){
  return zipWithIndex_0(this, bf);
}
;
_ = Set$EmptySet$.prototype;
_.zip_0 = function zip_24(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_11(bf){
  return zipWithIndex_0(this, bf);
}
;
_ = Set$Set1.prototype;
_.zip_0 = function zip_25(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_12(bf){
  return zipWithIndex_0(this, bf);
}
;
_ = Set$Set2.prototype;
_.zip_0 = function zip_26(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_13(bf){
  return zipWithIndex_0(this, bf);
}
;
_ = Set$Set3.prototype;
_.zip_0 = function zip_27(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_14(bf){
  return zipWithIndex_0(this, bf);
}
;
_ = Set$Set4.prototype;
_.zip_0 = function zip_28(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_15(bf){
  return zipWithIndex_0(this, bf);
}
;
function $zip(this$static, that$2, bf){
  var $17$, $18$;
  if ($scala$collection$immutable$Stream$$isStreamBuilder(this$static, bf)) {
    this$static.isEmpty() || that$2.isEmpty()?($18$ = ($clinit_Stream$Empty$() , MODULE$_32)):($18$ = $apply_110(($clinit_Stream$cons$() , MODULE$_33 , new Tuple2_0(this$static.head(), that$2.head())), new Stream$$anonfun$zip$1_0(this$static, that$2)));
    $17$ = $scala$collection$immutable$Stream$$asThat($18$);
  }
   else {
    $17$ = zip_3(this$static, that$2, bf);
  }
  return $17$;
}

_ = Stream.prototype;
_.zip_0 = function zip_29(that$2, bf){
  return $zip(this, that$2, bf);
}
;
_.zipWithIndex = function zipWithIndex_16(bf){
  return $zip(this, $from_0(($clinit_Stream$() , MODULE$_31), 0), bf);
}
;
function $$init_813(){
}

function $apply_108(this$static){
  return $scala$collection$immutable$Stream$$asStream($zip(dynamicCast(this$static.$outer$u0020.tail(), Q$Stream), dynamicCast(this$static.that$2.tail(), Q$GenIterable), $canBuildFrom_0(($clinit_Stream$() , MODULE$_31))));
}

function Stream$$anonfun$zip$1_0($outer, that$2){
  $$init_813();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.that$2 = that$2;
  AbstractFunction0_0.call(this);
}

function Stream$$anonfun$zip$1(){
}

_ = Stream$$anonfun$zip$1_0.prototype = Stream$$anonfun$zip$1.prototype = new AbstractFunction0;
_.apply_2 = function apply_153(){
  return $apply_108(this);
}
;
_.getClass$ = function getClass_815(){
  return Lscala_collection_immutable_Stream$$anonfun$zip$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$ScalaObject, Q$Serializable_0]);
_.$outer$u0020 = null;
_.that$2 = null;
_ = StringOps.prototype;
_.zip_0 = function zip_31(that, bf){
  return zip_2(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_17(bf){
  return zipWithIndex(this, bf);
}
;
_ = Vector.prototype;
_.zip_0 = function zip_32(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_18(bf){
  return zipWithIndex_0(this, bf);
}
;
_ = WrappedString.prototype;
_.zip_0 = function zip_34(that, bf){
  return zip_2(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_19(bf){
  return zipWithIndex(this, bf);
}
;
_ = ArrayBuffer.prototype;
_.zip_0 = function zip_35(that, bf){
  return zip_2(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_20(bf){
  return zipWithIndex(this, bf);
}
;
_ = ArrayOps.prototype;
_.zip_0 = function zip_36(that, bf){
  return zip_2(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_21(bf){
  return zipWithIndex(this, bf);
}
;
_ = HashSet_3.prototype;
_.zip_0 = function zip_38(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_22(bf){
  return zipWithIndex_0(this, bf);
}
;
_ = ListBuffer.prototype;
_.zip_0 = function zip_46(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_28(bf){
  return zipWithIndex_0(this, bf);
}
;
_ = StringBuilder_2.prototype;
_.zip_0 = function zip_48(that, bf){
  return zip_2(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_29(bf){
  return zipWithIndex(this, bf);
}
;
_ = WrappedArray.prototype;
_.zip_0 = function zip_49(that, bf){
  return zip_2(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_30(bf){
  return zipWithIndex(this, bf);
}
;
var Lcom_google_gwt_resources_client_ImageResource_2_classLit = createForInterface('com.google.gwt.resources.client.', 'ImageResource'), _3Lcom_google_gwt_resources_client_ImageResource_2_classLit = createForArray('[Lcom.google.gwt.resources.client.', 'ImageResource;', 'Array_0', Lcom_google_gwt_resources_client_ImageResource_2_classLit), Lcom_google_gwt_user_client_ui_StackPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'StackPanel', 'StackPanel', Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit), Lcom_google_gwt_user_client_ui_DecoratedStackPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DecoratedStackPanel', 'DecoratedStackPanel', Lcom_google_gwt_user_client_ui_StackPanel_2_classLit), Lcom_google_gwt_sample_showcase_client_content_lists_CwStackPanel_1Images_1default_1StaticClientBundleGenerator_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.lists.', 'CwStackPanel_Images_default_StaticClientBundleGenerator', 'CwStackPanel_Images_default_StaticClientBundleGenerator', Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_lists_CwStackPanel$$anonfun$createMailItem$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.lists.', 'CwStackPanel$$anonfun$createMailItem$1', 'CwStackPanel$$anonfun$createMailItem$1', Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_lists_CwStackPanel$$anonfun$createFiltersItem$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.lists.', 'CwStackPanel$$anonfun$createFiltersItem$1', 'CwStackPanel$$anonfun$createFiltersItem$1', Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_lists_CwStackPanel$$anonfun$createContactsItem$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.lists.', 'CwStackPanel$$anonfun$createContactsItem$1', 'CwStackPanel$$anonfun$createContactsItem$1', Lscala_runtime_AbstractFunction1_2_classLit), Lscala_collection_IterableLike$$anonfun$zipWithIndex$1_2_classLit = createForClass('scala.collection.', 'IterableLike$$anonfun$zipWithIndex$1', 'IterableLike$$anonfun$zipWithIndex$1', Lscala_runtime_AbstractFunction1_2_classLit), Lscala_collection_generic_GenTraversableFactory$ReusableCBF_2_classLit = createForClass('scala.collection.generic.', 'GenTraversableFactory$ReusableCBF', 'GenTraversableFactory$ReusableCBF', Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom_2_classLit), Lcom_google_gwt_sample_showcase_client_content_lists_CwStackPanel$$anonfun$createContactsItem$1$$anonfun$apply$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.lists.', 'CwStackPanel$$anonfun$createContactsItem$1$$anonfun$apply$1', 'CwStackPanel$$anonfun$createContactsItem$1$$anonfun$apply$1', Lscala_runtime_AbstractFunction1_2_classLit), Lscala_collection_immutable_Stream$$anonfun$zip$1_2_classLit = createForClass('scala.collection.immutable.', 'Stream$$anonfun$zip$1', 'Stream$$anonfun$zip$1', Lscala_runtime_AbstractFunction0_2_classLit);
$entry(onLoad)(11);
