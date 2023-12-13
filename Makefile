build:
	pnpm build
	# https://blog.csdn.net/qq_38048756/article/details/120151920
	touch .nojekyll
	mv .nojekyll ./docs
	git add docs/
	git ci -m "make pkg"