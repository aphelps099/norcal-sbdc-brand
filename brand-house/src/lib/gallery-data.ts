/**
 * Gallery data for the Photo & Video masonry grid.
 *
 * Photos sourced from:
 *   - NorCal SBDC client story pages (norcalsbdc.org/wp-content/uploads/)
 *   - SBDC shared Google Photos albums (lh3.googleusercontent.com)
 *   - Locally committed client photos (/public/photos/)
 *
 * No stock photography. Every image is a real SBDC client, advisor, or event.
 *
 * overlay: brand color key applied as a tinted overlay on each tile.
 *   "navy"   → #0f1c2e  (dark editorial)
 *   "royal"  → #1D5AA7  (brand blue)
 *   "coral"  → #A73B44  (warm accent)
 *   "pool"   → #8FC5D9  (light teal)
 */

export type OverlayColor = "navy" | "royal" | "coral" | "pool";

export interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
  /** CSS grid span classes, e.g. "col-span-2 row-span-2" */
  span?: string;
  aspectRatio?: string;
  fullWidth?: boolean;
  objectPosition?: string;
  overlay?: OverlayColor;
}

export const GALLERY_ITEMS: GalleryItem[] = [

  // ─── Row group 1 ──────────────────────────────────────────────────────────
  // Layout: [tall 1×2] [wide 2×1] / [wide 2×1]
  // = 3 columns, 2 rows consumed

  {
    id: "g01",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/32/2026/03/Michelle-8-1-2.jpeg",
    alt: "Michelle Nayfack — After-School Snack Attack",
    caption: "After-School Snack Attack",
    span: "col-span-1 row-span-2",
    objectPosition: "center 20%",
    overlay: "navy",
  },
  {
    id: "g02",
    type: "image",
    src: "https://lh3.googleusercontent.com/pw/AP1GczMZYn9VzciIvhfESsX47KnHcOhLkJZIY3fGkqi5DJ8Y7cSi8NbG37M7EG0ETqHDFvhdTPBvMqXjn31oO1nIbxh5wA3TqwCt3hD0iIaHY2cVkdqsA3SqsVk6oKKiJuJ0LJVRW8xgPy-TRsIf333Wo6nr=w1350-h900-s-no-gm",
    alt: "Business owner in front of her boutique shop",
    caption: "NorCal SBDC Client",
    span: "col-span-2 row-span-1",
    objectPosition: "center 35%",
    overlay: "royal",
  },
  {
    id: "g03",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/26/2025/11/Angel-Cha-Cha-Sweets-1-970x1200.jpeg",
    alt: "Angel — Cha-Cha Sweets",
    caption: "Cha-Cha Sweets",
    span: "col-span-1 row-span-1",
    objectPosition: "center 25%",
    overlay: "coral",
  },
  {
    id: "g04",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/9/2024/07/2024-Client-Success-Story-Yarrow-Goods-Owners.jpeg",
    alt: "Yarrow Goods owners",
    caption: "Yarrow Goods",
    span: "col-span-1 row-span-1",
    objectPosition: "center 30%",
    overlay: "navy",
  },

  // ─── Full-width video break ────────────────────────────────────────────────

  {
    id: "gv1",
    type: "video",
    src: "https://www.norcalsbdc.org/wp-content/uploads/2025/05/emerge-24-footage2.mp4",
    alt: "Emerge 2024 — NorCal SBDC annual conference",
    span: "col-span-3 row-span-2",
    fullWidth: true,
  },

  // ─── Row group 2 ──────────────────────────────────────────────────────────
  // Layout: [1×1] [1×1] [tall 1×2] / [wide 2×1] [tall 1×2 cont]

  {
    id: "g05",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/13/2026/02/Laila-Pic-1200x1181.png",
    alt: "Laila — From Oven to Online",
    caption: "From Oven to Online",
    span: "col-span-1 row-span-1",
    objectPosition: "center 20%",
    overlay: "royal",
  },
  {
    id: "g06",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/32/2026/02/Martinien-Cho-CEO-Mechi-900x1200.jpeg",
    alt: "Martinien Cho — Mechi Wellness Inc.",
    caption: "Mechi Wellness",
    span: "col-span-1 row-span-1",
    objectPosition: "center 15%",
    overlay: "navy",
  },
  {
    id: "g07",
    type: "image",
    src: "https://lh3.googleusercontent.com/pw/AP1GczMYzkhqGE_G40QFOoQ9ID8cwo_d8HbRjaDEQoMdqXh-ewCVBnu12KKYyeMWJHxUSlaBErDw3xmsSSdQPq-oBB0bXEyoQqlbbKOfXgGxVo_oD4g7QG34fD7Cme_gW5sIC5flUEMxMSrgHMARFOPnMuSn=w1353-h900-s-no-gm",
    alt: "Rancher with border collie and cattle herd",
    caption: "NorCal SBDC Client",
    span: "col-span-1 row-span-2",
    objectPosition: "center 40%",
    overlay: "coral",
  },
  {
    id: "g08",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/13/2025/07/thumbnail_Nivedita-in-lab-with-Takehiro-1200x675.jpg",
    alt: "Nivedita & Takehiro — Kamet Automation",
    caption: "Kamet Automation",
    span: "col-span-2 row-span-1",
    objectPosition: "center 40%",
    overlay: "royal",
  },

  // ─── Row group 3 ──────────────────────────────────────────────────────────
  // Layout: [wide 2×1] [1×1] / [1×1] [1×1] [1×1]

  {
    id: "g09",
    type: "image",
    src: "https://lh3.googleusercontent.com/pw/AP1GczOeurD4MZ-MPLDJ2HZ2bqf_O7WLIbORZku946LTTpO0nLzsIqtv3nhl5RrsXMhx6OezXE69OXza2YfHnt1xuBa2LkW63hPM-fUD3abLDMIiSP_HbPM1qymVmY9OlHR4zVTX36qj7-9Cj3qTOLzP9Fid=w1200-h900-s-no-gm",
    alt: "NorCal SBDC team — advisors and staff",
    caption: "NorCal SBDC Team",
    span: "col-span-2 row-span-1",
    objectPosition: "center 35%",
    overlay: "navy",
  },
  {
    id: "g10",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/9/2026/01/2026-Q1-HOHM-Pantry-pic-3-1200x900.jpeg",
    alt: "HOHM Pantry",
    caption: "HOHM Pantry",
    span: "col-span-1 row-span-1",
    objectPosition: "center 40%",
    overlay: "coral",
  },
  {
    id: "g11",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/13/2025/08/Carmen_Jimenez.png",
    alt: "Carmen Jimenez — El Papalote Childcare",
    caption: "El Papalote Childcare",
    span: "col-span-1 row-span-1",
    objectPosition: "center 20%",
    overlay: "royal",
  },
  {
    id: "g12",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/33/2025/12/Communication-Academy-Picture.png",
    alt: "Communication Academy",
    caption: "Communication Academy",
    span: "col-span-1 row-span-1",
    objectPosition: "center 30%",
    overlay: "navy",
  },
  {
    id: "g13",
    type: "image",
    src: "/photos/seal-rock-dental.jpg",
    alt: "Seal Rock Dental",
    caption: "Seal Rock Dental",
    span: "col-span-1 row-span-1",
    objectPosition: "center 40%",
    overlay: "coral",
  },

  // ─── Row group 4 ──────────────────────────────────────────────────────────

  {
    id: "g14",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/9/2025/09/Inside-with-cars-1200x900.jpg",
    alt: "Marin Auto Works interior",
    caption: "Marin Auto Works",
    span: "col-span-1 row-span-1",
    objectPosition: "center 50%",
    overlay: "navy",
  },
  {
    id: "g15",
    type: "image",
    src: "https://lh3.googleusercontent.com/pw/AP1GczMf-e74lJq-5gj59KmJLM625VhnlScyQfkCO0ooMmsgT8LT19uk5stB_vrE1qUEFSVoASEmxN1pIF6oWi9C9QubK46H1HmXYxArDeazR_-53zkyLrf7iB3b8EI7ftfFjPHajclRXjTttQMs0Z6lx38j=w1350-h900-s-no-gm",
    alt: "Kitchenware boutique owner with vintage mixing bowls",
    caption: "NorCal SBDC Client",
    span: "col-span-1 row-span-2",
    objectPosition: "center 35%",
    overlay: "royal",
  },
  {
    id: "g16",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/26/2025/08/514102730_1320470006753296_6172554395172527438_n-1-1200x1200.jpg",
    alt: "Napa Makers Accelerator — community event",
    caption: "Napa Makers",
    span: "col-span-1 row-span-1",
    objectPosition: "center 40%",
    overlay: "coral",
  },
  {
    id: "g17",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/32/2026/01/ThistleTonic-IMG_0342-900x1200.jpeg",
    alt: "Thistle & Tonic",
    caption: "Thistle & Tonic",
    span: "col-span-1 row-span-1",
    objectPosition: "center 30%",
    overlay: "navy",
  },
  {
    id: "g18",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/13/2025/08/Avi-1200x1200.jpg",
    alt: "Avi — Riskin Electric",
    caption: "Riskin Electric",
    span: "col-span-1 row-span-1",
    objectPosition: "center 20%",
    overlay: "royal",
  },

  // ─── Full-width image break ────────────────────────────────────────────────

  {
    id: "gf2",
    type: "image",
    src: "https://lh3.googleusercontent.com/pw/AP1GczMZWi3FCYNuenib34LBqEuTBX5hZrBiuF0qJZS7nPEPuGbJk24248-AJLOh6apLw19jdRifyzfBCJPmktCPrdH21hgxYEOL6z2xGfqi4MhrposWsnRiBaDg8V73brx5qV1tSQvts3U7GFcLKibMmNTx=w1200-h900-s-no-gm",
    alt: "NorCal SBDC advisors and staff — team portrait",
    caption: "NorCal SBDC Network",
    span: "col-span-3 row-span-1",
    objectPosition: "center 30%",
    fullWidth: true,
    overlay: "navy",
  },

  // ─── Row group 5 ──────────────────────────────────────────────────────────

  {
    id: "g19",
    type: "image",
    src: "https://lh3.googleusercontent.com/pw/AP1GczNqX8venrWJNNAUJ72mQZLsGHBtY1cttVx2ohU76a-dFwZFYLbfxJjKLNhCeHRH33PvMVmuD3NfLFfDujRt51dXDCPsCYB6cj0g63h97E8KDMBZEIuXLKs3TQkDLqcbYCBGdaiIyXtHced3GWuqFBwz=w1215-h900-s-no-gm",
    alt: "Food entrepreneur — all-natural kids snack brand",
    caption: "NorCal SBDC Client",
    span: "col-span-2 row-span-1",
    objectPosition: "center 40%",
    overlay: "coral",
  },
  {
    id: "g20",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/5/2025/07/Sweet-Bean-Coffee-feat-image.png",
    alt: "Sweet Bean Coffee House",
    caption: "Sweet Bean Coffee",
    span: "col-span-1 row-span-1",
    objectPosition: "center 40%",
    overlay: "royal",
  },
  {
    id: "g21",
    type: "image",
    src: "/photos/rep-it-out.jpg",
    alt: "Rep It Out — fitness studio",
    caption: "Rep It Out",
    span: "col-span-1 row-span-1",
    objectPosition: "center 40%",
    overlay: "navy",
  },
  {
    id: "g22",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/33/2025/08/Glory-Grove-Luffa-Sponge-3-900x1200.jpg",
    alt: "Glory Grove Organics",
    caption: "Glory Grove Organics",
    span: "col-span-1 row-span-1",
    objectPosition: "center 40%",
    overlay: "coral",
  },
  {
    id: "g23",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/2025/11/joulrse-1200x1102.jpeg",
    alt: "ReJoule — EV battery tech",
    caption: "ReJoule",
    span: "col-span-1 row-span-1",
    objectPosition: "center 40%",
    overlay: "royal",
  },
  {
    id: "g24",
    type: "image",
    src: "https://lh3.googleusercontent.com/pw/AP1GczNJlI3RKBrz7pJY4BpRJifyKFOx8DiSPC5eqosvUwE4VMgQSp6zhAxC0zqmF3pZpIhhySgBfXRSx35GnGE6ydva7tXb-JWClHTm-dfzmM_mbV7OCZgpwBHDvQ9ewyuWN0pQf8otEKVQD4QKvFUYGZrR=w1302-h900-s-no-gm",
    alt: "Tour company operator — Platypus Tours",
    caption: "NorCal SBDC Client",
    span: "col-span-1 row-span-1",
    objectPosition: "center 35%",
    overlay: "navy",
  },
  {
    id: "g25",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/26/2025/08/IMG_4495-1200x800.jpg",
    alt: "Vintner's Diary",
    caption: "Vintner's Diary",
    span: "col-span-1 row-span-1",
    objectPosition: "center 50%",
    overlay: "coral",
  },
  {
    id: "g26",
    type: "image",
    src: "/photos/circosphere.jpg",
    alt: "Circosphere",
    caption: "Circosphere",
    span: "col-span-1 row-span-1",
    objectPosition: "center 40%",
    overlay: "royal",
  },
  {
    id: "g27",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/33/2026/03/Oberit-Founder-Headshot-1.png",
    alt: "Oberit founder",
    caption: "Oberit, Inc.",
    span: "col-span-1 row-span-1",
    objectPosition: "center 15%",
    overlay: "navy",
  },
  {
    id: "g28",
    type: "image",
    src: "/photos/marin-auto.jpg",
    alt: "Marin Auto Works",
    caption: "Marin Auto Works",
    span: "col-span-2 row-span-1",
    objectPosition: "center 50%",
    overlay: "coral",
  },
];
