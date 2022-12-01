---
level: 20
klass: musician
subclass: techno
mechanics:
  - type: action
    name: Inspire the Revolution
    resource:
      id: musicians-inspiration
      min: 1
      reset: short
      max:
        type: mod
        value: cha
      increment: 2
    shortDesc: >-
      Every creature you consider an enemy in a <me-distance length="25" /> radius
      has their AC reduced by 1d12. This effect lasts {{ chaMod }} rounds.
      Using Inspiration this way consumes 2 uses of Inspiration per use.
name: Inspire the Revolution
---
At 20th level, instead of using a bonus action to target an ally and grant them Inspiration, you can use an action
to use this feature. Instead of an ally, every creature you consider an enemy in a <me-distance length="25" /> radius
has their AC reduced by one roll of your Inspiration die. This effect lasts for a number of
rounds equal to your Charisma modifier. Using Inspiration this way consumes 2 uses of Inspiration per use.
