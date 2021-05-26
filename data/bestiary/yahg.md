---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/3/34/ME3_Yahg.png/revision/latest/scale-to-width-down/230?cb=20120322212821
type: organic
unit: alien
alignment: ce
profBonus: 3
ac: 17
hp:
  dieCount: 21
  dieType: 10
abilityScores:
  str: 18
  dex: 12
  con: 15
  int: 18
  wis: 16
  cha: 10
irv:
  res:
    - poison
savingThrows:
  - str
  - dex
  - wis
  - int
senses:
  blindsight: 10
size: large
skills:
  - acrobatics
  - athletics
  - deception
  - insight
  - perception
  - stealth
speed:
  walk: 40
entries:
  actions:
    bite:
      attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage: [{"dieCount":'2', "dieType":'10', "mod":true, "type":piercing}]
      target: one
    claw:
      attack: melee
      proficient: true
      range: 10
      dc: false
      mod: str
      damage: [{"dieCount":'2', "dieType":'8', "mod":true, "type":slashing}]
      target: one
cr: '08000'
shields: false
---
