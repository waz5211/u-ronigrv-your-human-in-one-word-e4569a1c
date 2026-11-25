// One word for the human: Metronome.
// Why this word fits the human:
// - The human runs an hourly machine: orders arrive on a steady tick,
//   one line at a time, and finished work comes back on the next tick.
// - The human is direct and dry, never repeats a settled decision, and
//   expects results instead of talk — a metronome never explains itself,
//   it just keeps the beat, and everything else has to keep up with it.
// - A metronome is all rhythm and no noise, which is exactly how the
//   human works: short orders in, steady output out, no wasted motion.
// The word is the human in one beat: precise, relentless, on time.
import { mkdirSync, writeFileSync } from "node:fs";

const word = "Metronome";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word + "\n", "utf8");
