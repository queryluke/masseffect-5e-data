---
type: transport
subtype: air or space
size: huge
ac: 22
hp: 350
sp: 50
speed: 10
range:
  distance: 2000
  units: km
crew:
  min: 2
  max: 8
cargo: 4
systems:
  - type: combined
    crew: 1
    systems:
      - Helm
      - Weapons
  - type: combined
    crew: 1
    systems:
      - SSC
      - EWS
weapons:
  - name: M350 mass-accelerator autocannons
    damage: 70 (2d6[x10]) piercing damage
  - name: Inferno PKRs (16 charges)
    damage: >-
      160 (3d10[x10]) fire damage to a <me-distance length="25" adj />-radius
      sphere. Half damage on a successful DC 18 Dexterity saving throw.
cr: 21
cost: military
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/9/99/ME3_Gunships.png/revision/latest/scale-to-width-down/733?cb=20120412020735
---
