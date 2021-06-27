---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/4/44/Me3_combat_drone.png/revision/latest/scale-to-width-down/480?cb=20120720164039
type: synthetic
unit: mech
alignment: nn
profBonus: 2
ac: 13
hp:
  dieCount: 6
  dieType: 6
abilityScores:
  str: 12
  dex: 14
  con: 12
  int: 10
  wis: 8
  cha: 6
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
  fly: 40
entries:
  features:
    - mod: int
      list:
        - {id: sabotage, perDay: 3}
      id: innate-powercasting
  actions:
    - attack: ranged
      proficient: true
      range: 25
      dc: false
      mod: dex
      damage:
        - {dieCount: '1', dieType: '6', mod: true, type: lightning}
      target: one
      id: shock-attack
cr: '00250'
shields:
  capacity: 10
  regen: 5
---
