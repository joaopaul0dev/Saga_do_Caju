
gdjs.evtsExt__ScoreCounter__RollingCounter = gdjs.evtsExt__ScoreCounter__RollingCounter || {};

/**
 * Behavior generated from Rolling counter
 */
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter = class RollingCounter extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Text = behaviorData.Text !== undefined ? behaviorData.Text : "";
    this._behaviorData.Prefix = behaviorData.Prefix !== undefined ? behaviorData.Prefix : "Score: ";
    this._behaviorData.Suffix = behaviorData.Suffix !== undefined ? behaviorData.Suffix : "";
    this._behaviorData.Duration = behaviorData.Duration !== undefined ? behaviorData.Duration : Number("1") || 0;
    this._behaviorData.Increment = behaviorData.Increment !== undefined ? behaviorData.Increment : Number("1") || 0;
    this._behaviorData.CounterValue = Number("0") || 0;
    this._behaviorData.DisplayedValue = Number("0") || 0;
    this._behaviorData.Speed = Number("0") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Text !== undefined)
      this._behaviorData.Text = behaviorOverriding.Text;
    if (behaviorOverriding.Prefix !== undefined)
      this._behaviorData.Prefix = behaviorOverriding.Prefix;
    if (behaviorOverriding.Suffix !== undefined)
      this._behaviorData.Suffix = behaviorOverriding.Suffix;
    if (behaviorOverriding.Duration !== undefined)
      this._behaviorData.Duration = behaviorOverriding.Duration;
    if (behaviorOverriding.Increment !== undefined)
      this._behaviorData.Increment = behaviorOverriding.Increment;
    if (behaviorOverriding.CounterValue !== undefined)
      this._behaviorData.CounterValue = behaviorOverriding.CounterValue;
    if (behaviorOverriding.DisplayedValue !== undefined)
      this._behaviorData.DisplayedValue = behaviorOverriding.DisplayedValue;
    if (behaviorOverriding.Speed !== undefined)
      this._behaviorData.Speed = behaviorOverriding.Speed;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Text: this._behaviorData.Text,
    Prefix: this._behaviorData.Prefix,
    Suffix: this._behaviorData.Suffix,
    Duration: this._behaviorData.Duration,
    Increment: this._behaviorData.Increment,
    CounterValue: this._behaviorData.CounterValue,
    DisplayedValue: this._behaviorData.DisplayedValue,
    Speed: this._behaviorData.Speed,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Text !== undefined)
      this._behaviorData.Text = networkSyncData.props.Text;
    if (networkSyncData.props.Prefix !== undefined)
      this._behaviorData.Prefix = networkSyncData.props.Prefix;
    if (networkSyncData.props.Suffix !== undefined)
      this._behaviorData.Suffix = networkSyncData.props.Suffix;
    if (networkSyncData.props.Duration !== undefined)
      this._behaviorData.Duration = networkSyncData.props.Duration;
    if (networkSyncData.props.Increment !== undefined)
      this._behaviorData.Increment = networkSyncData.props.Increment;
    if (networkSyncData.props.CounterValue !== undefined)
      this._behaviorData.CounterValue = networkSyncData.props.CounterValue;
    if (networkSyncData.props.DisplayedValue !== undefined)
      this._behaviorData.DisplayedValue = networkSyncData.props.DisplayedValue;
    if (networkSyncData.props.Speed !== undefined)
      this._behaviorData.Speed = networkSyncData.props.Speed;
  }

  // Properties:
  
  _getText() {
    return this._behaviorData.Text !== undefined ? this._behaviorData.Text : "";
  }
  _setText(newValue) {
    this._behaviorData.Text = newValue;
  }
  _getPrefix() {
    return this._behaviorData.Prefix !== undefined ? this._behaviorData.Prefix : "Score: ";
  }
  _setPrefix(newValue) {
    this._behaviorData.Prefix = newValue;
  }
  _getSuffix() {
    return this._behaviorData.Suffix !== undefined ? this._behaviorData.Suffix : "";
  }
  _setSuffix(newValue) {
    this._behaviorData.Suffix = newValue;
  }
  _getDuration() {
    return this._behaviorData.Duration !== undefined ? this._behaviorData.Duration : Number("1") || 0;
  }
  _setDuration(newValue) {
    this._behaviorData.Duration = newValue;
  }
  _getIncrement() {
    return this._behaviorData.Increment !== undefined ? this._behaviorData.Increment : Number("1") || 0;
  }
  _setIncrement(newValue) {
    this._behaviorData.Increment = newValue;
  }
  _getCounterValue() {
    return this._behaviorData.CounterValue !== undefined ? this._behaviorData.CounterValue : Number("0") || 0;
  }
  _setCounterValue(newValue) {
    this._behaviorData.CounterValue = newValue;
  }
  _getDisplayedValue() {
    return this._behaviorData.DisplayedValue !== undefined ? this._behaviorData.DisplayedValue : Number("0") || 0;
  }
  _setDisplayedValue(newValue) {
    this._behaviorData.DisplayedValue = newValue;
  }
  _getSpeed() {
    return this._behaviorData.Speed !== undefined ? this._behaviorData.Speed : Number("0") || 0;
  }
  _setSpeed(newValue) {
    this._behaviorData.Speed = newValue;
  }
}

/**
 * Shared data generated from Rolling counter
 */
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.SharedData = class RollingCounterSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._ScoreCounter_RollingCounterSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._ScoreCounter_RollingCounterSharedData = new gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.SharedData(
      initialData
    );
  }
  return instanceContainer._ScoreCounter_RollingCounterSharedData;
}

// Methods:
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.doStepPreEventsContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDisplayedValue(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDisplayedValue()+(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * gdjs.evtTools.camera.getLayerTimeScale(runtimeScene, (( gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.doStepPreEventsContext.GDObjectObjects1[0].getLayer()))))
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.sign(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed()) == gdjs.evtTools.common.sign(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDisplayedValue() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCounterValue()));
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDisplayedValue(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCounterValue())
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPrefix() + gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(Math.round(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDisplayedValue() / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIncrement()) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIncrement(), 9)) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSuffix());
}
}
}

}


};

gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Text": this._getText()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScoreCounter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScoreCounter"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.ValueContext = {};
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.ValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.ValueContext.GDObjectObjects1= [];
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.ValueContext.GDObjectObjects2= [];


gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.ValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCounterValue();}
}

}


};

gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.Value = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Text": this._getText()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScoreCounter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScoreCounter"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.ValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.ValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.ValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.ValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.ValueContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.SetValueContext = {};
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.SetValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.SetValueContext.GDObjectObjects1= [];
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.SetValueContext.GDObjectObjects2= [];


gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.SetValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCounterValue(eventsFunctionContext.getArgument("Value"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed((eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCounterValue() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDisplayedValue()) / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration())
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ScoreCounter__IsInGameEdition.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.SetValueContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.SetValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPrefix() + gdjs.evtTools.common.toString(eventsFunctionContext.getArgument("Value")) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSuffix());
}
}
}

}


};

gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.SetValue = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Text": this._getText()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScoreCounter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScoreCounter"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.SetValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.SetValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.SetValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.SetValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.SetValueContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.ResetDisplayedValueContext = {};
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.ResetDisplayedValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.ResetDisplayedValueContext.GDObjectObjects1= [];
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.ResetDisplayedValueContext.GDObjectObjects2= [];


gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.ResetDisplayedValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDisplayedValue(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCounterValue())
}
}

}


};

gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.ResetDisplayedValue = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Text": this._getText()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScoreCounter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScoreCounter"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.ResetDisplayedValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.ResetDisplayedValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.ResetDisplayedValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.ResetDisplayedValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter.prototype.ResetDisplayedValueContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("ScoreCounter::RollingCounter", gdjs.evtsExt__ScoreCounter__RollingCounter.RollingCounter);
