function getCurrencyCode__devirtual$(this$static){
  var maybeJsoInvocation;
  return maybeJsoInvocation = this$static , isJavaObject(maybeJsoInvocation)?maybeJsoInvocation.getCurrencyCode():$getCurrencyCode(maybeJsoInvocation);
}

function getCurrencySymbol__devirtual$(this$static){
  var maybeJsoInvocation;
  return maybeJsoInvocation = this$static , isJavaObject(maybeJsoInvocation)?maybeJsoInvocation.getCurrencySymbol():$getCurrencySymbol(maybeJsoInvocation);
}

function getDefaultFractionDigits__devirtual$(this$static){
  var maybeJsoInvocation;
  return maybeJsoInvocation = this$static , isJavaObject(maybeJsoInvocation)?maybeJsoInvocation.getDefaultFractionDigits():$getDefaultFractionDigits(maybeJsoInvocation);
}

function isDeprecated__devirtual$(this$static){
  var maybeJsoInvocation;
  return maybeJsoInvocation = this$static , isJavaObject(maybeJsoInvocation)?maybeJsoInvocation.isDeprecated():$isDeprecated(maybeJsoInvocation);
}

function $$init_123(){
}

function $ensureCurrencyMap(this$static){
  isScript()?isNull(this$static.dataMapNative) && (this$static.dataMapNative = this$static.loadCurrencyMapNative()):isNull(this$static.dataMapJava) && (this$static.dataMapJava = this$static.loadCurrencyMapJava());
}

function $getDefault(this$static){
  return isScript()?this$static.getDefaultNative():this$static.getDefaultJava();
}

function $iterator(this$static, includeDeprecated){
  var collection, item, item$iterator, newCollection, value, value$iterator;
  $ensureCurrencyMap(this$static);
  collection = new ArrayList_0;
  if (isScript()) {
    loadCurrencyValuesNative(this$static.dataMapNative, collection);
  }
   else {
    for (item$iterator = this$static.dataMapJava.values().iterator_0(); item$iterator.hasNext();) {
      item = dynamicCastAllowJso(item$iterator.next_0(), Q$CurrencyData);
      $add_13(collection, item);
    }
  }
  if (!includeDeprecated) {
    newCollection = new ArrayList_0;
    for (value$iterator = collection.iterator_0(); value$iterator.hasNext();) {
      value = dynamicCastAllowJso(value$iterator.next_0(), Q$CurrencyData);
      isDeprecated__devirtual$(value) || $add_13(newCollection, value);
    }
    collection = newCollection;
  }
  return unmodifiableList(collection).iterator_0();
}

function $loadCurrencyMapJava(){
  var result;
  result = new HashMap_0;
  $put_1(result, 'USD', new CurrencyDataImpl_0('USD', '$', 2));
  $put_1(result, 'EUR', new CurrencyDataImpl_0('EUR', '\u20AC', 2));
  $put_1(result, 'GBP', new CurrencyDataImpl_0('GBP', 'UK\xA3', 2));
  $put_1(result, 'JPY', new CurrencyDataImpl_0('JPY', '\xA5', 0));
  return result;
}

function $loadCurrencyMapNative(){
  return {USD:['USD', '$', 2], EUR:['EUR', '\u20AC', 2], GBP:['GBP', 'UK\xA3', 2], JPY:['JPY', '\xA5', 0]};
}

function CurrencyList_0(){
  Object_1.call(this);
  $$init_123();
}

function get_2(){
  return $clinit_CurrencyList$CurrencyListInstance() , instance;
}

function loadCurrencyValuesNative(map, collection){
  for (var key in map) {
    if (map.hasOwnProperty(key)) {
      collection.add_0(map[key]);
    }
  }
}

function overrideMap(original, override){
  for (var key in override) {
    if (override.hasOwnProperty(key)) {
      original[key] = override[key];
    }
  }
  return original;
}

function CurrencyList(){
}

_ = CurrencyList.prototype = new Object_0;
_.getClass$ = function getClass_124(){
  return Lcom_google_gwt_i18n_client_CurrencyList_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava(){
  return new CurrencyDataImpl_1('USD', '$', 2, 'US$');
}
;
_.getDefaultNative = function getDefaultNative(){
  return ['USD', '$', 2, 'US$'];
}
;
_.iterator_0 = function iterator(){
  return $iterator(this, false);
}
;
_.loadCurrencyMapJava = function loadCurrencyMapJava(){
  return $loadCurrencyMapJava();
}
;
_.loadCurrencyMapNative = function loadCurrencyMapNative(){
  return $loadCurrencyMapNative();
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
_.dataMapJava = null;
_.dataMapNative = null;
function $clinit_CurrencyList$CurrencyListInstance(){
  $clinit_CurrencyList$CurrencyListInstance = nullMethod;
  instance = new CurrencyList_en_runtimeSelection_0;
}

var instance;
function $$init_124(){
}

function $loadCurrencyMapJava_0(this$static){
  var result;
  result = $loadCurrencyMapJava();
  $put_1(result, 'ADP', new CurrencyDataImpl_0('ADP', 'ADP', 128));
  $put_1(result, 'AED', new CurrencyDataImpl_1('AED', 'DH', 2, 'DH'));
  $put_1(result, 'AFA', new CurrencyDataImpl_0('AFA', 'AFA', 130));
  $put_1(result, 'AFN', new CurrencyDataImpl_0('AFN', 'Af', 0));
  $put_1(result, 'ALL', new CurrencyDataImpl_0('ALL', 'ALL', 0));
  $put_1(result, 'AMD', new CurrencyDataImpl_0('AMD', 'AMD', 0));
  $put_1(result, 'ANG', new CurrencyDataImpl_0('ANG', 'NAf.', 2));
  $put_1(result, 'AOA', new CurrencyDataImpl_0('AOA', 'Kz', 2));
  $put_1(result, 'AOK', new CurrencyDataImpl_0('AOK', 'AOK', 130));
  $put_1(result, 'AON', new CurrencyDataImpl_0('AON', 'AON', 130));
  $put_1(result, 'AOR', new CurrencyDataImpl_0('AOR', 'AOR', 130));
  $put_1(result, 'ARA', new CurrencyDataImpl_0('ARA', '\u20B3', 130));
  $put_1(result, 'ARL', new CurrencyDataImpl_0('ARL', '$L', 130));
  $put_1(result, 'ARM', new CurrencyDataImpl_0('ARM', 'm$n', 130));
  $put_1(result, 'ARP', new CurrencyDataImpl_0('ARP', 'ARP', 130));
  $put_1(result, 'ARS', new CurrencyDataImpl_1('ARS', 'AR$', 2, 'AR$'));
  $put_1(result, 'ATS', new CurrencyDataImpl_0('ATS', 'ATS', 130));
  $put_1(result, 'AUD', new CurrencyDataImpl_1('AUD', 'AU$', 2, 'AU$'));
  $put_1(result, 'AWG', new CurrencyDataImpl_0('AWG', 'Afl.', 2));
  $put_1(result, 'AZM', new CurrencyDataImpl_0('AZM', 'AZM', 130));
  $put_1(result, 'AZN', new CurrencyDataImpl_0('AZN', 'man.', 2));
  $put_1(result, 'BAD', new CurrencyDataImpl_0('BAD', 'BAD', 130));
  $put_1(result, 'BAM', new CurrencyDataImpl_0('BAM', 'KM', 2));
  $put_1(result, 'BBD', new CurrencyDataImpl_0('BBD', 'Bds$', 2));
  $put_1(result, 'BDT', new CurrencyDataImpl_1('BDT', 'Tk', 2, 'Tk'));
  $put_1(result, 'BEC', new CurrencyDataImpl_0('BEC', 'BEC', 2));
  $put_1(result, 'BEF', new CurrencyDataImpl_0('BEF', 'BF', 130));
  $put_1(result, 'BEL', new CurrencyDataImpl_0('BEL', 'BEL', 2));
  $put_1(result, 'BGL', new CurrencyDataImpl_0('BGL', 'BGL', 130));
  $put_1(result, 'BGN', new CurrencyDataImpl_0('BGN', 'BGN', 2));
  $put_1(result, 'BHD', new CurrencyDataImpl_0('BHD', 'BD', 3));
  $put_1(result, 'BIF', new CurrencyDataImpl_0('BIF', 'FBu', 0));
  $put_1(result, 'BMD', new CurrencyDataImpl_0('BMD', 'BD$', 2));
  $put_1(result, 'BND', new CurrencyDataImpl_0('BND', 'BN$', 2));
  $put_1(result, 'BOB', new CurrencyDataImpl_0('BOB', 'Bs', 2));
  $put_1(result, 'BOP', new CurrencyDataImpl_0('BOP', '$b.', 130));
  $put_1(result, 'BOV', new CurrencyDataImpl_0('BOV', 'BOV', 2));
  $put_1(result, 'BRB', new CurrencyDataImpl_0('BRB', 'BRB', 130));
  $put_1(result, 'BRC', new CurrencyDataImpl_0('BRC', 'BRC', 130));
  $put_1(result, 'BRE', new CurrencyDataImpl_0('BRE', 'BRE', 130));
  $put_1(result, 'BRL', new CurrencyDataImpl_1('BRL', 'R$', 2, 'R$'));
  $put_1(result, 'BRN', new CurrencyDataImpl_0('BRN', 'BRN', 130));
  $put_1(result, 'BRR', new CurrencyDataImpl_0('BRR', 'BRR', 130));
  $put_1(result, 'BSD', new CurrencyDataImpl_0('BSD', 'BS$', 2));
  $put_1(result, 'BTN', new CurrencyDataImpl_0('BTN', 'Nu.', 2));
  $put_1(result, 'BUK', new CurrencyDataImpl_0('BUK', 'BUK', 130));
  $put_1(result, 'BWP', new CurrencyDataImpl_0('BWP', 'BWP', 2));
  $put_1(result, 'BYB', new CurrencyDataImpl_0('BYB', 'BYB', 130));
  $put_1(result, 'BYR', new CurrencyDataImpl_0('BYR', 'BYR', 0));
  $put_1(result, 'BZD', new CurrencyDataImpl_0('BZD', 'BZ$', 2));
  $put_1(result, 'CAD', new CurrencyDataImpl_1('CAD', 'CA$', 2, 'C$'));
  $put_1(result, 'CDF', new CurrencyDataImpl_0('CDF', 'CDF', 2));
  $put_1(result, 'CHE', new CurrencyDataImpl_0('CHE', 'CHE', 2));
  $put_1(result, 'CHF', new CurrencyDataImpl_1('CHF', 'Fr.', 2, 'CHF'));
  $put_1(result, 'CHW', new CurrencyDataImpl_0('CHW', 'CHW', 2));
  $put_1(result, 'CLE', new CurrencyDataImpl_0('CLE', 'E\xBA', 130));
  $put_1(result, 'CLF', new CurrencyDataImpl_0('CLF', 'CLF', 0));
  $put_1(result, 'CLP', new CurrencyDataImpl_1('CLP', 'CL$', 0, 'CL$'));
  $put_1(result, 'CNY', new CurrencyDataImpl_1('CNY', 'CN\xA5', 2, 'RMB\xA5'));
  $put_1(result, 'COP', new CurrencyDataImpl_1('COP', 'CO$', 0, 'COL$'));
  $put_1(result, 'COU', new CurrencyDataImpl_0('COU', 'COU', 2));
  $put_1(result, 'CRC', new CurrencyDataImpl_1('CRC', '\u20A1', 0, 'CR\u20A1'));
  $put_1(result, 'CSD', new CurrencyDataImpl_0('CSD', 'CSD', 130));
  $put_1(result, 'CSK', new CurrencyDataImpl_0('CSK', 'CSK', 130));
  $put_1(result, 'CUC', new CurrencyDataImpl_0('CUC', 'CUC$', 2));
  $put_1(result, 'CUP', new CurrencyDataImpl_1('CUP', 'CU$', 2, '$MN'));
  $put_1(result, 'CVE', new CurrencyDataImpl_0('CVE', 'CV$', 2));
  $put_1(result, 'CYP', new CurrencyDataImpl_0('CYP', 'CY\xA3', 130));
  $put_1(result, 'CZK', new CurrencyDataImpl_1('CZK', 'K\u010D', 2, 'K\u010D'));
  $put_1(result, 'DDM', new CurrencyDataImpl_0('DDM', 'DDM', 130));
  $put_1(result, 'DEM', new CurrencyDataImpl_0('DEM', 'DM', 130));
  $put_1(result, 'DJF', new CurrencyDataImpl_0('DJF', 'Fdj', 0));
  $put_1(result, 'DKK', new CurrencyDataImpl_1('DKK', 'Dkr', 2, 'kr'));
  $put_1(result, 'DOP', new CurrencyDataImpl_1('DOP', 'RD$', 2, 'RD$'));
  $put_1(result, 'DZD', new CurrencyDataImpl_0('DZD', 'DA', 2));
  $put_1(result, 'ECS', new CurrencyDataImpl_0('ECS', 'ECS', 130));
  $put_1(result, 'ECV', new CurrencyDataImpl_0('ECV', 'ECV', 2));
  $put_1(result, 'EEK', new CurrencyDataImpl_0('EEK', 'Ekr', 2));
  $put_1(result, 'EGP', new CurrencyDataImpl_1('EGP', 'EG\xA3', 2, 'LE'));
  $put_1(result, 'EQE', new CurrencyDataImpl_0('EQE', 'EQE', 130));
  $put_1(result, 'ERN', new CurrencyDataImpl_0('ERN', 'Nfk', 2));
  $put_1(result, 'ESA', new CurrencyDataImpl_0('ESA', 'ESA', 2));
  $put_1(result, 'ESB', new CurrencyDataImpl_0('ESB', 'ESB', 2));
  $put_1(result, 'ESP', new CurrencyDataImpl_0('ESP', 'Pts', 128));
  $put_1(result, 'ETB', new CurrencyDataImpl_0('ETB', 'Br', 2));
  $put_1(result, 'EUR', new CurrencyDataImpl_1('EUR', '\u20AC', 2, '\u20AC'));
  $put_1(result, 'FIM', new CurrencyDataImpl_0('FIM', 'mk', 130));
  $put_1(result, 'FJD', new CurrencyDataImpl_0('FJD', 'FJ$', 2));
  $put_1(result, 'FKP', new CurrencyDataImpl_0('FKP', 'FK\xA3', 2));
  $put_1(result, 'FRF', new CurrencyDataImpl_0('FRF', '\u20A3', 130));
  $put_1(result, 'GBP', new CurrencyDataImpl_1('GBP', '\xA3', 2, 'GB\xA3'));
  $put_1(result, 'GEK', new CurrencyDataImpl_0('GEK', 'GEK', 130));
  $put_1(result, 'GEL', new CurrencyDataImpl_0('GEL', 'GEL', 2));
  $put_1(result, 'GHC', new CurrencyDataImpl_0('GHC', '\u20B5', 130));
  $put_1(result, 'GHS', new CurrencyDataImpl_0('GHS', 'GH\u20B5', 2));
  $put_1(result, 'GIP', new CurrencyDataImpl_0('GIP', 'GI\xA3', 2));
  $put_1(result, 'GMD', new CurrencyDataImpl_0('GMD', 'GMD', 2));
  $put_1(result, 'GNF', new CurrencyDataImpl_0('GNF', 'FG', 0));
  $put_1(result, 'GNS', new CurrencyDataImpl_0('GNS', 'GNS', 130));
  $put_1(result, 'GQE', new CurrencyDataImpl_0('GQE', 'GQE', 130));
  $put_1(result, 'GRD', new CurrencyDataImpl_0('GRD', '\u20AF', 130));
  $put_1(result, 'GTQ', new CurrencyDataImpl_0('GTQ', 'GTQ', 2));
  $put_1(result, 'GWE', new CurrencyDataImpl_0('GWE', 'GWE', 130));
  $put_1(result, 'GWP', new CurrencyDataImpl_0('GWP', 'GWP', 2));
  $put_1(result, 'GYD', new CurrencyDataImpl_0('GYD', 'GY$', 0));
  $put_1(result, 'HKD', new CurrencyDataImpl_1('HKD', 'HK$', 2, 'HK$'));
  $put_1(result, 'HNL', new CurrencyDataImpl_0('HNL', 'HNL', 2));
  $put_1(result, 'HRD', new CurrencyDataImpl_0('HRD', 'HRD', 130));
  $put_1(result, 'HRK', new CurrencyDataImpl_0('HRK', 'kn', 2));
  $put_1(result, 'HTG', new CurrencyDataImpl_0('HTG', 'HTG', 2));
  $put_1(result, 'HUF', new CurrencyDataImpl_0('HUF', 'Ft', 0));
  $put_1(result, 'IDR', new CurrencyDataImpl_0('IDR', 'Rp', 0));
  $put_1(result, 'IEP', new CurrencyDataImpl_0('IEP', 'IR\xA3', 130));
  $put_1(result, 'ILP', new CurrencyDataImpl_0('ILP', 'I\xA3', 130));
  $put_1(result, 'ILS', new CurrencyDataImpl_1('ILS', '\u20AA', 2, 'IL\u20AA'));
  $put_1(result, 'INR', new CurrencyDataImpl_1('INR', 'Rs', 2, 'Rs'));
  $put_1(result, 'IQD', new CurrencyDataImpl_0('IQD', 'IQD', 0));
  $put_1(result, 'IRR', new CurrencyDataImpl_0('IRR', 'IRR', 0));
  $put_1(result, 'ISK', new CurrencyDataImpl_1('ISK', 'Ikr', 0, 'kr'));
  $put_1(result, 'ITL', new CurrencyDataImpl_0('ITL', 'IT\u20A4', 128));
  $put_1(result, 'JMD', new CurrencyDataImpl_1('JMD', 'J$', 2, 'JA$'));
  $put_1(result, 'JOD', new CurrencyDataImpl_0('JOD', 'JD', 3));
  $put_1(result, 'JPY', new CurrencyDataImpl_1('JPY', 'JP\xA5', 0, 'JP\xA5'));
  $put_1(result, 'KES', new CurrencyDataImpl_0('KES', 'Ksh', 2));
  $put_1(result, 'KGS', new CurrencyDataImpl_0('KGS', 'KGS', 2));
  $put_1(result, 'KHR', new CurrencyDataImpl_0('KHR', 'KHR', 2));
  $put_1(result, 'KMF', new CurrencyDataImpl_0('KMF', 'CF', 0));
  $put_1(result, 'KPW', new CurrencyDataImpl_0('KPW', 'KPW', 0));
  $put_1(result, 'KRW', new CurrencyDataImpl_1('KRW', '\u20A9', 0, 'KR\u20A9'));
  $put_1(result, 'KWD', new CurrencyDataImpl_0('KWD', 'KD', 3));
  $put_1(result, 'KYD', new CurrencyDataImpl_0('KYD', 'KY$', 2));
  $put_1(result, 'KZT', new CurrencyDataImpl_0('KZT', 'KZT', 2));
  $put_1(result, 'LAK', new CurrencyDataImpl_0('LAK', '\u20AD', 0));
  $put_1(result, 'LBP', new CurrencyDataImpl_0('LBP', 'LB\xA3', 0));
  $put_1(result, 'LKR', new CurrencyDataImpl_1('LKR', 'SLRs', 2, 'SLRs'));
  $put_1(result, 'LRD', new CurrencyDataImpl_0('LRD', 'L$', 2));
  $put_1(result, 'LSL', new CurrencyDataImpl_0('LSL', 'LSL', 2));
  $put_1(result, 'LSM', new CurrencyDataImpl_0('LSM', 'LSM', 130));
  $put_1(result, 'LTL', new CurrencyDataImpl_0('LTL', 'Lt', 2));
  $put_1(result, 'LTT', new CurrencyDataImpl_0('LTT', 'LTT', 130));
  $put_1(result, 'LUC', new CurrencyDataImpl_0('LUC', 'LUC', 2));
  $put_1(result, 'LUF', new CurrencyDataImpl_0('LUF', 'LUF', 128));
  $put_1(result, 'LUL', new CurrencyDataImpl_0('LUL', 'LUL', 2));
  $put_1(result, 'LVL', new CurrencyDataImpl_0('LVL', 'Ls', 2));
  $put_1(result, 'LVR', new CurrencyDataImpl_0('LVR', 'LVR', 130));
  $put_1(result, 'LYD', new CurrencyDataImpl_0('LYD', 'LD', 3));
  $put_1(result, 'MAD', new CurrencyDataImpl_0('MAD', 'MAD', 2));
  $put_1(result, 'MAF', new CurrencyDataImpl_0('MAF', 'MAF', 130));
  $put_1(result, 'MDL', new CurrencyDataImpl_0('MDL', 'MDL', 2));
  $put_1(result, 'MGA', new CurrencyDataImpl_0('MGA', 'MGA', 0));
  $put_1(result, 'MGF', new CurrencyDataImpl_0('MGF', 'MGF', 128));
  $put_1(result, 'MKD', new CurrencyDataImpl_0('MKD', 'MKD', 2));
  $put_1(result, 'MLF', new CurrencyDataImpl_0('MLF', 'MLF', 130));
  $put_1(result, 'MMK', new CurrencyDataImpl_0('MMK', 'MMK', 0));
  $put_1(result, 'MNT', new CurrencyDataImpl_1('MNT', '\u20AE', 0, 'MN\u20AE'));
  $put_1(result, 'MOP', new CurrencyDataImpl_0('MOP', 'MOP$', 2));
  $put_1(result, 'MRO', new CurrencyDataImpl_0('MRO', 'UM', 0));
  $put_1(result, 'MTL', new CurrencyDataImpl_0('MTL', 'Lm', 130));
  $put_1(result, 'MTP', new CurrencyDataImpl_0('MTP', 'MT\xA3', 130));
  $put_1(result, 'MUR', new CurrencyDataImpl_0('MUR', 'MURs', 0));
  $put_1(result, 'MVR', new CurrencyDataImpl_0('MVR', 'MVR', 2));
  $put_1(result, 'MWK', new CurrencyDataImpl_0('MWK', 'MWK', 2));
  $put_1(result, 'MXN', new CurrencyDataImpl_1('MXN', 'Mex$', 2, 'Mex$'));
  $put_1(result, 'MXP', new CurrencyDataImpl_0('MXP', 'MX$', 130));
  $put_1(result, 'MXV', new CurrencyDataImpl_0('MXV', 'MXV', 2));
  $put_1(result, 'MYR', new CurrencyDataImpl_1('MYR', 'RM', 2, 'RM'));
  $put_1(result, 'MZE', new CurrencyDataImpl_0('MZE', 'MZE', 130));
  $put_1(result, 'MZM', new CurrencyDataImpl_0('MZM', 'Mt', 130));
  $put_1(result, 'MZN', new CurrencyDataImpl_0('MZN', 'MTn', 2));
  $put_1(result, 'NAD', new CurrencyDataImpl_0('NAD', 'N$', 2));
  $put_1(result, 'NGN', new CurrencyDataImpl_0('NGN', '\u20A6', 2));
  $put_1(result, 'NIC', new CurrencyDataImpl_0('NIC', 'NIC', 130));
  $put_1(result, 'NIO', new CurrencyDataImpl_0('NIO', 'C$', 2));
  $put_1(result, 'NLG', new CurrencyDataImpl_0('NLG', 'fl', 130));
  $put_1(result, 'NOK', new CurrencyDataImpl_1('NOK', 'Nkr', 2, 'NOkr'));
  $put_1(result, 'NPR', new CurrencyDataImpl_0('NPR', 'NPRs', 2));
  $put_1(result, 'NZD', new CurrencyDataImpl_0('NZD', 'NZ$', 2));
  $put_1(result, 'OMR', new CurrencyDataImpl_0('OMR', 'OMR', 3));
  $put_1(result, 'PAB', new CurrencyDataImpl_1('PAB', 'B/.', 2, 'B/.'));
  $put_1(result, 'PEI', new CurrencyDataImpl_0('PEI', 'I/.', 130));
  $put_1(result, 'PEN', new CurrencyDataImpl_1('PEN', 'S/.', 2, 'S/.'));
  $put_1(result, 'PES', new CurrencyDataImpl_0('PES', 'PES', 130));
  $put_1(result, 'PGK', new CurrencyDataImpl_0('PGK', 'PGK', 2));
  $put_1(result, 'PHP', new CurrencyDataImpl_1('PHP', '\u20B1', 2, 'PHP'));
  $put_1(result, 'PKR', new CurrencyDataImpl_1('PKR', 'PKRs', 0, 'PKRs.'));
  $put_1(result, 'PLN', new CurrencyDataImpl_0('PLN', 'z\u0142', 2));
  $put_1(result, 'PLZ', new CurrencyDataImpl_0('PLZ', 'PLZ', 130));
  $put_1(result, 'PTE', new CurrencyDataImpl_0('PTE', 'Esc', 130));
  $put_1(result, 'PYG', new CurrencyDataImpl_0('PYG', '\u20B2', 0));
  $put_1(result, 'QAR', new CurrencyDataImpl_0('QAR', 'QR', 2));
  $put_1(result, 'RHD', new CurrencyDataImpl_0('RHD', 'RH$', 130));
  $put_1(result, 'ROL', new CurrencyDataImpl_0('ROL', 'ROL', 130));
  $put_1(result, 'RON', new CurrencyDataImpl_0('RON', 'RON', 2));
  $put_1(result, 'RSD', new CurrencyDataImpl_0('RSD', 'din.', 0));
  $put_1(result, 'RUB', new CurrencyDataImpl_1('RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'));
  $put_1(result, 'RUR', new CurrencyDataImpl_0('RUR', 'RUR', 130));
  $put_1(result, 'RWF', new CurrencyDataImpl_0('RWF', 'RWF', 0));
  $put_1(result, 'SAR', new CurrencyDataImpl_1('SAR', 'SR', 2, 'SR'));
  $put_1(result, 'SBD', new CurrencyDataImpl_0('SBD', 'SI$', 2));
  $put_1(result, 'SCR', new CurrencyDataImpl_0('SCR', 'SRe', 2));
  $put_1(result, 'SDD', new CurrencyDataImpl_0('SDD', 'LSd', 130));
  $put_1(result, 'SDG', new CurrencyDataImpl_0('SDG', 'SDG', 2));
  $put_1(result, 'SDP', new CurrencyDataImpl_0('SDP', 'SDP', 130));
  $put_1(result, 'SEK', new CurrencyDataImpl_1('SEK', 'Skr', 2, 'kr'));
  $put_1(result, 'SGD', new CurrencyDataImpl_1('SGD', 'S$', 2, 'S$'));
  $put_1(result, 'SHP', new CurrencyDataImpl_0('SHP', 'SH\xA3', 2));
  $put_1(result, 'SIT', new CurrencyDataImpl_0('SIT', 'SIT', 130));
  $put_1(result, 'SKK', new CurrencyDataImpl_0('SKK', 'Sk', 130));
  $put_1(result, 'SLL', new CurrencyDataImpl_0('SLL', 'Le', 0));
  $put_1(result, 'SOS', new CurrencyDataImpl_0('SOS', 'Ssh', 0));
  $put_1(result, 'SRD', new CurrencyDataImpl_0('SRD', 'SR$', 2));
  $put_1(result, 'SRG', new CurrencyDataImpl_0('SRG', 'Sf', 130));
  $put_1(result, 'STD', new CurrencyDataImpl_0('STD', 'Db', 0));
  $put_1(result, 'SUR', new CurrencyDataImpl_0('SUR', 'SUR', 130));
  $put_1(result, 'SVC', new CurrencyDataImpl_0('SVC', 'SV\u20A1', 130));
  $put_1(result, 'SYP', new CurrencyDataImpl_0('SYP', 'SY\xA3', 0));
  $put_1(result, 'SZL', new CurrencyDataImpl_0('SZL', 'SZL', 2));
  $put_1(result, 'THB', new CurrencyDataImpl_1('THB', '\u0E3F', 2, 'THB'));
  $put_1(result, 'TJR', new CurrencyDataImpl_0('TJR', 'TJR', 130));
  $put_1(result, 'TJS', new CurrencyDataImpl_0('TJS', 'TJS', 2));
  $put_1(result, 'TMM', new CurrencyDataImpl_0('TMM', 'TMM', 128));
  $put_1(result, 'TND', new CurrencyDataImpl_0('TND', 'DT', 3));
  $put_1(result, 'TOP', new CurrencyDataImpl_0('TOP', 'T$', 2));
  $put_1(result, 'TPE', new CurrencyDataImpl_0('TPE', 'TPE', 130));
  $put_1(result, 'TRL', new CurrencyDataImpl_0('TRL', 'TRL', 128));
  $put_1(result, 'TRY', new CurrencyDataImpl_1('TRY', 'TL', 2, 'YTL'));
  $put_1(result, 'TTD', new CurrencyDataImpl_0('TTD', 'TT$', 2));
  $put_1(result, 'TWD', new CurrencyDataImpl_1('TWD', 'NT$', 2, 'NT$'));
  $put_1(result, 'TZS', new CurrencyDataImpl_0('TZS', 'TSh', 0));
  $put_1(result, 'UAH', new CurrencyDataImpl_0('UAH', '\u20B4', 2));
  $put_1(result, 'UAK', new CurrencyDataImpl_0('UAK', 'UAK', 130));
  $put_1(result, 'UGS', new CurrencyDataImpl_0('UGS', 'UGS', 130));
  $put_1(result, 'UGX', new CurrencyDataImpl_0('UGX', 'USh', 0));
  $put_1(result, 'USD', new CurrencyDataImpl_1('USD', 'US$', 2, 'US$'));
  $put_1(result, 'USN', new CurrencyDataImpl_0('USN', 'USN', 2));
  $put_1(result, 'USS', new CurrencyDataImpl_0('USS', 'USS', 2));
  $put_1(result, 'UYI', new CurrencyDataImpl_0('UYI', 'UYI', 2));
  $put_1(result, 'UYP', new CurrencyDataImpl_0('UYP', 'UYP', 130));
  $put_1(result, 'UYU', new CurrencyDataImpl_1('UYU', '$U', 2, 'UY$'));
  $put_1(result, 'UZS', new CurrencyDataImpl_0('UZS', 'UZS', 0));
  $put_1(result, 'VEB', new CurrencyDataImpl_0('VEB', 'VEB', 130));
  $put_1(result, 'VEF', new CurrencyDataImpl_0('VEF', 'Bs.F.', 2));
  $put_1(result, 'VND', new CurrencyDataImpl_1('VND', '\u20AB', 24, '\u20AB'));
  $put_1(result, 'VUV', new CurrencyDataImpl_0('VUV', 'VT', 0));
  $put_1(result, 'WST', new CurrencyDataImpl_0('WST', 'WS$', 2));
  $put_1(result, 'XAF', new CurrencyDataImpl_0('XAF', 'FCFA', 0));
  $put_1(result, 'XAG', new CurrencyDataImpl_0('XAG', 'XAG', 2));
  $put_1(result, 'XAU', new CurrencyDataImpl_0('XAU', 'XAU', 2));
  $put_1(result, 'XBA', new CurrencyDataImpl_0('XBA', 'XBA', 2));
  $put_1(result, 'XBB', new CurrencyDataImpl_0('XBB', 'XBB', 2));
  $put_1(result, 'XBC', new CurrencyDataImpl_0('XBC', 'XBC', 2));
  $put_1(result, 'XBD', new CurrencyDataImpl_0('XBD', 'XBD', 2));
  $put_1(result, 'XCD', new CurrencyDataImpl_0('XCD', 'EC$', 2));
  $put_1(result, 'XDR', new CurrencyDataImpl_0('XDR', 'XDR', 2));
  $put_1(result, 'XEU', new CurrencyDataImpl_0('XEU', 'XEU', 2));
  $put_1(result, 'XFO', new CurrencyDataImpl_0('XFO', 'XFO', 2));
  $put_1(result, 'XFU', new CurrencyDataImpl_0('XFU', 'XFU', 2));
  $put_1(result, 'XOF', new CurrencyDataImpl_0('XOF', 'CFA', 0));
  $put_1(result, 'XPD', new CurrencyDataImpl_0('XPD', 'XPD', 2));
  $put_1(result, 'XPF', new CurrencyDataImpl_0('XPF', 'CFPF', 0));
  $put_1(result, 'XPT', new CurrencyDataImpl_0('XPT', 'XPT', 2));
  $put_1(result, 'XRE', new CurrencyDataImpl_0('XRE', 'XRE', 2));
  $put_1(result, 'XTS', new CurrencyDataImpl_0('XTS', 'XTS', 2));
  $put_1(result, 'XXX', new CurrencyDataImpl_0('XXX', 'XXX', 2));
  $put_1(result, 'YDD', new CurrencyDataImpl_0('YDD', 'YDD', 130));
  $put_1(result, 'YER', new CurrencyDataImpl_1('YER', 'YR', 0, 'YER'));
  $put_1(result, 'YUD', new CurrencyDataImpl_0('YUD', 'YUD', 130));
  $put_1(result, 'YUM', new CurrencyDataImpl_0('YUM', 'YUM', 130));
  $put_1(result, 'YUN', new CurrencyDataImpl_0('YUN', 'YUN', 130));
  $put_1(result, 'ZAL', new CurrencyDataImpl_0('ZAL', 'ZAL', 2));
  $put_1(result, 'ZAR', new CurrencyDataImpl_1('ZAR', 'R', 2, 'ZAR'));
  $put_1(result, 'ZMK', new CurrencyDataImpl_0('ZMK', 'ZK', 0));
  $put_1(result, 'ZRN', new CurrencyDataImpl_0('ZRN', 'NZ', 130));
  $put_1(result, 'ZRZ', new CurrencyDataImpl_0('ZRZ', 'ZRZ', 130));
  $put_1(result, 'ZWD', new CurrencyDataImpl_0('ZWD', 'Z$', 128));
  return result;
}

function $loadCurrencyMapNative_0(this$static){
  return overrideMap($loadCurrencyMapNative(), $loadMyCurrencyMapOverridesNative());
}

function $loadMyCurrencyMapOverridesNative(){
  return {ADP:['ADP', 'ADP', 128], AED:['AED', 'DH', 2, 'DH'], AFA:['AFA', 'AFA', 130], AFN:['AFN', 'Af', 0], ALL:['ALL', 'ALL', 0], AMD:['AMD', 'AMD', 0], ANG:['ANG', 'NAf.', 2], AOA:['AOA', 'Kz', 2], AOK:['AOK', 'AOK', 130], AON:['AON', 'AON', 130], AOR:['AOR', 'AOR', 130], ARA:['ARA', '\u20B3', 130], ARL:['ARL', '$L', 130], ARM:['ARM', 'm$n', 130], ARP:['ARP', 'ARP', 130], ARS:['ARS', 'AR$', 2, 'AR$'], ATS:['ATS', 'ATS', 130], AUD:['AUD', 'AU$', 2, 'AU$'], AWG:['AWG', 'Afl.', 2], AZM:['AZM', 'AZM', 130], AZN:['AZN', 'man.', 2], BAD:['BAD', 'BAD', 130], BAM:['BAM', 'KM', 2], BBD:['BBD', 'Bds$', 2], BDT:['BDT', 'Tk', 2, 'Tk'], BEC:['BEC', 'BEC', 2], BEF:['BEF', 'BF', 130], BEL:['BEL', 'BEL', 2], BGL:['BGL', 'BGL', 130], BGN:['BGN', 'BGN', 2], BHD:['BHD', 'BD', 3], BIF:['BIF', 'FBu', 0], BMD:['BMD', 'BD$', 2], BND:['BND', 'BN$', 2], BOB:['BOB', 'Bs', 2], BOP:['BOP', '$b.', 130], BOV:['BOV', 'BOV', 2], BRB:['BRB', 'BRB', 130], BRC:['BRC', 'BRC', 130], BRE:['BRE', 'BRE', 130], BRL:['BRL', 'R$', 2, 'R$'], BRN:['BRN', 'BRN', 130], BRR:['BRR', 'BRR', 130], BSD:['BSD', 'BS$', 2], BTN:['BTN', 'Nu.', 2], BUK:['BUK', 'BUK', 130], BWP:['BWP', 'BWP', 2], BYB:['BYB', 'BYB', 130], BYR:['BYR', 'BYR', 0], BZD:['BZD', 'BZ$', 2], CAD:['CAD', 'CA$', 2, 'C$'], CDF:['CDF', 'CDF', 2], CHE:['CHE', 'CHE', 2], CHF:['CHF', 'Fr.', 2, 'CHF'], CHW:['CHW', 'CHW', 2], CLE:['CLE', 'E\xBA', 130], CLF:['CLF', 'CLF', 0], CLP:['CLP', 'CL$', 0, 'CL$'], CNY:['CNY', 'CN\xA5', 2, 'RMB\xA5'], COP:['COP', 'CO$', 0, 'COL$'], COU:['COU', 'COU', 2], CRC:['CRC', '\u20A1', 0, 'CR\u20A1'], CSD:['CSD', 'CSD', 130], CSK:['CSK', 'CSK', 130], CUC:['CUC', 'CUC$', 2], CUP:['CUP', 'CU$', 2, '$MN'], CVE:['CVE', 'CV$', 2], CYP:['CYP', 'CY\xA3', 130], CZK:['CZK', 'K\u010D', 2, 'K\u010D'], DDM:['DDM', 'DDM', 130], DEM:['DEM', 'DM', 130], DJF:['DJF', 'Fdj', 0], DKK:['DKK', 'Dkr', 2, 'kr'], DOP:['DOP', 'RD$', 2, 'RD$'], DZD:['DZD', 'DA', 2], ECS:['ECS', 'ECS', 130], ECV:['ECV', 'ECV', 2], EEK:['EEK', 'Ekr', 2], EGP:['EGP', 'EG\xA3', 2, 'LE'], EQE:['EQE', 'EQE', 130], ERN:['ERN', 'Nfk', 2], ESA:['ESA', 'ESA', 2], ESB:['ESB', 'ESB', 2], ESP:['ESP', 'Pts', 128], ETB:['ETB', 'Br', 2], EUR:['EUR', '\u20AC', 2, '\u20AC'], FIM:['FIM', 'mk', 130], FJD:['FJD', 'FJ$', 2], FKP:['FKP', 'FK\xA3', 2], FRF:['FRF', '\u20A3', 130], GBP:['GBP', '\xA3', 2, 'GB\xA3'], GEK:['GEK', 'GEK', 130], GEL:['GEL', 'GEL', 2], GHC:['GHC', '\u20B5', 130], GHS:['GHS', 'GH\u20B5', 2], GIP:['GIP', 'GI\xA3', 2], GMD:['GMD', 'GMD', 2], GNF:['GNF', 'FG', 0], GNS:['GNS', 'GNS', 130], GQE:['GQE', 'GQE', 130], GRD:['GRD', '\u20AF', 130], GTQ:['GTQ', 'GTQ', 2], GWE:['GWE', 'GWE', 130], GWP:['GWP', 'GWP', 2], GYD:['GYD', 'GY$', 0], HKD:['HKD', 'HK$', 2, 'HK$'], HNL:['HNL', 'HNL', 2], HRD:['HRD', 'HRD', 130], HRK:['HRK', 'kn', 2], HTG:['HTG', 'HTG', 2], HUF:['HUF', 'Ft', 0], IDR:['IDR', 'Rp', 0], IEP:['IEP', 'IR\xA3', 130], ILP:['ILP', 'I\xA3', 130], ILS:['ILS', '\u20AA', 2, 'IL\u20AA'], INR:['INR', 'Rs', 2, 'Rs'], IQD:['IQD', 'IQD', 0], IRR:['IRR', 'IRR', 0], ISK:['ISK', 'Ikr', 0, 'kr'], ITL:['ITL', 'IT\u20A4', 128], JMD:['JMD', 'J$', 2, 'JA$'], JOD:['JOD', 'JD', 3], JPY:['JPY', 'JP\xA5', 0, 'JP\xA5'], KES:['KES', 'Ksh', 2], KGS:['KGS', 'KGS', 2], KHR:['KHR', 'KHR', 2], KMF:['KMF', 'CF', 0], KPW:['KPW', 'KPW', 0], KRW:['KRW', '\u20A9', 0, 'KR\u20A9'], KWD:['KWD', 'KD', 3], KYD:['KYD', 'KY$', 2], KZT:['KZT', 'KZT', 2], LAK:['LAK', '\u20AD', 0], LBP:['LBP', 'LB\xA3', 0], LKR:['LKR', 'SLRs', 2, 'SLRs'], LRD:['LRD', 'L$', 2], LSL:['LSL', 'LSL', 2], LSM:['LSM', 'LSM', 130], LTL:['LTL', 'Lt', 2], LTT:['LTT', 'LTT', 130], LUC:['LUC', 'LUC', 2], LUF:['LUF', 'LUF', 128], LUL:['LUL', 'LUL', 2], LVL:['LVL', 'Ls', 2], LVR:['LVR', 'LVR', 130], LYD:['LYD', 'LD', 3], MAD:['MAD', 'MAD', 2], MAF:['MAF', 'MAF', 130], MDL:['MDL', 'MDL', 2], MGA:['MGA', 'MGA', 0], MGF:['MGF', 'MGF', 128], MKD:['MKD', 'MKD', 2], MLF:['MLF', 'MLF', 130], MMK:['MMK', 'MMK', 0], MNT:['MNT', '\u20AE', 0, 'MN\u20AE'], MOP:['MOP', 'MOP$', 2], MRO:['MRO', 'UM', 0], MTL:['MTL', 'Lm', 130], MTP:['MTP', 'MT\xA3', 130], MUR:['MUR', 'MURs', 0], MVR:['MVR', 'MVR', 2], MWK:['MWK', 'MWK', 2], MXN:['MXN', 'Mex$', 2, 'Mex$'], MXP:['MXP', 'MX$', 130], MXV:['MXV', 'MXV', 2], MYR:['MYR', 'RM', 2, 'RM'], MZE:['MZE', 'MZE', 130], MZM:['MZM', 'Mt', 130], MZN:['MZN', 'MTn', 2], NAD:['NAD', 'N$', 2], NGN:['NGN', '\u20A6', 2], NIC:['NIC', 'NIC', 130], NIO:['NIO', 'C$', 2], NLG:['NLG', 'fl', 130], NOK:['NOK', 'Nkr', 2, 'NOkr'], NPR:['NPR', 'NPRs', 2], NZD:['NZD', 'NZ$', 2], OMR:['OMR', 'OMR', 3], PAB:['PAB', 'B/.', 2, 'B/.'], PEI:['PEI', 'I/.', 130], PEN:['PEN', 'S/.', 2, 'S/.'], PES:['PES', 'PES', 130], PGK:['PGK', 'PGK', 2], PHP:['PHP', '\u20B1', 2, 'PHP'], PKR:['PKR', 'PKRs', 0, 'PKRs.'], PLN:['PLN', 'z\u0142', 2], PLZ:['PLZ', 'PLZ', 130], PTE:['PTE', 'Esc', 130], PYG:['PYG', '\u20B2', 0], QAR:['QAR', 'QR', 2], RHD:['RHD', 'RH$', 130], ROL:['ROL', 'ROL', 130], RON:['RON', 'RON', 2], RSD:['RSD', 'din.', 0], RUB:['RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'], RUR:['RUR', 'RUR', 130], RWF:['RWF', 'RWF', 0], SAR:['SAR', 'SR', 2, 'SR'], SBD:['SBD', 'SI$', 2], SCR:['SCR', 'SRe', 2], SDD:['SDD', 'LSd', 130], SDG:['SDG', 'SDG', 2], SDP:['SDP', 'SDP', 130], SEK:['SEK', 'Skr', 2, 'kr'], SGD:['SGD', 'S$', 2, 'S$'], SHP:['SHP', 'SH\xA3', 2], SIT:['SIT', 'SIT', 130], SKK:['SKK', 'Sk', 130], SLL:['SLL', 'Le', 0], SOS:['SOS', 'Ssh', 0], SRD:['SRD', 'SR$', 2], SRG:['SRG', 'Sf', 130], STD:['STD', 'Db', 0], SUR:['SUR', 'SUR', 130], SVC:['SVC', 'SV\u20A1', 130], SYP:['SYP', 'SY\xA3', 0], SZL:['SZL', 'SZL', 2], THB:['THB', '\u0E3F', 2, 'THB'], TJR:['TJR', 'TJR', 130], TJS:['TJS', 'TJS', 2], TMM:['TMM', 'TMM', 128], TND:['TND', 'DT', 3], TOP:['TOP', 'T$', 2], TPE:['TPE', 'TPE', 130], TRL:['TRL', 'TRL', 128], TRY:['TRY', 'TL', 2, 'YTL'], TTD:['TTD', 'TT$', 2], TWD:['TWD', 'NT$', 2, 'NT$'], TZS:['TZS', 'TSh', 0], UAH:['UAH', '\u20B4', 2], UAK:['UAK', 'UAK', 130], UGS:['UGS', 'UGS', 130], UGX:['UGX', 'USh', 0], USD:['USD', 'US$', 2, 'US$'], USN:['USN', 'USN', 2], USS:['USS', 'USS', 2], UYI:['UYI', 'UYI', 2], UYP:['UYP', 'UYP', 130], UYU:['UYU', '$U', 2, 'UY$'], UZS:['UZS', 'UZS', 0], VEB:['VEB', 'VEB', 130], VEF:['VEF', 'Bs.F.', 2], VND:['VND', '\u20AB', 24, '\u20AB'], VUV:['VUV', 'VT', 0], WST:['WST', 'WS$', 2], XAF:['XAF', 'FCFA', 0], XAG:['XAG', 'XAG', 2], XAU:['XAU', 'XAU', 2], XBA:['XBA', 'XBA', 2], XBB:['XBB', 'XBB', 2], XBC:['XBC', 'XBC', 2], XBD:['XBD', 'XBD', 2], XCD:['XCD', 'EC$', 2], XDR:['XDR', 'XDR', 2], XEU:['XEU', 'XEU', 2], XFO:['XFO', 'XFO', 2], XFU:['XFU', 'XFU', 2], XOF:['XOF', 'CFA', 0], XPD:['XPD', 'XPD', 2], XPF:['XPF', 'CFPF', 0], XPT:['XPT', 'XPT', 2], XRE:['XRE', 'XRE', 2], XTS:['XTS', 'XTS', 2], XXX:['XXX', 'XXX', 2], YDD:['YDD', 'YDD', 130], YER:['YER', 'YR', 0, 'YER'], YUD:['YUD', 'YUD', 130], YUM:['YUM', 'YUM', 130], YUN:['YUN', 'YUN', 130], ZAL:['ZAL', 'ZAL', 2], ZAR:['ZAR', 'R', 2, 'ZAR'], ZMK:['ZMK', 'ZK', 0], ZRN:['ZRN', 'NZ', 130], ZRZ:['ZRZ', 'ZRZ', 130], ZWD:['ZWD', 'Z$', 128]};
}

function CurrencyList__0(){
  CurrencyList_0.call(this);
  $$init_124();
}

function CurrencyList_(){
}

_ = CurrencyList_.prototype = new CurrencyList;
_.getClass$ = function getClass_125(){
  return Lcom_google_gwt_i18n_client_CurrencyList_1_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava_0(){
  return new CurrencyDataImpl_1('USD', 'US$', 2, 'US$');
}
;
_.getDefaultNative = function getDefaultNative_0(){
  return ['USD', 'US$', 2, 'US$'];
}
;
_.loadCurrencyMapJava = function loadCurrencyMapJava_0(){
  return $loadCurrencyMapJava_0(this);
}
;
_.loadCurrencyMapNative = function loadCurrencyMapNative_0(){
  return $loadCurrencyMapNative_0(this);
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
function $$init_125(){
}

function $loadCurrencyMapJava_1(this$static){
  var result;
  result = $loadCurrencyMapJava_0(this$static);
  $put_1(result, 'ADP', new CurrencyDataImpl_0('ADP', 'ADP', 128));
  $put_1(result, 'AED', new CurrencyDataImpl_1('AED', 'DH', 2, 'DH'));
  $put_1(result, 'AFA', new CurrencyDataImpl_0('AFA', 'AFA', 130));
  $put_1(result, 'AFN', new CurrencyDataImpl_0('AFN', 'Af', 0));
  $put_1(result, 'ALL', new CurrencyDataImpl_0('ALL', 'ALL', 0));
  $put_1(result, 'AMD', new CurrencyDataImpl_0('AMD', 'AMD', 0));
  $put_1(result, 'ANG', new CurrencyDataImpl_0('ANG', 'NAf.', 2));
  $put_1(result, 'AOA', new CurrencyDataImpl_0('AOA', 'Kz', 2));
  $put_1(result, 'AOK', new CurrencyDataImpl_0('AOK', 'AOK', 130));
  $put_1(result, 'AON', new CurrencyDataImpl_0('AON', 'AON', 130));
  $put_1(result, 'AOR', new CurrencyDataImpl_0('AOR', 'AOR', 130));
  $put_1(result, 'ARA', new CurrencyDataImpl_0('ARA', '\u20B3', 130));
  $put_1(result, 'ARL', new CurrencyDataImpl_0('ARL', '$L', 130));
  $put_1(result, 'ARM', new CurrencyDataImpl_0('ARM', 'm$n', 130));
  $put_1(result, 'ARP', new CurrencyDataImpl_0('ARP', 'ARP', 130));
  $put_1(result, 'ARS', new CurrencyDataImpl_1('ARS', 'AR$', 2, 'AR$'));
  $put_1(result, 'ATS', new CurrencyDataImpl_0('ATS', 'ATS', 130));
  $put_1(result, 'AUD', new CurrencyDataImpl_1('AUD', 'AU$', 2, 'AU$'));
  $put_1(result, 'AWG', new CurrencyDataImpl_0('AWG', 'Afl.', 2));
  $put_1(result, 'AZM', new CurrencyDataImpl_0('AZM', 'AZM', 130));
  $put_1(result, 'AZN', new CurrencyDataImpl_0('AZN', 'man.', 2));
  $put_1(result, 'BAD', new CurrencyDataImpl_0('BAD', 'BAD', 130));
  $put_1(result, 'BAM', new CurrencyDataImpl_0('BAM', 'KM', 2));
  $put_1(result, 'BAN', new CurrencyDataImpl_0('BAN', 'BAN', 130));
  $put_1(result, 'BBD', new CurrencyDataImpl_0('BBD', 'Bds$', 2));
  $put_1(result, 'BDT', new CurrencyDataImpl_1('BDT', 'Tk', 2, 'Tk'));
  $put_1(result, 'BEC', new CurrencyDataImpl_0('BEC', 'BEC', 2));
  $put_1(result, 'BEF', new CurrencyDataImpl_0('BEF', 'BF', 130));
  $put_1(result, 'BEL', new CurrencyDataImpl_0('BEL', 'BEL', 2));
  $put_1(result, 'BGL', new CurrencyDataImpl_0('BGL', 'BGL', 130));
  $put_1(result, 'BGM', new CurrencyDataImpl_0('BGM', 'BGM', 130));
  $put_1(result, 'BGN', new CurrencyDataImpl_0('BGN', 'BGN', 2));
  $put_1(result, 'BGO', new CurrencyDataImpl_0('BGO', 'BGO', 130));
  $put_1(result, 'BHD', new CurrencyDataImpl_0('BHD', 'BD', 3));
  $put_1(result, 'BIF', new CurrencyDataImpl_0('BIF', 'FBu', 0));
  $put_1(result, 'BMD', new CurrencyDataImpl_0('BMD', 'BD$', 2));
  $put_1(result, 'BND', new CurrencyDataImpl_0('BND', 'BN$', 2));
  $put_1(result, 'BOB', new CurrencyDataImpl_0('BOB', 'Bs', 2));
  $put_1(result, 'BOL', new CurrencyDataImpl_0('BOL', 'BOL', 130));
  $put_1(result, 'BOP', new CurrencyDataImpl_0('BOP', '$b.', 130));
  $put_1(result, 'BOV', new CurrencyDataImpl_0('BOV', 'BOV', 2));
  $put_1(result, 'BRB', new CurrencyDataImpl_0('BRB', 'BRB', 130));
  $put_1(result, 'BRC', new CurrencyDataImpl_0('BRC', 'BRC', 130));
  $put_1(result, 'BRE', new CurrencyDataImpl_0('BRE', 'BRE', 130));
  $put_1(result, 'BRL', new CurrencyDataImpl_1('BRL', 'R$', 2, 'R$'));
  $put_1(result, 'BRN', new CurrencyDataImpl_0('BRN', 'BRN', 130));
  $put_1(result, 'BRR', new CurrencyDataImpl_0('BRR', 'BRR', 130));
  $put_1(result, 'BRZ', new CurrencyDataImpl_0('BRZ', 'BRZ', 130));
  $put_1(result, 'BSD', new CurrencyDataImpl_0('BSD', 'BS$', 2));
  $put_1(result, 'BTN', new CurrencyDataImpl_0('BTN', 'Nu.', 2));
  $put_1(result, 'BUK', new CurrencyDataImpl_0('BUK', 'BUK', 130));
  $put_1(result, 'BWP', new CurrencyDataImpl_0('BWP', 'BWP', 2));
  $put_1(result, 'BYB', new CurrencyDataImpl_0('BYB', 'BYB', 130));
  $put_1(result, 'BYR', new CurrencyDataImpl_0('BYR', 'BYR', 0));
  $put_1(result, 'BZD', new CurrencyDataImpl_0('BZD', 'BZ$', 2));
  $put_1(result, 'CAD', new CurrencyDataImpl_1('CAD', 'CA$', 2, 'C$'));
  $put_1(result, 'CDF', new CurrencyDataImpl_0('CDF', 'CDF', 2));
  $put_1(result, 'CHE', new CurrencyDataImpl_0('CHE', 'CHE', 2));
  $put_1(result, 'CHF', new CurrencyDataImpl_1('CHF', 'Fr.', 2, 'CHF'));
  $put_1(result, 'CHW', new CurrencyDataImpl_0('CHW', 'CHW', 2));
  $put_1(result, 'CLE', new CurrencyDataImpl_0('CLE', 'E\xBA', 130));
  $put_1(result, 'CLF', new CurrencyDataImpl_0('CLF', 'CLF', 0));
  $put_1(result, 'CLP', new CurrencyDataImpl_1('CLP', 'CL$', 0, 'CL$'));
  $put_1(result, 'CNY', new CurrencyDataImpl_1('CNY', 'CN\xA5', 2, 'RMB\xA5'));
  $put_1(result, 'COP', new CurrencyDataImpl_1('COP', 'CO$', 0, 'COL$'));
  $put_1(result, 'COU', new CurrencyDataImpl_0('COU', 'COU', 2));
  $put_1(result, 'CRC', new CurrencyDataImpl_1('CRC', '\u20A1', 0, 'CR\u20A1'));
  $put_1(result, 'CSD', new CurrencyDataImpl_0('CSD', 'CSD', 130));
  $put_1(result, 'CSK', new CurrencyDataImpl_0('CSK', 'CSK', 130));
  $put_1(result, 'CUC', new CurrencyDataImpl_0('CUC', 'CUC$', 2));
  $put_1(result, 'CUP', new CurrencyDataImpl_1('CUP', 'CU$', 2, '$MN'));
  $put_1(result, 'CVE', new CurrencyDataImpl_0('CVE', 'CV$', 2));
  $put_1(result, 'CYP', new CurrencyDataImpl_0('CYP', 'CY\xA3', 130));
  $put_1(result, 'CZK', new CurrencyDataImpl_1('CZK', 'K\u010D', 2, 'K\u010D'));
  $put_1(result, 'DDM', new CurrencyDataImpl_0('DDM', 'DDM', 130));
  $put_1(result, 'DEM', new CurrencyDataImpl_0('DEM', 'DM', 130));
  $put_1(result, 'DJF', new CurrencyDataImpl_0('DJF', 'Fdj', 0));
  $put_1(result, 'DKK', new CurrencyDataImpl_1('DKK', 'Dkr', 2, 'kr'));
  $put_1(result, 'DOP', new CurrencyDataImpl_1('DOP', 'RD$', 2, 'RD$'));
  $put_1(result, 'DZD', new CurrencyDataImpl_0('DZD', 'DA', 2));
  $put_1(result, 'ECS', new CurrencyDataImpl_0('ECS', 'ECS', 130));
  $put_1(result, 'ECV', new CurrencyDataImpl_0('ECV', 'ECV', 2));
  $put_1(result, 'EEK', new CurrencyDataImpl_0('EEK', 'Ekr', 2));
  $put_1(result, 'EGP', new CurrencyDataImpl_1('EGP', 'EG\xA3', 2, 'LE'));
  $put_1(result, 'EQE', new CurrencyDataImpl_0('EQE', 'EQE', 130));
  $put_1(result, 'ERN', new CurrencyDataImpl_0('ERN', 'Nfk', 2));
  $put_1(result, 'ESA', new CurrencyDataImpl_0('ESA', 'ESA', 2));
  $put_1(result, 'ESB', new CurrencyDataImpl_0('ESB', 'ESB', 2));
  $put_1(result, 'ESP', new CurrencyDataImpl_0('ESP', 'Pts', 128));
  $put_1(result, 'ETB', new CurrencyDataImpl_0('ETB', 'Br', 2));
  $put_1(result, 'EUR', new CurrencyDataImpl_1('EUR', '\u20AC', 2, '\u20AC'));
  $put_1(result, 'FIM', new CurrencyDataImpl_0('FIM', 'mk', 130));
  $put_1(result, 'FJD', new CurrencyDataImpl_0('FJD', 'FJ$', 2));
  $put_1(result, 'FKP', new CurrencyDataImpl_0('FKP', 'FK\xA3', 2));
  $put_1(result, 'FRF', new CurrencyDataImpl_0('FRF', '\u20A3', 130));
  $put_1(result, 'GBP', new CurrencyDataImpl_1('GBP', '\xA3', 2, 'GB\xA3'));
  $put_1(result, 'GEK', new CurrencyDataImpl_0('GEK', 'GEK', 130));
  $put_1(result, 'GEL', new CurrencyDataImpl_0('GEL', 'GEL', 2));
  $put_1(result, 'GHC', new CurrencyDataImpl_0('GHC', '\u20B5', 130));
  $put_1(result, 'GHS', new CurrencyDataImpl_0('GHS', 'GH\u20B5', 2));
  $put_1(result, 'GIP', new CurrencyDataImpl_0('GIP', 'GI\xA3', 2));
  $put_1(result, 'GMD', new CurrencyDataImpl_0('GMD', 'GMD', 2));
  $put_1(result, 'GNF', new CurrencyDataImpl_0('GNF', 'FG', 0));
  $put_1(result, 'GNS', new CurrencyDataImpl_0('GNS', 'GNS', 130));
  $put_1(result, 'GQE', new CurrencyDataImpl_0('GQE', 'GQE', 130));
  $put_1(result, 'GRD', new CurrencyDataImpl_0('GRD', '\u20AF', 130));
  $put_1(result, 'GTQ', new CurrencyDataImpl_0('GTQ', 'GTQ', 2));
  $put_1(result, 'GWE', new CurrencyDataImpl_0('GWE', 'GWE', 130));
  $put_1(result, 'GWP', new CurrencyDataImpl_0('GWP', 'GWP', 2));
  $put_1(result, 'GYD', new CurrencyDataImpl_0('GYD', 'GY$', 0));
  $put_1(result, 'HKD', new CurrencyDataImpl_1('HKD', 'HK$', 2, 'HK$'));
  $put_1(result, 'HNL', new CurrencyDataImpl_0('HNL', 'HNL', 2));
  $put_1(result, 'HRD', new CurrencyDataImpl_0('HRD', 'HRD', 130));
  $put_1(result, 'HRK', new CurrencyDataImpl_0('HRK', 'kn', 2));
  $put_1(result, 'HTG', new CurrencyDataImpl_0('HTG', 'HTG', 2));
  $put_1(result, 'HUF', new CurrencyDataImpl_0('HUF', 'Ft', 0));
  $put_1(result, 'IDR', new CurrencyDataImpl_0('IDR', 'Rp', 0));
  $put_1(result, 'IEP', new CurrencyDataImpl_0('IEP', 'IR\xA3', 130));
  $put_1(result, 'ILP', new CurrencyDataImpl_0('ILP', 'I\xA3', 130));
  $put_1(result, 'ILR', new CurrencyDataImpl_0('ILR', 'ILR', 130));
  $put_1(result, 'ILS', new CurrencyDataImpl_1('ILS', '\u20AA', 2, 'IL\u20AA'));
  $put_1(result, 'INR', new CurrencyDataImpl_1('INR', 'Rs', 2, 'Rs'));
  $put_1(result, 'IQD', new CurrencyDataImpl_0('IQD', 'IQD', 0));
  $put_1(result, 'IRR', new CurrencyDataImpl_0('IRR', 'IRR', 0));
  $put_1(result, 'ISJ', new CurrencyDataImpl_0('ISJ', 'ISJ', 130));
  $put_1(result, 'ISK', new CurrencyDataImpl_1('ISK', 'Ikr', 0, 'kr'));
  $put_1(result, 'ITL', new CurrencyDataImpl_0('ITL', 'IT\u20A4', 128));
  $put_1(result, 'JMD', new CurrencyDataImpl_1('JMD', 'J$', 2, 'JA$'));
  $put_1(result, 'JOD', new CurrencyDataImpl_0('JOD', 'JD', 3));
  $put_1(result, 'JPY', new CurrencyDataImpl_1('JPY', '\xA5', 0, 'JP\xA5'));
  $put_1(result, 'KES', new CurrencyDataImpl_0('KES', 'Ksh', 2));
  $put_1(result, 'KGS', new CurrencyDataImpl_0('KGS', 'KGS', 2));
  $put_1(result, 'KHR', new CurrencyDataImpl_0('KHR', 'KHR', 2));
  $put_1(result, 'KMF', new CurrencyDataImpl_0('KMF', 'CF', 0));
  $put_1(result, 'KPW', new CurrencyDataImpl_0('KPW', 'KPW', 0));
  $put_1(result, 'KRH', new CurrencyDataImpl_0('KRH', 'KRH', 130));
  $put_1(result, 'KRO', new CurrencyDataImpl_0('KRO', 'KRO', 130));
  $put_1(result, 'KRW', new CurrencyDataImpl_1('KRW', '\u20A9', 0, 'KR\u20A9'));
  $put_1(result, 'KWD', new CurrencyDataImpl_0('KWD', 'KD', 3));
  $put_1(result, 'KYD', new CurrencyDataImpl_0('KYD', 'KY$', 2));
  $put_1(result, 'KZT', new CurrencyDataImpl_0('KZT', 'KZT', 2));
  $put_1(result, 'LAK', new CurrencyDataImpl_0('LAK', '\u20AD', 0));
  $put_1(result, 'LBP', new CurrencyDataImpl_0('LBP', 'LB\xA3', 0));
  $put_1(result, 'LKR', new CurrencyDataImpl_1('LKR', 'SLRs', 2, 'SLRs'));
  $put_1(result, 'LRD', new CurrencyDataImpl_0('LRD', 'L$', 2));
  $put_1(result, 'LSL', new CurrencyDataImpl_0('LSL', 'LSL', 2));
  $put_1(result, 'LSM', new CurrencyDataImpl_0('LSM', 'LSM', 130));
  $put_1(result, 'LTL', new CurrencyDataImpl_0('LTL', 'Lt', 2));
  $put_1(result, 'LTT', new CurrencyDataImpl_0('LTT', 'LTT', 130));
  $put_1(result, 'LUC', new CurrencyDataImpl_0('LUC', 'LUC', 2));
  $put_1(result, 'LUF', new CurrencyDataImpl_0('LUF', 'LUF', 128));
  $put_1(result, 'LUL', new CurrencyDataImpl_0('LUL', 'LUL', 2));
  $put_1(result, 'LVL', new CurrencyDataImpl_0('LVL', 'Ls', 2));
  $put_1(result, 'LVR', new CurrencyDataImpl_0('LVR', 'LVR', 130));
  $put_1(result, 'LYD', new CurrencyDataImpl_0('LYD', 'LD', 3));
  $put_1(result, 'MAD', new CurrencyDataImpl_0('MAD', 'MAD', 2));
  $put_1(result, 'MAF', new CurrencyDataImpl_0('MAF', 'MAF', 130));
  $put_1(result, 'MCF', new CurrencyDataImpl_0('MCF', 'MCF', 130));
  $put_1(result, 'MDC', new CurrencyDataImpl_0('MDC', 'MDC', 130));
  $put_1(result, 'MDL', new CurrencyDataImpl_0('MDL', 'MDL', 2));
  $put_1(result, 'MGA', new CurrencyDataImpl_0('MGA', 'MGA', 0));
  $put_1(result, 'MGF', new CurrencyDataImpl_0('MGF', 'MGF', 128));
  $put_1(result, 'MKD', new CurrencyDataImpl_0('MKD', 'MKD', 2));
  $put_1(result, 'MKN', new CurrencyDataImpl_0('MKN', 'MKN', 130));
  $put_1(result, 'MLF', new CurrencyDataImpl_0('MLF', 'MLF', 130));
  $put_1(result, 'MMK', new CurrencyDataImpl_0('MMK', 'MMK', 0));
  $put_1(result, 'MNT', new CurrencyDataImpl_1('MNT', '\u20AE', 0, 'MN\u20AE'));
  $put_1(result, 'MOP', new CurrencyDataImpl_0('MOP', 'MOP$', 2));
  $put_1(result, 'MRO', new CurrencyDataImpl_0('MRO', 'UM', 0));
  $put_1(result, 'MTL', new CurrencyDataImpl_0('MTL', 'Lm', 130));
  $put_1(result, 'MTP', new CurrencyDataImpl_0('MTP', 'MT\xA3', 130));
  $put_1(result, 'MUR', new CurrencyDataImpl_0('MUR', 'MURs', 0));
  $put_1(result, 'MVP', new CurrencyDataImpl_0('MVP', 'MVP', 130));
  $put_1(result, 'MVR', new CurrencyDataImpl_0('MVR', 'MVR', 2));
  $put_1(result, 'MWK', new CurrencyDataImpl_0('MWK', 'MWK', 2));
  $put_1(result, 'MXN', new CurrencyDataImpl_1('MXN', 'Mex$', 2, 'Mex$'));
  $put_1(result, 'MXP', new CurrencyDataImpl_0('MXP', 'MX$', 130));
  $put_1(result, 'MXV', new CurrencyDataImpl_0('MXV', 'MXV', 2));
  $put_1(result, 'MYR', new CurrencyDataImpl_1('MYR', 'RM', 2, 'RM'));
  $put_1(result, 'MZE', new CurrencyDataImpl_0('MZE', 'MZE', 130));
  $put_1(result, 'MZM', new CurrencyDataImpl_0('MZM', 'Mt', 130));
  $put_1(result, 'MZN', new CurrencyDataImpl_0('MZN', 'MTn', 2));
  $put_1(result, 'NAD', new CurrencyDataImpl_0('NAD', 'N$', 2));
  $put_1(result, 'NGN', new CurrencyDataImpl_0('NGN', '\u20A6', 2));
  $put_1(result, 'NIC', new CurrencyDataImpl_0('NIC', 'NIC', 130));
  $put_1(result, 'NIO', new CurrencyDataImpl_0('NIO', 'C$', 2));
  $put_1(result, 'NLG', new CurrencyDataImpl_0('NLG', 'fl', 130));
  $put_1(result, 'NOK', new CurrencyDataImpl_1('NOK', 'Nkr', 2, 'NOkr'));
  $put_1(result, 'NPR', new CurrencyDataImpl_0('NPR', 'NPRs', 2));
  $put_1(result, 'NZD', new CurrencyDataImpl_0('NZD', 'NZ$', 2));
  $put_1(result, 'OMR', new CurrencyDataImpl_0('OMR', 'OMR', 3));
  $put_1(result, 'PAB', new CurrencyDataImpl_1('PAB', 'B/.', 2, 'B/.'));
  $put_1(result, 'PEI', new CurrencyDataImpl_0('PEI', 'I/.', 130));
  $put_1(result, 'PEN', new CurrencyDataImpl_1('PEN', 'S/.', 2, 'S/.'));
  $put_1(result, 'PES', new CurrencyDataImpl_0('PES', 'PES', 130));
  $put_1(result, 'PGK', new CurrencyDataImpl_0('PGK', 'PGK', 2));
  $put_1(result, 'PHP', new CurrencyDataImpl_1('PHP', '\u20B1', 2, 'PHP'));
  $put_1(result, 'PKR', new CurrencyDataImpl_1('PKR', 'PKRs', 0, 'PKRs.'));
  $put_1(result, 'PLN', new CurrencyDataImpl_0('PLN', 'z\u0142', 2));
  $put_1(result, 'PLZ', new CurrencyDataImpl_0('PLZ', 'PLZ', 130));
  $put_1(result, 'PTE', new CurrencyDataImpl_0('PTE', 'Esc', 130));
  $put_1(result, 'PYG', new CurrencyDataImpl_0('PYG', '\u20B2', 0));
  $put_1(result, 'QAR', new CurrencyDataImpl_0('QAR', 'QR', 2));
  $put_1(result, 'RHD', new CurrencyDataImpl_0('RHD', 'RH$', 130));
  $put_1(result, 'ROL', new CurrencyDataImpl_0('ROL', 'ROL', 130));
  $put_1(result, 'RON', new CurrencyDataImpl_0('RON', 'RON', 2));
  $put_1(result, 'RSD', new CurrencyDataImpl_0('RSD', 'din.', 0));
  $put_1(result, 'RUB', new CurrencyDataImpl_1('RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'));
  $put_1(result, 'RUR', new CurrencyDataImpl_0('RUR', 'RUR', 130));
  $put_1(result, 'RWF', new CurrencyDataImpl_0('RWF', 'RWF', 0));
  $put_1(result, 'SAR', new CurrencyDataImpl_1('SAR', 'SR', 2, 'SR'));
  $put_1(result, 'SBD', new CurrencyDataImpl_0('SBD', 'SI$', 2));
  $put_1(result, 'SCR', new CurrencyDataImpl_0('SCR', 'SRe', 2));
  $put_1(result, 'SDD', new CurrencyDataImpl_0('SDD', 'LSd', 130));
  $put_1(result, 'SDG', new CurrencyDataImpl_0('SDG', 'SDG', 2));
  $put_1(result, 'SDP', new CurrencyDataImpl_0('SDP', 'SDP', 130));
  $put_1(result, 'SEK', new CurrencyDataImpl_1('SEK', 'Skr', 2, 'kr'));
  $put_1(result, 'SGD', new CurrencyDataImpl_1('SGD', 'S$', 2, 'S$'));
  $put_1(result, 'SHP', new CurrencyDataImpl_0('SHP', 'SH\xA3', 2));
  $put_1(result, 'SIT', new CurrencyDataImpl_0('SIT', 'SIT', 130));
  $put_1(result, 'SKK', new CurrencyDataImpl_0('SKK', 'Sk', 130));
  $put_1(result, 'SLL', new CurrencyDataImpl_0('SLL', 'Le', 0));
  $put_1(result, 'SOS', new CurrencyDataImpl_0('SOS', 'Ssh', 0));
  $put_1(result, 'SRD', new CurrencyDataImpl_0('SRD', 'SR$', 2));
  $put_1(result, 'SRG', new CurrencyDataImpl_0('SRG', 'Sf', 130));
  $put_1(result, 'STD', new CurrencyDataImpl_0('STD', 'Db', 0));
  $put_1(result, 'SUR', new CurrencyDataImpl_0('SUR', 'SUR', 130));
  $put_1(result, 'SVC', new CurrencyDataImpl_0('SVC', 'SV\u20A1', 130));
  $put_1(result, 'SYP', new CurrencyDataImpl_0('SYP', 'SY\xA3', 0));
  $put_1(result, 'SZL', new CurrencyDataImpl_0('SZL', 'SZL', 2));
  $put_1(result, 'THB', new CurrencyDataImpl_1('THB', '\u0E3F', 2, 'THB'));
  $put_1(result, 'TJR', new CurrencyDataImpl_0('TJR', 'TJR', 130));
  $put_1(result, 'TJS', new CurrencyDataImpl_0('TJS', 'TJS', 2));
  $put_1(result, 'TMM', new CurrencyDataImpl_0('TMM', 'TMM', 128));
  $put_1(result, 'TMT', new CurrencyDataImpl_0('TMT', 'TMT', 2));
  $put_1(result, 'TND', new CurrencyDataImpl_0('TND', 'DT', 3));
  $put_1(result, 'TOP', new CurrencyDataImpl_0('TOP', 'T$', 2));
  $put_1(result, 'TPE', new CurrencyDataImpl_0('TPE', 'TPE', 130));
  $put_1(result, 'TRL', new CurrencyDataImpl_0('TRL', 'TRL', 128));
  $put_1(result, 'TRY', new CurrencyDataImpl_1('TRY', 'TL', 2, 'YTL'));
  $put_1(result, 'TTD', new CurrencyDataImpl_0('TTD', 'TT$', 2));
  $put_1(result, 'TWD', new CurrencyDataImpl_1('TWD', 'NT$', 2, 'NT$'));
  $put_1(result, 'TZS', new CurrencyDataImpl_0('TZS', 'TSh', 0));
  $put_1(result, 'UAH', new CurrencyDataImpl_0('UAH', '\u20B4', 2));
  $put_1(result, 'UAK', new CurrencyDataImpl_0('UAK', 'UAK', 130));
  $put_1(result, 'UGS', new CurrencyDataImpl_0('UGS', 'UGS', 130));
  $put_1(result, 'UGX', new CurrencyDataImpl_0('UGX', 'USh', 0));
  $put_1(result, 'USD', new CurrencyDataImpl_1('USD', '$', 2, 'US$'));
  $put_1(result, 'USN', new CurrencyDataImpl_0('USN', 'USN', 2));
  $put_1(result, 'USS', new CurrencyDataImpl_0('USS', 'USS', 2));
  $put_1(result, 'UYI', new CurrencyDataImpl_0('UYI', 'UYI', 2));
  $put_1(result, 'UYP', new CurrencyDataImpl_0('UYP', 'UYP', 130));
  $put_1(result, 'UYU', new CurrencyDataImpl_1('UYU', '$U', 2, 'UY$'));
  $put_1(result, 'UZS', new CurrencyDataImpl_0('UZS', 'UZS', 0));
  $put_1(result, 'VEB', new CurrencyDataImpl_0('VEB', 'VEB', 130));
  $put_1(result, 'VEF', new CurrencyDataImpl_0('VEF', 'Bs.F.', 2));
  $put_1(result, 'VND', new CurrencyDataImpl_1('VND', '\u20AB', 24, '\u20AB'));
  $put_1(result, 'VNN', new CurrencyDataImpl_0('VNN', 'VNN', 130));
  $put_1(result, 'VUV', new CurrencyDataImpl_0('VUV', 'VT', 0));
  $put_1(result, 'WST', new CurrencyDataImpl_0('WST', 'WS$', 2));
  $put_1(result, 'XAF', new CurrencyDataImpl_0('XAF', 'FCFA', 0));
  $put_1(result, 'XAG', new CurrencyDataImpl_0('XAG', 'XAG', 2));
  $put_1(result, 'XAU', new CurrencyDataImpl_0('XAU', 'XAU', 2));
  $put_1(result, 'XBA', new CurrencyDataImpl_0('XBA', 'XBA', 2));
  $put_1(result, 'XBB', new CurrencyDataImpl_0('XBB', 'XBB', 2));
  $put_1(result, 'XBC', new CurrencyDataImpl_0('XBC', 'XBC', 2));
  $put_1(result, 'XBD', new CurrencyDataImpl_0('XBD', 'XBD', 2));
  $put_1(result, 'XCD', new CurrencyDataImpl_0('XCD', 'EC$', 2));
  $put_1(result, 'XDR', new CurrencyDataImpl_0('XDR', 'XDR', 2));
  $put_1(result, 'XEU', new CurrencyDataImpl_0('XEU', 'XEU', 2));
  $put_1(result, 'XFO', new CurrencyDataImpl_0('XFO', 'XFO', 2));
  $put_1(result, 'XFU', new CurrencyDataImpl_0('XFU', 'XFU', 2));
  $put_1(result, 'XOF', new CurrencyDataImpl_0('XOF', 'CFA', 0));
  $put_1(result, 'XPD', new CurrencyDataImpl_0('XPD', 'XPD', 2));
  $put_1(result, 'XPF', new CurrencyDataImpl_0('XPF', 'CFPF', 0));
  $put_1(result, 'XPT', new CurrencyDataImpl_0('XPT', 'XPT', 2));
  $put_1(result, 'XRE', new CurrencyDataImpl_0('XRE', 'XRE', 2));
  $put_1(result, 'XTS', new CurrencyDataImpl_0('XTS', 'XTS', 2));
  $put_1(result, 'XXX', new CurrencyDataImpl_0('XXX', 'XXX', 2));
  $put_1(result, 'YDD', new CurrencyDataImpl_0('YDD', 'YDD', 130));
  $put_1(result, 'YER', new CurrencyDataImpl_1('YER', 'YR', 0, 'YER'));
  $put_1(result, 'YUD', new CurrencyDataImpl_0('YUD', 'YUD', 130));
  $put_1(result, 'YUM', new CurrencyDataImpl_0('YUM', 'YUM', 130));
  $put_1(result, 'YUN', new CurrencyDataImpl_0('YUN', 'YUN', 130));
  $put_1(result, 'YUR', new CurrencyDataImpl_0('YUR', 'YUR', 130));
  $put_1(result, 'ZAL', new CurrencyDataImpl_0('ZAL', 'ZAL', 2));
  $put_1(result, 'ZAR', new CurrencyDataImpl_1('ZAR', 'R', 2, 'ZAR'));
  $put_1(result, 'ZMK', new CurrencyDataImpl_0('ZMK', 'ZK', 0));
  $put_1(result, 'ZRN', new CurrencyDataImpl_0('ZRN', 'NZ', 130));
  $put_1(result, 'ZRZ', new CurrencyDataImpl_0('ZRZ', 'ZRZ', 130));
  $put_1(result, 'ZWD', new CurrencyDataImpl_0('ZWD', 'Z$', 128));
  $put_1(result, 'ZWL', new CurrencyDataImpl_0('ZWL', 'ZWL', 2));
  $put_1(result, 'ZWR', new CurrencyDataImpl_0('ZWR', 'ZWR', 130));
  return result;
}

function $loadCurrencyMapNative_1(this$static){
  return overrideMap($loadCurrencyMapNative_0(this$static), $loadMyCurrencyMapOverridesNative_0());
}

function $loadMyCurrencyMapOverridesNative_0(){
  return {ADP:['ADP', 'ADP', 128], AED:['AED', 'DH', 2, 'DH'], AFA:['AFA', 'AFA', 130], AFN:['AFN', 'Af', 0], ALL:['ALL', 'ALL', 0], AMD:['AMD', 'AMD', 0], ANG:['ANG', 'NAf.', 2], AOA:['AOA', 'Kz', 2], AOK:['AOK', 'AOK', 130], AON:['AON', 'AON', 130], AOR:['AOR', 'AOR', 130], ARA:['ARA', '\u20B3', 130], ARL:['ARL', '$L', 130], ARM:['ARM', 'm$n', 130], ARP:['ARP', 'ARP', 130], ARS:['ARS', 'AR$', 2, 'AR$'], ATS:['ATS', 'ATS', 130], AUD:['AUD', 'AU$', 2, 'AU$'], AWG:['AWG', 'Afl.', 2], AZM:['AZM', 'AZM', 130], AZN:['AZN', 'man.', 2], BAD:['BAD', 'BAD', 130], BAM:['BAM', 'KM', 2], BAN:['BAN', 'BAN', 130], BBD:['BBD', 'Bds$', 2], BDT:['BDT', 'Tk', 2, 'Tk'], BEC:['BEC', 'BEC', 2], BEF:['BEF', 'BF', 130], BEL:['BEL', 'BEL', 2], BGL:['BGL', 'BGL', 130], BGM:['BGM', 'BGM', 130], BGN:['BGN', 'BGN', 2], BGO:['BGO', 'BGO', 130], BHD:['BHD', 'BD', 3], BIF:['BIF', 'FBu', 0], BMD:['BMD', 'BD$', 2], BND:['BND', 'BN$', 2], BOB:['BOB', 'Bs', 2], BOL:['BOL', 'BOL', 130], BOP:['BOP', '$b.', 130], BOV:['BOV', 'BOV', 2], BRB:['BRB', 'BRB', 130], BRC:['BRC', 'BRC', 130], BRE:['BRE', 'BRE', 130], BRL:['BRL', 'R$', 2, 'R$'], BRN:['BRN', 'BRN', 130], BRR:['BRR', 'BRR', 130], BRZ:['BRZ', 'BRZ', 130], BSD:['BSD', 'BS$', 2], BTN:['BTN', 'Nu.', 2], BUK:['BUK', 'BUK', 130], BWP:['BWP', 'BWP', 2], BYB:['BYB', 'BYB', 130], BYR:['BYR', 'BYR', 0], BZD:['BZD', 'BZ$', 2], CAD:['CAD', 'CA$', 2, 'C$'], CDF:['CDF', 'CDF', 2], CHE:['CHE', 'CHE', 2], CHF:['CHF', 'Fr.', 2, 'CHF'], CHW:['CHW', 'CHW', 2], CLE:['CLE', 'E\xBA', 130], CLF:['CLF', 'CLF', 0], CLP:['CLP', 'CL$', 0, 'CL$'], CNY:['CNY', 'CN\xA5', 2, 'RMB\xA5'], COP:['COP', 'CO$', 0, 'COL$'], COU:['COU', 'COU', 2], CRC:['CRC', '\u20A1', 0, 'CR\u20A1'], CSD:['CSD', 'CSD', 130], CSK:['CSK', 'CSK', 130], CUC:['CUC', 'CUC$', 2], CUP:['CUP', 'CU$', 2, '$MN'], CVE:['CVE', 'CV$', 2], CYP:['CYP', 'CY\xA3', 130], CZK:['CZK', 'K\u010D', 2, 'K\u010D'], DDM:['DDM', 'DDM', 130], DEM:['DEM', 'DM', 130], DJF:['DJF', 'Fdj', 0], DKK:['DKK', 'Dkr', 2, 'kr'], DOP:['DOP', 'RD$', 2, 'RD$'], DZD:['DZD', 'DA', 2], ECS:['ECS', 'ECS', 130], ECV:['ECV', 'ECV', 2], EEK:['EEK', 'Ekr', 2], EGP:['EGP', 'EG\xA3', 2, 'LE'], EQE:['EQE', 'EQE', 130], ERN:['ERN', 'Nfk', 2], ESA:['ESA', 'ESA', 2], ESB:['ESB', 'ESB', 2], ESP:['ESP', 'Pts', 128], ETB:['ETB', 'Br', 2], EUR:['EUR', '\u20AC', 2, '\u20AC'], FIM:['FIM', 'mk', 130], FJD:['FJD', 'FJ$', 2], FKP:['FKP', 'FK\xA3', 2], FRF:['FRF', '\u20A3', 130], GBP:['GBP', '\xA3', 2, 'GB\xA3'], GEK:['GEK', 'GEK', 130], GEL:['GEL', 'GEL', 2], GHC:['GHC', '\u20B5', 130], GHS:['GHS', 'GH\u20B5', 2], GIP:['GIP', 'GI\xA3', 2], GMD:['GMD', 'GMD', 2], GNF:['GNF', 'FG', 0], GNS:['GNS', 'GNS', 130], GQE:['GQE', 'GQE', 130], GRD:['GRD', '\u20AF', 130], GTQ:['GTQ', 'GTQ', 2], GWE:['GWE', 'GWE', 130], GWP:['GWP', 'GWP', 2], GYD:['GYD', 'GY$', 0], HKD:['HKD', 'HK$', 2, 'HK$'], HNL:['HNL', 'HNL', 2], HRD:['HRD', 'HRD', 130], HRK:['HRK', 'kn', 2], HTG:['HTG', 'HTG', 2], HUF:['HUF', 'Ft', 0], IDR:['IDR', 'Rp', 0], IEP:['IEP', 'IR\xA3', 130], ILP:['ILP', 'I\xA3', 130], ILR:['ILR', 'ILR', 130], ILS:['ILS', '\u20AA', 2, 'IL\u20AA'], INR:['INR', 'Rs', 2, 'Rs'], IQD:['IQD', 'IQD', 0], IRR:['IRR', 'IRR', 0], ISJ:['ISJ', 'ISJ', 130], ISK:['ISK', 'Ikr', 0, 'kr'], ITL:['ITL', 'IT\u20A4', 128], JMD:['JMD', 'J$', 2, 'JA$'], JOD:['JOD', 'JD', 3], JPY:['JPY', '\xA5', 0, 'JP\xA5'], KES:['KES', 'Ksh', 2], KGS:['KGS', 'KGS', 2], KHR:['KHR', 'KHR', 2], KMF:['KMF', 'CF', 0], KPW:['KPW', 'KPW', 0], KRH:['KRH', 'KRH', 130], KRO:['KRO', 'KRO', 130], KRW:['KRW', '\u20A9', 0, 'KR\u20A9'], KWD:['KWD', 'KD', 3], KYD:['KYD', 'KY$', 2], KZT:['KZT', 'KZT', 2], LAK:['LAK', '\u20AD', 0], LBP:['LBP', 'LB\xA3', 0], LKR:['LKR', 'SLRs', 2, 'SLRs'], LRD:['LRD', 'L$', 2], LSL:['LSL', 'LSL', 2], LSM:['LSM', 'LSM', 130], LTL:['LTL', 'Lt', 2], LTT:['LTT', 'LTT', 130], LUC:['LUC', 'LUC', 2], LUF:['LUF', 'LUF', 128], LUL:['LUL', 'LUL', 2], LVL:['LVL', 'Ls', 2], LVR:['LVR', 'LVR', 130], LYD:['LYD', 'LD', 3], MAD:['MAD', 'MAD', 2], MAF:['MAF', 'MAF', 130], MCF:['MCF', 'MCF', 130], MDC:['MDC', 'MDC', 130], MDL:['MDL', 'MDL', 2], MGA:['MGA', 'MGA', 0], MGF:['MGF', 'MGF', 128], MKD:['MKD', 'MKD', 2], MKN:['MKN', 'MKN', 130], MLF:['MLF', 'MLF', 130], MMK:['MMK', 'MMK', 0], MNT:['MNT', '\u20AE', 0, 'MN\u20AE'], MOP:['MOP', 'MOP$', 2], MRO:['MRO', 'UM', 0], MTL:['MTL', 'Lm', 130], MTP:['MTP', 'MT\xA3', 130], MUR:['MUR', 'MURs', 0], MVP:['MVP', 'MVP', 130], MVR:['MVR', 'MVR', 2], MWK:['MWK', 'MWK', 2], MXN:['MXN', 'Mex$', 2, 'Mex$'], MXP:['MXP', 'MX$', 130], MXV:['MXV', 'MXV', 2], MYR:['MYR', 'RM', 2, 'RM'], MZE:['MZE', 'MZE', 130], MZM:['MZM', 'Mt', 130], MZN:['MZN', 'MTn', 2], NAD:['NAD', 'N$', 2], NGN:['NGN', '\u20A6', 2], NIC:['NIC', 'NIC', 130], NIO:['NIO', 'C$', 2], NLG:['NLG', 'fl', 130], NOK:['NOK', 'Nkr', 2, 'NOkr'], NPR:['NPR', 'NPRs', 2], NZD:['NZD', 'NZ$', 2], OMR:['OMR', 'OMR', 3], PAB:['PAB', 'B/.', 2, 'B/.'], PEI:['PEI', 'I/.', 130], PEN:['PEN', 'S/.', 2, 'S/.'], PES:['PES', 'PES', 130], PGK:['PGK', 'PGK', 2], PHP:['PHP', '\u20B1', 2, 'PHP'], PKR:['PKR', 'PKRs', 0, 'PKRs.'], PLN:['PLN', 'z\u0142', 2], PLZ:['PLZ', 'PLZ', 130], PTE:['PTE', 'Esc', 130], PYG:['PYG', '\u20B2', 0], QAR:['QAR', 'QR', 2], RHD:['RHD', 'RH$', 130], ROL:['ROL', 'ROL', 130], RON:['RON', 'RON', 2], RSD:['RSD', 'din.', 0], RUB:['RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'], RUR:['RUR', 'RUR', 130], RWF:['RWF', 'RWF', 0], SAR:['SAR', 'SR', 2, 'SR'], SBD:['SBD', 'SI$', 2], SCR:['SCR', 'SRe', 2], SDD:['SDD', 'LSd', 130], SDG:['SDG', 'SDG', 2], SDP:['SDP', 'SDP', 130], SEK:['SEK', 'Skr', 2, 'kr'], SGD:['SGD', 'S$', 2, 'S$'], SHP:['SHP', 'SH\xA3', 2], SIT:['SIT', 'SIT', 130], SKK:['SKK', 'Sk', 130], SLL:['SLL', 'Le', 0], SOS:['SOS', 'Ssh', 0], SRD:['SRD', 'SR$', 2], SRG:['SRG', 'Sf', 130], STD:['STD', 'Db', 0], SUR:['SUR', 'SUR', 130], SVC:['SVC', 'SV\u20A1', 130], SYP:['SYP', 'SY\xA3', 0], SZL:['SZL', 'SZL', 2], THB:['THB', '\u0E3F', 2, 'THB'], TJR:['TJR', 'TJR', 130], TJS:['TJS', 'TJS', 2], TMM:['TMM', 'TMM', 128], TMT:['TMT', 'TMT', 2], TND:['TND', 'DT', 3], TOP:['TOP', 'T$', 2], TPE:['TPE', 'TPE', 130], TRL:['TRL', 'TRL', 128], TRY:['TRY', 'TL', 2, 'YTL'], TTD:['TTD', 'TT$', 2], TWD:['TWD', 'NT$', 2, 'NT$'], TZS:['TZS', 'TSh', 0], UAH:['UAH', '\u20B4', 2], UAK:['UAK', 'UAK', 130], UGS:['UGS', 'UGS', 130], UGX:['UGX', 'USh', 0], USD:['USD', '$', 2, 'US$'], USN:['USN', 'USN', 2], USS:['USS', 'USS', 2], UYI:['UYI', 'UYI', 2], UYP:['UYP', 'UYP', 130], UYU:['UYU', '$U', 2, 'UY$'], UZS:['UZS', 'UZS', 0], VEB:['VEB', 'VEB', 130], VEF:['VEF', 'Bs.F.', 2], VND:['VND', '\u20AB', 24, '\u20AB'], VNN:['VNN', 'VNN', 130], VUV:['VUV', 'VT', 0], WST:['WST', 'WS$', 2], XAF:['XAF', 'FCFA', 0], XAG:['XAG', 'XAG', 2], XAU:['XAU', 'XAU', 2], XBA:['XBA', 'XBA', 2], XBB:['XBB', 'XBB', 2], XBC:['XBC', 'XBC', 2], XBD:['XBD', 'XBD', 2], XCD:['XCD', 'EC$', 2], XDR:['XDR', 'XDR', 2], XEU:['XEU', 'XEU', 2], XFO:['XFO', 'XFO', 2], XFU:['XFU', 'XFU', 2], XOF:['XOF', 'CFA', 0], XPD:['XPD', 'XPD', 2], XPF:['XPF', 'CFPF', 0], XPT:['XPT', 'XPT', 2], XRE:['XRE', 'XRE', 2], XTS:['XTS', 'XTS', 2], XXX:['XXX', 'XXX', 2], YDD:['YDD', 'YDD', 130], YER:['YER', 'YR', 0, 'YER'], YUD:['YUD', 'YUD', 130], YUM:['YUM', 'YUM', 130], YUN:['YUN', 'YUN', 130], YUR:['YUR', 'YUR', 130], ZAL:['ZAL', 'ZAL', 2], ZAR:['ZAR', 'R', 2, 'ZAR'], ZMK:['ZMK', 'ZK', 0], ZRN:['ZRN', 'NZ', 130], ZRZ:['ZRZ', 'ZRZ', 130], ZWD:['ZWD', 'Z$', 128], ZWL:['ZWL', 'ZWL', 2], ZWR:['ZWR', 'ZWR', 130]};
}

function CurrencyList_en_0(){
  CurrencyList__0.call(this);
  $$init_125();
}

function CurrencyList_en(){
}

_ = CurrencyList_en_0.prototype = CurrencyList_en.prototype = new CurrencyList_;
_.getClass$ = function getClass_126(){
  return Lcom_google_gwt_i18n_client_CurrencyList_1en_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava_1(){
  return new CurrencyDataImpl_1('USD', '$', 2, 'US$');
}
;
_.getDefaultNative = function getDefaultNative_1(){
  return ['USD', '$', 2, 'US$'];
}
;
_.loadCurrencyMapJava = function loadCurrencyMapJava_1(){
  return $loadCurrencyMapJava_1(this);
}
;
_.loadCurrencyMapNative = function loadCurrencyMapNative_1(){
  return $loadCurrencyMapNative_1(this);
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
function $$init_126(){
}

function $loadMyCurrencyMapOverridesNative_1(){
  return {ADP:['ADP', 'ADP', 128], AED:['AED', 'DH', 2, 'DH'], AFA:['AFA', 'AFA', 130], AFN:['AFN', 'Af', 0], ALL:['ALL', 'ALL', 0], AMD:['AMD', 'AMD', 0], ANG:['ANG', 'NAf.', 2], AOA:['AOA', 'Kz', 2], AOK:['AOK', 'AOK', 130], AON:['AON', 'AON', 130], AOR:['AOR', 'AOR', 130], ARA:['ARA', '\u20B3', 130], ARL:['ARL', '$L', 130], ARM:['ARM', 'm$n', 130], ARP:['ARP', 'ARP', 130], ARS:['ARS', 'AR$', 2, 'AR$'], ATS:['ATS', 'ATS', 130], AUD:['AUD', '$', 2, 'AU$'], AWG:['AWG', 'Afl.', 2], AZM:['AZM', 'AZM', 130], AZN:['AZN', 'man.', 2], BAD:['BAD', 'BAD', 130], BAM:['BAM', 'KM', 2], BAN:['BAN', 'BAN', 130], BBD:['BBD', 'Bds$', 2], BDT:['BDT', 'Tk', 2, 'Tk'], BEC:['BEC', 'BEC', 2], BEF:['BEF', 'BF', 130], BEL:['BEL', 'BEL', 2], BGL:['BGL', 'BGL', 130], BGM:['BGM', 'BGM', 130], BGN:['BGN', 'BGN', 2], BGO:['BGO', 'BGO', 130], BHD:['BHD', 'BD', 3], BIF:['BIF', 'FBu', 0], BMD:['BMD', 'BD$', 2], BND:['BND', 'BN$', 2], BOB:['BOB', 'Bs', 2], BOL:['BOL', 'BOL', 130], BOP:['BOP', '$b.', 130], BOV:['BOV', 'BOV', 2], BRB:['BRB', 'BRB', 130], BRC:['BRC', 'BRC', 130], BRE:['BRE', 'BRE', 130], BRL:['BRL', 'R$', 2, 'R$'], BRN:['BRN', 'BRN', 130], BRR:['BRR', 'BRR', 130], BRZ:['BRZ', 'BRZ', 130], BSD:['BSD', 'BS$', 2], BTN:['BTN', 'Nu.', 2], BUK:['BUK', 'BUK', 130], BWP:['BWP', 'BWP', 2], BYB:['BYB', 'BYB', 130], BYR:['BYR', 'BYR', 0], BZD:['BZD', 'BZ$', 2], CAD:['CAD', 'CA$', 2, 'C$'], CDF:['CDF', 'CDF', 2], CHE:['CHE', 'CHE', 2], CHF:['CHF', 'Fr.', 2, 'CHF'], CHW:['CHW', 'CHW', 2], CLE:['CLE', 'E\xBA', 130], CLF:['CLF', 'CLF', 0], CLP:['CLP', 'CL$', 0, 'CL$'], CNY:['CNY', 'CN\xA5', 2, 'RMB\xA5'], COP:['COP', 'CO$', 0, 'COL$'], COU:['COU', 'COU', 2], CRC:['CRC', '\u20A1', 0, 'CR\u20A1'], CSD:['CSD', 'CSD', 130], CSK:['CSK', 'CSK', 130], CUC:['CUC', 'CUC$', 2], CUP:['CUP', 'CU$', 2, '$MN'], CVE:['CVE', 'CV$', 2], CYP:['CYP', 'CY\xA3', 130], CZK:['CZK', 'K\u010D', 2, 'K\u010D'], DDM:['DDM', 'DDM', 130], DEM:['DEM', 'DM', 130], DJF:['DJF', 'Fdj', 0], DKK:['DKK', 'Dkr', 2, 'kr'], DOP:['DOP', 'RD$', 2, 'RD$'], DZD:['DZD', 'DA', 2], ECS:['ECS', 'ECS', 130], ECV:['ECV', 'ECV', 2], EEK:['EEK', 'Ekr', 2], EGP:['EGP', 'EG\xA3', 2, 'LE'], EQE:['EQE', 'EQE', 130], ERN:['ERN', 'Nfk', 2], ESA:['ESA', 'ESA', 2], ESB:['ESB', 'ESB', 2], ESP:['ESP', 'Pts', 128], ETB:['ETB', 'Br', 2], EUR:['EUR', '\u20AC', 2, '\u20AC'], FIM:['FIM', 'mk', 130], FJD:['FJD', 'FJ$', 2], FKP:['FKP', 'FK\xA3', 2], FRF:['FRF', '\u20A3', 130], GBP:['GBP', '\xA3', 2, 'GB\xA3'], GEK:['GEK', 'GEK', 130], GEL:['GEL', 'GEL', 2], GHC:['GHC', '\u20B5', 130], GHS:['GHS', 'GH\u20B5', 2], GIP:['GIP', 'GI\xA3', 2], GMD:['GMD', 'GMD', 2], GNF:['GNF', 'FG', 0], GNS:['GNS', 'GNS', 130], GQE:['GQE', 'GQE', 130], GRD:['GRD', '\u20AF', 130], GTQ:['GTQ', 'GTQ', 2], GWE:['GWE', 'GWE', 130], GWP:['GWP', 'GWP', 2], GYD:['GYD', 'GY$', 0], HKD:['HKD', 'HK$', 2, 'HK$'], HNL:['HNL', 'HNL', 2], HRD:['HRD', 'HRD', 130], HRK:['HRK', 'kn', 2], HTG:['HTG', 'HTG', 2], HUF:['HUF', 'Ft', 0], IDR:['IDR', 'Rp', 0], IEP:['IEP', 'IR\xA3', 130], ILP:['ILP', 'I\xA3', 130], ILR:['ILR', 'ILR', 130], ILS:['ILS', '\u20AA', 2, 'IL\u20AA'], INR:['INR', 'Rs', 2, 'Rs'], IQD:['IQD', 'IQD', 0], IRR:['IRR', 'IRR', 0], ISJ:['ISJ', 'ISJ', 130], ISK:['ISK', 'Ikr', 0, 'kr'], ITL:['ITL', 'IT\u20A4', 128], JMD:['JMD', 'J$', 2, 'JA$'], JOD:['JOD', 'JD', 3], JPY:['JPY', '\xA5', 0, 'JP\xA5'], KES:['KES', 'Ksh', 2], KGS:['KGS', 'KGS', 2], KHR:['KHR', 'KHR', 2], KMF:['KMF', 'CF', 0], KPW:['KPW', 'KPW', 0], KRH:['KRH', 'KRH', 130], KRO:['KRO', 'KRO', 130], KRW:['KRW', '\u20A9', 0, 'KR\u20A9'], KWD:['KWD', 'KD', 3], KYD:['KYD', 'KY$', 2], KZT:['KZT', 'KZT', 2], LAK:['LAK', '\u20AD', 0], LBP:['LBP', 'LB\xA3', 0], LKR:['LKR', 'SLRs', 2, 'SLRs'], LRD:['LRD', 'L$', 2], LSL:['LSL', 'LSL', 2], LSM:['LSM', 'LSM', 130], LTL:['LTL', 'Lt', 2], LTT:['LTT', 'LTT', 130], LUC:['LUC', 'LUC', 2], LUF:['LUF', 'LUF', 128], LUL:['LUL', 'LUL', 2], LVL:['LVL', 'Ls', 2], LVR:['LVR', 'LVR', 130], LYD:['LYD', 'LD', 3], MAD:['MAD', 'MAD', 2], MAF:['MAF', 'MAF', 130], MCF:['MCF', 'MCF', 130], MDC:['MDC', 'MDC', 130], MDL:['MDL', 'MDL', 2], MGA:['MGA', 'MGA', 0], MGF:['MGF', 'MGF', 128], MKD:['MKD', 'MKD', 2], MKN:['MKN', 'MKN', 130], MLF:['MLF', 'MLF', 130], MMK:['MMK', 'MMK', 0], MNT:['MNT', '\u20AE', 0, 'MN\u20AE'], MOP:['MOP', 'MOP$', 2], MRO:['MRO', 'UM', 0], MTL:['MTL', 'Lm', 130], MTP:['MTP', 'MT\xA3', 130], MUR:['MUR', 'MURs', 0], MVP:['MVP', 'MVP', 130], MVR:['MVR', 'MVR', 2], MWK:['MWK', 'MWK', 2], MXN:['MXN', 'Mex$', 2, 'Mex$'], MXP:['MXP', 'MX$', 130], MXV:['MXV', 'MXV', 2], MYR:['MYR', 'RM', 2, 'RM'], MZE:['MZE', 'MZE', 130], MZM:['MZM', 'Mt', 130], MZN:['MZN', 'MTn', 2], NAD:['NAD', 'N$', 2], NGN:['NGN', '\u20A6', 2], NIC:['NIC', 'NIC', 130], NIO:['NIO', 'C$', 2], NLG:['NLG', 'fl', 130], NOK:['NOK', 'Nkr', 2, 'NOkr'], NPR:['NPR', 'NPRs', 2], NZD:['NZD', 'NZ$', 2], OMR:['OMR', 'OMR', 3], PAB:['PAB', 'B/.', 2, 'B/.'], PEI:['PEI', 'I/.', 130], PEN:['PEN', 'S/.', 2, 'S/.'], PES:['PES', 'PES', 130], PGK:['PGK', 'PGK', 2], PHP:['PHP', '\u20B1', 2, 'PHP'], PKR:['PKR', 'PKRs', 0, 'PKRs.'], PLN:['PLN', 'z\u0142', 2], PLZ:['PLZ', 'PLZ', 130], PTE:['PTE', 'Esc', 130], PYG:['PYG', '\u20B2', 0], QAR:['QAR', 'QR', 2], RHD:['RHD', 'RH$', 130], ROL:['ROL', 'ROL', 130], RON:['RON', 'RON', 2], RSD:['RSD', 'din.', 0], RUB:['RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'], RUR:['RUR', 'RUR', 130], RWF:['RWF', 'RWF', 0], SAR:['SAR', 'SR', 2, 'SR'], SBD:['SBD', 'SI$', 2], SCR:['SCR', 'SRe', 2], SDD:['SDD', 'LSd', 130], SDG:['SDG', 'SDG', 2], SDP:['SDP', 'SDP', 130], SEK:['SEK', 'Skr', 2, 'kr'], SGD:['SGD', 'S$', 2, 'S$'], SHP:['SHP', 'SH\xA3', 2], SIT:['SIT', 'SIT', 130], SKK:['SKK', 'Sk', 130], SLL:['SLL', 'Le', 0], SOS:['SOS', 'Ssh', 0], SRD:['SRD', 'SR$', 2], SRG:['SRG', 'Sf', 130], STD:['STD', 'Db', 0], SUR:['SUR', 'SUR', 130], SVC:['SVC', 'SV\u20A1', 130], SYP:['SYP', 'SY\xA3', 0], SZL:['SZL', 'SZL', 2], THB:['THB', '\u0E3F', 2, 'THB'], TJR:['TJR', 'TJR', 130], TJS:['TJS', 'TJS', 2], TMM:['TMM', 'TMM', 128], TMT:['TMT', 'TMT', 2], TND:['TND', 'DT', 3], TOP:['TOP', 'T$', 2], TPE:['TPE', 'TPE', 130], TRL:['TRL', 'TRL', 128], TRY:['TRY', 'TL', 2, 'YTL'], TTD:['TTD', 'TT$', 2], TWD:['TWD', 'NT$', 2, 'NT$'], TZS:['TZS', 'TSh', 0], UAH:['UAH', '\u20B4', 2], UAK:['UAK', 'UAK', 130], UGS:['UGS', 'UGS', 130], UGX:['UGX', 'USh', 0], USD:['USD', 'US$', 2, 'US$'], USN:['USN', 'USN', 2], USS:['USS', 'USS', 2], UYI:['UYI', 'UYI', 2], UYP:['UYP', 'UYP', 130], UYU:['UYU', '$U', 2, 'UY$'], UZS:['UZS', 'UZS', 0], VEB:['VEB', 'VEB', 130], VEF:['VEF', 'Bs.F.', 2], VND:['VND', '\u20AB', 24, '\u20AB'], VNN:['VNN', 'VNN', 130], VUV:['VUV', 'VT', 0], WST:['WST', 'WS$', 2], XAF:['XAF', 'FCFA', 0], XAG:['XAG', 'XAG', 2], XAU:['XAU', 'XAU', 2], XBA:['XBA', 'XBA', 2], XBB:['XBB', 'XBB', 2], XBC:['XBC', 'XBC', 2], XBD:['XBD', 'XBD', 2], XCD:['XCD', 'EC$', 2], XDR:['XDR', 'XDR', 2], XEU:['XEU', 'XEU', 2], XFO:['XFO', 'XFO', 2], XFU:['XFU', 'XFU', 2], XOF:['XOF', 'CFA', 0], XPD:['XPD', 'XPD', 2], XPF:['XPF', 'CFPF', 0], XPT:['XPT', 'XPT', 2], XRE:['XRE', 'XRE', 2], XTS:['XTS', 'XTS', 2], XXX:['XXX', 'XXX', 2], YDD:['YDD', 'YDD', 130], YER:['YER', 'YR', 0, 'YER'], YUD:['YUD', 'YUD', 130], YUM:['YUM', 'YUM', 130], YUN:['YUN', 'YUN', 130], YUR:['YUR', 'YUR', 130], ZAL:['ZAL', 'ZAL', 2], ZAR:['ZAR', 'R', 2, 'ZAR'], ZMK:['ZMK', 'ZK', 0], ZRN:['ZRN', 'NZ', 130], ZRZ:['ZRZ', 'ZRZ', 130], ZWD:['ZWD', 'Z$', 128], ZWL:['ZWL', 'ZWL', 2], ZWR:['ZWR', 'ZWR', 130]};
}

function CurrencyList_en_AU_0(){
  CurrencyList_en_0.call(this);
  $$init_126();
}

function CurrencyList_en_AU(){
}

_ = CurrencyList_en_AU_0.prototype = CurrencyList_en_AU.prototype = new CurrencyList_en;
_.getClass$ = function getClass_127(){
  return Lcom_google_gwt_i18n_client_CurrencyList_1en_1AU_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava_2(){
  return new CurrencyDataImpl_1('AUD', '$', 2, 'AU$');
}
;
_.getDefaultNative = function getDefaultNative_2(){
  return ['AUD', '$', 2, 'AU$'];
}
;
_.loadCurrencyMapJava = function loadCurrencyMapJava_2(){
  var result;
  result = $loadCurrencyMapJava_1(this);
  $put_1(result, 'ADP', new CurrencyDataImpl_0('ADP', 'ADP', 128));
  $put_1(result, 'AED', new CurrencyDataImpl_1('AED', 'DH', 2, 'DH'));
  $put_1(result, 'AFA', new CurrencyDataImpl_0('AFA', 'AFA', 130));
  $put_1(result, 'AFN', new CurrencyDataImpl_0('AFN', 'Af', 0));
  $put_1(result, 'ALL', new CurrencyDataImpl_0('ALL', 'ALL', 0));
  $put_1(result, 'AMD', new CurrencyDataImpl_0('AMD', 'AMD', 0));
  $put_1(result, 'ANG', new CurrencyDataImpl_0('ANG', 'NAf.', 2));
  $put_1(result, 'AOA', new CurrencyDataImpl_0('AOA', 'Kz', 2));
  $put_1(result, 'AOK', new CurrencyDataImpl_0('AOK', 'AOK', 130));
  $put_1(result, 'AON', new CurrencyDataImpl_0('AON', 'AON', 130));
  $put_1(result, 'AOR', new CurrencyDataImpl_0('AOR', 'AOR', 130));
  $put_1(result, 'ARA', new CurrencyDataImpl_0('ARA', '\u20B3', 130));
  $put_1(result, 'ARL', new CurrencyDataImpl_0('ARL', '$L', 130));
  $put_1(result, 'ARM', new CurrencyDataImpl_0('ARM', 'm$n', 130));
  $put_1(result, 'ARP', new CurrencyDataImpl_0('ARP', 'ARP', 130));
  $put_1(result, 'ARS', new CurrencyDataImpl_1('ARS', 'AR$', 2, 'AR$'));
  $put_1(result, 'ATS', new CurrencyDataImpl_0('ATS', 'ATS', 130));
  $put_1(result, 'AUD', new CurrencyDataImpl_1('AUD', '$', 2, 'AU$'));
  $put_1(result, 'AWG', new CurrencyDataImpl_0('AWG', 'Afl.', 2));
  $put_1(result, 'AZM', new CurrencyDataImpl_0('AZM', 'AZM', 130));
  $put_1(result, 'AZN', new CurrencyDataImpl_0('AZN', 'man.', 2));
  $put_1(result, 'BAD', new CurrencyDataImpl_0('BAD', 'BAD', 130));
  $put_1(result, 'BAM', new CurrencyDataImpl_0('BAM', 'KM', 2));
  $put_1(result, 'BAN', new CurrencyDataImpl_0('BAN', 'BAN', 130));
  $put_1(result, 'BBD', new CurrencyDataImpl_0('BBD', 'Bds$', 2));
  $put_1(result, 'BDT', new CurrencyDataImpl_1('BDT', 'Tk', 2, 'Tk'));
  $put_1(result, 'BEC', new CurrencyDataImpl_0('BEC', 'BEC', 2));
  $put_1(result, 'BEF', new CurrencyDataImpl_0('BEF', 'BF', 130));
  $put_1(result, 'BEL', new CurrencyDataImpl_0('BEL', 'BEL', 2));
  $put_1(result, 'BGL', new CurrencyDataImpl_0('BGL', 'BGL', 130));
  $put_1(result, 'BGM', new CurrencyDataImpl_0('BGM', 'BGM', 130));
  $put_1(result, 'BGN', new CurrencyDataImpl_0('BGN', 'BGN', 2));
  $put_1(result, 'BGO', new CurrencyDataImpl_0('BGO', 'BGO', 130));
  $put_1(result, 'BHD', new CurrencyDataImpl_0('BHD', 'BD', 3));
  $put_1(result, 'BIF', new CurrencyDataImpl_0('BIF', 'FBu', 0));
  $put_1(result, 'BMD', new CurrencyDataImpl_0('BMD', 'BD$', 2));
  $put_1(result, 'BND', new CurrencyDataImpl_0('BND', 'BN$', 2));
  $put_1(result, 'BOB', new CurrencyDataImpl_0('BOB', 'Bs', 2));
  $put_1(result, 'BOL', new CurrencyDataImpl_0('BOL', 'BOL', 130));
  $put_1(result, 'BOP', new CurrencyDataImpl_0('BOP', '$b.', 130));
  $put_1(result, 'BOV', new CurrencyDataImpl_0('BOV', 'BOV', 2));
  $put_1(result, 'BRB', new CurrencyDataImpl_0('BRB', 'BRB', 130));
  $put_1(result, 'BRC', new CurrencyDataImpl_0('BRC', 'BRC', 130));
  $put_1(result, 'BRE', new CurrencyDataImpl_0('BRE', 'BRE', 130));
  $put_1(result, 'BRL', new CurrencyDataImpl_1('BRL', 'R$', 2, 'R$'));
  $put_1(result, 'BRN', new CurrencyDataImpl_0('BRN', 'BRN', 130));
  $put_1(result, 'BRR', new CurrencyDataImpl_0('BRR', 'BRR', 130));
  $put_1(result, 'BRZ', new CurrencyDataImpl_0('BRZ', 'BRZ', 130));
  $put_1(result, 'BSD', new CurrencyDataImpl_0('BSD', 'BS$', 2));
  $put_1(result, 'BTN', new CurrencyDataImpl_0('BTN', 'Nu.', 2));
  $put_1(result, 'BUK', new CurrencyDataImpl_0('BUK', 'BUK', 130));
  $put_1(result, 'BWP', new CurrencyDataImpl_0('BWP', 'BWP', 2));
  $put_1(result, 'BYB', new CurrencyDataImpl_0('BYB', 'BYB', 130));
  $put_1(result, 'BYR', new CurrencyDataImpl_0('BYR', 'BYR', 0));
  $put_1(result, 'BZD', new CurrencyDataImpl_0('BZD', 'BZ$', 2));
  $put_1(result, 'CAD', new CurrencyDataImpl_1('CAD', 'CA$', 2, 'C$'));
  $put_1(result, 'CDF', new CurrencyDataImpl_0('CDF', 'CDF', 2));
  $put_1(result, 'CHE', new CurrencyDataImpl_0('CHE', 'CHE', 2));
  $put_1(result, 'CHF', new CurrencyDataImpl_1('CHF', 'Fr.', 2, 'CHF'));
  $put_1(result, 'CHW', new CurrencyDataImpl_0('CHW', 'CHW', 2));
  $put_1(result, 'CLE', new CurrencyDataImpl_0('CLE', 'E\xBA', 130));
  $put_1(result, 'CLF', new CurrencyDataImpl_0('CLF', 'CLF', 0));
  $put_1(result, 'CLP', new CurrencyDataImpl_1('CLP', 'CL$', 0, 'CL$'));
  $put_1(result, 'CNY', new CurrencyDataImpl_1('CNY', 'CN\xA5', 2, 'RMB\xA5'));
  $put_1(result, 'COP', new CurrencyDataImpl_1('COP', 'CO$', 0, 'COL$'));
  $put_1(result, 'COU', new CurrencyDataImpl_0('COU', 'COU', 2));
  $put_1(result, 'CRC', new CurrencyDataImpl_1('CRC', '\u20A1', 0, 'CR\u20A1'));
  $put_1(result, 'CSD', new CurrencyDataImpl_0('CSD', 'CSD', 130));
  $put_1(result, 'CSK', new CurrencyDataImpl_0('CSK', 'CSK', 130));
  $put_1(result, 'CUC', new CurrencyDataImpl_0('CUC', 'CUC$', 2));
  $put_1(result, 'CUP', new CurrencyDataImpl_1('CUP', 'CU$', 2, '$MN'));
  $put_1(result, 'CVE', new CurrencyDataImpl_0('CVE', 'CV$', 2));
  $put_1(result, 'CYP', new CurrencyDataImpl_0('CYP', 'CY\xA3', 130));
  $put_1(result, 'CZK', new CurrencyDataImpl_1('CZK', 'K\u010D', 2, 'K\u010D'));
  $put_1(result, 'DDM', new CurrencyDataImpl_0('DDM', 'DDM', 130));
  $put_1(result, 'DEM', new CurrencyDataImpl_0('DEM', 'DM', 130));
  $put_1(result, 'DJF', new CurrencyDataImpl_0('DJF', 'Fdj', 0));
  $put_1(result, 'DKK', new CurrencyDataImpl_1('DKK', 'Dkr', 2, 'kr'));
  $put_1(result, 'DOP', new CurrencyDataImpl_1('DOP', 'RD$', 2, 'RD$'));
  $put_1(result, 'DZD', new CurrencyDataImpl_0('DZD', 'DA', 2));
  $put_1(result, 'ECS', new CurrencyDataImpl_0('ECS', 'ECS', 130));
  $put_1(result, 'ECV', new CurrencyDataImpl_0('ECV', 'ECV', 2));
  $put_1(result, 'EEK', new CurrencyDataImpl_0('EEK', 'Ekr', 2));
  $put_1(result, 'EGP', new CurrencyDataImpl_1('EGP', 'EG\xA3', 2, 'LE'));
  $put_1(result, 'EQE', new CurrencyDataImpl_0('EQE', 'EQE', 130));
  $put_1(result, 'ERN', new CurrencyDataImpl_0('ERN', 'Nfk', 2));
  $put_1(result, 'ESA', new CurrencyDataImpl_0('ESA', 'ESA', 2));
  $put_1(result, 'ESB', new CurrencyDataImpl_0('ESB', 'ESB', 2));
  $put_1(result, 'ESP', new CurrencyDataImpl_0('ESP', 'Pts', 128));
  $put_1(result, 'ETB', new CurrencyDataImpl_0('ETB', 'Br', 2));
  $put_1(result, 'EUR', new CurrencyDataImpl_1('EUR', '\u20AC', 2, '\u20AC'));
  $put_1(result, 'FIM', new CurrencyDataImpl_0('FIM', 'mk', 130));
  $put_1(result, 'FJD', new CurrencyDataImpl_0('FJD', 'FJ$', 2));
  $put_1(result, 'FKP', new CurrencyDataImpl_0('FKP', 'FK\xA3', 2));
  $put_1(result, 'FRF', new CurrencyDataImpl_0('FRF', '\u20A3', 130));
  $put_1(result, 'GBP', new CurrencyDataImpl_1('GBP', '\xA3', 2, 'GB\xA3'));
  $put_1(result, 'GEK', new CurrencyDataImpl_0('GEK', 'GEK', 130));
  $put_1(result, 'GEL', new CurrencyDataImpl_0('GEL', 'GEL', 2));
  $put_1(result, 'GHC', new CurrencyDataImpl_0('GHC', '\u20B5', 130));
  $put_1(result, 'GHS', new CurrencyDataImpl_0('GHS', 'GH\u20B5', 2));
  $put_1(result, 'GIP', new CurrencyDataImpl_0('GIP', 'GI\xA3', 2));
  $put_1(result, 'GMD', new CurrencyDataImpl_0('GMD', 'GMD', 2));
  $put_1(result, 'GNF', new CurrencyDataImpl_0('GNF', 'FG', 0));
  $put_1(result, 'GNS', new CurrencyDataImpl_0('GNS', 'GNS', 130));
  $put_1(result, 'GQE', new CurrencyDataImpl_0('GQE', 'GQE', 130));
  $put_1(result, 'GRD', new CurrencyDataImpl_0('GRD', '\u20AF', 130));
  $put_1(result, 'GTQ', new CurrencyDataImpl_0('GTQ', 'GTQ', 2));
  $put_1(result, 'GWE', new CurrencyDataImpl_0('GWE', 'GWE', 130));
  $put_1(result, 'GWP', new CurrencyDataImpl_0('GWP', 'GWP', 2));
  $put_1(result, 'GYD', new CurrencyDataImpl_0('GYD', 'GY$', 0));
  $put_1(result, 'HKD', new CurrencyDataImpl_1('HKD', 'HK$', 2, 'HK$'));
  $put_1(result, 'HNL', new CurrencyDataImpl_0('HNL', 'HNL', 2));
  $put_1(result, 'HRD', new CurrencyDataImpl_0('HRD', 'HRD', 130));
  $put_1(result, 'HRK', new CurrencyDataImpl_0('HRK', 'kn', 2));
  $put_1(result, 'HTG', new CurrencyDataImpl_0('HTG', 'HTG', 2));
  $put_1(result, 'HUF', new CurrencyDataImpl_0('HUF', 'Ft', 0));
  $put_1(result, 'IDR', new CurrencyDataImpl_0('IDR', 'Rp', 0));
  $put_1(result, 'IEP', new CurrencyDataImpl_0('IEP', 'IR\xA3', 130));
  $put_1(result, 'ILP', new CurrencyDataImpl_0('ILP', 'I\xA3', 130));
  $put_1(result, 'ILR', new CurrencyDataImpl_0('ILR', 'ILR', 130));
  $put_1(result, 'ILS', new CurrencyDataImpl_1('ILS', '\u20AA', 2, 'IL\u20AA'));
  $put_1(result, 'INR', new CurrencyDataImpl_1('INR', 'Rs', 2, 'Rs'));
  $put_1(result, 'IQD', new CurrencyDataImpl_0('IQD', 'IQD', 0));
  $put_1(result, 'IRR', new CurrencyDataImpl_0('IRR', 'IRR', 0));
  $put_1(result, 'ISJ', new CurrencyDataImpl_0('ISJ', 'ISJ', 130));
  $put_1(result, 'ISK', new CurrencyDataImpl_1('ISK', 'Ikr', 0, 'kr'));
  $put_1(result, 'ITL', new CurrencyDataImpl_0('ITL', 'IT\u20A4', 128));
  $put_1(result, 'JMD', new CurrencyDataImpl_1('JMD', 'J$', 2, 'JA$'));
  $put_1(result, 'JOD', new CurrencyDataImpl_0('JOD', 'JD', 3));
  $put_1(result, 'JPY', new CurrencyDataImpl_1('JPY', '\xA5', 0, 'JP\xA5'));
  $put_1(result, 'KES', new CurrencyDataImpl_0('KES', 'Ksh', 2));
  $put_1(result, 'KGS', new CurrencyDataImpl_0('KGS', 'KGS', 2));
  $put_1(result, 'KHR', new CurrencyDataImpl_0('KHR', 'KHR', 2));
  $put_1(result, 'KMF', new CurrencyDataImpl_0('KMF', 'CF', 0));
  $put_1(result, 'KPW', new CurrencyDataImpl_0('KPW', 'KPW', 0));
  $put_1(result, 'KRH', new CurrencyDataImpl_0('KRH', 'KRH', 130));
  $put_1(result, 'KRO', new CurrencyDataImpl_0('KRO', 'KRO', 130));
  $put_1(result, 'KRW', new CurrencyDataImpl_1('KRW', '\u20A9', 0, 'KR\u20A9'));
  $put_1(result, 'KWD', new CurrencyDataImpl_0('KWD', 'KD', 3));
  $put_1(result, 'KYD', new CurrencyDataImpl_0('KYD', 'KY$', 2));
  $put_1(result, 'KZT', new CurrencyDataImpl_0('KZT', 'KZT', 2));
  $put_1(result, 'LAK', new CurrencyDataImpl_0('LAK', '\u20AD', 0));
  $put_1(result, 'LBP', new CurrencyDataImpl_0('LBP', 'LB\xA3', 0));
  $put_1(result, 'LKR', new CurrencyDataImpl_1('LKR', 'SLRs', 2, 'SLRs'));
  $put_1(result, 'LRD', new CurrencyDataImpl_0('LRD', 'L$', 2));
  $put_1(result, 'LSL', new CurrencyDataImpl_0('LSL', 'LSL', 2));
  $put_1(result, 'LSM', new CurrencyDataImpl_0('LSM', 'LSM', 130));
  $put_1(result, 'LTL', new CurrencyDataImpl_0('LTL', 'Lt', 2));
  $put_1(result, 'LTT', new CurrencyDataImpl_0('LTT', 'LTT', 130));
  $put_1(result, 'LUC', new CurrencyDataImpl_0('LUC', 'LUC', 2));
  $put_1(result, 'LUF', new CurrencyDataImpl_0('LUF', 'LUF', 128));
  $put_1(result, 'LUL', new CurrencyDataImpl_0('LUL', 'LUL', 2));
  $put_1(result, 'LVL', new CurrencyDataImpl_0('LVL', 'Ls', 2));
  $put_1(result, 'LVR', new CurrencyDataImpl_0('LVR', 'LVR', 130));
  $put_1(result, 'LYD', new CurrencyDataImpl_0('LYD', 'LD', 3));
  $put_1(result, 'MAD', new CurrencyDataImpl_0('MAD', 'MAD', 2));
  $put_1(result, 'MAF', new CurrencyDataImpl_0('MAF', 'MAF', 130));
  $put_1(result, 'MCF', new CurrencyDataImpl_0('MCF', 'MCF', 130));
  $put_1(result, 'MDC', new CurrencyDataImpl_0('MDC', 'MDC', 130));
  $put_1(result, 'MDL', new CurrencyDataImpl_0('MDL', 'MDL', 2));
  $put_1(result, 'MGA', new CurrencyDataImpl_0('MGA', 'MGA', 0));
  $put_1(result, 'MGF', new CurrencyDataImpl_0('MGF', 'MGF', 128));
  $put_1(result, 'MKD', new CurrencyDataImpl_0('MKD', 'MKD', 2));
  $put_1(result, 'MKN', new CurrencyDataImpl_0('MKN', 'MKN', 130));
  $put_1(result, 'MLF', new CurrencyDataImpl_0('MLF', 'MLF', 130));
  $put_1(result, 'MMK', new CurrencyDataImpl_0('MMK', 'MMK', 0));
  $put_1(result, 'MNT', new CurrencyDataImpl_1('MNT', '\u20AE', 0, 'MN\u20AE'));
  $put_1(result, 'MOP', new CurrencyDataImpl_0('MOP', 'MOP$', 2));
  $put_1(result, 'MRO', new CurrencyDataImpl_0('MRO', 'UM', 0));
  $put_1(result, 'MTL', new CurrencyDataImpl_0('MTL', 'Lm', 130));
  $put_1(result, 'MTP', new CurrencyDataImpl_0('MTP', 'MT\xA3', 130));
  $put_1(result, 'MUR', new CurrencyDataImpl_0('MUR', 'MURs', 0));
  $put_1(result, 'MVP', new CurrencyDataImpl_0('MVP', 'MVP', 130));
  $put_1(result, 'MVR', new CurrencyDataImpl_0('MVR', 'MVR', 2));
  $put_1(result, 'MWK', new CurrencyDataImpl_0('MWK', 'MWK', 2));
  $put_1(result, 'MXN', new CurrencyDataImpl_1('MXN', 'Mex$', 2, 'Mex$'));
  $put_1(result, 'MXP', new CurrencyDataImpl_0('MXP', 'MX$', 130));
  $put_1(result, 'MXV', new CurrencyDataImpl_0('MXV', 'MXV', 2));
  $put_1(result, 'MYR', new CurrencyDataImpl_1('MYR', 'RM', 2, 'RM'));
  $put_1(result, 'MZE', new CurrencyDataImpl_0('MZE', 'MZE', 130));
  $put_1(result, 'MZM', new CurrencyDataImpl_0('MZM', 'Mt', 130));
  $put_1(result, 'MZN', new CurrencyDataImpl_0('MZN', 'MTn', 2));
  $put_1(result, 'NAD', new CurrencyDataImpl_0('NAD', 'N$', 2));
  $put_1(result, 'NGN', new CurrencyDataImpl_0('NGN', '\u20A6', 2));
  $put_1(result, 'NIC', new CurrencyDataImpl_0('NIC', 'NIC', 130));
  $put_1(result, 'NIO', new CurrencyDataImpl_0('NIO', 'C$', 2));
  $put_1(result, 'NLG', new CurrencyDataImpl_0('NLG', 'fl', 130));
  $put_1(result, 'NOK', new CurrencyDataImpl_1('NOK', 'Nkr', 2, 'NOkr'));
  $put_1(result, 'NPR', new CurrencyDataImpl_0('NPR', 'NPRs', 2));
  $put_1(result, 'NZD', new CurrencyDataImpl_0('NZD', 'NZ$', 2));
  $put_1(result, 'OMR', new CurrencyDataImpl_0('OMR', 'OMR', 3));
  $put_1(result, 'PAB', new CurrencyDataImpl_1('PAB', 'B/.', 2, 'B/.'));
  $put_1(result, 'PEI', new CurrencyDataImpl_0('PEI', 'I/.', 130));
  $put_1(result, 'PEN', new CurrencyDataImpl_1('PEN', 'S/.', 2, 'S/.'));
  $put_1(result, 'PES', new CurrencyDataImpl_0('PES', 'PES', 130));
  $put_1(result, 'PGK', new CurrencyDataImpl_0('PGK', 'PGK', 2));
  $put_1(result, 'PHP', new CurrencyDataImpl_1('PHP', '\u20B1', 2, 'PHP'));
  $put_1(result, 'PKR', new CurrencyDataImpl_1('PKR', 'PKRs', 0, 'PKRs.'));
  $put_1(result, 'PLN', new CurrencyDataImpl_0('PLN', 'z\u0142', 2));
  $put_1(result, 'PLZ', new CurrencyDataImpl_0('PLZ', 'PLZ', 130));
  $put_1(result, 'PTE', new CurrencyDataImpl_0('PTE', 'Esc', 130));
  $put_1(result, 'PYG', new CurrencyDataImpl_0('PYG', '\u20B2', 0));
  $put_1(result, 'QAR', new CurrencyDataImpl_0('QAR', 'QR', 2));
  $put_1(result, 'RHD', new CurrencyDataImpl_0('RHD', 'RH$', 130));
  $put_1(result, 'ROL', new CurrencyDataImpl_0('ROL', 'ROL', 130));
  $put_1(result, 'RON', new CurrencyDataImpl_0('RON', 'RON', 2));
  $put_1(result, 'RSD', new CurrencyDataImpl_0('RSD', 'din.', 0));
  $put_1(result, 'RUB', new CurrencyDataImpl_1('RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'));
  $put_1(result, 'RUR', new CurrencyDataImpl_0('RUR', 'RUR', 130));
  $put_1(result, 'RWF', new CurrencyDataImpl_0('RWF', 'RWF', 0));
  $put_1(result, 'SAR', new CurrencyDataImpl_1('SAR', 'SR', 2, 'SR'));
  $put_1(result, 'SBD', new CurrencyDataImpl_0('SBD', 'SI$', 2));
  $put_1(result, 'SCR', new CurrencyDataImpl_0('SCR', 'SRe', 2));
  $put_1(result, 'SDD', new CurrencyDataImpl_0('SDD', 'LSd', 130));
  $put_1(result, 'SDG', new CurrencyDataImpl_0('SDG', 'SDG', 2));
  $put_1(result, 'SDP', new CurrencyDataImpl_0('SDP', 'SDP', 130));
  $put_1(result, 'SEK', new CurrencyDataImpl_1('SEK', 'Skr', 2, 'kr'));
  $put_1(result, 'SGD', new CurrencyDataImpl_1('SGD', 'S$', 2, 'S$'));
  $put_1(result, 'SHP', new CurrencyDataImpl_0('SHP', 'SH\xA3', 2));
  $put_1(result, 'SIT', new CurrencyDataImpl_0('SIT', 'SIT', 130));
  $put_1(result, 'SKK', new CurrencyDataImpl_0('SKK', 'Sk', 130));
  $put_1(result, 'SLL', new CurrencyDataImpl_0('SLL', 'Le', 0));
  $put_1(result, 'SOS', new CurrencyDataImpl_0('SOS', 'Ssh', 0));
  $put_1(result, 'SRD', new CurrencyDataImpl_0('SRD', 'SR$', 2));
  $put_1(result, 'SRG', new CurrencyDataImpl_0('SRG', 'Sf', 130));
  $put_1(result, 'STD', new CurrencyDataImpl_0('STD', 'Db', 0));
  $put_1(result, 'SUR', new CurrencyDataImpl_0('SUR', 'SUR', 130));
  $put_1(result, 'SVC', new CurrencyDataImpl_0('SVC', 'SV\u20A1', 130));
  $put_1(result, 'SYP', new CurrencyDataImpl_0('SYP', 'SY\xA3', 0));
  $put_1(result, 'SZL', new CurrencyDataImpl_0('SZL', 'SZL', 2));
  $put_1(result, 'THB', new CurrencyDataImpl_1('THB', '\u0E3F', 2, 'THB'));
  $put_1(result, 'TJR', new CurrencyDataImpl_0('TJR', 'TJR', 130));
  $put_1(result, 'TJS', new CurrencyDataImpl_0('TJS', 'TJS', 2));
  $put_1(result, 'TMM', new CurrencyDataImpl_0('TMM', 'TMM', 128));
  $put_1(result, 'TMT', new CurrencyDataImpl_0('TMT', 'TMT', 2));
  $put_1(result, 'TND', new CurrencyDataImpl_0('TND', 'DT', 3));
  $put_1(result, 'TOP', new CurrencyDataImpl_0('TOP', 'T$', 2));
  $put_1(result, 'TPE', new CurrencyDataImpl_0('TPE', 'TPE', 130));
  $put_1(result, 'TRL', new CurrencyDataImpl_0('TRL', 'TRL', 128));
  $put_1(result, 'TRY', new CurrencyDataImpl_1('TRY', 'TL', 2, 'YTL'));
  $put_1(result, 'TTD', new CurrencyDataImpl_0('TTD', 'TT$', 2));
  $put_1(result, 'TWD', new CurrencyDataImpl_1('TWD', 'NT$', 2, 'NT$'));
  $put_1(result, 'TZS', new CurrencyDataImpl_0('TZS', 'TSh', 0));
  $put_1(result, 'UAH', new CurrencyDataImpl_0('UAH', '\u20B4', 2));
  $put_1(result, 'UAK', new CurrencyDataImpl_0('UAK', 'UAK', 130));
  $put_1(result, 'UGS', new CurrencyDataImpl_0('UGS', 'UGS', 130));
  $put_1(result, 'UGX', new CurrencyDataImpl_0('UGX', 'USh', 0));
  $put_1(result, 'USD', new CurrencyDataImpl_1('USD', 'US$', 2, 'US$'));
  $put_1(result, 'USN', new CurrencyDataImpl_0('USN', 'USN', 2));
  $put_1(result, 'USS', new CurrencyDataImpl_0('USS', 'USS', 2));
  $put_1(result, 'UYI', new CurrencyDataImpl_0('UYI', 'UYI', 2));
  $put_1(result, 'UYP', new CurrencyDataImpl_0('UYP', 'UYP', 130));
  $put_1(result, 'UYU', new CurrencyDataImpl_1('UYU', '$U', 2, 'UY$'));
  $put_1(result, 'UZS', new CurrencyDataImpl_0('UZS', 'UZS', 0));
  $put_1(result, 'VEB', new CurrencyDataImpl_0('VEB', 'VEB', 130));
  $put_1(result, 'VEF', new CurrencyDataImpl_0('VEF', 'Bs.F.', 2));
  $put_1(result, 'VND', new CurrencyDataImpl_1('VND', '\u20AB', 24, '\u20AB'));
  $put_1(result, 'VNN', new CurrencyDataImpl_0('VNN', 'VNN', 130));
  $put_1(result, 'VUV', new CurrencyDataImpl_0('VUV', 'VT', 0));
  $put_1(result, 'WST', new CurrencyDataImpl_0('WST', 'WS$', 2));
  $put_1(result, 'XAF', new CurrencyDataImpl_0('XAF', 'FCFA', 0));
  $put_1(result, 'XAG', new CurrencyDataImpl_0('XAG', 'XAG', 2));
  $put_1(result, 'XAU', new CurrencyDataImpl_0('XAU', 'XAU', 2));
  $put_1(result, 'XBA', new CurrencyDataImpl_0('XBA', 'XBA', 2));
  $put_1(result, 'XBB', new CurrencyDataImpl_0('XBB', 'XBB', 2));
  $put_1(result, 'XBC', new CurrencyDataImpl_0('XBC', 'XBC', 2));
  $put_1(result, 'XBD', new CurrencyDataImpl_0('XBD', 'XBD', 2));
  $put_1(result, 'XCD', new CurrencyDataImpl_0('XCD', 'EC$', 2));
  $put_1(result, 'XDR', new CurrencyDataImpl_0('XDR', 'XDR', 2));
  $put_1(result, 'XEU', new CurrencyDataImpl_0('XEU', 'XEU', 2));
  $put_1(result, 'XFO', new CurrencyDataImpl_0('XFO', 'XFO', 2));
  $put_1(result, 'XFU', new CurrencyDataImpl_0('XFU', 'XFU', 2));
  $put_1(result, 'XOF', new CurrencyDataImpl_0('XOF', 'CFA', 0));
  $put_1(result, 'XPD', new CurrencyDataImpl_0('XPD', 'XPD', 2));
  $put_1(result, 'XPF', new CurrencyDataImpl_0('XPF', 'CFPF', 0));
  $put_1(result, 'XPT', new CurrencyDataImpl_0('XPT', 'XPT', 2));
  $put_1(result, 'XRE', new CurrencyDataImpl_0('XRE', 'XRE', 2));
  $put_1(result, 'XTS', new CurrencyDataImpl_0('XTS', 'XTS', 2));
  $put_1(result, 'XXX', new CurrencyDataImpl_0('XXX', 'XXX', 2));
  $put_1(result, 'YDD', new CurrencyDataImpl_0('YDD', 'YDD', 130));
  $put_1(result, 'YER', new CurrencyDataImpl_1('YER', 'YR', 0, 'YER'));
  $put_1(result, 'YUD', new CurrencyDataImpl_0('YUD', 'YUD', 130));
  $put_1(result, 'YUM', new CurrencyDataImpl_0('YUM', 'YUM', 130));
  $put_1(result, 'YUN', new CurrencyDataImpl_0('YUN', 'YUN', 130));
  $put_1(result, 'YUR', new CurrencyDataImpl_0('YUR', 'YUR', 130));
  $put_1(result, 'ZAL', new CurrencyDataImpl_0('ZAL', 'ZAL', 2));
  $put_1(result, 'ZAR', new CurrencyDataImpl_1('ZAR', 'R', 2, 'ZAR'));
  $put_1(result, 'ZMK', new CurrencyDataImpl_0('ZMK', 'ZK', 0));
  $put_1(result, 'ZRN', new CurrencyDataImpl_0('ZRN', 'NZ', 130));
  $put_1(result, 'ZRZ', new CurrencyDataImpl_0('ZRZ', 'ZRZ', 130));
  $put_1(result, 'ZWD', new CurrencyDataImpl_0('ZWD', 'Z$', 128));
  $put_1(result, 'ZWL', new CurrencyDataImpl_0('ZWL', 'ZWL', 2));
  $put_1(result, 'ZWR', new CurrencyDataImpl_0('ZWR', 'ZWR', 130));
  return result;
}
;
_.loadCurrencyMapNative = function loadCurrencyMapNative_2(){
  return overrideMap($loadCurrencyMapNative_1(this), $loadMyCurrencyMapOverridesNative_1());
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
function $$init_127(){
}

function $loadMyCurrencyMapOverridesNative_2(){
  return {ADP:['ADP', 'ADP', 128], AED:['AED', 'DH', 2, 'DH'], AFA:['AFA', 'AFA', 130], AFN:['AFN', 'Af', 0], ALL:['ALL', 'ALL', 0], AMD:['AMD', 'AMD', 0], ANG:['ANG', 'NAf.', 2], AOA:['AOA', 'Kz', 2], AOK:['AOK', 'AOK', 130], AON:['AON', 'AON', 130], AOR:['AOR', 'AOR', 130], ARA:['ARA', '\u20B3', 130], ARL:['ARL', '$L', 130], ARM:['ARM', 'm$n', 130], ARP:['ARP', 'ARP', 130], ARS:['ARS', 'AR$', 2, 'AR$'], ATS:['ATS', 'ATS', 130], AUD:['AUD', 'AU$', 2, 'AU$'], AWG:['AWG', 'Afl.', 2], AZM:['AZM', 'AZM', 130], AZN:['AZN', 'man.', 2], BAD:['BAD', 'BAD', 130], BAM:['BAM', 'KM', 2], BAN:['BAN', 'BAN', 130], BBD:['BBD', 'Bds$', 2], BDT:['BDT', 'Tk', 2, 'Tk'], BEC:['BEC', 'BEC', 2], BEF:['BEF', 'BF', 130], BEL:['BEL', 'BEL', 2], BGL:['BGL', 'BGL', 130], BGM:['BGM', 'BGM', 130], BGN:['BGN', 'BGN', 2], BGO:['BGO', 'BGO', 130], BHD:['BHD', 'BD', 3], BIF:['BIF', 'FBu', 0], BMD:['BMD', 'BD$', 2], BND:['BND', 'BN$', 2], BOB:['BOB', 'Bs', 2], BOL:['BOL', 'BOL', 130], BOP:['BOP', '$b.', 130], BOV:['BOV', 'BOV', 2], BRB:['BRB', 'BRB', 130], BRC:['BRC', 'BRC', 130], BRE:['BRE', 'BRE', 130], BRL:['BRL', 'R$', 2, 'R$'], BRN:['BRN', 'BRN', 130], BRR:['BRR', 'BRR', 130], BRZ:['BRZ', 'BRZ', 130], BSD:['BSD', 'BS$', 2], BTN:['BTN', 'Nu.', 2], BUK:['BUK', 'BUK', 130], BWP:['BWP', 'BWP', 2], BYB:['BYB', 'BYB', 130], BYR:['BYR', 'BYR', 0], BZD:['BZD', 'BZ$', 2], CAD:['CAD', 'CA$', 2, 'C$'], CDF:['CDF', 'CDF', 2], CHE:['CHE', 'CHE', 2], CHF:['CHF', 'Fr.', 2, 'CHF'], CHW:['CHW', 'CHW', 2], CLE:['CLE', 'E\xBA', 130], CLF:['CLF', 'CLF', 0], CLP:['CLP', 'CL$', 0, 'CL$'], CNY:['CNY', 'CN\xA5', 2, 'RMB\xA5'], COP:['COP', 'CO$', 0, 'COL$'], COU:['COU', 'COU', 2], CRC:['CRC', '\u20A1', 0, 'CR\u20A1'], CSD:['CSD', 'CSD', 130], CSK:['CSK', 'CSK', 130], CUC:['CUC', 'CUC$', 2], CUP:['CUP', 'CU$', 2, '$MN'], CVE:['CVE', 'CV$', 2], CYP:['CYP', 'CY\xA3', 130], CZK:['CZK', 'K\u010D', 2, 'K\u010D'], DDM:['DDM', 'DDM', 130], DEM:['DEM', 'DM', 130], DJF:['DJF', 'Fdj', 0], DKK:['DKK', 'Dkr', 2, 'kr'], DOP:['DOP', 'RD$', 2, 'RD$'], DZD:['DZD', 'DA', 2], ECS:['ECS', 'ECS', 130], ECV:['ECV', 'ECV', 2], EEK:['EEK', 'Ekr', 2], EGP:['EGP', 'EG\xA3', 2, 'LE'], EQE:['EQE', 'EQE', 130], ERN:['ERN', 'Nfk', 2], ESA:['ESA', 'ESA', 2], ESB:['ESB', 'ESB', 2], ESP:['ESP', 'Pts', 128], ETB:['ETB', 'Br', 2], EUR:['EUR', '\u20AC', 2, '\u20AC'], FIM:['FIM', 'mk', 130], FJD:['FJD', 'FJ$', 2], FKP:['FKP', 'FK\xA3', 2], FRF:['FRF', '\u20A3', 130], GBP:['GBP', '\xA3', 2, 'GB\xA3'], GEK:['GEK', 'GEK', 130], GEL:['GEL', 'GEL', 2], GHC:['GHC', '\u20B5', 130], GHS:['GHS', 'GH\u20B5', 2], GIP:['GIP', 'GI\xA3', 2], GMD:['GMD', 'GMD', 2], GNF:['GNF', 'FG', 0], GNS:['GNS', 'GNS', 130], GQE:['GQE', 'GQE', 130], GRD:['GRD', '\u20AF', 130], GTQ:['GTQ', 'GTQ', 2], GWE:['GWE', 'GWE', 130], GWP:['GWP', 'GWP', 2], GYD:['GYD', 'GY$', 0], HKD:['HKD', 'HK$', 2, 'HK$'], HNL:['HNL', 'HNL', 2], HRD:['HRD', 'HRD', 130], HRK:['HRK', 'kn', 2], HTG:['HTG', 'HTG', 2], HUF:['HUF', 'Ft', 0], IDR:['IDR', 'Rp', 0], IEP:['IEP', 'IR\xA3', 130], ILP:['ILP', 'I\xA3', 130], ILR:['ILR', 'ILR', 130], ILS:['ILS', '\u20AA', 2, 'IL\u20AA'], INR:['INR', 'Rs', 2, 'Rs'], IQD:['IQD', 'IQD', 0], IRR:['IRR', 'IRR', 0], ISJ:['ISJ', 'ISJ', 130], ISK:['ISK', 'Ikr', 0, 'kr'], ITL:['ITL', 'IT\u20A4', 128], JMD:['JMD', 'J$', 2, 'JA$'], JOD:['JOD', 'JD', 3], JPY:['JPY', '\xA5', 0, 'JP\xA5'], KES:['KES', 'Ksh', 2], KGS:['KGS', 'KGS', 2], KHR:['KHR', 'KHR', 2], KMF:['KMF', 'CF', 0], KPW:['KPW', 'KPW', 0], KRH:['KRH', 'KRH', 130], KRO:['KRO', 'KRO', 130], KRW:['KRW', '\u20A9', 0, 'KR\u20A9'], KWD:['KWD', 'KD', 3], KYD:['KYD', 'KY$', 2], KZT:['KZT', 'KZT', 2], LAK:['LAK', '\u20AD', 0], LBP:['LBP', 'LB\xA3', 0], LKR:['LKR', 'SLRs', 2, 'SLRs'], LRD:['LRD', 'L$', 2], LSL:['LSL', 'LSL', 2], LSM:['LSM', 'LSM', 130], LTL:['LTL', 'Lt', 2], LTT:['LTT', 'LTT', 130], LUC:['LUC', 'LUC', 2], LUF:['LUF', 'LUF', 128], LUL:['LUL', 'LUL', 2], LVL:['LVL', 'Ls', 2], LVR:['LVR', 'LVR', 130], LYD:['LYD', 'LD', 3], MAD:['MAD', 'MAD', 2], MAF:['MAF', 'MAF', 130], MCF:['MCF', 'MCF', 130], MDC:['MDC', 'MDC', 130], MDL:['MDL', 'MDL', 2], MGA:['MGA', 'MGA', 0], MGF:['MGF', 'MGF', 128], MKD:['MKD', 'MKD', 2], MKN:['MKN', 'MKN', 130], MLF:['MLF', 'MLF', 130], MMK:['MMK', 'MMK', 0], MNT:['MNT', '\u20AE', 0, 'MN\u20AE'], MOP:['MOP', 'MOP$', 2], MRO:['MRO', 'UM', 0], MTL:['MTL', 'Lm', 130], MTP:['MTP', 'MT\xA3', 130], MUR:['MUR', 'MURs', 0], MVP:['MVP', 'MVP', 130], MVR:['MVR', 'MVR', 2], MWK:['MWK', 'MWK', 2], MXN:['MXN', 'Mex$', 2, 'Mex$'], MXP:['MXP', 'MX$', 130], MXV:['MXV', 'MXV', 2], MYR:['MYR', 'RM', 2, 'RM'], MZE:['MZE', 'MZE', 130], MZM:['MZM', 'Mt', 130], MZN:['MZN', 'MTn', 2], NAD:['NAD', 'N$', 2], NGN:['NGN', '\u20A6', 2], NIC:['NIC', 'NIC', 130], NIO:['NIO', 'C$', 2], NLG:['NLG', 'fl', 130], NOK:['NOK', 'Nkr', 2, 'NOkr'], NPR:['NPR', 'NPRs', 2], NZD:['NZD', 'NZ$', 2], OMR:['OMR', 'OMR', 3], PAB:['PAB', 'B/.', 2, 'B/.'], PEI:['PEI', 'I/.', 130], PEN:['PEN', 'S/.', 2, 'S/.'], PES:['PES', 'PES', 130], PGK:['PGK', 'PGK', 2], PHP:['PHP', '\u20B1', 2, 'PHP'], PKR:['PKR', 'PKRs', 0, 'PKRs.'], PLN:['PLN', 'z\u0142', 2], PLZ:['PLZ', 'PLZ', 130], PTE:['PTE', 'Esc', 130], PYG:['PYG', '\u20B2', 0], QAR:['QAR', 'QR', 2], RHD:['RHD', 'RH$', 130], ROL:['ROL', 'ROL', 130], RON:['RON', 'RON', 2], RSD:['RSD', 'din.', 0], RUB:['RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'], RUR:['RUR', 'RUR', 130], RWF:['RWF', 'RWF', 0], SAR:['SAR', 'SR', 2, 'SR'], SBD:['SBD', 'SI$', 2], SCR:['SCR', 'SRe', 2], SDD:['SDD', 'LSd', 130], SDG:['SDG', 'SDG', 2], SDP:['SDP', 'SDP', 130], SEK:['SEK', 'Skr', 2, 'kr'], SGD:['SGD', 'S$', 2, 'S$'], SHP:['SHP', 'SH\xA3', 2], SIT:['SIT', 'SIT', 130], SKK:['SKK', 'Sk', 130], SLL:['SLL', 'Le', 0], SOS:['SOS', 'Ssh', 0], SRD:['SRD', 'SR$', 2], SRG:['SRG', 'Sf', 130], STD:['STD', 'Db', 0], SUR:['SUR', 'SUR', 130], SVC:['SVC', 'SV\u20A1', 130], SYP:['SYP', 'SY\xA3', 0], SZL:['SZL', 'SZL', 2], THB:['THB', '\u0E3F', 2, 'THB'], TJR:['TJR', 'TJR', 130], TJS:['TJS', 'TJS', 2], TMM:['TMM', 'TMM', 128], TMT:['TMT', 'TMT', 2], TND:['TND', 'DT', 3], TOP:['TOP', 'T$', 2], TPE:['TPE', 'TPE', 130], TRL:['TRL', 'TRL', 128], TRY:['TRY', 'TL', 2, 'YTL'], TTD:['TTD', 'TT$', 2], TWD:['TWD', 'NT$', 2, 'NT$'], TZS:['TZS', 'TSh', 0], UAH:['UAH', '\u20B4', 2], UAK:['UAK', 'UAK', 130], UGS:['UGS', 'UGS', 130], UGX:['UGX', 'USh', 0], USD:['USD', '$', 2, 'US$'], USN:['USN', 'USN', 2], USS:['USS', 'USS', 2], UYI:['UYI', 'UYI', 2], UYP:['UYP', 'UYP', 130], UYU:['UYU', '$U', 2, 'UY$'], UZS:['UZS', 'UZS', 0], VEB:['VEB', 'VEB', 130], VEF:['VEF', 'Bs.F.', 2], VND:['VND', '\u20AB', 24, '\u20AB'], VNN:['VNN', 'VNN', 130], VUV:['VUV', 'VT', 0], WST:['WST', 'WS$', 2], XAF:['XAF', 'FCFA', 0], XAG:['XAG', 'XAG', 2], XAU:['XAU', 'XAU', 2], XBA:['XBA', 'XBA', 2], XBB:['XBB', 'XBB', 2], XBC:['XBC', 'XBC', 2], XBD:['XBD', 'XBD', 2], XCD:['XCD', 'EC$', 2], XDR:['XDR', 'XDR', 2], XEU:['XEU', 'XEU', 2], XFO:['XFO', 'XFO', 2], XFU:['XFU', 'XFU', 2], XOF:['XOF', 'CFA', 0], XPD:['XPD', 'XPD', 2], XPF:['XPF', 'CFPF', 0], XPT:['XPT', 'XPT', 2], XRE:['XRE', 'XRE', 2], XTS:['XTS', 'XTS', 2], XXX:['XXX', 'XXX', 2], YDD:['YDD', 'YDD', 130], YER:['YER', 'YR', 0, 'YER'], YUD:['YUD', 'YUD', 130], YUM:['YUM', 'YUM', 130], YUN:['YUN', 'YUN', 130], YUR:['YUR', 'YUR', 130], ZAL:['ZAL', 'ZAL', 2], ZAR:['ZAR', 'R', 2, 'ZAR'], ZMK:['ZMK', 'ZK', 0], ZRN:['ZRN', 'NZ', 130], ZRZ:['ZRZ', 'ZRZ', 130], ZWD:['ZWD', 'Z$', 128], ZWL:['ZWL', 'ZWL', 2], ZWR:['ZWR', 'ZWR', 130]};
}

function CurrencyList_en_BE_0(){
  CurrencyList_en_0.call(this);
  $$init_127();
}

function CurrencyList_en_BE(){
}

_ = CurrencyList_en_BE_0.prototype = CurrencyList_en_BE.prototype = new CurrencyList_en;
_.getClass$ = function getClass_128(){
  return Lcom_google_gwt_i18n_client_CurrencyList_1en_1BE_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava_3(){
  return new CurrencyDataImpl_1('EUR', '\u20AC', 2, '\u20AC');
}
;
_.getDefaultNative = function getDefaultNative_3(){
  return ['EUR', '\u20AC', 2, '\u20AC'];
}
;
_.loadCurrencyMapJava = function loadCurrencyMapJava_3(){
  var result;
  result = $loadCurrencyMapJava_1(this);
  $put_1(result, 'ADP', new CurrencyDataImpl_0('ADP', 'ADP', 128));
  $put_1(result, 'AED', new CurrencyDataImpl_1('AED', 'DH', 2, 'DH'));
  $put_1(result, 'AFA', new CurrencyDataImpl_0('AFA', 'AFA', 130));
  $put_1(result, 'AFN', new CurrencyDataImpl_0('AFN', 'Af', 0));
  $put_1(result, 'ALL', new CurrencyDataImpl_0('ALL', 'ALL', 0));
  $put_1(result, 'AMD', new CurrencyDataImpl_0('AMD', 'AMD', 0));
  $put_1(result, 'ANG', new CurrencyDataImpl_0('ANG', 'NAf.', 2));
  $put_1(result, 'AOA', new CurrencyDataImpl_0('AOA', 'Kz', 2));
  $put_1(result, 'AOK', new CurrencyDataImpl_0('AOK', 'AOK', 130));
  $put_1(result, 'AON', new CurrencyDataImpl_0('AON', 'AON', 130));
  $put_1(result, 'AOR', new CurrencyDataImpl_0('AOR', 'AOR', 130));
  $put_1(result, 'ARA', new CurrencyDataImpl_0('ARA', '\u20B3', 130));
  $put_1(result, 'ARL', new CurrencyDataImpl_0('ARL', '$L', 130));
  $put_1(result, 'ARM', new CurrencyDataImpl_0('ARM', 'm$n', 130));
  $put_1(result, 'ARP', new CurrencyDataImpl_0('ARP', 'ARP', 130));
  $put_1(result, 'ARS', new CurrencyDataImpl_1('ARS', 'AR$', 2, 'AR$'));
  $put_1(result, 'ATS', new CurrencyDataImpl_0('ATS', 'ATS', 130));
  $put_1(result, 'AUD', new CurrencyDataImpl_1('AUD', 'AU$', 2, 'AU$'));
  $put_1(result, 'AWG', new CurrencyDataImpl_0('AWG', 'Afl.', 2));
  $put_1(result, 'AZM', new CurrencyDataImpl_0('AZM', 'AZM', 130));
  $put_1(result, 'AZN', new CurrencyDataImpl_0('AZN', 'man.', 2));
  $put_1(result, 'BAD', new CurrencyDataImpl_0('BAD', 'BAD', 130));
  $put_1(result, 'BAM', new CurrencyDataImpl_0('BAM', 'KM', 2));
  $put_1(result, 'BAN', new CurrencyDataImpl_0('BAN', 'BAN', 130));
  $put_1(result, 'BBD', new CurrencyDataImpl_0('BBD', 'Bds$', 2));
  $put_1(result, 'BDT', new CurrencyDataImpl_1('BDT', 'Tk', 2, 'Tk'));
  $put_1(result, 'BEC', new CurrencyDataImpl_0('BEC', 'BEC', 2));
  $put_1(result, 'BEF', new CurrencyDataImpl_0('BEF', 'BF', 130));
  $put_1(result, 'BEL', new CurrencyDataImpl_0('BEL', 'BEL', 2));
  $put_1(result, 'BGL', new CurrencyDataImpl_0('BGL', 'BGL', 130));
  $put_1(result, 'BGM', new CurrencyDataImpl_0('BGM', 'BGM', 130));
  $put_1(result, 'BGN', new CurrencyDataImpl_0('BGN', 'BGN', 2));
  $put_1(result, 'BGO', new CurrencyDataImpl_0('BGO', 'BGO', 130));
  $put_1(result, 'BHD', new CurrencyDataImpl_0('BHD', 'BD', 3));
  $put_1(result, 'BIF', new CurrencyDataImpl_0('BIF', 'FBu', 0));
  $put_1(result, 'BMD', new CurrencyDataImpl_0('BMD', 'BD$', 2));
  $put_1(result, 'BND', new CurrencyDataImpl_0('BND', 'BN$', 2));
  $put_1(result, 'BOB', new CurrencyDataImpl_0('BOB', 'Bs', 2));
  $put_1(result, 'BOL', new CurrencyDataImpl_0('BOL', 'BOL', 130));
  $put_1(result, 'BOP', new CurrencyDataImpl_0('BOP', '$b.', 130));
  $put_1(result, 'BOV', new CurrencyDataImpl_0('BOV', 'BOV', 2));
  $put_1(result, 'BRB', new CurrencyDataImpl_0('BRB', 'BRB', 130));
  $put_1(result, 'BRC', new CurrencyDataImpl_0('BRC', 'BRC', 130));
  $put_1(result, 'BRE', new CurrencyDataImpl_0('BRE', 'BRE', 130));
  $put_1(result, 'BRL', new CurrencyDataImpl_1('BRL', 'R$', 2, 'R$'));
  $put_1(result, 'BRN', new CurrencyDataImpl_0('BRN', 'BRN', 130));
  $put_1(result, 'BRR', new CurrencyDataImpl_0('BRR', 'BRR', 130));
  $put_1(result, 'BRZ', new CurrencyDataImpl_0('BRZ', 'BRZ', 130));
  $put_1(result, 'BSD', new CurrencyDataImpl_0('BSD', 'BS$', 2));
  $put_1(result, 'BTN', new CurrencyDataImpl_0('BTN', 'Nu.', 2));
  $put_1(result, 'BUK', new CurrencyDataImpl_0('BUK', 'BUK', 130));
  $put_1(result, 'BWP', new CurrencyDataImpl_0('BWP', 'BWP', 2));
  $put_1(result, 'BYB', new CurrencyDataImpl_0('BYB', 'BYB', 130));
  $put_1(result, 'BYR', new CurrencyDataImpl_0('BYR', 'BYR', 0));
  $put_1(result, 'BZD', new CurrencyDataImpl_0('BZD', 'BZ$', 2));
  $put_1(result, 'CAD', new CurrencyDataImpl_1('CAD', 'CA$', 2, 'C$'));
  $put_1(result, 'CDF', new CurrencyDataImpl_0('CDF', 'CDF', 2));
  $put_1(result, 'CHE', new CurrencyDataImpl_0('CHE', 'CHE', 2));
  $put_1(result, 'CHF', new CurrencyDataImpl_1('CHF', 'Fr.', 2, 'CHF'));
  $put_1(result, 'CHW', new CurrencyDataImpl_0('CHW', 'CHW', 2));
  $put_1(result, 'CLE', new CurrencyDataImpl_0('CLE', 'E\xBA', 130));
  $put_1(result, 'CLF', new CurrencyDataImpl_0('CLF', 'CLF', 0));
  $put_1(result, 'CLP', new CurrencyDataImpl_1('CLP', 'CL$', 0, 'CL$'));
  $put_1(result, 'CNY', new CurrencyDataImpl_1('CNY', 'CN\xA5', 2, 'RMB\xA5'));
  $put_1(result, 'COP', new CurrencyDataImpl_1('COP', 'CO$', 0, 'COL$'));
  $put_1(result, 'COU', new CurrencyDataImpl_0('COU', 'COU', 2));
  $put_1(result, 'CRC', new CurrencyDataImpl_1('CRC', '\u20A1', 0, 'CR\u20A1'));
  $put_1(result, 'CSD', new CurrencyDataImpl_0('CSD', 'CSD', 130));
  $put_1(result, 'CSK', new CurrencyDataImpl_0('CSK', 'CSK', 130));
  $put_1(result, 'CUC', new CurrencyDataImpl_0('CUC', 'CUC$', 2));
  $put_1(result, 'CUP', new CurrencyDataImpl_1('CUP', 'CU$', 2, '$MN'));
  $put_1(result, 'CVE', new CurrencyDataImpl_0('CVE', 'CV$', 2));
  $put_1(result, 'CYP', new CurrencyDataImpl_0('CYP', 'CY\xA3', 130));
  $put_1(result, 'CZK', new CurrencyDataImpl_1('CZK', 'K\u010D', 2, 'K\u010D'));
  $put_1(result, 'DDM', new CurrencyDataImpl_0('DDM', 'DDM', 130));
  $put_1(result, 'DEM', new CurrencyDataImpl_0('DEM', 'DM', 130));
  $put_1(result, 'DJF', new CurrencyDataImpl_0('DJF', 'Fdj', 0));
  $put_1(result, 'DKK', new CurrencyDataImpl_1('DKK', 'Dkr', 2, 'kr'));
  $put_1(result, 'DOP', new CurrencyDataImpl_1('DOP', 'RD$', 2, 'RD$'));
  $put_1(result, 'DZD', new CurrencyDataImpl_0('DZD', 'DA', 2));
  $put_1(result, 'ECS', new CurrencyDataImpl_0('ECS', 'ECS', 130));
  $put_1(result, 'ECV', new CurrencyDataImpl_0('ECV', 'ECV', 2));
  $put_1(result, 'EEK', new CurrencyDataImpl_0('EEK', 'Ekr', 2));
  $put_1(result, 'EGP', new CurrencyDataImpl_1('EGP', 'EG\xA3', 2, 'LE'));
  $put_1(result, 'EQE', new CurrencyDataImpl_0('EQE', 'EQE', 130));
  $put_1(result, 'ERN', new CurrencyDataImpl_0('ERN', 'Nfk', 2));
  $put_1(result, 'ESA', new CurrencyDataImpl_0('ESA', 'ESA', 2));
  $put_1(result, 'ESB', new CurrencyDataImpl_0('ESB', 'ESB', 2));
  $put_1(result, 'ESP', new CurrencyDataImpl_0('ESP', 'Pts', 128));
  $put_1(result, 'ETB', new CurrencyDataImpl_0('ETB', 'Br', 2));
  $put_1(result, 'EUR', new CurrencyDataImpl_1('EUR', '\u20AC', 2, '\u20AC'));
  $put_1(result, 'FIM', new CurrencyDataImpl_0('FIM', 'mk', 130));
  $put_1(result, 'FJD', new CurrencyDataImpl_0('FJD', 'FJ$', 2));
  $put_1(result, 'FKP', new CurrencyDataImpl_0('FKP', 'FK\xA3', 2));
  $put_1(result, 'FRF', new CurrencyDataImpl_0('FRF', '\u20A3', 130));
  $put_1(result, 'GBP', new CurrencyDataImpl_1('GBP', '\xA3', 2, 'GB\xA3'));
  $put_1(result, 'GEK', new CurrencyDataImpl_0('GEK', 'GEK', 130));
  $put_1(result, 'GEL', new CurrencyDataImpl_0('GEL', 'GEL', 2));
  $put_1(result, 'GHC', new CurrencyDataImpl_0('GHC', '\u20B5', 130));
  $put_1(result, 'GHS', new CurrencyDataImpl_0('GHS', 'GH\u20B5', 2));
  $put_1(result, 'GIP', new CurrencyDataImpl_0('GIP', 'GI\xA3', 2));
  $put_1(result, 'GMD', new CurrencyDataImpl_0('GMD', 'GMD', 2));
  $put_1(result, 'GNF', new CurrencyDataImpl_0('GNF', 'FG', 0));
  $put_1(result, 'GNS', new CurrencyDataImpl_0('GNS', 'GNS', 130));
  $put_1(result, 'GQE', new CurrencyDataImpl_0('GQE', 'GQE', 130));
  $put_1(result, 'GRD', new CurrencyDataImpl_0('GRD', '\u20AF', 130));
  $put_1(result, 'GTQ', new CurrencyDataImpl_0('GTQ', 'GTQ', 2));
  $put_1(result, 'GWE', new CurrencyDataImpl_0('GWE', 'GWE', 130));
  $put_1(result, 'GWP', new CurrencyDataImpl_0('GWP', 'GWP', 2));
  $put_1(result, 'GYD', new CurrencyDataImpl_0('GYD', 'GY$', 0));
  $put_1(result, 'HKD', new CurrencyDataImpl_1('HKD', 'HK$', 2, 'HK$'));
  $put_1(result, 'HNL', new CurrencyDataImpl_0('HNL', 'HNL', 2));
  $put_1(result, 'HRD', new CurrencyDataImpl_0('HRD', 'HRD', 130));
  $put_1(result, 'HRK', new CurrencyDataImpl_0('HRK', 'kn', 2));
  $put_1(result, 'HTG', new CurrencyDataImpl_0('HTG', 'HTG', 2));
  $put_1(result, 'HUF', new CurrencyDataImpl_0('HUF', 'Ft', 0));
  $put_1(result, 'IDR', new CurrencyDataImpl_0('IDR', 'Rp', 0));
  $put_1(result, 'IEP', new CurrencyDataImpl_0('IEP', 'IR\xA3', 130));
  $put_1(result, 'ILP', new CurrencyDataImpl_0('ILP', 'I\xA3', 130));
  $put_1(result, 'ILR', new CurrencyDataImpl_0('ILR', 'ILR', 130));
  $put_1(result, 'ILS', new CurrencyDataImpl_1('ILS', '\u20AA', 2, 'IL\u20AA'));
  $put_1(result, 'INR', new CurrencyDataImpl_1('INR', 'Rs', 2, 'Rs'));
  $put_1(result, 'IQD', new CurrencyDataImpl_0('IQD', 'IQD', 0));
  $put_1(result, 'IRR', new CurrencyDataImpl_0('IRR', 'IRR', 0));
  $put_1(result, 'ISJ', new CurrencyDataImpl_0('ISJ', 'ISJ', 130));
  $put_1(result, 'ISK', new CurrencyDataImpl_1('ISK', 'Ikr', 0, 'kr'));
  $put_1(result, 'ITL', new CurrencyDataImpl_0('ITL', 'IT\u20A4', 128));
  $put_1(result, 'JMD', new CurrencyDataImpl_1('JMD', 'J$', 2, 'JA$'));
  $put_1(result, 'JOD', new CurrencyDataImpl_0('JOD', 'JD', 3));
  $put_1(result, 'JPY', new CurrencyDataImpl_1('JPY', '\xA5', 0, 'JP\xA5'));
  $put_1(result, 'KES', new CurrencyDataImpl_0('KES', 'Ksh', 2));
  $put_1(result, 'KGS', new CurrencyDataImpl_0('KGS', 'KGS', 2));
  $put_1(result, 'KHR', new CurrencyDataImpl_0('KHR', 'KHR', 2));
  $put_1(result, 'KMF', new CurrencyDataImpl_0('KMF', 'CF', 0));
  $put_1(result, 'KPW', new CurrencyDataImpl_0('KPW', 'KPW', 0));
  $put_1(result, 'KRH', new CurrencyDataImpl_0('KRH', 'KRH', 130));
  $put_1(result, 'KRO', new CurrencyDataImpl_0('KRO', 'KRO', 130));
  $put_1(result, 'KRW', new CurrencyDataImpl_1('KRW', '\u20A9', 0, 'KR\u20A9'));
  $put_1(result, 'KWD', new CurrencyDataImpl_0('KWD', 'KD', 3));
  $put_1(result, 'KYD', new CurrencyDataImpl_0('KYD', 'KY$', 2));
  $put_1(result, 'KZT', new CurrencyDataImpl_0('KZT', 'KZT', 2));
  $put_1(result, 'LAK', new CurrencyDataImpl_0('LAK', '\u20AD', 0));
  $put_1(result, 'LBP', new CurrencyDataImpl_0('LBP', 'LB\xA3', 0));
  $put_1(result, 'LKR', new CurrencyDataImpl_1('LKR', 'SLRs', 2, 'SLRs'));
  $put_1(result, 'LRD', new CurrencyDataImpl_0('LRD', 'L$', 2));
  $put_1(result, 'LSL', new CurrencyDataImpl_0('LSL', 'LSL', 2));
  $put_1(result, 'LSM', new CurrencyDataImpl_0('LSM', 'LSM', 130));
  $put_1(result, 'LTL', new CurrencyDataImpl_0('LTL', 'Lt', 2));
  $put_1(result, 'LTT', new CurrencyDataImpl_0('LTT', 'LTT', 130));
  $put_1(result, 'LUC', new CurrencyDataImpl_0('LUC', 'LUC', 2));
  $put_1(result, 'LUF', new CurrencyDataImpl_0('LUF', 'LUF', 128));
  $put_1(result, 'LUL', new CurrencyDataImpl_0('LUL', 'LUL', 2));
  $put_1(result, 'LVL', new CurrencyDataImpl_0('LVL', 'Ls', 2));
  $put_1(result, 'LVR', new CurrencyDataImpl_0('LVR', 'LVR', 130));
  $put_1(result, 'LYD', new CurrencyDataImpl_0('LYD', 'LD', 3));
  $put_1(result, 'MAD', new CurrencyDataImpl_0('MAD', 'MAD', 2));
  $put_1(result, 'MAF', new CurrencyDataImpl_0('MAF', 'MAF', 130));
  $put_1(result, 'MCF', new CurrencyDataImpl_0('MCF', 'MCF', 130));
  $put_1(result, 'MDC', new CurrencyDataImpl_0('MDC', 'MDC', 130));
  $put_1(result, 'MDL', new CurrencyDataImpl_0('MDL', 'MDL', 2));
  $put_1(result, 'MGA', new CurrencyDataImpl_0('MGA', 'MGA', 0));
  $put_1(result, 'MGF', new CurrencyDataImpl_0('MGF', 'MGF', 128));
  $put_1(result, 'MKD', new CurrencyDataImpl_0('MKD', 'MKD', 2));
  $put_1(result, 'MKN', new CurrencyDataImpl_0('MKN', 'MKN', 130));
  $put_1(result, 'MLF', new CurrencyDataImpl_0('MLF', 'MLF', 130));
  $put_1(result, 'MMK', new CurrencyDataImpl_0('MMK', 'MMK', 0));
  $put_1(result, 'MNT', new CurrencyDataImpl_1('MNT', '\u20AE', 0, 'MN\u20AE'));
  $put_1(result, 'MOP', new CurrencyDataImpl_0('MOP', 'MOP$', 2));
  $put_1(result, 'MRO', new CurrencyDataImpl_0('MRO', 'UM', 0));
  $put_1(result, 'MTL', new CurrencyDataImpl_0('MTL', 'Lm', 130));
  $put_1(result, 'MTP', new CurrencyDataImpl_0('MTP', 'MT\xA3', 130));
  $put_1(result, 'MUR', new CurrencyDataImpl_0('MUR', 'MURs', 0));
  $put_1(result, 'MVP', new CurrencyDataImpl_0('MVP', 'MVP', 130));
  $put_1(result, 'MVR', new CurrencyDataImpl_0('MVR', 'MVR', 2));
  $put_1(result, 'MWK', new CurrencyDataImpl_0('MWK', 'MWK', 2));
  $put_1(result, 'MXN', new CurrencyDataImpl_1('MXN', 'Mex$', 2, 'Mex$'));
  $put_1(result, 'MXP', new CurrencyDataImpl_0('MXP', 'MX$', 130));
  $put_1(result, 'MXV', new CurrencyDataImpl_0('MXV', 'MXV', 2));
  $put_1(result, 'MYR', new CurrencyDataImpl_1('MYR', 'RM', 2, 'RM'));
  $put_1(result, 'MZE', new CurrencyDataImpl_0('MZE', 'MZE', 130));
  $put_1(result, 'MZM', new CurrencyDataImpl_0('MZM', 'Mt', 130));
  $put_1(result, 'MZN', new CurrencyDataImpl_0('MZN', 'MTn', 2));
  $put_1(result, 'NAD', new CurrencyDataImpl_0('NAD', 'N$', 2));
  $put_1(result, 'NGN', new CurrencyDataImpl_0('NGN', '\u20A6', 2));
  $put_1(result, 'NIC', new CurrencyDataImpl_0('NIC', 'NIC', 130));
  $put_1(result, 'NIO', new CurrencyDataImpl_0('NIO', 'C$', 2));
  $put_1(result, 'NLG', new CurrencyDataImpl_0('NLG', 'fl', 130));
  $put_1(result, 'NOK', new CurrencyDataImpl_1('NOK', 'Nkr', 2, 'NOkr'));
  $put_1(result, 'NPR', new CurrencyDataImpl_0('NPR', 'NPRs', 2));
  $put_1(result, 'NZD', new CurrencyDataImpl_0('NZD', 'NZ$', 2));
  $put_1(result, 'OMR', new CurrencyDataImpl_0('OMR', 'OMR', 3));
  $put_1(result, 'PAB', new CurrencyDataImpl_1('PAB', 'B/.', 2, 'B/.'));
  $put_1(result, 'PEI', new CurrencyDataImpl_0('PEI', 'I/.', 130));
  $put_1(result, 'PEN', new CurrencyDataImpl_1('PEN', 'S/.', 2, 'S/.'));
  $put_1(result, 'PES', new CurrencyDataImpl_0('PES', 'PES', 130));
  $put_1(result, 'PGK', new CurrencyDataImpl_0('PGK', 'PGK', 2));
  $put_1(result, 'PHP', new CurrencyDataImpl_1('PHP', '\u20B1', 2, 'PHP'));
  $put_1(result, 'PKR', new CurrencyDataImpl_1('PKR', 'PKRs', 0, 'PKRs.'));
  $put_1(result, 'PLN', new CurrencyDataImpl_0('PLN', 'z\u0142', 2));
  $put_1(result, 'PLZ', new CurrencyDataImpl_0('PLZ', 'PLZ', 130));
  $put_1(result, 'PTE', new CurrencyDataImpl_0('PTE', 'Esc', 130));
  $put_1(result, 'PYG', new CurrencyDataImpl_0('PYG', '\u20B2', 0));
  $put_1(result, 'QAR', new CurrencyDataImpl_0('QAR', 'QR', 2));
  $put_1(result, 'RHD', new CurrencyDataImpl_0('RHD', 'RH$', 130));
  $put_1(result, 'ROL', new CurrencyDataImpl_0('ROL', 'ROL', 130));
  $put_1(result, 'RON', new CurrencyDataImpl_0('RON', 'RON', 2));
  $put_1(result, 'RSD', new CurrencyDataImpl_0('RSD', 'din.', 0));
  $put_1(result, 'RUB', new CurrencyDataImpl_1('RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'));
  $put_1(result, 'RUR', new CurrencyDataImpl_0('RUR', 'RUR', 130));
  $put_1(result, 'RWF', new CurrencyDataImpl_0('RWF', 'RWF', 0));
  $put_1(result, 'SAR', new CurrencyDataImpl_1('SAR', 'SR', 2, 'SR'));
  $put_1(result, 'SBD', new CurrencyDataImpl_0('SBD', 'SI$', 2));
  $put_1(result, 'SCR', new CurrencyDataImpl_0('SCR', 'SRe', 2));
  $put_1(result, 'SDD', new CurrencyDataImpl_0('SDD', 'LSd', 130));
  $put_1(result, 'SDG', new CurrencyDataImpl_0('SDG', 'SDG', 2));
  $put_1(result, 'SDP', new CurrencyDataImpl_0('SDP', 'SDP', 130));
  $put_1(result, 'SEK', new CurrencyDataImpl_1('SEK', 'Skr', 2, 'kr'));
  $put_1(result, 'SGD', new CurrencyDataImpl_1('SGD', 'S$', 2, 'S$'));
  $put_1(result, 'SHP', new CurrencyDataImpl_0('SHP', 'SH\xA3', 2));
  $put_1(result, 'SIT', new CurrencyDataImpl_0('SIT', 'SIT', 130));
  $put_1(result, 'SKK', new CurrencyDataImpl_0('SKK', 'Sk', 130));
  $put_1(result, 'SLL', new CurrencyDataImpl_0('SLL', 'Le', 0));
  $put_1(result, 'SOS', new CurrencyDataImpl_0('SOS', 'Ssh', 0));
  $put_1(result, 'SRD', new CurrencyDataImpl_0('SRD', 'SR$', 2));
  $put_1(result, 'SRG', new CurrencyDataImpl_0('SRG', 'Sf', 130));
  $put_1(result, 'STD', new CurrencyDataImpl_0('STD', 'Db', 0));
  $put_1(result, 'SUR', new CurrencyDataImpl_0('SUR', 'SUR', 130));
  $put_1(result, 'SVC', new CurrencyDataImpl_0('SVC', 'SV\u20A1', 130));
  $put_1(result, 'SYP', new CurrencyDataImpl_0('SYP', 'SY\xA3', 0));
  $put_1(result, 'SZL', new CurrencyDataImpl_0('SZL', 'SZL', 2));
  $put_1(result, 'THB', new CurrencyDataImpl_1('THB', '\u0E3F', 2, 'THB'));
  $put_1(result, 'TJR', new CurrencyDataImpl_0('TJR', 'TJR', 130));
  $put_1(result, 'TJS', new CurrencyDataImpl_0('TJS', 'TJS', 2));
  $put_1(result, 'TMM', new CurrencyDataImpl_0('TMM', 'TMM', 128));
  $put_1(result, 'TMT', new CurrencyDataImpl_0('TMT', 'TMT', 2));
  $put_1(result, 'TND', new CurrencyDataImpl_0('TND', 'DT', 3));
  $put_1(result, 'TOP', new CurrencyDataImpl_0('TOP', 'T$', 2));
  $put_1(result, 'TPE', new CurrencyDataImpl_0('TPE', 'TPE', 130));
  $put_1(result, 'TRL', new CurrencyDataImpl_0('TRL', 'TRL', 128));
  $put_1(result, 'TRY', new CurrencyDataImpl_1('TRY', 'TL', 2, 'YTL'));
  $put_1(result, 'TTD', new CurrencyDataImpl_0('TTD', 'TT$', 2));
  $put_1(result, 'TWD', new CurrencyDataImpl_1('TWD', 'NT$', 2, 'NT$'));
  $put_1(result, 'TZS', new CurrencyDataImpl_0('TZS', 'TSh', 0));
  $put_1(result, 'UAH', new CurrencyDataImpl_0('UAH', '\u20B4', 2));
  $put_1(result, 'UAK', new CurrencyDataImpl_0('UAK', 'UAK', 130));
  $put_1(result, 'UGS', new CurrencyDataImpl_0('UGS', 'UGS', 130));
  $put_1(result, 'UGX', new CurrencyDataImpl_0('UGX', 'USh', 0));
  $put_1(result, 'USD', new CurrencyDataImpl_1('USD', '$', 2, 'US$'));
  $put_1(result, 'USN', new CurrencyDataImpl_0('USN', 'USN', 2));
  $put_1(result, 'USS', new CurrencyDataImpl_0('USS', 'USS', 2));
  $put_1(result, 'UYI', new CurrencyDataImpl_0('UYI', 'UYI', 2));
  $put_1(result, 'UYP', new CurrencyDataImpl_0('UYP', 'UYP', 130));
  $put_1(result, 'UYU', new CurrencyDataImpl_1('UYU', '$U', 2, 'UY$'));
  $put_1(result, 'UZS', new CurrencyDataImpl_0('UZS', 'UZS', 0));
  $put_1(result, 'VEB', new CurrencyDataImpl_0('VEB', 'VEB', 130));
  $put_1(result, 'VEF', new CurrencyDataImpl_0('VEF', 'Bs.F.', 2));
  $put_1(result, 'VND', new CurrencyDataImpl_1('VND', '\u20AB', 24, '\u20AB'));
  $put_1(result, 'VNN', new CurrencyDataImpl_0('VNN', 'VNN', 130));
  $put_1(result, 'VUV', new CurrencyDataImpl_0('VUV', 'VT', 0));
  $put_1(result, 'WST', new CurrencyDataImpl_0('WST', 'WS$', 2));
  $put_1(result, 'XAF', new CurrencyDataImpl_0('XAF', 'FCFA', 0));
  $put_1(result, 'XAG', new CurrencyDataImpl_0('XAG', 'XAG', 2));
  $put_1(result, 'XAU', new CurrencyDataImpl_0('XAU', 'XAU', 2));
  $put_1(result, 'XBA', new CurrencyDataImpl_0('XBA', 'XBA', 2));
  $put_1(result, 'XBB', new CurrencyDataImpl_0('XBB', 'XBB', 2));
  $put_1(result, 'XBC', new CurrencyDataImpl_0('XBC', 'XBC', 2));
  $put_1(result, 'XBD', new CurrencyDataImpl_0('XBD', 'XBD', 2));
  $put_1(result, 'XCD', new CurrencyDataImpl_0('XCD', 'EC$', 2));
  $put_1(result, 'XDR', new CurrencyDataImpl_0('XDR', 'XDR', 2));
  $put_1(result, 'XEU', new CurrencyDataImpl_0('XEU', 'XEU', 2));
  $put_1(result, 'XFO', new CurrencyDataImpl_0('XFO', 'XFO', 2));
  $put_1(result, 'XFU', new CurrencyDataImpl_0('XFU', 'XFU', 2));
  $put_1(result, 'XOF', new CurrencyDataImpl_0('XOF', 'CFA', 0));
  $put_1(result, 'XPD', new CurrencyDataImpl_0('XPD', 'XPD', 2));
  $put_1(result, 'XPF', new CurrencyDataImpl_0('XPF', 'CFPF', 0));
  $put_1(result, 'XPT', new CurrencyDataImpl_0('XPT', 'XPT', 2));
  $put_1(result, 'XRE', new CurrencyDataImpl_0('XRE', 'XRE', 2));
  $put_1(result, 'XTS', new CurrencyDataImpl_0('XTS', 'XTS', 2));
  $put_1(result, 'XXX', new CurrencyDataImpl_0('XXX', 'XXX', 2));
  $put_1(result, 'YDD', new CurrencyDataImpl_0('YDD', 'YDD', 130));
  $put_1(result, 'YER', new CurrencyDataImpl_1('YER', 'YR', 0, 'YER'));
  $put_1(result, 'YUD', new CurrencyDataImpl_0('YUD', 'YUD', 130));
  $put_1(result, 'YUM', new CurrencyDataImpl_0('YUM', 'YUM', 130));
  $put_1(result, 'YUN', new CurrencyDataImpl_0('YUN', 'YUN', 130));
  $put_1(result, 'YUR', new CurrencyDataImpl_0('YUR', 'YUR', 130));
  $put_1(result, 'ZAL', new CurrencyDataImpl_0('ZAL', 'ZAL', 2));
  $put_1(result, 'ZAR', new CurrencyDataImpl_1('ZAR', 'R', 2, 'ZAR'));
  $put_1(result, 'ZMK', new CurrencyDataImpl_0('ZMK', 'ZK', 0));
  $put_1(result, 'ZRN', new CurrencyDataImpl_0('ZRN', 'NZ', 130));
  $put_1(result, 'ZRZ', new CurrencyDataImpl_0('ZRZ', 'ZRZ', 130));
  $put_1(result, 'ZWD', new CurrencyDataImpl_0('ZWD', 'Z$', 128));
  $put_1(result, 'ZWL', new CurrencyDataImpl_0('ZWL', 'ZWL', 2));
  $put_1(result, 'ZWR', new CurrencyDataImpl_0('ZWR', 'ZWR', 130));
  return result;
}
;
_.loadCurrencyMapNative = function loadCurrencyMapNative_3(){
  return overrideMap($loadCurrencyMapNative_1(this), $loadMyCurrencyMapOverridesNative_2());
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
function $$init_128(){
}

function $loadMyCurrencyMapOverridesNative_3(){
  return {ADP:['ADP', 'ADP', 128], AED:['AED', 'DH', 2, 'DH'], AFA:['AFA', 'AFA', 130], AFN:['AFN', 'Af', 0], ALL:['ALL', 'ALL', 0], AMD:['AMD', 'AMD', 0], ANG:['ANG', 'NAf.', 2], AOA:['AOA', 'Kz', 2], AOK:['AOK', 'AOK', 130], AON:['AON', 'AON', 130], AOR:['AOR', 'AOR', 130], ARA:['ARA', '\u20B3', 130], ARL:['ARL', '$L', 130], ARM:['ARM', 'm$n', 130], ARP:['ARP', 'ARP', 130], ARS:['ARS', 'AR$', 2, 'AR$'], ATS:['ATS', 'ATS', 130], AUD:['AUD', 'AU$', 2, 'AU$'], AWG:['AWG', 'Afl.', 2], AZM:['AZM', 'AZM', 130], AZN:['AZN', 'man.', 2], BAD:['BAD', 'BAD', 130], BAM:['BAM', 'KM', 2], BAN:['BAN', 'BAN', 130], BBD:['BBD', 'Bds$', 2], BDT:['BDT', 'Tk', 2, 'Tk'], BEC:['BEC', 'BEC', 2], BEF:['BEF', 'BF', 130], BEL:['BEL', 'BEL', 2], BGL:['BGL', 'BGL', 130], BGM:['BGM', 'BGM', 130], BGN:['BGN', 'BGN', 2], BGO:['BGO', 'BGO', 130], BHD:['BHD', 'BD', 3], BIF:['BIF', 'FBu', 0], BMD:['BMD', 'BD$', 2], BND:['BND', 'BN$', 2], BOB:['BOB', 'Bs', 2], BOL:['BOL', 'BOL', 130], BOP:['BOP', '$b.', 130], BOV:['BOV', 'BOV', 2], BRB:['BRB', 'BRB', 130], BRC:['BRC', 'BRC', 130], BRE:['BRE', 'BRE', 130], BRL:['BRL', 'R$', 2, 'R$'], BRN:['BRN', 'BRN', 130], BRR:['BRR', 'BRR', 130], BRZ:['BRZ', 'BRZ', 130], BSD:['BSD', 'BS$', 2], BTN:['BTN', 'Nu.', 2], BUK:['BUK', 'BUK', 130], BWP:['BWP', 'P', 2], BYB:['BYB', 'BYB', 130], BYR:['BYR', 'BYR', 0], BZD:['BZD', 'BZ$', 2], CAD:['CAD', 'CA$', 2, 'C$'], CDF:['CDF', 'CDF', 2], CHE:['CHE', 'CHE', 2], CHF:['CHF', 'Fr.', 2, 'CHF'], CHW:['CHW', 'CHW', 2], CLE:['CLE', 'E\xBA', 130], CLF:['CLF', 'CLF', 0], CLP:['CLP', 'CL$', 0, 'CL$'], CNY:['CNY', 'CN\xA5', 2, 'RMB\xA5'], COP:['COP', 'CO$', 0, 'COL$'], COU:['COU', 'COU', 2], CRC:['CRC', '\u20A1', 0, 'CR\u20A1'], CSD:['CSD', 'CSD', 130], CSK:['CSK', 'CSK', 130], CUC:['CUC', 'CUC$', 2], CUP:['CUP', 'CU$', 2, '$MN'], CVE:['CVE', 'CV$', 2], CYP:['CYP', 'CY\xA3', 130], CZK:['CZK', 'K\u010D', 2, 'K\u010D'], DDM:['DDM', 'DDM', 130], DEM:['DEM', 'DM', 130], DJF:['DJF', 'Fdj', 0], DKK:['DKK', 'Dkr', 2, 'kr'], DOP:['DOP', 'RD$', 2, 'RD$'], DZD:['DZD', 'DA', 2], ECS:['ECS', 'ECS', 130], ECV:['ECV', 'ECV', 2], EEK:['EEK', 'Ekr', 2], EGP:['EGP', 'EG\xA3', 2, 'LE'], EQE:['EQE', 'EQE', 130], ERN:['ERN', 'Nfk', 2], ESA:['ESA', 'ESA', 2], ESB:['ESB', 'ESB', 2], ESP:['ESP', 'Pts', 128], ETB:['ETB', 'Br', 2], EUR:['EUR', '\u20AC', 2, '\u20AC'], FIM:['FIM', 'mk', 130], FJD:['FJD', 'FJ$', 2], FKP:['FKP', 'FK\xA3', 2], FRF:['FRF', '\u20A3', 130], GBP:['GBP', '\xA3', 2, 'GB\xA3'], GEK:['GEK', 'GEK', 130], GEL:['GEL', 'GEL', 2], GHC:['GHC', '\u20B5', 130], GHS:['GHS', 'GH\u20B5', 2], GIP:['GIP', 'GI\xA3', 2], GMD:['GMD', 'GMD', 2], GNF:['GNF', 'FG', 0], GNS:['GNS', 'GNS', 130], GQE:['GQE', 'GQE', 130], GRD:['GRD', '\u20AF', 130], GTQ:['GTQ', 'GTQ', 2], GWE:['GWE', 'GWE', 130], GWP:['GWP', 'GWP', 2], GYD:['GYD', 'GY$', 0], HKD:['HKD', 'HK$', 2, 'HK$'], HNL:['HNL', 'HNL', 2], HRD:['HRD', 'HRD', 130], HRK:['HRK', 'kn', 2], HTG:['HTG', 'HTG', 2], HUF:['HUF', 'Ft', 0], IDR:['IDR', 'Rp', 0], IEP:['IEP', 'IR\xA3', 130], ILP:['ILP', 'I\xA3', 130], ILR:['ILR', 'ILR', 130], ILS:['ILS', '\u20AA', 2, 'IL\u20AA'], INR:['INR', 'Rs', 2, 'Rs'], IQD:['IQD', 'IQD', 0], IRR:['IRR', 'IRR', 0], ISJ:['ISJ', 'ISJ', 130], ISK:['ISK', 'Ikr', 0, 'kr'], ITL:['ITL', 'IT\u20A4', 128], JMD:['JMD', 'J$', 2, 'JA$'], JOD:['JOD', 'JD', 3], JPY:['JPY', '\xA5', 0, 'JP\xA5'], KES:['KES', 'Ksh', 2], KGS:['KGS', 'KGS', 2], KHR:['KHR', 'KHR', 2], KMF:['KMF', 'CF', 0], KPW:['KPW', 'KPW', 0], KRH:['KRH', 'KRH', 130], KRO:['KRO', 'KRO', 130], KRW:['KRW', '\u20A9', 0, 'KR\u20A9'], KWD:['KWD', 'KD', 3], KYD:['KYD', 'KY$', 2], KZT:['KZT', 'KZT', 2], LAK:['LAK', '\u20AD', 0], LBP:['LBP', 'LB\xA3', 0], LKR:['LKR', 'SLRs', 2, 'SLRs'], LRD:['LRD', 'L$', 2], LSL:['LSL', 'LSL', 2], LSM:['LSM', 'LSM', 130], LTL:['LTL', 'Lt', 2], LTT:['LTT', 'LTT', 130], LUC:['LUC', 'LUC', 2], LUF:['LUF', 'LUF', 128], LUL:['LUL', 'LUL', 2], LVL:['LVL', 'Ls', 2], LVR:['LVR', 'LVR', 130], LYD:['LYD', 'LD', 3], MAD:['MAD', 'MAD', 2], MAF:['MAF', 'MAF', 130], MCF:['MCF', 'MCF', 130], MDC:['MDC', 'MDC', 130], MDL:['MDL', 'MDL', 2], MGA:['MGA', 'MGA', 0], MGF:['MGF', 'MGF', 128], MKD:['MKD', 'MKD', 2], MKN:['MKN', 'MKN', 130], MLF:['MLF', 'MLF', 130], MMK:['MMK', 'MMK', 0], MNT:['MNT', '\u20AE', 0, 'MN\u20AE'], MOP:['MOP', 'MOP$', 2], MRO:['MRO', 'UM', 0], MTL:['MTL', 'Lm', 130], MTP:['MTP', 'MT\xA3', 130], MUR:['MUR', 'MURs', 0], MVP:['MVP', 'MVP', 130], MVR:['MVR', 'MVR', 2], MWK:['MWK', 'MWK', 2], MXN:['MXN', 'Mex$', 2, 'Mex$'], MXP:['MXP', 'MX$', 130], MXV:['MXV', 'MXV', 2], MYR:['MYR', 'RM', 2, 'RM'], MZE:['MZE', 'MZE', 130], MZM:['MZM', 'Mt', 130], MZN:['MZN', 'MTn', 2], NAD:['NAD', 'N$', 2], NGN:['NGN', '\u20A6', 2], NIC:['NIC', 'NIC', 130], NIO:['NIO', 'C$', 2], NLG:['NLG', 'fl', 130], NOK:['NOK', 'Nkr', 2, 'NOkr'], NPR:['NPR', 'NPRs', 2], NZD:['NZD', 'NZ$', 2], OMR:['OMR', 'OMR', 3], PAB:['PAB', 'B/.', 2, 'B/.'], PEI:['PEI', 'I/.', 130], PEN:['PEN', 'S/.', 2, 'S/.'], PES:['PES', 'PES', 130], PGK:['PGK', 'PGK', 2], PHP:['PHP', '\u20B1', 2, 'PHP'], PKR:['PKR', 'PKRs', 0, 'PKRs.'], PLN:['PLN', 'z\u0142', 2], PLZ:['PLZ', 'PLZ', 130], PTE:['PTE', 'Esc', 130], PYG:['PYG', '\u20B2', 0], QAR:['QAR', 'QR', 2], RHD:['RHD', 'RH$', 130], ROL:['ROL', 'ROL', 130], RON:['RON', 'RON', 2], RSD:['RSD', 'din.', 0], RUB:['RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'], RUR:['RUR', 'RUR', 130], RWF:['RWF', 'RWF', 0], SAR:['SAR', 'SR', 2, 'SR'], SBD:['SBD', 'SI$', 2], SCR:['SCR', 'SRe', 2], SDD:['SDD', 'LSd', 130], SDG:['SDG', 'SDG', 2], SDP:['SDP', 'SDP', 130], SEK:['SEK', 'Skr', 2, 'kr'], SGD:['SGD', 'S$', 2, 'S$'], SHP:['SHP', 'SH\xA3', 2], SIT:['SIT', 'SIT', 130], SKK:['SKK', 'Sk', 130], SLL:['SLL', 'Le', 0], SOS:['SOS', 'Ssh', 0], SRD:['SRD', 'SR$', 2], SRG:['SRG', 'Sf', 130], STD:['STD', 'Db', 0], SUR:['SUR', 'SUR', 130], SVC:['SVC', 'SV\u20A1', 130], SYP:['SYP', 'SY\xA3', 0], SZL:['SZL', 'SZL', 2], THB:['THB', '\u0E3F', 2, 'THB'], TJR:['TJR', 'TJR', 130], TJS:['TJS', 'TJS', 2], TMM:['TMM', 'TMM', 128], TMT:['TMT', 'TMT', 2], TND:['TND', 'DT', 3], TOP:['TOP', 'T$', 2], TPE:['TPE', 'TPE', 130], TRL:['TRL', 'TRL', 128], TRY:['TRY', 'TL', 2, 'YTL'], TTD:['TTD', 'TT$', 2], TWD:['TWD', 'NT$', 2, 'NT$'], TZS:['TZS', 'TSh', 0], UAH:['UAH', '\u20B4', 2], UAK:['UAK', 'UAK', 130], UGS:['UGS', 'UGS', 130], UGX:['UGX', 'USh', 0], USD:['USD', '$', 2, 'US$'], USN:['USN', 'USN', 2], USS:['USS', 'USS', 2], UYI:['UYI', 'UYI', 2], UYP:['UYP', 'UYP', 130], UYU:['UYU', '$U', 2, 'UY$'], UZS:['UZS', 'UZS', 0], VEB:['VEB', 'VEB', 130], VEF:['VEF', 'Bs.F.', 2], VND:['VND', '\u20AB', 24, '\u20AB'], VNN:['VNN', 'VNN', 130], VUV:['VUV', 'VT', 0], WST:['WST', 'WS$', 2], XAF:['XAF', 'FCFA', 0], XAG:['XAG', 'XAG', 2], XAU:['XAU', 'XAU', 2], XBA:['XBA', 'XBA', 2], XBB:['XBB', 'XBB', 2], XBC:['XBC', 'XBC', 2], XBD:['XBD', 'XBD', 2], XCD:['XCD', 'EC$', 2], XDR:['XDR', 'XDR', 2], XEU:['XEU', 'XEU', 2], XFO:['XFO', 'XFO', 2], XFU:['XFU', 'XFU', 2], XOF:['XOF', 'CFA', 0], XPD:['XPD', 'XPD', 2], XPF:['XPF', 'CFPF', 0], XPT:['XPT', 'XPT', 2], XRE:['XRE', 'XRE', 2], XTS:['XTS', 'XTS', 2], XXX:['XXX', 'XXX', 2], YDD:['YDD', 'YDD', 130], YER:['YER', 'YR', 0, 'YER'], YUD:['YUD', 'YUD', 130], YUM:['YUM', 'YUM', 130], YUN:['YUN', 'YUN', 130], YUR:['YUR', 'YUR', 130], ZAL:['ZAL', 'ZAL', 2], ZAR:['ZAR', 'R', 2, 'ZAR'], ZMK:['ZMK', 'ZK', 0], ZRN:['ZRN', 'NZ', 130], ZRZ:['ZRZ', 'ZRZ', 130], ZWD:['ZWD', 'Z$', 128], ZWL:['ZWL', 'ZWL', 2], ZWR:['ZWR', 'ZWR', 130]};
}

function CurrencyList_en_BW_0(){
  CurrencyList_en_0.call(this);
  $$init_128();
}

function CurrencyList_en_BW(){
}

_ = CurrencyList_en_BW_0.prototype = CurrencyList_en_BW.prototype = new CurrencyList_en;
_.getClass$ = function getClass_129(){
  return Lcom_google_gwt_i18n_client_CurrencyList_1en_1BW_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava_4(){
  return new CurrencyDataImpl_0('BWP', 'P', 2);
}
;
_.getDefaultNative = function getDefaultNative_4(){
  return ['BWP', 'P', 2];
}
;
_.loadCurrencyMapJava = function loadCurrencyMapJava_4(){
  var result;
  result = $loadCurrencyMapJava_1(this);
  $put_1(result, 'ADP', new CurrencyDataImpl_0('ADP', 'ADP', 128));
  $put_1(result, 'AED', new CurrencyDataImpl_1('AED', 'DH', 2, 'DH'));
  $put_1(result, 'AFA', new CurrencyDataImpl_0('AFA', 'AFA', 130));
  $put_1(result, 'AFN', new CurrencyDataImpl_0('AFN', 'Af', 0));
  $put_1(result, 'ALL', new CurrencyDataImpl_0('ALL', 'ALL', 0));
  $put_1(result, 'AMD', new CurrencyDataImpl_0('AMD', 'AMD', 0));
  $put_1(result, 'ANG', new CurrencyDataImpl_0('ANG', 'NAf.', 2));
  $put_1(result, 'AOA', new CurrencyDataImpl_0('AOA', 'Kz', 2));
  $put_1(result, 'AOK', new CurrencyDataImpl_0('AOK', 'AOK', 130));
  $put_1(result, 'AON', new CurrencyDataImpl_0('AON', 'AON', 130));
  $put_1(result, 'AOR', new CurrencyDataImpl_0('AOR', 'AOR', 130));
  $put_1(result, 'ARA', new CurrencyDataImpl_0('ARA', '\u20B3', 130));
  $put_1(result, 'ARL', new CurrencyDataImpl_0('ARL', '$L', 130));
  $put_1(result, 'ARM', new CurrencyDataImpl_0('ARM', 'm$n', 130));
  $put_1(result, 'ARP', new CurrencyDataImpl_0('ARP', 'ARP', 130));
  $put_1(result, 'ARS', new CurrencyDataImpl_1('ARS', 'AR$', 2, 'AR$'));
  $put_1(result, 'ATS', new CurrencyDataImpl_0('ATS', 'ATS', 130));
  $put_1(result, 'AUD', new CurrencyDataImpl_1('AUD', 'AU$', 2, 'AU$'));
  $put_1(result, 'AWG', new CurrencyDataImpl_0('AWG', 'Afl.', 2));
  $put_1(result, 'AZM', new CurrencyDataImpl_0('AZM', 'AZM', 130));
  $put_1(result, 'AZN', new CurrencyDataImpl_0('AZN', 'man.', 2));
  $put_1(result, 'BAD', new CurrencyDataImpl_0('BAD', 'BAD', 130));
  $put_1(result, 'BAM', new CurrencyDataImpl_0('BAM', 'KM', 2));
  $put_1(result, 'BAN', new CurrencyDataImpl_0('BAN', 'BAN', 130));
  $put_1(result, 'BBD', new CurrencyDataImpl_0('BBD', 'Bds$', 2));
  $put_1(result, 'BDT', new CurrencyDataImpl_1('BDT', 'Tk', 2, 'Tk'));
  $put_1(result, 'BEC', new CurrencyDataImpl_0('BEC', 'BEC', 2));
  $put_1(result, 'BEF', new CurrencyDataImpl_0('BEF', 'BF', 130));
  $put_1(result, 'BEL', new CurrencyDataImpl_0('BEL', 'BEL', 2));
  $put_1(result, 'BGL', new CurrencyDataImpl_0('BGL', 'BGL', 130));
  $put_1(result, 'BGM', new CurrencyDataImpl_0('BGM', 'BGM', 130));
  $put_1(result, 'BGN', new CurrencyDataImpl_0('BGN', 'BGN', 2));
  $put_1(result, 'BGO', new CurrencyDataImpl_0('BGO', 'BGO', 130));
  $put_1(result, 'BHD', new CurrencyDataImpl_0('BHD', 'BD', 3));
  $put_1(result, 'BIF', new CurrencyDataImpl_0('BIF', 'FBu', 0));
  $put_1(result, 'BMD', new CurrencyDataImpl_0('BMD', 'BD$', 2));
  $put_1(result, 'BND', new CurrencyDataImpl_0('BND', 'BN$', 2));
  $put_1(result, 'BOB', new CurrencyDataImpl_0('BOB', 'Bs', 2));
  $put_1(result, 'BOL', new CurrencyDataImpl_0('BOL', 'BOL', 130));
  $put_1(result, 'BOP', new CurrencyDataImpl_0('BOP', '$b.', 130));
  $put_1(result, 'BOV', new CurrencyDataImpl_0('BOV', 'BOV', 2));
  $put_1(result, 'BRB', new CurrencyDataImpl_0('BRB', 'BRB', 130));
  $put_1(result, 'BRC', new CurrencyDataImpl_0('BRC', 'BRC', 130));
  $put_1(result, 'BRE', new CurrencyDataImpl_0('BRE', 'BRE', 130));
  $put_1(result, 'BRL', new CurrencyDataImpl_1('BRL', 'R$', 2, 'R$'));
  $put_1(result, 'BRN', new CurrencyDataImpl_0('BRN', 'BRN', 130));
  $put_1(result, 'BRR', new CurrencyDataImpl_0('BRR', 'BRR', 130));
  $put_1(result, 'BRZ', new CurrencyDataImpl_0('BRZ', 'BRZ', 130));
  $put_1(result, 'BSD', new CurrencyDataImpl_0('BSD', 'BS$', 2));
  $put_1(result, 'BTN', new CurrencyDataImpl_0('BTN', 'Nu.', 2));
  $put_1(result, 'BUK', new CurrencyDataImpl_0('BUK', 'BUK', 130));
  $put_1(result, 'BWP', new CurrencyDataImpl_0('BWP', 'P', 2));
  $put_1(result, 'BYB', new CurrencyDataImpl_0('BYB', 'BYB', 130));
  $put_1(result, 'BYR', new CurrencyDataImpl_0('BYR', 'BYR', 0));
  $put_1(result, 'BZD', new CurrencyDataImpl_0('BZD', 'BZ$', 2));
  $put_1(result, 'CAD', new CurrencyDataImpl_1('CAD', 'CA$', 2, 'C$'));
  $put_1(result, 'CDF', new CurrencyDataImpl_0('CDF', 'CDF', 2));
  $put_1(result, 'CHE', new CurrencyDataImpl_0('CHE', 'CHE', 2));
  $put_1(result, 'CHF', new CurrencyDataImpl_1('CHF', 'Fr.', 2, 'CHF'));
  $put_1(result, 'CHW', new CurrencyDataImpl_0('CHW', 'CHW', 2));
  $put_1(result, 'CLE', new CurrencyDataImpl_0('CLE', 'E\xBA', 130));
  $put_1(result, 'CLF', new CurrencyDataImpl_0('CLF', 'CLF', 0));
  $put_1(result, 'CLP', new CurrencyDataImpl_1('CLP', 'CL$', 0, 'CL$'));
  $put_1(result, 'CNY', new CurrencyDataImpl_1('CNY', 'CN\xA5', 2, 'RMB\xA5'));
  $put_1(result, 'COP', new CurrencyDataImpl_1('COP', 'CO$', 0, 'COL$'));
  $put_1(result, 'COU', new CurrencyDataImpl_0('COU', 'COU', 2));
  $put_1(result, 'CRC', new CurrencyDataImpl_1('CRC', '\u20A1', 0, 'CR\u20A1'));
  $put_1(result, 'CSD', new CurrencyDataImpl_0('CSD', 'CSD', 130));
  $put_1(result, 'CSK', new CurrencyDataImpl_0('CSK', 'CSK', 130));
  $put_1(result, 'CUC', new CurrencyDataImpl_0('CUC', 'CUC$', 2));
  $put_1(result, 'CUP', new CurrencyDataImpl_1('CUP', 'CU$', 2, '$MN'));
  $put_1(result, 'CVE', new CurrencyDataImpl_0('CVE', 'CV$', 2));
  $put_1(result, 'CYP', new CurrencyDataImpl_0('CYP', 'CY\xA3', 130));
  $put_1(result, 'CZK', new CurrencyDataImpl_1('CZK', 'K\u010D', 2, 'K\u010D'));
  $put_1(result, 'DDM', new CurrencyDataImpl_0('DDM', 'DDM', 130));
  $put_1(result, 'DEM', new CurrencyDataImpl_0('DEM', 'DM', 130));
  $put_1(result, 'DJF', new CurrencyDataImpl_0('DJF', 'Fdj', 0));
  $put_1(result, 'DKK', new CurrencyDataImpl_1('DKK', 'Dkr', 2, 'kr'));
  $put_1(result, 'DOP', new CurrencyDataImpl_1('DOP', 'RD$', 2, 'RD$'));
  $put_1(result, 'DZD', new CurrencyDataImpl_0('DZD', 'DA', 2));
  $put_1(result, 'ECS', new CurrencyDataImpl_0('ECS', 'ECS', 130));
  $put_1(result, 'ECV', new CurrencyDataImpl_0('ECV', 'ECV', 2));
  $put_1(result, 'EEK', new CurrencyDataImpl_0('EEK', 'Ekr', 2));
  $put_1(result, 'EGP', new CurrencyDataImpl_1('EGP', 'EG\xA3', 2, 'LE'));
  $put_1(result, 'EQE', new CurrencyDataImpl_0('EQE', 'EQE', 130));
  $put_1(result, 'ERN', new CurrencyDataImpl_0('ERN', 'Nfk', 2));
  $put_1(result, 'ESA', new CurrencyDataImpl_0('ESA', 'ESA', 2));
  $put_1(result, 'ESB', new CurrencyDataImpl_0('ESB', 'ESB', 2));
  $put_1(result, 'ESP', new CurrencyDataImpl_0('ESP', 'Pts', 128));
  $put_1(result, 'ETB', new CurrencyDataImpl_0('ETB', 'Br', 2));
  $put_1(result, 'EUR', new CurrencyDataImpl_1('EUR', '\u20AC', 2, '\u20AC'));
  $put_1(result, 'FIM', new CurrencyDataImpl_0('FIM', 'mk', 130));
  $put_1(result, 'FJD', new CurrencyDataImpl_0('FJD', 'FJ$', 2));
  $put_1(result, 'FKP', new CurrencyDataImpl_0('FKP', 'FK\xA3', 2));
  $put_1(result, 'FRF', new CurrencyDataImpl_0('FRF', '\u20A3', 130));
  $put_1(result, 'GBP', new CurrencyDataImpl_1('GBP', '\xA3', 2, 'GB\xA3'));
  $put_1(result, 'GEK', new CurrencyDataImpl_0('GEK', 'GEK', 130));
  $put_1(result, 'GEL', new CurrencyDataImpl_0('GEL', 'GEL', 2));
  $put_1(result, 'GHC', new CurrencyDataImpl_0('GHC', '\u20B5', 130));
  $put_1(result, 'GHS', new CurrencyDataImpl_0('GHS', 'GH\u20B5', 2));
  $put_1(result, 'GIP', new CurrencyDataImpl_0('GIP', 'GI\xA3', 2));
  $put_1(result, 'GMD', new CurrencyDataImpl_0('GMD', 'GMD', 2));
  $put_1(result, 'GNF', new CurrencyDataImpl_0('GNF', 'FG', 0));
  $put_1(result, 'GNS', new CurrencyDataImpl_0('GNS', 'GNS', 130));
  $put_1(result, 'GQE', new CurrencyDataImpl_0('GQE', 'GQE', 130));
  $put_1(result, 'GRD', new CurrencyDataImpl_0('GRD', '\u20AF', 130));
  $put_1(result, 'GTQ', new CurrencyDataImpl_0('GTQ', 'GTQ', 2));
  $put_1(result, 'GWE', new CurrencyDataImpl_0('GWE', 'GWE', 130));
  $put_1(result, 'GWP', new CurrencyDataImpl_0('GWP', 'GWP', 2));
  $put_1(result, 'GYD', new CurrencyDataImpl_0('GYD', 'GY$', 0));
  $put_1(result, 'HKD', new CurrencyDataImpl_1('HKD', 'HK$', 2, 'HK$'));
  $put_1(result, 'HNL', new CurrencyDataImpl_0('HNL', 'HNL', 2));
  $put_1(result, 'HRD', new CurrencyDataImpl_0('HRD', 'HRD', 130));
  $put_1(result, 'HRK', new CurrencyDataImpl_0('HRK', 'kn', 2));
  $put_1(result, 'HTG', new CurrencyDataImpl_0('HTG', 'HTG', 2));
  $put_1(result, 'HUF', new CurrencyDataImpl_0('HUF', 'Ft', 0));
  $put_1(result, 'IDR', new CurrencyDataImpl_0('IDR', 'Rp', 0));
  $put_1(result, 'IEP', new CurrencyDataImpl_0('IEP', 'IR\xA3', 130));
  $put_1(result, 'ILP', new CurrencyDataImpl_0('ILP', 'I\xA3', 130));
  $put_1(result, 'ILR', new CurrencyDataImpl_0('ILR', 'ILR', 130));
  $put_1(result, 'ILS', new CurrencyDataImpl_1('ILS', '\u20AA', 2, 'IL\u20AA'));
  $put_1(result, 'INR', new CurrencyDataImpl_1('INR', 'Rs', 2, 'Rs'));
  $put_1(result, 'IQD', new CurrencyDataImpl_0('IQD', 'IQD', 0));
  $put_1(result, 'IRR', new CurrencyDataImpl_0('IRR', 'IRR', 0));
  $put_1(result, 'ISJ', new CurrencyDataImpl_0('ISJ', 'ISJ', 130));
  $put_1(result, 'ISK', new CurrencyDataImpl_1('ISK', 'Ikr', 0, 'kr'));
  $put_1(result, 'ITL', new CurrencyDataImpl_0('ITL', 'IT\u20A4', 128));
  $put_1(result, 'JMD', new CurrencyDataImpl_1('JMD', 'J$', 2, 'JA$'));
  $put_1(result, 'JOD', new CurrencyDataImpl_0('JOD', 'JD', 3));
  $put_1(result, 'JPY', new CurrencyDataImpl_1('JPY', '\xA5', 0, 'JP\xA5'));
  $put_1(result, 'KES', new CurrencyDataImpl_0('KES', 'Ksh', 2));
  $put_1(result, 'KGS', new CurrencyDataImpl_0('KGS', 'KGS', 2));
  $put_1(result, 'KHR', new CurrencyDataImpl_0('KHR', 'KHR', 2));
  $put_1(result, 'KMF', new CurrencyDataImpl_0('KMF', 'CF', 0));
  $put_1(result, 'KPW', new CurrencyDataImpl_0('KPW', 'KPW', 0));
  $put_1(result, 'KRH', new CurrencyDataImpl_0('KRH', 'KRH', 130));
  $put_1(result, 'KRO', new CurrencyDataImpl_0('KRO', 'KRO', 130));
  $put_1(result, 'KRW', new CurrencyDataImpl_1('KRW', '\u20A9', 0, 'KR\u20A9'));
  $put_1(result, 'KWD', new CurrencyDataImpl_0('KWD', 'KD', 3));
  $put_1(result, 'KYD', new CurrencyDataImpl_0('KYD', 'KY$', 2));
  $put_1(result, 'KZT', new CurrencyDataImpl_0('KZT', 'KZT', 2));
  $put_1(result, 'LAK', new CurrencyDataImpl_0('LAK', '\u20AD', 0));
  $put_1(result, 'LBP', new CurrencyDataImpl_0('LBP', 'LB\xA3', 0));
  $put_1(result, 'LKR', new CurrencyDataImpl_1('LKR', 'SLRs', 2, 'SLRs'));
  $put_1(result, 'LRD', new CurrencyDataImpl_0('LRD', 'L$', 2));
  $put_1(result, 'LSL', new CurrencyDataImpl_0('LSL', 'LSL', 2));
  $put_1(result, 'LSM', new CurrencyDataImpl_0('LSM', 'LSM', 130));
  $put_1(result, 'LTL', new CurrencyDataImpl_0('LTL', 'Lt', 2));
  $put_1(result, 'LTT', new CurrencyDataImpl_0('LTT', 'LTT', 130));
  $put_1(result, 'LUC', new CurrencyDataImpl_0('LUC', 'LUC', 2));
  $put_1(result, 'LUF', new CurrencyDataImpl_0('LUF', 'LUF', 128));
  $put_1(result, 'LUL', new CurrencyDataImpl_0('LUL', 'LUL', 2));
  $put_1(result, 'LVL', new CurrencyDataImpl_0('LVL', 'Ls', 2));
  $put_1(result, 'LVR', new CurrencyDataImpl_0('LVR', 'LVR', 130));
  $put_1(result, 'LYD', new CurrencyDataImpl_0('LYD', 'LD', 3));
  $put_1(result, 'MAD', new CurrencyDataImpl_0('MAD', 'MAD', 2));
  $put_1(result, 'MAF', new CurrencyDataImpl_0('MAF', 'MAF', 130));
  $put_1(result, 'MCF', new CurrencyDataImpl_0('MCF', 'MCF', 130));
  $put_1(result, 'MDC', new CurrencyDataImpl_0('MDC', 'MDC', 130));
  $put_1(result, 'MDL', new CurrencyDataImpl_0('MDL', 'MDL', 2));
  $put_1(result, 'MGA', new CurrencyDataImpl_0('MGA', 'MGA', 0));
  $put_1(result, 'MGF', new CurrencyDataImpl_0('MGF', 'MGF', 128));
  $put_1(result, 'MKD', new CurrencyDataImpl_0('MKD', 'MKD', 2));
  $put_1(result, 'MKN', new CurrencyDataImpl_0('MKN', 'MKN', 130));
  $put_1(result, 'MLF', new CurrencyDataImpl_0('MLF', 'MLF', 130));
  $put_1(result, 'MMK', new CurrencyDataImpl_0('MMK', 'MMK', 0));
  $put_1(result, 'MNT', new CurrencyDataImpl_1('MNT', '\u20AE', 0, 'MN\u20AE'));
  $put_1(result, 'MOP', new CurrencyDataImpl_0('MOP', 'MOP$', 2));
  $put_1(result, 'MRO', new CurrencyDataImpl_0('MRO', 'UM', 0));
  $put_1(result, 'MTL', new CurrencyDataImpl_0('MTL', 'Lm', 130));
  $put_1(result, 'MTP', new CurrencyDataImpl_0('MTP', 'MT\xA3', 130));
  $put_1(result, 'MUR', new CurrencyDataImpl_0('MUR', 'MURs', 0));
  $put_1(result, 'MVP', new CurrencyDataImpl_0('MVP', 'MVP', 130));
  $put_1(result, 'MVR', new CurrencyDataImpl_0('MVR', 'MVR', 2));
  $put_1(result, 'MWK', new CurrencyDataImpl_0('MWK', 'MWK', 2));
  $put_1(result, 'MXN', new CurrencyDataImpl_1('MXN', 'Mex$', 2, 'Mex$'));
  $put_1(result, 'MXP', new CurrencyDataImpl_0('MXP', 'MX$', 130));
  $put_1(result, 'MXV', new CurrencyDataImpl_0('MXV', 'MXV', 2));
  $put_1(result, 'MYR', new CurrencyDataImpl_1('MYR', 'RM', 2, 'RM'));
  $put_1(result, 'MZE', new CurrencyDataImpl_0('MZE', 'MZE', 130));
  $put_1(result, 'MZM', new CurrencyDataImpl_0('MZM', 'Mt', 130));
  $put_1(result, 'MZN', new CurrencyDataImpl_0('MZN', 'MTn', 2));
  $put_1(result, 'NAD', new CurrencyDataImpl_0('NAD', 'N$', 2));
  $put_1(result, 'NGN', new CurrencyDataImpl_0('NGN', '\u20A6', 2));
  $put_1(result, 'NIC', new CurrencyDataImpl_0('NIC', 'NIC', 130));
  $put_1(result, 'NIO', new CurrencyDataImpl_0('NIO', 'C$', 2));
  $put_1(result, 'NLG', new CurrencyDataImpl_0('NLG', 'fl', 130));
  $put_1(result, 'NOK', new CurrencyDataImpl_1('NOK', 'Nkr', 2, 'NOkr'));
  $put_1(result, 'NPR', new CurrencyDataImpl_0('NPR', 'NPRs', 2));
  $put_1(result, 'NZD', new CurrencyDataImpl_0('NZD', 'NZ$', 2));
  $put_1(result, 'OMR', new CurrencyDataImpl_0('OMR', 'OMR', 3));
  $put_1(result, 'PAB', new CurrencyDataImpl_1('PAB', 'B/.', 2, 'B/.'));
  $put_1(result, 'PEI', new CurrencyDataImpl_0('PEI', 'I/.', 130));
  $put_1(result, 'PEN', new CurrencyDataImpl_1('PEN', 'S/.', 2, 'S/.'));
  $put_1(result, 'PES', new CurrencyDataImpl_0('PES', 'PES', 130));
  $put_1(result, 'PGK', new CurrencyDataImpl_0('PGK', 'PGK', 2));
  $put_1(result, 'PHP', new CurrencyDataImpl_1('PHP', '\u20B1', 2, 'PHP'));
  $put_1(result, 'PKR', new CurrencyDataImpl_1('PKR', 'PKRs', 0, 'PKRs.'));
  $put_1(result, 'PLN', new CurrencyDataImpl_0('PLN', 'z\u0142', 2));
  $put_1(result, 'PLZ', new CurrencyDataImpl_0('PLZ', 'PLZ', 130));
  $put_1(result, 'PTE', new CurrencyDataImpl_0('PTE', 'Esc', 130));
  $put_1(result, 'PYG', new CurrencyDataImpl_0('PYG', '\u20B2', 0));
  $put_1(result, 'QAR', new CurrencyDataImpl_0('QAR', 'QR', 2));
  $put_1(result, 'RHD', new CurrencyDataImpl_0('RHD', 'RH$', 130));
  $put_1(result, 'ROL', new CurrencyDataImpl_0('ROL', 'ROL', 130));
  $put_1(result, 'RON', new CurrencyDataImpl_0('RON', 'RON', 2));
  $put_1(result, 'RSD', new CurrencyDataImpl_0('RSD', 'din.', 0));
  $put_1(result, 'RUB', new CurrencyDataImpl_1('RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'));
  $put_1(result, 'RUR', new CurrencyDataImpl_0('RUR', 'RUR', 130));
  $put_1(result, 'RWF', new CurrencyDataImpl_0('RWF', 'RWF', 0));
  $put_1(result, 'SAR', new CurrencyDataImpl_1('SAR', 'SR', 2, 'SR'));
  $put_1(result, 'SBD', new CurrencyDataImpl_0('SBD', 'SI$', 2));
  $put_1(result, 'SCR', new CurrencyDataImpl_0('SCR', 'SRe', 2));
  $put_1(result, 'SDD', new CurrencyDataImpl_0('SDD', 'LSd', 130));
  $put_1(result, 'SDG', new CurrencyDataImpl_0('SDG', 'SDG', 2));
  $put_1(result, 'SDP', new CurrencyDataImpl_0('SDP', 'SDP', 130));
  $put_1(result, 'SEK', new CurrencyDataImpl_1('SEK', 'Skr', 2, 'kr'));
  $put_1(result, 'SGD', new CurrencyDataImpl_1('SGD', 'S$', 2, 'S$'));
  $put_1(result, 'SHP', new CurrencyDataImpl_0('SHP', 'SH\xA3', 2));
  $put_1(result, 'SIT', new CurrencyDataImpl_0('SIT', 'SIT', 130));
  $put_1(result, 'SKK', new CurrencyDataImpl_0('SKK', 'Sk', 130));
  $put_1(result, 'SLL', new CurrencyDataImpl_0('SLL', 'Le', 0));
  $put_1(result, 'SOS', new CurrencyDataImpl_0('SOS', 'Ssh', 0));
  $put_1(result, 'SRD', new CurrencyDataImpl_0('SRD', 'SR$', 2));
  $put_1(result, 'SRG', new CurrencyDataImpl_0('SRG', 'Sf', 130));
  $put_1(result, 'STD', new CurrencyDataImpl_0('STD', 'Db', 0));
  $put_1(result, 'SUR', new CurrencyDataImpl_0('SUR', 'SUR', 130));
  $put_1(result, 'SVC', new CurrencyDataImpl_0('SVC', 'SV\u20A1', 130));
  $put_1(result, 'SYP', new CurrencyDataImpl_0('SYP', 'SY\xA3', 0));
  $put_1(result, 'SZL', new CurrencyDataImpl_0('SZL', 'SZL', 2));
  $put_1(result, 'THB', new CurrencyDataImpl_1('THB', '\u0E3F', 2, 'THB'));
  $put_1(result, 'TJR', new CurrencyDataImpl_0('TJR', 'TJR', 130));
  $put_1(result, 'TJS', new CurrencyDataImpl_0('TJS', 'TJS', 2));
  $put_1(result, 'TMM', new CurrencyDataImpl_0('TMM', 'TMM', 128));
  $put_1(result, 'TMT', new CurrencyDataImpl_0('TMT', 'TMT', 2));
  $put_1(result, 'TND', new CurrencyDataImpl_0('TND', 'DT', 3));
  $put_1(result, 'TOP', new CurrencyDataImpl_0('TOP', 'T$', 2));
  $put_1(result, 'TPE', new CurrencyDataImpl_0('TPE', 'TPE', 130));
  $put_1(result, 'TRL', new CurrencyDataImpl_0('TRL', 'TRL', 128));
  $put_1(result, 'TRY', new CurrencyDataImpl_1('TRY', 'TL', 2, 'YTL'));
  $put_1(result, 'TTD', new CurrencyDataImpl_0('TTD', 'TT$', 2));
  $put_1(result, 'TWD', new CurrencyDataImpl_1('TWD', 'NT$', 2, 'NT$'));
  $put_1(result, 'TZS', new CurrencyDataImpl_0('TZS', 'TSh', 0));
  $put_1(result, 'UAH', new CurrencyDataImpl_0('UAH', '\u20B4', 2));
  $put_1(result, 'UAK', new CurrencyDataImpl_0('UAK', 'UAK', 130));
  $put_1(result, 'UGS', new CurrencyDataImpl_0('UGS', 'UGS', 130));
  $put_1(result, 'UGX', new CurrencyDataImpl_0('UGX', 'USh', 0));
  $put_1(result, 'USD', new CurrencyDataImpl_1('USD', '$', 2, 'US$'));
  $put_1(result, 'USN', new CurrencyDataImpl_0('USN', 'USN', 2));
  $put_1(result, 'USS', new CurrencyDataImpl_0('USS', 'USS', 2));
  $put_1(result, 'UYI', new CurrencyDataImpl_0('UYI', 'UYI', 2));
  $put_1(result, 'UYP', new CurrencyDataImpl_0('UYP', 'UYP', 130));
  $put_1(result, 'UYU', new CurrencyDataImpl_1('UYU', '$U', 2, 'UY$'));
  $put_1(result, 'UZS', new CurrencyDataImpl_0('UZS', 'UZS', 0));
  $put_1(result, 'VEB', new CurrencyDataImpl_0('VEB', 'VEB', 130));
  $put_1(result, 'VEF', new CurrencyDataImpl_0('VEF', 'Bs.F.', 2));
  $put_1(result, 'VND', new CurrencyDataImpl_1('VND', '\u20AB', 24, '\u20AB'));
  $put_1(result, 'VNN', new CurrencyDataImpl_0('VNN', 'VNN', 130));
  $put_1(result, 'VUV', new CurrencyDataImpl_0('VUV', 'VT', 0));
  $put_1(result, 'WST', new CurrencyDataImpl_0('WST', 'WS$', 2));
  $put_1(result, 'XAF', new CurrencyDataImpl_0('XAF', 'FCFA', 0));
  $put_1(result, 'XAG', new CurrencyDataImpl_0('XAG', 'XAG', 2));
  $put_1(result, 'XAU', new CurrencyDataImpl_0('XAU', 'XAU', 2));
  $put_1(result, 'XBA', new CurrencyDataImpl_0('XBA', 'XBA', 2));
  $put_1(result, 'XBB', new CurrencyDataImpl_0('XBB', 'XBB', 2));
  $put_1(result, 'XBC', new CurrencyDataImpl_0('XBC', 'XBC', 2));
  $put_1(result, 'XBD', new CurrencyDataImpl_0('XBD', 'XBD', 2));
  $put_1(result, 'XCD', new CurrencyDataImpl_0('XCD', 'EC$', 2));
  $put_1(result, 'XDR', new CurrencyDataImpl_0('XDR', 'XDR', 2));
  $put_1(result, 'XEU', new CurrencyDataImpl_0('XEU', 'XEU', 2));
  $put_1(result, 'XFO', new CurrencyDataImpl_0('XFO', 'XFO', 2));
  $put_1(result, 'XFU', new CurrencyDataImpl_0('XFU', 'XFU', 2));
  $put_1(result, 'XOF', new CurrencyDataImpl_0('XOF', 'CFA', 0));
  $put_1(result, 'XPD', new CurrencyDataImpl_0('XPD', 'XPD', 2));
  $put_1(result, 'XPF', new CurrencyDataImpl_0('XPF', 'CFPF', 0));
  $put_1(result, 'XPT', new CurrencyDataImpl_0('XPT', 'XPT', 2));
  $put_1(result, 'XRE', new CurrencyDataImpl_0('XRE', 'XRE', 2));
  $put_1(result, 'XTS', new CurrencyDataImpl_0('XTS', 'XTS', 2));
  $put_1(result, 'XXX', new CurrencyDataImpl_0('XXX', 'XXX', 2));
  $put_1(result, 'YDD', new CurrencyDataImpl_0('YDD', 'YDD', 130));
  $put_1(result, 'YER', new CurrencyDataImpl_1('YER', 'YR', 0, 'YER'));
  $put_1(result, 'YUD', new CurrencyDataImpl_0('YUD', 'YUD', 130));
  $put_1(result, 'YUM', new CurrencyDataImpl_0('YUM', 'YUM', 130));
  $put_1(result, 'YUN', new CurrencyDataImpl_0('YUN', 'YUN', 130));
  $put_1(result, 'YUR', new CurrencyDataImpl_0('YUR', 'YUR', 130));
  $put_1(result, 'ZAL', new CurrencyDataImpl_0('ZAL', 'ZAL', 2));
  $put_1(result, 'ZAR', new CurrencyDataImpl_1('ZAR', 'R', 2, 'ZAR'));
  $put_1(result, 'ZMK', new CurrencyDataImpl_0('ZMK', 'ZK', 0));
  $put_1(result, 'ZRN', new CurrencyDataImpl_0('ZRN', 'NZ', 130));
  $put_1(result, 'ZRZ', new CurrencyDataImpl_0('ZRZ', 'ZRZ', 130));
  $put_1(result, 'ZWD', new CurrencyDataImpl_0('ZWD', 'Z$', 128));
  $put_1(result, 'ZWL', new CurrencyDataImpl_0('ZWL', 'ZWL', 2));
  $put_1(result, 'ZWR', new CurrencyDataImpl_0('ZWR', 'ZWR', 130));
  return result;
}
;
_.loadCurrencyMapNative = function loadCurrencyMapNative_4(){
  return overrideMap($loadCurrencyMapNative_1(this), $loadMyCurrencyMapOverridesNative_3());
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
function $$init_129(){
}

function $loadMyCurrencyMapOverridesNative_4(){
  return {ADP:['ADP', 'ADP', 128], AED:['AED', 'DH', 2, 'DH'], AFA:['AFA', 'AFA', 130], AFN:['AFN', 'Af', 0], ALL:['ALL', 'ALL', 0], AMD:['AMD', 'AMD', 0], ANG:['ANG', 'NAf.', 2], AOA:['AOA', 'Kz', 2], AOK:['AOK', 'AOK', 130], AON:['AON', 'AON', 130], AOR:['AOR', 'AOR', 130], ARA:['ARA', '\u20B3', 130], ARL:['ARL', '$L', 130], ARM:['ARM', 'm$n', 130], ARP:['ARP', 'ARP', 130], ARS:['ARS', 'AR$', 2, 'AR$'], ATS:['ATS', 'ATS', 130], AUD:['AUD', 'AU$', 2, 'AU$'], AWG:['AWG', 'Afl.', 2], AZM:['AZM', 'AZM', 130], AZN:['AZN', 'man.', 2], BAD:['BAD', 'BAD', 130], BAM:['BAM', 'KM', 2], BAN:['BAN', 'BAN', 130], BBD:['BBD', 'Bds$', 2], BDT:['BDT', 'Tk', 2, 'Tk'], BEC:['BEC', 'BEC', 2], BEF:['BEF', 'BF', 130], BEL:['BEL', 'BEL', 2], BGL:['BGL', 'BGL', 130], BGM:['BGM', 'BGM', 130], BGN:['BGN', 'BGN', 2], BGO:['BGO', 'BGO', 130], BHD:['BHD', 'BD', 3], BIF:['BIF', 'FBu', 0], BMD:['BMD', 'BD$', 2], BND:['BND', 'BN$', 2], BOB:['BOB', 'Bs', 2], BOL:['BOL', 'BOL', 130], BOP:['BOP', '$b.', 130], BOV:['BOV', 'BOV', 2], BRB:['BRB', 'BRB', 130], BRC:['BRC', 'BRC', 130], BRE:['BRE', 'BRE', 130], BRL:['BRL', 'R$', 2, 'R$'], BRN:['BRN', 'BRN', 130], BRR:['BRR', 'BRR', 130], BRZ:['BRZ', 'BRZ', 130], BSD:['BSD', 'BS$', 2], BTN:['BTN', 'Nu.', 2], BUK:['BUK', 'BUK', 130], BWP:['BWP', 'BWP', 2], BYB:['BYB', 'BYB', 130], BYR:['BYR', 'BYR', 0], BZD:['BZD', '$', 2], CAD:['CAD', 'CA$', 2, 'C$'], CDF:['CDF', 'CDF', 2], CHE:['CHE', 'CHE', 2], CHF:['CHF', 'Fr.', 2, 'CHF'], CHW:['CHW', 'CHW', 2], CLE:['CLE', 'E\xBA', 130], CLF:['CLF', 'CLF', 0], CLP:['CLP', 'CL$', 0, 'CL$'], CNY:['CNY', 'CN\xA5', 2, 'RMB\xA5'], COP:['COP', 'CO$', 0, 'COL$'], COU:['COU', 'COU', 2], CRC:['CRC', '\u20A1', 0, 'CR\u20A1'], CSD:['CSD', 'CSD', 130], CSK:['CSK', 'CSK', 130], CUC:['CUC', 'CUC$', 2], CUP:['CUP', 'CU$', 2, '$MN'], CVE:['CVE', 'CV$', 2], CYP:['CYP', 'CY\xA3', 130], CZK:['CZK', 'K\u010D', 2, 'K\u010D'], DDM:['DDM', 'DDM', 130], DEM:['DEM', 'DM', 130], DJF:['DJF', 'Fdj', 0], DKK:['DKK', 'Dkr', 2, 'kr'], DOP:['DOP', 'RD$', 2, 'RD$'], DZD:['DZD', 'DA', 2], ECS:['ECS', 'ECS', 130], ECV:['ECV', 'ECV', 2], EEK:['EEK', 'Ekr', 2], EGP:['EGP', 'EG\xA3', 2, 'LE'], EQE:['EQE', 'EQE', 130], ERN:['ERN', 'Nfk', 2], ESA:['ESA', 'ESA', 2], ESB:['ESB', 'ESB', 2], ESP:['ESP', 'Pts', 128], ETB:['ETB', 'Br', 2], EUR:['EUR', '\u20AC', 2, '\u20AC'], FIM:['FIM', 'mk', 130], FJD:['FJD', 'FJ$', 2], FKP:['FKP', 'FK\xA3', 2], FRF:['FRF', '\u20A3', 130], GBP:['GBP', '\xA3', 2, 'GB\xA3'], GEK:['GEK', 'GEK', 130], GEL:['GEL', 'GEL', 2], GHC:['GHC', '\u20B5', 130], GHS:['GHS', 'GH\u20B5', 2], GIP:['GIP', 'GI\xA3', 2], GMD:['GMD', 'GMD', 2], GNF:['GNF', 'FG', 0], GNS:['GNS', 'GNS', 130], GQE:['GQE', 'GQE', 130], GRD:['GRD', '\u20AF', 130], GTQ:['GTQ', 'GTQ', 2], GWE:['GWE', 'GWE', 130], GWP:['GWP', 'GWP', 2], GYD:['GYD', 'GY$', 0], HKD:['HKD', 'HK$', 2, 'HK$'], HNL:['HNL', 'HNL', 2], HRD:['HRD', 'HRD', 130], HRK:['HRK', 'kn', 2], HTG:['HTG', 'HTG', 2], HUF:['HUF', 'Ft', 0], IDR:['IDR', 'Rp', 0], IEP:['IEP', 'IR\xA3', 130], ILP:['ILP', 'I\xA3', 130], ILR:['ILR', 'ILR', 130], ILS:['ILS', '\u20AA', 2, 'IL\u20AA'], INR:['INR', 'Rs', 2, 'Rs'], IQD:['IQD', 'IQD', 0], IRR:['IRR', 'IRR', 0], ISJ:['ISJ', 'ISJ', 130], ISK:['ISK', 'Ikr', 0, 'kr'], ITL:['ITL', 'IT\u20A4', 128], JMD:['JMD', 'J$', 2, 'JA$'], JOD:['JOD', 'JD', 3], JPY:['JPY', '\xA5', 0, 'JP\xA5'], KES:['KES', 'Ksh', 2], KGS:['KGS', 'KGS', 2], KHR:['KHR', 'KHR', 2], KMF:['KMF', 'CF', 0], KPW:['KPW', 'KPW', 0], KRH:['KRH', 'KRH', 130], KRO:['KRO', 'KRO', 130], KRW:['KRW', '\u20A9', 0, 'KR\u20A9'], KWD:['KWD', 'KD', 3], KYD:['KYD', 'KY$', 2], KZT:['KZT', 'KZT', 2], LAK:['LAK', '\u20AD', 0], LBP:['LBP', 'LB\xA3', 0], LKR:['LKR', 'SLRs', 2, 'SLRs'], LRD:['LRD', 'L$', 2], LSL:['LSL', 'LSL', 2], LSM:['LSM', 'LSM', 130], LTL:['LTL', 'Lt', 2], LTT:['LTT', 'LTT', 130], LUC:['LUC', 'LUC', 2], LUF:['LUF', 'LUF', 128], LUL:['LUL', 'LUL', 2], LVL:['LVL', 'Ls', 2], LVR:['LVR', 'LVR', 130], LYD:['LYD', 'LD', 3], MAD:['MAD', 'MAD', 2], MAF:['MAF', 'MAF', 130], MCF:['MCF', 'MCF', 130], MDC:['MDC', 'MDC', 130], MDL:['MDL', 'MDL', 2], MGA:['MGA', 'MGA', 0], MGF:['MGF', 'MGF', 128], MKD:['MKD', 'MKD', 2], MKN:['MKN', 'MKN', 130], MLF:['MLF', 'MLF', 130], MMK:['MMK', 'MMK', 0], MNT:['MNT', '\u20AE', 0, 'MN\u20AE'], MOP:['MOP', 'MOP$', 2], MRO:['MRO', 'UM', 0], MTL:['MTL', 'Lm', 130], MTP:['MTP', 'MT\xA3', 130], MUR:['MUR', 'MURs', 0], MVP:['MVP', 'MVP', 130], MVR:['MVR', 'MVR', 2], MWK:['MWK', 'MWK', 2], MXN:['MXN', 'Mex$', 2, 'Mex$'], MXP:['MXP', 'MX$', 130], MXV:['MXV', 'MXV', 2], MYR:['MYR', 'RM', 2, 'RM'], MZE:['MZE', 'MZE', 130], MZM:['MZM', 'Mt', 130], MZN:['MZN', 'MTn', 2], NAD:['NAD', 'N$', 2], NGN:['NGN', '\u20A6', 2], NIC:['NIC', 'NIC', 130], NIO:['NIO', 'C$', 2], NLG:['NLG', 'fl', 130], NOK:['NOK', 'Nkr', 2, 'NOkr'], NPR:['NPR', 'NPRs', 2], NZD:['NZD', 'NZ$', 2], OMR:['OMR', 'OMR', 3], PAB:['PAB', 'B/.', 2, 'B/.'], PEI:['PEI', 'I/.', 130], PEN:['PEN', 'S/.', 2, 'S/.'], PES:['PES', 'PES', 130], PGK:['PGK', 'PGK', 2], PHP:['PHP', '\u20B1', 2, 'PHP'], PKR:['PKR', 'PKRs', 0, 'PKRs.'], PLN:['PLN', 'z\u0142', 2], PLZ:['PLZ', 'PLZ', 130], PTE:['PTE', 'Esc', 130], PYG:['PYG', '\u20B2', 0], QAR:['QAR', 'QR', 2], RHD:['RHD', 'RH$', 130], ROL:['ROL', 'ROL', 130], RON:['RON', 'RON', 2], RSD:['RSD', 'din.', 0], RUB:['RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'], RUR:['RUR', 'RUR', 130], RWF:['RWF', 'RWF', 0], SAR:['SAR', 'SR', 2, 'SR'], SBD:['SBD', 'SI$', 2], SCR:['SCR', 'SRe', 2], SDD:['SDD', 'LSd', 130], SDG:['SDG', 'SDG', 2], SDP:['SDP', 'SDP', 130], SEK:['SEK', 'Skr', 2, 'kr'], SGD:['SGD', 'S$', 2, 'S$'], SHP:['SHP', 'SH\xA3', 2], SIT:['SIT', 'SIT', 130], SKK:['SKK', 'Sk', 130], SLL:['SLL', 'Le', 0], SOS:['SOS', 'Ssh', 0], SRD:['SRD', 'SR$', 2], SRG:['SRG', 'Sf', 130], STD:['STD', 'Db', 0], SUR:['SUR', 'SUR', 130], SVC:['SVC', 'SV\u20A1', 130], SYP:['SYP', 'SY\xA3', 0], SZL:['SZL', 'SZL', 2], THB:['THB', '\u0E3F', 2, 'THB'], TJR:['TJR', 'TJR', 130], TJS:['TJS', 'TJS', 2], TMM:['TMM', 'TMM', 128], TMT:['TMT', 'TMT', 2], TND:['TND', 'DT', 3], TOP:['TOP', 'T$', 2], TPE:['TPE', 'TPE', 130], TRL:['TRL', 'TRL', 128], TRY:['TRY', 'TL', 2, 'YTL'], TTD:['TTD', 'TT$', 2], TWD:['TWD', 'NT$', 2, 'NT$'], TZS:['TZS', 'TSh', 0], UAH:['UAH', '\u20B4', 2], UAK:['UAK', 'UAK', 130], UGS:['UGS', 'UGS', 130], UGX:['UGX', 'USh', 0], USD:['USD', 'US$', 2, 'US$'], USN:['USN', 'USN', 2], USS:['USS', 'USS', 2], UYI:['UYI', 'UYI', 2], UYP:['UYP', 'UYP', 130], UYU:['UYU', '$U', 2, 'UY$'], UZS:['UZS', 'UZS', 0], VEB:['VEB', 'VEB', 130], VEF:['VEF', 'Bs.F.', 2], VND:['VND', '\u20AB', 24, '\u20AB'], VNN:['VNN', 'VNN', 130], VUV:['VUV', 'VT', 0], WST:['WST', 'WS$', 2], XAF:['XAF', 'FCFA', 0], XAG:['XAG', 'XAG', 2], XAU:['XAU', 'XAU', 2], XBA:['XBA', 'XBA', 2], XBB:['XBB', 'XBB', 2], XBC:['XBC', 'XBC', 2], XBD:['XBD', 'XBD', 2], XCD:['XCD', 'EC$', 2], XDR:['XDR', 'XDR', 2], XEU:['XEU', 'XEU', 2], XFO:['XFO', 'XFO', 2], XFU:['XFU', 'XFU', 2], XOF:['XOF', 'CFA', 0], XPD:['XPD', 'XPD', 2], XPF:['XPF', 'CFPF', 0], XPT:['XPT', 'XPT', 2], XRE:['XRE', 'XRE', 2], XTS:['XTS', 'XTS', 2], XXX:['XXX', 'XXX', 2], YDD:['YDD', 'YDD', 130], YER:['YER', 'YR', 0, 'YER'], YUD:['YUD', 'YUD', 130], YUM:['YUM', 'YUM', 130], YUN:['YUN', 'YUN', 130], YUR:['YUR', 'YUR', 130], ZAL:['ZAL', 'ZAL', 2], ZAR:['ZAR', 'R', 2, 'ZAR'], ZMK:['ZMK', 'ZK', 0], ZRN:['ZRN', 'NZ', 130], ZRZ:['ZRZ', 'ZRZ', 130], ZWD:['ZWD', 'Z$', 128], ZWL:['ZWL', 'ZWL', 2], ZWR:['ZWR', 'ZWR', 130]};
}

function CurrencyList_en_BZ_0(){
  CurrencyList_en_0.call(this);
  $$init_129();
}

function CurrencyList_en_BZ(){
}

_ = CurrencyList_en_BZ_0.prototype = CurrencyList_en_BZ.prototype = new CurrencyList_en;
_.getClass$ = function getClass_130(){
  return Lcom_google_gwt_i18n_client_CurrencyList_1en_1BZ_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava_5(){
  return new CurrencyDataImpl_0('BZD', '$', 2);
}
;
_.getDefaultNative = function getDefaultNative_5(){
  return ['BZD', '$', 2];
}
;
_.loadCurrencyMapJava = function loadCurrencyMapJava_5(){
  var result;
  result = $loadCurrencyMapJava_1(this);
  $put_1(result, 'ADP', new CurrencyDataImpl_0('ADP', 'ADP', 128));
  $put_1(result, 'AED', new CurrencyDataImpl_1('AED', 'DH', 2, 'DH'));
  $put_1(result, 'AFA', new CurrencyDataImpl_0('AFA', 'AFA', 130));
  $put_1(result, 'AFN', new CurrencyDataImpl_0('AFN', 'Af', 0));
  $put_1(result, 'ALL', new CurrencyDataImpl_0('ALL', 'ALL', 0));
  $put_1(result, 'AMD', new CurrencyDataImpl_0('AMD', 'AMD', 0));
  $put_1(result, 'ANG', new CurrencyDataImpl_0('ANG', 'NAf.', 2));
  $put_1(result, 'AOA', new CurrencyDataImpl_0('AOA', 'Kz', 2));
  $put_1(result, 'AOK', new CurrencyDataImpl_0('AOK', 'AOK', 130));
  $put_1(result, 'AON', new CurrencyDataImpl_0('AON', 'AON', 130));
  $put_1(result, 'AOR', new CurrencyDataImpl_0('AOR', 'AOR', 130));
  $put_1(result, 'ARA', new CurrencyDataImpl_0('ARA', '\u20B3', 130));
  $put_1(result, 'ARL', new CurrencyDataImpl_0('ARL', '$L', 130));
  $put_1(result, 'ARM', new CurrencyDataImpl_0('ARM', 'm$n', 130));
  $put_1(result, 'ARP', new CurrencyDataImpl_0('ARP', 'ARP', 130));
  $put_1(result, 'ARS', new CurrencyDataImpl_1('ARS', 'AR$', 2, 'AR$'));
  $put_1(result, 'ATS', new CurrencyDataImpl_0('ATS', 'ATS', 130));
  $put_1(result, 'AUD', new CurrencyDataImpl_1('AUD', 'AU$', 2, 'AU$'));
  $put_1(result, 'AWG', new CurrencyDataImpl_0('AWG', 'Afl.', 2));
  $put_1(result, 'AZM', new CurrencyDataImpl_0('AZM', 'AZM', 130));
  $put_1(result, 'AZN', new CurrencyDataImpl_0('AZN', 'man.', 2));
  $put_1(result, 'BAD', new CurrencyDataImpl_0('BAD', 'BAD', 130));
  $put_1(result, 'BAM', new CurrencyDataImpl_0('BAM', 'KM', 2));
  $put_1(result, 'BAN', new CurrencyDataImpl_0('BAN', 'BAN', 130));
  $put_1(result, 'BBD', new CurrencyDataImpl_0('BBD', 'Bds$', 2));
  $put_1(result, 'BDT', new CurrencyDataImpl_1('BDT', 'Tk', 2, 'Tk'));
  $put_1(result, 'BEC', new CurrencyDataImpl_0('BEC', 'BEC', 2));
  $put_1(result, 'BEF', new CurrencyDataImpl_0('BEF', 'BF', 130));
  $put_1(result, 'BEL', new CurrencyDataImpl_0('BEL', 'BEL', 2));
  $put_1(result, 'BGL', new CurrencyDataImpl_0('BGL', 'BGL', 130));
  $put_1(result, 'BGM', new CurrencyDataImpl_0('BGM', 'BGM', 130));
  $put_1(result, 'BGN', new CurrencyDataImpl_0('BGN', 'BGN', 2));
  $put_1(result, 'BGO', new CurrencyDataImpl_0('BGO', 'BGO', 130));
  $put_1(result, 'BHD', new CurrencyDataImpl_0('BHD', 'BD', 3));
  $put_1(result, 'BIF', new CurrencyDataImpl_0('BIF', 'FBu', 0));
  $put_1(result, 'BMD', new CurrencyDataImpl_0('BMD', 'BD$', 2));
  $put_1(result, 'BND', new CurrencyDataImpl_0('BND', 'BN$', 2));
  $put_1(result, 'BOB', new CurrencyDataImpl_0('BOB', 'Bs', 2));
  $put_1(result, 'BOL', new CurrencyDataImpl_0('BOL', 'BOL', 130));
  $put_1(result, 'BOP', new CurrencyDataImpl_0('BOP', '$b.', 130));
  $put_1(result, 'BOV', new CurrencyDataImpl_0('BOV', 'BOV', 2));
  $put_1(result, 'BRB', new CurrencyDataImpl_0('BRB', 'BRB', 130));
  $put_1(result, 'BRC', new CurrencyDataImpl_0('BRC', 'BRC', 130));
  $put_1(result, 'BRE', new CurrencyDataImpl_0('BRE', 'BRE', 130));
  $put_1(result, 'BRL', new CurrencyDataImpl_1('BRL', 'R$', 2, 'R$'));
  $put_1(result, 'BRN', new CurrencyDataImpl_0('BRN', 'BRN', 130));
  $put_1(result, 'BRR', new CurrencyDataImpl_0('BRR', 'BRR', 130));
  $put_1(result, 'BRZ', new CurrencyDataImpl_0('BRZ', 'BRZ', 130));
  $put_1(result, 'BSD', new CurrencyDataImpl_0('BSD', 'BS$', 2));
  $put_1(result, 'BTN', new CurrencyDataImpl_0('BTN', 'Nu.', 2));
  $put_1(result, 'BUK', new CurrencyDataImpl_0('BUK', 'BUK', 130));
  $put_1(result, 'BWP', new CurrencyDataImpl_0('BWP', 'BWP', 2));
  $put_1(result, 'BYB', new CurrencyDataImpl_0('BYB', 'BYB', 130));
  $put_1(result, 'BYR', new CurrencyDataImpl_0('BYR', 'BYR', 0));
  $put_1(result, 'BZD', new CurrencyDataImpl_0('BZD', '$', 2));
  $put_1(result, 'CAD', new CurrencyDataImpl_1('CAD', 'CA$', 2, 'C$'));
  $put_1(result, 'CDF', new CurrencyDataImpl_0('CDF', 'CDF', 2));
  $put_1(result, 'CHE', new CurrencyDataImpl_0('CHE', 'CHE', 2));
  $put_1(result, 'CHF', new CurrencyDataImpl_1('CHF', 'Fr.', 2, 'CHF'));
  $put_1(result, 'CHW', new CurrencyDataImpl_0('CHW', 'CHW', 2));
  $put_1(result, 'CLE', new CurrencyDataImpl_0('CLE', 'E\xBA', 130));
  $put_1(result, 'CLF', new CurrencyDataImpl_0('CLF', 'CLF', 0));
  $put_1(result, 'CLP', new CurrencyDataImpl_1('CLP', 'CL$', 0, 'CL$'));
  $put_1(result, 'CNY', new CurrencyDataImpl_1('CNY', 'CN\xA5', 2, 'RMB\xA5'));
  $put_1(result, 'COP', new CurrencyDataImpl_1('COP', 'CO$', 0, 'COL$'));
  $put_1(result, 'COU', new CurrencyDataImpl_0('COU', 'COU', 2));
  $put_1(result, 'CRC', new CurrencyDataImpl_1('CRC', '\u20A1', 0, 'CR\u20A1'));
  $put_1(result, 'CSD', new CurrencyDataImpl_0('CSD', 'CSD', 130));
  $put_1(result, 'CSK', new CurrencyDataImpl_0('CSK', 'CSK', 130));
  $put_1(result, 'CUC', new CurrencyDataImpl_0('CUC', 'CUC$', 2));
  $put_1(result, 'CUP', new CurrencyDataImpl_1('CUP', 'CU$', 2, '$MN'));
  $put_1(result, 'CVE', new CurrencyDataImpl_0('CVE', 'CV$', 2));
  $put_1(result, 'CYP', new CurrencyDataImpl_0('CYP', 'CY\xA3', 130));
  $put_1(result, 'CZK', new CurrencyDataImpl_1('CZK', 'K\u010D', 2, 'K\u010D'));
  $put_1(result, 'DDM', new CurrencyDataImpl_0('DDM', 'DDM', 130));
  $put_1(result, 'DEM', new CurrencyDataImpl_0('DEM', 'DM', 130));
  $put_1(result, 'DJF', new CurrencyDataImpl_0('DJF', 'Fdj', 0));
  $put_1(result, 'DKK', new CurrencyDataImpl_1('DKK', 'Dkr', 2, 'kr'));
  $put_1(result, 'DOP', new CurrencyDataImpl_1('DOP', 'RD$', 2, 'RD$'));
  $put_1(result, 'DZD', new CurrencyDataImpl_0('DZD', 'DA', 2));
  $put_1(result, 'ECS', new CurrencyDataImpl_0('ECS', 'ECS', 130));
  $put_1(result, 'ECV', new CurrencyDataImpl_0('ECV', 'ECV', 2));
  $put_1(result, 'EEK', new CurrencyDataImpl_0('EEK', 'Ekr', 2));
  $put_1(result, 'EGP', new CurrencyDataImpl_1('EGP', 'EG\xA3', 2, 'LE'));
  $put_1(result, 'EQE', new CurrencyDataImpl_0('EQE', 'EQE', 130));
  $put_1(result, 'ERN', new CurrencyDataImpl_0('ERN', 'Nfk', 2));
  $put_1(result, 'ESA', new CurrencyDataImpl_0('ESA', 'ESA', 2));
  $put_1(result, 'ESB', new CurrencyDataImpl_0('ESB', 'ESB', 2));
  $put_1(result, 'ESP', new CurrencyDataImpl_0('ESP', 'Pts', 128));
  $put_1(result, 'ETB', new CurrencyDataImpl_0('ETB', 'Br', 2));
  $put_1(result, 'EUR', new CurrencyDataImpl_1('EUR', '\u20AC', 2, '\u20AC'));
  $put_1(result, 'FIM', new CurrencyDataImpl_0('FIM', 'mk', 130));
  $put_1(result, 'FJD', new CurrencyDataImpl_0('FJD', 'FJ$', 2));
  $put_1(result, 'FKP', new CurrencyDataImpl_0('FKP', 'FK\xA3', 2));
  $put_1(result, 'FRF', new CurrencyDataImpl_0('FRF', '\u20A3', 130));
  $put_1(result, 'GBP', new CurrencyDataImpl_1('GBP', '\xA3', 2, 'GB\xA3'));
  $put_1(result, 'GEK', new CurrencyDataImpl_0('GEK', 'GEK', 130));
  $put_1(result, 'GEL', new CurrencyDataImpl_0('GEL', 'GEL', 2));
  $put_1(result, 'GHC', new CurrencyDataImpl_0('GHC', '\u20B5', 130));
  $put_1(result, 'GHS', new CurrencyDataImpl_0('GHS', 'GH\u20B5', 2));
  $put_1(result, 'GIP', new CurrencyDataImpl_0('GIP', 'GI\xA3', 2));
  $put_1(result, 'GMD', new CurrencyDataImpl_0('GMD', 'GMD', 2));
  $put_1(result, 'GNF', new CurrencyDataImpl_0('GNF', 'FG', 0));
  $put_1(result, 'GNS', new CurrencyDataImpl_0('GNS', 'GNS', 130));
  $put_1(result, 'GQE', new CurrencyDataImpl_0('GQE', 'GQE', 130));
  $put_1(result, 'GRD', new CurrencyDataImpl_0('GRD', '\u20AF', 130));
  $put_1(result, 'GTQ', new CurrencyDataImpl_0('GTQ', 'GTQ', 2));
  $put_1(result, 'GWE', new CurrencyDataImpl_0('GWE', 'GWE', 130));
  $put_1(result, 'GWP', new CurrencyDataImpl_0('GWP', 'GWP', 2));
  $put_1(result, 'GYD', new CurrencyDataImpl_0('GYD', 'GY$', 0));
  $put_1(result, 'HKD', new CurrencyDataImpl_1('HKD', 'HK$', 2, 'HK$'));
  $put_1(result, 'HNL', new CurrencyDataImpl_0('HNL', 'HNL', 2));
  $put_1(result, 'HRD', new CurrencyDataImpl_0('HRD', 'HRD', 130));
  $put_1(result, 'HRK', new CurrencyDataImpl_0('HRK', 'kn', 2));
  $put_1(result, 'HTG', new CurrencyDataImpl_0('HTG', 'HTG', 2));
  $put_1(result, 'HUF', new CurrencyDataImpl_0('HUF', 'Ft', 0));
  $put_1(result, 'IDR', new CurrencyDataImpl_0('IDR', 'Rp', 0));
  $put_1(result, 'IEP', new CurrencyDataImpl_0('IEP', 'IR\xA3', 130));
  $put_1(result, 'ILP', new CurrencyDataImpl_0('ILP', 'I\xA3', 130));
  $put_1(result, 'ILR', new CurrencyDataImpl_0('ILR', 'ILR', 130));
  $put_1(result, 'ILS', new CurrencyDataImpl_1('ILS', '\u20AA', 2, 'IL\u20AA'));
  $put_1(result, 'INR', new CurrencyDataImpl_1('INR', 'Rs', 2, 'Rs'));
  $put_1(result, 'IQD', new CurrencyDataImpl_0('IQD', 'IQD', 0));
  $put_1(result, 'IRR', new CurrencyDataImpl_0('IRR', 'IRR', 0));
  $put_1(result, 'ISJ', new CurrencyDataImpl_0('ISJ', 'ISJ', 130));
  $put_1(result, 'ISK', new CurrencyDataImpl_1('ISK', 'Ikr', 0, 'kr'));
  $put_1(result, 'ITL', new CurrencyDataImpl_0('ITL', 'IT\u20A4', 128));
  $put_1(result, 'JMD', new CurrencyDataImpl_1('JMD', 'J$', 2, 'JA$'));
  $put_1(result, 'JOD', new CurrencyDataImpl_0('JOD', 'JD', 3));
  $put_1(result, 'JPY', new CurrencyDataImpl_1('JPY', '\xA5', 0, 'JP\xA5'));
  $put_1(result, 'KES', new CurrencyDataImpl_0('KES', 'Ksh', 2));
  $put_1(result, 'KGS', new CurrencyDataImpl_0('KGS', 'KGS', 2));
  $put_1(result, 'KHR', new CurrencyDataImpl_0('KHR', 'KHR', 2));
  $put_1(result, 'KMF', new CurrencyDataImpl_0('KMF', 'CF', 0));
  $put_1(result, 'KPW', new CurrencyDataImpl_0('KPW', 'KPW', 0));
  $put_1(result, 'KRH', new CurrencyDataImpl_0('KRH', 'KRH', 130));
  $put_1(result, 'KRO', new CurrencyDataImpl_0('KRO', 'KRO', 130));
  $put_1(result, 'KRW', new CurrencyDataImpl_1('KRW', '\u20A9', 0, 'KR\u20A9'));
  $put_1(result, 'KWD', new CurrencyDataImpl_0('KWD', 'KD', 3));
  $put_1(result, 'KYD', new CurrencyDataImpl_0('KYD', 'KY$', 2));
  $put_1(result, 'KZT', new CurrencyDataImpl_0('KZT', 'KZT', 2));
  $put_1(result, 'LAK', new CurrencyDataImpl_0('LAK', '\u20AD', 0));
  $put_1(result, 'LBP', new CurrencyDataImpl_0('LBP', 'LB\xA3', 0));
  $put_1(result, 'LKR', new CurrencyDataImpl_1('LKR', 'SLRs', 2, 'SLRs'));
  $put_1(result, 'LRD', new CurrencyDataImpl_0('LRD', 'L$', 2));
  $put_1(result, 'LSL', new CurrencyDataImpl_0('LSL', 'LSL', 2));
  $put_1(result, 'LSM', new CurrencyDataImpl_0('LSM', 'LSM', 130));
  $put_1(result, 'LTL', new CurrencyDataImpl_0('LTL', 'Lt', 2));
  $put_1(result, 'LTT', new CurrencyDataImpl_0('LTT', 'LTT', 130));
  $put_1(result, 'LUC', new CurrencyDataImpl_0('LUC', 'LUC', 2));
  $put_1(result, 'LUF', new CurrencyDataImpl_0('LUF', 'LUF', 128));
  $put_1(result, 'LUL', new CurrencyDataImpl_0('LUL', 'LUL', 2));
  $put_1(result, 'LVL', new CurrencyDataImpl_0('LVL', 'Ls', 2));
  $put_1(result, 'LVR', new CurrencyDataImpl_0('LVR', 'LVR', 130));
  $put_1(result, 'LYD', new CurrencyDataImpl_0('LYD', 'LD', 3));
  $put_1(result, 'MAD', new CurrencyDataImpl_0('MAD', 'MAD', 2));
  $put_1(result, 'MAF', new CurrencyDataImpl_0('MAF', 'MAF', 130));
  $put_1(result, 'MCF', new CurrencyDataImpl_0('MCF', 'MCF', 130));
  $put_1(result, 'MDC', new CurrencyDataImpl_0('MDC', 'MDC', 130));
  $put_1(result, 'MDL', new CurrencyDataImpl_0('MDL', 'MDL', 2));
  $put_1(result, 'MGA', new CurrencyDataImpl_0('MGA', 'MGA', 0));
  $put_1(result, 'MGF', new CurrencyDataImpl_0('MGF', 'MGF', 128));
  $put_1(result, 'MKD', new CurrencyDataImpl_0('MKD', 'MKD', 2));
  $put_1(result, 'MKN', new CurrencyDataImpl_0('MKN', 'MKN', 130));
  $put_1(result, 'MLF', new CurrencyDataImpl_0('MLF', 'MLF', 130));
  $put_1(result, 'MMK', new CurrencyDataImpl_0('MMK', 'MMK', 0));
  $put_1(result, 'MNT', new CurrencyDataImpl_1('MNT', '\u20AE', 0, 'MN\u20AE'));
  $put_1(result, 'MOP', new CurrencyDataImpl_0('MOP', 'MOP$', 2));
  $put_1(result, 'MRO', new CurrencyDataImpl_0('MRO', 'UM', 0));
  $put_1(result, 'MTL', new CurrencyDataImpl_0('MTL', 'Lm', 130));
  $put_1(result, 'MTP', new CurrencyDataImpl_0('MTP', 'MT\xA3', 130));
  $put_1(result, 'MUR', new CurrencyDataImpl_0('MUR', 'MURs', 0));
  $put_1(result, 'MVP', new CurrencyDataImpl_0('MVP', 'MVP', 130));
  $put_1(result, 'MVR', new CurrencyDataImpl_0('MVR', 'MVR', 2));
  $put_1(result, 'MWK', new CurrencyDataImpl_0('MWK', 'MWK', 2));
  $put_1(result, 'MXN', new CurrencyDataImpl_1('MXN', 'Mex$', 2, 'Mex$'));
  $put_1(result, 'MXP', new CurrencyDataImpl_0('MXP', 'MX$', 130));
  $put_1(result, 'MXV', new CurrencyDataImpl_0('MXV', 'MXV', 2));
  $put_1(result, 'MYR', new CurrencyDataImpl_1('MYR', 'RM', 2, 'RM'));
  $put_1(result, 'MZE', new CurrencyDataImpl_0('MZE', 'MZE', 130));
  $put_1(result, 'MZM', new CurrencyDataImpl_0('MZM', 'Mt', 130));
  $put_1(result, 'MZN', new CurrencyDataImpl_0('MZN', 'MTn', 2));
  $put_1(result, 'NAD', new CurrencyDataImpl_0('NAD', 'N$', 2));
  $put_1(result, 'NGN', new CurrencyDataImpl_0('NGN', '\u20A6', 2));
  $put_1(result, 'NIC', new CurrencyDataImpl_0('NIC', 'NIC', 130));
  $put_1(result, 'NIO', new CurrencyDataImpl_0('NIO', 'C$', 2));
  $put_1(result, 'NLG', new CurrencyDataImpl_0('NLG', 'fl', 130));
  $put_1(result, 'NOK', new CurrencyDataImpl_1('NOK', 'Nkr', 2, 'NOkr'));
  $put_1(result, 'NPR', new CurrencyDataImpl_0('NPR', 'NPRs', 2));
  $put_1(result, 'NZD', new CurrencyDataImpl_0('NZD', 'NZ$', 2));
  $put_1(result, 'OMR', new CurrencyDataImpl_0('OMR', 'OMR', 3));
  $put_1(result, 'PAB', new CurrencyDataImpl_1('PAB', 'B/.', 2, 'B/.'));
  $put_1(result, 'PEI', new CurrencyDataImpl_0('PEI', 'I/.', 130));
  $put_1(result, 'PEN', new CurrencyDataImpl_1('PEN', 'S/.', 2, 'S/.'));
  $put_1(result, 'PES', new CurrencyDataImpl_0('PES', 'PES', 130));
  $put_1(result, 'PGK', new CurrencyDataImpl_0('PGK', 'PGK', 2));
  $put_1(result, 'PHP', new CurrencyDataImpl_1('PHP', '\u20B1', 2, 'PHP'));
  $put_1(result, 'PKR', new CurrencyDataImpl_1('PKR', 'PKRs', 0, 'PKRs.'));
  $put_1(result, 'PLN', new CurrencyDataImpl_0('PLN', 'z\u0142', 2));
  $put_1(result, 'PLZ', new CurrencyDataImpl_0('PLZ', 'PLZ', 130));
  $put_1(result, 'PTE', new CurrencyDataImpl_0('PTE', 'Esc', 130));
  $put_1(result, 'PYG', new CurrencyDataImpl_0('PYG', '\u20B2', 0));
  $put_1(result, 'QAR', new CurrencyDataImpl_0('QAR', 'QR', 2));
  $put_1(result, 'RHD', new CurrencyDataImpl_0('RHD', 'RH$', 130));
  $put_1(result, 'ROL', new CurrencyDataImpl_0('ROL', 'ROL', 130));
  $put_1(result, 'RON', new CurrencyDataImpl_0('RON', 'RON', 2));
  $put_1(result, 'RSD', new CurrencyDataImpl_0('RSD', 'din.', 0));
  $put_1(result, 'RUB', new CurrencyDataImpl_1('RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'));
  $put_1(result, 'RUR', new CurrencyDataImpl_0('RUR', 'RUR', 130));
  $put_1(result, 'RWF', new CurrencyDataImpl_0('RWF', 'RWF', 0));
  $put_1(result, 'SAR', new CurrencyDataImpl_1('SAR', 'SR', 2, 'SR'));
  $put_1(result, 'SBD', new CurrencyDataImpl_0('SBD', 'SI$', 2));
  $put_1(result, 'SCR', new CurrencyDataImpl_0('SCR', 'SRe', 2));
  $put_1(result, 'SDD', new CurrencyDataImpl_0('SDD', 'LSd', 130));
  $put_1(result, 'SDG', new CurrencyDataImpl_0('SDG', 'SDG', 2));
  $put_1(result, 'SDP', new CurrencyDataImpl_0('SDP', 'SDP', 130));
  $put_1(result, 'SEK', new CurrencyDataImpl_1('SEK', 'Skr', 2, 'kr'));
  $put_1(result, 'SGD', new CurrencyDataImpl_1('SGD', 'S$', 2, 'S$'));
  $put_1(result, 'SHP', new CurrencyDataImpl_0('SHP', 'SH\xA3', 2));
  $put_1(result, 'SIT', new CurrencyDataImpl_0('SIT', 'SIT', 130));
  $put_1(result, 'SKK', new CurrencyDataImpl_0('SKK', 'Sk', 130));
  $put_1(result, 'SLL', new CurrencyDataImpl_0('SLL', 'Le', 0));
  $put_1(result, 'SOS', new CurrencyDataImpl_0('SOS', 'Ssh', 0));
  $put_1(result, 'SRD', new CurrencyDataImpl_0('SRD', 'SR$', 2));
  $put_1(result, 'SRG', new CurrencyDataImpl_0('SRG', 'Sf', 130));
  $put_1(result, 'STD', new CurrencyDataImpl_0('STD', 'Db', 0));
  $put_1(result, 'SUR', new CurrencyDataImpl_0('SUR', 'SUR', 130));
  $put_1(result, 'SVC', new CurrencyDataImpl_0('SVC', 'SV\u20A1', 130));
  $put_1(result, 'SYP', new CurrencyDataImpl_0('SYP', 'SY\xA3', 0));
  $put_1(result, 'SZL', new CurrencyDataImpl_0('SZL', 'SZL', 2));
  $put_1(result, 'THB', new CurrencyDataImpl_1('THB', '\u0E3F', 2, 'THB'));
  $put_1(result, 'TJR', new CurrencyDataImpl_0('TJR', 'TJR', 130));
  $put_1(result, 'TJS', new CurrencyDataImpl_0('TJS', 'TJS', 2));
  $put_1(result, 'TMM', new CurrencyDataImpl_0('TMM', 'TMM', 128));
  $put_1(result, 'TMT', new CurrencyDataImpl_0('TMT', 'TMT', 2));
  $put_1(result, 'TND', new CurrencyDataImpl_0('TND', 'DT', 3));
  $put_1(result, 'TOP', new CurrencyDataImpl_0('TOP', 'T$', 2));
  $put_1(result, 'TPE', new CurrencyDataImpl_0('TPE', 'TPE', 130));
  $put_1(result, 'TRL', new CurrencyDataImpl_0('TRL', 'TRL', 128));
  $put_1(result, 'TRY', new CurrencyDataImpl_1('TRY', 'TL', 2, 'YTL'));
  $put_1(result, 'TTD', new CurrencyDataImpl_0('TTD', 'TT$', 2));
  $put_1(result, 'TWD', new CurrencyDataImpl_1('TWD', 'NT$', 2, 'NT$'));
  $put_1(result, 'TZS', new CurrencyDataImpl_0('TZS', 'TSh', 0));
  $put_1(result, 'UAH', new CurrencyDataImpl_0('UAH', '\u20B4', 2));
  $put_1(result, 'UAK', new CurrencyDataImpl_0('UAK', 'UAK', 130));
  $put_1(result, 'UGS', new CurrencyDataImpl_0('UGS', 'UGS', 130));
  $put_1(result, 'UGX', new CurrencyDataImpl_0('UGX', 'USh', 0));
  $put_1(result, 'USD', new CurrencyDataImpl_1('USD', 'US$', 2, 'US$'));
  $put_1(result, 'USN', new CurrencyDataImpl_0('USN', 'USN', 2));
  $put_1(result, 'USS', new CurrencyDataImpl_0('USS', 'USS', 2));
  $put_1(result, 'UYI', new CurrencyDataImpl_0('UYI', 'UYI', 2));
  $put_1(result, 'UYP', new CurrencyDataImpl_0('UYP', 'UYP', 130));
  $put_1(result, 'UYU', new CurrencyDataImpl_1('UYU', '$U', 2, 'UY$'));
  $put_1(result, 'UZS', new CurrencyDataImpl_0('UZS', 'UZS', 0));
  $put_1(result, 'VEB', new CurrencyDataImpl_0('VEB', 'VEB', 130));
  $put_1(result, 'VEF', new CurrencyDataImpl_0('VEF', 'Bs.F.', 2));
  $put_1(result, 'VND', new CurrencyDataImpl_1('VND', '\u20AB', 24, '\u20AB'));
  $put_1(result, 'VNN', new CurrencyDataImpl_0('VNN', 'VNN', 130));
  $put_1(result, 'VUV', new CurrencyDataImpl_0('VUV', 'VT', 0));
  $put_1(result, 'WST', new CurrencyDataImpl_0('WST', 'WS$', 2));
  $put_1(result, 'XAF', new CurrencyDataImpl_0('XAF', 'FCFA', 0));
  $put_1(result, 'XAG', new CurrencyDataImpl_0('XAG', 'XAG', 2));
  $put_1(result, 'XAU', new CurrencyDataImpl_0('XAU', 'XAU', 2));
  $put_1(result, 'XBA', new CurrencyDataImpl_0('XBA', 'XBA', 2));
  $put_1(result, 'XBB', new CurrencyDataImpl_0('XBB', 'XBB', 2));
  $put_1(result, 'XBC', new CurrencyDataImpl_0('XBC', 'XBC', 2));
  $put_1(result, 'XBD', new CurrencyDataImpl_0('XBD', 'XBD', 2));
  $put_1(result, 'XCD', new CurrencyDataImpl_0('XCD', 'EC$', 2));
  $put_1(result, 'XDR', new CurrencyDataImpl_0('XDR', 'XDR', 2));
  $put_1(result, 'XEU', new CurrencyDataImpl_0('XEU', 'XEU', 2));
  $put_1(result, 'XFO', new CurrencyDataImpl_0('XFO', 'XFO', 2));
  $put_1(result, 'XFU', new CurrencyDataImpl_0('XFU', 'XFU', 2));
  $put_1(result, 'XOF', new CurrencyDataImpl_0('XOF', 'CFA', 0));
  $put_1(result, 'XPD', new CurrencyDataImpl_0('XPD', 'XPD', 2));
  $put_1(result, 'XPF', new CurrencyDataImpl_0('XPF', 'CFPF', 0));
  $put_1(result, 'XPT', new CurrencyDataImpl_0('XPT', 'XPT', 2));
  $put_1(result, 'XRE', new CurrencyDataImpl_0('XRE', 'XRE', 2));
  $put_1(result, 'XTS', new CurrencyDataImpl_0('XTS', 'XTS', 2));
  $put_1(result, 'XXX', new CurrencyDataImpl_0('XXX', 'XXX', 2));
  $put_1(result, 'YDD', new CurrencyDataImpl_0('YDD', 'YDD', 130));
  $put_1(result, 'YER', new CurrencyDataImpl_1('YER', 'YR', 0, 'YER'));
  $put_1(result, 'YUD', new CurrencyDataImpl_0('YUD', 'YUD', 130));
  $put_1(result, 'YUM', new CurrencyDataImpl_0('YUM', 'YUM', 130));
  $put_1(result, 'YUN', new CurrencyDataImpl_0('YUN', 'YUN', 130));
  $put_1(result, 'YUR', new CurrencyDataImpl_0('YUR', 'YUR', 130));
  $put_1(result, 'ZAL', new CurrencyDataImpl_0('ZAL', 'ZAL', 2));
  $put_1(result, 'ZAR', new CurrencyDataImpl_1('ZAR', 'R', 2, 'ZAR'));
  $put_1(result, 'ZMK', new CurrencyDataImpl_0('ZMK', 'ZK', 0));
  $put_1(result, 'ZRN', new CurrencyDataImpl_0('ZRN', 'NZ', 130));
  $put_1(result, 'ZRZ', new CurrencyDataImpl_0('ZRZ', 'ZRZ', 130));
  $put_1(result, 'ZWD', new CurrencyDataImpl_0('ZWD', 'Z$', 128));
  $put_1(result, 'ZWL', new CurrencyDataImpl_0('ZWL', 'ZWL', 2));
  $put_1(result, 'ZWR', new CurrencyDataImpl_0('ZWR', 'ZWR', 130));
  return result;
}
;
_.loadCurrencyMapNative = function loadCurrencyMapNative_5(){
  return overrideMap($loadCurrencyMapNative_1(this), $loadMyCurrencyMapOverridesNative_4());
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
function $$init_130(){
}

function $loadMyCurrencyMapOverridesNative_5(){
  return {ADP:['ADP', 'ADP', 128], AED:['AED', 'DH', 2, 'DH'], AFA:['AFA', 'AFA', 130], AFN:['AFN', 'Af', 0], ALL:['ALL', 'ALL', 0], AMD:['AMD', 'AMD', 0], ANG:['ANG', 'NAf.', 2], AOA:['AOA', 'Kz', 2], AOK:['AOK', 'AOK', 130], AON:['AON', 'AON', 130], AOR:['AOR', 'AOR', 130], ARA:['ARA', '\u20B3', 130], ARL:['ARL', '$L', 130], ARM:['ARM', 'm$n', 130], ARP:['ARP', 'ARP', 130], ARS:['ARS', 'AR$', 2, 'AR$'], ATS:['ATS', 'ATS', 130], AUD:['AUD', 'AU$', 2, 'AU$'], AWG:['AWG', 'Afl.', 2], AZM:['AZM', 'AZM', 130], AZN:['AZN', 'man.', 2], BAD:['BAD', 'BAD', 130], BAM:['BAM', 'KM', 2], BAN:['BAN', 'BAN', 130], BBD:['BBD', 'Bds$', 2], BDT:['BDT', 'Tk', 2, 'Tk'], BEC:['BEC', 'BEC', 2], BEF:['BEF', 'BF', 130], BEL:['BEL', 'BEL', 2], BGL:['BGL', 'BGL', 130], BGM:['BGM', 'BGM', 130], BGN:['BGN', 'BGN', 2], BGO:['BGO', 'BGO', 130], BHD:['BHD', 'BD', 3], BIF:['BIF', 'FBu', 0], BMD:['BMD', 'BD$', 2], BND:['BND', 'BN$', 2], BOB:['BOB', 'Bs', 2], BOL:['BOL', 'BOL', 130], BOP:['BOP', '$b.', 130], BOV:['BOV', 'BOV', 2], BRB:['BRB', 'BRB', 130], BRC:['BRC', 'BRC', 130], BRE:['BRE', 'BRE', 130], BRL:['BRL', 'R$', 2, 'R$'], BRN:['BRN', 'BRN', 130], BRR:['BRR', 'BRR', 130], BRZ:['BRZ', 'BRZ', 130], BSD:['BSD', 'BS$', 2], BTN:['BTN', 'Nu.', 2], BUK:['BUK', 'BUK', 130], BWP:['BWP', 'BWP', 2], BYB:['BYB', 'BYB', 130], BYR:['BYR', 'BYR', 0], BZD:['BZD', 'BZ$', 2], CAD:['CAD', '$', 2, 'C$'], CDF:['CDF', 'CDF', 2], CHE:['CHE', 'CHE', 2], CHF:['CHF', 'Fr.', 2, 'CHF'], CHW:['CHW', 'CHW', 2], CLE:['CLE', 'E\xBA', 130], CLF:['CLF', 'CLF', 0], CLP:['CLP', 'CL$', 0, 'CL$'], CNY:['CNY', 'CN\xA5', 2, 'RMB\xA5'], COP:['COP', 'CO$', 0, 'COL$'], COU:['COU', 'COU', 2], CRC:['CRC', '\u20A1', 0, 'CR\u20A1'], CSD:['CSD', 'CSD', 130], CSK:['CSK', 'CSK', 130], CUC:['CUC', 'CUC$', 2], CUP:['CUP', 'CU$', 2, '$MN'], CVE:['CVE', 'CV$', 2], CYP:['CYP', 'CY\xA3', 130], CZK:['CZK', 'K\u010D', 2, 'K\u010D'], DDM:['DDM', 'DDM', 130], DEM:['DEM', 'DM', 130], DJF:['DJF', 'Fdj', 0], DKK:['DKK', 'Dkr', 2, 'kr'], DOP:['DOP', 'RD$', 2, 'RD$'], DZD:['DZD', 'DA', 2], ECS:['ECS', 'ECS', 130], ECV:['ECV', 'ECV', 2], EEK:['EEK', 'Ekr', 2], EGP:['EGP', 'EG\xA3', 2, 'LE'], EQE:['EQE', 'EQE', 130], ERN:['ERN', 'Nfk', 2], ESA:['ESA', 'ESA', 2], ESB:['ESB', 'ESB', 2], ESP:['ESP', 'Pts', 128], ETB:['ETB', 'Br', 2], EUR:['EUR', '\u20AC', 2, '\u20AC'], FIM:['FIM', 'mk', 130], FJD:['FJD', 'FJ$', 2], FKP:['FKP', 'FK\xA3', 2], FRF:['FRF', '\u20A3', 130], GBP:['GBP', '\xA3', 2, 'GB\xA3'], GEK:['GEK', 'GEK', 130], GEL:['GEL', 'GEL', 2], GHC:['GHC', '\u20B5', 130], GHS:['GHS', 'GH\u20B5', 2], GIP:['GIP', 'GI\xA3', 2], GMD:['GMD', 'GMD', 2], GNF:['GNF', 'FG', 0], GNS:['GNS', 'GNS', 130], GQE:['GQE', 'GQE', 130], GRD:['GRD', '\u20AF', 130], GTQ:['GTQ', 'GTQ', 2], GWE:['GWE', 'GWE', 130], GWP:['GWP', 'GWP', 2], GYD:['GYD', 'GY$', 0], HKD:['HKD', 'HK$', 2, 'HK$'], HNL:['HNL', 'HNL', 2], HRD:['HRD', 'HRD', 130], HRK:['HRK', 'kn', 2], HTG:['HTG', 'HTG', 2], HUF:['HUF', 'Ft', 0], IDR:['IDR', 'Rp', 0], IEP:['IEP', 'IR\xA3', 130], ILP:['ILP', 'I\xA3', 130], ILR:['ILR', 'ILR', 130], ILS:['ILS', '\u20AA', 2, 'IL\u20AA'], INR:['INR', 'Rs', 2, 'Rs'], IQD:['IQD', 'IQD', 0], IRR:['IRR', 'IRR', 0], ISJ:['ISJ', 'ISJ', 130], ISK:['ISK', 'Ikr', 0, 'kr'], ITL:['ITL', 'IT\u20A4', 128], JMD:['JMD', 'J$', 2, 'JA$'], JOD:['JOD', 'JD', 3], JPY:['JPY', '\xA5', 0, 'JP\xA5'], KES:['KES', 'Ksh', 2], KGS:['KGS', 'KGS', 2], KHR:['KHR', 'KHR', 2], KMF:['KMF', 'CF', 0], KPW:['KPW', 'KPW', 0], KRH:['KRH', 'KRH', 130], KRO:['KRO', 'KRO', 130], KRW:['KRW', '\u20A9', 0, 'KR\u20A9'], KWD:['KWD', 'KD', 3], KYD:['KYD', 'KY$', 2], KZT:['KZT', 'KZT', 2], LAK:['LAK', '\u20AD', 0], LBP:['LBP', 'LB\xA3', 0], LKR:['LKR', 'SLRs', 2, 'SLRs'], LRD:['LRD', 'L$', 2], LSL:['LSL', 'LSL', 2], LSM:['LSM', 'LSM', 130], LTL:['LTL', 'Lt', 2], LTT:['LTT', 'LTT', 130], LUC:['LUC', 'LUC', 2], LUF:['LUF', 'LUF', 128], LUL:['LUL', 'LUL', 2], LVL:['LVL', 'Ls', 2], LVR:['LVR', 'LVR', 130], LYD:['LYD', 'LD', 3], MAD:['MAD', 'MAD', 2], MAF:['MAF', 'MAF', 130], MCF:['MCF', 'MCF', 130], MDC:['MDC', 'MDC', 130], MDL:['MDL', 'MDL', 2], MGA:['MGA', 'MGA', 0], MGF:['MGF', 'MGF', 128], MKD:['MKD', 'MKD', 2], MKN:['MKN', 'MKN', 130], MLF:['MLF', 'MLF', 130], MMK:['MMK', 'MMK', 0], MNT:['MNT', '\u20AE', 0, 'MN\u20AE'], MOP:['MOP', 'MOP$', 2], MRO:['MRO', 'UM', 0], MTL:['MTL', 'Lm', 130], MTP:['MTP', 'MT\xA3', 130], MUR:['MUR', 'MURs', 0], MVP:['MVP', 'MVP', 130], MVR:['MVR', 'MVR', 2], MWK:['MWK', 'MWK', 2], MXN:['MXN', 'Mex$', 2, 'Mex$'], MXP:['MXP', 'MX$', 130], MXV:['MXV', 'MXV', 2], MYR:['MYR', 'RM', 2, 'RM'], MZE:['MZE', 'MZE', 130], MZM:['MZM', 'Mt', 130], MZN:['MZN', 'MTn', 2], NAD:['NAD', 'N$', 2], NGN:['NGN', '\u20A6', 2], NIC:['NIC', 'NIC', 130], NIO:['NIO', 'C$', 2], NLG:['NLG', 'fl', 130], NOK:['NOK', 'Nkr', 2, 'NOkr'], NPR:['NPR', 'NPRs', 2], NZD:['NZD', 'NZ$', 2], OMR:['OMR', 'OMR', 3], PAB:['PAB', 'B/.', 2, 'B/.'], PEI:['PEI', 'I/.', 130], PEN:['PEN', 'S/.', 2, 'S/.'], PES:['PES', 'PES', 130], PGK:['PGK', 'PGK', 2], PHP:['PHP', '\u20B1', 2, 'PHP'], PKR:['PKR', 'PKRs', 0, 'PKRs.'], PLN:['PLN', 'z\u0142', 2], PLZ:['PLZ', 'PLZ', 130], PTE:['PTE', 'Esc', 130], PYG:['PYG', '\u20B2', 0], QAR:['QAR', 'QR', 2], RHD:['RHD', 'RH$', 130], ROL:['ROL', 'ROL', 130], RON:['RON', 'RON', 2], RSD:['RSD', 'din.', 0], RUB:['RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'], RUR:['RUR', 'RUR', 130], RWF:['RWF', 'RWF', 0], SAR:['SAR', 'SR', 2, 'SR'], SBD:['SBD', 'SI$', 2], SCR:['SCR', 'SRe', 2], SDD:['SDD', 'LSd', 130], SDG:['SDG', 'SDG', 2], SDP:['SDP', 'SDP', 130], SEK:['SEK', 'Skr', 2, 'kr'], SGD:['SGD', 'S$', 2, 'S$'], SHP:['SHP', 'SH\xA3', 2], SIT:['SIT', 'SIT', 130], SKK:['SKK', 'Sk', 130], SLL:['SLL', 'Le', 0], SOS:['SOS', 'Ssh', 0], SRD:['SRD', 'SR$', 2], SRG:['SRG', 'Sf', 130], STD:['STD', 'Db', 0], SUR:['SUR', 'SUR', 130], SVC:['SVC', 'SV\u20A1', 130], SYP:['SYP', 'SY\xA3', 0], SZL:['SZL', 'SZL', 2], THB:['THB', '\u0E3F', 2, 'THB'], TJR:['TJR', 'TJR', 130], TJS:['TJS', 'TJS', 2], TMM:['TMM', 'TMM', 128], TMT:['TMT', 'TMT', 2], TND:['TND', 'DT', 3], TOP:['TOP', 'T$', 2], TPE:['TPE', 'TPE', 130], TRL:['TRL', 'TRL', 128], TRY:['TRY', 'TL', 2, 'YTL'], TTD:['TTD', 'TT$', 2], TWD:['TWD', 'NT$', 2, 'NT$'], TZS:['TZS', 'TSh', 0], UAH:['UAH', '\u20B4', 2], UAK:['UAK', 'UAK', 130], UGS:['UGS', 'UGS', 130], UGX:['UGX', 'USh', 0], USD:['USD', 'US$', 2, 'US$'], USN:['USN', 'USN', 2], USS:['USS', 'USS', 2], UYI:['UYI', 'UYI', 2], UYP:['UYP', 'UYP', 130], UYU:['UYU', '$U', 2, 'UY$'], UZS:['UZS', 'UZS', 0], VEB:['VEB', 'VEB', 130], VEF:['VEF', 'Bs.F.', 2], VND:['VND', '\u20AB', 24, '\u20AB'], VNN:['VNN', 'VNN', 130], VUV:['VUV', 'VT', 0], WST:['WST', 'WS$', 2], XAF:['XAF', 'FCFA', 0], XAG:['XAG', 'XAG', 2], XAU:['XAU', 'XAU', 2], XBA:['XBA', 'XBA', 2], XBB:['XBB', 'XBB', 2], XBC:['XBC', 'XBC', 2], XBD:['XBD', 'XBD', 2], XCD:['XCD', 'EC$', 2], XDR:['XDR', 'XDR', 2], XEU:['XEU', 'XEU', 2], XFO:['XFO', 'XFO', 2], XFU:['XFU', 'XFU', 2], XOF:['XOF', 'CFA', 0], XPD:['XPD', 'XPD', 2], XPF:['XPF', 'CFPF', 0], XPT:['XPT', 'XPT', 2], XRE:['XRE', 'XRE', 2], XTS:['XTS', 'XTS', 2], XXX:['XXX', 'XXX', 2], YDD:['YDD', 'YDD', 130], YER:['YER', 'YR', 0, 'YER'], YUD:['YUD', 'YUD', 130], YUM:['YUM', 'YUM', 130], YUN:['YUN', 'YUN', 130], YUR:['YUR', 'YUR', 130], ZAL:['ZAL', 'ZAL', 2], ZAR:['ZAR', 'R', 2, 'ZAR'], ZMK:['ZMK', 'ZK', 0], ZRN:['ZRN', 'NZ', 130], ZRZ:['ZRZ', 'ZRZ', 130], ZWD:['ZWD', 'Z$', 128], ZWL:['ZWL', 'ZWL', 2], ZWR:['ZWR', 'ZWR', 130]};
}

function CurrencyList_en_CA_0(){
  CurrencyList_en_0.call(this);
  $$init_130();
}

function CurrencyList_en_CA(){
}

_ = CurrencyList_en_CA_0.prototype = CurrencyList_en_CA.prototype = new CurrencyList_en;
_.getClass$ = function getClass_131(){
  return Lcom_google_gwt_i18n_client_CurrencyList_1en_1CA_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava_6(){
  return new CurrencyDataImpl_1('CAD', '$', 2, 'C$');
}
;
_.getDefaultNative = function getDefaultNative_6(){
  return ['CAD', '$', 2, 'C$'];
}
;
_.loadCurrencyMapJava = function loadCurrencyMapJava_6(){
  var result;
  result = $loadCurrencyMapJava_1(this);
  $put_1(result, 'ADP', new CurrencyDataImpl_0('ADP', 'ADP', 128));
  $put_1(result, 'AED', new CurrencyDataImpl_1('AED', 'DH', 2, 'DH'));
  $put_1(result, 'AFA', new CurrencyDataImpl_0('AFA', 'AFA', 130));
  $put_1(result, 'AFN', new CurrencyDataImpl_0('AFN', 'Af', 0));
  $put_1(result, 'ALL', new CurrencyDataImpl_0('ALL', 'ALL', 0));
  $put_1(result, 'AMD', new CurrencyDataImpl_0('AMD', 'AMD', 0));
  $put_1(result, 'ANG', new CurrencyDataImpl_0('ANG', 'NAf.', 2));
  $put_1(result, 'AOA', new CurrencyDataImpl_0('AOA', 'Kz', 2));
  $put_1(result, 'AOK', new CurrencyDataImpl_0('AOK', 'AOK', 130));
  $put_1(result, 'AON', new CurrencyDataImpl_0('AON', 'AON', 130));
  $put_1(result, 'AOR', new CurrencyDataImpl_0('AOR', 'AOR', 130));
  $put_1(result, 'ARA', new CurrencyDataImpl_0('ARA', '\u20B3', 130));
  $put_1(result, 'ARL', new CurrencyDataImpl_0('ARL', '$L', 130));
  $put_1(result, 'ARM', new CurrencyDataImpl_0('ARM', 'm$n', 130));
  $put_1(result, 'ARP', new CurrencyDataImpl_0('ARP', 'ARP', 130));
  $put_1(result, 'ARS', new CurrencyDataImpl_1('ARS', 'AR$', 2, 'AR$'));
  $put_1(result, 'ATS', new CurrencyDataImpl_0('ATS', 'ATS', 130));
  $put_1(result, 'AUD', new CurrencyDataImpl_1('AUD', 'AU$', 2, 'AU$'));
  $put_1(result, 'AWG', new CurrencyDataImpl_0('AWG', 'Afl.', 2));
  $put_1(result, 'AZM', new CurrencyDataImpl_0('AZM', 'AZM', 130));
  $put_1(result, 'AZN', new CurrencyDataImpl_0('AZN', 'man.', 2));
  $put_1(result, 'BAD', new CurrencyDataImpl_0('BAD', 'BAD', 130));
  $put_1(result, 'BAM', new CurrencyDataImpl_0('BAM', 'KM', 2));
  $put_1(result, 'BAN', new CurrencyDataImpl_0('BAN', 'BAN', 130));
  $put_1(result, 'BBD', new CurrencyDataImpl_0('BBD', 'Bds$', 2));
  $put_1(result, 'BDT', new CurrencyDataImpl_1('BDT', 'Tk', 2, 'Tk'));
  $put_1(result, 'BEC', new CurrencyDataImpl_0('BEC', 'BEC', 2));
  $put_1(result, 'BEF', new CurrencyDataImpl_0('BEF', 'BF', 130));
  $put_1(result, 'BEL', new CurrencyDataImpl_0('BEL', 'BEL', 2));
  $put_1(result, 'BGL', new CurrencyDataImpl_0('BGL', 'BGL', 130));
  $put_1(result, 'BGM', new CurrencyDataImpl_0('BGM', 'BGM', 130));
  $put_1(result, 'BGN', new CurrencyDataImpl_0('BGN', 'BGN', 2));
  $put_1(result, 'BGO', new CurrencyDataImpl_0('BGO', 'BGO', 130));
  $put_1(result, 'BHD', new CurrencyDataImpl_0('BHD', 'BD', 3));
  $put_1(result, 'BIF', new CurrencyDataImpl_0('BIF', 'FBu', 0));
  $put_1(result, 'BMD', new CurrencyDataImpl_0('BMD', 'BD$', 2));
  $put_1(result, 'BND', new CurrencyDataImpl_0('BND', 'BN$', 2));
  $put_1(result, 'BOB', new CurrencyDataImpl_0('BOB', 'Bs', 2));
  $put_1(result, 'BOL', new CurrencyDataImpl_0('BOL', 'BOL', 130));
  $put_1(result, 'BOP', new CurrencyDataImpl_0('BOP', '$b.', 130));
  $put_1(result, 'BOV', new CurrencyDataImpl_0('BOV', 'BOV', 2));
  $put_1(result, 'BRB', new CurrencyDataImpl_0('BRB', 'BRB', 130));
  $put_1(result, 'BRC', new CurrencyDataImpl_0('BRC', 'BRC', 130));
  $put_1(result, 'BRE', new CurrencyDataImpl_0('BRE', 'BRE', 130));
  $put_1(result, 'BRL', new CurrencyDataImpl_1('BRL', 'R$', 2, 'R$'));
  $put_1(result, 'BRN', new CurrencyDataImpl_0('BRN', 'BRN', 130));
  $put_1(result, 'BRR', new CurrencyDataImpl_0('BRR', 'BRR', 130));
  $put_1(result, 'BRZ', new CurrencyDataImpl_0('BRZ', 'BRZ', 130));
  $put_1(result, 'BSD', new CurrencyDataImpl_0('BSD', 'BS$', 2));
  $put_1(result, 'BTN', new CurrencyDataImpl_0('BTN', 'Nu.', 2));
  $put_1(result, 'BUK', new CurrencyDataImpl_0('BUK', 'BUK', 130));
  $put_1(result, 'BWP', new CurrencyDataImpl_0('BWP', 'BWP', 2));
  $put_1(result, 'BYB', new CurrencyDataImpl_0('BYB', 'BYB', 130));
  $put_1(result, 'BYR', new CurrencyDataImpl_0('BYR', 'BYR', 0));
  $put_1(result, 'BZD', new CurrencyDataImpl_0('BZD', 'BZ$', 2));
  $put_1(result, 'CAD', new CurrencyDataImpl_1('CAD', '$', 2, 'C$'));
  $put_1(result, 'CDF', new CurrencyDataImpl_0('CDF', 'CDF', 2));
  $put_1(result, 'CHE', new CurrencyDataImpl_0('CHE', 'CHE', 2));
  $put_1(result, 'CHF', new CurrencyDataImpl_1('CHF', 'Fr.', 2, 'CHF'));
  $put_1(result, 'CHW', new CurrencyDataImpl_0('CHW', 'CHW', 2));
  $put_1(result, 'CLE', new CurrencyDataImpl_0('CLE', 'E\xBA', 130));
  $put_1(result, 'CLF', new CurrencyDataImpl_0('CLF', 'CLF', 0));
  $put_1(result, 'CLP', new CurrencyDataImpl_1('CLP', 'CL$', 0, 'CL$'));
  $put_1(result, 'CNY', new CurrencyDataImpl_1('CNY', 'CN\xA5', 2, 'RMB\xA5'));
  $put_1(result, 'COP', new CurrencyDataImpl_1('COP', 'CO$', 0, 'COL$'));
  $put_1(result, 'COU', new CurrencyDataImpl_0('COU', 'COU', 2));
  $put_1(result, 'CRC', new CurrencyDataImpl_1('CRC', '\u20A1', 0, 'CR\u20A1'));
  $put_1(result, 'CSD', new CurrencyDataImpl_0('CSD', 'CSD', 130));
  $put_1(result, 'CSK', new CurrencyDataImpl_0('CSK', 'CSK', 130));
  $put_1(result, 'CUC', new CurrencyDataImpl_0('CUC', 'CUC$', 2));
  $put_1(result, 'CUP', new CurrencyDataImpl_1('CUP', 'CU$', 2, '$MN'));
  $put_1(result, 'CVE', new CurrencyDataImpl_0('CVE', 'CV$', 2));
  $put_1(result, 'CYP', new CurrencyDataImpl_0('CYP', 'CY\xA3', 130));
  $put_1(result, 'CZK', new CurrencyDataImpl_1('CZK', 'K\u010D', 2, 'K\u010D'));
  $put_1(result, 'DDM', new CurrencyDataImpl_0('DDM', 'DDM', 130));
  $put_1(result, 'DEM', new CurrencyDataImpl_0('DEM', 'DM', 130));
  $put_1(result, 'DJF', new CurrencyDataImpl_0('DJF', 'Fdj', 0));
  $put_1(result, 'DKK', new CurrencyDataImpl_1('DKK', 'Dkr', 2, 'kr'));
  $put_1(result, 'DOP', new CurrencyDataImpl_1('DOP', 'RD$', 2, 'RD$'));
  $put_1(result, 'DZD', new CurrencyDataImpl_0('DZD', 'DA', 2));
  $put_1(result, 'ECS', new CurrencyDataImpl_0('ECS', 'ECS', 130));
  $put_1(result, 'ECV', new CurrencyDataImpl_0('ECV', 'ECV', 2));
  $put_1(result, 'EEK', new CurrencyDataImpl_0('EEK', 'Ekr', 2));
  $put_1(result, 'EGP', new CurrencyDataImpl_1('EGP', 'EG\xA3', 2, 'LE'));
  $put_1(result, 'EQE', new CurrencyDataImpl_0('EQE', 'EQE', 130));
  $put_1(result, 'ERN', new CurrencyDataImpl_0('ERN', 'Nfk', 2));
  $put_1(result, 'ESA', new CurrencyDataImpl_0('ESA', 'ESA', 2));
  $put_1(result, 'ESB', new CurrencyDataImpl_0('ESB', 'ESB', 2));
  $put_1(result, 'ESP', new CurrencyDataImpl_0('ESP', 'Pts', 128));
  $put_1(result, 'ETB', new CurrencyDataImpl_0('ETB', 'Br', 2));
  $put_1(result, 'EUR', new CurrencyDataImpl_1('EUR', '\u20AC', 2, '\u20AC'));
  $put_1(result, 'FIM', new CurrencyDataImpl_0('FIM', 'mk', 130));
  $put_1(result, 'FJD', new CurrencyDataImpl_0('FJD', 'FJ$', 2));
  $put_1(result, 'FKP', new CurrencyDataImpl_0('FKP', 'FK\xA3', 2));
  $put_1(result, 'FRF', new CurrencyDataImpl_0('FRF', '\u20A3', 130));
  $put_1(result, 'GBP', new CurrencyDataImpl_1('GBP', '\xA3', 2, 'GB\xA3'));
  $put_1(result, 'GEK', new CurrencyDataImpl_0('GEK', 'GEK', 130));
  $put_1(result, 'GEL', new CurrencyDataImpl_0('GEL', 'GEL', 2));
  $put_1(result, 'GHC', new CurrencyDataImpl_0('GHC', '\u20B5', 130));
  $put_1(result, 'GHS', new CurrencyDataImpl_0('GHS', 'GH\u20B5', 2));
  $put_1(result, 'GIP', new CurrencyDataImpl_0('GIP', 'GI\xA3', 2));
  $put_1(result, 'GMD', new CurrencyDataImpl_0('GMD', 'GMD', 2));
  $put_1(result, 'GNF', new CurrencyDataImpl_0('GNF', 'FG', 0));
  $put_1(result, 'GNS', new CurrencyDataImpl_0('GNS', 'GNS', 130));
  $put_1(result, 'GQE', new CurrencyDataImpl_0('GQE', 'GQE', 130));
  $put_1(result, 'GRD', new CurrencyDataImpl_0('GRD', '\u20AF', 130));
  $put_1(result, 'GTQ', new CurrencyDataImpl_0('GTQ', 'GTQ', 2));
  $put_1(result, 'GWE', new CurrencyDataImpl_0('GWE', 'GWE', 130));
  $put_1(result, 'GWP', new CurrencyDataImpl_0('GWP', 'GWP', 2));
  $put_1(result, 'GYD', new CurrencyDataImpl_0('GYD', 'GY$', 0));
  $put_1(result, 'HKD', new CurrencyDataImpl_1('HKD', 'HK$', 2, 'HK$'));
  $put_1(result, 'HNL', new CurrencyDataImpl_0('HNL', 'HNL', 2));
  $put_1(result, 'HRD', new CurrencyDataImpl_0('HRD', 'HRD', 130));
  $put_1(result, 'HRK', new CurrencyDataImpl_0('HRK', 'kn', 2));
  $put_1(result, 'HTG', new CurrencyDataImpl_0('HTG', 'HTG', 2));
  $put_1(result, 'HUF', new CurrencyDataImpl_0('HUF', 'Ft', 0));
  $put_1(result, 'IDR', new CurrencyDataImpl_0('IDR', 'Rp', 0));
  $put_1(result, 'IEP', new CurrencyDataImpl_0('IEP', 'IR\xA3', 130));
  $put_1(result, 'ILP', new CurrencyDataImpl_0('ILP', 'I\xA3', 130));
  $put_1(result, 'ILR', new CurrencyDataImpl_0('ILR', 'ILR', 130));
  $put_1(result, 'ILS', new CurrencyDataImpl_1('ILS', '\u20AA', 2, 'IL\u20AA'));
  $put_1(result, 'INR', new CurrencyDataImpl_1('INR', 'Rs', 2, 'Rs'));
  $put_1(result, 'IQD', new CurrencyDataImpl_0('IQD', 'IQD', 0));
  $put_1(result, 'IRR', new CurrencyDataImpl_0('IRR', 'IRR', 0));
  $put_1(result, 'ISJ', new CurrencyDataImpl_0('ISJ', 'ISJ', 130));
  $put_1(result, 'ISK', new CurrencyDataImpl_1('ISK', 'Ikr', 0, 'kr'));
  $put_1(result, 'ITL', new CurrencyDataImpl_0('ITL', 'IT\u20A4', 128));
  $put_1(result, 'JMD', new CurrencyDataImpl_1('JMD', 'J$', 2, 'JA$'));
  $put_1(result, 'JOD', new CurrencyDataImpl_0('JOD', 'JD', 3));
  $put_1(result, 'JPY', new CurrencyDataImpl_1('JPY', '\xA5', 0, 'JP\xA5'));
  $put_1(result, 'KES', new CurrencyDataImpl_0('KES', 'Ksh', 2));
  $put_1(result, 'KGS', new CurrencyDataImpl_0('KGS', 'KGS', 2));
  $put_1(result, 'KHR', new CurrencyDataImpl_0('KHR', 'KHR', 2));
  $put_1(result, 'KMF', new CurrencyDataImpl_0('KMF', 'CF', 0));
  $put_1(result, 'KPW', new CurrencyDataImpl_0('KPW', 'KPW', 0));
  $put_1(result, 'KRH', new CurrencyDataImpl_0('KRH', 'KRH', 130));
  $put_1(result, 'KRO', new CurrencyDataImpl_0('KRO', 'KRO', 130));
  $put_1(result, 'KRW', new CurrencyDataImpl_1('KRW', '\u20A9', 0, 'KR\u20A9'));
  $put_1(result, 'KWD', new CurrencyDataImpl_0('KWD', 'KD', 3));
  $put_1(result, 'KYD', new CurrencyDataImpl_0('KYD', 'KY$', 2));
  $put_1(result, 'KZT', new CurrencyDataImpl_0('KZT', 'KZT', 2));
  $put_1(result, 'LAK', new CurrencyDataImpl_0('LAK', '\u20AD', 0));
  $put_1(result, 'LBP', new CurrencyDataImpl_0('LBP', 'LB\xA3', 0));
  $put_1(result, 'LKR', new CurrencyDataImpl_1('LKR', 'SLRs', 2, 'SLRs'));
  $put_1(result, 'LRD', new CurrencyDataImpl_0('LRD', 'L$', 2));
  $put_1(result, 'LSL', new CurrencyDataImpl_0('LSL', 'LSL', 2));
  $put_1(result, 'LSM', new CurrencyDataImpl_0('LSM', 'LSM', 130));
  $put_1(result, 'LTL', new CurrencyDataImpl_0('LTL', 'Lt', 2));
  $put_1(result, 'LTT', new CurrencyDataImpl_0('LTT', 'LTT', 130));
  $put_1(result, 'LUC', new CurrencyDataImpl_0('LUC', 'LUC', 2));
  $put_1(result, 'LUF', new CurrencyDataImpl_0('LUF', 'LUF', 128));
  $put_1(result, 'LUL', new CurrencyDataImpl_0('LUL', 'LUL', 2));
  $put_1(result, 'LVL', new CurrencyDataImpl_0('LVL', 'Ls', 2));
  $put_1(result, 'LVR', new CurrencyDataImpl_0('LVR', 'LVR', 130));
  $put_1(result, 'LYD', new CurrencyDataImpl_0('LYD', 'LD', 3));
  $put_1(result, 'MAD', new CurrencyDataImpl_0('MAD', 'MAD', 2));
  $put_1(result, 'MAF', new CurrencyDataImpl_0('MAF', 'MAF', 130));
  $put_1(result, 'MCF', new CurrencyDataImpl_0('MCF', 'MCF', 130));
  $put_1(result, 'MDC', new CurrencyDataImpl_0('MDC', 'MDC', 130));
  $put_1(result, 'MDL', new CurrencyDataImpl_0('MDL', 'MDL', 2));
  $put_1(result, 'MGA', new CurrencyDataImpl_0('MGA', 'MGA', 0));
  $put_1(result, 'MGF', new CurrencyDataImpl_0('MGF', 'MGF', 128));
  $put_1(result, 'MKD', new CurrencyDataImpl_0('MKD', 'MKD', 2));
  $put_1(result, 'MKN', new CurrencyDataImpl_0('MKN', 'MKN', 130));
  $put_1(result, 'MLF', new CurrencyDataImpl_0('MLF', 'MLF', 130));
  $put_1(result, 'MMK', new CurrencyDataImpl_0('MMK', 'MMK', 0));
  $put_1(result, 'MNT', new CurrencyDataImpl_1('MNT', '\u20AE', 0, 'MN\u20AE'));
  $put_1(result, 'MOP', new CurrencyDataImpl_0('MOP', 'MOP$', 2));
  $put_1(result, 'MRO', new CurrencyDataImpl_0('MRO', 'UM', 0));
  $put_1(result, 'MTL', new CurrencyDataImpl_0('MTL', 'Lm', 130));
  $put_1(result, 'MTP', new CurrencyDataImpl_0('MTP', 'MT\xA3', 130));
  $put_1(result, 'MUR', new CurrencyDataImpl_0('MUR', 'MURs', 0));
  $put_1(result, 'MVP', new CurrencyDataImpl_0('MVP', 'MVP', 130));
  $put_1(result, 'MVR', new CurrencyDataImpl_0('MVR', 'MVR', 2));
  $put_1(result, 'MWK', new CurrencyDataImpl_0('MWK', 'MWK', 2));
  $put_1(result, 'MXN', new CurrencyDataImpl_1('MXN', 'Mex$', 2, 'Mex$'));
  $put_1(result, 'MXP', new CurrencyDataImpl_0('MXP', 'MX$', 130));
  $put_1(result, 'MXV', new CurrencyDataImpl_0('MXV', 'MXV', 2));
  $put_1(result, 'MYR', new CurrencyDataImpl_1('MYR', 'RM', 2, 'RM'));
  $put_1(result, 'MZE', new CurrencyDataImpl_0('MZE', 'MZE', 130));
  $put_1(result, 'MZM', new CurrencyDataImpl_0('MZM', 'Mt', 130));
  $put_1(result, 'MZN', new CurrencyDataImpl_0('MZN', 'MTn', 2));
  $put_1(result, 'NAD', new CurrencyDataImpl_0('NAD', 'N$', 2));
  $put_1(result, 'NGN', new CurrencyDataImpl_0('NGN', '\u20A6', 2));
  $put_1(result, 'NIC', new CurrencyDataImpl_0('NIC', 'NIC', 130));
  $put_1(result, 'NIO', new CurrencyDataImpl_0('NIO', 'C$', 2));
  $put_1(result, 'NLG', new CurrencyDataImpl_0('NLG', 'fl', 130));
  $put_1(result, 'NOK', new CurrencyDataImpl_1('NOK', 'Nkr', 2, 'NOkr'));
  $put_1(result, 'NPR', new CurrencyDataImpl_0('NPR', 'NPRs', 2));
  $put_1(result, 'NZD', new CurrencyDataImpl_0('NZD', 'NZ$', 2));
  $put_1(result, 'OMR', new CurrencyDataImpl_0('OMR', 'OMR', 3));
  $put_1(result, 'PAB', new CurrencyDataImpl_1('PAB', 'B/.', 2, 'B/.'));
  $put_1(result, 'PEI', new CurrencyDataImpl_0('PEI', 'I/.', 130));
  $put_1(result, 'PEN', new CurrencyDataImpl_1('PEN', 'S/.', 2, 'S/.'));
  $put_1(result, 'PES', new CurrencyDataImpl_0('PES', 'PES', 130));
  $put_1(result, 'PGK', new CurrencyDataImpl_0('PGK', 'PGK', 2));
  $put_1(result, 'PHP', new CurrencyDataImpl_1('PHP', '\u20B1', 2, 'PHP'));
  $put_1(result, 'PKR', new CurrencyDataImpl_1('PKR', 'PKRs', 0, 'PKRs.'));
  $put_1(result, 'PLN', new CurrencyDataImpl_0('PLN', 'z\u0142', 2));
  $put_1(result, 'PLZ', new CurrencyDataImpl_0('PLZ', 'PLZ', 130));
  $put_1(result, 'PTE', new CurrencyDataImpl_0('PTE', 'Esc', 130));
  $put_1(result, 'PYG', new CurrencyDataImpl_0('PYG', '\u20B2', 0));
  $put_1(result, 'QAR', new CurrencyDataImpl_0('QAR', 'QR', 2));
  $put_1(result, 'RHD', new CurrencyDataImpl_0('RHD', 'RH$', 130));
  $put_1(result, 'ROL', new CurrencyDataImpl_0('ROL', 'ROL', 130));
  $put_1(result, 'RON', new CurrencyDataImpl_0('RON', 'RON', 2));
  $put_1(result, 'RSD', new CurrencyDataImpl_0('RSD', 'din.', 0));
  $put_1(result, 'RUB', new CurrencyDataImpl_1('RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'));
  $put_1(result, 'RUR', new CurrencyDataImpl_0('RUR', 'RUR', 130));
  $put_1(result, 'RWF', new CurrencyDataImpl_0('RWF', 'RWF', 0));
  $put_1(result, 'SAR', new CurrencyDataImpl_1('SAR', 'SR', 2, 'SR'));
  $put_1(result, 'SBD', new CurrencyDataImpl_0('SBD', 'SI$', 2));
  $put_1(result, 'SCR', new CurrencyDataImpl_0('SCR', 'SRe', 2));
  $put_1(result, 'SDD', new CurrencyDataImpl_0('SDD', 'LSd', 130));
  $put_1(result, 'SDG', new CurrencyDataImpl_0('SDG', 'SDG', 2));
  $put_1(result, 'SDP', new CurrencyDataImpl_0('SDP', 'SDP', 130));
  $put_1(result, 'SEK', new CurrencyDataImpl_1('SEK', 'Skr', 2, 'kr'));
  $put_1(result, 'SGD', new CurrencyDataImpl_1('SGD', 'S$', 2, 'S$'));
  $put_1(result, 'SHP', new CurrencyDataImpl_0('SHP', 'SH\xA3', 2));
  $put_1(result, 'SIT', new CurrencyDataImpl_0('SIT', 'SIT', 130));
  $put_1(result, 'SKK', new CurrencyDataImpl_0('SKK', 'Sk', 130));
  $put_1(result, 'SLL', new CurrencyDataImpl_0('SLL', 'Le', 0));
  $put_1(result, 'SOS', new CurrencyDataImpl_0('SOS', 'Ssh', 0));
  $put_1(result, 'SRD', new CurrencyDataImpl_0('SRD', 'SR$', 2));
  $put_1(result, 'SRG', new CurrencyDataImpl_0('SRG', 'Sf', 130));
  $put_1(result, 'STD', new CurrencyDataImpl_0('STD', 'Db', 0));
  $put_1(result, 'SUR', new CurrencyDataImpl_0('SUR', 'SUR', 130));
  $put_1(result, 'SVC', new CurrencyDataImpl_0('SVC', 'SV\u20A1', 130));
  $put_1(result, 'SYP', new CurrencyDataImpl_0('SYP', 'SY\xA3', 0));
  $put_1(result, 'SZL', new CurrencyDataImpl_0('SZL', 'SZL', 2));
  $put_1(result, 'THB', new CurrencyDataImpl_1('THB', '\u0E3F', 2, 'THB'));
  $put_1(result, 'TJR', new CurrencyDataImpl_0('TJR', 'TJR', 130));
  $put_1(result, 'TJS', new CurrencyDataImpl_0('TJS', 'TJS', 2));
  $put_1(result, 'TMM', new CurrencyDataImpl_0('TMM', 'TMM', 128));
  $put_1(result, 'TMT', new CurrencyDataImpl_0('TMT', 'TMT', 2));
  $put_1(result, 'TND', new CurrencyDataImpl_0('TND', 'DT', 3));
  $put_1(result, 'TOP', new CurrencyDataImpl_0('TOP', 'T$', 2));
  $put_1(result, 'TPE', new CurrencyDataImpl_0('TPE', 'TPE', 130));
  $put_1(result, 'TRL', new CurrencyDataImpl_0('TRL', 'TRL', 128));
  $put_1(result, 'TRY', new CurrencyDataImpl_1('TRY', 'TL', 2, 'YTL'));
  $put_1(result, 'TTD', new CurrencyDataImpl_0('TTD', 'TT$', 2));
  $put_1(result, 'TWD', new CurrencyDataImpl_1('TWD', 'NT$', 2, 'NT$'));
  $put_1(result, 'TZS', new CurrencyDataImpl_0('TZS', 'TSh', 0));
  $put_1(result, 'UAH', new CurrencyDataImpl_0('UAH', '\u20B4', 2));
  $put_1(result, 'UAK', new CurrencyDataImpl_0('UAK', 'UAK', 130));
  $put_1(result, 'UGS', new CurrencyDataImpl_0('UGS', 'UGS', 130));
  $put_1(result, 'UGX', new CurrencyDataImpl_0('UGX', 'USh', 0));
  $put_1(result, 'USD', new CurrencyDataImpl_1('USD', 'US$', 2, 'US$'));
  $put_1(result, 'USN', new CurrencyDataImpl_0('USN', 'USN', 2));
  $put_1(result, 'USS', new CurrencyDataImpl_0('USS', 'USS', 2));
  $put_1(result, 'UYI', new CurrencyDataImpl_0('UYI', 'UYI', 2));
  $put_1(result, 'UYP', new CurrencyDataImpl_0('UYP', 'UYP', 130));
  $put_1(result, 'UYU', new CurrencyDataImpl_1('UYU', '$U', 2, 'UY$'));
  $put_1(result, 'UZS', new CurrencyDataImpl_0('UZS', 'UZS', 0));
  $put_1(result, 'VEB', new CurrencyDataImpl_0('VEB', 'VEB', 130));
  $put_1(result, 'VEF', new CurrencyDataImpl_0('VEF', 'Bs.F.', 2));
  $put_1(result, 'VND', new CurrencyDataImpl_1('VND', '\u20AB', 24, '\u20AB'));
  $put_1(result, 'VNN', new CurrencyDataImpl_0('VNN', 'VNN', 130));
  $put_1(result, 'VUV', new CurrencyDataImpl_0('VUV', 'VT', 0));
  $put_1(result, 'WST', new CurrencyDataImpl_0('WST', 'WS$', 2));
  $put_1(result, 'XAF', new CurrencyDataImpl_0('XAF', 'FCFA', 0));
  $put_1(result, 'XAG', new CurrencyDataImpl_0('XAG', 'XAG', 2));
  $put_1(result, 'XAU', new CurrencyDataImpl_0('XAU', 'XAU', 2));
  $put_1(result, 'XBA', new CurrencyDataImpl_0('XBA', 'XBA', 2));
  $put_1(result, 'XBB', new CurrencyDataImpl_0('XBB', 'XBB', 2));
  $put_1(result, 'XBC', new CurrencyDataImpl_0('XBC', 'XBC', 2));
  $put_1(result, 'XBD', new CurrencyDataImpl_0('XBD', 'XBD', 2));
  $put_1(result, 'XCD', new CurrencyDataImpl_0('XCD', 'EC$', 2));
  $put_1(result, 'XDR', new CurrencyDataImpl_0('XDR', 'XDR', 2));
  $put_1(result, 'XEU', new CurrencyDataImpl_0('XEU', 'XEU', 2));
  $put_1(result, 'XFO', new CurrencyDataImpl_0('XFO', 'XFO', 2));
  $put_1(result, 'XFU', new CurrencyDataImpl_0('XFU', 'XFU', 2));
  $put_1(result, 'XOF', new CurrencyDataImpl_0('XOF', 'CFA', 0));
  $put_1(result, 'XPD', new CurrencyDataImpl_0('XPD', 'XPD', 2));
  $put_1(result, 'XPF', new CurrencyDataImpl_0('XPF', 'CFPF', 0));
  $put_1(result, 'XPT', new CurrencyDataImpl_0('XPT', 'XPT', 2));
  $put_1(result, 'XRE', new CurrencyDataImpl_0('XRE', 'XRE', 2));
  $put_1(result, 'XTS', new CurrencyDataImpl_0('XTS', 'XTS', 2));
  $put_1(result, 'XXX', new CurrencyDataImpl_0('XXX', 'XXX', 2));
  $put_1(result, 'YDD', new CurrencyDataImpl_0('YDD', 'YDD', 130));
  $put_1(result, 'YER', new CurrencyDataImpl_1('YER', 'YR', 0, 'YER'));
  $put_1(result, 'YUD', new CurrencyDataImpl_0('YUD', 'YUD', 130));
  $put_1(result, 'YUM', new CurrencyDataImpl_0('YUM', 'YUM', 130));
  $put_1(result, 'YUN', new CurrencyDataImpl_0('YUN', 'YUN', 130));
  $put_1(result, 'YUR', new CurrencyDataImpl_0('YUR', 'YUR', 130));
  $put_1(result, 'ZAL', new CurrencyDataImpl_0('ZAL', 'ZAL', 2));
  $put_1(result, 'ZAR', new CurrencyDataImpl_1('ZAR', 'R', 2, 'ZAR'));
  $put_1(result, 'ZMK', new CurrencyDataImpl_0('ZMK', 'ZK', 0));
  $put_1(result, 'ZRN', new CurrencyDataImpl_0('ZRN', 'NZ', 130));
  $put_1(result, 'ZRZ', new CurrencyDataImpl_0('ZRZ', 'ZRZ', 130));
  $put_1(result, 'ZWD', new CurrencyDataImpl_0('ZWD', 'Z$', 128));
  $put_1(result, 'ZWL', new CurrencyDataImpl_0('ZWL', 'ZWL', 2));
  $put_1(result, 'ZWR', new CurrencyDataImpl_0('ZWR', 'ZWR', 130));
  return result;
}
;
_.loadCurrencyMapNative = function loadCurrencyMapNative_6(){
  return overrideMap($loadCurrencyMapNative_1(this), $loadMyCurrencyMapOverridesNative_5());
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
function $$init_131(){
}

function CurrencyList_en_GB_0(){
  CurrencyList_en_0.call(this);
  $$init_131();
}

function CurrencyList_en_GB(){
}

_ = CurrencyList_en_GB_0.prototype = CurrencyList_en_GB.prototype = new CurrencyList_en;
_.getClass$ = function getClass_132(){
  return Lcom_google_gwt_i18n_client_CurrencyList_1en_1GB_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava_7(){
  return new CurrencyDataImpl_1('GBP', '\xA3', 2, 'GB\xA3');
}
;
_.getDefaultNative = function getDefaultNative_7(){
  return ['GBP', '\xA3', 2, 'GB\xA3'];
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
function $$init_132(){
}

function $loadMyCurrencyMapOverridesNative_6(){
  return {ADP:['ADP', 'ADP', 128], AED:['AED', 'DH', 2, 'DH'], AFA:['AFA', 'AFA', 130], AFN:['AFN', 'Af', 0], ALL:['ALL', 'ALL', 0], AMD:['AMD', 'AMD', 0], ANG:['ANG', 'NAf.', 2], AOA:['AOA', 'Kz', 2], AOK:['AOK', 'AOK', 130], AON:['AON', 'AON', 130], AOR:['AOR', 'AOR', 130], ARA:['ARA', '\u20B3', 130], ARL:['ARL', '$L', 130], ARM:['ARM', 'm$n', 130], ARP:['ARP', 'ARP', 130], ARS:['ARS', 'AR$', 2, 'AR$'], ATS:['ATS', 'ATS', 130], AUD:['AUD', 'AU$', 2, 'AU$'], AWG:['AWG', 'Afl.', 2], AZM:['AZM', 'AZM', 130], AZN:['AZN', 'man.', 2], BAD:['BAD', 'BAD', 130], BAM:['BAM', 'KM', 2], BAN:['BAN', 'BAN', 130], BBD:['BBD', 'Bds$', 2], BDT:['BDT', 'Tk', 2, 'Tk'], BEC:['BEC', 'BEC', 2], BEF:['BEF', 'BF', 130], BEL:['BEL', 'BEL', 2], BGL:['BGL', 'BGL', 130], BGM:['BGM', 'BGM', 130], BGN:['BGN', 'BGN', 2], BGO:['BGO', 'BGO', 130], BHD:['BHD', 'BD', 3], BIF:['BIF', 'FBu', 0], BMD:['BMD', 'BD$', 2], BND:['BND', 'BN$', 2], BOB:['BOB', 'Bs', 2], BOL:['BOL', 'BOL', 130], BOP:['BOP', '$b.', 130], BOV:['BOV', 'BOV', 2], BRB:['BRB', 'BRB', 130], BRC:['BRC', 'BRC', 130], BRE:['BRE', 'BRE', 130], BRL:['BRL', 'R$', 2, 'R$'], BRN:['BRN', 'BRN', 130], BRR:['BRR', 'BRR', 130], BRZ:['BRZ', 'BRZ', 130], BSD:['BSD', 'BS$', 2], BTN:['BTN', 'Nu.', 2], BUK:['BUK', 'BUK', 130], BWP:['BWP', 'BWP', 2], BYB:['BYB', 'BYB', 130], BYR:['BYR', 'BYR', 0], BZD:['BZD', 'BZ$', 2], CAD:['CAD', 'CA$', 2, 'C$'], CDF:['CDF', 'CDF', 2], CHE:['CHE', 'CHE', 2], CHF:['CHF', 'Fr.', 2, 'CHF'], CHW:['CHW', 'CHW', 2], CLE:['CLE', 'E\xBA', 130], CLF:['CLF', 'CLF', 0], CLP:['CLP', 'CL$', 0, 'CL$'], CNY:['CNY', 'CN\xA5', 2, 'RMB\xA5'], COP:['COP', 'CO$', 0, 'COL$'], COU:['COU', 'COU', 2], CRC:['CRC', '\u20A1', 0, 'CR\u20A1'], CSD:['CSD', 'CSD', 130], CSK:['CSK', 'CSK', 130], CUC:['CUC', 'CUC$', 2], CUP:['CUP', 'CU$', 2, '$MN'], CVE:['CVE', 'CV$', 2], CYP:['CYP', 'CY\xA3', 130], CZK:['CZK', 'K\u010D', 2, 'K\u010D'], DDM:['DDM', 'DDM', 130], DEM:['DEM', 'DM', 130], DJF:['DJF', 'Fdj', 0], DKK:['DKK', 'Dkr', 2, 'kr'], DOP:['DOP', 'RD$', 2, 'RD$'], DZD:['DZD', 'DA', 2], ECS:['ECS', 'ECS', 130], ECV:['ECV', 'ECV', 2], EEK:['EEK', 'Ekr', 2], EGP:['EGP', 'EG\xA3', 2, 'LE'], EQE:['EQE', 'EQE', 130], ERN:['ERN', 'Nfk', 2], ESA:['ESA', 'ESA', 2], ESB:['ESB', 'ESB', 2], ESP:['ESP', 'Pts', 128], ETB:['ETB', 'Br', 2], EUR:['EUR', '\u20AC', 2, '\u20AC'], FIM:['FIM', 'mk', 130], FJD:['FJD', 'FJ$', 2], FKP:['FKP', 'FK\xA3', 2], FRF:['FRF', '\u20A3', 130], GBP:['GBP', '\xA3', 2, 'GB\xA3'], GEK:['GEK', 'GEK', 130], GEL:['GEL', 'GEL', 2], GHC:['GHC', '\u20B5', 130], GHS:['GHS', 'GH\u20B5', 2], GIP:['GIP', 'GI\xA3', 2], GMD:['GMD', 'GMD', 2], GNF:['GNF', 'FG', 0], GNS:['GNS', 'GNS', 130], GQE:['GQE', 'GQE', 130], GRD:['GRD', '\u20AF', 130], GTQ:['GTQ', 'GTQ', 2], GWE:['GWE', 'GWE', 130], GWP:['GWP', 'GWP', 2], GYD:['GYD', 'GY$', 0], HKD:['HKD', '$', 2, 'HK$'], HNL:['HNL', 'HNL', 2], HRD:['HRD', 'HRD', 130], HRK:['HRK', 'kn', 2], HTG:['HTG', 'HTG', 2], HUF:['HUF', 'Ft', 0], IDR:['IDR', 'Rp', 0], IEP:['IEP', 'IR\xA3', 130], ILP:['ILP', 'I\xA3', 130], ILR:['ILR', 'ILR', 130], ILS:['ILS', '\u20AA', 2, 'IL\u20AA'], INR:['INR', 'Rs', 2, 'Rs'], IQD:['IQD', 'IQD', 0], IRR:['IRR', 'IRR', 0], ISJ:['ISJ', 'ISJ', 130], ISK:['ISK', 'Ikr', 0, 'kr'], ITL:['ITL', 'IT\u20A4', 128], JMD:['JMD', 'J$', 2, 'JA$'], JOD:['JOD', 'JD', 3], JPY:['JPY', '\xA5', 0, 'JP\xA5'], KES:['KES', 'Ksh', 2], KGS:['KGS', 'KGS', 2], KHR:['KHR', 'KHR', 2], KMF:['KMF', 'CF', 0], KPW:['KPW', 'KPW', 0], KRH:['KRH', 'KRH', 130], KRO:['KRO', 'KRO', 130], KRW:['KRW', '\u20A9', 0, 'KR\u20A9'], KWD:['KWD', 'KD', 3], KYD:['KYD', 'KY$', 2], KZT:['KZT', 'KZT', 2], LAK:['LAK', '\u20AD', 0], LBP:['LBP', 'LB\xA3', 0], LKR:['LKR', 'SLRs', 2, 'SLRs'], LRD:['LRD', 'L$', 2], LSL:['LSL', 'LSL', 2], LSM:['LSM', 'LSM', 130], LTL:['LTL', 'Lt', 2], LTT:['LTT', 'LTT', 130], LUC:['LUC', 'LUC', 2], LUF:['LUF', 'LUF', 128], LUL:['LUL', 'LUL', 2], LVL:['LVL', 'Ls', 2], LVR:['LVR', 'LVR', 130], LYD:['LYD', 'LD', 3], MAD:['MAD', 'MAD', 2], MAF:['MAF', 'MAF', 130], MCF:['MCF', 'MCF', 130], MDC:['MDC', 'MDC', 130], MDL:['MDL', 'MDL', 2], MGA:['MGA', 'MGA', 0], MGF:['MGF', 'MGF', 128], MKD:['MKD', 'MKD', 2], MKN:['MKN', 'MKN', 130], MLF:['MLF', 'MLF', 130], MMK:['MMK', 'MMK', 0], MNT:['MNT', '\u20AE', 0, 'MN\u20AE'], MOP:['MOP', 'MOP$', 2], MRO:['MRO', 'UM', 0], MTL:['MTL', 'Lm', 130], MTP:['MTP', 'MT\xA3', 130], MUR:['MUR', 'MURs', 0], MVP:['MVP', 'MVP', 130], MVR:['MVR', 'MVR', 2], MWK:['MWK', 'MWK', 2], MXN:['MXN', 'Mex$', 2, 'Mex$'], MXP:['MXP', 'MX$', 130], MXV:['MXV', 'MXV', 2], MYR:['MYR', 'RM', 2, 'RM'], MZE:['MZE', 'MZE', 130], MZM:['MZM', 'Mt', 130], MZN:['MZN', 'MTn', 2], NAD:['NAD', 'N$', 2], NGN:['NGN', '\u20A6', 2], NIC:['NIC', 'NIC', 130], NIO:['NIO', 'C$', 2], NLG:['NLG', 'fl', 130], NOK:['NOK', 'Nkr', 2, 'NOkr'], NPR:['NPR', 'NPRs', 2], NZD:['NZD', 'NZ$', 2], OMR:['OMR', 'OMR', 3], PAB:['PAB', 'B/.', 2, 'B/.'], PEI:['PEI', 'I/.', 130], PEN:['PEN', 'S/.', 2, 'S/.'], PES:['PES', 'PES', 130], PGK:['PGK', 'PGK', 2], PHP:['PHP', '\u20B1', 2, 'PHP'], PKR:['PKR', 'PKRs', 0, 'PKRs.'], PLN:['PLN', 'z\u0142', 2], PLZ:['PLZ', 'PLZ', 130], PTE:['PTE', 'Esc', 130], PYG:['PYG', '\u20B2', 0], QAR:['QAR', 'QR', 2], RHD:['RHD', 'RH$', 130], ROL:['ROL', 'ROL', 130], RON:['RON', 'RON', 2], RSD:['RSD', 'din.', 0], RUB:['RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'], RUR:['RUR', 'RUR', 130], RWF:['RWF', 'RWF', 0], SAR:['SAR', 'SR', 2, 'SR'], SBD:['SBD', 'SI$', 2], SCR:['SCR', 'SRe', 2], SDD:['SDD', 'LSd', 130], SDG:['SDG', 'SDG', 2], SDP:['SDP', 'SDP', 130], SEK:['SEK', 'Skr', 2, 'kr'], SGD:['SGD', 'S$', 2, 'S$'], SHP:['SHP', 'SH\xA3', 2], SIT:['SIT', 'SIT', 130], SKK:['SKK', 'Sk', 130], SLL:['SLL', 'Le', 0], SOS:['SOS', 'Ssh', 0], SRD:['SRD', 'SR$', 2], SRG:['SRG', 'Sf', 130], STD:['STD', 'Db', 0], SUR:['SUR', 'SUR', 130], SVC:['SVC', 'SV\u20A1', 130], SYP:['SYP', 'SY\xA3', 0], SZL:['SZL', 'SZL', 2], THB:['THB', '\u0E3F', 2, 'THB'], TJR:['TJR', 'TJR', 130], TJS:['TJS', 'TJS', 2], TMM:['TMM', 'TMM', 128], TMT:['TMT', 'TMT', 2], TND:['TND', 'DT', 3], TOP:['TOP', 'T$', 2], TPE:['TPE', 'TPE', 130], TRL:['TRL', 'TRL', 128], TRY:['TRY', 'TL', 2, 'YTL'], TTD:['TTD', 'TT$', 2], TWD:['TWD', 'NT$', 2, 'NT$'], TZS:['TZS', 'TSh', 0], UAH:['UAH', '\u20B4', 2], UAK:['UAK', 'UAK', 130], UGS:['UGS', 'UGS', 130], UGX:['UGX', 'USh', 0], USD:['USD', 'US$', 2, 'US$'], USN:['USN', 'USN', 2], USS:['USS', 'USS', 2], UYI:['UYI', 'UYI', 2], UYP:['UYP', 'UYP', 130], UYU:['UYU', '$U', 2, 'UY$'], UZS:['UZS', 'UZS', 0], VEB:['VEB', 'VEB', 130], VEF:['VEF', 'Bs.F.', 2], VND:['VND', '\u20AB', 24, '\u20AB'], VNN:['VNN', 'VNN', 130], VUV:['VUV', 'VT', 0], WST:['WST', 'WS$', 2], XAF:['XAF', 'FCFA', 0], XAG:['XAG', 'XAG', 2], XAU:['XAU', 'XAU', 2], XBA:['XBA', 'XBA', 2], XBB:['XBB', 'XBB', 2], XBC:['XBC', 'XBC', 2], XBD:['XBD', 'XBD', 2], XCD:['XCD', 'EC$', 2], XDR:['XDR', 'XDR', 2], XEU:['XEU', 'XEU', 2], XFO:['XFO', 'XFO', 2], XFU:['XFU', 'XFU', 2], XOF:['XOF', 'CFA', 0], XPD:['XPD', 'XPD', 2], XPF:['XPF', 'CFPF', 0], XPT:['XPT', 'XPT', 2], XRE:['XRE', 'XRE', 2], XTS:['XTS', 'XTS', 2], XXX:['XXX', 'XXX', 2], YDD:['YDD', 'YDD', 130], YER:['YER', 'YR', 0, 'YER'], YUD:['YUD', 'YUD', 130], YUM:['YUM', 'YUM', 130], YUN:['YUN', 'YUN', 130], YUR:['YUR', 'YUR', 130], ZAL:['ZAL', 'ZAL', 2], ZAR:['ZAR', 'R', 2, 'ZAR'], ZMK:['ZMK', 'ZK', 0], ZRN:['ZRN', 'NZ', 130], ZRZ:['ZRZ', 'ZRZ', 130], ZWD:['ZWD', 'Z$', 128], ZWL:['ZWL', 'ZWL', 2], ZWR:['ZWR', 'ZWR', 130]};
}

function CurrencyList_en_HK_0(){
  CurrencyList_en_0.call(this);
  $$init_132();
}

function CurrencyList_en_HK(){
}

_ = CurrencyList_en_HK_0.prototype = CurrencyList_en_HK.prototype = new CurrencyList_en;
_.getClass$ = function getClass_133(){
  return Lcom_google_gwt_i18n_client_CurrencyList_1en_1HK_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava_8(){
  return new CurrencyDataImpl_1('HKD', '$', 2, 'HK$');
}
;
_.getDefaultNative = function getDefaultNative_8(){
  return ['HKD', '$', 2, 'HK$'];
}
;
_.loadCurrencyMapJava = function loadCurrencyMapJava_7(){
  var result;
  result = $loadCurrencyMapJava_1(this);
  $put_1(result, 'ADP', new CurrencyDataImpl_0('ADP', 'ADP', 128));
  $put_1(result, 'AED', new CurrencyDataImpl_1('AED', 'DH', 2, 'DH'));
  $put_1(result, 'AFA', new CurrencyDataImpl_0('AFA', 'AFA', 130));
  $put_1(result, 'AFN', new CurrencyDataImpl_0('AFN', 'Af', 0));
  $put_1(result, 'ALL', new CurrencyDataImpl_0('ALL', 'ALL', 0));
  $put_1(result, 'AMD', new CurrencyDataImpl_0('AMD', 'AMD', 0));
  $put_1(result, 'ANG', new CurrencyDataImpl_0('ANG', 'NAf.', 2));
  $put_1(result, 'AOA', new CurrencyDataImpl_0('AOA', 'Kz', 2));
  $put_1(result, 'AOK', new CurrencyDataImpl_0('AOK', 'AOK', 130));
  $put_1(result, 'AON', new CurrencyDataImpl_0('AON', 'AON', 130));
  $put_1(result, 'AOR', new CurrencyDataImpl_0('AOR', 'AOR', 130));
  $put_1(result, 'ARA', new CurrencyDataImpl_0('ARA', '\u20B3', 130));
  $put_1(result, 'ARL', new CurrencyDataImpl_0('ARL', '$L', 130));
  $put_1(result, 'ARM', new CurrencyDataImpl_0('ARM', 'm$n', 130));
  $put_1(result, 'ARP', new CurrencyDataImpl_0('ARP', 'ARP', 130));
  $put_1(result, 'ARS', new CurrencyDataImpl_1('ARS', 'AR$', 2, 'AR$'));
  $put_1(result, 'ATS', new CurrencyDataImpl_0('ATS', 'ATS', 130));
  $put_1(result, 'AUD', new CurrencyDataImpl_1('AUD', 'AU$', 2, 'AU$'));
  $put_1(result, 'AWG', new CurrencyDataImpl_0('AWG', 'Afl.', 2));
  $put_1(result, 'AZM', new CurrencyDataImpl_0('AZM', 'AZM', 130));
  $put_1(result, 'AZN', new CurrencyDataImpl_0('AZN', 'man.', 2));
  $put_1(result, 'BAD', new CurrencyDataImpl_0('BAD', 'BAD', 130));
  $put_1(result, 'BAM', new CurrencyDataImpl_0('BAM', 'KM', 2));
  $put_1(result, 'BAN', new CurrencyDataImpl_0('BAN', 'BAN', 130));
  $put_1(result, 'BBD', new CurrencyDataImpl_0('BBD', 'Bds$', 2));
  $put_1(result, 'BDT', new CurrencyDataImpl_1('BDT', 'Tk', 2, 'Tk'));
  $put_1(result, 'BEC', new CurrencyDataImpl_0('BEC', 'BEC', 2));
  $put_1(result, 'BEF', new CurrencyDataImpl_0('BEF', 'BF', 130));
  $put_1(result, 'BEL', new CurrencyDataImpl_0('BEL', 'BEL', 2));
  $put_1(result, 'BGL', new CurrencyDataImpl_0('BGL', 'BGL', 130));
  $put_1(result, 'BGM', new CurrencyDataImpl_0('BGM', 'BGM', 130));
  $put_1(result, 'BGN', new CurrencyDataImpl_0('BGN', 'BGN', 2));
  $put_1(result, 'BGO', new CurrencyDataImpl_0('BGO', 'BGO', 130));
  $put_1(result, 'BHD', new CurrencyDataImpl_0('BHD', 'BD', 3));
  $put_1(result, 'BIF', new CurrencyDataImpl_0('BIF', 'FBu', 0));
  $put_1(result, 'BMD', new CurrencyDataImpl_0('BMD', 'BD$', 2));
  $put_1(result, 'BND', new CurrencyDataImpl_0('BND', 'BN$', 2));
  $put_1(result, 'BOB', new CurrencyDataImpl_0('BOB', 'Bs', 2));
  $put_1(result, 'BOL', new CurrencyDataImpl_0('BOL', 'BOL', 130));
  $put_1(result, 'BOP', new CurrencyDataImpl_0('BOP', '$b.', 130));
  $put_1(result, 'BOV', new CurrencyDataImpl_0('BOV', 'BOV', 2));
  $put_1(result, 'BRB', new CurrencyDataImpl_0('BRB', 'BRB', 130));
  $put_1(result, 'BRC', new CurrencyDataImpl_0('BRC', 'BRC', 130));
  $put_1(result, 'BRE', new CurrencyDataImpl_0('BRE', 'BRE', 130));
  $put_1(result, 'BRL', new CurrencyDataImpl_1('BRL', 'R$', 2, 'R$'));
  $put_1(result, 'BRN', new CurrencyDataImpl_0('BRN', 'BRN', 130));
  $put_1(result, 'BRR', new CurrencyDataImpl_0('BRR', 'BRR', 130));
  $put_1(result, 'BRZ', new CurrencyDataImpl_0('BRZ', 'BRZ', 130));
  $put_1(result, 'BSD', new CurrencyDataImpl_0('BSD', 'BS$', 2));
  $put_1(result, 'BTN', new CurrencyDataImpl_0('BTN', 'Nu.', 2));
  $put_1(result, 'BUK', new CurrencyDataImpl_0('BUK', 'BUK', 130));
  $put_1(result, 'BWP', new CurrencyDataImpl_0('BWP', 'BWP', 2));
  $put_1(result, 'BYB', new CurrencyDataImpl_0('BYB', 'BYB', 130));
  $put_1(result, 'BYR', new CurrencyDataImpl_0('BYR', 'BYR', 0));
  $put_1(result, 'BZD', new CurrencyDataImpl_0('BZD', 'BZ$', 2));
  $put_1(result, 'CAD', new CurrencyDataImpl_1('CAD', 'CA$', 2, 'C$'));
  $put_1(result, 'CDF', new CurrencyDataImpl_0('CDF', 'CDF', 2));
  $put_1(result, 'CHE', new CurrencyDataImpl_0('CHE', 'CHE', 2));
  $put_1(result, 'CHF', new CurrencyDataImpl_1('CHF', 'Fr.', 2, 'CHF'));
  $put_1(result, 'CHW', new CurrencyDataImpl_0('CHW', 'CHW', 2));
  $put_1(result, 'CLE', new CurrencyDataImpl_0('CLE', 'E\xBA', 130));
  $put_1(result, 'CLF', new CurrencyDataImpl_0('CLF', 'CLF', 0));
  $put_1(result, 'CLP', new CurrencyDataImpl_1('CLP', 'CL$', 0, 'CL$'));
  $put_1(result, 'CNY', new CurrencyDataImpl_1('CNY', 'CN\xA5', 2, 'RMB\xA5'));
  $put_1(result, 'COP', new CurrencyDataImpl_1('COP', 'CO$', 0, 'COL$'));
  $put_1(result, 'COU', new CurrencyDataImpl_0('COU', 'COU', 2));
  $put_1(result, 'CRC', new CurrencyDataImpl_1('CRC', '\u20A1', 0, 'CR\u20A1'));
  $put_1(result, 'CSD', new CurrencyDataImpl_0('CSD', 'CSD', 130));
  $put_1(result, 'CSK', new CurrencyDataImpl_0('CSK', 'CSK', 130));
  $put_1(result, 'CUC', new CurrencyDataImpl_0('CUC', 'CUC$', 2));
  $put_1(result, 'CUP', new CurrencyDataImpl_1('CUP', 'CU$', 2, '$MN'));
  $put_1(result, 'CVE', new CurrencyDataImpl_0('CVE', 'CV$', 2));
  $put_1(result, 'CYP', new CurrencyDataImpl_0('CYP', 'CY\xA3', 130));
  $put_1(result, 'CZK', new CurrencyDataImpl_1('CZK', 'K\u010D', 2, 'K\u010D'));
  $put_1(result, 'DDM', new CurrencyDataImpl_0('DDM', 'DDM', 130));
  $put_1(result, 'DEM', new CurrencyDataImpl_0('DEM', 'DM', 130));
  $put_1(result, 'DJF', new CurrencyDataImpl_0('DJF', 'Fdj', 0));
  $put_1(result, 'DKK', new CurrencyDataImpl_1('DKK', 'Dkr', 2, 'kr'));
  $put_1(result, 'DOP', new CurrencyDataImpl_1('DOP', 'RD$', 2, 'RD$'));
  $put_1(result, 'DZD', new CurrencyDataImpl_0('DZD', 'DA', 2));
  $put_1(result, 'ECS', new CurrencyDataImpl_0('ECS', 'ECS', 130));
  $put_1(result, 'ECV', new CurrencyDataImpl_0('ECV', 'ECV', 2));
  $put_1(result, 'EEK', new CurrencyDataImpl_0('EEK', 'Ekr', 2));
  $put_1(result, 'EGP', new CurrencyDataImpl_1('EGP', 'EG\xA3', 2, 'LE'));
  $put_1(result, 'EQE', new CurrencyDataImpl_0('EQE', 'EQE', 130));
  $put_1(result, 'ERN', new CurrencyDataImpl_0('ERN', 'Nfk', 2));
  $put_1(result, 'ESA', new CurrencyDataImpl_0('ESA', 'ESA', 2));
  $put_1(result, 'ESB', new CurrencyDataImpl_0('ESB', 'ESB', 2));
  $put_1(result, 'ESP', new CurrencyDataImpl_0('ESP', 'Pts', 128));
  $put_1(result, 'ETB', new CurrencyDataImpl_0('ETB', 'Br', 2));
  $put_1(result, 'EUR', new CurrencyDataImpl_1('EUR', '\u20AC', 2, '\u20AC'));
  $put_1(result, 'FIM', new CurrencyDataImpl_0('FIM', 'mk', 130));
  $put_1(result, 'FJD', new CurrencyDataImpl_0('FJD', 'FJ$', 2));
  $put_1(result, 'FKP', new CurrencyDataImpl_0('FKP', 'FK\xA3', 2));
  $put_1(result, 'FRF', new CurrencyDataImpl_0('FRF', '\u20A3', 130));
  $put_1(result, 'GBP', new CurrencyDataImpl_1('GBP', '\xA3', 2, 'GB\xA3'));
  $put_1(result, 'GEK', new CurrencyDataImpl_0('GEK', 'GEK', 130));
  $put_1(result, 'GEL', new CurrencyDataImpl_0('GEL', 'GEL', 2));
  $put_1(result, 'GHC', new CurrencyDataImpl_0('GHC', '\u20B5', 130));
  $put_1(result, 'GHS', new CurrencyDataImpl_0('GHS', 'GH\u20B5', 2));
  $put_1(result, 'GIP', new CurrencyDataImpl_0('GIP', 'GI\xA3', 2));
  $put_1(result, 'GMD', new CurrencyDataImpl_0('GMD', 'GMD', 2));
  $put_1(result, 'GNF', new CurrencyDataImpl_0('GNF', 'FG', 0));
  $put_1(result, 'GNS', new CurrencyDataImpl_0('GNS', 'GNS', 130));
  $put_1(result, 'GQE', new CurrencyDataImpl_0('GQE', 'GQE', 130));
  $put_1(result, 'GRD', new CurrencyDataImpl_0('GRD', '\u20AF', 130));
  $put_1(result, 'GTQ', new CurrencyDataImpl_0('GTQ', 'GTQ', 2));
  $put_1(result, 'GWE', new CurrencyDataImpl_0('GWE', 'GWE', 130));
  $put_1(result, 'GWP', new CurrencyDataImpl_0('GWP', 'GWP', 2));
  $put_1(result, 'GYD', new CurrencyDataImpl_0('GYD', 'GY$', 0));
  $put_1(result, 'HKD', new CurrencyDataImpl_1('HKD', '$', 2, 'HK$'));
  $put_1(result, 'HNL', new CurrencyDataImpl_0('HNL', 'HNL', 2));
  $put_1(result, 'HRD', new CurrencyDataImpl_0('HRD', 'HRD', 130));
  $put_1(result, 'HRK', new CurrencyDataImpl_0('HRK', 'kn', 2));
  $put_1(result, 'HTG', new CurrencyDataImpl_0('HTG', 'HTG', 2));
  $put_1(result, 'HUF', new CurrencyDataImpl_0('HUF', 'Ft', 0));
  $put_1(result, 'IDR', new CurrencyDataImpl_0('IDR', 'Rp', 0));
  $put_1(result, 'IEP', new CurrencyDataImpl_0('IEP', 'IR\xA3', 130));
  $put_1(result, 'ILP', new CurrencyDataImpl_0('ILP', 'I\xA3', 130));
  $put_1(result, 'ILR', new CurrencyDataImpl_0('ILR', 'ILR', 130));
  $put_1(result, 'ILS', new CurrencyDataImpl_1('ILS', '\u20AA', 2, 'IL\u20AA'));
  $put_1(result, 'INR', new CurrencyDataImpl_1('INR', 'Rs', 2, 'Rs'));
  $put_1(result, 'IQD', new CurrencyDataImpl_0('IQD', 'IQD', 0));
  $put_1(result, 'IRR', new CurrencyDataImpl_0('IRR', 'IRR', 0));
  $put_1(result, 'ISJ', new CurrencyDataImpl_0('ISJ', 'ISJ', 130));
  $put_1(result, 'ISK', new CurrencyDataImpl_1('ISK', 'Ikr', 0, 'kr'));
  $put_1(result, 'ITL', new CurrencyDataImpl_0('ITL', 'IT\u20A4', 128));
  $put_1(result, 'JMD', new CurrencyDataImpl_1('JMD', 'J$', 2, 'JA$'));
  $put_1(result, 'JOD', new CurrencyDataImpl_0('JOD', 'JD', 3));
  $put_1(result, 'JPY', new CurrencyDataImpl_1('JPY', '\xA5', 0, 'JP\xA5'));
  $put_1(result, 'KES', new CurrencyDataImpl_0('KES', 'Ksh', 2));
  $put_1(result, 'KGS', new CurrencyDataImpl_0('KGS', 'KGS', 2));
  $put_1(result, 'KHR', new CurrencyDataImpl_0('KHR', 'KHR', 2));
  $put_1(result, 'KMF', new CurrencyDataImpl_0('KMF', 'CF', 0));
  $put_1(result, 'KPW', new CurrencyDataImpl_0('KPW', 'KPW', 0));
  $put_1(result, 'KRH', new CurrencyDataImpl_0('KRH', 'KRH', 130));
  $put_1(result, 'KRO', new CurrencyDataImpl_0('KRO', 'KRO', 130));
  $put_1(result, 'KRW', new CurrencyDataImpl_1('KRW', '\u20A9', 0, 'KR\u20A9'));
  $put_1(result, 'KWD', new CurrencyDataImpl_0('KWD', 'KD', 3));
  $put_1(result, 'KYD', new CurrencyDataImpl_0('KYD', 'KY$', 2));
  $put_1(result, 'KZT', new CurrencyDataImpl_0('KZT', 'KZT', 2));
  $put_1(result, 'LAK', new CurrencyDataImpl_0('LAK', '\u20AD', 0));
  $put_1(result, 'LBP', new CurrencyDataImpl_0('LBP', 'LB\xA3', 0));
  $put_1(result, 'LKR', new CurrencyDataImpl_1('LKR', 'SLRs', 2, 'SLRs'));
  $put_1(result, 'LRD', new CurrencyDataImpl_0('LRD', 'L$', 2));
  $put_1(result, 'LSL', new CurrencyDataImpl_0('LSL', 'LSL', 2));
  $put_1(result, 'LSM', new CurrencyDataImpl_0('LSM', 'LSM', 130));
  $put_1(result, 'LTL', new CurrencyDataImpl_0('LTL', 'Lt', 2));
  $put_1(result, 'LTT', new CurrencyDataImpl_0('LTT', 'LTT', 130));
  $put_1(result, 'LUC', new CurrencyDataImpl_0('LUC', 'LUC', 2));
  $put_1(result, 'LUF', new CurrencyDataImpl_0('LUF', 'LUF', 128));
  $put_1(result, 'LUL', new CurrencyDataImpl_0('LUL', 'LUL', 2));
  $put_1(result, 'LVL', new CurrencyDataImpl_0('LVL', 'Ls', 2));
  $put_1(result, 'LVR', new CurrencyDataImpl_0('LVR', 'LVR', 130));
  $put_1(result, 'LYD', new CurrencyDataImpl_0('LYD', 'LD', 3));
  $put_1(result, 'MAD', new CurrencyDataImpl_0('MAD', 'MAD', 2));
  $put_1(result, 'MAF', new CurrencyDataImpl_0('MAF', 'MAF', 130));
  $put_1(result, 'MCF', new CurrencyDataImpl_0('MCF', 'MCF', 130));
  $put_1(result, 'MDC', new CurrencyDataImpl_0('MDC', 'MDC', 130));
  $put_1(result, 'MDL', new CurrencyDataImpl_0('MDL', 'MDL', 2));
  $put_1(result, 'MGA', new CurrencyDataImpl_0('MGA', 'MGA', 0));
  $put_1(result, 'MGF', new CurrencyDataImpl_0('MGF', 'MGF', 128));
  $put_1(result, 'MKD', new CurrencyDataImpl_0('MKD', 'MKD', 2));
  $put_1(result, 'MKN', new CurrencyDataImpl_0('MKN', 'MKN', 130));
  $put_1(result, 'MLF', new CurrencyDataImpl_0('MLF', 'MLF', 130));
  $put_1(result, 'MMK', new CurrencyDataImpl_0('MMK', 'MMK', 0));
  $put_1(result, 'MNT', new CurrencyDataImpl_1('MNT', '\u20AE', 0, 'MN\u20AE'));
  $put_1(result, 'MOP', new CurrencyDataImpl_0('MOP', 'MOP$', 2));
  $put_1(result, 'MRO', new CurrencyDataImpl_0('MRO', 'UM', 0));
  $put_1(result, 'MTL', new CurrencyDataImpl_0('MTL', 'Lm', 130));
  $put_1(result, 'MTP', new CurrencyDataImpl_0('MTP', 'MT\xA3', 130));
  $put_1(result, 'MUR', new CurrencyDataImpl_0('MUR', 'MURs', 0));
  $put_1(result, 'MVP', new CurrencyDataImpl_0('MVP', 'MVP', 130));
  $put_1(result, 'MVR', new CurrencyDataImpl_0('MVR', 'MVR', 2));
  $put_1(result, 'MWK', new CurrencyDataImpl_0('MWK', 'MWK', 2));
  $put_1(result, 'MXN', new CurrencyDataImpl_1('MXN', 'Mex$', 2, 'Mex$'));
  $put_1(result, 'MXP', new CurrencyDataImpl_0('MXP', 'MX$', 130));
  $put_1(result, 'MXV', new CurrencyDataImpl_0('MXV', 'MXV', 2));
  $put_1(result, 'MYR', new CurrencyDataImpl_1('MYR', 'RM', 2, 'RM'));
  $put_1(result, 'MZE', new CurrencyDataImpl_0('MZE', 'MZE', 130));
  $put_1(result, 'MZM', new CurrencyDataImpl_0('MZM', 'Mt', 130));
  $put_1(result, 'MZN', new CurrencyDataImpl_0('MZN', 'MTn', 2));
  $put_1(result, 'NAD', new CurrencyDataImpl_0('NAD', 'N$', 2));
  $put_1(result, 'NGN', new CurrencyDataImpl_0('NGN', '\u20A6', 2));
  $put_1(result, 'NIC', new CurrencyDataImpl_0('NIC', 'NIC', 130));
  $put_1(result, 'NIO', new CurrencyDataImpl_0('NIO', 'C$', 2));
  $put_1(result, 'NLG', new CurrencyDataImpl_0('NLG', 'fl', 130));
  $put_1(result, 'NOK', new CurrencyDataImpl_1('NOK', 'Nkr', 2, 'NOkr'));
  $put_1(result, 'NPR', new CurrencyDataImpl_0('NPR', 'NPRs', 2));
  $put_1(result, 'NZD', new CurrencyDataImpl_0('NZD', 'NZ$', 2));
  $put_1(result, 'OMR', new CurrencyDataImpl_0('OMR', 'OMR', 3));
  $put_1(result, 'PAB', new CurrencyDataImpl_1('PAB', 'B/.', 2, 'B/.'));
  $put_1(result, 'PEI', new CurrencyDataImpl_0('PEI', 'I/.', 130));
  $put_1(result, 'PEN', new CurrencyDataImpl_1('PEN', 'S/.', 2, 'S/.'));
  $put_1(result, 'PES', new CurrencyDataImpl_0('PES', 'PES', 130));
  $put_1(result, 'PGK', new CurrencyDataImpl_0('PGK', 'PGK', 2));
  $put_1(result, 'PHP', new CurrencyDataImpl_1('PHP', '\u20B1', 2, 'PHP'));
  $put_1(result, 'PKR', new CurrencyDataImpl_1('PKR', 'PKRs', 0, 'PKRs.'));
  $put_1(result, 'PLN', new CurrencyDataImpl_0('PLN', 'z\u0142', 2));
  $put_1(result, 'PLZ', new CurrencyDataImpl_0('PLZ', 'PLZ', 130));
  $put_1(result, 'PTE', new CurrencyDataImpl_0('PTE', 'Esc', 130));
  $put_1(result, 'PYG', new CurrencyDataImpl_0('PYG', '\u20B2', 0));
  $put_1(result, 'QAR', new CurrencyDataImpl_0('QAR', 'QR', 2));
  $put_1(result, 'RHD', new CurrencyDataImpl_0('RHD', 'RH$', 130));
  $put_1(result, 'ROL', new CurrencyDataImpl_0('ROL', 'ROL', 130));
  $put_1(result, 'RON', new CurrencyDataImpl_0('RON', 'RON', 2));
  $put_1(result, 'RSD', new CurrencyDataImpl_0('RSD', 'din.', 0));
  $put_1(result, 'RUB', new CurrencyDataImpl_1('RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'));
  $put_1(result, 'RUR', new CurrencyDataImpl_0('RUR', 'RUR', 130));
  $put_1(result, 'RWF', new CurrencyDataImpl_0('RWF', 'RWF', 0));
  $put_1(result, 'SAR', new CurrencyDataImpl_1('SAR', 'SR', 2, 'SR'));
  $put_1(result, 'SBD', new CurrencyDataImpl_0('SBD', 'SI$', 2));
  $put_1(result, 'SCR', new CurrencyDataImpl_0('SCR', 'SRe', 2));
  $put_1(result, 'SDD', new CurrencyDataImpl_0('SDD', 'LSd', 130));
  $put_1(result, 'SDG', new CurrencyDataImpl_0('SDG', 'SDG', 2));
  $put_1(result, 'SDP', new CurrencyDataImpl_0('SDP', 'SDP', 130));
  $put_1(result, 'SEK', new CurrencyDataImpl_1('SEK', 'Skr', 2, 'kr'));
  $put_1(result, 'SGD', new CurrencyDataImpl_1('SGD', 'S$', 2, 'S$'));
  $put_1(result, 'SHP', new CurrencyDataImpl_0('SHP', 'SH\xA3', 2));
  $put_1(result, 'SIT', new CurrencyDataImpl_0('SIT', 'SIT', 130));
  $put_1(result, 'SKK', new CurrencyDataImpl_0('SKK', 'Sk', 130));
  $put_1(result, 'SLL', new CurrencyDataImpl_0('SLL', 'Le', 0));
  $put_1(result, 'SOS', new CurrencyDataImpl_0('SOS', 'Ssh', 0));
  $put_1(result, 'SRD', new CurrencyDataImpl_0('SRD', 'SR$', 2));
  $put_1(result, 'SRG', new CurrencyDataImpl_0('SRG', 'Sf', 130));
  $put_1(result, 'STD', new CurrencyDataImpl_0('STD', 'Db', 0));
  $put_1(result, 'SUR', new CurrencyDataImpl_0('SUR', 'SUR', 130));
  $put_1(result, 'SVC', new CurrencyDataImpl_0('SVC', 'SV\u20A1', 130));
  $put_1(result, 'SYP', new CurrencyDataImpl_0('SYP', 'SY\xA3', 0));
  $put_1(result, 'SZL', new CurrencyDataImpl_0('SZL', 'SZL', 2));
  $put_1(result, 'THB', new CurrencyDataImpl_1('THB', '\u0E3F', 2, 'THB'));
  $put_1(result, 'TJR', new CurrencyDataImpl_0('TJR', 'TJR', 130));
  $put_1(result, 'TJS', new CurrencyDataImpl_0('TJS', 'TJS', 2));
  $put_1(result, 'TMM', new CurrencyDataImpl_0('TMM', 'TMM', 128));
  $put_1(result, 'TMT', new CurrencyDataImpl_0('TMT', 'TMT', 2));
  $put_1(result, 'TND', new CurrencyDataImpl_0('TND', 'DT', 3));
  $put_1(result, 'TOP', new CurrencyDataImpl_0('TOP', 'T$', 2));
  $put_1(result, 'TPE', new CurrencyDataImpl_0('TPE', 'TPE', 130));
  $put_1(result, 'TRL', new CurrencyDataImpl_0('TRL', 'TRL', 128));
  $put_1(result, 'TRY', new CurrencyDataImpl_1('TRY', 'TL', 2, 'YTL'));
  $put_1(result, 'TTD', new CurrencyDataImpl_0('TTD', 'TT$', 2));
  $put_1(result, 'TWD', new CurrencyDataImpl_1('TWD', 'NT$', 2, 'NT$'));
  $put_1(result, 'TZS', new CurrencyDataImpl_0('TZS', 'TSh', 0));
  $put_1(result, 'UAH', new CurrencyDataImpl_0('UAH', '\u20B4', 2));
  $put_1(result, 'UAK', new CurrencyDataImpl_0('UAK', 'UAK', 130));
  $put_1(result, 'UGS', new CurrencyDataImpl_0('UGS', 'UGS', 130));
  $put_1(result, 'UGX', new CurrencyDataImpl_0('UGX', 'USh', 0));
  $put_1(result, 'USD', new CurrencyDataImpl_1('USD', 'US$', 2, 'US$'));
  $put_1(result, 'USN', new CurrencyDataImpl_0('USN', 'USN', 2));
  $put_1(result, 'USS', new CurrencyDataImpl_0('USS', 'USS', 2));
  $put_1(result, 'UYI', new CurrencyDataImpl_0('UYI', 'UYI', 2));
  $put_1(result, 'UYP', new CurrencyDataImpl_0('UYP', 'UYP', 130));
  $put_1(result, 'UYU', new CurrencyDataImpl_1('UYU', '$U', 2, 'UY$'));
  $put_1(result, 'UZS', new CurrencyDataImpl_0('UZS', 'UZS', 0));
  $put_1(result, 'VEB', new CurrencyDataImpl_0('VEB', 'VEB', 130));
  $put_1(result, 'VEF', new CurrencyDataImpl_0('VEF', 'Bs.F.', 2));
  $put_1(result, 'VND', new CurrencyDataImpl_1('VND', '\u20AB', 24, '\u20AB'));
  $put_1(result, 'VNN', new CurrencyDataImpl_0('VNN', 'VNN', 130));
  $put_1(result, 'VUV', new CurrencyDataImpl_0('VUV', 'VT', 0));
  $put_1(result, 'WST', new CurrencyDataImpl_0('WST', 'WS$', 2));
  $put_1(result, 'XAF', new CurrencyDataImpl_0('XAF', 'FCFA', 0));
  $put_1(result, 'XAG', new CurrencyDataImpl_0('XAG', 'XAG', 2));
  $put_1(result, 'XAU', new CurrencyDataImpl_0('XAU', 'XAU', 2));
  $put_1(result, 'XBA', new CurrencyDataImpl_0('XBA', 'XBA', 2));
  $put_1(result, 'XBB', new CurrencyDataImpl_0('XBB', 'XBB', 2));
  $put_1(result, 'XBC', new CurrencyDataImpl_0('XBC', 'XBC', 2));
  $put_1(result, 'XBD', new CurrencyDataImpl_0('XBD', 'XBD', 2));
  $put_1(result, 'XCD', new CurrencyDataImpl_0('XCD', 'EC$', 2));
  $put_1(result, 'XDR', new CurrencyDataImpl_0('XDR', 'XDR', 2));
  $put_1(result, 'XEU', new CurrencyDataImpl_0('XEU', 'XEU', 2));
  $put_1(result, 'XFO', new CurrencyDataImpl_0('XFO', 'XFO', 2));
  $put_1(result, 'XFU', new CurrencyDataImpl_0('XFU', 'XFU', 2));
  $put_1(result, 'XOF', new CurrencyDataImpl_0('XOF', 'CFA', 0));
  $put_1(result, 'XPD', new CurrencyDataImpl_0('XPD', 'XPD', 2));
  $put_1(result, 'XPF', new CurrencyDataImpl_0('XPF', 'CFPF', 0));
  $put_1(result, 'XPT', new CurrencyDataImpl_0('XPT', 'XPT', 2));
  $put_1(result, 'XRE', new CurrencyDataImpl_0('XRE', 'XRE', 2));
  $put_1(result, 'XTS', new CurrencyDataImpl_0('XTS', 'XTS', 2));
  $put_1(result, 'XXX', new CurrencyDataImpl_0('XXX', 'XXX', 2));
  $put_1(result, 'YDD', new CurrencyDataImpl_0('YDD', 'YDD', 130));
  $put_1(result, 'YER', new CurrencyDataImpl_1('YER', 'YR', 0, 'YER'));
  $put_1(result, 'YUD', new CurrencyDataImpl_0('YUD', 'YUD', 130));
  $put_1(result, 'YUM', new CurrencyDataImpl_0('YUM', 'YUM', 130));
  $put_1(result, 'YUN', new CurrencyDataImpl_0('YUN', 'YUN', 130));
  $put_1(result, 'YUR', new CurrencyDataImpl_0('YUR', 'YUR', 130));
  $put_1(result, 'ZAL', new CurrencyDataImpl_0('ZAL', 'ZAL', 2));
  $put_1(result, 'ZAR', new CurrencyDataImpl_1('ZAR', 'R', 2, 'ZAR'));
  $put_1(result, 'ZMK', new CurrencyDataImpl_0('ZMK', 'ZK', 0));
  $put_1(result, 'ZRN', new CurrencyDataImpl_0('ZRN', 'NZ', 130));
  $put_1(result, 'ZRZ', new CurrencyDataImpl_0('ZRZ', 'ZRZ', 130));
  $put_1(result, 'ZWD', new CurrencyDataImpl_0('ZWD', 'Z$', 128));
  $put_1(result, 'ZWL', new CurrencyDataImpl_0('ZWL', 'ZWL', 2));
  $put_1(result, 'ZWR', new CurrencyDataImpl_0('ZWR', 'ZWR', 130));
  return result;
}
;
_.loadCurrencyMapNative = function loadCurrencyMapNative_7(){
  return overrideMap($loadCurrencyMapNative_1(this), $loadMyCurrencyMapOverridesNative_6());
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
function $$init_133(){
}

function $loadMyCurrencyMapOverridesNative_7(){
  return {GBP:['GBP', 'GBP', 2, 'GB\xA3'], IEP:['IEP', '\xA3', 130]};
}

function CurrencyList_en_IE_0(){
  CurrencyList_en_0.call(this);
  $$init_133();
}

function CurrencyList_en_IE(){
}

_ = CurrencyList_en_IE_0.prototype = CurrencyList_en_IE.prototype = new CurrencyList_en;
_.getClass$ = function getClass_134(){
  return Lcom_google_gwt_i18n_client_CurrencyList_1en_1IE_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava_9(){
  return new CurrencyDataImpl_1('EUR', '\u20AC', 2, '\u20AC');
}
;
_.getDefaultNative = function getDefaultNative_9(){
  return ['EUR', '\u20AC', 2, '\u20AC'];
}
;
_.loadCurrencyMapJava = function loadCurrencyMapJava_8(){
  var result;
  result = $loadCurrencyMapJava_1(this);
  $put_1(result, 'GBP', new CurrencyDataImpl_1('GBP', 'GBP', 2, 'GB\xA3'));
  $put_1(result, 'IEP', new CurrencyDataImpl_0('IEP', '\xA3', 130));
  return result;
}
;
_.loadCurrencyMapNative = function loadCurrencyMapNative_8(){
  return overrideMap($loadCurrencyMapNative_1(this), $loadMyCurrencyMapOverridesNative_7());
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
function $$init_134(){
}

function CurrencyList_en_IN_0(){
  CurrencyList_en_0.call(this);
  $$init_134();
}

function CurrencyList_en_IN(){
}

_ = CurrencyList_en_IN_0.prototype = CurrencyList_en_IN.prototype = new CurrencyList_en;
_.getClass$ = function getClass_135(){
  return Lcom_google_gwt_i18n_client_CurrencyList_1en_1IN_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava_10(){
  return new CurrencyDataImpl_1('INR', 'Rs', 2, 'Rs');
}
;
_.getDefaultNative = function getDefaultNative_10(){
  return ['INR', 'Rs', 2, 'Rs'];
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
function $$init_135(){
}

function $loadMyCurrencyMapOverridesNative_8(){
  return {ADP:['ADP', 'ADP', 128], AED:['AED', 'DH', 2, 'DH'], AFA:['AFA', 'AFA', 130], AFN:['AFN', 'Af', 0], ALL:['ALL', 'ALL', 0], AMD:['AMD', 'AMD', 0], ANG:['ANG', 'NAf.', 2], AOA:['AOA', 'Kz', 2], AOK:['AOK', 'AOK', 130], AON:['AON', 'AON', 130], AOR:['AOR', 'AOR', 130], ARA:['ARA', '\u20B3', 130], ARL:['ARL', '$L', 130], ARM:['ARM', 'm$n', 130], ARP:['ARP', 'ARP', 130], ARS:['ARS', 'AR$', 2, 'AR$'], ATS:['ATS', 'ATS', 130], AUD:['AUD', 'AU$', 2, 'AU$'], AWG:['AWG', 'Afl.', 2], AZM:['AZM', 'AZM', 130], AZN:['AZN', 'man.', 2], BAD:['BAD', 'BAD', 130], BAM:['BAM', 'KM', 2], BAN:['BAN', 'BAN', 130], BBD:['BBD', 'Bds$', 2], BDT:['BDT', 'Tk', 2, 'Tk'], BEC:['BEC', 'BEC', 2], BEF:['BEF', 'BF', 130], BEL:['BEL', 'BEL', 2], BGL:['BGL', 'BGL', 130], BGM:['BGM', 'BGM', 130], BGN:['BGN', 'BGN', 2], BGO:['BGO', 'BGO', 130], BHD:['BHD', 'BD', 3], BIF:['BIF', 'FBu', 0], BMD:['BMD', 'BD$', 2], BND:['BND', 'BN$', 2], BOB:['BOB', 'Bs', 2], BOL:['BOL', 'BOL', 130], BOP:['BOP', '$b.', 130], BOV:['BOV', 'BOV', 2], BRB:['BRB', 'BRB', 130], BRC:['BRC', 'BRC', 130], BRE:['BRE', 'BRE', 130], BRL:['BRL', 'R$', 2, 'R$'], BRN:['BRN', 'BRN', 130], BRR:['BRR', 'BRR', 130], BRZ:['BRZ', 'BRZ', 130], BSD:['BSD', 'BS$', 2], BTN:['BTN', 'Nu.', 2], BUK:['BUK', 'BUK', 130], BWP:['BWP', 'BWP', 2], BYB:['BYB', 'BYB', 130], BYR:['BYR', 'BYR', 0], BZD:['BZD', 'BZ$', 2], CAD:['CAD', 'CA$', 2, 'C$'], CDF:['CDF', 'CDF', 2], CHE:['CHE', 'CHE', 2], CHF:['CHF', 'Fr.', 2, 'CHF'], CHW:['CHW', 'CHW', 2], CLE:['CLE', 'E\xBA', 130], CLF:['CLF', 'CLF', 0], CLP:['CLP', 'CL$', 0, 'CL$'], CNY:['CNY', 'CN\xA5', 2, 'RMB\xA5'], COP:['COP', 'CO$', 0, 'COL$'], COU:['COU', 'COU', 2], CRC:['CRC', '\u20A1', 0, 'CR\u20A1'], CSD:['CSD', 'CSD', 130], CSK:['CSK', 'CSK', 130], CUC:['CUC', 'CUC$', 2], CUP:['CUP', 'CU$', 2, '$MN'], CVE:['CVE', 'CV$', 2], CYP:['CYP', 'CY\xA3', 130], CZK:['CZK', 'K\u010D', 2, 'K\u010D'], DDM:['DDM', 'DDM', 130], DEM:['DEM', 'DM', 130], DJF:['DJF', 'Fdj', 0], DKK:['DKK', 'Dkr', 2, 'kr'], DOP:['DOP', 'RD$', 2, 'RD$'], DZD:['DZD', 'DA', 2], ECS:['ECS', 'ECS', 130], ECV:['ECV', 'ECV', 2], EEK:['EEK', 'Ekr', 2], EGP:['EGP', 'EG\xA3', 2, 'LE'], EQE:['EQE', 'EQE', 130], ERN:['ERN', 'Nfk', 2], ESA:['ESA', 'ESA', 2], ESB:['ESB', 'ESB', 2], ESP:['ESP', 'Pts', 128], ETB:['ETB', 'Br', 2], EUR:['EUR', '\u20AC', 2, '\u20AC'], FIM:['FIM', 'mk', 130], FJD:['FJD', 'FJ$', 2], FKP:['FKP', 'FK\xA3', 2], FRF:['FRF', '\u20A3', 130], GBP:['GBP', '\xA3', 2, 'GB\xA3'], GEK:['GEK', 'GEK', 130], GEL:['GEL', 'GEL', 2], GHC:['GHC', '\u20B5', 130], GHS:['GHS', 'GH\u20B5', 2], GIP:['GIP', 'GI\xA3', 2], GMD:['GMD', 'GMD', 2], GNF:['GNF', 'FG', 0], GNS:['GNS', 'GNS', 130], GQE:['GQE', 'GQE', 130], GRD:['GRD', '\u20AF', 130], GTQ:['GTQ', 'GTQ', 2], GWE:['GWE', 'GWE', 130], GWP:['GWP', 'GWP', 2], GYD:['GYD', 'GY$', 0], HKD:['HKD', 'HK$', 2, 'HK$'], HNL:['HNL', 'HNL', 2], HRD:['HRD', 'HRD', 130], HRK:['HRK', 'kn', 2], HTG:['HTG', 'HTG', 2], HUF:['HUF', 'Ft', 0], IDR:['IDR', 'Rp', 0], IEP:['IEP', 'IR\xA3', 130], ILP:['ILP', 'I\xA3', 130], ILR:['ILR', 'ILR', 130], ILS:['ILS', '\u20AA', 2, 'IL\u20AA'], INR:['INR', 'Rs', 2, 'Rs'], IQD:['IQD', 'IQD', 0], IRR:['IRR', 'IRR', 0], ISJ:['ISJ', 'ISJ', 130], ISK:['ISK', 'Ikr', 0, 'kr'], ITL:['ITL', 'IT\u20A4', 128], JMD:['JMD', '$', 2, 'JA$'], JOD:['JOD', 'JD', 3], JPY:['JPY', '\xA5', 0, 'JP\xA5'], KES:['KES', 'Ksh', 2], KGS:['KGS', 'KGS', 2], KHR:['KHR', 'KHR', 2], KMF:['KMF', 'CF', 0], KPW:['KPW', 'KPW', 0], KRH:['KRH', 'KRH', 130], KRO:['KRO', 'KRO', 130], KRW:['KRW', '\u20A9', 0, 'KR\u20A9'], KWD:['KWD', 'KD', 3], KYD:['KYD', 'KY$', 2], KZT:['KZT', 'KZT', 2], LAK:['LAK', '\u20AD', 0], LBP:['LBP', 'LB\xA3', 0], LKR:['LKR', 'SLRs', 2, 'SLRs'], LRD:['LRD', 'L$', 2], LSL:['LSL', 'LSL', 2], LSM:['LSM', 'LSM', 130], LTL:['LTL', 'Lt', 2], LTT:['LTT', 'LTT', 130], LUC:['LUC', 'LUC', 2], LUF:['LUF', 'LUF', 128], LUL:['LUL', 'LUL', 2], LVL:['LVL', 'Ls', 2], LVR:['LVR', 'LVR', 130], LYD:['LYD', 'LD', 3], MAD:['MAD', 'MAD', 2], MAF:['MAF', 'MAF', 130], MCF:['MCF', 'MCF', 130], MDC:['MDC', 'MDC', 130], MDL:['MDL', 'MDL', 2], MGA:['MGA', 'MGA', 0], MGF:['MGF', 'MGF', 128], MKD:['MKD', 'MKD', 2], MKN:['MKN', 'MKN', 130], MLF:['MLF', 'MLF', 130], MMK:['MMK', 'MMK', 0], MNT:['MNT', '\u20AE', 0, 'MN\u20AE'], MOP:['MOP', 'MOP$', 2], MRO:['MRO', 'UM', 0], MTL:['MTL', 'Lm', 130], MTP:['MTP', 'MT\xA3', 130], MUR:['MUR', 'MURs', 0], MVP:['MVP', 'MVP', 130], MVR:['MVR', 'MVR', 2], MWK:['MWK', 'MWK', 2], MXN:['MXN', 'Mex$', 2, 'Mex$'], MXP:['MXP', 'MX$', 130], MXV:['MXV', 'MXV', 2], MYR:['MYR', 'RM', 2, 'RM'], MZE:['MZE', 'MZE', 130], MZM:['MZM', 'Mt', 130], MZN:['MZN', 'MTn', 2], NAD:['NAD', 'N$', 2], NGN:['NGN', '\u20A6', 2], NIC:['NIC', 'NIC', 130], NIO:['NIO', 'C$', 2], NLG:['NLG', 'fl', 130], NOK:['NOK', 'Nkr', 2, 'NOkr'], NPR:['NPR', 'NPRs', 2], NZD:['NZD', 'NZ$', 2], OMR:['OMR', 'OMR', 3], PAB:['PAB', 'B/.', 2, 'B/.'], PEI:['PEI', 'I/.', 130], PEN:['PEN', 'S/.', 2, 'S/.'], PES:['PES', 'PES', 130], PGK:['PGK', 'PGK', 2], PHP:['PHP', '\u20B1', 2, 'PHP'], PKR:['PKR', 'PKRs', 0, 'PKRs.'], PLN:['PLN', 'z\u0142', 2], PLZ:['PLZ', 'PLZ', 130], PTE:['PTE', 'Esc', 130], PYG:['PYG', '\u20B2', 0], QAR:['QAR', 'QR', 2], RHD:['RHD', 'RH$', 130], ROL:['ROL', 'ROL', 130], RON:['RON', 'RON', 2], RSD:['RSD', 'din.', 0], RUB:['RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'], RUR:['RUR', 'RUR', 130], RWF:['RWF', 'RWF', 0], SAR:['SAR', 'SR', 2, 'SR'], SBD:['SBD', 'SI$', 2], SCR:['SCR', 'SRe', 2], SDD:['SDD', 'LSd', 130], SDG:['SDG', 'SDG', 2], SDP:['SDP', 'SDP', 130], SEK:['SEK', 'Skr', 2, 'kr'], SGD:['SGD', 'S$', 2, 'S$'], SHP:['SHP', 'SH\xA3', 2], SIT:['SIT', 'SIT', 130], SKK:['SKK', 'Sk', 130], SLL:['SLL', 'Le', 0], SOS:['SOS', 'Ssh', 0], SRD:['SRD', 'SR$', 2], SRG:['SRG', 'Sf', 130], STD:['STD', 'Db', 0], SUR:['SUR', 'SUR', 130], SVC:['SVC', 'SV\u20A1', 130], SYP:['SYP', 'SY\xA3', 0], SZL:['SZL', 'SZL', 2], THB:['THB', '\u0E3F', 2, 'THB'], TJR:['TJR', 'TJR', 130], TJS:['TJS', 'TJS', 2], TMM:['TMM', 'TMM', 128], TMT:['TMT', 'TMT', 2], TND:['TND', 'DT', 3], TOP:['TOP', 'T$', 2], TPE:['TPE', 'TPE', 130], TRL:['TRL', 'TRL', 128], TRY:['TRY', 'TL', 2, 'YTL'], TTD:['TTD', 'TT$', 2], TWD:['TWD', 'NT$', 2, 'NT$'], TZS:['TZS', 'TSh', 0], UAH:['UAH', '\u20B4', 2], UAK:['UAK', 'UAK', 130], UGS:['UGS', 'UGS', 130], UGX:['UGX', 'USh', 0], USD:['USD', 'US$', 2, 'US$'], USN:['USN', 'USN', 2], USS:['USS', 'USS', 2], UYI:['UYI', 'UYI', 2], UYP:['UYP', 'UYP', 130], UYU:['UYU', '$U', 2, 'UY$'], UZS:['UZS', 'UZS', 0], VEB:['VEB', 'VEB', 130], VEF:['VEF', 'Bs.F.', 2], VND:['VND', '\u20AB', 24, '\u20AB'], VNN:['VNN', 'VNN', 130], VUV:['VUV', 'VT', 0], WST:['WST', 'WS$', 2], XAF:['XAF', 'FCFA', 0], XAG:['XAG', 'XAG', 2], XAU:['XAU', 'XAU', 2], XBA:['XBA', 'XBA', 2], XBB:['XBB', 'XBB', 2], XBC:['XBC', 'XBC', 2], XBD:['XBD', 'XBD', 2], XCD:['XCD', 'EC$', 2], XDR:['XDR', 'XDR', 2], XEU:['XEU', 'XEU', 2], XFO:['XFO', 'XFO', 2], XFU:['XFU', 'XFU', 2], XOF:['XOF', 'CFA', 0], XPD:['XPD', 'XPD', 2], XPF:['XPF', 'CFPF', 0], XPT:['XPT', 'XPT', 2], XRE:['XRE', 'XRE', 2], XTS:['XTS', 'XTS', 2], XXX:['XXX', 'XXX', 2], YDD:['YDD', 'YDD', 130], YER:['YER', 'YR', 0, 'YER'], YUD:['YUD', 'YUD', 130], YUM:['YUM', 'YUM', 130], YUN:['YUN', 'YUN', 130], YUR:['YUR', 'YUR', 130], ZAL:['ZAL', 'ZAL', 2], ZAR:['ZAR', 'R', 2, 'ZAR'], ZMK:['ZMK', 'ZK', 0], ZRN:['ZRN', 'NZ', 130], ZRZ:['ZRZ', 'ZRZ', 130], ZWD:['ZWD', 'Z$', 128], ZWL:['ZWL', 'ZWL', 2], ZWR:['ZWR', 'ZWR', 130]};
}

function CurrencyList_en_JM_0(){
  CurrencyList_en_0.call(this);
  $$init_135();
}

function CurrencyList_en_JM(){
}

_ = CurrencyList_en_JM_0.prototype = CurrencyList_en_JM.prototype = new CurrencyList_en;
_.getClass$ = function getClass_136(){
  return Lcom_google_gwt_i18n_client_CurrencyList_1en_1JM_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava_11(){
  return new CurrencyDataImpl_1('JMD', '$', 2, 'JA$');
}
;
_.getDefaultNative = function getDefaultNative_11(){
  return ['JMD', '$', 2, 'JA$'];
}
;
_.loadCurrencyMapJava = function loadCurrencyMapJava_9(){
  var result;
  result = $loadCurrencyMapJava_1(this);
  $put_1(result, 'ADP', new CurrencyDataImpl_0('ADP', 'ADP', 128));
  $put_1(result, 'AED', new CurrencyDataImpl_1('AED', 'DH', 2, 'DH'));
  $put_1(result, 'AFA', new CurrencyDataImpl_0('AFA', 'AFA', 130));
  $put_1(result, 'AFN', new CurrencyDataImpl_0('AFN', 'Af', 0));
  $put_1(result, 'ALL', new CurrencyDataImpl_0('ALL', 'ALL', 0));
  $put_1(result, 'AMD', new CurrencyDataImpl_0('AMD', 'AMD', 0));
  $put_1(result, 'ANG', new CurrencyDataImpl_0('ANG', 'NAf.', 2));
  $put_1(result, 'AOA', new CurrencyDataImpl_0('AOA', 'Kz', 2));
  $put_1(result, 'AOK', new CurrencyDataImpl_0('AOK', 'AOK', 130));
  $put_1(result, 'AON', new CurrencyDataImpl_0('AON', 'AON', 130));
  $put_1(result, 'AOR', new CurrencyDataImpl_0('AOR', 'AOR', 130));
  $put_1(result, 'ARA', new CurrencyDataImpl_0('ARA', '\u20B3', 130));
  $put_1(result, 'ARL', new CurrencyDataImpl_0('ARL', '$L', 130));
  $put_1(result, 'ARM', new CurrencyDataImpl_0('ARM', 'm$n', 130));
  $put_1(result, 'ARP', new CurrencyDataImpl_0('ARP', 'ARP', 130));
  $put_1(result, 'ARS', new CurrencyDataImpl_1('ARS', 'AR$', 2, 'AR$'));
  $put_1(result, 'ATS', new CurrencyDataImpl_0('ATS', 'ATS', 130));
  $put_1(result, 'AUD', new CurrencyDataImpl_1('AUD', 'AU$', 2, 'AU$'));
  $put_1(result, 'AWG', new CurrencyDataImpl_0('AWG', 'Afl.', 2));
  $put_1(result, 'AZM', new CurrencyDataImpl_0('AZM', 'AZM', 130));
  $put_1(result, 'AZN', new CurrencyDataImpl_0('AZN', 'man.', 2));
  $put_1(result, 'BAD', new CurrencyDataImpl_0('BAD', 'BAD', 130));
  $put_1(result, 'BAM', new CurrencyDataImpl_0('BAM', 'KM', 2));
  $put_1(result, 'BAN', new CurrencyDataImpl_0('BAN', 'BAN', 130));
  $put_1(result, 'BBD', new CurrencyDataImpl_0('BBD', 'Bds$', 2));
  $put_1(result, 'BDT', new CurrencyDataImpl_1('BDT', 'Tk', 2, 'Tk'));
  $put_1(result, 'BEC', new CurrencyDataImpl_0('BEC', 'BEC', 2));
  $put_1(result, 'BEF', new CurrencyDataImpl_0('BEF', 'BF', 130));
  $put_1(result, 'BEL', new CurrencyDataImpl_0('BEL', 'BEL', 2));
  $put_1(result, 'BGL', new CurrencyDataImpl_0('BGL', 'BGL', 130));
  $put_1(result, 'BGM', new CurrencyDataImpl_0('BGM', 'BGM', 130));
  $put_1(result, 'BGN', new CurrencyDataImpl_0('BGN', 'BGN', 2));
  $put_1(result, 'BGO', new CurrencyDataImpl_0('BGO', 'BGO', 130));
  $put_1(result, 'BHD', new CurrencyDataImpl_0('BHD', 'BD', 3));
  $put_1(result, 'BIF', new CurrencyDataImpl_0('BIF', 'FBu', 0));
  $put_1(result, 'BMD', new CurrencyDataImpl_0('BMD', 'BD$', 2));
  $put_1(result, 'BND', new CurrencyDataImpl_0('BND', 'BN$', 2));
  $put_1(result, 'BOB', new CurrencyDataImpl_0('BOB', 'Bs', 2));
  $put_1(result, 'BOL', new CurrencyDataImpl_0('BOL', 'BOL', 130));
  $put_1(result, 'BOP', new CurrencyDataImpl_0('BOP', '$b.', 130));
  $put_1(result, 'BOV', new CurrencyDataImpl_0('BOV', 'BOV', 2));
  $put_1(result, 'BRB', new CurrencyDataImpl_0('BRB', 'BRB', 130));
  $put_1(result, 'BRC', new CurrencyDataImpl_0('BRC', 'BRC', 130));
  $put_1(result, 'BRE', new CurrencyDataImpl_0('BRE', 'BRE', 130));
  $put_1(result, 'BRL', new CurrencyDataImpl_1('BRL', 'R$', 2, 'R$'));
  $put_1(result, 'BRN', new CurrencyDataImpl_0('BRN', 'BRN', 130));
  $put_1(result, 'BRR', new CurrencyDataImpl_0('BRR', 'BRR', 130));
  $put_1(result, 'BRZ', new CurrencyDataImpl_0('BRZ', 'BRZ', 130));
  $put_1(result, 'BSD', new CurrencyDataImpl_0('BSD', 'BS$', 2));
  $put_1(result, 'BTN', new CurrencyDataImpl_0('BTN', 'Nu.', 2));
  $put_1(result, 'BUK', new CurrencyDataImpl_0('BUK', 'BUK', 130));
  $put_1(result, 'BWP', new CurrencyDataImpl_0('BWP', 'BWP', 2));
  $put_1(result, 'BYB', new CurrencyDataImpl_0('BYB', 'BYB', 130));
  $put_1(result, 'BYR', new CurrencyDataImpl_0('BYR', 'BYR', 0));
  $put_1(result, 'BZD', new CurrencyDataImpl_0('BZD', 'BZ$', 2));
  $put_1(result, 'CAD', new CurrencyDataImpl_1('CAD', 'CA$', 2, 'C$'));
  $put_1(result, 'CDF', new CurrencyDataImpl_0('CDF', 'CDF', 2));
  $put_1(result, 'CHE', new CurrencyDataImpl_0('CHE', 'CHE', 2));
  $put_1(result, 'CHF', new CurrencyDataImpl_1('CHF', 'Fr.', 2, 'CHF'));
  $put_1(result, 'CHW', new CurrencyDataImpl_0('CHW', 'CHW', 2));
  $put_1(result, 'CLE', new CurrencyDataImpl_0('CLE', 'E\xBA', 130));
  $put_1(result, 'CLF', new CurrencyDataImpl_0('CLF', 'CLF', 0));
  $put_1(result, 'CLP', new CurrencyDataImpl_1('CLP', 'CL$', 0, 'CL$'));
  $put_1(result, 'CNY', new CurrencyDataImpl_1('CNY', 'CN\xA5', 2, 'RMB\xA5'));
  $put_1(result, 'COP', new CurrencyDataImpl_1('COP', 'CO$', 0, 'COL$'));
  $put_1(result, 'COU', new CurrencyDataImpl_0('COU', 'COU', 2));
  $put_1(result, 'CRC', new CurrencyDataImpl_1('CRC', '\u20A1', 0, 'CR\u20A1'));
  $put_1(result, 'CSD', new CurrencyDataImpl_0('CSD', 'CSD', 130));
  $put_1(result, 'CSK', new CurrencyDataImpl_0('CSK', 'CSK', 130));
  $put_1(result, 'CUC', new CurrencyDataImpl_0('CUC', 'CUC$', 2));
  $put_1(result, 'CUP', new CurrencyDataImpl_1('CUP', 'CU$', 2, '$MN'));
  $put_1(result, 'CVE', new CurrencyDataImpl_0('CVE', 'CV$', 2));
  $put_1(result, 'CYP', new CurrencyDataImpl_0('CYP', 'CY\xA3', 130));
  $put_1(result, 'CZK', new CurrencyDataImpl_1('CZK', 'K\u010D', 2, 'K\u010D'));
  $put_1(result, 'DDM', new CurrencyDataImpl_0('DDM', 'DDM', 130));
  $put_1(result, 'DEM', new CurrencyDataImpl_0('DEM', 'DM', 130));
  $put_1(result, 'DJF', new CurrencyDataImpl_0('DJF', 'Fdj', 0));
  $put_1(result, 'DKK', new CurrencyDataImpl_1('DKK', 'Dkr', 2, 'kr'));
  $put_1(result, 'DOP', new CurrencyDataImpl_1('DOP', 'RD$', 2, 'RD$'));
  $put_1(result, 'DZD', new CurrencyDataImpl_0('DZD', 'DA', 2));
  $put_1(result, 'ECS', new CurrencyDataImpl_0('ECS', 'ECS', 130));
  $put_1(result, 'ECV', new CurrencyDataImpl_0('ECV', 'ECV', 2));
  $put_1(result, 'EEK', new CurrencyDataImpl_0('EEK', 'Ekr', 2));
  $put_1(result, 'EGP', new CurrencyDataImpl_1('EGP', 'EG\xA3', 2, 'LE'));
  $put_1(result, 'EQE', new CurrencyDataImpl_0('EQE', 'EQE', 130));
  $put_1(result, 'ERN', new CurrencyDataImpl_0('ERN', 'Nfk', 2));
  $put_1(result, 'ESA', new CurrencyDataImpl_0('ESA', 'ESA', 2));
  $put_1(result, 'ESB', new CurrencyDataImpl_0('ESB', 'ESB', 2));
  $put_1(result, 'ESP', new CurrencyDataImpl_0('ESP', 'Pts', 128));
  $put_1(result, 'ETB', new CurrencyDataImpl_0('ETB', 'Br', 2));
  $put_1(result, 'EUR', new CurrencyDataImpl_1('EUR', '\u20AC', 2, '\u20AC'));
  $put_1(result, 'FIM', new CurrencyDataImpl_0('FIM', 'mk', 130));
  $put_1(result, 'FJD', new CurrencyDataImpl_0('FJD', 'FJ$', 2));
  $put_1(result, 'FKP', new CurrencyDataImpl_0('FKP', 'FK\xA3', 2));
  $put_1(result, 'FRF', new CurrencyDataImpl_0('FRF', '\u20A3', 130));
  $put_1(result, 'GBP', new CurrencyDataImpl_1('GBP', '\xA3', 2, 'GB\xA3'));
  $put_1(result, 'GEK', new CurrencyDataImpl_0('GEK', 'GEK', 130));
  $put_1(result, 'GEL', new CurrencyDataImpl_0('GEL', 'GEL', 2));
  $put_1(result, 'GHC', new CurrencyDataImpl_0('GHC', '\u20B5', 130));
  $put_1(result, 'GHS', new CurrencyDataImpl_0('GHS', 'GH\u20B5', 2));
  $put_1(result, 'GIP', new CurrencyDataImpl_0('GIP', 'GI\xA3', 2));
  $put_1(result, 'GMD', new CurrencyDataImpl_0('GMD', 'GMD', 2));
  $put_1(result, 'GNF', new CurrencyDataImpl_0('GNF', 'FG', 0));
  $put_1(result, 'GNS', new CurrencyDataImpl_0('GNS', 'GNS', 130));
  $put_1(result, 'GQE', new CurrencyDataImpl_0('GQE', 'GQE', 130));
  $put_1(result, 'GRD', new CurrencyDataImpl_0('GRD', '\u20AF', 130));
  $put_1(result, 'GTQ', new CurrencyDataImpl_0('GTQ', 'GTQ', 2));
  $put_1(result, 'GWE', new CurrencyDataImpl_0('GWE', 'GWE', 130));
  $put_1(result, 'GWP', new CurrencyDataImpl_0('GWP', 'GWP', 2));
  $put_1(result, 'GYD', new CurrencyDataImpl_0('GYD', 'GY$', 0));
  $put_1(result, 'HKD', new CurrencyDataImpl_1('HKD', 'HK$', 2, 'HK$'));
  $put_1(result, 'HNL', new CurrencyDataImpl_0('HNL', 'HNL', 2));
  $put_1(result, 'HRD', new CurrencyDataImpl_0('HRD', 'HRD', 130));
  $put_1(result, 'HRK', new CurrencyDataImpl_0('HRK', 'kn', 2));
  $put_1(result, 'HTG', new CurrencyDataImpl_0('HTG', 'HTG', 2));
  $put_1(result, 'HUF', new CurrencyDataImpl_0('HUF', 'Ft', 0));
  $put_1(result, 'IDR', new CurrencyDataImpl_0('IDR', 'Rp', 0));
  $put_1(result, 'IEP', new CurrencyDataImpl_0('IEP', 'IR\xA3', 130));
  $put_1(result, 'ILP', new CurrencyDataImpl_0('ILP', 'I\xA3', 130));
  $put_1(result, 'ILR', new CurrencyDataImpl_0('ILR', 'ILR', 130));
  $put_1(result, 'ILS', new CurrencyDataImpl_1('ILS', '\u20AA', 2, 'IL\u20AA'));
  $put_1(result, 'INR', new CurrencyDataImpl_1('INR', 'Rs', 2, 'Rs'));
  $put_1(result, 'IQD', new CurrencyDataImpl_0('IQD', 'IQD', 0));
  $put_1(result, 'IRR', new CurrencyDataImpl_0('IRR', 'IRR', 0));
  $put_1(result, 'ISJ', new CurrencyDataImpl_0('ISJ', 'ISJ', 130));
  $put_1(result, 'ISK', new CurrencyDataImpl_1('ISK', 'Ikr', 0, 'kr'));
  $put_1(result, 'ITL', new CurrencyDataImpl_0('ITL', 'IT\u20A4', 128));
  $put_1(result, 'JMD', new CurrencyDataImpl_1('JMD', '$', 2, 'JA$'));
  $put_1(result, 'JOD', new CurrencyDataImpl_0('JOD', 'JD', 3));
  $put_1(result, 'JPY', new CurrencyDataImpl_1('JPY', '\xA5', 0, 'JP\xA5'));
  $put_1(result, 'KES', new CurrencyDataImpl_0('KES', 'Ksh', 2));
  $put_1(result, 'KGS', new CurrencyDataImpl_0('KGS', 'KGS', 2));
  $put_1(result, 'KHR', new CurrencyDataImpl_0('KHR', 'KHR', 2));
  $put_1(result, 'KMF', new CurrencyDataImpl_0('KMF', 'CF', 0));
  $put_1(result, 'KPW', new CurrencyDataImpl_0('KPW', 'KPW', 0));
  $put_1(result, 'KRH', new CurrencyDataImpl_0('KRH', 'KRH', 130));
  $put_1(result, 'KRO', new CurrencyDataImpl_0('KRO', 'KRO', 130));
  $put_1(result, 'KRW', new CurrencyDataImpl_1('KRW', '\u20A9', 0, 'KR\u20A9'));
  $put_1(result, 'KWD', new CurrencyDataImpl_0('KWD', 'KD', 3));
  $put_1(result, 'KYD', new CurrencyDataImpl_0('KYD', 'KY$', 2));
  $put_1(result, 'KZT', new CurrencyDataImpl_0('KZT', 'KZT', 2));
  $put_1(result, 'LAK', new CurrencyDataImpl_0('LAK', '\u20AD', 0));
  $put_1(result, 'LBP', new CurrencyDataImpl_0('LBP', 'LB\xA3', 0));
  $put_1(result, 'LKR', new CurrencyDataImpl_1('LKR', 'SLRs', 2, 'SLRs'));
  $put_1(result, 'LRD', new CurrencyDataImpl_0('LRD', 'L$', 2));
  $put_1(result, 'LSL', new CurrencyDataImpl_0('LSL', 'LSL', 2));
  $put_1(result, 'LSM', new CurrencyDataImpl_0('LSM', 'LSM', 130));
  $put_1(result, 'LTL', new CurrencyDataImpl_0('LTL', 'Lt', 2));
  $put_1(result, 'LTT', new CurrencyDataImpl_0('LTT', 'LTT', 130));
  $put_1(result, 'LUC', new CurrencyDataImpl_0('LUC', 'LUC', 2));
  $put_1(result, 'LUF', new CurrencyDataImpl_0('LUF', 'LUF', 128));
  $put_1(result, 'LUL', new CurrencyDataImpl_0('LUL', 'LUL', 2));
  $put_1(result, 'LVL', new CurrencyDataImpl_0('LVL', 'Ls', 2));
  $put_1(result, 'LVR', new CurrencyDataImpl_0('LVR', 'LVR', 130));
  $put_1(result, 'LYD', new CurrencyDataImpl_0('LYD', 'LD', 3));
  $put_1(result, 'MAD', new CurrencyDataImpl_0('MAD', 'MAD', 2));
  $put_1(result, 'MAF', new CurrencyDataImpl_0('MAF', 'MAF', 130));
  $put_1(result, 'MCF', new CurrencyDataImpl_0('MCF', 'MCF', 130));
  $put_1(result, 'MDC', new CurrencyDataImpl_0('MDC', 'MDC', 130));
  $put_1(result, 'MDL', new CurrencyDataImpl_0('MDL', 'MDL', 2));
  $put_1(result, 'MGA', new CurrencyDataImpl_0('MGA', 'MGA', 0));
  $put_1(result, 'MGF', new CurrencyDataImpl_0('MGF', 'MGF', 128));
  $put_1(result, 'MKD', new CurrencyDataImpl_0('MKD', 'MKD', 2));
  $put_1(result, 'MKN', new CurrencyDataImpl_0('MKN', 'MKN', 130));
  $put_1(result, 'MLF', new CurrencyDataImpl_0('MLF', 'MLF', 130));
  $put_1(result, 'MMK', new CurrencyDataImpl_0('MMK', 'MMK', 0));
  $put_1(result, 'MNT', new CurrencyDataImpl_1('MNT', '\u20AE', 0, 'MN\u20AE'));
  $put_1(result, 'MOP', new CurrencyDataImpl_0('MOP', 'MOP$', 2));
  $put_1(result, 'MRO', new CurrencyDataImpl_0('MRO', 'UM', 0));
  $put_1(result, 'MTL', new CurrencyDataImpl_0('MTL', 'Lm', 130));
  $put_1(result, 'MTP', new CurrencyDataImpl_0('MTP', 'MT\xA3', 130));
  $put_1(result, 'MUR', new CurrencyDataImpl_0('MUR', 'MURs', 0));
  $put_1(result, 'MVP', new CurrencyDataImpl_0('MVP', 'MVP', 130));
  $put_1(result, 'MVR', new CurrencyDataImpl_0('MVR', 'MVR', 2));
  $put_1(result, 'MWK', new CurrencyDataImpl_0('MWK', 'MWK', 2));
  $put_1(result, 'MXN', new CurrencyDataImpl_1('MXN', 'Mex$', 2, 'Mex$'));
  $put_1(result, 'MXP', new CurrencyDataImpl_0('MXP', 'MX$', 130));
  $put_1(result, 'MXV', new CurrencyDataImpl_0('MXV', 'MXV', 2));
  $put_1(result, 'MYR', new CurrencyDataImpl_1('MYR', 'RM', 2, 'RM'));
  $put_1(result, 'MZE', new CurrencyDataImpl_0('MZE', 'MZE', 130));
  $put_1(result, 'MZM', new CurrencyDataImpl_0('MZM', 'Mt', 130));
  $put_1(result, 'MZN', new CurrencyDataImpl_0('MZN', 'MTn', 2));
  $put_1(result, 'NAD', new CurrencyDataImpl_0('NAD', 'N$', 2));
  $put_1(result, 'NGN', new CurrencyDataImpl_0('NGN', '\u20A6', 2));
  $put_1(result, 'NIC', new CurrencyDataImpl_0('NIC', 'NIC', 130));
  $put_1(result, 'NIO', new CurrencyDataImpl_0('NIO', 'C$', 2));
  $put_1(result, 'NLG', new CurrencyDataImpl_0('NLG', 'fl', 130));
  $put_1(result, 'NOK', new CurrencyDataImpl_1('NOK', 'Nkr', 2, 'NOkr'));
  $put_1(result, 'NPR', new CurrencyDataImpl_0('NPR', 'NPRs', 2));
  $put_1(result, 'NZD', new CurrencyDataImpl_0('NZD', 'NZ$', 2));
  $put_1(result, 'OMR', new CurrencyDataImpl_0('OMR', 'OMR', 3));
  $put_1(result, 'PAB', new CurrencyDataImpl_1('PAB', 'B/.', 2, 'B/.'));
  $put_1(result, 'PEI', new CurrencyDataImpl_0('PEI', 'I/.', 130));
  $put_1(result, 'PEN', new CurrencyDataImpl_1('PEN', 'S/.', 2, 'S/.'));
  $put_1(result, 'PES', new CurrencyDataImpl_0('PES', 'PES', 130));
  $put_1(result, 'PGK', new CurrencyDataImpl_0('PGK', 'PGK', 2));
  $put_1(result, 'PHP', new CurrencyDataImpl_1('PHP', '\u20B1', 2, 'PHP'));
  $put_1(result, 'PKR', new CurrencyDataImpl_1('PKR', 'PKRs', 0, 'PKRs.'));
  $put_1(result, 'PLN', new CurrencyDataImpl_0('PLN', 'z\u0142', 2));
  $put_1(result, 'PLZ', new CurrencyDataImpl_0('PLZ', 'PLZ', 130));
  $put_1(result, 'PTE', new CurrencyDataImpl_0('PTE', 'Esc', 130));
  $put_1(result, 'PYG', new CurrencyDataImpl_0('PYG', '\u20B2', 0));
  $put_1(result, 'QAR', new CurrencyDataImpl_0('QAR', 'QR', 2));
  $put_1(result, 'RHD', new CurrencyDataImpl_0('RHD', 'RH$', 130));
  $put_1(result, 'ROL', new CurrencyDataImpl_0('ROL', 'ROL', 130));
  $put_1(result, 'RON', new CurrencyDataImpl_0('RON', 'RON', 2));
  $put_1(result, 'RSD', new CurrencyDataImpl_0('RSD', 'din.', 0));
  $put_1(result, 'RUB', new CurrencyDataImpl_1('RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'));
  $put_1(result, 'RUR', new CurrencyDataImpl_0('RUR', 'RUR', 130));
  $put_1(result, 'RWF', new CurrencyDataImpl_0('RWF', 'RWF', 0));
  $put_1(result, 'SAR', new CurrencyDataImpl_1('SAR', 'SR', 2, 'SR'));
  $put_1(result, 'SBD', new CurrencyDataImpl_0('SBD', 'SI$', 2));
  $put_1(result, 'SCR', new CurrencyDataImpl_0('SCR', 'SRe', 2));
  $put_1(result, 'SDD', new CurrencyDataImpl_0('SDD', 'LSd', 130));
  $put_1(result, 'SDG', new CurrencyDataImpl_0('SDG', 'SDG', 2));
  $put_1(result, 'SDP', new CurrencyDataImpl_0('SDP', 'SDP', 130));
  $put_1(result, 'SEK', new CurrencyDataImpl_1('SEK', 'Skr', 2, 'kr'));
  $put_1(result, 'SGD', new CurrencyDataImpl_1('SGD', 'S$', 2, 'S$'));
  $put_1(result, 'SHP', new CurrencyDataImpl_0('SHP', 'SH\xA3', 2));
  $put_1(result, 'SIT', new CurrencyDataImpl_0('SIT', 'SIT', 130));
  $put_1(result, 'SKK', new CurrencyDataImpl_0('SKK', 'Sk', 130));
  $put_1(result, 'SLL', new CurrencyDataImpl_0('SLL', 'Le', 0));
  $put_1(result, 'SOS', new CurrencyDataImpl_0('SOS', 'Ssh', 0));
  $put_1(result, 'SRD', new CurrencyDataImpl_0('SRD', 'SR$', 2));
  $put_1(result, 'SRG', new CurrencyDataImpl_0('SRG', 'Sf', 130));
  $put_1(result, 'STD', new CurrencyDataImpl_0('STD', 'Db', 0));
  $put_1(result, 'SUR', new CurrencyDataImpl_0('SUR', 'SUR', 130));
  $put_1(result, 'SVC', new CurrencyDataImpl_0('SVC', 'SV\u20A1', 130));
  $put_1(result, 'SYP', new CurrencyDataImpl_0('SYP', 'SY\xA3', 0));
  $put_1(result, 'SZL', new CurrencyDataImpl_0('SZL', 'SZL', 2));
  $put_1(result, 'THB', new CurrencyDataImpl_1('THB', '\u0E3F', 2, 'THB'));
  $put_1(result, 'TJR', new CurrencyDataImpl_0('TJR', 'TJR', 130));
  $put_1(result, 'TJS', new CurrencyDataImpl_0('TJS', 'TJS', 2));
  $put_1(result, 'TMM', new CurrencyDataImpl_0('TMM', 'TMM', 128));
  $put_1(result, 'TMT', new CurrencyDataImpl_0('TMT', 'TMT', 2));
  $put_1(result, 'TND', new CurrencyDataImpl_0('TND', 'DT', 3));
  $put_1(result, 'TOP', new CurrencyDataImpl_0('TOP', 'T$', 2));
  $put_1(result, 'TPE', new CurrencyDataImpl_0('TPE', 'TPE', 130));
  $put_1(result, 'TRL', new CurrencyDataImpl_0('TRL', 'TRL', 128));
  $put_1(result, 'TRY', new CurrencyDataImpl_1('TRY', 'TL', 2, 'YTL'));
  $put_1(result, 'TTD', new CurrencyDataImpl_0('TTD', 'TT$', 2));
  $put_1(result, 'TWD', new CurrencyDataImpl_1('TWD', 'NT$', 2, 'NT$'));
  $put_1(result, 'TZS', new CurrencyDataImpl_0('TZS', 'TSh', 0));
  $put_1(result, 'UAH', new CurrencyDataImpl_0('UAH', '\u20B4', 2));
  $put_1(result, 'UAK', new CurrencyDataImpl_0('UAK', 'UAK', 130));
  $put_1(result, 'UGS', new CurrencyDataImpl_0('UGS', 'UGS', 130));
  $put_1(result, 'UGX', new CurrencyDataImpl_0('UGX', 'USh', 0));
  $put_1(result, 'USD', new CurrencyDataImpl_1('USD', 'US$', 2, 'US$'));
  $put_1(result, 'USN', new CurrencyDataImpl_0('USN', 'USN', 2));
  $put_1(result, 'USS', new CurrencyDataImpl_0('USS', 'USS', 2));
  $put_1(result, 'UYI', new CurrencyDataImpl_0('UYI', 'UYI', 2));
  $put_1(result, 'UYP', new CurrencyDataImpl_0('UYP', 'UYP', 130));
  $put_1(result, 'UYU', new CurrencyDataImpl_1('UYU', '$U', 2, 'UY$'));
  $put_1(result, 'UZS', new CurrencyDataImpl_0('UZS', 'UZS', 0));
  $put_1(result, 'VEB', new CurrencyDataImpl_0('VEB', 'VEB', 130));
  $put_1(result, 'VEF', new CurrencyDataImpl_0('VEF', 'Bs.F.', 2));
  $put_1(result, 'VND', new CurrencyDataImpl_1('VND', '\u20AB', 24, '\u20AB'));
  $put_1(result, 'VNN', new CurrencyDataImpl_0('VNN', 'VNN', 130));
  $put_1(result, 'VUV', new CurrencyDataImpl_0('VUV', 'VT', 0));
  $put_1(result, 'WST', new CurrencyDataImpl_0('WST', 'WS$', 2));
  $put_1(result, 'XAF', new CurrencyDataImpl_0('XAF', 'FCFA', 0));
  $put_1(result, 'XAG', new CurrencyDataImpl_0('XAG', 'XAG', 2));
  $put_1(result, 'XAU', new CurrencyDataImpl_0('XAU', 'XAU', 2));
  $put_1(result, 'XBA', new CurrencyDataImpl_0('XBA', 'XBA', 2));
  $put_1(result, 'XBB', new CurrencyDataImpl_0('XBB', 'XBB', 2));
  $put_1(result, 'XBC', new CurrencyDataImpl_0('XBC', 'XBC', 2));
  $put_1(result, 'XBD', new CurrencyDataImpl_0('XBD', 'XBD', 2));
  $put_1(result, 'XCD', new CurrencyDataImpl_0('XCD', 'EC$', 2));
  $put_1(result, 'XDR', new CurrencyDataImpl_0('XDR', 'XDR', 2));
  $put_1(result, 'XEU', new CurrencyDataImpl_0('XEU', 'XEU', 2));
  $put_1(result, 'XFO', new CurrencyDataImpl_0('XFO', 'XFO', 2));
  $put_1(result, 'XFU', new CurrencyDataImpl_0('XFU', 'XFU', 2));
  $put_1(result, 'XOF', new CurrencyDataImpl_0('XOF', 'CFA', 0));
  $put_1(result, 'XPD', new CurrencyDataImpl_0('XPD', 'XPD', 2));
  $put_1(result, 'XPF', new CurrencyDataImpl_0('XPF', 'CFPF', 0));
  $put_1(result, 'XPT', new CurrencyDataImpl_0('XPT', 'XPT', 2));
  $put_1(result, 'XRE', new CurrencyDataImpl_0('XRE', 'XRE', 2));
  $put_1(result, 'XTS', new CurrencyDataImpl_0('XTS', 'XTS', 2));
  $put_1(result, 'XXX', new CurrencyDataImpl_0('XXX', 'XXX', 2));
  $put_1(result, 'YDD', new CurrencyDataImpl_0('YDD', 'YDD', 130));
  $put_1(result, 'YER', new CurrencyDataImpl_1('YER', 'YR', 0, 'YER'));
  $put_1(result, 'YUD', new CurrencyDataImpl_0('YUD', 'YUD', 130));
  $put_1(result, 'YUM', new CurrencyDataImpl_0('YUM', 'YUM', 130));
  $put_1(result, 'YUN', new CurrencyDataImpl_0('YUN', 'YUN', 130));
  $put_1(result, 'YUR', new CurrencyDataImpl_0('YUR', 'YUR', 130));
  $put_1(result, 'ZAL', new CurrencyDataImpl_0('ZAL', 'ZAL', 2));
  $put_1(result, 'ZAR', new CurrencyDataImpl_1('ZAR', 'R', 2, 'ZAR'));
  $put_1(result, 'ZMK', new CurrencyDataImpl_0('ZMK', 'ZK', 0));
  $put_1(result, 'ZRN', new CurrencyDataImpl_0('ZRN', 'NZ', 130));
  $put_1(result, 'ZRZ', new CurrencyDataImpl_0('ZRZ', 'ZRZ', 130));
  $put_1(result, 'ZWD', new CurrencyDataImpl_0('ZWD', 'Z$', 128));
  $put_1(result, 'ZWL', new CurrencyDataImpl_0('ZWL', 'ZWL', 2));
  $put_1(result, 'ZWR', new CurrencyDataImpl_0('ZWR', 'ZWR', 130));
  return result;
}
;
_.loadCurrencyMapNative = function loadCurrencyMapNative_9(){
  return overrideMap($loadCurrencyMapNative_1(this), $loadMyCurrencyMapOverridesNative_8());
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
function $$init_136(){
}

function $loadMyCurrencyMapOverridesNative_9(){
  return {ADP:['ADP', 'ADP', 128], AED:['AED', 'DH', 2, 'DH'], AFA:['AFA', 'AFA', 130], AFN:['AFN', 'Af', 0], ALL:['ALL', 'ALL', 0], AMD:['AMD', 'AMD', 0], ANG:['ANG', 'NAf.', 2], AOA:['AOA', 'Kz', 2], AOK:['AOK', 'AOK', 130], AON:['AON', 'AON', 130], AOR:['AOR', 'AOR', 130], ARA:['ARA', '\u20B3', 130], ARL:['ARL', '$L', 130], ARM:['ARM', 'm$n', 130], ARP:['ARP', 'ARP', 130], ARS:['ARS', 'AR$', 2, 'AR$'], ATS:['ATS', 'ATS', 130], AUD:['AUD', 'AU$', 2, 'AU$'], AWG:['AWG', 'Afl.', 2], AZM:['AZM', 'AZM', 130], AZN:['AZN', 'man.', 2], BAD:['BAD', 'BAD', 130], BAM:['BAM', 'KM', 2], BAN:['BAN', 'BAN', 130], BBD:['BBD', 'Bds$', 2], BDT:['BDT', 'Tk', 2, 'Tk'], BEC:['BEC', 'BEC', 2], BEF:['BEF', 'BF', 130], BEL:['BEL', 'BEL', 2], BGL:['BGL', 'BGL', 130], BGM:['BGM', 'BGM', 130], BGN:['BGN', 'BGN', 2], BGO:['BGO', 'BGO', 130], BHD:['BHD', 'BD', 3], BIF:['BIF', 'FBu', 0], BMD:['BMD', 'BD$', 2], BND:['BND', 'BN$', 2], BOB:['BOB', 'Bs', 2], BOL:['BOL', 'BOL', 130], BOP:['BOP', '$b.', 130], BOV:['BOV', 'BOV', 2], BRB:['BRB', 'BRB', 130], BRC:['BRC', 'BRC', 130], BRE:['BRE', 'BRE', 130], BRL:['BRL', 'R$', 2, 'R$'], BRN:['BRN', 'BRN', 130], BRR:['BRR', 'BRR', 130], BRZ:['BRZ', 'BRZ', 130], BSD:['BSD', 'BS$', 2], BTN:['BTN', 'Nu.', 2], BUK:['BUK', 'BUK', 130], BWP:['BWP', 'BWP', 2], BYB:['BYB', 'BYB', 130], BYR:['BYR', 'BYR', 0], BZD:['BZD', 'BZ$', 2], CAD:['CAD', 'CA$', 2, 'C$'], CDF:['CDF', 'CDF', 2], CHE:['CHE', 'CHE', 2], CHF:['CHF', 'Fr.', 2, 'CHF'], CHW:['CHW', 'CHW', 2], CLE:['CLE', 'E\xBA', 130], CLF:['CLF', 'CLF', 0], CLP:['CLP', 'CL$', 0, 'CL$'], CNY:['CNY', 'CN\xA5', 2, 'RMB\xA5'], COP:['COP', 'CO$', 0, 'COL$'], COU:['COU', 'COU', 2], CRC:['CRC', '\u20A1', 0, 'CR\u20A1'], CSD:['CSD', 'CSD', 130], CSK:['CSK', 'CSK', 130], CUC:['CUC', 'CUC$', 2], CUP:['CUP', 'CU$', 2, '$MN'], CVE:['CVE', 'CV$', 2], CYP:['CYP', 'CY\xA3', 130], CZK:['CZK', 'K\u010D', 2, 'K\u010D'], DDM:['DDM', 'DDM', 130], DEM:['DEM', 'DM', 130], DJF:['DJF', 'Fdj', 0], DKK:['DKK', 'Dkr', 2, 'kr'], DOP:['DOP', 'RD$', 2, 'RD$'], DZD:['DZD', 'DA', 2], ECS:['ECS', 'ECS', 130], ECV:['ECV', 'ECV', 2], EEK:['EEK', 'Ekr', 2], EGP:['EGP', 'EG\xA3', 2, 'LE'], EQE:['EQE', 'EQE', 130], ERN:['ERN', 'Nfk', 2], ESA:['ESA', 'ESA', 2], ESB:['ESB', 'ESB', 2], ESP:['ESP', 'Pts', 128], ETB:['ETB', 'Br', 2], EUR:['EUR', '\u20AC', 2, '\u20AC'], FIM:['FIM', 'mk', 130], FJD:['FJD', 'FJ$', 2], FKP:['FKP', 'FK\xA3', 2], FRF:['FRF', '\u20A3', 130], GBP:['GBP', 'GB\xA3', 2, 'GB\xA3'], GEK:['GEK', 'GEK', 130], GEL:['GEL', 'GEL', 2], GHC:['GHC', '\u20B5', 130], GHS:['GHS', 'GH\u20B5', 2], GIP:['GIP', 'GI\xA3', 2], GMD:['GMD', 'GMD', 2], GNF:['GNF', 'FG', 0], GNS:['GNS', 'GNS', 130], GQE:['GQE', 'GQE', 130], GRD:['GRD', '\u20AF', 130], GTQ:['GTQ', 'GTQ', 2], GWE:['GWE', 'GWE', 130], GWP:['GWP', 'GWP', 2], GYD:['GYD', 'GY$', 0], HKD:['HKD', 'HK$', 2, 'HK$'], HNL:['HNL', 'HNL', 2], HRD:['HRD', 'HRD', 130], HRK:['HRK', 'kn', 2], HTG:['HTG', 'HTG', 2], HUF:['HUF', 'Ft', 0], IDR:['IDR', 'Rp', 0], IEP:['IEP', 'IR\xA3', 130], ILP:['ILP', 'I\xA3', 130], ILR:['ILR', 'ILR', 130], ILS:['ILS', '\u20AA', 2, 'IL\u20AA'], INR:['INR', 'Rs', 2, 'Rs'], IQD:['IQD', 'IQD', 0], IRR:['IRR', 'IRR', 0], ISJ:['ISJ', 'ISJ', 130], ISK:['ISK', 'Ikr', 0, 'kr'], ITL:['ITL', 'IT\u20A4', 128], JMD:['JMD', 'J$', 2, 'JA$'], JOD:['JOD', 'JD', 3], JPY:['JPY', '\xA5', 0, 'JP\xA5'], KES:['KES', 'Ksh', 2], KGS:['KGS', 'KGS', 2], KHR:['KHR', 'KHR', 2], KMF:['KMF', 'CF', 0], KPW:['KPW', 'KPW', 0], KRH:['KRH', 'KRH', 130], KRO:['KRO', 'KRO', 130], KRW:['KRW', '\u20A9', 0, 'KR\u20A9'], KWD:['KWD', 'KD', 3], KYD:['KYD', 'KY$', 2], KZT:['KZT', 'KZT', 2], LAK:['LAK', '\u20AD', 0], LBP:['LBP', 'LB\xA3', 0], LKR:['LKR', 'SLRs', 2, 'SLRs'], LRD:['LRD', 'L$', 2], LSL:['LSL', 'LSL', 2], LSM:['LSM', 'LSM', 130], LTL:['LTL', 'Lt', 2], LTT:['LTT', 'LTT', 130], LUC:['LUC', 'LUC', 2], LUF:['LUF', 'LUF', 128], LUL:['LUL', 'LUL', 2], LVL:['LVL', 'Ls', 2], LVR:['LVR', 'LVR', 130], LYD:['LYD', 'LD', 3], MAD:['MAD', 'MAD', 2], MAF:['MAF', 'MAF', 130], MCF:['MCF', 'MCF', 130], MDC:['MDC', 'MDC', 130], MDL:['MDL', 'MDL', 2], MGA:['MGA', 'MGA', 0], MGF:['MGF', 'MGF', 128], MKD:['MKD', 'MKD', 2], MKN:['MKN', 'MKN', 130], MLF:['MLF', 'MLF', 130], MMK:['MMK', 'MMK', 0], MNT:['MNT', '\u20AE', 0, 'MN\u20AE'], MOP:['MOP', 'MOP$', 2], MRO:['MRO', 'UM', 0], MTL:['MTL', 'Lm', 130], MTP:['MTP', 'MT\xA3', 130], MUR:['MUR', 'MURs', 0], MVP:['MVP', 'MVP', 130], MVR:['MVR', 'MVR', 2], MWK:['MWK', 'MWK', 2], MXN:['MXN', 'Mex$', 2, 'Mex$'], MXP:['MXP', 'MX$', 130], MXV:['MXV', 'MXV', 2], MYR:['MYR', 'RM', 2, 'RM'], MZE:['MZE', 'MZE', 130], MZM:['MZM', 'Mt', 130], MZN:['MZN', 'MTn', 2], NAD:['NAD', 'N$', 2], NGN:['NGN', '\u20A6', 2], NIC:['NIC', 'NIC', 130], NIO:['NIO', 'C$', 2], NLG:['NLG', 'fl', 130], NOK:['NOK', 'Nkr', 2, 'NOkr'], NPR:['NPR', 'NPRs', 2], NZD:['NZD', 'NZ$', 2], OMR:['OMR', 'OMR', 3], PAB:['PAB', 'B/.', 2, 'B/.'], PEI:['PEI', 'I/.', 130], PEN:['PEN', 'S/.', 2, 'S/.'], PES:['PES', 'PES', 130], PGK:['PGK', 'PGK', 2], PHP:['PHP', '\u20B1', 2, 'PHP'], PKR:['PKR', 'PKRs', 0, 'PKRs.'], PLN:['PLN', 'z\u0142', 2], PLZ:['PLZ', 'PLZ', 130], PTE:['PTE', 'Esc', 130], PYG:['PYG', '\u20B2', 0], QAR:['QAR', 'QR', 2], RHD:['RHD', 'RH$', 130], ROL:['ROL', 'ROL', 130], RON:['RON', 'RON', 2], RSD:['RSD', 'din.', 0], RUB:['RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'], RUR:['RUR', 'RUR', 130], RWF:['RWF', 'RWF', 0], SAR:['SAR', 'SR', 2, 'SR'], SBD:['SBD', 'SI$', 2], SCR:['SCR', 'SRe', 2], SDD:['SDD', 'LSd', 130], SDG:['SDG', 'SDG', 2], SDP:['SDP', 'SDP', 130], SEK:['SEK', 'Skr', 2, 'kr'], SGD:['SGD', 'S$', 2, 'S$'], SHP:['SHP', 'SH\xA3', 2], SIT:['SIT', 'SIT', 130], SKK:['SKK', 'Sk', 130], SLL:['SLL', 'Le', 0], SOS:['SOS', 'Ssh', 0], SRD:['SRD', 'SR$', 2], SRG:['SRG', 'Sf', 130], STD:['STD', 'Db', 0], SUR:['SUR', 'SUR', 130], SVC:['SVC', 'SV\u20A1', 130], SYP:['SYP', 'SY\xA3', 0], SZL:['SZL', 'SZL', 2], THB:['THB', '\u0E3F', 2, 'THB'], TJR:['TJR', 'TJR', 130], TJS:['TJS', 'TJS', 2], TMM:['TMM', 'TMM', 128], TMT:['TMT', 'TMT', 2], TND:['TND', 'DT', 3], TOP:['TOP', 'T$', 2], TPE:['TPE', 'TPE', 130], TRL:['TRL', 'TRL', 128], TRY:['TRY', 'TL', 2, 'YTL'], TTD:['TTD', 'TT$', 2], TWD:['TWD', 'NT$', 2, 'NT$'], TZS:['TZS', 'TSh', 0], UAH:['UAH', '\u20B4', 2], UAK:['UAK', 'UAK', 130], UGS:['UGS', 'UGS', 130], UGX:['UGX', 'USh', 0], USD:['USD', '$', 2, 'US$'], USN:['USN', 'USN', 2], USS:['USS', 'USS', 2], UYI:['UYI', 'UYI', 2], UYP:['UYP', 'UYP', 130], UYU:['UYU', '$U', 2, 'UY$'], UZS:['UZS', 'UZS', 0], VEB:['VEB', 'VEB', 130], VEF:['VEF', 'Bs.F.', 2], VND:['VND', '\u20AB', 24, '\u20AB'], VNN:['VNN', 'VNN', 130], VUV:['VUV', 'VT', 0], WST:['WST', 'WS$', 2], XAF:['XAF', 'FCFA', 0], XAG:['XAG', 'XAG', 2], XAU:['XAU', 'XAU', 2], XBA:['XBA', 'XBA', 2], XBB:['XBB', 'XBB', 2], XBC:['XBC', 'XBC', 2], XBD:['XBD', 'XBD', 2], XCD:['XCD', 'EC$', 2], XDR:['XDR', 'XDR', 2], XEU:['XEU', 'XEU', 2], XFO:['XFO', 'XFO', 2], XFU:['XFU', 'XFU', 2], XOF:['XOF', 'CFA', 0], XPD:['XPD', 'XPD', 2], XPF:['XPF', 'CFPF', 0], XPT:['XPT', 'XPT', 2], XRE:['XRE', 'XRE', 2], XTS:['XTS', 'XTS', 2], XXX:['XXX', 'XXX', 2], YDD:['YDD', 'YDD', 130], YER:['YER', 'YR', 0, 'YER'], YUD:['YUD', 'YUD', 130], YUM:['YUM', 'YUM', 130], YUN:['YUN', 'YUN', 130], YUR:['YUR', 'YUR', 130], ZAL:['ZAL', 'ZAL', 2], ZAR:['ZAR', 'R', 2, 'ZAR'], ZMK:['ZMK', 'ZK', 0], ZRN:['ZRN', 'NZ', 130], ZRZ:['ZRZ', 'ZRZ', 130], ZWD:['ZWD', 'Z$', 128], ZWL:['ZWL', 'ZWL', 2], ZWR:['ZWR', 'ZWR', 130]};
}

function CurrencyList_en_MT_0(){
  CurrencyList_en_0.call(this);
  $$init_136();
}

function CurrencyList_en_MT(){
}

_ = CurrencyList_en_MT_0.prototype = CurrencyList_en_MT.prototype = new CurrencyList_en;
_.getClass$ = function getClass_137(){
  return Lcom_google_gwt_i18n_client_CurrencyList_1en_1MT_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava_12(){
  return new CurrencyDataImpl_0('MTL', 'Lm', 130);
}
;
_.getDefaultNative = function getDefaultNative_12(){
  return ['MTL', 'Lm', 130];
}
;
_.loadCurrencyMapJava = function loadCurrencyMapJava_10(){
  var result;
  result = $loadCurrencyMapJava_1(this);
  $put_1(result, 'ADP', new CurrencyDataImpl_0('ADP', 'ADP', 128));
  $put_1(result, 'AED', new CurrencyDataImpl_1('AED', 'DH', 2, 'DH'));
  $put_1(result, 'AFA', new CurrencyDataImpl_0('AFA', 'AFA', 130));
  $put_1(result, 'AFN', new CurrencyDataImpl_0('AFN', 'Af', 0));
  $put_1(result, 'ALL', new CurrencyDataImpl_0('ALL', 'ALL', 0));
  $put_1(result, 'AMD', new CurrencyDataImpl_0('AMD', 'AMD', 0));
  $put_1(result, 'ANG', new CurrencyDataImpl_0('ANG', 'NAf.', 2));
  $put_1(result, 'AOA', new CurrencyDataImpl_0('AOA', 'Kz', 2));
  $put_1(result, 'AOK', new CurrencyDataImpl_0('AOK', 'AOK', 130));
  $put_1(result, 'AON', new CurrencyDataImpl_0('AON', 'AON', 130));
  $put_1(result, 'AOR', new CurrencyDataImpl_0('AOR', 'AOR', 130));
  $put_1(result, 'ARA', new CurrencyDataImpl_0('ARA', '\u20B3', 130));
  $put_1(result, 'ARL', new CurrencyDataImpl_0('ARL', '$L', 130));
  $put_1(result, 'ARM', new CurrencyDataImpl_0('ARM', 'm$n', 130));
  $put_1(result, 'ARP', new CurrencyDataImpl_0('ARP', 'ARP', 130));
  $put_1(result, 'ARS', new CurrencyDataImpl_1('ARS', 'AR$', 2, 'AR$'));
  $put_1(result, 'ATS', new CurrencyDataImpl_0('ATS', 'ATS', 130));
  $put_1(result, 'AUD', new CurrencyDataImpl_1('AUD', 'AU$', 2, 'AU$'));
  $put_1(result, 'AWG', new CurrencyDataImpl_0('AWG', 'Afl.', 2));
  $put_1(result, 'AZM', new CurrencyDataImpl_0('AZM', 'AZM', 130));
  $put_1(result, 'AZN', new CurrencyDataImpl_0('AZN', 'man.', 2));
  $put_1(result, 'BAD', new CurrencyDataImpl_0('BAD', 'BAD', 130));
  $put_1(result, 'BAM', new CurrencyDataImpl_0('BAM', 'KM', 2));
  $put_1(result, 'BAN', new CurrencyDataImpl_0('BAN', 'BAN', 130));
  $put_1(result, 'BBD', new CurrencyDataImpl_0('BBD', 'Bds$', 2));
  $put_1(result, 'BDT', new CurrencyDataImpl_1('BDT', 'Tk', 2, 'Tk'));
  $put_1(result, 'BEC', new CurrencyDataImpl_0('BEC', 'BEC', 2));
  $put_1(result, 'BEF', new CurrencyDataImpl_0('BEF', 'BF', 130));
  $put_1(result, 'BEL', new CurrencyDataImpl_0('BEL', 'BEL', 2));
  $put_1(result, 'BGL', new CurrencyDataImpl_0('BGL', 'BGL', 130));
  $put_1(result, 'BGM', new CurrencyDataImpl_0('BGM', 'BGM', 130));
  $put_1(result, 'BGN', new CurrencyDataImpl_0('BGN', 'BGN', 2));
  $put_1(result, 'BGO', new CurrencyDataImpl_0('BGO', 'BGO', 130));
  $put_1(result, 'BHD', new CurrencyDataImpl_0('BHD', 'BD', 3));
  $put_1(result, 'BIF', new CurrencyDataImpl_0('BIF', 'FBu', 0));
  $put_1(result, 'BMD', new CurrencyDataImpl_0('BMD', 'BD$', 2));
  $put_1(result, 'BND', new CurrencyDataImpl_0('BND', 'BN$', 2));
  $put_1(result, 'BOB', new CurrencyDataImpl_0('BOB', 'Bs', 2));
  $put_1(result, 'BOL', new CurrencyDataImpl_0('BOL', 'BOL', 130));
  $put_1(result, 'BOP', new CurrencyDataImpl_0('BOP', '$b.', 130));
  $put_1(result, 'BOV', new CurrencyDataImpl_0('BOV', 'BOV', 2));
  $put_1(result, 'BRB', new CurrencyDataImpl_0('BRB', 'BRB', 130));
  $put_1(result, 'BRC', new CurrencyDataImpl_0('BRC', 'BRC', 130));
  $put_1(result, 'BRE', new CurrencyDataImpl_0('BRE', 'BRE', 130));
  $put_1(result, 'BRL', new CurrencyDataImpl_1('BRL', 'R$', 2, 'R$'));
  $put_1(result, 'BRN', new CurrencyDataImpl_0('BRN', 'BRN', 130));
  $put_1(result, 'BRR', new CurrencyDataImpl_0('BRR', 'BRR', 130));
  $put_1(result, 'BRZ', new CurrencyDataImpl_0('BRZ', 'BRZ', 130));
  $put_1(result, 'BSD', new CurrencyDataImpl_0('BSD', 'BS$', 2));
  $put_1(result, 'BTN', new CurrencyDataImpl_0('BTN', 'Nu.', 2));
  $put_1(result, 'BUK', new CurrencyDataImpl_0('BUK', 'BUK', 130));
  $put_1(result, 'BWP', new CurrencyDataImpl_0('BWP', 'BWP', 2));
  $put_1(result, 'BYB', new CurrencyDataImpl_0('BYB', 'BYB', 130));
  $put_1(result, 'BYR', new CurrencyDataImpl_0('BYR', 'BYR', 0));
  $put_1(result, 'BZD', new CurrencyDataImpl_0('BZD', 'BZ$', 2));
  $put_1(result, 'CAD', new CurrencyDataImpl_1('CAD', 'CA$', 2, 'C$'));
  $put_1(result, 'CDF', new CurrencyDataImpl_0('CDF', 'CDF', 2));
  $put_1(result, 'CHE', new CurrencyDataImpl_0('CHE', 'CHE', 2));
  $put_1(result, 'CHF', new CurrencyDataImpl_1('CHF', 'Fr.', 2, 'CHF'));
  $put_1(result, 'CHW', new CurrencyDataImpl_0('CHW', 'CHW', 2));
  $put_1(result, 'CLE', new CurrencyDataImpl_0('CLE', 'E\xBA', 130));
  $put_1(result, 'CLF', new CurrencyDataImpl_0('CLF', 'CLF', 0));
  $put_1(result, 'CLP', new CurrencyDataImpl_1('CLP', 'CL$', 0, 'CL$'));
  $put_1(result, 'CNY', new CurrencyDataImpl_1('CNY', 'CN\xA5', 2, 'RMB\xA5'));
  $put_1(result, 'COP', new CurrencyDataImpl_1('COP', 'CO$', 0, 'COL$'));
  $put_1(result, 'COU', new CurrencyDataImpl_0('COU', 'COU', 2));
  $put_1(result, 'CRC', new CurrencyDataImpl_1('CRC', '\u20A1', 0, 'CR\u20A1'));
  $put_1(result, 'CSD', new CurrencyDataImpl_0('CSD', 'CSD', 130));
  $put_1(result, 'CSK', new CurrencyDataImpl_0('CSK', 'CSK', 130));
  $put_1(result, 'CUC', new CurrencyDataImpl_0('CUC', 'CUC$', 2));
  $put_1(result, 'CUP', new CurrencyDataImpl_1('CUP', 'CU$', 2, '$MN'));
  $put_1(result, 'CVE', new CurrencyDataImpl_0('CVE', 'CV$', 2));
  $put_1(result, 'CYP', new CurrencyDataImpl_0('CYP', 'CY\xA3', 130));
  $put_1(result, 'CZK', new CurrencyDataImpl_1('CZK', 'K\u010D', 2, 'K\u010D'));
  $put_1(result, 'DDM', new CurrencyDataImpl_0('DDM', 'DDM', 130));
  $put_1(result, 'DEM', new CurrencyDataImpl_0('DEM', 'DM', 130));
  $put_1(result, 'DJF', new CurrencyDataImpl_0('DJF', 'Fdj', 0));
  $put_1(result, 'DKK', new CurrencyDataImpl_1('DKK', 'Dkr', 2, 'kr'));
  $put_1(result, 'DOP', new CurrencyDataImpl_1('DOP', 'RD$', 2, 'RD$'));
  $put_1(result, 'DZD', new CurrencyDataImpl_0('DZD', 'DA', 2));
  $put_1(result, 'ECS', new CurrencyDataImpl_0('ECS', 'ECS', 130));
  $put_1(result, 'ECV', new CurrencyDataImpl_0('ECV', 'ECV', 2));
  $put_1(result, 'EEK', new CurrencyDataImpl_0('EEK', 'Ekr', 2));
  $put_1(result, 'EGP', new CurrencyDataImpl_1('EGP', 'EG\xA3', 2, 'LE'));
  $put_1(result, 'EQE', new CurrencyDataImpl_0('EQE', 'EQE', 130));
  $put_1(result, 'ERN', new CurrencyDataImpl_0('ERN', 'Nfk', 2));
  $put_1(result, 'ESA', new CurrencyDataImpl_0('ESA', 'ESA', 2));
  $put_1(result, 'ESB', new CurrencyDataImpl_0('ESB', 'ESB', 2));
  $put_1(result, 'ESP', new CurrencyDataImpl_0('ESP', 'Pts', 128));
  $put_1(result, 'ETB', new CurrencyDataImpl_0('ETB', 'Br', 2));
  $put_1(result, 'EUR', new CurrencyDataImpl_1('EUR', '\u20AC', 2, '\u20AC'));
  $put_1(result, 'FIM', new CurrencyDataImpl_0('FIM', 'mk', 130));
  $put_1(result, 'FJD', new CurrencyDataImpl_0('FJD', 'FJ$', 2));
  $put_1(result, 'FKP', new CurrencyDataImpl_0('FKP', 'FK\xA3', 2));
  $put_1(result, 'FRF', new CurrencyDataImpl_0('FRF', '\u20A3', 130));
  $put_1(result, 'GBP', new CurrencyDataImpl_1('GBP', 'GB\xA3', 2, 'GB\xA3'));
  $put_1(result, 'GEK', new CurrencyDataImpl_0('GEK', 'GEK', 130));
  $put_1(result, 'GEL', new CurrencyDataImpl_0('GEL', 'GEL', 2));
  $put_1(result, 'GHC', new CurrencyDataImpl_0('GHC', '\u20B5', 130));
  $put_1(result, 'GHS', new CurrencyDataImpl_0('GHS', 'GH\u20B5', 2));
  $put_1(result, 'GIP', new CurrencyDataImpl_0('GIP', 'GI\xA3', 2));
  $put_1(result, 'GMD', new CurrencyDataImpl_0('GMD', 'GMD', 2));
  $put_1(result, 'GNF', new CurrencyDataImpl_0('GNF', 'FG', 0));
  $put_1(result, 'GNS', new CurrencyDataImpl_0('GNS', 'GNS', 130));
  $put_1(result, 'GQE', new CurrencyDataImpl_0('GQE', 'GQE', 130));
  $put_1(result, 'GRD', new CurrencyDataImpl_0('GRD', '\u20AF', 130));
  $put_1(result, 'GTQ', new CurrencyDataImpl_0('GTQ', 'GTQ', 2));
  $put_1(result, 'GWE', new CurrencyDataImpl_0('GWE', 'GWE', 130));
  $put_1(result, 'GWP', new CurrencyDataImpl_0('GWP', 'GWP', 2));
  $put_1(result, 'GYD', new CurrencyDataImpl_0('GYD', 'GY$', 0));
  $put_1(result, 'HKD', new CurrencyDataImpl_1('HKD', 'HK$', 2, 'HK$'));
  $put_1(result, 'HNL', new CurrencyDataImpl_0('HNL', 'HNL', 2));
  $put_1(result, 'HRD', new CurrencyDataImpl_0('HRD', 'HRD', 130));
  $put_1(result, 'HRK', new CurrencyDataImpl_0('HRK', 'kn', 2));
  $put_1(result, 'HTG', new CurrencyDataImpl_0('HTG', 'HTG', 2));
  $put_1(result, 'HUF', new CurrencyDataImpl_0('HUF', 'Ft', 0));
  $put_1(result, 'IDR', new CurrencyDataImpl_0('IDR', 'Rp', 0));
  $put_1(result, 'IEP', new CurrencyDataImpl_0('IEP', 'IR\xA3', 130));
  $put_1(result, 'ILP', new CurrencyDataImpl_0('ILP', 'I\xA3', 130));
  $put_1(result, 'ILR', new CurrencyDataImpl_0('ILR', 'ILR', 130));
  $put_1(result, 'ILS', new CurrencyDataImpl_1('ILS', '\u20AA', 2, 'IL\u20AA'));
  $put_1(result, 'INR', new CurrencyDataImpl_1('INR', 'Rs', 2, 'Rs'));
  $put_1(result, 'IQD', new CurrencyDataImpl_0('IQD', 'IQD', 0));
  $put_1(result, 'IRR', new CurrencyDataImpl_0('IRR', 'IRR', 0));
  $put_1(result, 'ISJ', new CurrencyDataImpl_0('ISJ', 'ISJ', 130));
  $put_1(result, 'ISK', new CurrencyDataImpl_1('ISK', 'Ikr', 0, 'kr'));
  $put_1(result, 'ITL', new CurrencyDataImpl_0('ITL', 'IT\u20A4', 128));
  $put_1(result, 'JMD', new CurrencyDataImpl_1('JMD', 'J$', 2, 'JA$'));
  $put_1(result, 'JOD', new CurrencyDataImpl_0('JOD', 'JD', 3));
  $put_1(result, 'JPY', new CurrencyDataImpl_1('JPY', '\xA5', 0, 'JP\xA5'));
  $put_1(result, 'KES', new CurrencyDataImpl_0('KES', 'Ksh', 2));
  $put_1(result, 'KGS', new CurrencyDataImpl_0('KGS', 'KGS', 2));
  $put_1(result, 'KHR', new CurrencyDataImpl_0('KHR', 'KHR', 2));
  $put_1(result, 'KMF', new CurrencyDataImpl_0('KMF', 'CF', 0));
  $put_1(result, 'KPW', new CurrencyDataImpl_0('KPW', 'KPW', 0));
  $put_1(result, 'KRH', new CurrencyDataImpl_0('KRH', 'KRH', 130));
  $put_1(result, 'KRO', new CurrencyDataImpl_0('KRO', 'KRO', 130));
  $put_1(result, 'KRW', new CurrencyDataImpl_1('KRW', '\u20A9', 0, 'KR\u20A9'));
  $put_1(result, 'KWD', new CurrencyDataImpl_0('KWD', 'KD', 3));
  $put_1(result, 'KYD', new CurrencyDataImpl_0('KYD', 'KY$', 2));
  $put_1(result, 'KZT', new CurrencyDataImpl_0('KZT', 'KZT', 2));
  $put_1(result, 'LAK', new CurrencyDataImpl_0('LAK', '\u20AD', 0));
  $put_1(result, 'LBP', new CurrencyDataImpl_0('LBP', 'LB\xA3', 0));
  $put_1(result, 'LKR', new CurrencyDataImpl_1('LKR', 'SLRs', 2, 'SLRs'));
  $put_1(result, 'LRD', new CurrencyDataImpl_0('LRD', 'L$', 2));
  $put_1(result, 'LSL', new CurrencyDataImpl_0('LSL', 'LSL', 2));
  $put_1(result, 'LSM', new CurrencyDataImpl_0('LSM', 'LSM', 130));
  $put_1(result, 'LTL', new CurrencyDataImpl_0('LTL', 'Lt', 2));
  $put_1(result, 'LTT', new CurrencyDataImpl_0('LTT', 'LTT', 130));
  $put_1(result, 'LUC', new CurrencyDataImpl_0('LUC', 'LUC', 2));
  $put_1(result, 'LUF', new CurrencyDataImpl_0('LUF', 'LUF', 128));
  $put_1(result, 'LUL', new CurrencyDataImpl_0('LUL', 'LUL', 2));
  $put_1(result, 'LVL', new CurrencyDataImpl_0('LVL', 'Ls', 2));
  $put_1(result, 'LVR', new CurrencyDataImpl_0('LVR', 'LVR', 130));
  $put_1(result, 'LYD', new CurrencyDataImpl_0('LYD', 'LD', 3));
  $put_1(result, 'MAD', new CurrencyDataImpl_0('MAD', 'MAD', 2));
  $put_1(result, 'MAF', new CurrencyDataImpl_0('MAF', 'MAF', 130));
  $put_1(result, 'MCF', new CurrencyDataImpl_0('MCF', 'MCF', 130));
  $put_1(result, 'MDC', new CurrencyDataImpl_0('MDC', 'MDC', 130));
  $put_1(result, 'MDL', new CurrencyDataImpl_0('MDL', 'MDL', 2));
  $put_1(result, 'MGA', new CurrencyDataImpl_0('MGA', 'MGA', 0));
  $put_1(result, 'MGF', new CurrencyDataImpl_0('MGF', 'MGF', 128));
  $put_1(result, 'MKD', new CurrencyDataImpl_0('MKD', 'MKD', 2));
  $put_1(result, 'MKN', new CurrencyDataImpl_0('MKN', 'MKN', 130));
  $put_1(result, 'MLF', new CurrencyDataImpl_0('MLF', 'MLF', 130));
  $put_1(result, 'MMK', new CurrencyDataImpl_0('MMK', 'MMK', 0));
  $put_1(result, 'MNT', new CurrencyDataImpl_1('MNT', '\u20AE', 0, 'MN\u20AE'));
  $put_1(result, 'MOP', new CurrencyDataImpl_0('MOP', 'MOP$', 2));
  $put_1(result, 'MRO', new CurrencyDataImpl_0('MRO', 'UM', 0));
  $put_1(result, 'MTL', new CurrencyDataImpl_0('MTL', 'Lm', 130));
  $put_1(result, 'MTP', new CurrencyDataImpl_0('MTP', 'MT\xA3', 130));
  $put_1(result, 'MUR', new CurrencyDataImpl_0('MUR', 'MURs', 0));
  $put_1(result, 'MVP', new CurrencyDataImpl_0('MVP', 'MVP', 130));
  $put_1(result, 'MVR', new CurrencyDataImpl_0('MVR', 'MVR', 2));
  $put_1(result, 'MWK', new CurrencyDataImpl_0('MWK', 'MWK', 2));
  $put_1(result, 'MXN', new CurrencyDataImpl_1('MXN', 'Mex$', 2, 'Mex$'));
  $put_1(result, 'MXP', new CurrencyDataImpl_0('MXP', 'MX$', 130));
  $put_1(result, 'MXV', new CurrencyDataImpl_0('MXV', 'MXV', 2));
  $put_1(result, 'MYR', new CurrencyDataImpl_1('MYR', 'RM', 2, 'RM'));
  $put_1(result, 'MZE', new CurrencyDataImpl_0('MZE', 'MZE', 130));
  $put_1(result, 'MZM', new CurrencyDataImpl_0('MZM', 'Mt', 130));
  $put_1(result, 'MZN', new CurrencyDataImpl_0('MZN', 'MTn', 2));
  $put_1(result, 'NAD', new CurrencyDataImpl_0('NAD', 'N$', 2));
  $put_1(result, 'NGN', new CurrencyDataImpl_0('NGN', '\u20A6', 2));
  $put_1(result, 'NIC', new CurrencyDataImpl_0('NIC', 'NIC', 130));
  $put_1(result, 'NIO', new CurrencyDataImpl_0('NIO', 'C$', 2));
  $put_1(result, 'NLG', new CurrencyDataImpl_0('NLG', 'fl', 130));
  $put_1(result, 'NOK', new CurrencyDataImpl_1('NOK', 'Nkr', 2, 'NOkr'));
  $put_1(result, 'NPR', new CurrencyDataImpl_0('NPR', 'NPRs', 2));
  $put_1(result, 'NZD', new CurrencyDataImpl_0('NZD', 'NZ$', 2));
  $put_1(result, 'OMR', new CurrencyDataImpl_0('OMR', 'OMR', 3));
  $put_1(result, 'PAB', new CurrencyDataImpl_1('PAB', 'B/.', 2, 'B/.'));
  $put_1(result, 'PEI', new CurrencyDataImpl_0('PEI', 'I/.', 130));
  $put_1(result, 'PEN', new CurrencyDataImpl_1('PEN', 'S/.', 2, 'S/.'));
  $put_1(result, 'PES', new CurrencyDataImpl_0('PES', 'PES', 130));
  $put_1(result, 'PGK', new CurrencyDataImpl_0('PGK', 'PGK', 2));
  $put_1(result, 'PHP', new CurrencyDataImpl_1('PHP', '\u20B1', 2, 'PHP'));
  $put_1(result, 'PKR', new CurrencyDataImpl_1('PKR', 'PKRs', 0, 'PKRs.'));
  $put_1(result, 'PLN', new CurrencyDataImpl_0('PLN', 'z\u0142', 2));
  $put_1(result, 'PLZ', new CurrencyDataImpl_0('PLZ', 'PLZ', 130));
  $put_1(result, 'PTE', new CurrencyDataImpl_0('PTE', 'Esc', 130));
  $put_1(result, 'PYG', new CurrencyDataImpl_0('PYG', '\u20B2', 0));
  $put_1(result, 'QAR', new CurrencyDataImpl_0('QAR', 'QR', 2));
  $put_1(result, 'RHD', new CurrencyDataImpl_0('RHD', 'RH$', 130));
  $put_1(result, 'ROL', new CurrencyDataImpl_0('ROL', 'ROL', 130));
  $put_1(result, 'RON', new CurrencyDataImpl_0('RON', 'RON', 2));
  $put_1(result, 'RSD', new CurrencyDataImpl_0('RSD', 'din.', 0));
  $put_1(result, 'RUB', new CurrencyDataImpl_1('RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'));
  $put_1(result, 'RUR', new CurrencyDataImpl_0('RUR', 'RUR', 130));
  $put_1(result, 'RWF', new CurrencyDataImpl_0('RWF', 'RWF', 0));
  $put_1(result, 'SAR', new CurrencyDataImpl_1('SAR', 'SR', 2, 'SR'));
  $put_1(result, 'SBD', new CurrencyDataImpl_0('SBD', 'SI$', 2));
  $put_1(result, 'SCR', new CurrencyDataImpl_0('SCR', 'SRe', 2));
  $put_1(result, 'SDD', new CurrencyDataImpl_0('SDD', 'LSd', 130));
  $put_1(result, 'SDG', new CurrencyDataImpl_0('SDG', 'SDG', 2));
  $put_1(result, 'SDP', new CurrencyDataImpl_0('SDP', 'SDP', 130));
  $put_1(result, 'SEK', new CurrencyDataImpl_1('SEK', 'Skr', 2, 'kr'));
  $put_1(result, 'SGD', new CurrencyDataImpl_1('SGD', 'S$', 2, 'S$'));
  $put_1(result, 'SHP', new CurrencyDataImpl_0('SHP', 'SH\xA3', 2));
  $put_1(result, 'SIT', new CurrencyDataImpl_0('SIT', 'SIT', 130));
  $put_1(result, 'SKK', new CurrencyDataImpl_0('SKK', 'Sk', 130));
  $put_1(result, 'SLL', new CurrencyDataImpl_0('SLL', 'Le', 0));
  $put_1(result, 'SOS', new CurrencyDataImpl_0('SOS', 'Ssh', 0));
  $put_1(result, 'SRD', new CurrencyDataImpl_0('SRD', 'SR$', 2));
  $put_1(result, 'SRG', new CurrencyDataImpl_0('SRG', 'Sf', 130));
  $put_1(result, 'STD', new CurrencyDataImpl_0('STD', 'Db', 0));
  $put_1(result, 'SUR', new CurrencyDataImpl_0('SUR', 'SUR', 130));
  $put_1(result, 'SVC', new CurrencyDataImpl_0('SVC', 'SV\u20A1', 130));
  $put_1(result, 'SYP', new CurrencyDataImpl_0('SYP', 'SY\xA3', 0));
  $put_1(result, 'SZL', new CurrencyDataImpl_0('SZL', 'SZL', 2));
  $put_1(result, 'THB', new CurrencyDataImpl_1('THB', '\u0E3F', 2, 'THB'));
  $put_1(result, 'TJR', new CurrencyDataImpl_0('TJR', 'TJR', 130));
  $put_1(result, 'TJS', new CurrencyDataImpl_0('TJS', 'TJS', 2));
  $put_1(result, 'TMM', new CurrencyDataImpl_0('TMM', 'TMM', 128));
  $put_1(result, 'TMT', new CurrencyDataImpl_0('TMT', 'TMT', 2));
  $put_1(result, 'TND', new CurrencyDataImpl_0('TND', 'DT', 3));
  $put_1(result, 'TOP', new CurrencyDataImpl_0('TOP', 'T$', 2));
  $put_1(result, 'TPE', new CurrencyDataImpl_0('TPE', 'TPE', 130));
  $put_1(result, 'TRL', new CurrencyDataImpl_0('TRL', 'TRL', 128));
  $put_1(result, 'TRY', new CurrencyDataImpl_1('TRY', 'TL', 2, 'YTL'));
  $put_1(result, 'TTD', new CurrencyDataImpl_0('TTD', 'TT$', 2));
  $put_1(result, 'TWD', new CurrencyDataImpl_1('TWD', 'NT$', 2, 'NT$'));
  $put_1(result, 'TZS', new CurrencyDataImpl_0('TZS', 'TSh', 0));
  $put_1(result, 'UAH', new CurrencyDataImpl_0('UAH', '\u20B4', 2));
  $put_1(result, 'UAK', new CurrencyDataImpl_0('UAK', 'UAK', 130));
  $put_1(result, 'UGS', new CurrencyDataImpl_0('UGS', 'UGS', 130));
  $put_1(result, 'UGX', new CurrencyDataImpl_0('UGX', 'USh', 0));
  $put_1(result, 'USD', new CurrencyDataImpl_1('USD', '$', 2, 'US$'));
  $put_1(result, 'USN', new CurrencyDataImpl_0('USN', 'USN', 2));
  $put_1(result, 'USS', new CurrencyDataImpl_0('USS', 'USS', 2));
  $put_1(result, 'UYI', new CurrencyDataImpl_0('UYI', 'UYI', 2));
  $put_1(result, 'UYP', new CurrencyDataImpl_0('UYP', 'UYP', 130));
  $put_1(result, 'UYU', new CurrencyDataImpl_1('UYU', '$U', 2, 'UY$'));
  $put_1(result, 'UZS', new CurrencyDataImpl_0('UZS', 'UZS', 0));
  $put_1(result, 'VEB', new CurrencyDataImpl_0('VEB', 'VEB', 130));
  $put_1(result, 'VEF', new CurrencyDataImpl_0('VEF', 'Bs.F.', 2));
  $put_1(result, 'VND', new CurrencyDataImpl_1('VND', '\u20AB', 24, '\u20AB'));
  $put_1(result, 'VNN', new CurrencyDataImpl_0('VNN', 'VNN', 130));
  $put_1(result, 'VUV', new CurrencyDataImpl_0('VUV', 'VT', 0));
  $put_1(result, 'WST', new CurrencyDataImpl_0('WST', 'WS$', 2));
  $put_1(result, 'XAF', new CurrencyDataImpl_0('XAF', 'FCFA', 0));
  $put_1(result, 'XAG', new CurrencyDataImpl_0('XAG', 'XAG', 2));
  $put_1(result, 'XAU', new CurrencyDataImpl_0('XAU', 'XAU', 2));
  $put_1(result, 'XBA', new CurrencyDataImpl_0('XBA', 'XBA', 2));
  $put_1(result, 'XBB', new CurrencyDataImpl_0('XBB', 'XBB', 2));
  $put_1(result, 'XBC', new CurrencyDataImpl_0('XBC', 'XBC', 2));
  $put_1(result, 'XBD', new CurrencyDataImpl_0('XBD', 'XBD', 2));
  $put_1(result, 'XCD', new CurrencyDataImpl_0('XCD', 'EC$', 2));
  $put_1(result, 'XDR', new CurrencyDataImpl_0('XDR', 'XDR', 2));
  $put_1(result, 'XEU', new CurrencyDataImpl_0('XEU', 'XEU', 2));
  $put_1(result, 'XFO', new CurrencyDataImpl_0('XFO', 'XFO', 2));
  $put_1(result, 'XFU', new CurrencyDataImpl_0('XFU', 'XFU', 2));
  $put_1(result, 'XOF', new CurrencyDataImpl_0('XOF', 'CFA', 0));
  $put_1(result, 'XPD', new CurrencyDataImpl_0('XPD', 'XPD', 2));
  $put_1(result, 'XPF', new CurrencyDataImpl_0('XPF', 'CFPF', 0));
  $put_1(result, 'XPT', new CurrencyDataImpl_0('XPT', 'XPT', 2));
  $put_1(result, 'XRE', new CurrencyDataImpl_0('XRE', 'XRE', 2));
  $put_1(result, 'XTS', new CurrencyDataImpl_0('XTS', 'XTS', 2));
  $put_1(result, 'XXX', new CurrencyDataImpl_0('XXX', 'XXX', 2));
  $put_1(result, 'YDD', new CurrencyDataImpl_0('YDD', 'YDD', 130));
  $put_1(result, 'YER', new CurrencyDataImpl_1('YER', 'YR', 0, 'YER'));
  $put_1(result, 'YUD', new CurrencyDataImpl_0('YUD', 'YUD', 130));
  $put_1(result, 'YUM', new CurrencyDataImpl_0('YUM', 'YUM', 130));
  $put_1(result, 'YUN', new CurrencyDataImpl_0('YUN', 'YUN', 130));
  $put_1(result, 'YUR', new CurrencyDataImpl_0('YUR', 'YUR', 130));
  $put_1(result, 'ZAL', new CurrencyDataImpl_0('ZAL', 'ZAL', 2));
  $put_1(result, 'ZAR', new CurrencyDataImpl_1('ZAR', 'R', 2, 'ZAR'));
  $put_1(result, 'ZMK', new CurrencyDataImpl_0('ZMK', 'ZK', 0));
  $put_1(result, 'ZRN', new CurrencyDataImpl_0('ZRN', 'NZ', 130));
  $put_1(result, 'ZRZ', new CurrencyDataImpl_0('ZRZ', 'ZRZ', 130));
  $put_1(result, 'ZWD', new CurrencyDataImpl_0('ZWD', 'Z$', 128));
  $put_1(result, 'ZWL', new CurrencyDataImpl_0('ZWL', 'ZWL', 2));
  $put_1(result, 'ZWR', new CurrencyDataImpl_0('ZWR', 'ZWR', 130));
  return result;
}
;
_.loadCurrencyMapNative = function loadCurrencyMapNative_10(){
  return overrideMap($loadCurrencyMapNative_1(this), $loadMyCurrencyMapOverridesNative_9());
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
function $$init_137(){
}

function $loadMyCurrencyMapOverridesNative_10(){
  return {ADP:['ADP', 'ADP', 128], AED:['AED', 'DH', 2, 'DH'], AFA:['AFA', 'AFA', 130], AFN:['AFN', 'Af', 0], ALL:['ALL', 'ALL', 0], AMD:['AMD', 'AMD', 0], ANG:['ANG', 'NAf.', 2], AOA:['AOA', 'Kz', 2], AOK:['AOK', 'AOK', 130], AON:['AON', 'AON', 130], AOR:['AOR', 'AOR', 130], ARA:['ARA', '\u20B3', 130], ARL:['ARL', '$L', 130], ARM:['ARM', 'm$n', 130], ARP:['ARP', 'ARP', 130], ARS:['ARS', 'AR$', 2, 'AR$'], ATS:['ATS', 'ATS', 130], AUD:['AUD', 'AU$', 2, 'AU$'], AWG:['AWG', 'Afl.', 2], AZM:['AZM', 'AZM', 130], AZN:['AZN', 'man.', 2], BAD:['BAD', 'BAD', 130], BAM:['BAM', 'KM', 2], BAN:['BAN', 'BAN', 130], BBD:['BBD', 'Bds$', 2], BDT:['BDT', 'Tk', 2, 'Tk'], BEC:['BEC', 'BEC', 2], BEF:['BEF', 'BF', 130], BEL:['BEL', 'BEL', 2], BGL:['BGL', 'BGL', 130], BGM:['BGM', 'BGM', 130], BGN:['BGN', 'BGN', 2], BGO:['BGO', 'BGO', 130], BHD:['BHD', 'BD', 3], BIF:['BIF', 'FBu', 0], BMD:['BMD', 'BD$', 2], BND:['BND', 'BN$', 2], BOB:['BOB', 'Bs', 2], BOL:['BOL', 'BOL', 130], BOP:['BOP', '$b.', 130], BOV:['BOV', 'BOV', 2], BRB:['BRB', 'BRB', 130], BRC:['BRC', 'BRC', 130], BRE:['BRE', 'BRE', 130], BRL:['BRL', 'R$', 2, 'R$'], BRN:['BRN', 'BRN', 130], BRR:['BRR', 'BRR', 130], BRZ:['BRZ', 'BRZ', 130], BSD:['BSD', 'BS$', 2], BTN:['BTN', 'Nu.', 2], BUK:['BUK', 'BUK', 130], BWP:['BWP', 'BWP', 2], BYB:['BYB', 'BYB', 130], BYR:['BYR', 'BYR', 0], BZD:['BZD', 'BZ$', 2], CAD:['CAD', 'CA$', 2, 'C$'], CDF:['CDF', 'CDF', 2], CHE:['CHE', 'CHE', 2], CHF:['CHF', 'Fr.', 2, 'CHF'], CHW:['CHW', 'CHW', 2], CLE:['CLE', 'E\xBA', 130], CLF:['CLF', 'CLF', 0], CLP:['CLP', 'CL$', 0, 'CL$'], CNY:['CNY', 'CN\xA5', 2, 'RMB\xA5'], COP:['COP', 'CO$', 0, 'COL$'], COU:['COU', 'COU', 2], CRC:['CRC', '\u20A1', 0, 'CR\u20A1'], CSD:['CSD', 'CSD', 130], CSK:['CSK', 'CSK', 130], CUC:['CUC', 'CUC$', 2], CUP:['CUP', 'CU$', 2, '$MN'], CVE:['CVE', 'CV$', 2], CYP:['CYP', 'CY\xA3', 130], CZK:['CZK', 'K\u010D', 2, 'K\u010D'], DDM:['DDM', 'DDM', 130], DEM:['DEM', 'DM', 130], DJF:['DJF', 'Fdj', 0], DKK:['DKK', 'Dkr', 2, 'kr'], DOP:['DOP', 'RD$', 2, 'RD$'], DZD:['DZD', 'DA', 2], ECS:['ECS', 'ECS', 130], ECV:['ECV', 'ECV', 2], EEK:['EEK', 'Ekr', 2], EGP:['EGP', 'EG\xA3', 2, 'LE'], EQE:['EQE', 'EQE', 130], ERN:['ERN', 'Nfk', 2], ESA:['ESA', 'ESA', 2], ESB:['ESB', 'ESB', 2], ESP:['ESP', 'Pts', 128], ETB:['ETB', 'Br', 2], EUR:['EUR', '\u20AC', 2, '\u20AC'], FIM:['FIM', 'mk', 130], FJD:['FJD', 'FJ$', 2], FKP:['FKP', 'FK\xA3', 2], FRF:['FRF', '\u20A3', 130], GBP:['GBP', '\xA3', 2, 'GB\xA3'], GEK:['GEK', 'GEK', 130], GEL:['GEL', 'GEL', 2], GHC:['GHC', '\u20B5', 130], GHS:['GHS', 'GH\u20B5', 2], GIP:['GIP', 'GI\xA3', 2], GMD:['GMD', 'GMD', 2], GNF:['GNF', 'FG', 0], GNS:['GNS', 'GNS', 130], GQE:['GQE', 'GQE', 130], GRD:['GRD', '\u20AF', 130], GTQ:['GTQ', 'GTQ', 2], GWE:['GWE', 'GWE', 130], GWP:['GWP', 'GWP', 2], GYD:['GYD', 'GY$', 0], HKD:['HKD', 'HK$', 2, 'HK$'], HNL:['HNL', 'HNL', 2], HRD:['HRD', 'HRD', 130], HRK:['HRK', 'kn', 2], HTG:['HTG', 'HTG', 2], HUF:['HUF', 'Ft', 0], IDR:['IDR', 'Rp', 0], IEP:['IEP', 'IR\xA3', 130], ILP:['ILP', 'I\xA3', 130], ILR:['ILR', 'ILR', 130], ILS:['ILS', '\u20AA', 2, 'IL\u20AA'], INR:['INR', 'Rs', 2, 'Rs'], IQD:['IQD', 'IQD', 0], IRR:['IRR', 'IRR', 0], ISJ:['ISJ', 'ISJ', 130], ISK:['ISK', 'Ikr', 0, 'kr'], ITL:['ITL', 'IT\u20A4', 128], JMD:['JMD', 'J$', 2, 'JA$'], JOD:['JOD', 'JD', 3], JPY:['JPY', '\xA5', 0, 'JP\xA5'], KES:['KES', 'Ksh', 2], KGS:['KGS', 'KGS', 2], KHR:['KHR', 'KHR', 2], KMF:['KMF', 'CF', 0], KPW:['KPW', 'KPW', 0], KRH:['KRH', 'KRH', 130], KRO:['KRO', 'KRO', 130], KRW:['KRW', '\u20A9', 0, 'KR\u20A9'], KWD:['KWD', 'KD', 3], KYD:['KYD', 'KY$', 2], KZT:['KZT', 'KZT', 2], LAK:['LAK', '\u20AD', 0], LBP:['LBP', 'LB\xA3', 0], LKR:['LKR', 'SLRs', 2, 'SLRs'], LRD:['LRD', 'L$', 2], LSL:['LSL', 'LSL', 2], LSM:['LSM', 'LSM', 130], LTL:['LTL', 'Lt', 2], LTT:['LTT', 'LTT', 130], LUC:['LUC', 'LUC', 2], LUF:['LUF', 'LUF', 128], LUL:['LUL', 'LUL', 2], LVL:['LVL', 'Ls', 2], LVR:['LVR', 'LVR', 130], LYD:['LYD', 'LD', 3], MAD:['MAD', 'MAD', 2], MAF:['MAF', 'MAF', 130], MCF:['MCF', 'MCF', 130], MDC:['MDC', 'MDC', 130], MDL:['MDL', 'MDL', 2], MGA:['MGA', 'MGA', 0], MGF:['MGF', 'MGF', 128], MKD:['MKD', 'MKD', 2], MKN:['MKN', 'MKN', 130], MLF:['MLF', 'MLF', 130], MMK:['MMK', 'MMK', 0], MNT:['MNT', '\u20AE', 0, 'MN\u20AE'], MOP:['MOP', 'MOP$', 2], MRO:['MRO', 'UM', 0], MTL:['MTL', 'Lm', 130], MTP:['MTP', 'MT\xA3', 130], MUR:['MUR', 'MURs', 0], MVP:['MVP', 'MVP', 130], MVR:['MVR', 'MVR', 2], MWK:['MWK', 'MWK', 2], MXN:['MXN', 'Mex$', 2, 'Mex$'], MXP:['MXP', 'MX$', 130], MXV:['MXV', 'MXV', 2], MYR:['MYR', 'RM', 2, 'RM'], MZE:['MZE', 'MZE', 130], MZM:['MZM', 'Mt', 130], MZN:['MZN', 'MTn', 2], NAD:['NAD', '$', 2], NGN:['NGN', '\u20A6', 2], NIC:['NIC', 'NIC', 130], NIO:['NIO', 'C$', 2], NLG:['NLG', 'fl', 130], NOK:['NOK', 'Nkr', 2, 'NOkr'], NPR:['NPR', 'NPRs', 2], NZD:['NZD', 'NZ$', 2], OMR:['OMR', 'OMR', 3], PAB:['PAB', 'B/.', 2, 'B/.'], PEI:['PEI', 'I/.', 130], PEN:['PEN', 'S/.', 2, 'S/.'], PES:['PES', 'PES', 130], PGK:['PGK', 'PGK', 2], PHP:['PHP', '\u20B1', 2, 'PHP'], PKR:['PKR', 'PKRs', 0, 'PKRs.'], PLN:['PLN', 'z\u0142', 2], PLZ:['PLZ', 'PLZ', 130], PTE:['PTE', 'Esc', 130], PYG:['PYG', '\u20B2', 0], QAR:['QAR', 'QR', 2], RHD:['RHD', 'RH$', 130], ROL:['ROL', 'ROL', 130], RON:['RON', 'RON', 2], RSD:['RSD', 'din.', 0], RUB:['RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'], RUR:['RUR', 'RUR', 130], RWF:['RWF', 'RWF', 0], SAR:['SAR', 'SR', 2, 'SR'], SBD:['SBD', 'SI$', 2], SCR:['SCR', 'SRe', 2], SDD:['SDD', 'LSd', 130], SDG:['SDG', 'SDG', 2], SDP:['SDP', 'SDP', 130], SEK:['SEK', 'Skr', 2, 'kr'], SGD:['SGD', 'S$', 2, 'S$'], SHP:['SHP', 'SH\xA3', 2], SIT:['SIT', 'SIT', 130], SKK:['SKK', 'Sk', 130], SLL:['SLL', 'Le', 0], SOS:['SOS', 'Ssh', 0], SRD:['SRD', 'SR$', 2], SRG:['SRG', 'Sf', 130], STD:['STD', 'Db', 0], SUR:['SUR', 'SUR', 130], SVC:['SVC', 'SV\u20A1', 130], SYP:['SYP', 'SY\xA3', 0], SZL:['SZL', 'SZL', 2], THB:['THB', '\u0E3F', 2, 'THB'], TJR:['TJR', 'TJR', 130], TJS:['TJS', 'TJS', 2], TMM:['TMM', 'TMM', 128], TMT:['TMT', 'TMT', 2], TND:['TND', 'DT', 3], TOP:['TOP', 'T$', 2], TPE:['TPE', 'TPE', 130], TRL:['TRL', 'TRL', 128], TRY:['TRY', 'TL', 2, 'YTL'], TTD:['TTD', 'TT$', 2], TWD:['TWD', 'NT$', 2, 'NT$'], TZS:['TZS', 'TSh', 0], UAH:['UAH', '\u20B4', 2], UAK:['UAK', 'UAK', 130], UGS:['UGS', 'UGS', 130], UGX:['UGX', 'USh', 0], USD:['USD', 'US$', 2, 'US$'], USN:['USN', 'USN', 2], USS:['USS', 'USS', 2], UYI:['UYI', 'UYI', 2], UYP:['UYP', 'UYP', 130], UYU:['UYU', '$U', 2, 'UY$'], UZS:['UZS', 'UZS', 0], VEB:['VEB', 'VEB', 130], VEF:['VEF', 'Bs.F.', 2], VND:['VND', '\u20AB', 24, '\u20AB'], VNN:['VNN', 'VNN', 130], VUV:['VUV', 'VT', 0], WST:['WST', 'WS$', 2], XAF:['XAF', 'FCFA', 0], XAG:['XAG', 'XAG', 2], XAU:['XAU', 'XAU', 2], XBA:['XBA', 'XBA', 2], XBB:['XBB', 'XBB', 2], XBC:['XBC', 'XBC', 2], XBD:['XBD', 'XBD', 2], XCD:['XCD', 'EC$', 2], XDR:['XDR', 'XDR', 2], XEU:['XEU', 'XEU', 2], XFO:['XFO', 'XFO', 2], XFU:['XFU', 'XFU', 2], XOF:['XOF', 'CFA', 0], XPD:['XPD', 'XPD', 2], XPF:['XPF', 'CFPF', 0], XPT:['XPT', 'XPT', 2], XRE:['XRE', 'XRE', 2], XTS:['XTS', 'XTS', 2], XXX:['XXX', 'XXX', 2], YDD:['YDD', 'YDD', 130], YER:['YER', 'YR', 0, 'YER'], YUD:['YUD', 'YUD', 130], YUM:['YUM', 'YUM', 130], YUN:['YUN', 'YUN', 130], YUR:['YUR', 'YUR', 130], ZAL:['ZAL', 'ZAL', 2], ZAR:['ZAR', 'R', 2, 'ZAR'], ZMK:['ZMK', 'ZK', 0], ZRN:['ZRN', 'NZ', 130], ZRZ:['ZRZ', 'ZRZ', 130], ZWD:['ZWD', 'Z$', 128], ZWL:['ZWL', 'ZWL', 2], ZWR:['ZWR', 'ZWR', 130]};
}

function CurrencyList_en_NA_0(){
  CurrencyList_en_0.call(this);
  $$init_137();
}

function CurrencyList_en_NA(){
}

_ = CurrencyList_en_NA_0.prototype = CurrencyList_en_NA.prototype = new CurrencyList_en;
_.getClass$ = function getClass_138(){
  return Lcom_google_gwt_i18n_client_CurrencyList_1en_1NA_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava_13(){
  return new CurrencyDataImpl_1('ZAR', 'R', 2, 'ZAR');
}
;
_.getDefaultNative = function getDefaultNative_13(){
  return ['ZAR', 'R', 2, 'ZAR'];
}
;
_.loadCurrencyMapJava = function loadCurrencyMapJava_11(){
  var result;
  result = $loadCurrencyMapJava_1(this);
  $put_1(result, 'ADP', new CurrencyDataImpl_0('ADP', 'ADP', 128));
  $put_1(result, 'AED', new CurrencyDataImpl_1('AED', 'DH', 2, 'DH'));
  $put_1(result, 'AFA', new CurrencyDataImpl_0('AFA', 'AFA', 130));
  $put_1(result, 'AFN', new CurrencyDataImpl_0('AFN', 'Af', 0));
  $put_1(result, 'ALL', new CurrencyDataImpl_0('ALL', 'ALL', 0));
  $put_1(result, 'AMD', new CurrencyDataImpl_0('AMD', 'AMD', 0));
  $put_1(result, 'ANG', new CurrencyDataImpl_0('ANG', 'NAf.', 2));
  $put_1(result, 'AOA', new CurrencyDataImpl_0('AOA', 'Kz', 2));
  $put_1(result, 'AOK', new CurrencyDataImpl_0('AOK', 'AOK', 130));
  $put_1(result, 'AON', new CurrencyDataImpl_0('AON', 'AON', 130));
  $put_1(result, 'AOR', new CurrencyDataImpl_0('AOR', 'AOR', 130));
  $put_1(result, 'ARA', new CurrencyDataImpl_0('ARA', '\u20B3', 130));
  $put_1(result, 'ARL', new CurrencyDataImpl_0('ARL', '$L', 130));
  $put_1(result, 'ARM', new CurrencyDataImpl_0('ARM', 'm$n', 130));
  $put_1(result, 'ARP', new CurrencyDataImpl_0('ARP', 'ARP', 130));
  $put_1(result, 'ARS', new CurrencyDataImpl_1('ARS', 'AR$', 2, 'AR$'));
  $put_1(result, 'ATS', new CurrencyDataImpl_0('ATS', 'ATS', 130));
  $put_1(result, 'AUD', new CurrencyDataImpl_1('AUD', 'AU$', 2, 'AU$'));
  $put_1(result, 'AWG', new CurrencyDataImpl_0('AWG', 'Afl.', 2));
  $put_1(result, 'AZM', new CurrencyDataImpl_0('AZM', 'AZM', 130));
  $put_1(result, 'AZN', new CurrencyDataImpl_0('AZN', 'man.', 2));
  $put_1(result, 'BAD', new CurrencyDataImpl_0('BAD', 'BAD', 130));
  $put_1(result, 'BAM', new CurrencyDataImpl_0('BAM', 'KM', 2));
  $put_1(result, 'BAN', new CurrencyDataImpl_0('BAN', 'BAN', 130));
  $put_1(result, 'BBD', new CurrencyDataImpl_0('BBD', 'Bds$', 2));
  $put_1(result, 'BDT', new CurrencyDataImpl_1('BDT', 'Tk', 2, 'Tk'));
  $put_1(result, 'BEC', new CurrencyDataImpl_0('BEC', 'BEC', 2));
  $put_1(result, 'BEF', new CurrencyDataImpl_0('BEF', 'BF', 130));
  $put_1(result, 'BEL', new CurrencyDataImpl_0('BEL', 'BEL', 2));
  $put_1(result, 'BGL', new CurrencyDataImpl_0('BGL', 'BGL', 130));
  $put_1(result, 'BGM', new CurrencyDataImpl_0('BGM', 'BGM', 130));
  $put_1(result, 'BGN', new CurrencyDataImpl_0('BGN', 'BGN', 2));
  $put_1(result, 'BGO', new CurrencyDataImpl_0('BGO', 'BGO', 130));
  $put_1(result, 'BHD', new CurrencyDataImpl_0('BHD', 'BD', 3));
  $put_1(result, 'BIF', new CurrencyDataImpl_0('BIF', 'FBu', 0));
  $put_1(result, 'BMD', new CurrencyDataImpl_0('BMD', 'BD$', 2));
  $put_1(result, 'BND', new CurrencyDataImpl_0('BND', 'BN$', 2));
  $put_1(result, 'BOB', new CurrencyDataImpl_0('BOB', 'Bs', 2));
  $put_1(result, 'BOL', new CurrencyDataImpl_0('BOL', 'BOL', 130));
  $put_1(result, 'BOP', new CurrencyDataImpl_0('BOP', '$b.', 130));
  $put_1(result, 'BOV', new CurrencyDataImpl_0('BOV', 'BOV', 2));
  $put_1(result, 'BRB', new CurrencyDataImpl_0('BRB', 'BRB', 130));
  $put_1(result, 'BRC', new CurrencyDataImpl_0('BRC', 'BRC', 130));
  $put_1(result, 'BRE', new CurrencyDataImpl_0('BRE', 'BRE', 130));
  $put_1(result, 'BRL', new CurrencyDataImpl_1('BRL', 'R$', 2, 'R$'));
  $put_1(result, 'BRN', new CurrencyDataImpl_0('BRN', 'BRN', 130));
  $put_1(result, 'BRR', new CurrencyDataImpl_0('BRR', 'BRR', 130));
  $put_1(result, 'BRZ', new CurrencyDataImpl_0('BRZ', 'BRZ', 130));
  $put_1(result, 'BSD', new CurrencyDataImpl_0('BSD', 'BS$', 2));
  $put_1(result, 'BTN', new CurrencyDataImpl_0('BTN', 'Nu.', 2));
  $put_1(result, 'BUK', new CurrencyDataImpl_0('BUK', 'BUK', 130));
  $put_1(result, 'BWP', new CurrencyDataImpl_0('BWP', 'BWP', 2));
  $put_1(result, 'BYB', new CurrencyDataImpl_0('BYB', 'BYB', 130));
  $put_1(result, 'BYR', new CurrencyDataImpl_0('BYR', 'BYR', 0));
  $put_1(result, 'BZD', new CurrencyDataImpl_0('BZD', 'BZ$', 2));
  $put_1(result, 'CAD', new CurrencyDataImpl_1('CAD', 'CA$', 2, 'C$'));
  $put_1(result, 'CDF', new CurrencyDataImpl_0('CDF', 'CDF', 2));
  $put_1(result, 'CHE', new CurrencyDataImpl_0('CHE', 'CHE', 2));
  $put_1(result, 'CHF', new CurrencyDataImpl_1('CHF', 'Fr.', 2, 'CHF'));
  $put_1(result, 'CHW', new CurrencyDataImpl_0('CHW', 'CHW', 2));
  $put_1(result, 'CLE', new CurrencyDataImpl_0('CLE', 'E\xBA', 130));
  $put_1(result, 'CLF', new CurrencyDataImpl_0('CLF', 'CLF', 0));
  $put_1(result, 'CLP', new CurrencyDataImpl_1('CLP', 'CL$', 0, 'CL$'));
  $put_1(result, 'CNY', new CurrencyDataImpl_1('CNY', 'CN\xA5', 2, 'RMB\xA5'));
  $put_1(result, 'COP', new CurrencyDataImpl_1('COP', 'CO$', 0, 'COL$'));
  $put_1(result, 'COU', new CurrencyDataImpl_0('COU', 'COU', 2));
  $put_1(result, 'CRC', new CurrencyDataImpl_1('CRC', '\u20A1', 0, 'CR\u20A1'));
  $put_1(result, 'CSD', new CurrencyDataImpl_0('CSD', 'CSD', 130));
  $put_1(result, 'CSK', new CurrencyDataImpl_0('CSK', 'CSK', 130));
  $put_1(result, 'CUC', new CurrencyDataImpl_0('CUC', 'CUC$', 2));
  $put_1(result, 'CUP', new CurrencyDataImpl_1('CUP', 'CU$', 2, '$MN'));
  $put_1(result, 'CVE', new CurrencyDataImpl_0('CVE', 'CV$', 2));
  $put_1(result, 'CYP', new CurrencyDataImpl_0('CYP', 'CY\xA3', 130));
  $put_1(result, 'CZK', new CurrencyDataImpl_1('CZK', 'K\u010D', 2, 'K\u010D'));
  $put_1(result, 'DDM', new CurrencyDataImpl_0('DDM', 'DDM', 130));
  $put_1(result, 'DEM', new CurrencyDataImpl_0('DEM', 'DM', 130));
  $put_1(result, 'DJF', new CurrencyDataImpl_0('DJF', 'Fdj', 0));
  $put_1(result, 'DKK', new CurrencyDataImpl_1('DKK', 'Dkr', 2, 'kr'));
  $put_1(result, 'DOP', new CurrencyDataImpl_1('DOP', 'RD$', 2, 'RD$'));
  $put_1(result, 'DZD', new CurrencyDataImpl_0('DZD', 'DA', 2));
  $put_1(result, 'ECS', new CurrencyDataImpl_0('ECS', 'ECS', 130));
  $put_1(result, 'ECV', new CurrencyDataImpl_0('ECV', 'ECV', 2));
  $put_1(result, 'EEK', new CurrencyDataImpl_0('EEK', 'Ekr', 2));
  $put_1(result, 'EGP', new CurrencyDataImpl_1('EGP', 'EG\xA3', 2, 'LE'));
  $put_1(result, 'EQE', new CurrencyDataImpl_0('EQE', 'EQE', 130));
  $put_1(result, 'ERN', new CurrencyDataImpl_0('ERN', 'Nfk', 2));
  $put_1(result, 'ESA', new CurrencyDataImpl_0('ESA', 'ESA', 2));
  $put_1(result, 'ESB', new CurrencyDataImpl_0('ESB', 'ESB', 2));
  $put_1(result, 'ESP', new CurrencyDataImpl_0('ESP', 'Pts', 128));
  $put_1(result, 'ETB', new CurrencyDataImpl_0('ETB', 'Br', 2));
  $put_1(result, 'EUR', new CurrencyDataImpl_1('EUR', '\u20AC', 2, '\u20AC'));
  $put_1(result, 'FIM', new CurrencyDataImpl_0('FIM', 'mk', 130));
  $put_1(result, 'FJD', new CurrencyDataImpl_0('FJD', 'FJ$', 2));
  $put_1(result, 'FKP', new CurrencyDataImpl_0('FKP', 'FK\xA3', 2));
  $put_1(result, 'FRF', new CurrencyDataImpl_0('FRF', '\u20A3', 130));
  $put_1(result, 'GBP', new CurrencyDataImpl_1('GBP', '\xA3', 2, 'GB\xA3'));
  $put_1(result, 'GEK', new CurrencyDataImpl_0('GEK', 'GEK', 130));
  $put_1(result, 'GEL', new CurrencyDataImpl_0('GEL', 'GEL', 2));
  $put_1(result, 'GHC', new CurrencyDataImpl_0('GHC', '\u20B5', 130));
  $put_1(result, 'GHS', new CurrencyDataImpl_0('GHS', 'GH\u20B5', 2));
  $put_1(result, 'GIP', new CurrencyDataImpl_0('GIP', 'GI\xA3', 2));
  $put_1(result, 'GMD', new CurrencyDataImpl_0('GMD', 'GMD', 2));
  $put_1(result, 'GNF', new CurrencyDataImpl_0('GNF', 'FG', 0));
  $put_1(result, 'GNS', new CurrencyDataImpl_0('GNS', 'GNS', 130));
  $put_1(result, 'GQE', new CurrencyDataImpl_0('GQE', 'GQE', 130));
  $put_1(result, 'GRD', new CurrencyDataImpl_0('GRD', '\u20AF', 130));
  $put_1(result, 'GTQ', new CurrencyDataImpl_0('GTQ', 'GTQ', 2));
  $put_1(result, 'GWE', new CurrencyDataImpl_0('GWE', 'GWE', 130));
  $put_1(result, 'GWP', new CurrencyDataImpl_0('GWP', 'GWP', 2));
  $put_1(result, 'GYD', new CurrencyDataImpl_0('GYD', 'GY$', 0));
  $put_1(result, 'HKD', new CurrencyDataImpl_1('HKD', 'HK$', 2, 'HK$'));
  $put_1(result, 'HNL', new CurrencyDataImpl_0('HNL', 'HNL', 2));
  $put_1(result, 'HRD', new CurrencyDataImpl_0('HRD', 'HRD', 130));
  $put_1(result, 'HRK', new CurrencyDataImpl_0('HRK', 'kn', 2));
  $put_1(result, 'HTG', new CurrencyDataImpl_0('HTG', 'HTG', 2));
  $put_1(result, 'HUF', new CurrencyDataImpl_0('HUF', 'Ft', 0));
  $put_1(result, 'IDR', new CurrencyDataImpl_0('IDR', 'Rp', 0));
  $put_1(result, 'IEP', new CurrencyDataImpl_0('IEP', 'IR\xA3', 130));
  $put_1(result, 'ILP', new CurrencyDataImpl_0('ILP', 'I\xA3', 130));
  $put_1(result, 'ILR', new CurrencyDataImpl_0('ILR', 'ILR', 130));
  $put_1(result, 'ILS', new CurrencyDataImpl_1('ILS', '\u20AA', 2, 'IL\u20AA'));
  $put_1(result, 'INR', new CurrencyDataImpl_1('INR', 'Rs', 2, 'Rs'));
  $put_1(result, 'IQD', new CurrencyDataImpl_0('IQD', 'IQD', 0));
  $put_1(result, 'IRR', new CurrencyDataImpl_0('IRR', 'IRR', 0));
  $put_1(result, 'ISJ', new CurrencyDataImpl_0('ISJ', 'ISJ', 130));
  $put_1(result, 'ISK', new CurrencyDataImpl_1('ISK', 'Ikr', 0, 'kr'));
  $put_1(result, 'ITL', new CurrencyDataImpl_0('ITL', 'IT\u20A4', 128));
  $put_1(result, 'JMD', new CurrencyDataImpl_1('JMD', 'J$', 2, 'JA$'));
  $put_1(result, 'JOD', new CurrencyDataImpl_0('JOD', 'JD', 3));
  $put_1(result, 'JPY', new CurrencyDataImpl_1('JPY', '\xA5', 0, 'JP\xA5'));
  $put_1(result, 'KES', new CurrencyDataImpl_0('KES', 'Ksh', 2));
  $put_1(result, 'KGS', new CurrencyDataImpl_0('KGS', 'KGS', 2));
  $put_1(result, 'KHR', new CurrencyDataImpl_0('KHR', 'KHR', 2));
  $put_1(result, 'KMF', new CurrencyDataImpl_0('KMF', 'CF', 0));
  $put_1(result, 'KPW', new CurrencyDataImpl_0('KPW', 'KPW', 0));
  $put_1(result, 'KRH', new CurrencyDataImpl_0('KRH', 'KRH', 130));
  $put_1(result, 'KRO', new CurrencyDataImpl_0('KRO', 'KRO', 130));
  $put_1(result, 'KRW', new CurrencyDataImpl_1('KRW', '\u20A9', 0, 'KR\u20A9'));
  $put_1(result, 'KWD', new CurrencyDataImpl_0('KWD', 'KD', 3));
  $put_1(result, 'KYD', new CurrencyDataImpl_0('KYD', 'KY$', 2));
  $put_1(result, 'KZT', new CurrencyDataImpl_0('KZT', 'KZT', 2));
  $put_1(result, 'LAK', new CurrencyDataImpl_0('LAK', '\u20AD', 0));
  $put_1(result, 'LBP', new CurrencyDataImpl_0('LBP', 'LB\xA3', 0));
  $put_1(result, 'LKR', new CurrencyDataImpl_1('LKR', 'SLRs', 2, 'SLRs'));
  $put_1(result, 'LRD', new CurrencyDataImpl_0('LRD', 'L$', 2));
  $put_1(result, 'LSL', new CurrencyDataImpl_0('LSL', 'LSL', 2));
  $put_1(result, 'LSM', new CurrencyDataImpl_0('LSM', 'LSM', 130));
  $put_1(result, 'LTL', new CurrencyDataImpl_0('LTL', 'Lt', 2));
  $put_1(result, 'LTT', new CurrencyDataImpl_0('LTT', 'LTT', 130));
  $put_1(result, 'LUC', new CurrencyDataImpl_0('LUC', 'LUC', 2));
  $put_1(result, 'LUF', new CurrencyDataImpl_0('LUF', 'LUF', 128));
  $put_1(result, 'LUL', new CurrencyDataImpl_0('LUL', 'LUL', 2));
  $put_1(result, 'LVL', new CurrencyDataImpl_0('LVL', 'Ls', 2));
  $put_1(result, 'LVR', new CurrencyDataImpl_0('LVR', 'LVR', 130));
  $put_1(result, 'LYD', new CurrencyDataImpl_0('LYD', 'LD', 3));
  $put_1(result, 'MAD', new CurrencyDataImpl_0('MAD', 'MAD', 2));
  $put_1(result, 'MAF', new CurrencyDataImpl_0('MAF', 'MAF', 130));
  $put_1(result, 'MCF', new CurrencyDataImpl_0('MCF', 'MCF', 130));
  $put_1(result, 'MDC', new CurrencyDataImpl_0('MDC', 'MDC', 130));
  $put_1(result, 'MDL', new CurrencyDataImpl_0('MDL', 'MDL', 2));
  $put_1(result, 'MGA', new CurrencyDataImpl_0('MGA', 'MGA', 0));
  $put_1(result, 'MGF', new CurrencyDataImpl_0('MGF', 'MGF', 128));
  $put_1(result, 'MKD', new CurrencyDataImpl_0('MKD', 'MKD', 2));
  $put_1(result, 'MKN', new CurrencyDataImpl_0('MKN', 'MKN', 130));
  $put_1(result, 'MLF', new CurrencyDataImpl_0('MLF', 'MLF', 130));
  $put_1(result, 'MMK', new CurrencyDataImpl_0('MMK', 'MMK', 0));
  $put_1(result, 'MNT', new CurrencyDataImpl_1('MNT', '\u20AE', 0, 'MN\u20AE'));
  $put_1(result, 'MOP', new CurrencyDataImpl_0('MOP', 'MOP$', 2));
  $put_1(result, 'MRO', new CurrencyDataImpl_0('MRO', 'UM', 0));
  $put_1(result, 'MTL', new CurrencyDataImpl_0('MTL', 'Lm', 130));
  $put_1(result, 'MTP', new CurrencyDataImpl_0('MTP', 'MT\xA3', 130));
  $put_1(result, 'MUR', new CurrencyDataImpl_0('MUR', 'MURs', 0));
  $put_1(result, 'MVP', new CurrencyDataImpl_0('MVP', 'MVP', 130));
  $put_1(result, 'MVR', new CurrencyDataImpl_0('MVR', 'MVR', 2));
  $put_1(result, 'MWK', new CurrencyDataImpl_0('MWK', 'MWK', 2));
  $put_1(result, 'MXN', new CurrencyDataImpl_1('MXN', 'Mex$', 2, 'Mex$'));
  $put_1(result, 'MXP', new CurrencyDataImpl_0('MXP', 'MX$', 130));
  $put_1(result, 'MXV', new CurrencyDataImpl_0('MXV', 'MXV', 2));
  $put_1(result, 'MYR', new CurrencyDataImpl_1('MYR', 'RM', 2, 'RM'));
  $put_1(result, 'MZE', new CurrencyDataImpl_0('MZE', 'MZE', 130));
  $put_1(result, 'MZM', new CurrencyDataImpl_0('MZM', 'Mt', 130));
  $put_1(result, 'MZN', new CurrencyDataImpl_0('MZN', 'MTn', 2));
  $put_1(result, 'NAD', new CurrencyDataImpl_0('NAD', '$', 2));
  $put_1(result, 'NGN', new CurrencyDataImpl_0('NGN', '\u20A6', 2));
  $put_1(result, 'NIC', new CurrencyDataImpl_0('NIC', 'NIC', 130));
  $put_1(result, 'NIO', new CurrencyDataImpl_0('NIO', 'C$', 2));
  $put_1(result, 'NLG', new CurrencyDataImpl_0('NLG', 'fl', 130));
  $put_1(result, 'NOK', new CurrencyDataImpl_1('NOK', 'Nkr', 2, 'NOkr'));
  $put_1(result, 'NPR', new CurrencyDataImpl_0('NPR', 'NPRs', 2));
  $put_1(result, 'NZD', new CurrencyDataImpl_0('NZD', 'NZ$', 2));
  $put_1(result, 'OMR', new CurrencyDataImpl_0('OMR', 'OMR', 3));
  $put_1(result, 'PAB', new CurrencyDataImpl_1('PAB', 'B/.', 2, 'B/.'));
  $put_1(result, 'PEI', new CurrencyDataImpl_0('PEI', 'I/.', 130));
  $put_1(result, 'PEN', new CurrencyDataImpl_1('PEN', 'S/.', 2, 'S/.'));
  $put_1(result, 'PES', new CurrencyDataImpl_0('PES', 'PES', 130));
  $put_1(result, 'PGK', new CurrencyDataImpl_0('PGK', 'PGK', 2));
  $put_1(result, 'PHP', new CurrencyDataImpl_1('PHP', '\u20B1', 2, 'PHP'));
  $put_1(result, 'PKR', new CurrencyDataImpl_1('PKR', 'PKRs', 0, 'PKRs.'));
  $put_1(result, 'PLN', new CurrencyDataImpl_0('PLN', 'z\u0142', 2));
  $put_1(result, 'PLZ', new CurrencyDataImpl_0('PLZ', 'PLZ', 130));
  $put_1(result, 'PTE', new CurrencyDataImpl_0('PTE', 'Esc', 130));
  $put_1(result, 'PYG', new CurrencyDataImpl_0('PYG', '\u20B2', 0));
  $put_1(result, 'QAR', new CurrencyDataImpl_0('QAR', 'QR', 2));
  $put_1(result, 'RHD', new CurrencyDataImpl_0('RHD', 'RH$', 130));
  $put_1(result, 'ROL', new CurrencyDataImpl_0('ROL', 'ROL', 130));
  $put_1(result, 'RON', new CurrencyDataImpl_0('RON', 'RON', 2));
  $put_1(result, 'RSD', new CurrencyDataImpl_0('RSD', 'din.', 0));
  $put_1(result, 'RUB', new CurrencyDataImpl_1('RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'));
  $put_1(result, 'RUR', new CurrencyDataImpl_0('RUR', 'RUR', 130));
  $put_1(result, 'RWF', new CurrencyDataImpl_0('RWF', 'RWF', 0));
  $put_1(result, 'SAR', new CurrencyDataImpl_1('SAR', 'SR', 2, 'SR'));
  $put_1(result, 'SBD', new CurrencyDataImpl_0('SBD', 'SI$', 2));
  $put_1(result, 'SCR', new CurrencyDataImpl_0('SCR', 'SRe', 2));
  $put_1(result, 'SDD', new CurrencyDataImpl_0('SDD', 'LSd', 130));
  $put_1(result, 'SDG', new CurrencyDataImpl_0('SDG', 'SDG', 2));
  $put_1(result, 'SDP', new CurrencyDataImpl_0('SDP', 'SDP', 130));
  $put_1(result, 'SEK', new CurrencyDataImpl_1('SEK', 'Skr', 2, 'kr'));
  $put_1(result, 'SGD', new CurrencyDataImpl_1('SGD', 'S$', 2, 'S$'));
  $put_1(result, 'SHP', new CurrencyDataImpl_0('SHP', 'SH\xA3', 2));
  $put_1(result, 'SIT', new CurrencyDataImpl_0('SIT', 'SIT', 130));
  $put_1(result, 'SKK', new CurrencyDataImpl_0('SKK', 'Sk', 130));
  $put_1(result, 'SLL', new CurrencyDataImpl_0('SLL', 'Le', 0));
  $put_1(result, 'SOS', new CurrencyDataImpl_0('SOS', 'Ssh', 0));
  $put_1(result, 'SRD', new CurrencyDataImpl_0('SRD', 'SR$', 2));
  $put_1(result, 'SRG', new CurrencyDataImpl_0('SRG', 'Sf', 130));
  $put_1(result, 'STD', new CurrencyDataImpl_0('STD', 'Db', 0));
  $put_1(result, 'SUR', new CurrencyDataImpl_0('SUR', 'SUR', 130));
  $put_1(result, 'SVC', new CurrencyDataImpl_0('SVC', 'SV\u20A1', 130));
  $put_1(result, 'SYP', new CurrencyDataImpl_0('SYP', 'SY\xA3', 0));
  $put_1(result, 'SZL', new CurrencyDataImpl_0('SZL', 'SZL', 2));
  $put_1(result, 'THB', new CurrencyDataImpl_1('THB', '\u0E3F', 2, 'THB'));
  $put_1(result, 'TJR', new CurrencyDataImpl_0('TJR', 'TJR', 130));
  $put_1(result, 'TJS', new CurrencyDataImpl_0('TJS', 'TJS', 2));
  $put_1(result, 'TMM', new CurrencyDataImpl_0('TMM', 'TMM', 128));
  $put_1(result, 'TMT', new CurrencyDataImpl_0('TMT', 'TMT', 2));
  $put_1(result, 'TND', new CurrencyDataImpl_0('TND', 'DT', 3));
  $put_1(result, 'TOP', new CurrencyDataImpl_0('TOP', 'T$', 2));
  $put_1(result, 'TPE', new CurrencyDataImpl_0('TPE', 'TPE', 130));
  $put_1(result, 'TRL', new CurrencyDataImpl_0('TRL', 'TRL', 128));
  $put_1(result, 'TRY', new CurrencyDataImpl_1('TRY', 'TL', 2, 'YTL'));
  $put_1(result, 'TTD', new CurrencyDataImpl_0('TTD', 'TT$', 2));
  $put_1(result, 'TWD', new CurrencyDataImpl_1('TWD', 'NT$', 2, 'NT$'));
  $put_1(result, 'TZS', new CurrencyDataImpl_0('TZS', 'TSh', 0));
  $put_1(result, 'UAH', new CurrencyDataImpl_0('UAH', '\u20B4', 2));
  $put_1(result, 'UAK', new CurrencyDataImpl_0('UAK', 'UAK', 130));
  $put_1(result, 'UGS', new CurrencyDataImpl_0('UGS', 'UGS', 130));
  $put_1(result, 'UGX', new CurrencyDataImpl_0('UGX', 'USh', 0));
  $put_1(result, 'USD', new CurrencyDataImpl_1('USD', 'US$', 2, 'US$'));
  $put_1(result, 'USN', new CurrencyDataImpl_0('USN', 'USN', 2));
  $put_1(result, 'USS', new CurrencyDataImpl_0('USS', 'USS', 2));
  $put_1(result, 'UYI', new CurrencyDataImpl_0('UYI', 'UYI', 2));
  $put_1(result, 'UYP', new CurrencyDataImpl_0('UYP', 'UYP', 130));
  $put_1(result, 'UYU', new CurrencyDataImpl_1('UYU', '$U', 2, 'UY$'));
  $put_1(result, 'UZS', new CurrencyDataImpl_0('UZS', 'UZS', 0));
  $put_1(result, 'VEB', new CurrencyDataImpl_0('VEB', 'VEB', 130));
  $put_1(result, 'VEF', new CurrencyDataImpl_0('VEF', 'Bs.F.', 2));
  $put_1(result, 'VND', new CurrencyDataImpl_1('VND', '\u20AB', 24, '\u20AB'));
  $put_1(result, 'VNN', new CurrencyDataImpl_0('VNN', 'VNN', 130));
  $put_1(result, 'VUV', new CurrencyDataImpl_0('VUV', 'VT', 0));
  $put_1(result, 'WST', new CurrencyDataImpl_0('WST', 'WS$', 2));
  $put_1(result, 'XAF', new CurrencyDataImpl_0('XAF', 'FCFA', 0));
  $put_1(result, 'XAG', new CurrencyDataImpl_0('XAG', 'XAG', 2));
  $put_1(result, 'XAU', new CurrencyDataImpl_0('XAU', 'XAU', 2));
  $put_1(result, 'XBA', new CurrencyDataImpl_0('XBA', 'XBA', 2));
  $put_1(result, 'XBB', new CurrencyDataImpl_0('XBB', 'XBB', 2));
  $put_1(result, 'XBC', new CurrencyDataImpl_0('XBC', 'XBC', 2));
  $put_1(result, 'XBD', new CurrencyDataImpl_0('XBD', 'XBD', 2));
  $put_1(result, 'XCD', new CurrencyDataImpl_0('XCD', 'EC$', 2));
  $put_1(result, 'XDR', new CurrencyDataImpl_0('XDR', 'XDR', 2));
  $put_1(result, 'XEU', new CurrencyDataImpl_0('XEU', 'XEU', 2));
  $put_1(result, 'XFO', new CurrencyDataImpl_0('XFO', 'XFO', 2));
  $put_1(result, 'XFU', new CurrencyDataImpl_0('XFU', 'XFU', 2));
  $put_1(result, 'XOF', new CurrencyDataImpl_0('XOF', 'CFA', 0));
  $put_1(result, 'XPD', new CurrencyDataImpl_0('XPD', 'XPD', 2));
  $put_1(result, 'XPF', new CurrencyDataImpl_0('XPF', 'CFPF', 0));
  $put_1(result, 'XPT', new CurrencyDataImpl_0('XPT', 'XPT', 2));
  $put_1(result, 'XRE', new CurrencyDataImpl_0('XRE', 'XRE', 2));
  $put_1(result, 'XTS', new CurrencyDataImpl_0('XTS', 'XTS', 2));
  $put_1(result, 'XXX', new CurrencyDataImpl_0('XXX', 'XXX', 2));
  $put_1(result, 'YDD', new CurrencyDataImpl_0('YDD', 'YDD', 130));
  $put_1(result, 'YER', new CurrencyDataImpl_1('YER', 'YR', 0, 'YER'));
  $put_1(result, 'YUD', new CurrencyDataImpl_0('YUD', 'YUD', 130));
  $put_1(result, 'YUM', new CurrencyDataImpl_0('YUM', 'YUM', 130));
  $put_1(result, 'YUN', new CurrencyDataImpl_0('YUN', 'YUN', 130));
  $put_1(result, 'YUR', new CurrencyDataImpl_0('YUR', 'YUR', 130));
  $put_1(result, 'ZAL', new CurrencyDataImpl_0('ZAL', 'ZAL', 2));
  $put_1(result, 'ZAR', new CurrencyDataImpl_1('ZAR', 'R', 2, 'ZAR'));
  $put_1(result, 'ZMK', new CurrencyDataImpl_0('ZMK', 'ZK', 0));
  $put_1(result, 'ZRN', new CurrencyDataImpl_0('ZRN', 'NZ', 130));
  $put_1(result, 'ZRZ', new CurrencyDataImpl_0('ZRZ', 'ZRZ', 130));
  $put_1(result, 'ZWD', new CurrencyDataImpl_0('ZWD', 'Z$', 128));
  $put_1(result, 'ZWL', new CurrencyDataImpl_0('ZWL', 'ZWL', 2));
  $put_1(result, 'ZWR', new CurrencyDataImpl_0('ZWR', 'ZWR', 130));
  return result;
}
;
_.loadCurrencyMapNative = function loadCurrencyMapNative_11(){
  return overrideMap($loadCurrencyMapNative_1(this), $loadMyCurrencyMapOverridesNative_10());
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
function $$init_138(){
}

function $loadMyCurrencyMapOverridesNative_11(){
  return {ADP:['ADP', 'ADP', 128], AED:['AED', 'DH', 2, 'DH'], AFA:['AFA', 'AFA', 130], AFN:['AFN', 'Af', 0], ALL:['ALL', 'ALL', 0], AMD:['AMD', 'AMD', 0], ANG:['ANG', 'NAf.', 2], AOA:['AOA', 'Kz', 2], AOK:['AOK', 'AOK', 130], AON:['AON', 'AON', 130], AOR:['AOR', 'AOR', 130], ARA:['ARA', '\u20B3', 130], ARL:['ARL', '$L', 130], ARM:['ARM', 'm$n', 130], ARP:['ARP', 'ARP', 130], ARS:['ARS', 'AR$', 2, 'AR$'], ATS:['ATS', 'ATS', 130], AUD:['AUD', 'AU$', 2, 'AU$'], AWG:['AWG', 'Afl.', 2], AZM:['AZM', 'AZM', 130], AZN:['AZN', 'man.', 2], BAD:['BAD', 'BAD', 130], BAM:['BAM', 'KM', 2], BAN:['BAN', 'BAN', 130], BBD:['BBD', 'Bds$', 2], BDT:['BDT', 'Tk', 2, 'Tk'], BEC:['BEC', 'BEC', 2], BEF:['BEF', 'BF', 130], BEL:['BEL', 'BEL', 2], BGL:['BGL', 'BGL', 130], BGM:['BGM', 'BGM', 130], BGN:['BGN', 'BGN', 2], BGO:['BGO', 'BGO', 130], BHD:['BHD', 'BD', 3], BIF:['BIF', 'FBu', 0], BMD:['BMD', 'BD$', 2], BND:['BND', 'BN$', 2], BOB:['BOB', 'Bs', 2], BOL:['BOL', 'BOL', 130], BOP:['BOP', '$b.', 130], BOV:['BOV', 'BOV', 2], BRB:['BRB', 'BRB', 130], BRC:['BRC', 'BRC', 130], BRE:['BRE', 'BRE', 130], BRL:['BRL', 'R$', 2, 'R$'], BRN:['BRN', 'BRN', 130], BRR:['BRR', 'BRR', 130], BRZ:['BRZ', 'BRZ', 130], BSD:['BSD', 'BS$', 2], BTN:['BTN', 'Nu.', 2], BUK:['BUK', 'BUK', 130], BWP:['BWP', 'BWP', 2], BYB:['BYB', 'BYB', 130], BYR:['BYR', 'BYR', 0], BZD:['BZD', 'BZ$', 2], CAD:['CAD', 'CA$', 2, 'C$'], CDF:['CDF', 'CDF', 2], CHE:['CHE', 'CHE', 2], CHF:['CHF', 'Fr.', 2, 'CHF'], CHW:['CHW', 'CHW', 2], CLE:['CLE', 'E\xBA', 130], CLF:['CLF', 'CLF', 0], CLP:['CLP', 'CL$', 0, 'CL$'], CNY:['CNY', 'CN\xA5', 2, 'RMB\xA5'], COP:['COP', 'CO$', 0, 'COL$'], COU:['COU', 'COU', 2], CRC:['CRC', '\u20A1', 0, 'CR\u20A1'], CSD:['CSD', 'CSD', 130], CSK:['CSK', 'CSK', 130], CUC:['CUC', 'CUC$', 2], CUP:['CUP', 'CU$', 2, '$MN'], CVE:['CVE', 'CV$', 2], CYP:['CYP', 'CY\xA3', 130], CZK:['CZK', 'K\u010D', 2, 'K\u010D'], DDM:['DDM', 'DDM', 130], DEM:['DEM', 'DM', 130], DJF:['DJF', 'Fdj', 0], DKK:['DKK', 'Dkr', 2, 'kr'], DOP:['DOP', 'RD$', 2, 'RD$'], DZD:['DZD', 'DA', 2], ECS:['ECS', 'ECS', 130], ECV:['ECV', 'ECV', 2], EEK:['EEK', 'Ekr', 2], EGP:['EGP', 'EG\xA3', 2, 'LE'], EQE:['EQE', 'EQE', 130], ERN:['ERN', 'Nfk', 2], ESA:['ESA', 'ESA', 2], ESB:['ESB', 'ESB', 2], ESP:['ESP', 'Pts', 128], ETB:['ETB', 'Br', 2], EUR:['EUR', '\u20AC', 2, '\u20AC'], FIM:['FIM', 'mk', 130], FJD:['FJD', 'FJ$', 2], FKP:['FKP', 'FK\xA3', 2], FRF:['FRF', '\u20A3', 130], GBP:['GBP', '\xA3', 2, 'GB\xA3'], GEK:['GEK', 'GEK', 130], GEL:['GEL', 'GEL', 2], GHC:['GHC', '\u20B5', 130], GHS:['GHS', 'GH\u20B5', 2], GIP:['GIP', 'GI\xA3', 2], GMD:['GMD', 'GMD', 2], GNF:['GNF', 'FG', 0], GNS:['GNS', 'GNS', 130], GQE:['GQE', 'GQE', 130], GRD:['GRD', '\u20AF', 130], GTQ:['GTQ', 'GTQ', 2], GWE:['GWE', 'GWE', 130], GWP:['GWP', 'GWP', 2], GYD:['GYD', 'GY$', 0], HKD:['HKD', 'HK$', 2, 'HK$'], HNL:['HNL', 'HNL', 2], HRD:['HRD', 'HRD', 130], HRK:['HRK', 'kn', 2], HTG:['HTG', 'HTG', 2], HUF:['HUF', 'Ft', 0], IDR:['IDR', 'Rp', 0], IEP:['IEP', 'IR\xA3', 130], ILP:['ILP', 'I\xA3', 130], ILR:['ILR', 'ILR', 130], ILS:['ILS', '\u20AA', 2, 'IL\u20AA'], INR:['INR', 'Rs', 2, 'Rs'], IQD:['IQD', 'IQD', 0], IRR:['IRR', 'IRR', 0], ISJ:['ISJ', 'ISJ', 130], ISK:['ISK', 'Ikr', 0, 'kr'], ITL:['ITL', 'IT\u20A4', 128], JMD:['JMD', 'J$', 2, 'JA$'], JOD:['JOD', 'JD', 3], JPY:['JPY', '\xA5', 0, 'JP\xA5'], KES:['KES', 'Ksh', 2], KGS:['KGS', 'KGS', 2], KHR:['KHR', 'KHR', 2], KMF:['KMF', 'CF', 0], KPW:['KPW', 'KPW', 0], KRH:['KRH', 'KRH', 130], KRO:['KRO', 'KRO', 130], KRW:['KRW', '\u20A9', 0, 'KR\u20A9'], KWD:['KWD', 'KD', 3], KYD:['KYD', 'KY$', 2], KZT:['KZT', 'KZT', 2], LAK:['LAK', '\u20AD', 0], LBP:['LBP', 'LB\xA3', 0], LKR:['LKR', 'SLRs', 2, 'SLRs'], LRD:['LRD', 'L$', 2], LSL:['LSL', 'LSL', 2], LSM:['LSM', 'LSM', 130], LTL:['LTL', 'Lt', 2], LTT:['LTT', 'LTT', 130], LUC:['LUC', 'LUC', 2], LUF:['LUF', 'LUF', 128], LUL:['LUL', 'LUL', 2], LVL:['LVL', 'Ls', 2], LVR:['LVR', 'LVR', 130], LYD:['LYD', 'LD', 3], MAD:['MAD', 'MAD', 2], MAF:['MAF', 'MAF', 130], MCF:['MCF', 'MCF', 130], MDC:['MDC', 'MDC', 130], MDL:['MDL', 'MDL', 2], MGA:['MGA', 'MGA', 0], MGF:['MGF', 'MGF', 128], MKD:['MKD', 'MKD', 2], MKN:['MKN', 'MKN', 130], MLF:['MLF', 'MLF', 130], MMK:['MMK', 'MMK', 0], MNT:['MNT', '\u20AE', 0, 'MN\u20AE'], MOP:['MOP', 'MOP$', 2], MRO:['MRO', 'UM', 0], MTL:['MTL', 'Lm', 130], MTP:['MTP', 'MT\xA3', 130], MUR:['MUR', 'MURs', 0], MVP:['MVP', 'MVP', 130], MVR:['MVR', 'MVR', 2], MWK:['MWK', 'MWK', 2], MXN:['MXN', 'Mex$', 2, 'Mex$'], MXP:['MXP', 'MX$', 130], MXV:['MXV', 'MXV', 2], MYR:['MYR', 'RM', 2, 'RM'], MZE:['MZE', 'MZE', 130], MZM:['MZM', 'Mt', 130], MZN:['MZN', 'MTn', 2], NAD:['NAD', 'N$', 2], NGN:['NGN', '\u20A6', 2], NIC:['NIC', 'NIC', 130], NIO:['NIO', 'C$', 2], NLG:['NLG', 'fl', 130], NOK:['NOK', 'Nkr', 2, 'NOkr'], NPR:['NPR', 'NPRs', 2], NZD:['NZD', '$', 2], OMR:['OMR', 'OMR', 3], PAB:['PAB', 'B/.', 2, 'B/.'], PEI:['PEI', 'I/.', 130], PEN:['PEN', 'S/.', 2, 'S/.'], PES:['PES', 'PES', 130], PGK:['PGK', 'PGK', 2], PHP:['PHP', '\u20B1', 2, 'PHP'], PKR:['PKR', 'PKRs', 0, 'PKRs.'], PLN:['PLN', 'z\u0142', 2], PLZ:['PLZ', 'PLZ', 130], PTE:['PTE', 'Esc', 130], PYG:['PYG', '\u20B2', 0], QAR:['QAR', 'QR', 2], RHD:['RHD', 'RH$', 130], ROL:['ROL', 'ROL', 130], RON:['RON', 'RON', 2], RSD:['RSD', 'din.', 0], RUB:['RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'], RUR:['RUR', 'RUR', 130], RWF:['RWF', 'RWF', 0], SAR:['SAR', 'SR', 2, 'SR'], SBD:['SBD', 'SI$', 2], SCR:['SCR', 'SRe', 2], SDD:['SDD', 'LSd', 130], SDG:['SDG', 'SDG', 2], SDP:['SDP', 'SDP', 130], SEK:['SEK', 'Skr', 2, 'kr'], SGD:['SGD', 'S$', 2, 'S$'], SHP:['SHP', 'SH\xA3', 2], SIT:['SIT', 'SIT', 130], SKK:['SKK', 'Sk', 130], SLL:['SLL', 'Le', 0], SOS:['SOS', 'Ssh', 0], SRD:['SRD', 'SR$', 2], SRG:['SRG', 'Sf', 130], STD:['STD', 'Db', 0], SUR:['SUR', 'SUR', 130], SVC:['SVC', 'SV\u20A1', 130], SYP:['SYP', 'SY\xA3', 0], SZL:['SZL', 'SZL', 2], THB:['THB', '\u0E3F', 2, 'THB'], TJR:['TJR', 'TJR', 130], TJS:['TJS', 'TJS', 2], TMM:['TMM', 'TMM', 128], TMT:['TMT', 'TMT', 2], TND:['TND', 'DT', 3], TOP:['TOP', 'T$', 2], TPE:['TPE', 'TPE', 130], TRL:['TRL', 'TRL', 128], TRY:['TRY', 'TL', 2, 'YTL'], TTD:['TTD', 'TT$', 2], TWD:['TWD', 'NT$', 2, 'NT$'], TZS:['TZS', 'TSh', 0], UAH:['UAH', '\u20B4', 2], UAK:['UAK', 'UAK', 130], UGS:['UGS', 'UGS', 130], UGX:['UGX', 'USh', 0], USD:['USD', 'US$', 2, 'US$'], USN:['USN', 'USN', 2], USS:['USS', 'USS', 2], UYI:['UYI', 'UYI', 2], UYP:['UYP', 'UYP', 130], UYU:['UYU', '$U', 2, 'UY$'], UZS:['UZS', 'UZS', 0], VEB:['VEB', 'VEB', 130], VEF:['VEF', 'Bs.F.', 2], VND:['VND', '\u20AB', 24, '\u20AB'], VNN:['VNN', 'VNN', 130], VUV:['VUV', 'VT', 0], WST:['WST', 'WS$', 2], XAF:['XAF', 'FCFA', 0], XAG:['XAG', 'XAG', 2], XAU:['XAU', 'XAU', 2], XBA:['XBA', 'XBA', 2], XBB:['XBB', 'XBB', 2], XBC:['XBC', 'XBC', 2], XBD:['XBD', 'XBD', 2], XCD:['XCD', 'EC$', 2], XDR:['XDR', 'XDR', 2], XEU:['XEU', 'XEU', 2], XFO:['XFO', 'XFO', 2], XFU:['XFU', 'XFU', 2], XOF:['XOF', 'CFA', 0], XPD:['XPD', 'XPD', 2], XPF:['XPF', 'CFPF', 0], XPT:['XPT', 'XPT', 2], XRE:['XRE', 'XRE', 2], XTS:['XTS', 'XTS', 2], XXX:['XXX', 'XXX', 2], YDD:['YDD', 'YDD', 130], YER:['YER', 'YR', 0, 'YER'], YUD:['YUD', 'YUD', 130], YUM:['YUM', 'YUM', 130], YUN:['YUN', 'YUN', 130], YUR:['YUR', 'YUR', 130], ZAL:['ZAL', 'ZAL', 2], ZAR:['ZAR', 'R', 2, 'ZAR'], ZMK:['ZMK', 'ZK', 0], ZRN:['ZRN', 'NZ', 130], ZRZ:['ZRZ', 'ZRZ', 130], ZWD:['ZWD', 'Z$', 128], ZWL:['ZWL', 'ZWL', 2], ZWR:['ZWR', 'ZWR', 130]};
}

function CurrencyList_en_NZ_0(){
  CurrencyList_en_0.call(this);
  $$init_138();
}

function CurrencyList_en_NZ(){
}

_ = CurrencyList_en_NZ_0.prototype = CurrencyList_en_NZ.prototype = new CurrencyList_en;
_.getClass$ = function getClass_139(){
  return Lcom_google_gwt_i18n_client_CurrencyList_1en_1NZ_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava_14(){
  return new CurrencyDataImpl_0('NZD', '$', 2);
}
;
_.getDefaultNative = function getDefaultNative_14(){
  return ['NZD', '$', 2];
}
;
_.loadCurrencyMapJava = function loadCurrencyMapJava_12(){
  var result;
  result = $loadCurrencyMapJava_1(this);
  $put_1(result, 'ADP', new CurrencyDataImpl_0('ADP', 'ADP', 128));
  $put_1(result, 'AED', new CurrencyDataImpl_1('AED', 'DH', 2, 'DH'));
  $put_1(result, 'AFA', new CurrencyDataImpl_0('AFA', 'AFA', 130));
  $put_1(result, 'AFN', new CurrencyDataImpl_0('AFN', 'Af', 0));
  $put_1(result, 'ALL', new CurrencyDataImpl_0('ALL', 'ALL', 0));
  $put_1(result, 'AMD', new CurrencyDataImpl_0('AMD', 'AMD', 0));
  $put_1(result, 'ANG', new CurrencyDataImpl_0('ANG', 'NAf.', 2));
  $put_1(result, 'AOA', new CurrencyDataImpl_0('AOA', 'Kz', 2));
  $put_1(result, 'AOK', new CurrencyDataImpl_0('AOK', 'AOK', 130));
  $put_1(result, 'AON', new CurrencyDataImpl_0('AON', 'AON', 130));
  $put_1(result, 'AOR', new CurrencyDataImpl_0('AOR', 'AOR', 130));
  $put_1(result, 'ARA', new CurrencyDataImpl_0('ARA', '\u20B3', 130));
  $put_1(result, 'ARL', new CurrencyDataImpl_0('ARL', '$L', 130));
  $put_1(result, 'ARM', new CurrencyDataImpl_0('ARM', 'm$n', 130));
  $put_1(result, 'ARP', new CurrencyDataImpl_0('ARP', 'ARP', 130));
  $put_1(result, 'ARS', new CurrencyDataImpl_1('ARS', 'AR$', 2, 'AR$'));
  $put_1(result, 'ATS', new CurrencyDataImpl_0('ATS', 'ATS', 130));
  $put_1(result, 'AUD', new CurrencyDataImpl_1('AUD', 'AU$', 2, 'AU$'));
  $put_1(result, 'AWG', new CurrencyDataImpl_0('AWG', 'Afl.', 2));
  $put_1(result, 'AZM', new CurrencyDataImpl_0('AZM', 'AZM', 130));
  $put_1(result, 'AZN', new CurrencyDataImpl_0('AZN', 'man.', 2));
  $put_1(result, 'BAD', new CurrencyDataImpl_0('BAD', 'BAD', 130));
  $put_1(result, 'BAM', new CurrencyDataImpl_0('BAM', 'KM', 2));
  $put_1(result, 'BAN', new CurrencyDataImpl_0('BAN', 'BAN', 130));
  $put_1(result, 'BBD', new CurrencyDataImpl_0('BBD', 'Bds$', 2));
  $put_1(result, 'BDT', new CurrencyDataImpl_1('BDT', 'Tk', 2, 'Tk'));
  $put_1(result, 'BEC', new CurrencyDataImpl_0('BEC', 'BEC', 2));
  $put_1(result, 'BEF', new CurrencyDataImpl_0('BEF', 'BF', 130));
  $put_1(result, 'BEL', new CurrencyDataImpl_0('BEL', 'BEL', 2));
  $put_1(result, 'BGL', new CurrencyDataImpl_0('BGL', 'BGL', 130));
  $put_1(result, 'BGM', new CurrencyDataImpl_0('BGM', 'BGM', 130));
  $put_1(result, 'BGN', new CurrencyDataImpl_0('BGN', 'BGN', 2));
  $put_1(result, 'BGO', new CurrencyDataImpl_0('BGO', 'BGO', 130));
  $put_1(result, 'BHD', new CurrencyDataImpl_0('BHD', 'BD', 3));
  $put_1(result, 'BIF', new CurrencyDataImpl_0('BIF', 'FBu', 0));
  $put_1(result, 'BMD', new CurrencyDataImpl_0('BMD', 'BD$', 2));
  $put_1(result, 'BND', new CurrencyDataImpl_0('BND', 'BN$', 2));
  $put_1(result, 'BOB', new CurrencyDataImpl_0('BOB', 'Bs', 2));
  $put_1(result, 'BOL', new CurrencyDataImpl_0('BOL', 'BOL', 130));
  $put_1(result, 'BOP', new CurrencyDataImpl_0('BOP', '$b.', 130));
  $put_1(result, 'BOV', new CurrencyDataImpl_0('BOV', 'BOV', 2));
  $put_1(result, 'BRB', new CurrencyDataImpl_0('BRB', 'BRB', 130));
  $put_1(result, 'BRC', new CurrencyDataImpl_0('BRC', 'BRC', 130));
  $put_1(result, 'BRE', new CurrencyDataImpl_0('BRE', 'BRE', 130));
  $put_1(result, 'BRL', new CurrencyDataImpl_1('BRL', 'R$', 2, 'R$'));
  $put_1(result, 'BRN', new CurrencyDataImpl_0('BRN', 'BRN', 130));
  $put_1(result, 'BRR', new CurrencyDataImpl_0('BRR', 'BRR', 130));
  $put_1(result, 'BRZ', new CurrencyDataImpl_0('BRZ', 'BRZ', 130));
  $put_1(result, 'BSD', new CurrencyDataImpl_0('BSD', 'BS$', 2));
  $put_1(result, 'BTN', new CurrencyDataImpl_0('BTN', 'Nu.', 2));
  $put_1(result, 'BUK', new CurrencyDataImpl_0('BUK', 'BUK', 130));
  $put_1(result, 'BWP', new CurrencyDataImpl_0('BWP', 'BWP', 2));
  $put_1(result, 'BYB', new CurrencyDataImpl_0('BYB', 'BYB', 130));
  $put_1(result, 'BYR', new CurrencyDataImpl_0('BYR', 'BYR', 0));
  $put_1(result, 'BZD', new CurrencyDataImpl_0('BZD', 'BZ$', 2));
  $put_1(result, 'CAD', new CurrencyDataImpl_1('CAD', 'CA$', 2, 'C$'));
  $put_1(result, 'CDF', new CurrencyDataImpl_0('CDF', 'CDF', 2));
  $put_1(result, 'CHE', new CurrencyDataImpl_0('CHE', 'CHE', 2));
  $put_1(result, 'CHF', new CurrencyDataImpl_1('CHF', 'Fr.', 2, 'CHF'));
  $put_1(result, 'CHW', new CurrencyDataImpl_0('CHW', 'CHW', 2));
  $put_1(result, 'CLE', new CurrencyDataImpl_0('CLE', 'E\xBA', 130));
  $put_1(result, 'CLF', new CurrencyDataImpl_0('CLF', 'CLF', 0));
  $put_1(result, 'CLP', new CurrencyDataImpl_1('CLP', 'CL$', 0, 'CL$'));
  $put_1(result, 'CNY', new CurrencyDataImpl_1('CNY', 'CN\xA5', 2, 'RMB\xA5'));
  $put_1(result, 'COP', new CurrencyDataImpl_1('COP', 'CO$', 0, 'COL$'));
  $put_1(result, 'COU', new CurrencyDataImpl_0('COU', 'COU', 2));
  $put_1(result, 'CRC', new CurrencyDataImpl_1('CRC', '\u20A1', 0, 'CR\u20A1'));
  $put_1(result, 'CSD', new CurrencyDataImpl_0('CSD', 'CSD', 130));
  $put_1(result, 'CSK', new CurrencyDataImpl_0('CSK', 'CSK', 130));
  $put_1(result, 'CUC', new CurrencyDataImpl_0('CUC', 'CUC$', 2));
  $put_1(result, 'CUP', new CurrencyDataImpl_1('CUP', 'CU$', 2, '$MN'));
  $put_1(result, 'CVE', new CurrencyDataImpl_0('CVE', 'CV$', 2));
  $put_1(result, 'CYP', new CurrencyDataImpl_0('CYP', 'CY\xA3', 130));
  $put_1(result, 'CZK', new CurrencyDataImpl_1('CZK', 'K\u010D', 2, 'K\u010D'));
  $put_1(result, 'DDM', new CurrencyDataImpl_0('DDM', 'DDM', 130));
  $put_1(result, 'DEM', new CurrencyDataImpl_0('DEM', 'DM', 130));
  $put_1(result, 'DJF', new CurrencyDataImpl_0('DJF', 'Fdj', 0));
  $put_1(result, 'DKK', new CurrencyDataImpl_1('DKK', 'Dkr', 2, 'kr'));
  $put_1(result, 'DOP', new CurrencyDataImpl_1('DOP', 'RD$', 2, 'RD$'));
  $put_1(result, 'DZD', new CurrencyDataImpl_0('DZD', 'DA', 2));
  $put_1(result, 'ECS', new CurrencyDataImpl_0('ECS', 'ECS', 130));
  $put_1(result, 'ECV', new CurrencyDataImpl_0('ECV', 'ECV', 2));
  $put_1(result, 'EEK', new CurrencyDataImpl_0('EEK', 'Ekr', 2));
  $put_1(result, 'EGP', new CurrencyDataImpl_1('EGP', 'EG\xA3', 2, 'LE'));
  $put_1(result, 'EQE', new CurrencyDataImpl_0('EQE', 'EQE', 130));
  $put_1(result, 'ERN', new CurrencyDataImpl_0('ERN', 'Nfk', 2));
  $put_1(result, 'ESA', new CurrencyDataImpl_0('ESA', 'ESA', 2));
  $put_1(result, 'ESB', new CurrencyDataImpl_0('ESB', 'ESB', 2));
  $put_1(result, 'ESP', new CurrencyDataImpl_0('ESP', 'Pts', 128));
  $put_1(result, 'ETB', new CurrencyDataImpl_0('ETB', 'Br', 2));
  $put_1(result, 'EUR', new CurrencyDataImpl_1('EUR', '\u20AC', 2, '\u20AC'));
  $put_1(result, 'FIM', new CurrencyDataImpl_0('FIM', 'mk', 130));
  $put_1(result, 'FJD', new CurrencyDataImpl_0('FJD', 'FJ$', 2));
  $put_1(result, 'FKP', new CurrencyDataImpl_0('FKP', 'FK\xA3', 2));
  $put_1(result, 'FRF', new CurrencyDataImpl_0('FRF', '\u20A3', 130));
  $put_1(result, 'GBP', new CurrencyDataImpl_1('GBP', '\xA3', 2, 'GB\xA3'));
  $put_1(result, 'GEK', new CurrencyDataImpl_0('GEK', 'GEK', 130));
  $put_1(result, 'GEL', new CurrencyDataImpl_0('GEL', 'GEL', 2));
  $put_1(result, 'GHC', new CurrencyDataImpl_0('GHC', '\u20B5', 130));
  $put_1(result, 'GHS', new CurrencyDataImpl_0('GHS', 'GH\u20B5', 2));
  $put_1(result, 'GIP', new CurrencyDataImpl_0('GIP', 'GI\xA3', 2));
  $put_1(result, 'GMD', new CurrencyDataImpl_0('GMD', 'GMD', 2));
  $put_1(result, 'GNF', new CurrencyDataImpl_0('GNF', 'FG', 0));
  $put_1(result, 'GNS', new CurrencyDataImpl_0('GNS', 'GNS', 130));
  $put_1(result, 'GQE', new CurrencyDataImpl_0('GQE', 'GQE', 130));
  $put_1(result, 'GRD', new CurrencyDataImpl_0('GRD', '\u20AF', 130));
  $put_1(result, 'GTQ', new CurrencyDataImpl_0('GTQ', 'GTQ', 2));
  $put_1(result, 'GWE', new CurrencyDataImpl_0('GWE', 'GWE', 130));
  $put_1(result, 'GWP', new CurrencyDataImpl_0('GWP', 'GWP', 2));
  $put_1(result, 'GYD', new CurrencyDataImpl_0('GYD', 'GY$', 0));
  $put_1(result, 'HKD', new CurrencyDataImpl_1('HKD', 'HK$', 2, 'HK$'));
  $put_1(result, 'HNL', new CurrencyDataImpl_0('HNL', 'HNL', 2));
  $put_1(result, 'HRD', new CurrencyDataImpl_0('HRD', 'HRD', 130));
  $put_1(result, 'HRK', new CurrencyDataImpl_0('HRK', 'kn', 2));
  $put_1(result, 'HTG', new CurrencyDataImpl_0('HTG', 'HTG', 2));
  $put_1(result, 'HUF', new CurrencyDataImpl_0('HUF', 'Ft', 0));
  $put_1(result, 'IDR', new CurrencyDataImpl_0('IDR', 'Rp', 0));
  $put_1(result, 'IEP', new CurrencyDataImpl_0('IEP', 'IR\xA3', 130));
  $put_1(result, 'ILP', new CurrencyDataImpl_0('ILP', 'I\xA3', 130));
  $put_1(result, 'ILR', new CurrencyDataImpl_0('ILR', 'ILR', 130));
  $put_1(result, 'ILS', new CurrencyDataImpl_1('ILS', '\u20AA', 2, 'IL\u20AA'));
  $put_1(result, 'INR', new CurrencyDataImpl_1('INR', 'Rs', 2, 'Rs'));
  $put_1(result, 'IQD', new CurrencyDataImpl_0('IQD', 'IQD', 0));
  $put_1(result, 'IRR', new CurrencyDataImpl_0('IRR', 'IRR', 0));
  $put_1(result, 'ISJ', new CurrencyDataImpl_0('ISJ', 'ISJ', 130));
  $put_1(result, 'ISK', new CurrencyDataImpl_1('ISK', 'Ikr', 0, 'kr'));
  $put_1(result, 'ITL', new CurrencyDataImpl_0('ITL', 'IT\u20A4', 128));
  $put_1(result, 'JMD', new CurrencyDataImpl_1('JMD', 'J$', 2, 'JA$'));
  $put_1(result, 'JOD', new CurrencyDataImpl_0('JOD', 'JD', 3));
  $put_1(result, 'JPY', new CurrencyDataImpl_1('JPY', '\xA5', 0, 'JP\xA5'));
  $put_1(result, 'KES', new CurrencyDataImpl_0('KES', 'Ksh', 2));
  $put_1(result, 'KGS', new CurrencyDataImpl_0('KGS', 'KGS', 2));
  $put_1(result, 'KHR', new CurrencyDataImpl_0('KHR', 'KHR', 2));
  $put_1(result, 'KMF', new CurrencyDataImpl_0('KMF', 'CF', 0));
  $put_1(result, 'KPW', new CurrencyDataImpl_0('KPW', 'KPW', 0));
  $put_1(result, 'KRH', new CurrencyDataImpl_0('KRH', 'KRH', 130));
  $put_1(result, 'KRO', new CurrencyDataImpl_0('KRO', 'KRO', 130));
  $put_1(result, 'KRW', new CurrencyDataImpl_1('KRW', '\u20A9', 0, 'KR\u20A9'));
  $put_1(result, 'KWD', new CurrencyDataImpl_0('KWD', 'KD', 3));
  $put_1(result, 'KYD', new CurrencyDataImpl_0('KYD', 'KY$', 2));
  $put_1(result, 'KZT', new CurrencyDataImpl_0('KZT', 'KZT', 2));
  $put_1(result, 'LAK', new CurrencyDataImpl_0('LAK', '\u20AD', 0));
  $put_1(result, 'LBP', new CurrencyDataImpl_0('LBP', 'LB\xA3', 0));
  $put_1(result, 'LKR', new CurrencyDataImpl_1('LKR', 'SLRs', 2, 'SLRs'));
  $put_1(result, 'LRD', new CurrencyDataImpl_0('LRD', 'L$', 2));
  $put_1(result, 'LSL', new CurrencyDataImpl_0('LSL', 'LSL', 2));
  $put_1(result, 'LSM', new CurrencyDataImpl_0('LSM', 'LSM', 130));
  $put_1(result, 'LTL', new CurrencyDataImpl_0('LTL', 'Lt', 2));
  $put_1(result, 'LTT', new CurrencyDataImpl_0('LTT', 'LTT', 130));
  $put_1(result, 'LUC', new CurrencyDataImpl_0('LUC', 'LUC', 2));
  $put_1(result, 'LUF', new CurrencyDataImpl_0('LUF', 'LUF', 128));
  $put_1(result, 'LUL', new CurrencyDataImpl_0('LUL', 'LUL', 2));
  $put_1(result, 'LVL', new CurrencyDataImpl_0('LVL', 'Ls', 2));
  $put_1(result, 'LVR', new CurrencyDataImpl_0('LVR', 'LVR', 130));
  $put_1(result, 'LYD', new CurrencyDataImpl_0('LYD', 'LD', 3));
  $put_1(result, 'MAD', new CurrencyDataImpl_0('MAD', 'MAD', 2));
  $put_1(result, 'MAF', new CurrencyDataImpl_0('MAF', 'MAF', 130));
  $put_1(result, 'MCF', new CurrencyDataImpl_0('MCF', 'MCF', 130));
  $put_1(result, 'MDC', new CurrencyDataImpl_0('MDC', 'MDC', 130));
  $put_1(result, 'MDL', new CurrencyDataImpl_0('MDL', 'MDL', 2));
  $put_1(result, 'MGA', new CurrencyDataImpl_0('MGA', 'MGA', 0));
  $put_1(result, 'MGF', new CurrencyDataImpl_0('MGF', 'MGF', 128));
  $put_1(result, 'MKD', new CurrencyDataImpl_0('MKD', 'MKD', 2));
  $put_1(result, 'MKN', new CurrencyDataImpl_0('MKN', 'MKN', 130));
  $put_1(result, 'MLF', new CurrencyDataImpl_0('MLF', 'MLF', 130));
  $put_1(result, 'MMK', new CurrencyDataImpl_0('MMK', 'MMK', 0));
  $put_1(result, 'MNT', new CurrencyDataImpl_1('MNT', '\u20AE', 0, 'MN\u20AE'));
  $put_1(result, 'MOP', new CurrencyDataImpl_0('MOP', 'MOP$', 2));
  $put_1(result, 'MRO', new CurrencyDataImpl_0('MRO', 'UM', 0));
  $put_1(result, 'MTL', new CurrencyDataImpl_0('MTL', 'Lm', 130));
  $put_1(result, 'MTP', new CurrencyDataImpl_0('MTP', 'MT\xA3', 130));
  $put_1(result, 'MUR', new CurrencyDataImpl_0('MUR', 'MURs', 0));
  $put_1(result, 'MVP', new CurrencyDataImpl_0('MVP', 'MVP', 130));
  $put_1(result, 'MVR', new CurrencyDataImpl_0('MVR', 'MVR', 2));
  $put_1(result, 'MWK', new CurrencyDataImpl_0('MWK', 'MWK', 2));
  $put_1(result, 'MXN', new CurrencyDataImpl_1('MXN', 'Mex$', 2, 'Mex$'));
  $put_1(result, 'MXP', new CurrencyDataImpl_0('MXP', 'MX$', 130));
  $put_1(result, 'MXV', new CurrencyDataImpl_0('MXV', 'MXV', 2));
  $put_1(result, 'MYR', new CurrencyDataImpl_1('MYR', 'RM', 2, 'RM'));
  $put_1(result, 'MZE', new CurrencyDataImpl_0('MZE', 'MZE', 130));
  $put_1(result, 'MZM', new CurrencyDataImpl_0('MZM', 'Mt', 130));
  $put_1(result, 'MZN', new CurrencyDataImpl_0('MZN', 'MTn', 2));
  $put_1(result, 'NAD', new CurrencyDataImpl_0('NAD', 'N$', 2));
  $put_1(result, 'NGN', new CurrencyDataImpl_0('NGN', '\u20A6', 2));
  $put_1(result, 'NIC', new CurrencyDataImpl_0('NIC', 'NIC', 130));
  $put_1(result, 'NIO', new CurrencyDataImpl_0('NIO', 'C$', 2));
  $put_1(result, 'NLG', new CurrencyDataImpl_0('NLG', 'fl', 130));
  $put_1(result, 'NOK', new CurrencyDataImpl_1('NOK', 'Nkr', 2, 'NOkr'));
  $put_1(result, 'NPR', new CurrencyDataImpl_0('NPR', 'NPRs', 2));
  $put_1(result, 'NZD', new CurrencyDataImpl_0('NZD', '$', 2));
  $put_1(result, 'OMR', new CurrencyDataImpl_0('OMR', 'OMR', 3));
  $put_1(result, 'PAB', new CurrencyDataImpl_1('PAB', 'B/.', 2, 'B/.'));
  $put_1(result, 'PEI', new CurrencyDataImpl_0('PEI', 'I/.', 130));
  $put_1(result, 'PEN', new CurrencyDataImpl_1('PEN', 'S/.', 2, 'S/.'));
  $put_1(result, 'PES', new CurrencyDataImpl_0('PES', 'PES', 130));
  $put_1(result, 'PGK', new CurrencyDataImpl_0('PGK', 'PGK', 2));
  $put_1(result, 'PHP', new CurrencyDataImpl_1('PHP', '\u20B1', 2, 'PHP'));
  $put_1(result, 'PKR', new CurrencyDataImpl_1('PKR', 'PKRs', 0, 'PKRs.'));
  $put_1(result, 'PLN', new CurrencyDataImpl_0('PLN', 'z\u0142', 2));
  $put_1(result, 'PLZ', new CurrencyDataImpl_0('PLZ', 'PLZ', 130));
  $put_1(result, 'PTE', new CurrencyDataImpl_0('PTE', 'Esc', 130));
  $put_1(result, 'PYG', new CurrencyDataImpl_0('PYG', '\u20B2', 0));
  $put_1(result, 'QAR', new CurrencyDataImpl_0('QAR', 'QR', 2));
  $put_1(result, 'RHD', new CurrencyDataImpl_0('RHD', 'RH$', 130));
  $put_1(result, 'ROL', new CurrencyDataImpl_0('ROL', 'ROL', 130));
  $put_1(result, 'RON', new CurrencyDataImpl_0('RON', 'RON', 2));
  $put_1(result, 'RSD', new CurrencyDataImpl_0('RSD', 'din.', 0));
  $put_1(result, 'RUB', new CurrencyDataImpl_1('RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'));
  $put_1(result, 'RUR', new CurrencyDataImpl_0('RUR', 'RUR', 130));
  $put_1(result, 'RWF', new CurrencyDataImpl_0('RWF', 'RWF', 0));
  $put_1(result, 'SAR', new CurrencyDataImpl_1('SAR', 'SR', 2, 'SR'));
  $put_1(result, 'SBD', new CurrencyDataImpl_0('SBD', 'SI$', 2));
  $put_1(result, 'SCR', new CurrencyDataImpl_0('SCR', 'SRe', 2));
  $put_1(result, 'SDD', new CurrencyDataImpl_0('SDD', 'LSd', 130));
  $put_1(result, 'SDG', new CurrencyDataImpl_0('SDG', 'SDG', 2));
  $put_1(result, 'SDP', new CurrencyDataImpl_0('SDP', 'SDP', 130));
  $put_1(result, 'SEK', new CurrencyDataImpl_1('SEK', 'Skr', 2, 'kr'));
  $put_1(result, 'SGD', new CurrencyDataImpl_1('SGD', 'S$', 2, 'S$'));
  $put_1(result, 'SHP', new CurrencyDataImpl_0('SHP', 'SH\xA3', 2));
  $put_1(result, 'SIT', new CurrencyDataImpl_0('SIT', 'SIT', 130));
  $put_1(result, 'SKK', new CurrencyDataImpl_0('SKK', 'Sk', 130));
  $put_1(result, 'SLL', new CurrencyDataImpl_0('SLL', 'Le', 0));
  $put_1(result, 'SOS', new CurrencyDataImpl_0('SOS', 'Ssh', 0));
  $put_1(result, 'SRD', new CurrencyDataImpl_0('SRD', 'SR$', 2));
  $put_1(result, 'SRG', new CurrencyDataImpl_0('SRG', 'Sf', 130));
  $put_1(result, 'STD', new CurrencyDataImpl_0('STD', 'Db', 0));
  $put_1(result, 'SUR', new CurrencyDataImpl_0('SUR', 'SUR', 130));
  $put_1(result, 'SVC', new CurrencyDataImpl_0('SVC', 'SV\u20A1', 130));
  $put_1(result, 'SYP', new CurrencyDataImpl_0('SYP', 'SY\xA3', 0));
  $put_1(result, 'SZL', new CurrencyDataImpl_0('SZL', 'SZL', 2));
  $put_1(result, 'THB', new CurrencyDataImpl_1('THB', '\u0E3F', 2, 'THB'));
  $put_1(result, 'TJR', new CurrencyDataImpl_0('TJR', 'TJR', 130));
  $put_1(result, 'TJS', new CurrencyDataImpl_0('TJS', 'TJS', 2));
  $put_1(result, 'TMM', new CurrencyDataImpl_0('TMM', 'TMM', 128));
  $put_1(result, 'TMT', new CurrencyDataImpl_0('TMT', 'TMT', 2));
  $put_1(result, 'TND', new CurrencyDataImpl_0('TND', 'DT', 3));
  $put_1(result, 'TOP', new CurrencyDataImpl_0('TOP', 'T$', 2));
  $put_1(result, 'TPE', new CurrencyDataImpl_0('TPE', 'TPE', 130));
  $put_1(result, 'TRL', new CurrencyDataImpl_0('TRL', 'TRL', 128));
  $put_1(result, 'TRY', new CurrencyDataImpl_1('TRY', 'TL', 2, 'YTL'));
  $put_1(result, 'TTD', new CurrencyDataImpl_0('TTD', 'TT$', 2));
  $put_1(result, 'TWD', new CurrencyDataImpl_1('TWD', 'NT$', 2, 'NT$'));
  $put_1(result, 'TZS', new CurrencyDataImpl_0('TZS', 'TSh', 0));
  $put_1(result, 'UAH', new CurrencyDataImpl_0('UAH', '\u20B4', 2));
  $put_1(result, 'UAK', new CurrencyDataImpl_0('UAK', 'UAK', 130));
  $put_1(result, 'UGS', new CurrencyDataImpl_0('UGS', 'UGS', 130));
  $put_1(result, 'UGX', new CurrencyDataImpl_0('UGX', 'USh', 0));
  $put_1(result, 'USD', new CurrencyDataImpl_1('USD', 'US$', 2, 'US$'));
  $put_1(result, 'USN', new CurrencyDataImpl_0('USN', 'USN', 2));
  $put_1(result, 'USS', new CurrencyDataImpl_0('USS', 'USS', 2));
  $put_1(result, 'UYI', new CurrencyDataImpl_0('UYI', 'UYI', 2));
  $put_1(result, 'UYP', new CurrencyDataImpl_0('UYP', 'UYP', 130));
  $put_1(result, 'UYU', new CurrencyDataImpl_1('UYU', '$U', 2, 'UY$'));
  $put_1(result, 'UZS', new CurrencyDataImpl_0('UZS', 'UZS', 0));
  $put_1(result, 'VEB', new CurrencyDataImpl_0('VEB', 'VEB', 130));
  $put_1(result, 'VEF', new CurrencyDataImpl_0('VEF', 'Bs.F.', 2));
  $put_1(result, 'VND', new CurrencyDataImpl_1('VND', '\u20AB', 24, '\u20AB'));
  $put_1(result, 'VNN', new CurrencyDataImpl_0('VNN', 'VNN', 130));
  $put_1(result, 'VUV', new CurrencyDataImpl_0('VUV', 'VT', 0));
  $put_1(result, 'WST', new CurrencyDataImpl_0('WST', 'WS$', 2));
  $put_1(result, 'XAF', new CurrencyDataImpl_0('XAF', 'FCFA', 0));
  $put_1(result, 'XAG', new CurrencyDataImpl_0('XAG', 'XAG', 2));
  $put_1(result, 'XAU', new CurrencyDataImpl_0('XAU', 'XAU', 2));
  $put_1(result, 'XBA', new CurrencyDataImpl_0('XBA', 'XBA', 2));
  $put_1(result, 'XBB', new CurrencyDataImpl_0('XBB', 'XBB', 2));
  $put_1(result, 'XBC', new CurrencyDataImpl_0('XBC', 'XBC', 2));
  $put_1(result, 'XBD', new CurrencyDataImpl_0('XBD', 'XBD', 2));
  $put_1(result, 'XCD', new CurrencyDataImpl_0('XCD', 'EC$', 2));
  $put_1(result, 'XDR', new CurrencyDataImpl_0('XDR', 'XDR', 2));
  $put_1(result, 'XEU', new CurrencyDataImpl_0('XEU', 'XEU', 2));
  $put_1(result, 'XFO', new CurrencyDataImpl_0('XFO', 'XFO', 2));
  $put_1(result, 'XFU', new CurrencyDataImpl_0('XFU', 'XFU', 2));
  $put_1(result, 'XOF', new CurrencyDataImpl_0('XOF', 'CFA', 0));
  $put_1(result, 'XPD', new CurrencyDataImpl_0('XPD', 'XPD', 2));
  $put_1(result, 'XPF', new CurrencyDataImpl_0('XPF', 'CFPF', 0));
  $put_1(result, 'XPT', new CurrencyDataImpl_0('XPT', 'XPT', 2));
  $put_1(result, 'XRE', new CurrencyDataImpl_0('XRE', 'XRE', 2));
  $put_1(result, 'XTS', new CurrencyDataImpl_0('XTS', 'XTS', 2));
  $put_1(result, 'XXX', new CurrencyDataImpl_0('XXX', 'XXX', 2));
  $put_1(result, 'YDD', new CurrencyDataImpl_0('YDD', 'YDD', 130));
  $put_1(result, 'YER', new CurrencyDataImpl_1('YER', 'YR', 0, 'YER'));
  $put_1(result, 'YUD', new CurrencyDataImpl_0('YUD', 'YUD', 130));
  $put_1(result, 'YUM', new CurrencyDataImpl_0('YUM', 'YUM', 130));
  $put_1(result, 'YUN', new CurrencyDataImpl_0('YUN', 'YUN', 130));
  $put_1(result, 'YUR', new CurrencyDataImpl_0('YUR', 'YUR', 130));
  $put_1(result, 'ZAL', new CurrencyDataImpl_0('ZAL', 'ZAL', 2));
  $put_1(result, 'ZAR', new CurrencyDataImpl_1('ZAR', 'R', 2, 'ZAR'));
  $put_1(result, 'ZMK', new CurrencyDataImpl_0('ZMK', 'ZK', 0));
  $put_1(result, 'ZRN', new CurrencyDataImpl_0('ZRN', 'NZ', 130));
  $put_1(result, 'ZRZ', new CurrencyDataImpl_0('ZRZ', 'ZRZ', 130));
  $put_1(result, 'ZWD', new CurrencyDataImpl_0('ZWD', 'Z$', 128));
  $put_1(result, 'ZWL', new CurrencyDataImpl_0('ZWL', 'ZWL', 2));
  $put_1(result, 'ZWR', new CurrencyDataImpl_0('ZWR', 'ZWR', 130));
  return result;
}
;
_.loadCurrencyMapNative = function loadCurrencyMapNative_12(){
  return overrideMap($loadCurrencyMapNative_1(this), $loadMyCurrencyMapOverridesNative_11());
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
function $$init_139(){
}

function $loadMyCurrencyMapOverridesNative_12(){
  return {ADP:['ADP', 'ADP', 128], AED:['AED', 'DH', 2, 'DH'], AFA:['AFA', 'AFA', 130], AFN:['AFN', 'Af', 0], ALL:['ALL', 'ALL', 0], AMD:['AMD', 'AMD', 0], ANG:['ANG', 'NAf.', 2], AOA:['AOA', 'Kz', 2], AOK:['AOK', 'AOK', 130], AON:['AON', 'AON', 130], AOR:['AOR', 'AOR', 130], ARA:['ARA', '\u20B3', 130], ARL:['ARL', '$L', 130], ARM:['ARM', 'm$n', 130], ARP:['ARP', 'ARP', 130], ARS:['ARS', 'AR$', 2, 'AR$'], ATS:['ATS', 'ATS', 130], AUD:['AUD', 'AU$', 2, 'AU$'], AWG:['AWG', 'Afl.', 2], AZM:['AZM', 'AZM', 130], AZN:['AZN', 'man.', 2], BAD:['BAD', 'BAD', 130], BAM:['BAM', 'KM', 2], BAN:['BAN', 'BAN', 130], BBD:['BBD', 'Bds$', 2], BDT:['BDT', 'Tk', 2, 'Tk'], BEC:['BEC', 'BEC', 2], BEF:['BEF', 'BF', 130], BEL:['BEL', 'BEL', 2], BGL:['BGL', 'BGL', 130], BGM:['BGM', 'BGM', 130], BGN:['BGN', 'BGN', 2], BGO:['BGO', 'BGO', 130], BHD:['BHD', 'BD', 3], BIF:['BIF', 'FBu', 0], BMD:['BMD', 'BD$', 2], BND:['BND', 'BN$', 2], BOB:['BOB', 'Bs', 2], BOL:['BOL', 'BOL', 130], BOP:['BOP', '$b.', 130], BOV:['BOV', 'BOV', 2], BRB:['BRB', 'BRB', 130], BRC:['BRC', 'BRC', 130], BRE:['BRE', 'BRE', 130], BRL:['BRL', 'R$', 2, 'R$'], BRN:['BRN', 'BRN', 130], BRR:['BRR', 'BRR', 130], BRZ:['BRZ', 'BRZ', 130], BSD:['BSD', 'BS$', 2], BTN:['BTN', 'Nu.', 2], BUK:['BUK', 'BUK', 130], BWP:['BWP', 'BWP', 2], BYB:['BYB', 'BYB', 130], BYR:['BYR', 'BYR', 0], BZD:['BZD', 'BZ$', 2], CAD:['CAD', 'CA$', 2, 'C$'], CDF:['CDF', 'CDF', 2], CHE:['CHE', 'CHE', 2], CHF:['CHF', 'Fr.', 2, 'CHF'], CHW:['CHW', 'CHW', 2], CLE:['CLE', 'E\xBA', 130], CLF:['CLF', 'CLF', 0], CLP:['CLP', 'CL$', 0, 'CL$'], CNY:['CNY', 'CN\xA5', 2, 'RMB\xA5'], COP:['COP', 'CO$', 0, 'COL$'], COU:['COU', 'COU', 2], CRC:['CRC', '\u20A1', 0, 'CR\u20A1'], CSD:['CSD', 'CSD', 130], CSK:['CSK', 'CSK', 130], CUC:['CUC', 'CUC$', 2], CUP:['CUP', 'CU$', 2, '$MN'], CVE:['CVE', 'CV$', 2], CYP:['CYP', 'CY\xA3', 130], CZK:['CZK', 'K\u010D', 2, 'K\u010D'], DDM:['DDM', 'DDM', 130], DEM:['DEM', 'DM', 130], DJF:['DJF', 'Fdj', 0], DKK:['DKK', 'Dkr', 2, 'kr'], DOP:['DOP', 'RD$', 2, 'RD$'], DZD:['DZD', 'DA', 2], ECS:['ECS', 'ECS', 130], ECV:['ECV', 'ECV', 2], EEK:['EEK', 'Ekr', 2], EGP:['EGP', 'EG\xA3', 2, 'LE'], EQE:['EQE', 'EQE', 130], ERN:['ERN', 'Nfk', 2], ESA:['ESA', 'ESA', 2], ESB:['ESB', 'ESB', 2], ESP:['ESP', 'Pts', 128], ETB:['ETB', 'Br', 2], EUR:['EUR', '\u20AC', 2, '\u20AC'], FIM:['FIM', 'mk', 130], FJD:['FJD', 'FJ$', 2], FKP:['FKP', 'FK\xA3', 2], FRF:['FRF', '\u20A3', 130], GBP:['GBP', '\xA3', 2, 'GB\xA3'], GEK:['GEK', 'GEK', 130], GEL:['GEL', 'GEL', 2], GHC:['GHC', '\u20B5', 130], GHS:['GHS', 'GH\u20B5', 2], GIP:['GIP', 'GI\xA3', 2], GMD:['GMD', 'GMD', 2], GNF:['GNF', 'FG', 0], GNS:['GNS', 'GNS', 130], GQE:['GQE', 'GQE', 130], GRD:['GRD', '\u20AF', 130], GTQ:['GTQ', 'GTQ', 2], GWE:['GWE', 'GWE', 130], GWP:['GWP', 'GWP', 2], GYD:['GYD', 'GY$', 0], HKD:['HKD', 'HK$', 2, 'HK$'], HNL:['HNL', 'HNL', 2], HRD:['HRD', 'HRD', 130], HRK:['HRK', 'kn', 2], HTG:['HTG', 'HTG', 2], HUF:['HUF', 'Ft', 0], IDR:['IDR', 'Rp', 0], IEP:['IEP', 'IR\xA3', 130], ILP:['ILP', 'I\xA3', 130], ILR:['ILR', 'ILR', 130], ILS:['ILS', '\u20AA', 2, 'IL\u20AA'], INR:['INR', 'Rs', 2, 'Rs'], IQD:['IQD', 'IQD', 0], IRR:['IRR', 'IRR', 0], ISJ:['ISJ', 'ISJ', 130], ISK:['ISK', 'Ikr', 0, 'kr'], ITL:['ITL', 'IT\u20A4', 128], JMD:['JMD', 'J$', 2, 'JA$'], JOD:['JOD', 'JD', 3], JPY:['JPY', '\xA5', 0, 'JP\xA5'], KES:['KES', 'Ksh', 2], KGS:['KGS', 'KGS', 2], KHR:['KHR', 'KHR', 2], KMF:['KMF', 'CF', 0], KPW:['KPW', 'KPW', 0], KRH:['KRH', 'KRH', 130], KRO:['KRO', 'KRO', 130], KRW:['KRW', '\u20A9', 0, 'KR\u20A9'], KWD:['KWD', 'KD', 3], KYD:['KYD', 'KY$', 2], KZT:['KZT', 'KZT', 2], LAK:['LAK', '\u20AD', 0], LBP:['LBP', 'LB\xA3', 0], LKR:['LKR', 'SLRs', 2, 'SLRs'], LRD:['LRD', 'L$', 2], LSL:['LSL', 'LSL', 2], LSM:['LSM', 'LSM', 130], LTL:['LTL', 'Lt', 2], LTT:['LTT', 'LTT', 130], LUC:['LUC', 'LUC', 2], LUF:['LUF', 'LUF', 128], LUL:['LUL', 'LUL', 2], LVL:['LVL', 'Ls', 2], LVR:['LVR', 'LVR', 130], LYD:['LYD', 'LD', 3], MAD:['MAD', 'MAD', 2], MAF:['MAF', 'MAF', 130], MCF:['MCF', 'MCF', 130], MDC:['MDC', 'MDC', 130], MDL:['MDL', 'MDL', 2], MGA:['MGA', 'MGA', 0], MGF:['MGF', 'MGF', 128], MKD:['MKD', 'MKD', 2], MKN:['MKN', 'MKN', 130], MLF:['MLF', 'MLF', 130], MMK:['MMK', 'MMK', 0], MNT:['MNT', '\u20AE', 0, 'MN\u20AE'], MOP:['MOP', 'MOP$', 2], MRO:['MRO', 'UM', 0], MTL:['MTL', 'Lm', 130], MTP:['MTP', 'MT\xA3', 130], MUR:['MUR', 'MURs', 0], MVP:['MVP', 'MVP', 130], MVR:['MVR', 'MVR', 2], MWK:['MWK', 'MWK', 2], MXN:['MXN', 'Mex$', 2, 'Mex$'], MXP:['MXP', 'MX$', 130], MXV:['MXV', 'MXV', 2], MYR:['MYR', 'RM', 2, 'RM'], MZE:['MZE', 'MZE', 130], MZM:['MZM', 'Mt', 130], MZN:['MZN', 'MTn', 2], NAD:['NAD', 'N$', 2], NGN:['NGN', '\u20A6', 2], NIC:['NIC', 'NIC', 130], NIO:['NIO', 'C$', 2], NLG:['NLG', 'fl', 130], NOK:['NOK', 'Nkr', 2, 'NOkr'], NPR:['NPR', 'NPRs', 2], NZD:['NZD', 'NZ$', 2], OMR:['OMR', 'OMR', 3], PAB:['PAB', 'B/.', 2, 'B/.'], PEI:['PEI', 'I/.', 130], PEN:['PEN', 'S/.', 2, 'S/.'], PES:['PES', 'PES', 130], PGK:['PGK', 'PGK', 2], PHP:['PHP', '\u20B1', 2, 'PHP'], PKR:['PKR', 'PKRs', 0, 'PKRs.'], PLN:['PLN', 'z\u0142', 2], PLZ:['PLZ', 'PLZ', 130], PTE:['PTE', 'Esc', 130], PYG:['PYG', '\u20B2', 0], QAR:['QAR', 'QR', 2], RHD:['RHD', 'RH$', 130], ROL:['ROL', 'ROL', 130], RON:['RON', 'RON', 2], RSD:['RSD', 'din.', 0], RUB:['RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'], RUR:['RUR', 'RUR', 130], RWF:['RWF', 'RWF', 0], SAR:['SAR', 'SR', 2, 'SR'], SBD:['SBD', 'SI$', 2], SCR:['SCR', 'SRe', 2], SDD:['SDD', 'LSd', 130], SDG:['SDG', 'SDG', 2], SDP:['SDP', 'SDP', 130], SEK:['SEK', 'Skr', 2, 'kr'], SGD:['SGD', 'S$', 2, 'S$'], SHP:['SHP', 'SH\xA3', 2], SIT:['SIT', 'SIT', 130], SKK:['SKK', 'Sk', 130], SLL:['SLL', 'Le', 0], SOS:['SOS', 'Ssh', 0], SRD:['SRD', 'SR$', 2], SRG:['SRG', 'Sf', 130], STD:['STD', 'Db', 0], SUR:['SUR', 'SUR', 130], SVC:['SVC', 'SV\u20A1', 130], SYP:['SYP', 'SY\xA3', 0], SZL:['SZL', 'SZL', 2], THB:['THB', '\u0E3F', 2, 'THB'], TJR:['TJR', 'TJR', 130], TJS:['TJS', 'TJS', 2], TMM:['TMM', 'TMM', 128], TMT:['TMT', 'TMT', 2], TND:['TND', 'DT', 3], TOP:['TOP', 'T$', 2], TPE:['TPE', 'TPE', 130], TRL:['TRL', 'TRL', 128], TRY:['TRY', 'TL', 2, 'YTL'], TTD:['TTD', 'TT$', 2], TWD:['TWD', 'NT$', 2, 'NT$'], TZS:['TZS', 'TSh', 0], UAH:['UAH', '\u20B4', 2], UAK:['UAK', 'UAK', 130], UGS:['UGS', 'UGS', 130], UGX:['UGX', 'USh', 0], USD:['USD', '$', 2, 'US$'], USN:['USN', 'USN', 2], USS:['USS', 'USS', 2], UYI:['UYI', 'UYI', 2], UYP:['UYP', 'UYP', 130], UYU:['UYU', '$U', 2, 'UY$'], UZS:['UZS', 'UZS', 0], VEB:['VEB', 'VEB', 130], VEF:['VEF', 'Bs.F.', 2], VND:['VND', '\u20AB', 24, '\u20AB'], VNN:['VNN', 'VNN', 130], VUV:['VUV', 'VT', 0], WST:['WST', 'WS$', 2], XAF:['XAF', 'FCFA', 0], XAG:['XAG', 'XAG', 2], XAU:['XAU', 'XAU', 2], XBA:['XBA', 'XBA', 2], XBB:['XBB', 'XBB', 2], XBC:['XBC', 'XBC', 2], XBD:['XBD', 'XBD', 2], XCD:['XCD', 'EC$', 2], XDR:['XDR', 'XDR', 2], XEU:['XEU', 'XEU', 2], XFO:['XFO', 'XFO', 2], XFU:['XFU', 'XFU', 2], XOF:['XOF', 'CFA', 0], XPD:['XPD', 'XPD', 2], XPF:['XPF', 'CFPF', 0], XPT:['XPT', 'XPT', 2], XRE:['XRE', 'XRE', 2], XTS:['XTS', 'XTS', 2], XXX:['XXX', 'XXX', 2], YDD:['YDD', 'YDD', 130], YER:['YER', 'YR', 0, 'YER'], YUD:['YUD', 'YUD', 130], YUM:['YUM', 'YUM', 130], YUN:['YUN', 'YUN', 130], YUR:['YUR', 'YUR', 130], ZAL:['ZAL', 'ZAL', 2], ZAR:['ZAR', 'R', 2, 'ZAR'], ZMK:['ZMK', 'ZK', 0], ZRN:['ZRN', 'NZ', 130], ZRZ:['ZRZ', 'ZRZ', 130], ZWD:['ZWD', 'Z$', 128], ZWL:['ZWL', 'ZWL', 2], ZWR:['ZWR', 'ZWR', 130]};
}

function CurrencyList_en_PH_0(){
  CurrencyList_en_0.call(this);
  $$init_139();
}

function CurrencyList_en_PH(){
}

_ = CurrencyList_en_PH_0.prototype = CurrencyList_en_PH.prototype = new CurrencyList_en;
_.getClass$ = function getClass_140(){
  return Lcom_google_gwt_i18n_client_CurrencyList_1en_1PH_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava_15(){
  return new CurrencyDataImpl_1('PHP', '\u20B1', 2, 'PHP');
}
;
_.getDefaultNative = function getDefaultNative_15(){
  return ['PHP', '\u20B1', 2, 'PHP'];
}
;
_.loadCurrencyMapJava = function loadCurrencyMapJava_13(){
  var result;
  result = $loadCurrencyMapJava_1(this);
  $put_1(result, 'ADP', new CurrencyDataImpl_0('ADP', 'ADP', 128));
  $put_1(result, 'AED', new CurrencyDataImpl_1('AED', 'DH', 2, 'DH'));
  $put_1(result, 'AFA', new CurrencyDataImpl_0('AFA', 'AFA', 130));
  $put_1(result, 'AFN', new CurrencyDataImpl_0('AFN', 'Af', 0));
  $put_1(result, 'ALL', new CurrencyDataImpl_0('ALL', 'ALL', 0));
  $put_1(result, 'AMD', new CurrencyDataImpl_0('AMD', 'AMD', 0));
  $put_1(result, 'ANG', new CurrencyDataImpl_0('ANG', 'NAf.', 2));
  $put_1(result, 'AOA', new CurrencyDataImpl_0('AOA', 'Kz', 2));
  $put_1(result, 'AOK', new CurrencyDataImpl_0('AOK', 'AOK', 130));
  $put_1(result, 'AON', new CurrencyDataImpl_0('AON', 'AON', 130));
  $put_1(result, 'AOR', new CurrencyDataImpl_0('AOR', 'AOR', 130));
  $put_1(result, 'ARA', new CurrencyDataImpl_0('ARA', '\u20B3', 130));
  $put_1(result, 'ARL', new CurrencyDataImpl_0('ARL', '$L', 130));
  $put_1(result, 'ARM', new CurrencyDataImpl_0('ARM', 'm$n', 130));
  $put_1(result, 'ARP', new CurrencyDataImpl_0('ARP', 'ARP', 130));
  $put_1(result, 'ARS', new CurrencyDataImpl_1('ARS', 'AR$', 2, 'AR$'));
  $put_1(result, 'ATS', new CurrencyDataImpl_0('ATS', 'ATS', 130));
  $put_1(result, 'AUD', new CurrencyDataImpl_1('AUD', 'AU$', 2, 'AU$'));
  $put_1(result, 'AWG', new CurrencyDataImpl_0('AWG', 'Afl.', 2));
  $put_1(result, 'AZM', new CurrencyDataImpl_0('AZM', 'AZM', 130));
  $put_1(result, 'AZN', new CurrencyDataImpl_0('AZN', 'man.', 2));
  $put_1(result, 'BAD', new CurrencyDataImpl_0('BAD', 'BAD', 130));
  $put_1(result, 'BAM', new CurrencyDataImpl_0('BAM', 'KM', 2));
  $put_1(result, 'BAN', new CurrencyDataImpl_0('BAN', 'BAN', 130));
  $put_1(result, 'BBD', new CurrencyDataImpl_0('BBD', 'Bds$', 2));
  $put_1(result, 'BDT', new CurrencyDataImpl_1('BDT', 'Tk', 2, 'Tk'));
  $put_1(result, 'BEC', new CurrencyDataImpl_0('BEC', 'BEC', 2));
  $put_1(result, 'BEF', new CurrencyDataImpl_0('BEF', 'BF', 130));
  $put_1(result, 'BEL', new CurrencyDataImpl_0('BEL', 'BEL', 2));
  $put_1(result, 'BGL', new CurrencyDataImpl_0('BGL', 'BGL', 130));
  $put_1(result, 'BGM', new CurrencyDataImpl_0('BGM', 'BGM', 130));
  $put_1(result, 'BGN', new CurrencyDataImpl_0('BGN', 'BGN', 2));
  $put_1(result, 'BGO', new CurrencyDataImpl_0('BGO', 'BGO', 130));
  $put_1(result, 'BHD', new CurrencyDataImpl_0('BHD', 'BD', 3));
  $put_1(result, 'BIF', new CurrencyDataImpl_0('BIF', 'FBu', 0));
  $put_1(result, 'BMD', new CurrencyDataImpl_0('BMD', 'BD$', 2));
  $put_1(result, 'BND', new CurrencyDataImpl_0('BND', 'BN$', 2));
  $put_1(result, 'BOB', new CurrencyDataImpl_0('BOB', 'Bs', 2));
  $put_1(result, 'BOL', new CurrencyDataImpl_0('BOL', 'BOL', 130));
  $put_1(result, 'BOP', new CurrencyDataImpl_0('BOP', '$b.', 130));
  $put_1(result, 'BOV', new CurrencyDataImpl_0('BOV', 'BOV', 2));
  $put_1(result, 'BRB', new CurrencyDataImpl_0('BRB', 'BRB', 130));
  $put_1(result, 'BRC', new CurrencyDataImpl_0('BRC', 'BRC', 130));
  $put_1(result, 'BRE', new CurrencyDataImpl_0('BRE', 'BRE', 130));
  $put_1(result, 'BRL', new CurrencyDataImpl_1('BRL', 'R$', 2, 'R$'));
  $put_1(result, 'BRN', new CurrencyDataImpl_0('BRN', 'BRN', 130));
  $put_1(result, 'BRR', new CurrencyDataImpl_0('BRR', 'BRR', 130));
  $put_1(result, 'BRZ', new CurrencyDataImpl_0('BRZ', 'BRZ', 130));
  $put_1(result, 'BSD', new CurrencyDataImpl_0('BSD', 'BS$', 2));
  $put_1(result, 'BTN', new CurrencyDataImpl_0('BTN', 'Nu.', 2));
  $put_1(result, 'BUK', new CurrencyDataImpl_0('BUK', 'BUK', 130));
  $put_1(result, 'BWP', new CurrencyDataImpl_0('BWP', 'BWP', 2));
  $put_1(result, 'BYB', new CurrencyDataImpl_0('BYB', 'BYB', 130));
  $put_1(result, 'BYR', new CurrencyDataImpl_0('BYR', 'BYR', 0));
  $put_1(result, 'BZD', new CurrencyDataImpl_0('BZD', 'BZ$', 2));
  $put_1(result, 'CAD', new CurrencyDataImpl_1('CAD', 'CA$', 2, 'C$'));
  $put_1(result, 'CDF', new CurrencyDataImpl_0('CDF', 'CDF', 2));
  $put_1(result, 'CHE', new CurrencyDataImpl_0('CHE', 'CHE', 2));
  $put_1(result, 'CHF', new CurrencyDataImpl_1('CHF', 'Fr.', 2, 'CHF'));
  $put_1(result, 'CHW', new CurrencyDataImpl_0('CHW', 'CHW', 2));
  $put_1(result, 'CLE', new CurrencyDataImpl_0('CLE', 'E\xBA', 130));
  $put_1(result, 'CLF', new CurrencyDataImpl_0('CLF', 'CLF', 0));
  $put_1(result, 'CLP', new CurrencyDataImpl_1('CLP', 'CL$', 0, 'CL$'));
  $put_1(result, 'CNY', new CurrencyDataImpl_1('CNY', 'CN\xA5', 2, 'RMB\xA5'));
  $put_1(result, 'COP', new CurrencyDataImpl_1('COP', 'CO$', 0, 'COL$'));
  $put_1(result, 'COU', new CurrencyDataImpl_0('COU', 'COU', 2));
  $put_1(result, 'CRC', new CurrencyDataImpl_1('CRC', '\u20A1', 0, 'CR\u20A1'));
  $put_1(result, 'CSD', new CurrencyDataImpl_0('CSD', 'CSD', 130));
  $put_1(result, 'CSK', new CurrencyDataImpl_0('CSK', 'CSK', 130));
  $put_1(result, 'CUC', new CurrencyDataImpl_0('CUC', 'CUC$', 2));
  $put_1(result, 'CUP', new CurrencyDataImpl_1('CUP', 'CU$', 2, '$MN'));
  $put_1(result, 'CVE', new CurrencyDataImpl_0('CVE', 'CV$', 2));
  $put_1(result, 'CYP', new CurrencyDataImpl_0('CYP', 'CY\xA3', 130));
  $put_1(result, 'CZK', new CurrencyDataImpl_1('CZK', 'K\u010D', 2, 'K\u010D'));
  $put_1(result, 'DDM', new CurrencyDataImpl_0('DDM', 'DDM', 130));
  $put_1(result, 'DEM', new CurrencyDataImpl_0('DEM', 'DM', 130));
  $put_1(result, 'DJF', new CurrencyDataImpl_0('DJF', 'Fdj', 0));
  $put_1(result, 'DKK', new CurrencyDataImpl_1('DKK', 'Dkr', 2, 'kr'));
  $put_1(result, 'DOP', new CurrencyDataImpl_1('DOP', 'RD$', 2, 'RD$'));
  $put_1(result, 'DZD', new CurrencyDataImpl_0('DZD', 'DA', 2));
  $put_1(result, 'ECS', new CurrencyDataImpl_0('ECS', 'ECS', 130));
  $put_1(result, 'ECV', new CurrencyDataImpl_0('ECV', 'ECV', 2));
  $put_1(result, 'EEK', new CurrencyDataImpl_0('EEK', 'Ekr', 2));
  $put_1(result, 'EGP', new CurrencyDataImpl_1('EGP', 'EG\xA3', 2, 'LE'));
  $put_1(result, 'EQE', new CurrencyDataImpl_0('EQE', 'EQE', 130));
  $put_1(result, 'ERN', new CurrencyDataImpl_0('ERN', 'Nfk', 2));
  $put_1(result, 'ESA', new CurrencyDataImpl_0('ESA', 'ESA', 2));
  $put_1(result, 'ESB', new CurrencyDataImpl_0('ESB', 'ESB', 2));
  $put_1(result, 'ESP', new CurrencyDataImpl_0('ESP', 'Pts', 128));
  $put_1(result, 'ETB', new CurrencyDataImpl_0('ETB', 'Br', 2));
  $put_1(result, 'EUR', new CurrencyDataImpl_1('EUR', '\u20AC', 2, '\u20AC'));
  $put_1(result, 'FIM', new CurrencyDataImpl_0('FIM', 'mk', 130));
  $put_1(result, 'FJD', new CurrencyDataImpl_0('FJD', 'FJ$', 2));
  $put_1(result, 'FKP', new CurrencyDataImpl_0('FKP', 'FK\xA3', 2));
  $put_1(result, 'FRF', new CurrencyDataImpl_0('FRF', '\u20A3', 130));
  $put_1(result, 'GBP', new CurrencyDataImpl_1('GBP', '\xA3', 2, 'GB\xA3'));
  $put_1(result, 'GEK', new CurrencyDataImpl_0('GEK', 'GEK', 130));
  $put_1(result, 'GEL', new CurrencyDataImpl_0('GEL', 'GEL', 2));
  $put_1(result, 'GHC', new CurrencyDataImpl_0('GHC', '\u20B5', 130));
  $put_1(result, 'GHS', new CurrencyDataImpl_0('GHS', 'GH\u20B5', 2));
  $put_1(result, 'GIP', new CurrencyDataImpl_0('GIP', 'GI\xA3', 2));
  $put_1(result, 'GMD', new CurrencyDataImpl_0('GMD', 'GMD', 2));
  $put_1(result, 'GNF', new CurrencyDataImpl_0('GNF', 'FG', 0));
  $put_1(result, 'GNS', new CurrencyDataImpl_0('GNS', 'GNS', 130));
  $put_1(result, 'GQE', new CurrencyDataImpl_0('GQE', 'GQE', 130));
  $put_1(result, 'GRD', new CurrencyDataImpl_0('GRD', '\u20AF', 130));
  $put_1(result, 'GTQ', new CurrencyDataImpl_0('GTQ', 'GTQ', 2));
  $put_1(result, 'GWE', new CurrencyDataImpl_0('GWE', 'GWE', 130));
  $put_1(result, 'GWP', new CurrencyDataImpl_0('GWP', 'GWP', 2));
  $put_1(result, 'GYD', new CurrencyDataImpl_0('GYD', 'GY$', 0));
  $put_1(result, 'HKD', new CurrencyDataImpl_1('HKD', 'HK$', 2, 'HK$'));
  $put_1(result, 'HNL', new CurrencyDataImpl_0('HNL', 'HNL', 2));
  $put_1(result, 'HRD', new CurrencyDataImpl_0('HRD', 'HRD', 130));
  $put_1(result, 'HRK', new CurrencyDataImpl_0('HRK', 'kn', 2));
  $put_1(result, 'HTG', new CurrencyDataImpl_0('HTG', 'HTG', 2));
  $put_1(result, 'HUF', new CurrencyDataImpl_0('HUF', 'Ft', 0));
  $put_1(result, 'IDR', new CurrencyDataImpl_0('IDR', 'Rp', 0));
  $put_1(result, 'IEP', new CurrencyDataImpl_0('IEP', 'IR\xA3', 130));
  $put_1(result, 'ILP', new CurrencyDataImpl_0('ILP', 'I\xA3', 130));
  $put_1(result, 'ILR', new CurrencyDataImpl_0('ILR', 'ILR', 130));
  $put_1(result, 'ILS', new CurrencyDataImpl_1('ILS', '\u20AA', 2, 'IL\u20AA'));
  $put_1(result, 'INR', new CurrencyDataImpl_1('INR', 'Rs', 2, 'Rs'));
  $put_1(result, 'IQD', new CurrencyDataImpl_0('IQD', 'IQD', 0));
  $put_1(result, 'IRR', new CurrencyDataImpl_0('IRR', 'IRR', 0));
  $put_1(result, 'ISJ', new CurrencyDataImpl_0('ISJ', 'ISJ', 130));
  $put_1(result, 'ISK', new CurrencyDataImpl_1('ISK', 'Ikr', 0, 'kr'));
  $put_1(result, 'ITL', new CurrencyDataImpl_0('ITL', 'IT\u20A4', 128));
  $put_1(result, 'JMD', new CurrencyDataImpl_1('JMD', 'J$', 2, 'JA$'));
  $put_1(result, 'JOD', new CurrencyDataImpl_0('JOD', 'JD', 3));
  $put_1(result, 'JPY', new CurrencyDataImpl_1('JPY', '\xA5', 0, 'JP\xA5'));
  $put_1(result, 'KES', new CurrencyDataImpl_0('KES', 'Ksh', 2));
  $put_1(result, 'KGS', new CurrencyDataImpl_0('KGS', 'KGS', 2));
  $put_1(result, 'KHR', new CurrencyDataImpl_0('KHR', 'KHR', 2));
  $put_1(result, 'KMF', new CurrencyDataImpl_0('KMF', 'CF', 0));
  $put_1(result, 'KPW', new CurrencyDataImpl_0('KPW', 'KPW', 0));
  $put_1(result, 'KRH', new CurrencyDataImpl_0('KRH', 'KRH', 130));
  $put_1(result, 'KRO', new CurrencyDataImpl_0('KRO', 'KRO', 130));
  $put_1(result, 'KRW', new CurrencyDataImpl_1('KRW', '\u20A9', 0, 'KR\u20A9'));
  $put_1(result, 'KWD', new CurrencyDataImpl_0('KWD', 'KD', 3));
  $put_1(result, 'KYD', new CurrencyDataImpl_0('KYD', 'KY$', 2));
  $put_1(result, 'KZT', new CurrencyDataImpl_0('KZT', 'KZT', 2));
  $put_1(result, 'LAK', new CurrencyDataImpl_0('LAK', '\u20AD', 0));
  $put_1(result, 'LBP', new CurrencyDataImpl_0('LBP', 'LB\xA3', 0));
  $put_1(result, 'LKR', new CurrencyDataImpl_1('LKR', 'SLRs', 2, 'SLRs'));
  $put_1(result, 'LRD', new CurrencyDataImpl_0('LRD', 'L$', 2));
  $put_1(result, 'LSL', new CurrencyDataImpl_0('LSL', 'LSL', 2));
  $put_1(result, 'LSM', new CurrencyDataImpl_0('LSM', 'LSM', 130));
  $put_1(result, 'LTL', new CurrencyDataImpl_0('LTL', 'Lt', 2));
  $put_1(result, 'LTT', new CurrencyDataImpl_0('LTT', 'LTT', 130));
  $put_1(result, 'LUC', new CurrencyDataImpl_0('LUC', 'LUC', 2));
  $put_1(result, 'LUF', new CurrencyDataImpl_0('LUF', 'LUF', 128));
  $put_1(result, 'LUL', new CurrencyDataImpl_0('LUL', 'LUL', 2));
  $put_1(result, 'LVL', new CurrencyDataImpl_0('LVL', 'Ls', 2));
  $put_1(result, 'LVR', new CurrencyDataImpl_0('LVR', 'LVR', 130));
  $put_1(result, 'LYD', new CurrencyDataImpl_0('LYD', 'LD', 3));
  $put_1(result, 'MAD', new CurrencyDataImpl_0('MAD', 'MAD', 2));
  $put_1(result, 'MAF', new CurrencyDataImpl_0('MAF', 'MAF', 130));
  $put_1(result, 'MCF', new CurrencyDataImpl_0('MCF', 'MCF', 130));
  $put_1(result, 'MDC', new CurrencyDataImpl_0('MDC', 'MDC', 130));
  $put_1(result, 'MDL', new CurrencyDataImpl_0('MDL', 'MDL', 2));
  $put_1(result, 'MGA', new CurrencyDataImpl_0('MGA', 'MGA', 0));
  $put_1(result, 'MGF', new CurrencyDataImpl_0('MGF', 'MGF', 128));
  $put_1(result, 'MKD', new CurrencyDataImpl_0('MKD', 'MKD', 2));
  $put_1(result, 'MKN', new CurrencyDataImpl_0('MKN', 'MKN', 130));
  $put_1(result, 'MLF', new CurrencyDataImpl_0('MLF', 'MLF', 130));
  $put_1(result, 'MMK', new CurrencyDataImpl_0('MMK', 'MMK', 0));
  $put_1(result, 'MNT', new CurrencyDataImpl_1('MNT', '\u20AE', 0, 'MN\u20AE'));
  $put_1(result, 'MOP', new CurrencyDataImpl_0('MOP', 'MOP$', 2));
  $put_1(result, 'MRO', new CurrencyDataImpl_0('MRO', 'UM', 0));
  $put_1(result, 'MTL', new CurrencyDataImpl_0('MTL', 'Lm', 130));
  $put_1(result, 'MTP', new CurrencyDataImpl_0('MTP', 'MT\xA3', 130));
  $put_1(result, 'MUR', new CurrencyDataImpl_0('MUR', 'MURs', 0));
  $put_1(result, 'MVP', new CurrencyDataImpl_0('MVP', 'MVP', 130));
  $put_1(result, 'MVR', new CurrencyDataImpl_0('MVR', 'MVR', 2));
  $put_1(result, 'MWK', new CurrencyDataImpl_0('MWK', 'MWK', 2));
  $put_1(result, 'MXN', new CurrencyDataImpl_1('MXN', 'Mex$', 2, 'Mex$'));
  $put_1(result, 'MXP', new CurrencyDataImpl_0('MXP', 'MX$', 130));
  $put_1(result, 'MXV', new CurrencyDataImpl_0('MXV', 'MXV', 2));
  $put_1(result, 'MYR', new CurrencyDataImpl_1('MYR', 'RM', 2, 'RM'));
  $put_1(result, 'MZE', new CurrencyDataImpl_0('MZE', 'MZE', 130));
  $put_1(result, 'MZM', new CurrencyDataImpl_0('MZM', 'Mt', 130));
  $put_1(result, 'MZN', new CurrencyDataImpl_0('MZN', 'MTn', 2));
  $put_1(result, 'NAD', new CurrencyDataImpl_0('NAD', 'N$', 2));
  $put_1(result, 'NGN', new CurrencyDataImpl_0('NGN', '\u20A6', 2));
  $put_1(result, 'NIC', new CurrencyDataImpl_0('NIC', 'NIC', 130));
  $put_1(result, 'NIO', new CurrencyDataImpl_0('NIO', 'C$', 2));
  $put_1(result, 'NLG', new CurrencyDataImpl_0('NLG', 'fl', 130));
  $put_1(result, 'NOK', new CurrencyDataImpl_1('NOK', 'Nkr', 2, 'NOkr'));
  $put_1(result, 'NPR', new CurrencyDataImpl_0('NPR', 'NPRs', 2));
  $put_1(result, 'NZD', new CurrencyDataImpl_0('NZD', 'NZ$', 2));
  $put_1(result, 'OMR', new CurrencyDataImpl_0('OMR', 'OMR', 3));
  $put_1(result, 'PAB', new CurrencyDataImpl_1('PAB', 'B/.', 2, 'B/.'));
  $put_1(result, 'PEI', new CurrencyDataImpl_0('PEI', 'I/.', 130));
  $put_1(result, 'PEN', new CurrencyDataImpl_1('PEN', 'S/.', 2, 'S/.'));
  $put_1(result, 'PES', new CurrencyDataImpl_0('PES', 'PES', 130));
  $put_1(result, 'PGK', new CurrencyDataImpl_0('PGK', 'PGK', 2));
  $put_1(result, 'PHP', new CurrencyDataImpl_1('PHP', '\u20B1', 2, 'PHP'));
  $put_1(result, 'PKR', new CurrencyDataImpl_1('PKR', 'PKRs', 0, 'PKRs.'));
  $put_1(result, 'PLN', new CurrencyDataImpl_0('PLN', 'z\u0142', 2));
  $put_1(result, 'PLZ', new CurrencyDataImpl_0('PLZ', 'PLZ', 130));
  $put_1(result, 'PTE', new CurrencyDataImpl_0('PTE', 'Esc', 130));
  $put_1(result, 'PYG', new CurrencyDataImpl_0('PYG', '\u20B2', 0));
  $put_1(result, 'QAR', new CurrencyDataImpl_0('QAR', 'QR', 2));
  $put_1(result, 'RHD', new CurrencyDataImpl_0('RHD', 'RH$', 130));
  $put_1(result, 'ROL', new CurrencyDataImpl_0('ROL', 'ROL', 130));
  $put_1(result, 'RON', new CurrencyDataImpl_0('RON', 'RON', 2));
  $put_1(result, 'RSD', new CurrencyDataImpl_0('RSD', 'din.', 0));
  $put_1(result, 'RUB', new CurrencyDataImpl_1('RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'));
  $put_1(result, 'RUR', new CurrencyDataImpl_0('RUR', 'RUR', 130));
  $put_1(result, 'RWF', new CurrencyDataImpl_0('RWF', 'RWF', 0));
  $put_1(result, 'SAR', new CurrencyDataImpl_1('SAR', 'SR', 2, 'SR'));
  $put_1(result, 'SBD', new CurrencyDataImpl_0('SBD', 'SI$', 2));
  $put_1(result, 'SCR', new CurrencyDataImpl_0('SCR', 'SRe', 2));
  $put_1(result, 'SDD', new CurrencyDataImpl_0('SDD', 'LSd', 130));
  $put_1(result, 'SDG', new CurrencyDataImpl_0('SDG', 'SDG', 2));
  $put_1(result, 'SDP', new CurrencyDataImpl_0('SDP', 'SDP', 130));
  $put_1(result, 'SEK', new CurrencyDataImpl_1('SEK', 'Skr', 2, 'kr'));
  $put_1(result, 'SGD', new CurrencyDataImpl_1('SGD', 'S$', 2, 'S$'));
  $put_1(result, 'SHP', new CurrencyDataImpl_0('SHP', 'SH\xA3', 2));
  $put_1(result, 'SIT', new CurrencyDataImpl_0('SIT', 'SIT', 130));
  $put_1(result, 'SKK', new CurrencyDataImpl_0('SKK', 'Sk', 130));
  $put_1(result, 'SLL', new CurrencyDataImpl_0('SLL', 'Le', 0));
  $put_1(result, 'SOS', new CurrencyDataImpl_0('SOS', 'Ssh', 0));
  $put_1(result, 'SRD', new CurrencyDataImpl_0('SRD', 'SR$', 2));
  $put_1(result, 'SRG', new CurrencyDataImpl_0('SRG', 'Sf', 130));
  $put_1(result, 'STD', new CurrencyDataImpl_0('STD', 'Db', 0));
  $put_1(result, 'SUR', new CurrencyDataImpl_0('SUR', 'SUR', 130));
  $put_1(result, 'SVC', new CurrencyDataImpl_0('SVC', 'SV\u20A1', 130));
  $put_1(result, 'SYP', new CurrencyDataImpl_0('SYP', 'SY\xA3', 0));
  $put_1(result, 'SZL', new CurrencyDataImpl_0('SZL', 'SZL', 2));
  $put_1(result, 'THB', new CurrencyDataImpl_1('THB', '\u0E3F', 2, 'THB'));
  $put_1(result, 'TJR', new CurrencyDataImpl_0('TJR', 'TJR', 130));
  $put_1(result, 'TJS', new CurrencyDataImpl_0('TJS', 'TJS', 2));
  $put_1(result, 'TMM', new CurrencyDataImpl_0('TMM', 'TMM', 128));
  $put_1(result, 'TMT', new CurrencyDataImpl_0('TMT', 'TMT', 2));
  $put_1(result, 'TND', new CurrencyDataImpl_0('TND', 'DT', 3));
  $put_1(result, 'TOP', new CurrencyDataImpl_0('TOP', 'T$', 2));
  $put_1(result, 'TPE', new CurrencyDataImpl_0('TPE', 'TPE', 130));
  $put_1(result, 'TRL', new CurrencyDataImpl_0('TRL', 'TRL', 128));
  $put_1(result, 'TRY', new CurrencyDataImpl_1('TRY', 'TL', 2, 'YTL'));
  $put_1(result, 'TTD', new CurrencyDataImpl_0('TTD', 'TT$', 2));
  $put_1(result, 'TWD', new CurrencyDataImpl_1('TWD', 'NT$', 2, 'NT$'));
  $put_1(result, 'TZS', new CurrencyDataImpl_0('TZS', 'TSh', 0));
  $put_1(result, 'UAH', new CurrencyDataImpl_0('UAH', '\u20B4', 2));
  $put_1(result, 'UAK', new CurrencyDataImpl_0('UAK', 'UAK', 130));
  $put_1(result, 'UGS', new CurrencyDataImpl_0('UGS', 'UGS', 130));
  $put_1(result, 'UGX', new CurrencyDataImpl_0('UGX', 'USh', 0));
  $put_1(result, 'USD', new CurrencyDataImpl_1('USD', '$', 2, 'US$'));
  $put_1(result, 'USN', new CurrencyDataImpl_0('USN', 'USN', 2));
  $put_1(result, 'USS', new CurrencyDataImpl_0('USS', 'USS', 2));
  $put_1(result, 'UYI', new CurrencyDataImpl_0('UYI', 'UYI', 2));
  $put_1(result, 'UYP', new CurrencyDataImpl_0('UYP', 'UYP', 130));
  $put_1(result, 'UYU', new CurrencyDataImpl_1('UYU', '$U', 2, 'UY$'));
  $put_1(result, 'UZS', new CurrencyDataImpl_0('UZS', 'UZS', 0));
  $put_1(result, 'VEB', new CurrencyDataImpl_0('VEB', 'VEB', 130));
  $put_1(result, 'VEF', new CurrencyDataImpl_0('VEF', 'Bs.F.', 2));
  $put_1(result, 'VND', new CurrencyDataImpl_1('VND', '\u20AB', 24, '\u20AB'));
  $put_1(result, 'VNN', new CurrencyDataImpl_0('VNN', 'VNN', 130));
  $put_1(result, 'VUV', new CurrencyDataImpl_0('VUV', 'VT', 0));
  $put_1(result, 'WST', new CurrencyDataImpl_0('WST', 'WS$', 2));
  $put_1(result, 'XAF', new CurrencyDataImpl_0('XAF', 'FCFA', 0));
  $put_1(result, 'XAG', new CurrencyDataImpl_0('XAG', 'XAG', 2));
  $put_1(result, 'XAU', new CurrencyDataImpl_0('XAU', 'XAU', 2));
  $put_1(result, 'XBA', new CurrencyDataImpl_0('XBA', 'XBA', 2));
  $put_1(result, 'XBB', new CurrencyDataImpl_0('XBB', 'XBB', 2));
  $put_1(result, 'XBC', new CurrencyDataImpl_0('XBC', 'XBC', 2));
  $put_1(result, 'XBD', new CurrencyDataImpl_0('XBD', 'XBD', 2));
  $put_1(result, 'XCD', new CurrencyDataImpl_0('XCD', 'EC$', 2));
  $put_1(result, 'XDR', new CurrencyDataImpl_0('XDR', 'XDR', 2));
  $put_1(result, 'XEU', new CurrencyDataImpl_0('XEU', 'XEU', 2));
  $put_1(result, 'XFO', new CurrencyDataImpl_0('XFO', 'XFO', 2));
  $put_1(result, 'XFU', new CurrencyDataImpl_0('XFU', 'XFU', 2));
  $put_1(result, 'XOF', new CurrencyDataImpl_0('XOF', 'CFA', 0));
  $put_1(result, 'XPD', new CurrencyDataImpl_0('XPD', 'XPD', 2));
  $put_1(result, 'XPF', new CurrencyDataImpl_0('XPF', 'CFPF', 0));
  $put_1(result, 'XPT', new CurrencyDataImpl_0('XPT', 'XPT', 2));
  $put_1(result, 'XRE', new CurrencyDataImpl_0('XRE', 'XRE', 2));
  $put_1(result, 'XTS', new CurrencyDataImpl_0('XTS', 'XTS', 2));
  $put_1(result, 'XXX', new CurrencyDataImpl_0('XXX', 'XXX', 2));
  $put_1(result, 'YDD', new CurrencyDataImpl_0('YDD', 'YDD', 130));
  $put_1(result, 'YER', new CurrencyDataImpl_1('YER', 'YR', 0, 'YER'));
  $put_1(result, 'YUD', new CurrencyDataImpl_0('YUD', 'YUD', 130));
  $put_1(result, 'YUM', new CurrencyDataImpl_0('YUM', 'YUM', 130));
  $put_1(result, 'YUN', new CurrencyDataImpl_0('YUN', 'YUN', 130));
  $put_1(result, 'YUR', new CurrencyDataImpl_0('YUR', 'YUR', 130));
  $put_1(result, 'ZAL', new CurrencyDataImpl_0('ZAL', 'ZAL', 2));
  $put_1(result, 'ZAR', new CurrencyDataImpl_1('ZAR', 'R', 2, 'ZAR'));
  $put_1(result, 'ZMK', new CurrencyDataImpl_0('ZMK', 'ZK', 0));
  $put_1(result, 'ZRN', new CurrencyDataImpl_0('ZRN', 'NZ', 130));
  $put_1(result, 'ZRZ', new CurrencyDataImpl_0('ZRZ', 'ZRZ', 130));
  $put_1(result, 'ZWD', new CurrencyDataImpl_0('ZWD', 'Z$', 128));
  $put_1(result, 'ZWL', new CurrencyDataImpl_0('ZWL', 'ZWL', 2));
  $put_1(result, 'ZWR', new CurrencyDataImpl_0('ZWR', 'ZWR', 130));
  return result;
}
;
_.loadCurrencyMapNative = function loadCurrencyMapNative_13(){
  return overrideMap($loadCurrencyMapNative_1(this), $loadMyCurrencyMapOverridesNative_12());
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
function $$init_140(){
}

function $loadMyCurrencyMapOverridesNative_13(){
  return {ADP:['ADP', 'ADP', 128], AED:['AED', 'DH', 2, 'DH'], AFA:['AFA', 'AFA', 130], AFN:['AFN', 'Af', 0], ALL:['ALL', 'ALL', 0], AMD:['AMD', 'AMD', 0], ANG:['ANG', 'NAf.', 2], AOA:['AOA', 'Kz', 2], AOK:['AOK', 'AOK', 130], AON:['AON', 'AON', 130], AOR:['AOR', 'AOR', 130], ARA:['ARA', '\u20B3', 130], ARL:['ARL', '$L', 130], ARM:['ARM', 'm$n', 130], ARP:['ARP', 'ARP', 130], ARS:['ARS', 'AR$', 2, 'AR$'], ATS:['ATS', 'ATS', 130], AUD:['AUD', 'AU$', 2, 'AU$'], AWG:['AWG', 'Afl.', 2], AZM:['AZM', 'AZM', 130], AZN:['AZN', 'man.', 2], BAD:['BAD', 'BAD', 130], BAM:['BAM', 'KM', 2], BAN:['BAN', 'BAN', 130], BBD:['BBD', 'Bds$', 2], BDT:['BDT', 'Tk', 2, 'Tk'], BEC:['BEC', 'BEC', 2], BEF:['BEF', 'BF', 130], BEL:['BEL', 'BEL', 2], BGL:['BGL', 'BGL', 130], BGM:['BGM', 'BGM', 130], BGN:['BGN', 'BGN', 2], BGO:['BGO', 'BGO', 130], BHD:['BHD', 'BD', 3], BIF:['BIF', 'FBu', 0], BMD:['BMD', 'BD$', 2], BND:['BND', 'BN$', 2], BOB:['BOB', 'Bs', 2], BOL:['BOL', 'BOL', 130], BOP:['BOP', '$b.', 130], BOV:['BOV', 'BOV', 2], BRB:['BRB', 'BRB', 130], BRC:['BRC', 'BRC', 130], BRE:['BRE', 'BRE', 130], BRL:['BRL', 'R$', 2, 'R$'], BRN:['BRN', 'BRN', 130], BRR:['BRR', 'BRR', 130], BRZ:['BRZ', 'BRZ', 130], BSD:['BSD', 'BS$', 2], BTN:['BTN', 'Nu.', 2], BUK:['BUK', 'BUK', 130], BWP:['BWP', 'BWP', 2], BYB:['BYB', 'BYB', 130], BYR:['BYR', 'BYR', 0], BZD:['BZD', 'BZ$', 2], CAD:['CAD', 'CA$', 2, 'C$'], CDF:['CDF', 'CDF', 2], CHE:['CHE', 'CHE', 2], CHF:['CHF', 'Fr.', 2, 'CHF'], CHW:['CHW', 'CHW', 2], CLE:['CLE', 'E\xBA', 130], CLF:['CLF', 'CLF', 0], CLP:['CLP', 'CL$', 0, 'CL$'], CNY:['CNY', 'CN\xA5', 2, 'RMB\xA5'], COP:['COP', 'CO$', 0, 'COL$'], COU:['COU', 'COU', 2], CRC:['CRC', '\u20A1', 0, 'CR\u20A1'], CSD:['CSD', 'CSD', 130], CSK:['CSK', 'CSK', 130], CUC:['CUC', 'CUC$', 2], CUP:['CUP', 'CU$', 2, '$MN'], CVE:['CVE', 'CV$', 2], CYP:['CYP', 'CY\xA3', 130], CZK:['CZK', 'K\u010D', 2, 'K\u010D'], DDM:['DDM', 'DDM', 130], DEM:['DEM', 'DM', 130], DJF:['DJF', 'Fdj', 0], DKK:['DKK', 'Dkr', 2, 'kr'], DOP:['DOP', 'RD$', 2, 'RD$'], DZD:['DZD', 'DA', 2], ECS:['ECS', 'ECS', 130], ECV:['ECV', 'ECV', 2], EEK:['EEK', 'Ekr', 2], EGP:['EGP', 'EG\xA3', 2, 'LE'], EQE:['EQE', 'EQE', 130], ERN:['ERN', 'Nfk', 2], ESA:['ESA', 'ESA', 2], ESB:['ESB', 'ESB', 2], ESP:['ESP', 'Pts', 128], ETB:['ETB', 'Br', 2], EUR:['EUR', '\u20AC', 2, '\u20AC'], FIM:['FIM', 'mk', 130], FJD:['FJD', 'FJ$', 2], FKP:['FKP', 'FK\xA3', 2], FRF:['FRF', '\u20A3', 130], GBP:['GBP', '\xA3', 2, 'GB\xA3'], GEK:['GEK', 'GEK', 130], GEL:['GEL', 'GEL', 2], GHC:['GHC', '\u20B5', 130], GHS:['GHS', 'GH\u20B5', 2], GIP:['GIP', 'GI\xA3', 2], GMD:['GMD', 'GMD', 2], GNF:['GNF', 'FG', 0], GNS:['GNS', 'GNS', 130], GQE:['GQE', 'GQE', 130], GRD:['GRD', '\u20AF', 130], GTQ:['GTQ', 'GTQ', 2], GWE:['GWE', 'GWE', 130], GWP:['GWP', 'GWP', 2], GYD:['GYD', 'GY$', 0], HKD:['HKD', 'HK$', 2, 'HK$'], HNL:['HNL', 'HNL', 2], HRD:['HRD', 'HRD', 130], HRK:['HRK', 'kn', 2], HTG:['HTG', 'HTG', 2], HUF:['HUF', 'Ft', 0], IDR:['IDR', 'Rp', 0], IEP:['IEP', 'IR\xA3', 130], ILP:['ILP', 'I\xA3', 130], ILR:['ILR', 'ILR', 130], ILS:['ILS', '\u20AA', 2, 'IL\u20AA'], INR:['INR', 'INRs', 2, 'Rs'], IQD:['IQD', 'IQD', 0], IRR:['IRR', 'IRR', 0], ISJ:['ISJ', 'ISJ', 130], ISK:['ISK', 'Ikr', 0, 'kr'], ITL:['ITL', 'IT\u20A4', 128], JMD:['JMD', 'J$', 2, 'JA$'], JOD:['JOD', 'JD', 3], JPY:['JPY', '\xA5', 0, 'JP\xA5'], KES:['KES', 'Ksh', 2], KGS:['KGS', 'KGS', 2], KHR:['KHR', 'KHR', 2], KMF:['KMF', 'CF', 0], KPW:['KPW', 'KPW', 0], KRH:['KRH', 'KRH', 130], KRO:['KRO', 'KRO', 130], KRW:['KRW', '\u20A9', 0, 'KR\u20A9'], KWD:['KWD', 'KD', 3], KYD:['KYD', 'KY$', 2], KZT:['KZT', 'KZT', 2], LAK:['LAK', '\u20AD', 0], LBP:['LBP', 'LB\xA3', 0], LKR:['LKR', 'SLRs', 2, 'SLRs'], LRD:['LRD', 'L$', 2], LSL:['LSL', 'LSL', 2], LSM:['LSM', 'LSM', 130], LTL:['LTL', 'Lt', 2], LTT:['LTT', 'LTT', 130], LUC:['LUC', 'LUC', 2], LUF:['LUF', 'LUF', 128], LUL:['LUL', 'LUL', 2], LVL:['LVL', 'Ls', 2], LVR:['LVR', 'LVR', 130], LYD:['LYD', 'LD', 3], MAD:['MAD', 'MAD', 2], MAF:['MAF', 'MAF', 130], MCF:['MCF', 'MCF', 130], MDC:['MDC', 'MDC', 130], MDL:['MDL', 'MDL', 2], MGA:['MGA', 'MGA', 0], MGF:['MGF', 'MGF', 128], MKD:['MKD', 'MKD', 2], MKN:['MKN', 'MKN', 130], MLF:['MLF', 'MLF', 130], MMK:['MMK', 'MMK', 0], MNT:['MNT', '\u20AE', 0, 'MN\u20AE'], MOP:['MOP', 'MOP$', 2], MRO:['MRO', 'UM', 0], MTL:['MTL', 'Lm', 130], MTP:['MTP', 'MT\xA3', 130], MUR:['MUR', 'MURs', 0], MVP:['MVP', 'MVP', 130], MVR:['MVR', 'MVR', 2], MWK:['MWK', 'MWK', 2], MXN:['MXN', 'Mex$', 2, 'Mex$'], MXP:['MXP', 'MX$', 130], MXV:['MXV', 'MXV', 2], MYR:['MYR', 'RM', 2, 'RM'], MZE:['MZE', 'MZE', 130], MZM:['MZM', 'Mt', 130], MZN:['MZN', 'MTn', 2], NAD:['NAD', 'N$', 2], NGN:['NGN', '\u20A6', 2], NIC:['NIC', 'NIC', 130], NIO:['NIO', 'C$', 2], NLG:['NLG', 'fl', 130], NOK:['NOK', 'Nkr', 2, 'NOkr'], NPR:['NPR', 'NPRs', 2], NZD:['NZD', 'NZ$', 2], OMR:['OMR', 'OMR', 3], PAB:['PAB', 'B/.', 2, 'B/.'], PEI:['PEI', 'I/.', 130], PEN:['PEN', 'S/.', 2, 'S/.'], PES:['PES', 'PES', 130], PGK:['PGK', 'PGK', 2], PHP:['PHP', '\u20B1', 2, 'PHP'], PKR:['PKR', '\u20A8', 0, 'PKRs.'], PLN:['PLN', 'z\u0142', 2], PLZ:['PLZ', 'PLZ', 130], PTE:['PTE', 'Esc', 130], PYG:['PYG', '\u20B2', 0], QAR:['QAR', 'QR', 2], RHD:['RHD', 'RH$', 130], ROL:['ROL', 'ROL', 130], RON:['RON', 'RON', 2], RSD:['RSD', 'din.', 0], RUB:['RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'], RUR:['RUR', 'RUR', 130], RWF:['RWF', 'RWF', 0], SAR:['SAR', 'SR', 2, 'SR'], SBD:['SBD', 'SI$', 2], SCR:['SCR', 'SRe', 2], SDD:['SDD', 'LSd', 130], SDG:['SDG', 'SDG', 2], SDP:['SDP', 'SDP', 130], SEK:['SEK', 'Skr', 2, 'kr'], SGD:['SGD', 'S$', 2, 'S$'], SHP:['SHP', 'SH\xA3', 2], SIT:['SIT', 'SIT', 130], SKK:['SKK', 'Sk', 130], SLL:['SLL', 'Le', 0], SOS:['SOS', 'Ssh', 0], SRD:['SRD', 'SR$', 2], SRG:['SRG', 'Sf', 130], STD:['STD', 'Db', 0], SUR:['SUR', 'SUR', 130], SVC:['SVC', 'SV\u20A1', 130], SYP:['SYP', 'SY\xA3', 0], SZL:['SZL', 'SZL', 2], THB:['THB', '\u0E3F', 2, 'THB'], TJR:['TJR', 'TJR', 130], TJS:['TJS', 'TJS', 2], TMM:['TMM', 'TMM', 128], TMT:['TMT', 'TMT', 2], TND:['TND', 'DT', 3], TOP:['TOP', 'T$', 2], TPE:['TPE', 'TPE', 130], TRL:['TRL', 'TRL', 128], TRY:['TRY', 'TL', 2, 'YTL'], TTD:['TTD', 'TT$', 2], TWD:['TWD', 'NT$', 2, 'NT$'], TZS:['TZS', 'TSh', 0], UAH:['UAH', '\u20B4', 2], UAK:['UAK', 'UAK', 130], UGS:['UGS', 'UGS', 130], UGX:['UGX', 'USh', 0], USD:['USD', '$', 2, 'US$'], USN:['USN', 'USN', 2], USS:['USS', 'USS', 2], UYI:['UYI', 'UYI', 2], UYP:['UYP', 'UYP', 130], UYU:['UYU', '$U', 2, 'UY$'], UZS:['UZS', 'UZS', 0], VEB:['VEB', 'VEB', 130], VEF:['VEF', 'Bs.F.', 2], VND:['VND', '\u20AB', 24, '\u20AB'], VNN:['VNN', 'VNN', 130], VUV:['VUV', 'VT', 0], WST:['WST', 'WS$', 2], XAF:['XAF', 'FCFA', 0], XAG:['XAG', 'XAG', 2], XAU:['XAU', 'XAU', 2], XBA:['XBA', 'XBA', 2], XBB:['XBB', 'XBB', 2], XBC:['XBC', 'XBC', 2], XBD:['XBD', 'XBD', 2], XCD:['XCD', 'EC$', 2], XDR:['XDR', 'XDR', 2], XEU:['XEU', 'XEU', 2], XFO:['XFO', 'XFO', 2], XFU:['XFU', 'XFU', 2], XOF:['XOF', 'CFA', 0], XPD:['XPD', 'XPD', 2], XPF:['XPF', 'CFPF', 0], XPT:['XPT', 'XPT', 2], XRE:['XRE', 'XRE', 2], XTS:['XTS', 'XTS', 2], XXX:['XXX', 'XXX', 2], YDD:['YDD', 'YDD', 130], YER:['YER', 'YR', 0, 'YER'], YUD:['YUD', 'YUD', 130], YUM:['YUM', 'YUM', 130], YUN:['YUN', 'YUN', 130], YUR:['YUR', 'YUR', 130], ZAL:['ZAL', 'ZAL', 2], ZAR:['ZAR', 'R', 2, 'ZAR'], ZMK:['ZMK', 'ZK', 0], ZRN:['ZRN', 'NZ', 130], ZRZ:['ZRZ', 'ZRZ', 130], ZWD:['ZWD', 'Z$', 128], ZWL:['ZWL', 'ZWL', 2], ZWR:['ZWR', 'ZWR', 130]};
}

function CurrencyList_en_PK_0(){
  CurrencyList_en_0.call(this);
  $$init_140();
}

function CurrencyList_en_PK(){
}

_ = CurrencyList_en_PK_0.prototype = CurrencyList_en_PK.prototype = new CurrencyList_en;
_.getClass$ = function getClass_141(){
  return Lcom_google_gwt_i18n_client_CurrencyList_1en_1PK_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava_16(){
  return new CurrencyDataImpl_1('PKR', '\u20A8', 0, 'PKRs.');
}
;
_.getDefaultNative = function getDefaultNative_16(){
  return ['PKR', '\u20A8', 0, 'PKRs.'];
}
;
_.loadCurrencyMapJava = function loadCurrencyMapJava_14(){
  var result;
  result = $loadCurrencyMapJava_1(this);
  $put_1(result, 'ADP', new CurrencyDataImpl_0('ADP', 'ADP', 128));
  $put_1(result, 'AED', new CurrencyDataImpl_1('AED', 'DH', 2, 'DH'));
  $put_1(result, 'AFA', new CurrencyDataImpl_0('AFA', 'AFA', 130));
  $put_1(result, 'AFN', new CurrencyDataImpl_0('AFN', 'Af', 0));
  $put_1(result, 'ALL', new CurrencyDataImpl_0('ALL', 'ALL', 0));
  $put_1(result, 'AMD', new CurrencyDataImpl_0('AMD', 'AMD', 0));
  $put_1(result, 'ANG', new CurrencyDataImpl_0('ANG', 'NAf.', 2));
  $put_1(result, 'AOA', new CurrencyDataImpl_0('AOA', 'Kz', 2));
  $put_1(result, 'AOK', new CurrencyDataImpl_0('AOK', 'AOK', 130));
  $put_1(result, 'AON', new CurrencyDataImpl_0('AON', 'AON', 130));
  $put_1(result, 'AOR', new CurrencyDataImpl_0('AOR', 'AOR', 130));
  $put_1(result, 'ARA', new CurrencyDataImpl_0('ARA', '\u20B3', 130));
  $put_1(result, 'ARL', new CurrencyDataImpl_0('ARL', '$L', 130));
  $put_1(result, 'ARM', new CurrencyDataImpl_0('ARM', 'm$n', 130));
  $put_1(result, 'ARP', new CurrencyDataImpl_0('ARP', 'ARP', 130));
  $put_1(result, 'ARS', new CurrencyDataImpl_1('ARS', 'AR$', 2, 'AR$'));
  $put_1(result, 'ATS', new CurrencyDataImpl_0('ATS', 'ATS', 130));
  $put_1(result, 'AUD', new CurrencyDataImpl_1('AUD', 'AU$', 2, 'AU$'));
  $put_1(result, 'AWG', new CurrencyDataImpl_0('AWG', 'Afl.', 2));
  $put_1(result, 'AZM', new CurrencyDataImpl_0('AZM', 'AZM', 130));
  $put_1(result, 'AZN', new CurrencyDataImpl_0('AZN', 'man.', 2));
  $put_1(result, 'BAD', new CurrencyDataImpl_0('BAD', 'BAD', 130));
  $put_1(result, 'BAM', new CurrencyDataImpl_0('BAM', 'KM', 2));
  $put_1(result, 'BAN', new CurrencyDataImpl_0('BAN', 'BAN', 130));
  $put_1(result, 'BBD', new CurrencyDataImpl_0('BBD', 'Bds$', 2));
  $put_1(result, 'BDT', new CurrencyDataImpl_1('BDT', 'Tk', 2, 'Tk'));
  $put_1(result, 'BEC', new CurrencyDataImpl_0('BEC', 'BEC', 2));
  $put_1(result, 'BEF', new CurrencyDataImpl_0('BEF', 'BF', 130));
  $put_1(result, 'BEL', new CurrencyDataImpl_0('BEL', 'BEL', 2));
  $put_1(result, 'BGL', new CurrencyDataImpl_0('BGL', 'BGL', 130));
  $put_1(result, 'BGM', new CurrencyDataImpl_0('BGM', 'BGM', 130));
  $put_1(result, 'BGN', new CurrencyDataImpl_0('BGN', 'BGN', 2));
  $put_1(result, 'BGO', new CurrencyDataImpl_0('BGO', 'BGO', 130));
  $put_1(result, 'BHD', new CurrencyDataImpl_0('BHD', 'BD', 3));
  $put_1(result, 'BIF', new CurrencyDataImpl_0('BIF', 'FBu', 0));
  $put_1(result, 'BMD', new CurrencyDataImpl_0('BMD', 'BD$', 2));
  $put_1(result, 'BND', new CurrencyDataImpl_0('BND', 'BN$', 2));
  $put_1(result, 'BOB', new CurrencyDataImpl_0('BOB', 'Bs', 2));
  $put_1(result, 'BOL', new CurrencyDataImpl_0('BOL', 'BOL', 130));
  $put_1(result, 'BOP', new CurrencyDataImpl_0('BOP', '$b.', 130));
  $put_1(result, 'BOV', new CurrencyDataImpl_0('BOV', 'BOV', 2));
  $put_1(result, 'BRB', new CurrencyDataImpl_0('BRB', 'BRB', 130));
  $put_1(result, 'BRC', new CurrencyDataImpl_0('BRC', 'BRC', 130));
  $put_1(result, 'BRE', new CurrencyDataImpl_0('BRE', 'BRE', 130));
  $put_1(result, 'BRL', new CurrencyDataImpl_1('BRL', 'R$', 2, 'R$'));
  $put_1(result, 'BRN', new CurrencyDataImpl_0('BRN', 'BRN', 130));
  $put_1(result, 'BRR', new CurrencyDataImpl_0('BRR', 'BRR', 130));
  $put_1(result, 'BRZ', new CurrencyDataImpl_0('BRZ', 'BRZ', 130));
  $put_1(result, 'BSD', new CurrencyDataImpl_0('BSD', 'BS$', 2));
  $put_1(result, 'BTN', new CurrencyDataImpl_0('BTN', 'Nu.', 2));
  $put_1(result, 'BUK', new CurrencyDataImpl_0('BUK', 'BUK', 130));
  $put_1(result, 'BWP', new CurrencyDataImpl_0('BWP', 'BWP', 2));
  $put_1(result, 'BYB', new CurrencyDataImpl_0('BYB', 'BYB', 130));
  $put_1(result, 'BYR', new CurrencyDataImpl_0('BYR', 'BYR', 0));
  $put_1(result, 'BZD', new CurrencyDataImpl_0('BZD', 'BZ$', 2));
  $put_1(result, 'CAD', new CurrencyDataImpl_1('CAD', 'CA$', 2, 'C$'));
  $put_1(result, 'CDF', new CurrencyDataImpl_0('CDF', 'CDF', 2));
  $put_1(result, 'CHE', new CurrencyDataImpl_0('CHE', 'CHE', 2));
  $put_1(result, 'CHF', new CurrencyDataImpl_1('CHF', 'Fr.', 2, 'CHF'));
  $put_1(result, 'CHW', new CurrencyDataImpl_0('CHW', 'CHW', 2));
  $put_1(result, 'CLE', new CurrencyDataImpl_0('CLE', 'E\xBA', 130));
  $put_1(result, 'CLF', new CurrencyDataImpl_0('CLF', 'CLF', 0));
  $put_1(result, 'CLP', new CurrencyDataImpl_1('CLP', 'CL$', 0, 'CL$'));
  $put_1(result, 'CNY', new CurrencyDataImpl_1('CNY', 'CN\xA5', 2, 'RMB\xA5'));
  $put_1(result, 'COP', new CurrencyDataImpl_1('COP', 'CO$', 0, 'COL$'));
  $put_1(result, 'COU', new CurrencyDataImpl_0('COU', 'COU', 2));
  $put_1(result, 'CRC', new CurrencyDataImpl_1('CRC', '\u20A1', 0, 'CR\u20A1'));
  $put_1(result, 'CSD', new CurrencyDataImpl_0('CSD', 'CSD', 130));
  $put_1(result, 'CSK', new CurrencyDataImpl_0('CSK', 'CSK', 130));
  $put_1(result, 'CUC', new CurrencyDataImpl_0('CUC', 'CUC$', 2));
  $put_1(result, 'CUP', new CurrencyDataImpl_1('CUP', 'CU$', 2, '$MN'));
  $put_1(result, 'CVE', new CurrencyDataImpl_0('CVE', 'CV$', 2));
  $put_1(result, 'CYP', new CurrencyDataImpl_0('CYP', 'CY\xA3', 130));
  $put_1(result, 'CZK', new CurrencyDataImpl_1('CZK', 'K\u010D', 2, 'K\u010D'));
  $put_1(result, 'DDM', new CurrencyDataImpl_0('DDM', 'DDM', 130));
  $put_1(result, 'DEM', new CurrencyDataImpl_0('DEM', 'DM', 130));
  $put_1(result, 'DJF', new CurrencyDataImpl_0('DJF', 'Fdj', 0));
  $put_1(result, 'DKK', new CurrencyDataImpl_1('DKK', 'Dkr', 2, 'kr'));
  $put_1(result, 'DOP', new CurrencyDataImpl_1('DOP', 'RD$', 2, 'RD$'));
  $put_1(result, 'DZD', new CurrencyDataImpl_0('DZD', 'DA', 2));
  $put_1(result, 'ECS', new CurrencyDataImpl_0('ECS', 'ECS', 130));
  $put_1(result, 'ECV', new CurrencyDataImpl_0('ECV', 'ECV', 2));
  $put_1(result, 'EEK', new CurrencyDataImpl_0('EEK', 'Ekr', 2));
  $put_1(result, 'EGP', new CurrencyDataImpl_1('EGP', 'EG\xA3', 2, 'LE'));
  $put_1(result, 'EQE', new CurrencyDataImpl_0('EQE', 'EQE', 130));
  $put_1(result, 'ERN', new CurrencyDataImpl_0('ERN', 'Nfk', 2));
  $put_1(result, 'ESA', new CurrencyDataImpl_0('ESA', 'ESA', 2));
  $put_1(result, 'ESB', new CurrencyDataImpl_0('ESB', 'ESB', 2));
  $put_1(result, 'ESP', new CurrencyDataImpl_0('ESP', 'Pts', 128));
  $put_1(result, 'ETB', new CurrencyDataImpl_0('ETB', 'Br', 2));
  $put_1(result, 'EUR', new CurrencyDataImpl_1('EUR', '\u20AC', 2, '\u20AC'));
  $put_1(result, 'FIM', new CurrencyDataImpl_0('FIM', 'mk', 130));
  $put_1(result, 'FJD', new CurrencyDataImpl_0('FJD', 'FJ$', 2));
  $put_1(result, 'FKP', new CurrencyDataImpl_0('FKP', 'FK\xA3', 2));
  $put_1(result, 'FRF', new CurrencyDataImpl_0('FRF', '\u20A3', 130));
  $put_1(result, 'GBP', new CurrencyDataImpl_1('GBP', '\xA3', 2, 'GB\xA3'));
  $put_1(result, 'GEK', new CurrencyDataImpl_0('GEK', 'GEK', 130));
  $put_1(result, 'GEL', new CurrencyDataImpl_0('GEL', 'GEL', 2));
  $put_1(result, 'GHC', new CurrencyDataImpl_0('GHC', '\u20B5', 130));
  $put_1(result, 'GHS', new CurrencyDataImpl_0('GHS', 'GH\u20B5', 2));
  $put_1(result, 'GIP', new CurrencyDataImpl_0('GIP', 'GI\xA3', 2));
  $put_1(result, 'GMD', new CurrencyDataImpl_0('GMD', 'GMD', 2));
  $put_1(result, 'GNF', new CurrencyDataImpl_0('GNF', 'FG', 0));
  $put_1(result, 'GNS', new CurrencyDataImpl_0('GNS', 'GNS', 130));
  $put_1(result, 'GQE', new CurrencyDataImpl_0('GQE', 'GQE', 130));
  $put_1(result, 'GRD', new CurrencyDataImpl_0('GRD', '\u20AF', 130));
  $put_1(result, 'GTQ', new CurrencyDataImpl_0('GTQ', 'GTQ', 2));
  $put_1(result, 'GWE', new CurrencyDataImpl_0('GWE', 'GWE', 130));
  $put_1(result, 'GWP', new CurrencyDataImpl_0('GWP', 'GWP', 2));
  $put_1(result, 'GYD', new CurrencyDataImpl_0('GYD', 'GY$', 0));
  $put_1(result, 'HKD', new CurrencyDataImpl_1('HKD', 'HK$', 2, 'HK$'));
  $put_1(result, 'HNL', new CurrencyDataImpl_0('HNL', 'HNL', 2));
  $put_1(result, 'HRD', new CurrencyDataImpl_0('HRD', 'HRD', 130));
  $put_1(result, 'HRK', new CurrencyDataImpl_0('HRK', 'kn', 2));
  $put_1(result, 'HTG', new CurrencyDataImpl_0('HTG', 'HTG', 2));
  $put_1(result, 'HUF', new CurrencyDataImpl_0('HUF', 'Ft', 0));
  $put_1(result, 'IDR', new CurrencyDataImpl_0('IDR', 'Rp', 0));
  $put_1(result, 'IEP', new CurrencyDataImpl_0('IEP', 'IR\xA3', 130));
  $put_1(result, 'ILP', new CurrencyDataImpl_0('ILP', 'I\xA3', 130));
  $put_1(result, 'ILR', new CurrencyDataImpl_0('ILR', 'ILR', 130));
  $put_1(result, 'ILS', new CurrencyDataImpl_1('ILS', '\u20AA', 2, 'IL\u20AA'));
  $put_1(result, 'INR', new CurrencyDataImpl_1('INR', 'INRs', 2, 'Rs'));
  $put_1(result, 'IQD', new CurrencyDataImpl_0('IQD', 'IQD', 0));
  $put_1(result, 'IRR', new CurrencyDataImpl_0('IRR', 'IRR', 0));
  $put_1(result, 'ISJ', new CurrencyDataImpl_0('ISJ', 'ISJ', 130));
  $put_1(result, 'ISK', new CurrencyDataImpl_1('ISK', 'Ikr', 0, 'kr'));
  $put_1(result, 'ITL', new CurrencyDataImpl_0('ITL', 'IT\u20A4', 128));
  $put_1(result, 'JMD', new CurrencyDataImpl_1('JMD', 'J$', 2, 'JA$'));
  $put_1(result, 'JOD', new CurrencyDataImpl_0('JOD', 'JD', 3));
  $put_1(result, 'JPY', new CurrencyDataImpl_1('JPY', '\xA5', 0, 'JP\xA5'));
  $put_1(result, 'KES', new CurrencyDataImpl_0('KES', 'Ksh', 2));
  $put_1(result, 'KGS', new CurrencyDataImpl_0('KGS', 'KGS', 2));
  $put_1(result, 'KHR', new CurrencyDataImpl_0('KHR', 'KHR', 2));
  $put_1(result, 'KMF', new CurrencyDataImpl_0('KMF', 'CF', 0));
  $put_1(result, 'KPW', new CurrencyDataImpl_0('KPW', 'KPW', 0));
  $put_1(result, 'KRH', new CurrencyDataImpl_0('KRH', 'KRH', 130));
  $put_1(result, 'KRO', new CurrencyDataImpl_0('KRO', 'KRO', 130));
  $put_1(result, 'KRW', new CurrencyDataImpl_1('KRW', '\u20A9', 0, 'KR\u20A9'));
  $put_1(result, 'KWD', new CurrencyDataImpl_0('KWD', 'KD', 3));
  $put_1(result, 'KYD', new CurrencyDataImpl_0('KYD', 'KY$', 2));
  $put_1(result, 'KZT', new CurrencyDataImpl_0('KZT', 'KZT', 2));
  $put_1(result, 'LAK', new CurrencyDataImpl_0('LAK', '\u20AD', 0));
  $put_1(result, 'LBP', new CurrencyDataImpl_0('LBP', 'LB\xA3', 0));
  $put_1(result, 'LKR', new CurrencyDataImpl_1('LKR', 'SLRs', 2, 'SLRs'));
  $put_1(result, 'LRD', new CurrencyDataImpl_0('LRD', 'L$', 2));
  $put_1(result, 'LSL', new CurrencyDataImpl_0('LSL', 'LSL', 2));
  $put_1(result, 'LSM', new CurrencyDataImpl_0('LSM', 'LSM', 130));
  $put_1(result, 'LTL', new CurrencyDataImpl_0('LTL', 'Lt', 2));
  $put_1(result, 'LTT', new CurrencyDataImpl_0('LTT', 'LTT', 130));
  $put_1(result, 'LUC', new CurrencyDataImpl_0('LUC', 'LUC', 2));
  $put_1(result, 'LUF', new CurrencyDataImpl_0('LUF', 'LUF', 128));
  $put_1(result, 'LUL', new CurrencyDataImpl_0('LUL', 'LUL', 2));
  $put_1(result, 'LVL', new CurrencyDataImpl_0('LVL', 'Ls', 2));
  $put_1(result, 'LVR', new CurrencyDataImpl_0('LVR', 'LVR', 130));
  $put_1(result, 'LYD', new CurrencyDataImpl_0('LYD', 'LD', 3));
  $put_1(result, 'MAD', new CurrencyDataImpl_0('MAD', 'MAD', 2));
  $put_1(result, 'MAF', new CurrencyDataImpl_0('MAF', 'MAF', 130));
  $put_1(result, 'MCF', new CurrencyDataImpl_0('MCF', 'MCF', 130));
  $put_1(result, 'MDC', new CurrencyDataImpl_0('MDC', 'MDC', 130));
  $put_1(result, 'MDL', new CurrencyDataImpl_0('MDL', 'MDL', 2));
  $put_1(result, 'MGA', new CurrencyDataImpl_0('MGA', 'MGA', 0));
  $put_1(result, 'MGF', new CurrencyDataImpl_0('MGF', 'MGF', 128));
  $put_1(result, 'MKD', new CurrencyDataImpl_0('MKD', 'MKD', 2));
  $put_1(result, 'MKN', new CurrencyDataImpl_0('MKN', 'MKN', 130));
  $put_1(result, 'MLF', new CurrencyDataImpl_0('MLF', 'MLF', 130));
  $put_1(result, 'MMK', new CurrencyDataImpl_0('MMK', 'MMK', 0));
  $put_1(result, 'MNT', new CurrencyDataImpl_1('MNT', '\u20AE', 0, 'MN\u20AE'));
  $put_1(result, 'MOP', new CurrencyDataImpl_0('MOP', 'MOP$', 2));
  $put_1(result, 'MRO', new CurrencyDataImpl_0('MRO', 'UM', 0));
  $put_1(result, 'MTL', new CurrencyDataImpl_0('MTL', 'Lm', 130));
  $put_1(result, 'MTP', new CurrencyDataImpl_0('MTP', 'MT\xA3', 130));
  $put_1(result, 'MUR', new CurrencyDataImpl_0('MUR', 'MURs', 0));
  $put_1(result, 'MVP', new CurrencyDataImpl_0('MVP', 'MVP', 130));
  $put_1(result, 'MVR', new CurrencyDataImpl_0('MVR', 'MVR', 2));
  $put_1(result, 'MWK', new CurrencyDataImpl_0('MWK', 'MWK', 2));
  $put_1(result, 'MXN', new CurrencyDataImpl_1('MXN', 'Mex$', 2, 'Mex$'));
  $put_1(result, 'MXP', new CurrencyDataImpl_0('MXP', 'MX$', 130));
  $put_1(result, 'MXV', new CurrencyDataImpl_0('MXV', 'MXV', 2));
  $put_1(result, 'MYR', new CurrencyDataImpl_1('MYR', 'RM', 2, 'RM'));
  $put_1(result, 'MZE', new CurrencyDataImpl_0('MZE', 'MZE', 130));
  $put_1(result, 'MZM', new CurrencyDataImpl_0('MZM', 'Mt', 130));
  $put_1(result, 'MZN', new CurrencyDataImpl_0('MZN', 'MTn', 2));
  $put_1(result, 'NAD', new CurrencyDataImpl_0('NAD', 'N$', 2));
  $put_1(result, 'NGN', new CurrencyDataImpl_0('NGN', '\u20A6', 2));
  $put_1(result, 'NIC', new CurrencyDataImpl_0('NIC', 'NIC', 130));
  $put_1(result, 'NIO', new CurrencyDataImpl_0('NIO', 'C$', 2));
  $put_1(result, 'NLG', new CurrencyDataImpl_0('NLG', 'fl', 130));
  $put_1(result, 'NOK', new CurrencyDataImpl_1('NOK', 'Nkr', 2, 'NOkr'));
  $put_1(result, 'NPR', new CurrencyDataImpl_0('NPR', 'NPRs', 2));
  $put_1(result, 'NZD', new CurrencyDataImpl_0('NZD', 'NZ$', 2));
  $put_1(result, 'OMR', new CurrencyDataImpl_0('OMR', 'OMR', 3));
  $put_1(result, 'PAB', new CurrencyDataImpl_1('PAB', 'B/.', 2, 'B/.'));
  $put_1(result, 'PEI', new CurrencyDataImpl_0('PEI', 'I/.', 130));
  $put_1(result, 'PEN', new CurrencyDataImpl_1('PEN', 'S/.', 2, 'S/.'));
  $put_1(result, 'PES', new CurrencyDataImpl_0('PES', 'PES', 130));
  $put_1(result, 'PGK', new CurrencyDataImpl_0('PGK', 'PGK', 2));
  $put_1(result, 'PHP', new CurrencyDataImpl_1('PHP', '\u20B1', 2, 'PHP'));
  $put_1(result, 'PKR', new CurrencyDataImpl_1('PKR', '\u20A8', 0, 'PKRs.'));
  $put_1(result, 'PLN', new CurrencyDataImpl_0('PLN', 'z\u0142', 2));
  $put_1(result, 'PLZ', new CurrencyDataImpl_0('PLZ', 'PLZ', 130));
  $put_1(result, 'PTE', new CurrencyDataImpl_0('PTE', 'Esc', 130));
  $put_1(result, 'PYG', new CurrencyDataImpl_0('PYG', '\u20B2', 0));
  $put_1(result, 'QAR', new CurrencyDataImpl_0('QAR', 'QR', 2));
  $put_1(result, 'RHD', new CurrencyDataImpl_0('RHD', 'RH$', 130));
  $put_1(result, 'ROL', new CurrencyDataImpl_0('ROL', 'ROL', 130));
  $put_1(result, 'RON', new CurrencyDataImpl_0('RON', 'RON', 2));
  $put_1(result, 'RSD', new CurrencyDataImpl_0('RSD', 'din.', 0));
  $put_1(result, 'RUB', new CurrencyDataImpl_1('RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'));
  $put_1(result, 'RUR', new CurrencyDataImpl_0('RUR', 'RUR', 130));
  $put_1(result, 'RWF', new CurrencyDataImpl_0('RWF', 'RWF', 0));
  $put_1(result, 'SAR', new CurrencyDataImpl_1('SAR', 'SR', 2, 'SR'));
  $put_1(result, 'SBD', new CurrencyDataImpl_0('SBD', 'SI$', 2));
  $put_1(result, 'SCR', new CurrencyDataImpl_0('SCR', 'SRe', 2));
  $put_1(result, 'SDD', new CurrencyDataImpl_0('SDD', 'LSd', 130));
  $put_1(result, 'SDG', new CurrencyDataImpl_0('SDG', 'SDG', 2));
  $put_1(result, 'SDP', new CurrencyDataImpl_0('SDP', 'SDP', 130));
  $put_1(result, 'SEK', new CurrencyDataImpl_1('SEK', 'Skr', 2, 'kr'));
  $put_1(result, 'SGD', new CurrencyDataImpl_1('SGD', 'S$', 2, 'S$'));
  $put_1(result, 'SHP', new CurrencyDataImpl_0('SHP', 'SH\xA3', 2));
  $put_1(result, 'SIT', new CurrencyDataImpl_0('SIT', 'SIT', 130));
  $put_1(result, 'SKK', new CurrencyDataImpl_0('SKK', 'Sk', 130));
  $put_1(result, 'SLL', new CurrencyDataImpl_0('SLL', 'Le', 0));
  $put_1(result, 'SOS', new CurrencyDataImpl_0('SOS', 'Ssh', 0));
  $put_1(result, 'SRD', new CurrencyDataImpl_0('SRD', 'SR$', 2));
  $put_1(result, 'SRG', new CurrencyDataImpl_0('SRG', 'Sf', 130));
  $put_1(result, 'STD', new CurrencyDataImpl_0('STD', 'Db', 0));
  $put_1(result, 'SUR', new CurrencyDataImpl_0('SUR', 'SUR', 130));
  $put_1(result, 'SVC', new CurrencyDataImpl_0('SVC', 'SV\u20A1', 130));
  $put_1(result, 'SYP', new CurrencyDataImpl_0('SYP', 'SY\xA3', 0));
  $put_1(result, 'SZL', new CurrencyDataImpl_0('SZL', 'SZL', 2));
  $put_1(result, 'THB', new CurrencyDataImpl_1('THB', '\u0E3F', 2, 'THB'));
  $put_1(result, 'TJR', new CurrencyDataImpl_0('TJR', 'TJR', 130));
  $put_1(result, 'TJS', new CurrencyDataImpl_0('TJS', 'TJS', 2));
  $put_1(result, 'TMM', new CurrencyDataImpl_0('TMM', 'TMM', 128));
  $put_1(result, 'TMT', new CurrencyDataImpl_0('TMT', 'TMT', 2));
  $put_1(result, 'TND', new CurrencyDataImpl_0('TND', 'DT', 3));
  $put_1(result, 'TOP', new CurrencyDataImpl_0('TOP', 'T$', 2));
  $put_1(result, 'TPE', new CurrencyDataImpl_0('TPE', 'TPE', 130));
  $put_1(result, 'TRL', new CurrencyDataImpl_0('TRL', 'TRL', 128));
  $put_1(result, 'TRY', new CurrencyDataImpl_1('TRY', 'TL', 2, 'YTL'));
  $put_1(result, 'TTD', new CurrencyDataImpl_0('TTD', 'TT$', 2));
  $put_1(result, 'TWD', new CurrencyDataImpl_1('TWD', 'NT$', 2, 'NT$'));
  $put_1(result, 'TZS', new CurrencyDataImpl_0('TZS', 'TSh', 0));
  $put_1(result, 'UAH', new CurrencyDataImpl_0('UAH', '\u20B4', 2));
  $put_1(result, 'UAK', new CurrencyDataImpl_0('UAK', 'UAK', 130));
  $put_1(result, 'UGS', new CurrencyDataImpl_0('UGS', 'UGS', 130));
  $put_1(result, 'UGX', new CurrencyDataImpl_0('UGX', 'USh', 0));
  $put_1(result, 'USD', new CurrencyDataImpl_1('USD', '$', 2, 'US$'));
  $put_1(result, 'USN', new CurrencyDataImpl_0('USN', 'USN', 2));
  $put_1(result, 'USS', new CurrencyDataImpl_0('USS', 'USS', 2));
  $put_1(result, 'UYI', new CurrencyDataImpl_0('UYI', 'UYI', 2));
  $put_1(result, 'UYP', new CurrencyDataImpl_0('UYP', 'UYP', 130));
  $put_1(result, 'UYU', new CurrencyDataImpl_1('UYU', '$U', 2, 'UY$'));
  $put_1(result, 'UZS', new CurrencyDataImpl_0('UZS', 'UZS', 0));
  $put_1(result, 'VEB', new CurrencyDataImpl_0('VEB', 'VEB', 130));
  $put_1(result, 'VEF', new CurrencyDataImpl_0('VEF', 'Bs.F.', 2));
  $put_1(result, 'VND', new CurrencyDataImpl_1('VND', '\u20AB', 24, '\u20AB'));
  $put_1(result, 'VNN', new CurrencyDataImpl_0('VNN', 'VNN', 130));
  $put_1(result, 'VUV', new CurrencyDataImpl_0('VUV', 'VT', 0));
  $put_1(result, 'WST', new CurrencyDataImpl_0('WST', 'WS$', 2));
  $put_1(result, 'XAF', new CurrencyDataImpl_0('XAF', 'FCFA', 0));
  $put_1(result, 'XAG', new CurrencyDataImpl_0('XAG', 'XAG', 2));
  $put_1(result, 'XAU', new CurrencyDataImpl_0('XAU', 'XAU', 2));
  $put_1(result, 'XBA', new CurrencyDataImpl_0('XBA', 'XBA', 2));
  $put_1(result, 'XBB', new CurrencyDataImpl_0('XBB', 'XBB', 2));
  $put_1(result, 'XBC', new CurrencyDataImpl_0('XBC', 'XBC', 2));
  $put_1(result, 'XBD', new CurrencyDataImpl_0('XBD', 'XBD', 2));
  $put_1(result, 'XCD', new CurrencyDataImpl_0('XCD', 'EC$', 2));
  $put_1(result, 'XDR', new CurrencyDataImpl_0('XDR', 'XDR', 2));
  $put_1(result, 'XEU', new CurrencyDataImpl_0('XEU', 'XEU', 2));
  $put_1(result, 'XFO', new CurrencyDataImpl_0('XFO', 'XFO', 2));
  $put_1(result, 'XFU', new CurrencyDataImpl_0('XFU', 'XFU', 2));
  $put_1(result, 'XOF', new CurrencyDataImpl_0('XOF', 'CFA', 0));
  $put_1(result, 'XPD', new CurrencyDataImpl_0('XPD', 'XPD', 2));
  $put_1(result, 'XPF', new CurrencyDataImpl_0('XPF', 'CFPF', 0));
  $put_1(result, 'XPT', new CurrencyDataImpl_0('XPT', 'XPT', 2));
  $put_1(result, 'XRE', new CurrencyDataImpl_0('XRE', 'XRE', 2));
  $put_1(result, 'XTS', new CurrencyDataImpl_0('XTS', 'XTS', 2));
  $put_1(result, 'XXX', new CurrencyDataImpl_0('XXX', 'XXX', 2));
  $put_1(result, 'YDD', new CurrencyDataImpl_0('YDD', 'YDD', 130));
  $put_1(result, 'YER', new CurrencyDataImpl_1('YER', 'YR', 0, 'YER'));
  $put_1(result, 'YUD', new CurrencyDataImpl_0('YUD', 'YUD', 130));
  $put_1(result, 'YUM', new CurrencyDataImpl_0('YUM', 'YUM', 130));
  $put_1(result, 'YUN', new CurrencyDataImpl_0('YUN', 'YUN', 130));
  $put_1(result, 'YUR', new CurrencyDataImpl_0('YUR', 'YUR', 130));
  $put_1(result, 'ZAL', new CurrencyDataImpl_0('ZAL', 'ZAL', 2));
  $put_1(result, 'ZAR', new CurrencyDataImpl_1('ZAR', 'R', 2, 'ZAR'));
  $put_1(result, 'ZMK', new CurrencyDataImpl_0('ZMK', 'ZK', 0));
  $put_1(result, 'ZRN', new CurrencyDataImpl_0('ZRN', 'NZ', 130));
  $put_1(result, 'ZRZ', new CurrencyDataImpl_0('ZRZ', 'ZRZ', 130));
  $put_1(result, 'ZWD', new CurrencyDataImpl_0('ZWD', 'Z$', 128));
  $put_1(result, 'ZWL', new CurrencyDataImpl_0('ZWL', 'ZWL', 2));
  $put_1(result, 'ZWR', new CurrencyDataImpl_0('ZWR', 'ZWR', 130));
  return result;
}
;
_.loadCurrencyMapNative = function loadCurrencyMapNative_14(){
  return overrideMap($loadCurrencyMapNative_1(this), $loadMyCurrencyMapOverridesNative_13());
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
function $$init_141(){
}

function $loadMyCurrencyMapOverridesNative_14(){
  return {ADP:['ADP', 'ADP', 128], AED:['AED', 'DH', 2, 'DH'], AFA:['AFA', 'AFA', 130], AFN:['AFN', 'Af', 0], ALL:['ALL', 'ALL', 0], AMD:['AMD', 'AMD', 0], ANG:['ANG', 'NAf.', 2], AOA:['AOA', 'Kz', 2], AOK:['AOK', 'AOK', 130], AON:['AON', 'AON', 130], AOR:['AOR', 'AOR', 130], ARA:['ARA', '\u20B3', 130], ARL:['ARL', '$L', 130], ARM:['ARM', 'm$n', 130], ARP:['ARP', 'ARP', 130], ARS:['ARS', 'AR$', 2, 'AR$'], ATS:['ATS', 'ATS', 130], AUD:['AUD', 'AU$', 2, 'AU$'], AWG:['AWG', 'Afl.', 2], AZM:['AZM', 'AZM', 130], AZN:['AZN', 'man.', 2], BAD:['BAD', 'BAD', 130], BAM:['BAM', 'KM', 2], BAN:['BAN', 'BAN', 130], BBD:['BBD', 'Bds$', 2], BDT:['BDT', 'Tk', 2, 'Tk'], BEC:['BEC', 'BEC', 2], BEF:['BEF', 'BF', 130], BEL:['BEL', 'BEL', 2], BGL:['BGL', 'BGL', 130], BGM:['BGM', 'BGM', 130], BGN:['BGN', 'BGN', 2], BGO:['BGO', 'BGO', 130], BHD:['BHD', 'BD', 3], BIF:['BIF', 'FBu', 0], BMD:['BMD', 'BD$', 2], BND:['BND', 'BN$', 2], BOB:['BOB', 'Bs', 2], BOL:['BOL', 'BOL', 130], BOP:['BOP', '$b.', 130], BOV:['BOV', 'BOV', 2], BRB:['BRB', 'BRB', 130], BRC:['BRC', 'BRC', 130], BRE:['BRE', 'BRE', 130], BRL:['BRL', 'R$', 2, 'R$'], BRN:['BRN', 'BRN', 130], BRR:['BRR', 'BRR', 130], BRZ:['BRZ', 'BRZ', 130], BSD:['BSD', 'BS$', 2], BTN:['BTN', 'Nu.', 2], BUK:['BUK', 'BUK', 130], BWP:['BWP', 'BWP', 2], BYB:['BYB', 'BYB', 130], BYR:['BYR', 'BYR', 0], BZD:['BZD', 'BZ$', 2], CAD:['CAD', 'CA$', 2, 'C$'], CDF:['CDF', 'CDF', 2], CHE:['CHE', 'CHE', 2], CHF:['CHF', 'Fr.', 2, 'CHF'], CHW:['CHW', 'CHW', 2], CLE:['CLE', 'E\xBA', 130], CLF:['CLF', 'CLF', 0], CLP:['CLP', 'CL$', 0, 'CL$'], CNY:['CNY', 'CN\xA5', 2, 'RMB\xA5'], COP:['COP', 'CO$', 0, 'COL$'], COU:['COU', 'COU', 2], CRC:['CRC', '\u20A1', 0, 'CR\u20A1'], CSD:['CSD', 'CSD', 130], CSK:['CSK', 'CSK', 130], CUC:['CUC', 'CUC$', 2], CUP:['CUP', 'CU$', 2, '$MN'], CVE:['CVE', 'CV$', 2], CYP:['CYP', 'CY\xA3', 130], CZK:['CZK', 'K\u010D', 2, 'K\u010D'], DDM:['DDM', 'DDM', 130], DEM:['DEM', 'DM', 130], DJF:['DJF', 'Fdj', 0], DKK:['DKK', 'Dkr', 2, 'kr'], DOP:['DOP', 'RD$', 2, 'RD$'], DZD:['DZD', 'DA', 2], ECS:['ECS', 'ECS', 130], ECV:['ECV', 'ECV', 2], EEK:['EEK', 'Ekr', 2], EGP:['EGP', 'EG\xA3', 2, 'LE'], EQE:['EQE', 'EQE', 130], ERN:['ERN', 'Nfk', 2], ESA:['ESA', 'ESA', 2], ESB:['ESB', 'ESB', 2], ESP:['ESP', 'Pts', 128], ETB:['ETB', 'Br', 2], EUR:['EUR', '\u20AC', 2, '\u20AC'], FIM:['FIM', 'mk', 130], FJD:['FJD', 'FJ$', 2], FKP:['FKP', 'FK\xA3', 2], FRF:['FRF', '\u20A3', 130], GBP:['GBP', '\xA3', 2, 'GB\xA3'], GEK:['GEK', 'GEK', 130], GEL:['GEL', 'GEL', 2], GHC:['GHC', '\u20B5', 130], GHS:['GHS', 'GH\u20B5', 2], GIP:['GIP', 'GI\xA3', 2], GMD:['GMD', 'GMD', 2], GNF:['GNF', 'FG', 0], GNS:['GNS', 'GNS', 130], GQE:['GQE', 'GQE', 130], GRD:['GRD', '\u20AF', 130], GTQ:['GTQ', 'GTQ', 2], GWE:['GWE', 'GWE', 130], GWP:['GWP', 'GWP', 2], GYD:['GYD', 'GY$', 0], HKD:['HKD', 'HK$', 2, 'HK$'], HNL:['HNL', 'HNL', 2], HRD:['HRD', 'HRD', 130], HRK:['HRK', 'kn', 2], HTG:['HTG', 'HTG', 2], HUF:['HUF', 'Ft', 0], IDR:['IDR', 'Rp', 0], IEP:['IEP', 'IR\xA3', 130], ILP:['ILP', 'I\xA3', 130], ILR:['ILR', 'ILR', 130], ILS:['ILS', '\u20AA', 2, 'IL\u20AA'], INR:['INR', 'Rs', 2, 'Rs'], IQD:['IQD', 'IQD', 0], IRR:['IRR', 'IRR', 0], ISJ:['ISJ', 'ISJ', 130], ISK:['ISK', 'Ikr', 0, 'kr'], ITL:['ITL', 'IT\u20A4', 128], JMD:['JMD', 'J$', 2, 'JA$'], JOD:['JOD', 'JD', 3], JPY:['JPY', '\xA5', 0, 'JP\xA5'], KES:['KES', 'Ksh', 2], KGS:['KGS', 'KGS', 2], KHR:['KHR', 'KHR', 2], KMF:['KMF', 'CF', 0], KPW:['KPW', 'KPW', 0], KRH:['KRH', 'KRH', 130], KRO:['KRO', 'KRO', 130], KRW:['KRW', '\u20A9', 0, 'KR\u20A9'], KWD:['KWD', 'KD', 3], KYD:['KYD', 'KY$', 2], KZT:['KZT', 'KZT', 2], LAK:['LAK', '\u20AD', 0], LBP:['LBP', 'LB\xA3', 0], LKR:['LKR', 'SLRs', 2, 'SLRs'], LRD:['LRD', 'L$', 2], LSL:['LSL', 'LSL', 2], LSM:['LSM', 'LSM', 130], LTL:['LTL', 'Lt', 2], LTT:['LTT', 'LTT', 130], LUC:['LUC', 'LUC', 2], LUF:['LUF', 'LUF', 128], LUL:['LUL', 'LUL', 2], LVL:['LVL', 'Ls', 2], LVR:['LVR', 'LVR', 130], LYD:['LYD', 'LD', 3], MAD:['MAD', 'MAD', 2], MAF:['MAF', 'MAF', 130], MCF:['MCF', 'MCF', 130], MDC:['MDC', 'MDC', 130], MDL:['MDL', 'MDL', 2], MGA:['MGA', 'MGA', 0], MGF:['MGF', 'MGF', 128], MKD:['MKD', 'MKD', 2], MKN:['MKN', 'MKN', 130], MLF:['MLF', 'MLF', 130], MMK:['MMK', 'MMK', 0], MNT:['MNT', '\u20AE', 0, 'MN\u20AE'], MOP:['MOP', 'MOP$', 2], MRO:['MRO', 'UM', 0], MTL:['MTL', 'Lm', 130], MTP:['MTP', 'MT\xA3', 130], MUR:['MUR', 'MURs', 0], MVP:['MVP', 'MVP', 130], MVR:['MVR', 'MVR', 2], MWK:['MWK', 'MWK', 2], MXN:['MXN', 'Mex$', 2, 'Mex$'], MXP:['MXP', 'MX$', 130], MXV:['MXV', 'MXV', 2], MYR:['MYR', 'RM', 2, 'RM'], MZE:['MZE', 'MZE', 130], MZM:['MZM', 'Mt', 130], MZN:['MZN', 'MTn', 2], NAD:['NAD', 'N$', 2], NGN:['NGN', '\u20A6', 2], NIC:['NIC', 'NIC', 130], NIO:['NIO', 'C$', 2], NLG:['NLG', 'fl', 130], NOK:['NOK', 'Nkr', 2, 'NOkr'], NPR:['NPR', 'NPRs', 2], NZD:['NZD', 'NZ$', 2], OMR:['OMR', 'OMR', 3], PAB:['PAB', 'B/.', 2, 'B/.'], PEI:['PEI', 'I/.', 130], PEN:['PEN', 'S/.', 2, 'S/.'], PES:['PES', 'PES', 130], PGK:['PGK', 'PGK', 2], PHP:['PHP', '\u20B1', 2, 'PHP'], PKR:['PKR', 'PKRs', 0, 'PKRs.'], PLN:['PLN', 'z\u0142', 2], PLZ:['PLZ', 'PLZ', 130], PTE:['PTE', 'Esc', 130], PYG:['PYG', '\u20B2', 0], QAR:['QAR', 'QR', 2], RHD:['RHD', 'RH$', 130], ROL:['ROL', 'ROL', 130], RON:['RON', 'RON', 2], RSD:['RSD', 'din.', 0], RUB:['RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'], RUR:['RUR', 'RUR', 130], RWF:['RWF', 'RWF', 0], SAR:['SAR', 'SR', 2, 'SR'], SBD:['SBD', 'SI$', 2], SCR:['SCR', 'SRe', 2], SDD:['SDD', 'LSd', 130], SDG:['SDG', 'SDG', 2], SDP:['SDP', 'SDP', 130], SEK:['SEK', 'Skr', 2, 'kr'], SGD:['SGD', '$', 2, 'S$'], SHP:['SHP', 'SH\xA3', 2], SIT:['SIT', 'SIT', 130], SKK:['SKK', 'Sk', 130], SLL:['SLL', 'Le', 0], SOS:['SOS', 'Ssh', 0], SRD:['SRD', 'SR$', 2], SRG:['SRG', 'Sf', 130], STD:['STD', 'Db', 0], SUR:['SUR', 'SUR', 130], SVC:['SVC', 'SV\u20A1', 130], SYP:['SYP', 'SY\xA3', 0], SZL:['SZL', 'SZL', 2], THB:['THB', '\u0E3F', 2, 'THB'], TJR:['TJR', 'TJR', 130], TJS:['TJS', 'TJS', 2], TMM:['TMM', 'TMM', 128], TMT:['TMT', 'TMT', 2], TND:['TND', 'DT', 3], TOP:['TOP', 'T$', 2], TPE:['TPE', 'TPE', 130], TRL:['TRL', 'TRL', 128], TRY:['TRY', 'TL', 2, 'YTL'], TTD:['TTD', 'TT$', 2], TWD:['TWD', 'NT$', 2, 'NT$'], TZS:['TZS', 'TSh', 0], UAH:['UAH', '\u20B4', 2], UAK:['UAK', 'UAK', 130], UGS:['UGS', 'UGS', 130], UGX:['UGX', 'USh', 0], USD:['USD', 'US$', 2, 'US$'], USN:['USN', 'USN', 2], USS:['USS', 'USS', 2], UYI:['UYI', 'UYI', 2], UYP:['UYP', 'UYP', 130], UYU:['UYU', '$U', 2, 'UY$'], UZS:['UZS', 'UZS', 0], VEB:['VEB', 'VEB', 130], VEF:['VEF', 'Bs.F.', 2], VND:['VND', '\u20AB', 24, '\u20AB'], VNN:['VNN', 'VNN', 130], VUV:['VUV', 'VT', 0], WST:['WST', 'WS$', 2], XAF:['XAF', 'FCFA', 0], XAG:['XAG', 'XAG', 2], XAU:['XAU', 'XAU', 2], XBA:['XBA', 'XBA', 2], XBB:['XBB', 'XBB', 2], XBC:['XBC', 'XBC', 2], XBD:['XBD', 'XBD', 2], XCD:['XCD', 'EC$', 2], XDR:['XDR', 'XDR', 2], XEU:['XEU', 'XEU', 2], XFO:['XFO', 'XFO', 2], XFU:['XFU', 'XFU', 2], XOF:['XOF', 'CFA', 0], XPD:['XPD', 'XPD', 2], XPF:['XPF', 'CFPF', 0], XPT:['XPT', 'XPT', 2], XRE:['XRE', 'XRE', 2], XTS:['XTS', 'XTS', 2], XXX:['XXX', 'XXX', 2], YDD:['YDD', 'YDD', 130], YER:['YER', 'YR', 0, 'YER'], YUD:['YUD', 'YUD', 130], YUM:['YUM', 'YUM', 130], YUN:['YUN', 'YUN', 130], YUR:['YUR', 'YUR', 130], ZAL:['ZAL', 'ZAL', 2], ZAR:['ZAR', 'R', 2, 'ZAR'], ZMK:['ZMK', 'ZK', 0], ZRN:['ZRN', 'NZ', 130], ZRZ:['ZRZ', 'ZRZ', 130], ZWD:['ZWD', 'Z$', 128], ZWL:['ZWL', 'ZWL', 2], ZWR:['ZWR', 'ZWR', 130]};
}

function CurrencyList_en_SG_0(){
  CurrencyList_en_0.call(this);
  $$init_141();
}

function CurrencyList_en_SG(){
}

_ = CurrencyList_en_SG_0.prototype = CurrencyList_en_SG.prototype = new CurrencyList_en;
_.getClass$ = function getClass_142(){
  return Lcom_google_gwt_i18n_client_CurrencyList_1en_1SG_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava_17(){
  return new CurrencyDataImpl_1('SGD', '$', 2, 'S$');
}
;
_.getDefaultNative = function getDefaultNative_17(){
  return ['SGD', '$', 2, 'S$'];
}
;
_.loadCurrencyMapJava = function loadCurrencyMapJava_15(){
  var result;
  result = $loadCurrencyMapJava_1(this);
  $put_1(result, 'ADP', new CurrencyDataImpl_0('ADP', 'ADP', 128));
  $put_1(result, 'AED', new CurrencyDataImpl_1('AED', 'DH', 2, 'DH'));
  $put_1(result, 'AFA', new CurrencyDataImpl_0('AFA', 'AFA', 130));
  $put_1(result, 'AFN', new CurrencyDataImpl_0('AFN', 'Af', 0));
  $put_1(result, 'ALL', new CurrencyDataImpl_0('ALL', 'ALL', 0));
  $put_1(result, 'AMD', new CurrencyDataImpl_0('AMD', 'AMD', 0));
  $put_1(result, 'ANG', new CurrencyDataImpl_0('ANG', 'NAf.', 2));
  $put_1(result, 'AOA', new CurrencyDataImpl_0('AOA', 'Kz', 2));
  $put_1(result, 'AOK', new CurrencyDataImpl_0('AOK', 'AOK', 130));
  $put_1(result, 'AON', new CurrencyDataImpl_0('AON', 'AON', 130));
  $put_1(result, 'AOR', new CurrencyDataImpl_0('AOR', 'AOR', 130));
  $put_1(result, 'ARA', new CurrencyDataImpl_0('ARA', '\u20B3', 130));
  $put_1(result, 'ARL', new CurrencyDataImpl_0('ARL', '$L', 130));
  $put_1(result, 'ARM', new CurrencyDataImpl_0('ARM', 'm$n', 130));
  $put_1(result, 'ARP', new CurrencyDataImpl_0('ARP', 'ARP', 130));
  $put_1(result, 'ARS', new CurrencyDataImpl_1('ARS', 'AR$', 2, 'AR$'));
  $put_1(result, 'ATS', new CurrencyDataImpl_0('ATS', 'ATS', 130));
  $put_1(result, 'AUD', new CurrencyDataImpl_1('AUD', 'AU$', 2, 'AU$'));
  $put_1(result, 'AWG', new CurrencyDataImpl_0('AWG', 'Afl.', 2));
  $put_1(result, 'AZM', new CurrencyDataImpl_0('AZM', 'AZM', 130));
  $put_1(result, 'AZN', new CurrencyDataImpl_0('AZN', 'man.', 2));
  $put_1(result, 'BAD', new CurrencyDataImpl_0('BAD', 'BAD', 130));
  $put_1(result, 'BAM', new CurrencyDataImpl_0('BAM', 'KM', 2));
  $put_1(result, 'BAN', new CurrencyDataImpl_0('BAN', 'BAN', 130));
  $put_1(result, 'BBD', new CurrencyDataImpl_0('BBD', 'Bds$', 2));
  $put_1(result, 'BDT', new CurrencyDataImpl_1('BDT', 'Tk', 2, 'Tk'));
  $put_1(result, 'BEC', new CurrencyDataImpl_0('BEC', 'BEC', 2));
  $put_1(result, 'BEF', new CurrencyDataImpl_0('BEF', 'BF', 130));
  $put_1(result, 'BEL', new CurrencyDataImpl_0('BEL', 'BEL', 2));
  $put_1(result, 'BGL', new CurrencyDataImpl_0('BGL', 'BGL', 130));
  $put_1(result, 'BGM', new CurrencyDataImpl_0('BGM', 'BGM', 130));
  $put_1(result, 'BGN', new CurrencyDataImpl_0('BGN', 'BGN', 2));
  $put_1(result, 'BGO', new CurrencyDataImpl_0('BGO', 'BGO', 130));
  $put_1(result, 'BHD', new CurrencyDataImpl_0('BHD', 'BD', 3));
  $put_1(result, 'BIF', new CurrencyDataImpl_0('BIF', 'FBu', 0));
  $put_1(result, 'BMD', new CurrencyDataImpl_0('BMD', 'BD$', 2));
  $put_1(result, 'BND', new CurrencyDataImpl_0('BND', 'BN$', 2));
  $put_1(result, 'BOB', new CurrencyDataImpl_0('BOB', 'Bs', 2));
  $put_1(result, 'BOL', new CurrencyDataImpl_0('BOL', 'BOL', 130));
  $put_1(result, 'BOP', new CurrencyDataImpl_0('BOP', '$b.', 130));
  $put_1(result, 'BOV', new CurrencyDataImpl_0('BOV', 'BOV', 2));
  $put_1(result, 'BRB', new CurrencyDataImpl_0('BRB', 'BRB', 130));
  $put_1(result, 'BRC', new CurrencyDataImpl_0('BRC', 'BRC', 130));
  $put_1(result, 'BRE', new CurrencyDataImpl_0('BRE', 'BRE', 130));
  $put_1(result, 'BRL', new CurrencyDataImpl_1('BRL', 'R$', 2, 'R$'));
  $put_1(result, 'BRN', new CurrencyDataImpl_0('BRN', 'BRN', 130));
  $put_1(result, 'BRR', new CurrencyDataImpl_0('BRR', 'BRR', 130));
  $put_1(result, 'BRZ', new CurrencyDataImpl_0('BRZ', 'BRZ', 130));
  $put_1(result, 'BSD', new CurrencyDataImpl_0('BSD', 'BS$', 2));
  $put_1(result, 'BTN', new CurrencyDataImpl_0('BTN', 'Nu.', 2));
  $put_1(result, 'BUK', new CurrencyDataImpl_0('BUK', 'BUK', 130));
  $put_1(result, 'BWP', new CurrencyDataImpl_0('BWP', 'BWP', 2));
  $put_1(result, 'BYB', new CurrencyDataImpl_0('BYB', 'BYB', 130));
  $put_1(result, 'BYR', new CurrencyDataImpl_0('BYR', 'BYR', 0));
  $put_1(result, 'BZD', new CurrencyDataImpl_0('BZD', 'BZ$', 2));
  $put_1(result, 'CAD', new CurrencyDataImpl_1('CAD', 'CA$', 2, 'C$'));
  $put_1(result, 'CDF', new CurrencyDataImpl_0('CDF', 'CDF', 2));
  $put_1(result, 'CHE', new CurrencyDataImpl_0('CHE', 'CHE', 2));
  $put_1(result, 'CHF', new CurrencyDataImpl_1('CHF', 'Fr.', 2, 'CHF'));
  $put_1(result, 'CHW', new CurrencyDataImpl_0('CHW', 'CHW', 2));
  $put_1(result, 'CLE', new CurrencyDataImpl_0('CLE', 'E\xBA', 130));
  $put_1(result, 'CLF', new CurrencyDataImpl_0('CLF', 'CLF', 0));
  $put_1(result, 'CLP', new CurrencyDataImpl_1('CLP', 'CL$', 0, 'CL$'));
  $put_1(result, 'CNY', new CurrencyDataImpl_1('CNY', 'CN\xA5', 2, 'RMB\xA5'));
  $put_1(result, 'COP', new CurrencyDataImpl_1('COP', 'CO$', 0, 'COL$'));
  $put_1(result, 'COU', new CurrencyDataImpl_0('COU', 'COU', 2));
  $put_1(result, 'CRC', new CurrencyDataImpl_1('CRC', '\u20A1', 0, 'CR\u20A1'));
  $put_1(result, 'CSD', new CurrencyDataImpl_0('CSD', 'CSD', 130));
  $put_1(result, 'CSK', new CurrencyDataImpl_0('CSK', 'CSK', 130));
  $put_1(result, 'CUC', new CurrencyDataImpl_0('CUC', 'CUC$', 2));
  $put_1(result, 'CUP', new CurrencyDataImpl_1('CUP', 'CU$', 2, '$MN'));
  $put_1(result, 'CVE', new CurrencyDataImpl_0('CVE', 'CV$', 2));
  $put_1(result, 'CYP', new CurrencyDataImpl_0('CYP', 'CY\xA3', 130));
  $put_1(result, 'CZK', new CurrencyDataImpl_1('CZK', 'K\u010D', 2, 'K\u010D'));
  $put_1(result, 'DDM', new CurrencyDataImpl_0('DDM', 'DDM', 130));
  $put_1(result, 'DEM', new CurrencyDataImpl_0('DEM', 'DM', 130));
  $put_1(result, 'DJF', new CurrencyDataImpl_0('DJF', 'Fdj', 0));
  $put_1(result, 'DKK', new CurrencyDataImpl_1('DKK', 'Dkr', 2, 'kr'));
  $put_1(result, 'DOP', new CurrencyDataImpl_1('DOP', 'RD$', 2, 'RD$'));
  $put_1(result, 'DZD', new CurrencyDataImpl_0('DZD', 'DA', 2));
  $put_1(result, 'ECS', new CurrencyDataImpl_0('ECS', 'ECS', 130));
  $put_1(result, 'ECV', new CurrencyDataImpl_0('ECV', 'ECV', 2));
  $put_1(result, 'EEK', new CurrencyDataImpl_0('EEK', 'Ekr', 2));
  $put_1(result, 'EGP', new CurrencyDataImpl_1('EGP', 'EG\xA3', 2, 'LE'));
  $put_1(result, 'EQE', new CurrencyDataImpl_0('EQE', 'EQE', 130));
  $put_1(result, 'ERN', new CurrencyDataImpl_0('ERN', 'Nfk', 2));
  $put_1(result, 'ESA', new CurrencyDataImpl_0('ESA', 'ESA', 2));
  $put_1(result, 'ESB', new CurrencyDataImpl_0('ESB', 'ESB', 2));
  $put_1(result, 'ESP', new CurrencyDataImpl_0('ESP', 'Pts', 128));
  $put_1(result, 'ETB', new CurrencyDataImpl_0('ETB', 'Br', 2));
  $put_1(result, 'EUR', new CurrencyDataImpl_1('EUR', '\u20AC', 2, '\u20AC'));
  $put_1(result, 'FIM', new CurrencyDataImpl_0('FIM', 'mk', 130));
  $put_1(result, 'FJD', new CurrencyDataImpl_0('FJD', 'FJ$', 2));
  $put_1(result, 'FKP', new CurrencyDataImpl_0('FKP', 'FK\xA3', 2));
  $put_1(result, 'FRF', new CurrencyDataImpl_0('FRF', '\u20A3', 130));
  $put_1(result, 'GBP', new CurrencyDataImpl_1('GBP', '\xA3', 2, 'GB\xA3'));
  $put_1(result, 'GEK', new CurrencyDataImpl_0('GEK', 'GEK', 130));
  $put_1(result, 'GEL', new CurrencyDataImpl_0('GEL', 'GEL', 2));
  $put_1(result, 'GHC', new CurrencyDataImpl_0('GHC', '\u20B5', 130));
  $put_1(result, 'GHS', new CurrencyDataImpl_0('GHS', 'GH\u20B5', 2));
  $put_1(result, 'GIP', new CurrencyDataImpl_0('GIP', 'GI\xA3', 2));
  $put_1(result, 'GMD', new CurrencyDataImpl_0('GMD', 'GMD', 2));
  $put_1(result, 'GNF', new CurrencyDataImpl_0('GNF', 'FG', 0));
  $put_1(result, 'GNS', new CurrencyDataImpl_0('GNS', 'GNS', 130));
  $put_1(result, 'GQE', new CurrencyDataImpl_0('GQE', 'GQE', 130));
  $put_1(result, 'GRD', new CurrencyDataImpl_0('GRD', '\u20AF', 130));
  $put_1(result, 'GTQ', new CurrencyDataImpl_0('GTQ', 'GTQ', 2));
  $put_1(result, 'GWE', new CurrencyDataImpl_0('GWE', 'GWE', 130));
  $put_1(result, 'GWP', new CurrencyDataImpl_0('GWP', 'GWP', 2));
  $put_1(result, 'GYD', new CurrencyDataImpl_0('GYD', 'GY$', 0));
  $put_1(result, 'HKD', new CurrencyDataImpl_1('HKD', 'HK$', 2, 'HK$'));
  $put_1(result, 'HNL', new CurrencyDataImpl_0('HNL', 'HNL', 2));
  $put_1(result, 'HRD', new CurrencyDataImpl_0('HRD', 'HRD', 130));
  $put_1(result, 'HRK', new CurrencyDataImpl_0('HRK', 'kn', 2));
  $put_1(result, 'HTG', new CurrencyDataImpl_0('HTG', 'HTG', 2));
  $put_1(result, 'HUF', new CurrencyDataImpl_0('HUF', 'Ft', 0));
  $put_1(result, 'IDR', new CurrencyDataImpl_0('IDR', 'Rp', 0));
  $put_1(result, 'IEP', new CurrencyDataImpl_0('IEP', 'IR\xA3', 130));
  $put_1(result, 'ILP', new CurrencyDataImpl_0('ILP', 'I\xA3', 130));
  $put_1(result, 'ILR', new CurrencyDataImpl_0('ILR', 'ILR', 130));
  $put_1(result, 'ILS', new CurrencyDataImpl_1('ILS', '\u20AA', 2, 'IL\u20AA'));
  $put_1(result, 'INR', new CurrencyDataImpl_1('INR', 'Rs', 2, 'Rs'));
  $put_1(result, 'IQD', new CurrencyDataImpl_0('IQD', 'IQD', 0));
  $put_1(result, 'IRR', new CurrencyDataImpl_0('IRR', 'IRR', 0));
  $put_1(result, 'ISJ', new CurrencyDataImpl_0('ISJ', 'ISJ', 130));
  $put_1(result, 'ISK', new CurrencyDataImpl_1('ISK', 'Ikr', 0, 'kr'));
  $put_1(result, 'ITL', new CurrencyDataImpl_0('ITL', 'IT\u20A4', 128));
  $put_1(result, 'JMD', new CurrencyDataImpl_1('JMD', 'J$', 2, 'JA$'));
  $put_1(result, 'JOD', new CurrencyDataImpl_0('JOD', 'JD', 3));
  $put_1(result, 'JPY', new CurrencyDataImpl_1('JPY', '\xA5', 0, 'JP\xA5'));
  $put_1(result, 'KES', new CurrencyDataImpl_0('KES', 'Ksh', 2));
  $put_1(result, 'KGS', new CurrencyDataImpl_0('KGS', 'KGS', 2));
  $put_1(result, 'KHR', new CurrencyDataImpl_0('KHR', 'KHR', 2));
  $put_1(result, 'KMF', new CurrencyDataImpl_0('KMF', 'CF', 0));
  $put_1(result, 'KPW', new CurrencyDataImpl_0('KPW', 'KPW', 0));
  $put_1(result, 'KRH', new CurrencyDataImpl_0('KRH', 'KRH', 130));
  $put_1(result, 'KRO', new CurrencyDataImpl_0('KRO', 'KRO', 130));
  $put_1(result, 'KRW', new CurrencyDataImpl_1('KRW', '\u20A9', 0, 'KR\u20A9'));
  $put_1(result, 'KWD', new CurrencyDataImpl_0('KWD', 'KD', 3));
  $put_1(result, 'KYD', new CurrencyDataImpl_0('KYD', 'KY$', 2));
  $put_1(result, 'KZT', new CurrencyDataImpl_0('KZT', 'KZT', 2));
  $put_1(result, 'LAK', new CurrencyDataImpl_0('LAK', '\u20AD', 0));
  $put_1(result, 'LBP', new CurrencyDataImpl_0('LBP', 'LB\xA3', 0));
  $put_1(result, 'LKR', new CurrencyDataImpl_1('LKR', 'SLRs', 2, 'SLRs'));
  $put_1(result, 'LRD', new CurrencyDataImpl_0('LRD', 'L$', 2));
  $put_1(result, 'LSL', new CurrencyDataImpl_0('LSL', 'LSL', 2));
  $put_1(result, 'LSM', new CurrencyDataImpl_0('LSM', 'LSM', 130));
  $put_1(result, 'LTL', new CurrencyDataImpl_0('LTL', 'Lt', 2));
  $put_1(result, 'LTT', new CurrencyDataImpl_0('LTT', 'LTT', 130));
  $put_1(result, 'LUC', new CurrencyDataImpl_0('LUC', 'LUC', 2));
  $put_1(result, 'LUF', new CurrencyDataImpl_0('LUF', 'LUF', 128));
  $put_1(result, 'LUL', new CurrencyDataImpl_0('LUL', 'LUL', 2));
  $put_1(result, 'LVL', new CurrencyDataImpl_0('LVL', 'Ls', 2));
  $put_1(result, 'LVR', new CurrencyDataImpl_0('LVR', 'LVR', 130));
  $put_1(result, 'LYD', new CurrencyDataImpl_0('LYD', 'LD', 3));
  $put_1(result, 'MAD', new CurrencyDataImpl_0('MAD', 'MAD', 2));
  $put_1(result, 'MAF', new CurrencyDataImpl_0('MAF', 'MAF', 130));
  $put_1(result, 'MCF', new CurrencyDataImpl_0('MCF', 'MCF', 130));
  $put_1(result, 'MDC', new CurrencyDataImpl_0('MDC', 'MDC', 130));
  $put_1(result, 'MDL', new CurrencyDataImpl_0('MDL', 'MDL', 2));
  $put_1(result, 'MGA', new CurrencyDataImpl_0('MGA', 'MGA', 0));
  $put_1(result, 'MGF', new CurrencyDataImpl_0('MGF', 'MGF', 128));
  $put_1(result, 'MKD', new CurrencyDataImpl_0('MKD', 'MKD', 2));
  $put_1(result, 'MKN', new CurrencyDataImpl_0('MKN', 'MKN', 130));
  $put_1(result, 'MLF', new CurrencyDataImpl_0('MLF', 'MLF', 130));
  $put_1(result, 'MMK', new CurrencyDataImpl_0('MMK', 'MMK', 0));
  $put_1(result, 'MNT', new CurrencyDataImpl_1('MNT', '\u20AE', 0, 'MN\u20AE'));
  $put_1(result, 'MOP', new CurrencyDataImpl_0('MOP', 'MOP$', 2));
  $put_1(result, 'MRO', new CurrencyDataImpl_0('MRO', 'UM', 0));
  $put_1(result, 'MTL', new CurrencyDataImpl_0('MTL', 'Lm', 130));
  $put_1(result, 'MTP', new CurrencyDataImpl_0('MTP', 'MT\xA3', 130));
  $put_1(result, 'MUR', new CurrencyDataImpl_0('MUR', 'MURs', 0));
  $put_1(result, 'MVP', new CurrencyDataImpl_0('MVP', 'MVP', 130));
  $put_1(result, 'MVR', new CurrencyDataImpl_0('MVR', 'MVR', 2));
  $put_1(result, 'MWK', new CurrencyDataImpl_0('MWK', 'MWK', 2));
  $put_1(result, 'MXN', new CurrencyDataImpl_1('MXN', 'Mex$', 2, 'Mex$'));
  $put_1(result, 'MXP', new CurrencyDataImpl_0('MXP', 'MX$', 130));
  $put_1(result, 'MXV', new CurrencyDataImpl_0('MXV', 'MXV', 2));
  $put_1(result, 'MYR', new CurrencyDataImpl_1('MYR', 'RM', 2, 'RM'));
  $put_1(result, 'MZE', new CurrencyDataImpl_0('MZE', 'MZE', 130));
  $put_1(result, 'MZM', new CurrencyDataImpl_0('MZM', 'Mt', 130));
  $put_1(result, 'MZN', new CurrencyDataImpl_0('MZN', 'MTn', 2));
  $put_1(result, 'NAD', new CurrencyDataImpl_0('NAD', 'N$', 2));
  $put_1(result, 'NGN', new CurrencyDataImpl_0('NGN', '\u20A6', 2));
  $put_1(result, 'NIC', new CurrencyDataImpl_0('NIC', 'NIC', 130));
  $put_1(result, 'NIO', new CurrencyDataImpl_0('NIO', 'C$', 2));
  $put_1(result, 'NLG', new CurrencyDataImpl_0('NLG', 'fl', 130));
  $put_1(result, 'NOK', new CurrencyDataImpl_1('NOK', 'Nkr', 2, 'NOkr'));
  $put_1(result, 'NPR', new CurrencyDataImpl_0('NPR', 'NPRs', 2));
  $put_1(result, 'NZD', new CurrencyDataImpl_0('NZD', 'NZ$', 2));
  $put_1(result, 'OMR', new CurrencyDataImpl_0('OMR', 'OMR', 3));
  $put_1(result, 'PAB', new CurrencyDataImpl_1('PAB', 'B/.', 2, 'B/.'));
  $put_1(result, 'PEI', new CurrencyDataImpl_0('PEI', 'I/.', 130));
  $put_1(result, 'PEN', new CurrencyDataImpl_1('PEN', 'S/.', 2, 'S/.'));
  $put_1(result, 'PES', new CurrencyDataImpl_0('PES', 'PES', 130));
  $put_1(result, 'PGK', new CurrencyDataImpl_0('PGK', 'PGK', 2));
  $put_1(result, 'PHP', new CurrencyDataImpl_1('PHP', '\u20B1', 2, 'PHP'));
  $put_1(result, 'PKR', new CurrencyDataImpl_1('PKR', 'PKRs', 0, 'PKRs.'));
  $put_1(result, 'PLN', new CurrencyDataImpl_0('PLN', 'z\u0142', 2));
  $put_1(result, 'PLZ', new CurrencyDataImpl_0('PLZ', 'PLZ', 130));
  $put_1(result, 'PTE', new CurrencyDataImpl_0('PTE', 'Esc', 130));
  $put_1(result, 'PYG', new CurrencyDataImpl_0('PYG', '\u20B2', 0));
  $put_1(result, 'QAR', new CurrencyDataImpl_0('QAR', 'QR', 2));
  $put_1(result, 'RHD', new CurrencyDataImpl_0('RHD', 'RH$', 130));
  $put_1(result, 'ROL', new CurrencyDataImpl_0('ROL', 'ROL', 130));
  $put_1(result, 'RON', new CurrencyDataImpl_0('RON', 'RON', 2));
  $put_1(result, 'RSD', new CurrencyDataImpl_0('RSD', 'din.', 0));
  $put_1(result, 'RUB', new CurrencyDataImpl_1('RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'));
  $put_1(result, 'RUR', new CurrencyDataImpl_0('RUR', 'RUR', 130));
  $put_1(result, 'RWF', new CurrencyDataImpl_0('RWF', 'RWF', 0));
  $put_1(result, 'SAR', new CurrencyDataImpl_1('SAR', 'SR', 2, 'SR'));
  $put_1(result, 'SBD', new CurrencyDataImpl_0('SBD', 'SI$', 2));
  $put_1(result, 'SCR', new CurrencyDataImpl_0('SCR', 'SRe', 2));
  $put_1(result, 'SDD', new CurrencyDataImpl_0('SDD', 'LSd', 130));
  $put_1(result, 'SDG', new CurrencyDataImpl_0('SDG', 'SDG', 2));
  $put_1(result, 'SDP', new CurrencyDataImpl_0('SDP', 'SDP', 130));
  $put_1(result, 'SEK', new CurrencyDataImpl_1('SEK', 'Skr', 2, 'kr'));
  $put_1(result, 'SGD', new CurrencyDataImpl_1('SGD', '$', 2, 'S$'));
  $put_1(result, 'SHP', new CurrencyDataImpl_0('SHP', 'SH\xA3', 2));
  $put_1(result, 'SIT', new CurrencyDataImpl_0('SIT', 'SIT', 130));
  $put_1(result, 'SKK', new CurrencyDataImpl_0('SKK', 'Sk', 130));
  $put_1(result, 'SLL', new CurrencyDataImpl_0('SLL', 'Le', 0));
  $put_1(result, 'SOS', new CurrencyDataImpl_0('SOS', 'Ssh', 0));
  $put_1(result, 'SRD', new CurrencyDataImpl_0('SRD', 'SR$', 2));
  $put_1(result, 'SRG', new CurrencyDataImpl_0('SRG', 'Sf', 130));
  $put_1(result, 'STD', new CurrencyDataImpl_0('STD', 'Db', 0));
  $put_1(result, 'SUR', new CurrencyDataImpl_0('SUR', 'SUR', 130));
  $put_1(result, 'SVC', new CurrencyDataImpl_0('SVC', 'SV\u20A1', 130));
  $put_1(result, 'SYP', new CurrencyDataImpl_0('SYP', 'SY\xA3', 0));
  $put_1(result, 'SZL', new CurrencyDataImpl_0('SZL', 'SZL', 2));
  $put_1(result, 'THB', new CurrencyDataImpl_1('THB', '\u0E3F', 2, 'THB'));
  $put_1(result, 'TJR', new CurrencyDataImpl_0('TJR', 'TJR', 130));
  $put_1(result, 'TJS', new CurrencyDataImpl_0('TJS', 'TJS', 2));
  $put_1(result, 'TMM', new CurrencyDataImpl_0('TMM', 'TMM', 128));
  $put_1(result, 'TMT', new CurrencyDataImpl_0('TMT', 'TMT', 2));
  $put_1(result, 'TND', new CurrencyDataImpl_0('TND', 'DT', 3));
  $put_1(result, 'TOP', new CurrencyDataImpl_0('TOP', 'T$', 2));
  $put_1(result, 'TPE', new CurrencyDataImpl_0('TPE', 'TPE', 130));
  $put_1(result, 'TRL', new CurrencyDataImpl_0('TRL', 'TRL', 128));
  $put_1(result, 'TRY', new CurrencyDataImpl_1('TRY', 'TL', 2, 'YTL'));
  $put_1(result, 'TTD', new CurrencyDataImpl_0('TTD', 'TT$', 2));
  $put_1(result, 'TWD', new CurrencyDataImpl_1('TWD', 'NT$', 2, 'NT$'));
  $put_1(result, 'TZS', new CurrencyDataImpl_0('TZS', 'TSh', 0));
  $put_1(result, 'UAH', new CurrencyDataImpl_0('UAH', '\u20B4', 2));
  $put_1(result, 'UAK', new CurrencyDataImpl_0('UAK', 'UAK', 130));
  $put_1(result, 'UGS', new CurrencyDataImpl_0('UGS', 'UGS', 130));
  $put_1(result, 'UGX', new CurrencyDataImpl_0('UGX', 'USh', 0));
  $put_1(result, 'USD', new CurrencyDataImpl_1('USD', 'US$', 2, 'US$'));
  $put_1(result, 'USN', new CurrencyDataImpl_0('USN', 'USN', 2));
  $put_1(result, 'USS', new CurrencyDataImpl_0('USS', 'USS', 2));
  $put_1(result, 'UYI', new CurrencyDataImpl_0('UYI', 'UYI', 2));
  $put_1(result, 'UYP', new CurrencyDataImpl_0('UYP', 'UYP', 130));
  $put_1(result, 'UYU', new CurrencyDataImpl_1('UYU', '$U', 2, 'UY$'));
  $put_1(result, 'UZS', new CurrencyDataImpl_0('UZS', 'UZS', 0));
  $put_1(result, 'VEB', new CurrencyDataImpl_0('VEB', 'VEB', 130));
  $put_1(result, 'VEF', new CurrencyDataImpl_0('VEF', 'Bs.F.', 2));
  $put_1(result, 'VND', new CurrencyDataImpl_1('VND', '\u20AB', 24, '\u20AB'));
  $put_1(result, 'VNN', new CurrencyDataImpl_0('VNN', 'VNN', 130));
  $put_1(result, 'VUV', new CurrencyDataImpl_0('VUV', 'VT', 0));
  $put_1(result, 'WST', new CurrencyDataImpl_0('WST', 'WS$', 2));
  $put_1(result, 'XAF', new CurrencyDataImpl_0('XAF', 'FCFA', 0));
  $put_1(result, 'XAG', new CurrencyDataImpl_0('XAG', 'XAG', 2));
  $put_1(result, 'XAU', new CurrencyDataImpl_0('XAU', 'XAU', 2));
  $put_1(result, 'XBA', new CurrencyDataImpl_0('XBA', 'XBA', 2));
  $put_1(result, 'XBB', new CurrencyDataImpl_0('XBB', 'XBB', 2));
  $put_1(result, 'XBC', new CurrencyDataImpl_0('XBC', 'XBC', 2));
  $put_1(result, 'XBD', new CurrencyDataImpl_0('XBD', 'XBD', 2));
  $put_1(result, 'XCD', new CurrencyDataImpl_0('XCD', 'EC$', 2));
  $put_1(result, 'XDR', new CurrencyDataImpl_0('XDR', 'XDR', 2));
  $put_1(result, 'XEU', new CurrencyDataImpl_0('XEU', 'XEU', 2));
  $put_1(result, 'XFO', new CurrencyDataImpl_0('XFO', 'XFO', 2));
  $put_1(result, 'XFU', new CurrencyDataImpl_0('XFU', 'XFU', 2));
  $put_1(result, 'XOF', new CurrencyDataImpl_0('XOF', 'CFA', 0));
  $put_1(result, 'XPD', new CurrencyDataImpl_0('XPD', 'XPD', 2));
  $put_1(result, 'XPF', new CurrencyDataImpl_0('XPF', 'CFPF', 0));
  $put_1(result, 'XPT', new CurrencyDataImpl_0('XPT', 'XPT', 2));
  $put_1(result, 'XRE', new CurrencyDataImpl_0('XRE', 'XRE', 2));
  $put_1(result, 'XTS', new CurrencyDataImpl_0('XTS', 'XTS', 2));
  $put_1(result, 'XXX', new CurrencyDataImpl_0('XXX', 'XXX', 2));
  $put_1(result, 'YDD', new CurrencyDataImpl_0('YDD', 'YDD', 130));
  $put_1(result, 'YER', new CurrencyDataImpl_1('YER', 'YR', 0, 'YER'));
  $put_1(result, 'YUD', new CurrencyDataImpl_0('YUD', 'YUD', 130));
  $put_1(result, 'YUM', new CurrencyDataImpl_0('YUM', 'YUM', 130));
  $put_1(result, 'YUN', new CurrencyDataImpl_0('YUN', 'YUN', 130));
  $put_1(result, 'YUR', new CurrencyDataImpl_0('YUR', 'YUR', 130));
  $put_1(result, 'ZAL', new CurrencyDataImpl_0('ZAL', 'ZAL', 2));
  $put_1(result, 'ZAR', new CurrencyDataImpl_1('ZAR', 'R', 2, 'ZAR'));
  $put_1(result, 'ZMK', new CurrencyDataImpl_0('ZMK', 'ZK', 0));
  $put_1(result, 'ZRN', new CurrencyDataImpl_0('ZRN', 'NZ', 130));
  $put_1(result, 'ZRZ', new CurrencyDataImpl_0('ZRZ', 'ZRZ', 130));
  $put_1(result, 'ZWD', new CurrencyDataImpl_0('ZWD', 'Z$', 128));
  $put_1(result, 'ZWL', new CurrencyDataImpl_0('ZWL', 'ZWL', 2));
  $put_1(result, 'ZWR', new CurrencyDataImpl_0('ZWR', 'ZWR', 130));
  return result;
}
;
_.loadCurrencyMapNative = function loadCurrencyMapNative_15(){
  return overrideMap($loadCurrencyMapNative_1(this), $loadMyCurrencyMapOverridesNative_14());
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
function $$init_142(){
}

function $loadMyCurrencyMapOverridesNative_15(){
  return {ADP:['ADP', 'ADP', 128], AED:['AED', 'DH', 2, 'DH'], AFA:['AFA', 'AFA', 130], AFN:['AFN', 'Af', 0], ALL:['ALL', 'ALL', 0], AMD:['AMD', 'AMD', 0], ANG:['ANG', 'NAf.', 2], AOA:['AOA', 'Kz', 2], AOK:['AOK', 'AOK', 130], AON:['AON', 'AON', 130], AOR:['AOR', 'AOR', 130], ARA:['ARA', '\u20B3', 130], ARL:['ARL', '$L', 130], ARM:['ARM', 'm$n', 130], ARP:['ARP', 'ARP', 130], ARS:['ARS', 'AR$', 2, 'AR$'], ATS:['ATS', 'ATS', 130], AUD:['AUD', 'AU$', 2, 'AU$'], AWG:['AWG', 'Afl.', 2], AZM:['AZM', 'AZM', 130], AZN:['AZN', 'man.', 2], BAD:['BAD', 'BAD', 130], BAM:['BAM', 'KM', 2], BAN:['BAN', 'BAN', 130], BBD:['BBD', 'Bds$', 2], BDT:['BDT', 'Tk', 2, 'Tk'], BEC:['BEC', 'BEC', 2], BEF:['BEF', 'BF', 130], BEL:['BEL', 'BEL', 2], BGL:['BGL', 'BGL', 130], BGM:['BGM', 'BGM', 130], BGN:['BGN', 'BGN', 2], BGO:['BGO', 'BGO', 130], BHD:['BHD', 'BD', 3], BIF:['BIF', 'FBu', 0], BMD:['BMD', 'BD$', 2], BND:['BND', 'BN$', 2], BOB:['BOB', 'Bs', 2], BOL:['BOL', 'BOL', 130], BOP:['BOP', '$b.', 130], BOV:['BOV', 'BOV', 2], BRB:['BRB', 'BRB', 130], BRC:['BRC', 'BRC', 130], BRE:['BRE', 'BRE', 130], BRL:['BRL', 'R$', 2, 'R$'], BRN:['BRN', 'BRN', 130], BRR:['BRR', 'BRR', 130], BRZ:['BRZ', 'BRZ', 130], BSD:['BSD', 'BS$', 2], BTN:['BTN', 'Nu.', 2], BUK:['BUK', 'BUK', 130], BWP:['BWP', 'BWP', 2], BYB:['BYB', 'BYB', 130], BYR:['BYR', 'BYR', 0], BZD:['BZD', 'BZ$', 2], CAD:['CAD', 'CA$', 2, 'C$'], CDF:['CDF', 'CDF', 2], CHE:['CHE', 'CHE', 2], CHF:['CHF', 'Fr.', 2, 'CHF'], CHW:['CHW', 'CHW', 2], CLE:['CLE', 'E\xBA', 130], CLF:['CLF', 'CLF', 0], CLP:['CLP', 'CL$', 0, 'CL$'], CNY:['CNY', 'CN\xA5', 2, 'RMB\xA5'], COP:['COP', 'CO$', 0, 'COL$'], COU:['COU', 'COU', 2], CRC:['CRC', '\u20A1', 0, 'CR\u20A1'], CSD:['CSD', 'CSD', 130], CSK:['CSK', 'CSK', 130], CUC:['CUC', 'CUC$', 2], CUP:['CUP', 'CU$', 2, '$MN'], CVE:['CVE', 'CV$', 2], CYP:['CYP', 'CY\xA3', 130], CZK:['CZK', 'K\u010D', 2, 'K\u010D'], DDM:['DDM', 'DDM', 130], DEM:['DEM', 'DM', 130], DJF:['DJF', 'Fdj', 0], DKK:['DKK', 'Dkr', 2, 'kr'], DOP:['DOP', 'RD$', 2, 'RD$'], DZD:['DZD', 'DA', 2], ECS:['ECS', 'ECS', 130], ECV:['ECV', 'ECV', 2], EEK:['EEK', 'Ekr', 2], EGP:['EGP', 'EG\xA3', 2, 'LE'], EQE:['EQE', 'EQE', 130], ERN:['ERN', 'Nfk', 2], ESA:['ESA', 'ESA', 2], ESB:['ESB', 'ESB', 2], ESP:['ESP', 'Pts', 128], ETB:['ETB', 'Br', 2], EUR:['EUR', '\u20AC', 2, '\u20AC'], FIM:['FIM', 'mk', 130], FJD:['FJD', 'FJ$', 2], FKP:['FKP', 'FK\xA3', 2], FRF:['FRF', '\u20A3', 130], GBP:['GBP', '\xA3', 2, 'GB\xA3'], GEK:['GEK', 'GEK', 130], GEL:['GEL', 'GEL', 2], GHC:['GHC', '\u20B5', 130], GHS:['GHS', 'GH\u20B5', 2], GIP:['GIP', 'GI\xA3', 2], GMD:['GMD', 'GMD', 2], GNF:['GNF', 'FG', 0], GNS:['GNS', 'GNS', 130], GQE:['GQE', 'GQE', 130], GRD:['GRD', '\u20AF', 130], GTQ:['GTQ', 'GTQ', 2], GWE:['GWE', 'GWE', 130], GWP:['GWP', 'GWP', 2], GYD:['GYD', 'GY$', 0], HKD:['HKD', 'HK$', 2, 'HK$'], HNL:['HNL', 'HNL', 2], HRD:['HRD', 'HRD', 130], HRK:['HRK', 'kn', 2], HTG:['HTG', 'HTG', 2], HUF:['HUF', 'Ft', 0], IDR:['IDR', 'Rp', 0], IEP:['IEP', 'IR\xA3', 130], ILP:['ILP', 'I\xA3', 130], ILR:['ILR', 'ILR', 130], ILS:['ILS', '\u20AA', 2, 'IL\u20AA'], INR:['INR', 'Rs', 2, 'Rs'], IQD:['IQD', 'IQD', 0], IRR:['IRR', 'IRR', 0], ISJ:['ISJ', 'ISJ', 130], ISK:['ISK', 'Ikr', 0, 'kr'], ITL:['ITL', 'IT\u20A4', 128], JMD:['JMD', 'J$', 2, 'JA$'], JOD:['JOD', 'JD', 3], JPY:['JPY', '\xA5', 0, 'JP\xA5'], KES:['KES', 'Ksh', 2], KGS:['KGS', 'KGS', 2], KHR:['KHR', 'KHR', 2], KMF:['KMF', 'CF', 0], KPW:['KPW', 'KPW', 0], KRH:['KRH', 'KRH', 130], KRO:['KRO', 'KRO', 130], KRW:['KRW', '\u20A9', 0, 'KR\u20A9'], KWD:['KWD', 'KD', 3], KYD:['KYD', 'KY$', 2], KZT:['KZT', 'KZT', 2], LAK:['LAK', '\u20AD', 0], LBP:['LBP', 'LB\xA3', 0], LKR:['LKR', 'SLRs', 2, 'SLRs'], LRD:['LRD', 'L$', 2], LSL:['LSL', 'LSL', 2], LSM:['LSM', 'LSM', 130], LTL:['LTL', 'Lt', 2], LTT:['LTT', 'LTT', 130], LUC:['LUC', 'LUC', 2], LUF:['LUF', 'LUF', 128], LUL:['LUL', 'LUL', 2], LVL:['LVL', 'Ls', 2], LVR:['LVR', 'LVR', 130], LYD:['LYD', 'LD', 3], MAD:['MAD', 'MAD', 2], MAF:['MAF', 'MAF', 130], MCF:['MCF', 'MCF', 130], MDC:['MDC', 'MDC', 130], MDL:['MDL', 'MDL', 2], MGA:['MGA', 'MGA', 0], MGF:['MGF', 'MGF', 128], MKD:['MKD', 'MKD', 2], MKN:['MKN', 'MKN', 130], MLF:['MLF', 'MLF', 130], MMK:['MMK', 'MMK', 0], MNT:['MNT', '\u20AE', 0, 'MN\u20AE'], MOP:['MOP', 'MOP$', 2], MRO:['MRO', 'UM', 0], MTL:['MTL', 'Lm', 130], MTP:['MTP', 'MT\xA3', 130], MUR:['MUR', 'MURs', 0], MVP:['MVP', 'MVP', 130], MVR:['MVR', 'MVR', 2], MWK:['MWK', 'MWK', 2], MXN:['MXN', 'Mex$', 2, 'Mex$'], MXP:['MXP', 'MX$', 130], MXV:['MXV', 'MXV', 2], MYR:['MYR', 'RM', 2, 'RM'], MZE:['MZE', 'MZE', 130], MZM:['MZM', 'Mt', 130], MZN:['MZN', 'MTn', 2], NAD:['NAD', 'N$', 2], NGN:['NGN', '\u20A6', 2], NIC:['NIC', 'NIC', 130], NIO:['NIO', 'C$', 2], NLG:['NLG', 'fl', 130], NOK:['NOK', 'Nkr', 2, 'NOkr'], NPR:['NPR', 'NPRs', 2], NZD:['NZD', 'NZ$', 2], OMR:['OMR', 'OMR', 3], PAB:['PAB', 'B/.', 2, 'B/.'], PEI:['PEI', 'I/.', 130], PEN:['PEN', 'S/.', 2, 'S/.'], PES:['PES', 'PES', 130], PGK:['PGK', 'PGK', 2], PHP:['PHP', '\u20B1', 2, 'PHP'], PKR:['PKR', 'PKRs', 0, 'PKRs.'], PLN:['PLN', 'z\u0142', 2], PLZ:['PLZ', 'PLZ', 130], PTE:['PTE', 'Esc', 130], PYG:['PYG', '\u20B2', 0], QAR:['QAR', 'QR', 2], RHD:['RHD', 'RH$', 130], ROL:['ROL', 'ROL', 130], RON:['RON', 'RON', 2], RSD:['RSD', 'din.', 0], RUB:['RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'], RUR:['RUR', 'RUR', 130], RWF:['RWF', 'RWF', 0], SAR:['SAR', 'SR', 2, 'SR'], SBD:['SBD', 'SI$', 2], SCR:['SCR', 'SRe', 2], SDD:['SDD', 'LSd', 130], SDG:['SDG', 'SDG', 2], SDP:['SDP', 'SDP', 130], SEK:['SEK', 'Skr', 2, 'kr'], SGD:['SGD', 'S$', 2, 'S$'], SHP:['SHP', 'SH\xA3', 2], SIT:['SIT', 'SIT', 130], SKK:['SKK', 'Sk', 130], SLL:['SLL', 'Le', 0], SOS:['SOS', 'Ssh', 0], SRD:['SRD', 'SR$', 2], SRG:['SRG', 'Sf', 130], STD:['STD', 'Db', 0], SUR:['SUR', 'SUR', 130], SVC:['SVC', 'SV\u20A1', 130], SYP:['SYP', 'SY\xA3', 0], SZL:['SZL', 'SZL', 2], THB:['THB', '\u0E3F', 2, 'THB'], TJR:['TJR', 'TJR', 130], TJS:['TJS', 'TJS', 2], TMM:['TMM', 'TMM', 128], TMT:['TMT', 'TMT', 2], TND:['TND', 'DT', 3], TOP:['TOP', 'T$', 2], TPE:['TPE', 'TPE', 130], TRL:['TRL', 'TRL', 128], TRY:['TRY', 'TL', 2, 'YTL'], TTD:['TTD', '$', 2], TWD:['TWD', 'NT$', 2, 'NT$'], TZS:['TZS', 'TSh', 0], UAH:['UAH', '\u20B4', 2], UAK:['UAK', 'UAK', 130], UGS:['UGS', 'UGS', 130], UGX:['UGX', 'USh', 0], USD:['USD', 'US$', 2, 'US$'], USN:['USN', 'USN', 2], USS:['USS', 'USS', 2], UYI:['UYI', 'UYI', 2], UYP:['UYP', 'UYP', 130], UYU:['UYU', '$U', 2, 'UY$'], UZS:['UZS', 'UZS', 0], VEB:['VEB', 'VEB', 130], VEF:['VEF', 'Bs.F.', 2], VND:['VND', '\u20AB', 24, '\u20AB'], VNN:['VNN', 'VNN', 130], VUV:['VUV', 'VT', 0], WST:['WST', 'WS$', 2], XAF:['XAF', 'FCFA', 0], XAG:['XAG', 'XAG', 2], XAU:['XAU', 'XAU', 2], XBA:['XBA', 'XBA', 2], XBB:['XBB', 'XBB', 2], XBC:['XBC', 'XBC', 2], XBD:['XBD', 'XBD', 2], XCD:['XCD', 'EC$', 2], XDR:['XDR', 'XDR', 2], XEU:['XEU', 'XEU', 2], XFO:['XFO', 'XFO', 2], XFU:['XFU', 'XFU', 2], XOF:['XOF', 'CFA', 0], XPD:['XPD', 'XPD', 2], XPF:['XPF', 'CFPF', 0], XPT:['XPT', 'XPT', 2], XRE:['XRE', 'XRE', 2], XTS:['XTS', 'XTS', 2], XXX:['XXX', 'XXX', 2], YDD:['YDD', 'YDD', 130], YER:['YER', 'YR', 0, 'YER'], YUD:['YUD', 'YUD', 130], YUM:['YUM', 'YUM', 130], YUN:['YUN', 'YUN', 130], YUR:['YUR', 'YUR', 130], ZAL:['ZAL', 'ZAL', 2], ZAR:['ZAR', 'R', 2, 'ZAR'], ZMK:['ZMK', 'ZK', 0], ZRN:['ZRN', 'NZ', 130], ZRZ:['ZRZ', 'ZRZ', 130], ZWD:['ZWD', 'Z$', 128], ZWL:['ZWL', 'ZWL', 2], ZWR:['ZWR', 'ZWR', 130]};
}

function CurrencyList_en_TT_0(){
  CurrencyList_en_0.call(this);
  $$init_142();
}

function CurrencyList_en_TT(){
}

_ = CurrencyList_en_TT_0.prototype = CurrencyList_en_TT.prototype = new CurrencyList_en;
_.getClass$ = function getClass_143(){
  return Lcom_google_gwt_i18n_client_CurrencyList_1en_1TT_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava_18(){
  return new CurrencyDataImpl_0('TTD', '$', 2);
}
;
_.getDefaultNative = function getDefaultNative_18(){
  return ['TTD', '$', 2];
}
;
_.loadCurrencyMapJava = function loadCurrencyMapJava_16(){
  var result;
  result = $loadCurrencyMapJava_1(this);
  $put_1(result, 'ADP', new CurrencyDataImpl_0('ADP', 'ADP', 128));
  $put_1(result, 'AED', new CurrencyDataImpl_1('AED', 'DH', 2, 'DH'));
  $put_1(result, 'AFA', new CurrencyDataImpl_0('AFA', 'AFA', 130));
  $put_1(result, 'AFN', new CurrencyDataImpl_0('AFN', 'Af', 0));
  $put_1(result, 'ALL', new CurrencyDataImpl_0('ALL', 'ALL', 0));
  $put_1(result, 'AMD', new CurrencyDataImpl_0('AMD', 'AMD', 0));
  $put_1(result, 'ANG', new CurrencyDataImpl_0('ANG', 'NAf.', 2));
  $put_1(result, 'AOA', new CurrencyDataImpl_0('AOA', 'Kz', 2));
  $put_1(result, 'AOK', new CurrencyDataImpl_0('AOK', 'AOK', 130));
  $put_1(result, 'AON', new CurrencyDataImpl_0('AON', 'AON', 130));
  $put_1(result, 'AOR', new CurrencyDataImpl_0('AOR', 'AOR', 130));
  $put_1(result, 'ARA', new CurrencyDataImpl_0('ARA', '\u20B3', 130));
  $put_1(result, 'ARL', new CurrencyDataImpl_0('ARL', '$L', 130));
  $put_1(result, 'ARM', new CurrencyDataImpl_0('ARM', 'm$n', 130));
  $put_1(result, 'ARP', new CurrencyDataImpl_0('ARP', 'ARP', 130));
  $put_1(result, 'ARS', new CurrencyDataImpl_1('ARS', 'AR$', 2, 'AR$'));
  $put_1(result, 'ATS', new CurrencyDataImpl_0('ATS', 'ATS', 130));
  $put_1(result, 'AUD', new CurrencyDataImpl_1('AUD', 'AU$', 2, 'AU$'));
  $put_1(result, 'AWG', new CurrencyDataImpl_0('AWG', 'Afl.', 2));
  $put_1(result, 'AZM', new CurrencyDataImpl_0('AZM', 'AZM', 130));
  $put_1(result, 'AZN', new CurrencyDataImpl_0('AZN', 'man.', 2));
  $put_1(result, 'BAD', new CurrencyDataImpl_0('BAD', 'BAD', 130));
  $put_1(result, 'BAM', new CurrencyDataImpl_0('BAM', 'KM', 2));
  $put_1(result, 'BAN', new CurrencyDataImpl_0('BAN', 'BAN', 130));
  $put_1(result, 'BBD', new CurrencyDataImpl_0('BBD', 'Bds$', 2));
  $put_1(result, 'BDT', new CurrencyDataImpl_1('BDT', 'Tk', 2, 'Tk'));
  $put_1(result, 'BEC', new CurrencyDataImpl_0('BEC', 'BEC', 2));
  $put_1(result, 'BEF', new CurrencyDataImpl_0('BEF', 'BF', 130));
  $put_1(result, 'BEL', new CurrencyDataImpl_0('BEL', 'BEL', 2));
  $put_1(result, 'BGL', new CurrencyDataImpl_0('BGL', 'BGL', 130));
  $put_1(result, 'BGM', new CurrencyDataImpl_0('BGM', 'BGM', 130));
  $put_1(result, 'BGN', new CurrencyDataImpl_0('BGN', 'BGN', 2));
  $put_1(result, 'BGO', new CurrencyDataImpl_0('BGO', 'BGO', 130));
  $put_1(result, 'BHD', new CurrencyDataImpl_0('BHD', 'BD', 3));
  $put_1(result, 'BIF', new CurrencyDataImpl_0('BIF', 'FBu', 0));
  $put_1(result, 'BMD', new CurrencyDataImpl_0('BMD', 'BD$', 2));
  $put_1(result, 'BND', new CurrencyDataImpl_0('BND', 'BN$', 2));
  $put_1(result, 'BOB', new CurrencyDataImpl_0('BOB', 'Bs', 2));
  $put_1(result, 'BOL', new CurrencyDataImpl_0('BOL', 'BOL', 130));
  $put_1(result, 'BOP', new CurrencyDataImpl_0('BOP', '$b.', 130));
  $put_1(result, 'BOV', new CurrencyDataImpl_0('BOV', 'BOV', 2));
  $put_1(result, 'BRB', new CurrencyDataImpl_0('BRB', 'BRB', 130));
  $put_1(result, 'BRC', new CurrencyDataImpl_0('BRC', 'BRC', 130));
  $put_1(result, 'BRE', new CurrencyDataImpl_0('BRE', 'BRE', 130));
  $put_1(result, 'BRL', new CurrencyDataImpl_1('BRL', 'R$', 2, 'R$'));
  $put_1(result, 'BRN', new CurrencyDataImpl_0('BRN', 'BRN', 130));
  $put_1(result, 'BRR', new CurrencyDataImpl_0('BRR', 'BRR', 130));
  $put_1(result, 'BRZ', new CurrencyDataImpl_0('BRZ', 'BRZ', 130));
  $put_1(result, 'BSD', new CurrencyDataImpl_0('BSD', 'BS$', 2));
  $put_1(result, 'BTN', new CurrencyDataImpl_0('BTN', 'Nu.', 2));
  $put_1(result, 'BUK', new CurrencyDataImpl_0('BUK', 'BUK', 130));
  $put_1(result, 'BWP', new CurrencyDataImpl_0('BWP', 'BWP', 2));
  $put_1(result, 'BYB', new CurrencyDataImpl_0('BYB', 'BYB', 130));
  $put_1(result, 'BYR', new CurrencyDataImpl_0('BYR', 'BYR', 0));
  $put_1(result, 'BZD', new CurrencyDataImpl_0('BZD', 'BZ$', 2));
  $put_1(result, 'CAD', new CurrencyDataImpl_1('CAD', 'CA$', 2, 'C$'));
  $put_1(result, 'CDF', new CurrencyDataImpl_0('CDF', 'CDF', 2));
  $put_1(result, 'CHE', new CurrencyDataImpl_0('CHE', 'CHE', 2));
  $put_1(result, 'CHF', new CurrencyDataImpl_1('CHF', 'Fr.', 2, 'CHF'));
  $put_1(result, 'CHW', new CurrencyDataImpl_0('CHW', 'CHW', 2));
  $put_1(result, 'CLE', new CurrencyDataImpl_0('CLE', 'E\xBA', 130));
  $put_1(result, 'CLF', new CurrencyDataImpl_0('CLF', 'CLF', 0));
  $put_1(result, 'CLP', new CurrencyDataImpl_1('CLP', 'CL$', 0, 'CL$'));
  $put_1(result, 'CNY', new CurrencyDataImpl_1('CNY', 'CN\xA5', 2, 'RMB\xA5'));
  $put_1(result, 'COP', new CurrencyDataImpl_1('COP', 'CO$', 0, 'COL$'));
  $put_1(result, 'COU', new CurrencyDataImpl_0('COU', 'COU', 2));
  $put_1(result, 'CRC', new CurrencyDataImpl_1('CRC', '\u20A1', 0, 'CR\u20A1'));
  $put_1(result, 'CSD', new CurrencyDataImpl_0('CSD', 'CSD', 130));
  $put_1(result, 'CSK', new CurrencyDataImpl_0('CSK', 'CSK', 130));
  $put_1(result, 'CUC', new CurrencyDataImpl_0('CUC', 'CUC$', 2));
  $put_1(result, 'CUP', new CurrencyDataImpl_1('CUP', 'CU$', 2, '$MN'));
  $put_1(result, 'CVE', new CurrencyDataImpl_0('CVE', 'CV$', 2));
  $put_1(result, 'CYP', new CurrencyDataImpl_0('CYP', 'CY\xA3', 130));
  $put_1(result, 'CZK', new CurrencyDataImpl_1('CZK', 'K\u010D', 2, 'K\u010D'));
  $put_1(result, 'DDM', new CurrencyDataImpl_0('DDM', 'DDM', 130));
  $put_1(result, 'DEM', new CurrencyDataImpl_0('DEM', 'DM', 130));
  $put_1(result, 'DJF', new CurrencyDataImpl_0('DJF', 'Fdj', 0));
  $put_1(result, 'DKK', new CurrencyDataImpl_1('DKK', 'Dkr', 2, 'kr'));
  $put_1(result, 'DOP', new CurrencyDataImpl_1('DOP', 'RD$', 2, 'RD$'));
  $put_1(result, 'DZD', new CurrencyDataImpl_0('DZD', 'DA', 2));
  $put_1(result, 'ECS', new CurrencyDataImpl_0('ECS', 'ECS', 130));
  $put_1(result, 'ECV', new CurrencyDataImpl_0('ECV', 'ECV', 2));
  $put_1(result, 'EEK', new CurrencyDataImpl_0('EEK', 'Ekr', 2));
  $put_1(result, 'EGP', new CurrencyDataImpl_1('EGP', 'EG\xA3', 2, 'LE'));
  $put_1(result, 'EQE', new CurrencyDataImpl_0('EQE', 'EQE', 130));
  $put_1(result, 'ERN', new CurrencyDataImpl_0('ERN', 'Nfk', 2));
  $put_1(result, 'ESA', new CurrencyDataImpl_0('ESA', 'ESA', 2));
  $put_1(result, 'ESB', new CurrencyDataImpl_0('ESB', 'ESB', 2));
  $put_1(result, 'ESP', new CurrencyDataImpl_0('ESP', 'Pts', 128));
  $put_1(result, 'ETB', new CurrencyDataImpl_0('ETB', 'Br', 2));
  $put_1(result, 'EUR', new CurrencyDataImpl_1('EUR', '\u20AC', 2, '\u20AC'));
  $put_1(result, 'FIM', new CurrencyDataImpl_0('FIM', 'mk', 130));
  $put_1(result, 'FJD', new CurrencyDataImpl_0('FJD', 'FJ$', 2));
  $put_1(result, 'FKP', new CurrencyDataImpl_0('FKP', 'FK\xA3', 2));
  $put_1(result, 'FRF', new CurrencyDataImpl_0('FRF', '\u20A3', 130));
  $put_1(result, 'GBP', new CurrencyDataImpl_1('GBP', '\xA3', 2, 'GB\xA3'));
  $put_1(result, 'GEK', new CurrencyDataImpl_0('GEK', 'GEK', 130));
  $put_1(result, 'GEL', new CurrencyDataImpl_0('GEL', 'GEL', 2));
  $put_1(result, 'GHC', new CurrencyDataImpl_0('GHC', '\u20B5', 130));
  $put_1(result, 'GHS', new CurrencyDataImpl_0('GHS', 'GH\u20B5', 2));
  $put_1(result, 'GIP', new CurrencyDataImpl_0('GIP', 'GI\xA3', 2));
  $put_1(result, 'GMD', new CurrencyDataImpl_0('GMD', 'GMD', 2));
  $put_1(result, 'GNF', new CurrencyDataImpl_0('GNF', 'FG', 0));
  $put_1(result, 'GNS', new CurrencyDataImpl_0('GNS', 'GNS', 130));
  $put_1(result, 'GQE', new CurrencyDataImpl_0('GQE', 'GQE', 130));
  $put_1(result, 'GRD', new CurrencyDataImpl_0('GRD', '\u20AF', 130));
  $put_1(result, 'GTQ', new CurrencyDataImpl_0('GTQ', 'GTQ', 2));
  $put_1(result, 'GWE', new CurrencyDataImpl_0('GWE', 'GWE', 130));
  $put_1(result, 'GWP', new CurrencyDataImpl_0('GWP', 'GWP', 2));
  $put_1(result, 'GYD', new CurrencyDataImpl_0('GYD', 'GY$', 0));
  $put_1(result, 'HKD', new CurrencyDataImpl_1('HKD', 'HK$', 2, 'HK$'));
  $put_1(result, 'HNL', new CurrencyDataImpl_0('HNL', 'HNL', 2));
  $put_1(result, 'HRD', new CurrencyDataImpl_0('HRD', 'HRD', 130));
  $put_1(result, 'HRK', new CurrencyDataImpl_0('HRK', 'kn', 2));
  $put_1(result, 'HTG', new CurrencyDataImpl_0('HTG', 'HTG', 2));
  $put_1(result, 'HUF', new CurrencyDataImpl_0('HUF', 'Ft', 0));
  $put_1(result, 'IDR', new CurrencyDataImpl_0('IDR', 'Rp', 0));
  $put_1(result, 'IEP', new CurrencyDataImpl_0('IEP', 'IR\xA3', 130));
  $put_1(result, 'ILP', new CurrencyDataImpl_0('ILP', 'I\xA3', 130));
  $put_1(result, 'ILR', new CurrencyDataImpl_0('ILR', 'ILR', 130));
  $put_1(result, 'ILS', new CurrencyDataImpl_1('ILS', '\u20AA', 2, 'IL\u20AA'));
  $put_1(result, 'INR', new CurrencyDataImpl_1('INR', 'Rs', 2, 'Rs'));
  $put_1(result, 'IQD', new CurrencyDataImpl_0('IQD', 'IQD', 0));
  $put_1(result, 'IRR', new CurrencyDataImpl_0('IRR', 'IRR', 0));
  $put_1(result, 'ISJ', new CurrencyDataImpl_0('ISJ', 'ISJ', 130));
  $put_1(result, 'ISK', new CurrencyDataImpl_1('ISK', 'Ikr', 0, 'kr'));
  $put_1(result, 'ITL', new CurrencyDataImpl_0('ITL', 'IT\u20A4', 128));
  $put_1(result, 'JMD', new CurrencyDataImpl_1('JMD', 'J$', 2, 'JA$'));
  $put_1(result, 'JOD', new CurrencyDataImpl_0('JOD', 'JD', 3));
  $put_1(result, 'JPY', new CurrencyDataImpl_1('JPY', '\xA5', 0, 'JP\xA5'));
  $put_1(result, 'KES', new CurrencyDataImpl_0('KES', 'Ksh', 2));
  $put_1(result, 'KGS', new CurrencyDataImpl_0('KGS', 'KGS', 2));
  $put_1(result, 'KHR', new CurrencyDataImpl_0('KHR', 'KHR', 2));
  $put_1(result, 'KMF', new CurrencyDataImpl_0('KMF', 'CF', 0));
  $put_1(result, 'KPW', new CurrencyDataImpl_0('KPW', 'KPW', 0));
  $put_1(result, 'KRH', new CurrencyDataImpl_0('KRH', 'KRH', 130));
  $put_1(result, 'KRO', new CurrencyDataImpl_0('KRO', 'KRO', 130));
  $put_1(result, 'KRW', new CurrencyDataImpl_1('KRW', '\u20A9', 0, 'KR\u20A9'));
  $put_1(result, 'KWD', new CurrencyDataImpl_0('KWD', 'KD', 3));
  $put_1(result, 'KYD', new CurrencyDataImpl_0('KYD', 'KY$', 2));
  $put_1(result, 'KZT', new CurrencyDataImpl_0('KZT', 'KZT', 2));
  $put_1(result, 'LAK', new CurrencyDataImpl_0('LAK', '\u20AD', 0));
  $put_1(result, 'LBP', new CurrencyDataImpl_0('LBP', 'LB\xA3', 0));
  $put_1(result, 'LKR', new CurrencyDataImpl_1('LKR', 'SLRs', 2, 'SLRs'));
  $put_1(result, 'LRD', new CurrencyDataImpl_0('LRD', 'L$', 2));
  $put_1(result, 'LSL', new CurrencyDataImpl_0('LSL', 'LSL', 2));
  $put_1(result, 'LSM', new CurrencyDataImpl_0('LSM', 'LSM', 130));
  $put_1(result, 'LTL', new CurrencyDataImpl_0('LTL', 'Lt', 2));
  $put_1(result, 'LTT', new CurrencyDataImpl_0('LTT', 'LTT', 130));
  $put_1(result, 'LUC', new CurrencyDataImpl_0('LUC', 'LUC', 2));
  $put_1(result, 'LUF', new CurrencyDataImpl_0('LUF', 'LUF', 128));
  $put_1(result, 'LUL', new CurrencyDataImpl_0('LUL', 'LUL', 2));
  $put_1(result, 'LVL', new CurrencyDataImpl_0('LVL', 'Ls', 2));
  $put_1(result, 'LVR', new CurrencyDataImpl_0('LVR', 'LVR', 130));
  $put_1(result, 'LYD', new CurrencyDataImpl_0('LYD', 'LD', 3));
  $put_1(result, 'MAD', new CurrencyDataImpl_0('MAD', 'MAD', 2));
  $put_1(result, 'MAF', new CurrencyDataImpl_0('MAF', 'MAF', 130));
  $put_1(result, 'MCF', new CurrencyDataImpl_0('MCF', 'MCF', 130));
  $put_1(result, 'MDC', new CurrencyDataImpl_0('MDC', 'MDC', 130));
  $put_1(result, 'MDL', new CurrencyDataImpl_0('MDL', 'MDL', 2));
  $put_1(result, 'MGA', new CurrencyDataImpl_0('MGA', 'MGA', 0));
  $put_1(result, 'MGF', new CurrencyDataImpl_0('MGF', 'MGF', 128));
  $put_1(result, 'MKD', new CurrencyDataImpl_0('MKD', 'MKD', 2));
  $put_1(result, 'MKN', new CurrencyDataImpl_0('MKN', 'MKN', 130));
  $put_1(result, 'MLF', new CurrencyDataImpl_0('MLF', 'MLF', 130));
  $put_1(result, 'MMK', new CurrencyDataImpl_0('MMK', 'MMK', 0));
  $put_1(result, 'MNT', new CurrencyDataImpl_1('MNT', '\u20AE', 0, 'MN\u20AE'));
  $put_1(result, 'MOP', new CurrencyDataImpl_0('MOP', 'MOP$', 2));
  $put_1(result, 'MRO', new CurrencyDataImpl_0('MRO', 'UM', 0));
  $put_1(result, 'MTL', new CurrencyDataImpl_0('MTL', 'Lm', 130));
  $put_1(result, 'MTP', new CurrencyDataImpl_0('MTP', 'MT\xA3', 130));
  $put_1(result, 'MUR', new CurrencyDataImpl_0('MUR', 'MURs', 0));
  $put_1(result, 'MVP', new CurrencyDataImpl_0('MVP', 'MVP', 130));
  $put_1(result, 'MVR', new CurrencyDataImpl_0('MVR', 'MVR', 2));
  $put_1(result, 'MWK', new CurrencyDataImpl_0('MWK', 'MWK', 2));
  $put_1(result, 'MXN', new CurrencyDataImpl_1('MXN', 'Mex$', 2, 'Mex$'));
  $put_1(result, 'MXP', new CurrencyDataImpl_0('MXP', 'MX$', 130));
  $put_1(result, 'MXV', new CurrencyDataImpl_0('MXV', 'MXV', 2));
  $put_1(result, 'MYR', new CurrencyDataImpl_1('MYR', 'RM', 2, 'RM'));
  $put_1(result, 'MZE', new CurrencyDataImpl_0('MZE', 'MZE', 130));
  $put_1(result, 'MZM', new CurrencyDataImpl_0('MZM', 'Mt', 130));
  $put_1(result, 'MZN', new CurrencyDataImpl_0('MZN', 'MTn', 2));
  $put_1(result, 'NAD', new CurrencyDataImpl_0('NAD', 'N$', 2));
  $put_1(result, 'NGN', new CurrencyDataImpl_0('NGN', '\u20A6', 2));
  $put_1(result, 'NIC', new CurrencyDataImpl_0('NIC', 'NIC', 130));
  $put_1(result, 'NIO', new CurrencyDataImpl_0('NIO', 'C$', 2));
  $put_1(result, 'NLG', new CurrencyDataImpl_0('NLG', 'fl', 130));
  $put_1(result, 'NOK', new CurrencyDataImpl_1('NOK', 'Nkr', 2, 'NOkr'));
  $put_1(result, 'NPR', new CurrencyDataImpl_0('NPR', 'NPRs', 2));
  $put_1(result, 'NZD', new CurrencyDataImpl_0('NZD', 'NZ$', 2));
  $put_1(result, 'OMR', new CurrencyDataImpl_0('OMR', 'OMR', 3));
  $put_1(result, 'PAB', new CurrencyDataImpl_1('PAB', 'B/.', 2, 'B/.'));
  $put_1(result, 'PEI', new CurrencyDataImpl_0('PEI', 'I/.', 130));
  $put_1(result, 'PEN', new CurrencyDataImpl_1('PEN', 'S/.', 2, 'S/.'));
  $put_1(result, 'PES', new CurrencyDataImpl_0('PES', 'PES', 130));
  $put_1(result, 'PGK', new CurrencyDataImpl_0('PGK', 'PGK', 2));
  $put_1(result, 'PHP', new CurrencyDataImpl_1('PHP', '\u20B1', 2, 'PHP'));
  $put_1(result, 'PKR', new CurrencyDataImpl_1('PKR', 'PKRs', 0, 'PKRs.'));
  $put_1(result, 'PLN', new CurrencyDataImpl_0('PLN', 'z\u0142', 2));
  $put_1(result, 'PLZ', new CurrencyDataImpl_0('PLZ', 'PLZ', 130));
  $put_1(result, 'PTE', new CurrencyDataImpl_0('PTE', 'Esc', 130));
  $put_1(result, 'PYG', new CurrencyDataImpl_0('PYG', '\u20B2', 0));
  $put_1(result, 'QAR', new CurrencyDataImpl_0('QAR', 'QR', 2));
  $put_1(result, 'RHD', new CurrencyDataImpl_0('RHD', 'RH$', 130));
  $put_1(result, 'ROL', new CurrencyDataImpl_0('ROL', 'ROL', 130));
  $put_1(result, 'RON', new CurrencyDataImpl_0('RON', 'RON', 2));
  $put_1(result, 'RSD', new CurrencyDataImpl_0('RSD', 'din.', 0));
  $put_1(result, 'RUB', new CurrencyDataImpl_1('RUB', '\u0440\u0443\u0431', 2, '\u0440\u0443\u0431'));
  $put_1(result, 'RUR', new CurrencyDataImpl_0('RUR', 'RUR', 130));
  $put_1(result, 'RWF', new CurrencyDataImpl_0('RWF', 'RWF', 0));
  $put_1(result, 'SAR', new CurrencyDataImpl_1('SAR', 'SR', 2, 'SR'));
  $put_1(result, 'SBD', new CurrencyDataImpl_0('SBD', 'SI$', 2));
  $put_1(result, 'SCR', new CurrencyDataImpl_0('SCR', 'SRe', 2));
  $put_1(result, 'SDD', new CurrencyDataImpl_0('SDD', 'LSd', 130));
  $put_1(result, 'SDG', new CurrencyDataImpl_0('SDG', 'SDG', 2));
  $put_1(result, 'SDP', new CurrencyDataImpl_0('SDP', 'SDP', 130));
  $put_1(result, 'SEK', new CurrencyDataImpl_1('SEK', 'Skr', 2, 'kr'));
  $put_1(result, 'SGD', new CurrencyDataImpl_1('SGD', 'S$', 2, 'S$'));
  $put_1(result, 'SHP', new CurrencyDataImpl_0('SHP', 'SH\xA3', 2));
  $put_1(result, 'SIT', new CurrencyDataImpl_0('SIT', 'SIT', 130));
  $put_1(result, 'SKK', new CurrencyDataImpl_0('SKK', 'Sk', 130));
  $put_1(result, 'SLL', new CurrencyDataImpl_0('SLL', 'Le', 0));
  $put_1(result, 'SOS', new CurrencyDataImpl_0('SOS', 'Ssh', 0));
  $put_1(result, 'SRD', new CurrencyDataImpl_0('SRD', 'SR$', 2));
  $put_1(result, 'SRG', new CurrencyDataImpl_0('SRG', 'Sf', 130));
  $put_1(result, 'STD', new CurrencyDataImpl_0('STD', 'Db', 0));
  $put_1(result, 'SUR', new CurrencyDataImpl_0('SUR', 'SUR', 130));
  $put_1(result, 'SVC', new CurrencyDataImpl_0('SVC', 'SV\u20A1', 130));
  $put_1(result, 'SYP', new CurrencyDataImpl_0('SYP', 'SY\xA3', 0));
  $put_1(result, 'SZL', new CurrencyDataImpl_0('SZL', 'SZL', 2));
  $put_1(result, 'THB', new CurrencyDataImpl_1('THB', '\u0E3F', 2, 'THB'));
  $put_1(result, 'TJR', new CurrencyDataImpl_0('TJR', 'TJR', 130));
  $put_1(result, 'TJS', new CurrencyDataImpl_0('TJS', 'TJS', 2));
  $put_1(result, 'TMM', new CurrencyDataImpl_0('TMM', 'TMM', 128));
  $put_1(result, 'TMT', new CurrencyDataImpl_0('TMT', 'TMT', 2));
  $put_1(result, 'TND', new CurrencyDataImpl_0('TND', 'DT', 3));
  $put_1(result, 'TOP', new CurrencyDataImpl_0('TOP', 'T$', 2));
  $put_1(result, 'TPE', new CurrencyDataImpl_0('TPE', 'TPE', 130));
  $put_1(result, 'TRL', new CurrencyDataImpl_0('TRL', 'TRL', 128));
  $put_1(result, 'TRY', new CurrencyDataImpl_1('TRY', 'TL', 2, 'YTL'));
  $put_1(result, 'TTD', new CurrencyDataImpl_0('TTD', '$', 2));
  $put_1(result, 'TWD', new CurrencyDataImpl_1('TWD', 'NT$', 2, 'NT$'));
  $put_1(result, 'TZS', new CurrencyDataImpl_0('TZS', 'TSh', 0));
  $put_1(result, 'UAH', new CurrencyDataImpl_0('UAH', '\u20B4', 2));
  $put_1(result, 'UAK', new CurrencyDataImpl_0('UAK', 'UAK', 130));
  $put_1(result, 'UGS', new CurrencyDataImpl_0('UGS', 'UGS', 130));
  $put_1(result, 'UGX', new CurrencyDataImpl_0('UGX', 'USh', 0));
  $put_1(result, 'USD', new CurrencyDataImpl_1('USD', 'US$', 2, 'US$'));
  $put_1(result, 'USN', new CurrencyDataImpl_0('USN', 'USN', 2));
  $put_1(result, 'USS', new CurrencyDataImpl_0('USS', 'USS', 2));
  $put_1(result, 'UYI', new CurrencyDataImpl_0('UYI', 'UYI', 2));
  $put_1(result, 'UYP', new CurrencyDataImpl_0('UYP', 'UYP', 130));
  $put_1(result, 'UYU', new CurrencyDataImpl_1('UYU', '$U', 2, 'UY$'));
  $put_1(result, 'UZS', new CurrencyDataImpl_0('UZS', 'UZS', 0));
  $put_1(result, 'VEB', new CurrencyDataImpl_0('VEB', 'VEB', 130));
  $put_1(result, 'VEF', new CurrencyDataImpl_0('VEF', 'Bs.F.', 2));
  $put_1(result, 'VND', new CurrencyDataImpl_1('VND', '\u20AB', 24, '\u20AB'));
  $put_1(result, 'VNN', new CurrencyDataImpl_0('VNN', 'VNN', 130));
  $put_1(result, 'VUV', new CurrencyDataImpl_0('VUV', 'VT', 0));
  $put_1(result, 'WST', new CurrencyDataImpl_0('WST', 'WS$', 2));
  $put_1(result, 'XAF', new CurrencyDataImpl_0('XAF', 'FCFA', 0));
  $put_1(result, 'XAG', new CurrencyDataImpl_0('XAG', 'XAG', 2));
  $put_1(result, 'XAU', new CurrencyDataImpl_0('XAU', 'XAU', 2));
  $put_1(result, 'XBA', new CurrencyDataImpl_0('XBA', 'XBA', 2));
  $put_1(result, 'XBB', new CurrencyDataImpl_0('XBB', 'XBB', 2));
  $put_1(result, 'XBC', new CurrencyDataImpl_0('XBC', 'XBC', 2));
  $put_1(result, 'XBD', new CurrencyDataImpl_0('XBD', 'XBD', 2));
  $put_1(result, 'XCD', new CurrencyDataImpl_0('XCD', 'EC$', 2));
  $put_1(result, 'XDR', new CurrencyDataImpl_0('XDR', 'XDR', 2));
  $put_1(result, 'XEU', new CurrencyDataImpl_0('XEU', 'XEU', 2));
  $put_1(result, 'XFO', new CurrencyDataImpl_0('XFO', 'XFO', 2));
  $put_1(result, 'XFU', new CurrencyDataImpl_0('XFU', 'XFU', 2));
  $put_1(result, 'XOF', new CurrencyDataImpl_0('XOF', 'CFA', 0));
  $put_1(result, 'XPD', new CurrencyDataImpl_0('XPD', 'XPD', 2));
  $put_1(result, 'XPF', new CurrencyDataImpl_0('XPF', 'CFPF', 0));
  $put_1(result, 'XPT', new CurrencyDataImpl_0('XPT', 'XPT', 2));
  $put_1(result, 'XRE', new CurrencyDataImpl_0('XRE', 'XRE', 2));
  $put_1(result, 'XTS', new CurrencyDataImpl_0('XTS', 'XTS', 2));
  $put_1(result, 'XXX', new CurrencyDataImpl_0('XXX', 'XXX', 2));
  $put_1(result, 'YDD', new CurrencyDataImpl_0('YDD', 'YDD', 130));
  $put_1(result, 'YER', new CurrencyDataImpl_1('YER', 'YR', 0, 'YER'));
  $put_1(result, 'YUD', new CurrencyDataImpl_0('YUD', 'YUD', 130));
  $put_1(result, 'YUM', new CurrencyDataImpl_0('YUM', 'YUM', 130));
  $put_1(result, 'YUN', new CurrencyDataImpl_0('YUN', 'YUN', 130));
  $put_1(result, 'YUR', new CurrencyDataImpl_0('YUR', 'YUR', 130));
  $put_1(result, 'ZAL', new CurrencyDataImpl_0('ZAL', 'ZAL', 2));
  $put_1(result, 'ZAR', new CurrencyDataImpl_1('ZAR', 'R', 2, 'ZAR'));
  $put_1(result, 'ZMK', new CurrencyDataImpl_0('ZMK', 'ZK', 0));
  $put_1(result, 'ZRN', new CurrencyDataImpl_0('ZRN', 'NZ', 130));
  $put_1(result, 'ZRZ', new CurrencyDataImpl_0('ZRZ', 'ZRZ', 130));
  $put_1(result, 'ZWD', new CurrencyDataImpl_0('ZWD', 'Z$', 128));
  $put_1(result, 'ZWL', new CurrencyDataImpl_0('ZWL', 'ZWL', 2));
  $put_1(result, 'ZWR', new CurrencyDataImpl_0('ZWR', 'ZWR', 130));
  return result;
}
;
_.loadCurrencyMapNative = function loadCurrencyMapNative_16(){
  return overrideMap($loadCurrencyMapNative_1(this), $loadMyCurrencyMapOverridesNative_15());
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
function $$init_143(){
}

function CurrencyList_en_ZA_0(){
  CurrencyList_en_0.call(this);
  $$init_143();
}

function CurrencyList_en_ZA(){
}

_ = CurrencyList_en_ZA_0.prototype = CurrencyList_en_ZA.prototype = new CurrencyList_en;
_.getClass$ = function getClass_144(){
  return Lcom_google_gwt_i18n_client_CurrencyList_1en_1ZA_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava_19(){
  return new CurrencyDataImpl_1('ZAR', 'R', 2, 'ZAR');
}
;
_.getDefaultNative = function getDefaultNative_19(){
  return ['ZAR', 'R', 2, 'ZAR'];
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
function $$init_144(){
}

function $loadMyCurrencyMapOverridesNative_16(){
  return {ZWD:['ZWD', 'ZWD', 2]};
}

function CurrencyList_en_ZW_0(){
  CurrencyList_en_0.call(this);
  $$init_144();
}

function CurrencyList_en_ZW(){
}

_ = CurrencyList_en_ZW_0.prototype = CurrencyList_en_ZW.prototype = new CurrencyList_en;
_.getClass$ = function getClass_145(){
  return Lcom_google_gwt_i18n_client_CurrencyList_1en_1ZW_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava_20(){
  return new CurrencyDataImpl_0('ZWD', 'ZWD', 2);
}
;
_.getDefaultNative = function getDefaultNative_20(){
  return ['ZWD', 'ZWD', 2];
}
;
_.loadCurrencyMapJava = function loadCurrencyMapJava_17(){
  var result;
  result = $loadCurrencyMapJava_1(this);
  $put_1(result, 'ZWD', new CurrencyDataImpl_0('ZWD', 'ZWD', 2));
  return result;
}
;
_.loadCurrencyMapNative = function loadCurrencyMapNative_17(){
  return overrideMap($loadCurrencyMapNative_1(this), $loadMyCurrencyMapOverridesNative_16());
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
function $$init_145(){
}

function $ensureInstance(this$static){
  var runtimeLocale;
  if (isNotNull(this$static.instance)) {
    return;
  }
  runtimeLocale = $getLocaleName(getCurrentLocale());
  if ($equals_3('en_AU', runtimeLocale)) {
    this$static.instance = new CurrencyList_en_AU_0;
    return;
  }
  if ($equals_3('en_BE', runtimeLocale)) {
    this$static.instance = new CurrencyList_en_BE_0;
    return;
  }
  if ($equals_3('en_BW', runtimeLocale)) {
    this$static.instance = new CurrencyList_en_BW_0;
    return;
  }
  if ($equals_3('en_BZ', runtimeLocale)) {
    this$static.instance = new CurrencyList_en_BZ_0;
    return;
  }
  if ($equals_3('en_CA', runtimeLocale)) {
    this$static.instance = new CurrencyList_en_CA_0;
    return;
  }
  if ($equals_3('en_GB', runtimeLocale)) {
    this$static.instance = new CurrencyList_en_GB_0;
    return;
  }
  if ($equals_3('en_HK', runtimeLocale)) {
    this$static.instance = new CurrencyList_en_HK_0;
    return;
  }
  if ($equals_3('en_IE', runtimeLocale)) {
    this$static.instance = new CurrencyList_en_IE_0;
    return;
  }
  if ($equals_3('en_IN', runtimeLocale)) {
    this$static.instance = new CurrencyList_en_IN_0;
    return;
  }
  if ($equals_3('en_JM', runtimeLocale)) {
    this$static.instance = new CurrencyList_en_JM_0;
    return;
  }
  if ($equals_3('en_MT', runtimeLocale)) {
    this$static.instance = new CurrencyList_en_MT_0;
    return;
  }
  if ($equals_3('en_NA', runtimeLocale)) {
    this$static.instance = new CurrencyList_en_NA_0;
    return;
  }
  if ($equals_3('en_NZ', runtimeLocale)) {
    this$static.instance = new CurrencyList_en_NZ_0;
    return;
  }
  if ($equals_3('en_PH', runtimeLocale)) {
    this$static.instance = new CurrencyList_en_PH_0;
    return;
  }
  if ($equals_3('en_PK', runtimeLocale)) {
    this$static.instance = new CurrencyList_en_PK_0;
    return;
  }
  if ($equals_3('en_SG', runtimeLocale)) {
    this$static.instance = new CurrencyList_en_SG_0;
    return;
  }
  if ($equals_3('en_TT', runtimeLocale)) {
    this$static.instance = new CurrencyList_en_TT_0;
    return;
  }
  if ($equals_3('en_ZA', runtimeLocale)) {
    this$static.instance = new CurrencyList_en_ZA_0;
    return;
  }
  if ($equals_3('en_ZW', runtimeLocale)) {
    this$static.instance = new CurrencyList_en_ZW_0;
    return;
  }
  this$static.instance = new CurrencyList_en_0;
}

function CurrencyList_en_runtimeSelection_0(){
  CurrencyList_0.call(this);
  $$init_145();
}

function CurrencyList_en_runtimeSelection(){
}

_ = CurrencyList_en_runtimeSelection_0.prototype = CurrencyList_en_runtimeSelection.prototype = new CurrencyList;
_.getClass$ = function getClass_146(){
  return Lcom_google_gwt_i18n_client_CurrencyList_1en_1runtimeSelection_2_classLit;
}
;
_.getDefaultJava = function getDefaultJava_21(){
  $ensureInstance(this);
  return this.instance.getDefaultJava();
}
;
_.getDefaultNative = function getDefaultNative_21(){
  $ensureInstance(this);
  return this.instance.getDefaultNative();
}
;
_.loadCurrencyMapJava = function loadCurrencyMapJava_18(){
  $ensureInstance(this);
  return this.instance.loadCurrencyMapJava();
}
;
_.loadCurrencyMapNative = function loadCurrencyMapNative_18(){
  $ensureInstance(this);
  return this.instance.loadCurrencyMapNative();
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable]);
_.instance = null;
function $$init_149(){
}

function DefaultCurrencyData_0(currencyCode, currencySymbol, fractionDigits){
  Object_1.call(this);
  $$init_149();
  this.currencyCode = currencyCode;
  this.currencySymbol = currencySymbol;
  this.fractionDigits = fractionDigits;
}

function DefaultCurrencyData(){
}

_ = DefaultCurrencyData.prototype = new Object_0;
_.getClass$ = function getClass_150(){
  return Lcom_google_gwt_i18n_client_DefaultCurrencyData_2_classLit;
}
;
_.getCurrencyCode = function getCurrencyCode(){
  return this.currencyCode;
}
;
_.getCurrencySymbol = function getCurrencySymbol(){
  return this.currencySymbol;
}
;
_.getDefaultFractionDigits = function getDefaultFractionDigits(){
  return this.fractionDigits;
}
;
_.isDeprecated = function isDeprecated(){
  return false;
}
;
_.castableTypeMap$ = makeCastMap([Q$CurrencyData]);
_.currencyCode = null;
_.currencySymbol = null;
_.fractionDigits = 0;
function $ensureNumberConstants(this$static){
  isNull(this$static.numberConstants) && (this$static.numberConstants = this$static.infoImpl.getNumberConstants());
}

function $getNumberConstants(this$static){
  $ensureNumberConstants(this$static);
  return this$static.numberConstants;
}

function $clinit_NumberFormat(){
  $clinit_NumberFormat = nullMethod;
  localizedNumberConstants = $getNumberConstants(getCurrentLocale());
  defaultNumberConstants = localizedNumberConstants;
  null;
  ',\u060C\u066B\u3001\uFE10\uFE11\uFE50\uFE51\uFF0C\uFF64';
  '.\u2024\u3002\uFE12\uFE52\uFF0E\uFF61';
  164;
  46;
  35;
  69;
  44;
  45;
  8240;
  37;
  59;
  48;
  39;
}

function $$init_155(this$static){
}

function $addExponent(this$static, digits){
  var exponentDigits, i;
  $append_7(digits, this$static.numberConstants.exponentialSymbol());
  if (this$static.exponent < 0) {
    this$static.exponent = -this$static.exponent;
    $append_7(digits, this$static.numberConstants.minusSign());
  }
  exponentDigits = valueOf_20(this$static.exponent);
  for (i = $length_1(exponentDigits); i < this$static.minExponentDigits; ++i) {
    $append_5(digits, 48);
  }
  $append_7(digits, exponentDigits);
}

function $addZeroAndDecimal(this$static, digits, decimalSeparator){
  if (this$static.digitsLength == 0) {
    $insert_7(digits, 0, 48);
    ++this$static.decimalPosition;
    ++this$static.digitsLength;
  }
  if (this$static.decimalPosition < this$static.digitsLength || this$static.decimalSeparatorAlwaysShown) {
    $insert_7(digits, this$static.decimalPosition, decimalSeparator);
    ++this$static.digitsLength;
  }
}

function $adjustFractionDigits(this$static, digits){
  var requiredDigits, toRemove;
  requiredDigits = this$static.decimalPosition + this$static.minimumFractionDigits;
  if (this$static.digitsLength < requiredDigits) {
    while (this$static.digitsLength < requiredDigits) {
      $append_5(digits, 48);
      ++this$static.digitsLength;
    }
  }
   else {
    toRemove = this$static.decimalPosition + this$static.maximumFractionDigits;
    toRemove > this$static.digitsLength && (toRemove = this$static.digitsLength);
    while (toRemove > requiredDigits && $charAt_0(digits, toRemove - 1) == 48) {
      --toRemove;
    }
    if (toRemove < this$static.digitsLength) {
      $delete_0(digits, toRemove, this$static.digitsLength);
      this$static.digitsLength = toRemove;
    }
  }
}

function $computeExponent(this$static, digits){
  var remainder, strip;
  strip = 0;
  while (strip < this$static.digitsLength - 1 && $charAt_0(digits, strip) == 48) {
    ++strip;
  }
  if (strip > 0) {
    $delete_0(digits, 0, strip);
    this$static.digitsLength -= strip;
    this$static.exponent -= strip;
  }
  if (this$static.maximumIntegerDigits > this$static.minimumIntegerDigits && this$static.maximumIntegerDigits > 0) {
    this$static.exponent += this$static.decimalPosition - 1;
    remainder = this$static.exponent % this$static.maximumIntegerDigits;
    remainder < 0 && (remainder += this$static.maximumIntegerDigits);
    this$static.decimalPosition = remainder + 1;
    this$static.exponent -= remainder;
  }
   else {
    this$static.exponent += this$static.decimalPosition - this$static.minimumIntegerDigits;
    this$static.decimalPosition = this$static.minimumIntegerDigits;
  }
  if (this$static.digitsLength == 1 && $charAt_0(digits, 0) == 48) {
    this$static.exponent = 0;
    this$static.decimalPosition = this$static.minimumIntegerDigits;
  }
}

function $format_1(this$static, number){
  var buf, isNegative, preRound, scale;
  if (isNaN_0(number)) {
    return this$static.numberConstants.notANumber();
  }
  isNegative = number < 0 || number == 0 && 1 / number < 0;
  isNegative && (number = -number);
  buf = new StringBuilder_0;
  if (isInfinite(number)) {
    $append_7(buf, isNegative?this$static.negativePrefix:this$static.positivePrefix);
    $append_7(buf, this$static.numberConstants.infinity());
    $append_7(buf, isNegative?this$static.negativeSuffix:this$static.positiveSuffix);
    return $toString_5(buf);
  }
  number *= this$static.multiplier;
  scale = toScaledString(buf, number);
  preRound = $length_3(buf) + scale + this$static.maximumFractionDigits + 3;
  if (preRound > 0 && preRound < $length_3(buf) && $charAt_0(buf, preRound) == 57) {
    $propagateCarry(this$static, buf, preRound - 1);
    scale += $length_3(buf) - preRound;
    $delete_0(buf, preRound, $length_3(buf));
  }
  $format_2(this$static, isNegative, buf, scale);
  return $toString_5(buf);
}

function $format_2(this$static, isNegative, digits, scale){
  var currentGroupingSize, decimalSeparator, groupingSeparator, useExponent, zeroChar;
  if (this$static.isCurrencyFormat) {
    decimalSeparator = $charAt(this$static.numberConstants.monetarySeparator(), 0);
    groupingSeparator = $charAt(this$static.numberConstants.monetaryGroupingSeparator(), 0);
  }
   else {
    decimalSeparator = $charAt(this$static.numberConstants.decimalSeparator(), 0);
    groupingSeparator = $charAt(this$static.numberConstants.groupingSeparator(), 0);
  }
  this$static.exponent = 0;
  this$static.digitsLength = $length_3(digits);
  this$static.decimalPosition = this$static.digitsLength + scale;
  useExponent = this$static.useExponentialNotation;
  currentGroupingSize = this$static.groupingSize;
  this$static.decimalPosition > 1024 && (useExponent = true);
  useExponent && $computeExponent(this$static, digits);
  $processLeadingZeros(this$static, digits);
  $roundValue(this$static, digits);
  $insertGroupingSeparators(this$static, digits, groupingSeparator, currentGroupingSize);
  $adjustFractionDigits(this$static, digits);
  $addZeroAndDecimal(this$static, digits, decimalSeparator);
  useExponent && $addExponent(this$static, digits);
  zeroChar = $charAt(this$static.numberConstants.zeroDigit(), 0);
  zeroChar != 48 && $localizeDigits(digits, zeroChar);
  $insert_9(digits, 0, isNegative?this$static.negativePrefix:this$static.positivePrefix);
  $append_7(digits, isNegative?this$static.negativeSuffix:this$static.positiveSuffix);
}

function $getPattern_0(this$static){
  return this$static.pattern;
}

function $insertGroupingSeparators(this$static, digits, groupingSeparator, g){
  var i;
  if (g > 0) {
    for (i = g; i < this$static.decimalPosition; i += g + 1) {
      $insert_7(digits, this$static.decimalPosition - i, groupingSeparator);
      ++this$static.decimalPosition;
      ++this$static.digitsLength;
    }
  }
}

function $localizeDigits(digits, zero){
  var ch, i, n;
  n = $length_3(digits);
  for (i = 0; i < n; ++i) {
    ch = $charAt_0(digits, i);
    ch >= 48 && ch <= 57 && $setCharAt(digits, i, narrow_char(ch - 48 + zero));
  }
}

function $parseAffix(this$static, pattern, start, affix, inNegativePattern){
  var ch, inQuote, len, pos;
  $delete(affix, 0, $length_2(affix));
  inQuote = false;
  len = $length_1(pattern);
  for (pos = start; pos < len; ++pos) {
    ch = $charAt(pattern, pos);
    if (ch == 39) {
      if (pos + 1 < len && $charAt(pattern, pos + 1) == 39) {
        ++pos;
        $append_3(affix, "'");
      }
       else {
        inQuote = !inQuote;
      }
      continue;
    }
    if (inQuote) {
      $append_1(affix, ch);
    }
     else {
      switch (ch) {
        case 35:
        case 48:
        case 44:
        case 46:
        case 59:
          return pos - start;
        case 164:
          this$static.isCurrencyFormat = true;
          if (pos + 1 < len && $charAt(pattern, pos + 1) == 164) {
            ++pos;
            $append_3(affix, this$static.currencyCode);
          }
           else {
            $append_3(affix, this$static.currencySymbol);
          }

          break;
        case 37:
          if (!inNegativePattern) {
            if (this$static.multiplier != 1) {
              throw new IllegalArgumentException_1('Too many percent/per mille characters in pattern "' + pattern + '"');
            }
            this$static.multiplier = 100;
          }

          $append_3(affix, this$static.numberConstants.percent());
          break;
        case 8240:
          if (!inNegativePattern) {
            if (this$static.multiplier != 1) {
              throw new IllegalArgumentException_1('Too many percent/per mille characters in pattern "' + pattern + '"');
            }
            this$static.multiplier = 1000;
          }

          $append_3(affix, this$static.numberConstants.perMill());
          break;
        case 45:
          $append_3(affix, '-');
          break;
        default:$append_1(affix, ch);
      }
    }
  }
  return len - start;
}

function $parsePattern_0(this$static, pattern){
  var affix, pos;
  pos = 0;
  affix = new StringBuffer_0;
  pos += $parseAffix(this$static, pattern, pos, affix, false);
  this$static.positivePrefix = $toString_4(affix);
  pos += $parseTrunk(this$static, pattern, pos, false);
  pos += $parseAffix(this$static, pattern, pos, affix, false);
  this$static.positiveSuffix = $toString_4(affix);
  if (pos < $length_1(pattern) && $charAt(pattern, pos) == 59) {
    ++pos;
    pos += $parseAffix(this$static, pattern, pos, affix, true);
    this$static.negativePrefix = $toString_4(affix);
    pos += $parseTrunk(this$static, pattern, pos, true);
    pos += $parseAffix(this$static, pattern, pos, affix, true);
    this$static.negativeSuffix = $toString_4(affix);
  }
   else {
    this$static.negativePrefix = this$static.numberConstants.minusSign() + this$static.positivePrefix;
    this$static.negativeSuffix = this$static.positiveSuffix;
  }
}

function $parseTrunk(this$static, pattern, start, ignorePattern){
  var ch, decimalPos, digitLeftCount, digitRightCount, effectiveDecimalPos, groupingCount, len, loop, n, pos, totalDigits, zeroDigitCount;
  decimalPos = -1;
  digitLeftCount = 0;
  zeroDigitCount = 0;
  digitRightCount = 0;
  groupingCount = -1;
  len = $length_1(pattern);
  pos = start;
  loop = true;
  for (; pos < len && loop; ++pos) {
    ch = $charAt(pattern, pos);
    switch (ch) {
      case 35:
        zeroDigitCount > 0?++digitRightCount:++digitLeftCount;
        groupingCount >= 0 && decimalPos < 0 && ++groupingCount;
        break;
      case 48:
        if (digitRightCount > 0) {
          throw new IllegalArgumentException_1("Unexpected '0' in pattern \"" + pattern + '"');
        }

        ++zeroDigitCount;
        groupingCount >= 0 && decimalPos < 0 && ++groupingCount;
        break;
      case 44:
        groupingCount = 0;
        break;
      case 46:
        if (decimalPos >= 0) {
          throw new IllegalArgumentException_1('Multiple decimal separators in pattern "' + pattern + '"');
        }

        decimalPos = digitLeftCount + zeroDigitCount + digitRightCount;
        break;
      case 69:
        if (!ignorePattern) {
          if (this$static.useExponentialNotation) {
            throw new IllegalArgumentException_1('Multiple exponential symbols in pattern "' + pattern + '"');
          }
          this$static.useExponentialNotation = true;
          this$static.minExponentDigits = 0;
        }

        while (pos + 1 < len && $charAt(pattern, pos + 1) == 48) {
          ++pos;
          ignorePattern || ++this$static.minExponentDigits;
        }

        if (!ignorePattern && digitLeftCount + zeroDigitCount < 1 || this$static.minExponentDigits < 1) {
          throw new IllegalArgumentException_1('Malformed exponential pattern "' + pattern + '"');
        }

        loop = false;
        break;
      default:--pos;
        loop = false;
    }
  }
  if (zeroDigitCount == 0 && digitLeftCount > 0 && decimalPos >= 0) {
    n = decimalPos;
    n == 0 && ++n;
    digitRightCount = digitLeftCount - n;
    digitLeftCount = n - 1;
    zeroDigitCount = 1;
  }
  if (decimalPos < 0 && digitRightCount > 0 || decimalPos >= 0 && (decimalPos < digitLeftCount || decimalPos > digitLeftCount + zeroDigitCount) || groupingCount == 0) {
    throw new IllegalArgumentException_1('Malformed pattern "' + pattern + '"');
  }
  if (ignorePattern) {
    return pos - start;
  }
  totalDigits = digitLeftCount + zeroDigitCount + digitRightCount;
  this$static.maximumFractionDigits = decimalPos >= 0?totalDigits - decimalPos:0;
  if (decimalPos >= 0) {
    this$static.minimumFractionDigits = digitLeftCount + zeroDigitCount - decimalPos;
    this$static.minimumFractionDigits < 0 && (this$static.minimumFractionDigits = 0);
  }
  effectiveDecimalPos = decimalPos >= 0?decimalPos:totalDigits;
  this$static.minimumIntegerDigits = effectiveDecimalPos - digitLeftCount;
  if (this$static.useExponentialNotation) {
    this$static.maximumIntegerDigits = digitLeftCount + this$static.minimumIntegerDigits;
    this$static.maximumFractionDigits == 0 && this$static.minimumIntegerDigits == 0 && (this$static.minimumIntegerDigits = 1);
  }
  this$static.groupingSize = groupingCount > 0?groupingCount:0;
  this$static.decimalSeparatorAlwaysShown = decimalPos == 0 || decimalPos == totalDigits;
  return pos - start;
}

function $processLeadingZeros(this$static, digits){
  var i, prefix, strip;
  if (this$static.decimalPosition > this$static.digitsLength) {
    while (this$static.digitsLength < this$static.decimalPosition) {
      $append_5(digits, 48);
      ++this$static.digitsLength;
    }
  }
  if (!this$static.useExponentialNotation) {
    if (this$static.decimalPosition < this$static.minimumIntegerDigits) {
      prefix = new StringBuilder_0;
      while (this$static.decimalPosition < this$static.minimumIntegerDigits) {
        $append_5(prefix, 48);
        ++this$static.decimalPosition;
        ++this$static.digitsLength;
      }
      $insert_8(digits, 0, prefix);
    }
     else if (this$static.decimalPosition > this$static.minimumIntegerDigits) {
      strip = this$static.decimalPosition - this$static.minimumIntegerDigits;
      for (i = 0; i < strip; ++i) {
        if ($charAt_0(digits, i) != 48) {
          strip = i;
          break;
        }
      }
      if (strip > 0) {
        $delete_0(digits, 0, strip);
        this$static.digitsLength -= strip;
        this$static.decimalPosition -= strip;
      }
    }
  }
}

function $propagateCarry(this$static, digits, i){
  var carry, digit;
  carry = true;
  while (carry && i >= 0) {
    digit = $charAt_0(digits, i);
    if (digit == 57) {
      $setCharAt(digits, i--, 48);
    }
     else {
      $setCharAt(digits, i, narrow_char(digit + 1));
      carry = false;
    }
  }
  if (carry) {
    $insert_7(digits, 0, 49);
    ++this$static.decimalPosition;
    ++this$static.digitsLength;
  }
}

function $roundValue(this$static, digits){
  var i;
  if (this$static.digitsLength > this$static.decimalPosition + this$static.maximumFractionDigits && $charAt_0(digits, this$static.decimalPosition + this$static.maximumFractionDigits) >= 53) {
    i = this$static.decimalPosition + this$static.maximumFractionDigits - 1;
    $propagateCarry(this$static, digits, i);
  }
}

function NumberFormat_0(numberConstants, pattern, cdata, userSuppliedPattern){
  Object_1.call(this);
  $$init_155(this);
  if (isNull(cdata)) {
    throw new IllegalArgumentException_1('Unknown currency code');
  }
  this.numberConstants = numberConstants;
  this.pattern = pattern;
  this.currencyCode = getCurrencyCode__devirtual$(cdata);
  this.currencySymbol = getCurrencySymbol__devirtual$(cdata);
  $parsePattern_0(this, this.pattern);
  if (!userSuppliedPattern && this.isCurrencyFormat) {
    this.minimumFractionDigits = getDefaultFractionDigits__devirtual$(cdata);
    this.maximumFractionDigits = this.minimumFractionDigits;
  }
}

function NumberFormat_1(pattern, cdata, userSuppliedPattern){
  NumberFormat_0.call(this, defaultNumberConstants, pattern, cdata, userSuppliedPattern);
}

function getCurrencyFormat(){
  $clinit_NumberFormat();
  isNull(cachedCurrencyFormat) && (cachedCurrencyFormat = new NumberFormat_1(defaultNumberConstants.currencyPattern(), $getDefault(get_2()), false));
  return cachedCurrencyFormat;
}

function getDecimalFormat(){
  $clinit_NumberFormat();
  isNull(cachedDecimalFormat) && (cachedDecimalFormat = new NumberFormat_1(defaultNumberConstants.decimalPattern(), $getDefault(get_2()), false));
  return cachedDecimalFormat;
}

function getFormat_2(pattern){
  $clinit_NumberFormat();
  return new NumberFormat_1(pattern, $getDefault(get_2()), true);
}

function getPercentFormat(){
  $clinit_NumberFormat();
  isNull(cachedPercentFormat) && (cachedPercentFormat = new NumberFormat_1(defaultNumberConstants.percentPattern(), $getDefault(get_2()), false));
  return cachedPercentFormat;
}

function getScientificFormat(){
  $clinit_NumberFormat();
  isNull(cachedScientificFormat) && (cachedScientificFormat = new NumberFormat_1(defaultNumberConstants.scientificPattern(), $getDefault(get_2()), false));
  return cachedScientificFormat;
}

function toPrecision(d, digits){
  return d.toPrecision(digits);
}

function toScaledString(buf, val){
  var dot, expDigits, expIdx, scale, startLen;
  startLen = $length_3(buf);
  $append_7(buf, toPrecision(val, 20));
  scale = 0;
  expIdx = $indexOf_5(buf, 'e', startLen);
  expIdx < 0 && (expIdx = $indexOf_5(buf, 'E', startLen));
  if (expIdx >= 0) {
    expDigits = expIdx + 1;
    expDigits < $length_3(buf) && $charAt_0(buf, expDigits) == 43 && ++expDigits;
    expDigits < $length_3(buf) && (scale = parseInt_0($substring_1(buf, expDigits)));
    $delete_0(buf, expIdx, $length_3(buf));
  }
  dot = $indexOf_5(buf, '.', startLen);
  if (dot >= 0) {
    $deleteCharAt(buf, dot);
    scale -= $length_3(buf) - dot;
  }
  return scale;
}

function NumberFormat(){
}

_ = NumberFormat_1.prototype = NumberFormat.prototype = new Object_0;
_.getClass$ = function getClass_156(){
  return Lcom_google_gwt_i18n_client_NumberFormat_2_classLit;
}
;
_.currencyCode = null;
_.currencySymbol = null;
_.decimalPosition = 0;
_.decimalSeparatorAlwaysShown = false;
_.digitsLength = 0;
_.exponent = 0;
_.groupingSize = 3;
_.isCurrencyFormat = false;
_.maximumFractionDigits = 3;
_.maximumIntegerDigits = 40;
_.minExponentDigits = 0;
_.minimumFractionDigits = 0;
_.minimumIntegerDigits = 1;
_.multiplier = 1;
_.negativePrefix = '-';
_.negativeSuffix = '';
_.numberConstants = null;
_.pattern = null;
_.positivePrefix = '';
_.positiveSuffix = '';
_.useExponentialNotation = false;
var cachedCurrencyFormat = null, cachedDecimalFormat = null, cachedPercentFormat = null, cachedScientificFormat = null, defaultNumberConstants, localizedNumberConstants;
function $$init_157(){
}

function NumberConstantsImpl_en_0(){
  Object_1.call(this);
  $$init_157();
}

function NumberConstantsImpl_en(){
}

_ = NumberConstantsImpl_en_0.prototype = NumberConstantsImpl_en.prototype = new Object_0;
_.currencyPattern = function currencyPattern(){
  return '\xA4#,##0.00;(\xA4#,##0.00)';
}
;
_.decimalPattern = function decimalPattern(){
  return '#,##0.###';
}
;
_.decimalSeparator = function decimalSeparator_0(){
  return '.';
}
;
_.exponentialSymbol = function exponentialSymbol(){
  return 'E';
}
;
_.getClass$ = function getClass_158(){
  return Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_2_classLit;
}
;
_.groupingSeparator = function groupingSeparator_0(){
  return ',';
}
;
_.infinity = function infinity(){
  return '\u221E';
}
;
_.minusSign = function minusSign(){
  return '-';
}
;
_.monetaryGroupingSeparator = function monetaryGroupingSeparator(){
  return ',';
}
;
_.monetarySeparator = function monetarySeparator(){
  return '.';
}
;
_.notANumber = function notANumber(){
  return 'NaN';
}
;
_.perMill = function perMill(){
  return '\u2030';
}
;
_.percent = function percent(){
  return '%';
}
;
_.percentPattern = function percentPattern(){
  return '#,##0%';
}
;
_.scientificPattern = function scientificPattern(){
  return '#E0';
}
;
_.zeroDigit = function zeroDigit(){
  return '0';
}
;
function $$init_158(){
}

function NumberConstantsImpl_en_AU_0(){
  Object_1.call(this);
  $$init_158();
}

function NumberConstantsImpl_en_AU(){
}

_ = NumberConstantsImpl_en_AU_0.prototype = NumberConstantsImpl_en_AU.prototype = new Object_0;
_.currencyPattern = function currencyPattern_0(){
  return '\xA4#,##0.00';
}
;
_.decimalPattern = function decimalPattern_0(){
  return '#,##0.###';
}
;
_.decimalSeparator = function decimalSeparator_1(){
  return '.';
}
;
_.exponentialSymbol = function exponentialSymbol_0(){
  return 'E';
}
;
_.getClass$ = function getClass_159(){
  return Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1AU_2_classLit;
}
;
_.groupingSeparator = function groupingSeparator_1(){
  return ',';
}
;
_.infinity = function infinity_0(){
  return '\u221E';
}
;
_.minusSign = function minusSign_0(){
  return '-';
}
;
_.monetaryGroupingSeparator = function monetaryGroupingSeparator_0(){
  return ',';
}
;
_.monetarySeparator = function monetarySeparator_0(){
  return '.';
}
;
_.notANumber = function notANumber_0(){
  return 'NaN';
}
;
_.perMill = function perMill_0(){
  return '\u2030';
}
;
_.percent = function percent_0(){
  return '%';
}
;
_.percentPattern = function percentPattern_0(){
  return '#,##0%';
}
;
_.scientificPattern = function scientificPattern_0(){
  return '#E0';
}
;
_.zeroDigit = function zeroDigit_0(){
  return '0';
}
;
function $$init_159(){
}

function NumberConstantsImpl_en_BE_0(){
  Object_1.call(this);
  $$init_159();
}

function NumberConstantsImpl_en_BE(){
}

_ = NumberConstantsImpl_en_BE_0.prototype = NumberConstantsImpl_en_BE.prototype = new Object_0;
_.currencyPattern = function currencyPattern_1(){
  return '#,##0.00\xA0\xA4';
}
;
_.decimalPattern = function decimalPattern_1(){
  return '#,##0.###';
}
;
_.decimalSeparator = function decimalSeparator_2(){
  return ',';
}
;
_.exponentialSymbol = function exponentialSymbol_1(){
  return 'E';
}
;
_.getClass$ = function getClass_160(){
  return Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1BE_2_classLit;
}
;
_.groupingSeparator = function groupingSeparator_2(){
  return '.';
}
;
_.infinity = function infinity_1(){
  return '\u221E';
}
;
_.minusSign = function minusSign_1(){
  return '-';
}
;
_.monetaryGroupingSeparator = function monetaryGroupingSeparator_1(){
  return '.';
}
;
_.monetarySeparator = function monetarySeparator_1(){
  return ',';
}
;
_.notANumber = function notANumber_1(){
  return 'NaN';
}
;
_.perMill = function perMill_1(){
  return '\u2030';
}
;
_.percent = function percent_1(){
  return '%';
}
;
_.percentPattern = function percentPattern_1(){
  return '#,##0%';
}
;
_.scientificPattern = function scientificPattern_1(){
  return '#E0';
}
;
_.zeroDigit = function zeroDigit_1(){
  return '0';
}
;
function $$init_160(){
}

function NumberConstantsImpl_en_BW_0(){
  Object_1.call(this);
  $$init_160();
}

function NumberConstantsImpl_en_BW(){
}

_ = NumberConstantsImpl_en_BW_0.prototype = NumberConstantsImpl_en_BW.prototype = new Object_0;
_.currencyPattern = function currencyPattern_2(){
  return '\xA4#,##0.00';
}
;
_.decimalPattern = function decimalPattern_2(){
  return '#,##0.###';
}
;
_.decimalSeparator = function decimalSeparator_3(){
  return '.';
}
;
_.exponentialSymbol = function exponentialSymbol_2(){
  return 'E';
}
;
_.getClass$ = function getClass_161(){
  return Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1BW_2_classLit;
}
;
_.groupingSeparator = function groupingSeparator_3(){
  return ',';
}
;
_.infinity = function infinity_2(){
  return '\u221E';
}
;
_.minusSign = function minusSign_2(){
  return '-';
}
;
_.monetaryGroupingSeparator = function monetaryGroupingSeparator_2(){
  return ',';
}
;
_.monetarySeparator = function monetarySeparator_2(){
  return '.';
}
;
_.notANumber = function notANumber_2(){
  return 'NaN';
}
;
_.perMill = function perMill_2(){
  return '\u2030';
}
;
_.percent = function percent_2(){
  return '%';
}
;
_.percentPattern = function percentPattern_2(){
  return '#,##0%';
}
;
_.scientificPattern = function scientificPattern_2(){
  return '#E0';
}
;
_.zeroDigit = function zeroDigit_2(){
  return '0';
}
;
function $$init_161(){
}

function NumberConstantsImpl_en_BZ_0(){
  Object_1.call(this);
  $$init_161();
}

function NumberConstantsImpl_en_BZ(){
}

_ = NumberConstantsImpl_en_BZ_0.prototype = NumberConstantsImpl_en_BZ.prototype = new Object_0;
_.currencyPattern = function currencyPattern_3(){
  return '\xA4#,##0.00';
}
;
_.decimalPattern = function decimalPattern_3(){
  return '#,##0.###';
}
;
_.decimalSeparator = function decimalSeparator_4(){
  return '.';
}
;
_.exponentialSymbol = function exponentialSymbol_3(){
  return 'E';
}
;
_.getClass$ = function getClass_162(){
  return Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1BZ_2_classLit;
}
;
_.groupingSeparator = function groupingSeparator_4(){
  return ',';
}
;
_.infinity = function infinity_3(){
  return '\u221E';
}
;
_.minusSign = function minusSign_3(){
  return '-';
}
;
_.monetaryGroupingSeparator = function monetaryGroupingSeparator_3(){
  return ',';
}
;
_.monetarySeparator = function monetarySeparator_3(){
  return '.';
}
;
_.notANumber = function notANumber_3(){
  return 'NaN';
}
;
_.perMill = function perMill_3(){
  return '\u2030';
}
;
_.percent = function percent_3(){
  return '%';
}
;
_.percentPattern = function percentPattern_3(){
  return '#,##0%';
}
;
_.scientificPattern = function scientificPattern_3(){
  return '#E0';
}
;
_.zeroDigit = function zeroDigit_3(){
  return '0';
}
;
function $$init_162(){
}

function NumberConstantsImpl_en_CA_0(){
  Object_1.call(this);
  $$init_162();
}

function NumberConstantsImpl_en_CA(){
}

_ = NumberConstantsImpl_en_CA_0.prototype = NumberConstantsImpl_en_CA.prototype = new Object_0;
_.currencyPattern = function currencyPattern_4(){
  return '\xA4#,##0.00;(\xA4#,##0.00)';
}
;
_.decimalPattern = function decimalPattern_4(){
  return '#,##0.###';
}
;
_.decimalSeparator = function decimalSeparator_5(){
  return '.';
}
;
_.exponentialSymbol = function exponentialSymbol_4(){
  return 'E';
}
;
_.getClass$ = function getClass_163(){
  return Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1CA_2_classLit;
}
;
_.groupingSeparator = function groupingSeparator_5(){
  return ',';
}
;
_.infinity = function infinity_4(){
  return '\u221E';
}
;
_.minusSign = function minusSign_4(){
  return '-';
}
;
_.monetaryGroupingSeparator = function monetaryGroupingSeparator_4(){
  return ',';
}
;
_.monetarySeparator = function monetarySeparator_4(){
  return '.';
}
;
_.notANumber = function notANumber_4(){
  return 'NaN';
}
;
_.perMill = function perMill_4(){
  return '\u2030';
}
;
_.percent = function percent_4(){
  return '%';
}
;
_.percentPattern = function percentPattern_4(){
  return '#,##0%';
}
;
_.scientificPattern = function scientificPattern_4(){
  return '#E0';
}
;
_.zeroDigit = function zeroDigit_4(){
  return '0';
}
;
function $$init_163(){
}

function NumberConstantsImpl_en_GB_0(){
  Object_1.call(this);
  $$init_163();
}

function NumberConstantsImpl_en_GB(){
}

_ = NumberConstantsImpl_en_GB_0.prototype = NumberConstantsImpl_en_GB.prototype = new Object_0;
_.currencyPattern = function currencyPattern_5(){
  return '\xA4#,##0.00';
}
;
_.decimalPattern = function decimalPattern_5(){
  return '#,##0.###';
}
;
_.decimalSeparator = function decimalSeparator_6(){
  return '.';
}
;
_.exponentialSymbol = function exponentialSymbol_5(){
  return 'E';
}
;
_.getClass$ = function getClass_164(){
  return Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1GB_2_classLit;
}
;
_.groupingSeparator = function groupingSeparator_6(){
  return ',';
}
;
_.infinity = function infinity_5(){
  return '\u221E';
}
;
_.minusSign = function minusSign_5(){
  return '-';
}
;
_.monetaryGroupingSeparator = function monetaryGroupingSeparator_5(){
  return ',';
}
;
_.monetarySeparator = function monetarySeparator_5(){
  return '.';
}
;
_.notANumber = function notANumber_5(){
  return 'NaN';
}
;
_.perMill = function perMill_5(){
  return '\u2030';
}
;
_.percent = function percent_5(){
  return '%';
}
;
_.percentPattern = function percentPattern_5(){
  return '#,##0%';
}
;
_.scientificPattern = function scientificPattern_5(){
  return '#E0';
}
;
_.zeroDigit = function zeroDigit_5(){
  return '0';
}
;
function $$init_164(){
}

function NumberConstantsImpl_en_HK_0(){
  Object_1.call(this);
  $$init_164();
}

function NumberConstantsImpl_en_HK(){
}

_ = NumberConstantsImpl_en_HK_0.prototype = NumberConstantsImpl_en_HK.prototype = new Object_0;
_.currencyPattern = function currencyPattern_6(){
  return '\xA4#,##0.00;(\xA4#,##0.00)';
}
;
_.decimalPattern = function decimalPattern_6(){
  return '#,##0.###';
}
;
_.decimalSeparator = function decimalSeparator_7(){
  return '.';
}
;
_.exponentialSymbol = function exponentialSymbol_6(){
  return 'E';
}
;
_.getClass$ = function getClass_165(){
  return Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1HK_2_classLit;
}
;
_.groupingSeparator = function groupingSeparator_7(){
  return ',';
}
;
_.infinity = function infinity_6(){
  return '\u221E';
}
;
_.minusSign = function minusSign_6(){
  return '-';
}
;
_.monetaryGroupingSeparator = function monetaryGroupingSeparator_6(){
  return ',';
}
;
_.monetarySeparator = function monetarySeparator_6(){
  return '.';
}
;
_.notANumber = function notANumber_6(){
  return 'NaN';
}
;
_.perMill = function perMill_6(){
  return '\u2030';
}
;
_.percent = function percent_6(){
  return '%';
}
;
_.percentPattern = function percentPattern_6(){
  return '#,##0%';
}
;
_.scientificPattern = function scientificPattern_6(){
  return '#E0';
}
;
_.zeroDigit = function zeroDigit_6(){
  return '0';
}
;
function $$init_165(){
}

function NumberConstantsImpl_en_IE_0(){
  Object_1.call(this);
  $$init_165();
}

function NumberConstantsImpl_en_IE(){
}

_ = NumberConstantsImpl_en_IE_0.prototype = NumberConstantsImpl_en_IE.prototype = new Object_0;
_.currencyPattern = function currencyPattern_7(){
  return '\xA4#,##0.00';
}
;
_.decimalPattern = function decimalPattern_7(){
  return '#,##0.###';
}
;
_.decimalSeparator = function decimalSeparator_8(){
  return '.';
}
;
_.exponentialSymbol = function exponentialSymbol_7(){
  return 'E';
}
;
_.getClass$ = function getClass_166(){
  return Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1IE_2_classLit;
}
;
_.groupingSeparator = function groupingSeparator_8(){
  return ',';
}
;
_.infinity = function infinity_7(){
  return '\u221E';
}
;
_.minusSign = function minusSign_7(){
  return '-';
}
;
_.monetaryGroupingSeparator = function monetaryGroupingSeparator_7(){
  return ',';
}
;
_.monetarySeparator = function monetarySeparator_7(){
  return '.';
}
;
_.notANumber = function notANumber_7(){
  return 'NaN';
}
;
_.perMill = function perMill_7(){
  return '\u2030';
}
;
_.percent = function percent_7(){
  return '%';
}
;
_.percentPattern = function percentPattern_7(){
  return '#,##0%';
}
;
_.scientificPattern = function scientificPattern_7(){
  return '#E0';
}
;
_.zeroDigit = function zeroDigit_7(){
  return '0';
}
;
function $$init_166(){
}

function NumberConstantsImpl_en_IN_0(){
  Object_1.call(this);
  $$init_166();
}

function NumberConstantsImpl_en_IN(){
}

_ = NumberConstantsImpl_en_IN_0.prototype = NumberConstantsImpl_en_IN.prototype = new Object_0;
_.currencyPattern = function currencyPattern_8(){
  return '\xA4\xA0#,##,##0.00';
}
;
_.decimalPattern = function decimalPattern_8(){
  return '#,##,##0.###';
}
;
_.decimalSeparator = function decimalSeparator_9(){
  return '.';
}
;
_.exponentialSymbol = function exponentialSymbol_8(){
  return 'E';
}
;
_.getClass$ = function getClass_167(){
  return Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1IN_2_classLit;
}
;
_.groupingSeparator = function groupingSeparator_9(){
  return ',';
}
;
_.infinity = function infinity_8(){
  return '\u221E';
}
;
_.minusSign = function minusSign_8(){
  return '-';
}
;
_.monetaryGroupingSeparator = function monetaryGroupingSeparator_8(){
  return ',';
}
;
_.monetarySeparator = function monetarySeparator_8(){
  return '.';
}
;
_.notANumber = function notANumber_8(){
  return 'NaN';
}
;
_.perMill = function perMill_8(){
  return '\u2030';
}
;
_.percent = function percent_8(){
  return '%';
}
;
_.percentPattern = function percentPattern_8(){
  return '#,##,##0%';
}
;
_.scientificPattern = function scientificPattern_8(){
  return '#E0';
}
;
_.zeroDigit = function zeroDigit_8(){
  return '0';
}
;
function $$init_167(){
}

function NumberConstantsImpl_en_JM_0(){
  Object_1.call(this);
  $$init_167();
}

function NumberConstantsImpl_en_JM(){
}

_ = NumberConstantsImpl_en_JM_0.prototype = NumberConstantsImpl_en_JM.prototype = new Object_0;
_.currencyPattern = function currencyPattern_9(){
  return '\xA4#,##0.00';
}
;
_.decimalPattern = function decimalPattern_9(){
  return '#,##0.###';
}
;
_.decimalSeparator = function decimalSeparator_10(){
  return '.';
}
;
_.exponentialSymbol = function exponentialSymbol_9(){
  return 'E';
}
;
_.getClass$ = function getClass_168(){
  return Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1JM_2_classLit;
}
;
_.groupingSeparator = function groupingSeparator_10(){
  return ',';
}
;
_.infinity = function infinity_9(){
  return '\u221E';
}
;
_.minusSign = function minusSign_9(){
  return '-';
}
;
_.monetaryGroupingSeparator = function monetaryGroupingSeparator_9(){
  return ',';
}
;
_.monetarySeparator = function monetarySeparator_9(){
  return '.';
}
;
_.notANumber = function notANumber_9(){
  return 'NaN';
}
;
_.perMill = function perMill_9(){
  return '\u2030';
}
;
_.percent = function percent_9(){
  return '%';
}
;
_.percentPattern = function percentPattern_9(){
  return '#,##0%';
}
;
_.scientificPattern = function scientificPattern_9(){
  return '#E0';
}
;
_.zeroDigit = function zeroDigit_9(){
  return '0';
}
;
function $$init_168(){
}

function NumberConstantsImpl_en_MT_0(){
  Object_1.call(this);
  $$init_168();
}

function NumberConstantsImpl_en_MT(){
}

_ = NumberConstantsImpl_en_MT_0.prototype = NumberConstantsImpl_en_MT.prototype = new Object_0;
_.currencyPattern = function currencyPattern_10(){
  return '\xA4#,##0.00';
}
;
_.decimalPattern = function decimalPattern_10(){
  return '#,##0.###';
}
;
_.decimalSeparator = function decimalSeparator_11(){
  return '.';
}
;
_.exponentialSymbol = function exponentialSymbol_10(){
  return 'E';
}
;
_.getClass$ = function getClass_169(){
  return Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1MT_2_classLit;
}
;
_.groupingSeparator = function groupingSeparator_11(){
  return ',';
}
;
_.infinity = function infinity_10(){
  return '\u221E';
}
;
_.minusSign = function minusSign_10(){
  return '-';
}
;
_.monetaryGroupingSeparator = function monetaryGroupingSeparator_10(){
  return ',';
}
;
_.monetarySeparator = function monetarySeparator_10(){
  return '.';
}
;
_.notANumber = function notANumber_10(){
  return 'NaN';
}
;
_.perMill = function perMill_10(){
  return '\u2030';
}
;
_.percent = function percent_10(){
  return '%';
}
;
_.percentPattern = function percentPattern_10(){
  return '#,##0%';
}
;
_.scientificPattern = function scientificPattern_10(){
  return '#E0';
}
;
_.zeroDigit = function zeroDigit_10(){
  return '0';
}
;
function $$init_169(){
}

function NumberConstantsImpl_en_NA_0(){
  Object_1.call(this);
  $$init_169();
}

function NumberConstantsImpl_en_NA(){
}

_ = NumberConstantsImpl_en_NA_0.prototype = NumberConstantsImpl_en_NA.prototype = new Object_0;
_.currencyPattern = function currencyPattern_11(){
  return '\xA4#,##0.00';
}
;
_.decimalPattern = function decimalPattern_11(){
  return '#,##0.###';
}
;
_.decimalSeparator = function decimalSeparator_12(){
  return '.';
}
;
_.exponentialSymbol = function exponentialSymbol_11(){
  return 'E';
}
;
_.getClass$ = function getClass_170(){
  return Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1NA_2_classLit;
}
;
_.groupingSeparator = function groupingSeparator_12(){
  return ',';
}
;
_.infinity = function infinity_11(){
  return '\u221E';
}
;
_.minusSign = function minusSign_11(){
  return '-';
}
;
_.monetaryGroupingSeparator = function monetaryGroupingSeparator_11(){
  return ',';
}
;
_.monetarySeparator = function monetarySeparator_11(){
  return '.';
}
;
_.notANumber = function notANumber_11(){
  return 'NaN';
}
;
_.perMill = function perMill_11(){
  return '\u2030';
}
;
_.percent = function percent_11(){
  return '%';
}
;
_.percentPattern = function percentPattern_11(){
  return '#,##0%';
}
;
_.scientificPattern = function scientificPattern_11(){
  return '#E0';
}
;
_.zeroDigit = function zeroDigit_11(){
  return '0';
}
;
function $$init_170(){
}

function NumberConstantsImpl_en_NZ_0(){
  Object_1.call(this);
  $$init_170();
}

function NumberConstantsImpl_en_NZ(){
}

_ = NumberConstantsImpl_en_NZ_0.prototype = NumberConstantsImpl_en_NZ.prototype = new Object_0;
_.currencyPattern = function currencyPattern_12(){
  return '\xA4#,##0.00';
}
;
_.decimalPattern = function decimalPattern_12(){
  return '#,##0.###';
}
;
_.decimalSeparator = function decimalSeparator_13(){
  return '.';
}
;
_.exponentialSymbol = function exponentialSymbol_12(){
  return 'E';
}
;
_.getClass$ = function getClass_171(){
  return Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1NZ_2_classLit;
}
;
_.groupingSeparator = function groupingSeparator_13(){
  return ',';
}
;
_.infinity = function infinity_12(){
  return '\u221E';
}
;
_.minusSign = function minusSign_12(){
  return '-';
}
;
_.monetaryGroupingSeparator = function monetaryGroupingSeparator_12(){
  return ',';
}
;
_.monetarySeparator = function monetarySeparator_12(){
  return '.';
}
;
_.notANumber = function notANumber_12(){
  return 'NaN';
}
;
_.perMill = function perMill_12(){
  return '\u2030';
}
;
_.percent = function percent_12(){
  return '%';
}
;
_.percentPattern = function percentPattern_12(){
  return '#,##0%';
}
;
_.scientificPattern = function scientificPattern_12(){
  return '#E0';
}
;
_.zeroDigit = function zeroDigit_12(){
  return '0';
}
;
function $$init_171(){
}

function NumberConstantsImpl_en_PH_0(){
  Object_1.call(this);
  $$init_171();
}

function NumberConstantsImpl_en_PH(){
}

_ = NumberConstantsImpl_en_PH_0.prototype = NumberConstantsImpl_en_PH.prototype = new Object_0;
_.currencyPattern = function currencyPattern_13(){
  return '\xA4#,##0.00;(\xA4#,##0.00)';
}
;
_.decimalPattern = function decimalPattern_13(){
  return '#,##0.###';
}
;
_.decimalSeparator = function decimalSeparator_14(){
  return '.';
}
;
_.exponentialSymbol = function exponentialSymbol_13(){
  return 'E';
}
;
_.getClass$ = function getClass_172(){
  return Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1PH_2_classLit;
}
;
_.groupingSeparator = function groupingSeparator_14(){
  return ',';
}
;
_.infinity = function infinity_13(){
  return '\u221E';
}
;
_.minusSign = function minusSign_13(){
  return '-';
}
;
_.monetaryGroupingSeparator = function monetaryGroupingSeparator_13(){
  return ',';
}
;
_.monetarySeparator = function monetarySeparator_13(){
  return '.';
}
;
_.notANumber = function notANumber_13(){
  return 'NaN';
}
;
_.perMill = function perMill_13(){
  return '\u2030';
}
;
_.percent = function percent_13(){
  return '%';
}
;
_.percentPattern = function percentPattern_13(){
  return '#,##0%';
}
;
_.scientificPattern = function scientificPattern_13(){
  return '#E0';
}
;
_.zeroDigit = function zeroDigit_13(){
  return '0';
}
;
function $$init_172(){
}

function NumberConstantsImpl_en_PK_0(){
  Object_1.call(this);
  $$init_172();
}

function NumberConstantsImpl_en_PK(){
}

_ = NumberConstantsImpl_en_PK_0.prototype = NumberConstantsImpl_en_PK.prototype = new Object_0;
_.currencyPattern = function currencyPattern_14(){
  return '\xA4\xA0#,##,##0.00';
}
;
_.decimalPattern = function decimalPattern_14(){
  return '#,##,##0.###';
}
;
_.decimalSeparator = function decimalSeparator_15(){
  return '.';
}
;
_.exponentialSymbol = function exponentialSymbol_14(){
  return 'E';
}
;
_.getClass$ = function getClass_173(){
  return Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1PK_2_classLit;
}
;
_.groupingSeparator = function groupingSeparator_15(){
  return ',';
}
;
_.infinity = function infinity_14(){
  return '\u221E';
}
;
_.minusSign = function minusSign_14(){
  return '-';
}
;
_.monetaryGroupingSeparator = function monetaryGroupingSeparator_14(){
  return ',';
}
;
_.monetarySeparator = function monetarySeparator_14(){
  return '.';
}
;
_.notANumber = function notANumber_14(){
  return 'NaN';
}
;
_.perMill = function perMill_14(){
  return '\u2030';
}
;
_.percent = function percent_14(){
  return '%';
}
;
_.percentPattern = function percentPattern_14(){
  return '#,##,##0%';
}
;
_.scientificPattern = function scientificPattern_14(){
  return '#E0';
}
;
_.zeroDigit = function zeroDigit_14(){
  return '0';
}
;
function $$init_173(){
}

function NumberConstantsImpl_en_SG_0(){
  Object_1.call(this);
  $$init_173();
}

function NumberConstantsImpl_en_SG(){
}

_ = NumberConstantsImpl_en_SG_0.prototype = NumberConstantsImpl_en_SG.prototype = new Object_0;
_.currencyPattern = function currencyPattern_15(){
  return '\xA4#,##0.00;(\xA4#,##0.00)';
}
;
_.decimalPattern = function decimalPattern_15(){
  return '#,##0.###';
}
;
_.decimalSeparator = function decimalSeparator_16(){
  return '.';
}
;
_.exponentialSymbol = function exponentialSymbol_15(){
  return 'E';
}
;
_.getClass$ = function getClass_174(){
  return Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1SG_2_classLit;
}
;
_.groupingSeparator = function groupingSeparator_16(){
  return ',';
}
;
_.infinity = function infinity_15(){
  return '\u221E';
}
;
_.minusSign = function minusSign_15(){
  return '-';
}
;
_.monetaryGroupingSeparator = function monetaryGroupingSeparator_15(){
  return ',';
}
;
_.monetarySeparator = function monetarySeparator_15(){
  return '.';
}
;
_.notANumber = function notANumber_15(){
  return 'NaN';
}
;
_.perMill = function perMill_15(){
  return '\u2030';
}
;
_.percent = function percent_15(){
  return '%';
}
;
_.percentPattern = function percentPattern_15(){
  return '#,##0%';
}
;
_.scientificPattern = function scientificPattern_15(){
  return '#E0';
}
;
_.zeroDigit = function zeroDigit_15(){
  return '0';
}
;
function $$init_174(){
}

function NumberConstantsImpl_en_TT_0(){
  Object_1.call(this);
  $$init_174();
}

function NumberConstantsImpl_en_TT(){
}

_ = NumberConstantsImpl_en_TT_0.prototype = NumberConstantsImpl_en_TT.prototype = new Object_0;
_.currencyPattern = function currencyPattern_16(){
  return '\xA4#,##0.00';
}
;
_.decimalPattern = function decimalPattern_16(){
  return '#,##0.###';
}
;
_.decimalSeparator = function decimalSeparator_17(){
  return '.';
}
;
_.exponentialSymbol = function exponentialSymbol_16(){
  return 'E';
}
;
_.getClass$ = function getClass_175(){
  return Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1TT_2_classLit;
}
;
_.groupingSeparator = function groupingSeparator_17(){
  return ',';
}
;
_.infinity = function infinity_16(){
  return '\u221E';
}
;
_.minusSign = function minusSign_16(){
  return '-';
}
;
_.monetaryGroupingSeparator = function monetaryGroupingSeparator_16(){
  return ',';
}
;
_.monetarySeparator = function monetarySeparator_16(){
  return '.';
}
;
_.notANumber = function notANumber_16(){
  return 'NaN';
}
;
_.perMill = function perMill_16(){
  return '\u2030';
}
;
_.percent = function percent_16(){
  return '%';
}
;
_.percentPattern = function percentPattern_16(){
  return '#,##0%';
}
;
_.scientificPattern = function scientificPattern_16(){
  return '#E0';
}
;
_.zeroDigit = function zeroDigit_16(){
  return '0';
}
;
function $$init_175(){
}

function NumberConstantsImpl_en_ZA_0(){
  Object_1.call(this);
  $$init_175();
}

function NumberConstantsImpl_en_ZA(){
}

_ = NumberConstantsImpl_en_ZA_0.prototype = NumberConstantsImpl_en_ZA.prototype = new Object_0;
_.currencyPattern = function currencyPattern_17(){
  return '\xA4#,##0.00';
}
;
_.decimalPattern = function decimalPattern_17(){
  return '#,##0.###';
}
;
_.decimalSeparator = function decimalSeparator_18(){
  return ',';
}
;
_.exponentialSymbol = function exponentialSymbol_17(){
  return 'E';
}
;
_.getClass$ = function getClass_176(){
  return Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1ZA_2_classLit;
}
;
_.groupingSeparator = function groupingSeparator_18(){
  return '\xA0';
}
;
_.infinity = function infinity_17(){
  return '\u221E';
}
;
_.minusSign = function minusSign_17(){
  return '-';
}
;
_.monetaryGroupingSeparator = function monetaryGroupingSeparator_17(){
  return '\xA0';
}
;
_.monetarySeparator = function monetarySeparator_17(){
  return ',';
}
;
_.notANumber = function notANumber_17(){
  return 'NaN';
}
;
_.perMill = function perMill_17(){
  return '\u2030';
}
;
_.percent = function percent_17(){
  return '%';
}
;
_.percentPattern = function percentPattern_17(){
  return '#,##0%';
}
;
_.scientificPattern = function scientificPattern_17(){
  return '#E0';
}
;
_.zeroDigit = function zeroDigit_17(){
  return '0';
}
;
function $$init_176(){
}

function NumberConstantsImpl_en_ZW_0(){
  Object_1.call(this);
  $$init_176();
}

function NumberConstantsImpl_en_ZW(){
}

_ = NumberConstantsImpl_en_ZW_0.prototype = NumberConstantsImpl_en_ZW.prototype = new Object_0;
_.currencyPattern = function currencyPattern_18(){
  return '\xA4#,##0.00';
}
;
_.decimalPattern = function decimalPattern_18(){
  return '#,##0.###';
}
;
_.decimalSeparator = function decimalSeparator_19(){
  return '.';
}
;
_.exponentialSymbol = function exponentialSymbol_18(){
  return 'E';
}
;
_.getClass$ = function getClass_177(){
  return Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1ZW_2_classLit;
}
;
_.groupingSeparator = function groupingSeparator_19(){
  return ',';
}
;
_.infinity = function infinity_18(){
  return '\u221E';
}
;
_.minusSign = function minusSign_18(){
  return '-';
}
;
_.monetaryGroupingSeparator = function monetaryGroupingSeparator_18(){
  return ',';
}
;
_.monetarySeparator = function monetarySeparator_18(){
  return '.';
}
;
_.notANumber = function notANumber_18(){
  return 'NaN';
}
;
_.perMill = function perMill_18(){
  return '\u2030';
}
;
_.percent = function percent_18(){
  return '%';
}
;
_.percentPattern = function percentPattern_18(){
  return '#,##0%';
}
;
_.scientificPattern = function scientificPattern_18(){
  return '#E0';
}
;
_.zeroDigit = function zeroDigit_18(){
  return '0';
}
;
_ = AbstractMap.prototype;
_.containsValue = function containsValue(value){
  var entry, iter, v;
  for (iter = this.entrySet_0().iterator_0(); iter.hasNext();) {
    entry = dynamicCast(iter.next_0(), Q$Map$Entry);
    v = entry.getValue();
    if (jsEquals(value, null)?jsEquals(v, null):equals__devirtual$(value, v)) {
      return true;
    }
  }
  return false;
}
;
_.values = function values_6(){
  var entrySet;
  entrySet = this.entrySet_0();
  return new AbstractMap$2_0(this, entrySet);
}
;
function $$init_186(){
}

function CurrencyDataImpl_0(currencyCode, currencySymbol, flagsAndPrecision){
  CurrencyDataImpl_1.call(this, currencyCode, currencySymbol, flagsAndPrecision, currencySymbol);
}

function CurrencyDataImpl_1(currencyCode, currencySymbol, flagsAndPrecision, portableCurrencySymbol){
  DefaultCurrencyData_0.call(this, currencyCode, currencySymbol, getDefaultFractionDigits_1(flagsAndPrecision));
  $$init_186();
  this.flagsAndPrecision = flagsAndPrecision;
  this , portableCurrencySymbol;
}

function getDefaultFractionDigits_1(flagsAndPrecision){
  return flagsAndPrecision & 7;
}

function isDeprecated_1(flagsAndPrecision){
  return (flagsAndPrecision & 128) != 0;
}

function CurrencyDataImpl(){
}

_ = CurrencyDataImpl_1.prototype = CurrencyDataImpl_0.prototype = CurrencyDataImpl.prototype = new DefaultCurrencyData;
_.getClass$ = function getClass_187(){
  return Lcom_google_gwt_i18n_client_impl_CurrencyDataImpl_2_classLit;
}
;
_.getDefaultFractionDigits = function getDefaultFractionDigits_0(){
  return getDefaultFractionDigits_1(this.flagsAndPrecision);
}
;
_.isDeprecated = function isDeprecated_0(){
  return isDeprecated_1(this.flagsAndPrecision);
}
;
_.castableTypeMap$ = makeCastMap([Q$CurrencyData]);
_.flagsAndPrecision = 0;
function $getCurrencyCode(this$static){
  return this$static[0];
}

function $getCurrencySymbol(this$static){
  return this$static[1];
}

function $getDefaultFractionDigits(this$static){
  return getDefaultFractionDigits_1($getFlagsAndPrecision(this$static));
}

function $getFlagsAndPrecision(this$static){
  return this$static[2];
}

function $isDeprecated(this$static){
  return isDeprecated_1($getFlagsAndPrecision(this$static));
}

_ = LocaleInfoImpl.prototype;
_.getNumberConstants = function getNumberConstants(){
  return new NumberConstantsImpl_en_0;
}
;
_ = LocaleInfoImpl_en_runtimeSelection.prototype;
_.getNumberConstants = function getNumberConstants_0(){
  var runtimeLocale;
  runtimeLocale = $getLocaleName_0();
  if ($equals_3('en_MT', runtimeLocale)) {
    return new NumberConstantsImpl_en_MT_0;
  }
  if ($equals_3('en_BW', runtimeLocale)) {
    return new NumberConstantsImpl_en_BW_0;
  }
  if ($equals_3('en_PK', runtimeLocale)) {
    return new NumberConstantsImpl_en_PK_0;
  }
  if ($equals_3('en_AU', runtimeLocale)) {
    return new NumberConstantsImpl_en_AU_0;
  }
  if ($equals_3('en_PH', runtimeLocale)) {
    return new NumberConstantsImpl_en_PH_0;
  }
  if ($equals_3('en_TT', runtimeLocale)) {
    return new NumberConstantsImpl_en_TT_0;
  }
  if ($equals_3('en_ZA', runtimeLocale)) {
    return new NumberConstantsImpl_en_ZA_0;
  }
  if ($equals_3('en_AS', runtimeLocale) || $equals_3('en_UM', runtimeLocale) || $equals_3('en_VI', runtimeLocale) || $equals_3('en', runtimeLocale) || $equals_3('en_MH', runtimeLocale) || $equals_3('en_US', runtimeLocale) || $equals_3('en_GU', runtimeLocale) || $equals_3('en_MP', runtimeLocale)) {
    return new NumberConstantsImpl_en_0;
  }
  if ($equals_3('en_NA', runtimeLocale)) {
    return new NumberConstantsImpl_en_NA_0;
  }
  if ($equals_3('en_HK', runtimeLocale)) {
    return new NumberConstantsImpl_en_HK_0;
  }
  if ($equals_3('en_JM', runtimeLocale)) {
    return new NumberConstantsImpl_en_JM_0;
  }
  if ($equals_3('en_IN', runtimeLocale)) {
    return new NumberConstantsImpl_en_IN_0;
  }
  if ($equals_3('en_ZW', runtimeLocale)) {
    return new NumberConstantsImpl_en_ZW_0;
  }
  if ($equals_3('en_GB', runtimeLocale)) {
    return new NumberConstantsImpl_en_GB_0;
  }
  if ($equals_3('en_BE', runtimeLocale)) {
    return new NumberConstantsImpl_en_BE_0;
  }
  if ($equals_3('en_SG', runtimeLocale)) {
    return new NumberConstantsImpl_en_SG_0;
  }
  if ($equals_3('en_BZ', runtimeLocale)) {
    return new NumberConstantsImpl_en_BZ_0;
  }
  if ($equals_3('en_NZ', runtimeLocale)) {
    return new NumberConstantsImpl_en_NZ_0;
  }
  if ($equals_3('en_IE', runtimeLocale)) {
    return new NumberConstantsImpl_en_IE_0;
  }
  if ($equals_3('en_CA', runtimeLocale)) {
    return new NumberConstantsImpl_en_CA_0;
  }
  return new NumberConstantsImpl_en_0;
}
;
function dynamicCastAllowJso(src, dstId){
  if (jsNotEquals(src, null) && !isJavaScriptObject(src) && !canCastUnsafe(src, dstId)) {
    throw new ClassCastException_0;
  }
  return src;
}

_ = ShowcaseConstants_.prototype;
_.cwNumberFormatFailedToParseInput = function cwNumberFormatFailedToParseInput(){
  return 'Unable to parse input';
}
;
_.cwNumberFormatFormattedLabel = function cwNumberFormatFormattedLabel(){
  return '<b>Formatted value:<\/b>';
}
;
_.cwNumberFormatInvalidPattern = function cwNumberFormatInvalidPattern(){
  return 'Invalid pattern';
}
;
_.cwNumberFormatPatternLabel = function cwNumberFormatPatternLabel(){
  return '<b>Pattern:<\/b>';
}
;
_.cwNumberFormatPatterns = function cwNumberFormatPatterns(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwNumberFormatPatterns'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Decimal', 'Currency', 'Scientific', 'Percent', 'Custom']);
    this.cache.put('cwNumberFormatPatterns', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwNumberFormatValueLabel = function cwNumberFormatValueLabel(){
  return '<b>Value to format:<\/b>';
}
;
function $activeFormat_0(this$static){
  return this$static.activeFormat$u0020;
}

function $activeFormat_$eq_0(this$static, x$1){
  this$static.activeFormat$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$i18n$CwNumberFormat$$patternList(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$i18n$CwNumberFormat$$patternList$u0020;
}

function $com$google$gwt$sample$showcase$client$content$i18n$CwNumberFormat$$patternList_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$i18n$CwNumberFormat$$patternList$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$i18n$CwNumberFormat$$updateFormattedValue(this$static){
  var $e0, formattedValue, sValue, value;
  sValue = $getText_1($valueBox_0(this$static));
  if ($equals_3(sValue, '')) {
    $setText_4($formattedBox_0(this$static), '<None>');
  }
   else {
    try {
      value = parseDouble(sValue);
      formattedValue = $format_1($activeFormat_0(this$static), value);
      $setText_4($formattedBox_0(this$static), formattedValue);
      $showErrorMessage_0(this$static, null);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, Q$NumberFormatException)) {
        $e0;
        $showErrorMessage_0(this$static, this$static.constants.cwNumberFormatFailedToParseInput());
      }
       else 
        throw $e0;
    }
  }
}

function $com$google$gwt$sample$showcase$client$content$i18n$CwNumberFormat$$updatePattern(this$static){
  var $1$, $e0, pattern, temp1;
  {
    temp1 = $getSelectedIndex_0($com$google$gwt$sample$showcase$client$content$i18n$CwNumberFormat$$patternList(this$static));
    $1$ = temp1;
    switch ($1$) {
      case 0:
        $activeFormat_$eq_0(this$static, getDecimalFormat());
        $setText_8($patternBox_0(this$static), $getPattern_0($activeFormat_0(this$static)));
        $patternBox_0(this$static).setEnabled(false);
        break;
      case 1:
        $activeFormat_$eq_0(this$static, getCurrencyFormat());
        $setText_8($patternBox_0(this$static), $getPattern_0($activeFormat_0(this$static)));
        $patternBox_0(this$static).setEnabled(false);
        break;
      case 2:
        $activeFormat_$eq_0(this$static, getScientificFormat());
        $setText_8($patternBox_0(this$static), $getPattern_0($activeFormat_0(this$static)));
        $patternBox_0(this$static).setEnabled(false);
        break;
      case 3:
        $activeFormat_$eq_0(this$static, getPercentFormat());
        $setText_8($patternBox_0(this$static), $getPattern_0($activeFormat_0(this$static)));
        $patternBox_0(this$static).setEnabled(false);
        break;
      case 4:
        $patternBox_0(this$static).setEnabled(true);
        pattern = $getText_1($patternBox_0(this$static));
        try {
          $activeFormat_$eq_0(this$static, getFormat_2(pattern));
        }
         catch ($e0) {
          $e0 = caught_0($e0);
          if (instanceOf($e0, Q$IllegalArgumentException)) {
            $e0;
            $showErrorMessage_0(this$static, this$static.constants.cwNumberFormatInvalidPattern());
          }
           else 
            throw $e0;
        }

        break;
      default:throw new MatchError_0(boxToInteger(temp1));
    }
  }
  $com$google$gwt$sample$showcase$client$content$i18n$CwNumberFormat$$updateFormattedValue(this$static);
}

function $formattedBox_0(this$static){
  return this$static.formattedBox$u0020;
}

function $formattedBox_$eq_0(this$static, x$1){
  this$static.formattedBox$u0020 = x$1;
}

function $onInitialize_4(this$static){
  var layout, patterns;
  layout = new Grid_1(4, 2);
  $setCellSpacing(layout, 5);
  $com$google$gwt$sample$showcase$client$content$i18n$CwNumberFormat$$patternList_$eq(this$static, new ListBox_0);
  $com$google$gwt$sample$showcase$client$content$i18n$CwNumberFormat$$patternList(this$static).setWidth('17em');
  patterns = this$static.constants.cwNumberFormatPatterns();
  $refArrayOps(($clinit_Predef$() , MODULE$_12 , patterns)).foreach(new CwNumberFormat$$anonfun$onInitialize$1_0(this$static));
  $addChangeHandler($com$google$gwt$sample$showcase$client$content$i18n$CwNumberFormat$$patternList(this$static), new CwNumberFormat$$anon$1_0(this$static));
  $setHTML_2(layout, 0, 0, this$static.constants.cwNumberFormatPatternLabel());
  $setWidget_2(layout, 0, 1, $com$google$gwt$sample$showcase$client$content$i18n$CwNumberFormat$$patternList(this$static));
  $patternBox_$eq_0(this$static, new TextBox_0);
  $patternBox_0(this$static).setWidth('17em');
  $addKeyUpHandler($patternBox_0(this$static), new CwNumberFormat$$anon$2_0(this$static));
  $setWidget_2(layout, 1, 1, $patternBox_0(this$static));
  $valueBox_$eq_0(this$static, new TextBox_0);
  $valueBox_0(this$static).setWidth('17em');
  $setText_8($valueBox_0(this$static), '31415926535.897932');
  $addKeyUpHandler($valueBox_0(this$static), new CwNumberFormat$$anon$3_0(this$static));
  $setHTML_2(layout, 2, 0, this$static.constants.cwNumberFormatValueLabel());
  $setWidget_2(layout, 2, 1, $valueBox_0(this$static));
  $formattedBox_$eq_0(this$static, new Label_0);
  $formattedBox_0(this$static).setWidth('17em');
  $setHTML_2(layout, 3, 0, this$static.constants.cwNumberFormatFormattedLabel());
  $setWidget_2(layout, 3, 1, $formattedBox_0(this$static));
  $com$google$gwt$sample$showcase$client$content$i18n$CwNumberFormat$$updatePattern(this$static);
  return layout;
}

function $patternBox_0(this$static){
  return this$static.patternBox$u0020;
}

function $patternBox_$eq_0(this$static, x$1){
  this$static.patternBox$u0020 = x$1;
}

function $showErrorMessage_0(this$static, errorMsg){
  if (equals_85(errorMsg, null)) {
    $formattedBox_0(this$static).removeStyleName('cw-RedText');
  }
   else {
    $setText_4($formattedBox_0(this$static), errorMsg);
    $formattedBox_0(this$static).addStyleName('cw-RedText');
  }
}

function $valueBox_0(this$static){
  return this$static.valueBox$u0020;
}

function $valueBox_$eq_0(this$static, x$1){
  this$static.valueBox$u0020 = x$1;
}

function $$init_343(){
}

function CwNumberFormat$$anon$1_0($outer){
  $$init_343();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
}

function CwNumberFormat$$anon$1(){
}

_ = CwNumberFormat$$anon$1_0.prototype = CwNumberFormat$$anon$1.prototype = new Object_0;
_.getClass$ = function getClass_344(){
  return Lcom_google_gwt_sample_showcase_client_content_i18n_CwNumberFormat$$anon$1_2_classLit;
}
;
_.onChange = function onChange_1(event_0){
  $com$google$gwt$sample$showcase$client$content$i18n$CwNumberFormat$$updatePattern(this.$outer$u0020);
}
;
_.castableTypeMap$ = makeCastMap([Q$ChangeHandler, Q$EventHandler]);
_.$outer$u0020 = null;
function $$init_344(){
}

function CwNumberFormat$$anon$2_0($outer){
  $$init_344();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
}

function CwNumberFormat$$anon$2(){
}

_ = CwNumberFormat$$anon$2_0.prototype = CwNumberFormat$$anon$2.prototype = new Object_0;
_.getClass$ = function getClass_345(){
  return Lcom_google_gwt_sample_showcase_client_content_i18n_CwNumberFormat$$anon$2_2_classLit;
}
;
_.onKeyUp = function onKeyUp_5(event_0){
  $com$google$gwt$sample$showcase$client$content$i18n$CwNumberFormat$$updatePattern(this.$outer$u0020);
}
;
_.castableTypeMap$ = makeCastMap([Q$KeyUpHandler, Q$EventHandler]);
_.$outer$u0020 = null;
function $$init_345(){
}

function CwNumberFormat$$anon$3_0($outer){
  $$init_345();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
}

function CwNumberFormat$$anon$3(){
}

_ = CwNumberFormat$$anon$3_0.prototype = CwNumberFormat$$anon$3.prototype = new Object_0;
_.getClass$ = function getClass_346(){
  return Lcom_google_gwt_sample_showcase_client_content_i18n_CwNumberFormat$$anon$3_2_classLit;
}
;
_.onKeyUp = function onKeyUp_6(event_0){
  $com$google$gwt$sample$showcase$client$content$i18n$CwNumberFormat$$updateFormattedValue(this.$outer$u0020);
}
;
_.castableTypeMap$ = makeCastMap([Q$KeyUpHandler, Q$EventHandler]);
_.$outer$u0020 = null;
_ = CwNumberFormat$$anon$4.prototype;
_.onSuccess = function onSuccess_5(){
  this.callback$1.onSuccess_0($onInitialize_4(this.$outer$u0020));
}
;
function $$init_347(){
}

function $apply_20(this$static, pattern){
  $addItem($com$google$gwt$sample$showcase$client$content$i18n$CwNumberFormat$$patternList(this$static.$outer$u0020), pattern);
}

function CwNumberFormat$$anonfun$onInitialize$1_0($outer){
  $$init_347();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  AbstractFunction1_0.call(this);
}

function CwNumberFormat$$anonfun$onInitialize$1(){
}

_ = CwNumberFormat$$anonfun$onInitialize$1_0.prototype = CwNumberFormat$$anonfun$onInitialize$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_21(v1){
  $apply_20(this, dynamicCast(v1, Q$String));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_348(){
  return Lcom_google_gwt_sample_showcase_client_content_i18n_CwNumberFormat$$anonfun$onInitialize$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.$outer$u0020 = null;
function __parseAndValidateDouble(s){
  var toReturn;
  toReturn = __parseDouble(s);
  if (__isNaN(toReturn)) {
    throw forInputString(s);
  }
  return toReturn;
}

function __parseDouble(str){
  var floatRegex = floatRegex_0;
  if (!floatRegex) {
    floatRegex = floatRegex_0 = /^\s*[+-]?((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?\s*$/i;
  }
  if (floatRegex.test(str)) {
    return parseFloat(str);
  }
   else {
    return Number.NaN;
  }
}

var floatRegex_0 = null;
function isInfinite(x){
  return !isFinite(x);
}

function parseDouble(s){
  return __parseAndValidateDouble(s);
}

function $delete_0(this$static, start, end){
  return $replace_3(this$static, start, end, '');
}

function $deleteCharAt(this$static, start){
  return $delete_0(this$static, start, start + 1);
}

function $indexOf_5(this$static, x, start){
  return $indexOf_4($toString_5(this$static), x, start);
}

function $insert_7(this$static, index, x){
  return $insert_9(this$static, index, valueOf_17(x));
}

function $insert_8(this$static, index, chars){
  return $insert_9(this$static, index, chars.toString$());
}

function $insert_9(this$static, index, x){
  return $replace_3(this$static, index, index, x);
}

function $replace_3(this$static, start, end, toInsert){
  this$static.impl.replace_0(this$static.data_0, start, end, toInsert);
  return this$static;
}

function $setCharAt(this$static, index, x){
  $replace_3(this$static, index, index + 1, valueOf_17(x));
}

function $substring_1(this$static, begin){
  return $substring($toString_5(this$static), begin);
}

function $containsHashValue(this$static, value){
  var hashCodeMap = this$static.hashCodeMap;
  for (var hashCode in hashCodeMap) {
    var hashCodeInt = parseInt(hashCode, 10);
    if (hashCode == hashCodeInt) {
      var array = hashCodeMap[hashCodeInt];
      for (var i = 0, c = array.length; i < c; ++i) {
        var entry = array[i];
        var entryValue = entry.getValue();
        if (this$static.equalsBridge(value, entryValue)) {
          return true;
        }
      }
    }
  }
  return false;
}

function $containsStringValue(this$static, value){
  var stringMap = this$static.stringMap;
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var entryValue = stringMap[key];
      if (this$static.equalsBridge(value, entryValue)) {
        return true;
      }
    }
  }
  return false;
}

_ = AbstractHashMap.prototype;
_.containsValue = function containsValue_0(value){
  if (this.nullSlotLive && this.equals(this.nullSlot, value)) {
    return true;
  }
   else if ($containsStringValue(this, value)) {
    return true;
  }
   else if ($containsHashValue(this, value)) {
    return true;
  }
  return false;
}
;
function $$init_755(){
}

function AbstractMap$2_0(this$0, val$entrySet){
  this.this$0 = this$0;
  this.val$entrySet = val$entrySet;
  AbstractCollection_0.call(this);
  $$init_755();
}

function AbstractMap$2(){
}

_ = AbstractMap$2_0.prototype = AbstractMap$2.prototype = new AbstractCollection;
_.contains_0 = function contains_6(value){
  return this.this$0.containsValue(value);
}
;
_.getClass$ = function getClass_757(){
  return Ljava_util_AbstractMap$2_2_classLit;
}
;
_.iterator_0 = function iterator_15(){
  var outerIter;
  outerIter = this.val$entrySet.iterator_0();
  return new AbstractMap$2$1_0(this, outerIter);
}
;
_.size_1 = function size_11(){
  return this.val$entrySet.size_1();
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable, Q$Collection]);
_.this$0 = null;
_.val$entrySet = null;
function $$init_756(){
}

function AbstractMap$2$1_0(this$1, val$outerIter){
  this , this$1;
  this.val$outerIter = val$outerIter;
  Object_1.call(this);
  $$init_756();
}

function AbstractMap$2$1(){
}

_ = AbstractMap$2$1_0.prototype = AbstractMap$2$1.prototype = new Object_0;
_.getClass$ = function getClass_758(){
  return Ljava_util_AbstractMap$2$1_2_classLit;
}
;
_.hasNext = function hasNext_10(){
  return this.val$outerIter.hasNext();
}
;
_.next_0 = function next_11(){
  var value;
  value = dynamicCast(this.val$outerIter.next_0(), Q$Map$Entry).getValue();
  return value;
}
;
_.remove_2 = function remove_32(){
  this.val$outerIter.remove_2();
}
;
_.val$outerIter = null;
_ = Collections$EmptyMap.prototype;
_.containsValue = function containsValue_1(value){
  return false;
}
;
_.values = function values_10(){
  return $clinit_Collections() , EMPTY_LIST;
}
;
var Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util.', 'AbstractMap$2', 'AbstractMap$2', Ljava_util_AbstractCollection_2_classLit), Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util.', 'AbstractMap$2$1', 'AbstractMap$2$1', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_NumberFormat_2_classLit = createForClass('com.google.gwt.i18n.client.', 'NumberFormat', 'NumberFormat', Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_i18n_CwNumberFormat$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'CwNumberFormat$$anonfun$onInitialize$1', 'CwNumberFormat$$anonfun$onInitialize$1', Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_i18n_CwNumberFormat$$anon$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'CwNumberFormat$$anon$1', 'CwNumberFormat$$anon$1', Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_i18n_CwNumberFormat$$anon$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'CwNumberFormat$$anon$2', 'CwNumberFormat$$anon$2', Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_i18n_CwNumberFormat$$anon$3_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'CwNumberFormat$$anon$3', 'CwNumberFormat$$anon$3', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList', 'CurrencyList', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'NumberConstantsImpl_en', 'NumberConstantsImpl_en', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1MT_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'NumberConstantsImpl_en_MT', 'NumberConstantsImpl_en_MT', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1BW_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'NumberConstantsImpl_en_BW', 'NumberConstantsImpl_en_BW', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1PK_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'NumberConstantsImpl_en_PK', 'NumberConstantsImpl_en_PK', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1AU_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'NumberConstantsImpl_en_AU', 'NumberConstantsImpl_en_AU', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1PH_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'NumberConstantsImpl_en_PH', 'NumberConstantsImpl_en_PH', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1TT_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'NumberConstantsImpl_en_TT', 'NumberConstantsImpl_en_TT', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1ZA_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'NumberConstantsImpl_en_ZA', 'NumberConstantsImpl_en_ZA', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1NA_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'NumberConstantsImpl_en_NA', 'NumberConstantsImpl_en_NA', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1HK_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'NumberConstantsImpl_en_HK', 'NumberConstantsImpl_en_HK', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1JM_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'NumberConstantsImpl_en_JM', 'NumberConstantsImpl_en_JM', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1IN_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'NumberConstantsImpl_en_IN', 'NumberConstantsImpl_en_IN', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1ZW_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'NumberConstantsImpl_en_ZW', 'NumberConstantsImpl_en_ZW', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1GB_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'NumberConstantsImpl_en_GB', 'NumberConstantsImpl_en_GB', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1BE_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'NumberConstantsImpl_en_BE', 'NumberConstantsImpl_en_BE', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1SG_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'NumberConstantsImpl_en_SG', 'NumberConstantsImpl_en_SG', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1BZ_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'NumberConstantsImpl_en_BZ', 'NumberConstantsImpl_en_BZ', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1NZ_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'NumberConstantsImpl_en_NZ', 'NumberConstantsImpl_en_NZ', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1IE_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'NumberConstantsImpl_en_IE', 'NumberConstantsImpl_en_IE', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1en_1CA_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'NumberConstantsImpl_en_CA', 'NumberConstantsImpl_en_CA', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_1_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList_', 'CurrencyList_', Lcom_google_gwt_i18n_client_CurrencyList_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_1en_1runtimeSelection_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList_en_runtimeSelection', 'CurrencyList_en_runtimeSelection', Lcom_google_gwt_i18n_client_CurrencyList_2_classLit), Lcom_google_gwt_i18n_client_DefaultCurrencyData_2_classLit = createForClass('com.google.gwt.i18n.client.', 'DefaultCurrencyData', 'DefaultCurrencyData', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_impl_CurrencyDataImpl_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'CurrencyDataImpl', 'CurrencyDataImpl', Lcom_google_gwt_i18n_client_DefaultCurrencyData_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_1en_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList_en', 'CurrencyList_en', Lcom_google_gwt_i18n_client_CurrencyList_1_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_1en_1AU_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList_en_AU', 'CurrencyList_en_AU', Lcom_google_gwt_i18n_client_CurrencyList_1en_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_1en_1BE_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList_en_BE', 'CurrencyList_en_BE', Lcom_google_gwt_i18n_client_CurrencyList_1en_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_1en_1BW_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList_en_BW', 'CurrencyList_en_BW', Lcom_google_gwt_i18n_client_CurrencyList_1en_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_1en_1BZ_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList_en_BZ', 'CurrencyList_en_BZ', Lcom_google_gwt_i18n_client_CurrencyList_1en_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_1en_1CA_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList_en_CA', 'CurrencyList_en_CA', Lcom_google_gwt_i18n_client_CurrencyList_1en_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_1en_1GB_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList_en_GB', 'CurrencyList_en_GB', Lcom_google_gwt_i18n_client_CurrencyList_1en_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_1en_1HK_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList_en_HK', 'CurrencyList_en_HK', Lcom_google_gwt_i18n_client_CurrencyList_1en_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_1en_1IE_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList_en_IE', 'CurrencyList_en_IE', Lcom_google_gwt_i18n_client_CurrencyList_1en_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_1en_1IN_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList_en_IN', 'CurrencyList_en_IN', Lcom_google_gwt_i18n_client_CurrencyList_1en_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_1en_1JM_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList_en_JM', 'CurrencyList_en_JM', Lcom_google_gwt_i18n_client_CurrencyList_1en_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_1en_1MT_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList_en_MT', 'CurrencyList_en_MT', Lcom_google_gwt_i18n_client_CurrencyList_1en_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_1en_1NA_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList_en_NA', 'CurrencyList_en_NA', Lcom_google_gwt_i18n_client_CurrencyList_1en_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_1en_1NZ_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList_en_NZ', 'CurrencyList_en_NZ', Lcom_google_gwt_i18n_client_CurrencyList_1en_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_1en_1PH_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList_en_PH', 'CurrencyList_en_PH', Lcom_google_gwt_i18n_client_CurrencyList_1en_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_1en_1PK_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList_en_PK', 'CurrencyList_en_PK', Lcom_google_gwt_i18n_client_CurrencyList_1en_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_1en_1SG_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList_en_SG', 'CurrencyList_en_SG', Lcom_google_gwt_i18n_client_CurrencyList_1en_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_1en_1TT_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList_en_TT', 'CurrencyList_en_TT', Lcom_google_gwt_i18n_client_CurrencyList_1en_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_1en_1ZA_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList_en_ZA', 'CurrencyList_en_ZA', Lcom_google_gwt_i18n_client_CurrencyList_1en_2_classLit), Lcom_google_gwt_i18n_client_CurrencyList_1en_1ZW_2_classLit = createForClass('com.google.gwt.i18n.client.', 'CurrencyList_en_ZW', 'CurrencyList_en_ZW', Lcom_google_gwt_i18n_client_CurrencyList_1en_2_classLit);
$entry(onLoad)(28);
