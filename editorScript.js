  
'use strict'
const updateLayout = (height, width, x, y) => ({height, width, x, y})

const updateData = (type, applicationId, name, controllerType) => ({type, applicationId, name, controllerType})

const createCompStructure = (componentType, style, type, components, layout, data) => ({
    componentType,
    style,
    type,
    components,
    layout: updateLayout(...layout),
    data: data.length === 0 ? undefined : updateData(...data)
})

const createConnectionStructure = (connectToRef, controllerRef, role, connectionConfig, isPrimary) => ({connectToRef, controllerRef, role, connectionConfig, isPrimary})

const ROOT_CONTAINER = createCompStructure('mobile.core.components.Container', 'c4', 'Container', [], [500, 800, 0, 0], [])

const APP_WIDGET = createCompStructure('platform.components.AppWidget', 'appWidget1', 'Container', [ROOT_CONTAINER], [500, 800, 0, 0],
    ['AppController', 'app-0', 'appWidget', 'appWidget'])

const BUTTON = createCompStructure('wysiwyg.viewer.components.SiteButton', 'b1', 'Component', [], [50, 90, 50, 50], [])

const BUTTON2 = createCompStructure('wysiwyg.viewer.components.SiteButton', 'b1', 'Component', [], [50, 90, 450, 300], [])

const CONTAINER = createCompStructure('mobile.core.components.Container', 'c2', 'Container', [], [200, 200, 50, 50], [])

const OUTER_CONTAINER = createCompStructure('mobile.core.components.Container', 'c3', 'Container', [], [400, 400, 50, 50], [])

const HOVER_BOX_DEF = {
    layout: {
        x: 450,
        y: 50,
        fixedPosition: false,
        width: 100,
        height: 100,
        scale: 1,
        rotationInDegrees: 0
    },
    modes: {
        definitions: [
            {
                modeId: 'comp-jdsrqjla-mode-jdsrqjo4',
                type: 'DEFAULT',
                label: 'MODE_LABEL_FROM_PRESET',
                params: ''
            },
            {
                modeId: 'comp-jdsrqjla-mode-jdsrqjo41',
                type: 'HOVER',
                label: 'MODE_LABEL_FROM_PRESET',
                params: ''
            }
        ],
        overrides: [],
        isHiddenByModes: false
    },
    components: [],
    componentType: 'wysiwyg.viewer.components.HoverBox',
    type: 'Container',
    props: {
        type: 'HoverBoxProperties',
        metaData: {
            isPreset: false,
            schemaVersion: '1.0',
            isHidden: false
        },
        mobileDisplayedModeId: 'comp-jdsrqjla-mode-jdsrqjo41'
    },
    mobileHints: {
        type: 'MobileHints',
        recommendedWidth: 280,
        recommendedScale: 1,
        author: 'studio',
        metaData: {
            isPreset: false,
            schemaVersion: '1.0',
            isHidden: false
        }
    },
    design: {
        type: 'MediaContainerDesignData',
        metaData: {
            isPreset: false,
            schemaVersion: '1.0',
            isHidden: false
        },
        background: {
            type: 'BackgroundMedia',
            metaData: {
                isPreset: false,
                schemaVersion: '1.0',
                isHidden: false
            },
            color: '#FFFF33',
            colorOpacity: 1,
            alignType: 'center',
            fittingType: 'fill',
            scrollType: 'none',
            colorOverlay: '',
            colorOverlayOpacity: 0,
            showOverlayForMediaType: 'all',
            mediaTransforms: {
                scale: 1
            }
        },
        cssStyle: {
            cssBorder: {
                width: {
                    top: {
                        value: 0,
                        unit: 'px'
                    },
                    right: {
                        value: 0,
                        unit: 'px'
                    },
                    bottom: {
                        value: 0,
                        unit: 'px'
                    },
                    left: {
                        value: 0,
                        unit: 'px'
                    }
                },
                style: {
                    top: 'solid',
                    right: 'solid',
                    left: 'solid',
                    bottom: 'solid'
                },
                color: {
                    top: {
                        red: 176,
                        green: 169,
                        blue: 134,
                        alpha: 1
                    },
                    right: {
                        red: 176,
                        green: 169,
                        blue: 134,
                        alpha: 1
                    },
                    left: {
                        red: 176,
                        green: 169,
                        blue: 134,
                        alpha: 1
                    },
                    bottom: {
                        red: 176,
                        green: 169,
                        blue: 134,
                        alpha: 1
                    }
                }
            },
            cssBorderRadius: {
                topLeft: {
                    value: 0,
                    unit: 'px'
                },
                topRight: {
                    value: 0,
                    unit: 'px'
                },
                bottomLeft: {
                    value: 0,
                    unit: 'px'
                },
                bottomRight: {
                    value: 0,
                    unit: 'px'
                }
            }
        },
        themeMappings: {},
        charas: 'design-ivwdmh2u',
        dataChangeBehaviors: []
    },
    style: {
        type: 'TopLevelStyle',
        styleType: 'custom',
        metaData: {
            isPreset: false,
            schemaVersion: '1.0',
            isHidden: false
        },
        style: {
            properties: {
                'alpha-bg': '1',
                'alpha-brd': '1',
                bg: '206,224,193,1',
                'boxShadowToggleOn-shd': 'false',
                brd: '#324158',
                brw: '0px',
                rd: '0px',
                shd: '0px 1px 4px 0px rgba(0,0,0,0.6)'
            },
            propertiesSource: {
                bg: 'value',
                brd: 'value',
                brw: 'value',
                rd: 'value',
                shd: 'value'
            },
            groups: {}
        },
        componentClassName: 'wysiwyg.viewer.components.HoverBox',
        pageId: '',
        compId: '',
        skin: 'wysiwyg.viewer.skins.mediaContainer.DefaultMediaContainer'
    },
    connections: {
        type: 'ConnectionList',
        items: [],
        metaData: {
            isPreset: false,
            schemaVersion: '1.0',
            isHidden: false
        }
    },
    activeModes: {}
}


async function addAppWidget(editorSDK, appToken) {
    const pageRef = await editorSDK.pages.getCurrent()
    const appWidgetRef = await editorSDK.components.add(appToken, {componentDefinition: APP_WIDGET, pageRef, customId: 'app_widget'})
    const children = await editorSDK.components.getChildren(appToken, {componentRef: appWidgetRef})
    editorSDK.controllers.connect(appToken, createConnectionStructure(children[0], appWidgetRef, 'container_role', {}, true))
    return appWidgetRef
}

async function addComponent(editorSDK, appToken, pageRef, componentDefinition, customId) {
    return await editorSDK.components.add(appToken, {componentDefinition, pageRef, customId})
}


async function addConnectedComponent(editorSDK, appToken, controllerRef, pageRef, componentDefinition, customId) {
    const compRef = await editorSDK.components.add(appToken, {componentDefinition, pageRef, customId})
    editorSDK.controllers.connect(appToken, createConnectionStructure(compRef, controllerRef, 'button', {}, true))
    return compRef
}

async function install(editorSDK, appDefinitionId) {
    const appWidgetRef = await addAppWidget(editorSDK, appDefinitionId)
    const children = await editorSDK.components.getChildren(appDefinitionId, {componentRef: appWidgetRef})
    const outer_container = await addComponent(editorSDK, appDefinitionId, children[0], OUTER_CONTAINER, 'outer_container')
    const container = await addComponent(editorSDK, appDefinitionId, outer_container, CONTAINER, 'inner_container')
    addConnectedComponent(editorSDK, appDefinitionId, appWidgetRef, container, BUTTON, 'connected_button')
    addComponent(editorSDK, appDefinitionId, children[0], HOVER_BOX_DEF, 'hover_box')
    await addComponent(editorSDK, appDefinitionId, outer_container, BUTTON2, 'non_connected_button')
}

async function editorReady(editorSDK, appDefinitionId, options) {
    if (await options.firstInstall) {
        await install(editorSDK, appDefinitionId)
    }
}


module.exports = {
    editorReady
}
