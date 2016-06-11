// ==UserScript==
// @name          Microsoft TechBench Patch (ported by Shakku)
// @namespace     https://github.com/shakku/Microsoft-Techbench-Patch
// @description   Patches the Microsoft TechBench webpage to allow you to download all the Windows ISOs.
// @include       https://www.microsoft.com/*/software-download/techbench
// @grant none
// ==/UserScript==

// Exploit found by:
// @WZorNET
// @nummerok
// @rgadguard

document["getElementById"]("product-edition")["innerHTML"]=
"<option value='' selected='selected'>Select edition</option>\
<option value='2'>Windows 7 Home Basic SP1 </option>\
<option value='4'>Windows 7 Professional SP1 </option>\
<option value='6'>Windows 7 Home Premium SP1 </option>\
<option value='8'>Windows 7 Ultimate SP1 </option>\
<option value='10'>Windows 7 Home Premium N SP1 </option>\
<option value='12'>Windows 7 Professional N SP1 </option>\
<option value='14'>Windows 7 Ultimate N SP1 </option>\
<option value='16'>Windows 7 Professional K SP1 </option>\
<option value='18'>Windows 7 Professional KN SP1 </option>\
<option value='20'>Windows 7 Home Premium K SP1 </option>\
<option value='22'>Windows 7 Home Premium KN SP1 </option>\
<option value='24'>Windows 7 Ultimate KN SP1 </option>\
<option value='26'>Windows 7 Ultimate K SP1 </option>\
<option value='28'>Windows 7 Starter SP1 </option>\
<option value='48'>Windows 8.1 Single Language </option>\
<option value='52'>Windows 8.1 </option>\
<option value='55'>Windows 8.1 N </option>\
<option value='61'>Windows 8.1 K </option>\
<option value='62'>Windows 8.1 KN </option>\
<option value='68'>Windows 8.1 Professional LE </option>\
<option value='69'>Windows 8.1 Professional LE K </option>\
<option value='70'>Windows 8.1 Professional LE KN </option>\
<option value='71'>Windows 8.1 Professional LE N </option>\
<option value='75'>Windows 10 Education (Academic) - build 10240</option>\
<option value='76'>Windows 10 Education KN (Academic) - build 10240</option>\
<option value='77'>Windows 10 Education N (Academic) - build 10240</option>\
<option value='78'>Windows 10 China Get Genuine Chinese Simplified - build 10240</option>\
<option value='79'>Windows 10 Pro-Home - build 10240</option>\
<option value='80'>Windows 10 ProKN-HomeKN - build 10240</option>\
<option value='81'>Windows 10 ProN-HomeN - build 10240</option>\
<option value='82'>Windows 10 Single Language - build 10240</option>\
<option value='83'>Windows 7 Home Basic SP1 COEM </option>\
<option value='85'>Windows 7 Home Basic SP1 COEM GGK </option>\
<option value='86'>Windows 7 Home Premium N SP1 COEM </option>\
<option value='87'>Windows 7 Home Premium SP1 COEM </option>\
<option value='88'>Windows 7 Home Premium SP1 COEM GGK </option>\
<option value='89'>Windows 7 Home Premium K SP1 COEM </option>\
<option value='90'>Windows 7 Professional N SP1 COEM </option>\
<option value='91'>Windows 7 Professional SP1 COEM </option>\
<option value='92'>Windows 7 Starter SP1 COEM </option>\
<option value='93'>Windows 7 Ultimate K SP1 COEM </option>\
<option value='94'>Windows 7 Ultimate KN SP1 COEM </option>\
<option value='95'>Windows 7 Ultimate N SP1 COEM </option>\
<option value='96'>Windows 7 Ultimate SP1 COEM </option>\
<option value='97'>Windows 7 Home Premium KN SP1 COEM </option>\
<option value='98'>Windows 7 Professional KN SP1 COEM </option>\
<option value='99'>Windows 10 Pro-Home - build 10586 </option>\
<option value='100'>Windows 10 Education - build 10586 </option>\
<option value='101'>Windows 10 Education KN - build 10586 </option>\
<option value='102'>Windows 10 Education N - build 10586 </option>\
<option value='103'>Windows 10 China Get Genuine Chinese Simplified - build 10586</option>\
<option value='104'>Windows 10 ProKN-HomeKN - build 10586 </option>\
<option value='105'>Windows 10 ProN-HomeN - build 10586 </option>\
<option value='106'>Windows 10 Single Language - build 10586 </option>\
<option value='107'>Windows 10 IoT Core Insider Preview - Build 10586 </option>\
<option value='108'>Windows 10 IoT Core Insider Preview - Build 14262 </option>"
