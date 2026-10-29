INSERT INTO categories (name, slug) VALUES
  ('Légumes frais', 'legumes-frais'),
  ('Tubercules', 'tubercules'),
  ('Feuilles', 'feuilles'),
  ('Racines', 'racines'),
  ('Condiments', 'condiments')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (
  slug, name, description, category_id,
  price_per_kg, stock_kg, image_url, alt, featured, status
)
SELECT
  'tomates', 'Tomates', 'Tomates juteuses...', c.id, 850, 12, 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=80', 'Tomates fraîches', TRUE, 'active'
FROM categories c WHERE c.slug = 'legumes-frais'
UNION ALL
SELECT 'oignons', 'Oignons', 'Oignons savoureux...', c.id, 500, 18, 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80', 'Oignons frais', FALSE, 'active' FROM categories c WHERE c.slug = 'legumes-frais'
UNION ALL
SELECT 'pommes-de-terre', 'Pommes de terre', 'Pommes de terre...', c.id, 700, 16, 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80', 'Pommes de terre', TRUE, 'active' FROM categories c WHERE c.slug = 'tubercules'
UNION ALL
SELECT 'choux', 'Choux', 'Choux frais...', c.id, 450, 20, 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=900&q=80', 'Choux', FALSE, 'active' FROM categories c WHERE c.slug = 'feuilles'
UNION ALL
SELECT 'navets', 'Navets', 'Navets doux...', c.id, 480, 11, 'https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=900&q=80', 'Navets', FALSE, 'active' FROM categories c WHERE c.slug = 'racines'
UNION ALL
SELECT 'ail', 'Ail', 'Gousses d’ail...', c.id, 900, 8, 'https://images.unsplash.com/photo-1557844352-761f2565b576?auto=format&fit=crop&w=900&q=80', 'Ail', FALSE, 'active' FROM categories c WHERE c.slug = 'condiments';

INSERT INTO delivery_zones (name, fee_xof, note) VALUES
  ('Dakar centre', 1500, 'Livraison standard en 1 à 2 jours ouvrés.'),
  ('Grand Dakar', 2200, 'Zone étendue selon le quartier et l’accès.'),
  ('Autre ville', 3000, 'Tarif à confirmer avec le commerçant selon la zone.');
