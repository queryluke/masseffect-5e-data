---
name: Biotic Prodigy
new: true
mechanics:
  - type: advancements-choice
    options: true
    limit:
      valueLookup:
        model: traits
        id: innate-biotics
  - type: augment
    value:
      model: trait
      id: innate-biotics
      limit: [powers]
      instances: [2]
    merge:
      resource:
        resource:
          id: biotic-prodigy
          label: '@ 2nd Level / long rest'
prerequisite: Asari
prereq:
  - type: species
    limit: [asari]
---
Your innate biotics have been honed to be even more potent.

- Choose one advancement for both of the cantrips gained from your Innate Biotics. These
advancements do not count against your number of cantrips known.
- Once per long rest, you may cast the 1st level power gained from your Innate Biotics trait at
2nd level without expending a power slot.
