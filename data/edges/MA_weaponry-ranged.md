---
name: Integrated Weaponry (ranged)
mechanics:
  - type: attack
    name: Integrated Weaponry
    modelType:
      model: weapon
      type: ranged
    range:
      short: 50
      long: 100
    attack:
      type: ranged
      proficient: true
      bonus:
        type: mod
        value: con
    damage:
      - dieCount: 1
        dieType: 8
        bonus:
          type: mod
          value: con
    moreInfo:
      model: edges
      id: MA_weaponry-ranged
  - type: model-choice
    options: true
    model: integrated-weaponry-damage
type: main-augments
---
Your body has integrated weapons located somewhere. This can vary from a bionic arm that you are now used to enough
to swing, or blades that only now you've grown used to. Choose a physical damage type: Bludgeoning, Slashing, or Piercing.
This is the base damage of your weapon. You make attack rolls with this weapon using your Constitution Modifier. It
deals 1d8 + your Constitution Modifier damage, and has a range of <me-distance length="50" abbr/>/<me-distance length="100" abbr />.
