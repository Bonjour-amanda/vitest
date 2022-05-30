import { describe, it, expect, vi } from "vitest";

const player = {
    name: 'Link',
    level: 10,
    posX: 0,
    posY: 0,
    move: function(x:number, y:number) {
        this.posX = x;
        this.posY = y;
    }
};

//spy
describe('Player Movement with spy', () => {
    it('should move the player', () => {
        const spy = vi.spyOn(player, 'move');
        player.move(2, 4);
        expect(spy).toHaveBeenCalledWith(2, 4);
        expect(spy).toHaveBeenCalledTimes(1);
    });
});

//mocking
describe('Player Movement with mocking', () => {
    it('should move the player', () => {
       const mock = vi.fn().mockImplementation((x, y) => {
           console.log({x, y});
           return { x, y };
       })

       player.move = mock;
       
       expect(player.move(8,6)).toEqual({x: 8, y: 6});
       expect(mock).toHaveBeenCalledTimes(1);
    });
});
