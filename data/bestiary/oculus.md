---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/e/ed/Oculus_Combat.png/revision/latest?cb=20100731075649&format=original
type: synthetic
unit: reaper
alignment: le
profBonus: 4
ac: 17
hp:
  dieCount: 22
  dieType: 10
abilityScores:
  str: 12
  dex: 16
  con: 15
  int: 13
  wis: 9
  cha: 10
irv:
  conImm:
    - blinded
    - deafened
    - frightened
    - lifted
    - paralyzed
    - poisoned
    - prone
  damImm:
    - poison
savingThrows:
  - dex
  - con
senses:
  infrared_vision: 30
size: large
skills:
  - perception
speed:
  fly: 60
entries:
  actions:
    crush:
      attack: melee
      proficient: true
      range: 25
      dc: false
      mod: str
      damage: [{"dieCount":'4', "dieType":'6', "mod":true, "type":bludgeoning}]
      target: one
cr: '11000'
shields: false
---
