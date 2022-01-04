import {expect} from 'chai'
import { TickerRobot1 } from '../tr1';

describe('Ticker Robot1', () => {
    let tr1 = new TickerRobot1();

    it('Test A Should result in position 2,21' , () => {
        expect(tr1.instruct("0,0,FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF")).to.be.eq("2,21")
    })

    it('Test B Should result in position 3,15' , () => {
        expect(tr1.instruct("0,7,RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR")).to.be.eq("3,15")
    })
})