---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/f/f8/ME3_Sentry_Turret.png/revision/latest/scale-to-width-down/100?cb=20180206214039
type: synthetic
unit: mech
alignment: nn
profBonus: 2
ac: 14
hp:
  dieCount: 22
  dieType: 6
abilityScores:
  str: 10
  dex: 10
  con: 10
  int: 10
  wis: 10
  cha: 10
irv:
  conImm:
    - poisoned
  damImm:
    - poison
    - psychic
  vul:
    - lightning
savingThrows: false
senses: false
size: small
skills: false
speed:
  walk: 0
entries:
  features:
    - mod: int
      list:
        - {id: flamethrower, perDay: 3}
      id: innate-powercasting
  actions:
    - attack: ranged
      proficient: true
      range: 150
      dc: false
      mod: dex
      damage:
        - {dieCount: '2', dieType: '6', mod: true, type: piercing}
        - {dieCount: '2', dieType: '6', mod: true, type: radiant}
      target: one
      id: mass-accelerator-machinegun
cr: '01000'
shields: false
---
