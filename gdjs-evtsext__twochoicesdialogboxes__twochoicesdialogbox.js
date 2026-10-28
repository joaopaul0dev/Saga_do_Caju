
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox || {};

/**
 * Object generated from Two choices dialog box 
 */
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox = class TwoChoicesDialogBox extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._objectData = {};
    
    this._objectData.TextMessage = objectData.content.TextMessage !== undefined ? objectData.content.TextMessage : "Default message. Continue?";
    this._objectData.HighlightedButtonIndex = Number("0") || 0;
    this._objectData.EnableEscape = objectData.content.EnableEscape !== undefined ? objectData.content.EnableEscape : true;
    this._objectData.LabelButtonID0 = objectData.content.LabelButtonID0 !== undefined ? objectData.content.LabelButtonID0 : "Yes";
    this._objectData.LabelButtonID1 = objectData.content.LabelButtonID1 !== undefined ? objectData.content.LabelButtonID1 : "No";
    this._objectData._PropertyMapping = "";
    this._objectData.HoveredSound = objectData.content.HoveredSound !== undefined ? objectData.content.HoveredSound : "";
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.TextMessage !== newObjectData.content.TextMessage)
      this._objectData.TextMessage = newObjectData.content.TextMessage;
    if (oldObjectData.content.HighlightedButtonIndex !== newObjectData.content.HighlightedButtonIndex)
      this._objectData.HighlightedButtonIndex = newObjectData.content.HighlightedButtonIndex;
    if (oldObjectData.content.EnableEscape !== newObjectData.content.EnableEscape)
      this._objectData.EnableEscape = newObjectData.content.EnableEscape;
    if (oldObjectData.content.LabelButtonID0 !== newObjectData.content.LabelButtonID0)
      this._objectData.LabelButtonID0 = newObjectData.content.LabelButtonID0;
    if (oldObjectData.content.LabelButtonID1 !== newObjectData.content.LabelButtonID1)
      this._objectData.LabelButtonID1 = newObjectData.content.LabelButtonID1;
    if (oldObjectData.content._PropertyMapping !== newObjectData.content._PropertyMapping)
      this._objectData._PropertyMapping = newObjectData.content._PropertyMapping;
    if (oldObjectData.content.HoveredSound !== newObjectData.content.HoveredSound)
      this._objectData.HoveredSound = newObjectData.content.HoveredSound;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getTextMessage() {
    return this._objectData.TextMessage !== undefined ? this._objectData.TextMessage : "Default message. Continue?";
  }
  _setTextMessage(newValue) {
    this._objectData.TextMessage = newValue;
  }
  _getHighlightedButtonIndex() {
    return this._objectData.HighlightedButtonIndex !== undefined ? this._objectData.HighlightedButtonIndex : Number("0") || 0;
  }
  _setHighlightedButtonIndex(newValue) {
    this._objectData.HighlightedButtonIndex = newValue;
  }
  _getEnableEscape() {
    return this._objectData.EnableEscape !== undefined ? this._objectData.EnableEscape : true;
  }
  _setEnableEscape(newValue) {
    this._objectData.EnableEscape = newValue;
  }
  _toggleEnableEscape() {
    this._setEnableEscape(!this._getEnableEscape());
  }
  _getLabelButtonID0() {
    return this._objectData.LabelButtonID0 !== undefined ? this._objectData.LabelButtonID0 : "Yes";
  }
  _setLabelButtonID0(newValue) {
    this._objectData.LabelButtonID0 = newValue;
  }
  _getLabelButtonID1() {
    return this._objectData.LabelButtonID1 !== undefined ? this._objectData.LabelButtonID1 : "No";
  }
  _setLabelButtonID1(newValue) {
    this._objectData.LabelButtonID1 = newValue;
  }
  _get_PropertyMapping() {
    return this._objectData._PropertyMapping !== undefined ? this._objectData._PropertyMapping : "";
  }
  _set_PropertyMapping(newValue) {
    this._objectData._PropertyMapping = newValue;
  }
  _getHoveredSound() {
    return this._objectData.HoveredSound !== undefined ? this._objectData.HoveredSound : "";
  }
  _setHoveredSound(newValue) {
    this._objectData.HoveredSound = newValue;
  }

  

  
  // gdjs.TextContainer interface implementation
  _text = '';
  getText() {
    return this._text;
  }
  setText(text) {
    this._text = text;
  }

}

// Methods:
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext = {};
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDNoButtonObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDNoButtonObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDYesButtonObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDYesButtonObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDTextBorderObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDTextBorderObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDDialogueObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDDialogueObjects2= [];


gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("NoButton"), gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDNoButtonObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("YesButton"), gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDYesButtonObjects1);
{for(var i = 0, len = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDNoButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDNoButtonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect("OutlineEffect", false);
}
for(var i = 0, len = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDYesButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDYesButtonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect("OutlineEffect", false);
}
}
{for(var i = 0, len = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0]._getTextMessage());
}
}
{for(var i = 0, len = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDYesButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDYesButtonObjects1[i].SetLabelText(eventsFunctionContext.getObjects("Object")[0]._getLabelButtonID0(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDNoButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDNoButtonObjects1[i].SetLabelText(eventsFunctionContext.getObjects("Object")[0]._getLabelButtonID1(), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDNoButtonObjectsList = [...runtimeScene.getObjects("NoButton")];
var GDNoButtonObjects = Hashtable.newFrom({"NoButton": thisGDNoButtonObjectsList});
var thisGDYesButtonObjectsList = [...runtimeScene.getObjects("YesButton")];
var GDYesButtonObjects = Hashtable.newFrom({"YesButton": thisGDYesButtonObjectsList});
var thisGDTextBorderObjectsList = [...runtimeScene.getObjects("TextBorder")];
var GDTextBorderObjects = Hashtable.newFrom({"TextBorder": thisGDTextBorderObjectsList});
var thisGDDialogueObjectsList = [...runtimeScene.getObjects("Dialogue")];
var GDDialogueObjects = Hashtable.newFrom({"Dialogue": thisGDDialogueObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "NoButton": GDNoButtonObjects
, "YesButton": GDYesButtonObjects
, "TextBorder": GDTextBorderObjects
, "Dialogue": GDDialogueObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "NoButton": thisGDNoButtonObjectsList
, "YesButton": thisGDYesButtonObjectsList
, "TextBorder": thisGDTextBorderObjectsList
, "Dialogue": thisGDDialogueObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TwoChoicesDialogBoxes"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TwoChoicesDialogBoxes"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDDialogueObjects2.length = 0;

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onCreatedContext.GDDialogueObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects3= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects3= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDTextBorderObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDTextBorderObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDTextBorderObjects3= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDDialogueObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDDialogueObjects3= [];


gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("NoButton"), gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("YesButton"), gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2[i].IsHovered(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2[k] = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2[i].IsHovered(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2[k] = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(22797364);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2 */
gdjs.copyArray(gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects2);

/* Reuse gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, eventsFunctionContext.getObjects("Object")[0]._getHoveredSound(), false, 20, gdjs.randomFloatInRange(0.8, 0.9));
}
{for(var i = 0, len = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects2[i].SetActiveButtonById(((gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2.length === 0 ) ? ((gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2[0].getVariables()) : gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2[0].getVariables()).get("ID").getAsNumber(), eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "NumpadLeft");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Left", eventsFunctionContext);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", eventsFunctionContext);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(22797628);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects2[i].SetActiveButtonById(gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects2[i].ActiveButtonById(eventsFunctionContext) - (1), eventsFunctionContext);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, eventsFunctionContext.getObjects("Object")[0]._getHoveredSound(), false, 20, gdjs.randomFloatInRange(0.8, 0.9));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "NumpadRight");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Right", eventsFunctionContext);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", eventsFunctionContext);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(22801580);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects2[i].SetActiveButtonById(gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects2[i].ActiveButtonById(eventsFunctionContext) + (1), eventsFunctionContext);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, eventsFunctionContext.getObjects("Object")[0]._getHoveredSound(), false, 20, gdjs.randomFloatInRange(0.8, 0.9));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getEnableEscape();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "B", eventsFunctionContext);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(22803844);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects1[i].SetActiveButtonById(1, eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__TwoChoicesDialogBoxes__IsInGameEdition.func(runtimeScene, eventsFunctionContext));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Dialogue"), gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1);
/* Reuse gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText((( gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Text")).getText()));
}
}

{ //Subevents
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDNoButtonObjectsList = [...runtimeScene.getObjects("NoButton")];
var GDNoButtonObjects = Hashtable.newFrom({"NoButton": thisGDNoButtonObjectsList});
var thisGDYesButtonObjectsList = [...runtimeScene.getObjects("YesButton")];
var GDYesButtonObjects = Hashtable.newFrom({"YesButton": thisGDYesButtonObjectsList});
var thisGDTextBorderObjectsList = [...runtimeScene.getObjects("TextBorder")];
var GDTextBorderObjects = Hashtable.newFrom({"TextBorder": thisGDTextBorderObjectsList});
var thisGDDialogueObjectsList = [...runtimeScene.getObjects("Dialogue")];
var GDDialogueObjects = Hashtable.newFrom({"Dialogue": thisGDDialogueObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "NoButton": GDNoButtonObjects
, "YesButton": GDYesButtonObjects
, "TextBorder": GDTextBorderObjects
, "Dialogue": GDDialogueObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "NoButton": thisGDNoButtonObjectsList
, "YesButton": thisGDYesButtonObjectsList
, "TextBorder": thisGDTextBorderObjectsList
, "Dialogue": thisGDDialogueObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TwoChoicesDialogBoxes"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TwoChoicesDialogBoxes"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDTextBorderObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDDialogueObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDDialogueObjects3.length = 0;

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDTextBorderObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDDialogueObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPostEventsContext.GDDialogueObjects3.length = 0;


return;
}
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext = {};
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.idToCallbackMap = new Map();
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDObjectObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDObjectObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDNoButtonObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDNoButtonObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDYesButtonObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDYesButtonObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDTextBorderObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDTextBorderObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDDialogueObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDDialogueObjects2= [];


gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("NoButton"), gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDNoButtonObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("YesButton"), gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDYesButtonObjects1);
{for(var i = 0, len = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0]._getTextMessage());
}
}
{for(var i = 0, len = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDYesButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDYesButtonObjects1[i].SetLabelTextOp(eventsFunctionContext.getObjects("Object")[0]._getLabelButtonID0(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDNoButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDNoButtonObjects1[i].SetLabelTextOp(eventsFunctionContext.getObjects("Object")[0]._getLabelButtonID1(), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloading = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDNoButtonObjectsList = [...runtimeScene.getObjects("NoButton")];
var GDNoButtonObjects = Hashtable.newFrom({"NoButton": thisGDNoButtonObjectsList});
var thisGDYesButtonObjectsList = [...runtimeScene.getObjects("YesButton")];
var GDYesButtonObjects = Hashtable.newFrom({"YesButton": thisGDYesButtonObjectsList});
var thisGDTextBorderObjectsList = [...runtimeScene.getObjects("TextBorder")];
var GDTextBorderObjects = Hashtable.newFrom({"TextBorder": thisGDTextBorderObjectsList});
var thisGDDialogueObjectsList = [...runtimeScene.getObjects("Dialogue")];
var GDDialogueObjects = Hashtable.newFrom({"Dialogue": thisGDDialogueObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "NoButton": GDNoButtonObjects
, "YesButton": GDYesButtonObjects
, "TextBorder": GDTextBorderObjects
, "Dialogue": GDDialogueObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "NoButton": thisGDNoButtonObjectsList
, "YesButton": thisGDYesButtonObjectsList
, "TextBorder": thisGDTextBorderObjectsList
, "Dialogue": thisGDDialogueObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TwoChoicesDialogBoxes"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TwoChoicesDialogBoxes"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDDialogueObjects2.length = 0;

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.onHotReloadingContext.GDDialogueObjects2.length = 0;


return;
}
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext = {};
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.idToCallbackMap = new Map();
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects1_1final = [];

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects3= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDNoButtonObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDNoButtonObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDNoButtonObjects3= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects3= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDTextBorderObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDTextBorderObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDTextBorderObjects3= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDDialogueObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDDialogueObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDDialogueObjects3= [];


gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects1_1final.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("YesButton"), gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects2[i].IsClicked(eventsFunctionContext) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects2[k] = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects1_1final.indexOf(gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects2[j]) === -1 )
            gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects1_1final.push(gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects2[i].ActiveButtonById(eventsFunctionContext) == 0 ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects2[k] = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{let isConditionTrue_3 = false;
isConditionTrue_2 = false;
{
isConditionTrue_3 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "NumpadReturn");
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
}
}
{
isConditionTrue_3 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
}
}
{
isConditionTrue_3 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
}
}
{
isConditionTrue_3 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", eventsFunctionContext);
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
}
}
{
isConditionTrue_3 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
}
}
{
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects1_1final.push(gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects1_1final, gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects1);
gdjs.copyArray(gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects1_1final, gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects1);
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClicked = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDNoButtonObjectsList = [...runtimeScene.getObjects("NoButton")];
var GDNoButtonObjects = Hashtable.newFrom({"NoButton": thisGDNoButtonObjectsList});
var thisGDYesButtonObjectsList = [...runtimeScene.getObjects("YesButton")];
var GDYesButtonObjects = Hashtable.newFrom({"YesButton": thisGDYesButtonObjectsList});
var thisGDTextBorderObjectsList = [...runtimeScene.getObjects("TextBorder")];
var GDTextBorderObjects = Hashtable.newFrom({"TextBorder": thisGDTextBorderObjectsList});
var thisGDDialogueObjectsList = [...runtimeScene.getObjects("Dialogue")];
var GDDialogueObjects = Hashtable.newFrom({"Dialogue": thisGDDialogueObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "NoButton": GDNoButtonObjects
, "YesButton": GDYesButtonObjects
, "TextBorder": GDTextBorderObjects
, "Dialogue": GDDialogueObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "NoButton": thisGDNoButtonObjectsList
, "YesButton": thisGDYesButtonObjectsList
, "TextBorder": thisGDTextBorderObjectsList
, "Dialogue": thisGDDialogueObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TwoChoicesDialogBoxes"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TwoChoicesDialogBoxes"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDNoButtonObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDTextBorderObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDDialogueObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDDialogueObjects3.length = 0;

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDNoButtonObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDYesButtonObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDTextBorderObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDDialogueObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsYesClickedContext.GDDialogueObjects3.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext = {};
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.idToCallbackMap = new Map();
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects1_1final = [];

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects3= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects3= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDYesButtonObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDYesButtonObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDYesButtonObjects3= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDTextBorderObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDTextBorderObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDTextBorderObjects3= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDDialogueObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDDialogueObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDDialogueObjects3= [];


gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects1.length = 0;

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects1_1final.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("NoButton"), gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects2[i].IsClicked(eventsFunctionContext) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects2[k] = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects1_1final.indexOf(gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects2[j]) === -1 )
            gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects1_1final.push(gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects2[i].ActiveButtonById(eventsFunctionContext) == 1 ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects2[k] = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{let isConditionTrue_3 = false;
isConditionTrue_2 = false;
{
isConditionTrue_3 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "NumpadReturn");
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
}
}
{
isConditionTrue_3 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
}
}
{
isConditionTrue_3 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", eventsFunctionContext);
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
}
}
{
isConditionTrue_3 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
}
}
{
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects1_1final.push(gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects1_1final, gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects1);
gdjs.copyArray(gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects1_1final, gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClicked = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDNoButtonObjectsList = [...runtimeScene.getObjects("NoButton")];
var GDNoButtonObjects = Hashtable.newFrom({"NoButton": thisGDNoButtonObjectsList});
var thisGDYesButtonObjectsList = [...runtimeScene.getObjects("YesButton")];
var GDYesButtonObjects = Hashtable.newFrom({"YesButton": thisGDYesButtonObjectsList});
var thisGDTextBorderObjectsList = [...runtimeScene.getObjects("TextBorder")];
var GDTextBorderObjects = Hashtable.newFrom({"TextBorder": thisGDTextBorderObjectsList});
var thisGDDialogueObjectsList = [...runtimeScene.getObjects("Dialogue")];
var GDDialogueObjects = Hashtable.newFrom({"Dialogue": thisGDDialogueObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "NoButton": GDNoButtonObjects
, "YesButton": GDYesButtonObjects
, "TextBorder": GDTextBorderObjects
, "Dialogue": GDDialogueObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "NoButton": thisGDNoButtonObjectsList
, "YesButton": thisGDYesButtonObjectsList
, "TextBorder": thisGDTextBorderObjectsList
, "Dialogue": thisGDDialogueObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TwoChoicesDialogBoxes"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TwoChoicesDialogBoxes"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDYesButtonObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDTextBorderObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDDialogueObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDDialogueObjects3.length = 0;

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDNoButtonObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDYesButtonObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDTextBorderObjects3.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDDialogueObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.IsNoClickedContext.GDDialogueObjects3.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext = {};
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.idToCallbackMap = new Map();
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDObjectObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDObjectObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDNoButtonObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDNoButtonObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDYesButtonObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDYesButtonObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDTextBorderObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDTextBorderObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDDialogueObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDDialogueObjects2= [];


gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getHighlightedButtonIndex();}
}

}


};

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonById = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDNoButtonObjectsList = [...runtimeScene.getObjects("NoButton")];
var GDNoButtonObjects = Hashtable.newFrom({"NoButton": thisGDNoButtonObjectsList});
var thisGDYesButtonObjectsList = [...runtimeScene.getObjects("YesButton")];
var GDYesButtonObjects = Hashtable.newFrom({"YesButton": thisGDYesButtonObjectsList});
var thisGDTextBorderObjectsList = [...runtimeScene.getObjects("TextBorder")];
var GDTextBorderObjects = Hashtable.newFrom({"TextBorder": thisGDTextBorderObjectsList});
var thisGDDialogueObjectsList = [...runtimeScene.getObjects("Dialogue")];
var GDDialogueObjects = Hashtable.newFrom({"Dialogue": thisGDDialogueObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "NoButton": GDNoButtonObjects
, "YesButton": GDYesButtonObjects
, "TextBorder": GDTextBorderObjects
, "Dialogue": GDDialogueObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "NoButton": thisGDNoButtonObjectsList
, "YesButton": thisGDYesButtonObjectsList
, "TextBorder": thisGDTextBorderObjectsList
, "Dialogue": thisGDDialogueObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TwoChoicesDialogBoxes"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TwoChoicesDialogBoxes"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDDialogueObjects2.length = 0;

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.ActiveButtonByIdContext.GDDialogueObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext = {};
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.idToCallbackMap = new Map();
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDObjectObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDObjectObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDTextBorderObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDTextBorderObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDDialogueObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDDialogueObjects2= [];


gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.mapOfEmptyGDNoButtonObjectsEmptyGDYesButtonObjects = Hashtable.newFrom({"NoButton": [], "YesButton": []});
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0]._setHighlightedButtonIndex(gdjs.evtTools.common.mod(eventsFunctionContext.getArgument("Value"), gdjs.evtTools.object.getSceneInstancesCount(eventsFunctionContext, gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.mapOfEmptyGDNoButtonObjectsEmptyGDYesButtonObjects)))
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("NoButton"), gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("YesButton"), gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1[i].getVariableNumber(gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1[i].getVariables().get("ID")) == eventsFunctionContext.getObjects("Object")[0]._getHighlightedButtonIndex() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1[k] = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1[i].getVariableNumber(gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1[i].getVariables().get("ID")) == eventsFunctionContext.getObjects("Object")[0]._getHighlightedButtonIndex() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1[k] = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1 */
/* Reuse gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect("OutlineEffect", true);
}
for(var i = 0, len = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect("OutlineEffect", true);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("NoButton"), gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("YesButton"), gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1[i].getVariableNumber(gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1[i].getVariables().get("ID")) != eventsFunctionContext.getObjects("Object")[0]._getHighlightedButtonIndex() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1[k] = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1[i].getVariableNumber(gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1[i].getVariables().get("ID")) != eventsFunctionContext.getObjects("Object")[0]._getHighlightedButtonIndex() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1[k] = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1 */
/* Reuse gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect("OutlineEffect", false);
}
for(var i = 0, len = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect("OutlineEffect", false);
}
}
}

}


};

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonById = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDNoButtonObjectsList = [...runtimeScene.getObjects("NoButton")];
var GDNoButtonObjects = Hashtable.newFrom({"NoButton": thisGDNoButtonObjectsList});
var thisGDYesButtonObjectsList = [...runtimeScene.getObjects("YesButton")];
var GDYesButtonObjects = Hashtable.newFrom({"YesButton": thisGDYesButtonObjectsList});
var thisGDTextBorderObjectsList = [...runtimeScene.getObjects("TextBorder")];
var GDTextBorderObjects = Hashtable.newFrom({"TextBorder": thisGDTextBorderObjectsList});
var thisGDDialogueObjectsList = [...runtimeScene.getObjects("Dialogue")];
var GDDialogueObjects = Hashtable.newFrom({"Dialogue": thisGDDialogueObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "NoButton": GDNoButtonObjects
, "YesButton": GDYesButtonObjects
, "TextBorder": GDTextBorderObjects
, "Dialogue": GDDialogueObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "NoButton": thisGDNoButtonObjectsList
, "YesButton": thisGDYesButtonObjectsList
, "TextBorder": thisGDTextBorderObjectsList
, "Dialogue": thisGDDialogueObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TwoChoicesDialogBoxes"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TwoChoicesDialogBoxes"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDDialogueObjects2.length = 0;

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetActiveButtonByIdContext.GDDialogueObjects2.length = 0;


return;
}
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext = {};
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.idToCallbackMap = new Map();
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDObjectObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDObjectObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDNoButtonObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDNoButtonObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDYesButtonObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDYesButtonObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDTextBorderObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDTextBorderObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDDialogueObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDDialogueObjects2= [];


gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getTextMessage();}
}

}


};

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessage = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDNoButtonObjectsList = [...runtimeScene.getObjects("NoButton")];
var GDNoButtonObjects = Hashtable.newFrom({"NoButton": thisGDNoButtonObjectsList});
var thisGDYesButtonObjectsList = [...runtimeScene.getObjects("YesButton")];
var GDYesButtonObjects = Hashtable.newFrom({"YesButton": thisGDYesButtonObjectsList});
var thisGDTextBorderObjectsList = [...runtimeScene.getObjects("TextBorder")];
var GDTextBorderObjects = Hashtable.newFrom({"TextBorder": thisGDTextBorderObjectsList});
var thisGDDialogueObjectsList = [...runtimeScene.getObjects("Dialogue")];
var GDDialogueObjects = Hashtable.newFrom({"Dialogue": thisGDDialogueObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "NoButton": GDNoButtonObjects
, "YesButton": GDYesButtonObjects
, "TextBorder": GDTextBorderObjects
, "Dialogue": GDDialogueObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "NoButton": thisGDNoButtonObjectsList
, "YesButton": thisGDYesButtonObjectsList
, "TextBorder": thisGDTextBorderObjectsList
, "Dialogue": thisGDDialogueObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TwoChoicesDialogBoxes"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TwoChoicesDialogBoxes"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDDialogueObjects2.length = 0;

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.TextMessageContext.GDDialogueObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext = {};
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.idToCallbackMap = new Map();
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDObjectObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDObjectObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDNoButtonObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDNoButtonObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDYesButtonObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDYesButtonObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDTextBorderObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDTextBorderObjects2= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDDialogueObjects1= [];
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDDialogueObjects2= [];


gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Dialogue"), gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDDialogueObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setTextMessage(eventsFunctionContext.getArgument("Value"))
}
{for(var i = 0, len = gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDDialogueObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0]._getTextMessage());
}
}
}

}


};

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessage = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDNoButtonObjectsList = [...runtimeScene.getObjects("NoButton")];
var GDNoButtonObjects = Hashtable.newFrom({"NoButton": thisGDNoButtonObjectsList});
var thisGDYesButtonObjectsList = [...runtimeScene.getObjects("YesButton")];
var GDYesButtonObjects = Hashtable.newFrom({"YesButton": thisGDYesButtonObjectsList});
var thisGDTextBorderObjectsList = [...runtimeScene.getObjects("TextBorder")];
var GDTextBorderObjects = Hashtable.newFrom({"TextBorder": thisGDTextBorderObjectsList});
var thisGDDialogueObjectsList = [...runtimeScene.getObjects("Dialogue")];
var GDDialogueObjects = Hashtable.newFrom({"Dialogue": thisGDDialogueObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "NoButton": GDNoButtonObjects
, "YesButton": GDYesButtonObjects
, "TextBorder": GDTextBorderObjects
, "Dialogue": GDDialogueObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "NoButton": thisGDNoButtonObjectsList
, "YesButton": thisGDYesButtonObjectsList
, "TextBorder": thisGDTextBorderObjectsList
, "Dialogue": thisGDDialogueObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TwoChoicesDialogBoxes"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TwoChoicesDialogBoxes"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDDialogueObjects2.length = 0;

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.SetTextMessageContext.GDDialogueObjects2.length = 0;


return;
}

gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("TwoChoicesDialogBoxes::TwoChoicesDialogBox", gdjs.evtsExt__TwoChoicesDialogBoxes__TwoChoicesDialogBox.TwoChoicesDialogBox);
