"use strict";const zones={ca_gst:{label:wp.i18n.__("GST Number","surecart"),label_small:wp.i18n.__("CA GST","surecart")},au_abn:{label:wp.i18n.__("ABN Number","surecart"),label_small:wp.i18n.__("AU ABN","surecart")},gb_vat:{label:wp.i18n.__("VAT Number","surecart"),label_small:wp.i18n.__("UK VAT","surecart")},eu_vat:{label:wp.i18n.__("VAT Number","surecart"),label_small:wp.i18n.__("EU VAT","surecart")},other:{label:wp.i18n.__("Tax ID","surecart"),label_small:wp.i18n.__("Other","surecart")}},formatTaxDisplay=(a,r=!1)=>{const e=r?wp.i18n.__("Estimated Tax","surecart"):wp.i18n.__("Tax","surecart");return a?`${e}: ${a}`:e};exports.formatTaxDisplay=formatTaxDisplay,exports.zones=zones;