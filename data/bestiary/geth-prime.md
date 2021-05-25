---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/c/c9/ME3_Geth_Prime.png/revision/latest/scale-to-width-down/229?cb=20120403192110
type: synthetic
unit: geth
alignment: ln
profBonus: 4
ac: 18
hp:
  dieCount: 20
  dieType: 10
abilityScores:
  str: 16
  dex: 18
  con: 16
  int: 14
  wis: 10
  cha: 10
irv:
  conImm:
    - poisoned
  damImm:
    - poison
    - psychic
savingThrows:
  - con
  - int
senses: false
size: large
skills:
  - electronics
speed:
  walk: 30
entries:
  actions:
    weapon-bash:
      attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage: [{"dieCount":'1', "dieType":'10', "mod":true, "type":bludgeoning}]
      target: one
    geth-pulse-rifle:
      ref: weapon
      proficient: true
    summon-combat-drone:
      dc: false
      save: false
      uses: 3
      perDay: true
    summon-geth-turret:
      dc: false
      save: false
      uses: 1
      perDay: true
  legendary:
    actions:
      activate-radar-jamming: {"cost":2}
      geth-pulse-rifle-attack: {"cost":1}
      summon-turret-or-drone: {"cost":3}
cr: '09000'
shields:
  capacity: 30
  regen: 10
---
