---
level: 2
klass: engineer
subclass: mastermind
mechanics:
  - type: reaction
    shortDesc: When a creature is primed within <me-distance length="30" />, detonate it.
    resource:
      max:
        type: mod
        value: int
name: Enfilade
---
Starting at 2nd level, if an ally uses a power that primes an enemy within <me-distance length="30" />, you may use your reaction to detonate the primed enemy with a
quick tech burst that cannot miss.

You can use this feature a number of times equal to your Intelligence modifier (a minimum of once). You regain any
expended uses when you finish a long rest.
