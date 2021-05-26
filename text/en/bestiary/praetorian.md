---
name: Praetorian
entries:
  features:
    barrier:
      name: Barrier
      text: The praetorian has 10 barrier ticks. When it is dealt damage, remove one barrier tick and reduce the damage by 1d8.
    possessed-praetorian:
      name: Possessed Praetorian
      text: >-
        When the praetorian is possessed by a harbinger it gains 10 barrier
        ticks and while it has barrier ticks it also gains resistance to
        bludgeoning, piercing, and slashing damage. It can use its action to
        launch 2 missiles at a single or different target creatures within 60m.
        Each target must make a DC 18 Dexterity saving throw. On a failed save a
        target takes 33 (6d10) thunder damage, or half as much on a successful
        one. Once the praetorian fires its missiles, it cannot do so again.
  actions:
    claw:
      name: Claw
    pounce:
      name: Pounce
      text: >-
        The praetorian pounces to a location within <me-distance length='35' />
        and makes a claw attack.
    twin-particle-beams:
      name: Twin Particle Beams
      text: >-
        The praetorian shoots particle beams in a <me-distance length='30' adj
        /> line that is <me-distance length='10' /> wide originating from
        itself. Each creature within the area must make a DC 18 Dexterity saving
        throw. On a failed save a creature takes 54 (12d8) radiant damage or
        half as much on a successful one.
  reactions:
    negation-barrier:
      name: Negation Barrier
      text: >-
        When targeted by a biotic power or tech power, the praetorian can use
        its reaction to gain 2 barrier ticks and gain resistance to force,
        necrotic, cold, lightning, and fire damage until the start of its next
        turn.
---
