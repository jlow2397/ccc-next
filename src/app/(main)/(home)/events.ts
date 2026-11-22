export type EventYear = {
  year: number;
  photos: string[];
};

// To add a new year: drop photos in /public/<year>_events/ and add an entry
// here. Years are shown newest first.
export const eventYears: EventYear[] = [
  {
    year: 2026,
    photos: [
      "/2026_events/10-2026_1.jpeg",
      "/2026_events/10-2026_2.jpeg",
      "/2026_events/10-2026_3.jpeg",
    ],
  },
  {
    year: 2025,
    photos: [
      "/2025_events/12-2025_1.jpeg",
      "/2025_events/12-2025_2.jpeg",
      "/2025_events/12-2025_3.jpeg",
      "/2025_events/08-2025_1.jpeg",
      "/2025_events/12-2025_4.jpeg",
      "/2025_events/12-2025_5.jpeg",
      "/2025_events/08-2025_2.jpeg",
    ],
  },
  {
    year: 2024,
    photos: [
      "/2024_events/12-2024_1.jpeg",
      "/2024_events/12-2024_3.jpeg",
      "/2024_events/12-2024_4.jpeg",
      "/2024_events/12-2024_13.jpeg",
      "/2024_events/12-2024_8.jpeg",
      "/2024_events/12-2024_10.jpeg",
      "/2024_events/12-2024_15.jpeg",
      "/2024_events/12-2024_16.jpeg",
    ],
  },
];
