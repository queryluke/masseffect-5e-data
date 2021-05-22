---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/d/d3/Collector_TrooperME3.jpg/revision/latest/scale-to-width-down/350?cb=20121201212208
type: organic
unit: collector
alignment: le
profBonus: 2
ac: 15
hp:
  dieCount: 14
  dieType: 8
abilityScores:
  str: 13
  dex: 14
  con: 12
  int: 11
  wis: 12
  cha: 8
irv: false
savingThrows:
  - dex
senses:
  darkvision: 30
size: medium
skills:
  - athletics
speed:
  walk: 30
  fly: 15
entries:
  features:
    grenades:
      list: [{"id":frag-grenade, "mark":iii, "uses":2}]
  actions:
    claw:
      attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage: [{"dieCount":'2', "dieType":'6', "mod":true, "type":slashing}]
      target: one
    collector-smg:
      ref: weapon
      proficient: true
cr: '03000'
shields: false
---
