---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/6/63/Codex_ME_-_Varren.png/revision/latest/scale-to-width-down/200?cb=20140820063614
type: organic
unit: alien
alignment: u
profBonus: 2
ac: 14
hp:
  dieCount: 5
  dieType: 10
abilityScores:
  str: 17
  dex: 15
  con: 15
  int: 3
  wis: 12
  cha: 7
irv: false
savingThrows: false
senses: false
size: large
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
        - {dieCount: '2', dieType: '6', mod: true, type: piercing}
      target: one
      id: bite
cr: '01000'
shields: false
---
