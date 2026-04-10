/**
 * Gallery data for the Photo & Video masonry grid.
 *
 * Placeholder sources are used for now — when curated photography and video
 * assets are ready, drop them into /public/gallery/ and update the `src`
 * paths here accordingly.
 */

export interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  alt?: string;
  aspectRatio: string;
  fullWidth?: boolean;
  objectPosition?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // — Segment 1 (items 1-9) —
  {
    id: "g01",
    type: "image",
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&fit=crop&auto=format",
    alt: "Business team collaborating",
    aspectRatio: "3/4",
    objectPosition: "center 40%",
  },
  {
    id: "g02",
    type: "image",
    src: "/photos/seal-rock-dental.jpg",
    alt: "Seal Rock Dental",
    aspectRatio: "4/3",
  },
  {
    id: "g03",
    type: "image",
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80&fit=crop&auto=format",
    alt: "Team meeting",
    aspectRatio: "1/1",
  },
  {
    id: "g04",
    type: "image",
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&fit=crop&auto=format",
    alt: "Office collaboration",
    aspectRatio: "3/4",
  },
  {
    id: "g05",
    type: "image",
    src: "/photos/rejoule.jpg",
    alt: "Rejoule",
    aspectRatio: "4/3",
  },
  {
    id: "g06",
    type: "image",
    src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80&fit=crop&auto=format",
    alt: "Working at laptop",
    aspectRatio: "3/4",
    objectPosition: "center 30%",
  },
  {
    id: "g07",
    type: "image",
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&fit=crop&auto=format",
    alt: "Conference room discussion",
    aspectRatio: "4/3",
  },
  {
    id: "g08",
    type: "image",
    src: "/photos/circosphere.jpg",
    alt: "Circosphere",
    aspectRatio: "1/1",
  },
  {
    id: "g09",
    type: "image",
    src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80&fit=crop&auto=format",
    alt: "Presentation in progress",
    aspectRatio: "3/4",
  },

  // — Full-width video break 1 —
  {
    id: "g10",
    type: "video",
    src: "https://www.norcalsbdc.org/wp-content/uploads/2025/05/emerge-24-footage2.mp4",
    alt: "Emerge 2024 event footage",
    aspectRatio: "21/9",
    fullWidth: true,
  },

  // — Segment 2 (items 11-24) —
  {
    id: "g11",
    type: "image",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&fit=crop&auto=format",
    alt: "Team brainstorming session",
    aspectRatio: "4/3",
  },
  {
    id: "g12",
    type: "image",
    src: "/photos/marin-auto.jpg",
    alt: "Marin Auto",
    aspectRatio: "3/4",
  },
  {
    id: "g13",
    type: "image",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80&fit=crop&auto=format",
    alt: "Workshop training",
    aspectRatio: "1/1",
  },
  {
    id: "g14",
    type: "image",
    src: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&q=80&fit=crop&auto=format",
    alt: "Small business storefront",
    aspectRatio: "4/3",
    objectPosition: "center 60%",
  },
  {
    id: "g15",
    type: "image",
    src: "/photos/rep-it-out.jpg",
    alt: "Rep It Out",
    aspectRatio: "3/4",
  },
  {
    id: "g16",
    type: "image",
    src: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80&fit=crop&auto=format",
    alt: "Entrepreneur at work",
    aspectRatio: "4/3",
  },
  {
    id: "g17",
    type: "image",
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80&fit=crop&auto=format",
    alt: "Mentoring session",
    aspectRatio: "3/4",
    objectPosition: "center 35%",
  },
  {
    id: "g18",
    type: "image",
    src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80&fit=crop&auto=format",
    alt: "Business consultation",
    aspectRatio: "1/1",
  },
  {
    id: "g19",
    type: "image",
    src: "/photos/seal-rock-dental.jpg",
    alt: "Seal Rock Dental interior",
    aspectRatio: "4/3",
    objectPosition: "center 70%",
  },
  {
    id: "g20",
    type: "image",
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&fit=crop&auto=format",
    alt: "Coworking space",
    aspectRatio: "3/4",
  },
  {
    id: "g21",
    type: "image",
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80&fit=crop&auto=format",
    alt: "Team celebration",
    aspectRatio: "4/3",
  },
  {
    id: "g22",
    type: "image",
    src: "/photos/circosphere.jpg",
    alt: "Circosphere workshop",
    aspectRatio: "3/4",
    objectPosition: "center 40%",
  },
  {
    id: "g23",
    type: "image",
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&fit=crop&auto=format",
    alt: "Startup office",
    aspectRatio: "1/1",
  },
  {
    id: "g24",
    type: "image",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80&fit=crop&auto=format",
    alt: "People working on laptops",
    aspectRatio: "4/3",
  },

  // — Full-width video break 2 —
  {
    id: "g25",
    type: "video",
    src: "https://www.norcalsbdc.org/wp-content/uploads/2025/05/emerge-24-footage2.mp4",
    alt: "NorCal SBDC client spotlight",
    aspectRatio: "21/9",
    fullWidth: true,
  },

  // — Segment 3 (items 26-35) —
  {
    id: "g26",
    type: "image",
    src: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=800&q=80&fit=crop&auto=format",
    alt: "Advisory meeting",
    aspectRatio: "3/4",
  },
  {
    id: "g27",
    type: "image",
    src: "/photos/marin-auto.jpg",
    alt: "Marin Auto service",
    aspectRatio: "4/3",
    objectPosition: "center 50%",
  },
  {
    id: "g28",
    type: "image",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&fit=crop&auto=format",
    alt: "Team working together",
    aspectRatio: "1/1",
  },
  {
    id: "g29",
    type: "image",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop&auto=format",
    alt: "Modern office interior",
    aspectRatio: "4/3",
    objectPosition: "center 45%",
  },
  {
    id: "g30",
    type: "image",
    src: "/photos/rejoule.jpg",
    alt: "Rejoule workspace",
    aspectRatio: "3/4",
    objectPosition: "center 40%",
  },
  {
    id: "g31",
    type: "image",
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80&fit=crop&auto=format",
    alt: "Business owner at counter",
    aspectRatio: "4/3",
  },
  {
    id: "g32",
    type: "image",
    src: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80&fit=crop&auto=format",
    alt: "Community workshop",
    aspectRatio: "3/4",
    objectPosition: "center 35%",
  },
  {
    id: "g33",
    type: "image",
    src: "/photos/rep-it-out.jpg",
    alt: "Rep It Out studio",
    aspectRatio: "1/1",
    objectPosition: "center 50%",
  },
  {
    id: "g34",
    type: "image",
    src: "https://images.unsplash.com/photo-1557425955-df376b5903c8?w=800&q=80&fit=crop&auto=format",
    alt: "Café storefront",
    aspectRatio: "4/3",
  },

  // — Full-width image break 3 —
  {
    id: "g35",
    type: "image",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80&fit=crop&auto=format",
    alt: "Conference event panorama",
    aspectRatio: "21/9",
    fullWidth: true,
    objectPosition: "center 40%",
  },

  // — Segment 4 (items 36-40) —
  {
    id: "g36",
    type: "image",
    src: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?w=800&q=80&fit=crop&auto=format",
    alt: "Handshake moment",
    aspectRatio: "3/4",
  },
  {
    id: "g37",
    type: "image",
    src: "/photos/seal-rock-dental.jpg",
    alt: "Client at Seal Rock Dental",
    aspectRatio: "4/3",
    objectPosition: "center 55%",
  },
  {
    id: "g38",
    type: "image",
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80&fit=crop&auto=format",
    alt: "Focused work",
    aspectRatio: "1/1",
  },
  {
    id: "g39",
    type: "image",
    src: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=800&q=80&fit=crop&auto=format",
    alt: "Business meeting",
    aspectRatio: "3/4",
    objectPosition: "center 40%",
  },
  {
    id: "g40",
    type: "image",
    src: "/photos/circosphere.jpg",
    alt: "Circosphere team",
    aspectRatio: "4/3",
  },
];
