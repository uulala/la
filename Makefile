.PHONY: dist test
default: help

install-cn:
	npm install --registry=http://registry.npm.taobao.org

serve:
	npm run serve

new:
	node build/bin/new.js $(filter-out $@,$(MAKECMDGOALS))
