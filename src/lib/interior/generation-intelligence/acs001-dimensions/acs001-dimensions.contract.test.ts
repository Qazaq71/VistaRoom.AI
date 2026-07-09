import { describe, expect, it } from "vitest";

import { deriveDimensionsFromAspectRatio } from "./acs001-dimensions";

describe("deriveDimensionsFromAspectRatio (ADR-006 Public Contract + ADR-009 Decision 4)", () => {
  it("'16:9' returns { aspectRatio: '16:9' }", () => {
    const result = deriveDimensionsFromAspectRatio("16:9");
    expect(result).toEqual({ aspectRatio: "16:9" });
  });

  it("'1:1' returns { aspectRatio: '1:1' }", () => {
    const result = deriveDimensionsFromAspectRatio("1:1");
    expect(result).toEqual({ aspectRatio: "1:1" });
  });
});
