import { describe, expect, it } from "vitest";

import { checkMaskInvariant } from "./acs001-mask-invariant";

describe("checkMaskInvariant (ADR-006 Mode Contract + ADR-009 Decision 1/3/5)", () => {
  describe("valid combinations (Implementation Package v1.0 section 4)", () => {
    it("mode='partial' + hasMask=true is valid (PARTIAL_EDIT with mask)", () => {
      const result = checkMaskInvariant("partial", true);
      expect(result.valid).toBe(true);
    });

    it("mode='clear' + hasMask=true is valid (production-level clear enforcement, ADR-009 Decision 5)", () => {
      const result = checkMaskInvariant("clear", true);
      expect(result.valid).toBe(true);
    });

    it("mode='style' + hasMask=false is valid (FULL_GENERATION without mask)", () => {
      const result = checkMaskInvariant("style", false);
      expect(result.valid).toBe(true);
    });
  });

  describe("invalid combinations (ADR-009 Decision 3: explicit violation, not a thrown exception)", () => {
    it("mode='partial' + hasMask=false is invalid: 'PARTIAL_EDIT requires a mask'", () => {
      const result = checkMaskInvariant("partial", false);

      expect(result.valid).toBe(false);
      if (!result.valid) {
        expect(result.mode).toBe("partial");
        expect(result.hasMask).toBe(false);
        expect(result.reason).toBe("PARTIAL_EDIT requires a mask");
      }
    });

    it("mode='clear' + hasMask=false is invalid: 'CLEAR/erase production path requires a mask'", () => {
      const result = checkMaskInvariant("clear", false);

      expect(result.valid).toBe(false);
      if (!result.valid) {
        expect(result.mode).toBe("clear");
        expect(result.hasMask).toBe(false);
        expect(result.reason).toBe("CLEAR/erase production path requires a mask");
      }
    });

    it("mode='style' + hasMask=true is invalid: 'FULL_GENERATION forbids a mask'", () => {
      const result = checkMaskInvariant("style", true);

      expect(result.valid).toBe(false);
      if (!result.valid) {
        expect(result.mode).toBe("style");
        expect(result.hasMask).toBe(true);
        expect(result.reason).toBe("FULL_GENERATION forbids a mask");
      }
    });
  });
});
