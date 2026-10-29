# Configuration Supabase pour Kay Ndougou

## 1) Créer le projet

1. Aller sur https://supabase.com
2. Créer un nouveau projet.
3. Récupérer les informations suivantes :
   - Project URL
   - Anon key
   - Service role key

## 2) Variables d'environnement

Créer un fichier `.env.local` à la racine du projet avec :

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxx
SUPABASE_SERVICE_ROLE_KEY=xxxxx
NEXT_PUBLIC_APP_ENV=demo
NEXT_PUBLIC_DEMO_MODE=false
```

Ne jamais exposer la `SUPABASE_SERVICE_ROLE_KEY` côté navigateur.

## 3) Importer le schéma SQL

Dans Supabase > SQL Editor, exécuter :
- `supabase/schema.sql`
- `supabase/seed.sql`

## 4) Créer le compte admin

1. Aller dans Supabase > Authentication > Users
2. Ajouter un utilisateur admin
3. Vérifier le compte via le lien d’activation ou l’email de test
4. Se connecter via `/admin/login`

## 5) Vérifier les accès

- Le public peut lire les produits actifs.
- L’admin doit être authentifié pour accéder au dashboard.
- Les routes `/admin/*` sont protégées.

## 6) Déploiement Vercel

Dans Vercel > Project > Settings > Environment Variables, ajouter les mêmes variables.

## 7) Production

La configuration réelle ne doit être activée que si :
- la base est créée,
- le compte admin est validé,
- les RLS sont vérifiés,
- les paiements et livraisons réelles sont prêtes.
