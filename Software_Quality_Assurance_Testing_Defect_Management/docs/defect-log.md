# Defect Log

## Bug ID: 001
Title: Incorrect addition result

Description:
The add function returns incorrect output.

Steps to Reproduce:
1. Call add(2, 3)

Expected Result:
5

Actual Result:
-1

Severity:
High

Status:
Open

## Bug ID: 002
Title: Division by zero not handled

Description:
The divide function does not validate divisor.

Steps to Reproduce:
1. Call divide(5, 0)

Expected Result:
Error should be thrown

Actual Result:
Returns Infinity

Severity:
Medium

Status:
Open