---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/4/46/EPP_-_adjutant_1.png/revision/latest/scale-to-width-down/640?cb=20121202170742
type: synorg
unit: cerberus
alignment: le
profBonus: 2
ac: 14
hp:
  dieCount: 10
  dieType: 10
abilityScores:
  str: 10
  dex: 16
  con: 10
  int: 8
  wis: 10
  cha: 8
irv: false
savingThrows: []
senses: false
size: large
skills: false
speed:
  walk: 25
entries:
  actions:
    arm-cannon:
      attack: ranged
      proficient: true
      range: 50
      dc: false
      mod: dex
      damage: [{"dieCount":'1', "dieType":'10', "mod":true, "type":piercing}]
      target: one
    bash:
      attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage: [{"dieCount":'1', "dieType":'8', "mod":true, "type":bludgeoning}]
      target: one
    reaper-infection:
      attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage: [{"dieCount":'1', "dieType":'6', "mod":true, "type":piercing},{"dieCount":'3', "dieType":'6', "mod":true, "type":necrotic}]
      target: one
cr: '02000'
shields: false
---
