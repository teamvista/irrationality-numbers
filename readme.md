Irrationality Numbers
---------------------

**Disclaimer**:  
This project will not make sense to most people. It's basically an inside joke 
made between [@mint-cipher](https://github.com/mint-cipher) and I in early 
2012.

### Description

This site calculates standard (tier-1) irrationality numbers given a number or 
string.

The tier-n irrationality number of an integer *x* is defined as follows:

The *x*th digit of *e*, concatenated with the *x*th digit of pi, concatenated 
with the *x*th digit of phi, concatenated with the *x*th digit of
sqrt[the (a-3)th prime] for all positive integers *a* such that *a* + 3 ≤ *n*.

`/hashmap` converts a string to the sum of the letters in the string (where
a=1, b=2, c=3, ..., z=26). Has nothing to do with the data structure of the
same name.

`/irrnum` computes the standard irrationality number for any integer between
1 and 10000, inclusive.

`/hashnum` returns the irrationality number of a `/hashmap` converted string,
effectively combining the `/hashmap` and `/irrnum` functions.

