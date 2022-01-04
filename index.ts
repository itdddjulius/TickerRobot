import { TickerRobot1 } from './tr1';
import { parse } from 'ts-command-line-args';

interface ICommandArgs {
    instructions: string;
    version?: number;
}

const commandArgs = parse<ICommandArgs>(
    {
        instructions: String,
    }
)

    const tr1 = new TickerRobot1();
    console.log(tr1.instruct(commandArgs.instructions));

