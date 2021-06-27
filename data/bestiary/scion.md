---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/d/da/ScionME3.jpg/revision/latest/scale-to-width-down/350?cb=20121201212433
type: synorg
unit: reaper
alignment: le
profBonus: 4
ac: 18
hp:
  dieCount: 7
  dieType: 8
abilityScores:
  str: 18
  dex: 11
  con: 16
  int: 6
  wis: 6
  cha: 5
irv:
  res:
    - bludgeoning
    - piercing
    - slashing
savingThrows:
  - con
senses:
  darkvision: 30
size: medium
skills: false
speed:
  walk: 25
entries:
  actions:
    bash:
      attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage: [{"dieCount":'1', "dieType":'8', "mod":true, "type":bludgeoning}]
      target: one
    salvo:
      dc: false
      save: false
      recharge: ['4','6']
cr: '09000'
shields: false
---