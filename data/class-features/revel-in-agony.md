---
level: 3
klass: soldier
subclass: incubus
mechanics:
  - type: skill-or-expertise
    value: [performance, intimidation]
  - type: other
    name: Revel in Agony
    dc:
      proficient: true
      base: 8
      mod: cha
      save: wis
    shortDesc: >-
      Whenever you score a critical hit or reduce a creature to 0 hit points, you can select one
      creature within <me-distance length="30" /> of you. That creature must make a DC {{ dc }} Wisdom saving throw.
      On a fail, the creature is frightened of you for 1 minute. The creature can retry the saving throw at the end
      of its turn, ending the effect on a success.
name: Revel in Agony
---
You do not just kill your enemies, no. You eviscerate them, drawing out their screams of pain. But much more interesting
than the screams themselves, is the look on the face of that poor individual that you look dead in the eye as you do it.

Also starting at 3rd level, whenever you score a critical hit or reduce a creature to 0 hit points, you can select one
creature within <me-distance length="30" /> of you. That creature must make a Wisdom saving throw
(DC 8 + your proficiency bonus + your Charisma modifier). On a fail, the creature is frightened of you for
1 minute. The creature can retry the saving throw at the end of its turn, ending the effect on a success.

Additionally, you gain proficiency in the Performance and Intimidation skills. If you already have proficiency
in this skill, you add your proficiency bonus twice whenever you make an ability check with that skill.
