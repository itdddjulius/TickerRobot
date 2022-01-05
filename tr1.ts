export class TickerRobot1 {
    instruct(input: string) {
        const inputs: string[] = input.split(",");
        
        if (inputs.length !== 3) {
            return "Invalid Input"
        }
        
        let x: number = +inputs[0];
        let y: number = +inputs[1];

        const instructions: string[] = inputs[2].split("");

        for(let i = 0; i < instructions.length; i++) {
            if (instructions[i] === 'F') {
                y++
            }
            if (instructions[i] === 'B') {
                if (y > 0) y--;
            }
            if (instructions[i] === 'L') {
                if (x > 0) x--;
            }
            if (instructions[i] === 'R') {
                x++
            }
        }

        return `${x},${y}`;
    }
}