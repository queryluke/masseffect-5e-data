---
level: 18
klass: engineer
subclass: chemist
mechanics:
  - type: action
    name: Dirty Bomb
    resource:
      reset: off
      label: ' / 20 omni-gel + 24 hrs downtime'
    range:
      short: 100
      aoe:
        type: cylinder
        size: 30
      damage:
        - dieCount: 12
          dieType: 6
          type: acid
        - dieCount: 5
          dieType: 6
          type: poison
    shortDesc: >-
      Fire off a heavy charge full of toxins at a point within <me-distance length="100" /> of you. It
      explodes upon impact, creating a large cloud of toxic gas and raining down acidic rain upon all creatures in a
      cylinder with a radius of <me-distance length="30" />, and a height of <me-distance length="50" />.
      <br><br>
      All creatures inside the area upon impact must make a Dexterity saving throw, taking 12d6 acid damage on a fail,
      or half as much on a success. Creatures starting their turn inside the cloud must make a Constitution saving throw.
      On a failure, they gain a level of exhaustion and take 5d6 poison damage.
name: Dirty Bomb
---
You devise a recipe and blueprint for an explosive full of all your best ideas, as well a special launcher for it.
Starting at 18th level, you have created 1 Dirty Bomb, and gain the knowledge and capabilities to create more
with time and resources.

As an action, you fire off a heavy charge full of toxins at a point within <me-distance length="100" /> of you. It
explodes upon impact, creating a large cloud of toxic gas and raining down acidic rain upon all creatures in a
cylinder with a radius of <me-distance length="30" />, and a height of <me-distance length="50" />.

All creatures inside the area upon impact must make a Dexterity saving throw, taking 12d6 acid damage on a fail,
or half as much on a success. Creatures starting their turn inside the cloud must make a Constitution saving throw.
On a failure, they gain a level of exhaustion and take 5d6 poison damage.

Once you use this ability, you can create another Dirty Bomb at using 20 omni-gel and 24 hours of downtime. You may only
carry one Dirty Bomb on you at a time.

If authorities catch you with the Dirty Bomb, you will be arrested for crimes against sentient life.
