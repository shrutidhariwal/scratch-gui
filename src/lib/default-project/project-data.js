import { defineMessages } from 'react-intl';
import sharedMessages from '../shared-messages';

let messages = defineMessages({
    meow: {
        defaultMessage: 'Meow',
        description: 'Name for the meow sound',
        id: 'gui.defaultProject.meow'
    },
    variable: {
        defaultMessage: 'my variable',
        description: 'Name for the default variable',
        id: 'gui.defaultProject.variable'
    }
});

messages = { ...messages, ...sharedMessages };

// use the default message if a translation function is not passed
const defaultTranslator = msgObj => msgObj.defaultMessage;

/**
 * Generate a localized version of the default project
 * @param {function} translateFunction a function to use for translating the default names
 * @return {object} the project data json for the default project
 */
const projectData = translateFunction => {
    const translator = translateFunction || defaultTranslator;
    return ({
        "targets": [{
                "isStage": true,
                "name": "Stage",
                "variables": {
                    "`jEk@4|i[#Fk?(8x)AV.-my variable": ["my variable", 0]
                },
                "lists": {},
                "broadcasts": {},
                "blocks": {},
                "comments": {},
                "currentCostume": 0,
                "costumes": [{
                    "assetId": "cd21514d0531fdffb22204e0ec5ed84a",
                    "name": "backdrop1",
                    "md5ext": "cd21514d0531fdffb22204e0ec5ed84a.svg",
                    "dataFormat": "svg",
                    "rotationCenterX": 240,
                    "rotationCenterY": 180
                }],
                "sounds": [{
                    "assetId": "83a9787d4cb6f3b7632b4ddfebf74367",
                    "name": "pop",
                    "dataFormat": "wav",
                    "format": "",
                    "rate": 44100,
                    "sampleCount": 1032,
                    "md5ext": "83a9787d4cb6f3b7632b4ddfebf74367.wav"
                }],
                "volume": 100,
                "layerOrder": 0,
                "tempo": 60,
                "videoTransparency": 50,
                "videoState": "on",
                "textToSpeechLanguage": "en"
            },
            {
                "isStage": false,
                "name": "Ball",
                "variables": {},
                "lists": {},
                "broadcasts": {},
                "blocks": {
                    "g6k.h-#t+OB-^dzz8^op": {
                        "opcode": "event_whenflagclicked",
                        "next": "$4mo?Y~4o}cble6?80Ws",
                        "parent": null,
                        "inputs": {},
                        "fields": {},
                        "shadow": false,
                        "topLevel": true,
                        "x": -7,
                        "y": -67
                    },
                    "$4mo?Y~4o}cble6?80Ws": {
                        "opcode": "motion_sety",
                        "next": "uQkF=~9seWX[t}lDeDUW",
                        "parent": "g6k.h-#t+OB-^dzz8^op",
                        "inputs": {
                            "Y": [1, [4, "200"]]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    "uQkF=~9seWX[t}lDeDUW": {
                        "opcode": "control_repeat",
                        "next": null,
                        "parent": "$4mo?Y~4o}cble6?80Ws",
                        "inputs": {
                            "TIMES": [1, [6, "7"]],
                            "SUBSTACK": [2, "IKb2Mw-?};^[6}_e52O@"]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    "IKb2Mw-?};^[6}_e52O@": {
                        "opcode": "motion_gotoxy",
                        "next": "K]9G?Y](Vr6BBj`VH#mA",
                        "parent": "uQkF=~9seWX[t}lDeDUW",
                        "inputs": {
                            "X": [1, [4, "-215"]],
                            "Y": [3, "|QTcP!gw%Q[D%N6YQ2nu", [4, "150"]]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    "|QTcP!gw%Q[D%N6YQ2nu": {
                        "opcode": "operator_subtract",
                        "next": null,
                        "parent": "IKb2Mw-?};^[6}_e52O@",
                        "inputs": {
                            "NUM1": [3, ")e1*D.`rXnaG?)AqvxLf", [4, ""]],
                            "NUM2": [1, [4, "50"]]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    ")e1*D.`rXnaG?)AqvxLf": {
                        "opcode": "motion_yposition",
                        "next": null,
                        "parent": "|QTcP!gw%Q[D%N6YQ2nu",
                        "inputs": {},
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    "K]9G?Y](Vr6BBj`VH#mA": {
                        "opcode": "control_repeat",
                        "next": null,
                        "parent": "IKb2Mw-?};^[6}_e52O@",
                        "inputs": {
                            "TIMES": [1, [6, "10"]],
                            "SUBSTACK": [2, "bVh@w~tK29o2|#9Pdg`f"]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    "bVh@w~tK29o2|#9Pdg`f": {
                        "opcode": "chance_setCostumeProb",
                        "next": "zia,y0r@2QfYm)H`CsPP",
                        "parent": "K]9G?Y](Vr6BBj`VH#mA",
                        "inputs": {
                            "DISTRIBUTION": [1, "M;78j;QRd{4hNn1xq5|R"]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false,
                        "comment": "bu{%~LAz!mhq^Xtwlb:B"
                    },
                    "M;78j;QRd{4hNn1xq5|R": {
                        "opcode": "slider",
                        "next": null,
                        "parent": "bVh@w~tK29o2|#9Pdg`f",
                        "inputs": {},
                        "fields": {
                            "SLIDER": ["59.859103287336346,0,20.18387034465896,0,19.957026368004726|1~2~3~4~5", null]
                        },
                        "shadow": true,
                        "topLevel": false
                    },
                    "zia,y0r@2QfYm)H`CsPP": {
                        "opcode": "control_create_clone_of",
                        "next": "@s`gK=M|3]]~R0r4S{!I",
                        "parent": "bVh@w~tK29o2|#9Pdg`f",
                        "inputs": {
                            "CLONE_OPTION": [1, "7@}FiHOlcy9r/c~YWOi4"]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    "7@}FiHOlcy9r/c~YWOi4": {
                        "opcode": "control_create_clone_of_menu",
                        "next": null,
                        "parent": "zia,y0r@2QfYm)H`CsPP",
                        "inputs": {},
                        "fields": {
                            "CLONE_OPTION": ["_myself_", null]
                        },
                        "shadow": true,
                        "topLevel": false
                    },
                    "@s`gK=M|3]]~R0r4S{!I": {
                        "opcode": "motion_movesteps",
                        "next": null,
                        "parent": "zia,y0r@2QfYm)H`CsPP",
                        "inputs": {
                            "STEPS": [1, [4, "48"]]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    }
                },
                "comments": {
                    "bu{%~LAz!mhq^Xtwlb:B": {
                        "blockId": "bVh@w~tK29o2|#9Pdg`f",
                        "x": 205.40740853768816,
                        "y": 330.77777777777777,
                        "width": 261,
                        "height": 231.9259033203125,
                        "minimized": false,
                        "text": "Click the dropdown arrow and change the probability/chance of different costumes coming by clicking/dragging the blue bars. For e.g. currently there is 60% chance of yellow ball coming (costume1) and 0% chance of blue or green ball coming (costumes 2 & 4)."
                    }
                },
                "currentCostume": 0,
                "costumes": [{
                        "assetId": "3c6241985b581284ec191f9d1deffde8",
                        "name": "ball-a",
                        "bitmapResolution": 1,
                        "md5ext": "3c6241985b581284ec191f9d1deffde8.svg",
                        "dataFormat": "svg",
                        "rotationCenterX": 22,
                        "rotationCenterY": 22
                    },
                    {
                        "assetId": "ad7dc51cafd73e8279073e33b0eab335",
                        "name": "ball-b",
                        "bitmapResolution": 1,
                        "md5ext": "ad7dc51cafd73e8279073e33b0eab335.svg",
                        "dataFormat": "svg",
                        "rotationCenterX": 22,
                        "rotationCenterY": 22
                    },
                    {
                        "assetId": "f221a2edf87aff3615c0c003e616b31b",
                        "name": "ball-c",
                        "bitmapResolution": 1,
                        "md5ext": "f221a2edf87aff3615c0c003e616b31b.svg",
                        "dataFormat": "svg",
                        "rotationCenterX": 22,
                        "rotationCenterY": 22
                    },
                    {
                        "assetId": "db144b2a19f4f1ab31e30d58f00447dc",
                        "name": "ball-d",
                        "bitmapResolution": 1,
                        "md5ext": "db144b2a19f4f1ab31e30d58f00447dc.svg",
                        "dataFormat": "svg",
                        "rotationCenterX": 22,
                        "rotationCenterY": 22
                    },
                    {
                        "assetId": "1c44b7494dec047371f74c705f1d99fc",
                        "name": "ball-e",
                        "bitmapResolution": 1,
                        "md5ext": "1c44b7494dec047371f74c705f1d99fc.svg",
                        "dataFormat": "svg",
                        "rotationCenterX": 22,
                        "rotationCenterY": 22
                    }
                ],
                "sounds": [{
                        "assetId": "53a3c2e27d1fb5fdb14aaf0cb41e7889",
                        "name": "Boing",
                        "dataFormat": "wav",
                        "format": "adpcm",
                        "rate": 22050,
                        "sampleCount": 7113,
                        "md5ext": "53a3c2e27d1fb5fdb14aaf0cb41e7889.wav"
                    },
                    {
                        "assetId": "83a9787d4cb6f3b7632b4ddfebf74367",
                        "name": "Pop",
                        "dataFormat": "wav",
                        "format": "",
                        "rate": 44100,
                        "sampleCount": 1032,
                        "md5ext": "83a9787d4cb6f3b7632b4ddfebf74367.wav"
                    }
                ],
                "volume": 100,
                "layerOrder": 1,
                "visible": true,
                "x": 258,
                "y": -150,
                "size": 150,
                "direction": 90,
                "draggable": false,
                "rotationStyle": "all around"
            }
        ],
        "monitors": [],
        "extensions": ["chance"],
        "meta": {
            "semver": "3.0.0",
            "vm": "0.2.0",
            "agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:69.0) Gecko/20100101 Firefox/69.0"
        }
    });
};


export default projectData;
