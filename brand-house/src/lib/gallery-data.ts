/**
 * Gallery data for the Photo & Video masonry grid.
 *
 * Photos sourced from:
 *   - NorCal SBDC client story pages (norcalsbdc.org/wp-content/uploads/)
 *   - SBDC shared Google Photos albums (lh3.googleusercontent.com)
 *   - Locally committed client photos (/public/photos/)
 *
 * No stock photography. Every image is a real SBDC client, advisor, or event.
 */

export interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
  aspectRatio: string;
  fullWidth?: boolean;
  objectPosition?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [

  // ─── Segment 1: Client Portraits ─────────────────────────────────────────

  {
    id: "g01",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/32/2026/03/Michelle-8-1-2.jpeg",
    alt: "Michelle Nayfack — After-School Snack Attack",
    caption: "After-School Snack Attack",
    aspectRatio: "3/4",
    objectPosition: "center 20%",
  },
  {
    // Boutique owner smiling in front of her shop
    id: "g02",
    type: "image",
    src: "https://lh3.googleusercontent.com/pw/AP1GczMZYn9VzciIvhfESsX47KnHcOhLkJZIY3fGkqi5DJ8Y7cSi8NbG37M7EG0ETqHDFvhdTPBvMqXjn31oO1nIbxh5wA3TqwCt3hD0iIaHY2cVkdqsA3SqsVk6oKKiJuJ0LJVRW8xgPy-TRsIf333Wo6nr=w1350-h900-s-no-gm",
    alt: "Business owner in front of her boutique retail shop",
    caption: "NorCal SBDC Client",
    aspectRatio: "4/3",
    objectPosition: "center 30%",
  },
  {
    id: "g03",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/32/2026/02/Martinien-Cho-CEO-Mechi-900x1200.jpeg",
    alt: "Martinien Cho — Mechi Wellness Inc.",
    caption: "Mechi Wellness Inc.",
    aspectRatio: "3/4",
    objectPosition: "center 15%",
  },
  {
    // Kitchenware boutique owner with vintage mixing bowls
    id: "g04",
    type: "image",
    src: "https://lh3.googleusercontent.com/pw/AP1GczMf-e74lJq-5gj59KmJLM625VhnlScyQfkCO0ooMmsgT8LT19uk5stB_vrE1qUEFSVoASEmxN1pIF6oWi9C9QubK46H1HmXYxArDeazR_-53zkyLrf7iB3b8EI7ftfFjPHajclRXjTttQMs0Z6lx38j=w1350-h900-s-no-gm",
    alt: "Kitchenware boutique owner holding vintage mixing bowls",
    caption: "NorCal SBDC Client",
    aspectRatio: "4/3",
    objectPosition: "center 35%",
  },
  {
    id: "g05",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/26/2025/11/Angel-Cha-Cha-Sweets-1-970x1200.jpeg",
    alt: "Angel — Cha-Cha Sweets",
    caption: "Cha-Cha Sweets",
    aspectRatio: "3/4",
    objectPosition: "center 25%",
  },
  {
    // Rancher with border collie and cattle herd
    id: "g06",
    type: "image",
    src: "https://lh3.googleusercontent.com/pw/AP1GczMYzkhqGE_G40QFOoQ9ID8cwo_d8HbRjaDEQoMdqXh-ewCVBnu12KKYyeMWJHxUSlaBErDw3xmsSSdQPq-oBB0bXEyoQqlbbKOfXgGxVo_oD4g7QG34fD7Cme_gW5sIC5flUEMxMSrgHMARFOPnMuSn=w1353-h900-s-no-gm",
    alt: "Rancher with border collie dog and cattle herd in field",
    caption: "NorCal SBDC Client",
    aspectRatio: "4/3",
    objectPosition: "center 40%",
  },
  {
    id: "g07",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/13/2026/02/Laila-Pic-1200x1181.png",
    alt: "Laila — From Oven to Online",
    caption: "From Oven to Online",
    aspectRatio: "1/1",
    objectPosition: "center 20%",
  },
  {
    id: "g08",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/9/2024/07/2024-Client-Success-Story-Yarrow-Goods-Owners.jpeg",
    alt: "Yarrow Goods — business owners",
    caption: "Yarrow Goods",
    aspectRatio: "1/1",
    objectPosition: "center 30%",
  },
  {
    // Food entrepreneur — Peas of Mind kids snacks in commercial kitchen
    id: "g09",
    type: "image",
    src: "https://lh3.googleusercontent.com/pw/AP1GczNqX8venrWJNNAUJ72mQZLsGHBtY1cttVx2ohU76a-dFwZFYLbfxJjKLNhCeHRH33PvMVmuD3NfLFfDujRt51dXDCPsCYB6cj0g63h97E8KDMBZEIuXLKs3TQkDLqcbYCBGdaiIyXtHced3GWuqFBwz=w1215-h900-s-no-gm",
    alt: "Food entrepreneur with all-natural kids snack brand in commercial kitchen",
    caption: "NorCal SBDC Client",
    aspectRatio: "4/3",
    objectPosition: "center 40%",
  },

  // ─── Full-width video break 1 ─────────────────────────────────────────────

  {
    id: "g10",
    type: "video",
    src: "https://www.norcalsbdc.org/wp-content/uploads/2025/05/emerge-24-footage2.mp4",
    alt: "Emerge 2024 — NorCal SBDC annual conference footage",
    aspectRatio: "21/9",
    fullWidth: true,
  },

  // ─── Segment 2: Advisors, Staff & Community ───────────────────────────────

  {
    // SBDC team group photo — advisors and staff outdoors
    id: "g11",
    type: "image",
    src: "https://lh3.googleusercontent.com/pw/AP1GczOeurD4MZ-MPLDJ2HZ2bqf_O7WLIbORZku946LTTpO0nLzsIqtv3nhl5RrsXMhx6OezXE69OXza2YfHnt1xuBa2LkW63hPM-fUD3abLDMIiSP_HbPM1qymVmY9OlHR4zVTX36qj7-9Cj3qTOLzP9Fid=w1200-h900-s-no-gm",
    alt: "NorCal SBDC team — advisors and staff group photo",
    caption: "NorCal SBDC Team",
    aspectRatio: "4/3",
    objectPosition: "center 35%",
  },
  {
    id: "g12",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/13/2025/07/thumbnail_Nivedita-in-lab-with-Takehiro-1200x675.jpg",
    alt: "Nivedita & Takehiro in lab — Kamet Automation",
    caption: "Kamet Automation Inc.",
    aspectRatio: "4/3",
    objectPosition: "center 40%",
  },
  {
    // SBDC advisor individual portrait
    id: "g13",
    type: "image",
    src: "https://lh3.googleusercontent.com/pw/AP1GczMZWi3FCYNuenib34LBqEuTBX5hZrBiuF0qJZS7nPEPuGbJk24248-AJLOh6apLw19jdRifyzfBCJPmktCPrdH21hgxYEOL6z2xGfqi4MhrposWsnRiBaDg8V73brx5qV1tSQvts3U7GFcLKibMmNTx=w1200-h900-s-no-gm",
    alt: "NorCal SBDC staff member — individual portrait",
    caption: "NorCal SBDC Advisor",
    aspectRatio: "4/3",
    objectPosition: "center 25%",
  },
  {
    id: "g14",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/9/2026/01/2026-Q1-HOHM-Pantry-pic-3-1200x900.jpeg",
    alt: "HOHM Pantry",
    caption: "HOHM Pantry",
    aspectRatio: "4/3",
    objectPosition: "center 40%",
  },
  {
    id: "g15",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/13/2025/08/Avi-1200x1200.jpg",
    alt: "Avi — Riskin Electric",
    caption: "Riskin Electric",
    aspectRatio: "1/1",
    objectPosition: "center 20%",
  },
  {
    id: "g16",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/33/2025/12/Communication-Academy-Picture.png",
    alt: "Communication Academy",
    caption: "Communication Academy",
    aspectRatio: "4/3",
    objectPosition: "center 30%",
  },
  {
    // Pizza chef at wood-fired oven — Saucy restaurant
    id: "g17",
    type: "image",
    src: "https://lh3.googleusercontent.com/pw/AP1GczPgr26KWHAQ3Vd3a6XtNUmoFOXl9YKARlbfAB7vyPZziOvnF1OCe8UwQStohkAhLaI5Ym4Eri2HWAQSQl9YSjgPQl3O80p_IZUiKKbjsT705e3OQQcYKf3j6zeyEQ5T0mtI8jJLFezJ160wVHStGXoBpIJ6nas=w1350-h900-s-no-gm",
    alt: "Pizza chef pulling pie from wood-fired brick oven",
    caption: "NorCal SBDC Client",
    aspectRatio: "4/3",
    objectPosition: "center 45%",
  },
  {
    id: "g18",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/13/2025/08/Carmen_Jimenez.png",
    alt: "Carmen Jimenez — El Papalote Childcare Services",
    caption: "El Papalote Childcare",
    aspectRatio: "1/1",
    objectPosition: "center 20%",
  },
  {
    id: "g19",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/26/2025/08/514102730_1320470006753296_6172554395172527438_n-1-1200x1200.jpg",
    alt: "Napa Makers Accelerator — community event",
    caption: "Napa Makers Accelerator",
    aspectRatio: "1/1",
    objectPosition: "center 40%",
  },

  // ─── Full-width video break 2 ─────────────────────────────────────────────

  {
    id: "g20",
    type: "video",
    src: "https://www.norcalsbdc.org/wp-content/uploads/2025/05/emerge-24-footage2.mp4",
    alt: "NorCal SBDC — client spotlight footage",
    aspectRatio: "21/9",
    fullWidth: true,
  },

  // ─── Segment 3: Businesses in Action ─────────────────────────────────────

  {
    id: "g21",
    type: "image",
    src: "/photos/seal-rock-dental.jpg",
    alt: "Seal Rock Dental — client story",
    caption: "Seal Rock Dental",
    aspectRatio: "4/3",
    objectPosition: "center 40%",
  },
  {
    id: "g22",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/32/2026/01/ThistleTonic-IMG_0342-900x1200.jpeg",
    alt: "Thistle & Tonic",
    caption: "Thistle & Tonic",
    aspectRatio: "3/4",
    objectPosition: "center 30%",
  },
  {
    id: "g23",
    type: "image",
    src: "/photos/rejoule.jpg",
    alt: "ReJoule — EV battery innovation",
    caption: "ReJoule",
    aspectRatio: "3/4",
    objectPosition: "center 40%",
  },
  {
    id: "g24",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/9/2025/09/Inside-with-cars-1200x900.jpg",
    alt: "Marin Auto Works interior",
    caption: "Marin Auto Works",
    aspectRatio: "4/3",
    objectPosition: "center 50%",
  },
  {
    id: "g25",
    type: "image",
    src: "/photos/marin-auto.jpg",
    alt: "Marin Auto Works — exterior",
    caption: "Marin Auto Works",
    aspectRatio: "4/3",
    objectPosition: "center 50%",
  },
  {
    id: "g26",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/5/2025/07/Sweet-Bean-Coffee-feat-image.png",
    alt: "Sweet Bean Coffee House",
    caption: "Sweet Bean Coffee House",
    aspectRatio: "4/3",
    objectPosition: "center 40%",
  },
  {
    id: "g27",
    type: "image",
    src: "/photos/rep-it-out.jpg",
    alt: "Rep It Out — fitness studio",
    caption: "Rep It Out",
    aspectRatio: "3/4",
    objectPosition: "center 40%",
  },
  {
    id: "g28",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/33/2025/08/Glory-Grove-Luffa-Sponge-3-900x1200.jpg",
    alt: "Glory Grove Organics — luffa sponge",
    caption: "Glory Grove Organics",
    aspectRatio: "3/4",
    objectPosition: "center 40%",
  },
  {
    id: "g29",
    type: "image",
    src: "/photos/circosphere.jpg",
    alt: "Circosphere — immersive experience",
    caption: "Circosphere",
    aspectRatio: "1/1",
    objectPosition: "center 40%",
  },

  // ─── Full-width image break 3 ─────────────────────────────────────────────

  {
    // SBDC staff team — alternate group shot
    id: "g30",
    type: "image",
    src: "https://lh3.googleusercontent.com/pw/AP1GczN51HUbX9EasT6oFjLQLlKjPz3ZVhw_sJOnOyOCGPYmvX0EZzxYxQS7Igo0Z3xarGc8k0krP1VDy_aaofujJHmYxozvChcP1SR8LIyWS-i8Bh-U-XJ4mRL3XsrtlwHOVpkEkAhdXYzi_NJ7gRSX=w1200-h900-s-no-gm",
    alt: "NorCal SBDC advisors and staff — team photo",
    caption: "NorCal SBDC Network",
    aspectRatio: "21/9",
    fullWidth: true,
    objectPosition: "center 35%",
  },

  // ─── Segment 4: Innovation & Final Portraits ──────────────────────────────

  {
    id: "g31",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/2025/11/joulrse-1200x1102.jpeg",
    alt: "ReJoule — EV battery technology",
    caption: "ReJoule",
    aspectRatio: "1/1",
    objectPosition: "center 40%",
  },
  {
    id: "g32",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/26/2025/08/IMG_4495-1200x800.jpg",
    alt: "Vintner's Diary",
    caption: "Vintner's Diary",
    aspectRatio: "4/3",
    objectPosition: "center 50%",
  },
  {
    id: "g33",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/33/2026/03/Oberit-Founder-Headshot-1.png",
    alt: "Oberit founder",
    caption: "Oberit, Inc.",
    aspectRatio: "3/4",
    objectPosition: "center 15%",
  },
  {
    // Tour operator — Platypus Tours
    id: "g34",
    type: "image",
    src: "https://lh3.googleusercontent.com/pw/AP1GczNJlI3RKBrz7pJY4BpRJifyKFOx8DiSPC5eqosvUwE4VMgQSp6zhAxC0zqmF3pZpIhhySgBfXRSx35GnGE6ydva7tXb-JWClHTm-dfzmM_mbV7OCZgpwBHDvQ9ewyuWN0pQf8otEKVQD4QKvFUYGZrR=w1302-h900-s-no-gm",
    alt: "Tour company operator in front of Platypus Tours bus",
    caption: "NorCal SBDC Client",
    aspectRatio: "4/3",
    objectPosition: "center 35%",
  },
  {
    id: "g35",
    type: "image",
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/9/2024/07/2024-Client-Success-Story-Yarrow-Goods-Owners.jpeg",
    alt: "Yarrow Goods owners — detail",
    caption: "Yarrow Goods",
    aspectRatio: "3/4",
    objectPosition: "center 20%",
  },
];
