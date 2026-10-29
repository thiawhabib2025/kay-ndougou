# Kay Ndougou

Kay Ndougou est une boutique en ligne de légumes au Sénégal, pensée pour le marché local et conçue pour un usage mobile-first. Le projet est une démonstration fonctionnelle, locale et sécurisée, avec des prix fictifs clairement identifiés.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Supabase pour la base de données et l'authentification admin
- Vitest pour les tests unitaires de logique métier

## Démarrage rapide

1. Cloner le dépôt.
2. Copier le fichier `.env.example` en `.env.local`.
3. Remplir les variables Supabase si vous souhaitez activer le mode production.
4. Installer les dépendances :

```bash
npm install
```

5. Lancer le serveur local :

```bash
npm run dev
```

6. Ouvrir l'application sur : http://localhost:3000

## Variables d'environnement

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_APP_ENV=demo
NEXT_PUBLIC_DEMO_MODE=true
```

Important : sans configuration Supabase, le site reste en mode démo autonome avec un panier local, un catalogue statique et des messages explicites indiquant que les paiements et livraisons réelles ne sont pas activés.

## Base de données (Supabase)

1. Créer un projet Supabase.
2. Ouvrir l'éditeur SQL.
3. Exécuter le fichier `supabase/schema.sql`.
4. Exécuter `supabase/seed.sql` pour injecter les données initiales.
5. Configurer les RLS et un rôle administrateur si vous voulez sécuriser les accès.

## Authentification admin

Le site prévoit un accès administrateur sécurisé uniquement si les variables Supabase sont correctement configurées. Les routes admin doivent être protégées côté server et les clés de service ne doivent jamais être exposées au navigateur.

## Démonstration locale

Le fonctionnement actuel du MVP est basé sur une démonstration locale qui garde le panier dans le navigateur et présente des prix fictifs. Les éléments de paiement, livraison, et SMS/WhatsApp ne doivent pas être présentés comme actifs tant qu'ils ne sont pas réellement configurés.

## Commandes utiles

```bash
npm run dev
npm run build
npm run lint
npm test
```

## Déploiement

- Vercel : branche principale ou connexion GitHub avec variables d’environnement.
- Vérifier que `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY` sont définies.
- Ne pas activer de vraie passerelle de paiement sans finalisation du contrat et les validations nécessaires.

## Points de vigilance

- Les prix affichés sont démonstratifs et à confirmer.
- Les quantités doivent être demandées par lots de 0,25 kg.
- Le client connaît le coût de livraison avant validation.
- Le site donne des indications claires quand la logistique réelle n’est pas encore configurée.
