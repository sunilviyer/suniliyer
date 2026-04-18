'use client';

interface GardenSVGProps {
  isDark: boolean;
}

export default function GardenSVG({ isDark }: GardenSVGProps) {
  return (
    <svg
      viewBox="0 0 1600 900"
      className="garden-svg"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: '100%',
        height: 'auto',
        maxHeight: 'calc(100vh - 200px)',
        display: 'block',
      }}
    >
      <defs>
        {/* Gradients for sky */}
        <linearGradient id="skyGradientLight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#E0F6FF" />
        </linearGradient>
        <linearGradient id="skyGradientDark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0B1929" />
          <stop offset="100%" stopColor="#1a2332" />
        </linearGradient>

        {/* Grass gradient */}
        <linearGradient id="grassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7CB342" />
          <stop offset="100%" stopColor="#558B2F" />
        </linearGradient>

        {/* Glass effect for greenhouse */}
        <linearGradient id="glassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect
        width="800"
        height="400"
        fill={isDark ? "url(#skyGradientDark)" : "url(#skyGradientLight)"}
      />

      {/* Mountains (background) */}
      <path
        d="M 0 300 L 200 150 L 350 250 L 500 100 L 650 200 L 800 150 L 800 400 L 0 400 Z"
        fill={isDark ? "#2a3f5f" : "#8B9DC3"}
        opacity="0.6"
      />
      <path
        d="M 0 350 L 150 200 L 300 280 L 450 180 L 600 260 L 800 200 L 800 400 L 0 400 Z"
        fill={isDark ? "#1a2f4f" : "#6B7D9D"}
        opacity="0.5"
      />

      {/* Sun or Moon */}
      {isDark ? (
        <>
          {/* Moon */}
          <circle cx="700" cy="80" r="40" fill="#F4F1DE" opacity="0.95" />
          {/* Moon craters */}
          <circle cx="690" cy="70" r="8" fill="#E8E5D3" opacity="0.4" />
          <circle cx="710" cy="85" r="6" fill="#E8E5D3" opacity="0.3" />
          <circle cx="705" cy="95" r="5" fill="#E8E5D3" opacity="0.35" />
          {/* Stars */}
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 700 + 50}
              cy={Math.random() * 300 + 20}
              r={Math.random() * 2 + 1}
              fill="white"
              opacity={Math.random() * 0.5 + 0.5}
            />
          ))}
        </>
      ) : (
        <>
          {/* Sun */}
          <circle cx="700" cy="80" r="45" fill="#FFD700" opacity="0.9" />
          <circle cx="700" cy="80" r="40" fill="#FFA500" opacity="0.8" />
          {/* Sun rays */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1={700 + Math.cos((angle * Math.PI) / 180) * 50}
              y1={80 + Math.sin((angle * Math.PI) / 180) * 50}
              x2={700 + Math.cos((angle * Math.PI) / 180) * 70}
              y2={80 + Math.sin((angle * Math.PI) / 180) * 70}
              stroke="#FFD700"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))}
        </>
      )}

      {/* Ground/Grass */}
      <rect
        y="400"
        width="800"
        height="800"
        fill="url(#grassGradient)"
      />

      {/* Stone path */}
      <g id="stone-path">
        {/* Path stones */}
        {[
          { cx: 400, cy: 950, rx: 45, ry: 30 },
          { cx: 380, cy: 880, rx: 40, ry: 28 },
          { cx: 420, cy: 820, rx: 42, ry: 30 },
          { cx: 390, cy: 760, rx: 43, ry: 29 },
          { cx: 410, cy: 700, rx: 44, ry: 31 },
          { cx: 380, cy: 640, rx: 41, ry: 28 },
          { cx: 420, cy: 580, rx: 45, ry: 30 },
          { cx: 400, cy: 520, rx: 42, ry: 29 },
        ].map((stone, i) => (
          <ellipse
            key={i}
            cx={stone.cx}
            cy={stone.cy}
            rx={stone.rx}
            ry={stone.ry}
            fill={isDark ? "#6B7280" : "#9CA3AF"}
            stroke={isDark ? "#4B5563" : "#6B7280"}
            strokeWidth="2"
          />
        ))}
      </g>

      {/* House (left side) */}
      <g id="house">
        {/* House base */}
        <rect
          x="50"
          y="500"
          width="180"
          height="150"
          fill={isDark ? "#8B6F47" : "#D4A574"}
          stroke={isDark ? "#5C4A2F" : "#A67C52"}
          strokeWidth="2"
        />
        {/* Roof */}
        <path
          d="M 40 500 L 140 440 L 240 500 Z"
          fill={isDark ? "#5C4A2F" : "#8B4513"}
        />
        {/* Door */}
        <rect
          x="120"
          y="580"
          width="50"
          height="70"
          fill={isDark ? "#4A3520" : "#6B4423"}
          rx="3"
        />
        {/* Door knob */}
        <circle cx="160" cy="615" r="3" fill="#DAA520" />
        {/* Windows */}
        <rect
          x="70"
          y="530"
          width="30"
          height="35"
          fill={isDark ? "#FFE5B4" : "#87CEEB"}
          stroke={isDark ? "#8B6F47" : "#A67C52"}
          strokeWidth="2"
        />
        <rect
          x="180"
          y="530"
          width="30"
          height="35"
          fill={isDark ? "#FFE5B4" : "#87CEEB"}
          stroke={isDark ? "#8B6F47" : "#A67C52"}
          strokeWidth="2"
        />
        {/* Window panes */}
        <line x1="85" y1="530" x2="85" y2="565" stroke={isDark ? "#8B6F47" : "#A67C52"} strokeWidth="1" />
        <line x1="70" y1="547" x2="100" y2="547" stroke={isDark ? "#8B6F47" : "#A67C52"} strokeWidth="1" />
        <line x1="195" y1="530" x2="195" y2="565" stroke={isDark ? "#8B6F47" : "#A67C52"} strokeWidth="1" />
        <line x1="180" y1="547" x2="210" y2="547" stroke={isDark ? "#8B6F47" : "#A67C52"} strokeWidth="1" />
      </g>

      {/* White picket fence */}
      <g id="picket-fence">
        {[...Array(15)].map((_, i) => (
          <g key={i} transform={`translate(${50 + i * 30}, 650)`}>
            <rect x="0" y="0" width="8" height="50" fill="#F5F5F5" />
            <path d="M 0 0 L 4 -8 L 8 0 Z" fill="#F5F5F5" />
          </g>
        ))}
        {/* Horizontal rails */}
        <rect x="50" y="670" width="420" height="4" fill="#F5F5F5" />
        <rect x="50" y="685" width="420" height="4" fill="#F5F5F5" />
      </g>

      {/* Large tree (center-left) */}
      <g id="main-tree">
        {/* Tree trunk */}
        <rect
          x="280"
          y="550"
          width="40"
          height="150"
          fill={isDark ? "#5C4A2F" : "#8B6F47"}
          rx="5"
        />
        {/* Tree roots (for hiding eggs) */}
        <ellipse cx="270" cy="700" rx="30" ry="15" fill={isDark ? "#4A3520" : "#6B4423"} opacity="0.6" />
        <ellipse cx="320" cy="700" rx="30" ry="15" fill={isDark ? "#4A3520" : "#6B4423"} opacity="0.6" />

        {/* Tree foliage */}
        <circle cx="280" cy="500" r="80" fill={isDark ? "#2F5233" : "#4A7C59"} opacity="0.9" />
        <circle cx="320" cy="480" r="70" fill={isDark ? "#2F5233" : "#4A7C59"} opacity="0.85" />
        <circle cx="310" cy="520" r="65" fill={isDark ? "#3A6339" : "#5A8C6A"} opacity="0.9" />

        {/* Tree hole (for hiding eggs) */}
        <ellipse
          id="tree-hole"
          cx="295"
          cy="610"
          rx="12"
          ry="18"
          fill={isDark ? "#1a1410" : "#3a2820"}
        />

        {/* Lanterns hanging from tree */}
        <g id="lantern-left" transform="translate(255, 470)">
          <line x1="0" y1="-20" x2="0" y2="0" stroke={isDark ? "#8B6F47" : "#6B4423"} strokeWidth="1" />
          <rect x="-8" y="0" width="16" height="24" fill={isDark ? "#FF6B6B" : "#FFD700"} rx="2" opacity="0.8" />
          <rect x="-6" y="2" width="12" height="20" fill={isDark ? "#FFE5B4" : "#FFF4E6"} opacity={isDark ? 0.9 : 0.6} />
        </g>
        <g id="lantern-middle" transform="translate(300, 455)">
          <line x1="0" y1="-15" x2="0" y2="0" stroke={isDark ? "#8B6F47" : "#6B4423"} strokeWidth="1" />
          <rect x="-8" y="0" width="16" height="24" fill={isDark ? "#FFD700" : "#FF6B6B"} rx="2" opacity="0.8" />
          <rect x="-6" y="2" width="12" height="20" fill={isDark ? "#FFE5B4" : "#FFF4E6"} opacity={isDark ? 0.9 : 0.6} />
        </g>
        <g id="lantern-right" transform="translate(335, 465)">
          <line x1="0" y1="-18" x2="0" y2="0" stroke={isDark ? "#8B6F47" : "#6B4423"} strokeWidth="1" />
          <rect x="-8" y="0" width="16" height="24" fill={isDark ? "#6B9BD1" : "#87CEEB"} rx="2" opacity="0.8" />
          <rect x="-6" y="2" width="12" height="20" fill={isDark ? "#FFE5B4" : "#FFF4E6"} opacity={isDark ? 0.9 : 0.6} />
        </g>

        {/* Bird nests */}
        <g id="nest-left" transform="translate(240, 485)">
          <ellipse cx="0" cy="0" rx="18" ry="8" fill={isDark ? "#5C4A2F" : "#8B6F47"} />
          <ellipse cx="0" cy="-2" rx="15" ry="6" fill={isDark ? "#6B5A3F" : "#9B7F57"} />
        </g>
        <g id="nest-right" transform="translate(360, 490)">
          <ellipse cx="0" cy="0" rx="18" ry="8" fill={isDark ? "#5C4A2F" : "#8B6F47"} />
          <ellipse cx="0" cy="-2" rx="15" ry="6" fill={isDark ? "#6B5A3F" : "#9B7F57"} />
        </g>

        {/* Beehive hanging from branch */}
        <g id="beehive" transform="translate(350, 520)">
          <line x1="0" y1="-15" x2="0" y2="0" stroke={isDark ? "#8B6F47" : "#6B4423"} strokeWidth="2" />
          <ellipse cx="0" cy="10" rx="20" ry="25" fill="#DAA520" />
          <ellipse cx="0" cy="5" rx="18" ry="8" fill="#B8860B" opacity="0.7" />
          <ellipse cx="0" cy="15" rx="18" ry="8" fill="#B8860B" opacity="0.7" />
          <ellipse cx="0" cy="25" rx="18" ry="8" fill="#B8860B" opacity="0.7" />
          <circle cx="5" cy="18" r="2" fill={isDark ? "#1a1410" : "#3a2820"} />
        </g>
      </g>

      {/* Greenhouse (right side) */}
      <g id="greenhouse">
        {/* Base */}
        <rect
          x="520"
          y="580"
          width="120"
          height="100"
          fill="url(#glassGradient)"
          stroke={isDark ? "#6B7280" : "#9CA3AF"}
          strokeWidth="3"
        />
        {/* Roof */}
        <path
          d="M 515 580 L 580 540 L 645 580 Z"
          fill="url(#glassGradient)"
          stroke={isDark ? "#6B7280" : "#9CA3AF"}
          strokeWidth="3"
        />
        {/* Greenhouse glow in dark mode */}
        {isDark && (
          <rect
            x="520"
            y="580"
            width="120"
            height="100"
            fill="#FFE5B4"
            opacity="0.15"
          />
        )}
        {/* Window frames */}
        <line x1="580" y1="540" x2="580" y2="680" stroke={isDark ? "#6B7280" : "#9CA3AF"} strokeWidth="2" />
        <line x1="520" y1="620" x2="640" y2="620" stroke={isDark ? "#6B7280" : "#9CA3AF"} strokeWidth="2" />

        {/* Potted plant inside greenhouse */}
        <g id="greenhouse-pot" transform="translate(570, 645)">
          <rect x="-15" y="0" width="30" height="25" fill={isDark ? "#8B4513" : "#A0522D"} rx="2" />
          <circle cx="0" cy="-5" r="18" fill={isDark ? "#2F5233" : "#4A7C59"} />
          <circle cx="-8" cy="-8" r="12" fill={isDark ? "#3A6339" : "#5A8C6A"} />
          <circle cx="8" cy="-8" r="12" fill={isDark ? "#3A6339" : "#5A8C6A"} />
        </g>
      </g>

      {/* Garden bench (center) */}
      <g id="garden-bench">
        {/* Bench back */}
        <rect x="340" y="850" width="120" height="8" fill={isDark ? "#6B4423" : "#8B6F47"} rx="2" />
        <rect x="345" y="835" width="8" height="25" fill={isDark ? "#6B4423" : "#8B6F47"} />
        <rect x="407" y="835" width="8" height="25" fill={isDark ? "#6B4423" : "#8B6F47"} />
        <rect x="452" y="835" width="8" height="25" fill={isDark ? "#6B4423" : "#8B6F47"} />

        {/* Bench seat */}
        <rect x="340" y="870" width="120" height="12" fill={isDark ? "#8B6F47" : "#A67C52"} rx="2" />

        {/* Bench cushion (for hiding eggs) */}
        <rect
          id="bench-cushion"
          x="350"
          y="865"
          width="100"
          height="8"
          fill={isDark ? "#8B4789" : "#DDA0DD"}
          rx="3"
        />

        {/* Bench legs */}
        <rect x="345" y="882" width="8" height="35" fill={isDark ? "#6B4423" : "#8B6F47"} />
        <rect x="407" y="882" width="8" height="35" fill={isDark ? "#6B4423" : "#8B6F47"} />

        {/* Basket under bench */}
        <g id="bench-basket" transform="translate(390, 905)">
          <path d="M -20 0 L -15 15 L 15 15 L 20 0 Z" fill={isDark ? "#8B6F47" : "#D4A574"} />
          <line x1="-15" y1="15" x2="-15" y2="0" stroke={isDark ? "#6B4423" : "#A67C52"} strokeWidth="1" />
          <line x1="-5" y1="15" x2="-5" y2="0" stroke={isDark ? "#6B4423" : "#A67C52"} strokeWidth="1" />
          <line x1="5" y1="15" x2="5" y2="0" stroke={isDark ? "#6B4423" : "#A67C52"} strokeWidth="1" />
          <line x1="15" y1="15" x2="15" y2="0" stroke={isDark ? "#6B4423" : "#A67C52"} strokeWidth="1" />
        </g>
      </g>

      {/* Shed (far right) */}
      <g id="shed">
        {/* Shed base */}
        <rect
          x="680"
          y="620"
          width="100"
          height="80"
          fill={isDark ? "#5C4A2F" : "#8B6F47"}
          stroke={isDark ? "#4A3520" : "#6B4423"}
          strokeWidth="2"
        />
        {/* Shed roof */}
        <path
          d="M 675 620 L 730 590 L 785 620 Z"
          fill={isDark ? "#4A3520" : "#6B4423"}
        />
        {/* Shed door */}
        <rect
          id="shed-door"
          x="705"
          y="650"
          width="50"
          height="50"
          fill={isDark ? "#3a2820" : "#5a3830"}
          stroke={isDark ? "#2a1810" : "#4a2820"}
          strokeWidth="2"
          rx="2"
        />
        {/* Door handle */}
        <circle cx="745" cy="675" r="3" fill="#DAA520" />

        {/* Ivy on shed */}
        <g id="shed-ivy">
          <path
            d="M 690 650 Q 695 640 690 630 Q 685 620 690 610"
            stroke={isDark ? "#2F5233" : "#4A7C59"}
            strokeWidth="3"
            fill="none"
          />
          <circle cx="688" cy="645" r="5" fill={isDark ? "#3A6339" : "#5A8C6A"} />
          <circle cx="692" cy="635" r="5" fill={isDark ? "#3A6339" : "#5A8C6A"} />
          <circle cx="687" cy="625" r="5" fill={isDark ? "#3A6339" : "#5A8C6A"} />
          <circle cx="691" cy="615" r="5" fill={isDark ? "#3A6339" : "#5A8C6A"} />
        </g>
      </g>

      {/* Stone wall (behind shed) */}
      <g id="stone-wall">
        {[...Array(12)].map((_, i) => (
          <rect
            key={i}
            x={650 + (i % 3) * 35}
            y={580 + Math.floor(i / 3) * 25}
            width={33}
            height={23}
            fill={isDark ? "#6B7280" : "#9CA3AF"}
            stroke={isDark ? "#4B5563" : "#6B7280"}
            strokeWidth="1"
            rx="2"
          />
        ))}
      </g>

      {/* Pond (center-right) */}
      <g id="pond">
        <ellipse
          cx="480"
          cy="750"
          rx="80"
          ry="50"
          fill={isDark ? "#1e3a5f" : "#87CEEB"}
          opacity="0.7"
        />
        {/* Lily pads */}
        <ellipse
          id="lily-pad-1"
          cx="460"
          cy="735"
          rx="18"
          ry="12"
          fill={isDark ? "#2F5233" : "#4A7C59"}
        />
        <ellipse
          id="lily-pad-2"
          cx="500"
          cy="755"
          rx="18"
          ry="12"
          fill={isDark ? "#2F5233" : "#4A7C59"}
        />

        {/* Water ripples */}
        {!isDark && (
          <>
            <ellipse cx="480" cy="750" rx="70" ry="40" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
            <ellipse cx="480" cy="750" rx="60" ry="35" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />
          </>
        )}
      </g>

      {/* Bird bath (right of pond) */}
      <g id="bird-bath">
        {/* Pedestal */}
        <rect
          x="595"
          y="680"
          width="10"
          height="50"
          fill={isDark ? "#9CA3AF" : "#D1D5DB"}
        />
        {/* Base */}
        <ellipse
          cx="600"
          cy="730"
          rx="20"
          ry="8"
          fill={isDark ? "#9CA3AF" : "#D1D5DB"}
        />
        {/* Bowl */}
        <ellipse
          cx="600"
          cy="680"
          rx="25"
          ry="12"
          fill={isDark ? "#9CA3AF" : "#D1D5DB"}
        />
        <ellipse
          cx="600"
          cy="678"
          rx="22"
          ry="10"
          fill={isDark ? "#1e3a5f" : "#87CEEB"}
          opacity="0.6"
        />
      </g>

      {/* Watering can (bottom left) */}
      <g id="watering-can" transform="translate(120, 1050)">
        {/* Can body */}
        <rect x="0" y="10" width="40" height="35" fill={isDark ? "#5C7C8A" : "#7C9CAA"} rx="3" />
        <ellipse cx="20" cy="10" rx="20" ry="8" fill={isDark ? "#6C8C9A" : "#8CACBA"} />
        {/* Spout */}
        <path d="M 40 25 L 60 20 L 58 30 Z" fill={isDark ? "#5C7C8A" : "#7C9CAA"} />
        {/* Handle */}
        <path
          d="M 10 15 Q 5 15 5 25 Q 5 35 10 35"
          fill="none"
          stroke={isDark ? "#5C7C8A" : "#7C9CAA"}
          strokeWidth="3"
        />
      </g>

      {/* Rose arch (right side) */}
      <g id="rose-arch">
        <path
          d="M 600 900 L 600 750 Q 650 720 700 750 L 700 900"
          fill="none"
          stroke={isDark ? "#6B4423" : "#8B6F47"}
          strokeWidth="4"
        />
        {/* Roses on arch */}
        {[...Array(8)].map((_, i) => (
          <circle
            key={i}
            cx={610 + i * 12}
            cy={760 + Math.sin(i) * 20}
            r="5"
            fill={isDark ? "#8B0000" : "#FF1493"}
            opacity="0.8"
          />
        ))}
      </g>

      {/* Flower beds */}
      <g id="flower-bed-left">
        {/* Left flowers (tulips) */}
        {[...Array(6)].map((_, i) => (
          <g key={i} transform={`translate(${100 + i * 20}, ${950 + (i % 2) * 15})`}>
            <line x1="0" y1="0" x2="0" y2="30" stroke={isDark ? "#2F5233" : "#4A7C59"} strokeWidth="2" />
            <ellipse cx="0" cy="-5" rx="6" ry="10" fill={isDark ? "#DC143C" : "#FF69B4"} />
          </g>
        ))}
      </g>

      <g id="flower-bed-right">
        {/* Right flowers (mixed) */}
        {[...Array(6)].map((_, i) => (
          <g key={i} transform={`translate(${650 + i * 18}, ${1000 + (i % 2) * 12})`}>
            <line x1="0" y1="0" x2="0" y2="25" stroke={isDark ? "#2F5233" : "#4A7C59"} strokeWidth="2" />
            <circle cx="0" cy="-3" r="6" fill={i % 2 === 0 ? (isDark ? "#FFD700" : "#FFA500") : (isDark ? "#9370DB" : "#DDA0DD")} />
          </g>
        ))}
      </g>

      {/* Garden gate (far right) */}
      <g id="garden-gate" transform="translate(720, 820)">
        <rect x="0" y="0" width="60" height="80" fill="none" stroke="#F5F5F5" strokeWidth="3" />
        <line x1="30" y1="0" x2="30" y2="80" stroke="#F5F5F5" strokeWidth="3" />
        <circle cx="55" cy="40" r="3" fill="#DAA520" />
      </g>
    </svg>
  );
}
