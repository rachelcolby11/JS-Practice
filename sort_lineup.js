
// INSERTION SORT (stable sort)
// Time complexity O(n^2) Space complexity O(1)
// Advantage: less work per element. Less work for nearly sorted input.
//
// Triangular execution pattern. Sorted region grows from length 1 to entire array.
// Outer loop picks up the unsorted element at interface between sorted and unsorted;
// inner loop walks sorted region to identify where that element belongs. Inner loop
// shifts elements as it walks until it finds the new home.
function insertionSort(ar) {
  var i, j, k, val, lim=ar.length;
  for (i=1 ; i<lim ; ++i) {
    val = ar[  j = i  ];   k = j-1;
    while (j && ar[k]>val)  ar[j--] = ar[k--];
    ar[j] = val;
  }
  return ar;
}
// //starts at first element - index 1
// i and j for comparison


// Set index k to what k is (?)

--------------------------

// JAVASCRIPT SORT (non-stable sort) <--- this is the JS native sort.

// Time complexity O(n log n) Space complexity O(log n)
// JavaScript V8 implementation uses quicksort and insertion sort
function javascriptSort(ar) {
  return ar.sort( function(a,b){return a-b;} );
}