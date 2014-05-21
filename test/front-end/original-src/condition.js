function x(x1, y1, fn) {
    x1 = x1 > y1 ? 1 : 2;
    x1 = x1 > y1 ? x1 || y1 : x1;
    x1 = x1 > y1;
    x1 < y1;
    fn(x1 === y1);
}