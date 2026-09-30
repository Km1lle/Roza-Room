// Tri et filtres des grilles de cartes (_includes/grille-filtrable.html).
// Chaque carte (.column) porte data-date, data-statut, data-projet et data-tags (séparés par « | »).
(function () {
    document.querySelectorAll("[data-filtrable]").forEach(function (bloc) {
        if (bloc.dataset.filtrableActif) return;
        bloc.dataset.filtrableActif = "1";

        var grille = bloc.querySelector(".columns");
        var barre = bloc.querySelector(".filtres");
        if (!grille || !barre) return;

        var cartes = Array.prototype.slice.call(grille.children);
        cartes.forEach(function (c, i) { c.dataset.ordre = i; });

        var etat = { tri: "desc", statut: "", projet: "", tag: "" };
        var vide = bloc.querySelector(".filtres-vide");

        function correspond(carte) {
            var tags = (carte.dataset.tags || "").split("|");
            return (!etat.statut || carte.dataset.statut === etat.statut)
                && (!etat.projet || carte.dataset.projet === etat.projet)
                && (!etat.tag || tags.indexOf(etat.tag) !== -1);
        }

        function appliquer() {
            // Du plus récent au plus ancien, ordre d'origine en cas d'égalité ;
            // « plus anciens » = l'ordre exactement inverse.
            var triees = cartes.slice().sort(function (a, b) {
                return (Number(b.dataset.date) || 0) - (Number(a.dataset.date) || 0)
                    || a.dataset.ordre - b.dataset.ordre;
            });
            if (etat.tri === "asc") triees.reverse();

            var visibles = 0;
            triees.forEach(function (carte) {
                grille.appendChild(carte);
                carte.hidden = !correspond(carte);
                if (!carte.hidden) visibles++;
            });
            if (vide) vide.hidden = visibles > 0;
        }

        barre.querySelectorAll("[data-filtre]").forEach(function (bouton) {
            bouton.addEventListener("click", function () {
                var groupe = bouton.dataset.filtre;
                etat[groupe] = bouton.dataset.valeur;
                barre.querySelectorAll('[data-filtre="' + groupe + '"]').forEach(function (b) {
                    var actif = b === bouton;
                    b.classList.toggle("is-active", actif);
                    b.setAttribute("aria-pressed", actif);
                });
                appliquer();
            });
        });

        barre.hidden = false;
    });
})();
