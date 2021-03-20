---
type: starship
subtype: false
size: frigate
ac: 13
hp: 1350
sp: 350
speed: 5
range:
  distance: 3
  units: ftlu
crew:
  min: 4
  max: 10
cargo: 8
systems:
  - type: Helm
    crew: 1
  - type: combined
    crew: 1
    systems:
      - Navigation
      - SCC
      - EWS
  - type: Weapons
    crew: 1
  - type: Drive
    crew: 1
weapons:
  - name: Mass Accelerator Cannon
    damage: 350 (1d6[x100]) radiant damage.
cr: 6+
cost: 1350000
---
