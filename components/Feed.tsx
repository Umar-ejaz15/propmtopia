import React from "react";

const Feed = () => {
  const isUserLoggedIn: boolean = false;
  const posts = [
    {
      prompt:
        "Deep in the enchanted forest, ancient trees whispered secrets to wandering souls. Magical creatures danced between moonlit shadows, while crystalline streams sang melodies of forgotten tales. Every leaf sparkled with ethereal dew, creating a symphony of light and magic.",
      tag: ["fantasy", "magic", "nature", "mystical", "adventure"],
      username: "JohnDoe",
      date: "2023-10-15",
      likes: 234,
      views: 1520,
    },
    {
      prompt:
        "Towering skyscrapers pierced the neon-lit clouds, their surfaces alive with holographic advertisements. Flying vehicles weaved through the vertical maze while quantum-powered trains snaked between buildings. The city pulsed with artificial intelligence and cybernetic enhancements.",
      tag: ["scifi", "cyberpunk", "future", "technology", "cityscape"],
      username: "AliceSmith",
      date: "2023-10-14",
      likes: 456,
      views: 2340,
    },
    {
      prompt:
        "Majestic peaks stretched endlessly toward the azure sky, their snow-capped summits kissing the clouds. Alpine meadows bloomed with wildflowers, while crystal-clear lakes mirrored the surrounding grandeur. The air was crisp with the scent of pine and freedom.",
      tag: ["nature", "mountains", "landscape", "peaceful", "wilderness"],
      username: "BobWilson",
      date: "2023-10-13",
      likes: 567,
      views: 3210,
    },
    {
      prompt:
        "Beneath the ocean's surface, an otherworldly reef teemed with life, each creature painted in brilliant hues. Schools of neon fish darted through coral towers, while ancient sea turtles glided peacefully, untouched by time.",
      tag: ["ocean", "marine life", "nature", "tranquility", "colorful"],
      username: "OceanExplorer",
      date: "2023-10-12",
      likes: 380,
      views: 2150,
    },
    {
      prompt:
        "A lone knight, weary and battle-worn, stood at the edge of a dark chasm. Across the way, a massive dragon, scales glistening with embers, watched with intelligent eyes. A tense silence held as they sized each other up, both warriors in their own right.",
      tag: ["fantasy", "battle", "medieval", "dragon", "hero"],
      username: "KnightWatcher",
      date: "2023-10-11",
      likes: 499,
      views: 2789,
    },
    {
      prompt:
        "Sunlight broke over the desert dunes, casting long shadows across the vast expanse. Ancient ruins dotted the landscape, relics of a lost civilization, and the wind whispered secrets from centuries past.",
      tag: ["desert", "ancient", "history", "mystery", "exploration"],
      username: "SandSeeker",
      date: "2023-10-10",
      likes: 312,
      views: 1890,
    },
    {
      prompt:
        "In the neon glow of a bustling marketplace, merchants sold exotic wares from distant planets. Robotic companions, rare spices, and virtual realities awaited customers as music from a hundred cultures filled the air.",
      tag: ["scifi", "market", "futuristic", "culture", "alien"],
      username: "GalacticTraveler",
      date: "2023-10-09",
      likes: 612,
      views: 3456,
    },
    {
      prompt:
        "A peaceful village nestled in a valley, surrounded by autumn-kissed trees. The aroma of fresh bread wafted from quaint cottages, and children played as the sun cast a warm, golden hue over everything.",
      tag: ["village", "peaceful", "autumn", "nostalgia", "scenery"],
      username: "PastoralPoet",
      date: "2023-10-08",
      likes: 275,
      views: 1453,
    },
    {
      prompt:
        "On the edge of a cliff, a solitary figure meditated as storm clouds gathered overhead. Bolts of lightning streaked across the sky, illuminating the vast ocean below and the individual's silhouette against nature’s fury.",
      tag: ["meditation", "storm", "solitude", "nature", "dramatic"],
      username: "StormSoul",
      date: "2023-10-07",
      likes: 423,
      views: 2345,
    },
    {
      prompt:
        "A secret library, hidden behind a false wall, filled with ancient books bound in leather. A warm light glowed, casting a cozy ambiance as dust motes floated in the air, undisturbed by time.",
      tag: ["library", "mystery", "books", "cozy", "ancient"],
      username: "BookWorm",
      date: "2023-10-06",
      likes: 367,
      views: 2101,
    },
    {
      prompt:
        "In a serene Japanese garden, a cherry blossom tree shed its petals onto a tranquil pond. Koi fish glided beneath the surface, and a gentle breeze carried the scent of blooming flowers.",
      tag: ["japanese garden", "peace", "nature", "spring", "flowers"],
      username: "ZenMaster",
      date: "2023-10-05",
      likes: 458,
      views: 2673,
    },
  ];

  return isUserLoggedIn ? (
    <>
      <section className="feed">
        <div className="mt-16 prompt_layout flex flex-wrap justify-center gap-12">
          {posts.map((post) => (
            <div
              key={post.prompt}
              className="prompt_card p-5 hover:shadow-lg transition-all duration-300 aspect-square w-full max-w-[400px] bg-transparent border border-white/20 backdrop-blur-sm"
            >
              <div className="flex justify-between items-start gap-5  rounded-lg shadow-xl">
                <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold">
                    {post.username[0]}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-satoshi font-semibold text-white">
                      {post.username}
                    </h3>
                    <p className="text-xs text-orange-300">{post.date}</p>
                  </div>
                </div>
                <div className="flex gap-2 text-sm text-orange-300">
                  <span>👁️ {post.views}</span>
                  <span>❤️ {post.likes}</span>
                </div>
              </div>
              <p className="font-inter text-sm text-white mt-4 leading-relaxed">
                {post.prompt}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tag.map((tag) => (
                  <span
                    key={tag}
                    className="font-inter text-sm text-white cursor-pointer px-2 py-1 rounded-full bg-orange-500/20 hover:bg-orange-500/30 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  ) : (
    <></>
  );
};

export default Feed;
