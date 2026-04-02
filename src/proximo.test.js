import {expect, test } from "vitest";
import {proximo} from "./proximo.js";

test("proximo(0) tem que ser 1", () => {
    expect(proximo(0)).toBe(1);
})

test("proximo(1) tem que ser 3", () => {
    expect(proximo(1)).toBe(3);
})

test("proximo(2) tem que ser 5", () => {
    expect(proximo(2)).toBe(5);
})

test("proximo(0) tem que ser 1", () => {
    expect(proximo(3)).toBe(7);
})

test("proximo(0) tem que ser 1", () => {
    expect(proximo(4)).toBe(9);
})

test("proximo(5) tem que ser 3", () => {
    expect(proximo(5)).toBe(11);
})