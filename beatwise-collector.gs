/* BeatWise anonymous data collector
   1. Create a new Google Sheet, name it "BeatWise Data"
   2. Extensions > Apps Script, delete the sample code, paste this file, Save
   3. Deploy > New deployment > type: Web app
        Execute as: Me
        Who has access: Anyone
      Click Deploy, approve the permissions, copy the Web app URL
   4. Paste that URL into index.html where it says TELEMETRY_URL
*/
var COLS = ['received','device','type','date','app','age','sex','activity','modality',
            'zone','hold','rounds_planned','rounds_done','completed','capped','rpe',
            'avgPush','hrrRate','avgRecover','breath','cp','limit','recoverPct',
            'maxHR','restHR','peak'];

function doPost(e){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('sessions') || ss.insertSheet('sessions');
  if (sh.getLastRow() === 0) sh.appendRow(COLS);
  var d = JSON.parse(e.postData.contents);
  sh.appendRow(COLS.map(function(c){
    if (c === 'received') return new Date();
    return d[c] === undefined ? '' : d[c];
  }));
  return ContentService.createTextOutput('ok');
}
function doGet(){ return ContentService.createTextOutput('BeatWise collector is running'); }
