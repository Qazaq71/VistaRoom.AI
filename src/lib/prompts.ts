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
  my_style:          'custom interior design style, tailored to user specifications',
  minimalist:        'minimalist style, simple clean-line furniture, neutral palette, uncluttered, calm atmosphere',
  loft:              'industrial loft style, black metal frames, Edison bulb pendant lights, raw industrial furniture',
  scandinavian:      'Scandinavian hygge style, light birch furniture, wool textiles, warm cozy atmosphere',
  luxury:            'luxury interior, gold brass hardware, crystal chandelier, velvet upholstery, opulent decor',
  japandi:           'Japandi wabi-sabi style, low furniture, paper lantern light, handcrafted ceramics, zen atmosphere',
  biophilic:         'biophilic design, lush indoor plants, rattan furniture, natural wood accents, organic forms',
  artdeco:           'Art Deco style, brass fixtures, velvet armchairs, geometric patterns, 1930s glamour',
  mediterranean:     'Mediterranean style, arched elements, warm sunlight, rustic wooden furniture, ceramic accents',
  cyberpunk:         'cyberpunk style, holographic panels, glossy black surfaces, futuristic furniture, neon accents',
  // 10–100
  bohemian:          'bohemian boho style, eclectic layered textiles, macramé wall hangings, low cushion seating, warm earthy tones',
  coastal:           'coastal beach style, white shiplap walls, rope accents, linen upholstery, sea glass decor',
  rustic:            'rustic farmhouse style, reclaimed wood beams, wrought iron fixtures, stone fireplace, vintage accessories',
  contemporary:      'contemporary style, curved soft furnishings, muted warm tones, statement lighting, clean architectural lines',
  transitional:      'transitional style blending classic and modern elements, neutral palette, refined upholstery, timeless elegance',
  mid_century:       'mid-century modern style, tapered wooden legs, tulip chairs, retro pendant lamps, warm walnut tones',
  bauhaus:           'Bauhaus design style, primary colour accents, geometric forms, functional minimalism, tubular steel furniture',
  wabi_sabi:         'wabi-sabi aesthetic, imperfect textures, handmade ceramics, moss and stone elements, quiet tranquility',
  zen:               'zen Buddhist interior, tatami mats, bamboo screen panels, pebble garden elements, monochrome palette',
  tropical:          'tropical resort style, bold palm leaf prints, woven rattan, bright tropical flowers, bamboo accents',
  french_country:    'French country style, toile wallpaper, distressed painted furniture, lavender and cream palette, wrought iron',
  provence:          'Provence style, soft lavender walls, antique linen, faded painted wood, sunflower and lavender arrangements',
  colonial:          'British colonial style, rattan and wicker furniture, ceiling fan, tropical plants, khaki and ivory tones',
  gothic:            'Gothic interior, pointed arched windows, candelabras, dark velvet drapes, medieval stone textures',
  victorian:         'Victorian style, ornate carved wood furniture, tufted velvet settees, floral wallpaper, gilded mirrors',
  eclectic:          'eclectic interior style, bold mix of periods and cultures, vibrant colour clashes, gallery wall, curated chaos',
  maximalist:        'maximalist interior, layered patterns, jewel tones, floor-to-ceiling art, rich textures and ornamentation',
  japanese:          'Japanese traditional interior, shoji screens, engawa veranda, tatami flooring, ikebana flower arrangements',
  chinese_modern:    'modern Chinese interior, lacquered red accents, jade green tones, lattice screens, contemporary elegance',
  korean_modern:     'modern Korean interior style, clean lines, soft pastel tones, ondol-inspired low seating, minimalist decor',
  wabi_industrial:   'wabi-industrial fusion, raw concrete alongside warm aged wood, Edison bulbs, handmade pottery, quiet strength',
  new_nordic:        'New Nordic style, pale wood floors, sheepskin throws, organic ceramics, muted earthy greens and greys',
  dark_academia:     'dark academia interior, dark oak panelling, vintage leather armchairs, globe lamp, stacked leather books',
  light_academia:    'light academia interior, cream linen drapes, antique white furniture, soft botanical prints, warm candlelight',
  hollywood_regency:  'Hollywood Regency style, mirrored surfaces, leopard print accents, gold leaf, luxurious jewel tones',
  glam:              'modern glam interior, velvet sofas, mirrored furniture, crystal accessories, blush and gold palette',
  parisian:          'Parisian apartment style, Haussmann mouldings, herringbone parquet, marble fireplace, muted ivory and grey',
  italian_modern:    'modern Italian interior, polished marble, bespoke leather sofa, Italian tile, sophisticated neutral palette',
  brutalist:         'Brutalist interior aesthetic, exposed raw concrete walls, heavy geometric forms, industrial steel fixtures',
  organic:           'organic modern interior, curved plaster walls, terracotta vessels, limewash finish, warm natural materials',
  cottagecore:       'cottagecore style, floral linen, vintage crockery, dried flowers, wooden shelves, warm pastel palette',
  grandmillennial:   'grandmillennial style, chintz fabric, ruffled cushions, traditional china, antique brass hardware',
  mushroom_neutral:  'mushroom and taupe neutral interior, warm greige walls, organic textures, linen and wool, earthy tones',
  monochromatic:     'monochromatic white interior, all-white walls floors and furniture, tonal textures, pure serene atmosphere',
  black_white:       'black-and-white interior, bold contrast, graphic patterns, chrome fixtures, dramatic monochrome palette',
  earth_tones:       'earth tone interior, terracotta, ochre and rust palette, natural linen, clay vessels, warm adobe feel',
  jewel_tones:       'jewel tone interior, sapphire blue walls, emerald velvet sofa, amethyst accents, rich opulent colours',
  pastel_soft:       'soft pastel interior, blush pink and mint walls, delicate furniture, watercolour art prints, dreamy palette',
  resort:            'luxury resort interior, canopy beds, infinity pool view, tropical wood, cream linen, refined relaxation',
  moroccan:          'Moroccan riad style, mosaic zellige tiles, arched niches, lantern lighting, richly patterned textiles',
  turkish:           'Turkish interior style, Ottoman kilim rugs, carved wooden screens, brass hammered lanterns, teal and red',
  persian:           'Persian-inspired interior, hand-knotted rugs, ornate carved plasterwork, deep jewel colours, arch motifs',
  indian_luxury:     'Indian luxury interior, hand-embroidered silk cushions, carved teak furniture, jali screens, peacock colours',
  african:           'African-inspired interior, carved ebony masks, kente woven textiles, raw ochre walls, tribal patterns',
  mexican:           'Mexican hacienda interior, Talavera ceramic tiles, hand-painted walls, wrought iron, vivid warm palette',
  greek:             'Greek island interior, whitewashed walls, cobalt blue accents, terracotta urns, linen and cotton textiles',
  spanish_modernist: 'Spanish modernist interior inspired by Gaudí, mosaic surfaces, organic curved forms, bold Mediterranean palette',
  portuguese:        'Portuguese azulejo-inspired interior, hand-painted blue and white tile panels, terracotta floors, linen drapes',
  scandinavian_dark: 'dark Scandinavian interior, charcoal and forest green palette, raw linen, chunky knits, candlelit warmth',
  swiss_chalet:      'Swiss alpine chalet style, heavy pine wood panelling, checked wool throws, stone fireplace, antler decor',
  english_country:   'English country house style, chintz armchairs, floral wallpaper, oak beams, warm library atmosphere',
  irish_cottage:     'Irish stone cottage interior, whitewashed walls, peat fireplace, rough linen, green and cream palette',
  new_england:       'New England interior, white painted timber, nautical navy accents, wide plank floors, American quilts',
  southern_colonial: 'Southern colonial interior, pediment doorways, antique mahogany, floral chintz, warm magnolia tones',
  southwest:         'American Southwest interior, adobe walls, Navajo woven rugs, turquoise and terracotta, cacti decor',
  california_cool:   'California cool interior, whitewashed wood, rattan, indoor olive tree, linen drapery, relaxed lifestyle',
  palm_springs:      'Palm Springs midcentury exterior-inspired interior, pastel geometry, terrazzo floors, bold tropical art',
  tropical_modern:   'tropical modern interior, polished concrete, lush monstera plants, teak and stone, open-plan living',
  bali:              'Balinese resort interior, thatched canopy, carved stone accents, lotus pond motifs, bamboo and teak',
  japanese_zen_spa:  'Japanese spa interior, soaking tub, smooth stone pebbles, bamboo walls, cedar wood scent aesthetic',
  nordic_spa:        'Nordic spa interior, sauna wood panelling, white pebble flooring, copper accents, birch branches',
  industrial_modern: 'modern industrial interior, exposed brick wall, steel-framed windows, concrete countertops, Edison bulbs',
  tech_minimal:      'tech-minimal interior, matte white surfaces, hidden cable management, integrated smart lighting, no clutter',
  neon_pop:          'neon pop art interior, bright acrylic furniture, pop art prints, candy colours, playful maximalist energy',
  retro_70s:         'retro 1970s interior, burnt orange and avocado green palette, shag rug, macramé, arc floor lamp',
  retro_80s:         'retro 1980s interior, pastel Memphis pattern tiles, chrome furniture, neon signs, postmodern shapes',
  retro_50s:         'retro 1950s American diner interior, cherry red vinyl, chrome stools, checkerboard floor, jukebox',
  space_age:         'space age interior, futuristic egg chairs, metallic silver surfaces, circular forms, retro-futurist decor',
  steampunk:         'steampunk interior, copper pipe fittings, Victorian machinery, clock gears decor, leather and brass',
  nautical:          'nautical interior, navy and white stripes, ship wheel decor, rope knots, porthole mirrors, weathered wood',
  alpine:            'alpine lodge interior, stone fireplace, antler chandelier, buffalo plaid textiles, reclaimed wood walls',
  prairie:           'prairie Craftsman interior, built-in oak cabinetry, art-glass windows, handcrafted ceramic tiles, earthy tones',
  georgian:          'Georgian period interior, symmetrical sash windows, Adam-style plasterwork, mahogany furniture, deep red walls',
  neoclassical:      'neoclassical interior, fluted Ionic columns, gilded plaster cornices, silk drapes, white marble and gold',
  empire:            'French Empire interior, gilded bronze mounts, rich silk upholstery, military motifs, imperial grandeur',
  baroque:           'Baroque interior, elaborate carved gilded furniture, dramatic ceiling frescoes, heavy velvet curtains, grandeur',
  rococo:            'Rococo interior, pastel plasterwork, asymmetric shell motifs, ornate gilt mirrors, silk damask walls',
  renaissance:       'Renaissance-inspired interior, coffered painted ceilings, marble columns, tapestries, classical proportions',
  zen_garden_room:   'indoor zen garden room, gravel raked pattern, stepping stones, bamboo fountain, moss wall feature',
  spa_white:         'luxury spa-white interior, white marble, frosted glass, orchid arrangements, steam room aesthetic',
  cave_house:        'cave house interior, curved white plaster walls, arched openings, earth tones, troglodyte minimalism',
  treehouse:         'treehouse interior, raw branch supports, moss walls, hammock bed, leafy canopy ceiling, cabin warmth',
  container_home:    'container home interior, corrugated steel walls, exposed insulation aesthetic, industrial minimalism',
  greenhouse_room:   'greenhouse conservatory interior, floor-to-ceiling glass, cast iron frames, tropical plants, humid greens',
  gallery_white:     'art gallery white box interior, polished concrete floor, museum pin spots, large canvases, pure white',
  library_study:     'private library and study interior, floor-to-ceiling bookshelves, rolling ladder, leather Chesterfield, globe',
  children_bright:   'bright children\'s room interior, primary colour furniture, chalkboard wall, soft play area, colourful storage',
  teen_room:         'teenager\'s bedroom interior, neon strip lights, gaming desk setup, dark walls, sports and music memorabilia',
  home_office_zen:   'zen home office interior, floating desk, bonsai tree, soft linen curtain, natural light, calm focus atmosphere',
  yoga_studio:       'home yoga studio interior, bamboo floor, white walls, mirror wall, hanging silk hammock, serene plants',
  wine_cellar:       'wine cellar interior, stone arched ceiling, wooden wine racks, ambient amber lighting, barrel table',
  home_cinema:       'home cinema interior, dark acoustic panels, tiered velvet seating, projector screen, star ceiling effect',
}

export const STYLE_WALL_DEFAULT: Record<string, string> = {
  my_style:          '',
  minimalist:        'plain white walls',
  loft:              'exposed red brick walls',
  scandinavian:      'white painted walls',
  luxury:            'white marble wall panels',
  japandi:           'warm natural oak wall panels',
  biophilic:         'living moss wall accent',
  artdeco:           'geometric gold wallpaper',
  mediterranean:     'whitewashed plaster walls',
  cyberpunk:         'dark charcoal walls',
  bohemian:          'warm terracotta painted walls',
  coastal:           'white shiplap wood plank walls',
  rustic:            'rough stone wall cladding',
  contemporary:      'smooth warm greige painted walls',
  transitional:      'soft white painted walls with wainscoting',
  mid_century:       'warm walnut veneer accent wall',
  bauhaus:           'white walls with primary colour accent panel',
  wabi_sabi:         'organic limewash walls with imperfect texture',
  zen:               'natural white plaster walls',
  tropical:          'white walls with bold tropical wallpaper accent',
  french_country:    'toile de Jouy wallpaper walls',
  provence:          'pale lavender painted walls',
  colonial:          'ivory painted walls with louvred shutters',
  gothic:            'dark stone cladding walls',
  victorian:         'deep burgundy floral wallpaper walls',
  eclectic:          'mix of colourful gallery wall prints',
  maximalist:        'jewel-tone patterned wallpaper walls',
  japanese:          'natural washi paper shoji screen walls',
  chinese_modern:    'lacquered red panel accent wall',
  korean_modern:     'soft beige clean painted walls',
  wabi_industrial:   'raw concrete textured walls',
  new_nordic:        'pale birch grey painted walls',
  dark_academia:     'dark oak wood panelling walls',
  light_academia:    'antique cream painted walls',
  hollywood_regency:  'mirrored wall panels',
  glam:              'blush pink velvet textured walls',
  parisian:          'ivory painted walls with ornate plaster moulding',
  italian_modern:    'polished white marble wall panels',
  brutalist:         'raw exposed concrete walls',
  organic:           'curved limewash plaster walls',
  cottagecore:       'soft white painted walls with floral wallpaper accent',
  grandmillennial:   'chintz floral wallpaper walls',
  mushroom_neutral:  'warm greige painted walls',
  monochromatic:     'pure white painted walls',
  black_white:       'crisp white walls with black geometric trim',
  earth_tones:       'terracotta clay tinted walls',
  jewel_tones:       'deep sapphire blue painted walls',
  pastel_soft:       'blush pink painted walls',
  resort:            'creamy linen textured walls',
  moroccan:          'white walls with zellige mosaic tile lower section',
  turkish:           'teal patterned tile accent walls',
  persian:           'ornate carved plasterwork painted walls',
  indian_luxury:     'deep saffron yellow painted walls',
  african:           'ochre mud-plaster textured walls',
  mexican:           'hand-painted Talavera tile walls',
  greek:             'white limewashed walls',
  spanish_modernist: 'mosaic tile curved walls',
  portuguese:        'azulejo blue and white tile walls',
  scandinavian_dark: 'dark charcoal forest green painted walls',
  swiss_chalet:      'pine wood panelled walls',
  english_country:   'chintz wallpaper covered walls',
  irish_cottage:     'whitewashed rough plaster walls',
  new_england:       'white painted timber board walls',
  southern_colonial: 'magnolia white painted walls',
  southwest:         'warm adobe earth plaster walls',
  california_cool:   'whitewashed light timber walls',
  palm_springs:      'geometric pastel tile accent wall',
  tropical_modern:   'smooth polished concrete walls',
  bali:              'carved stone relief textured walls',
  japanese_zen_spa:  'smooth natural cedar wood walls',
  nordic_spa:        'light birch sauna wood panelled walls',
  industrial_modern: 'exposed dark brick walls',
  tech_minimal:      'matte white smooth walls',
  neon_pop:          'white walls with vibrant neon accent',
  retro_70s:         'warm burnt orange textured wallpaper walls',
  retro_80s:         'pastel Memphis pattern wallpaper walls',
  retro_50s:         'checkerboard black and white tile walls',
  space_age:         'metallic silver reflective walls',
  steampunk:         'dark Victorian wallpaper with copper pipe feature walls',
  nautical:          'white painted walls with navy stripe accent',
  alpine:            'reclaimed log cabin wood walls',
  prairie:           'warm oak wood built-in panelled walls',
  georgian:          'deep red painted walls with white Corinthian pilasters',
  neoclassical:      'white plaster walls with fluted column pilasters',
  empire:            'rich silk green wallpaper walls with gilt borders',
  baroque:           'heavy tapestry and gilded plasterwork walls',
  rococo:            'pale pink plaster walls with white carved shell motifs',
  renaissance:       'painted fresco stone wall panels',
  zen_garden_room:   'smooth white plaster walls with bamboo screen',
  spa_white:         'pure white marble wall panels',
  cave_house:        'curved white plaster cave walls',
  treehouse:         'rough natural bark wood walls',
  container_home:    'corrugated steel wall panels',
  greenhouse_room:   'glass and wrought iron frame walls',
  gallery_white:     'pure white smooth gallery walls',
  library_study:     'floor-to-ceiling dark oak bookshelf walls',
  children_bright:   'bright white walls with primary colour painted panels',
  teen_room:         'dark matte black painted walls',
  home_office_zen:   'soft white painted walls',
  yoga_studio:       'white plaster smooth walls',
  wine_cellar:       'natural stone vault arched walls',
  home_cinema:       'dark acoustic fabric wall panels',
}

export const STYLE_FLOOR_DEFAULT: Record<string, string> = {
  my_style:          '',
  minimalist:        'light wood floor',
  loft:              'polished concrete floor',
  scandinavian:      'light pine floor',
  luxury:            'white marble floor',
  japandi:           'natural oak floor',
  biophilic:         'natural stone floor',
  artdeco:           'chevron marble floor',
  mediterranean:     'terracotta tile floor',
  cyberpunk:         'glossy black epoxy floor',
  bohemian:          'natural jute rug over terracotta tile floor',
  coastal:           'bleached white oak plank floor',
  rustic:            'rough-sawn reclaimed wide plank wood floor',
  contemporary:      'large format light stone porcelain floor',
  transitional:      'light oak herringbone parquet floor',
  mid_century:       'warm walnut herringbone parquet floor',
  bauhaus:           'polished pale stone floor',
  wabi_sabi:         'worn natural stone floor with sand-filled joints',
  zen:               'tatami mat floor',
  tropical:          'natural bamboo floor',
  french_country:    'aged terracotta tile floor',
  provence:          'worn limestone floor',
  colonial:          'polished dark hardwood floor',
  gothic:            'dark slate stone floor',
  victorian:         'encaustic geometric tile floor',
  eclectic:          'patchwork mosaic tile floor',
  maximalist:        'richly patterned Persian rug over dark wood floor',
  japanese:          'natural tatami rush mat floor',
  chinese_modern:    'polished black granite floor',
  korean_modern:     'warm light wood ondol-style floor',
  wabi_industrial:   'polished concrete floor with raw aggregate',
  new_nordic:        'wide light ash plank floor',
  dark_academia:     'aged dark hardwood floor',
  light_academia:    'pale washed oak floor',
  hollywood_regency:  'white marble with black inlay floor',
  glam:              'ivory marble floor',
  parisian:          'chevron light oak parquet floor',
  italian_modern:    'large format polished marble floor',
  brutalist:         'raw polished concrete floor',
  organic:           'warm sand-toned large format porcelain floor',
  cottagecore:       'worn stone tile floor with rag rug',
  grandmillennial:   'traditional parquet wood floor',
  mushroom_neutral:  'warm greige porcelain floor tiles',
  monochromatic:     'white polished concrete floor',
  black_white:       'checkerboard black and white marble floor',
  earth_tones:       'terracotta clay tile floor',
  jewel_tones:       'dark oak herringbone floor',
  pastel_soft:       'light blonde wood floor',
  resort:            'whitewashed teak deck floor',
  moroccan:          'hand-painted encaustic cement tile floor',
  turkish:           'hand-woven kilim rug over stone floor',
  persian:           'hand-knotted Persian wool rug over marble floor',
  indian_luxury:     'inlaid marble pietra dura floor',
  african:           'rough-hewn dark timber floor',
  mexican:           'hand-painted Talavera terracotta tile floor',
  greek:             'white marble floor with cobalt blue mosaic border',
  spanish_modernist: 'organic shaped mosaic tile floor',
  portuguese:        'traditional azulejo geometric tile floor',
  scandinavian_dark: 'dark stained wide plank floor',
  swiss_chalet:      'solid pine wide plank floor',
  english_country:   'wide oak plank floor',
  irish_cottage:     'rough flagstone floor',
  new_england:       'wide pine plank painted floor',
  southern_colonial: 'polished dark hardwood floor',
  southwest:         'terracotta saltillo tile floor',
  california_cool:   'whitewashed light wood floor',
  palm_springs:      'terrazzo floor',
  tropical_modern:   'polished poured concrete floor',
  bali:              'dark teak wood floor',
  japanese_zen_spa:  'smooth river-stone mosaic floor',
  nordic_spa:        'light birch wood slatted floor',
  industrial_modern: 'polished grey concrete floor',
  tech_minimal:      'seamless white polished floor',
  neon_pop:          'glossy white resin floor',
  retro_70s:         'shag carpet over dark wood floor',
  retro_80s:         'terrazzo coloured floor',
  retro_50s:         'checkerboard vinyl tile floor',
  space_age:         'glossy white seamless floor',
  steampunk:         'dark iron grate flooring over oak board',
  nautical:          'whitewashed teak board floor',
  alpine:            'rough-hewn stone floor',
  prairie:           'wide plank quartersawn oak floor',
  georgian:          'black and white chequered marble floor',
  neoclassical:      'white Carrara marble floor with dark inlay border',
  empire:            'parquet de Versailles oak floor',
  baroque:           'inlaid marble geometric floor',
  rococo:            'pale parquet floor with floral border',
  renaissance:       'terracotta hexagonal tile floor',
  zen_garden_room:   'raked sand and smooth pebble floor',
  spa_white:         'white honed marble floor',
  cave_house:        'rough natural stone floor',
  treehouse:         'natural branch-edge live wood floor',
  container_home:    'industrial epoxy grey floor',
  greenhouse_room:   'flagstone garden floor',
  gallery_white:     'polished white concrete floor',
  library_study:     'dark aged hardwood floor',
  children_bright:   'soft foam rubber padded floor with colour tiles',
  teen_room:         'dark wood floor with gaming rug',
  home_office_zen:   'light bamboo floor',
  yoga_studio:       'natural cork yoga floor',
  wine_cellar:       'dark stone cobblestone floor',
  home_cinema:       'dark carpet floor',
}

export const STYLE_PROMPTS: Record<string, string> = Object.fromEntries(
  Object.keys(STYLE_BASE).map(k => [k,
    STYLE_BASE[k] + ', ' + STYLE_WALL_DEFAULT[k] + ', ' + STYLE_FLOOR_DEFAULT[k]
  ])
)

export const STYLES: Record<string, { label: string; emoji: string; prompt: string }> = {
  minimalist:        { label: 'Minimalism',        emoji: '-', prompt: STYLE_PROMPTS.minimalist },
  loft:              { label: 'Loft',               emoji: '-', prompt: STYLE_PROMPTS.loft },
  scandinavian:      { label: 'Scandinavian',       emoji: '-', prompt: STYLE_PROMPTS.scandinavian },
  luxury:            { label: 'Luxury',             emoji: '-', prompt: STYLE_PROMPTS.luxury },
  japandi:           { label: 'Japandi',            emoji: '-', prompt: STYLE_PROMPTS.japandi },
  biophilic:         { label: 'Biophilic',          emoji: '-', prompt: STYLE_PROMPTS.biophilic },
  artdeco:           { label: 'Art Deco',           emoji: '-', prompt: STYLE_PROMPTS.artdeco },
  mediterranean:     { label: 'Mediterranean',      emoji: '-', prompt: STYLE_PROMPTS.mediterranean },
  cyberpunk:         { label: 'Cyberpunk',          emoji: '-', prompt: STYLE_PROMPTS.cyberpunk },
  bohemian:          { label: 'Bohemian',           emoji: '-', prompt: STYLE_PROMPTS.bohemian },
  coastal:           { label: 'Coastal',            emoji: '-', prompt: STYLE_PROMPTS.coastal },
  rustic:            { label: 'Rustic',             emoji: '-', prompt: STYLE_PROMPTS.rustic },
  contemporary:      { label: 'Contemporary',       emoji: '-', prompt: STYLE_PROMPTS.contemporary },
  transitional:      { label: 'Transitional',       emoji: '-', prompt: STYLE_PROMPTS.transitional },
  mid_century:       { label: 'Mid-Century',        emoji: '-', prompt: STYLE_PROMPTS.mid_century },
  bauhaus:           { label: 'Bauhaus',            emoji: '-', prompt: STYLE_PROMPTS.bauhaus },
  wabi_sabi:         { label: 'Wabi-Sabi',          emoji: '-', prompt: STYLE_PROMPTS.wabi_sabi },
  zen:               { label: 'Zen',                emoji: '-', prompt: STYLE_PROMPTS.zen },
  tropical:          { label: 'Tropical',           emoji: '-', prompt: STYLE_PROMPTS.tropical },
  french_country:    { label: 'French Country',     emoji: '-', prompt: STYLE_PROMPTS.french_country },
  provence:          { label: 'Provence',           emoji: '-', prompt: STYLE_PROMPTS.provence },
  colonial:          { label: 'Colonial',           emoji: '-', prompt: STYLE_PROMPTS.colonial },
  gothic:            { label: 'Gothic',             emoji: '-', prompt: STYLE_PROMPTS.gothic },
  victorian:         { label: 'Victorian',          emoji: '-', prompt: STYLE_PROMPTS.victorian },
  eclectic:          { label: 'Eclectic',           emoji: '-', prompt: STYLE_PROMPTS.eclectic },
  maximalist:        { label: 'Maximalist',         emoji: '-', prompt: STYLE_PROMPTS.maximalist },
  japanese:          { label: 'Japanese Trad.',     emoji: '-', prompt: STYLE_PROMPTS.japanese },
  chinese_modern:    { label: 'Chinese Modern',     emoji: '-', prompt: STYLE_PROMPTS.chinese_modern },
  korean_modern:     { label: 'Korean Modern',      emoji: '-', prompt: STYLE_PROMPTS.korean_modern },
  wabi_industrial:   { label: 'Wabi-Industrial',    emoji: '-', prompt: STYLE_PROMPTS.wabi_industrial },
  new_nordic:        { label: 'New Nordic',         emoji: '-', prompt: STYLE_PROMPTS.new_nordic },
  dark_academia:     { label: 'Dark Academia',      emoji: '-', prompt: STYLE_PROMPTS.dark_academia },
  light_academia:    { label: 'Light Academia',     emoji: '-', prompt: STYLE_PROMPTS.light_academia },
  hollywood_regency: { label: 'Hollywood Regency',  emoji: '-', prompt: STYLE_PROMPTS.hollywood_regency },
  glam:              { label: 'Glam',               emoji: '-', prompt: STYLE_PROMPTS.glam },
  parisian:          { label: 'Parisian',           emoji: '-', prompt: STYLE_PROMPTS.parisian },
  italian_modern:    { label: 'Italian Modern',     emoji: '-', prompt: STYLE_PROMPTS.italian_modern },
  brutalist:         { label: 'Brutalist',          emoji: '-', prompt: STYLE_PROMPTS.brutalist },
  organic:           { label: 'Organic Modern',     emoji: '-', prompt: STYLE_PROMPTS.organic },
  cottagecore:       { label: 'Cottagecore',        emoji: '-', prompt: STYLE_PROMPTS.cottagecore },
  grandmillennial:   { label: 'Grandmillennial',    emoji: '-', prompt: STYLE_PROMPTS.grandmillennial },
  mushroom_neutral:  { label: 'Mushroom Neutral',   emoji: '-', prompt: STYLE_PROMPTS.mushroom_neutral },
  monochromatic:     { label: 'Monochromatic',      emoji: '-', prompt: STYLE_PROMPTS.monochromatic },
  black_white:       { label: 'Black & White',      emoji: '-', prompt: STYLE_PROMPTS.black_white },
  earth_tones:       { label: 'Earth Tones',        emoji: '-', prompt: STYLE_PROMPTS.earth_tones },
  jewel_tones:       { label: 'Jewel Tones',        emoji: '-', prompt: STYLE_PROMPTS.jewel_tones },
  pastel_soft:       { label: 'Pastel Soft',        emoji: '-', prompt: STYLE_PROMPTS.pastel_soft },
  resort:            { label: 'Resort',             emoji: '-', prompt: STYLE_PROMPTS.resort },
  moroccan:          { label: 'Moroccan',           emoji: '-', prompt: STYLE_PROMPTS.moroccan },
  turkish:           { label: 'Turkish',            emoji: '-', prompt: STYLE_PROMPTS.turkish },
  persian:           { label: 'Persian',            emoji: '-', prompt: STYLE_PROMPTS.persian },
  indian_luxury:     { label: 'Indian Luxury',      emoji: '-', prompt: STYLE_PROMPTS.indian_luxury },
  african:           { label: 'African',            emoji: '-', prompt: STYLE_PROMPTS.african },
  mexican:           { label: 'Mexican',            emoji: '-', prompt: STYLE_PROMPTS.mexican },
  greek:             { label: 'Greek',              emoji: '-', prompt: STYLE_PROMPTS.greek },
  spanish_modernist: { label: 'Spanish Modernist',  emoji: '-', prompt: STYLE_PROMPTS.spanish_modernist },
  portuguese:        { label: 'Portuguese',         emoji: '-', prompt: STYLE_PROMPTS.portuguese },
  scandinavian_dark: { label: 'Dark Scandinavian',  emoji: '-', prompt: STYLE_PROMPTS.scandinavian_dark },
  swiss_chalet:      { label: 'Swiss Chalet',       emoji: '-', prompt: STYLE_PROMPTS.swiss_chalet },
  english_country:   { label: 'English Country',    emoji: '-', prompt: STYLE_PROMPTS.english_country },
  irish_cottage:     { label: 'Irish Cottage',      emoji: '-', prompt: STYLE_PROMPTS.irish_cottage },
  new_england:       { label: 'New England',        emoji: '-', prompt: STYLE_PROMPTS.new_england },
  southern_colonial: { label: 'Southern Colonial',  emoji: '-', prompt: STYLE_PROMPTS.southern_colonial },
  southwest:         { label: 'Southwest',          emoji: '-', prompt: STYLE_PROMPTS.southwest },
  california_cool:   { label: 'California Cool',    emoji: '-', prompt: STYLE_PROMPTS.california_cool },
  palm_springs:      { label: 'Palm Springs',       emoji: '-', prompt: STYLE_PROMPTS.palm_springs },
  tropical_modern:   { label: 'Tropical Modern',    emoji: '-', prompt: STYLE_PROMPTS.tropical_modern },
  bali:              { label: 'Bali',               emoji: '-', prompt: STYLE_PROMPTS.bali },
  japanese_zen_spa:  { label: 'Japanese Zen Spa',   emoji: '-', prompt: STYLE_PROMPTS.japanese_zen_spa },
  nordic_spa:        { label: 'Nordic Spa',         emoji: '-', prompt: STYLE_PROMPTS.nordic_spa },
  industrial_modern: { label: 'Industrial Modern',  emoji: '-', prompt: STYLE_PROMPTS.industrial_modern },
  tech_minimal:      { label: 'Tech Minimal',       emoji: '-', prompt: STYLE_PROMPTS.tech_minimal },
  neon_pop:          { label: 'Neon Pop',           emoji: '-', prompt: STYLE_PROMPTS.neon_pop },
  retro_70s:         { label: 'Retro 70s',          emoji: '-', prompt: STYLE_PROMPTS.retro_70s },
  retro_80s:         { label: 'Retro 80s',          emoji: '-', prompt: STYLE_PROMPTS.retro_80s },
  retro_50s:         { label: 'Retro 50s',          emoji: '-', prompt: STYLE_PROMPTS.retro_50s },
  space_age:         { label: 'Space Age',          emoji: '-', prompt: STYLE_PROMPTS.space_age },
  steampunk:         { label: 'Steampunk',          emoji: '-', prompt: STYLE_PROMPTS.steampunk },
  nautical:          { label: 'Nautical',           emoji: '-', prompt: STYLE_PROMPTS.nautical },
  alpine:            { label: 'Alpine Lodge',       emoji: '-', prompt: STYLE_PROMPTS.alpine },
  prairie:           { label: 'Prairie Craftsman',  emoji: '-', prompt: STYLE_PROMPTS.prairie },
  georgian:          { label: 'Georgian',           emoji: '-', prompt: STYLE_PROMPTS.georgian },
  neoclassical:      { label: 'Neoclassical',       emoji: '-', prompt: STYLE_PROMPTS.neoclassical },
  empire:            { label: 'Empire',             emoji: '-', prompt: STYLE_PROMPTS.empire },
  baroque:           { label: 'Baroque',            emoji: '-', prompt: STYLE_PROMPTS.baroque },
  rococo:            { label: 'Rococo',             emoji: '-', prompt: STYLE_PROMPTS.rococo },
  renaissance:       { label: 'Renaissance',        emoji: '-', prompt: STYLE_PROMPTS.renaissance },
  zen_garden_room:   { label: 'Zen Garden Room',    emoji: '-', prompt: STYLE_PROMPTS.zen_garden_room },
  spa_white:         { label: 'Spa White',          emoji: '-', prompt: STYLE_PROMPTS.spa_white },
  cave_house:        { label: 'Cave House',         emoji: '-', prompt: STYLE_PROMPTS.cave_house },
  treehouse:         { label: 'Treehouse',          emoji: '-', prompt: STYLE_PROMPTS.treehouse },
  container_home:    { label: 'Container Home',     emoji: '-', prompt: STYLE_PROMPTS.container_home },
  greenhouse_room:   { label: 'Greenhouse Room',    emoji: '-', prompt: STYLE_PROMPTS.greenhouse_room },
  gallery_white:     { label: 'Gallery White',      emoji: '-', prompt: STYLE_PROMPTS.gallery_white },
  library_study:     { label: 'Library & Study',    emoji: '-', prompt: STYLE_PROMPTS.library_study },
  children_bright:   { label: 'Children\'s Bright', emoji: '-', prompt: STYLE_PROMPTS.children_bright },
  teen_room:         { label: 'Teen Room',          emoji: '-', prompt: STYLE_PROMPTS.teen_room },
  home_office_zen:   { label: 'Home Office Zen',    emoji: '-', prompt: STYLE_PROMPTS.home_office_zen },
  yoga_studio:       { label: 'Yoga Studio',        emoji: '-', prompt: STYLE_PROMPTS.yoga_studio },
  wine_cellar:       { label: 'Wine Cellar',        emoji: '-', prompt: STYLE_PROMPTS.wine_cellar },
  home_cinema:       { label: 'Home Cinema',        emoji: '-', prompt: STYLE_PROMPTS.home_cinema },
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
    const positive = [
      room,
      STYLE_BASE[sk]          || STYLE_BASE.minimalist,
      STYLE_WALL_DEFAULT[sk]  || '',
      STYLE_FLOOR_DEFAULT[sk] || '',
      'ALL windows and doors MUST remain in their EXACT original positions from the source photo',
      'window openings are FIXED — same size, same shape, same location on the wall',
      'door openings are FIXED — same size, same shape, same location',
      'do NOT remove any window', 'do NOT add any window', 'do NOT resize any window',
      'do NOT remove any door', 'do NOT block any opening',
      'the architectural structure of the room is UNCHANGED',
      'photorealistic', 'hyperrealistic', '8k resolution',
      'professional interior photography', 'sharp focus',
      'realistic materials and textures', 'perfect lighting',
    ].filter(Boolean).join(', ')
    return { positive, negative: NEGATIVE_PROMPT_BASE }
  }

  // ── my_style ──────────────────────────────────────────────────────────────

  const wallColorName  = hexToColorName(details?.wallColorHex  || '')
  const floorColorName = hexToColorName(details?.floorColorHex || '')
  const tileColorName  = hexToColorName(details?.tileColorHex  || '')

  // Hex values — passed separately as additional color signal
  const wallHex  = details?.wallColorHex  ? details.wallColorHex.toUpperCase()  : ''
  const floorHex = details?.floorColorHex ? details.floorColorHex.toUpperCase() : ''
  const tileHex  = details?.tileColorHex  ? details.tileColorHex.toUpperCase()  : ''

  // Combined color description: "light green, hex #81C784"
  // Comma-separated — no parentheses which confuse the tokenizer
  const wallColorDesc  = wallColorName  && wallHex  ? `${wallColorName}, hex ${wallHex}`  : wallColorName  || ''
  const floorColorDesc = floorColorName && floorHex ? `${floorColorName}, hex ${floorHex}` : floorColorName || ''
  const tileColorDesc  = tileColorName  && tileHex  ? `${tileColorName}, hex ${tileHex}`  : tileColorName  || ''

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
      `applied to vertical wall surfaces only. Not on ceiling. Not on floor. Not on backsplash.`
    )
  } else if (wallColorDesc) {
    sections.push(
      `WALLS: all vertical wall surfaces painted ${wallColorDesc}. Ceiling is NOT this color.`
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
      const full = floorColorDesc ? `${floorColorDesc} ${floorDesc}` : floorDesc
      sections.push(`FLOOR: ${full}. Floor surface only, not on walls.`)
    }
  } else if (floorColorDesc) {
    sections.push(`FLOOR: floor surface in ${floorColorDesc}.`)
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
    `REMINDER: all windows and doors are UNCHANGED from original photo — same position, same size.`
  )

  // [10] Notes
  if (details?.extraNotes) sections.push(details.extraNotes.replace(/[^\x00-\x7F]/g,'').trim())

  // [11] Quality + final window reminder
  sections.push(
    `High-end architectural rendering, realistic textures, sharp details, ` +
    `8k resolution, professional studio lighting, photorealistic, hyperrealistic. ` +
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
  'blurry', 'low quality', 'distorted', 'deformed',
  'watermark', 'text', 'logo', 'ugly',
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
]

export const NEGATIVE_PROMPT = NEGATIVE_PROMPT_BASE_PARTS.join(', ')
const NEGATIVE_PROMPT_BASE = NEGATIVE_PROMPT
