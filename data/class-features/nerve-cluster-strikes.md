---
level: 17
klass: infiltrator
subclass: brawler
mechanics:
  - type: augment
    value:
      model: infiltrator
      id: martial-arts
    merge:
      value:
        notes:
          - 'You can change their damage type from bludgeoning to slashing or piercing'
          - 'Crit on 18+'
        html: >-
          At 3rd level, you gain an unarmed strike. It deals 1d6 bludgeoning damage, has the Special, Finesse and Light properties,
          and you can't be disarmed of it. You can flavour this unarmed strike as you want, meaning you can still use it even if
          both your hands are tied up. Your unarmed strikes are treated as weapons for the purposes of Sneak Attack.
          <br><br>
          You can also use Acrobatics instead of Athletics to grapple targets.
          <br><br>
          At 13th level, you can use reactions twice per round instead of only once. In addition, your unarmed strikes now
          deal 2d6 damage, and you can change their damage type from bludgeoning to slashing or piercing.
          <br><br>
          At 17th level, your unarmed strikes critically succeed on a roll of 18 or higher.
  - type: augment
    value:
      model: infiltrator
      id: body-blow
    merge:
      shortDesc: >-
        When you make an attack roll with an unarmed strike on your turn and hit, you can spend your
        bonus action to attempt a Body Blow. If you do, roll the attack again, using the same modifiers, against the
        same AC number of the target. If you hit this second attack, it deals no damage, but the target is <me-condition id="stunned" /> for 1 round.
        If your Body Blow roll is a critical hit, the target is instead <me-condition id="paralyzed" /> for 1 round.
        <br><br>
        When you successfully Body Blow someone, you can choose to move that creature to another space that's adjacent to you.
        <br><br>
        Your Body Blow strikes can critically succeed on a roll of 16 or higher. These attacks are only considered critical successes if they would hit the target's AC.
      moreInfo:
        additional:
          - {}
          - model: class-features
            id: nerve-cluster-strikes
name: Nerve Cluster Strikes
---
At 17th level, your unarmed strikes critically succeed on a roll of 18 or higher. In addition, your Body Blow strikes
can critically succeed on a roll of 16 or higher. These attacks are only considered critical successes if they would hit the target's AC.




