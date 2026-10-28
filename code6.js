gdjs.selecao_32de_32fases_45desafioCode = {};
gdjs.selecao_32de_32fases_45desafioCode.localVariables = [];
gdjs.selecao_32de_32fases_45desafioCode.idToCallbackMap = new Map();
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn1Objects1= [];
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn1Objects2= [];
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn1Objects3= [];
gdjs.selecao_32de_32fases_45desafioCode.GDBackgroundObjects1= [];
gdjs.selecao_32de_32fases_45desafioCode.GDBackgroundObjects2= [];
gdjs.selecao_32de_32fases_45desafioCode.GDBackgroundObjects3= [];
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects1= [];
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects2= [];
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects3= [];
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects1= [];
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects2= [];
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects3= [];
gdjs.selecao_32de_32fases_45desafioCode.GDhome_9595buttonObjects1= [];
gdjs.selecao_32de_32fases_45desafioCode.GDhome_9595buttonObjects2= [];
gdjs.selecao_32de_32fases_45desafioCode.GDhome_9595buttonObjects3= [];
gdjs.selecao_32de_32fases_45desafioCode.GDconfiguracao_9595buttonObjects1= [];
gdjs.selecao_32de_32fases_45desafioCode.GDconfiguracao_9595buttonObjects2= [];
gdjs.selecao_32de_32fases_45desafioCode.GDconfiguracao_9595buttonObjects3= [];
gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1= [];
gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects2= [];
gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects3= [];
gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialog_9595fase3Objects1= [];
gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialog_9595fase3Objects2= [];
gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialog_9595fase3Objects3= [];
gdjs.selecao_32de_32fases_45desafioCode.GDEcoPontosObjects1= [];
gdjs.selecao_32de_32fases_45desafioCode.GDEcoPontosObjects2= [];
gdjs.selecao_32de_32fases_45desafioCode.GDEcoPontosObjects3= [];
gdjs.selecao_32de_32fases_45desafioCode.GDfundo_9595ecoPontosObjects1= [];
gdjs.selecao_32de_32fases_45desafioCode.GDfundo_9595ecoPontosObjects2= [];
gdjs.selecao_32de_32fases_45desafioCode.GDfundo_9595ecoPontosObjects3= [];
gdjs.selecao_32de_32fases_45desafioCode.GDcajuObjects1= [];
gdjs.selecao_32de_32fases_45desafioCode.GDcajuObjects2= [];
gdjs.selecao_32de_32fases_45desafioCode.GDcajuObjects3= [];
gdjs.selecao_32de_32fases_45desafioCode.GDconquista_9595buttonObjects1= [];
gdjs.selecao_32de_32fases_45desafioCode.GDconquista_9595buttonObjects2= [];
gdjs.selecao_32de_32fases_45desafioCode.GDconquista_9595buttonObjects3= [];
gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects1= [];
gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects2= [];
gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects3= [];


gdjs.selecao_32de_32fases_45desafioCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fase_btn2"), gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects2);
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects2.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects2[i].getBehavior("Opacity").setOpacity(128);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fase_btn2"), gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects2);
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects2.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects2[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fase_btn3"), gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects2);
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects2.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects2[i].getBehavior("Opacity").setOpacity(128);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fase_btn3"), gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects1);
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects1.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


};gdjs.selecao_32de_32fases_45desafioCode.mapOfGDgdjs_9546selecao_959532de_959532fases_959545desafioCode_9546GDfase_95959595btn1Objects1Objects = Hashtable.newFrom({"fase_btn1": gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn1Objects1});
gdjs.selecao_32de_32fases_45desafioCode.asyncCallback25226356 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.selecao_32de_32fases_45desafioCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "fase1", false);
}
gdjs.selecao_32de_32fases_45desafioCode.localVariables.length = 0;
}
gdjs.selecao_32de_32fases_45desafioCode.idToCallbackMap.set(25226356, gdjs.selecao_32de_32fases_45desafioCode.asyncCallback25226356);
gdjs.selecao_32de_32fases_45desafioCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.selecao_32de_32fases_45desafioCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.selecao_32de_32fases_45desafioCode.asyncCallback25226356(runtimeScene, asyncObjectsList)), 25226356, asyncObjectsList);
}
}

}


};gdjs.selecao_32de_32fases_45desafioCode.mapOfGDgdjs_9546selecao_959532de_959532fases_959545desafioCode_9546GDfase_95959595btn2Objects1Objects = Hashtable.newFrom({"fase_btn2": gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects1});
gdjs.selecao_32de_32fases_45desafioCode.asyncCallback25229740 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.selecao_32de_32fases_45desafioCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "fase2", false);
}
gdjs.selecao_32de_32fases_45desafioCode.localVariables.length = 0;
}
gdjs.selecao_32de_32fases_45desafioCode.idToCallbackMap.set(25229740, gdjs.selecao_32de_32fases_45desafioCode.asyncCallback25229740);
gdjs.selecao_32de_32fases_45desafioCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.selecao_32de_32fases_45desafioCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.selecao_32de_32fases_45desafioCode.asyncCallback25229740(runtimeScene, asyncObjectsList)), 25229740, asyncObjectsList);
}
}

}


};gdjs.selecao_32de_32fases_45desafioCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects1, gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects2);

gdjs.copyArray(runtimeScene.getObjects("transição"), gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects2);
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects2.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects2[i].getBehavior("Animation").setAnimationName("");
}
}
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects2.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Circular", "Forward", 255, null);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.sound.getMusicOnChannelPlayingOffset(runtimeScene, 1));
}
{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}

{ //Subevents
gdjs.selecao_32de_32fases_45desafioCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("UnlockDialog"), gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("fase2");
}
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1[i].getBehavior("Text").setText("Desbloquear a fase 'O enigma do grande cajueiro?' custará 150 eco-pontos!");
}
}
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1[i].hide(false);
}
}
}

}


};gdjs.selecao_32de_32fases_45desafioCode.mapOfGDgdjs_9546selecao_959532de_959532fases_959545desafioCode_9546GDfase_95959595btn3Objects1Objects = Hashtable.newFrom({"fase_btn3": gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects1});
gdjs.selecao_32de_32fases_45desafioCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects1, gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects2);

gdjs.copyArray(runtimeScene.getObjects("transição"), gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects2);
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects2.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects2[i].getBehavior("Animation").setAnimationName("");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.sound.getMusicOnChannelPlayingOffset(runtimeScene, 1));
}
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects2.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Circular", "Forward", 255, null);
}
}
{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "fase3", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("UnlockDialog"), gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("fase3");
}
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1[i].getBehavior("Text").setText("Desbloquear a fase 'O misterio do cajueiro?' custará 400 eco-pontos!");
}
}
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1[i].hide(false);
}
}
}

}


};gdjs.selecao_32de_32fases_45desafioCode.asyncCallback25237116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.selecao_32de_32fases_45desafioCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "fase2", false);
}
gdjs.selecao_32de_32fases_45desafioCode.localVariables.length = 0;
}
gdjs.selecao_32de_32fases_45desafioCode.idToCallbackMap.set(25237116, gdjs.selecao_32de_32fases_45desafioCode.asyncCallback25237116);
gdjs.selecao_32de_32fases_45desafioCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.selecao_32de_32fases_45desafioCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.selecao_32de_32fases_45desafioCode.asyncCallback25237116(runtimeScene, asyncObjectsList)), 25237116, asyncObjectsList);
}
}

}


};gdjs.selecao_32de_32fases_45desafioCode.mapOfGDgdjs_9546selecao_959532de_959532fases_959545desafioCode_9546GDhome_95959595buttonObjects1Objects = Hashtable.newFrom({"home_button": gdjs.selecao_32de_32fases_45desafioCode.GDhome_9595buttonObjects1});
gdjs.selecao_32de_32fases_45desafioCode.mapOfGDgdjs_9546selecao_959532de_959532fases_959545desafioCode_9546GDhome_95959595buttonObjects1Objects = Hashtable.newFrom({"home_button": gdjs.selecao_32de_32fases_45desafioCode.GDhome_9595buttonObjects1});
gdjs.selecao_32de_32fases_45desafioCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EcoPontos"), gdjs.selecao_32de_32fases_45desafioCode.GDEcoPontosObjects1);
gdjs.copyArray(runtimeScene.getObjects("UnlockDialog"), gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "menu_musicamp3", 1, true, 40, 1);
}
{gdjs.evtTools.sound.setMusicOnChannelPlayingOffset(runtimeScene, 1, runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDEcoPontosObjects1.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDEcoPontosObjects1[i].getBehavior("RollingCounter").SetValue(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), null);
}
}

{ //Subevents
gdjs.selecao_32de_32fases_45desafioCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fase_btn1"), gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn1Objects1.length;i<l;++i) {
    if ( gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn1Objects1[i].getBehavior("ButtonFSM").IsClicked(gdjs.selecao_32de_32fases_45desafioCode.mapOfGDgdjs_9546selecao_959532de_959532fases_959545desafioCode_9546GDfase_95959595btn1Objects1Objects, null) ) {
        isConditionTrue_0 = true;
        gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn1Objects1[k] = gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn1Objects1[i];
        ++k;
    }
}
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn1Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transição"), gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.sound.getMusicOnChannelPlayingOffset(runtimeScene, 1));
}
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects1.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Both", 0, null);
}
}
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}

{ //Subevents
gdjs.selecao_32de_32fases_45desafioCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fase_btn2"), gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.selecao_32de_32fases_45desafioCode.mapOfGDgdjs_9546selecao_959532de_959532fases_959545desafioCode_9546GDfase_95959595btn2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.selecao_32de_32fases_45desafioCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fase_btn3"), gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.selecao_32de_32fases_45desafioCode.mapOfGDgdjs_9546selecao_959532de_959532fases_959545desafioCode_9546GDfase_95959595btn3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.selecao_32de_32fases_45desafioCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UnlockDialog"), gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1.length;i<l;++i) {
    if ( gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1[i].IsYesClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1[k] = gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1[i];
        ++k;
    }
}
gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "fase2");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 150);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1 */
gdjs.copyArray(runtimeScene.getObjects("fase_btn2"), gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects1);
gdjs.copyArray(runtimeScene.getObjects("transição"), gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() - 150);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects1.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects1.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Circular", "Forward", 255, null);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.sound.getMusicOnChannelPlayingOffset(runtimeScene, 1));
}
{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}

{ //Subevents
gdjs.selecao_32de_32fases_45desafioCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UnlockDialog"), gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1.length;i<l;++i) {
    if ( gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1[i].IsYesClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1[k] = gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1[i];
        ++k;
    }
}
gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "fase3");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 400);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1 */
gdjs.copyArray(runtimeScene.getObjects("fase_btn3"), gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects1);
gdjs.copyArray(runtimeScene.getObjects("transição"), gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() - 400);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(true);
}
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects1.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1[i].hide();
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.sound.getMusicOnChannelPlayingOffset(runtimeScene, 1));
}
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects1.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Circular", "Forward", 255, null);
}
}
{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "fase3", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UnlockDialog"), gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1.length;i<l;++i) {
    if ( gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1[i].IsNoClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1[k] = gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1[i];
        ++k;
    }
}
gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1 */
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UnlockDialog"), gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1.length;i<l;++i) {
    if ( gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1[i].IsYesClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1[k] = gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1[i];
        ++k;
    }
}
gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1 */
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("home_button"), gdjs.selecao_32de_32fases_45desafioCode.GDhome_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.selecao_32de_32fases_45desafioCode.GDhome_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.selecao_32de_32fases_45desafioCode.GDhome_9595buttonObjects1[i].getBehavior("ButtonFSM").IsClicked(gdjs.selecao_32de_32fases_45desafioCode.mapOfGDgdjs_9546selecao_959532de_959532fases_959545desafioCode_9546GDhome_95959595buttonObjects1Objects, null) ) {
        isConditionTrue_0 = true;
        gdjs.selecao_32de_32fases_45desafioCode.GDhome_9595buttonObjects1[k] = gdjs.selecao_32de_32fases_45desafioCode.GDhome_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.selecao_32de_32fases_45desafioCode.GDhome_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transição"), gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.sound.getMusicOnChannelPlayingOffset(runtimeScene, 1));
}
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects1.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Circular", "Forward", 255, null);
}
}
{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu Inicial", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("conquista_button"), gdjs.selecao_32de_32fases_45desafioCode.GDconquista_9595buttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("home_button"), gdjs.selecao_32de_32fases_45desafioCode.GDhome_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.selecao_32de_32fases_45desafioCode.GDconquista_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.selecao_32de_32fases_45desafioCode.GDconquista_9595buttonObjects1[i].getBehavior("ButtonFSM").IsClicked(gdjs.selecao_32de_32fases_45desafioCode.mapOfGDgdjs_9546selecao_959532de_959532fases_959545desafioCode_9546GDhome_95959595buttonObjects1Objects, null) ) {
        isConditionTrue_0 = true;
        gdjs.selecao_32de_32fases_45desafioCode.GDconquista_9595buttonObjects1[k] = gdjs.selecao_32de_32fases_45desafioCode.GDconquista_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.selecao_32de_32fases_45desafioCode.GDconquista_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transição"), gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.sound.getMusicOnChannelPlayingOffset(runtimeScene, 1));
}
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects1.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Circular", "Forward", 255, null);
}
}
{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "conquistas", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("EcoPontos"), gdjs.selecao_32de_32fases_45desafioCode.GDEcoPontosObjects1);
{for(var i = 0, len = gdjs.selecao_32de_32fases_45desafioCode.GDEcoPontosObjects1.length ;i < len;++i) {
    gdjs.selecao_32de_32fases_45desafioCode.GDEcoPontosObjects1[i].getBehavior("RollingCounter").SetValue(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), null);
}
}
}

}


};

gdjs.selecao_32de_32fases_45desafioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn1Objects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn1Objects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn1Objects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDBackgroundObjects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDBackgroundObjects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDBackgroundObjects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDhome_9595buttonObjects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDhome_9595buttonObjects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDhome_9595buttonObjects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDconfiguracao_9595buttonObjects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDconfiguracao_9595buttonObjects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDconfiguracao_9595buttonObjects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialog_9595fase3Objects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialog_9595fase3Objects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialog_9595fase3Objects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDEcoPontosObjects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDEcoPontosObjects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDEcoPontosObjects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDfundo_9595ecoPontosObjects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDfundo_9595ecoPontosObjects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDfundo_9595ecoPontosObjects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDcajuObjects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDcajuObjects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDcajuObjects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDconquista_9595buttonObjects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDconquista_9595buttonObjects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDconquista_9595buttonObjects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects3.length = 0;

gdjs.selecao_32de_32fases_45desafioCode.eventsList6(runtimeScene);
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn1Objects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn1Objects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn1Objects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDBackgroundObjects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDBackgroundObjects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDBackgroundObjects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn2Objects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDfase_9595btn3Objects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDhome_9595buttonObjects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDhome_9595buttonObjects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDhome_9595buttonObjects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDconfiguracao_9595buttonObjects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDconfiguracao_9595buttonObjects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDconfiguracao_9595buttonObjects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialogObjects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialog_9595fase3Objects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialog_9595fase3Objects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDUnlockDialog_9595fase3Objects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDEcoPontosObjects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDEcoPontosObjects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDEcoPontosObjects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDfundo_9595ecoPontosObjects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDfundo_9595ecoPontosObjects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDfundo_9595ecoPontosObjects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDcajuObjects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDcajuObjects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDcajuObjects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDconquista_9595buttonObjects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDconquista_9595buttonObjects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDconquista_9595buttonObjects3.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects1.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects2.length = 0;
gdjs.selecao_32de_32fases_45desafioCode.GDtransi_95231_95227oObjects3.length = 0;


return;

}

gdjs['selecao_32de_32fases_45desafioCode'] = gdjs.selecao_32de_32fases_45desafioCode;
