---
name: Integrated Weaponry (melee)
mechanics:
  - type: attack
    name: Integrated Weaponry
    modelType:
      model: weapon
      type: melee
    range:
      short: 5
    attack:
      type: melee
      proficient: true
      bonus:
        type: mod
        value: con
    damage:
      - dieCount: 2
        dieType: 6
        bonus:
          type: mod
          value: con
    moreInfo:
      model: edges
      id: MA_weaponry-melee
  - type: model-choice
    options: true
    model: integrated-weaponry-damage
type: main-augments
---
Your body has integrated weapons located somewhere. This can vary from a bionic arm that you are now used to enough
to swing, or blades that only now you've grown used to. Choose a physical damage type: Bludgeoning, Slashing, or Piercing. This is the base damage of your weapon.
You make attack rolls with this weapon using your Constitution Modifier. It deals 2d6 + your Constitution Modifier damage.
