---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/9/9f/SwarmME3_Plague.jpg/revision/latest/scale-to-width-down/350?cb=20121201212536
type: organic
unit: collector
alignment: le
profBonus: 2
ac: 13
hp:
  dieCount: 4
  dieType: 6
abilityScores:
  str: 4
  dex: 12
  con: 10
  int: 10
  wis: 8
  cha: 6
irv: false
savingThrows:
  - dex
senses: false
size: small
skills: false
speed:
  fly: 30
entries:
  actions:
    plague-sting:
      attack: melee
      proficient: true
      range: 5
      dc: false
      mod: dex
      damage: [{"dieCount":'1', "dieType":'4', "mod":true, "type":poison},{"dieCount":'1', "dieType":'4', "mod":true, "type":necrotic}]
      target: one
cr: '00250'
shields: false
---
