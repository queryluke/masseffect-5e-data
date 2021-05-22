---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/9/92/ME2_Harvester.jpg/revision/latest/scale-to-width-down/200?cb=20100210004033
type: organic
unit: alien
alignment: u
profBonus: 6
ac: 16
hp:
  dieCount: 26
  dieType: 12
abilityScores:
  str: 26
  dex: 14
  con: 24
  int: 16
  wis: 15
  cha: 16
irv:
  conImm:
    - poisoned
  damImm:
    - poison
savingThrows:
  - str
  - con
  - wis
senses: false
size: huge
skills:
  - perception
speed:
  walk: 60
  fly: 90
entries:
  actions:
    stomp:
      attack: melee
      proficient: true
      range: 10
      dc: false
      mod: str
      damage: [{"dieCount":'2', "dieType":'6', "mod":true, "type":piercing}]
      target: one
    drop-klixen:
      attack: regional
      proficient: true
      range: false
      dc: false
      mod: dex
      damage: []
      target: one
  legendary:
    text: >-
      The harvester can take 3 legendary actions, choosing from the options
      below. Only one legendary action can be used at a time and only at the end
      of another creature's turn. The harvester regains spent legendary actions
      at the start of its turn.
    actions:
      detect: {"cost":1}
      stomp-attack: {"cost":1}
      trample-attack: {"cost":2}
cr: '19000'
shields: false
---
