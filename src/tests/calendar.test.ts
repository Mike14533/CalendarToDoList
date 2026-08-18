import {describe, expect, test} from 'vitest';
import {getCalendarMonth, getEnd, getStart} from '../utils/useCalendar.ts'

test('return the beginning of the month', () => {

    expect(getStart().toString()).toBe("Sat Aug 01 2026 00:00:00 GMT+0100 (Irish Standard Time)")
})

test('return the end of the month', () => {

    expect(getEnd().toString()).toBe("Mon Aug 31 2026 00:00:00 GMT+0100 (Irish Standard Time)")
})

test('Get the Calendar Month output for the month of August', () => {
    expect(getCalendarMonth(7)).toBe([27,28,29,30,31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,1,2,3,4,5,6])
})