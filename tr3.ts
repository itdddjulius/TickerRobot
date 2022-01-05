import { formatDiagnosticsWithColorAndContext, isNumericLiteral } from "typescript";

export class TickerRobot3 {
    instruct(input: string) {
        const inputs: string[] = input.split(",");
        
        if (inputs.length !== 3) {
            return "Invalid Input"
        }
        
        let x: number = +inputs[0];
        let y: number = +inputs[1];

        let dir: number = 0;
        let fuel: number = 30;

        const instructions: string[] = inputs[2].split("");

        const forward = (units: number) => {
            switch (dir) {
                case 0:
                    y += units;
                    break;
                case 90:
                    x += units;
                    break;
                case 180:
                    y -= units;
                    break;
                case 270:
                    x -= units;
                    break;
            }
        }

        for(let i = 0; i < instructions.length; i++) {
            let boost: number = Number(instructions[i]);
            if (instructions[i] === 'F') {
                forward(1);
            }
            if (instructions[i] === 'L') {
                switch (dir) {
                    case 0:
                        dir = 270;
                        break;
                    case 90:
                        dir = 0;
                        break;
                    case 180:
                        dir = 90;
                        break;
                    case 270:
                        dir = 180;
                        break;
                }
            }
            if (instructions[i] === 'R') {
                switch (dir) {
                    case 0:
                        dir = 90;
                        break;
                    case 90:
                        dir = 180;
                        break;
                    case 180:
                        dir = 270;
                        break;
                    case 270:
                        dir = 0;
                        break;
                }
            }
            if (boost > 0 && boost < 6 && instructions[i + 1] === 'F') {
                if (fuel > boost) {
                    forward(boost);
                    fuel -= boost;
                    i++;
                } else {
                    return 'No fuel for boost';
                }
            }
        }

        return `${x},${y}`;
    }
}