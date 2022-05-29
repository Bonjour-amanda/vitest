import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useDate } from './useDate';

describe('purchasing flow', () => {
    beforeEach(() => {
        // tell vitest we use mocked time
        vi.useFakeTimers()
      })
    
      afterEach(() => {
        // restoring date after each test run
        vi.useRealTimers()
      })
    
      it('allows purchases within business hours', () => {
        // set hour within business hours
        const date = new Date(2000, 1, 1, 13)
        vi.setSystemTime(date)
    
        // access Date.now() will result in the date set above
        expect(useDate()).toEqual({ message: 'Success' })
      })
    
      it('disallows purchases outside of business hours', () => {
        // set hour outside business hours
        const date = new Date(2000, 1, 1, 19)
        vi.setSystemTime(date)
    
        // access Date.now() will result in the date set above
        expect(useDate()).toEqual({ message: 'Error' })
      })
})
