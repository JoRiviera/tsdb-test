#! node

import { parseArguments } from "../src/cli";
import * as fs from "fs";
import {createEnterpriseData} from "../src/data";
import Listr from "listr";
import type {EdgeData} from '../src/data';
import * as path from "path";

const { dataThousands } = parseArguments(process.argv);
(async () => {
    let dataRows: EdgeData[];
    let fileData: string;

    const tasks = new Listr([
        {
            title: `Creating ${dataThousands*1000} data points`,
            task: () => {
                dataRows  = createEnterpriseData(dataThousands);
            }
        },{
            title: `Saving Data`,
            task: (ctx, task) => {
                fileData = JSON.stringify(dataRows);
                const fileName = `${dataRows.length}.json`;
                task.title = `Saving Data as ${fileName}`;
                const fullPath = path.resolve(
                  __dirname, '../../data', fileName
                );
                const fd = fs.openSync(fullPath, 'wx');
                fs.writeFileSync(fd, fileData);
                fs.closeSync(fd);
            }
        }
    ]);
    await tasks.run();
})();

