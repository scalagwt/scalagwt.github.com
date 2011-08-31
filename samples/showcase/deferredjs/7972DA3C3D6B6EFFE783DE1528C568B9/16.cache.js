defineSeed(309, 1, makeCastMap([Q$ShowcaseConstants]));
_.cwDecoratorPanelFormDescription = function cwDecoratorPanelFormDescription(){
  return 'Description:';
}
;
_.cwDecoratorPanelFormName = function cwDecoratorPanelFormName(){
  return 'Name:';
}
;
_.cwDecoratorPanelFormTitle = function cwDecoratorPanelFormTitle(){
  return 'Enter Search Criteria';
}
;
function $onInitialize_14(this$static){
  var cellFormatter, decPanel, layout;
  layout = new FlexTable_0;
  $setCellSpacing(layout, 6);
  cellFormatter = $getFlexCellFormatter(layout);
  $setHTML_2(layout, 0, 0, this$static.constants.cwDecoratorPanelFormTitle());
  $setColSpan(cellFormatter, 0, 0, 2);
  $setHorizontalAlignment_0(cellFormatter, 0, 0, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $setHTML_2(layout, 1, 0, this$static.constants.cwDecoratorPanelFormName());
  $setWidget_2(layout, 1, 1, new TextBox_0);
  $setHTML_2(layout, 2, 0, this$static.constants.cwDecoratorPanelFormDescription());
  $setWidget_2(layout, 2, 1, new TextBox_0);
  decPanel = new DecoratorPanel_0;
  decPanel.setWidget(layout);
  return decPanel;
}

defineSeed(443, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_15(){
  this.callback$1.onSuccess_0($onInitialize_14(this.$outer$u0020));
}
;
$entry(onLoad)(16);
