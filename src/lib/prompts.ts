export const ROOM_NAMES: Record<string, string> = {
  office:   'office interior',
  cafe:     'cafe interior',
  shop:     'retail store interior',
  salon:    'beauty salon interior',
  living:   'living room interior',
  bedroom:  'bedroom interior',
  kitchen:  'kitchen interior',
  bathroom: 'bathroom interior',
  toilet:   'toilet room interior',
  kids:     "children's room interior",
}

export const STYLE_BASE: Record<string, string> = {
  my_style:      'custom interior design style, tailored to user specifications',
  minimalist:    'minimalist style, simple clean-line furniture, neutral palette, uncluttered, calm atmosphere',
  loft:          'industrial loft style, black metal frames, Edison bulb pendant lights, raw industrial furniture',
  scandinavian:  'Scandinavian hygge style, light birch furniture, wool textiles, warm cozy atmosphere',
  luxury:        'luxury interior, gold brass hardware, crystal chandelier, velvet upholstery, opulent decor',
  japandi:       'Japandi wabi-sabi style, low furniture, paper lantern light, handcrafted ceramics, zen atmosphere',
  biophilic:     'biophilic design, lush indoor plants, rattan furniture, natural wood accents, organic forms',
  artdeco:       'Art Deco style, brass fixtures, velvet armchairs, geometric patterns, 1930s glamour',
  mediterranean: 'Mediterranean style, arched elements, warm sunlight, rustic wooden furniture, ceramic accents',
  cyberpunk:     'cyberpunk style, holographic panels, glossy black surfaces, futuristic furniture, neon accents',
  organic_modern:   'organic modern interior, travertine stone surfaces and raw white oak wood, sculptural curved rounded silhouettes, bouclé and linen upholstery, warm sand travertine beige and clay earth tones palette, hand-thrown matte ceramics, seamless smooth plaster walls, flowing organic forms no sharp edges, luxury natural materials, Architectural Digest editorial aesthetic',
  contemporary:     'contemporary modern interior, current-era design aesthetic, clean rectilinear geometry, warm neutral sophisticated palette with charcoal and cognac accents, high-quality mixed material textures, statement sculptural pendant lighting fixtures, large-scale abstract artwork on walls, open-concept spacious layout, brushed nickel and tempered glass accents, functional yet architecturally impressive',
  mid_century:      'mid-century modern 1950s-1960s interior, genuine walnut and teak wood furniture with tapered hairpin splayed legs, Eames-inspired lounge chair, Saarinen tulip side table, sunburst starburst mirror on wall, vintage-modern fusion design, atomic-era geometric textile patterns, warm walnut brown tones with olive green and burnt orange accent palette, terrazzo floor insets',
  boho:             'bohemian boho interior, rattan peacock hanging chair, floor-to-ceiling macramé woven wall hanging, layered ethnic kilim and jute rugs, low floor cushion seating, trailing pothos and monstera plants, dried pampas grass in tall vase, wicker basket storage, terracotta dusty rose and sage green palette, free-spirited eclectic pattern mixing, global artisan objects',
  coastal:          'coastal beach house interior, bleached driftwood-white oak floors, white horizontal shiplap plank accent wall, rattan woven pendant light over dining area, white linen slipcovered sofa, natural rope and driftwood decorative accents, sea glass and shell collections, ocean blue sky and crisp white palette, breezy sunlit airy atmosphere, relaxed nautical lifestyle',
  neoclassical:     'neoclassical modern luxury interior, ornate plaster crown moldings and coffered ceiling, white Carrara marble surfaces and floor, tufted Chesterfield sofa on carved gilded legs, tiered crystal chandelier, gilded brass hardware and framed mirror, classical column pilasters and wainscoting panels, ivory antique white and warm gold palette with deep jewel accents, aristocratic refined elegance',
  wabi_sabi:        'wabi-sabi Japanese aesthetic interior, raw rough clay plaster walls with intentional imperfections cracks and texture, rough-hewn aged timber with natural grain knots, hand-thrown ceramic vessels with organic drip glaze, muted ash grey stone and bleached bone tones, low wooden platform bench asymmetric seating, dried botanicals in minimalist ceramic vase, intentional beauty in imperfection and transience',
  modern_farmhouse: 'modern farmhouse interior, white painted shiplap plank accent wall, exposed dark wood ceiling beams, reclaimed barnwood dining table, linen slipcovered sofa, farmhouse apron front sink, vintage Edison filament bulb pendant lights over kitchen island, galvanized metal accents, buffalo check plaid textiles, warm white and charcoal contrast palette, cozy rustic American country living',
  maximalism:       'maximalist eclectic interior, deep jewel-tone velvet upholstery in emerald and burgundy, floor-to-ceiling gallery art wall with mismatched ornate gold frames, layered Persian and kilim rugs, dramatic crystal chandelier, richly patterned botanical wallpaper, stacked decorative books and collected art objects, deep saturated jewel palette emerald navy burgundy gold, opulent more-is-more philosophy, maximalist drama',
  industrial:       'industrial urban loft interior, raw exposed brick feature wall with visible mortar, polished concrete ceiling showing ductwork pipes and conduit, black steel factory window frames with glazing bars, reclaimed oak plank and welded black steel dining table, vintage Edison wire cage pendant lights, matte black and rusted iron and raw concrete grey palette, open-plan warehouse conversion aesthetic',
  japanese_zen:     'Japanese zen minimalist interior, traditional tatami rush grass mat floor sections with dark wood border, translucent shoji paper sliding screen panels diffusing soft light, tokonoma alcove with single ikebana flower arrangement, low chabudai table and zabuton floor cushions, shou-sugi-ban charred dark timber detail, bamboo and river-washed pebble stone accents, meditative empty serene atmosphere, Japanese philosophy of ma empty space',
}

export const STYLE_WALL_DEFAULT: Record<string, string> = {
  my_style:      '',
  minimalist:    'plain white walls',
  loft:          'exposed red brick walls',
  scandinavian:  'white painted walls',
  luxury:        'white marble wall panels',
  japandi:       'warm natural oak wall panels',
  biophilic:     'living moss wall accent',
  artdeco:       'geometric gold wallpaper',
  mediterranean: 'whitewashed plaster walls',
  cyberpunk:     'dark charcoal walls',
  organic_modern:   'smooth warm off-white organic lime plaster walls with subtle handcrafted texture',
  contemporary:     'clean flat white painted walls with no texture',
  mid_century:      'warm cream white painted walls with subtle plaster texture',
  boho:             'textured lime-washed whitewashed plaster walls with visible brush marks',
  coastal:          'white horizontal shiplap painted wood plank walls',
  neoclassical:     'white paneled walls with ornate classical plaster crown moldings and wainscoting',
  wabi_sabi:        'raw uneven clay and lime plaster walls with intentional imperfections cracks and shadow',
  modern_farmhouse: 'white painted vertical shiplap wood plank accent walls',
  maximalism:       'deep jewel-toned botanical floral patterned wallpaper covering all four walls',
  industrial:       'raw exposed red and brown brick walls with visible mortar joints',
  japanese_zen:     'natural light cypress hinoki wood horizontal panel walls with fine grain',
}

export const STYLE_FLOOR_DEFAULT: Record<string, string> = {
  my_style:      '',
  minimalist:    'light wood floor',
  loft:          'polished concrete floor',
  scandinavian:  'light pine floor',
  luxury:        'white marble floor',
  japandi:       'natural oak floor',
  biophilic:     'natural stone floor',
  artdeco:       'chevron marble floor',
  mediterranean: 'terracotta tile floor',
  cyberpunk:     'glossy black epoxy floor',
  organic_modern:   'honed travertine beige stone tile floor with natural vein pattern',
  contemporary:     'large format polished light grey porcelain slab floor with minimal grout lines',
  mid_century:      'medium walnut herringbone parquet floor with natural grain',
  boho:             'worn natural light wood plank floor layered with ethnic jute and kilim rugs',
  coastal:          'bleached whitewashed wide-plank driftwood oak floor',
  neoclassical:     'white Carrara marble floor with grey veining and dark inlay border',
  wabi_sabi:        'irregular natural flagstone tile floor with wide imperfect mortar joints',
  modern_farmhouse: 'wide-plank whitewashed pine wood floor with visible knots',
  maximalism:       'dark stained ebony herringbone parquet floor',
  industrial:       'raw polished concrete floor with visible aggregate and subtle staining',
  japanese_zen:     'traditional tatami rush grass mat floor sections bordered by dark stained oak strips',
}

export const STYLE_PROMPTS: Record<string, string> = Object.fromEntries(
  Object.keys(STYLE_BASE).map(k => [k,
    STYLE_BASE[k] + ', ' + STYLE_WALL_DEFAULT[k] + ', ' + STYLE_FLOOR_DEFAULT[k]
  ])
)

export const STYLES: Record<string, { label: string; emoji: string; prompt: string }> = {
  minimalist:    { label: 'Minimalism',    emoji: '-', prompt: STYLE_PROMPTS.minimalist },
  loft:          { label: 'Loft',          emoji: '-', prompt: STYLE_PROMPTS.loft },
  scandinavian:  { label: 'Scandinavian',  emoji: '-', prompt: STYLE_PROMPTS.scandinavian },
  luxury:        { label: 'Luxury',        emoji: '-', prompt: STYLE_PROMPTS.luxury },
  japandi:       { label: 'Japandi',       emoji: '-', prompt: STYLE_PROMPTS.japandi },
  biophilic:     { label: 'Biophilic',     emoji: '-', prompt: STYLE_PROMPTS.biophilic },
  artdeco:       { label: 'Art Deco',      emoji: '-', prompt: STYLE_PROMPTS.artdeco },
  mediterranean: { label: 'Mediterranean', emoji: '-', prompt: STYLE_PROMPTS.mediterranean },
  cyberpunk:        { label: 'Cyberpunk',        emoji: '-', prompt: STYLE_PROMPTS.cyberpunk },
  organic_modern:   { label: 'Organic Modern',   emoji: '-', prompt: STYLE_PROMPTS.organic_modern },
  contemporary:     { label: 'Contemporary',     emoji: '-', prompt: STYLE_PROMPTS.contemporary },
  mid_century:      { label: 'Mid-Century',      emoji: '-', prompt: STYLE_PROMPTS.mid_century },
  boho:             { label: 'Boho',             emoji: '-', prompt: STYLE_PROMPTS.boho },
  coastal:          { label: 'Coastal',          emoji: '-', prompt: STYLE_PROMPTS.coastal },
  neoclassical:     { label: 'Neoclassical',     emoji: '-', prompt: STYLE_PROMPTS.neoclassical },
  wabi_sabi:        { label: 'Wabi-Sabi',        emoji: '-', prompt: STYLE_PROMPTS.wabi_sabi },
  modern_farmhouse: { label: 'Modern Farmhouse', emoji: '-', prompt: STYLE_PROMPTS.modern_farmhouse },
  maximalism:       { label: 'Maximalism',       emoji: '-', prompt: STYLE_PROMPTS.maximalism },
  industrial:       { label: 'Industrial',       emoji: '-', prompt: STYLE_PROMPTS.industrial },
  japanese_zen:     { label: 'Japanese Zen',     emoji: '-', prompt: STYLE_PROMPTS.japanese_zen },
}

// ─── Room-specific prompt additions for new styles ───────────────────────────
// These are APPENDED to the base style prompt for specific room types.
// Existing styles have no entries here → zero behaviour change for them.
export const STYLE_ROOM_EXTRA: Record<string, Partial<Record<string, string>>> = {
  organic_modern: {
    living:   'curved travertine stone coffee table, rounded bouclé armchairs, sculptural organic floor lamp, sheer linen curtains pooling on floor',
    bedroom:  'low platform bed with travertine stone headboard niche, warm linen bedding with textural weave, handmade ceramic bedside lamps with matte glaze',
    kitchen:  'integrated seamless oak cabinetry flush with walls, honed travertine waterfall island countertop, arched plaster range hood niche, unlacquered brass tapware',
    bathroom: 'freestanding travertine stone bathtub, raw plaster walls, pebble stone shower floor, matte ceramic basin on wood vanity',
    office:   'curved organic desk in raw oak, rounded bouclé task chair, travertine desk accessories, large monstera plant in clay pot',
    living2:  '',
  },
  contemporary: {
    living:   'large modular sectional sofa in warm grey, glass and brushed nickel coffee table, oversized abstract canvas, cluster of matte black pendant lights',
    bedroom:  'upholstered platform bed in warm taupe, floating wall-mounted nightstands, floor-to-ceiling blackout curtains, integrated closet wall',
    kitchen:  'flat-front handleless cabinetry in warm white, quartz waterfall island, statement geometric pendant lights, integrated fully flush appliances',
    bathroom: 'large format porcelain wall and floor tiles, floating vanity with stone countertop, frameless shower enclosure, brushed nickel fixtures',
    office:   'clean-line floating desk with hidden cable management, ergonomic chair in neutral tone, backlit floating shelves, large plant',
  },
  mid_century: {
    living:   'Eames lounge chair and ottoman in warm leather, Noguchi coffee table, Saarinen tulip side table, sunburst starburst wall clock, modular teak shelving unit with objects',
    bedroom:  'platform bed with teak wood headboard and integrated nightstand wings, matching teak dresser with splayed legs, ceramic pendant bedside lights, terrazzo accents',
    kitchen:  'vintage-style appliances in cream or sage, terrazzo countertops and backsplash, open teak shelving, mosaic hexagon tile floor in kitchen zone',
    bathroom: 'aqua or olive tile on walls, pedestal sink on tapered legs, vintage-style fixtures, round mirror with teak surround',
    office:   'classic wooden desk with tapered legs, Eames task chair replica, vintage table lamp with drum shade, atomic-era bookshelf with vinyl records',
  },
  boho: {
    living:   'rattan hanging peacock chair suspended from ceiling, macramé large wall hanging, floor cushion seating, layered moroccan and kilim rugs, trailing pothos and monstera plants, wicker side table',
    bedroom:  'canopy bed frame draped with sheer white fabric, woven macramé headboard wall piece, patchwork quilt, fairy string lights on wall, floor mirror with rattan frame, crystals and candles',
    kitchen:  'open wood shelving with terracotta and ceramic bowls, hanging copper pots and dried herb bundles, terracotta tile floor in kitchen zone, wicker baskets for storage, rattan bar stools',
    bathroom: 'patterned tile in warm tones, live plants and hanging eucalyptus, wicker laundry basket, cotton fringed bath mat, artisan soap dish',
    office:   'vintage rattan desk and chair, macramé hanging planter, scattered cushions, botanical prints on wall, eclectic mix of books and objects',
  },
  coastal: {
    living:   'white linen slipcovered sofa with navy accent pillows, bleached rattan coffee table, ship lantern pendant light, ocean driftwood wall sculpture, large window with sea view',
    bedroom:  'white painted four-poster bed with flowing linen canopy, whitewashed nightstands, ocean-blue throw blanket, driftwood framed mirror, starfish and shell decor on dresser',
    kitchen:  'white shaker-style cabinets, butcher block wood countertop, blue and white subway tile backsplash, open shelving with white pottery, wicker pendant lights over island',
    bathroom: 'white bead-board wainscoting, nautical rope mirror frame, white subway tile, ocean-blue towels, freestanding clawfoot tub',
    office:   'white-painted desk with rattan chair, botanical coastal prints, shell and pebble display, linen curtains, coastal map on wall',
  },
  neoclassical: {
    living:   'tufted Chesterfield sofa in ivory velvet on carved gilded legs, Carrara marble fireplace surround, tiered crystal chandelier, oil painting in ornate gold frame above mantle, inlaid parquet floor',
    bedroom:  'upholstered headboard with button-tufted silk and carved wood frame detail, silk bedding in ivory and champagne, chaise longue at foot of bed, crystal table lamp, gilded vanity with oval mirror',
    kitchen:  'marble kitchen island with brass pot filler, glass-front cabinetry with brass grille, ornate decorative backsplash tiles, hammered brass farmhouse sink, marble mosaic floor border',
    bathroom: 'Carrara marble from floor to ceiling, gilded brass fixtures and fittings, freestanding slipper clawfoot tub, crystal sconce lights, bevelled oval mirror in gilded frame',
    office:   'carved mahogany desk with green leather inlay, tufted leather chair, brass desk lamp, classical marble bust, leather-bound books on shelves with brass brackets',
  },
  wabi_sabi: {
    living:   'low wooden platform bench with irregular grain, aged linen floor cushions, single twisted branch in tall clay vase, rough stone low coffee table, soft indirect ambient lighting through paper screens',
    bedroom:  'low futon platform bed in unfinished pale oak, crinkled linen bedding in natural undyed cotton, single ceramic bud vase with wildflower, morning soft light through translucent screens',
    kitchen:  'rough honed concrete countertops, open floating clay shelving, collection of hand-thrown ceramic bowls in ash glaze, minimal uncluttered surfaces, stone basin sink, aged wood cutting board',
    bathroom: 'rough stone basin on aged wood plinth, tadelakt plaster walls in warm grey, pebble stone shower floor, bamboo bath mat, single ceramic soap dish',
    office:   'low natural wood plank desk on irregular stone supports, floor cushion seating, single branch ikebana, ceramic ink pot, handmade paper notebooks',
  },
  modern_farmhouse: {
    living:   'plaid or linen slipcovered sofa in warm white, reclaimed wood beam coffee table, white shiplap feature wall, vintage-style iron chandelier with Edison bulbs, large woven area rug',
    bedroom:  'upholstered linen headboard on white bed frame, reclaimed wood nightstands, buffalo check and ticking stripe pillows, barn sliding door to wardrobe or ensuite, vintage-style lantern sconces',
    kitchen:  'white shaker cabinets with black iron hardware, thick butcher block wood kitchen island, farmhouse apron white enamel sink, Edison pendant lights over island, open shelving with ceramic dishes and mason jars',
    bathroom: 'shiplap accent wall above tub, clawfoot iron tub, barn door entry, galvanized pipe and wood shelf, black iron towel bar, brick or hex tile floor',
    office:   'reclaimed wood desk with black pipe legs, industrial bookshelf, vintage map on wall, mason jar pen holders, Edison desk lamp',
  },
  maximalism: {
    living:   'deep jewel-tone emerald velvet tufted Chesterfield sofa, wall-to-wall gallery of art in ornate mismatched frames, layered Persian kilim rugs over dark floor, dramatic crystal chandelier, floor-to-ceiling velvet drapes in burgundy',
    bedroom:  'canopied bed with dramatic floor-to-ceiling fabric draping, statement wallpaper covering all walls and ceiling, layers of cushions in mixed jewel tones, gallery wall of portraits and mirrors, ornate gilded vanity',
    kitchen:  'deep navy or forest green cabinetry with ornate brass hardware, decorative mosaic or hand-painted tile from floor to ceiling, open shelving filled with beautiful coloured glassware, patterned floor tile, statement range hood',
    bathroom: 'all-over patterned tile, bold wallpaper on ceiling, collected vintage perfume bottles on marble vanity, ornate gilded mirror, velvet stool, chandelier',
    office:   'eclectic antique desk, gallery wall of inspirational images and objects, layered rugs, velvet chair, collected books stacked everywhere, dramatic pendant light',
  },
  industrial: {
    living:   'worn brown leather Chesterfield sofa, exposed brick feature wall, black steel and glass coffee table, vintage factory cage pendant lights on conduit, concrete ceiling with visible steel beams',
    bedroom:  'black steel platform bed frame, exposed brick wall behind headboard, factory-style cage pendant bedside lights, metal locker repurposed as wardrobe, concrete or dark painted ceiling',
    kitchen:  'polished concrete countertops, open black steel pipe shelving, industrial range hood in matte black, black subway tile backsplash, raw steel bar stools at raw wood island, vintage enamel signs',
    bathroom: 'concrete wet room floor, exposed copper pipe fixtures, black steel mirror frame, black grout with white subway tile, metal mesh towel rail',
    office:   'raw steel and reclaimed wood desk, filing cabinet repurposed as side table, exposed bulb desk lamp, blueprint prints on brick wall, metal mesh desk organizer',
  },
  japanese_zen: {
    living:   'low zabuton floor cushion seating around chabudai low table, tokonoma alcove with carefully placed single ikebana arrangement and hanging scroll, shoji paper screens filtering soft light, smooth river stones in tray',
    bedroom:  'futon mattress on low platform in unfinished pale wood, shoji screen sliding wardrobe partition, single kakemono scroll hanging on wall, bamboo floor lantern, morning light through translucent panels',
    kitchen:  'natural pale wood cabinetry with hidden integrated handles, single row of hand-thrown ceramic bowls on open shelf, bamboo cutting boards and utensils, stone basin sink, minimal clutter only essential items visible',
    bathroom: 'deep soaking hinoki wood ofuro bath tub, smooth river pebble floor, bamboo bath mat, single ceramic bottle for soap, minimal empty space, low lighting from floor lantern',
    office:   'low writing desk in pale oak with single brush-holder, floor cushion seating, single bonsai tree, rice paper lamp, calligraphy scroll on wall',
  },
}

// ─── Style-specific negative prompt additions for new styles ─────────────────
// Only applies to new styles. Existing styles are unaffected.
export const STYLE_NEGATIVE_EXTRA: Record<string, string> = {
  organic_modern:   'industrial elements, cold chrome steel, sharp angular lines, high-gloss lacquer surfaces, neon lighting, cool grey palette, minimalist void, cluttered space',
  contemporary:     'vintage retro furniture, rustic farmhouse elements, industrial pipes, ornate classical moldings, bohemian clutter, kitsch decor, dated styles',
  mid_century:      'contemporary minimalism, industrial metal, classical ornate moldings, farmhouse rustic, ultra-modern high-gloss, traditional victorian, cold palette',
  boho:             'strict symmetry, sterile minimalism, cold industrial steel, glass and chrome, formal classical, luxury opulence, corporate aesthetic, empty walls',
  coastal:          'dark moody colors, industrial materials, ornate luxury opulence, neon, formal classical, heavy dark curtains, urban concrete, enclosed spaces',
  neoclassical:     'minimalist plain walls, industrial raw materials, bohemian clutter, rustic farmhouse, mid-century tapered legs, flat-pack furniture, casual aesthetic',
  wabi_sabi:        'polished glossy surfaces, chrome plating, luxury opulence, bright saturated colors, perfect symmetry, manufactured industrial, mass-produced plastic, clinical sterility',
  modern_farmhouse: 'futuristic elements, urban industrial, contemporary minimalist high-tech, ornate classical gold, metallic glam, neon, cold blue palette, sleek lacquer',
  maximalism:       'bare empty walls, neutral palette, minimalist void spaces, Scandinavian restraint, industrial rawness, cold grey tones, sparse furniture',
  industrial:       'classical ornate moldings, bohemian textiles, farmhouse warmth, soft pastel colors, curved organic forms, marble luxury, traditional formal furniture, carpet',
  japanese_zen:     'bright saturated colors, baroque ornament, maximalist clutter, Western luxury furniture, industrial materials, glossy chrome, heavy drapes, busy patterns',
}

export interface RoomDetails {
  size: string
  ceilingHeight: string
  wallColorHex: string
  wallFinish: string[]
  floorMaterial: string
  floorColorHex: string
  tilezone: string[]
  tileColorHex: string
  furniture: string[]
  lighting: string[]
  appliances: string[]
  extraNotes: string
}

// ─── English lookup tables ────────────────────────────────────────────────────

// FIX: color placeholder moved AFTER material name.
// Diffusion models tokenize left-to-right — material name must come first
// so the model knows WHAT to render before it reads the color.
// Old: '{WC} decorative wallpaper' → model sees unknown token then 'wallpaper' → uses wallpaper default color
// New: 'decorative wallpaper, color: {WC}' → model renders wallpaper, then applies specified color
const WALL_FINISH_EN: Record<string, string> = {
  paint:       'smooth painted walls, wall color: {WC}',
  wallpaper:   'decorative wallpaper on walls, wallpaper color: {WC}',
  plaster:     'Venetian decorative plaster on walls, plaster color: {WC}',
  brick:       'exposed brick walls, brick color: {WC}',
  wood:        'horizontal wooden plank wall cladding, wood color: {WC}',
  porcelain:   'porcelain stoneware wall tiles, tile color: {WC}',
  marble:      'polished marble wall panels with veining, marble color: {WC}',
  gypsum:      '3D decorative gypsum relief wall panels, panel color: {WC}',
  liquidwalls: 'liquid wallpaper textured wall coating, color: {WC}',
  microcement: 'seamless microcement wall finish, color: {WC}',
  metal:       'brushed metal wall cladding panels, metal color: {WC}',
  glass:       'glass wall panels, glass tint: {WC}',
  mosaic:      'small mosaic wall tiles, mosaic color: {WC}',
  concrete:    'concrete decorative wall finish, concrete tone: {WC}',
  stone:       'natural stone wall cladding, stone color: {WC}',
  cork:        'natural cork tile wall covering, cork color: {WC}',
}

// Used when no color selected — no placeholder at all
const WALL_FINISH_EN_NOCOLOR: Record<string, string> = {
  paint:       'smooth painted walls',
  wallpaper:   'decorative wallpaper on walls',
  plaster:     'Venetian decorative plaster on walls',
  brick:       'exposed brick walls with clearly visible bricks and mortar joints',
  wood:        'horizontal wooden plank wall cladding with visible wood grain',
  porcelain:   'porcelain stoneware wall tiles on walls',
  marble:      'polished marble wall panels with veining',
  gypsum:      '3D decorative gypsum relief wall panels',
  liquidwalls: 'liquid wallpaper textured wall coating',
  microcement: 'seamless microcement wall finish',
  metal:       'brushed metal wall cladding panels',
  glass:       'glass wall panels',
  mosaic:      'small mosaic wall tiles on walls',
  concrete:    'concrete decorative wall finish',
  stone:       'natural stone wall cladding with visible texture',
  cork:        'natural cork tile wall covering',
}

const WALL_FINISH_SHORT: Record<string, string> = {
  paint:       'painted wall texture',
  wallpaper:   'wallpaper',
  plaster:     'plaster texture',
  brick:       'brick texture',
  wood:        'wood wall cladding',
  porcelain:   'porcelain wall tiles',
  marble:      'marble wall panels',
  gypsum:      'gypsum relief panels',
  liquidwalls: 'liquid wallpaper',
  microcement: 'microcement texture',
  metal:       'metal wall cladding',
  glass:       'glass wall panels',
  mosaic:      'mosaic wall tiles',
  concrete:    'concrete wall texture',
  stone:       'stone wall cladding',
  cork:        'cork wall covering',
}

const FLOOR_EN: Record<string, string> = {
  light_parquet: 'light oak herringbone parquet floor with visible wood grain',
  dark_parquet:  'dark walnut herringbone parquet floor',
  laminate:      'laminate wood floor planks',
  ceramic_tile:  'ceramic square floor tiles',
  concrete:      'smooth polished grey concrete floor',
  carpet:        'thick fitted carpet floor',
  marble:        'polished white marble floor with grey veining',
  porcelain:     'large format porcelain stoneware floor tiles',
  linoleum:      'vinyl linoleum floor covering',
}

const TILE_EN: Record<string, string> = {
  kitchen_backsplash: '{C} ceramic subway tile backsplash',
  kitchen_floor:      '{C} porcelain tile kitchen floor',
  bath_walls:         '{C} ceramic tiles covering all bathroom walls from floor to ceiling',
  bath_floor:         '{C} non-slip ceramic tiles on bathroom floor',
  toilet_walls:       '{C} ceramic wall tiles in the toilet room',
  toilet_floor:       '{C} ceramic tile toilet room floor',
  shower:             '{C} mosaic tiles in the shower enclosure walls and floor',
  tub_surround:       '{C} ceramic tile panels around the bathtub',
}

const IS_BACKSPLASH: Record<string, boolean> = {
  kitchen_backsplash: true,
}

const LIGHT_EN: Record<string, string> = {
  natural:    'abundant natural daylight through windows',
  warm:       'warm golden 2700K ambient lighting',
  cool:       'cool white 5000K lighting',
  recessed:   'recessed ceiling spotlights in a grid pattern',
  chandelier: 'large decorative chandelier hanging from ceiling',
  floor_lamp: 'floor lamp in the corner',
  accent:     'LED accent backlight strips',
  strip:      'LED strip lights along ceiling cornice',
  sconce:     'decorative wall sconce lights',
  pendant:    'pendant lights hanging from ceiling',
}

const APP_EN: Record<string, string> = {
  fridge:     'stainless steel refrigerator',
  microwave:  'built-in microwave oven',
  dishwasher: 'integrated dishwasher',
  washer:     'front-loading washing machine',
  stove:      'gas cooking range with hob',
  oven:       'built-in electric oven',
  hood:       'kitchen range hood above cooktop',
  coffee:     'espresso coffee machine on counter',
  ac:         'wall-mounted air conditioning unit',
  tv:         'large flat screen TV mounted on wall',
}

const FURN_EN: Record<string, string> = {
  sofa:         'sofa',
  bed:          'bed',
  dining_table: 'dining table',
  desk:         'work desk',
  wardrobe:     'wardrobe',
  tv_unit:      'TV unit',
  armchair:     'armchair',
  dresser:      'dresser',
  bookshelf:    'bookshelf',
  ottoman:      'ottoman',
  bar_table:    'bar table',
  kitchen_set:  'kitchen cabinet set',
  bathtub:      'bathtub',
  shower_cabin: 'shower cabin',
}

// ─── Hex → color name ────────────────────────────────────────────────────────

// FIX: replaced s = diff/max (HSV saturation) with correct HSL saturation formula.
// HSV formula severely underestimates saturation of pastel colors causing them
// to fall into the grey zone. Examples with old formula:
//   green #81C784 → 'light grey'  (should be 'light green')
//   pink  #F48FB1 → 'off-white'   (should be 'light pink')
//   mint  #80CBC4 → 'light grey'  (should be 'mint green')
function hexToColorName(hex: string): string {
  if (!hex || hex.length < 7) return ''
  const r = parseInt(hex.slice(1,3),16)
  const g = parseInt(hex.slice(3,5),16)
  const b = parseInt(hex.slice(5,7),16)
  const br = (r*299 + g*587 + b*114) / 1000
  const max = Math.max(r,g,b), min = Math.min(r,g,b)
  const diff = max - min

  // Truly achromatic
  if (diff < 15) {
    if (br > 240) return 'pure white'
    if (br > 200) return 'off-white'
    if (br > 160) return 'light grey'
    if (br > 100) return 'medium grey'
    if (br > 50)  return 'dark grey'
    return 'black'
  }

  let h = 0
  if (max === r)      h = 60 * (((g - b) / diff) % 6)
  else if (max === g) h = 60 * ((b - r) / diff + 2)
  else                h = 60 * ((r - g) / diff + 4)
  if (h < 0) h += 360

  // Correct HSL saturation (not HSV)
  const l = (max + min) / 2 / 255
  const s_hsl = diff / 255 / (1 - Math.abs(2 * l - 1))

  // Near-grey: hue present but saturation too low
  if (s_hsl < 0.10) {
    if (br > 220) return 'off-white'
    if (br > 160) return 'light grey'
    if (br > 80)  return 'medium grey'
    return 'dark grey'
  }

  // Warm beige: low-sat warm tone at high brightness
  if (s_hsl < 0.50 && br > 210 && h >= 25 && h <= 55) return 'warm beige'

  // Dark tones: low brightness
  if (br < 85) {
    if (s_hsl < 0.25) return br < 50 ? 'black' : 'charcoal grey'
    if (h < 30 || h >= 330) return 'dark brown'
    if (h < 70)             return 'dark olive'
    if (h < 170)            return 'dark green'
    if (h < 265)            return 'dark blue'
    if (h < 295)            return 'dark indigo'
    return 'dark purple'
  }

  const light = br > 160

  if (h < 15)  return light ? 'light salmon'       : 'terracotta'
  if (h < 30)  return light ? 'peach'              : 'burnt orange'
  if (h < 50)  return light ? 'golden yellow'      : 'amber'
  if (h < 65)  return light ? 'pale yellow'        : 'yellow-green'
  if (h < 80)  return light ? 'olive'              : 'dark olive'
  if (h < 90)  return light ? 'light yellow-green' : 'yellow-green'
  if (h < 150) return light ? 'light green'        : 'forest green'
  if (h < 170) return light ? 'mint green'         : 'emerald green'
  if (h < 200) return light ? 'light cyan'         : 'teal'
  if (h < 220) return light ? 'light blue'         : 'sky blue'
  if (h < 250) return light ? 'cornflower blue'    : 'royal blue'
  if (h < 270) return light ? 'periwinkle'         : 'navy blue'
  if (h < 295) return light ? 'light lavender'     : 'deep purple'
  if (h < 330) return light ? 'light pink'         : 'plum'
  return light ? 'light rose' : 'crimson'
}

// ─── Conflict detector ────────────────────────────────────────────────────────

export function detectConflicts(
  roomKey: string,
  details: Partial<RoomDetails>
): string[] {
  const warnings: string[] = []

  if (details.wallFinish?.includes('brick') && details.wallColorHex) {
    const name = hexToColorName(details.wallColorHex)
    const lightColors = ['pure white','off-white','light grey','pale yellow','light green','light blue','light pink','light salmon','mint green','light cyan','cornflower blue','periwinkle','light lavender','light rose','warm beige']
    if (lightColors.includes(name)) {
      warnings.push(`Кирпич + светлый цвет: модель может проигнорировать цвет, кирпич имеет свой тон`)
    }
  }

  if (details.wallFinish?.includes('marble') && details.wallColorHex) {
    const name = hexToColorName(details.wallColorHex)
    if (name && !['pure white','off-white','light grey','warm beige'].includes(name)) {
      warnings.push(`Мрамор + цвет: мраморные панели имеют собственный рисунок, цвет может не применяться точно`)
    }
  }

  const kitchenTileZones = ['kitchen_backsplash','kitchen_floor']
  const bathTileZones    = ['bath_walls','bath_floor','shower','tub_surround']
  const toiletTileZones  = ['toilet_walls','toilet_floor']

  if (details.tilezone?.some(z => kitchenTileZones.includes(z)) && roomKey !== 'kitchen')
    warnings.push(`Кухонные зоны плитки выбраны, но тип помещения — не кухня`)
  if (details.tilezone?.some(z => bathTileZones.includes(z)) && roomKey !== 'bathroom')
    warnings.push(`Зоны ванной выбраны, но тип помещения — не ванная`)
  if (details.tilezone?.some(z => toiletTileZones.includes(z)) && roomKey !== 'toilet')
    warnings.push(`Зоны туалета выбраны, но тип помещения — не туалет`)

  return warnings
}

// ─── Main export ─────────────────────────────────────────────────────────────

export function buildEditPrompt(
  roomKey:  string,
  styleKey: string,
  details?: Partial<RoomDetails>
): { positive: string; negative: string } {

  const room      = ROOM_NAMES[roomKey] ?? 'interior'
  const isMyStyle = styleKey === 'my_style'

  if (!isMyStyle) {
    const sk = styleKey || 'minimalist'
    // Room-specific extra descriptor (only defined for new styles; empty for legacy styles)
    const roomExtra = STYLE_ROOM_EXTRA[sk]?.[roomKey] ?? ''
    const wallDesc  = STYLE_WALL_DEFAULT[sk]  || ''
    const floorDesc = STYLE_FLOOR_DEFAULT[sk] || ''
    const styleDesc = STYLE_BASE[sk] || STYLE_BASE.minimalist

    const positive = [
      `Professional interior design photography of a ${room}`,
      styleDesc,

      // Явные команды замены поверхностей
      wallDesc  ? `WALLS: REPLACE all wall surfaces with ${wallDesc}. The original wall color and material is completely replaced.` : '',
      floorDesc ? `FLOOR: REPLACE the entire floor with ${floorDesc}. The original floor is completely replaced.` : '',

      roomExtra,

      // Сохранение геометрии
      'keep original room geometry, windows unobstructed, recolor furniture to match style',

      // Качество
      'photorealistic, 8k, professional interior photography, sharp focus, HDR lighting',
    ].filter(Boolean).join(' ')
    // Style-specific negative additions (only for new styles; empty for legacy styles)
    const negExtra = STYLE_NEGATIVE_EXTRA[sk] ?? ''
    const negative = negExtra
      ? NEGATIVE_PROMPT_BASE + ', ' + negExtra
      : NEGATIVE_PROMPT_BASE
    return { positive, negative }
  }

  // ── my_style ──────────────────────────────────────────────────────────────

  const wallColorName  = hexToColorName(details?.wallColorHex  || '')
  const floorColorName = hexToColorName(details?.floorColorHex || '')
  const tileColorName  = hexToColorName(details?.tileColorHex  || '')

  // Hex values — passed separately as additional color signal
  const wallHex  = details?.wallColorHex  ? details.wallColorHex.toUpperCase()  : ''
  const floorHex = details?.floorColorHex ? details.floorColorHex.toUpperCase() : ''
  const tileHex  = details?.tileColorHex  ? details.tileColorHex.toUpperCase()  : ''

  // Combined color description: "light green, exact hex #81C784"
  // Comma-separated — no parentheses which confuse the tokenizer
  const wallColorDesc  = wallColorName  && wallHex  ? `${wallColorName}, exact hex ${wallHex}`  : wallColorName  || ''
  const floorColorDesc = floorColorName && floorHex ? `${floorColorName}, exact hex ${floorHex}` : floorColorName || ''
  const tileColorDesc  = tileColorName  && tileHex  ? `${tileColorName}, exact hex ${tileHex}`  : tileColorName  || ''

  // Wall finish descriptions — color comes AFTER material name
  const wallFinishDescs:  string[] = []
  const wallFinishShorts: string[] = []

  if (details?.wallFinish?.length) {
    for (const k of details.wallFinish) {
      const short = WALL_FINISH_SHORT[k]
      let desc: string
      if (wallColorDesc) {
        const template = WALL_FINISH_EN[k]
        desc = template ? template.replace('{WC}', wallColorDesc) : ''
      } else {
        desc = WALL_FINISH_EN_NOCOLOR[k] || ''
      }
      if (desc) wallFinishDescs.push(desc)
      if (short) wallFinishShorts.push(short)
    }
  }

  // Tile zones
  const backsplashZones: string[] = []
  const otherTileDescs:  string[] = []
  // Use short color name only for tile templates — cleaner token weight
  const tileColorForTile = tileColorName || 'white'

  if (details?.tilezone?.length) {
    for (const k of details.tilezone) {
      const template = TILE_EN[k]
      if (!template) continue
      const desc = template.replace('{C}', tileColorForTile)
      if (IS_BACKSPLASH[k]) backsplashZones.push(desc)
      else otherTileDescs.push(desc)
    }
  }

  const furnitureList  = (details?.furniture  ?? []).map(k => FURN_EN[k]  || k).filter(Boolean)
  const lightingList   = (details?.lighting   ?? []).map(k => LIGHT_EN[k] || '').filter(Boolean)
  const appliancesList = (details?.appliances ?? []).map(k => APP_EN[k]   || '').filter(Boolean)

  // ── Assemble prompt ───────────────────────────────────────────────────────

  const sections: string[] = []

  // [0] Header
  sections.push(`Professional interior design photography of a ${room}, custom style.`)

  // [0b] Structural preservation — repeated and reinforced
  sections.push(
    `CRITICAL STRUCTURAL RULE: ALL windows and doors from the original photo MUST be preserved EXACTLY. ` +
    `Every window opening stays in the same position, same size, same shape on the wall. ` +
    `Every door opening stays in the same position, same size, same shape. ` +
    `Do NOT remove any window. Do NOT add any window. Do NOT resize or relocate any window. ` +
    `Do NOT remove any door. Do NOT block any door or window opening. ` +
    `The room geometry and all architectural openings are FIXED and absolutely unchanged.`
  )

  // [1] WALLS
  if (wallFinishDescs.length) {
    sections.push(
      `WALLS: ${wallFinishDescs.join(' and ')}, ` +
      `applied to vertical wall surfaces only. Use the exact selected wall color. Not on ceiling. Not on floor. Not on backsplash. ` +
      `The walls are ${wallColorName}. NOT brown, NOT red, NOT wood color, NOT original color. The wall color MUST be ${wallColorName}.`
    )
  } else if (wallColorDesc) {
    sections.push(
      `WALLS: all vertical wall surfaces painted ${wallColorDesc}. Use the exact selected wall color. Ceiling is NOT this color. ` +
      `The walls are ${wallColorName}. NOT brown, NOT red, NOT wood color, NOT original color. The wall color MUST be ${wallColorName}.`
    )
  } else {
    sections.push(`WALLS: clean neutral walls.`)
  }

  // [2] CEILING
  sections.push(
    `CEILING: smooth plain white painted ceiling. ` +
    `No wall material, no wall color, no texture on the ceiling.`
  )

  // [3] FLOOR
  if (details?.floorMaterial) {
    const floorDesc = FLOOR_EN[details.floorMaterial]
    if (floorDesc) {
      const full = floorColorDesc ? `${floorDesc}, floor color: ${floorColorDesc}` : floorDesc
      sections.push(
        `FLOOR: REPLACE the entire floor with ${full}. ` +
        `Floor surface only, not on walls. ` +
        `The original floor is completely replaced. ` +
        `Do NOT keep any part of the original floor.`
      )
    }
  } else if (floorColorDesc) {
    sections.push(
      `FLOOR: REPLACE the entire floor surface with ${floorColorDesc}. ` +
      `The floor color is ${floorColorName}. ` +
      `Paint over the original floor completely. ` +
      `NOT the original floor color. The floor MUST be ${floorColorName}.`
    )
  }

  // [4] BACKSPLASH — FIX: explicit color repeated 3x, hex included, "visible" enforced
  if (backsplashZones.length) {
    const bsName = tileColorForTile
    const bsHex  = tileHex ? `, hex ${tileHex}` : ''

    sections.push(
      `KITCHEN BACKSPLASH ZONE: there MUST be a clearly visible backsplash tile strip ` +
      `between the kitchen countertop and upper cabinets. ` +
      `This strip is covered with ${bsName}${bsHex} ceramic subway tiles. ` +
      `The backsplash tile color is ${bsName}${bsHex}. ` +
      `The backsplash is ${bsName} and is clearly visible and distinct from the wall color. ` +
      `The wall finish does NOT continue into the backsplash zone — tiles override the wall here. ` +
      `Backsplash tiles exist ONLY in this strip between countertop and cabinets.`
    )
  }

  // [5] OTHER TILE ZONES
  if (otherTileDescs.length) {
    sections.push(
      `TILE ZONES: ${otherTileDescs.join('; ')}. Each zone confined to its surface.`
    )
  }

  // [6] FURNITURE
  if (furnitureList.length) {
    sections.push(`FURNITURE: ${furnitureList.join(', ')}.`)
  }

  // [7] LIGHTING
  if (lightingList.length) {
    sections.push(`LIGHTING: ${lightingList.join(', ')}.`)
  }

  // [8] APPLIANCES
  if (appliancesList.length) {
    sections.push(`APPLIANCES: ${appliancesList.join(', ')}.`)
  }

  // [9] ZONE ISOLATION RULE
  sections.push(
    `ZONE RULE: wall finish on walls only. Ceiling plain white. Floor material on floor only. ` +
    `Backsplash tiles only in backsplash strip. ` +
    `Use the selected palette colors exactly; do not substitute alternate wall or floor colors. ` +
    `REMINDER: all windows and doors are UNCHANGED from original photo — same position, same size.`
  )

  // [9b] COLOR OVERRIDE — replace original source colors with selected palette.
  if (wallColorDesc) {
    sections.push(
      `COLOR OVERRIDE: The original wall color from the source photo is REPLACED. ` +
      `New wall color is ${wallColorDesc}. Ignore the original wall pigment entirely.`
    )
  }
  if (floorColorDesc) {
    sections.push(
      `COLOR OVERRIDE: The original floor is COMPLETELY REPLACED. ` +
      `New floor is ${floorColorDesc}. ` +
      `The entire visible floor area must be ${floorColorName}. ` +
      `No original floor color remains anywhere.`
    )
  }
  if (tileColorDesc) {
    sections.push(
      `COLOR OVERRIDE: The original backsplash color from the source photo is REPLACED. ` +
      `New backsplash color is ${tileColorDesc}. Ignore the original tile pigment entirely.`
    )
  }

  // [10] Notes
  if (details?.extraNotes) sections.push(details.extraNotes.replace(/[^\x00-\x7F]/g,'').trim())

  // [11] Quality + final window reminder
  sections.push(
    `High-end architectural rendering, realistic textures, sharp details, ` +
    `8k resolution, professional studio lighting, magazine editorial quality, ` +
    `luxury lifestyle photography, soft natural lighting, cinematic lighting, ` +
    `photorealistic, hyperrealistic, ultra-detailed, high definition textures, ` +
    `HDR lighting, real camera lens, subtle shadows, realistic reflections, ` +
    `vibrant color grading, crisp studio lighting, high contrast, perfect straight geometry, ` +
    `sharp volumetric lighting, professional interior photography, award-winning architectural design, clean crisp focus. ` +
    `All windows visible and in original positions.`
  )

  const positive = sections.join(' ')

  // ── Negative prompt ───────────────────────────────────────────────────────

  const negParts: string[] = [...NEGATIVE_PROMPT_BASE_PARTS]

  for (const short of wallFinishShorts) {
    negParts.push(`${short} on ceiling`, `${short} on floor`, `${short} on backsplash`)
  }

  if (wallColorName) {
    negParts.push(`${wallColorName} ceiling`, `${wallColorName} floor`)
  }

  if (backsplashZones.length) {
    for (const short of wallFinishShorts) {
      negParts.push(`${short} in backsplash area`, `${short} between countertop and cabinets`)
    }
    negParts.push(
      `no backsplash`,
      `missing backsplash`,
      `invisible backsplash`,
      `backsplash same color as wall`,
      `wall covering entire kitchen wall with no backsplash`,
    )
    if (wallColorName) {
      negParts.push(`${wallColorName} backsplash`, `${wallColorName} tiles`)
    }
    if (tileColorName) {
      negParts.push(`${tileColorName} walls`, `${tileColorName} ceiling`, `${tileColorName} floor`)
    }
  }

  if (details?.floorMaterial) {
    const floorShort = details.floorMaterial.replace(/_/g, ' ')
    negParts.push(`${floorShort} on walls`, `${floorShort} on ceiling`)
  }

  const negative = negParts.join(', ')

  return { positive, negative }
}

// ─── Static negative prompt parts ────────────────────────────────────────────

const NEGATIVE_PROMPT_BASE_PARTS: string[] = [
  'cartoon', 'anime', 'sketch', 'painting', 'watercolor',
  'blurry', 'soft focus', 'out of focus', 'low quality', 'low resolution',
  'grainy', 'noisy', 'distorted', 'deformed',
  'watermark', 'text', 'logo', 'ugly', 'duplicated objects', 'cluttered shelves',
  'fused objects', 'deformed light fixtures', 'cropped furniture', 'cut off objects', 'chairs out of frame',
  // Color accuracy
  'wrong wall color', 'wrong floor color', 'incorrect wall color', 'incorrect floor color',
  'wrong paint color', 'wrong tile color', 'color mismatch',
  'original wall color', 'original floor color', 'original tile color',
  'keep original colors', 'preserve original colors',
  'same color as original', 'unchanged surface color',
  'source image colors', 'photo original colors',
  'brown walls', 'red walls', 'dark red walls', 'mahogany walls',
  'wood colored walls', 'warm colored walls', 'beige walls',
  'original wall color', 'brown floor', 'light floor', 'beige floor',
  'red backsplash', 'beige backsplash', 'brown backsplash',
  'original backsplash color', 'original colors', 'keep original colors',
  // Window preservation — comprehensive
  'window removed', 'missing window', 'no window', 'window gone',
  'blocked window', 'covered window', 'bricked up window',
  'wall where window was', 'window replaced by wall',
  'window moved', 'window resized', 'window relocated',
  'smaller window', 'larger window', 'extra window', 'added window',
  'different window position', 'window in wrong place',
  // Door preservation
  'door removed', 'missing door', 'no door', 'door gone',
  'blocked door', 'door replaced by wall', 'wall where door was',
  'door moved', 'door resized',
  // General structural
  'structural changes', 'architectural changes', 'room layout changed',
  'walls moved', 'room restructured', 'different room shape',
  // Quality
  'unrealistic', 'plastic look', 'oversaturated',
  'mixed materials', 'tiling errors', 'inconsistent surfaces',
  'material bleeding', 'wrong zone materials',
  'deformed structures', 'crooked lines', 'extra legs', 'warped furniture', 'ugly',
  'low-contrast', 'dull colors', 'dark moody shadows', 'blurry details', 'poor reflections',
]

export const NEGATIVE_PROMPT = NEGATIVE_PROMPT_BASE_PARTS.join(', ')
const NEGATIVE_PROMPT_BASE = NEGATIVE_PROMPT
