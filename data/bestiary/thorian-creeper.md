---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/e/e5/Thorian_Creeper.png/revision/latest/scale-to-width-down/424?cb=20140614190322
type: organic
unit: thorian
alignment: le
profBonus: 2
ac: 13
hp:
  dieCount: 4
  dieType: 8
abilityScores:
  str: 13
  dex: 11
  con: 15
  int: 2
  wis: 2
  cha: 2
irv:
  vul:
    - bludgeoning
    - force
savingThrows: false
senses: false
size: medium
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
        - {dieCount: '2', dieType: '4', mod: true, type: slashing}
      target: one
      id: slash
    - dc: false
      save: false
      recharge:
        - '4'
        - '6'
      id: acid-vomit
cr: '00250'
shields: false
---
