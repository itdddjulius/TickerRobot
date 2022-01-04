export class TickerRobot2 {
    instruct(input: string) {
        const inputs: string[] = input.split(",");
        
        if (inputs.length !== 3) {
            return "Invalid Input"
        }
        
        let x: number = +inputs[0];
        let y: number = +inputs[1];

        let dir: number = 0;

        const instructions: string[] = inputs[2].split("");

        for(let i = 0; i < instructions.length; i++) {
            if (instructions[i] === 'F') {
                switch (dir) {
                    case 0:
                        y++;
                        break;
                    case 90:
                        x++;
                        break;
                    case 180:
                        if (y > 0) y--;
                        break;
                    case 270:
                        if (x > 0) x--;
                        break;
                }
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
        }

        return `${x},${y}`;
    }
}