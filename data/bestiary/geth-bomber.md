---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/0/01/ME3_geth_bomber_AAA.png/revision/latest/scale-to-width-down/700?cb=20130313175937
type: synthetic
unit: geth
alignment: ln
profBonus: 2
ac: 16
hp:
  dieCount: 10
  dieType: 6
abilityScores:
  str: 6
  dex: 18
  con: 6
  int: 14
  wis: 10
  cha: 8
irv:
  conImm:
    - petrified
    - poisoned
  damImm:
    - poison
    - psychic
  vul:
    - lightning
savingThrows:
  - dex
senses:
  darkvision: 60
size: small
skills:
  - perception
speed:
  fly: 30
entries:
  features:
    - mod: int
      list:
        - {id: overload, perDay: at_will}
      id: innate-powercasting
    - list:
        - {id: multi-frag-grenade, mark: ii, uses: 2}
      id: grenades
cr: '02000'
shields:
  capacity: 15
  regen: 5
---
