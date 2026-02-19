// Define the valid categories strictly. 
// If you type "residentail" (typo) later, TS will yell at you.
export type ProjectCategory = 'residential' | 'commercial' | 'restoration';

export interface ProjectSpecs {
  bond: string;
  material: string;
  time: string;
}

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  location: string;
  image: string;
  description: string;
  specs: ProjectSpecs;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "The Oakwood Extension",
    category: "residential",
    location: "Surrey, UK",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    description: "A double-storey extension utilizing reclaimed red bricks to match the existing Victorian property.",
    specs: { bond: "Flemish", material: "Reclaimed Red", time: "8 Weeks" }
  },
  {
    id: 2,
    title: "Metro Office Complex",
    category: "commercial",
    location: "Manchester, UK",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    description: "Structural blockwork and facing brickwork for a 5-story office complex with engineering brick plinths.",
    specs: { bond: "Stretcher", material: "Blue Engineering", time: "6 Months" }
  },
  {
    id: 3,
    title: "St. Jude's Heritage Wall",
    category: "restoration",
    location: "Bath, UK",
    image: "https://images.unsplash.com/photo-1599839572645-36777174db75?auto=format&fit=crop&q=80&w=800",
    description: "Complete repointing using traditional lime mortar. Replacement of damaged stone and cleaning.",
    specs: { bond: "Heritage", material: "Lime Putty", time: "3 Weeks" }
  },
  {
    id: 4,
    title: "Riverside Garden Walls",
    category: "residential",
    location: "Oxford, UK",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800",
    description: "Decorative retaining garden walls with capping stones and integrated lighting channels.",
    specs: { bond: "English Garden", material: "Buff Stock", time: "2 Weeks" }
  }
];