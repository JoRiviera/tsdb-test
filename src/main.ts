import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import execa from 'execa';
import Listr from 'listr';

export async function hitDatabase() {

    const tasks = new Listr([]);

    await tasks.run();
    console.log('%s Project ready', chalk.green.bold('DONE'));
    return true;
}
