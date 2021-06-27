---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/e/e0/Rachni_Worker.png/revision/latest?cb=20100824223955
type: organic
unit: rachni
alignment: u
profBonus: 2
ac: 13
hp:
  dieCount: 2
  dieType: 6
abilityScores:
  str: 8
  dex: 10
  con: 12
  int: 1
  wis: 7
  cha: 3
irv: false
savingThrows:
  - wis
senses:
  blindsight: 10
size: small
skills: false
speed:
  walk: 35
entries:
  actions:
    - dc: false
      save: false
      recharge:
        - '4'
        - '6'
      id: acid-splash
    - attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage:
        - {dieCount: '1', dieType: '6', mod: true, type: piercing}
      target: one
      id: bite
cr: '00125'
shields: false
---
