---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/c/ce/Collector_Guardian.png/revision/latest/scale-to-width-down/350?cb=20100623060233
type: organic
unit: collector
alignment: le
profBonus: 2
ac: 16
hp:
  dieCount: 10
  dieType: 8
abilityScores:
  str: 16
  dex: 15
  con: 16
  int: 8
  wis: 8
  cha: 9
irv: false
savingThrows:
  - con
senses:
  darkvision: 24
size: medium
skills:
  - athletics
speed:
  walk: 30
  fly: 15
entries:
  actions:
    weapon-bash:
      attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage: [{"dieCount":'2', "dieType":'8', "mod":true, "type":bludgeoning}]
      target: one
    collector-assault-rifle:
      ref: weapon
      proficient: true
    hex-shield:
      dc: false
      save: false
      uses: 1
      perDay: true
cr: '04000'
shields: false
---
