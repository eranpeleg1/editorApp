'use strict';

function getAppManifest() {
    return {};
}

const ButtonDef =  {
    componentType: 'wysiwyg.viewer.components.SiteButton',
    layout: {
        x: 100,
        y: 100,
        width: 128,
        height: 40
    },
    data:{
        label:'does it work??',
        link:'',
        metaData:{isPreset: false, schemaVersion: '1.0', isHidden: false},
        type:'LinkableButton'
    },
    'type': 'Component',
    'props': {
        margin:0,
        align:'center',
        metaData:  {isPreset: false, schemaVersion: '1.0', isHidden: false},
        type: 'ButtonProperties'
    }
}

async function install(editorSDK, appDefinitionId){
    const pageRef = await editorSDK.pages.getCurrent()
    const compRef = await editorSDK.components.add(appDefinitionId, {componentDefinition: ButtonDef, pageRef: pageRef})
    setTimeout(() => editorSDK.components.data.update(appDefinitionId, {componentRef: compRef, data: {label: 'yep ds works over Bolt!!!'}}) ,5000)
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
}
