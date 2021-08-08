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
irv:
  conImm:
    - charmed
savingThrows: false
senses:
  darkvision: 30
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
  features:
    - mod: cha
      casterLevel: '12'
      list:
        - dark-channel
        - pull
        - reave
        - shockwave
        - singularity
      id: powercasting
  actions:
    - attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage:
        - {dieCount: '3', dieType: '8', mod: true, type: bludgeoning}
      target: one
      id: bash
  legendary:
    actions:
      - cost: 2
        id: assume-control
      - cost: 1
        id: bash-attack
      - cost: 3
        id: cast-a-power
cr: '11000'
shields: false
---
