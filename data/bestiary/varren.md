---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/f/f5/Varren.png/revision/latest?cb=20100220175817
type: organic
unit: alien
alignment: u
profBonus: 2
ac: 13
hp:
  dieCount: 2
  dieType: 8
abilityScores:
  str: 12
  dex: 15
  con: 12
  int: 3
  wis: 12
  cha: 6
irv: false
savingThrows: false
senses: false
size: medium
skills:
  - perception
  - stealth
speed:
  walk: 40
entries:
  actions:
    - attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage:
        - {dieCount: '2', dieType: '4', mod: true, type: piercing}
      target: one
      id: bite
cr: '00250'
shields: false
---
