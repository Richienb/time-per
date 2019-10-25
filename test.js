import test from "ava"
import timePer from "."

test("main", (t) => {
    t.is(timePer(2, 15, 60), 8)
})
