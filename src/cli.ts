import arg from 'arg';

export function parseArguments(rawArgs: string[]) {
    const args = arg(
        {
        },
        {
            argv: rawArgs.slice(2),
        }
    );
    const dataThousands = parseInt(args._[0]);
    if(isNaN(dataThousands)){
        throw new Error("Argument must be integer.");
    }
    return {
        dataThousands,
    };
}

