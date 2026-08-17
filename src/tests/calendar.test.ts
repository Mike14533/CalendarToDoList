import {describe, expect, test} from 'vitest';
import {getStart} from '../utils/useCalendar.ts'

test('return the beginning of the month', () => {

    expect(getStart().toString()).toBe("Sat Aug 01 2026 00:00:00 GMT+0100 (Irish Standard Time)")
})