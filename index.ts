import { TickerRobot1 } from './tr1';
import { TickerRobot2 } from './tr2';
import { TickerRobot3 } from './tr3';
import { parse } from 'ts-command-line-args';

interface ICommandArgs {
    instructions: string;
    v?: number;
}

const commandArgs = parse<ICommandArgs>(
    {
        instructions: String,
        v: { type: Number, optional: true }
    }
)

switch (v) {
              case 3:
                const tr3 = new TickerRobot3();
                console.log(tr3.instruct(commandArgs.instructions));
              case 2:
                const tr2 = new TickerRobot2();
                console.log(tr2.instruct(commandArgs.instructions));
              case 1:
                const tr1 = new TickerRobot1();
                console.log(tr1.instruct(commandArgs.instructions));
            }

