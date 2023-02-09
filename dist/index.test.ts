import { describe, it, expect } from "vitest";
describe.skip("test2", () => {
    it("describe2", () => {
        expect("0912366738").toMatch(/^09[0-9]{8}$/); // passed
    });
});
