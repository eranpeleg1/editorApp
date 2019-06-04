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

async function addGoogleMaps(editorSDK, appToken, controllerRef, containerRef) {
    const componentDefinition = {
        componentType: 'wysiwyg.viewer.components.GoogleMap',
        data: {
            address: '500 Terry Francois Street, 6th Floor. San Francisco, CA 94158',
            addressInfo: 'Wix Office',
            latitude: 37.77065,
            longitude: -122.387301,
            type: 'GeoMap',
            mapStyle: [],
            metaData:{
                isHidden: false,
                isPreset: true,
                schemaVersion: '1.0'
            }
        },
    layout: {
            width: 608,
        height: 280,
        x: 186,
        y: 211
    },
    props: {
            id: 'googleMapDefaultProp',
        mapDragging: false,
        mapType: 'ROADMAP',
        showMapType: true,
        showPosition: true,
        showStreetView: true,
        showZoom: true,
        metaData:{
            isHidden: false,
            isPreset: true,
            schemaVersion: '1.0'
        }
    },
    style: 'gm1',
    type: 'Component'
    }
    const compRef = await editorSDK.components.add(appToken, {componentDefinition, pageRef: containerRef})
    editorSDK.controllers.connect(appToken, {
        connectToRef: compRef,
        controllerRef: controllerRef,
        role: 'container_inside',
        connectionConfig: {},
        isPrimary: true
    })
    return compRef;
}



async function install(editorSDK, appDefinitionId){
    const appWidgetRef = await addAppWidget(editorSDK, appDefinitionId);
    const children = await  editorSDK.components.getChildren(appDefinitionId, {componentRef: appWidgetRef});
    await addGoogleMaps(editorSDK, appDefinitionId, appWidgetRef, children[0])

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
