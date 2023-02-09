import { describe, it, expect } from "vitest";
import { isEmpty, isNotEmpty} from "./index";

describe('isEmpty', () => {
    it('should be defined', () => {
        expect(isEmpty).toBeDefined()
    })
    it('should work', () => {
        const hello = "hello";
        expect(isEmpty(hello)).toBe(false);
    })
})
describe('isNotEmpty', () => {
    it('should be defined', () => {
        expect(isNotEmpty).toBeDefined()
    })
    it('should work', () => {
        const hello = "hello";
        expect(isNotEmpty(hello)).toBe(true);
    })
})

