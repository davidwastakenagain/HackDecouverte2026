// Food buddies and food art: the site's cute food drawings (shared component).
// Original drawings made for CraveBetter, in a sticker style: a thick plum
// outline and a white sticker border.
//
// The same drawings are used in two ways:
//   - As characters, with a face (rosy cheeks and a small smile). Decoration:
//     the logo, the home page, section titles.
//       <FoodBuddy name="boba" className="h-24 w-24" />
//   - As a picture of a food, without a face, where a recipe has no photo of
//     its own.
//       <FoodBuddy name={foodArtFor(recipe.title)} face={false} className="h-24 w-24" />
//
// Props:
//   name       one of ART_NAMES (default "strawberry")
//   face       false to draw the food without a face (default true)
//   className  sets the size, and optionally an animation such as animate-float
//   title      optional; if given, screen readers announce it. Without it the
//              drawing is decoration and is hidden from them.
//
// foodArtFor(text) picks the drawing for a recipe or food name
// ("Garlic Tomato Spaghetti" -> "noodles"). If nothing fits it returns
// "plate", a plain plate, never a different food.
// buddyFor(text) does the same for decoration but falls back to "strawberry".

import { useId } from "react";

const INK = "#4a2a3c";

// The shared face. x and y are the point midway between the eyes.
function Face({ show, x = 60, y = 60, s = 1 }) {
  if (!show) return null;
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} stroke="none">
      <ellipse cx="-21" cy="8" rx="6.5" ry="4.5" fill="#ff9db4" />
      <ellipse cx="21" cy="8" rx="6.5" ry="4.5" fill="#ff9db4" />
      <circle cx="-13" cy="0" r="5.5" fill={INK} />
      <circle cx="13" cy="0" r="5.5" fill={INK} />
      <circle cx="-14.6" cy="-1.8" r="1.9" fill="#ffffff" />
      <circle cx="11.4" cy="-1.8" r="1.9" fill="#ffffff" />
      <path
        d="M-5 6 q2.5 4.5 5 0 q2.5 4.5 5 0"
        fill="none"
        stroke={INK}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

// A bowl seen from the side, shared by several drawings. Draw the food first,
// then the bowl in front of it.
function Bowl({ fill, rim }) {
  return (
    <>
      <path d="M18 62 H102 C102 88 84 106 60 106 C36 106 18 88 18 62Z" fill={fill} />
      <rect x="13" y="57" width="94" height="10" rx="5" fill={rim} />
    </>
  );
}

function Strawberry({ face }) {
  return (
    <>
      <path d="M60 34 C60 26 62 22 67 17" fill="none" />
      <path d="M60 34 C86 28 104 50 94 76 C87 95 68 107 60 109 C52 107 33 95 26 76 C16 50 34 28 60 34Z" fill="#ff7a9a" />
      <g fill="#fff3c4" stroke="none">
        <ellipse cx="60" cy="52" rx="1.8" ry="2.6" />
        <ellipse cx="42" cy="54" rx="1.8" ry="2.6" />
        <ellipse cx="78" cy="54" rx="1.8" ry="2.6" />
        <ellipse cx="33" cy="68" rx="1.8" ry="2.6" />
        <ellipse cx="87" cy="68" rx="1.8" ry="2.6" />
        <ellipse cx="46" cy="92" rx="1.8" ry="2.6" />
        <ellipse cx="74" cy="92" rx="1.8" ry="2.6" />
        <ellipse cx="60" cy="99" rx="1.8" ry="2.6" />
        {!face && (
          <>
            <ellipse cx="50" cy="72" rx="1.8" ry="2.6" />
            <ellipse cx="70" cy="72" rx="1.8" ry="2.6" />
            <ellipse cx="60" cy="84" rx="1.8" ry="2.6" />
          </>
        )}
      </g>
      <path d="M60 37 C52 24 40 24 33 30 C44 34 50 41 60 39 C70 41 76 34 87 30 C80 24 68 24 60 37Z" fill="#7fd6a0" />
      <Face show={face} x={60} y={71} />
    </>
  );
}

function Avocado({ face }) {
  return (
    <>
      <path d="M60 12 C74 12 82 26 84 42 C100 58 104 82 90 98 C76 112 44 112 30 98 C16 82 20 58 36 42 C38 26 46 12 60 12Z" fill="#6fbf73" />
      <path d="M60 21 C70 21 75 32 77 45 C91 59 94 79 83 92 C72 103 48 103 37 92 C26 79 29 59 43 45 C45 32 50 21 60 21Z" fill="#eef7b9" stroke="none" />
      <circle cx="60" cy="83" r="14" fill="#c98a5a" />
      <path d="M52 78 C54 74 58 72 62 73" fill="none" stroke="#e7b48a" strokeWidth="3" />
      <Face show={face} x={60} y={48} s={0.78} />
    </>
  );
}

function Boba({ face }) {
  return (
    <>
      <path d="M70 36 L80 9" fill="none" strokeWidth="13" />
      <path d="M70 36 L80 9" fill="none" stroke="#7fd6c2" strokeWidth="6.5" />
      <path d="M32 42 L88 42 L80 104 Q79 111 72 111 L48 111 Q41 111 40 104Z" fill="#fff1f5" />
      <path d="M36.6 60 Q48 54 60 60 T83.4 60 L78.4 103 Q78 108 72 108 L48 108 Q42 108 41.6 103Z" fill="#ffbfd1" stroke="none" />
      <g fill="#5a3446" stroke="none">
        <circle cx="49" cy="101" r="5" />
        <circle cx="60" cy="103" r="5" />
        <circle cx="71" cy="101" r="5" />
        <circle cx="54.5" cy="93" r="5" />
        <circle cx="65.5" cy="93" r="5" />
      </g>
      <path d="M32 42 L88 42 L80 104 Q79 111 72 111 L48 111 Q41 111 40 104Z" fill="none" />
      <rect x="26" y="32" width="68" height="13" rx="6.5" fill="#ffffff" />
      <Face show={face} x={60} y={72} s={0.8} />
    </>
  );
}

function IceCream({ face }) {
  return (
    <>
      <path d="M40 62 L80 62 L62 109 Q60 113 58 109Z" fill="#f3c58f" />
      <g fill="none" strokeWidth="1.8" opacity="0.45">
        <path d="M49 66 L64 98" />
        <path d="M60 66 L70 86" />
        <path d="M71 66 L56 98" />
        <path d="M60 66 L50 86" />
      </g>
      <circle cx="60" cy="13" r="6.5" fill="#ff5a7a" />
      <path d="M30 60 C24 31 46 18 60 18 C74 18 96 31 90 60 C92 70 80 72 76 64 C72 72 62 72 60 64 C58 72 48 72 44 64 C40 72 28 70 30 60Z" fill="#ffc2d4" />
      <Face show={face} x={60} y={44} s={0.85} />
    </>
  );
}

function Burger({ face }) {
  return (
    <>
      <rect x="22" y="83" width="76" height="20" rx="10" fill="#f6bf73" />
      <rect x="19" y="71" width="82" height="15" rx="7.5" fill="#8b5a45" />
      <path d="M22 65 H98 L90 76 L80 67 L70 77 L60 67 L50 77 L40 67 L30 76Z" fill="#ffd866" />
      <path d="M19 62 Q26 53 33 62 T47 62 T61 62 T75 62 T89 62 T101 61 L101 67 H19Z" fill="#8fdc9c" />
      <path d="M20 60 C20 25 100 25 100 60 Q100 64 96 64 H24 Q20 64 20 60Z" fill="#f6bf73" />
      <g fill="#fff3c4" stroke="none">
        <ellipse cx="44" cy="35" rx="2.6" ry="1.8" transform="rotate(-25 44 35)" />
        <ellipse cx="60" cy="31" rx="2.6" ry="1.8" />
        <ellipse cx="76" cy="35" rx="2.6" ry="1.8" transform="rotate(25 76 35)" />
        {!face && (
          <>
            <ellipse cx="36" cy="48" rx="2.6" ry="1.8" transform="rotate(-20 36 48)" />
            <ellipse cx="52" cy="44" rx="2.6" ry="1.8" />
            <ellipse cx="68" cy="44" rx="2.6" ry="1.8" />
            <ellipse cx="84" cy="48" rx="2.6" ry="1.8" transform="rotate(20 84 48)" />
          </>
        )}
      </g>
      <Face show={face} x={60} y={48} s={0.8} />
    </>
  );
}

function Pizza({ face }) {
  return (
    <>
      <path d="M60 112 L22 40 Q60 22 98 40Z" fill="#ffdf80" />
      <path d="M22 40 Q60 22 98 40" fill="none" strokeWidth="15" />
      <path d="M22 40 Q60 22 98 40" fill="none" stroke="#eaa765" strokeWidth="8" />
      <g fill="#f2647a" strokeWidth="2.5">
        <circle cx="41" cy="54" r="5.5" />
        <circle cx="79" cy="54" r="5.5" />
        <circle cx="60" cy="93" r="5.5" />
        {!face && <circle cx="60" cy="68" r="5.5" />}
      </g>
      {!face && (
        <g fill="#8fdc9c" stroke="none">
          <circle cx="60" cy="50" r="3" />
          <circle cx="50" cy="76" r="3" />
          <circle cx="70" cy="78" r="3" />
        </g>
      )}
      <Face show={face} x={60} y={66} s={0.72} />
    </>
  );
}

function Cookie({ face }) {
  return (
    <>
      <circle cx="60" cy="62" r="42" fill="#eebf8a" />
      <g fill="#7a4a3a" stroke="none">
        <circle cx="38" cy="40" r="5" />
        <circle cx="61" cy="31" r="4" />
        <circle cx="82" cy="40" r="5.5" />
        <circle cx="90" cy="72" r="4.5" />
        <circle cx="31" cy="78" r="4.5" />
        <circle cx="62" cy="94" r="5" />
        <circle cx="42" cy="92" r="3.5" />
        {!face && (
          <>
            <circle cx="52" cy="60" r="5" />
            <circle cx="72" cy="66" r="4.5" />
            <circle cx="62" cy="48" r="3.5" />
          </>
        )}
      </g>
      <Face show={face} x={60} y={62} />
    </>
  );
}

function Fries({ face }) {
  return (
    <>
      <g fill="#ffd866">
        <rect x="35" y="24" width="11" height="46" rx="4" transform="rotate(-10 40 47)" />
        <rect x="48" y="14" width="11" height="54" rx="4" />
        <rect x="61" y="17" width="11" height="52" rx="4" />
        <rect x="74" y="24" width="11" height="46" rx="4" transform="rotate(10 80 47)" />
      </g>
      <path d="M29 54 Q60 67 91 54 L85 106 Q84 111 79 111 H41 Q36 111 35 106Z" fill="#ff7a9a" />
      {!face && <path d="M44 74 H76 M44 86 H76" fill="none" stroke="#ffd6e0" strokeWidth="3" />}
      <Face show={face} x={60} y={84} s={0.78} />
    </>
  );
}

function Drumstick({ face }) {
  return (
    <>
      <path d="M48 76 L31 95" fill="none" strokeWidth="15" />
      <path d="M48 76 L31 95" fill="none" stroke="#fff8ee" strokeWidth="8" />
      <circle cx="25" cy="93" r="7" fill="#fff8ee" />
      <circle cx="33" cy="101" r="7" fill="#fff8ee" />
      <path d="M44 82 C22 62 34 22 68 20 C94 18 104 44 94 64 C84 84 60 92 44 82Z" fill="#e9a35f" />
      <path d="M52 34 C58 28 68 26 76 28" fill="none" stroke="#f6c891" strokeWidth="4" />
      <Face show={face} x={68} y={52} s={0.8} />
    </>
  );
}

function Noodles({ face }) {
  return (
    <>
      <path d="M26 62 C24 40 44 28 60 28 C76 28 96 40 94 62Z" fill="#ffe08a" />
      <g fill="none" strokeWidth="2.2" opacity="0.5">
        <path d="M34 58 C40 42 56 40 62 54" />
        <path d="M50 52 C58 36 78 38 84 56" />
        <path d="M42 46 C50 36 62 34 70 40" />
      </g>
      <path d="M82 18 L58 50" fill="none" strokeWidth="3.5" />
      <path d="M92 22 L66 52" fill="none" strokeWidth="3.5" />
      <Bowl fill="#bfe3f5" rim="#e3f4fc" />
      <Face show={face} x={60} y={84} s={0.78} />
    </>
  );
}

function FoodBowl({ face }) {
  return (
    <>
      <path d="M24 62 C22 46 34 40 44 43 C48 31 64 29 70 38 C80 32 96 42 96 62Z" fill="#fffaf0" />
      <g stroke="none">
        <circle cx="40" cy="52" r="5" fill="#8fdc9c" />
        <circle cx="56" cy="44" r="5.5" fill="#ffb46b" />
        <circle cx="72" cy="50" r="5" fill="#8fdc9c" />
        <circle cx="84" cy="54" r="4.5" fill="#f2647a" />
        <circle cx="50" cy="56" r="4" fill="#f2647a" />
      </g>
      <Bowl fill="#ffb3c6" rim="#ffd6e0" />
      <Face show={face} x={60} y={84} s={0.78} />
    </>
  );
}

function Soup({ face }) {
  return (
    <>
      <g fill="none" strokeWidth="3" opacity="0.45">
        <path d="M46 46 q-5 -7 0 -14 q5 -7 0 -14" />
        <path d="M72 46 q-5 -7 0 -14 q5 -7 0 -14" />
      </g>
      <path d="M22 62 C22 52 98 52 98 62Z" fill="#ffb46b" />
      <Bowl fill="#bfe3f5" rim="#e3f4fc" />
      <Face show={face} x={60} y={84} s={0.78} />
    </>
  );
}

function Curry({ face }) {
  return (
    <>
      <path d="M22 62 C22 48 98 48 98 62Z" fill="#f39a3d" />
      <path d="M24 62 C24 46 40 40 52 44 C60 46 62 56 62 62Z" fill="#fffaf0" />
      <path d="M68 52 C74 42 88 44 92 54 C84 52 76 56 68 52Z" fill="#f2647a" strokeWidth="2.5" />
      <path d="M92 54 q4 -2 5 -6" fill="none" stroke="#6fbf73" strokeWidth="3" />
      <Bowl fill="#ffe08a" rim="#fff1c2" />
      <Face show={face} x={60} y={84} s={0.78} />
    </>
  );
}

function Salad({ face }) {
  return (
    <>
      <g fill="#8fdc9c">
        <circle cx="38" cy="52" r="16" />
        <circle cx="82" cy="52" r="16" />
        <circle cx="60" cy="42" r="19" />
      </g>
      <circle cx="48" cy="50" r="6.5" fill="#f2647a" strokeWidth="2.5" />
      <circle cx="74" cy="54" r="5.5" fill="#f2647a" strokeWidth="2.5" />
      <circle cx="62" cy="36" r="4" fill="#ffe08a" stroke="none" />
      <Bowl fill="#ffe08a" rim="#fff1c2" />
      <Face show={face} x={60} y={84} s={0.78} />
    </>
  );
}

function Chips({ face }) {
  return (
    <>
      <g fill="#ffd978">
        <path d="M28 60 L44 24 L58 60Z" />
        <path d="M62 60 L78 22 L94 60Z" />
        <path d="M44 60 L62 30 L78 60Z" />
      </g>
      <g fill="#eaa765" stroke="none">
        <circle cx="44" cy="46" r="1.8" />
        <circle cx="62" cy="48" r="1.8" />
        <circle cx="78" cy="42" r="1.8" />
      </g>
      <Bowl fill="#ff9db4" rim="#ffd6e0" />
      <Face show={face} x={60} y={84} s={0.78} />
    </>
  );
}

function Taco({ face }) {
  return (
    <>
      <path d="M20 66 Q26 38 40 50 Q48 28 62 44 Q74 26 84 46 Q96 38 100 66Z" fill="#8fdc9c" />
      <circle cx="42" cy="50" r="6" fill="#f2647a" strokeWidth="2.5" />
      <circle cx="74" cy="46" r="6" fill="#f2647a" strokeWidth="2.5" />
      <path d="M14 86 C14 46 106 46 106 86 Q106 92 100 92 H20 Q14 92 14 86Z" fill="#ffd978" />
      {!face && (
        <g fill="#eaa765" stroke="none">
          <circle cx="40" cy="74" r="2" />
          <circle cx="60" cy="68" r="2" />
          <circle cx="80" cy="74" r="2" />
          <circle cx="50" cy="82" r="2" />
          <circle cx="70" cy="82" r="2" />
        </g>
      )}
      <Face show={face} x={60} y={74} s={0.8} />
    </>
  );
}

function Wrap({ face }) {
  return (
    <>
      <g transform="rotate(-18 60 62)">
        <ellipse cx="96" cy="62" rx="10" ry="20" fill="#8fdc9c" />
        <circle cx="97" cy="54" r="4" fill="#f2647a" stroke="none" />
        <circle cx="97" cy="68" r="4" fill="#ffe08a" stroke="none" />
        <path d="M34 42 H92 C84 50 84 74 92 82 H34 C22 82 14 72 14 62 C14 52 22 42 34 42Z" fill="#f6dca8" />
        <path d="M40 42 C48 54 48 70 40 82" fill="none" strokeWidth="2.2" opacity="0.4" />
      </g>
      <Face show={face} x={56} y={64} s={0.7} />
    </>
  );
}

function Sandwich({ face }) {
  return (
    <>
      <rect x="20" y="80" width="80" height="20" rx="9" fill="#f6d29a" />
      <rect x="18" y="70" width="84" height="12" rx="6" fill="#f2647a" />
      <path d="M20 62 H100 L92 72 L82 64 L72 73 L62 64 L52 73 L42 64 L32 72Z" fill="#ffd866" />
      <path d="M17 60 Q24 51 31 60 T45 60 T59 60 T73 60 T87 60 T103 59 L103 65 H17Z" fill="#8fdc9c" />
      <rect x="20" y="28" width="80" height="34" rx="12" fill="#f6d29a" />
      {!face && <rect x="28" y="35" width="64" height="20" rx="8" fill="#fff1d0" stroke="none" />}
      <Face show={face} x={60} y={44} s={0.75} />
    </>
  );
}

function Fish({ face }) {
  return (
    <>
      <path d="M22 60 C36 34 72 34 88 56 L106 42 C109 54 109 66 106 78 L88 64 C72 86 36 86 22 60Z" fill="#9fd3f2" />
      <path d="M50 42 C54 30 66 28 72 36" fill="#9fd3f2" />
      <g fill="none" strokeWidth="2.2" opacity="0.4">
        <path d="M66 50 q6 10 0 20" />
        <path d="M76 52 q5 8 0 16" />
        {!face && <path d="M56 49 q6 11 0 22" />}
      </g>
      {!face && <circle cx="36" cy="57" r="3.2" fill={INK} stroke="none" />}
      <Face show={face} x={48} y={60} s={0.66} />
    </>
  );
}

function Meat({ face }) {
  return (
    <>
      <path d="M26 58 C22 36 46 24 66 28 C90 30 104 48 96 70 C90 90 66 98 46 92 C32 88 28 74 26 58Z" fill="#e8847e" />
      <path d="M34 58 C32 42 48 34 64 36" fill="none" stroke="#fbe3dc" strokeWidth="5" />
      <circle cx="78" cy="48" r="7" fill="#fff8ee" strokeWidth="3" />
      {!face && (
        <g fill="none" strokeWidth="3" opacity="0.35">
          <path d="M44 66 L60 82" />
          <path d="M56 60 L74 78" />
          <path d="M68 62 L82 74" />
        </g>
      )}
      <Face show={face} x={56} y={68} s={0.72} />
    </>
  );
}

function Popcorn({ face }) {
  return (
    <>
      <g fill="#fff6d6">
        <circle cx="40" cy="48" r="11" />
        <circle cx="86" cy="50" r="9" />
        <circle cx="74" cy="42" r="12" />
        <circle cx="56" cy="40" r="13" />
        <circle cx="62" cy="52" r="10" />
      </g>
      <path d="M31 56 H89 L83 106 Q82 111 77 111 H43 Q38 111 37 106Z" fill="#ffffff" />
      <g fill="#ff9db4" stroke="none">
        <path d="M43 58 H51 L52 109 H47Z" />
        <path d="M56 58 H64 V109 H56Z" />
        <path d="M69 58 H77 L73 109 H68Z" />
      </g>
      <path d="M31 56 H89 L83 106 Q82 111 77 111 H43 Q38 111 37 106Z" fill="none" />
      <Face show={face} x={60} y={84} s={0.7} />
    </>
  );
}

function Pickle({ face }) {
  return (
    <>
      <rect x="40" y="16" width="40" height="92" rx="20" fill="#8fd18f" />
      <g fill="#5fae6b" stroke="none">
        <circle cx="50" cy="34" r="2.6" />
        <circle cx="68" cy="30" r="2.6" />
        <circle cx="48" cy="86" r="2.6" />
        <circle cx="70" cy="92" r="2.6" />
        <circle cx="60" cy="100" r="2.6" />
        {!face && (
          <>
            <circle cx="62" cy="48" r="2.6" />
            <circle cx="50" cy="60" r="2.6" />
            <circle cx="70" cy="66" r="2.6" />
            <circle cx="58" cy="76" r="2.6" />
          </>
        )}
      </g>
      <Face show={face} x={60} y={58} s={0.72} />
    </>
  );
}

function Fruit({ face }) {
  return (
    <>
      <path d="M60 38 C60 28 62 22 68 16" fill="none" />
      <path d="M66 26 C74 16 88 18 92 26 C84 32 72 32 66 26Z" fill="#7fd6a0" />
      <path d="M60 38 C74 28 98 36 96 62 C94 88 76 108 60 101 C44 108 26 88 24 62 C22 36 46 28 60 38Z" fill="#f2647a" />
      <path d="M36 54 C38 46 44 42 50 42" fill="none" stroke="#ffb3c0" strokeWidth="4" />
      <Face show={face} x={60} y={70} />
    </>
  );
}

function Grapes({ face }) {
  return (
    <>
      <path d="M60 30 C60 22 62 18 68 13" fill="none" />
      <path d="M64 24 C72 14 86 16 90 24 C82 30 70 30 64 24Z" fill="#7fd6a0" />
      <g fill="#b79cf0">
        <circle cx="40" cy="44" r="13" />
        <circle cx="80" cy="44" r="13" />
        <circle cx="60" cy="42" r="13" />
        <circle cx="50" cy="64" r="13" />
        <circle cx="70" cy="64" r="13" />
        <circle cx="60" cy="86" r="13" />
      </g>
      <g fill="none" stroke="#dccdfa" strokeWidth="3">
        <path d="M34 40 q2 -5 7 -6" />
        <path d="M74 40 q2 -5 7 -6" />
        <path d="M44 60 q2 -5 7 -6" />
      </g>
      <Face show={face} x={60} y={62} s={0.72} />
    </>
  );
}

function Muffin({ face }) {
  return (
    <>
      <path d="M34 66 H86 L80 104 Q79 109 74 109 H46 Q41 109 40 104Z" fill="#ff9db4" />
      <g fill="none" strokeWidth="2.2" opacity="0.35">
        <path d="M48 72 L50 104" />
        <path d="M60 72 V104" />
        <path d="M72 72 L70 104" />
      </g>
      <path d="M26 66 C20 44 40 26 60 26 C80 26 100 44 94 66 Q94 71 89 71 H31 Q26 71 26 66Z" fill="#eebf8a" />
      <g fill="#6b6fd6" stroke="none">
        <circle cx="42" cy="40" r="4" />
        <circle cx="78" cy="40" r="4" />
        <circle cx="60" cy="33" r="4" />
        {!face && (
          <>
            <circle cx="50" cy="54" r="4" />
            <circle cx="70" cy="54" r="4" />
          </>
        )}
      </g>
      <Face show={face} x={60} y={52} s={0.76} />
    </>
  );
}

function Donut({ face }) {
  return (
    <>
      <circle cx="60" cy="62" r="42" fill="#eebf8a" />
      <path d="M60 26 C80 26 96 42 96 60 C96 66 90 66 88 72 C86 78 80 74 76 80 C72 86 66 82 60 86 C54 82 48 86 44 80 C40 74 34 78 32 72 C30 66 24 66 24 60 C24 42 40 26 60 26Z" fill="#ff9db4" stroke="none" />
      <circle cx="60" cy="56" r="11" fill="#fff6f9" />
      <g fill="none" strokeWidth="3.2">
        <path d="M38 46 l5 -4" stroke="#ffffff" />
        <path d="M80 42 l5 4" stroke="#ffe08a" />
        <path d="M44 66 l-5 3" stroke="#7fd6c2" />
        <path d="M78 66 l5 2" stroke="#ffffff" />
        <path d="M60 36 l1 -6" stroke="#7fd6c2" />
      </g>
      <Face show={face} x={60} y={92} s={0.5} />
    </>
  );
}

function Pancakes({ face }) {
  return (
    <>
      <ellipse cx="60" cy="98" rx="48" ry="9" fill="#ffffff" />
      <rect x="20" y="76" width="80" height="17" rx="8.5" fill="#f3c58f" />
      <rect x="23" y="61" width="74" height="17" rx="8.5" fill="#f3c58f" />
      <rect x="20" y="46" width="80" height="17" rx="8.5" fill="#f3c58f" />
      <path d="M26 48 Q60 34 94 48 Q96 56 88 56 Q86 66 80 56 H50 Q48 64 42 56 Q24 58 26 48Z" fill="#c98a5a" />
      <rect x="51" y="33" width="18" height="11" rx="2.5" fill="#fff3a8" />
      <Face show={face} x={60} y={70} s={0.6} />
    </>
  );
}

function Toast({ face }) {
  return (
    <>
      <path d="M26 44 C20 26 44 20 60 25 C76 20 100 26 94 44 V98 Q94 105 87 105 H33 Q26 105 26 98Z" fill="#e9b983" />
      <path d="M34 46 C30 34 46 30 60 34 C74 30 90 34 86 46 V93 Q86 97 82 97 H38 Q34 97 34 93Z" fill="#fff1d0" stroke="none" />
      {!face && <path d="M46 60 C50 52 62 52 66 60 C74 60 76 72 68 76 C62 82 50 80 46 74 C40 70 40 62 46 60Z" fill="#fff3a8" strokeWidth="2.5" />}
      <Face show={face} x={60} y={68} s={0.9} />
    </>
  );
}

function Drink({ face }) {
  return (
    <>
      <path d="M66 46 L78 10" fill="none" strokeWidth="11" />
      <path d="M66 46 L78 10" fill="none" stroke="#7fd6c2" strokeWidth="5" />
      <path d="M34 34 H86 L80 104 Q79 111 72 111 H48 Q41 111 40 104Z" fill="#ffffff" />
      <path d="M37.4 52 H82.6 L78.4 103 Q78 108 72 108 H48 Q42 108 41.6 103Z" fill="#ffc66b" stroke="none" />
      <g fill="#ffffff" stroke="none" opacity="0.8">
        <circle cx="48" cy="64" r="3" />
        <circle cx="72" cy="60" r="2.4" />
        <circle cx="66" cy="96" r="3" />
        {!face && <circle cx="54" cy="84" r="2.6" />}
      </g>
      <path d="M34 34 H86 L80 104 Q79 111 72 111 H48 Q41 111 40 104Z" fill="none" />
      <circle cx="88" cy="36" r="13" fill="#ffe08a" />
      <g fill="none" stroke="#f3b84b" strokeWidth="2">
        <path d="M88 26 V46" />
        <path d="M78 36 H98" />
      </g>
      <Face show={face} x={60} y={78} s={0.72} />
    </>
  );
}

function Mug({ face }) {
  return (
    <>
      <g fill="none" strokeWidth="3" opacity="0.45">
        <path d="M46 30 q-5 -6 0 -12 q5 -6 0 -12" />
        <path d="M66 30 q-5 -6 0 -12 q5 -6 0 -12" />
      </g>
      <path d="M84 56 C104 56 104 88 84 88" fill="none" strokeWidth="7" />
      <path d="M26 44 H86 V94 Q86 106 74 106 H38 Q26 106 26 94Z" fill="#ff9db4" />
      <ellipse cx="56" cy="44" rx="30" ry="7" fill="#fff8ee" />
      <Face show={face} x={56} y={76} s={0.8} />
    </>
  );
}

function Brownie({ face }) {
  return (
    <>
      <path d="M24 52 L40 34 H102 L88 52Z" fill="#a8705a" />
      <path d="M88 52 L102 34 V80 L88 98Z" fill="#6f4536" />
      <rect x="24" y="52" width="64" height="46" rx="5" fill="#8b5a45" />
      <g fill="#5a3446" stroke="none">
        <circle cx="50" cy="42" r="3" />
        <circle cx="72" cy="44" r="3" />
        <circle cx="84" cy="40" r="2.6" />
      </g>
      {!face && (
        <g fill="none" stroke="#a8705a" strokeWidth="3">
          <path d="M36 66 q8 -5 14 0" />
          <path d="M56 82 q8 -5 14 0" />
        </g>
      )}
      <Face show={face} x={56} y={74} s={0.72} />
    </>
  );
}

function Parfait({ face }) {
  return (
    <>
      <g strokeWidth="2.5">
        <circle cx="48" cy="26" r="7" fill="#f2647a" />
        <circle cx="62" cy="22" r="7" fill="#6b6fd6" />
        <circle cx="74" cy="28" r="7" fill="#f2647a" />
      </g>
      <path d="M36 32 H84 L76 98 Q75 104 69 104 H51 Q45 104 44 98Z" fill="#ffffff" />
      <g stroke="none">
        <path d="M38.4 46 H81.6 L79.4 64 H40.6Z" fill="#ffc2d4" />
        <path d="M40.6 64 H79.4 L77.4 80 H42.6Z" fill="#eebf8a" />
        <path d="M42.6 80 H77.4 L75.2 97 Q74.6 101 69 101 H51 Q45.4 101 44.8 97Z" fill="#c9b6f5" />
      </g>
      <path d="M36 32 H84 L76 98 Q75 104 69 104 H51 Q45 104 44 98Z" fill="none" />
      <path d="M46 110 H74" fill="none" />
      <Face show={face} x={60} y={66} s={0.6} />
    </>
  );
}

function Plate({ face }) {
  return (
    <>
      <path d="M14 30 V56 M8 30 V44 Q8 50 14 50 Q20 50 20 44 V30 M14 56 V98" fill="none" strokeWidth="3.5" />
      <path d="M108 98 V30 C100 36 98 52 102 62 H108" fill="#ffffff" strokeWidth="3.5" />
      <circle cx="60" cy="64" r="36" fill="#ffffff" />
      <circle cx="60" cy="64" r="24" fill="#fff0f5" strokeWidth="2.5" />
      <Face show={face} x={60} y={64} s={0.7} />
    </>
  );
}

const DRAWINGS = {
  strawberry: Strawberry,
  avocado: Avocado,
  boba: Boba,
  icecream: IceCream,
  burger: Burger,
  pizza: Pizza,
  cookie: Cookie,
  fries: Fries,
  drumstick: Drumstick,
  noodles: Noodles,
  bowl: FoodBowl,
  soup: Soup,
  curry: Curry,
  salad: Salad,
  chips: Chips,
  taco: Taco,
  wrap: Wrap,
  sandwich: Sandwich,
  fish: Fish,
  meat: Meat,
  popcorn: Popcorn,
  pickle: Pickle,
  fruit: Fruit,
  grapes: Grapes,
  muffin: Muffin,
  donut: Donut,
  pancakes: Pancakes,
  toast: Toast,
  drink: Drink,
  mug: Mug,
  brownie: Brownie,
  parfait: Parfait,
  plate: Plate,
};

// Every drawing.
export const ART_NAMES = Object.keys(DRAWINGS);

// The drawings used as characters around the site.
export const BUDDY_NAMES = ["strawberry", "avocado", "boba", "icecream", "burger", "pizza", "cookie", "fries"];

// Words in a recipe or food name that decide its drawing. The first rule that
// matches wins, so the more specific rules come first: "Pizza Quesadilla" is a
// pizza, "Chocolate-Dipped Strawberries" are strawberries, and "Loaded Burger
// Bowl" is a bowl.
const ART_RULES = [
  ["plate", /stuffed pepper/],
  ["pizza", /pizza/],
  ["soup", /soup|stew|chowder|broth|ukha/],
  ["noodles", /noodle|spaghetti|pasta|macaroni|\bmac\b|lasagn|linguine|penne|fettuccine|ramen|udon|lo mein|pad thai|gnocchi|ravioli|fideu/],
  ["bowl", /bowl|fried rice|stir.?fry|roasted chickpea|\boats\b|oatmeal|porridge|risotto|paella|couscous|pilaf|biryani|\brice\b/],
  ["wrap", /wrap|quesadilla|burrito|pita|kebab|gyro|shawarma|fajita|enchilada/],
  ["burger", /burger|slider|sloppy joe/],
  ["taco", /taco|tostada/],
  ["chips", /nacho|tortilla chip|potato chip|kale chip|crisps/],
  ["fries", /fries|wedges|potato|tater|hash brown/],
  ["popcorn", /popcorn/],
  ["curry", /curry|masala|korma|vindaloo|\bdal\b|dahl/],
  ["sandwich", /sandwich|grilled cheese|\bsub\b|hot dog|rolls? in buns|panini|toastie|\bblt\b/],
  ["drumstick", /chicken|turkey|drumstick|nugget|wings?\b|tenders/],
  ["fish", /fish|salmon|tuna|\bcod\b|shrimp|prawn|seafood|sushi|kedgeree|sardine|mackerel|squid/],
  ["meat", /steak|beef|lamb|pork|ribs|brisket|meatball|sausage|bbq|barbecue/],
  ["pancakes", /pancake|waffle|crepe/],
  ["toast", /toast/],
  ["donut", /donut|doughnut/],
  ["muffin", /muffin|cupcake|scone/],
  ["brownie", /brownie|blondie|fudge|oat squares|traybake/],
  ["cookie", /cookie|biscuit|shortbread/],
  ["mug", /\bmug\b|warm .*milk|hot chocolate|cocoa|latte|chai/],
  ["drink", /smoothie|slush|fizz|juice|lemonade|spritz|mocktail|milkshake|punch|cooler|iced tea/],
  ["parfait", /parfait|yogurt bark|yogurt cup|trifle|mousse|pudding/],
  ["icecream", /ice cream|nice cream|gelato|sorbet|sundae|popsicle|yogurt pop|frozen yogurt|soft serve|scoop/],
  ["strawberry", /strawberr/],
  ["pickle", /pickle|gherkin/],
  ["grapes", /grape/],
  ["fruit", /fruit|apple|peach|pear|plum|mango|banana|berry|berries|gumm|melon|orange/],
  ["salad", /salad|slaw|hummus|pistou|aubergine|eggplant|avocado dip/],
  ["bowl", /chickpea|lentil|\bbeans?\b|quinoa|granola/],
  ["avocado", /avocado|guacamole/],
];

function firstMatch(words) {
  for (const [name, pattern] of ART_RULES) {
    if (pattern.test(words)) return name;
  }
  return null;
}

// The dish itself comes before "with": "Lemon Herb Chicken with Potatoes" is
// chicken, not potatoes. Only if that part says nothing is the rest used.
function matchArt(text) {
  const words = String(text ?? "").toLowerCase();
  const [dish] = words.split(" with ");
  return firstMatch(dish) ?? firstMatch(words);
}

// The drawing for a recipe or food name. Returns "plate" (a plain plate) when
// nothing fits, so a recipe never shows a picture of a different food.
export function foodArtFor(text) {
  return matchArt(text) ?? "plate";
}

// A character to decorate a food name. Falls back to the strawberry mascot.
export function buddyFor(text) {
  const name = matchArt(text);
  return name && name !== "plate" ? name : "strawberry";
}

export default function FoodBuddy({ name = "strawberry", face = true, className = "", title }) {
  const Drawing = DRAWINGS[name] ?? Strawberry;
  // Each drawing needs its own filter id, so a hidden copy cannot break another.
  const filterId = `buddy-sticker-${useId().replace(/:/g, "")}`;

  return (
    <svg
      viewBox="-8 -8 136 136"
      className={`drop-shadow-[0_3px_0_rgba(74,42,60,0.14)] ${className}`}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <defs>
        {/* The white sticker border around the whole drawing. */}
        <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
          <feMorphology in="SourceAlpha" operator="dilate" radius="4" result="grown" />
          <feFlood floodColor="#ffffff" />
          <feComposite in2="grown" operator="in" result="border" />
          <feMerge>
            <feMergeNode in="border" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g
        filter={`url(#${filterId})`}
        stroke={INK}
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <Drawing face={face} />
      </g>
    </svg>
  );
}
