---
image: >-
  https://vignette.wikia.nocookie.net/elderscrolls/images/c/c3/Chaurus_3D.png/revision/latest/scale-to-width-down/700?cb=20120612155204
type: organic
unit: thorian
alignment: le
profBonus: 2
ac: 13
hp:
  dieCount: 5
  dieType: 6
abilityScores:
  str: 11
  dex: 13
  con: 11
  int: 13
  wis: 11
  cha: 2
irv: false
savingThrows: false
senses: false
size: small
skills: false
speed:
  walk: 30
entries:
  actions:
    - attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage:
        - {dieCount: '1', dieType: '4', mod: true, type: piercing}
      target: one
      id: bite
    - attack: ranged
      proficient: true
      range: 25
      dc: false
      mod: dex
      damage:
        - {dieCount: '2', dieType: '6', mod: true, type: necrotic}
      target: one
      id: acid-spit
    - dc: false
      save: false
      uses: 1
      perDay: true
      id: release-spores
cr: '00500'
shields: false
---
