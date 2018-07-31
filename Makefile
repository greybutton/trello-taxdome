install: install-deps

develop:
	npm start

install-deps:
	npm install

build:
	npm run build

test:
	npm test

lint:
	npm run lint .

publish:
	npm publish

.PHONY: test
