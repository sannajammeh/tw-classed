import { cx } from "../src"

describe("cx - defualt merger", () => {
    it("should merge classnames", () => {
        expect(cx("a", "b")).to.equal("a b")

        expect(cx("a", "b", "c")).to.equal("a b c")
    });

    it("should merge classnames with falsy values", () => {
        // @ts-expect-error - testing falsy values
        expect(cx("a", null, undefined, "b")).to.equal("a b")
        // @ts-expect-error - testing falsy values
        expect(cx("a", null, undefined, "b", false, "c", void 0)).to.equal("a b c")
    });

    it("Should ignore objects", () => {
        // @ts-expect-error - testing falsy values
        expect(cx("a", { b: true })).to.equal("a")
    })
})