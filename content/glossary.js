export const preamble = `This glossary provides players with detailed rules for *Twilight Imperium: Fourth Edition* and its *Prophecy of Kings* expansion, organized by topic. Players are encouraged to use the index on page 38 to find specific topics within the glossary.`;
export const content = [
  {
    name: 'Abilities',
    preamble: `Cards and faction sheets each have abilities that players can resolve to trigger various game effects.`,
    subsections: [
      {
        items: [
`
If information in this Rules Reference contradicts the Learn to Play booklet, the Rules Reference takes precedence.
`,`
If a card ability contradicts information in the Rules Reference, the card takes precedence. If both the card and the rules can be followed at the same time, they should be.
`,`
Each ability describes when and how a player can resolve it.

1. If an ability with a specified duration is resolved, the effect of the ability remains through that duration, even if the component that caused the ability is removed.
`,`
If a card has multiple abilities, each ability is presented as its own paragraph.
`,`
If an ability contains the word “Action,” a player must use a component action during the action phase to resolve that ability.
`,`
If an ability uses the word “cannot,” that effect is absolute.

1. If two abilities use the word “cannot,” a persistent ability takes precedence over a one-time ability and an enabling ability takes precedence over a cancel ability.
`,`
When a player resolves an ability, they must resolve the ability in its entirety. Any parts of the ability preceded by the word “may” are optional, and the player resolving the ability may choose not to resolve those parts.
`,`
Abilities on components that remain in play are mandatory unless those abilities use the word “may.”
`,`
If an ability has multiple effects separated by the word “and,” a player must resolve as many of the ability’s effects as possible. However, if the player cannot resolve all of its effects, that player is allowed to resolve as many as they can.`,
        ]
      },
      {
        name: 'Costs',
        items: [
`
Some abilities have a cost that is followed by an effect. The cost of an ability is separated from the effect by the word “to” or by a semicolon. A player cannot resolve the effect of such an ability if they cannot resolve that ability’s cost.
`,`
Some examples of an ability’s cost include spending resources, spending trade goods, spending command tokens, exhausting cards, purging cards, and activating specific systems.`,
        ]
      },
      {
        name: 'Timing',
        items: [
`
If the timing of an ability uses the word “before” or “after,” the ability’s effect occurs immediately before or after the described timing event, respectively.

1. For example, if an ability is resolved “after a ship is destroyed,” the ability must be resolved as soon as the ship is destroyed and not later during that turn or round.
`,`
If the timing of an ability uses the word “when,” the ability’s effect occurs at the moment of the described timing event.

1. Such an ability typically modifies or replaces the timing event in some way.
`,`
Effects that occur “when” an event happens take priority over effects that occur “after” an event happens.
`,`
If an ability uses the word “then,” a player must resolve the effect that occurs before the word “then” or they cannot resolve the effect that occurs after the word “then.”
`,`
Each ability can be resolved once for each occurrence of that ability’s timing event. For example, if an ability is resolved “At the start of combat,” it can be resolved at the start of each combat.
`,`
If there are multiple abilities that players wish to resolve at the same time during the **action phase**, each player takes a turn resolving an ability in initiative order, beginning with the active player. This process continues until each player has resolved each ability that they wish to resolve during that window.
`,`
If there are multiple abilities that players wish to resolve at the same time during the **strategy** or **agenda phases**, players take turns resolving abilities starting with the speaker and proceeding clockwise. This process continues until each player has resolved each ability that they wish to resolve during that window.`,
        ]
      },
      {
        name: 'Component-Specific Rules',
        items: [
`
The opening paragraph of each ability found on an action card describes when a player can resolve that card’s ability.
`,`
The opening paragraph of most abilities found on promissory notes describes when a player can resolve that card’s ability.

1. Some promissory notes have abilities that trigger as soon as a player receives the card.
`,`
Abilities on agenda cards correspond to an outcome. Players resolve these abilities during the agenda phase after players vote for a particular outcome.
`,`
Each faction has faction abilities presented on its faction sheet. Each faction’s flagship has one or more unique abilities. Some abilities provide players with perpetual effects.
`,`
Some units have unit abilities. These abilities are named and presented above a unit’s attributes on a player’s faction sheet or on a unit upgrade card. Each unit ability has unique rules for when a player can resolve that ability. The following abilities are unit abilities:

* Anti-Fighter Barrage
* Bombardment
* Deploy
* Planetary Shield
* Production
* Space Cannon
* Sustain Damage
`,`
If a unit’s ability uses the phrase “this system” or “this planet,” the ability is referring to the system or planet that contains that unit.`,
        ]
      }
    ]
  },
  {
    name: 'Action Cards',
    preamble: 'Action cards provide players with various abilities that they can resolve as described on the cards.',
    subsections: [
      {
        items: [
`
Each player draws one action card during each status phase.
`,`
Players can draw action cards by resolving the primary and secondary abilities of the “Politics” strategy card.
`,`
When a player draws an action card, they take the top card from the action card deck and add it to their hand of action cards.
`,`
Each player’s hand can have a maximum of **seven action cards**. If a player ever has more than seven action cards, that player must choose seven cards to keep and discard the rest.

1. A game effect can increase or decrease the number of cards a player’s hand can have.
`,`
A player’s action cards remain hidden from other players until those cards are played.
`,`
The first paragraph of each action card is presented in bold text and describes the timing of when that card’s ability can be resolved.

1. If an action card contains the word “Action,” a player must use a component action during the action phase to resolve the ability. A player cannot resolve a component action if they cannot completely resolve its ability.
2. Multiple action cards with the **same** name cannot be played during a single timing window to affect the same units or game effect. Canceled cards are not treated as being played.
`,`
To play an action card, a player reads and resolves the card’s ability text, making any decisions as prompted by the card. Then, that player discards the card, placing it in the action discard pile.
`,`
If an action card is canceled, that card has no effect and is discarded.
`
        ]
      }
    ]
  },
  {
    name: 'Action Phase',
    preamble: 'During the action phase, each player takes a turn in initiative order.',
    subsections: [
      {
        items: [
`
During a player’s turn, they perform a single action. After each player has taken a turn, player turns begin again in initiative order. This process continues until all players have passed.
`,`
If a player cannot perform an action, they must pass.
`,`
After a player has passed, they have no further turns and cannot perform additional actions during that action phase.

1. During a turn that a player passes, they can resolve transactions and “at the start of your turn” abilities.
2. A player that has passed can still resolve the secondary ability of other players’ strategy cards.
3. It is possible for a player to perform multiple, consecutive actions during an action phase if all other players have passed during that action phase.
`,`
A player cannot pass until they have performed the strategic action of their strategy card. 

1. During a three-player or four-player game, a player cannot pass until they have exhausted both of their strategy cards.
`,`
After all players have passed, play proceeds to the status phase.
`
        ]
      }
    ]
  },
];

/*
  {
    name: 'Section heading',
    preamble: 'Non-numbered content below the heading',
    subsections: [
      {
        name: 'Numbered secondary heading (if applicable)',
        items: [
`
Markdown content with a number
`,`
Markdown content with a number
`,
        ]
      }
    ]
  },
*/