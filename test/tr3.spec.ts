import {expect} from 'chai'
import { TickerRobot3 } from '../tr3';

describe('Ticker Robot3', () => {
    let tr3 = new TickerRobot3();

    it('Test A = position -2,11' , () => {
        expect(tr3.instruct("0,0,FFF5FLFFRF2F")).to.be.eq("-2,11")
    })

    it('Test B = position 36,15' , () => {
        expect(tr3.instruct("4,3,FFFFFFFF5FRFFFFFF3FRFFFFFFLFFFFF5FFF5FFFFFFFLFFFFF")).to.be.eq("36,15")
    })
})