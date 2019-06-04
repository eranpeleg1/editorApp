'use strict';

function getAppManifest() {
    return {
        exports: {
            appWidget: {
                tagname: 'appWidget',
                synthetic: false,
                inherits: {},
                description: 'fffff',
                viewernames: {appWidget: true},
                members: {
                    setWeatherDeg: {
                        description: 'set the button deg label',
                        kind: 'function'
                    }
                }
            }
        },
        controllersStageData: {
            appWidget: {
                default: {
                    displayName: 'GoogleApp',
                    connections: {
                        container_role: {

                        },
                        weather_btn: {
                            displayName: 'degreeButton'
                        }
                    }
                }
            }
        }
    }
}

var BOX_STRUCTURE  = {
    componentType: 'mobile.core.components.Container',
    style: 'c4',
    type: 'Container',
    components: [],
    layout: {height: 500, width: 800, x: 0, y: 0}

}

const APP_WIDGET_STRUCTURE  = {
    componentType: 'platform.components.AppWidget',
    layout: {height: 500, width: 800, x: 0, y: 0},
    style: 'appWidget1',
    styleId: 'appWidget1',
    type: 'Container',
    data: {
        type: 'AppController',
        applicationId: '6b8daa12-d255-4e78-8eda-d1d186f5d184',
        name: 'appWidget',
        controllerType: 'appWidget'
    },
    components: [BOX_STRUCTURE]
}


async function addAppWidget(editorSDK, appToken) {
    const pageRef = await editorSDK.pages.getCurrent();
    const appWidgetRef = await editorSDK.components.add(appToken, {componentDefinition: APP_WIDGET_STRUCTURE, pageRef: pageRef});
    const children = await  editorSDK.components.getChildren(appToken, {componentRef: appWidgetRef});
    editorSDK.controllers.connect(appToken, {
        connectToRef: children[0],
        controllerRef: appWidgetRef,
        role: 'container_role',
        connectionConfig: {},
        isPrimary: true
    })
    return appWidgetRef;
}


async function install(editorSDK, appDefinitionId){
    const appWidgetRef = await addAppWidget(editorSDK, appDefinitionId);
}

async function editorReady(editorSDK, appDefinitionId, options) {
    if (await options.firstInstall){
        await install(editorSDK, appDefinitionId)
    }
}

async function onEvent() {
}

module.exports = {
    onEvent: onEvent,
    editorReady: editorReady,
    getAppManifest: getAppManifest
};
