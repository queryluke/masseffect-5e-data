---
image: >-
  https://vignette.wikia.nocookie.net/finalfantasy/images/1/15/Sandragora.jpg/revision/latest?cb=20081018141337
type: organic
unit: thorian
alignment: le
profBonus: 2
ac: 13
hp:
  dieCount: 3
  dieType: 6
abilityScores:
  str: 10
  dex: 13
  con: 9
  int: 11
  wis: 11
  cha: 2
irv:
  conImm:
    - lifted
    - prone
savingThrows: false
senses: false
size: small
skills: false
speed:
  walk: 0
entries:
  actions:
    acid-spit:
      attack: ranged
      proficient: true
      range: 25
      dc: false
      mod: dex
      damage: [{"dieCount":'2', "dieType":'6', "mod":true, "type":necrotic}]
      target: one
    release-spores:
      dc: false
      save: false
      uses: 1
      perDay: true
cr: '00250'
shields: false
---
