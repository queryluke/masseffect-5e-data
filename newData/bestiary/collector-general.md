---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/3/3c/Collectors_Leader_Character_Shot.png/revision/latest/scale-to-width-down/350?cb=20091119091650
type: organic
unit: collector
alignment: le
profBonus: 4
ac: 16
hp:
  dieCount: 25
  dieType: 10
abilityScores:
  str: 10
  dex: 12
  con: 12
  int: 14
  wis: 16
  cha: 18
savingThrows: []
senses:
  darkvision: 24
size: large
skills:
  - history
  - perception
  - science
  - persuasion
  - deception
speed:
  walk: 30
entries:
  actions:
    bash:
      attack: melee
      range: 5
      dc: false
      save: false
      damage: [null,null]
  legendary:
    assume-control:
      cost: 2
    barrier: {}
    bash-attack:
      cost: 1
    cast-a-power:
      cost: 3
powercasting:
  mod: cha
  casterLevel: '12'
  casterType: full
  list:
    - dark-channel
    - pull
    - reave
    - shockwave
    - singularity
---
