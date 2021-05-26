---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/9/9e/Thresher_Maw_ME2.png/revision/latest?cb=20100704014552
type: organic
unit: alien
alignment: u
profBonus: 8
ac: 22
hp:
  dieCount: 27
  dieType: 20
abilityScores:
  str: 30
  dex: 11
  con: 30
  int: 3
  wis: 11
  cha: 11
irv:
  conImm:
    - charmed
    - frightened
    - paralyzed
    - frozen
    - lifted
  res:
    - acid
    - bludgeoning
    - cold
    - fire
    - force
    - lightning
    - piercing
    - poison
    - slashing
savingThrows:
  - str
  - con
senses:
  blindsight: 10
  tremorsense: 30
size: gargantuan
skills: false
speed:
  walk: 50
  burrow: 35
entries:
  features:
    legendary-resistance:
      uses: 3
      perDay: true
  actions:
    grasp:
      attack: melee
      proficient: true
      range: 10
      dc: false
      mod: str
      damage: [{"dieCount":'3', "dieType":'12', "mod":true, "type":bludgeoning},{"dieCount":'2', "dieType":'12', "mod":true, "type":acid}]
      target: one
    tail:
      attack: melee
      proficient: true
      range: 20
      dc: false
      mod: str
      damage: [{"dieCount":'4', "dieType":'6', "mod":true, "type":bludgeoning}]
      target: one
  legendary:
    actions:
      acid-spit-attack: {"cost":2}
      move: {"cost":1}
      tail-attack: {"cost":1}
cr: '28000'
shields: false
---
