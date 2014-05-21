#!/bin/bash
MOCHA = ./node_modules/.bin/mocha
_MOCHA = ./node_modules/.bin/_mocha
ISTANBUL = ./node_modules/.bin/istanbul
COVERALLS = ./node_modules/coveralls/bin/coveralls.js
TESTS = test/spec/

all: test test-coverage test-coveralls

.PHONY: test test-coverage test-coveralls

test:
	$(MOCHA) -R spec $(TESTS)

test-coverage:
	# Remove libcov if exits
	$(ISTANBUL) cover $(_MOCHA) --report lcovonly,text-summary,html -- -R spec $(TESTS)

test-coveralls:
	cat ./coverage/lcov.info | $(COVERALLS)