---
image: >-
  https://vignette.wikia.nocookie.net/starwars/images/e/e2/Kathhound.jpg/revision/latest/scale-to-width-down/439?cb=20091106175830
type: organic
unit: alien
alignment: u
profBonus: 2
ac: 16
hp:
  dieCount: 5
  dieType: 10
abilityScores:
  str: 16
  dex: 13
  con: 16
  int: 10
  wis: 16
  cha: 6
irv: false
savingThrows: []
senses:
  blindsight: 30
size: large
skills:
  - perception
speed:
  walk: 40
entries:
  features:
    innate-powercasting:
      mod: wis
      list: [{"id":throw, "perDay":at_will},{"id":warp, "perDay":3}]
  actions:
    gore:
      attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage: [{"dieCount":'3', "dieType":'4', "mod":true, "type":piercing}]
      target: one
    maul:
      attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage: [{"dieCount":'2', "dieType":'8', "mod":true, "type":piercing}]
      target: one
cr: '01000'
shields: false
---
