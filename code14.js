gdjs.mini_45desafio3_461Code = {};
gdjs.mini_45desafio3_461Code.localVariables = [];
gdjs.mini_45desafio3_461Code.idToCallbackMap = new Map();
gdjs.mini_45desafio3_461Code.forEachCount0_2 = 0;

gdjs.mini_45desafio3_461Code.forEachCount1_2 = 0;

gdjs.mini_45desafio3_461Code.forEachIndex2 = 0;

gdjs.mini_45desafio3_461Code.forEachObjects2 = [];

gdjs.mini_45desafio3_461Code.forEachTotalCount2 = 0;

gdjs.mini_45desafio3_461Code.GDfundo_9595desafioObjects1= [];
gdjs.mini_45desafio3_461Code.GDfundo_9595desafioObjects2= [];
gdjs.mini_45desafio3_461Code.GDfundo_9595desafioObjects3= [];
gdjs.mini_45desafio3_461Code.GDnumeroCastanhasObjects1= [];
gdjs.mini_45desafio3_461Code.GDnumeroCastanhasObjects2= [];
gdjs.mini_45desafio3_461Code.GDnumeroCastanhasObjects3= [];
gdjs.mini_45desafio3_461Code.GDinstru_95231_95245es_9595bgObjects1= [];
gdjs.mini_45desafio3_461Code.GDinstru_95231_95245es_9595bgObjects2= [];
gdjs.mini_45desafio3_461Code.GDinstru_95231_95245es_9595bgObjects3= [];
gdjs.mini_45desafio3_461Code.GDinstru_95231_95245esObjects1= [];
gdjs.mini_45desafio3_461Code.GDinstru_95231_95245esObjects2= [];
gdjs.mini_45desafio3_461Code.GDinstru_95231_95245esObjects3= [];
gdjs.mini_45desafio3_461Code.GDgalhosObjects1= [];
gdjs.mini_45desafio3_461Code.GDgalhosObjects2= [];
gdjs.mini_45desafio3_461Code.GDgalhosObjects3= [];
gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects1= [];
gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2= [];
gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects3= [];
gdjs.mini_45desafio3_461Code.GDfolhasObjects1= [];
gdjs.mini_45desafio3_461Code.GDfolhasObjects2= [];
gdjs.mini_45desafio3_461Code.GDfolhasObjects3= [];
gdjs.mini_45desafio3_461Code.GDgalho_9595inicioObjects1= [];
gdjs.mini_45desafio3_461Code.GDgalho_9595inicioObjects2= [];
gdjs.mini_45desafio3_461Code.GDgalho_9595inicioObjects3= [];
gdjs.mini_45desafio3_461Code.GDlinhaObjects1= [];
gdjs.mini_45desafio3_461Code.GDlinhaObjects2= [];
gdjs.mini_45desafio3_461Code.GDlinhaObjects3= [];
gdjs.mini_45desafio3_461Code.GDiniciarObjects1= [];
gdjs.mini_45desafio3_461Code.GDiniciarObjects2= [];
gdjs.mini_45desafio3_461Code.GDiniciarObjects3= [];
gdjs.mini_45desafio3_461Code.GDvoltarObjects1= [];
gdjs.mini_45desafio3_461Code.GDvoltarObjects2= [];
gdjs.mini_45desafio3_461Code.GDvoltarObjects3= [];
gdjs.mini_45desafio3_461Code.GDtransi_95231_95227oObjects1= [];
gdjs.mini_45desafio3_461Code.GDtransi_95231_95227oObjects2= [];
gdjs.mini_45desafio3_461Code.GDtransi_95231_95227oObjects3= [];


gdjs.mini_45desafio3_461Code.mapOfGDgdjs_9546mini_959545desafio3_9595461Code_9546GDcaju_95959595vermelhoObjects3Objects = Hashtable.newFrom({"caju_vermelho": gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects3});
gdjs.mini_45desafio3_461Code.eventsList0 = function(runtimeScene) {

};gdjs.mini_45desafio3_461Code.eventsList1 = function(runtimeScene) {

{


const repeatCount3 = 5;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects3.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.mini_45desafio3_461Code.mapOfGDgdjs_9546mini_959545desafio3_9595461Code_9546GDcaju_95959595vermelhoObjects3Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 0.15 + (200 * runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()), 500, "");
}
{for(var i = 0, len = gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects3.length ;i < len;++i) {
    gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects3[i].getBehavior("Scale").setScale(0.16);
}
}
{for(var i = 0, len = gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects3.length ;i < len;++i) {
    gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects3[i].returnVariable(gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects3[i].getVariables().getFromIndex(1)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("folhas"), gdjs.mini_45desafio3_461Code.GDfolhasObjects1);
{for(var i = 0, len = gdjs.mini_45desafio3_461Code.GDfolhasObjects1.length ;i < len;++i) {
    gdjs.mini_45desafio3_461Code.GDfolhasObjects1[i].returnVariable(gdjs.mini_45desafio3_461Code.GDfolhasObjects1[i].getVariables().getFromIndex(1)).add(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}
}

}


};gdjs.mini_45desafio3_461Code.mapOfGDgdjs_9546mini_959545desafio3_9595461Code_9546GDgalho_95959595inicioObjects1Objects = Hashtable.newFrom({"galho_inicio": gdjs.mini_45desafio3_461Code.GDgalho_9595inicioObjects1});
gdjs.mini_45desafio3_461Code.mapOfGDgdjs_9546mini_959545desafio3_9595461Code_9546GDcaju_95959595vermelhoObjects2ObjectsGDgdjs_9546mini_959545desafio3_9595461Code_9546GDfolhasObjects2Objects = Hashtable.newFrom({"caju_vermelho": gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2, "folhas": gdjs.mini_45desafio3_461Code.GDfolhasObjects2});
gdjs.mini_45desafio3_461Code.eventsList2 = function(runtimeScene) {

};gdjs.mini_45desafio3_461Code.mapOfGDgdjs_9546mini_959545desafio3_9595461Code_9546GDiniciarObjects1ObjectsGDgdjs_9546mini_959545desafio3_9595461Code_9546GDvoltarObjects1Objects = Hashtable.newFrom({"iniciar": gdjs.mini_45desafio3_461Code.GDiniciarObjects1, "voltar": gdjs.mini_45desafio3_461Code.GDvoltarObjects1});
gdjs.mini_45desafio3_461Code.asyncCallback25980580 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.mini_45desafio3_461Code.localVariables);
gdjs.mini_45desafio3_461Code.localVariables.length = 0;
}
gdjs.mini_45desafio3_461Code.idToCallbackMap.set(25980580, gdjs.mini_45desafio3_461Code.asyncCallback25980580);
gdjs.mini_45desafio3_461Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.mini_45desafio3_461Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.mini_45desafio3_461Code.asyncCallback25980580(runtimeScene, asyncObjectsList)), 25980580, asyncObjectsList);
}
}

}


};gdjs.mini_45desafio3_461Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.mini_45desafio3_461Code.GDvoltarObjects1, gdjs.mini_45desafio3_461Code.GDvoltarObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mini_45desafio3_461Code.GDvoltarObjects2.length;i<l;++i) {
    if ( gdjs.mini_45desafio3_461Code.GDvoltarObjects2[i].getBehavior("Text").getText() == "PRÓXIMO" ) {
        isConditionTrue_0 = true;
        gdjs.mini_45desafio3_461Code.GDvoltarObjects2[k] = gdjs.mini_45desafio3_461Code.GDvoltarObjects2[i];
        ++k;
    }
}
gdjs.mini_45desafio3_461Code.GDvoltarObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transição"), gdjs.mini_45desafio3_461Code.GDtransi_95231_95227oObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.sound.getMusicOnChannelPlayingOffset(runtimeScene, 1));
}
{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}
{for(var i = 0, len = gdjs.mini_45desafio3_461Code.GDtransi_95231_95227oObjects2.length ;i < len;++i) {
    gdjs.mini_45desafio3_461Code.GDtransi_95231_95227oObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Circular", "Forward", 255, null);
}
}
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}

{ //Subevents
gdjs.mini_45desafio3_461Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.mini_45desafio3_461Code.GDvoltarObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mini_45desafio3_461Code.GDvoltarObjects1.length;i<l;++i) {
    if ( gdjs.mini_45desafio3_461Code.GDvoltarObjects1[i].getBehavior("Text").getText() != "PRÓXIMO" ) {
        isConditionTrue_0 = true;
        gdjs.mini_45desafio3_461Code.GDvoltarObjects1[k] = gdjs.mini_45desafio3_461Code.GDvoltarObjects1[i];
        ++k;
    }
}
gdjs.mini_45desafio3_461Code.GDvoltarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mini-desafio3.1", false);
}
}

}


};gdjs.mini_45desafio3_461Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo_desafio"), gdjs.mini_45desafio3_461Code.GDfundo_9595desafioObjects1);
gdjs.copyArray(runtimeScene.getObjects("galhos"), gdjs.mini_45desafio3_461Code.GDgalhosObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "menu_musicamp3", 1, true, 40, 1);
}
{for(var i = 0, len = gdjs.mini_45desafio3_461Code.GDgalhosObjects1.length ;i < len;++i) {
    gdjs.mini_45desafio3_461Code.GDgalhosObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.mini_45desafio3_461Code.GDfundo_9595desafioObjects1.length ;i < len;++i) {
    gdjs.mini_45desafio3_461Code.GDfundo_9595desafioObjects1[i].getBehavior("Opacity").setOpacity(180);
}
}

{ //Subevents
gdjs.mini_45desafio3_461Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("galho_inicio"), gdjs.mini_45desafio3_461Code.GDgalho_9595inicioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.mini_45desafio3_461Code.mapOfGDgdjs_9546mini_959545desafio3_9595461Code_9546GDgalho_95959595inicioObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.mini_45desafio3_461Code.GDgalho_9595inicioObjects1 */
{for(var i = 0, len = gdjs.mini_45desafio3_461Code.GDgalho_9595inicioObjects1.length ;i < len;++i) {
    gdjs.mini_45desafio3_461Code.GDgalho_9595inicioObjects1[i].returnVariable(gdjs.mini_45desafio3_461Code.GDgalho_9595inicioObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("ultimoX").setNumber((( gdjs.mini_45desafio3_461Code.GDgalho_9595inicioObjects1.length === 0 ) ? 0 :gdjs.mini_45desafio3_461Code.GDgalho_9595inicioObjects1[0].getCenterXInScene()));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("ultimoY").setNumber((( gdjs.mini_45desafio3_461Code.GDgalho_9595inicioObjects1.length === 0 ) ? 0 :gdjs.mini_45desafio3_461Code.GDgalho_9595inicioObjects1[0].getCenterYInScene()));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("caju_vermelho"), gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects1);
gdjs.copyArray(runtimeScene.getObjects("folhas"), gdjs.mini_45desafio3_461Code.GDfolhasObjects1);

gdjs.mini_45desafio3_461Code.forEachTotalCount2 = 0;
gdjs.mini_45desafio3_461Code.forEachObjects2.length = 0;
gdjs.mini_45desafio3_461Code.forEachCount0_2 = gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects1.length;
gdjs.mini_45desafio3_461Code.forEachTotalCount2 += gdjs.mini_45desafio3_461Code.forEachCount0_2;
gdjs.mini_45desafio3_461Code.forEachObjects2.push.apply(gdjs.mini_45desafio3_461Code.forEachObjects2,gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects1);
gdjs.mini_45desafio3_461Code.forEachCount1_2 = gdjs.mini_45desafio3_461Code.GDfolhasObjects1.length;
gdjs.mini_45desafio3_461Code.forEachTotalCount2 += gdjs.mini_45desafio3_461Code.forEachCount1_2;
gdjs.mini_45desafio3_461Code.forEachObjects2.push.apply(gdjs.mini_45desafio3_461Code.forEachObjects2,gdjs.mini_45desafio3_461Code.GDfolhasObjects1);
for (gdjs.mini_45desafio3_461Code.forEachIndex2 = 0;gdjs.mini_45desafio3_461Code.forEachIndex2 < gdjs.mini_45desafio3_461Code.forEachTotalCount2;++gdjs.mini_45desafio3_461Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("linha"), gdjs.mini_45desafio3_461Code.GDlinhaObjects2);
gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2.length = 0;

gdjs.mini_45desafio3_461Code.GDfolhasObjects2.length = 0;


if (gdjs.mini_45desafio3_461Code.forEachIndex2 < gdjs.mini_45desafio3_461Code.forEachCount0_2) {
    gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2.push(gdjs.mini_45desafio3_461Code.forEachObjects2[gdjs.mini_45desafio3_461Code.forEachIndex2]);
}
else if (gdjs.mini_45desafio3_461Code.forEachIndex2 < gdjs.mini_45desafio3_461Code.forEachCount0_2+gdjs.mini_45desafio3_461Code.forEachCount1_2) {
    gdjs.mini_45desafio3_461Code.GDfolhasObjects2.push(gdjs.mini_45desafio3_461Code.forEachObjects2[gdjs.mini_45desafio3_461Code.forEachIndex2]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.mini_45desafio3_461Code.mapOfGDgdjs_9546mini_959545desafio3_9595461Code_9546GDcaju_95959595vermelhoObjects2ObjectsGDgdjs_9546mini_959545desafio3_9595461Code_9546GDfolhasObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2.length;i<l;++i) {
    if ( gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2[i].getVariableNumber(gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2[i].getVariables().get("posicao")) == runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2[k] = gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2[i];
        ++k;
    }
}
gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.mini_45desafio3_461Code.GDfolhasObjects2.length;i<l;++i) {
    if ( gdjs.mini_45desafio3_461Code.GDfolhasObjects2[i].getVariableNumber(gdjs.mini_45desafio3_461Code.GDfolhasObjects2[i].getVariables().get("posicao")) == runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.mini_45desafio3_461Code.GDfolhasObjects2[k] = gdjs.mini_45desafio3_461Code.GDfolhasObjects2[i];
        ++k;
    }
}
gdjs.mini_45desafio3_461Code.GDfolhasObjects2.length = k;
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.mini_45desafio3_461Code.GDlinhaObjects2.length ;i < len;++i) {
    gdjs.mini_45desafio3_461Code.GDlinhaObjects2[i].drawLineV2(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("ultimoX").getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(3).getChild("ultimoY").getAsNumber(), (( gdjs.mini_45desafio3_461Code.GDfolhasObjects2.length === 0 ) ? (( gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2.length === 0 ) ? 0 :gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2[0].getCenterXInScene()) :gdjs.mini_45desafio3_461Code.GDfolhasObjects2[0].getCenterXInScene()), (( gdjs.mini_45desafio3_461Code.GDfolhasObjects2.length === 0 ) ? (( gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2.length === 0 ) ? 0 :gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2[0].getCenterYInScene()) :gdjs.mini_45desafio3_461Code.GDfolhasObjects2[0].getCenterYInScene()), 3);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("ultimoX").setNumber((( gdjs.mini_45desafio3_461Code.GDfolhasObjects2.length === 0 ) ? (( gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2.length === 0 ) ? 0 :gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2[0].getCenterXInScene()) :gdjs.mini_45desafio3_461Code.GDfolhasObjects2[0].getCenterXInScene()));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("ultimoY").setNumber((( gdjs.mini_45desafio3_461Code.GDfolhasObjects2.length === 0 ) ? (( gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2.length === 0 ) ? 0 :gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2[0].getCenterYInScene()) :gdjs.mini_45desafio3_461Code.GDfolhasObjects2[0].getCenterYInScene()));
}
{for(var i = 0, len = gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2.length ;i < len;++i) {
    gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2[i].returnVariable(gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2[i].getVariables().get("selected")).setBoolean(true);
}
for(var i = 0, len = gdjs.mini_45desafio3_461Code.GDfolhasObjects2.length ;i < len;++i) {
    gdjs.mini_45desafio3_461Code.GDfolhasObjects2[i].returnVariable(gdjs.mini_45desafio3_461Code.GDfolhasObjects2[i].getVariables().get("selected")).setBoolean(true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Right", false, 80, 1);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo_desafio"), gdjs.mini_45desafio3_461Code.GDfundo_9595desafioObjects1);
gdjs.copyArray(runtimeScene.getObjects("galhos"), gdjs.mini_45desafio3_461Code.GDgalhosObjects1);
gdjs.copyArray(runtimeScene.getObjects("instruções"), gdjs.mini_45desafio3_461Code.GDinstru_95231_95245esObjects1);
gdjs.copyArray(runtimeScene.getObjects("linha"), gdjs.mini_45desafio3_461Code.GDlinhaObjects1);
gdjs.copyArray(runtimeScene.getObjects("voltar"), gdjs.mini_45desafio3_461Code.GDvoltarObjects1);
{for(var i = 0, len = gdjs.mini_45desafio3_461Code.GDlinhaObjects1.length ;i < len;++i) {
    gdjs.mini_45desafio3_461Code.GDlinhaObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.mini_45desafio3_461Code.GDgalhosObjects1.length ;i < len;++i) {
    gdjs.mini_45desafio3_461Code.GDgalhosObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.mini_45desafio3_461Code.GDfundo_9595desafioObjects1.length ;i < len;++i) {
    gdjs.mini_45desafio3_461Code.GDfundo_9595desafioObjects1[i].getBehavior("Opacity").setOpacity(250);
}
}
{for(var i = 0, len = gdjs.mini_45desafio3_461Code.GDinstru_95231_95245esObjects1.length ;i < len;++i) {
    gdjs.mini_45desafio3_461Code.GDinstru_95231_95245esObjects1[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase("Muito bem, ainda temos mais um pra você resolver."));
}
}
{for(var i = 0, len = gdjs.mini_45desafio3_461Code.GDvoltarObjects1.length ;i < len;++i) {
    gdjs.mini_45desafio3_461Code.GDvoltarObjects1[i].getBehavior("Text").setText("PRÓXIMO");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("iniciar"), gdjs.mini_45desafio3_461Code.GDiniciarObjects1);
gdjs.copyArray(runtimeScene.getObjects("voltar"), gdjs.mini_45desafio3_461Code.GDvoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.mini_45desafio3_461Code.mapOfGDgdjs_9546mini_959545desafio3_9595461Code_9546GDiniciarObjects1ObjectsGDgdjs_9546mini_959545desafio3_9595461Code_9546GDvoltarObjects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.mini_45desafio3_461Code.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.mini_45desafio3_461Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mini_45desafio3_461Code.GDfundo_9595desafioObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDfundo_9595desafioObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDfundo_9595desafioObjects3.length = 0;
gdjs.mini_45desafio3_461Code.GDnumeroCastanhasObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDnumeroCastanhasObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDnumeroCastanhasObjects3.length = 0;
gdjs.mini_45desafio3_461Code.GDinstru_95231_95245es_9595bgObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDinstru_95231_95245es_9595bgObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDinstru_95231_95245es_9595bgObjects3.length = 0;
gdjs.mini_45desafio3_461Code.GDinstru_95231_95245esObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDinstru_95231_95245esObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDinstru_95231_95245esObjects3.length = 0;
gdjs.mini_45desafio3_461Code.GDgalhosObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDgalhosObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDgalhosObjects3.length = 0;
gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects3.length = 0;
gdjs.mini_45desafio3_461Code.GDfolhasObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDfolhasObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDfolhasObjects3.length = 0;
gdjs.mini_45desafio3_461Code.GDgalho_9595inicioObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDgalho_9595inicioObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDgalho_9595inicioObjects3.length = 0;
gdjs.mini_45desafio3_461Code.GDlinhaObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDlinhaObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDlinhaObjects3.length = 0;
gdjs.mini_45desafio3_461Code.GDiniciarObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDiniciarObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDiniciarObjects3.length = 0;
gdjs.mini_45desafio3_461Code.GDvoltarObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDvoltarObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDvoltarObjects3.length = 0;
gdjs.mini_45desafio3_461Code.GDtransi_95231_95227oObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDtransi_95231_95227oObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDtransi_95231_95227oObjects3.length = 0;

gdjs.mini_45desafio3_461Code.eventsList5(runtimeScene);
gdjs.mini_45desafio3_461Code.GDfundo_9595desafioObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDfundo_9595desafioObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDfundo_9595desafioObjects3.length = 0;
gdjs.mini_45desafio3_461Code.GDnumeroCastanhasObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDnumeroCastanhasObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDnumeroCastanhasObjects3.length = 0;
gdjs.mini_45desafio3_461Code.GDinstru_95231_95245es_9595bgObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDinstru_95231_95245es_9595bgObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDinstru_95231_95245es_9595bgObjects3.length = 0;
gdjs.mini_45desafio3_461Code.GDinstru_95231_95245esObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDinstru_95231_95245esObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDinstru_95231_95245esObjects3.length = 0;
gdjs.mini_45desafio3_461Code.GDgalhosObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDgalhosObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDgalhosObjects3.length = 0;
gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDcaju_9595vermelhoObjects3.length = 0;
gdjs.mini_45desafio3_461Code.GDfolhasObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDfolhasObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDfolhasObjects3.length = 0;
gdjs.mini_45desafio3_461Code.GDgalho_9595inicioObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDgalho_9595inicioObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDgalho_9595inicioObjects3.length = 0;
gdjs.mini_45desafio3_461Code.GDlinhaObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDlinhaObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDlinhaObjects3.length = 0;
gdjs.mini_45desafio3_461Code.GDiniciarObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDiniciarObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDiniciarObjects3.length = 0;
gdjs.mini_45desafio3_461Code.GDvoltarObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDvoltarObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDvoltarObjects3.length = 0;
gdjs.mini_45desafio3_461Code.GDtransi_95231_95227oObjects1.length = 0;
gdjs.mini_45desafio3_461Code.GDtransi_95231_95227oObjects2.length = 0;
gdjs.mini_45desafio3_461Code.GDtransi_95231_95227oObjects3.length = 0;


return;

}

gdjs['mini_45desafio3_461Code'] = gdjs.mini_45desafio3_461Code;
