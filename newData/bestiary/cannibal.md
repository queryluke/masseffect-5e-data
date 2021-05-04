---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/1/1b/ME3_Cannibal.png/revision/latest/scale-to-width-down/339?cb=20120320020900
type: synorg
unit: reaper
alignment: le
profBonus: 2
ac: 13
hp:
  dieCount: 16
  dieType: 8
abilityScores:
  str: 13
  dex: 10
  con: 10
  int: 8
  wis: 5
  cha: 3
irv: false
savingThrows: []
senses:
  darkvision: 24
size: medium
skills: false
speed:
  walk: 25
entries:
  features:
    grenades:
      list: [{"id":frag-grenade, "mark":iii, "uses":2}]
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
    cannibalize:
      dc: false
      save: false
      uses: 1
      perDay: true
cr: '02000'
shields: false
---
