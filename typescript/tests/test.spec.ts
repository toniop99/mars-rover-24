import { Rover } from '../src/Rover'

describe('Rovers should', () => {
    it('be facing east when it rotates right', () => {
        const rover = new Rover()

        expect(rover.command('R')).toBe('0:0:E')
    })

    it('be facing south when it rotates two times right', () => {
        const rover = new Rover()

        expect(rover.command('RR')).toBe('0:0:S')
    })
})