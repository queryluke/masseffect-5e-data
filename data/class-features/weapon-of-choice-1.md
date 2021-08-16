---
level: 3
klass: soldier
subclass: weapon-master
mechanics:
  uses:
    method: byLevel
    params:
      - soldier
      - - level: 3
          uses: 4
        - level: 10
          uses: 5
        - level: 18
          uses: 6
  recharge: short
---
