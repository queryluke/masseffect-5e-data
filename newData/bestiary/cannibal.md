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
savingThrows: []
senses:
  darkvision: 24
size: medium
skills: []
speed:
  walk: 25
entries:
  actions:
    arm-cannon:
      attack: ranged
      range: 50
      dc: false
      save: false
      damage: [null]
    bash:
      attack: melee
      range: 5
      dc: false
      save: false
      damage: [null]
    frag-grenade:
      ref: grenade
      mark: iii
      uses: 2
    cannibalize:
      dc: false
      save: false
      uses: 1
      perDay: true
powercasting: false
---
