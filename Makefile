#!/bin/bash
MOCHA=./node_modules/.bin/mocha
ISTANBUL=./node_modules/.bin/istanbul
COVERALLS=./node_modules/coveralls/bin/coveralls.js
# test files must start with "*-spec.js"
TESTS=$(shell find test/ -name "*-spec.js")
all: test test-coverage test-coveralls

.PHONY: test test-coverage test-coveralls

test:
	$(MOCHA) -R spec $(TESTS)

test-coverage:
	# Remove libcov if exits
	$(ISTANBUL) cover ./node_modules/mocha/bin/_mocha --report lcovonly,text-summary,html -- -R spec

test-coveralls:
	cat ./coverage/lcov.info | $(COVERALLS)