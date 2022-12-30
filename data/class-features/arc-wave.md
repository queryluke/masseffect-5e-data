---
level: 14
klass: vanguard
subclass: cardinal
mechanics:
  - type: augment
    value:
      model: vanguard
      id: rend
      limit: [natural-weapon]
    merge:
      value:
        html: >-
          <p>On a killing blow with this weapon, you gain 1 Focus Point. You also gain 1 Focus Point when you
          roll an 8, 9, or 10 on the damage die with a single-handed attack or a 5 or 6 on either damage die with a two-handed attack.
          You cannot raise your Focus Points past your current maximum with this weapon.</p>
          <p>Attacks with this weapon will add your current Focus Points to this melee weapon's
          attack and damage rolls.</p>
          <p>Whenever you land a successful hit with your Cardinal Blades, you may spend 1 Focus Point to deal
          half of the total damage result (rounded down) to all creatures within a <me-distance length="15" /> cone originating from your target
          in the direction you are currently facing when making this attack.</p>
        notes:
          - '+FP to Atk & Dmg rolls'
          - On hit, 1 FP = 1/2 DMG to each creature within <me-distance length="15" abbr />
name: Arc Wave
---
Your mastery of the Cardinal Blades have now given you the capability to push your focus to unleash further
energy against the prey's pack.

At 14th level, whenever you land a successful hit with your Cardinal Blades, you may spend 1 Focus Point to deal
half of the total damage result (rounded down) to all creatures within a <me-distance length="15" /> cone originating from your target
in the direction you are currently facing when making this attack.

In Addition, your Cardinal Blades will now gain a Focus Point if you roll an 8-10 result
on the damage die (Or a 5-6 on either d6 when using Versatile)
