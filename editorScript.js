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
        label:'button',
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
    // editorSDK.components.data.update(appDefinitionId, {componentRef: compRef, data: {label: '1'}})
    // editorSDK.components.data.update(appDefinitionId, {componentRef: compRef, data: {label: '2'}})
    // await editorSDK.components.data.update(appDefinitionId, {componentRef: compRef, data: {label: '3'}})

    // const data = await editorSDK.components.data.get(appDefinitionId, {componentRef: compRef})
    // console.log('dataaaaa', data)
    //editorSDK.components.data.update(appDefinitionId, {componentRef: compRef, data: {label: data.label}})
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
