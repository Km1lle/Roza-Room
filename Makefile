.PHONY: serve build install clean

# Lance le site en local sur http://localhost:4000 avec rechargement automatique
serve:
	bundle exec jekyll serve --livereload

# Construit le site dans _site/
build:
	bundle exec jekyll build

# Installe les dépendances Ruby (à faire une fois, ou après un changement du Gemfile)
install:
	bundle install

# Supprime le site généré et les caches
clean:
	bundle exec jekyll clean
