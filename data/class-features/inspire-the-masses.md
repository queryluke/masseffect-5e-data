---
level: 20
klass: musician
subclass: tradition
mechanics:
  - type: action
    name: Inspire the Masses
    resource:
      id: musicians-inspiration
      reset: short
      max:
        type: modComparison
        value: [wis,cha]
      min: 1
      increment: 2
    shortDesc: >-
      Every creature you consider and all in a <me-distance length="25" /> radius gains your Inspiration die.
      Using Inspiration this way consumes 2 uses of Inspiration per use.
      Using Inspiration this way consumes 2 uses of Inspiration per use.
name: Inspire the Masses
---
At 20th level, instead of using a bonus action to target an ally and grant them Inspiration, you can use an
action to use this feature. Instead of one ally, every creature you consider an ally in a <me-distance length="25" />
radius gains your Inspiration die. Using Inspiration this way consumes 2 uses of Inspiration per use.
