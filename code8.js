gdjs.Menu_32InicialCode = {};
gdjs.Menu_32InicialCode.localVariables = [];
gdjs.Menu_32InicialCode.idToCallbackMap = new Map();
gdjs.Menu_32InicialCode.GDBackgroundObjects1= [];
gdjs.Menu_32InicialCode.GDBackgroundObjects2= [];
gdjs.Menu_32InicialCode.GDTituloObjects1= [];
gdjs.Menu_32InicialCode.GDTituloObjects2= [];
gdjs.Menu_32InicialCode.GDufrnObjects1= [];
gdjs.Menu_32InicialCode.GDufrnObjects2= [];
gdjs.Menu_32InicialCode.GDLunaObjects1= [];
gdjs.Menu_32InicialCode.GDLunaObjects2= [];
gdjs.Menu_32InicialCode.GDByteObjects1= [];
gdjs.Menu_32InicialCode.GDByteObjects2= [];
gdjs.Menu_32InicialCode.GDEcoObjects1= [];
gdjs.Menu_32InicialCode.GDEcoObjects2= [];
gdjs.Menu_32InicialCode.GDLauraObjects1= [];
gdjs.Menu_32InicialCode.GDLauraObjects2= [];
gdjs.Menu_32InicialCode.GDiniciarObjects1= [];
gdjs.Menu_32InicialCode.GDiniciarObjects2= [];
gdjs.Menu_32InicialCode.GDtexto_9595iniciarObjects1= [];
gdjs.Menu_32InicialCode.GDtexto_9595iniciarObjects2= [];
gdjs.Menu_32InicialCode.GDtexto_9595conquistasObjects1= [];
gdjs.Menu_32InicialCode.GDtexto_9595conquistasObjects2= [];
gdjs.Menu_32InicialCode.GDtexto_9595creditosObjects1= [];
gdjs.Menu_32InicialCode.GDtexto_9595creditosObjects2= [];
gdjs.Menu_32InicialCode.GDtransi_95231_95227oObjects1= [];
gdjs.Menu_32InicialCode.GDtransi_95231_95227oObjects2= [];


gdjs.Menu_32InicialCode.mapOfGDgdjs_9546Menu_959532InicialCode_9546GDtexto_95959595iniciarObjects1Objects = Hashtable.newFrom({"texto_iniciar": gdjs.Menu_32InicialCode.GDtexto_9595iniciarObjects1});
gdjs.Menu_32InicialCode.asyncCallback25450540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Menu_32InicialCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "selecao de modos", false);
}
gdjs.Menu_32InicialCode.localVariables.length = 0;
}
gdjs.Menu_32InicialCode.idToCallbackMap.set(25450540, gdjs.Menu_32InicialCode.asyncCallback25450540);
gdjs.Menu_32InicialCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Menu_32InicialCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Menu_32InicialCode.asyncCallback25450540(runtimeScene, asyncObjectsList)), 25450540, asyncObjectsList);
}
}

}


};gdjs.Menu_32InicialCode.mapOfGDgdjs_9546Menu_959532InicialCode_9546GDtexto_95959595iniciarObjects1Objects = Hashtable.newFrom({"texto_iniciar": gdjs.Menu_32InicialCode.GDtexto_9595iniciarObjects1});
gdjs.Menu_32InicialCode.asyncCallback25452516 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Menu_32InicialCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "conquistas", false);
}
gdjs.Menu_32InicialCode.localVariables.length = 0;
}
gdjs.Menu_32InicialCode.idToCallbackMap.set(25452516, gdjs.Menu_32InicialCode.asyncCallback25452516);
gdjs.Menu_32InicialCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Menu_32InicialCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Menu_32InicialCode.asyncCallback25452516(runtimeScene, asyncObjectsList)), 25452516, asyncObjectsList);
}
}

}


};gdjs.Menu_32InicialCode.mapOfGDgdjs_9546Menu_959532InicialCode_9546GDtexto_95959595iniciarObjects1Objects = Hashtable.newFrom({"texto_iniciar": gdjs.Menu_32InicialCode.GDtexto_9595iniciarObjects1});
gdjs.Menu_32InicialCode.asyncCallback25454132 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Menu_32InicialCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "creditos", false);
}
gdjs.Menu_32InicialCode.localVariables.length = 0;
}
gdjs.Menu_32InicialCode.idToCallbackMap.set(25454132, gdjs.Menu_32InicialCode.asyncCallback25454132);
gdjs.Menu_32InicialCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Menu_32InicialCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Menu_32InicialCode.asyncCallback25454132(runtimeScene, asyncObjectsList)), 25454132, asyncObjectsList);
}
}

}


};gdjs.Menu_32InicialCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "menu_musicamp3", 1, true, 40, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("texto_iniciar"), gdjs.Menu_32InicialCode.GDtexto_9595iniciarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32InicialCode.GDtexto_9595iniciarObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32InicialCode.GDtexto_9595iniciarObjects1[i].getBehavior("ButtonFSM").IsClicked(gdjs.Menu_32InicialCode.mapOfGDgdjs_9546Menu_959532InicialCode_9546GDtexto_95959595iniciarObjects1Objects, null) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32InicialCode.GDtexto_9595iniciarObjects1[k] = gdjs.Menu_32InicialCode.GDtexto_9595iniciarObjects1[i];
        ++k;
    }
}
gdjs.Menu_32InicialCode.GDtexto_9595iniciarObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transição"), gdjs.Menu_32InicialCode.GDtransi_95231_95227oObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.sound.getMusicOnChannelPlayingOffset(runtimeScene, 1));
}
{for(var i = 0, len = gdjs.Menu_32InicialCode.GDtransi_95231_95227oObjects1.length ;i < len;++i) {
    gdjs.Menu_32InicialCode.GDtransi_95231_95227oObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Both", 0, null);
}
}
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}

{ //Subevents
gdjs.Menu_32InicialCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("texto_conquistas"), gdjs.Menu_32InicialCode.GDtexto_9595conquistasObjects1);
gdjs.copyArray(runtimeScene.getObjects("texto_iniciar"), gdjs.Menu_32InicialCode.GDtexto_9595iniciarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32InicialCode.GDtexto_9595conquistasObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32InicialCode.GDtexto_9595conquistasObjects1[i].getBehavior("ButtonFSM").IsClicked(gdjs.Menu_32InicialCode.mapOfGDgdjs_9546Menu_959532InicialCode_9546GDtexto_95959595iniciarObjects1Objects, null) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32InicialCode.GDtexto_9595conquistasObjects1[k] = gdjs.Menu_32InicialCode.GDtexto_9595conquistasObjects1[i];
        ++k;
    }
}
gdjs.Menu_32InicialCode.GDtexto_9595conquistasObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transição"), gdjs.Menu_32InicialCode.GDtransi_95231_95227oObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.sound.getMusicOnChannelPlayingOffset(runtimeScene, 1));
}
{for(var i = 0, len = gdjs.Menu_32InicialCode.GDtransi_95231_95227oObjects1.length ;i < len;++i) {
    gdjs.Menu_32InicialCode.GDtransi_95231_95227oObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Both", 0, null);
}
}
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}

{ //Subevents
gdjs.Menu_32InicialCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("texto_creditos"), gdjs.Menu_32InicialCode.GDtexto_9595creditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("texto_iniciar"), gdjs.Menu_32InicialCode.GDtexto_9595iniciarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32InicialCode.GDtexto_9595creditosObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32InicialCode.GDtexto_9595creditosObjects1[i].getBehavior("ButtonFSM").IsClicked(gdjs.Menu_32InicialCode.mapOfGDgdjs_9546Menu_959532InicialCode_9546GDtexto_95959595iniciarObjects1Objects, null) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32InicialCode.GDtexto_9595creditosObjects1[k] = gdjs.Menu_32InicialCode.GDtexto_9595creditosObjects1[i];
        ++k;
    }
}
gdjs.Menu_32InicialCode.GDtexto_9595creditosObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transição"), gdjs.Menu_32InicialCode.GDtransi_95231_95227oObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.sound.getMusicOnChannelPlayingOffset(runtimeScene, 1));
}
{for(var i = 0, len = gdjs.Menu_32InicialCode.GDtransi_95231_95227oObjects1.length ;i < len;++i) {
    gdjs.Menu_32InicialCode.GDtransi_95231_95227oObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Both", 0, null);
}
}
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}

{ //Subevents
gdjs.Menu_32InicialCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.Menu_32InicialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Menu_32InicialCode.GDBackgroundObjects1.length = 0;
gdjs.Menu_32InicialCode.GDBackgroundObjects2.length = 0;
gdjs.Menu_32InicialCode.GDTituloObjects1.length = 0;
gdjs.Menu_32InicialCode.GDTituloObjects2.length = 0;
gdjs.Menu_32InicialCode.GDufrnObjects1.length = 0;
gdjs.Menu_32InicialCode.GDufrnObjects2.length = 0;
gdjs.Menu_32InicialCode.GDLunaObjects1.length = 0;
gdjs.Menu_32InicialCode.GDLunaObjects2.length = 0;
gdjs.Menu_32InicialCode.GDByteObjects1.length = 0;
gdjs.Menu_32InicialCode.GDByteObjects2.length = 0;
gdjs.Menu_32InicialCode.GDEcoObjects1.length = 0;
gdjs.Menu_32InicialCode.GDEcoObjects2.length = 0;
gdjs.Menu_32InicialCode.GDLauraObjects1.length = 0;
gdjs.Menu_32InicialCode.GDLauraObjects2.length = 0;
gdjs.Menu_32InicialCode.GDiniciarObjects1.length = 0;
gdjs.Menu_32InicialCode.GDiniciarObjects2.length = 0;
gdjs.Menu_32InicialCode.GDtexto_9595iniciarObjects1.length = 0;
gdjs.Menu_32InicialCode.GDtexto_9595iniciarObjects2.length = 0;
gdjs.Menu_32InicialCode.GDtexto_9595conquistasObjects1.length = 0;
gdjs.Menu_32InicialCode.GDtexto_9595conquistasObjects2.length = 0;
gdjs.Menu_32InicialCode.GDtexto_9595creditosObjects1.length = 0;
gdjs.Menu_32InicialCode.GDtexto_9595creditosObjects2.length = 0;
gdjs.Menu_32InicialCode.GDtransi_95231_95227oObjects1.length = 0;
gdjs.Menu_32InicialCode.GDtransi_95231_95227oObjects2.length = 0;

gdjs.Menu_32InicialCode.eventsList3(runtimeScene);
gdjs.Menu_32InicialCode.GDBackgroundObjects1.length = 0;
gdjs.Menu_32InicialCode.GDBackgroundObjects2.length = 0;
gdjs.Menu_32InicialCode.GDTituloObjects1.length = 0;
gdjs.Menu_32InicialCode.GDTituloObjects2.length = 0;
gdjs.Menu_32InicialCode.GDufrnObjects1.length = 0;
gdjs.Menu_32InicialCode.GDufrnObjects2.length = 0;
gdjs.Menu_32InicialCode.GDLunaObjects1.length = 0;
gdjs.Menu_32InicialCode.GDLunaObjects2.length = 0;
gdjs.Menu_32InicialCode.GDByteObjects1.length = 0;
gdjs.Menu_32InicialCode.GDByteObjects2.length = 0;
gdjs.Menu_32InicialCode.GDEcoObjects1.length = 0;
gdjs.Menu_32InicialCode.GDEcoObjects2.length = 0;
gdjs.Menu_32InicialCode.GDLauraObjects1.length = 0;
gdjs.Menu_32InicialCode.GDLauraObjects2.length = 0;
gdjs.Menu_32InicialCode.GDiniciarObjects1.length = 0;
gdjs.Menu_32InicialCode.GDiniciarObjects2.length = 0;
gdjs.Menu_32InicialCode.GDtexto_9595iniciarObjects1.length = 0;
gdjs.Menu_32InicialCode.GDtexto_9595iniciarObjects2.length = 0;
gdjs.Menu_32InicialCode.GDtexto_9595conquistasObjects1.length = 0;
gdjs.Menu_32InicialCode.GDtexto_9595conquistasObjects2.length = 0;
gdjs.Menu_32InicialCode.GDtexto_9595creditosObjects1.length = 0;
gdjs.Menu_32InicialCode.GDtexto_9595creditosObjects2.length = 0;
gdjs.Menu_32InicialCode.GDtransi_95231_95227oObjects1.length = 0;
gdjs.Menu_32InicialCode.GDtransi_95231_95227oObjects2.length = 0;


return;

}

gdjs['Menu_32InicialCode'] = gdjs.Menu_32InicialCode;
