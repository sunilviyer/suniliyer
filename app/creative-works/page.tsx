'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/* ═══════════════════════════════════════════════════════════════
   CREATIVE WORKS — BENTO GRID
   Dusty Rose palette · Dark/Light mode · YouTube + Mobile video
   ═══════════════════════════════════════════════════════════════ */

const PALETTE = {
  darkAmethyst1: '#1a1210', // deep warm black
  darkAmethyst2: '#2a1f1d', // warm dark brown
  indigoInk: '#7d4f50', // Clay Soil
  indigoVelvet: '#aa998f', // Dusty Taupe
  royalViolet: '#cc8b86', // Dusty Rose
  lavenderPurple: '#d1be9c', // Khaki Beige
  mauveMagic: '#cc8b86', // Dusty Rose
  mauve: '#f9eae1', // Linen
};

const CATEGORIES = [
  { id: 'all', label: 'Everything' },
  { id: 'videos', label: 'Videos' },
  { id: 'quotes-poems', label: 'Quotes & Poems' },
  { id: 'ai-art', label: 'AI Art' },
  { id: 'photography', label: 'Photography' },
];

/*  type: "youtube" | "mobile-video" | "image" | "photo-panel" | "poem" | "quote"
    size: "tall" | "wide" | "large" | "standard" | "full"  ← controls bento placement
    photo-panel items use: images[] array of 5 URLs, panelTitle for the strip label */

interface Work {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  type: string;
  size: string;
  tags: string[];
  date: string;
  youtubeId?: string;
  imageUrl?: string;
  videoUrl?: string;
  posterUrl?: string;
  images?: string[];
  panelTitle?: string;
  text?: string;
  author?: string;
}

const WORKS: Work[] = [
  {
    id: 1,
    category: 'videos',
    title: 'Wedding Invitation',
    subtitle: 'Personal Milestone',
    description:
      'Invitation to attend our wedding.',
    type: 'youtube',
    youtubeId: 'J3fHgaNuiMM',
    size: 'large',
    tags: ['Video', 'Wedding', 'Personal'],
    date: '2025',
  },
  {
    id: 2,
    category: 'ai-art',
    title: 'Last Day Email',
    subtitle: 'Creative Expression',
    description:
      'A creative visual narrative exploring workplace culture and last-day traditions through artistic expression.',
    type: 'image',
    imageUrl: '/images/creative-works/last-day-email.webp',
    size: 'tall',
    tags: ['Digital Art', 'Comic', 'Creative'],
    date: '2025',
  },
  {
    id: 3,
    category: 'videos',
    title: 'The Museum of Me',
    subtitle: 'Personal Journey',
    description:
      'About me.',
    type: 'youtube',
    youtubeId: 'XSHtMh7Oi8s',
    size: 'large',
    tags: ['Video', 'Personal', 'Journey'],
    date: '2025',
  },
  {
    id: 4,
    category: 'videos',
    title: 'Alive and Kicking',
    subtitle: 'Fundraiser Campaign',
    description:
      'A fundraiser video',
    type: 'youtube',
    youtubeId: 'XRGEpnPXC40',
    size: 'large',
    tags: ['Video', 'Fundraiser', 'Campaign'],
    date: '2025',
  },
  {
    id: 5,
    category: 'videos',
    title: 'Innovation, Foresight and Business Design',
    subtitle: 'Product Pitch',
    description:
      'Product Pitch',
    type: 'youtube',
    youtubeId: '_pNncBm1Pn0',
    size: 'large',
    tags: ['Video', 'Business', 'Innovation'],
    date: '2025',
  },
  {
    id: 6,
    category: 'videos',
    title: 'Parvathi-Shiva Divine Union',
    subtitle: 'AI-Generated Mythology',
    description:
      'AI-generated visualization of the divine union between Parvathi and Shiva, bringing ancient Hindu mythology to life through modern video generation technology.',
    type: 'mobile-video',
    videoUrl: '/videos/Parvathi-Shiva.mp4',
    posterUrl: '/videos/Parvathi-Shiva.webp',
    size: 'tall',
    tags: ['AI Video', 'Hindu Mythology', 'Mobile'],
    date: '2025',
  },
  {
    id: 7,
    category: 'photography',
    title: 'Photography Collection',
    subtitle: 'Creative Photography Series',
    description:
      'Five moments captured through creative photography — exploring form, light, and composition through the lens.',
    type: 'photo-panel',
    size: 'wide',
    images: [
      '/images/creative-works/F1.webp',
      '/images/creative-works/F2.webp',
      '/images/creative-works/F3.webp',
      '/images/creative-works/F4.webp',
      '/images/creative-works/F5.webp',
    ],
    panelTitle: 'Photography Collection',
    tags: ['Photography', 'Series', 'Creative'],
    date: '2025',
  },
  {
    id: 8,
    category: 'ai-art',
    title: 'AI Evolution',
    subtitle: 'Transformation Series',
    description:
      'Four AI-generated concepts exploring themes of time, transformation, preservation, and growth — from hourglass to butterfly, bonsai to seedling.',
    type: 'photo-panel',
    size: 'wide',
    images: [
      '/images/creative-works/AI1.webp',
      '/images/creative-works/AI2.webp',
      '/images/creative-works/AI3.webp',
      '/images/creative-works/AI4.webp',
    ],
    panelTitle: 'AI Evolution',
    tags: ['AI Art', 'Conceptual', 'Series'],
    date: '2025',
  },
  {
    id: 9,
    category: 'videos',
    title: 'Evolution in Motion',
    subtitle: 'AI Video Art',
    description:
      'An AI-generated video exploring the concept of evolution and transformation through dynamic visual storytelling.',
    type: 'mobile-video',
    videoUrl: '/videos/AIEvolution.webm',
    posterUrl: '/videos/AIEvolution.webp',
    size: 'standard',
    tags: ['AI Video', 'Evolution', 'Art'],
    date: '2025',
  },
  {
    id: 10,
    category: 'photography',
    title: 'Divine Family',
    subtitle: 'Traditional Art',
    description:
      'Traditional Hindu painting depicting the divine family of Shiva, Parvati, and their child — a beautiful representation of sacred mythology.',
    type: 'image',
    imageUrl: '/images/creative-works/divine.webp',
    size: 'tall',
    tags: ['Traditional Art', 'Hindu Mythology', 'Family'],
    date: '2025',
  },
  {
    id: 11,
    category: 'photography',
    title: 'Forever Marilyn',
    subtitle: 'Chicago Landmark',
    description:
      'Iconic statue of Marilyn Monroe against the historic Chicago Tribune building — capturing a moment of American cultural history.',
    type: 'image',
    imageUrl: '/images/creative-works/marilyn.webp',
    size: 'wide',
    tags: ['Street Photography', 'Chicago', 'Landmark'],
    date: '2025',
  },
  {
    id: 12,
    category: 'photography',
    title: 'Sacred Temple',
    subtitle: 'Architecture',
    description:
      'Colorful Hindu temple architecture showcasing intricate details and vibrant traditional design.',
    type: 'image',
    imageUrl: '/images/creative-works/temple.webp',
    size: 'standard',
    tags: ['Architecture', 'Temple', 'Traditional'],
    date: '2025',
  },
  {
    id: 13,
    category: 'photography',
    title: 'Dancing Flames',
    subtitle: 'Fire Photography',
    description:
      'Mesmerizing capture of flames in motion — exploring the dynamic beauty and energy of fire.',
    type: 'image',
    imageUrl: '/images/creative-works/flames.webp',
    size: 'tall',
    tags: ['Fire', 'Motion', 'Energy'],
    date: '2025',
  },
  {
    id: 14,
    category: 'photography',
    title: 'Solitary Bloom',
    subtitle: 'Nature Photography',
    description:
      'A single flower standing tall against a soft background — celebrating the simple beauty of nature.',
    type: 'image',
    imageUrl: '/images/creative-works/flower.webp',
    size: 'standard',
    tags: ['Nature', 'Flower', 'Minimal'],
    date: '2025',
  },
  {
    id: 15,
    category: 'photography',
    title: 'Coastal Panorama',
    subtitle: 'Beach Landscape',
    description:
      'Sweeping panoramic view of beach scenery — capturing the vast expanse of coastline and sea.',
    type: 'image',
    imageUrl: '/images/creative-works/beachpanorama.webp',
    size: 'wide',
    tags: ['Landscape', 'Beach', 'Panorama'],
    date: '2025',
  },
  {
    id: 16,
    category: 'quotes-poems',
    title: 'If',
    subtitle: 'Classic Poetry',
    description:
      'Rudyard Kipling\'s timeless poem about resilience, integrity, and what it means to be truly human — a guide for facing life\'s trials with grace and strength.',
    type: 'poem',
    author: 'Rudyard Kipling',
    size: 'wide',
    tags: ['Poetry', 'Classic', 'Inspiration'],
    date: '1910',
    text: `If you can keep your head when all about you
    Are losing theirs and blaming it on you,
If you can trust yourself when all men doubt you,
    But make allowance for their doubting too;
If you can wait and not be tired by waiting,
    Or being lied about, don't deal in lies,
Or being hated, don't give way to hating,
    And yet don't look too good, nor talk too wise:

If you can dream—and not make dreams your master;
    If you can think—and not make thoughts your aim;
If you can meet with Triumph and Disaster
    And treat those two impostors just the same;
If you can bear to hear the truth you've spoken
    Twisted by knaves to make a trap for fools,
Or watch the things you gave your life to, broken,
    And stoop and build 'em up with worn-out tools:

If you can make one heap of all your winnings
    And risk it on one turn of pitch-and-toss,
And lose, and start again at your beginnings
    And never breathe a word about your loss;
If you can force your heart and nerve and sinew
    To serve your turn long after they are gone,
And so hold on when there is nothing in you
    Except the Will which says to them: 'Hold on!'

If you can talk with crowds and keep your virtue,
    Or walk with Kings—nor lose the common touch,
If neither foes nor loving friends can hurt you,
    If all men count with you, but none too much;
If you can fill the unforgiving minute
    With sixty seconds' worth of distance run,
Yours is the Earth and everything that's in it,
    And—which is more—you'll be a Man, my son!`,
  },
  {
    id: 17,
    category: 'quotes-poems',
    title: 'Impossible is Nothing',
    subtitle: 'Adidas Manifesto',
    description:
      'The iconic Adidas quote that challenges us to push beyond perceived limitations and redefine what\'s possible.',
    type: 'quote',
    author: 'Adidas',
    size: 'wide',
    tags: ['Motivation', 'Sports', 'Inspiration'],
    date: '2004',
    text: `Impossible is just a big word
thrown around by small men,
who find it easier to live in a world
given to them, than to explore
the power they have to change it.

Impossible is not a fact, it's an opinion.
Impossible is not a declaration, it's a dare.
Impossible is potential.
Impossible is temporary.
Impossible is nothing.`,
  },
  {
    id: 18,
    category: 'quotes-poems',
    title: 'I am Me',
    subtitle: 'Self-Acceptance',
    description:
      'Virginia Satir\'s powerful declaration of self-ownership and authenticity — a profound exploration of what it means to fully accept and embrace who you are.',
    type: 'quote',
    author: 'Virginia Satir',
    size: 'wide',
    tags: ['Self-Discovery', 'Psychology', 'Inspiration'],
    date: '1975',
    text: `I am Me. In all the world, there is no one else exactly like me. Everything that comes out of me is authentically mine, because I alone chose it -- I own everything about me: my body, my feelings, my mouth, my voice, all my actions, whether they be to others or myself. I own my fantasies, my dreams, my hopes, my fears. I own my triumphs and successes, all my failures and mistakes. Because I own all of me, I can become intimately acquainted with me. By so doing, I can love me and be friendly with all my parts. I know there are aspects about myself that puzzle me, and other aspects that I do not know -- but as long as I am friendly and loving to myself, I can courageously and hopefully look for solutions to the puzzles and ways to find out more about me. However I look and sound, whatever I say and do, and whatever I think and feel at a given moment in time is authentically me. If later some parts of how I looked, sounded, thought, and felt turn out to be unfitting, I can discard that which is unfitting, keep the rest, and invent something new for that which I discarded. I can see, hear, feel, think, say, and do. I have the tools to survive, to be close to others, to be productive, and to make sense and order out of the world of people and things outside of me. I own me, and therefore, I can engineer me. I am me, and I am Okay.`,
  },
  {
    id: 19,
    category: 'quotes-poems',
    title: 'Traffic Light Wisdom',
    subtitle: 'Observational Comedy',
    description:
      'Mitch Hedberg\'s brilliant observation about the reverse logic of bananas and traffic lights — a perfect example of his unique comedic perspective.',
    type: 'quote',
    author: 'Mitch Hedberg',
    size: 'wide',
    tags: ['Comedy', 'Observation', 'Humor'],
    date: '2003',
    text: `With a stop light, green means 'go' and yellow means 'slow down'. With a banana, however, it is quite the opposite. Yellow means 'go', green means 'whoa, slow down', and red means 'where the heck did you get that banana?'`,
  },
  {
    id: 20,
    category: 'quotes-poems',
    title: 'Run Every Morning',
    subtitle: 'Survival Philosophy',
    description:
      'Thomas L. Friedman\'s powerful metaphor about survival, competition, and the relentless drive required to thrive in life.',
    type: 'quote',
    author: 'Thomas L. Friedman',
    size: 'wide',
    tags: ['Motivation', 'Business', 'Philosophy'],
    date: '2005',
    text: `Every morning in Africa, a gazelle wakes up. It knows it must run faster than the fastest lion or it will be killed. Every morning a lion wakes up. It knows it must outrun the slowest gazelle or it will starve to death. It doesn't matter whether you are a lion or a gazelle. When the sun comes up, you better start running.`,
  },
  {
    id: 21,
    category: 'quotes-poems',
    title: 'The Delusion of Significance',
    subtitle: 'Self-Discovery',
    description:
      'Chuck Lorre on the liberating realization that people are too focused on their own lives to obsess over yours — freedom through invisibility.',
    type: 'quote',
    author: 'Chuck Lorre',
    size: 'wide',
    tags: ['Psychology', 'Self-Discovery', 'Freedom'],
    date: '2010',
    text: `I recently pierced the veil of a long-standing delusion which I had considered to be reality. The delusion was simply this: I thought people were deeply aware of me. I thought the things going on in my life -- my work, relationships, problems, joys, thoughts, insights, attitudes, tastes, desires, fears, good hair days, bad hair days, choice of pants (that's right, choice of pants), etc. were all of some significance to other people. I'm not certain, but I think the delusion is a twisted sort of family heirloom, a neurotic hand-me-down of the fiercely-held immigrant desire to fit in, to be acceptable. Be that as it may, the impact of this hallucination has been a constant state of low-grade anxiety. While it's still a little early to tell, it appears that freedom from it will create an enormous sense of relief and... well... freedom. You people out there, kind and considerate though you may be, don't really give a rat's ass about my life. You give a rat's ass about your life. This means I need no longer obsess over what others think of me (they don't). This means that I am, much to my amazement, more or less invisible. But most importantly, this means that I can begin living a fearless, delusion-free life that is fundamentally true to my basic, God-given nature. All that's left to do is discover what kind of pants my basic, God-given nature looks good in.`,
  },
  {
    id: 22,
    category: 'quotes-poems',
    title: 'Mental Bees',
    subtitle: 'Overthinking',
    description:
      'Chuck Lorre\'s vivid metaphor comparing thoughts to a swarm of bees — exploring the idea that we never truly perceive reality directly, only through our mental filters.',
    type: 'quote',
    author: 'Chuck Lorre',
    size: 'wide',
    tags: ['Philosophy', 'Psychology', 'Thoughts'],
    date: '2011',
    text: `I believe I think too much. I believe I'm literally drowning in a thick swamp of thoughts. No, swamp's not right. It's more like being in the middle of a swarm of bees, all of them flying insanely about, occasionally stinging for no apparent reason. Yup, bees, definitely -- thoughts are bees. In fact, I believe my entire understanding of the world is based on my thoughts, which are generated by my emotions, which are generated by ... well, I guess my reaction to stuff that happens. Anyway, I understand the world through the filter of my thoughts and emotions. If this is pretty much how you understand the world, it brings up an interesting concept. Probably since we were infants, none of us have directly perceived this world we live in. What does it mean to directly perceive something? Well, I suppose it would mean to be totally with that thing, as opposed to observing and thinking about it. It's a duality issue. Here's me, here's you. here's me, here's the sofa. Ya dig where this is going? We live on a planet dominated by a race of beings whose only connection to reality is constantly buzzing, mental bees. We're all walking through life in a dream state that is, at best, a funhouse mirror-image of what's really out there. It makes you think, doesn't it? Ouch! Dammit!`,
  },
  {
    id: 23,
    category: 'quotes-poems',
    title: 'Method in Madness',
    subtitle: 'Philosophy of Insanity',
    description:
      'G.K. Chesterton\'s paradoxical observation that madness often arises from being too methodical, not from chaos.',
    type: 'quote',
    author: 'G.K. Chesterton',
    size: 'wide',
    tags: ['Philosophy', 'Paradox', 'Madness'],
    date: '1909',
    text: `He may be mad, but there's method in his madness. There nearly always is method in madness. It's what drives men mad, being methodical.`,
  },
  {
    id: 24,
    category: 'quotes-poems',
    title: 'Who\'s We?',
    subtitle: 'Political Pragmatism',
    description:
      'An episode from the July Revolution of 1830 in France, illustrating Talleyrand\'s masterful political opportunism and the art of choosing the winning side.',
    type: 'quote',
    author: 'Talleyrand',
    size: 'wide',
    tags: ['History', 'Politics', 'Strategy'],
    date: '1830',
    text: `After three days of riots, the statesman Talleyrand was sitting by his window in Paris and listening to the bells pealing away in Paris that signaled the end of the riots. "We're winning" he muttered. "Who's we?" his assistant, asked him. "Shush," said Talleyrand, "I'll tell you who we are tomorrow."`,
  },
  {
    id: 25,
    category: 'quotes-poems',
    title: 'Live Deliberately',
    subtitle: 'Transcendentalist Philosophy',
    description:
      'Henry David Thoreau\'s iconic passage from Walden about living with intention, stripping away the unnecessary, and extracting the essence of life.',
    type: 'quote',
    author: 'Henry David Thoreau',
    size: 'wide',
    tags: ['Philosophy', 'Nature', 'Transcendentalism'],
    date: '1854',
    text: `I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived — I did not wish to live what was not life, living is so dear; nor did I wish to practice resignation, unless it was quite necessary. I wanted to live deep and suck out all the marrow of life, to live so sturdily and Spartan-like as to put to rout all that was not life, to cut a broad swath and shave close, to drive life into a corner, and reduce it to its lowest terms...`,
  },
  {
    id: 26,
    category: 'quotes-poems',
    title: 'Invictus',
    subtitle: 'Victorian Poetry',
    description:
      'William Ernest Henley\'s powerful poem about resilience and the unconquerable human spirit — written from a hospital bed, it has inspired generations with its message of self-mastery in the face of adversity.',
    type: 'poem',
    author: 'William Ernest Henley',
    size: 'wide',
    tags: ['Poetry', 'Resilience', 'Classic'],
    date: '1875',
    text: `Out of the night that covers me,
Black as the pit from pole to pole,
I thank whatever gods may be
For my unconquerable soul.

In the fell clutch of circumstance
I have not winced nor cried aloud.
Under the bludgeonings of chance
My head is bloody, but unbowed.

Beyond this place of wrath and tears
Looms but the Horror of the shade,
And yet the menace of the years
Finds and shall find me unafraid.

It matters not how strait the gate,
How charged with punishments the scroll,
I am the master of my fate:
I am the captain of my soul.`,
  },
  {
    id: 27,
    category: 'quotes-poems',
    title: 'Bombay',
    subtitle: 'Ode to a City',
    description:
      'Rudyard Kipling\'s affectionate tribute to the city of Bombay (now Mumbai), the place of his birth — capturing the essence of a vibrant port city where East meets West.',
    type: 'quote',
    author: 'Rudyard Kipling',
    size: 'standard',
    tags: ['Poetry', 'Place', 'Memory'],
    date: '1894',
    text: `Bombay - Maximum City!
Mother of Cities to me,
For I was born in her gate,
Between the palms and the sea,
Where the world-end steamers wait.`,
  },
  {
    id: 28,
    category: 'quotes-poems',
    title: 'Bhaja Govindam',
    subtitle: 'Sanskrit Hymn',
    description:
      'Adi Shankaracharya\'s immortal composition urging us to turn away from worldly pursuits and focus on spiritual awakening — selected verses divinely rendered by MS Subbulakshmi.',
    type: 'poem',
    author: 'Adi Shankaracharya',
    size: 'wide',
    tags: ['Sanskrit', 'Spiritual', 'Vedanta'],
    date: '8th Century',
    text: `Worship Govinda, Worship Govinda, Worship Govinda.
Oh fool! Rules of Grammar will not save you at the time of your death.

Oh fool! Give up your thirst to amass wealth, devote your mind to thoughts to the Real.
Be content with what comes through actions already performed in the past.

Do not boast of wealth, friends, and youth. Each one of these is destroyed within a minute.
Free yourself from the illusion of the world of Maya and attain the timeless Truth.

Born again, death again, birth again to stay in the mother's womb!
It is indeed hard to cross this boundless ocean of samsara.
Oh Murari! Redeem me through Thy mercy.`,
  },
  {
    id: 29,
    category: 'quotes-poems',
    title: 'Scarcity of Resolve',
    subtitle: 'Career Wisdom',
    description:
      'Wayne Dyer\'s powerful reminder that the only thing preventing us from making a living at what we love is our own resolve to make it happen.',
    type: 'quote',
    author: 'Wayne Dyer',
    size: 'standard',
    tags: ['Motivation', 'Career', 'Resolve'],
    date: '2000s',
    text: `There's no scarcity of opportunity to make a living at what you love. There is only a scarcity of resolve to make it happen.`,
  },
  {
    id: 30,
    category: 'quotes-poems',
    title: 'With a Little Help from my Friends',
    subtitle: 'Beatles Classic',
    description:
      'Lennon-McCartney\'s timeless celebration of friendship, support, and the fundamental human need for connection and love.',
    type: 'poem',
    author: 'John Lennon and Paul McCartney',
    size: 'wide',
    tags: ['Music', 'Friendship', 'Love'],
    date: '1967',
    text: `What would you do if I sang out of tune,
Would you stand up and walk out on me?
Lend me your ears and I'll sing you a song
And I'll try not to sing out of key.

Oh, I get by with a little help from my friends
Mm, I get high with a little help from my friends
Mm, gonna try with a little help from my friends

Do you need anybody
I need somebody to love
Could it be anybody
I want somebody to love.`,
  },
  {
    id: 31,
    category: 'quotes-poems',
    title: 'Kitchen Appliance Naming Institute',
    subtitle: 'Observational Comedy',
    description:
      'Mitch Hedberg\'s brilliantly absurd take on the simple logic behind naming kitchen appliances — just add "-er" to what it does.',
    type: 'quote',
    author: 'Mitch Hedberg',
    size: 'standard',
    tags: ['Comedy', 'Observation', 'Absurd'],
    date: '2000s',
    text: `I wanna get a job naming kitchen appliance. Seems like the easiest job ever. You know, refrigerator, toaster, blender...you just say what the thing does and then you add '-er'. Kitchen Appliance Naming Institute. "What does this do?" "It keeps shit fresh." "Well, that's a 'fresher'. I'm going on break."`,
  },
];

/* ─── helper: video type badge icon ─── */
function MediaBadge({ type, isDark }: { type: string; isDark: boolean }) {
  const bg = isDark ? 'rgba(249,234,225,0.15)' : 'rgba(125,79,80,0.1)';
  const color = isDark ? PALETTE.mauve : PALETTE.indigoVelvet;
  const labels: Record<string, string> = {
    youtube: 'YouTube',
    'mobile-video': 'Mobile',
    image: 'Photo',
    'photo-panel': 'Series',
    poem: 'Poem',
    quote: 'Quote',
  };
  const icons: Record<string, string> = {
    youtube: '▶',
    'mobile-video': '📱',
    image: '◎',
    'photo-panel': '▤',
    poem: '✍',
    quote: '❝',
  };
  return (
    <span
      style={{
        position: 'absolute',
        top: 18,
        left: 18,
        zIndex: 3,
        padding: '4px 10px',
        borderRadius: 100,
        background: bg,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        fontSize: 10,
        fontFamily: 'var(--font-funnel-sans)',
        color,
        letterSpacing: 1.2,
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        border: `1px solid ${isDark ? 'rgba(249,234,225,0.12)' : 'rgba(125,79,80,0.08)'}`,
      }}
    >
      <span style={{ fontSize: 11 }}>{icons[type]}</span>
      {labels[type]}
    </span>
  );
}

/* ─── Lightbox Modal ─── */
function Lightbox({
  work,
  onClose,
  isDark,
}: {
  work: Work;
  onClose: () => void;
  isDark: boolean;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!work) return null;

  const accent = isDark ? PALETTE.mauveMagic : PALETTE.royalViolet;
  const textPrimary = isDark ? 'rgba(255,255,255,0.92)' : 'rgba(26,18,16,0.92)';
  const textSecondary = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(26,18,16,0.55)';
  const cardBg = isDark ? 'rgba(26,18,16,0.96)' : 'rgba(255,255,255,0.97)';
  const border = isDark ? 'rgba(204,139,134,0.12)' : 'rgba(125,79,80,0.1)';

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isDark ? 'rgba(20,14,12,0.88)' : 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        animation: 'lbFadeIn 0.3s ease',
        padding: 24,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 900,
          maxHeight: '90vh',
          overflow: 'auto',
          background: cardBg,
          borderRadius: 20,
          border: `1px solid ${border}`,
          boxShadow: isDark
            ? '0 40px 100px rgba(125,79,80,0.25)'
            : '0 40px 100px rgba(125,79,80,0.12)',
          animation: 'lbSlideUp 0.35s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'sticky',
            top: 16,
            float: 'right',
            marginRight: 16,
            marginTop: 16,
            zIndex: 10,
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: `1px solid ${border}`,
            background: isDark ? 'rgba(36,0,70,0.8)' : 'rgba(255,255,255,0.9)',
            color: textPrimary,
            cursor: 'pointer',
            fontSize: 18,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(8px)',
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Media */}
        <div style={{ width: '100%', position: 'relative' }}>
          {work.type === 'photo-panel' ? (
            <div
              style={{
                borderRadius: '20px 20px 0 0',
                overflow: 'hidden',
                padding: 20,
                background: isDark
                  ? `linear-gradient(135deg, ${PALETTE.darkAmethyst2}, ${PALETTE.darkAmethyst1})`
                  : `linear-gradient(135deg, #fdf5f0, #f9eae1)`,
                position: 'relative',
              }}
            >
              {/* Subtle dot texture */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: isDark ? 0.04 : 0.06,
                  backgroundImage: `radial-gradient(${isDark ? PALETTE.mauveMagic : PALETTE.indigoVelvet} 1px, transparent 1px)`,
                  backgroundSize: '16px 16px',
                  zIndex: 0,
                  borderRadius: '20px 20px 0 0',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  gap: 14,
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {work.images?.map((url: string, imgIdx: number) => (
                  <div
                    key={imgIdx}
                    style={{
                      flex: '1 1 0',
                      maxWidth: work.images && work.images.length <= 3 ? 260 : 'none',
                      borderRadius: 10,
                      overflow: 'hidden',
                      border: `3px solid ${isDark ? PALETTE.indigoVelvet : PALETTE.mauve}`,
                      boxShadow: isDark
                        ? `0 6px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(204,139,134,0.08)`
                        : `0 6px 24px rgba(125,79,80,0.12), 0 0 0 1px rgba(125,79,80,0.05)`,
                      background: isDark ? '#1a1210' : '#fff',
                      position: 'relative',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                  >
                    <img
                      src={url}
                      alt={`${work.title} — photo ${imgIdx + 1}`}
                      style={{
                        width: '100%',
                        aspectRatio: '3/4',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : work.type === 'youtube' ? (
            <div
              style={{
                aspectRatio: '16/9',
                background: '#000',
                borderRadius: '20px 20px 0 0',
                overflow: 'hidden',
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${work.youtubeId}?rel=0`}
                title={work.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ display: 'block' }}
              />
            </div>
          ) : work.type === 'mobile-video' ? (
            <div
              style={{
                aspectRatio: '16/9',
                background: '#000',
                borderRadius: '20px 20px 0 0',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <video
                controls
                playsInline
                poster={work.posterUrl}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              >
                <source src={work.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : work.type === 'poem' || work.type === 'quote' ? (
            <div
              style={{
                borderRadius: '20px 20px 0 0',
                overflow: 'hidden',
                padding: '40px 48px',
                background: isDark
                  ? `linear-gradient(135deg, ${PALETTE.darkAmethyst2}, ${PALETTE.darkAmethyst1})`
                  : `linear-gradient(135deg, #fdf5f0, #f9eae1)`,
                position: 'relative',
                minHeight: 300,
              }}
            >
              {/* Subtle texture */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: isDark ? 0.03 : 0.05,
                  backgroundImage: `radial-gradient(${isDark ? PALETTE.mauveMagic : PALETTE.indigoVelvet} 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                  zIndex: 0,
                }}
              />
              {/* Text content */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  fontFamily: work.type === 'poem' ? 'Georgia, serif' : 'var(--font-funnel-display)',
                  fontSize: work.type === 'poem' ? 16 : 20,
                  lineHeight: work.type === 'poem' ? 1.8 : 1.6,
                  color: textPrimary,
                  whiteSpace: 'pre-wrap',
                  fontStyle: work.type === 'poem' ? 'italic' : 'normal',
                  maxWidth: 720,
                  margin: '0 auto',
                }}
              >
                {work.text}
              </div>
              {/* Author attribution */}
              {work.author && (
                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    marginTop: 28,
                    textAlign: 'right',
                    fontFamily: 'var(--font-funnel-sans)',
                    fontSize: 13,
                    color: accent,
                    letterSpacing: 1.2,
                    textTransform: 'uppercase',
                  }}
                >
                  — {work.author}
                </div>
              )}
            </div>
          ) : (
            <img
              src={work.imageUrl}
              alt={work.title}
              style={{
                width: '100%',
                maxHeight: 500,
                objectFit: 'cover',
                borderRadius: '20px 20px 0 0',
                display: 'block',
              }}
            />
          )}
        </div>

        {/* Info */}
        <div style={{ padding: '28px 32px 32px' }}>
          <span
            style={{
              fontFamily: 'var(--font-funnel-sans)',
              fontSize: 11,
              color: accent,
              letterSpacing: 2.5,
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: 8,
            }}
          >
            {work.subtitle}
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-funnel-display)',
              fontSize: 30,
              fontWeight: 700,
              color: textPrimary,
              lineHeight: 1.2,
              marginBottom: 14,
              letterSpacing: '-0.5px',
            }}
          >
            {work.title}
          </h2>
          <p
            style={{
              fontSize: 15,
              color: textSecondary,
              lineHeight: 1.75,
              marginBottom: 20,
              maxWidth: 640,
            }}
          >
            {work.description}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
            {work.tags.map((tag: string) => (
              <span
                key={tag}
                style={{
                  padding: '5px 12px',
                  borderRadius: 100,
                  fontSize: 11,
                  fontFamily: 'var(--font-funnel-sans)',
                  letterSpacing: 0.5,
                  color: accent,
                  background: isDark
                    ? 'rgba(204,139,134,0.08)'
                    : 'rgba(125,79,80,0.06)',
                  border: `1px solid ${isDark ? 'rgba(204,139,134,0.15)' : 'rgba(125,79,80,0.1)'}`,
                }}
              >
                {tag}
              </span>
            ))}
            <span
              style={{
                marginLeft: 'auto',
                fontFamily: 'var(--font-funnel-sans)',
                fontSize: 11,
                color: textSecondary,
                letterSpacing: 1,
              }}
            >
              {work.date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function CreativeWorks() {
  const [isDark, setIsDark] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [animateCards, setAnimateCards] = useState(true);

  // Split works into visual content and text content
  const visualWorks = WORKS.filter((w) => w.type !== 'poem' && w.type !== 'quote');
  const textWorks = WORKS.filter((w) => w.type === 'poem' || w.type === 'quote');

  // Filter based on active category
  const filteredVisualWorks =
    activeCategory === 'all'
      ? visualWorks
      : activeCategory === 'quotes-poems'
        ? []
        : visualWorks.filter((w) => w.category === activeCategory);

  const filteredTextWorks =
    activeCategory === 'all'
      ? textWorks
      : activeCategory === 'quotes-poems'
        ? textWorks
        : [];

  useEffect(() => {
    setAnimateCards(false);
    const t = setTimeout(() => setAnimateCards(true), 50);
    return () => clearTimeout(t);
  }, [activeCategory]);

  /* ─── theme tokens ─── */
  const t = isDark
    ? {
        bg: PALETTE.darkAmethyst1,
        bgGradient: `
          radial-gradient(ellipse 80% 50% at 15% 30%, ${PALETTE.indigoInk}22, transparent),
          radial-gradient(ellipse 60% 40% at 85% 60%, ${PALETTE.indigoVelvet}15, transparent),
          ${PALETTE.darkAmethyst1}
        `,
        cardBg: `rgba(42,31,29,0.35)`,
        cardBorder: 'rgba(204,139,134,0.1)',
        cardHoverBorder: 'rgba(204,139,134,0.3)',
        textPrimary: 'rgba(249,234,225,0.92)',
        textSecondary: 'rgba(249,234,225,0.45)',
        textMuted: 'rgba(249,234,225,0.25)',
        accent: PALETTE.royalViolet,
        accentSoft: PALETTE.lavenderPurple,
        filterBg: 'rgba(249,234,225,0.04)',
        filterBorder: 'rgba(249,234,225,0.08)',
        filterActiveBg: `${PALETTE.royalViolet}22`,
        filterActiveBorder: `${PALETTE.royalViolet}55`,
        toggleBg: 'rgba(249,234,225,0.06)',
        overlayGradient: `linear-gradient(180deg, transparent 30%, ${PALETTE.darkAmethyst1}cc 100%)`,
        glow: `0 8px 32px rgba(125,79,80,0.15)`,
        glass: 'blur(20px) saturate(1.5)',
      }
    : {
        bg: '#fdf8f5',
        bgGradient: `
          radial-gradient(ellipse 80% 50% at 15% 30%, ${PALETTE.mauve}33, transparent),
          radial-gradient(ellipse 60% 40% at 85% 60%, ${PALETTE.lavenderPurple}22, transparent),
          #fdf8f5
        `,
        cardBg: 'rgba(255,255,255,0.35)',
        cardBorder: 'rgba(125,79,80,0.08)',
        cardHoverBorder: 'rgba(125,79,80,0.2)',
        textPrimary: PALETTE.darkAmethyst1,
        textSecondary: 'rgba(26,18,16,0.55)',
        textMuted: 'rgba(26,18,16,0.28)',
        accent: PALETTE.indigoInk,
        accentSoft: PALETTE.indigoVelvet,
        filterBg: 'rgba(125,79,80,0.04)',
        filterBorder: 'rgba(125,79,80,0.1)',
        filterActiveBg: `${PALETTE.royalViolet}18`,
        filterActiveBorder: `${PALETTE.royalViolet}44`,
        toggleBg: 'rgba(125,79,80,0.06)',
        overlayGradient: 'linear-gradient(180deg, transparent 30%, rgba(253,248,245,0.85) 100%)',
        glow: `0 8px 32px ${PALETTE.indigoVelvet}18`,
        glass: 'blur(20px) saturate(1.4)',
      };

  /* ─── bento grid sizing: map size → CSS grid spans ─── */
  const sizeMap: Record<string, { gridColumn: string; gridRow: string }> = {
    large: { gridColumn: 'span 2', gridRow: 'span 2' },
    wide: { gridColumn: 'span 2', gridRow: 'span 1' },
    tall: { gridColumn: 'span 1', gridRow: 'span 2' },
    standard: { gridColumn: 'span 1', gridRow: 'span 1' },
    full: { gridColumn: 'span 3', gridRow: 'span 1' },
  };

  const categoryCount = (cat: string) =>
    cat === 'all' ? WORKS.length : WORKS.filter((w) => w.category === cat).length;

  return (
    <div
      style={{
        background: t.bgGradient,
        minHeight: '100vh',
        transition: 'background 0.5s ease',
        fontFamily: 'var(--font-funnel-sans)',
      }}
    >
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes lbFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes lbSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        @keyframes shimmerLine {
          0% {
            background-position: -300% 0;
          }
          100% {
            background-position: 300% 0;
          }
        }

        .bento-card {
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          border-left: 1px solid rgba(255, 255, 255, 0.08);
        }
        .bento-card:hover {
          transform: translateY(-6px) scale(1.015);
          z-index: 2;
        }
        .bento-card:hover .card-overlay {
          opacity: 1;
        }
        .bento-card:hover .card-img {
          transform: scale(1.06);
        }
        .bento-card:active {
          transform: translateY(-2px) scale(1.005);
        }

        .panel-photo-frame:hover {
          transform: translateY(-4px) scale(1.03) !important;
          box-shadow: 0 8px 32px rgba(125, 79, 80, 0.25),
            0 0 0 1px rgba(204, 139, 134, 0.2) !important;
          z-index: 10;
        }

        .card-overlay {
          position: absolute;
          inset: 8px;
          border-radius: 10px;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.35s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px;
        }
        .card-img {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .filter-chip {
          padding: 8px 18px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: var(--font-funnel-sans);
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          user-select: none;
          border: 1px solid;
        }

        .theme-toggle {
          width: 56px;
          height: 30px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          position: relative;
          transition: background 0.35s ease;
          display: flex;
          align-items: center;
          padding: 3px;
        }
        .theme-toggle .knob {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
        }

        .play-icon-overlay {
          position: absolute;
          inset: 8px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }
        .play-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          transition: all 0.3s ease;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .bento-card:hover .play-btn {
          transform: scale(1.12);
        }

        .shimmer-line {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            var(--shimmer-color) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmerLine 6s linear infinite;
        }

        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-card {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
          .panel-images-row {
            flex-direction: column !important;
          }
        }
      `}</style>

      {/* ═══ TOP BAR ═══ */}
      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '32px 32px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          animation: 'fadeInUp 0.5s ease both',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 10,
              background: `linear-gradient(135deg, ${PALETTE.royalViolet}, ${PALETTE.mauveMagic})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 14,
              fontWeight: 800,
              color: '#fff',
              fontFamily: 'var(--font-funnel-display)',
            }}
          >
            S
          </div>
          <span
            style={{
              fontFamily: 'var(--font-funnel-sans)',
              fontSize: 12,
              color: t.textMuted,
              letterSpacing: 1.5,
            }}
          >
            Sunil Iyer
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Home button */}
          <Link
            href="/"
            className="home-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              padding: '7px 16px',
              borderRadius: 100,
              background: isDark
                ? 'rgba(204,139,134,0.08)'
                : 'rgba(125,79,80,0.05)',
              border: `1px solid ${isDark ? 'rgba(204,139,134,0.15)' : 'rgba(125,79,80,0.1)'}`,
              color: t.accent,
              textDecoration: 'none',
              fontFamily: 'var(--font-funnel-sans)',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: 0.3,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Home
          </Link>

          {/* Theme toggle */}
          <button
            className="theme-toggle"
            onClick={() => setIsDark(!isDark)}
            style={{
              background: isDark
                ? `linear-gradient(135deg, ${PALETTE.darkAmethyst2}, ${PALETTE.indigoInk})`
                : `linear-gradient(135deg, ${PALETTE.mauve}44, ${PALETTE.mauveMagic}33)`,
              border: `1px solid ${isDark ? 'rgba(204,139,134,0.15)' : 'rgba(125,79,80,0.12)'}`,
            }}
            aria-label="Toggle theme"
          >
            <div
              className="knob"
              style={{
                transform: isDark ? 'translateX(0)' : 'translateX(26px)',
                background: isDark
                  ? `linear-gradient(135deg, ${PALETTE.indigoVelvet}, ${PALETTE.royalViolet})`
                  : `linear-gradient(135deg, ${PALETTE.mauveMagic}, ${PALETTE.lavenderPurple})`,
                boxShadow: isDark
                  ? `0 2px 8px ${PALETTE.indigoVelvet}80`
                  : `0 2px 8px ${PALETTE.mauveMagic}60`,
              }}
            >
              {isDark ? '🌙' : '☀️'}
            </div>
          </button>
        </div>
      </div>

      {/* ═══ HEADER ═══ */}
      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '48px 32px 0',
          animation: 'fadeInUp 0.6s ease both',
          animationDelay: '0.1s',
        }}
      >
        <div
          style={{
            background: isDark
              ? 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
              : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
            borderRadius: 20,
            padding: '48px 80px',
            boxShadow: isDark
              ? `0 10px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)`
              : `0 10px 40px rgba(125,79,80,0.08), inset 0 1px 0 rgba(255,255,255,0.8)`,
            marginBottom: 36,
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div
              style={{
                width: 28,
                height: 2,
                borderRadius: 2,
                background: `linear-gradient(90deg, ${t.accent}, transparent)`,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-funnel-sans)',
                fontSize: 11,
                color: t.accent,
                letterSpacing: 3,
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              Creative Portfolio
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-funnel-display)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 600,
              color: t.textPrimary,
              lineHeight: 1.3,
              letterSpacing: '-0.5px',
              marginBottom: 18,
              fontStyle: 'italic',
              transition: 'color 0.4s ease',
              padding: '0 8px',
            }}
          >
            Where Code Meets{' '}
            <span
              style={{
                background: `linear-gradient(135deg, ${PALETTE.indigoInk}, ${PALETTE.royalViolet}, ${PALETTE.lavenderPurple})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Canvas
            </span>
          </h1>
          <p
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: t.textSecondary,
              maxWidth: 700,
              lineHeight: 1.65,
              margin: 0,
              transition: 'color 0.4s ease',
            }}
          >
            Things I&apos;ve made, things I&apos;ve found, things I keep coming back to — poems, quotes, videos, art, and the quiet threads that connect them all.
          </p>
        </div>
      </div>

      {/* ═══ FILTERS ═══ */}
      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '0 32px 12px',
          display: 'flex',
          gap: 10,
          flexWrap: 'wrap',
          alignItems: 'center',
          animation: 'fadeInUp 0.6s ease both',
          animationDelay: '0.2s',
        }}
      >
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              className="filter-chip"
              onClick={() => setActiveCategory(cat.id)}
              style={{
                background: isActive ? t.filterActiveBg : t.filterBg,
                borderColor: isActive ? t.filterActiveBorder : t.filterBorder,
                color: isActive ? t.accent : t.textSecondary,
                fontWeight: isActive ? 600 : 400,
              }}
            >
              {cat.label}
              {isActive && (
                <span
                  style={{
                    background: `linear-gradient(135deg, ${PALETTE.royalViolet}, ${PALETTE.mauveMagic})`,
                    color: '#fff',
                    borderRadius: 100,
                    padding: '1px 8px',
                    fontSize: 11,
                    fontWeight: 700,
                    fontFamily: 'var(--font-funnel-sans)',
                  }}
                >
                  {categoryCount(cat.id)}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Shimmer divider */}
      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        <div
          className="shimmer-line"
          style={{
            // @ts-expect-error - CSS custom property
            '--shimmer-color': isDark
              ? 'rgba(204,139,134,0.18)'
              : 'rgba(125,79,80,0.1)',
          }}
        />
      </div>

      {/* ═══ VISUAL CONTENT GRID ═══ */}
      {filteredVisualWorks.length > 0 && (
        <>
          <div
            style={{
              maxWidth: 1240,
              margin: '0 auto',
              padding: '28px 32px 0',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-funnel-display)',
                fontSize: 24,
                fontWeight: 600,
                color: t.textPrimary,
                marginBottom: 8,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <span>Visual Gallery</span>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: t.textMuted,
                }}
              >
                {filteredVisualWorks.length} {filteredVisualWorks.length === 1 ? 'item' : 'items'}
              </span>
            </h2>
          </div>
          <div
            className="bento-grid"
            style={{
              maxWidth: 1240,
              margin: '0 auto',
              padding: '16px 32px 48px',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridAutoRows: 240,
              gap: 18,
              gridAutoFlow: 'dense',
            }}
          >
            {filteredVisualWorks.map((work, i) => {
          // Calculate dynamic row spans for poems/quotes based on text length
          let dynamicSpans = sizeMap[work.size] || sizeMap.standard;
          let minH =
            work.size === 'large'
              ? 498
              : work.size === 'tall'
                ? 498
                : work.size === 'wide'
                  ? 240
                  : work.size === 'full'
                    ? 320
                    : 240;

          // For poems/quotes, calculate rows needed based on text length
          if ((work.type === 'poem' || work.type === 'quote') && work.text) {
            const textLength = work.text.length;
            const rowsNeeded = Math.ceil(textLength / 400); // Roughly 400 chars per row
            dynamicSpans = {
              gridColumn: 'span 2',
              gridRow: `span ${Math.max(1, Math.min(rowsNeeded, 4))}`, // Min 1, max 4 rows
            };
            minH = Math.max(1, Math.min(rowsNeeded, 4)) * 240 + (Math.max(1, Math.min(rowsNeeded, 4)) - 1) * 18; // Account for gaps
          }

          const spans = dynamicSpans;

          return (
            <div
              key={work.id}
              className="bento-card"
              onClick={() => setSelectedWork(work)}
              style={{
                ...spans,
                minHeight: minH,
                background: t.cardBg,
                border: `1px solid ${t.cardBorder}`,
                borderTop: `1px solid ${isDark ? 'rgba(249,234,225,0.1)' : 'rgba(255,255,255,0.5)'}`,
                borderLeft: `1px solid ${isDark ? 'rgba(249,234,225,0.07)' : 'rgba(255,255,255,0.35)'}`,
                boxShadow: `${t.glow}, inset 0 1px 0 ${isDark ? 'rgba(249,234,225,0.04)' : 'rgba(255,255,255,0.3)'}`,
                backdropFilter: t.glass,
                WebkitBackdropFilter: t.glass,
                ...(animateCards
                  ? {
                      animation: `fadeInUp 0.5s cubic-bezier(0.16,1,0.3,1) both`,
                      animationDelay: `${i * 0.06}s`,
                    }
                  : { opacity: 0 }),
                transition:
                  'all 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              {/* ─── PHOTO PANEL RENDERING ─── */}
              {work.type === 'photo-panel' ? (
                <>
                  {/* Panel surface background */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 8,
                      borderRadius: 10,
                      background: isDark
                        ? `linear-gradient(135deg, ${PALETTE.darkAmethyst2}, ${PALETTE.darkAmethyst1})`
                        : `linear-gradient(135deg, #fdf5f0, #f9eae1)`,
                      zIndex: 0,
                      overflow: 'hidden',
                    }}
                  />
                  {/* Subtle texture pattern */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 8,
                      borderRadius: 10,
                      zIndex: 0,
                      opacity: isDark ? 0.04 : 0.06,
                      backgroundImage: `radial-gradient(${isDark ? PALETTE.mauveMagic : PALETTE.indigoVelvet} 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />

                  {/* Panel header */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      right: 8,
                      zIndex: 6,
                      padding: '12px 20px',
                      borderRadius: '10px 10px 0 0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-funnel-display)',
                          fontSize: 15,
                          fontWeight: 700,
                          color: t.textPrimary,
                        }}
                      >
                        {work.title}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-funnel-sans)',
                        fontSize: 10,
                        color: t.accent,
                        letterSpacing: 2,
                        textTransform: 'uppercase',
                        background: isDark
                          ? 'rgba(204,139,134,0.08)'
                          : 'rgba(125,79,80,0.06)',
                        padding: '4px 10px',
                        borderRadius: 100,
                        border: `1px solid ${isDark ? 'rgba(204,139,134,0.15)' : 'rgba(125,79,80,0.1)'}`,
                      }}
                    >
                      {work.images?.length || 0} PHOTOS
                    </span>
                  </div>

                  {/* Individual framed photos */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      right: 8,
                      bottom: 8,
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '42px 18px 40px',
                      gap: 14,
                      zIndex: 2,
                    }}
                  >
                    {work.images?.map((url: string, imgIdx: number) => (
                      <div
                        key={imgIdx}
                        className="panel-photo-frame"
                        style={{
                          flex: '1 1 0',
                          maxWidth: work.images && work.images.length <= 3 ? 280 : 'none',
                          height: '100%',
                          borderRadius: 10,
                          overflow: 'hidden',
                          border: `3px solid ${isDark ? PALETTE.indigoVelvet : PALETTE.mauve}`,
                          boxShadow: isDark
                            ? `0 4px 20px rgba(0,0,0,0.5), 0 0 0 1px rgba(204,139,134,0.08)`
                            : `0 4px 20px rgba(125,79,80,0.12), 0 0 0 1px rgba(125,79,80,0.05)`,
                          position: 'relative',
                          background: isDark ? '#1a1210' : '#fff',
                          transition:
                            'transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease',
                        }}
                      >
                        <img
                          src={url}
                          alt={`${work.title} — photo ${imgIdx + 1}`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Bottom info bar */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 8,
                      left: 8,
                      right: 8,
                      zIndex: 5,
                      padding: '8px 20px 10px',
                      borderRadius: '0 0 10px 10px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div style={{ display: 'flex', gap: 6 }}>
                      {work.tags.slice(0, 3).map((tag: string) => (
                        <span
                          key={tag}
                          style={{
                            padding: '2px 8px',
                            borderRadius: 100,
                            fontSize: 9,
                            fontFamily: 'var(--font-funnel-sans)',
                            color: isDark ? PALETTE.mauve : PALETTE.indigoVelvet,
                            background: isDark
                              ? 'rgba(249,234,225,0.1)'
                              : 'rgba(125,79,80,0.06)',
                            border: `1px solid ${isDark ? 'rgba(249,234,225,0.12)' : 'rgba(125,79,80,0.08)'}`,
                            letterSpacing: 0.5,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-funnel-sans)',
                        fontSize: 10,
                        color: t.textMuted,
                        letterSpacing: 1,
                      }}
                    >
                      {work.panelTitle} · {work.date}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  {/* ─── STANDARD CARD RENDERING ─── */}
                  {/* Background image / video poster / poem & quote */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 8,
                      borderRadius: 10,
                      overflow: 'hidden',
                    }}
                  >
                    {work.type === 'poem' || work.type === 'quote' ? (
                      <>
                        {/* Frosted glass background for poem/quote */}
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: isDark
                              ? `linear-gradient(135deg, ${PALETTE.darkAmethyst2}, ${PALETTE.darkAmethyst1})`
                              : `linear-gradient(135deg, #fdf5f0, #f9eae1)`,
                          }}
                        />
                        {/* Subtle texture */}
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            opacity: isDark ? 0.04 : 0.06,
                            backgroundImage: `radial-gradient(${isDark ? PALETTE.mauveMagic : PALETTE.indigoVelvet} 1px, transparent 1px)`,
                            backgroundSize: '20px 20px',
                          }}
                        />
                        {/* Text preview */}
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            padding: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1,
                          }}
                        >
                          <div
                            style={{
                              fontFamily: work.type === 'poem' ? 'Georgia, serif' : 'var(--font-funnel-display)',
                              fontSize: work.type === 'poem' ? 14 : 16,
                              lineHeight: 1.6,
                              color: t.textPrimary,
                              textAlign: 'center',
                              maxWidth: '90%',
                              fontStyle: work.type === 'poem' ? 'italic' : 'normal',
                              whiteSpace: 'pre-wrap',
                            }}
                          >
                            {work.text}
                          </div>
                        </div>
                      </>
                    ) : work.type === 'youtube' ? (
                      <img
                        className="card-img"
                        src={`https://img.youtube.com/vi/${work.youtubeId}/maxresdefault.jpg`}
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : work.type === 'mobile-video' ? (
                      <img
                        className="card-img"
                        src={work.posterUrl}
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <img
                        className="card-img"
                        src={work.imageUrl}
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    )}
                    {/* Gradient overlay (always visible, except for poem/quote) */}
                    {work.type !== 'poem' && work.type !== 'quote' && (
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: t.overlayGradient,
                          zIndex: 1,
                        }}
                      />
                    )}
                  </div>

                  {/* Media badge */}
                  <MediaBadge type={work.type} isDark={isDark} />

                  {/* Play button for videos */}
                  {(work.type === 'youtube' || work.type === 'mobile-video') && (
                    <div className="play-icon-overlay">
                      <div
                        className="play-btn"
                        style={{
                          background: isDark
                            ? 'rgba(26,18,16,0.5)'
                            : 'rgba(255,255,255,0.5)',
                          border: `1.5px solid ${isDark ? 'rgba(204,139,134,0.3)' : 'rgba(125,79,80,0.2)'}`,
                          color: t.accent,
                        }}
                      >
                        {work.type === 'youtube' ? '▶' : '📱'}
                      </div>
                    </div>
                  )}

                  {/* Hover overlay with info */}
                  <div className="card-overlay" style={{ background: t.overlayGradient }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-funnel-sans)',
                        fontSize: 10,
                        color: t.accent,
                        letterSpacing: 2,
                        textTransform: 'uppercase',
                        marginBottom: 6,
                        fontWeight: 500,
                      }}
                    >
                      {work.subtitle}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-funnel-display)',
                        fontSize: work.size === 'large' || work.size === 'wide' ? 22 : 17,
                        fontWeight: 700,
                        color: t.textPrimary,
                        lineHeight: 1.2,
                        marginBottom: 8,
                      }}
                    >
                      {work.title}
                    </h3>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {work.tags.slice(0, 3).map((tag: string) => (
                        <span
                          key={tag}
                          style={{
                            padding: '2px 8px',
                            borderRadius: 100,
                            fontSize: 9,
                            fontFamily: 'var(--font-funnel-sans)',
                            color: isDark ? PALETTE.mauve : PALETTE.indigoVelvet,
                            background: isDark
                              ? 'rgba(249,234,225,0.1)'
                              : 'rgba(125,79,80,0.06)',
                            border: `1px solid ${isDark ? 'rgba(249,234,225,0.12)' : 'rgba(125,79,80,0.08)'}`,
                            letterSpacing: 0.5,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </>
              )}
            </div>
          );
        })}
      </div>
        </>
      )}

      {/* ═══ TEXT CONTENT GRID ═══ */}
      {filteredTextWorks.length > 0 && (
        <>
          <div
            style={{
              maxWidth: 1240,
              margin: '0 auto',
              padding: '28px 32px 0',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-funnel-display)',
                fontSize: 24,
                fontWeight: 600,
                color: t.textPrimary,
                marginBottom: 8,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <span>Words & Wisdom</span>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: t.textMuted,
                }}
              >
                {filteredTextWorks.length} {filteredTextWorks.length === 1 ? 'item' : 'items'}
              </span>
            </h2>
          </div>
          <div
            className="bento-grid"
            style={{
              maxWidth: 1240,
              margin: '0 auto',
              padding: '16px 32px 64px',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridAutoRows: 240,
              gap: 18,
              gridAutoFlow: 'dense',
            }}
          >
            {filteredTextWorks.map((work, i) => {
              // Calculate dynamic row spans for poems/quotes based on text length
              const textLength = work.text?.length || 0;
              const rowsNeeded = Math.ceil(textLength / 400); // Roughly 400 chars per row
              const dynamicSpans = {
                gridColumn: 'span 1',
                gridRow: `span ${Math.max(1, Math.min(rowsNeeded, 4))}`, // Min 1, max 4 rows
              };
              const minH = Math.max(1, Math.min(rowsNeeded, 4)) * 240 + (Math.max(1, Math.min(rowsNeeded, 4)) - 1) * 18;

              return (
                <div
                  key={work.id}
                  className="bento-card"
                  onClick={() => setSelectedWork(work)}
                  style={{
                    ...dynamicSpans,
                    minHeight: minH,
                    background: t.cardBg,
                    border: `1px solid ${t.cardBorder}`,
                    borderTop: `1px solid ${isDark ? 'rgba(249,234,225,0.1)' : 'rgba(255,255,255,0.5)'}`,
                    borderLeft: `1px solid ${isDark ? 'rgba(249,234,225,0.07)' : 'rgba(255,255,255,0.35)'}`,
                    boxShadow: `${t.glow}, inset 0 1px 0 ${isDark ? 'rgba(249,234,225,0.04)' : 'rgba(255,255,255,0.3)'}`,
                    backdropFilter: t.glass,
                    WebkitBackdropFilter: t.glass,
                    ...(animateCards
                      ? {
                          animation: `fadeInUp 0.5s cubic-bezier(0.16,1,0.3,1) both`,
                          animationDelay: `${(filteredVisualWorks.length + i) * 0.06}s`,
                        }
                      : { opacity: 0 }),
                    transition:
                      'all 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease, box-shadow 0.3s ease',
                  }}
                >
                  {/* Frosted glass background for poem/quote */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 8,
                      borderRadius: 10,
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: isDark
                          ? `linear-gradient(135deg, ${PALETTE.darkAmethyst2}, ${PALETTE.darkAmethyst1})`
                          : `linear-gradient(135deg, #fdf5f0, #f9eae1)`,
                      }}
                    />
                    {/* Subtle texture */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        opacity: isDark ? 0.04 : 0.06,
                        backgroundImage: `radial-gradient(${isDark ? PALETTE.mauveMagic : PALETTE.indigoVelvet} 1px, transparent 1px)`,
                        backgroundSize: '20px 20px',
                      }}
                    />
                    {/* Text content */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        padding: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1,
                        overflow: 'auto',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: work.type === 'poem' ? 'Georgia, serif' : 'var(--font-funnel-display)',
                          fontSize: work.type === 'poem' ? 14 : 16,
                          lineHeight: 1.6,
                          color: t.textPrimary,
                          textAlign: 'center',
                          maxWidth: '90%',
                          fontStyle: work.type === 'poem' ? 'italic' : 'normal',
                          whiteSpace: 'pre-wrap',
                        }}
                      >
                        {work.text}
                      </div>
                      {work.author && (
                        <div
                          style={{
                            marginTop: 16,
                            fontSize: 12,
                            color: t.accent,
                            fontFamily: 'var(--font-funnel-sans)',
                            letterSpacing: 1,
                          }}
                        >
                          — {work.author}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Media badge */}
                  <MediaBadge type={work.type} isDark={isDark} />

                  {/* Bottom info bar */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      zIndex: 3,
                      padding: '14px 16px',
                      background: isDark
                        ? 'linear-gradient(180deg, transparent, rgba(26,18,16,0.85) 40%)'
                        : 'linear-gradient(180deg, transparent, rgba(253,248,245,0.85) 40%)',
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: 'var(--font-funnel-display)',
                        fontSize: 14,
                        fontWeight: 600,
                        color: t.textPrimary,
                        lineHeight: 1.3,
                        marginBottom: 3,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {work.title}
                    </h4>
                    <span
                      style={{
                        fontFamily: 'var(--font-funnel-sans)',
                        fontSize: 10,
                        color: t.textMuted,
                        letterSpacing: 0.5,
                      }}
                    >
                      {work.category.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* ═══ STATS FOOTER ═══ */}
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px 60px' }}>
        <div
          className="shimmer-line"
          style={{
            // @ts-expect-error - CSS custom property
            '--shimmer-color': isDark
              ? 'rgba(204,139,134,0.15)'
              : 'rgba(125,79,80,0.08)',
            marginBottom: 32,
          }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          {[
            {
              label: 'Videos',
              count: WORKS.filter((w) => w.category === 'videos').length,
              gradient: `linear-gradient(135deg, ${PALETTE.royalViolet}, ${PALETTE.mauveMagic})`,
            },
            {
              label: 'Quotes & Poems',
              count: WORKS.filter((w) => w.category === 'quotes-poems').length,
              gradient: `linear-gradient(135deg, ${PALETTE.lavenderPurple}, ${PALETTE.mauve})`,
            },
            {
              label: 'AI Art',
              count: WORKS.filter((w) => w.category === 'ai-art').length,
              gradient: `linear-gradient(135deg, ${PALETTE.indigoVelvet}, ${PALETTE.royalViolet})`,
            },
            {
              label: 'Photos',
              count: WORKS.filter((w) => w.category === 'photography').length,
              gradient: `linear-gradient(135deg, ${PALETTE.mauveMagic}, ${PALETTE.mauve})`,
            },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center', flex: '1 1 100px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-funnel-sans)',
                  fontSize: 36,
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: 6,
                  background: s.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {s.count}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-funnel-sans)',
                  fontSize: 10,
                  color: t.textMuted,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ LIGHTBOX ═══ */}
      {selectedWork && (
        <Lightbox work={selectedWork} onClose={() => setSelectedWork(null)} isDark={isDark} />
      )}
    </div>
  );
}
