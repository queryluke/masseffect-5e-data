---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/2/2f/ME2_Klixen.PNG/revision/latest/scale-to-width-down/350?cb=20100703065034
type: organic
unit: alien
alignment: u
profBonus: 2
ac: 14
hp:
  dieCount: 5
  dieType: 8
abilityScores:
  str: 12
  dex: 14
  con: 12
  int: 5
  wis: 10
  cha: 7
irv:
  conImm:
    - poisoned
  damImm:
    - fire
    - poison
  vul:
    - cold
savingThrows: []
senses: false
size: medium
skills: false
speed:
  walk: 30
entries:
  actions:
    fire-breath:
      dc: false
      save: false
      recharge: ['6']
    pincer:
      attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage: [{"dieCount":'1', "dieType":'4', "mod":true, "type":piercing},{"dieCount":'1', "dieType":'4', "mod":true, "type":fire}]
      target: one
cr: '01000'
shields: false
---
