'use strict';

function getAppManifest() {
    return {};
}

const ButtonDef =  {
    componentType : 'wysiwyg.viewer.components.SiteButton',
    layout: {
        x: 100,
        'y': 100,
        'width': 200,
        'height': 100
    },
    style: 'b1',
    data: {
        'type': 'LinkableButton',
        'label': 'Button',
        'link': null
    },

}

async function install(editorSDK, appDefinitionId){
    const pageRef = await editorSDK.pages.getCurrent()
    const compRef = await editorSDK.components.add(appToken, {componentDefinition: ButtonDef, pageRef: pageRef})
    editorSDK.components.data.update(appToken, {componentRef: compRef, data: {label: '1'}})
    editorSDK.components.data.update(appToken, {componentRef: compRef, data: {label: '2'}})
    editorSDK.components.data.update(appToken, {componentRef: compRef, data: {label: '3'}})

    const data = await editorSDK.components.data.get(appToken, {componentRef: compRef})
    editorSDK.components.data.update(appToken, {componentRef: compRef, data: {label: data.label}})
}

async function editorReady(editorSDK, appDefinitionId, options) {
    console.log('EDITOR READDYYY')
    if(options.firstInstall){
        console.log('first install')
        install(editorSDK, appDefinitionId);
    }
}

function onEvent(event) {
    switch (event.eventType) {
        default:
            break;
    }
}


module.exports = {
    onEvent: onEvent,
    editorReady: editorReady,
    getAppManifest: getAppManifest
};
