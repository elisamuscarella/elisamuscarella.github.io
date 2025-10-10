---
layout: project
title: "Fantasy RPG Core Mechanics"
subtitle: "Designing engaging progression systems"
date: 2024-01-15
categories: [game-design, rpg, systems]
technologies: ["Unity", "C#", "Excel", "Figma"]
featured: true
featured_image: "/assets/images/projects/fantasy-rpg-hero.jpg"
links:
  - title: "Design Document"
    url: "#"
  - title: "Prototype Build"
    url: "#"
excerpt: "Comprehensive design of character progression, skill trees, and combat mechanics for a fantasy RPG targeting core gamers."
---

## Project Overview

This project focused on designing the core progression mechanics for a fantasy RPG aimed at experienced players who enjoy deep character customization and strategic combat. The challenge was creating systems that felt both familiar and innovative.

## Key Design Challenges

### Character Progression
- Designed a dual-track progression system combining traditional leveling with skill-based advancement
- Created 12 distinct skill trees with meaningful choices at each tier
- Balanced horizontal vs. vertical progression to maintain player agency

### Combat Mechanics
- Implemented turn-based tactical combat with positioning elements
- Designed spell combination system allowing for emergent gameplay
- Created difficulty scaling that adapts to player choices

## Design Process

### Research & Analysis
Analyzed 15+ RPGs including Divinity: Original Sin 2, Pathfinder: Kingmaker, and classic titles like Baldur's Gate II to understand player expectations and identify opportunities for innovation.

### Prototyping
Built rapid prototypes in Unity to test core mechanics:
- **Week 1-2**: Basic character stats and leveling
- **Week 3-4**: Skill tree implementation
- **Week 5-6**: Combat system integration
- **Week 7-8**: Balance testing and iteration

### Playtesting
Conducted 3 rounds of playtesting with 24 participants:
- **Round 1**: Core mechanics validation (8 participants)
- **Round 2**: Balance and difficulty tuning (8 participants) 
- **Round 3**: Final validation and polish (8 participants)

## Key Innovations

### Adaptive Skill Trees
Skill trees that unlock new branches based on player actions and choices, creating personalized progression paths.

### Tactical Positioning
Combat system where character placement affects spell effectiveness and creates opportunities for environmental interactions.

### Emergent Spell Combinations
Spell system allowing players to combine different schools of magic for unique effects not explicitly programmed.

## Results & Impact

- **Player Engagement**: 89% of playtesters reported feeling "excited about character progression"
- **Replay Value**: Average of 3.2 different character builds attempted per playtester
- **Mechanical Depth**: 94% felt the systems offered "meaningful choices"

## Technical Implementation

```csharp
// Example: Skill tree node system
public class SkillNode
{
    public string skillId;
    public List<string> prerequisites;
    public List<SkillEffect> effects;
    public bool isUnlocked;
    
    public bool CanUnlock(PlayerCharacter player)
    {
        return prerequisites.All(prereq => 
            player.HasSkill(prereq) || 
            player.MeetsAlternativeRequirement(prereq)
        );
    }
}
```

## Lessons Learned

1. **Early Prototyping is Crucial**: Many initial concepts changed significantly after hands-on testing
2. **Player Communication**: Clear feedback systems are essential for complex mechanics
3. **Iterative Balance**: Mathematical balance must be validated through actual play

## Future Considerations

The system design supports future expansions including:
- Additional character classes
- Prestige progression systems
- Multiplayer cooperation mechanics
- Procedural content integration