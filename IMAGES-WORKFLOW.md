# Gestion des images BioPocket

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Convention de nommage](#convention-de-nommage)
- [Sauvegarde des images sur Amazon](#sauvegarde-des-images-sur-amazon)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



## Convention de nommage

* L'image principale d'un thème ou d'une action doit s'appeler `CODE-main.jpg`, par exemple `F5-main.jpg` ou `F5-2-main.jpg`.
* Les images accessoires d'un thème ou d'une tâche qui peuvent être intégrées à leur descriptions doivent s'appeler `CODE-NAME.jpg`,
  par exemple `F5-habitat.jpg` ou `F5-hello-world.jpg`.
  `NAME` peut être n'importe quelle descriptif servant à décrire l'image, composé de lettres (sans accents) et de chiffres séparés par des tirets.
* Si plusieurs versions de l'image sont disponibles et que le choix n'est pas encore définitif,
  ajouter les autres variantes avec le suffix `-a`, `-b`, `-c`, etc (avant le `.jpg`), par exemple `F5-main-b.jpg`, ou `F5-2-habitat-c.jpg`.



## Sauvegarde des images sur Amazon

Naviguer à l'URL suivante et s'identifier si nécessaire.
3 informations doivent être indiquées pour s'identifier: l'identifiant du compte (account ID), le nom d'utilisateur et le mot de passe.

https://s3.console.aws.amazon.com/s3/buckets/biopocket-data/images/?region=us-east-1&tab=overview

Vérifier de bien être dans le dossier `images` du bucket `biopocket-data`.
Le bouton **Upload** ouvre une fenêtre où l'on peut mettre les images à ajouter ou remplacer.

![Images AWS S3 Bucket](docs/images/images-bucket.png)

Lors de l'étape 2 **Set Permissions**, il est important de permettre l'accès public aux images (`Grant public read access to this object(s)`).
Sinon, elles ne seront pas disponibles publiquement.
L'avertissement affiché en-dessous est normal.

![Images Public Access](docs/images/images-public-access.png)

Une fois l'image (ou les images) envoyées, on peut accéder au lien d'une image en la sélectionnant dans la liste pour ouvrir les détails.
Ouvrir ce lien dans le navigateur devrait afficher l'image.

![Images URL](docs/images/images-url.png)

Si le lien mène vers une page indiquant une erreur `Access Denied`, c'est que les permissions de l'image n'ont pas été configurées correctement.
Il est possible de les corriger après coup en sélectionnant l'image dans la liste puis en cliquant sur le bouton **Make public** dans le menu déroulant **Actions**.

![Make an Image Public](docs/images/images-make-public.png)
