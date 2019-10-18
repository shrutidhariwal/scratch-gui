import projectData from './project-data';

/* eslint-disable import/no-unresolved */
import popWav from '!arraybuffer-loader!./83a9787d4cb6f3b7632b4ddfebf74367.wav';
import BoingWav from '!arraybuffer-loader!./53a3c2e27d1fb5fdb14aaf0cb41e7889.wav';
import backdrop1 from '!raw-loader!./cd21514d0531fdffb22204e0ec5ed84a.svg';
import balla from '!raw-loader!./3c6241985b581284ec191f9d1deffde8.svg';
import ballb from '!raw-loader!./ad7dc51cafd73e8279073e33b0eab335.svg';
import ballc from '!raw-loader!./f221a2edf87aff3615c0c003e616b31b.svg';
import balld from '!raw-loader!./db144b2a19f4f1ab31e30d58f00447dc.svg';
import balle from '!raw-loader!./1c44b7494dec047371f74c705f1d99fc.svg';
/* eslint-enable import/no-unresolved */

const defaultProject = translator => {
    let _TextEncoder;
    if (typeof TextEncoder === 'undefined') {
        _TextEncoder = require('text-encoding').TextEncoder;
    } else {
        /* global TextEncoder */
        _TextEncoder = TextEncoder;
    }
    const encoder = new _TextEncoder();

    const projectJson = projectData(translator);
    return [{
        id: 0,
        assetType: 'Project',
        dataFormat: 'JSON',
        data: JSON.stringify(projectJson)
    }, {
        id: '83a9787d4cb6f3b7632b4ddfebf74367',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(popWav)
    }, {
        id: '53a3c2e27d1fb5fdb14aaf0cb41e7889',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(BoingWav)
    }, {
        id: 'cd21514d0531fdffb22204e0ec5ed84a',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(backdrop1)
    }, {
        id: '3c6241985b581284ec191f9d1deffde8',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(balla)
    }, {
        id: 'ad7dc51cafd73e8279073e33b0eab335',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(ballb)
    }, {
        id: 'f221a2edf87aff3615c0c003e616b31b',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(ballc)
    }, {
        id: 'db144b2a19f4f1ab31e30d58f00447dc',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(balld)
    }, {
        id: '1c44b7494dec047371f74c705f1d99fc',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(balle)
    }];
};

export default defaultProject;
