var Xrm = Xrm || {
    __namespace: true
};

Xrm.Utility = {
    alertDialog: function(message,onCloseCallback){},
    confirmDialog: function(message,yesCloseCallback,noCloseCallback){},
    isActivityType: function(entityName){},
    openEntityForm: function(name,id,parameters,windowOptions){},
    openQuickCreate: function(entityLogicalName,createFromEntity,parameters){return Xrm._extensions.then;},
    openWebResource: function(webResourceName,webResourceData,width, height){},
    __namespace: true,
};

Xrm.Page = {
    getAttribute: function (id) {return Xrm._extensions.attribute;},
    getControl: function (id) {return Xrm._extensions.control},
    __namespace: true
};

Xrm.Page.ui = {
    getFormType: function() {},
    getCurrentControl : function() {},
    getViewPortHeight : function() {},
    getViewPortWidth : function() {},
    refreshRibbon : function() {},
    close : function() {},
    __namespace: true
};

Xrm.Page.ui.process = {
    __namespace: true
};

Xrm.Page.ui.navigation = {
    __namespace: true
};

Xrm.Page.ui.formSelector = {
    __namespace: true
};

Xrm.Page.context = {
    __namespace: true
};

Xrm.Page.data = {
    refresh: function(save){return Xrm._extensions.then;},
    save: function(saveOptions){return Xrm._extensions.then;},
    __namespace: true
};

Xrm.Page.data.entity = {
    getDataXml: function(){},
    getEntityName: function(){},
    getId: function(){},
    getIsDirty: function(){},
    addOnSave: function(delegate){},
    removeOnSave: function(delegate){},
    getPrimaryAttributeValue: function(){},
    save: function(savetype){},
    __namespace: true
};

Xrm.Page.data.process = {
    __namespace: true
};

Xrm._extensions = {
    then: {
        then: function(successCallback, errorCallback){},
        __namespace: true
    },
    attribute: {
        getInitialValue: function(){},
        getOption: function(value){},
        getOptions: function(){},
        getSelectedOption: function(){},
        getText: function(){},
        getAttributeType: function(){},
        getFormat: function(){},
        getIsDirty: function(){},
        getIsPartyList: function(){},
        getMaxLength: function(){},
        getName: function(){},
        getParent: function(){},
        getUserPrivilege: function(){},
        getMax: function(){},
        getMin: function(){},
        getPrecision: function(){},
        addOnChange: function(delegate){},
        removeOnChange: function(delegate){},
        fireOnChange: function(){},
        getRequiredLevel: function(){},
        setRequiredLevel: function(requirementLevel){},
        getSubmitMode: function(){},
        setSubmitMode: function(mode){},
        getValue: function(){},
        setValue: function(value){},
        controls: {
            forEach: function(delegate){},
            get: function(){return Xrm._extensions.control},
            getLength: function(){},
            __namespace: true
        },
        __namespace: true
    },
    control: {
        showAutoComplete: function(object){},
        hideAutoComplete: function(){},
        getDisabled: function(){},
        setDisabled: function(bool){},
        __namespace: true
    },
    __namespace: true
}