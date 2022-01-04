import {expect} from 'chai'
import { TickerRobot2 } from '../tr2';

describe('Ticker Robot2', () => {
    let tr2 = new TickerRobot2();

    it('Test A = position 0,0' , () => {
        expect(tr2.instruct("0,0,FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF")).to.be.eq("0,0")
    })

    it('Test B = position 0,18' , () => {
        expect(tr2.instruct("0,7,RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR")).to.be.eq("0,18")
    })
})