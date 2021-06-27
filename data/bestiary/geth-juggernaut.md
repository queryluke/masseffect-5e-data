---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/a/a4/Geth_Destroyer_ME2.png/revision/latest/scale-to-width-down/350?cb=20100625040647
type: synthetic
unit: geth
alignment: ln
profBonus: 3
ac: 15
hp:
  dieCount: 14
  dieType: 10
abilityScores:
  str: 20
  dex: 11
  con: 18
  int: 13
  wis: 8
  cha: 4
irv:
  conImm:
    - poisoned
  damImm:
    - poison
    - psychic
  res:
    - bludgeoning
    - piercing
    - slashing
savingThrows: false
senses: false
size: large
skills: false
speed:
  walk: 35
entries:
  actions:
    - attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage:
        - {dieCount: '2', dieType: '8', mod: true, type: bludgeoning}
      target: one
      id: bash
    - ref: weapon
      proficient: true
      id: geth-plasma-smg
      weaponId: geth-plasma-smg
cr: '08000'
shields:
  capacity: 20
  regen: 5
---
