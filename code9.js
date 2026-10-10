gdjs.introdu_231_227o1Code = {};
gdjs.introdu_231_227o1Code.localVariables = [];
gdjs.introdu_231_227o1Code.idToCallbackMap = new Map();
gdjs.introdu_231_227o1Code.GDBackgroundObjects1= [];
gdjs.introdu_231_227o1Code.GDBackgroundObjects2= [];
gdjs.introdu_231_227o1Code.GDBackgroundObjects3= [];
gdjs.introdu_231_227o1Code.GDLunaObjects1= [];
gdjs.introdu_231_227o1Code.GDLunaObjects2= [];
gdjs.introdu_231_227o1Code.GDLunaObjects3= [];
gdjs.introdu_231_227o1Code.GDByteObjects1= [];
gdjs.introdu_231_227o1Code.GDByteObjects2= [];
gdjs.introdu_231_227o1Code.GDByteObjects3= [];
gdjs.introdu_231_227o1Code.GDEcoObjects1= [];
gdjs.introdu_231_227o1Code.GDEcoObjects2= [];
gdjs.introdu_231_227o1Code.GDEcoObjects3= [];
gdjs.introdu_231_227o1Code.GDiniciarObjects1= [];
gdjs.introdu_231_227o1Code.GDiniciarObjects2= [];
gdjs.introdu_231_227o1Code.GDiniciarObjects3= [];
gdjs.introdu_231_227o1Code.GDfundo_9595lunaObjects1= [];
gdjs.introdu_231_227o1Code.GDfundo_9595lunaObjects2= [];
gdjs.introdu_231_227o1Code.GDfundo_9595lunaObjects3= [];
gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects1= [];
gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects2= [];
gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects3= [];
gdjs.introdu_231_227o1Code.GDdialogo_9595byteObjects1= [];
gdjs.introdu_231_227o1Code.GDdialogo_9595byteObjects2= [];
gdjs.introdu_231_227o1Code.GDdialogo_9595byteObjects3= [];
gdjs.introdu_231_227o1Code.GDfundo_9595ecoObjects1= [];
gdjs.introdu_231_227o1Code.GDfundo_9595ecoObjects2= [];
gdjs.introdu_231_227o1Code.GDfundo_9595ecoObjects3= [];
gdjs.introdu_231_227o1Code.GDtexto_9595iniciarObjects1= [];
gdjs.introdu_231_227o1Code.GDtexto_9595iniciarObjects2= [];
gdjs.introdu_231_227o1Code.GDtexto_9595iniciarObjects3= [];
gdjs.introdu_231_227o1Code.GDfundo_9595byteObjects1= [];
gdjs.introdu_231_227o1Code.GDfundo_9595byteObjects2= [];
gdjs.introdu_231_227o1Code.GDfundo_9595byteObjects3= [];
gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects1= [];
gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects2= [];
gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects3= [];
gdjs.introdu_231_227o1Code.GDtransi_95231_95227oObjects1= [];
gdjs.introdu_231_227o1Code.GDtransi_95231_95227oObjects2= [];
gdjs.introdu_231_227o1Code.GDtransi_95231_95227oObjects3= [];


gdjs.introdu_231_227o1Code.mapOfGDgdjs_9546introdu_9595231_9595227o1Code_9546GDiniciarObjects1Objects = Hashtable.newFrom({"iniciar": gdjs.introdu_231_227o1Code.GDiniciarObjects1});
gdjs.introdu_231_227o1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "professora");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects1, gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects2);

gdjs.copyArray(gdjs.introdu_231_227o1Code.GDfundo_9595lunaObjects1, gdjs.introdu_231_227o1Code.GDfundo_9595lunaObjects2);

{for(var i = 0, len = gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects2.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.introdu_231_227o1Code.GDfundo_9595lunaObjects2.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDfundo_9595lunaObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects2.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects2[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()).getChild("fala"))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "eco");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects1, gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects2);

gdjs.copyArray(gdjs.introdu_231_227o1Code.GDfundo_9595ecoObjects1, gdjs.introdu_231_227o1Code.GDfundo_9595ecoObjects2);

{for(var i = 0, len = gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects2.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.introdu_231_227o1Code.GDfundo_9595ecoObjects2.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDfundo_9595ecoObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects2.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects2[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()).getChild("fala"))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "byte");
}
if (isConditionTrue_0) {
/* Reuse gdjs.introdu_231_227o1Code.GDdialogo_9595byteObjects1 */
/* Reuse gdjs.introdu_231_227o1Code.GDfundo_9595byteObjects1 */
{for(var i = 0, len = gdjs.introdu_231_227o1Code.GDdialogo_9595byteObjects1.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDdialogo_9595byteObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.introdu_231_227o1Code.GDfundo_9595byteObjects1.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDfundo_9595byteObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.introdu_231_227o1Code.GDdialogo_9595byteObjects1.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDdialogo_9595byteObjects1[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()).getChild("fala"))));
}
}
}

}


};gdjs.introdu_231_227o1Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 8);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects1, gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects2);

{for(var i = 0, len = gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects2.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects2[i].hide();
}
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "mini-desafio1");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() != 8);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.introdu_231_227o1Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.introdu_231_227o1Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0)) - 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "fase1", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() != gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0)) - 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()).getChild("nome")));
}

{ //Subevents
gdjs.introdu_231_227o1Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.introdu_231_227o1Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dialogo_byte"), gdjs.introdu_231_227o1Code.GDdialogo_9595byteObjects1);
gdjs.copyArray(runtimeScene.getObjects("dialogo_eco"), gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects1);
gdjs.copyArray(runtimeScene.getObjects("dialogo_luna"), gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundo_byte"), gdjs.introdu_231_227o1Code.GDfundo_9595byteObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundo_eco"), gdjs.introdu_231_227o1Code.GDfundo_9595ecoObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "menu_musicamp3", 1, true, 40, 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}
{for(var i = 0, len = gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects1.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects1[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()).getChild("fala"))));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()).getChild("nome")));
}
{for(var i = 0, len = gdjs.introdu_231_227o1Code.GDfundo_9595ecoObjects1.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDfundo_9595ecoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.introdu_231_227o1Code.GDfundo_9595byteObjects1.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDfundo_9595byteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects1.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects1[i].setWrapping(true);
}
for(var i = 0, len = gdjs.introdu_231_227o1Code.GDdialogo_9595byteObjects1.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDdialogo_9595byteObjects1[i].setWrapping(true);
}
for(var i = 0, len = gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects1.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects1[i].setWrapping(true);
}
}
{for(var i = 0, len = gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects1.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects1[i].setWrappingWidth(530);
}
for(var i = 0, len = gdjs.introdu_231_227o1Code.GDdialogo_9595byteObjects1.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDdialogo_9595byteObjects1[i].setWrappingWidth(530);
}
for(var i = 0, len = gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects1.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects1[i].setWrappingWidth(530);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("iniciar"), gdjs.introdu_231_227o1Code.GDiniciarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.introdu_231_227o1Code.mapOfGDgdjs_9546introdu_9595231_9595227o1Code_9546GDiniciarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Pause") > 2;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dialogo_byte"), gdjs.introdu_231_227o1Code.GDdialogo_9595byteObjects1);
gdjs.copyArray(runtimeScene.getObjects("dialogo_eco"), gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects1);
gdjs.copyArray(runtimeScene.getObjects("dialogo_luna"), gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundo_byte"), gdjs.introdu_231_227o1Code.GDfundo_9595byteObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundo_eco"), gdjs.introdu_231_227o1Code.GDfundo_9595ecoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundo_luna"), gdjs.introdu_231_227o1Code.GDfundo_9595lunaObjects1);
{for(var i = 0, len = gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects1.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.introdu_231_227o1Code.GDfundo_9595lunaObjects1.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDfundo_9595lunaObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects1.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.introdu_231_227o1Code.GDfundo_9595ecoObjects1.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDfundo_9595ecoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.introdu_231_227o1Code.GDdialogo_9595byteObjects1.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDdialogo_9595byteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.introdu_231_227o1Code.GDfundo_9595byteObjects1.length ;i < len;++i) {
    gdjs.introdu_231_227o1Code.GDfundo_9595byteObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}

{ //Subevents
gdjs.introdu_231_227o1Code.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.introdu_231_227o1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introdu_231_227o1Code.GDBackgroundObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDBackgroundObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDBackgroundObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDLunaObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDLunaObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDLunaObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDByteObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDByteObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDByteObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDEcoObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDEcoObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDEcoObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDiniciarObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDiniciarObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDiniciarObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDfundo_9595lunaObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDfundo_9595lunaObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDfundo_9595lunaObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDdialogo_9595byteObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDdialogo_9595byteObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDdialogo_9595byteObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDfundo_9595ecoObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDfundo_9595ecoObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDfundo_9595ecoObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDtexto_9595iniciarObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDtexto_9595iniciarObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDtexto_9595iniciarObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDfundo_9595byteObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDfundo_9595byteObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDfundo_9595byteObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDtransi_95231_95227oObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDtransi_95231_95227oObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDtransi_95231_95227oObjects3.length = 0;

gdjs.introdu_231_227o1Code.eventsList3(runtimeScene);
gdjs.introdu_231_227o1Code.GDBackgroundObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDBackgroundObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDBackgroundObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDLunaObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDLunaObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDLunaObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDByteObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDByteObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDByteObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDEcoObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDEcoObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDEcoObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDiniciarObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDiniciarObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDiniciarObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDfundo_9595lunaObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDfundo_9595lunaObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDfundo_9595lunaObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDdialogo_9595lunaObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDdialogo_9595byteObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDdialogo_9595byteObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDdialogo_9595byteObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDfundo_9595ecoObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDfundo_9595ecoObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDfundo_9595ecoObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDtexto_9595iniciarObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDtexto_9595iniciarObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDtexto_9595iniciarObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDfundo_9595byteObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDfundo_9595byteObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDfundo_9595byteObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDdialogo_9595ecoObjects3.length = 0;
gdjs.introdu_231_227o1Code.GDtransi_95231_95227oObjects1.length = 0;
gdjs.introdu_231_227o1Code.GDtransi_95231_95227oObjects2.length = 0;
gdjs.introdu_231_227o1Code.GDtransi_95231_95227oObjects3.length = 0;


return;

}

gdjs['introdu_231_227o1Code'] = gdjs.introdu_231_227o1Code;
