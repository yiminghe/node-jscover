#!/bin/bash
MOCHA=node_modules/.bin/mocha
ISTANBUL=node_modules/.bin/istanbul
COVERALLS=node_modules/coveralls/bin/coveralls.js
# test files must start with "*-spec.js"
TESTS=$(shell find test/ -name "*-spec.js")
all: test test-coverage test-coveralls

.PHONY: test test-coverage test-coveralls

test:
	$(MOCHA) -R spec $(TESTS)

test-coverage:
	# Remove libcov if exits
	rm -rf lib-cov/
	rm -rf html-report/
	$(ISTANBUL) instrument lib/ -o lib-cov/
	TODO_COV=1 ISTANBUL_REPORTERS=lcov,text-summary,html $(MOCHA) --reporter mocha-istanbul $(TESTS)

test-coveralls:
	echo TRAVIS_JOB_ID $(TRAVIS_JOB_ID)
	cat lcov.info | $(COVERALLS)