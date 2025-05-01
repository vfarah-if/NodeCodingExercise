Inspired by the creative works of Gawain Hewitt: https://gawainhewitt.co.uk/

There's a spot in the forest where songbirds like to sing together. This spot has three very nice branches, which the birds like to perch on, but each branch can only hold 1 bird.

When a bird is on a branch it sings a song, depending on which branch it’s on, it will sing a different song.

If the bird is joined by other birds they sing together, and the song changes. There is a different song sung depending on how many birds there are, and which branches the other birds are on. No song is sung when there are no birds.

No individual song is the same in different combinations of how many birds there are, and what branches each are on.

Given branches 1, 2, and 3, and birds A, B, and C, can you figure out how many different songs can be sung by the birds, where birds can be on any branch, or not on a branch at all.

Using TDD, create a solution to figure out how many different songs can be sung using three birds and three branches.

Examples:

- If there are no birds, no song is sung
- You could have bird 1 on branch A, with branches B and C empty, that is one song
- You could have bird 1 on branch C, bird 2 on branch A, and branch B empty, that is one song
- You could have birds 1, 2, and 3 on branches A, B, and C respectively, that is one song
- You could have birds 1, 2, and 3 on branches C, A, B in that respective order, that is one song

Tip: build up using incremental TDD steps.

Advanced:

\- what happens if the amount of branches could be configurable?

\- what happens if the amount of birds is configurable?

i.e. 3 branches and 4 birds, 4 branches and 2 birds, 5 branches and 5 birds

### Summary of steps

| Step | Test Description             | Drives...                           |
| ---- | ---------------------------- | ----------------------------------- |
| 1    | Empty bird list returns 0    | Base case                           |
| 2    | One bird returns 3           | Static logic                        |
| 3    | Two birds returns 18         | First generalised combination logic |
| 4    | Three birds returns 36       | Full generalisation                 |
| 5    | Total (1-3 birds) returns 57 | Safety regression                   |
